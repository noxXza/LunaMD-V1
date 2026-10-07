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

const fs = require('fs');
const chalk = require('chalk');
const sharp = require('sharp');
const { version } = require("./package.json")

// Settings Bot
global.owner = '6283134600805'
global.versi = version
global.namaOwner = "noxXza.exe"
global.tele = "t.me/noxXza19"
global.packname = 'Sticker by • Luna-MD'
global.botname = 'Luna-MD'
global.botname2 = 'Luna-MD'
global.maxJadibot = 20
global.pair = "LUNAMDV1"

// Settings Link
global.linkOwner = "https://wa.me/6283134600805"
global.linkGrup = "-"
global.source = "https://whatsapp.com/channel/0029VbD8x4q1dAw0XWN7wF0L"

// Settings Jeda
global.delayJpm = 3500
global.delayPushkontak = 6000

// Settings Saluran
global.linkSaluran = "https://whatsapp.com/channel/0029VbD8x4q1dAw0XWN7wF0L"
global.idSaluran = "120363428355171197@newsletter"
global.namaSaluran = "Saluran resmi Luna-MD"

// Settings Orkut
global.merchantIdOrderKuota = "-"
global.apiOrderKuota = "-"
global.qrisOrderKuota = "-"

// Settings Apikey
global.apiDigitalOcean = "-"
global.apiSimpleBot = "simplebotz85"

// Settings Payment
global.pay = sharp('./media//payment/payment.jpg')
.resize(300, 300)
.jpeg({ quality: 100 })
.toBuffer();
        
global.dana = "08xxx"
global.ovo = "08xxx"
global.gopay = "08xxx"
global.shoopepay = "08xxx"
global.qris = "./media/payment/qris.jpg"

global.andana = "nama akun dana"
global.anovo = "nama akun ovo"
global.angopay = "nama akun gopay"
global.anshoope = "nama akun shoopepay"
global.namaqris = "nama toko qris kalian" 

// Settings Image
global.image = {
menu: "https://files.catbox.moe/9jw95v.jpg", 
reply: "https://img2.pixhost.to/images/8834/742379308_rafaofficial.jpg", 
logo: "https://files.catbox.moe/9jw95v.jpg", 
qris: "https://files.catbox.moe/9jw95v.jpg"
}

global.thumb = sharp('./media/Luna.jpg')
        .resize(300, 300)
        .jpeg({ quality: 100 })
        .toBuffer();

// Settings Api Panel 
global.domain = "https://xxx"
global.apikey = "ptla_xxx" 
global.capikey = "ptlc_xxx"
global.egg = "15" 
global.nestid = "5"
global.loc = "1" 

// Settings Api Panel 2
global.domainV2 = "https://xxx"
global.apikeyV2 = "ptla_xxx" 
global.capikeyV2 = "ptlc_xxx"
global.eggV2 = "15" 
global.nestidV2 = "5"
global.locV2 = "1"

// Settings Teks Promosi
global.tekspromosi = `
bebas isi teks apa aja
`

// Settings Message 
global.mess = {
	owner: "*[ Akses Ditolak ]*\nFitur ini hanya untuk Owner!",
	admin: "*[ Akses Ditolak ]*\nFitur ini hanya untuk admin grup!",
	botAdmin: "*[ Akses Ditolak ]*\nFitur ini hanya untuk ketika bot menjadi admin!",
	group: "*[ Akses Ditolak ]*\nFitur ini hanya untuk dalam grup!",
	private: "*[ Akses Ditolak ]*\nFitur ini hanya untuk dalam private chat!",
	prem: "*[ Akses Ditolak ]*\nFitur ini khusus user premium",
	wait: 'Loading...',
	error: 'Error!',
	done: 'Done'
}

let file = require.resolve(__filename)
fs.watchFile(file, () => {
	fs.unwatchFile(file)
	console.log(chalk.redBright(`Update ${__filename}`))
	delete require.cache[file]
	require(file)
})