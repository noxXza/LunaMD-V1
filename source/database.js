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

require('../settings');
const fs = require('fs');
const path = require('path');
const chalk = require('chalk');
const mongoose = require('mongoose');
let DataBase;

if (/mongo/.test("database.json")) {
	DataBase = class mongoDB {
		constructor(url, options = { useNewUrlParser: true, useUnifiedTopology: true }) {
			this.url = url
			this.data = {}
			this._model = {}
			this.options = options
		}
		
		read = async () => {
			mongoose.connect(this.url, { ...this.options })
			this.connection = mongoose.connection
			try {
				const schema = new mongoose.Schema({
					data: {
						type: Object,
						required: true,
						default: {},
					}
				})
				this._model = mongoose.model('data', schema)
			} catch {
				this._model = mongoose.model('data')
			}
			this.data = await this._model.findOne({})
			if (!this.data) {
				new this._model({ data: {} }).save()
				this.data = await this._model.findOne({})
			} else return this?.data?.data || this?.data
		}
		
		write = async (data) => {
			if (this.data && !this.data.data) return (new this._model({ data })).save()
			this._model.findById(this.data._id, (err, docs) => {
				if (!err) {
					if (!docs.data) docs.data = {}
					docs.data = data
					return docs.save()
				}
			})
		}
	}
} else if (/json/.test("database.json")) {
	DataBase = class dataBase {
		constructor() {
			this.data = {}
			this.file = path.join(process.cwd(), 'library/database', 'database.json')
			this.writePromise = Promise.resolve()
		}

		read = async () => {
			try {
				await fs.promises.mkdir(path.dirname(this.file), { recursive: true })
				const raw = await fs.promises.readFile(this.file, 'utf8').catch(() => null)
				if (!raw) {
					this.data = {}
					await fs.promises.writeFile(this.file, JSON.stringify(this.data, null, 2), 'utf8')
					return this.data
				}
				this.data = JSON.parse(raw)
				return this.data
			} catch (error) {
				console.error('[DATABASE READ]', error)
				return this.data || {}
			}
		}

		write = async (data) => {
			this.data = data || global.db || this.data || {}
			const payload = JSON.stringify(this.data, null, 2)
			const file = this.file
			
			this.writePromise = this.writePromise
				.catch(() => {})
				.then(async () => {
					await fs.promises.mkdir(path.dirname(file), { recursive: true })
					const tmp = `${file}.tmp`
					await fs.promises.writeFile(tmp, payload, 'utf8')
					await fs.promises.rename(tmp, file)
				})

			return this.writePromise
		}
	}
}

module.exports = DataBase

