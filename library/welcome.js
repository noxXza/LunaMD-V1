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

const Jimp = require("jimp")

async function welcomeBanner(avatar, name, subject, type) {
    try {
        const title = name.length > 20 ? (name.substring(0, 16) + "..") : name
        const desc = (type == "welcome" ? "Selamat datang di " : "Telah keluar dari ") + subject
        const desc2 = desc.length > 70 ? (desc.substring(0, 65) + "..") : desc
        
        const bgUrl = "https://img101.pixhost.to/images/642/557922982_skyzopedia.jpg"
        const [bg, ava] = await Promise.all([
            Jimp.read(bgUrl),
            Jimp.read(avatar)
        ])

        bg.resize(800, 400).brightness(-0.2)
        ava.resize(180, 180).circle()

        const overlay = new Jimp(800, 400, "#000000")
        overlay.opacity(0.4)
        bg.composite(overlay, 0, 0)

        bg.composite(ava, 310, 60)

        const font32 = await Jimp.loadFont(Jimp.FONT_SANS_32_WHITE)
        const font16 = await Jimp.loadFont(Jimp.FONT_SANS_16_WHITE)
        
        bg.print(font32, 0, 260, { text: title, alignmentX: Jimp.HORIZONTAL_ALIGN_CENTER }, 800, 100)
        bg.print(font16, 0, 300, { text: desc2, alignmentX: Jimp.HORIZONTAL_ALIGN_CENTER }, 800, 100)

        return await bg.getBufferAsync(Jimp.MIME_PNG)
    } catch (e) {
        console.log("welcome error:", e)
        return null
    }
}

async function promoteBanner(avatar, name, type) {
    const subject = type == "promote" ? "Telah menjadi admin" : "Telah di berhentikan menjadi admin"
    return welcomeBanner(avatar, name, subject, "welcome")
}

module.exports = { welcomeBanner, promoteBanner }