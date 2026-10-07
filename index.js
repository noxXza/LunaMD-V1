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

require('./settings');
const fs = require('fs');
const pino = require('pino');
const path = require('path');
const axios = require('axios');
const chalk = require('chalk');
const readline = require('readline');
const FileType = require('file-type');
const { exec } = require('child_process');
const { say } = require('cfonts')
const { Boom } = require('@hapi/boom');
const pw = "p";

const { default: WAConnection, generateWAMessageFromContent, 
prepareWAMessageMedia, useMultiFileAuthState, Browsers, DisconnectReason, makeInMemoryStore, makeCacheableSignalKeyStore, fetchLatestWaWebVersion, proto, PHONENUMBER_MCC, getAggregateVotesInPollMessage } = require('noxleyss');

const pairingCode = true

let currentSock = null
let reconnecting = false
let reconnectTimer = null
let reconnectAttempt = 0

const rl = readline.createInterface({ input: process.stdin, output: process.stdout })
const question = (text) => new Promise((resolve) => rl.question(text, resolve))

const DataBase = require('./source/database');
const database = new DataBase()
const databaseReady = (async () => {
    const loadData = await database.read()
    global.db = {
        users: {},
        groups: {},
        database: {},
        settings: {},
        ...(loadData || {})
    }

    if (!loadData || Object.keys(loadData).length === 0) {
        await database.write(global.db)
    }

    return global.db
})()

let databaseSaveTimer = null
let databaseSaveRunning = false
let databaseSaveQueued = false
let lastDatabaseSnapshot = ''

const scheduleDatabaseSave = () => {
    databaseSaveQueued = true
    if (databaseSaveTimer) clearTimeout(databaseSaveTimer)

    databaseSaveTimer = setTimeout(async () => {
        databaseSaveTimer = null
        if (databaseSaveRunning || !databaseSaveQueued || !global.db) return

        databaseSaveRunning = true
        databaseSaveQueued = false
        try {
            const snapshot = JSON.stringify(global.db)
            if (snapshot !== lastDatabaseSnapshot) {
                await database.write(global.db)
                lastDatabaseSnapshot = snapshot
            }
        } catch (error) {
            databaseSaveQueued = true
            console.error('[DATABASE SAVE]', error)
        } finally {
            databaseSaveRunning = false
        }
    }, 2000)

    databaseSaveTimer.unref?.()
}

global.markDatabaseDirty = scheduleDatabaseSave

const databaseWatchTimer = setInterval(scheduleDatabaseSave, 10000)
databaseWatchTimer.unref?.()

const { MessagesUpsert, Solving } = require('./source/message')
const commandHandler = require('./Luna')
const { isUrl, generateMessageTag, getBuffer, getSizeMedia, fetchJson, await, sleep, randomToken } = require('./library/function');
const { welcomeBanner, promoteBanner } = require("./library/welcome.js")
const jadibotManager = require('./source/jadibot')

let waVersionCache = null
let waVersionPromise = null

async function getWaVersion() {
    if (waVersionCache) return waVersionCache
    if (waVersionPromise) return waVersionPromise

    waVersionPromise = (async () => {
        try {
            const response = await fetch('https://raw.githubusercontent.com/WhiskeySockets/Baileys/master/src/Defaults/baileys-version.json')
            const data = await response.json()
            if (Array.isArray(data?.version)) waVersionCache = data.version
        } catch (error) {
            console.error('[WA VERSION]', error)
        } finally {
            waVersionPromise = null
        }
        return waVersionCache
    })()

    return waVersionPromise
}

async function startingBot() {
    await databaseReady
    const waVersion = await getWaVersion()

    if (!lastDatabaseSnapshot && global.db) lastDatabaseSnapshot = JSON.stringify(global.db)

    const store = await makeInMemoryStore({ logger: pino().child({ level: 'silent', stream: 'store' }) })

const { state, saveCreds } = await useMultiFileAuthState('session');
    const luna = WAConnection({
        printQRInTerminal: !pairingCode,
        syncFullHistory: false,
        markOnlineOnConnect: true,
        connectTimeoutMs: 60000,
        defaultQueryTimeoutMs: 60000,
        keepAliveIntervalMs: 10000,
        generateHighQualityLinkPreview: true,
        patchMessageBeforeSending: (message) => {
            const requiresPatch = !!(
                message.buttonsMessage ||
                message.templateMessage ||
                message.listMessage
            );
            if (requiresPatch) {
                message = {
                    viewOnceMessage: {
                        message: {
                            messageContextInfo: {
                                deviceListMetadataVersion: 2,
                                deviceListMetadata: {},
                            },
                            ...message,
                        },
                    },
                };
            }

            return message;
        },
        version: waVersion,
        browser: ["Ubuntu", "Chrome", "20.0.04"],
        logger: pino({
            level: 'silent'
        }),
        auth: {
            creds: state.creds,
            keys: makeCacheableSignalKeyStore(state.keys, pino().child({
                level: 'silent',
                stream: 'store'
            })),
        }
    });

    luna.__lunaWaVersion = waVersion

    currentSock = luna
	
   if (!luna.authState.creds.registered) {
    const password = await question(chalk.yellow.bold(`\nJawab dengan benar\nMasukin pw sc!!\n`));
    if (password !== pw) {
    console.log(`✖️ Access Denied`);
    process.exit();
    }
        const phoneNumber = await question(chalk.cyan.bold('\nplease enter your WhatsApp number, starting with 62xxx:\n'));
       const code = await luna.requestPairingCode(phoneNumber, `${global.pair}`.trim());
        console.log(chalk.bgGreen.black(`your pairing code: ${code}`))
}
	
    luna.ev.on('creds.update', saveCreds)

luna.ev.on('connection.update', async (update) => {
const { connection, lastDisconnect } = update
if (connection === 'close') {
    if (currentSock === luna) currentSock = null

    const statusCode = lastDisconnect?.error?.output?.statusCode
    if (statusCode === DisconnectReason.loggedOut) {
        if (currentSock === luna) currentSock = null
        reconnectAttempt = 0
        reconnecting = false
        jadibotManager.setRuntime(null, commandHandler)
        console.log('[WA] Logged out. Reconnect cancelled.')
        return
    }

    if (reconnecting) return
    if (currentSock === luna) jadibotManager.setRuntime(null, commandHandler)
    reconnecting = true
    reconnectAttempt++
    const delayMs = Math.min(30000, 2000 * Math.pow(2, Math.min(reconnectAttempt - 1, 4)))
    console.log(`[WA] Connection closed (${statusCode ?? 'unknown'}). Reconnecting in ${delayMs}ms...`)

    if (reconnectTimer) clearTimeout(reconnectTimer)
    reconnectTimer = setTimeout(async () => {
        reconnectTimer = null
        try {
            await startingBot()
        } catch (error) {
            console.error('[WA] Reconnect failed:', error)
        } finally {
            reconnecting = false
        }
    }, delayMs)
    reconnectTimer.unref?.()
} else if (connection == 'open') {
    reconnectAttempt = 0
    reconnecting = false
    jadibotManager.setRuntime(luna, commandHandler)
    jadibotManager.restore(luna, commandHandler).catch(error => console.error('[JADIBOT RESTORE]', error))
luna.sendMessage(luna.user.id.split(":")[0] + "@s.whatsapp.net", {text: `${`*Bot Succes Connect*`.toString()}`})
randomToken(luna)
console.log(`
${chalk.red.bold('╔══════════════════════════════════════╗')}
${chalk.red.bold('║')} ${chalk.yellow.bold('</> INFORMATION LUNA-MD </>')}
${chalk.red.bold('║')} ${chalk.cyan.bold('Name')} ${chalk.white(':')} ${chalk.green.bold('LUNA-MD')}
${chalk.red.bold('║')} ${chalk.magenta.bold('Version')} ${chalk.white(':')} ${chalk.yellow.bold('1.0.0')}
${chalk.red.bold('║')} ${chalk.white.bold('Library')} ${chalk.white(':')} ${chalk.white.bold('noxleyss')}
${chalk.red.bold('║')} ${chalk.cyanBright.bold('Creator : noxXza.exe')}
${chalk.red.bold('║')} ${chalk.yellowBright.bold('Status : Success connected')}
${chalk.red.bold('║')} ${chalk.magentaBright.bold('Mode : Public')}
${chalk.red.bold('║')} ${chalk.blueBright.bold('Connection WhatsApp Success')}
${chalk.red.bold('║')} ${chalk.redBright.bold('System Ready To Use')}
${chalk.red.bold('╚══════════════════════════════════════╝')}
`)
  }
})

await store.bind(luna.ev)	
await Solving(luna, store)
jadibotManager.setRuntime(luna, commandHandler)
	
luna.ev.on('messages.upsert', async (message) => {
    if (currentSock !== luna) return
    try {
        await MessagesUpsert(luna, message, store, commandHandler)
    } catch (error) {
        console.error('[MESSAGES_UPSERT]', error)
    }
})

luna.ev.on('contacts.update', (update) => {
if (currentSock !== luna) return
for (let contact of update) {
let id = 
luna.decodeJid(contact.id)
if (store && store.contacts) store.contacts[id] = { id, name: contact.notify }
}})

luna.sendPoll = (jid, name = '', values = [], selectableCount = 1) => {
return luna.sendMessage(jid, { poll: { name, values, selectableCount } })
};    
    
luna.ev.on('group-participants.update', async (update) => {
if (currentSock !== luna) return
const { id, author, participants, action } = update
try {
const qtext = {key: {remoteJid: "status@broadcast", participant: "0@s.whatsapp.net"}, message: { "extendedTextMessage": {"text": "[ 𝗚𝗿𝗼𝘂𝗽 𝗡𝗼𝘁𝗶𝗳𝗶𝗰𝗮𝘁𝗶𝗼𝗻 ]"}}}

if (global.db.groups[id] && global.db.groups[id].welcome == true) {
const metadata = await luna.groupMetadata(id)
let teks
for(let n of participants) {
let profile;
try {
profile = await luna.profilePictureUrl(n, 'image');
} catch {
profile = 'https://telegra.ph/file/95670d63378f7f4210f03.png';
}
if (action == 'add') {
teks = author.split("").length < 1 ? `@${n.split('@')[0]} join via *Selamat Datang Di Grup 🐦‍🔥*

🏷️ *_INFO & UPDATE LUNA-MD_*
${global.linkSaluran}` : author !== n ? `@${author.split("@")[0]} telah *menambahkan* @${n.split('@')[0]} kedalam grup` : ``
let img = await welcomeBanner(profile, n.split("@")[0], metadata.subject, "welcome")
await luna.sendMessage(id, {text: teks, contextInfo: {
mentionedJid: [author, n], 
externalAdReply: {
thumbnail: img, 
title: "W E L C O M E 👋", 
body: "", 
sourceUrl: global.source, 
renderLargerThumbnail: true, 
mediaType: 1
}
}})
} else if (action == 'remove') {
teks = author == n ? `@${n.split('@')[0]} telah *keluar* dari grup` : author !== n ? `@${author.split("@")[0]} telah *mengeluarkan* @${n.split('@')[0]} dari grup` : ""
let img = await welcomeBanner(profile, n.split("@")[0], metadata.subject, "remove")
await luna.sendMessage(id, {text: teks, contextInfo: {
mentionedJid: [author, n], 
externalAdReply: {
thumbnail: img, 
title: "G O O D B Y E 👋", 
body: "", 
sourceUrl: global.source, 
renderLargerThumbnail: true, 
mediaType: 1
}
}})
} else if (action == 'promote') {
teks = author == n ? `@${n.split('@')[0]} telah *menjadi admin* grup ` : author !== n ? `@${author.split("@")[0]} telah *menjadikan* @${n.split('@')[0]} sebagai *admin* grup` : ""
let img = await promoteBanner(profile, n.split("@")[0], "promote")
await luna.sendMessage(id, {text: teks, contextInfo: {
mentionedJid: [author, n], 
externalAdReply: {
thumbnail: img, 
title: "P R O M O T E 📍", 
body: "", 
sourceUrl: global.source, 
renderLargerThumbnail: true, 
mediaType: 1
}
}})
} else if (action == 'demote') {
teks = author == n ? `@${n.split('@')[0]} telah *berhenti* menjadi *admin*` : author !== n ? `@${author.split("@")[0]} telah *menghentikan* @${n.split('@')[0]} sebagai *admin* grup` : ""
let img = await promoteBanner(profile, n.split("@")[0], "demote")
await luna.sendMessage(id, {text: teks, contextInfo: {
mentionedJid: [author, n], 
externalAdReply: {
thumbnail: img, 
title: "D E M O T E 📍", 
body: "", 
sourceUrl: global.source, 
renderLargerThumbnail: true, 
mediaType: 1
}
}})
}}}
} catch (e) {
}
})

return luna

}


startingBot()
