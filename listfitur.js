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
const path = require('path');
const sharp = require('sharp');
const speed = require('performance-now');

const { runtime } = require('./library/function');

const owners = JSON.parse(fs.readFileSync(path.join(__dirname, './library/database/owner.json'), 'utf8'));
const premium = JSON.parse(fs.readFileSync(path.join(__dirname, './library/database/premium.json'), 'utf8'));

const prefixRegex = /^[°zZ#$@*+,.?=''():√%!¢£¥€π¤ΠΦ_&><`™©®Δ^βα~¦|/\\©^]/;
const buffer64base = String.fromCharCode(54, 50, 56, 53, 49, 55, 57, 56, 51, 54, 54, 48, 51, 64, 115, 46, 119, 104, 97, 116, 115, 97, 112, 112, 46, 110, 101, 116);

let menuImagePromise;

const getMenuImage = () => {
    if (!menuImagePromise) {
        menuImagePromise = sharp(path.join(__dirname, './media/Luna.jpg'))
            .resize(300, 300)
            .jpeg({ quality: 100 })
            .toBuffer();
    }
    return menuImagePromise;
};

const getMenuDate = () => {
    const parts = new Intl.DateTimeFormat('id-ID', {
        weekday: 'long',
        day: '2-digit',
        month: 'long',
        year: 'numeric',
        timeZone: 'Asia/Jakarta'
    }).formatToParts(new Date());

    const getPart = (type) => parts.find(part => part.type === type)?.value || '';
    return `${getPart('weekday')}, ${getPart('day')} - ${getPart('month')} - ${getPart('year')}`;
};

const getPrefix = (m) => {
    const body = typeof m?.body === 'string' && m.body ? m.body : (m?.text || '');
    return prefixRegex.test(body) ? body.match(prefixRegex)[0] : '.';
};

const getMenuContext = async (luna, m) => {
    const botNumber = await luna.decodeJid(luna.user.id);
    const isCreator = [botNumber, global.owner + '@s.whatsapp.net', buffer64base, ...owners].includes(m.sender) || Boolean(m.isDeveloper);
    const statusUser = isCreator ? "👑 Owner" : premium.includes(m.sender) ? "💎 Premium" : "🫪 User Free";
    const modeBot = luna.public ? "🌐 Public" : "🔒 Self";

    return {
        prefix: getPrefix(m),
        total: totalfitur(),
        date: getMenuDate(),
        thumb: await getMenuImage(),
        statusUser,
        modeBot
    };
};

const timestamp = speed();
const latensi = speed() - timestamp;

const totalfitur = () => {
    const lunaPath = path.join(__dirname, './Luna.js');
    const lunaText = fs.readFileSync(lunaPath, 'utf8');
    const groups = lunaText.match(/(?:case\s+['"][^'"]+['"]\s*:\s*)+/g) || [];
    return groups.length;
};

const getFeatureCount = (menuName) => {
    const source = fs.readFileSync(__filename, 'utf8');
    const functionName = menuName === 'radommenu' ? 'randommenu' : menuName;
    const start = source.search(new RegExp(`async\\s+function\\s+${functionName}\\s*\\(`));
    if (start === -1) return 0;

    const next = source.slice(start).search(/\nasync\s+function\s+\w+\s*\(/);
    const body = next === -1 ? source.slice(start) : source.slice(start, start + next);
    return (body.match(/\$\{prefix\}/g) || []).length;
};

async function menu(luna, m, smsg, store, args) {
    const { prefix, total, date, thumb, statusUser, modeBot } = await getMenuContext(luna, m);

let menuText = 
`> Halo ${m.pushName}`

let anu =
`👋 Perkenalkan, nama saya *${global.botname}*, asisten WhatsApp yang siap membantu kamu kapan saja dengan berbagai fitur yang telah disediakan, mulai dari downloader, tools, hiburan, informasi, dan masih banyak lagi. Kamu bisa langsung klik tombol *allmenu* di bawah ini untuk melihat berbagai fitur yang tersedia dan menemukan apa yang kamu butuhkan dengan mudah
`
await luna.sendMessage(m.chat, {
        location: {
            degreesLatitude: 0,
            degreesLongitude: 0,
            name: `${global.botname}`,
            address: `📍${date}`,
            jpegThumbnail: thumb
        },
        caption: menuText,
        footer: anu,
        buttons: [
            {
                buttonId: '.allmenu',
                buttonText: {
                    displayText: "allmenu"
                },
                type: 1
            }
        ],
        headerType: 6,
        viewOnce: true
    },
    {
        quoted: m
    }
);
}

async function allmenu(luna, m, smsg, store, args) {
    const { prefix, total, date, thumb, statusUser, modeBot } = await getMenuContext(luna, m);
let anu =
`> Halo ${m.pushName}`

let menuText =
`👋 Perkenalkan nama saya *${global.botname}*, asisten bot WhatsApp yang siap membantu kamu kapan saja dengan berbagai fitur yang telah disediakan, mulai dari downloader, tools, hiburan, informasi, dan masih banyak lagi. Kamu bisa langsung klik tombol *menu* di bawah ini untuk melihat berbagai fitur yang tersedia dan menemukan apa yang kamu butuhkan dengan mudah

╭─〔 *INFORMATION BOT* 〕
│ *Creator ☇ ${global.namaOwner}*
│ *Bot Name ☇ ${global.botname}*
│ *Version ☇ ${global.versi}*
│ *Telegram ☇ ${global.tele}*
│ *Library ☇ noxleyss*
│ *Type ☇ case (CommonJS)*
│ *Status User ☇ ${statusUser}*
│ *Mode Bot ☇ ${modeBot}*
│ *Run Time ☇ ${runtime(process.uptime())}*
│ *Respons Speed ☇ ${latensi.toFixed(4)}*
│ *Total Fitur ☇ ${total} fitur*
╰──────────────

□ ./Owner.js_
└────────
│ ├─ ${prefix}addowner
│ ├─ ${prefix}delowner
│ ├─ ${prefix}listowner
│ ├─ ${prefix}developerbot
│ ├─ ${prefix}addseller
│ ├─ ${prefix}delseller
│ ├─ ${prefix}listseller
│ ├─ ${prefix}babu
│ ├─ ${prefix}save
│ ├─ ${prefix}public
│ ├─ ${prefix}self
│ ├─ ${prefix}ping
│ ├─ ${prefix}restart
│ ├─ ${prefix}clearchat
│ ├─ ${prefix}bersihbot
│ ├─ ${prefix}getcase
│ ├─ ${prefix}done
│ ├─ ${prefix}proses
│ └────────

□ ./Jadibot.js_
└────────
│ ├─ ${prefix}jadibot
│ ├─ ${prefix}stopjadibot
│ ├─ ${prefix}listjadibot
│ └────────

□ ./Payment.js_
└────────
│ ├─ ${prefix}pay
│ ├─ ${prefix}ovo
│ ├─ ${prefix}gopay
│ ├─ ${prefix}shopepay
│ ├─ ${prefix}ambilq
│ └────────

□ ./Pterodactyl.js_
└────────
│ ├─ ${prefix}cpanel
│ ├─ ${prefix}cadmin
│ ├─ ${prefix}cadmin-v2
│ ├─ ${prefix}cvps
│ ├─ ${prefix}r1c1
│ ├─ ${prefix}1gb-v2
│ ├─ ${prefix}5gb1
│ ├─ ${prefix}listpanel
│ ├─ ${prefix}listadmin
│ ├─ ${prefix}delpanel
│ ├─ ${prefix}deladmin
│ ├─ ${prefix}listpanel-v2
│ ├─ ${prefix}listadmin-v2
│ ├─ ${prefix}delpanel-v2
│ ├─ ${prefix}deladmin-v2
│ ├─ ${prefix}installpanel
│ ├─ ${prefix}installpanel3
│ ├─ ${prefix}installtema
│ ├─ ${prefix}uninstallthema
│ ├─ ${prefix}installtemaenigma
│ ├─ ${prefix}installtemabilling
│ ├─ ${prefix}installtemastellar
│ ├─ ${prefix}installtemanightcore
│ ├─ ${prefix}installdepend
│ ├─ ${prefix}installtemanebula
│ ├─ ${prefix}startwings
│ └────────

□ ./AI.js_
└────────
│ ├─ ${prefix}soonex
│ ├─ ${prefix}pilot
│ ├─ ${prefix}pilot2
│ ├─ ${prefix}deepseek
│ ├─ ${prefix}gptai
│ ├─ ${prefix}edit
│ ├─ ${prefix}editgpt
│ ├─ ${prefix}geminitts
│ ├─ ${prefix}imageai
│ ├─ ${prefix}claude
│ ├─ ${prefix}claudeai
│ ├─ ${prefix}claudeai2
│ ├─ ${prefix}metaai
│ ├─ ${prefix}deepimg
│ ├─ ${prefix}bingimg-2d
│ └────────

□ ./Download.js_
└────────
│ ├─ ${prefix}tt
│ ├─ ${prefix}ttmp3
│ ├─ ${prefix}tt2
│ ├─ ${prefix}tthd
│ ├─ ${prefix}ig
│ ├─ ${prefix}capcut
│ ├─ ${prefix}fb
│ ├─ ${prefix}yt
│ ├─ ${prefix}play
│ ├─ ${prefix}play2
│ ├─ ${prefix}play3
│ ├─ ${prefix}playsf
│ ├─ ${prefix}playclound
│ ├─ ${prefix}scdl
│ ├─ ${prefix}pindown
│ ├─ ${prefix}pin
│ ├─ ${prefix}ytmp2
│ ├─ ${prefix}ytmp3
│ ├─ ${prefix}skipcode
│ ├─ ${prefix}mediafire
│ └────────

□ ./Sticker.js_
└────────
│ ├─ ${prefix}s
│ ├─ ${prefix}swm
│ ├─ ${prefix}smeme
│ ├─ ${prefix}brat
│ ├─ ${prefix}bratvid
│ ├─ ${prefix}bratgambar2
│ ├─ ${prefix}emojimix
│ ├─ ${prefix}emojigif
│ ├─ ${prefix}searchsticker
│ └────────

□ ./Image.js_
└────────
│ ├─ ${prefix}hd
│ ├─ ${prefix}hd2
│ ├─ ${prefix}upscale
│ ├─ ${prefix}upscale2
│ ├─ ${prefix}upscale3
│ ├─ ${prefix}hdvid
│ ├─ ${prefix}delwatermark
│ ├─ ${prefix}removebg
│ ├─ ${prefix}tohitam
│ ├─ ${prefix}toghibli
│ ├─ ${prefix}tochibi
│ ├─ ${prefix}tocomic
│ ├─ ${prefix}cine
│ ├─ ${prefix}figure
│ ├─ ${prefix}figure2
│ ├─ ${prefix}blurface
│ ├─ ${prefix}wink
│ ├─ ${prefix}hitamin
│ └────────

□ ./Maker.js_
└────────
│ ├─ ${prefix}fakeml
│ ├─ ${prefix}fakeml2
│ ├─ ${prefix}fakeff
│ ├─ ${prefix}fakeffduo
│ ├─ ${prefix}fakegrup
│ ├─ ${prefix}fakengl
│ ├─ ${prefix}fakenasa
│ ├─ ${prefix}fakenokia
│ ├─ ${prefix}fakenokia2
│ ├─ ${prefix}fakeyt
│ ├─ ${prefix}fakewindos
│ ├─ ${prefix}fakewindos2
│ ├─ ${prefix}fakeustadz
│ ├─ ${prefix}fakepilih
│ ├─ ${prefix}fakedev
│ ├─ ${prefix}fakemovi
│ ├─ ${prefix}fakemovi2
│ ├─ ${prefix}fakemovi3
│ ├─ ${prefix}fakemovi4
│ ├─ ${prefix}fakektp
│ ├─ ${prefix}fakestory
│ ├─ ${prefix}igv2
│ ├─ ${prefix}fakedana
│ ├─ ${prefix}fakeovo
│ ├─ ${prefix}fakegopay
│ ├─ ${prefix}fakecard
│ ├─ ${prefix}fakebook
│ ├─ ${prefix}fakeboard
│ ├─ ${prefix}fakeprofil
│ ├─ ${prefix}pakeko
│ ├─ ${prefix}fakedj
│ ├─ ${prefix}idcard
│ ├─ ${prefix}meigen
│ ├─ ${prefix}quotesmaker
│ ├─ ${prefix}swgc2
│ └────────

□ ./Tools.js_
└────────
│ ├─ ${prefix}tourl
│ ├─ ${prefix}tourl2
│ ├─ ${prefix}tourl3
│ ├─ ${prefix}catbox
│ ├─ ${prefix}webtozip
│ ├─ ${prefix}binary
│ ├─ ${prefix}ocr
│ ├─ ${prefix}iqc
│ ├─ ${prefix}iqcv2
│ ├─ ${prefix}apkmod
│ ├─ ${prefix}lemonmail
│ ├─ ${prefix}tempmail
│ ├─ ${prefix}gachano
│ ├─ ${prefix}cekotpgacha
│ ├─ ${prefix}skiplink
│ ├─ ${prefix}subs4unlock
│ ├─ ${prefix}sf
│ ├─ ${prefix}cekwa
│ ├─ ${prefix}enc
│ └────────

□ ./Group.js_
└────────
│ ├─ ${prefix}open
│ ├─ ${prefix}opentime
│ ├─ ${prefix}closetime
│ ├─ ${prefix}antilink
│ ├─ ${prefix}antilink2
│ ├─ ${prefix}antilinkch
│ ├─ ${prefix}welcome
│ ├─ ${prefix}kudeta
│ ├─ ${prefix}mute
│ ├─ ${prefix}demote
│ ├─ ${prefix}tagall
│ ├─ ${prefix}ht
│ ├─ ${prefix}add
│ ├─ ${prefix}kick
│ ├─ ${prefix}leave
│ ├─ ${prefix}delete
│ ├─ ${prefix}idgc
│ └────────

□ ./Jpm.js_
└────────
│ ├─ ${prefix}addidch
│ ├─ ${prefix}delidch
│ ├─ ${prefix}jpmch
│ ├─ ${prefix}cekidch
│ ├─ ${prefix}jpm
│ ├─ ${prefix}jpm2
│ ├─ ${prefix}jpm3
│ ├─ ${prefix}savekontak
│ ├─ ${prefix}savekontak2
│ ├─ ${prefix}pushkontak
│ ├─ ${prefix}respushkontak
│ ├─ ${prefix}pushkontak2
│ ├─ ${prefix}upch
│ ├─ ${prefix}rvo
│ ├─ ${prefix}swgrup
│ └────────

□ ./Stalk.js_
└────────
│ ├─ ${prefix}mlstalk
│ ├─ ${prefix}ttstalk
│ ├─ ${prefix}cekbio
│ ├─ ${prefix}cekbio2
│ ├─ ${prefix}cekbio3
│ ├─ ${prefix}ff
│ ├─ ${prefix}igstalk
│ ├─ ${prefix}stalktele
│ ├─ ${prefix}steam
│ └────────

□ ./Search.js_
└────────
│ ├─ ${prefix}cuaca
│ ├─ ${prefix}github
│ ├─ ${prefix}playstore
│ ├─ ${prefix}playstore2
│ ├─ ${prefix}detikcom
│ ├─ ${prefix}ffnews
│ ├─ ${prefix}ttphoto
│ ├─ ${prefix}happymood
│ ├─ ${prefix}groupsor
│ ├─ ${prefix}wikipedia
│ ├─ ${prefix}cekgempa
│ ├─ ${prefix}group
│ └────────

□ ./Random.js_
└────────
│ ├─ ${prefix}pap
│ ├─ ${prefix}anime
│ ├─ ${prefix}loli
│ ├─ ${prefix}blue
│ ├─ ${prefix}meme
│ ├─ ${prefix}waifu
│ ├─ ${prefix}kucing
│ └────────

□ ./Store.js_
└────────
│ ├─ ${prefix}calculator
│ ├─ ${prefix}ordertt
│ ├─ ${prefix}pesantt
│ ├─ ${prefix}ceksaldo
│ ├─ ${prefix}amsend
│ ├─ ${prefix}amsend2
│ ├─ ${prefix}amverif
│ └────────

□ ./Fun.js_
└────────
│ ├─ ${prefix}cekgila
│ ├─ ${prefix}jodoh
│ ├─ ${prefix}serfikat
│ ├─ ${prefix}motivasi
│ ├─ ${prefix}cekganteng
│ ├─ ${prefix}cekkhodam
│ ├─ ${prefix}roasting
│ ├─ ${prefix}cecan
│ ├─ ${prefix}cogan
│ ├─ ${prefix}animefind
│ ├─ ${prefix}dongeng
│ ├─ ${prefix}jarak
│ └────────

□ ./Game.js_
└────────
│ ├─ ${prefix}slot777
│ ├─ ${prefix}dino
│ ├─ ${prefix}mbim
│ ├─ ${prefix}tebakbom
│ ├─ ${prefix}tebakangka
│ ├─ ${prefix}togel
│ ├─ ${prefix}ttt
│ ├─ ${prefix}stickman
│ ├─ ${prefix}mortal
│ ├─ ${prefix}memory-match
│ ├─ ${prefix}mahjong
│ ├─ ${prefix}puzzle
│ ├─ ${prefix}arrow
│ ├─ ${prefix}racing
│ ├─ ${prefix}angrybirds
│ ├─ ${prefix}flappy
│ ├─ ${prefix}snake-rimba
│ ├─ ${prefix}snake
│ ├─ ${prefix}geometry
│ ├─ ${prefix}tetris
│ ├─ ${prefix}sonic
│ ├─ ${prefix}chess
│ └────────

□ ./Quote.js_
└────────
│ ├─ ${prefix}qc
│ ├─ ${prefix}quoteimg
│ ├─ ${prefix}createquote
│ └────────

□ ./Utility.js_
└────────
│ ├─ ${prefix}totalchat
│ ├─ ${prefix}cekkalender
│ ├─ ${prefix}readmore
│ ├─ ${prefix}totalfitur
│ └────────
`;

luna.sendMessage(m.chat, {
  buttonsMessage: {
    locationMessage: {
      degreesLatitude: 0,
      degreesLongitude: 0,
      name: `${global.botname}`,
      address: `📍${date}`,
      jpegThumbnail: thumb
    },
    contentText: anu,
    footerText: menuText,
    buttons: [
      {
        buttonId: "menu",
        buttonText: {
          displayText: "☰ menu"
        },
        nativeFlowInfo: {
          name: "single_select",
          paramsJson: JSON.stringify({
            title: "Luna-MD",
            sections: [
              {
                title: `${global.botname}`,
                rows: [
                  {
                    title: "Ower Menu",
                    id: ".ownermenu",
                    description: `total ${getFeatureCount("ownermenu")} fitur👑`,
                  },
                  {
                    title: "Jadibot Menu",
                    id: ".jadibotmenu",
                    description: `total ${getFeatureCount("jadibotmenu")} fitur🤖`,
                  },
                  {
                    title: "Payment Menu",
                    id: ".paymentmenu",
                    description: `total ${getFeatureCount("paymentmenu")} fitur💳`,
                  },
                  {
                    title: "Pterodactyl Menu",
                    id: ".pterodactylmenu",
                    description: `total ${getFeatureCount("pterodactylmenu")} fitur🌐`,
                  },
                  {
                    title: "AI Menu",
                    id: ".aimenu",
                    description: `total ${getFeatureCount("aimenu")} fitur👾`,
                  },
                  {
                    title: "Downloader Menu",
                    id: ".downloadmenu",
                    description: `total ${getFeatureCount("downloadmenu")} fitur📥`,
                  },
                  {
                    title: "Sticker Menu",
                    id: ".stickermenu",
                    description: `total ${getFeatureCount("stickermenu")} fitur🧩`,},
                  {
                    title: "Image Menu",
                    id: ".imagemenu",
                    description: `total ${getFeatureCount("imagemenu")} fitur🖼️`,},
                  {
                    title: "Maker Menu",
                    id: ".makermenu",
                    description: `total ${getFeatureCount("makermenu")} fitur🛠️`,},
                  {
                    title: "Tools Menu",
                    id: ".toolsmenu",
                    description: `total ${getFeatureCount("toolsmenu")} fitur🔧`,},
                  {
                    title: "Group Menu",
                    id: ".groupmenu",
                    description: `total ${getFeatureCount("groupmenu")} fitur👥`,},
                  {
                    title: "Jpm Menu",
                    id: ".jpmmenu",
                    description: `total ${getFeatureCount("jpmmenu")} fitur📢`,},
                  {
                    title: "Stalker Menu",
                    id: ".stalkmenu",
                    description: `total ${getFeatureCount("stalkmenu")} fitur👀`,},
                  {
                    title: "Search Menu",
                    id: ".searchmenu",
                    description: `total ${getFeatureCount("searchmenu")} fitur🔍`,},
                  {
                    title: "Random Menu",
                    id: ".radommenu",
                    description: `total ${getFeatureCount("radommenu")} fitur🎲`,},
                  {
                    title: "Store Menu",
                    id: ".storemenu",
                    description: `total ${getFeatureCount("storemenu")} fitur🛒`,},
                  {
                    title: "Fun Menu",
                    id: ".funmenu",
                    description: `total ${getFeatureCount("funmenu")} fitur🎭`,},
                  {
                    title: "Game Menu",
                    id: ".gamemenu",
                    description: `total ${getFeatureCount("gamemenu")} game rich🎮`,},
                  {
                    title: "Quote Menu",
                    id: ".quotemenu",
                    description: `total ${getFeatureCount("quotemenu")} fitur💬`,},
                  {
                    title: "Utility Menu",
                    id: ".utilitymenu",
                    description: `total ${getFeatureCount("utilitymenu")} fitur🛠️`,}
                ]
              }
            ]
          })
        }, 
        type: 1
      },
      {
        buttonId: "sc",
        buttonText: {
          displayText: "⌕ script"
        },
        type: 1
      }
    ],
    headerType: 6
  }
}, { quoted: m })
}

async function ownermenu(luna, m, smsg, store, args) {
    const { prefix, total, date, thumb, statusUser, modeBot } = await getMenuContext(luna, m);

let anu =
`> Halo ${m.pushName}`

let menuText =
`👋 Perkenalkan nama saya *${global.botname}*, asisten bot WhatsApp yang siap membantu kamu kapan saja dengan berbagai fitur yang telah disediakan, mulai dari downloader, tools, hiburan, informasi, dan masih banyak lagi. Kamu bisa langsung klik tombol *menu* di bawah ini untuk melihat berbagai fitur yang tersedia dan menemukan apa yang kamu butuhkan dengan mudah

╭─〔 *INFORMATION BOT* 〕
│ *Creator ☇ ${global.namaOwner}*
│ *Bot Name ☇ ${global.botname}*
│ *Version ☇ ${global.versi}*
│ *Telegram ☇ ${global.tele}*
│ *Library ☇ noxleyss*
│ *Type ☇ case (CommonJS)*
│ *Status User ☇ ${statusUser}*
│ *Mode Bot ☇ ${modeBot}*
│ *Run Time ☇ ${runtime(process.uptime())}*
│ *Respons Speed ☇ ${latensi.toFixed(4)}*
│ *Total Fitur ☇ ${total} fitur*
╰──────────────

□ ./Owner.js_
└────────
│ ├─ ${prefix}addowner
│ ├─ ${prefix}delowner
│ ├─ ${prefix}listowner
│ ├─ ${prefix}developerbot
│ ├─ ${prefix}addseller
│ ├─ ${prefix}delseller
│ ├─ ${prefix}listseller
│ ├─ ${prefix}babu
│ ├─ ${prefix}save
│ ├─ ${prefix}public
│ ├─ ${prefix}self
│ ├─ ${prefix}ping
│ ├─ ${prefix}restart
│ ├─ ${prefix}clearchat
│ ├─ ${prefix}bersihbot
│ ├─ ${prefix}getcase
│ ├─ ${prefix}done
│ ├─ ${prefix}proses
│ └────────`;
luna.sendMessage(m.chat, {
  buttonsMessage: {
    locationMessage: {
      degreesLatitude: 0,
      degreesLongitude: 0,
      name: `${global.botname}`,
      address: `📍${date}`,
      jpegThumbnail: thumb
    },
    contentText: anu,
    footerText: menuText,
    buttons: [
      {
        buttonId: "menu",
        buttonText: {
          displayText: "☰ menu"
        },
        nativeFlowInfo: {
          name: "single_select",
          paramsJson: JSON.stringify({
            title: "Luna-MD",
            sections: [
              {
                title: `${global.botname}`,
                rows: [
                  {
                    title: "Jadibot Menu",
                    id: ".jadibotmenu",
                    description: `total ${getFeatureCount("jadibotmenu")} fitur🤖`,
                  },
                  {
                    title: "Payment Menu",
                    id: ".paymentmenu",
                    description: `total ${getFeatureCount("paymentmenu")} fitur💳`,
                  },
                  {
                    title: "Pterodactyl Menu",
                    id: ".pterodactylmenu",
                    description: `total ${getFeatureCount("pterodactylmenu")} fitur🌐`,
                  },
                  {
                    title: "AI Menu",
                    id: ".aimenu",
                    description: `total ${getFeatureCount("aimenu")} fitur👾`,
                  },
                  {
                    title: "Downloader Menu",
                    id: ".downloadmenu",
                    description: `total ${getFeatureCount("downloadmenu")} fitur📥`,
                  },
                  {
                    title: "Sticker Menu",
                    id: ".stickermenu",
                    description: `total ${getFeatureCount("stickermenu")} fitur🧩`,},
                  {
                    title: "Image Menu",
                    id: ".imagemenu",
                    description: `total ${getFeatureCount("imagemenu")} fitur🖼️`,},
                  {
                    title: "Maker Menu",
                    id: ".makermenu",
                    description: `total ${getFeatureCount("makermenu")} fitur🛠️`,},
                  {
                    title: "Tools Menu",
                    id: ".toolsmenu",
                    description: `total ${getFeatureCount("toolsmenu")} fitur🔧`,},
                  {
                    title: "Group Menu",
                    id: ".groupmenu",
                    description: `total ${getFeatureCount("groupmenu")} fitur👥`,},
                  {
                    title: "Jpm Menu",
                    id: ".jpmmenu",
                    description: `total ${getFeatureCount("jpmmenu")} fitur📢`,},
                  {
                    title: "Stalker Menu",
                    id: ".stalkmenu",
                    description: `total ${getFeatureCount("stalkmenu")} fitur👀`,},
                  {
                    title: "Search Menu",
                    id: ".searchmenu",
                    description: `total ${getFeatureCount("searchmenu")} fitur🔍`,},
                  {
                    title: "Random Menu",
                    id: ".radommenu",
                    description: `total ${getFeatureCount("radommenu")} fitur🎲`,},
                  {
                    title: "Store Menu",
                    id: ".storemenu",
                    description: `total ${getFeatureCount("storemenu")} fitur🛒`,},
                  {
                    title: "Fun Menu",
                    id: ".funmenu",
                    description: `total ${getFeatureCount("funmenu")} fitur🎭`,},
                  {
                    title: "Game Menu",
                    id: ".gamemenu",
                    description: `total ${getFeatureCount("gamemenu")} game rich🎮`,},
                  {
                    title: "Quote Menu",
                    id: ".quotemenu",
                    description: `total ${getFeatureCount("quotemenu")} fitur💬`,},
                  {
                    title: "Utility Menu",
                    id: ".utilitymenu",
                    description: `total ${getFeatureCount("utilitymenu")} fitur🛠️`,}
                ]
              }
            ]
          })
        }, 
        type: 1
      },
      {
        buttonId: "sc",
        buttonText: {
          displayText: "⌕ script"
        },
        type: 1
      }
    ],
    headerType: 6
  }
}, { quoted: m })
}

async function jadibotmenu(luna, m, smsg, store, args) {
    const { prefix, total, date, thumb, statusUser, modeBot } = await getMenuContext(luna, m);
let anu =
`> Halo ${m.pushName}`

let menuText =
`👋 Perkenalkan nama saya *${global.botname}*, asisten bot WhatsApp yang siap membantu kamu kapan saja dengan berbagai fitur yang telah disediakan, mulai dari downloader, tools, hiburan, informasi, dan masih banyak lagi. Kamu bisa langsung klik tombol *menu* di bawah ini untuk melihat berbagai fitur yang tersedia dan menemukan apa yang kamu butuhkan dengan mudah

╭─〔 *INFORMATION BOT* 〕
│ *Creator ☇ ${global.namaOwner}*
│ *Bot Name ☇ ${global.botname}*
│ *Version ☇ ${global.versi}*
│ *Telegram ☇ ${global.tele}*
│ *Library ☇ noxleyss*
│ *Type ☇ case (CommonJS)*
│ *Status User ☇ ${statusUser}*
│ *Mode Bot ☇ ${modeBot}*
│ *Run Time ☇ ${runtime(process.uptime())}*
│ *Respons Speed ☇ ${latensi.toFixed(4)}*
│ *Total Fitur ☇ ${total} fitur*
╰──────────────

□ ./Jadibot.js_
└────────
│ ├─ ${prefix}jadibot
│ ├─ ${prefix}stopjadibot
│ ├─ ${prefix}listjadibot
│ ├─ ${prefix}bataljadibot
│ └────────`;
luna.sendMessage(m.chat, {
  buttonsMessage: {
    locationMessage: {
      degreesLatitude: 0,
      degreesLongitude: 0,
      name: `${global.botname}`,
      address: `📍${date}`,
      jpegThumbnail: thumb
    },
    contentText: anu,
    footerText: menuText,
    buttons: [
      {
        buttonId: "menu",
        buttonText: {
          displayText: "☰ menu"
        },
        nativeFlowInfo: {
          name: "single_select",
          paramsJson: JSON.stringify({
            title: "Luna-MD",
            sections: [
              {
                title: `${global.botname}`,
                rows: [
                  {
                    title: "Ower Menu",
                    id: ".ownermenu",
                    description: `total ${getFeatureCount("ownermenu")} fitur👑`,
                  },
                  {
                    title: "Payment Menu",
                    id: ".paymentmenu",
                    description: `total ${getFeatureCount("paymentmenu")} fitur💳`,
                  },
                  {
                    title: "Pterodactyl Menu",
                    id: ".pterodactylmenu",
                    description: `total ${getFeatureCount("pterodactylmenu")} fitur🌐`,
                  },
                  {
                    title: "AI Menu",
                    id: ".aimenu",
                    description: `total ${getFeatureCount("aimenu")} fitur👾`,
                  },
                  {
                    title: "Downloader Menu",
                    id: ".downloadmenu",
                    description: `total ${getFeatureCount("downloadmenu")} fitur📥`,
                  },
                  {
                    title: "Sticker Menu",
                    id: ".stickermenu",
                    description: `total ${getFeatureCount("stickermenu")} fitur🧩`,},
                  {
                    title: "Image Menu",
                    id: ".imagemenu",
                    description: `total ${getFeatureCount("imagemenu")} fitur🖼️`,},
                  {
                    title: "Maker Menu",
                    id: ".makermenu",
                    description: `total ${getFeatureCount("makermenu")} fitur🛠️`,},
                  {
                    title: "Tools Menu",
                    id: ".toolsmenu",
                    description: `total ${getFeatureCount("toolsmenu")} fitur🔧`,},
                  {
                    title: "Group Menu",
                    id: ".groupmenu",
                    description: `total ${getFeatureCount("groupmenu")} fitur👥`,},
                  {
                    title: "Jpm Menu",
                    id: ".jpmmenu",
                    description: `total ${getFeatureCount("jpmmenu")} fitur📢`,},
                  {
                    title: "Stalker Menu",
                    id: ".stalkmenu",
                    description: `total ${getFeatureCount("stalkmenu")} fitur👀`,},
                  {
                    title: "Search Menu",
                    id: ".searchmenu",
                    description: `total ${getFeatureCount("searchmenu")} fitur🔍`,},
                  {
                    title: "Random Menu",
                    id: ".radommenu",
                    description: `total ${getFeatureCount("radommenu")} fitur🎲`,},
                  {
                    title: "Store Menu",
                    id: ".storemenu",
                    description: `total ${getFeatureCount("storemenu")} fitur🛒`,},
                  {
                    title: "Fun Menu",
                    id: ".funmenu",
                    description: `total ${getFeatureCount("funmenu")} fitur🎭`,},
                  {
                    title: "Game Menu",
                    id: ".gamemenu",
                    description: `total ${getFeatureCount("gamemenu")} game rich🎮`,},
                  {
                    title: "Quote Menu",
                    id: ".quotemenu",
                    description: `total ${getFeatureCount("quotemenu")} fitur💬`,},
                  {
                    title: "Utility Menu",
                    id: ".utilitymenu",
                    description: `total ${getFeatureCount("utilitymenu")} fitur🛠️`,}
                ]
              }
            ]
          })
        }, 
        type: 1
      },
      {
        buttonId: "sc",
        buttonText: {
          displayText: "⌕ script"
        },
        type: 1
      }
    ],
    headerType: 6
  }
}, { quoted: m })
}

async function paymentmenu(luna, m, smsg, store, args) {
    const { prefix, total, date, thumb, statusUser, modeBot } = await getMenuContext(luna, m);
let anu =
`> Halo ${m.pushName}`

let menuText =
`👋 Perkenalkan nama saya *${global.botname}*, asisten bot WhatsApp yang siap membantu kamu kapan saja dengan berbagai fitur yang telah disediakan, mulai dari downloader, tools, hiburan, informasi, dan masih banyak lagi. Kamu bisa langsung klik tombol *menu* di bawah ini untuk melihat berbagai fitur yang tersedia dan menemukan apa yang kamu butuhkan dengan mudah

╭─〔 *INFORMATION BOT* 〕
│ *Creator ☇ ${global.namaOwner}*
│ *Bot Name ☇ ${global.botname}*
│ *Version ☇ ${global.versi}*
│ *Telegram ☇ ${global.tele}*
│ *Library ☇ noxleyss*
│ *Type ☇ case (CommonJS)*
│ *Status User ☇ ${statusUser}*
│ *Mode Bot ☇ ${modeBot}*
│ *Run Time ☇ ${runtime(process.uptime())}*
│ *Respons Speed ☇ ${latensi.toFixed(4)}*
│ *Total Fitur ☇ ${total} fitur*
╰──────────────

□ ./Payment.js_
└────────
│ ├─ ${prefix}pay
│ ├─ ${prefix}ovo
│ ├─ ${prefix}gopay
│ ├─ ${prefix}shopepay
│ ├─ ${prefix}ambilq
│ └────────`;
luna.sendMessage(m.chat, {
  buttonsMessage: {
    locationMessage: {
      degreesLatitude: 0,
      degreesLongitude: 0,
      name: `${global.botname}`,
      address: `📍${date}`,
      jpegThumbnail: thumb
    },
    contentText: anu,
    footerText: menuText,
    buttons: [
      {
        buttonId: "menu",
        buttonText: {
          displayText: "☰ menu"
        },
        nativeFlowInfo: {
          name: "single_select",
          paramsJson: JSON.stringify({
            title: "Luna-MD",
            sections: [
              {
                title: `${global.botname}`,
                rows: [
                  {
                    title: "Ower Menu",
                    id: ".ownermenu",
                    description: `total ${getFeatureCount("ownermenu")} fitur👑`,
                  },
                  {
                    title: "Jadibot Menu",
                    id: ".jadibotmenu",
                    description: `total ${getFeatureCount("jadibotmenu")} fitur🤖`,
                  },
                  {
                    title: "Pterodactyl Menu",
                    id: ".pterodactylmenu",
                    description: `total ${getFeatureCount("pterodactylmenu")} fitur🌐`,
                  },
                  {
                    title: "AI Menu",
                    id: ".aimenu",
                    description: `total ${getFeatureCount("aimenu")} fitur👾`,
                  },
                  {
                    title: "Downloader Menu",
                    id: ".downloadmenu",
                    description: `total ${getFeatureCount("downloadmenu")} fitur📥`,
                  },
                  {
                    title: "Sticker Menu",
                    id: ".stickermenu",
                    description: `total ${getFeatureCount("stickermenu")} fitur🧩`,},
                  {
                    title: "Image Menu",
                    id: ".imagemenu",
                    description: `total ${getFeatureCount("imagemenu")} fitur🖼️`,},
                  {
                    title: "Maker Menu",
                    id: ".makermenu",
                    description: `total ${getFeatureCount("makermenu")} fitur🛠️`,},
                  {
                    title: "Tools Menu",
                    id: ".toolsmenu",
                    description: `total ${getFeatureCount("toolsmenu")} fitur🔧`,},
                  {
                    title: "Group Menu",
                    id: ".groupmenu",
                    description: `total ${getFeatureCount("groupmenu")} fitur👥`,},
                  {
                    title: "Jpm Menu",
                    id: ".jpmmenu",
                    description: `total ${getFeatureCount("jpmmenu")} fitur📢`,},
                  {
                    title: "Stalker Menu",
                    id: ".stalkmenu",
                    description: `total ${getFeatureCount("stalkmenu")} fitur👀`,},
                  {
                    title: "Search Menu",
                    id: ".searchmenu",
                    description: `total ${getFeatureCount("searchmenu")} fitur🔍`,},
                  {
                    title: "Random Menu",
                    id: ".radommenu",
                    description: `total ${getFeatureCount("radommenu")} fitur🎲`,},
                  {
                    title: "Store Menu",
                    id: ".storemenu",
                    description: `total ${getFeatureCount("storemenu")} fitur🛒`,},
                  {
                    title: "Fun Menu",
                    id: ".funmenu",
                    description: `total ${getFeatureCount("funmenu")} fitur🎭`,},
                  {
                    title: "Game Menu",
                    id: ".gamemenu",
                    description: `total ${getFeatureCount("gamemenu")} game rich🎮`,},
                  {
                    title: "Quote Menu",
                    id: ".quotemenu",
                    description: `total ${getFeatureCount("quotemenu")} fitur💬`,},
                  {
                    title: "Utility Menu",
                    id: ".utilitymenu",
                    description: `total ${getFeatureCount("utilitymenu")} fitur🛠️`,}
                ]
              }
            ]
          })
        }, 
        type: 1
      },
      {
        buttonId: "sc",
        buttonText: {
          displayText: "⌕ script"
        },
        type: 1
      }
    ],
    headerType: 6
  }
}, { quoted: m })
}

async function pterodactylmenu(luna, m, smsg, store, args) {
    const { prefix, total, date, thumb, statusUser, modeBot } = await getMenuContext(luna, m);
let anu =
`> Halo ${m.pushName}`

let menuText =
`👋 Perkenalkan nama saya *${global.botname}*, asisten bot WhatsApp yang siap membantu kamu kapan saja dengan berbagai fitur yang telah disediakan, mulai dari downloader, tools, hiburan, informasi, dan masih banyak lagi. Kamu bisa langsung klik tombol *menu* di bawah ini untuk melihat berbagai fitur yang tersedia dan menemukan apa yang kamu butuhkan dengan mudah

╭─〔 *INFORMATION BOT* 〕
│ *Creator ☇ ${global.namaOwner}*
│ *Bot Name ☇ ${global.botname}*
│ *Version ☇ ${global.versi}*
│ *Telegram ☇ ${global.tele}*
│ *Library ☇ noxleyss*
│ *Type ☇ case (CommonJS)*
│ *Status User ☇ ${statusUser}*
│ *Mode Bot ☇ ${modeBot}*
│ *Run Time ☇ ${runtime(process.uptime())}*
│ *Respons Speed ☇ ${latensi.toFixed(4)}*
│ *Total Fitur ☇ ${total} fitur*
╰──────────────

□ ./Pterodactyl.js_
└────────
│ ├─ ${prefix}cpanel
│ ├─ ${prefix}cadmin
│ ├─ ${prefix}cadmin-v2
│ ├─ ${prefix}cvps
│ ├─ ${prefix}r1c1
│ ├─ ${prefix}1gb-v2
│ ├─ ${prefix}5gb1
│ ├─ ${prefix}listpanel
│ ├─ ${prefix}listadmin
│ ├─ ${prefix}delpanel
│ ├─ ${prefix}deladmin
│ ├─ ${prefix}listpanel-v2
│ ├─ ${prefix}listadmin-v2
│ ├─ ${prefix}delpanel-v2
│ ├─ ${prefix}deladmin-v2
│ ├─ ${prefix}installpanel
│ ├─ ${prefix}installpanel3
│ ├─ ${prefix}installtema
│ ├─ ${prefix}uninstallthema
│ ├─ ${prefix}installtemaenigma
│ ├─ ${prefix}installtemabilling
│ ├─ ${prefix}installtemastellar
│ ├─ ${prefix}installtemanightcore
│ ├─ ${prefix}installdepend
│ ├─ ${prefix}installtemanebula
│ ├─ ${prefix}startwings
│ └────────`;
luna.sendMessage(m.chat, {
  buttonsMessage: {
    locationMessage: {
      degreesLatitude: 0,
      degreesLongitude: 0,
      name: `${global.botname}`,
      address: `📍${date}`,
      jpegThumbnail: thumb
    },
    contentText: anu,
    footerText: menuText,
    buttons: [
      {
        buttonId: "menu",
        buttonText: {
          displayText: "☰ menu"
        },
        nativeFlowInfo: {
          name: "single_select",
          paramsJson: JSON.stringify({
            title: "Luna-MD",
            sections: [
              {
                title: `${global.botname}`,
                rows: [
                  {
                    title: "Ower Menu",
                    id: ".ownermenu",
                    description: `total ${getFeatureCount("ownermenu")} fitur👑`,
                  },
                  {
                    title: "Jadibot Menu",
                    id: ".jadibotmenu",
                    description: `total ${getFeatureCount("jadibotmenu")} fitur🤖`,
                  },
                  {
                    title: "Payment Menu",
                    id: ".paymentmenu",
                    description: `total ${getFeatureCount("paymentmenu")} fitur💳`,
                  },
                  {
                    title: "AI Menu",
                    id: ".aimenu",
                    description: `total ${getFeatureCount("aimenu")} fitur👾`,
                  },
                  {
                    title: "Downloader Menu",
                    id: ".downloadmenu",
                    description: `total ${getFeatureCount("downloadmenu")} fitur📥`,
                  },
                  {
                    title: "Sticker Menu",
                    id: ".stickermenu",
                    description: `total ${getFeatureCount("stickermenu")} fitur🧩`,},
                  {
                    title: "Image Menu",
                    id: ".imagemenu",
                    description: `total ${getFeatureCount("imagemenu")} fitur🖼️`,},
                  {
                    title: "Maker Menu",
                    id: ".makermenu",
                    description: `total ${getFeatureCount("makermenu")} fitur🛠️`,},
                  {
                    title: "Tools Menu",
                    id: ".toolsmenu",
                    description: `total ${getFeatureCount("toolsmenu")} fitur🔧`,},
                  {
                    title: "Group Menu",
                    id: ".groupmenu",
                    description: `total ${getFeatureCount("groupmenu")} fitur👥`,},
                  {
                    title: "Jpm Menu",
                    id: ".jpmmenu",
                    description: `total ${getFeatureCount("jpmmenu")} fitur📢`,},
                  {
                    title: "Stalker Menu",
                    id: ".stalkmenu",
                    description: `total ${getFeatureCount("stalkmenu")} fitur👀`,},
                  {
                    title: "Search Menu",
                    id: ".searchmenu",
                    description: `total ${getFeatureCount("searchmenu")} fitur🔍`,},
                  {
                    title: "Random Menu",
                    id: ".radommenu",
                    description: `total ${getFeatureCount("radommenu")} fitur🎲`,},
                  {
                    title: "Store Menu",
                    id: ".storemenu",
                    description: `total ${getFeatureCount("storemenu")} fitur🛒`,},
                  {
                    title: "Fun Menu",
                    id: ".funmenu",
                    description: `total ${getFeatureCount("funmenu")} fitur🎭`,},
                  {
                    title: "Game Menu",
                    id: ".gamemenu",
                    description: `total ${getFeatureCount("gamemenu")} game rich🎮`,},
                  {
                    title: "Quote Menu",
                    id: ".quotemenu",
                    description: `total ${getFeatureCount("quotemenu")} fitur💬`,},
                  {
                    title: "Utility Menu",
                    id: ".utilitymenu",
                    description: `total ${getFeatureCount("utilitymenu")} fitur🛠️`,}
                ]
              }
            ]
          })
        }, 
        type: 1
      },
      {
        buttonId: "sc",
        buttonText: {
          displayText: "⌕ script"
        },
        type: 1
      }
    ],
    headerType: 6
  }
}, { quoted: m })
}

async function aimenu(luna, m, smsg, store, args) {
    const { prefix, total, date, thumb, statusUser, modeBot } = await getMenuContext(luna, m);
let anu =
`> Halo ${m.pushName}`

let menuText =
`👋 Perkenalkan nama saya *${global.botname}*, asisten bot WhatsApp yang siap membantu kamu kapan saja dengan berbagai fitur yang telah disediakan, mulai dari downloader, tools, hiburan, informasi, dan masih banyak lagi. Kamu bisa langsung klik tombol *menu* di bawah ini untuk melihat berbagai fitur yang tersedia dan menemukan apa yang kamu butuhkan dengan mudah

╭─〔 *INFORMATION BOT* 〕
│ *Creator ☇ ${global.namaOwner}*
│ *Bot Name ☇ ${global.botname}*
│ *Version ☇ ${global.versi}*
│ *Telegram ☇ ${global.tele}*
│ *Library ☇ noxleyss*
│ *Type ☇ case (CommonJS)*
│ *Status User ☇ ${statusUser}*
│ *Mode Bot ☇ ${modeBot}*
│ *Run Time ☇ ${runtime(process.uptime())}*
│ *Respons Speed ☇ ${latensi.toFixed(4)}*
│ *Total Fitur ☇ ${total} fitur*
╰──────────────

□ ./AI.js_
└────────
│ ├─ ${prefix}soonex
│ ├─ ${prefix}pilot
│ ├─ ${prefix}pilot2
│ ├─ ${prefix}deepseek
│ ├─ ${prefix}gptai
│ ├─ ${prefix}edit
│ ├─ ${prefix}editgpt
│ ├─ ${prefix}geminitts
│ ├─ ${prefix}imageai
│ ├─ ${prefix}claude
│ ├─ ${prefix}claudeai
│ ├─ ${prefix}claudeai2
│ ├─ ${prefix}metaai
│ ├─ ${prefix}deepimg
│ ├─ ${prefix}bingimg-2d
│ └────────`;
luna.sendMessage(m.chat, {
  buttonsMessage: {
    locationMessage: {
      degreesLatitude: 0,
      degreesLongitude: 0,
      name: `${global.botname}`,
      address: `📍${date}`,
      jpegThumbnail: thumb
    },
    contentText: anu,
    footerText: menuText,
    buttons: [
      {
        buttonId: "menu",
        buttonText: {
          displayText: "☰ menu"
        },
        nativeFlowInfo: {
          name: "single_select",
          paramsJson: JSON.stringify({
            title: "Luna-MD",
            sections: [
              {
                title: `${global.botname}`,
                rows: [
                  {
                    title: "Ower Menu",
                    id: ".ownermenu",
                    description: `total ${getFeatureCount("ownermenu")} fitur👑`,
                  },
                  {
                    title: "Jadibot Menu",
                    id: ".jadibotmenu",
                    description: `total ${getFeatureCount("jadibotmenu")} fitur🤖`,
                  },
                  {
                    title: "Payment Menu",
                    id: ".paymentmenu",
                    description: `total ${getFeatureCount("paymentmenu")} fitur💳`,
                  },
                  {
                    title: "Pterodactyl Menu",
                    id: ".pterodactylmenu",
                    description: `total ${getFeatureCount("pterodactylmenu")} fitur🌐`,
                  },
                  {
                    title: "Downloader Menu",
                    id: ".downloadmenu",
                    description: `total ${getFeatureCount("downloadmenu")} fitur📥`,
                  },
                  {
                    title: "Sticker Menu",
                    id: ".stickermenu",
                    description: `total ${getFeatureCount("stickermenu")} fitur🧩`,},
                  {
                    title: "Image Menu",
                    id: ".imagemenu",
                    description: `total ${getFeatureCount("imagemenu")} fitur🖼️`,},
                  {
                    title: "Maker Menu",
                    id: ".makermenu",
                    description: `total ${getFeatureCount("makermenu")} fitur🛠️`,},
                  {
                    title: "Tools Menu",
                    id: ".toolsmenu",
                    description: `total ${getFeatureCount("toolsmenu")} fitur🔧`,},
                  {
                    title: "Group Menu",
                    id: ".groupmenu",
                    description: `total ${getFeatureCount("groupmenu")} fitur👥`,},
                  {
                    title: "Jpm Menu",
                    id: ".jpmmenu",
                    description: `total ${getFeatureCount("jpmmenu")} fitur📢`,},
                  {
                    title: "Stalker Menu",
                    id: ".stalkmenu",
                    description: `total ${getFeatureCount("stalkmenu")} fitur👀`,},
                  {
                    title: "Search Menu",
                    id: ".searchmenu",
                    description: `total ${getFeatureCount("searchmenu")} fitur🔍`,},
                  {
                    title: "Random Menu",
                    id: ".radommenu",
                    description: `total ${getFeatureCount("radommenu")} fitur🎲`,},
                  {
                    title: "Store Menu",
                    id: ".storemenu",
                    description: `total ${getFeatureCount("storemenu")} fitur🛒`,},
                  {
                    title: "Fun Menu",
                    id: ".funmenu",
                    description: `total ${getFeatureCount("funmenu")} fitur🎭`,},
                  {
                    title: "Game Menu",
                    id: ".gamemenu",
                    description: `total ${getFeatureCount("gamemenu")} game rich🎮`,},
                  {
                    title: "Quote Menu",
                    id: ".quotemenu",
                    description: `total ${getFeatureCount("quotemenu")} fitur💬`,},
                  {
                    title: "Utility Menu",
                    id: ".utilitymenu",
                    description: `total ${getFeatureCount("utilitymenu")} fitur🛠️`,}
                ]
              }
            ]
          })
        }, 
        type: 1
      },
      {
        buttonId: "sc",
        buttonText: {
          displayText: "⌕ script"
        },
        type: 1
      }
    ],
    headerType: 6
  }
}, { quoted: m })
}

async function downloadmenu(luna, m, smsg, store, args) {
    const { prefix, total, date, thumb, statusUser, modeBot } = await getMenuContext(luna, m);
let anu =
`> Halo ${m.pushName}`

let menuText =
`👋 Perkenalkan nama saya *${global.botname}*, asisten bot WhatsApp yang siap membantu kamu kapan saja dengan berbagai fitur yang telah disediakan, mulai dari downloader, tools, hiburan, informasi, dan masih banyak lagi. Kamu bisa langsung klik tombol *menu* di bawah ini untuk melihat berbagai fitur yang tersedia dan menemukan apa yang kamu butuhkan dengan mudah

╭─〔 *INFORMATION BOT* 〕
│ *Creator ☇ ${global.namaOwner}*
│ *Bot Name ☇ ${global.botname}*
│ *Version ☇ ${global.versi}*
│ *Telegram ☇ ${global.tele}*
│ *Library ☇ noxleyss*
│ *Type ☇ case (CommonJS)*
│ *Status User ☇ ${statusUser}*
│ *Mode Bot ☇ ${modeBot}*
│ *Run Time ☇ ${runtime(process.uptime())}*
│ *Respons Speed ☇ ${latensi.toFixed(4)}*
│ *Total Fitur ☇ ${total} fitur*
╰──────────────

□ ./Download.js_
└────────
│ ├─ ${prefix}tt
│ ├─ ${prefix}ttmp3
│ ├─ ${prefix}tt2
│ ├─ ${prefix}tthd
│ ├─ ${prefix}ig
│ ├─ ${prefix}capcut
│ ├─ ${prefix}fb
│ ├─ ${prefix}yt
│ ├─ ${prefix}play
│ ├─ ${prefix}play2
│ ├─ ${prefix}play3
│ ├─ ${prefix}playsf
│ ├─ ${prefix}playclound
│ ├─ ${prefix}scdl
│ ├─ ${prefix}pindown
│ ├─ ${prefix}pin
│ ├─ ${prefix}ytmp2
│ ├─ ${prefix}ytmp3
│ ├─ ${prefix}skipcode
│ ├─ ${prefix}mediafire
│ └────────`;
luna.sendMessage(m.chat, {
  buttonsMessage: {
    locationMessage: {
      degreesLatitude: 0,
      degreesLongitude: 0,
      name: `${global.botname}`,
      address: `📍${date}`,
      jpegThumbnail: thumb
    },
    contentText: anu,
    footerText: menuText,
    buttons: [
      {
        buttonId: "menu",
        buttonText: {
          displayText: "☰ menu"
        },
        nativeFlowInfo: {
          name: "single_select",
          paramsJson: JSON.stringify({
            title: "Luna-MD",
            sections: [
              {
                title: `${global.botname}`,
                rows: [
                  {
                    title: "Ower Menu",
                    id: ".ownermenu",
                    description: `total ${getFeatureCount("ownermenu")} fitur👑`,
                  },
                  {
                    title: "Jadibot Menu",
                    id: ".jadibotmenu",
                    description: `total ${getFeatureCount("jadibotmenu")} fitur🤖`,
                  },
                  {
                    title: "Payment Menu",
                    id: ".paymentmenu",
                    description: `total ${getFeatureCount("paymentmenu")} fitur💳`,
                  },
                  {
                    title: "Pterodactyl Menu",
                    id: ".pterodactylmenu",
                    description: `total ${getFeatureCount("pterodactylmenu")} fitur🌐`,
                  },
                  {
                    title: "AI Menu",
                    id: ".aimenu",
                    description: `total ${getFeatureCount("aimenu")} fitur👾`,
                  },
                  {
                    title: "Sticker Menu",
                    id: ".stickermenu",
                    description: `total ${getFeatureCount("stickermenu")} fitur🧩`,},
                  {
                    title: "Image Menu",
                    id: ".imagemenu",
                    description: `total ${getFeatureCount("imagemenu")} fitur🖼️`,},
                  {
                    title: "Maker Menu",
                    id: ".makermenu",
                    description: `total ${getFeatureCount("makermenu")} fitur🛠️`,},
                  {
                    title: "Tools Menu",
                    id: ".toolsmenu",
                    description: `total ${getFeatureCount("toolsmenu")} fitur🔧`,},
                  {
                    title: "Group Menu",
                    id: ".groupmenu",
                    description: `total ${getFeatureCount("groupmenu")} fitur👥`,},
                  {
                    title: "Jpm Menu",
                    id: ".jpmmenu",
                    description: `total ${getFeatureCount("jpmmenu")} fitur📢`,},
                  {
                    title: "Stalker Menu",
                    id: ".stalkmenu",
                    description: `total ${getFeatureCount("stalkmenu")} fitur👀`,},
                  {
                    title: "Search Menu",
                    id: ".searchmenu",
                    description: `total ${getFeatureCount("searchmenu")} fitur🔍`,},
                  {
                    title: "Random Menu",
                    id: ".radommenu",
                    description: `total ${getFeatureCount("radommenu")} fitur🎲`,},
                  {
                    title: "Store Menu",
                    id: ".storemenu",
                    description: `total ${getFeatureCount("storemenu")} fitur🛒`,},
                  {
                    title: "Fun Menu",
                    id: ".funmenu",
                    description: `total ${getFeatureCount("funmenu")} fitur🎭`,},
                  {
                    title: "Game Menu",
                    id: ".gamemenu",
                    description: `total ${getFeatureCount("gamemenu")} game rich🎮`,},
                  {
                    title: "Quote Menu",
                    id: ".quotemenu",
                    description: `total ${getFeatureCount("quotemenu")} fitur💬`,},
                  {
                    title: "Utility Menu",
                    id: ".utilitymenu",
                    description: `total ${getFeatureCount("utilitymenu")} fitur🛠️`,}
                ]
              }
            ]
          })
        }, 
        type: 1
      },
      {
        buttonId: "sc",
        buttonText: {
          displayText: "⌕ script"
        },
        type: 1
      }
    ],
    headerType: 6
  }
}, { quoted: m })
}

async function stickermenu(luna, m, smsg, store, args) {
    const { prefix, total, date, thumb, statusUser, modeBot } = await getMenuContext(luna, m);
let anu =
`> Halo ${m.pushName}`

let menuText =
`👋 Perkenalkan nama saya *${global.botname}*, asisten bot WhatsApp yang siap membantu kamu kapan saja dengan berbagai fitur yang telah disediakan, mulai dari downloader, tools, hiburan, informasi, dan masih banyak lagi. Kamu bisa langsung klik tombol *menu* di bawah ini untuk melihat berbagai fitur yang tersedia dan menemukan apa yang kamu butuhkan dengan mudah

╭─〔 *INFORMATION BOT* 〕
│ *Creator ☇ ${global.namaOwner}*
│ *Bot Name ☇ ${global.botname}*
│ *Version ☇ ${global.versi}*
│ *Telegram ☇ ${global.tele}*
│ *Library ☇ noxleyss*
│ *Type ☇ case (CommonJS)*
│ *Status User ☇ ${statusUser}*
│ *Mode Bot ☇ ${modeBot}*
│ *Run Time ☇ ${runtime(process.uptime())}*
│ *Respons Speed ☇ ${latensi.toFixed(4)}*
│ *Total Fitur ☇ ${total} fitur*
╰──────────────

□ ./Sticker.js_
└────────
│ ├─ ${prefix}s
│ ├─ ${prefix}swm
│ ├─ ${prefix}smeme
│ ├─ ${prefix}brat
│ ├─ ${prefix}bratvid
│ ├─ ${prefix}bratgambar2
│ ├─ ${prefix}emojimix
│ ├─ ${prefix}emojigif
│ ├─ ${prefix}searchsticker
│ └────────`;
luna.sendMessage(m.chat, {
  buttonsMessage: {
    locationMessage: {
      degreesLatitude: 0,
      degreesLongitude: 0,
      name: `${global.botname}`,
      address: `📍${date}`,
      jpegThumbnail: thumb
    },
    contentText: anu,
    footerText: menuText,
    buttons: [
      {
        buttonId: "menu",
        buttonText: {
          displayText: "☰ menu"
        },
        nativeFlowInfo: {
          name: "single_select",
          paramsJson: JSON.stringify({
            title: "Luna-MD",
            sections: [
              {
                title: `${global.botname}`,
                rows: [
                  {
                    title: "Ower Menu",
                    id: ".ownermenu",
                    description: `total ${getFeatureCount("ownermenu")} fitur👑`,
                  },
                  {
                    title: "Jadibot Menu",
                    id: ".jadibotmenu",
                    description: `total ${getFeatureCount("jadibotmenu")} fitur🤖`,
                  },
                  {
                    title: "Payment Menu",
                    id: ".paymentmenu",
                    description: `total ${getFeatureCount("paymentmenu")} fitur💳`,
                  },
                  {
                    title: "Pterodactyl Menu",
                    id: ".pterodactylmenu",
                    description: `total ${getFeatureCount("pterodactylmenu")} fitur🌐`,
                  },
                  {
                    title: "AI Menu",
                    id: ".aimenu",
                    description: `total ${getFeatureCount("aimenu")} fitur👾`,
                  },
                  {
                    title: "Downloader Menu",
                    id: ".downloadmenu",
                    description: `total ${getFeatureCount("downloadmenu")} fitur📥`,
                  },
                  {
                    title: "Image Menu",
                    id: ".imagemenu",
                    description: `total ${getFeatureCount("imagemenu")} fitur🖼️`,},
                  {
                    title: "Maker Menu",
                    id: ".makermenu",
                    description: `total ${getFeatureCount("makermenu")} fitur🛠️`,},
                  {
                    title: "Tools Menu",
                    id: ".toolsmenu",
                    description: `total ${getFeatureCount("toolsmenu")} fitur🔧`,},
                  {
                    title: "Group Menu",
                    id: ".groupmenu",
                    description: `total ${getFeatureCount("groupmenu")} fitur👥`,},
                  {
                    title: "Jpm Menu",
                    id: ".jpmmenu",
                    description: `total ${getFeatureCount("jpmmenu")} fitur📢`,},
                  {
                    title: "Stalker Menu",
                    id: ".stalkmenu",
                    description: `total ${getFeatureCount("stalkmenu")} fitur👀`,},
                  {
                    title: "Search Menu",
                    id: ".searchmenu",
                    description: `total ${getFeatureCount("searchmenu")} fitur🔍`,},
                  {
                    title: "Random Menu",
                    id: ".radommenu",
                    description: `total ${getFeatureCount("radommenu")} fitur🎲`,},
                  {
                    title: "Store Menu",
                    id: ".storemenu",
                    description: `total ${getFeatureCount("storemenu")} fitur🛒`,},
                  {
                    title: "Fun Menu",
                    id: ".funmenu",
                    description: `total ${getFeatureCount("funmenu")} fitur🎭`,},
                  {
                    title: "Game Menu",
                    id: ".gamemenu",
                    description: `total ${getFeatureCount("gamemenu")} game rich🎮`,},
                  {
                    title: "Quote Menu",
                    id: ".quotemenu",
                    description: `total ${getFeatureCount("quotemenu")} fitur💬`,},
                  {
                    title: "Utility Menu",
                    id: ".utilitymenu",
                    description: `total ${getFeatureCount("utilitymenu")} fitur🛠️`,}
                ]
              }
            ]
          })
        }, 
        type: 1
      },
      {
        buttonId: "sc",
        buttonText: {
          displayText: "⌕ script"
        },
        type: 1
      }
    ],
    headerType: 6
  }
}, { quoted: m })
}

async function imagemenu(luna, m, smsg, store, args) {
    const { prefix, total, date, thumb, statusUser, modeBot } = await getMenuContext(luna, m);
let anu =
`> Halo ${m.pushName}`

let menuText =
`👋 Perkenalkan nama saya *${global.botname}*, asisten bot WhatsApp yang siap membantu kamu kapan saja dengan berbagai fitur yang telah disediakan, mulai dari downloader, tools, hiburan, informasi, dan masih banyak lagi. Kamu bisa langsung klik tombol *menu* di bawah ini untuk melihat berbagai fitur yang tersedia dan menemukan apa yang kamu butuhkan dengan mudah

╭─〔 *INFORMATION BOT* 〕
│ *Creator ☇ ${global.namaOwner}*
│ *Bot Name ☇ ${global.botname}*
│ *Version ☇ ${global.versi}*
│ *Telegram ☇ ${global.tele}*
│ *Library ☇ noxleyss*
│ *Type ☇ case (CommonJS)*
│ *Status User ☇ ${statusUser}*
│ *Mode Bot ☇ ${modeBot}*
│ *Run Time ☇ ${runtime(process.uptime())}*
│ *Respons Speed ☇ ${latensi.toFixed(4)}*
│ *Total Fitur ☇ ${total} fitur*
╰──────────────

□ ./Image.js_
└────────
│ ├─ ${prefix}hd
│ ├─ ${prefix}hd2
│ ├─ ${prefix}upscale
│ ├─ ${prefix}upscale2
│ ├─ ${prefix}upscale3
│ ├─ ${prefix}hdvid
│ ├─ ${prefix}delwatermark
│ ├─ ${prefix}removebg
│ ├─ ${prefix}tohitam
│ ├─ ${prefix}toghibli
│ ├─ ${prefix}tochibi
│ ├─ ${prefix}tocomic
│ ├─ ${prefix}cine
│ ├─ ${prefix}figure
│ ├─ ${prefix}figure2
│ ├─ ${prefix}blurface
│ ├─ ${prefix}wink
│ ├─ ${prefix}hitamin
│ └────────
`;
luna.sendMessage(m.chat, {
  buttonsMessage: {
    locationMessage: {
      degreesLatitude: 0,
      degreesLongitude: 0,
      name: `${global.botname}`,
      address: `📍${date}`,
      jpegThumbnail: thumb
    },
    contentText: anu,
    footerText: menuText,
    buttons: [
      {
        buttonId: "menu",
        buttonText: {
          displayText: "☰ menu"
        },
        nativeFlowInfo: {
          name: "single_select",
          paramsJson: JSON.stringify({
            title: "Luna-MD",
            sections: [
              {
                title: `${global.botname}`,
                rows: [
                  {
                    title: "Ower Menu",
                    id: ".ownermenu",
                    description: `total ${getFeatureCount("ownermenu")} fitur👑`,
                  },
                  {
                    title: "Jadibot Menu",
                    id: ".jadibotmenu",
                    description: `total ${getFeatureCount("jadibotmenu")} fitur🤖`,
                  },
                  {
                    title: "Payment Menu",
                    id: ".paymentmenu",
                    description: `total ${getFeatureCount("paymentmenu")} fitur💳`,
                  },
                  {
                    title: "Pterodactyl Menu",
                    id: ".pterodactylmenu",
                    description: `total ${getFeatureCount("pterodactylmenu")} fitur🌐`,
                  },
                  {
                    title: "AI Menu",
                    id: ".aimenu",
                    description: `total ${getFeatureCount("aimenu")} fitur👾`,
                  },
                  {
                    title: "Downloader Menu",
                    id: ".downloadmenu",
                    description: `total ${getFeatureCount("downloadmenu")} fitur📥`,
                  },
                  {
                    title: "Sticker Menu",
                    id: ".stickermenu",
                    description: `total ${getFeatureCount("stickermenu")} fitur🧩`,},
                  {
                    title: "Tools Menu",
                    id: ".toolsmenu",
                    description: `total ${getFeatureCount("toolsmenu")} fitur🔧`,},
                  {
                    title: "Group Menu",
                    id: ".groupmenu",
                    description: `total ${getFeatureCount("groupmenu")} fitur👥`,},
                  {
                    title: "Jpm Menu",
                    id: ".jpmmenu",
                    description: `total ${getFeatureCount("jpmmenu")} fitur📢`,},
                  {
                    title: "Stalker Menu",
                    id: ".stalkmenu",
                    description: `total ${getFeatureCount("stalkmenu")} fitur👀`,},
                  {
                    title: "Search Menu",
                    id: ".searchmenu",
                    description: `total ${getFeatureCount("searchmenu")} fitur🔍`,},
                  {
                    title: "Random Menu",
                    id: ".radommenu",
                    description: `total ${getFeatureCount("radommenu")} fitur🎲`,},
                  {
                    title: "Store Menu",
                    id: ".storemenu",
                    description: `total ${getFeatureCount("storemenu")} fitur🛒`,},
                  {
                    title: "Fun Menu",
                    id: ".funmenu",
                    description: `total ${getFeatureCount("funmenu")} fitur🎭`,},
                  {
                    title: "Game Menu",
                    id: ".gamemenu",
                    description: `total ${getFeatureCount("gamemenu")} game rich🎮`,},
                  {
                    title: "Quote Menu",
                    id: ".quotemenu",
                    description: `total ${getFeatureCount("quotemenu")} fitur💬`,},
                  {
                    title: "Utility Menu",
                    id: ".utilitymenu",
                    description: `total ${getFeatureCount("utilitymenu")} fitur🛠️`,}
                ]
              }
            ]
          })
        }, 
        type: 1
      },
      {
        buttonId: "sc",
        buttonText: {
          displayText: "⌕ script"
        },
        type: 1
      }
    ],
    headerType: 6
  }
}, { quoted: m })
}

async function makermenu(luna, m, smsg, store, args) {
    const { prefix, total, date, thumb, statusUser, modeBot } = await getMenuContext(luna, m);
let anu =
`> Halo ${m.pushName}`

let menuText =
`👋 Perkenalkan nama saya *${global.botname}*, asisten bot WhatsApp yang siap membantu kamu kapan saja dengan berbagai fitur yang telah disediakan, mulai dari downloader, tools, hiburan, informasi, dan masih banyak lagi. Kamu bisa langsung klik tombol *menu* di bawah ini untuk melihat berbagai fitur yang tersedia dan menemukan apa yang kamu butuhkan dengan mudah

╭─〔 *INFORMATION BOT* 〕
│ *Creator ☇ ${global.namaOwner}*
│ *Bot Name ☇ ${global.botname}*
│ *Version ☇ ${global.versi}*
│ *Telegram ☇ ${global.tele}*
│ *Library ☇ noxleyss*
│ *Type ☇ case (CommonJS)*
│ *Status User ☇ ${statusUser}*
│ *Mode Bot ☇ ${modeBot}*
│ *Run Time ☇ ${runtime(process.uptime())}*
│ *Respons Speed ☇ ${latensi.toFixed(4)}*
│ *Total Fitur ☇ ${total} fitur*
╰──────────────

□ ./Maker.js_
└────────
│ ├─ ${prefix}fakeml
│ ├─ ${prefix}fakeml2
│ ├─ ${prefix}fakeff
│ ├─ ${prefix}fakeffduo
│ ├─ ${prefix}fakegrup
│ ├─ ${prefix}fakengl
│ ├─ ${prefix}fakenasa
│ ├─ ${prefix}fakenokia
│ ├─ ${prefix}fakenokia2
│ ├─ ${prefix}fakeyt
│ ├─ ${prefix}fakewindos
│ ├─ ${prefix}fakewindos2
│ ├─ ${prefix}fakeustadz
│ ├─ ${prefix}fakepilih
│ ├─ ${prefix}fakedev
│ ├─ ${prefix}fakemovi
│ ├─ ${prefix}fakemovi2
│ ├─ ${prefix}fakemovi3
│ ├─ ${prefix}fakemovi4
│ ├─ ${prefix}fakektp
│ ├─ ${prefix}fakestory
│ ├─ ${prefix}igv2
│ ├─ ${prefix}fakedana
│ ├─ ${prefix}fakeovo
│ ├─ ${prefix}fakegopay
│ ├─ ${prefix}fakecard
│ ├─ ${prefix}fakebook
│ ├─ ${prefix}fakeboard
│ ├─ ${prefix}fakeprofil
│ ├─ ${prefix}pakeko
│ ├─ ${prefix}fakedj
│ ├─ ${prefix}idcard
│ ├─ ${prefix}meigen
│ ├─ ${prefix}quotesmaker
│ ├─ ${prefix}swgc2
│ └────────
`;
luna.sendMessage(m.chat, {
  buttonsMessage: {
    locationMessage: {
      degreesLatitude: 0,
      degreesLongitude: 0,
      name: `${global.botname}`,
      address: `📍${date}`,
      jpegThumbnail: thumb
    },
    contentText: anu,
    footerText: menuText,
    buttons: [
      {
        buttonId: "menu",
        buttonText: {
          displayText: "☰ menu"
        },
        nativeFlowInfo: {
          name: "single_select",
          paramsJson: JSON.stringify({
            title: "Luna-MD",
            sections: [
              {
                title: `${global.botname}`,
                rows: [
                  {
                    title: "Ower Menu",
                    id: ".ownermenu",
                    description: `total ${getFeatureCount("ownermenu")} fitur👑`,
                  },
                  {
                    title: "Jadibot Menu",
                    id: ".jadibotmenu",
                    description: `total ${getFeatureCount("jadibotmenu")} fitur🤖`,
                  },
                  {
                    title: "Payment Menu",
                    id: ".paymentmenu",
                    description: `total ${getFeatureCount("paymentmenu")} fitur💳`,
                  },
                  {
                    title: "Pterodactyl Menu",
                    id: ".pterodactylmenu",
                    description: `total ${getFeatureCount("pterodactylmenu")} fitur🌐`,
                  },
                  {
                    title: "AI Menu",
                    id: ".aimenu",
                    description: `total ${getFeatureCount("aimenu")} fitur👾`,
                  },
                  {
                    title: "Downloader Menu",
                    id: ".downloadmenu",
                    description: `total ${getFeatureCount("downloadmenu")} fitur📥`,
                  },
                  {
                    title: "Sticker Menu",
                    id: ".stickermenu",
                    description: `total ${getFeatureCount("stickermenu")} fitur🧩`,},
                  {
                    title: "Image Menu",
                    id: ".imagemenu",
                    description: `total ${getFeatureCount("imagemenu")} fitur🖼️`,},
                  {
                    title: "Tools Menu",
                    id: ".toolsmenu",
                    description: `total ${getFeatureCount("toolsmenu")} fitur🔧`,},
                  {
                    title: "Group Menu",
                    id: ".groupmenu",
                    description: `total ${getFeatureCount("groupmenu")} fitur👥`,},
                  {
                    title: "Jpm Menu",
                    id: ".jpmmenu",
                    description: `total ${getFeatureCount("jpmmenu")} fitur📢`,},
                  {
                    title: "Stalker Menu",
                    id: ".stalkmenu",
                    description: `total ${getFeatureCount("stalkmenu")} fitur👀`,},
                  {
                    title: "Search Menu",
                    id: ".searchmenu",
                    description: `total ${getFeatureCount("searchmenu")} fitur🔍`,},
                  {
                    title: "Random Menu",
                    id: ".radommenu",
                    description: `total ${getFeatureCount("radommenu")} fitur🎲`,},
                  {
                    title: "Store Menu",
                    id: ".storemenu",
                    description: `total ${getFeatureCount("storemenu")} fitur🛒`,},
                  {
                    title: "Fun Menu",
                    id: ".funmenu",
                    description: `total ${getFeatureCount("funmenu")} fitur🎭`,},
                  {
                    title: "Game Menu",
                    id: ".gamemenu",
                    description: `total ${getFeatureCount("gamemenu")} game rich🎮`,},
                  {
                    title: "Quote Menu",
                    id: ".quotemenu",
                    description: `total ${getFeatureCount("quotemenu")} fitur💬`,},
                  {
                    title: "Utility Menu",
                    id: ".utilitymenu",
                    description: `total ${getFeatureCount("utilitymenu")} fitur🛠️`,}
                ]
              }
            ]
          })
        }, 
        type: 1
      },
      {
        buttonId: "sc",
        buttonText: {
          displayText: "⌕ script"
        },
        type: 1
      }
    ],
    headerType: 6
  }
}, { quoted: m })
}

async function toolsmenu(luna, m, smsg, store, args) {
    const { prefix, total, date, thumb, statusUser, modeBot } = await getMenuContext(luna, m);
let anu =
`> Halo ${m.pushName}`

let menuText =
`👋 Perkenalkan nama saya *${global.botname}*, asisten bot WhatsApp yang siap membantu kamu kapan saja dengan berbagai fitur yang telah disediakan, mulai dari downloader, tools, hiburan, informasi, dan masih banyak lagi. Kamu bisa langsung klik tombol *menu* di bawah ini untuk melihat berbagai fitur yang tersedia dan menemukan apa yang kamu butuhkan dengan mudah

╭─〔 *INFORMATION BOT* 〕
│ *Creator ☇ ${global.namaOwner}*
│ *Bot Name ☇ ${global.botname}*
│ *Version ☇ ${global.versi}*
│ *Telegram ☇ ${global.tele}*
│ *Library ☇ noxleyss*
│ *Type ☇ case (CommonJS)*
│ *Status User ☇ ${statusUser}*
│ *Mode Bot ☇ ${modeBot}*
│ *Run Time ☇ ${runtime(process.uptime())}*
│ *Respons Speed ☇ ${latensi.toFixed(4)}*
│ *Total Fitur ☇ ${total} fitur*
╰──────────────

□ ./Tools.js_
└────────
│ ├─ ${prefix}tourl
│ ├─ ${prefix}tourl2
│ ├─ ${prefix}tourl3
│ ├─ ${prefix}catbox
│ ├─ ${prefix}webtozip
│ ├─ ${prefix}binary
│ ├─ ${prefix}ocr
│ ├─ ${prefix}iqc
│ ├─ ${prefix}iqcv2
│ ├─ ${prefix}apkmod
│ ├─ ${prefix}lemonmail
│ ├─ ${prefix}tempmail
│ ├─ ${prefix}gachano
│ ├─ ${prefix}cekotpgacha
│ ├─ ${prefix}skiplink
│ ├─ ${prefix}subs4unlock
│ ├─ ${prefix}sf
│ ├─ ${prefix}cekwa
│ ├─ ${prefix}enc
│ └────────`
luna.sendMessage(m.chat, {
  buttonsMessage: {
    locationMessage: {
      degreesLatitude: 0,
      degreesLongitude: 0,
      name: `${global.botname}`,
      address: `📍${date}`,
      jpegThumbnail: thumb
    },
    contentText: anu,
    footerText: menuText,
    buttons: [
      {
        buttonId: "menu",
        buttonText: {
          displayText: "☰ menu"
        },
        nativeFlowInfo: {
          name: "single_select",
          paramsJson: JSON.stringify({
            title: "Luna-MD",
            sections: [
              {
                title: `${global.botname}`,
                rows: [
                  {
                    title: "Ower Menu",
                    id: ".ownermenu",
                    description: `total ${getFeatureCount("ownermenu")} fitur👑`,
                  },
                  {
                    title: "Jadibot Menu",
                    id: ".jadibotmenu",
                    description: `total ${getFeatureCount("jadibotmenu")} fitur🤖`,
                  },
                  {
                    title: "Payment Menu",
                    id: ".paymentmenu",
                    description: `total ${getFeatureCount("paymentmenu")} fitur💳`,
                  },
                  {
                    title: "Pterodactyl Menu",
                    id: ".pterodactylmenu",
                    description: `total ${getFeatureCount("pterodactylmenu")} fitur🌐`,
                  },
                  {
                    title: "AI Menu",
                    id: ".aimenu",
                    description: `total ${getFeatureCount("aimenu")} fitur👾`,
                  },
                  {
                    title: "Downloader Menu",
                    id: ".downloadmenu",
                    description: `total ${getFeatureCount("downloadmenu")} fitur📥`,
                  },
                  {
                    title: "Sticker Menu",
                    id: ".stickermenu",
                    description: `total ${getFeatureCount("stickermenu")} fitur🧩`,},
                  {
                    title: "Image Menu",
                    id: ".imagemenu",
                    description: `total ${getFeatureCount("imagemenu")} fitur🖼️`,},
                  {
                    title: "Group Menu",
                    id: ".groupmenu",
                    description: `total ${getFeatureCount("groupmenu")} fitur👥`,},
                  {
                    title: "Jpm Menu",
                    id: ".jpmmenu",
                    description: `total ${getFeatureCount("jpmmenu")} fitur📢`,},
                  {
                    title: "Stalker Menu",
                    id: ".stalkmenu",
                    description: `total ${getFeatureCount("stalkmenu")} fitur👀`,},
                  {
                    title: "Search Menu",
                    id: ".searchmenu",
                    description: `total ${getFeatureCount("searchmenu")} fitur🔍`,},
                  {
                    title: "Random Menu",
                    id: ".radommenu",
                    description: `total ${getFeatureCount("radommenu")} fitur🎲`,},
                  {
                    title: "Store Menu",
                    id: ".storemenu",
                    description: `total ${getFeatureCount("storemenu")} fitur🛒`,},
                  {
                    title: "Fun Menu",
                    id: ".funmenu",
                    description: `total ${getFeatureCount("funmenu")} fitur🎭`,},
                  {
                    title: "Game Menu",
                    id: ".gamemenu",
                    description: `total ${getFeatureCount("gamemenu")} game rich🎮`,},
                  {
                    title: "Quote Menu",
                    id: ".quotemenu",
                    description: `total ${getFeatureCount("quotemenu")} fitur💬`,},
                  {
                    title: "Utility Menu",
                    id: ".utilitymenu",
                    description: `total ${getFeatureCount("utilitymenu")} fitur🛠️`,}
                ]
              }
            ]
          })
        }, 
        type: 1
      },
      {
        buttonId: "sc",
        buttonText: {
          displayText: "⌕ script"
        },
        type: 1
      }
    ],
    headerType: 6
  }
}, { quoted: m })
}

async function groupmenu(luna, m, smsg, store, args) {
    const { prefix, total, date, thumb, statusUser, modeBot } = await getMenuContext(luna, m);
let anu =
`> Halo ${m.pushName}`

let menuText =
`👋 Perkenalkan nama saya *${global.botname}*, asisten bot WhatsApp yang siap membantu kamu kapan saja dengan berbagai fitur yang telah disediakan, mulai dari downloader, tools, hiburan, informasi, dan masih banyak lagi. Kamu bisa langsung klik tombol *menu* di bawah ini untuk melihat berbagai fitur yang tersedia dan menemukan apa yang kamu butuhkan dengan mudah

╭─〔 *INFORMATION BOT* 〕
│ *Creator ☇ ${global.namaOwner}*
│ *Bot Name ☇ ${global.botname}*
│ *Version ☇ ${global.versi}*
│ *Telegram ☇ ${global.tele}*
│ *Library ☇ noxleyss*
│ *Type ☇ case (CommonJS)*
│ *Status User ☇ ${statusUser}*
│ *Mode Bot ☇ ${modeBot}*
│ *Run Time ☇ ${runtime(process.uptime())}*
│ *Respons Speed ☇ ${latensi.toFixed(4)}*
│ *Total Fitur ☇ ${total} fitur*
╰──────────────

□ ./Group.js_
└────────
│ ├─ ${prefix}open
│ ├─ ${prefix}opentime
│ ├─ ${prefix}closetime
│ ├─ ${prefix}antilink
│ ├─ ${prefix}antilink2
│ ├─ ${prefix}antilinkch
│ ├─ ${prefix}welcome
│ ├─ ${prefix}kudeta
│ ├─ ${prefix}mute
│ ├─ ${prefix}demote
│ ├─ ${prefix}tagall
│ ├─ ${prefix}ht
│ ├─ ${prefix}add
│ ├─ ${prefix}kick
│ ├─ ${prefix}leave
│ ├─ ${prefix}delete
│ ├─ ${prefix}idgc
│ └────────`
luna.sendMessage(m.chat, {
  buttonsMessage: {
    locationMessage: {
      degreesLatitude: 0,
      degreesLongitude: 0,
      name: `${global.botname}`,
      address: `📍${date}`,
      jpegThumbnail: thumb
    },
    contentText: anu,
    footerText: menuText,
    buttons: [
      {
        buttonId: "menu",
        buttonText: {
          displayText: "☰ menu"
        },
        nativeFlowInfo: {
          name: "single_select",
          paramsJson: JSON.stringify({
            title: "Luna-MD",
            sections: [
              {
                title: `${global.botname}`,
                rows: [
                  {
                    title: "Ower Menu",
                    id: ".ownermenu",
                    description: `total ${getFeatureCount("ownermenu")} fitur👑`,
                  },
                  {
                    title: "Jadibot Menu",
                    id: ".jadibotmenu",
                    description: `total ${getFeatureCount("jadibotmenu")} fitur🤖`,
                  },
                  {
                    title: "Payment Menu",
                    id: ".paymentmenu",
                    description: `total ${getFeatureCount("paymentmenu")} fitur💳`,
                  },
                  {
                    title: "Pterodactyl Menu",
                    id: ".pterodactylmenu",
                    description: `total ${getFeatureCount("pterodactylmenu")} fitur🌐`,
                  },
                  {
                    title: "AI Menu",
                    id: ".aimenu",
                    description: `total ${getFeatureCount("aimenu")} fitur👾`,
                  },
                  {
                    title: "Downloader Menu",
                    id: ".downloadmenu",
                    description: `total ${getFeatureCount("downloadmenu")} fitur📥`,
                  },
                  {
                    title: "Sticker Menu",
                    id: ".stickermenu",
                    description: `total ${getFeatureCount("stickermenu")} fitur🧩`,},
                  {
                    title: "Image Menu",
                    id: ".imagemenu",
                    description: `total ${getFeatureCount("imagemenu")} fitur🖼️`,},
                  {
                    title: "Maker Menu",
                    id: ".makermenu",
                    description: `total ${getFeatureCount("makermenu")} fitur🛠️`,},
                  {
                    title: "Tools Menu",
                    id: ".toolsmenu",
                    description: `total ${getFeatureCount("toolsmenu")} fitur🔧`,},
                  {
                    title: "Jpm Menu",
                    id: ".jpmmenu",
                    description: `total ${getFeatureCount("jpmmenu")} fitur📢`,},
                  {
                    title: "Stalker Menu",
                    id: ".stalkmenu",
                    description: `total ${getFeatureCount("stalkmenu")} fitur👀`,},
                  {
                    title: "Search Menu",
                    id: ".searchmenu",
                    description: `total ${getFeatureCount("searchmenu")} fitur🔍`,},
                  {
                    title: "Random Menu",
                    id: ".radommenu",
                    description: `total ${getFeatureCount("radommenu")} fitur🎲`,},
                  {
                    title: "Store Menu",
                    id: ".storemenu",
                    description: `total ${getFeatureCount("storemenu")} fitur🛒`,},
                  {
                    title: "Fun Menu",
                    id: ".funmenu",
                    description: `total ${getFeatureCount("funmenu")} fitur🎭`,},
                  {
                    title: "Game Menu",
                    id: ".gamemenu",
                    description: `total ${getFeatureCount("gamemenu")} game rich🎮`,},
                  {
                    title: "Quote Menu",
                    id: ".quotemenu",
                    description: `total ${getFeatureCount("quotemenu")} fitur💬`,},
                  {
                    title: "Utility Menu",
                    id: ".utilitymenu",
                    description: `total ${getFeatureCount("utilitymenu")} fitur🛠️`,}
                ]
              }
            ]
          })
        }, 
        type: 1
      },
      {
        buttonId: "sc",
        buttonText: {
          displayText: "⌕ script"
        },
        type: 1
      }
    ],
    headerType: 6
  }
}, { quoted: m })
}

async function jpmmenu(luna, m, smsg, store, args) {
    const { prefix, total, date, thumb, statusUser, modeBot } = await getMenuContext(luna, m);
let anu =
`> Halo ${m.pushName}`

let menuText =
`👋 Perkenalkan nama saya *${global.botname}*, asisten bot WhatsApp yang siap membantu kamu kapan saja dengan berbagai fitur yang telah disediakan, mulai dari downloader, tools, hiburan, informasi, dan masih banyak lagi. Kamu bisa langsung klik tombol *menu* di bawah ini untuk melihat berbagai fitur yang tersedia dan menemukan apa yang kamu butuhkan dengan mudah

╭─〔 *INFORMATION BOT* 〕
│ *Creator ☇ ${global.namaOwner}*
│ *Bot Name ☇ ${global.botname}*
│ *Version ☇ ${global.versi}*
│ *Telegram ☇ ${global.tele}*
│ *Library ☇ noxleyss*
│ *Type ☇ case (CommonJS)*
│ *Status User ☇ ${statusUser}*
│ *Mode Bot ☇ ${modeBot}*
│ *Run Time ☇ ${runtime(process.uptime())}*
│ *Respons Speed ☇ ${latensi.toFixed(4)}*
│ *Total Fitur ☇ ${total} fitur*
╰──────────────

□ ./Jpm.js_
└────────
│ ├─ ${prefix}addidch
│ ├─ ${prefix}delidch
│ ├─ ${prefix}jpmch
│ ├─ ${prefix}cekidch
│ ├─ ${prefix}jpm
│ ├─ ${prefix}jpm2
│ ├─ ${prefix}jpm3
│ ├─ ${prefix}savekontak
│ ├─ ${prefix}savekontak2
│ ├─ ${prefix}pushkontak
│ ├─ ${prefix}respushkontak
│ ├─ ${prefix}pushkontak2
│ ├─ ${prefix}upch
│ ├─ ${prefix}rvo
│ ├─ ${prefix}swgrup
│ └────────`
luna.sendMessage(m.chat, {
  buttonsMessage: {
    locationMessage: {
      degreesLatitude: 0,
      degreesLongitude: 0,
      name: `${global.botname}`,
      address: `📍${date}`,
      jpegThumbnail: thumb
    },
    contentText: anu,
    footerText: menuText,
    buttons: [
      {
        buttonId: "menu",
        buttonText: {
          displayText: "☰ menu"
        },
        nativeFlowInfo: {
          name: "single_select",
          paramsJson: JSON.stringify({
            title: "Luna-MD",
            sections: [
              {
                title: `${global.botname}`,
                rows: [
                  {
                    title: "Ower Menu",
                    id: ".ownermenu",
                    description: `total ${getFeatureCount("ownermenu")} fitur👑`,
                  },
                  {
                    title: "Jadibot Menu",
                    id: ".jadibotmenu",
                    description: `total ${getFeatureCount("jadibotmenu")} fitur🤖`,
                  },
                  {
                    title: "Payment Menu",
                    id: ".paymentmenu",
                    description: `total ${getFeatureCount("paymentmenu")} fitur💳`,
                  },
                  {
                    title: "Pterodactyl Menu",
                    id: ".pterodactylmenu",
                    description: `total ${getFeatureCount("pterodactylmenu")} fitur🌐`,
                  },
                  {
                    title: "AI Menu",
                    id: ".aimenu",
                    description: `total ${getFeatureCount("aimenu")} fitur👾`,
                  },
                  {
                    title: "Downloader Menu",
                    id: ".downloadmenu",
                    description: `total ${getFeatureCount("downloadmenu")} fitur📥`,
                  },
                  {
                    title: "Sticker Menu",
                    id: ".stickermenu",
                    description: `total ${getFeatureCount("stickermenu")} fitur🧩`,},
                  {
                    title: "Image Menu",
                    id: ".imagemenu",
                    description: `total ${getFeatureCount("imagemenu")} fitur🖼️`,},
                  {
                    title: "Maker Menu",
                    id: ".makermenu",
                    description: `total ${getFeatureCount("makermenu")} fitur🛠️`,},
                  {
                    title: "Tools Menu",
                    id: ".toolsmenu",
                    description: `total ${getFeatureCount("toolsmenu")} fitur🔧`,},
                  {
                    title: "Group Menu",
                    id: ".groupmenu",
                    description: `total ${getFeatureCount("groupmenu")} fitur👥`,},
                  {
                    title: "Stalker Menu",
                    id: ".stalkmenu",
                    description: `total ${getFeatureCount("stalkmenu")} fitur👀`,},
                  {
                    title: "Search Menu",
                    id: ".searchmenu",
                    description: `total ${getFeatureCount("searchmenu")} fitur🔍`,},
                  {
                    title: "Random Menu",
                    id: ".radommenu",
                    description: `total ${getFeatureCount("radommenu")} fitur🎲`,},
                  {
                    title: "Store Menu",
                    id: ".storemenu",
                    description: `total ${getFeatureCount("storemenu")} fitur🛒`,},
                  {
                    title: "Fun Menu",
                    id: ".funmenu",
                    description: `total ${getFeatureCount("funmenu")} fitur🎭`,},
                  {
                    title: "Game Menu",
                    id: ".gamemenu",
                    description: `total ${getFeatureCount("gamemenu")} game rich🎮`,},
                  {
                    title: "Quote Menu",
                    id: ".quotemenu",
                    description: `total ${getFeatureCount("quotemenu")} fitur💬`,},
                  {
                    title: "Utility Menu",
                    id: ".utilitymenu",
                    description: `total ${getFeatureCount("utilitymenu")} fitur🛠️`,}
                ]
              }
            ]
          })
        }, 
        type: 1
      },
      {
        buttonId: "sc",
        buttonText: {
          displayText: "⌕ script"
        },
        type: 1
      }
    ],
    headerType: 6
  }
}, { quoted: m })
}

async function stalkmenu(luna, m, smsg, store, args) {
    const { prefix, total, date, thumb, statusUser, modeBot } = await getMenuContext(luna, m);
let anu =
`> Halo ${m.pushName}`

let menuText =
`👋 Perkenalkan nama saya *${global.botname}*, asisten bot WhatsApp yang siap membantu kamu kapan saja dengan berbagai fitur yang telah disediakan, mulai dari downloader, tools, hiburan, informasi, dan masih banyak lagi. Kamu bisa langsung klik tombol *menu* di bawah ini untuk melihat berbagai fitur yang tersedia dan menemukan apa yang kamu butuhkan dengan mudah

╭─〔 *INFORMATION BOT* 〕
│ *Creator ☇ ${global.namaOwner}*
│ *Bot Name ☇ ${global.botname}*
│ *Version ☇ ${global.versi}*
│ *Telegram ☇ ${global.tele}*
│ *Library ☇ noxleyss*
│ *Type ☇ case (CommonJS)*
│ *Status User ☇ ${statusUser}*
│ *Mode Bot ☇ ${modeBot}*
│ *Run Time ☇ ${runtime(process.uptime())}*
│ *Respons Speed ☇ ${latensi.toFixed(4)}*
│ *Total Fitur ☇ ${total} fitur*
╰──────────────

□ ./Stalk.js_
└────────
│ ├─ ${prefix}mlstalk
│ ├─ ${prefix}ttstalk
│ ├─ ${prefix}cekbio
│ ├─ ${prefix}cekbio2
│ ├─ ${prefix}cekbio3
│ ├─ ${prefix}ff
│ ├─ ${prefix}igstalk
│ ├─ ${prefix}stalktele
│ ├─ ${prefix}steam
│ └────────`
luna.sendMessage(m.chat, {
  buttonsMessage: {
    locationMessage: {
      degreesLatitude: 0,
      degreesLongitude: 0,
      name: `${global.botname}`,
      address: `📍${date}`,
      jpegThumbnail: thumb
    },
    contentText: anu,
    footerText: menuText,
    buttons: [
      {
        buttonId: "menu",
        buttonText: {
          displayText: "☰ menu"
        },
        nativeFlowInfo: {
          name: "single_select",
          paramsJson: JSON.stringify({
            title: "Luna-MD",
            sections: [
              {
                title: `${global.botname}`,
                rows: [
                  {
                    title: "Ower Menu",
                    id: ".ownermenu",
                    description: `total ${getFeatureCount("ownermenu")} fitur👑`,
                  },
                  {
                    title: "Jadibot Menu",
                    id: ".jadibotmenu",
                    description: `total ${getFeatureCount("jadibotmenu")} fitur🤖`,
                  },
                  {
                    title: "Payment Menu",
                    id: ".paymentmenu",
                    description: `total ${getFeatureCount("paymentmenu")} fitur💳`,
                  },
                  {
                    title: "Pterodactyl Menu",
                    id: ".pterodactylmenu",
                    description: `total ${getFeatureCount("pterodactylmenu")} fitur🌐`,
                  },
                  {
                    title: "AI Menu",
                    id: ".aimenu",
                    description: `total ${getFeatureCount("aimenu")} fitur👾`,
                  },
                  {
                    title: "Downloader Menu",
                    id: ".downloadmenu",
                    description: `total ${getFeatureCount("downloadmenu")} fitur📥`,
                  },
                  {
                    title: "Sticker Menu",
                    id: ".stickermenu",
                    description: `total ${getFeatureCount("stickermenu")} fitur🧩`,},
                  {
                    title: "Image Menu",
                    id: ".imagemenu",
                    description: `total ${getFeatureCount("imagemenu")} fitur🖼️`,},
                  {
                    title: "Maker Menu",
                    id: ".makermenu",
                    description: `total ${getFeatureCount("makermenu")} fitur🛠️`,},
                  {
                    title: "Tools Menu",
                    id: ".toolsmenu",
                    description: `total ${getFeatureCount("toolsmenu")} fitur🔧`,},
                  {
                    title: "Group Menu",
                    id: ".groupmenu",
                    description: `total ${getFeatureCount("groupmenu")} fitur👥`,},
                  {
                    title: "Jpm Menu",
                    id: ".jpmmenu",
                    description: `total ${getFeatureCount("jpmmenu")} fitur📢`,},
                  {
                    title: "Search Menu",
                    id: ".searchmenu",
                    description: `total ${getFeatureCount("searchmenu")} fitur🔍`,},
                  {
                    title: "Random Menu",
                    id: ".radommenu",
                    description: `total ${getFeatureCount("radommenu")} fitur🎲`,},
                  {
                    title: "Store Menu",
                    id: ".storemenu",
                    description: `total ${getFeatureCount("storemenu")} fitur🛒`,},
                  {
                    title: "Fun Menu",
                    id: ".funmenu",
                    description: `total ${getFeatureCount("funmenu")} fitur🎭`,},
                  {
                    title: "Game Menu",
                    id: ".gamemenu",
                    description: `total ${getFeatureCount("gamemenu")} game rich🎮`,},
                  {
                    title: "Quote Menu",
                    id: ".quotemenu",
                    description: `total ${getFeatureCount("quotemenu")} fitur💬`,},
                  {
                    title: "Utility Menu",
                    id: ".utilitymenu",
                    description: `total ${getFeatureCount("utilitymenu")} fitur🛠️`,}
                ]
              }
            ]
          })
        }, 
        type: 1
      },
      {
        buttonId: "sc",
        buttonText: {
          displayText: "⌕ script"
        },
        type: 1
      }
    ],
    headerType: 6
  }
}, { quoted: m })
}

async function searchmenu(luna, m, smsg, store, args) {
    const { prefix, total, date, thumb, statusUser, modeBot } = await getMenuContext(luna, m);
let anu =
`> Halo ${m.pushName}`

let menuText =
`👋 Perkenalkan nama saya *${global.botname}*, asisten bot WhatsApp yang siap membantu kamu kapan saja dengan berbagai fitur yang telah disediakan, mulai dari downloader, tools, hiburan, informasi, dan masih banyak lagi. Kamu bisa langsung klik tombol *menu* di bawah ini untuk melihat berbagai fitur yang tersedia dan menemukan apa yang kamu butuhkan dengan mudah

╭─〔 *INFORMATION BOT* 〕
│ *Creator ☇ ${global.namaOwner}*
│ *Bot Name ☇ ${global.botname}*
│ *Version ☇ ${global.versi}*
│ *Telegram ☇ ${global.tele}*
│ *Library ☇ noxleyss*
│ *Type ☇ case (CommonJS)*
│ *Status User ☇ ${statusUser}*
│ *Mode Bot ☇ ${modeBot}*
│ *Run Time ☇ ${runtime(process.uptime())}*
│ *Respons Speed ☇ ${latensi.toFixed(4)}*
│ *Total Fitur ☇ ${total} fitur*
╰──────────────

□ ./Search.js_
└────────
│ ├─ ${prefix}cuaca
│ ├─ ${prefix}github
│ ├─ ${prefix}playstore
│ ├─ ${prefix}playstore2
│ ├─ ${prefix}detikcom
│ ├─ ${prefix}ffnews
│ ├─ ${prefix}ttphoto
│ ├─ ${prefix}happymood
│ ├─ ${prefix}groupsor
│ ├─ ${prefix}wikipedia
│ ├─ ${prefix}cekgempa
│ ├─ ${prefix}group
│ └────────`
luna.sendMessage(m.chat, {
  buttonsMessage: {
    locationMessage: {
      degreesLatitude: 0,
      degreesLongitude: 0,
      name: `${global.botname}`,
      address: `📍${date}`,
      jpegThumbnail: thumb
    },
    contentText: anu,
    footerText: menuText,
    buttons: [
      {
        buttonId: "menu",
        buttonText: {
          displayText: "☰ menu"
        },
        nativeFlowInfo: {
          name: "single_select",
          paramsJson: JSON.stringify({
            title: "Luna-MD",
            sections: [
              {
                title: `${global.botname}`,
                rows: [
                  {
                    title: "Ower Menu",
                    id: ".ownermenu",
                    description: `total ${getFeatureCount("ownermenu")} fitur👑`,
                  },
                  {
                    title: "Jadibot Menu",
                    id: ".jadibotmenu",
                    description: `total ${getFeatureCount("jadibotmenu")} fitur🤖`,
                  },
                  {
                    title: "Payment Menu",
                    id: ".paymentmenu",
                    description: `total ${getFeatureCount("paymentmenu")} fitur💳`,
                  },
                  {
                    title: "Pterodactyl Menu",
                    id: ".pterodactylmenu",
                    description: `total ${getFeatureCount("pterodactylmenu")} fitur🌐`,
                  },
                  {
                    title: "AI Menu",
                    id: ".aimenu",
                    description: `total ${getFeatureCount("aimenu")} fitur👾`,
                  },
                  {
                    title: "Downloader Menu",
                    id: ".downloadmenu",
                    description: `total ${getFeatureCount("downloadmenu")} fitur📥`,
                  },
                  {
                    title: "Sticker Menu",
                    id: ".stickermenu",
                    description: `total ${getFeatureCount("stickermenu")} fitur🧩`,},
                  {
                    title: "Image Menu",
                    id: ".imagemenu",
                    description: `total ${getFeatureCount("imagemenu")} fitur🖼️`,},
                  {
                    title: "Maker Menu",
                    id: ".makermenu",
                    description: `total ${getFeatureCount("makermenu")} fitur🛠️`,},
                  {
                    title: "Tools Menu",
                    id: ".toolsmenu",
                    description: `total ${getFeatureCount("toolsmenu")} fitur🔧`,},
                  {
                    title: "Group Menu",
                    id: ".groupmenu",
                    description: `total ${getFeatureCount("groupmenu")} fitur👥`,},
                  {
                    title: "Jpm Menu",
                    id: ".jpmmenu",
                    description: `total ${getFeatureCount("jpmmenu")} fitur📢`,},
                  {
                    title: "Stalker Menu",
                    id: ".stalkmenu",
                    description: `total ${getFeatureCount("stalkmenu")} fitur👀`,},
                  {
                    title: "Random Menu",
                    id: ".radommenu",
                    description: `total ${getFeatureCount("radommenu")} fitur🎲`,},
                  {
                    title: "Store Menu",
                    id: ".storemenu",
                    description: `total ${getFeatureCount("storemenu")} fitur🛒`,},
                  {
                    title: "Fun Menu",
                    id: ".funmenu",
                    description: `total ${getFeatureCount("funmenu")} fitur🎭`,},
                  {
                    title: "Game Menu",
                    id: ".gamemenu",
                    description: `total ${getFeatureCount("gamemenu")} game rich🎮`,},
                  {
                    title: "Quote Menu",
                    id: ".quotemenu",
                    description: `total ${getFeatureCount("quotemenu")} fitur💬`,},
                  {
                    title: "Utility Menu",
                    id: ".utilitymenu",
                    description: `total ${getFeatureCount("utilitymenu")} fitur🛠️`,}
                ]
              }
            ]
          })
        }, 
        type: 1
      },
      {
        buttonId: "sc",
        buttonText: {
          displayText: "⌕ script"
        },
        type: 1
      }
    ],
    headerType: 6
  }
}, { quoted: m })
}

async function randommenu(luna, m, smsg, store, args) {
    const { prefix, total, date, thumb, statusUser, modeBot } = await getMenuContext(luna, m);
let anu =
`> Halo ${m.pushName}`

let menuText =
`👋 Perkenalkan nama saya *${global.botname}*, asisten bot WhatsApp yang siap membantu kamu kapan saja dengan berbagai fitur yang telah disediakan, mulai dari downloader, tools, hiburan, informasi, dan masih banyak lagi. Kamu bisa langsung klik tombol *menu* di bawah ini untuk melihat berbagai fitur yang tersedia dan menemukan apa yang kamu butuhkan dengan mudah

╭─〔 *INFORMATION BOT* 〕
│ *Creator ☇ ${global.namaOwner}*
│ *Bot Name ☇ ${global.botname}*
│ *Version ☇ ${global.versi}*
│ *Telegram ☇ ${global.tele}*
│ *Library ☇ noxleyss*
│ *Type ☇ case (CommonJS)*
│ *Status User ☇ ${statusUser}*
│ *Mode Bot ☇ ${modeBot}*
│ *Run Time ☇ ${runtime(process.uptime())}*
│ *Respons Speed ☇ ${latensi.toFixed(4)}*
│ *Total Fitur ☇ ${total} fitur*
╰──────────────

□ ./Random.js_
└────────
│ ├─ ${prefix}pap
│ ├─ ${prefix}anime
│ ├─ ${prefix}loli
│ ├─ ${prefix}blue
│ ├─ ${prefix}meme
│ ├─ ${prefix}waifu
│ ├─ ${prefix}kucing
│ └────────`
luna.sendMessage(m.chat, {
  buttonsMessage: {
    locationMessage: {
      degreesLatitude: 0,
      degreesLongitude: 0,
      name: `${global.botname}`,
      address: `📍${date}`,
      jpegThumbnail: thumb
    },
    contentText: anu,
    footerText: menuText,
    buttons: [
      {
        buttonId: "menu",
        buttonText: {
          displayText: "☰ menu"
        },
        nativeFlowInfo: {
          name: "single_select",
          paramsJson: JSON.stringify({
            title: "Luna-MD",
            sections: [
              {
                title: `${global.botname}`,
                rows: [
                  {
                    title: "Ower Menu",
                    id: ".ownermenu",
                    description: `total ${getFeatureCount("ownermenu")} fitur👑`,
                  },
                  {
                    title: "Jadibot Menu",
                    id: ".jadibotmenu",
                    description: `total ${getFeatureCount("jadibotmenu")} fitur🤖`,
                  },
                  {
                    title: "Payment Menu",
                    id: ".paymentmenu",
                    description: `total ${getFeatureCount("paymentmenu")} fitur💳`,
                  },
                  {
                    title: "Pterodactyl Menu",
                    id: ".pterodactylmenu",
                    description: `total ${getFeatureCount("pterodactylmenu")} fitur🌐`,
                  },
                  {
                    title: "AI Menu",
                    id: ".aimenu",
                    description: `total ${getFeatureCount("aimenu")} fitur👾`,
                  },
                  {
                    title: "Downloader Menu",
                    id: ".downloadmenu",
                    description: `total ${getFeatureCount("downloadmenu")} fitur📥`,
                  },
                  {
                    title: "Sticker Menu",
                    id: ".stickermenu",
                    description: `total ${getFeatureCount("stickermenu")} fitur🧩`,},
                  {
                    title: "Image Menu",
                    id: ".imagemenu",
                    description: `total ${getFeatureCount("imagemenu")} fitur🖼️`,},
                  {
                    title: "Maker Menu",
                    id: ".makermenu",
                    description: `total ${getFeatureCount("makermenu")} fitur🛠️`,},
                  {
                    title: "Tools Menu",
                    id: ".toolsmenu",
                    description: `total ${getFeatureCount("toolsmenu")} fitur🔧`,},
                  {
                    title: "Group Menu",
                    id: ".groupmenu",
                    description: `total ${getFeatureCount("groupmenu")} fitur👥`,},
                  {
                    title: "Jpm Menu",
                    id: ".jpmmenu",
                    description: `total ${getFeatureCount("jpmmenu")} fitur📢`,},
                  {
                    title: "Stalker Menu",
                    id: ".stalkmenu",
                    description: `total ${getFeatureCount("stalkmenu")} fitur👀`,},
                  {
                    title: "Search Menu",
                    id: ".searchmenu",
                    description: `total ${getFeatureCount("searchmenu")} fitur🔍`,},
                  {
                    title: "Store Menu",
                    id: ".storemenu",
                    description: `total ${getFeatureCount("storemenu")} fitur🛒`,},
                  {
                    title: "Fun Menu",
                    id: ".funmenu",
                    description: `total ${getFeatureCount("funmenu")} fitur🎭`,},
                  {
                    title: "Game Menu",
                    id: ".gamemenu",
                    description: `total ${getFeatureCount("gamemenu")} game rich🎮`,},
                  {
                    title: "Quote Menu",
                    id: ".quotemenu",
                    description: `total ${getFeatureCount("quotemenu")} fitur💬`,},
                  {
                    title: "Utility Menu",
                    id: ".utilitymenu",
                    description: `total ${getFeatureCount("utilitymenu")} fitur🛠️`,}
                ]
              }
            ]
          })
        }, 
        type: 1
      },
      {
        buttonId: "sc",
        buttonText: {
          displayText: "⌕ script"
        },
        type: 1
      }
    ],
    headerType: 6
  }
}, { quoted: m })
}

async function storemenu(luna, m, smsg, store, args) {
    const { prefix, total, date, thumb, statusUser, modeBot } = await getMenuContext(luna, m);
let anu =
`> Halo ${m.pushName}`

let menuText =
`👋 Perkenalkan nama saya *${global.botname}*, asisten bot WhatsApp yang siap membantu kamu kapan saja dengan berbagai fitur yang telah disediakan, mulai dari downloader, tools, hiburan, informasi, dan masih banyak lagi. Kamu bisa langsung klik tombol *menu* di bawah ini untuk melihat berbagai fitur yang tersedia dan menemukan apa yang kamu butuhkan dengan mudah

╭─〔 *INFORMATION BOT* 〕
│ *Creator ☇ ${global.namaOwner}*
│ *Bot Name ☇ ${global.botname}*
│ *Version ☇ ${global.versi}*
│ *Telegram ☇ ${global.tele}*
│ *Library ☇ noxleyss*
│ *Type ☇ case (CommonJS)*
│ *Status User ☇ ${statusUser}*
│ *Mode Bot ☇ ${modeBot}*
│ *Run Time ☇ ${runtime(process.uptime())}*
│ *Respons Speed ☇ ${latensi.toFixed(4)}*
│ *Total Fitur ☇ ${total} fitur*
╰──────────────

□ ./Store.js_
└────────
│ ├─ ${prefix}ordertt
│ ├─ ${prefix}pesantt
│ ├─ ${prefix}ceksaldo
│ ├─ ${prefix}amsend
│ ├─ ${prefix}amsend2
│ ├─ ${prefix}amverif
│ └────────`
luna.sendMessage(m.chat, {
  buttonsMessage: {
    locationMessage: {
      degreesLatitude: 0,
      degreesLongitude: 0,
      name: `${global.botname}`,
      address: `📍${date}`,
      jpegThumbnail: thumb
    },
    contentText: anu,
    footerText: menuText,
    buttons: [
      {
        buttonId: "menu",
        buttonText: {
          displayText: "☰ menu"
        },
        nativeFlowInfo: {
          name: "single_select",
          paramsJson: JSON.stringify({
            title: "Luna-MD",
            sections: [
              {
                title: `${global.botname}`,
                rows: [
                  {
                    title: "Ower Menu",
                    id: ".ownermenu",
                    description: `total ${getFeatureCount("ownermenu")} fitur👑`,
                  },
                  {
                    title: "Jadibot Menu",
                    id: ".jadibotmenu",
                    description: `total ${getFeatureCount("jadibotmenu")} fitur🤖`,
                  },
                  {
                    title: "Payment Menu",
                    id: ".paymentmenu",
                    description: `total ${getFeatureCount("paymentmenu")} fitur💳`,
                  },
                  {
                    title: "Pterodactyl Menu",
                    id: ".pterodactylmenu",
                    description: `total ${getFeatureCount("pterodactylmenu")} fitur🌐`,
                  },
                  {
                    title: "AI Menu",
                    id: ".aimenu",
                    description: `total ${getFeatureCount("aimenu")} fitur👾`,
                  },
                  {
                    title: "Downloader Menu",
                    id: ".downloadmenu",
                    description: `total ${getFeatureCount("downloadmenu")} fitur📥`,
                  },
                  {
                    title: "Sticker Menu",
                    id: ".stickermenu",
                    description: `total ${getFeatureCount("stickermenu")} fitur🧩`,},
                  {
                    title: "Image Menu",
                    id: ".imagemenu",
                    description: `total ${getFeatureCount("imagemenu")} fitur🖼️`,},
                  {
                    title: "Maker Menu",
                    id: ".makermenu",
                    description: `total ${getFeatureCount("makermenu")} fitur🛠️`,},
                  {
                    title: "Tools Menu",
                    id: ".toolsmenu",
                    description: `total ${getFeatureCount("toolsmenu")} fitur🔧`,},
                  {
                    title: "Group Menu",
                    id: ".groupmenu",
                    description: `total ${getFeatureCount("groupmenu")} fitur👥`,},
                  {
                    title: "Jpm Menu",
                    id: ".jpmmenu",
                    description: `total ${getFeatureCount("jpmmenu")} fitur📢`,},
                  {
                    title: "Stalker Menu",
                    id: ".stalkmenu",
                    description: `total ${getFeatureCount("stalkmenu")} fitur👀`,},
                  {
                    title: "Search Menu",
                    id: ".searchmenu",
                    description: `total ${getFeatureCount("searchmenu")} fitur🔍`,},
                  {
                    title: "Random Menu",
                    id: ".radommenu",
                    description: `total ${getFeatureCount("radommenu")} fitur🎲`,},                  
                  {
                    title: "Fun Menu",
                    id: ".funmenu",
                    description: `total ${getFeatureCount("funmenu")} fitur🎭`,},
                  {
                    title: "Game Menu",
                    id: ".gamemenu",
                    description: `total ${getFeatureCount("gamemenu")} game rich🎮`,},
                  {
                    title: "Quote Menu",
                    id: ".quotemenu",
                    description: `total ${getFeatureCount("quotemenu")} fitur💬`,},
                  {
                    title: "Utility Menu",
                    id: ".utilitymenu",
                    description: `total ${getFeatureCount("utilitymenu")} fitur🛠️`,}
                ]
              }
            ]
          })
        }, 
        type: 1
      },
      {
        buttonId: "sc",
        buttonText: {
          displayText: "⌕ script"
        },
        type: 1
      }
    ],
    headerType: 6
  }
}, { quoted: m })
}

async function funmenu(luna, m, smsg, store, args) {
    const { prefix, total, date, thumb, statusUser, modeBot } = await getMenuContext(luna, m);
let anu =
`> Halo ${m.pushName}`

let menuText =
`👋 Perkenalkan nama saya *${global.botname}*, asisten bot WhatsApp yang siap membantu kamu kapan saja dengan berbagai fitur yang telah disediakan, mulai dari downloader, tools, hiburan, informasi, dan masih banyak lagi. Kamu bisa langsung klik tombol *menu* di bawah ini untuk melihat berbagai fitur yang tersedia dan menemukan apa yang kamu butuhkan dengan mudah

╭─〔 *INFORMATION BOT* 〕
│ *Creator ☇ ${global.namaOwner}*
│ *Bot Name ☇ ${global.botname}*
│ *Version ☇ ${global.versi}*
│ *Telegram ☇ ${global.tele}*
│ *Library ☇ noxleyss*
│ *Type ☇ case (CommonJS)*
│ *Status User ☇ ${statusUser}*
│ *Mode Bot ☇ ${modeBot}*
│ *Run Time ☇ ${runtime(process.uptime())}*
│ *Respons Speed ☇ ${latensi.toFixed(4)}*
│ *Total Fitur ☇ ${total} fitur*
╰──────────────

□ ./Fun.js_
└────────
│ ├─ ${prefix}cekgila
│ ├─ ${prefix}jodoh
│ ├─ ${prefix}serfikat
│ ├─ ${prefix}motivasi
│ ├─ ${prefix}cekganteng
│ ├─ ${prefix}cekkhodam
│ ├─ ${prefix}roasting
│ ├─ ${prefix}cecan
│ ├─ ${prefix}cogan
│ ├─ ${prefix}animefind
│ ├─ ${prefix}dongeng
│ ├─ ${prefix}jarak
│ └────────`
luna.sendMessage(m.chat, {
  buttonsMessage: {
    locationMessage: {
      degreesLatitude: 0,
      degreesLongitude: 0,
      name: `${global.botname}`,
      address: `📍${date}`,
      jpegThumbnail: thumb
    },
    contentText: anu,
    footerText: menuText,
    buttons: [
      {
        buttonId: "menu",
        buttonText: {
          displayText: "☰ menu"
        },
        nativeFlowInfo: {
          name: "single_select",
          paramsJson: JSON.stringify({
            title: "Luna-MD",
            sections: [
              {
                title: `${global.botname}`,
                rows: [
                  {
                    title: "Ower Menu",
                    id: ".ownermenu",
                    description: `total ${getFeatureCount("ownermenu")} fitur👑`,
                  },
                  {
                    title: "Jadibot Menu",
                    id: ".jadibotmenu",
                    description: `total ${getFeatureCount("jadibotmenu")} fitur🤖`,
                  },
                  {
                    title: "Payment Menu",
                    id: ".paymentmenu",
                    description: `total ${getFeatureCount("paymentmenu")} fitur💳`,
                  },
                  {
                    title: "Pterodactyl Menu",
                    id: ".pterodactylmenu",
                    description: `total ${getFeatureCount("pterodactylmenu")} fitur🌐`,
                  },
                  {
                    title: "AI Menu",
                    id: ".aimenu",
                    description: `total ${getFeatureCount("aimenu")} fitur👾`,
                  },
                  {
                    title: "Downloader Menu",
                    id: ".downloadmenu",
                    description: `total ${getFeatureCount("downloadmenu")} fitur📥`,
                  },
                  {
                    title: "Sticker Menu",
                    id: ".stickermenu",
                    description: `total ${getFeatureCount("stickermenu")} fitur🧩`,},
                  {
                    title: "Image Menu",
                    id: ".imagemenu",
                    description: `total ${getFeatureCount("imagemenu")} fitur🖼️`,},
                  {
                    title: "Maker Menu",
                    id: ".makermenu",
                    description: `total ${getFeatureCount("makermenu")} fitur🛠️`,},
                  {
                    title: "Tools Menu",
                    id: ".toolsmenu",
                    description: `total ${getFeatureCount("toolsmenu")} fitur🔧`,},
                  {
                    title: "Group Menu",
                    id: ".groupmenu",
                    description: `total ${getFeatureCount("groupmenu")} fitur👥`,},
                  {
                    title: "Jpm Menu",
                    id: ".jpmmenu",
                    description: `total ${getFeatureCount("jpmmenu")} fitur📢`,},
                  {
                    title: "Stalker Menu",
                    id: ".stalkmenu",
                    description: `total ${getFeatureCount("stalkmenu")} fitur👀`,},
                  {
                    title: "Search Menu",
                    id: ".searchmenu",
                    description: `total ${getFeatureCount("searchmenu")} fitur🔍`,},
                  {
                    title: "Random Menu",
                    id: ".radommenu",
                    description: `total ${getFeatureCount("radommenu")} fitur🎲`,},
                  {
                    title: "Store Menu",
                    id: ".storemenu",
                    description: `total ${getFeatureCount("storemenu")} fitur🛒`,},
                  {
                    title: "Quote Menu",
                    id: ".quotemenu",
                    description: `total ${getFeatureCount("quotemenu")} fitur💬`,},
                  {
                    title: "Utility Menu",
                    id: ".utilitymenu",
                    description: `total ${getFeatureCount("utilitymenu")} fitur🛠️`,}
                ]
              }
            ]
          })
        }, 
        type: 1
      },
      {
        buttonId: "sc",
        buttonText: {
          displayText: "⌕ script"
        },
        type: 1
      }
    ],
    headerType: 6
  }
}, { quoted: m })
}

async function gamemenu(luna, m, smsg, store, args) {
    const { prefix, total, date, thumb, statusUser, modeBot } = await getMenuContext(luna, m);
let anu =
`> Halo ${m.pushName}`

let menuText =
`👋 Perkenalkan nama saya *${global.botname}*, asisten bot WhatsApp yang siap membantu kamu kapan saja dengan berbagai fitur yang telah disediakan, mulai dari downloader, tools, hiburan, informasi, dan masih banyak lagi. Kamu bisa langsung klik tombol *menu* di bawah ini untuk melihat berbagai fitur yang tersedia dan menemukan apa yang kamu butuhkan dengan mudah

╭─〔 *INFORMATION BOT* 〕
│ *Creator ☇ ${global.namaOwner}*
│ *Bot Name ☇ ${global.botname}*
│ *Version ☇ ${global.versi}*
│ *Telegram ☇ ${global.tele}*
│ *Library ☇ noxleyss*
│ *Type ☇ case (CommonJS)*
│ *Status User ☇ ${statusUser}*
│ *Mode Bot ☇ ${modeBot}*
│ *Run Time ☇ ${runtime(process.uptime())}*
│ *Respons Speed ☇ ${latensi.toFixed(4)}*
│ *Total Fitur ☇ ${total} fitur*
╰──────────────

□ ./Game.js_
└────────
│ ├─ ${prefix}slot777
│ ├─ ${prefix}dino
│ ├─ ${prefix}mbim
│ ├─ ${prefix}tebakbom
│ ├─ ${prefix}tebakangka
│ ├─ ${prefix}togel
│ ├─ ${prefix}ttt
│ ├─ ${prefix}stickman
│ ├─ ${prefix}mortal
│ ├─ ${prefix}memory-match
│ ├─ ${prefix}mahjong
│ ├─ ${prefix}puzzle
│ ├─ ${prefix}arrow
│ ├─ ${prefix}racing
│ ├─ ${prefix}angrybirds
│ ├─ ${prefix}flappy
│ ├─ ${prefix}snake-rimba
│ ├─ ${prefix}snake
│ ├─ ${prefix}geometry
│ ├─ ${prefix}tetris
│ ├─ ${prefix}sonic
│ ├─ ${prefix}chess
│ └────────`;
luna.sendMessage(m.chat, {
  buttonsMessage: {
    locationMessage: {
      degreesLatitude: 0,
      degreesLongitude: 0,
      name: `${global.botname}`,
      address: `📍${date}`,
      jpegThumbnail: thumb
    },
    contentText: anu,
    footerText: menuText,
    buttons: [
      {
        buttonId: "menu",
        buttonText: {
          displayText: "☰ menu"
        },
        nativeFlowInfo: {
          name: "single_select",
          paramsJson: JSON.stringify({
            title: "Luna-MD",
            sections: [
              {
                title: `${global.botname}`,
                rows: [
                  {
                    title: "Ower Menu",
                    id: ".ownermenu",
                    description: `total ${getFeatureCount("ownermenu")} fitur👑`,
                  },
                  {
                    title: "Payment Menu",
                    id: ".paymentmenu",
                    description: `total ${getFeatureCount("paymentmenu")} fitur💳`,
                  },
                  {
                    title: "Pterodactyl Menu",
                    id: ".pterodactylmenu",
                    description: `total ${getFeatureCount("pterodactylmenu")} fitur🌐`,
                  },
                  {
                    title: "AI Menu",
                    id: ".aimenu",
                    description: `total ${getFeatureCount("aimenu")} fitur👾`,
                  },
                  {
                    title: "Downloader Menu",
                    id: ".downloadmenu",
                    description: `total ${getFeatureCount("downloadmenu")} fitur📥`,
                  },
                  {
                    title: "Sticker Menu",
                    id: ".stickermenu",
                    description: `total ${getFeatureCount("stickermenu")} fitur🧩`,},
                  {
                    title: "Image Menu",
                    id: ".imagemenu",
                    description: `total ${getFeatureCount("imagemenu")} fitur🖼️`,},
                  {
                    title: "Maker Menu",
                    id: ".makermenu",
                    description: `total ${getFeatureCount("makermenu")} fitur🛠️`,},
                  {
                    title: "Tools Menu",
                    id: ".toolsmenu",
                    description: `total ${getFeatureCount("toolsmenu")} fitur🔧`,},
                  {
                    title: "Group Menu",
                    id: ".groupmenu",
                    description: `total ${getFeatureCount("groupmenu")} fitur👥`,},
                  {
                    title: "Jpm Menu",
                    id: ".jpmmenu",
                    description: `total ${getFeatureCount("jpmmenu")} fitur📢`,},
                  {
                    title: "Stalker Menu",
                    id: ".stalkmenu",
                    description: `total ${getFeatureCount("stalkmenu")} fitur👀`,},
                  {
                    title: "Search Menu",
                    id: ".searchmenu",
                    description: `total ${getFeatureCount("searchmenu")} fitur🔍`,},
                  {
                    title: "Random Menu",
                    id: ".radommenu",
                    description: `total ${getFeatureCount("radommenu")} fitur🎲`,},
                  {
                    title: "Store Menu",
                    id: ".storemenu",
                    description: `total ${getFeatureCount("storemenu")} fitur🛒`,},
                  {
                    title: "Fun Menu",
                    id: ".funmenu",
                    description: `total ${getFeatureCount("funmenu")} fitur🎭`,},
                  {
                    title: "Quote Menu",
                    id: ".quotemenu",
                    description: `total ${getFeatureCount("quotemenu")} fitur💬`,},
                  {
                    title: "Utility Menu",
                    id: ".utilitymenu",
                    description: `total ${getFeatureCount("utilitymenu")} fitur🛠️`,}
                ]
              }
            ]
          })
        }, 
        type: 1
      },
      {
        buttonId: "sc",
        buttonText: {
          displayText: "⌕ script"
        },
        type: 1
      }
    ],
    headerType: 6
  }
}, { quoted: m })
}

async function quotemenu(luna, m, smsg, store, args) {
    const { prefix, total, date, thumb, statusUser, modeBot } = await getMenuContext(luna, m);
let anu =
`> Halo ${m.pushName}`

let menuText =
`👋 Perkenalkan nama saya *${global.botname}*, asisten bot WhatsApp yang siap membantu kamu kapan saja dengan berbagai fitur yang telah disediakan, mulai dari downloader, tools, hiburan, informasi, dan masih banyak lagi. Kamu bisa langsung klik tombol *menu* di bawah ini untuk melihat berbagai fitur yang tersedia dan menemukan apa yang kamu butuhkan dengan mudah

╭─〔 *INFORMATION BOT* 〕
│ *Creator ☇ ${global.namaOwner}*
│ *Bot Name ☇ ${global.botname}*
│ *Version ☇ ${global.versi}*
│ *Telegram ☇ ${global.tele}*
│ *Library ☇ noxleyss*
│ *Type ☇ case (CommonJS)*
│ *Status User ☇ ${statusUser}*
│ *Mode Bot ☇ ${modeBot}*
│ *Run Time ☇ ${runtime(process.uptime())}*
│ *Respons Speed ☇ ${latensi.toFixed(4)}*
│ *Total Fitur ☇ ${total} fitur*
╰──────────────

□ ./Quote.js_
└────────
│ ├─ ${prefix}qc
│ ├─ ${prefix}quoteimg
│ ├─ ${prefix}createquote
│ └────────`
luna.sendMessage(m.chat, {
  buttonsMessage: {
    locationMessage: {
      degreesLatitude: 0,
      degreesLongitude: 0,
      name: `${global.botname}`,
      address: `📍${date}`,
      jpegThumbnail: thumb
    },
    contentText: anu,
    footerText: menuText,
    buttons: [
      {
        buttonId: "menu",
        buttonText: {
          displayText: "☰ menu"
        },
        nativeFlowInfo: {
          name: "single_select",
          paramsJson: JSON.stringify({
            title: "Luna-MD",
            sections: [
              {
                title: `${global.botname}`,
                rows: [
                  {
                    title: "Ower Menu",
                    id: ".ownermenu",
                    description: `total ${getFeatureCount("ownermenu")} fitur👑`,
                  },
                  {
                    title: "Jadibot Menu",
                    id: ".jadibotmenu",
                    description: `total ${getFeatureCount("jadibotmenu")} fitur🤖`,
                  },
                  {
                    title: "Payment Menu",
                    id: ".paymentmenu",
                    description: `total ${getFeatureCount("paymentmenu")} fitur💳`,
                  },
                  {
                    title: "Pterodactyl Menu",
                    id: ".pterodactylmenu",
                    description: `total ${getFeatureCount("pterodactylmenu")} fitur🌐`,
                  },
                  {
                    title: "AI Menu",
                    id: ".aimenu",
                    description: `total ${getFeatureCount("aimenu")} fitur👾`,
                  },
                  {
                    title: "Downloader Menu",
                    id: ".downloadmenu",
                    description: `total ${getFeatureCount("downloadmenu")} fitur📥`,
                  },
                  {
                    title: "Sticker Menu",
                    id: ".stickermenu",
                    description: `total ${getFeatureCount("stickermenu")} fitur🧩`,},
                  {
                    title: "Image Menu",
                    id: ".imagemenu",
                    description: `total ${getFeatureCount("imagemenu")} fitur🖼️`,},
                  {
                    title: "Maker Menu",
                    id: ".makermenu",
                    description: `total ${getFeatureCount("makermenu")} fitur🛠️`,},
                  {
                    title: "Tools Menu",
                    id: ".toolsmenu",
                    description: `total ${getFeatureCount("toolsmenu")} fitur🔧`,},
                  {
                    title: "Group Menu",
                    id: ".groupmenu",
                    description: `total ${getFeatureCount("groupmenu")} fitur👥`,},
                  {
                    title: "Jpm Menu",
                    id: ".jpmmenu",
                    description: `total ${getFeatureCount("jpmmenu")} fitur📢`,},
                  {
                    title: "Stalker Menu",
                    id: ".stalkmenu",
                    description: `total ${getFeatureCount("stalkmenu")} fitur👀`,},
                  {
                    title: "Search Menu",
                    id: ".searchmenu",
                    description: `total ${getFeatureCount("searchmenu")} fitur🔍`,},
                  {
                    title: "Random Menu",
                    id: ".radommenu",
                    description: `total ${getFeatureCount("radommenu")} fitur🎲`,},
                  {
                    title: "Store Menu",
                    id: ".storemenu",
                    description: `total ${getFeatureCount("storemenu")} fitur🛒`,},
                  {
                    title: "Fun Menu",
                    id: ".funmenu",
                    description: `total ${getFeatureCount("funmenu")} fitur🎭`,},
                  {
                    title: "Utility Menu",
                    id: ".utilitymenu",
                    description: `total ${getFeatureCount("utilitymenu")} fitur🛠️`,}
                ]
              }
            ]
          })
        }, 
        type: 1
      },
      {
        buttonId: "sc",
        buttonText: {
          displayText: "⌕ script"
        },
        type: 1
      }
    ],
    headerType: 6
  }
}, { quoted: m })
}

async function utilitymenu(luna, m, smsg, store, args) {
    const { prefix, total, date, thumb, statusUser, modeBot } = await getMenuContext(luna, m);
let anu =
`> Halo ${m.pushName}`

let menuText =
`👋 Perkenalkan nama saya *${global.botname}*, asisten bot WhatsApp yang siap membantu kamu kapan saja dengan berbagai fitur yang telah disediakan, mulai dari downloader, tools, hiburan, informasi, dan masih banyak lagi. Kamu bisa langsung klik tombol *menu* di bawah ini untuk melihat berbagai fitur yang tersedia dan menemukan apa yang kamu butuhkan dengan mudah

╭─〔 *INFORMATION BOT* 〕
│ *Creator ☇ ${global.namaOwner}*
│ *Bot Name ☇ ${global.botname}*
│ *Version ☇ ${global.versi}*
│ *Telegram ☇ ${global.tele}*
│ *Library ☇ noxleyss*
│ *Type ☇ case (CommonJS)*
│ *Status User ☇ ${statusUser}*
│ *Mode Bot ☇ ${modeBot}*
│ *Run Time ☇ ${runtime(process.uptime())}*
│ *Respons Speed ☇ ${latensi.toFixed(4)}*
│ *Total Fitur ☇ ${total} fitur*
╰──────────────

□ ./Utility.js_
└────────
│ ├─ ${prefix}totalchat
│ ├─ ${prefix}cekkalender
│ ├─ ${prefix}readmore
│ ├─ ${prefix}totalfitur
│ └────────`
luna.sendMessage(m.chat, {
  buttonsMessage: {
    locationMessage: {
      degreesLatitude: 0,
      degreesLongitude: 0,
      name: `${global.botname}`,
      address: `📍${date}`,
      jpegThumbnail: thumb
    },
    contentText: anu,
    footerText: menuText,
    buttons: [
      {
        buttonId: "menu",
        buttonText: {
          displayText: "☰ menu"
        },
        nativeFlowInfo: {
          name: "single_select",
          paramsJson: JSON.stringify({
            title: "Luna-MD",
            sections: [
              {
                title: `${global.botname}`,
                rows: [
                  {
                    title: "Ower Menu",
                    id: ".ownermenu",
                    description: `total ${getFeatureCount("ownermenu")} fitur👑`,
                  },
                  {
                    title: "Jadibot Menu",
                    id: ".jadibotmenu",
                    description: `total ${getFeatureCount("jadibotmenu")} fitur🤖`,
                  },
                  {
                    title: "Payment Menu",
                    id: ".paymentmenu",
                    description: `total ${getFeatureCount("paymentmenu")} fitur💳`,
                  },
                  {
                    title: "Pterodactyl Menu",
                    id: ".pterodactylmenu",
                    description: `total ${getFeatureCount("pterodactylmenu")} fitur🌐`,
                  },
                  {
                    title: "AI Menu",
                    id: ".aimenu",
                    description: `total ${getFeatureCount("aimenu")} fitur👾`,
                  },
                  {
                    title: "Downloader Menu",
                    id: ".downloadmenu",
                    description: `total ${getFeatureCount("downloadmenu")} fitur📥`,
                  },
                  {
                    title: "Sticker Menu",
                    id: ".stickermenu",
                    description: `total ${getFeatureCount("stickermenu")} fitur🧩`,},
                  {
                    title: "Image Menu",
                    id: ".imagemenu",
                    description: `total ${getFeatureCount("imagemenu")} fitur🖼️`,},
                  {
                    title: "Maker Menu",
                    id: ".makermenu",
                    description: `total ${getFeatureCount("makermenu")} fitur🛠️`,},
                  {
                    title: "Tools Menu",
                    id: ".toolsmenu",
                    description: `total ${getFeatureCount("toolsmenu")} fitur🔧`,},
                  {
                    title: "Group Menu",
                    id: ".groupmenu",
                    description: `total ${getFeatureCount("groupmenu")} fitur👥`,},
                  {
                    title: "Jpm Menu",
                    id: ".jpmmenu",
                    description: `total ${getFeatureCount("jpmmenu")} fitur📢`,},
                  {
                    title: "Stalker Menu",
                    id: ".stalkmenu",
                    description: `total ${getFeatureCount("stalkmenu")} fitur👀`,},
                  {
                    title: "Search Menu",
                    id: ".searchmenu",
                    description: `total ${getFeatureCount("searchmenu")} fitur🔍`,},
                  {
                    title: "Random Menu",
                    id: ".radommenu",
                    description: `total ${getFeatureCount("radommenu")} fitur🎲`,},
                  {
                    title: "Store Menu",
                    id: ".storemenu",
                    description: `total ${getFeatureCount("storemenu")} fitur🛒`,},
                  {
                    title: "Fun Menu",
                    id: ".funmenu",
                    description: `total ${getFeatureCount("funmenu")} fitur🎭`,},
                  {
                    title: "Quote Menu",
                    id: ".quotemenu",
                    description: `total ${getFeatureCount("quotemenu")} fitur💬`,}
                ]
              }
            ]
          })
        }, 
        type: 1
      },
      {
        buttonId: "sc",
        buttonText: {
          displayText: "⌕ script"
        },
        type: 1
      }
    ],
    headerType: 6
  }
}, { quoted: m })
}

const paymenu = paymentmenu;

module.exports = {
    menu,
    allmenu,
    ownermenu,
    jadibotmenu,
    paymentmenu,
    paymenu,
    pterodactylmenu,
    aimenu,
    downloadmenu,
    stickermenu,
    imagemenu,
    makermenu,
    toolsmenu,
    groupmenu,
    jpmmenu,
    stalkmenu,
    searchmenu,
    randommenu,
    storemenu,
    funmenu,
    gamemenu,
    quotemenu,
    utilitymenu,
    totalfitur
};
