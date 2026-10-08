/*
╔═════════════════════════╗
║       🌀  𝑳𝒖𝒏𝒂-𝑴𝑫 🌀          ║
╚════════════════════════╝


╭──────「 🜲 𝑪𝑹𝑬𝑫𝑰𝑻𝑺 🜲 」──────╮
│ 👑 𝑪𝒓𝒆𝒂𝒕𝒐𝒓 : noxXza.exe
│ 🎵 𝑻𝒊𝒌𝑻𝒐𝒌  : https://tiktok.com/@lunamdofficial
│ ▶️ 𝒀𝒐𝒖𝑻𝒖𝒃𝒆 : https://youtube.com/@lunamdofficial
│ 📢 𝑾𝒉𝒂𝒕𝒔𝑨𝒑𝒑 : https://whatsapp.com/channel/0029VbD8x4q1dAw0XWN7wF0L
╰──────────────────────────╯


     ⚠️ 𝑫𝑶 𝑵𝑶𝑻 𝑹𝑬𝑴𝑶𝑽𝑬 𝑪𝑹𝑬𝑫𝑰𝑻 ⚠️
         ❖ 𝐉𝐚𝐧𝐠𝐚𝐧 𝐡𝐚𝐩𝐮𝐬 𝐜𝐫𝐞𝐝𝐢𝐭 ❖

    「 🌀 © 𝑳𝑼𝑵𝑨 - 𝑴𝑫 • 𝟐𝟎𝟐𝟔 🌀 」
*/

const fs = require('fs');
const fsp = fs.promises;
const path = require('path');
const pino = require('pino');

const {
    default: WAConnection,
    useMultiFileAuthState,
    makeCacheableSignalKeyStore,
    DisconnectReason,
    generateWAMessageFromContent,
    proto,
    makeInMemoryStore
} = require('noxleyss');

const { MessagesUpsert, Solving } = require('./message');

const SESSION_ROOT = path.join(process.cwd(), 'session', 'jadibot');
const MAX_JADIBOT = global.maxJadibot;
const RECONNECT_MAX_DELAY = 30000;
const PAIRING_TIMEOUT = 120000;
const SOCKET_READY_TIMEOUT = 20000;

function normalizeNumber(value = '') {
    return String(value)
        .replace(/@s\.whatsapp\.net$/i, '')
        .replace(/:\d+(?=@|$)/, '')
        .replace(/\D/g, '');
}

function toJid(number) {
    const clean = normalizeNumber(number);
    return clean ? `${clean}@s.whatsapp.net` : '';
}

function safeStatusCode(error) {
    return error?.output?.statusCode ?? error?.statusCode ?? error?.data?.statusCode;
}

class JadibotManager {
    constructor() {
        this.entries = new Map();
        this.mainSock = null;
        this.commandHandler = null;
        this.restorePromise = null;
        this.restored = false;
        this.version = null;
        this.versionPromise = null;
    }

    get max() {
        return Number(global.maxJadibot || MAX_JADIBOT);
    }

    get activeCount() {
        return this.entries.size;
    }

    get list() {
        return [...this.entries.values()];
    }

    setRuntime(mainSock, commandHandler) {
        if (mainSock !== undefined) {
            this.mainSock = mainSock || null;
            for (const entry of this.entries.values()) {
                entry.mainSock = this.mainSock;
            }
        }
        if (commandHandler) this.commandHandler = commandHandler;
    }

    getMainNumber(mainSock = this.mainSock) {
        return normalizeNumber(mainSock?.user?.id || mainSock?.user?.jid || '');
    }

    async waitForSocketReady(luna, timeout = SOCKET_READY_TIMEOUT) {
        const started = Date.now();
        while (luna?.ws?.isOpen !== true) {
            if (Date.now() - started >= timeout) {
                throw new Error('Transport WhatsApp belum siap untuk pairing.');
            }
            await new Promise(resolve => setTimeout(resolve, 250));
        }
    }

    sessionDir(ownerJid) {
        return path.join(SESSION_ROOT, normalizeNumber(ownerJid));
    }

    async ensureRoot() {
        await fsp.mkdir(SESSION_ROOT, { recursive: true });
    }

    async getVersion(mainSock) {
        if (this.version) return this.version;
        if (this.versionPromise) return this.versionPromise;

        this.versionPromise = (async () => {
            try {
                const candidate = mainSock?.__lunaWaVersion;
                if (Array.isArray(candidate) && candidate.length) {
                    this.version = candidate;
                    return candidate;
                }

                const res = await fetch(
                    'https://raw.githubusercontent.com/WhiskeySockets/Baileys/master/src/Defaults/baileys-version.json',
                    { signal: AbortSignal.timeout(15000) }
                );
                const data = await res.json();
                if (Array.isArray(data?.version)) this.version = data.version;
            } catch (error) {
            } finally {
                this.versionPromise = null;
            }
            return this.version;
        })();

        return this.versionPromise;
    }

    async start(hostSock, ownerJid, commandHandler, replyContext = null) {
        const hostIsClone = Boolean(hostSock?.isJadibot);
        if (!hostIsClone) this.setRuntime(hostSock, commandHandler);

        const jid = toJid(ownerJid);
        const number = normalizeNumber(ownerJid);

        if (!jid || !number) {
            return { ok: false, message: '❌ Nomor WhatsApp tidak valid.' };
        }

        const mainNumber = this.getMainNumber(this.mainSock);
        if (mainNumber && number === mainNumber) {
            return {
                ok: false,
                message: '❌ Nomor ini adalah nomor bot utama. Gunakan nomor WhatsApp lain untuk Jadibot.'
            };
        }

        const hostNumber = normalizeNumber(hostSock?.user?.id || hostSock?.user?.jid || hostSock?.jadibotOwnerJid || '');
        if (hostNumber && number === hostNumber) {
            return {
                ok: false,
                message: '❌ Nomor ini sedang menjadi bot yang aktif. Gunakan nomor WhatsApp lain untuk membuat clone baru.'
            };
        }

        if (this.entries.has(jid)) {
            const entry = this.entries.get(jid);
            return {
                ok: false,
                already: true,
                message: entry.status === 'online'
                    ? '❌ Kamu sudah menjadi *Jadibot* dan sedang online.'
                    : '⏳ Sesi Jadibot kamu masih dalam proses koneksi.'
            };
        }

        if (this.activeCount >= this.max) {
            return {
                ok: false,
                limit: true,
                message: `❌ Limit Jadibot penuh.\n\nMaksimal hanya *${this.max} orang* yang dapat aktif sebagai Jadibot.`
            };
        }

        await this.ensureRoot();

        const sessionDir = this.sessionDir(jid);
        const credsPath = path.join(sessionDir, 'creds.json');

        if (fs.existsSync(sessionDir) && fs.existsSync(credsPath)) {
            try {
                const raw = await fsp.readFile(credsPath, 'utf8');
                const creds = JSON.parse(raw);

                if (!creds?.registered) {
                    await fsp.rm(sessionDir, { recursive: true, force: true });
                }
            } catch {
                await fsp.rm(sessionDir, { recursive: true, force: true });
            }
        }

        const pairingJid = replyContext?.chat || jid;

        const entry = {
            jid,
            number,
            pairingJid,
            requesterJid: normalizeNumber(replyContext?.sender || replyContext?.participant || ''),
            sessionDir,
            mainSock: hostSock,
            parentJid: hostIsClone ? (hostSock.jadibotOwnerJid || hostSock.user?.id || '') : null,
            commandHandler,
            status: 'starting',
            luna: null,
            store: makeInMemoryStore({ logger: pino({ level: 'silent' }) }),
            saveCreds: null,
            creds: null,
            reconnectTimer: null,
            pairingTimer: null,
            pairingTimeoutTimer: null,
            reconnectAttempt: 0,
            stopping: false,
            opened: false,
            pairingSent: false,
            createdAt: Date.now()
        };

        this.entries.set(jid, entry);

        try {
            await this.connect(entry, replyContext);
            return {
                ok: true,
                pending: true,
                message: ''
            };
        } catch (error) {
            await this.cleanupEntry(entry, { removeSession: true });
            return {
                ok: false,
                message: `❌ Gagal memulai Jadibot: ${error?.message || error}`
            };
        }
    }

    async connect(entry, replyContext = null) {
        if (entry.stopping) return;
        entry.status = entry.opened ? 'reconnecting' : 'connecting';

        const { state, saveCreds } = await useMultiFileAuthState(entry.sessionDir);
        entry.saveCreds = saveCreds;
        entry.creds = state.creds;

        const version = await this.getVersion(entry.mainSock);

        const socketOptions = {
            logger: pino({ level: 'silent' }),
            printQRInTerminal: false,
            auth: {
                creds: state.creds,
                keys: makeCacheableSignalKeyStore(
                    state.keys,
                    pino().child({ level: 'silent', stream: 'jadibot-store' })
                )
            },
            syncFullHistory: false,
            markOnlineOnConnect: true,
            emitOwnEvents: false,
            connectTimeoutMs: 60000,
            defaultQueryTimeoutMs: 60000,
            keepAliveIntervalMs: 10000,
            generateHighQualityLinkPreview: false,
            browser: ['Ubuntu', 'Chrome', '20.0.04']
        };

        if (version) socketOptions.version = version;

        const cloneSock = WAConnection(socketOptions);
        entry.luna = cloneSock;
        cloneSock.isJadibot = true;
        cloneSock.jadibotOwnerJid = entry.jid;

        for (const child of this.entries.values()) {
            if (child.parentJid === entry.jid && child !== entry && !child.stopping) {
                child.mainSock = cloneSock;
            }
        }

        await entry.store.bind(cloneSock.ev);
        await Solving(cloneSock, entry.store);

        const onCredsUpdate = async (update) => {
            try {
                await entry.saveCreds(update);
            } catch (error) {
                console.error(`[JADIBOT ${entry.number}] creds.save:`, error);
            }
        };

        const onMessagesUpsert = async (update) => {
            if (entry.stopping || entry.luna !== cloneSock) return;
            if (!update?.messages?.length) return;

            try {
                const handler = entry.commandHandler || this.commandHandler;
                if (typeof handler !== 'function') {
                    console.error(`[JADIBOT ${entry.number}] command handler tidak tersedia.`);
                    return;
                }
                await MessagesUpsert(
                    cloneSock,
                    update,
                    entry.store,
                    handler
                );
            } catch (error) {
                console.error(`[JADIBOT ${entry.number}] message:`, error);
            }
        };

        const onConnectionUpdate = async (update) => {
            if (entry.luna !== cloneSock || entry.stopping) return;

            const { connection, lastDisconnect } = update || {};

            if (connection === 'open') {
                entry.status = 'online';
                entry.opened = true;
                entry.reconnectAttempt = 0;
                entry.pairingSent = false;

                for (const child of this.entries.values()) {
                    if (child.parentJid === entry.jid && !child.stopping) {
                        child.mainSock = cloneSock;
                    }
                }

                if (entry.pairingTimer) {
                    clearTimeout(entry.pairingTimer);
                    entry.pairingTimer = null;
                }
                if (entry.pairingTimeoutTimer) {
                    clearTimeout(entry.pairingTimeoutTimer);
                    entry.pairingTimeoutTimer = null;
                }

                await this.notify(
                    entry,
                    `✅ *Jadibot berhasil terhubung!*\n\nNomor: *${entry.number}*\nStatus: *Online*\n\nBot clone sekarang siap digunakan.`
                );
                return;
            }

            if (connection !== 'close') return;

            const statusCode = safeStatusCode(lastDisconnect?.error);

            if (entry.pairingTimer) {
                clearTimeout(entry.pairingTimer);
                entry.pairingTimer = null;
            }
            
            const closedSock = cloneSock;

            if (entry.listeners) {
                for (const [event, fn] of [
                    ['creds.update', entry.listeners.onCredsUpdate],
                    ['messages.upsert', entry.listeners.onMessagesUpsert],
                    ['connection.update', entry.listeners.onConnectionUpdate]
                ]) {
                    try {
                        if (typeof closedSock.ev?.off === 'function') closedSock.ev.off(event, fn);
                        else if (typeof closedSock.ev?.removeListener === 'function') closedSock.ev.removeListener(event, fn);
                    } catch {}
                }
                entry.listeners = null;
            }

            entry.luna = null;

            if (statusCode === DisconnectReason.loggedOut) {
                entry.status = 'logged_out';
                await this.notify(entry, '⚠️ Sesi Jadibot logout. Session lama telah dihapus.');
                await this.cleanupEntry(entry, { removeSession: true });
                return;
            }

            if (entry.stopping) return;

            entry.status = 'reconnecting';
            entry.reconnectAttempt += 1;
            const delay = Math.min(
                RECONNECT_MAX_DELAY,
                2000 * Math.pow(2, Math.min(entry.reconnectAttempt - 1, 4))
            );

            if (entry.reconnectTimer) clearTimeout(entry.reconnectTimer);

            entry.reconnectTimer = setTimeout(async () => {
                entry.reconnectTimer = null;
                if (entry.stopping || this.entries.get(entry.jid) !== entry) return;

                try {
                    await this.connect(entry);
                } catch (error) {
                    console.error(`[JADIBOT ${entry.number}] reconnect:`, error);
                    entry.reconnectAttempt += 1;
                    this.scheduleReconnect(entry);
                }
            }, delay);

            entry.reconnectTimer.unref?.();
        };

        entry.listeners = {
            onCredsUpdate,
            onMessagesUpsert,
            onConnectionUpdate
        };

        cloneSock.ev.on('creds.update', onCredsUpdate);
        cloneSock.ev.on('messages.upsert', onMessagesUpsert);
        cloneSock.ev.on('connection.update', onConnectionUpdate);
        if (!state.creds.registered) {
            entry.pairingTimer = setTimeout(() => {
                entry.pairingTimer = null;
                this.sendPairingCode(entry).catch(error => {
                    console.error(`[JADIBOT ${entry.number}] pairing:`, error);
                });
            }, 1000);
            entry.pairingTimer.unref?.();
            entry.pairingTimeoutTimer = setTimeout(() => {
                if (entry.stopping || entry.opened || entry.creds?.registered) return;
                this.cleanupEntry(entry, { removeSession: true }).catch(error => {
                    console.error(`[JADIBOT ${entry.number}] pairing timeout cleanup:`, error);
                });
            }, PAIRING_TIMEOUT);
            entry.pairingTimeoutTimer.unref?.();
        }
    }

    scheduleReconnect(entry) {
        if (entry.stopping || entry.reconnectTimer) return;

        const delay = Math.min(
            RECONNECT_MAX_DELAY,
            2000 * Math.pow(2, Math.min(Math.max(entry.reconnectAttempt - 1, 0), 4))
        );

        entry.reconnectTimer = setTimeout(async () => {
            entry.reconnectTimer = null;
            if (entry.stopping || this.entries.get(entry.jid) !== entry) return;

            try {
                await this.connect(entry);
            } catch (error) {
                console.error(`[JADIBOT ${entry.number}] reconnect:`, error);
                entry.reconnectAttempt += 1;
                this.scheduleReconnect(entry);
            }
        }, delay);

        entry.reconnectTimer.unref?.();
    }

    async sendPairingCode(entry) {
        if (entry.stopping || entry.opened || entry.pairingSent) return;
        if (!entry.luna || !entry.creds) return;

        try {
            if (entry.creds.registered) return;

            await this.waitForSocketReady(entry.luna);
            if (entry.stopping || entry.luna == null || entry.creds.registered) return;

            const rawCode = await entry.luna.requestPairingCode(entry.number);
            if (!rawCode || entry.stopping) return;

            entry.pairingSent = true;

            const displayCode = String(rawCode).replace(/-/g, '').match(/.{1,4}/g)?.join('-') || rawCode;
            const pairingJid = entry.pairingJid || entry.jid;
            const mainSock = entry.mainSock || this.mainSock;

            if (!mainSock || !pairingJid) {
                entry.pairingSent = false;
                return;
            }

            const pairingMessage = generateWAMessageFromContent(pairingJid, {
                viewOnceMessage: {
                    message: {
                        messageContextInfo: {
                            deviceListMetadata: {},
                            deviceListMetadataVersion: 2
                        },
                        interactiveMessage: proto.Message.InteractiveMessage.create({
                            body: proto.Message.InteractiveMessage.Body.create({
                                text:
                                    `*[ LUNA-MD • JADIBOT ]*\n\n` +
                                    `Kode Pairing Kamu:\n*${displayCode}*\n\n` +
                                    `Buka WhatsApp > Perangkat Tertaut > Tautkan dengan nomor telepon.\n\n`
                            }),
                            nativeFlowMessage: proto.Message.InteractiveMessage.NativeFlowMessage.create({
                                buttons: [
                                    {
                                        name: 'cta_copy',
                                        buttonParamsJson: JSON.stringify({
                                            display_text: 'Copy Kode Pairing',
                                            id: 'copy_pairing_code',
                                            copy_code: String(rawCode).replace(/-/g, '')
                                        })
                                    },
                                    {
                                        name: 'quick_reply',
                                        buttonParamsJson: JSON.stringify({
                                        display_text: '❌ Batal Jadibot',
                                        id: '.bataljadibot'
                                        })
                                    }
                                ]
                            })
                        })
                    }
                }
            }, {
                userJid: pairingJid
            });

            await mainSock.relayMessage(pairingMessage.key.remoteJid, pairingMessage.message, {
                messageId: pairingMessage.key.id
            });
        } catch (error) {
            entry.pairingSent = false;
            await this.notify(
                entry,
                `❌ Gagal meminta kode pairing: ${error?.message || error}`,
                entry.pairingJid || entry.jid
            );
        }
    }

    async notify(entry, text, targetJid = null) {
        const luna = this.mainSock || entry.mainSock;
        const jid = targetJid || entry.jid;
        if (!luna || !jid) return;

        try {
            if (luna.ws?.isOpen === false) return;
            await luna.sendMessage(jid, { text });
        } catch (error) {
            console.error(`[JADIBOT ${entry.number}] notify:`, error?.message || error);
        }
    }

    async cancelByRequester(requesterJid = '') {
        const requesterNumber = normalizeNumber(requesterJid);
        if (!requesterNumber) {
            return { ok: false, message: '❌ Pengirim proses Jadibot tidak ditemukan.' };
        }

        let candidate = null;
        for (const entry of this.entries.values()) {
            if (entry.requesterJid === requesterNumber && !entry.stopping) {
                if (!candidate || entry.createdAt > candidate.createdAt) candidate = entry;
            }
        }

        if (!candidate) {
            return { ok: false, message: '❌ Tidak ada proses Jadibot yang sedang menunggu pairing.' };
        }

        await this.cleanupEntry(candidate, { removeSession: true });
        return { ok: true, removedSession: true, number: candidate.number };
    }

    async cancelByTarget(targetNumber, requesterJid = '') {
        const targetJid = toJid(targetNumber);
        const requesterNumber = normalizeNumber(requesterJid);
        const entry = this.entries.get(targetJid);

        if (entry) {
            if (entry.requesterJid && requesterNumber && entry.requesterJid !== requesterNumber) {
                return { ok: false, unauthorized: true, message: '❌ Kamu bukan pemilik proses Jadibot ini.' };
            }

            await this.cleanupEntry(entry, { removeSession: true });
            return { ok: true, removedSession: true };
        }

        const sessionDir = this.sessionDir(targetJid);
        if (fs.existsSync(sessionDir)) {
            await fsp.rm(sessionDir, { recursive: true, force: true });
            return { ok: true, removedSession: true };
        }

        return { ok: false, message: '❌ Proses Jadibot tidak ditemukan.' };
    }

    async stop(ownerJid, removeSession = true) {
        const jid = toJid(ownerJid);
        const entry = this.entries.get(jid);
        const sessionDir = this.sessionDir(jid);

        if (!entry) {
            if (removeSession && fs.existsSync(sessionDir)) {
                await fsp.rm(sessionDir, { recursive: true, force: true });
                return { ok: true, removedSession: true };
            }
            return { ok: false, message: '❌ Kamu tidak memiliki Jadibot yang aktif.' };
        }

        entry.stopping = true;
        entry.status = 'stopping';

        await this.clearEntryTimers(entry);
        await this.detachListeners(entry);

        try {
            await entry.luna?.end?.();
        } catch {}

        entry.luna = null;
        this.entries.delete(jid);

        if (removeSession) {
            await fsp.rm(sessionDir, { recursive: true, force: true }).catch(() => {});
        }

        return { ok: true };
    }

    async cleanupEntry(entry, options = {}) {
        entry.stopping = true;
        await this.clearEntryTimers(entry);
        await this.detachListeners(entry);

        try {
            await entry.luna?.end?.();
        } catch {}

        entry.luna = null;
        this.entries.delete(entry.jid);

        if (options.removeSession) {
            await fsp.rm(entry.sessionDir, { recursive: true, force: true }).catch(() => {});
        }
    }

    async clearEntryTimers(entry) {
        if (entry.pairingTimer) {
            clearTimeout(entry.pairingTimer);
            entry.pairingTimer = null;
        }

        if (entry.pairingTimeoutTimer) {
            clearTimeout(entry.pairingTimeoutTimer);
            entry.pairingTimeoutTimer = null;
        }

        if (entry.reconnectTimer) {
            clearTimeout(entry.reconnectTimer);
            entry.reconnectTimer = null;
        }
    }

    async detachListeners(entry) {
        const luna = entry.luna;
        const listeners = entry.listeners;
        if (!luna?.ev || !listeners) return;

        for (const [event, fn] of [
            ['creds.update', listeners.onCredsUpdate],
            ['messages.upsert', listeners.onMessagesUpsert],
            ['connection.update', listeners.onConnectionUpdate]
        ]) {
            if (!fn) continue;
            try {
                if (typeof luna.ev.off === 'function') luna.ev.off(event, fn);
                else if (typeof luna.ev.removeListener === 'function') luna.ev.removeListener(event, fn);
            } catch {}
        }

        entry.listeners = null;
    }

    async listActive() {
        return this.list.map((entry, index) => ({
            no: index + 1,
            jid: entry.jid,
            number: entry.number,
            status: entry.status,
            uptime: Date.now() - entry.createdAt
        }));
    }

    async restore(mainSock, commandHandler) {
        this.setRuntime(mainSock, commandHandler);

        if (this.restorePromise) return this.restorePromise;
        if (this.restored) return;

        this.restorePromise = (async () => {
            await this.ensureRoot();

            const names = await fsp.readdir(SESSION_ROOT, { withFileTypes: true }).catch(() => []);
            let restoredCount = 0;

            for (const item of names) {
                if (!item.isDirectory()) continue;
                if (restoredCount >= this.max) break;

                const number = normalizeNumber(item.name);
                if (!number) continue;

                const jid = toJid(number);
                if (this.entries.has(jid)) continue;
                if (this.getMainNumber(mainSock) === number) {
                    await fsp.rm(this.sessionDir(jid), { recursive: true, force: true }).catch(() => {});
                    continue;
                }

                const sessionDir = this.sessionDir(jid);
                const credsPath = path.join(sessionDir, 'creds.json');

                try {
                    const raw = await fsp.readFile(credsPath, 'utf8');
                    const creds = JSON.parse(raw);

                    if (!creds?.registered) {
                        await fsp.rm(sessionDir, { recursive: true, force: true });
                        continue;
                    }

                    const entry = {
                        jid,
                        number,
                        pairingJid: jid,
                        sessionDir,
                        mainSock,
                        parentJid: null,
                        commandHandler,
                        status: 'restoring',
                        luna: null,
                        store: makeInMemoryStore({ logger: pino({ level: 'silent' }) }),
                        saveCreds: null,
                        creds: null,
                        reconnectTimer: null,
                        pairingTimer: null,
            pairingTimeoutTimer: null,
                        reconnectAttempt: 0,
                        stopping: false,
                        opened: false,
                        pairingSent: false,
                        createdAt: Date.now()
                    };

                    this.entries.set(jid, entry);

                    try {
                        await this.connect(entry);
                        restoredCount++;
                    } catch (error) {
                        console.error(`[JADIBOT ${number}] restore:`, error);
                        await this.cleanupEntry(entry, { removeSession: false });
                    }
                } catch (error) {
                    console.warn(`[JADIBOT ${number}] invalid session:`, error?.message || error);
                    await fsp.rm(sessionDir, { recursive: true, force: true }).catch(() => {});
                }
            }

            this.restored = true;
        })();

        try {
            await this.restorePromise;
        } finally {
            this.restorePromise = null;
        }
    }
}

module.exports = new JadibotManager();
module.exports.JadibotManager = JadibotManager;
module.exports.MAX_JADIBOT = MAX_JADIBOT;
