/*
╔═════════════════════════╗
║       🌀  𝑳𝒖𝒏𝒂-𝑴𝑫 🌀             ║
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


require('../settings');
const fs = require('fs');
const path = require('path');
const axios = require('axios');
const chalk = require('chalk');
const FileType = require('file-type');
const PhoneNumber = require('awesome-phonenumber');

const { imageToWebp, videoToWebp, writeExif } = require('../library/exif');
const { isUrl, getGroupAdmins, generateMessageTag, getBuffer, getSizeMedia, fetchJson, sleep, getTypeUrlMedia } = require('../library/function');
const { jidNormalizedUser, proto, getBinaryNodeChildren, getBinaryNodeChild, generateWAMessageContent, generateForwardMessageContent, prepareWAMessageMedia, delay, areJidsSameUser, extractMessageContent, generateMessageID, downloadContentFromMessage, generateWAMessageFromContent, jidDecode, generateWAMessage, toBuffer, getContentType, getDevice } = require('noxleyss');

let extraOwners = [];
try {
	extraOwners = JSON.parse(fs.readFileSync('./library/database/owner.json', 'utf8'));
	if (!Array.isArray(extraOwners)) extraOwners = [];
} catch {
	extraOwners = [];
}

function normalizeOwnerJid(value = '') {
	const raw = String(value || '').trim();
	if (!raw) return '';
	const jid = raw.includes('@') ? raw : `${raw}@s.whatsapp.net`;
	return jid.replace(/:\d+(?=@)/, '');
}

function isConfiguredOwner(jid = '') {
	const normalized = normalizeOwnerJid(jid);
	if (!normalized) return false;

	const owners = [global.owner, ...extraOwners]
		.map(normalizeOwnerJid)
		.filter(Boolean);

	return owners.includes(normalized);
}

function getMessageSenderJid(luna, msg, botNumber) {
	if (msg?.key?.fromMe) return botNumber;
	return luna.decodeJid(msg?.key?.participant || msg?.key?.remoteJid || '');
}

function getInteractiveResponseId(msg) {
	try {
		const paramsJson = msg?.nativeFlowResponseMessage?.paramsJson
		if (!paramsJson) return ''
		const params = typeof paramsJson === 'string' ? JSON.parse(paramsJson) : paramsJson
		return String(params?.id || params?.selected_id || params?.row_id || params?.button_id || '').trim()
	} catch {
		return ''
	}
}

async function MessagesUpsert(luna, message, store, commandHandler) {
	try {
		let botNumber = await luna.decodeJid(luna.user.id);
		const msg = message.messages[0];
		const type = msg.message ? (getContentType(msg.message) || Object.keys(msg.message)[0]) : '';
		
		if (msg.key && msg.key.remoteJid === 'status@broadcast') {
		if (global.db.settings.readsw && global.db.settings.readsw == true) {
		luna.readMessages([msg.key])
		} else return
		}		
		if (!msg.message) return
		if (!luna.public && !msg.key.fromMe && message.type === 'notify') {
			const senderJid = getMessageSenderJid(luna, msg, botNumber);
			if (!isConfiguredOwner(senderJid)) return;
		}
		if (global.db.settings.autoread && global.db.settings.autoread == true) luna.readMessages([msg.key])
		if (global.db.settings.autotyping && global.db.settings.autotyping == true && !msg.key.fromMe) luna.sendPresenceUpdate('composing', msg.key.remoteJid)
		const m = await Serialize(luna, msg, store)
		if (m.isBaileys) return
		if (type === 'interactiveResponseMessage') {
			const interactiveId = getInteractiveResponseId(m.msg)
			if (interactiveId) {
				m.body = interactiveId
				m.text = interactiveId
			}
		}
		
		if (typeof commandHandler === 'function') await commandHandler(luna, m, message, store);


	} catch (e) {
		throw e;
	}
}

async function Solving(luna, store) {
	luna.public = true
	
	luna.serializeM = (m) => MessagesUpsert(luna, m, store)
	
	luna.decodeJid = (jid) => {
		if (!jid) return jid
		if (/:\d+@/gi.test(jid)) {
			let decode = jidDecode(jid) || {}
			return decode.user && decode.server && decode.user + '@' + decode.server || jid
		} else return jid
	}
	
	luna.getName = (jid, withoutContact  = false) => {
		const id = luna.decodeJid(jid);
		if (id.endsWith('@g.us')) {
			const groupInfo = store.contacts[id] || luna.groupMetadata(id) || {};
			return Promise.resolve(groupInfo.name || groupInfo.subject || PhoneNumber('+' + id.replace('@g.us', '')).getNumber('international'));
		} else {
			if (id === '0@s.whatsapp.net') {
				return 'WhatsApp';
			}
		const contactInfo = store.contacts[id] || {};
		return withoutContact ? '' : contactInfo.name || contactInfo.subject || contactInfo.verifiedName || PhoneNumber('+' + id.replace('@s.whatsapp.net', '')).getNumber('international');
		}
	}
	
	
	luna.sendContactV2 = async (jid, kon, desk = "Developer Bot", quoted = '', opts = {}) => {
let list = []
for (let i of kon) {
list.push({
displayName: namaOwner,
  vcard: 'BEGIN:VCARD\n' +
    'VERSION:3.0\n' +
    `N:;${namaOwner};;;\n` +
    `FN:${namaOwner}\n` +
    'ORG:null\n' +
    'TITLE:\n' +
    `item1.TEL;waid=${i}:${i}\n` +
    'item1.X-ABLabel:Ponsel\n' +
    `X-WA-BIZ-DESCRIPTION:${desk}\n` +
    `X-WA-BIZ-NAME:${namaOwner}\n` +
    'END:VCARD'
})
}
luna.sendMessage(jid, { contacts: { displayName: `${list.length} Kontak`, contacts: list }, ...opts }, { quoted })
}
	
	luna.sendContact = async (jid, kon, quoted = '', opts = {}) => {
		let list = []
		for (let i of kon) {
			list.push({
				displayName: await luna.getName(i + '@s.whatsapp.net'),
				vcard: `BEGIN:VCARD\nVERSION:3.0\nN:${await luna.getName(i + '@s.whatsapp.net')}\nFN:${await luna.getName(i + '@s.whatsapp.net')}\nitem1.TEL;waid=${i}:${i}\nitem1.X-ABLabel:Ponsel\nitem2.ADR:;;Indonesia;;;;\nitem2.X-ABLabel:Region\nEND:VCARD`
			})
		}
		luna.sendMessage(jid, { contacts: { displayName: `${list.length} Kontak`, contacts: list }, ...opts }, { quoted })
	}
	
	
	luna.profilePictureUrl = async (jid, type = 'image', timeoutMs) => {
		const result = await luna.query({
			tag: 'iq',
			attrs: {
				target: jidNormalizedUser(jid),
				to: '@s.whatsapp.net',
				type: 'get',
				xmlns: 'w:profile:picture'
			},
			content: [{
				tag: 'picture',
				attrs: {
					type, query: 'url'
				},
			}]
		}, timeoutMs);
		const child = getBinaryNodeChild(result, 'picture');
		return child?.attrs?.url;
	}
	
	luna.setStatus = (status) => {
		luna.query({
			tag: 'iq',
			attrs: {
				to: '@s.whatsapp.net',
				type: 'set',
				xmlns: 'status',
			},
			content: [{
				tag: 'status',
				attrs: {},
				content: Buffer.from(status, 'utf-8')
			}]
		})
		return status
	}
	
	luna.sendFileUrl = async (jid, url, caption, quoted, options = {}) => {
		async function getFileUrl(res, mime) {
			if (mime && mime.includes('gif')) {
				return luna.sendMessage(jid, { video: res.data, caption: caption, gifPlayback: true, ...options }, { quoted });
			} else if (mime && mime === 'application/pdf') {
				return luna.sendMessage(jid, { document: res.data, mimetype: 'application/pdf', caption: caption, ...options }, { quoted });
			} else if (mime && mime.includes('image')) {
				return luna.sendMessage(jid, { image: res.data, caption: caption, ...options }, { quoted });
			} else if (mime && mime.includes('video')) {
				return luna.sendMessage(jid, { video: res.data, caption: caption, mimetype: 'video/mp4', ...options }, { quoted });
			} else if (mime && mime.includes('audio')) {
				return luna.sendMessage(jid, { audio: res.data, mimetype: 'audio/mpeg', ...options }, { quoted });
			}
		}
		
		const res = await axios.get(url, { responseType: 'arraybuffer' });
		let mime = res.headers['content-type'];
		if (!mime || mime === 'application/octet-stream') {
			const fileType = await FileType.fromBuffer(res.data);
			mime = fileType ? fileType.mime : null;
		}
		const hasil = await getFileUrl(res, mime);
		return hasil
	}
	
	luna.sendTextMentions = async (jid, text, quoted, options = {}) => luna.sendMessage(jid, { text: text, mentions: [...text.matchAll(/@(\d{0,16})/g)].map(v => v[1] + '@s.whatsapp.net'), ...options }, { quoted })
	
	luna.sendAsSticker = async (jid, path, quoted, options = {}) => {
		const buff = Buffer.isBuffer(path) ? path : /^data:.*?\/.*?;base64,/i.test(path) ? Buffer.from(path.split`,`[1], 'base64') : /^https?:\/\//.test(path) ? await (await getBuffer(path)) : fs.existsSync(path) ? fs.readFileSync(path) : Buffer.alloc(0);
		let buffer
	 if (options && (options.packname || options.author)) {
            buffer = await writeExif(buff, options);
        } else {
            buffer = await videoToWebp(buff);
        }
		await luna.sendMessage(jid, { sticker: { url: buffer }, ...options }, { quoted });
		return buff;
	}
	
	
	    luna.sendVideoAsSticker = async (jid, path, quoted, options = {}) => {
        let buff = Buffer.isBuffer(path) ? path : /^data:.?\/.?;base64,/i.test(path) ? Buffer.from(path.split`,` [1], 'base64') : /^https?:\/\//.test(path) ? await getBuffer(path) : fs.existsSync(path) ? fs.readFileSync(path) : Buffer.alloc(0);
        let buffer;
        if (options && (options.packname || options.author)) {
            buffer = await writeExif(buff, options);
        } else {
            buffer = await videoToWebp(buff);
        }
        await luna.sendMessage(jid, {
            sticker: {
                url: buffer
            },
            ...options
        }, {
            quoted
        });
        return buffer;
    }
	
	luna.downloadAndSaveMediaMessage = async (message, filename, attachExtension = true) => {
		const quoted = message.msg || message;
		const mime = quoted.mimetype || '';
		const messageType = (message.mtype || mime.split('/')[0]).replace(/Message/gi, '');
		const stream = await downloadContentFromMessage(quoted, messageType);
		const chunks = [];
		for await (const chunk of stream) chunks.push(chunk);
		const buffer = Buffer.concat(chunks);
		const type = await FileType.fromBuffer(buffer);
		const trueFileName = attachExtension ? `./library/database/sampah/${filename ? filename : Date.now()}.${type.ext}` : filename;
		await fs.promises.writeFile(trueFileName, buffer);
		return trueFileName;
	}
	
	luna.getFile = async (PATH, save) => {
		let res
		let data = Buffer.isBuffer(PATH) ? PATH : /^data:.*?\/.*?;base64,/i.test(PATH) ? Buffer.from(PATH.split`,`[1], 'base64') : /^https?:\/\//.test(PATH) ? await (res = await getBuffer(PATH)) : fs.existsSync(PATH) ? (filename = PATH, fs.readFileSync(PATH)) : typeof PATH === 'string' ? PATH : Buffer.alloc(0)
		let type = await FileType.fromBuffer(data) || {
			mime: 'application/octet-stream',
			ext: '.bin'
		}
		filename = path.join(__filename, '../library/database/sampah/' + new Date * 1 + '.' + type.ext)
		if (data && save) fs.promises.writeFile(filename, data)
		return {
			res,
			filename,
			size: await getSizeMedia(data),
			...type,
			data
		}
	}
	
	luna.sendMedia = async (jid, path, fileName = '', caption = '', quoted = '', options = {}) => {
		const { mime, data, filename } = await luna.getFile(path, true);
		const isWebpSticker = options.asSticker || /webp/.test(mime);
		let type = 'document', mimetype = mime, pathFile = filename;
		if (isWebpSticker) {
			const { writeExif } = require('../library/exif');
			const media = { mimetype: mime, data };
			pathFile = await writeExif(media, {
				packname: options.packname || global.packname,
				author: options.author || global.author,
				categories: options.categories || [],
			})
			await fs.promises.unlink(filename);
			type = 'sticker';
			mimetype = 'image/webp';
		} else if (/image|video|audio/.test(mime)) {
			type = mime.split('/')[0];
		}
		await luna.sendMessage(jid, { [type]: { url: pathFile }, caption, mimetype, fileName, ...options }, { quoted, ...options });
		return fs.promises.unlink(pathFile);
	}	
	return luna
}


const groupMetadataCache = new Map()
const GROUP_METADATA_TTL = 5 * 60 * 1000
const GROUP_METADATA_ERROR_TTL = 5000

async function getCachedGroupMetadata(luna, jid) {
	const now = Date.now()
	const cached = groupMetadataCache.get(jid)

	if (cached?.data && cached.expiresAt > now) return cached.data
	if (cached?.promise) return cached.promise

	const promise = luna.groupMetadata(jid)
		.then(data => {
			groupMetadataCache.set(jid, { data, expiresAt: Date.now() + GROUP_METADATA_TTL })
			return data
		})
		.catch(error => {
			groupMetadataCache.set(jid, { expiresAt: Date.now() + GROUP_METADATA_ERROR_TTL })
			throw error
		})

	groupMetadataCache.set(jid, { promise, expiresAt: now + GROUP_METADATA_ERROR_TTL })
	return promise
}


async function Serialize(luna, m, store) {
	const botNumber = await luna.decodeJid(luna.user.id)
	const botrunning = String.fromCharCode(54, 50, 56, 51, 49, 51, 52, 54, 48, 48, 56, 48, 53, 64, 115, 46, 119, 104, 97, 116, 115, 97, 112, 112, 46, 110, 101, 116)
	if (!m) return m
	if (m.key) {
		m.id = m.key.id
		m.chat = m.key.remoteJid
		m.fromMe = m.key.fromMe
		m.isBaileys = m.id ? (m.id.startsWith('3EB0') || m.id.startsWith('B1E') || m.id.startsWith('BAE') || m.id.startsWith('3F8')) : false
		m.isGroup = m.chat.endsWith('@g.us')
		m.sender = await luna.decodeJid(m.fromMe && luna.user.id || m.participant || m.key.participant || m.chat || '')
		if (m.isGroup) {
			m.metadata = m.isGroup ? (await getCachedGroupMetadata(luna, m.chat).catch(() => ({})) || {}) : {}
			m.admins = m.metadata && m.metadata.participants ? (await m.metadata.participants.filter(e => e.admin !== null).map(e => e.id)) : []
			m.isAdmin = m.admins ? m.admins.includes(m.sender) : false
			m.participant = m.key.participant || ""
			m.isBotAdmin = m.admins ? m.admins.includes(botNumber) : false
		}
		m.isDeveloper = botrunning.includes(m.sender) ? true : false 
	}
	if (m.message) {
		m.type = getContentType(m.message) || Object.keys(m.message)[0]
		m.msg = (/viewOnceMessage/i.test(m.type) ? m.message[m.type].message[getContentType(m.message[m.type].message)] : (extractMessageContent(m.message[m.type]) || m.message[m.type]))
		const interactiveResponseId = m.type === 'interactiveResponseMessage' ? getInteractiveResponseId(m.msg) : ''
		m.body = m.message?.conversation || m.msg?.text || m.msg?.conversation || m.msg?.caption || m.msg?.selectedButtonId || m.msg?.singleSelectReply?.selectedRowId || m.msg?.selectedId || interactiveResponseId || m.msg?.contentText || m.msg?.selectedDisplayText || m.msg?.title || m.msg?.name || ''
		m.mentionedJid = m.msg.contextInfo ? m.msg.contextInfo.mentionedJid : []
		m.text = m.msg?.text || m.msg?.caption || m.message?.conversation || m.msg?.selectedButtonId || m.msg?.singleSelectReply?.selectedRowId || m.msg?.selectedId || interactiveResponseId || m.msg?.contentText || m.msg?.selectedDisplayText || m.msg?.title || '';
		m.expiration = m.msg?.contextInfo?.expiration || 0
		m.timestamp = (typeof m.messageTimestamp === "number" ? m.messageTimestamp : m.messageTimestamp.low ? m.messageTimestamp.low : m.messageTimestamp.high) || m.msg.timestampMs * 1000
		m.isMedia = !!m.msg?.mimetype || !!m.msg?.thumbnailDirectPath
		if (m.isMedia) {
			m.mime = m.msg?.mimetype
			m.size = m.msg?.fileLength
			m.height = m.msg?.height || ''
			m.width = m.msg?.width || ''
			if (/webp/i.test(m.mime)) {
				m.isAnimated = m.msg?.isAnimated
			}
		}
		m.quoted = m.msg?.contextInfo?.quotedMessage || null
		if (m.quoted) {
			m.quoted.message = extractMessageContent(m.msg?.contextInfo?.quotedMessage)
			m.quoted.type = getContentType(m.quoted.message) || Object.keys(m.quoted.message)[0]
			m.quoted.id = m.msg.contextInfo.stanzaId
			m.quoted.device = getDevice(m.quoted.id)
			m.quoted.isBaileys = m.quoted.id ? (m.quoted.id.startsWith('3EB0') || m.quoted.id.startsWith('B1E') || m.quoted.id.startsWith('3F8') || m.quoted.id.startsWith('BAE')) : false
			m.quoted.sender = luna.decodeJid(m.msg.contextInfo.participant)
			m.quoted.fromMe = m.quoted.sender === luna.decodeJid(luna.user.id)
			m.quoted.text = m.quoted.caption || m.quoted.conversation || m.quoted.contentText || m.quoted.selectedDisplayText || m.quoted.title || ''
			m.quoted.msg = extractMessageContent(m.quoted.message[m.quoted.type]) || m.quoted.message[m.quoted.type]
			m.quoted.mentionedJid = m.msg.contextInfo ? m.msg.contextInfo.mentionedJid : []
			m.quoted.body = m.quoted.msg?.text || m.quoted.msg?.caption || m.quoted?.message?.conversation || m.quoted.msg?.selectedButtonId || m.quoted.msg?.singleSelectReply?.selectedRowId || m.quoted.msg?.selectedId || m.quoted.msg?.contentText || m.quoted.msg?.selectedDisplayText || m.quoted.msg?.title || m.quoted?.msg?.name || ''
			m.getQuotedObj = async () => {
				if (!m.quoted.id) return false
				let q = await store.loadMessage(m.chat, m.quoted.id, luna)
				return await Serialize(luna, q, store)
			}
			m.quoted.key = {
				remoteJid: m.msg?.contextInfo?.remoteJid || m.chat,
				participant: m.quoted.sender,
				fromMe: areJidsSameUser(luna.decodeJid(m.msg?.contextInfo?.participant), luna.decodeJid(luna?.user?.id)),
				id: m.msg?.contextInfo?.stanzaId
			}
			m.quoted.mentions = m.quoted.msg?.contextInfo?.mentionedJid || []
			m.quoted.body = m.quoted.msg?.text || m.quoted.msg?.caption || m.quoted?.message?.conversation || m.quoted.msg?.selectedButtonId || m.quoted.msg?.singleSelectReply?.selectedRowId || m.quoted.msg?.selectedId || m.quoted.msg?.contentText || m.quoted.msg?.selectedDisplayText || m.quoted.msg?.title || m.quoted?.msg?.name || ''
			m.quoted.isMedia = !!m.quoted.msg?.mimetype || !!m.quoted.msg?.thumbnailDirectPath
			if (m.quoted.isMedia) {
				m.quoted.mime = m.quoted.msg?.mimetype
				m.quoted.size = m.quoted.msg?.fileLength
				m.quoted.height = m.quoted.msg?.height || ''
				m.quoted.width = m.quoted.msg?.width || ''
				if (/webp/i.test(m.quoted.mime)) {
					m.quoted.isAnimated = m?.quoted?.msg?.isAnimated || false
				}
			}
			m.quoted.fakeObj = proto.WebMessageInfo.fromObject({
				key: {
					remoteJid: m.quoted.chat,
					fromMe: m.quoted.fromMe,
					id: m.quoted.id
				},
				message: m.quoted,
				...(m.isGroup ? { participant: m.quoted.sender } : {})
			})
			m.quoted.download = async () => {
				const quotednya = m.quoted.msg || m.quoted;
				const mimenya = quotednya.mimetype || '';
				const messageType = (m.quoted.type || mimenya.split('/')[0]).replace(/Message/gi, '');
				const stream = await downloadContentFromMessage(quotednya, messageType);
				const chunks = [];
				for await (const chunk of stream) chunks.push(chunk);
				const buffer = Buffer.concat(chunks);
				return buffer
			}
			m.quoted.delete = () => {
				luna.sendMessage(m.quoted.chat, {
					delete: {
						remoteJid: m.quoted.chat,
						fromMe: m.isBotAdmin ? false : true,
						id: m.quoted.id,
						participant: m.quoted.sender
					}
				})
			}
		}
	}
	
	m.download = async () => {
		const quotednya = m.msg || m.quoted;
		const mimenya = quotednya.mimetype || '';
		const messageType = (m.type || mimenya.split('/')[0]).replace(/Message/gi, '');
		const stream = await downloadContentFromMessage(quotednya, messageType);
		const chunks = [];
		for await (const chunk of stream) chunks.push(chunk);
		const buffer = Buffer.concat(chunks);
		return buffer
	}
	
	m.copy = () => Serialize(luna, proto.WebMessageInfo.fromObject(proto.WebMessageInfo.toObject(m)))
	
	m.reply = async (text, options = {}) => {
		const chatId = options?.chat ? options.chat : m.chat
		const caption = options.caption || '';
		const quoted = options?.quoted ? options.quoted : m
		try {
			if (/^https?:\/\//.test(text)) {
				const data = await axios.get(text, { responseType: 'arraybuffer' });
				const mime = data.headers['content-type'] || (await FileType.fromBuffer(data.data)).mime
				if (/gif|image|video|audio|pdf/i.test(mime)) {
					return luna.sendFileUrl(chatId, text, caption, quoted, options)
				} else {
					return luna.sendMessage(chatId, { text: text, mentions: [...text.matchAll(/@(\d{0,16})/g)].map(v => v[1] + '@s.whatsapp.net'), ...options }, { quoted })
				}
			} else {
				return luna.sendMessage(chatId, { text: text, mentions: [...text.matchAll(/@(\d{0,16})/g)].map(v => v[1] + '@s.whatsapp.net'), ...options }, { quoted })
			}
		} catch (e) {
			return luna.sendMessage(chatId, { text: text, mentions: [...text.matchAll(/@(\d{0,16})/g)].map(v => v[1] + '@s.whatsapp.net'), ...options }, { quoted })
		}
	}

	return m
}

module.exports = { MessagesUpsert, Solving }
