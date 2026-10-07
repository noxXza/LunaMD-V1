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

const FormData = require("form-data");
const https = require("https");

async function remini(imageBuffer, mode) {
    return new Promise((resolve, reject) => {
        try {
            const supportedModes = ["enhance", "recolor", "dehaze"];
            if (!supportedModes.includes(mode)) mode = "enhance";

            const url = `https://inferenceengine.vyro.ai/${mode}`;
            const formData = new FormData();
            formData.append("model_version", 1);
            formData.append("image", imageBuffer, {
                filename: "enhance_image_body.jpg",
                contentType: "image/jpeg",
            });

            const options = {
                method: "POST",
                headers: {
                    ...formData.getHeaders(),
                    "User-Agent": "okhttp/4.9.3",
                    Connection: "Keep-Alive",
                },
            };

            const req = https.request(url, options, (res) => {
                if (res.statusCode !== 200) {
                    return reject(new Error(`HTTP Error: ${res.statusCode}`));
                }

                const chunks = [];
                res.on("data", (chunk) => chunks.push(chunk));
                res.on("end", () => resolve(Buffer.concat(chunks)));
            });

            req.on("error", (err) => reject(err));
            formData.pipe(req);
        } catch (err) {
            reject(err);
        }
    });
}

module.exports.remini = remini;
