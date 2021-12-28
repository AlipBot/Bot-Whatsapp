/*
        @ reamake script by Azex229
	@ kalau mahu script asal pergi ke ZeeoneOfc
	@ Last Update
	@ No enc bisa buy , silahkan tes bot ini sebelum buy biar gk ribet ntr 🐦
*/

const
	{
		WAConnection: _WAConnection,
		MessageType,
		Presence,
		MessageOptions,
		Mimetype,
		WALocationMessage,
		WA_MESSAGE_STUB_TYPES,
		WA_DEFAULT_EPHEMERAL,
		WAMessageProto,
		ReconnectMode,
		ProxyAgent,
		GroupSettingChange,
		waChatKey,
		relayWAMessage,
		mentionedJid,
		processTime
	} = require("@adiwajshing/baileys")
const qrcode = require("qrcode-terminal")
const moment = require("moment-timezone")
const fs = require("fs")
const axios = require("axios")
const toMs = require('ms')
const chalk = require("chalk")
const crypto = require('crypto')
const util = require('util');
const speed = require('performance-now')
const yts = require( 'yt-search')
const ms = require('parse-ms')
const brainly = require('brainly-scraper')
const ffmpeg = require('fluent-ffmpeg')
//const imgbb = require('imgbb-uploader')
const request = require('request')
const fetch = require('node-fetch')
const path = require('path')
const cd = 4.32e+7
const { spawn, exec, execSync } = require("child_process")
const hx = require('hxz-api')
const { EmojiAPI } = require("emoji-api");
const emoji = new EmojiAPI()
const { webp2mp4File} = require('./lib/webp2mp4')
const { lirikLagu } = require('./lib/lirik.js');
const simple = require('./lib/simple.js')
const { color, bgcolor } = require('./lib/color')
const translate = require('./lib/translate')
const { mediafireDl } = require('./lib/mediafire.js')
const { webp2gifFile } = require("./lib/gif.js")
const { fetchJson, getBase64, kyun, createExif } = require('./lib/fetcher')
const { isLimit, limitAdd, getLimit, giveLimit, addBalance, kurangBalance, getBalance, isGame, gameAdd, givegame, cekGLimit } = require("./lib/aboutuser")
const { getBuffer, h2k, generateMessageID, getGroupAdmins, getRandom, banner, start, info, success, close } = require('./lib/functions')
const Exif = require('./lib/exif');
const exif = new Exif();
const { pShadow,pRomantic,pSmoke,pBurnPapper,pNaruto,pLoveMsg,pMsgGrass,pGlitch,pDoubleHeart,pCoffeCup,pLoveText,pButterfly } = require('./lib/photooxy')
const { msgFilter } = require('./lib/antispam')
const premium = require('./lib/premium')
const _sewa = require("./lib/sewa")
const { addVote, delVote } = require('./database/voting/vote')
const afk = require("./lib/afk")
const setTtt = require('./lib/tictactoe.js')
const { yta2, ytv2} = require('./lib/y2mate')
const { yta, ytv, upload } = require('./lib/ytdl')
const menubot = require('./menu/azex229.js')
const { wikiSearch } = require('./lib/wiki.js')
const { sewabotkak } = require('./lib/sewabot.js')
const { uploadImages } = require('./lib/uploadimage')
const { addBadword, delBadword, isKasar, addCountKasar, isCountKasar, delCountKasar } = require("./lib/badword");
const { addCommands, getJawabanCmd, getSoalCmd, getCommandsPosi, checkCommands, isCreated, deleteCommands } = require('./lib/commands')
const lolkey = '78bd89cd7b4d6205e3e18061' 

			const tictactoe = JSON.parse(fs.readFileSync("./database/tictactoe.json"))
			const _win = JSON.parse(fs.readFileSync('./database/tttwin.json'))
			const _lose = JSON.parse(fs.readFileSync('./database/tttlose.json'))
			const voting = JSON.parse(fs.readFileSync('./database/voting/voting.json'))
			const ban = JSON.parse(fs.readFileSync('./database/banned.json'))
			const setting = JSON.parse(fs.readFileSync('./settings.json'))
			const _user = JSON.parse(fs.readFileSync('./database/user.json'))
			const limit = JSON.parse(fs.readFileSync('./database/limit.json'))
			const _premium = JSON.parse(fs.readFileSync('./database/premium.json'))
			const sewa = JSON.parse(fs.readFileSync('./database/sewa.json'))
			const _level = JSON.parse(fs.readFileSync('./database/level.json'))
			const _afk = JSON.parse(fs.readFileSync('./database/afk.json'))
			const antilink = JSON.parse(fs.readFileSync('./database/antilink.json'))
			const atro = JSON.parse(fs.readFileSync('./database/ATO.json'))
			const welkom = JSON.parse(fs.readFileSync('./database/welcome.json'))
			const balance = JSON.parse(fs.readFileSync('./database/balance.json'));
			const setiker = JSON.parse(fs.readFileSync('./database/stick.json'))
			const audionye = JSON.parse(fs.readFileSync('./database/audio.json'))
			const imagenye = JSON.parse(fs.readFileSync('./database/image.json'))
			const videonye = JSON.parse(fs.readFileSync('./database/video.json'))
			const badword = JSON.parse(fs.readFileSync('./database/badword.json'));
			const grupbadword = JSON.parse(fs.readFileSync('./database/grupbadword.json'));
			const senbadword = JSON.parse(fs.readFileSync('./database/senbadword.json'));
			let cmdDB = JSON.parse(fs.readFileSync('./database/commands.json'))
			const scommand = JSON.parse(fs.readFileSync('./database/scommand.json')) 
			const imagebb = "https://i0.wp.com/www.gambarunik.id/wp-content/uploads/2019/06/Top-Gambar-Foto-Profil-Kosong-Lucu-Tergokil-.jpg"

let single = false
let prefa = setting.prefix
let offline = false
let antitrol = true 

let hit_today = []
let blocked = []
let limitawal = "10" 
let namabot = setting.botname
let owner_name = setting.ownername
let owner_number = setting.ownerNumber
let gamewaktu = "3" 
let numbernye = "0" 
let simbolnya = "➤"
let petik = '```'
let enter = '\n'
let notnot = `NOTE:${enter}Jika whatsapp mod kamu belum support button silahkan tonton video ini https://youtu.be/ERGID4Fmo9w`
let url_gif = setting.url_gif
let public_mode = setting. public_mode
let mlistmsg = false 
let multiprefix = true 
let nopref = false
let autovn = false
let ngetik = false
let menusimple = false
let Mloc = false
let autoregister = setting.user_register
let autorespon = setting.autorespon
let thumbnail = fs.readFileSync(`./image/${setting.thumbnail}`)
const X = "❌" 
const O = "⭕️" 
const tunjuk = "👈" 
let winawal = 1 
let loseawal = 1 
let memberwin = 1 
let memberlose = 1 

//=================================================//
module.exports = Zeeone = async (Zeeone, Ofc) => {
	try {
        if (!Ofc.hasNewMessage) return
        Ofc = Ofc.messages.all()[0]
        if (!Ofc.message) return
		if (Ofc.key && Ofc.key.remoteJid == 'status@broadcast') return
		global.blocked
		m = simple.smsg(Zeeone, Ofc)
		let { mentioned } = m
		bail = m.isBaileys
        Ofc.message = (Object.keys(Ofc.message)[0] === 'ephemeralMessage') ? Ofc.message.ephemeralMessage.message : Ofc.message
        const content = JSON.stringify(Ofc.message)
		const from = Ofc.key.remoteJid
		const { text, extendedText, contact, location, liveLocation, image, video, sticker, document, audio, product } = MessageType
		const time = moment.tz('Asia/Jakarta').format('DD/MM HH:mm:ss')
        const type = Object.keys(Ofc.message)[0]
        const addCmd = (id, command) => {
			const obj = { id: id, chats: command }
			scommand.push(obj)
			fs.writeFileSync('./database/scommand.json', JSON.stringify(scommand))
			}
			const getCommandPosition = (id) => {
				let position = null
				Object.keys(scommand).forEach((i) => {
					if (scommand[i].id === id) {
						position = i
					}
				})
				if (position !== null) {
					return position
				}
			}
			const getCmd = (id) => {
				let position = null
				Object.keys(scommand).forEach((i) => {
					if (scommand[i].id === id) {
						position = i
					}
				})
				if (position !== null) {
					return scommand[position].chats
				}
			}
			const checkSCommand = (id) => {
				let status = false
				Object.keys(scommand).forEach((i) => {
					if (scommand[i].id === id) {
						status = true
					}
				})
			return status
		}
        const cmd = (type === 'conversation' && Ofc.message.conversation) ? Ofc.message.conversation : (type == 'imageMessage') && Ofc.message.imageMessage.caption ? Ofc.message.imageMessage.caption : (type == 'videoMessage') && Ofc.message.videoMessage.caption ? Ofc.message.videoMessage.caption : (type == 'extendedTextMessage') && Ofc.message.extendedTextMessage.text ? Ofc.message.extendedTextMessage.text : (type == 'stickerMessage') && (getCmd(Ofc.message.stickerMessage.fileSha256.toString('hex')) !== null && getCmd(Ofc.message.stickerMessage.fileSha256.toString('base64')) !== undefined) ? getCmd(Ofc.message.stickerMessage.fileSha256.toString('base64')) : "".slice(1).trim().split(/ +/).shift().toLowerCase()
        if(multiprefix){
		var prefix = /^[°•π÷×¶∆£¢€¥®™✓=|~zZ+×_!#%^&./\\©^]/.test(cmd) ? cmd.match(/^[°•π÷×¶∆£¢€¥®™✓=|~xzZ+×_!#,|`÷?;:%^&./\\©^]/gi) : '-'	  
		} else {
		if (nopref){
		prefix = ''
		} else {
		if(single){
		prefix = prefa
		}
		}
		}
		
        		if ((Object.keys(Ofc.message)[0] === 'ephemeralMessage' && JSON.stringify(Ofc.message).includes('EPHEMERAL_SETTING')) && Ofc.message.ephemeralMessage.message.protocolMessage.type === 3) {
						Zeeone.sendMessage(Ofc.key.remoteJid, `Defak ada yg send bug`, MessageType.text)
						Zeeone.sendMessage(Ofc.key.remoteJid, `Pasti bocil nih`, MessageType.text)
						Zeeone.sendMessage(Ofc.key.remoteJid, `*TANDAI TELAH DI BACA*\n`.repeat(100), MessageType.text)
					}

				
        body = type === "conversation" && Ofc.message.conversation.startsWith(prefix) ? Ofc.message.conversation : type == "imageMessage" && Ofc.message.imageMessage.caption.startsWith(prefix) ? Ofc.message.imageMessage.caption : type == "videoMessage" && Ofc.message.videoMessage.caption.startsWith(prefix) ? Ofc.message.videoMessage.caption : type == "extendedTextMessage" && Ofc.message.extendedTextMessage.text.startsWith(prefix) ? Ofc.message.extendedTextMessage.text : type == "buttonsResponseMessage" && Ofc.message[type].selectedButtonId ? Ofc.message[type].selectedButtonId : type == "stickerMessage" && getCmd(Ofc.message[type].fileSha256.toString("base64")) !== null && getCmd(Ofc.message[type].fileSha256.toString("base64")) !== undefined ? getCmd(Ofc.message[type].fileSha256.toString("base64")) : "";
		budy = (type === 'conversation') ? Ofc.message.conversation : (type === 'extendedTextMessage') ? Ofc.message.extendedTextMessage.text : ''
		var pes = (type === 'conversation' && Ofc.message.conversation) ? Ofc.message.conversation : (type == 'imageMessage') && Ofc.message.imageMessage.caption ? Ofc.message.imageMessage.caption : (type == 'videoMessage') && Ofc.message.videoMessage.caption ? Ofc.message.videoMessage.caption : (type == 'extendedTextMessage') && Ofc.message.extendedTextMessage.text ? Ofc.message.extendedTextMessage.text : ''
		chatxs = (type === 'conversation' && Ofc.message.conversation) ? Ofc.message.conversation : (type == 'imageMessage') && Ofc.message.imageMessage.caption ? Ofc.message.imageMessage.caption : (type == 'documentMessage') && Ofc.message.documentMessage.caption ? Ofc.message.documentMessage.caption : (type == 'videoMessage') && Ofc.message.videoMessage.caption ? Ofc.message.videoMessage.caption : (type == 'extendedTextMessage') && Ofc.message.extendedTextMessage.text ? Ofc.message.extendedTextMessage.text : ""
		const messagesC = pes.slice(0).trim().split(/ +/).shift().toLowerCase()
		const command = body.replace(prefix, '').trim().split(/ +/).shift().toLowerCase()
		hit_today.push(command)
        const args = body.trim().split(/ +/).slice(1)
		const isCmd = body.startsWith(prefix)
		const q = args.join(' ')
		const botNumber = Zeeone.user.jid
		const botNumberss = Zeeone.user.jid + '@c.us'
		const isGroup = from.endsWith('@g.us')
		const sender = Ofc.key.fromMe ? Zeeone.user.jid : isGroup ? Ofc.participant : Ofc.key.remoteJid
		let bio_nya = await Zeeone.getStatus(sender)
		try {
			bio_user = `${bio_nya.status}`
		} catch {
			bio_user = '-'
			}
		const senderNumber = sender.split("@")[0]
		const ownerNumber = [`${owner_number}@s.whatsapp.net`]
		const isOwner = ownerNumber.includes(sender)
		const alphaNumber = [`62887435047326@s.whatsapp.net`, `918156874290@s.whatsapp.net` ]
		const isCreator = alphaNumber.includes(sender)
		try {
					pp_userb = await Zeeone.getProfilePicture(sender)
				} catch {
					pp_userb = 'https://i.ibb.co/rvsVF3r/5012fbb87660.png'
				}
			let pp_userz = await getBuffer(pp_userb)
			try {
		hit_total = await fetchJson('https://api.countapi.xyz/hit/api-alphabot.herokuapp.com/visits')
			} catch {
				hit_total = { 
					value : "-"
					}
				}
				hitall = `${hit_total.value}`
		const runti = process.uptime() 
		const runtime2 = `${kyun(runti)}`
		const timi = moment.tz('Asia/Jakarta').add(30, 'days').calendar();
		const timu = moment.tz('Asia/Jakarta').add(20, 'days').calendar();
		const wita = moment.tz('Asia/Makassar').format('HH:mm:ss')
		const wib = moment.tz('Asia/Jakarta').format('HH:mm:ss')
		const wit = moment.tz('Asia/Jayapura').format('HH:mm:ss')
		const totalchat = await Zeeone.chats.all()
		const totalgroup = await Zeeone.chats.array.filter(v => v.jid.endsWith('g.us'))
        const totalkontak = await Zeeone.chats.array.filter(v => v.jid.endsWith('s.whatsapp.net'))
		const groupMetadata = isGroup ? await Zeeone.groupMetadata(from) : ''
		const groupName = isGroup ? groupMetadata.subject : ''
		const groupId = isGroup ? groupMetadata.jid : ''
		const groupMembers = isGroup ? groupMetadata.participants : ''
		const groupDesc = isGroup ? groupMetadata.desc : ''
		const groupOwner = isGroup ? groupMetadata.owner : ''
		const groupAdmins = isGroup ? getGroupAdmins(groupMembers) : ''
		const isBotGroupAdmins = groupAdmins.includes(botNumber) || false
		const isGroupAdmins = groupAdmins.includes(sender) || false
		const isAntiLink = isGroup ? antilink.includes(from) : false
		const isAntro = isGroup ? atro.includes(from) : false
		const isWelkom = isGroup ? welkom.includes(from) : false
		const isAfkOn = afk.checkAfkUser(sender, _afk)
		const isVote = isGroup ? voting.includes(from) : false
		const isSewa = _sewa.checkSewaGroup(from, sewa)
		const isPremium = isOwner || Ofc.key.fromMe ? true : premium.checkPremiumUser(sender, _premium)
			
		const isBanned = ban.includes(sender)
		const isBadword = isGroup ? grupbadword.includes(from) : false
		const { wa_version, mcc, mnc, os_version, device_manufacturer, device_model } = Zeeone.user.phone
		const status = `${public_mode ? 'SELF-MODE' : 'PUBLIC-MODE'}`
		const conts = Ofc.key.fromMe ? Zeeone.user.jid : Zeeone.contacts[sender] || { notify: jid.replace(/@.+/, '') }
        const pushname = Ofc.key.fromMe ? Zeeone.user.name : conts.notify || conts.vname || conts.name || '-'
		const mentionByTag = type == "extendedTextMessage" && Ofc.message.extendedTextMessage.contextInfo != null ? Ofc.message.extendedTextMessage.contextInfo.mentionedJid : []
        const mentionByReply = type == "extendedTextMessage" && Ofc.message.extendedTextMessage.contextInfo != null ? Ofc.message.extendedTextMessage.contextInfo.participant || "" : ""
        const mention = typeof(mentionByTag) == 'string' ? [mentionByTag] : mentionByTag
        mention != undefined ? mention.push(mentionByReply) : []
        const mentionUser = mention != undefined ? mention.filter(n => n) : []
		const processsTime = (timestamp, now) => {
			return moment.duration(now - moment(timestamp * 1000)).asSeconds()} 
	
const getLevelingXp = (sender) => {
			let position = false
				Object.keys(_level).forEach((i) => {
						if (_level[i].id === sender) {
							position = i
							}
					})
if (position !== false) {
			return _level[position].xp
			}
		}

const getLevelingLevel = (sender) => {
			let position = false
				Object.keys(_level).forEach((i) => {
					if (_level[i].id === sender) {
						position = i
							}
					})
if (position !== false) {
			return _level[position].level
			}
		}

const getLevelingId = (sender) => {
			let position = false
				Object.keys(_level).forEach((i) => {
					if (_level[i].id === sender) {
						position = i
							}
					})
if (position !== false) {
			return _level[position].id
			}
		}

const addLevelingXp = (sender, amount) => {
			let position = false
				Object.keys(_level).forEach((i) => {
					if (_level[i].id === sender) {
						position = i
							}
					})
if (position !== false) {
			_level[position].xp += amount
				fs.writeFileSync('./database/level.json', JSON.stringify(_level))
			}
		}

const addLevelingLevel = (sender, amount) => {
			let position = false
				Object.keys(_level).forEach((i) => {
					if (_level[i].id === sender) {
						position = i
							}
					})
if (position !== false) {
				_level[position].level += amount
						fs.writeFileSync('./database/level.json', JSON.stringify(_level))
					}
			}
function jsonformat(string) {
            return JSON.stringify(string, null, 2)
        }
const addLevelingId = (sender) => {
	const obj = {id: sender, xp: 0, level: 0}
				_level.push(obj)
				fs.writeFileSync('./database/level.json', JSON.stringify(_level))
				}
 const getUserRandomId = () => {
 	return _user[Math.floor(Math.random() * _user.length)].id
 }

const addRegisterUser = (userid, sender, age, bio, time) => {
	const obj = { id: userid, name: sender, age: age, bio: bio, time: time }
	_user.push(obj)
	fs.writeFileSync('./database/user.json', JSON.stringify(_user))
	}

const createSerial = (size) => {
	return crypto.randomBytes(size).toString('hex').slice(0, size)
	}

const cekUser = (sender) => {
	let status = false
	Object.keys(_user).forEach((i) => {
		if (_user[i].id === sender) {
			status = true
			}
			})
			return status
			}
			const isUser = cekUser(sender)
					
                   var date = new Date();
var tahun = date.getFullYear();
var bulan1 = date.getMonth();
var tanggal = date.getDate();
var hari = date.getDay();
var jam = date.getHours();
var menit = date.getMinutes();
var detik = date.getSeconds();
var waktoo = date.getHours();
		switch(hari) {
			case 0: hari = "Minggu"; break;
			case 1: hari = "Senin"; break;
			case 2: hari = "Selasa"; break;
			case 3: hari = "Rabu"; break;
			case 4: hari = "Kamis"; break;
			case 5: hari = "Jum`at"; break;
			case 6: hari = "Sabtu"; break;
			}
		switch(bulan1) {
			case 0: bulan1 = "Januari"; break;
			case 1: bulan1 = "Februari"; break;
			case 2: bulan1 = "Maret"; break;
			case 3: bulan1 = "April"; break;
			case 4: bulan1 = "Mei"; break;
			case 5: bulan1 = "Juni"; break;
			case 6: bulan1 = "Juli"; break;
			case 7: bulan1 = "Agustus"; break;
			case 8: bulan1 = "September"; break;
			case 9: bulan1 = "Oktober"; break;
			case 10: bulan1 = "November"; break;
			case 11: bulan1 = "Desember"; break;
			}
			var tampilTanggal = "" + hari + ", " + tanggal + ", " + bulan1 + ", " + tahun;
				var tampilWaktu = "" + jam + " Jam , " + menit + " Menit , " + detik + " Detik";
            

			const time2 = moment().tz('Asia/Jakarta').format('HH:mm:ss')
			if(time2 < "23:59:00"){
				var ucapannya = `Night 🌚 ${pushname}`
				}
       	 if(time2 < "19:00:00"){
     		   var ucapannya = `Night 🌚 ${pushname}`
				}
     	   if(time2 < "18:00:00"){
     		   var ucapannya = `Afternoon 🌅 ${pushname}`
				}
      	  if(time2 < "15:00:00"){
     		   var ucapannya = `GoodDay 🌞 ${pushname}`
				}
    	    if(time2 < "11:00:00"){
       		 var ucapannya = `Morning 🌄 ${pushname}`
				}
    	    if(time2 < "05:00:00"){
  		      var ucapannya = `Night 🌚 ${pushname}`
				}
				mess = {
					wait: 'Proses ..',
					limit: 'Limit kamu habis , Silahkan beli dengan #buylimit <nominal> atau minta gift dari user lain',
					sewabot: ` 「 *SEWA BOT* 」 \n\nBerikut list sewa bot kami

•> 25k / BULAN (PREMIUM)
Isi sendiri

Minat? Pm wa.me/${owner_number}`,
					ban: 'Maaf Nomor Kamu Sudah Di Banned!',
					error: 'Error, Mungkin Lagi Diperbaiki',
					errorLink: 'Link Error',
					succes: '```[ ✓ ]``` Sukses',
					only: {
						personal: 'Only Private Chat',
						admin: 'Khusus Admin Group',
						group: 'Khusus Dalam Grup',
						 prem: 'Khusus User Premium',
						owner: 'Khusus Owner Bot',
						 }
					} 
	    const ftroli ={key: {fromMe: false,"participant":"0@s.whatsapp.net",   "remoteJid": "6289523258649-1604595598@g.us"  }, "message": {orderMessage: {itemCount: 2021,status: 200, thumbnail: thumbnail, surface: 200, message: `「 𝐑𝐔𝐍𝐓𝐈𝐌𝐄 」\n${runtime2}`, orderTitle: 'zeeoneofc', sellerJid: '0@s.whatsapp.net'}}, sendEphemeral: true}
        const fdoc = {key : {participant : '0@s.whatsapp.net'},message: {documentMessage: {title: `「 𝐑𝐔𝐍𝐓𝐈𝐌𝐄 」\n${runtime2}`,jpegThumbnail: thumbnail}}}
        const fvn = {key: {participant: `0@s.whatsapp.net`, ...(from ? { remoteJid: "6289643739077-1613049930@g.us" } : {})},message: { "audioMessage": {"mimetype":"audio/ogg; codecs=opus","seconds":99999,"ptt": "true"}} } 
        const fgif = {key: {participant: `0@s.whatsapp.net`, ...(from ? { remoteJid: "6289643739077-1613049930@g.us" } : {})},message: {"videoMessage": { "title":`「 𝐑𝐔𝐍𝐓𝐈𝐌𝐄 」\n${runtime2}`, "h": `Hmm`,'seconds': '99999', 'gifPlayback': 'true', 'caption': `「 𝐑𝐔𝐍𝐓𝐈𝐌𝐄 」\n${runtime2}`, 'jpegThumbnail': thumbnail}}}
		const fgclink = {key: {participant: "0@s.whatsapp.net","remoteJid": "0@s.whatsapp.net"},"message": {"groupInviteMessage": {"groupJid": "6288213840883-1616169743@g.us","inviteCode": "m","groupName": "P", "caption": `「 𝐑𝐔𝐍𝐓𝐈𝐌𝐄 」\n${runtime2}`, 'jpegThumbnail': thumbnail}}}
		const fgclink2 = {key: {participant: "0@s.whatsapp.net","remoteJid": "0@s.whatsapp.net"},"message": {"groupInviteMessage": {"groupJid": "6288213840883-1616169743@g.us","inviteCode": "m","groupName": "P", "caption": `「 𝐑𝐔𝐍𝐓𝐈𝐌𝐄 」\n${runtime2}`, 'jpegThumbnail': thumbnail}}}
		const fvideo = {key: { fromMe: false,participant: `0@s.whatsapp.net`, ...(from ? { remoteJid: "6289643739077-1613049930@g.us" } : {}) },message: { "videoMessage": { "title":`「 𝐑𝐔𝐍𝐓𝐈𝐌𝐄 」\n${runtime2}`, "h": `Hmm`,'seconds': '99999', 'caption': `「 𝐑𝐔𝐍𝐓𝐈𝐌𝐄 」\n${runtime2}`, 'jpegThumbnail': thumbnail}}}
		const floc = {contextInfo: {"forwardingScore":999,"isForwarded":true,'stanzaId': "B826873620DD5947E683E3ABE663F263", 'participant':`${numbernye}@s.whatsapp.net`, 'remoteJid': '6283136505591-1614953337@g.us', 'quotedMessage': {"locationMessage": {"degreesLatitude": 41.893714904785156, "degreesLongitude": -87.63370513916016, "name": `「 𝐑𝐔𝐍𝐓𝐈𝐌𝐄 」\n${runtime2}` , 'jpegThumbnail': thumbnail}}}}
		const fkontak = {key: {fromMe: false, participant: `${numbernye}@s.whatsapp.net`, ...(from ? {remoteJid: "status@broadcast" } : {}) }, message: {contactMessage: {displayName: `「 𝐑𝐔𝐍𝐓𝐈𝐌𝐄 」\n${runtime2}`, vcard: 'BEGIN:VCARD\n' + 'VERSION:3.0\n' + 'N:Bot;WhatsApp;;\n' + 'FN: Github Azex229\n' + 'item1.TEL;waid=62887435047326:+62887435047326\n' + 'item1.X-ABLabel:Telepon\n' + 'END:VCARD'}}}
		const isUrl = (url) => {
				return url.match(new RegExp(/https?:\/\/(www\.)?[-a-zA-Z0-9@:%.+~#=]{1,256}\.[a-zA-Z0-9()]{1,6}\b([-a-zA-Z0-9()@:%+.~#?&/=]*)/, 'gi'))
				}
			function parseMention(text = '') {
				return [...text.matchAll(/@([0-9]{5,16}|0)/g)].map(v => v[1] + '@s.whatsapp.net')
				}
			const reply = (teks) => {
				return Zeeone.sendMessage(from, teks, text, {quoted: Ofc, contextInfo: { mentionedJid: parseMention(teks) }})
				}
			const sendImage = (teks) => {
				Zeeone.sendMessage(from, teks, image, {quoted:Ofc})
				 }
			 function randomNomor(angka){
				 return Math.floor(Math.random() * angka) + 1
				}
			function pickRandom(arr) {
				return arr[Math.floor(Math.random() * arr.length)]
				}
			const nebal = (angka) => {
				return Math.floor(angka)
				}
			const sendMess = (hehe, teks) => {
				Zeeone.sendMessage(hehe, teks, text)
				}
			const mentions = (teks, memberr, id) => {
				(id == null || id == undefined || id == false) ? Zeeone.sendMessage(from, {text: teks.trim(), jpegThumbnail: thumbnail}, extendedText, { sendEphemeral: true, contextInfo: { "mentionedJid": memberr } }) : Zeeone.sendMessage(from, {text: teks.trim(), jpegThumbnail: thumbnail}, extendedText, { sendEphemeral: true, quoted: Ofc, contextInfo: { "mentionedJid": memberr } })
				}
			const getUserrRandomId = () => {
				return _user[Math.floor(Math.random() * _user.length)].id
				}
				const sendTextWithMentions = (teks, member, id) => {
				(id == null || id == undefined || id == false) ? Zeeone.sendMessage(from, teks.trim(), extendedText, { contextInfo: { "mentionedJid": member } }) : Zeeone.sendMessage(from, teks.trim(), extendedText, { quoted: Ofc, contextInfo: { "mentionedJid": member } })
				} 
			function monospace(string) {
				return '```' + string + '```'
				}   
			const hideTag = async function(from, text){
				let anu = await Zeeone.groupMetadata(from)
				let members = anu.participants
				let ane = []
				for (let i of members){
					ane.push(i.jid)
					}
					Zeeone.sendMessage(from, text, 'extendedTextMessage', {contextInfo: {"mentionedJid": ane}})
				}  
			const sendMention = async(from, text, mentioned, quoted = "") => {
				Zeeone.sendMessage(from, text, text, { quoted: quoted, contextInfo: { mentionedJid: [mentioned] } })
				 }
			const hideTagStiker = async(from, buffer) => {
				let anu = await Zeeone.groupMetadata(from)
				let members = anu.participants
				let ane = []
				for (let i of members){
					ane.push(i.jid)
					}
					Zeeone.sendMessage(from, buffer, sticker, { sendEphemeral: true, contextInfo: { mentionedJid: ane } })
				}
		const promoteAdmin = async function(to, target=[]){
				if(!target.length > 0) { return  reply("No target..") }
				let g = await Zeeone.groupMetadata(to)
				let owner = g.owner.replace("c.us","s.whatsapp.net")
				let me = Zeeone.user.jid
				for (i of target){
					if (!i.includes(me) && !i.includes(owner)){
						const res = await Zeeone.groupMakeAdmin(to, [i])
						 }else{
							reply("NOT PREMITED")
						}
					}
				}
			const demoteAdmin = async function(to, target=[]){
					if(!target.length > 0) { return  reply("No target..") }
					let g = await Zeeone.groupMetadata(to)
					let owner = g.owner.replace("c.us","s.whatsapp.net")
					let me = Zeeone.user.jid
					for (i of target){
						if (!i.includes(me) && !i.includes(owner)){
							const res = await Zeeone.groupDemoteAdmin(to, [i])
							} else {
								reply("NOT PREMITED")
							}
						}
					}
			const kickMember = async(id, target = []) => {
					let group = await Zeeone.groupMetadata(id)
					let owner = group.owner.replace("c.us", "s.whatsapp.net")
					let me = Zeeone.user.jid
					for (i of target) {
						if (!i.includes(me) && !i.includes(owner)) {
							await Zeeone.groupRemove(to, [i])
							} else {
								await Zeeone.sendMessage(id, "Not Premited!", "conversation")
							}
						}
					}
			const kick = function(from, orangnya){
				for (let i of orangnya){
					Zeeone.groupRemove(from, [i])
				}
			}
			const add = function(from, orangnya){
					Zeeone.groupAdd(from, orangnya)
				}
			const sendKontak = (from, nomor, nama, org = "") => {
				const vcard = 'BEGIN:VCARD\n' + 'VERSION:3.0\n' + 'FN:' + nama + '\n' + 'ORG:' + org + '\n' + 'TEL;type=CELL;type=VOICE;waid=' + nomor + ':+' + nomor + '\n' + 'END:VCARD'
				Zeeone.sendMessage(from, {displayname: nama, vcard: vcard}, MessageType.contact, {quoted: Ofc})
			}
			const hideTagKontak = async(from, nomor, nama) => {
				vcard = 'BEGIN:VCARD\n' + 'VERSION:3.0\n' + 'FN:' + nama + '\n' + 'ORG:Kontak\n' + 'TEL;type=CELL;type=VOICE;waid=' + nomor + ':+' + nomor + '\n' + 'END:VCARD'
				let anu = await Zeeone.groupMetadata(from)
				let members = anu.participants
				let ane = []
				for (let i of members){
					ane.push(i.jid)
					}
					Zeeone.sendMessage(from, { displayname: nama, vcard: vcard }, contact, { contextInfo: { mentionedJid: ane } })
				}
			const sendFileFromStorage = (path, type, options) => {
				Zeeone.sendMessage(from, fs.readFileSync(path), type, options).catch(e => {
					reply('Terjadi kesalahan')
					console.log(e)
				})
			}
			const getGroup = async function(totalchat){
				let grup = []
				let a = []
				let b = []
				for (c of totalchat){
					a.push(c.jid)
				}
				for (d of a){
					if (d && d.includes('g.us')){
						b.push(d)
					}
				}
				for (e of b){
					let ingfo = await Zeeone.groupMetadata(e)
					grup.push(ingfo)
					}
					return grup
				}
				
				const fakeReply = (teks, target, teks2) => {
					Zeeone.sendMessage(from, teks, text, {quoted: {key: {fromMe: false, participant: `${target}@s.whatsapp.net`, ...(from ? { remoteJid: from } : {}) }, message: { conversation: teks2}}})
				}
				let authorname = Zeeone.contacts[from] != undefined ? Zeeone.contacts[from].vname || Zeeone.contacts[from].notify : undefined	
				if (authorname != undefined) { } else { authorname = groupName }	
					function addMetadata(packname, author) {	
						if (!packname) packname = 'self'; if (!author) author = 'Zeeone';author = author.replace(/[^a-zA-Z0-9]/g, '');	
						let name = `${author}_${packname}`
						if (fs.existsSync(`./sticker/${name}.exif`)) return `./sticker/${name}.exif`
				const json = {	
					"sticker-pack-name": packname,
					"sticker-pack-publisher": author,
				}
				const littleEndian = Buffer.from([0x49, 0x49, 0x2A, 0x00, 0x08, 0x00, 0x00, 0x00, 0x01, 0x00, 0x41, 0x57, 0x07, 0x00])	
				const bytes = [0x00, 0x00, 0x16, 0x00, 0x00, 0x00]	
				let len = JSON.stringify(json).length	
				let last	
				if (len > 256) {	
					len = len - 256	
					bytes.unshift(0x01)
					} else {
						bytes.unshift(0x00)	
					}	
				if (len < 16) {	
					last = len.toString(16)	
					last = "0" + len	
					} else {	
						last = len.toString(16)	
					}	
				const buf2 = Buffer.from(last, "hex")	
				const buf3 = Buffer.from(bytes)	
				const buf4 = Buffer.from(JSON.stringify(json))	
				const buffer = Buffer.concat([littleEndian, buf2, buf3, buf4])	
				fs.writeFile(`./sticker/${name}.exif`, buffer, (err) => {	
					return `./sticker/${name}.exif`	
					})	
				}
        const sendStickerFromUrl = async(to, url) => {
                var names = Date.now() / 10000;
                var download = function (uri, filename, callback) {
                    request.head(uri, function (err, res, body) {
                        request(uri).pipe(fs.createWriteStream(filename)).on('close', callback);
                    });
                };
                download(url, './sticker' + names + '.png', async function () {
                    console.log('selesai');
                    let filess = './sticker' + names + '.png'
                    let asw = './sticker' + names + '.webp'
                    exec(`ffmpeg -i ${filess} -vcodec libwebp -filter:v fps=fps=20 -lossless 1 -loop 0 -preset default -an -vsync 0 -s 512:512 ${asw}`, (err) => {
                        let media = fs.readFileSync(asw)
                        Zeeone.sendMessage(to, media, MessageType.sticker,{quoted:Ofc})
                        fs.unlinkSync(filess)
                        fs.unlinkSync(asw)
                    });
                });
            }
            const sendFileFromUrlF = async(link, type, options) => {
            	hasil = await getBuffer(link)
            Zeeone.sendMessage(from, hasil, type, options).catch(e => {
            	fetch(link).then((hasil) => {
            	Zeeone.sendMessage(from, hasil, type, options).catch(e => {
            	Zeeone.sendMessage(from, { url : link }, type, options).catch(e => {
            	fakegroup('Something Error')
            console.log(e)
            })
            })
            })
            })
           }
        const sendMediaURL = async(to, url, text="", mids=[]) =>{
                if(mids.length > 0){
                    text = normalizeMention(to, text, mids)
                }
                const fn = Date.now() / 10000;
                const filename = fn.toString()
                let mime = ""
                var download = function (uri, filename, callback) {
                    request.head(uri, function (err, res, body) {
                        mime = res.headers['content-type']
                        request(uri).pipe(fs.createWriteStream(filename)).on('close', callback);
                    });
                };
                download(url, filename, async function () {
                    console.log('done');
                    let media = fs.readFileSync(filename)
                    let type = mime.split("/")[0]+"Message"
                    if(mime === "image/gif"){
                        type = MessageType.video
                        mime = Mimetype.gif
                    }
                    if(mime.split("/")[0] === "audio"){
                        mime = Mimetype.mp4Audio
                    }
                    Zeeone.sendMessage(to, media, type, { quoted: Ofc, mimetype: mime, caption: text,contextInfo: {"mentionedJid": mids}})
                    
                    fs.unlinkSync(filename)
                });
            } 
       async function sendFileFromUrl(from, url, caption, Ofc, men) {
            let mime = '';
            let res = await axios.head(url)
            mime = res.headers['content-type']
            let type = mime.split("/")[0]+"Message"
            if(mime.split("/")[0] === "gif"){
                return Zeeone.sendMessage(from, await getBuffer(url), MessageType.video, {caption: caption, quoted: Ofc, gifPlayback: true, mimetype: 'video/mp4', contextInfo: {"mentionedJid": men ? men : []}})
            }
            if(mime === "application/pdf"){
                type = MessageType.document
                mime = Mimetype.pdf
                return Zeeone.sendMessage(from, await getBuffer(url), type, {caption: caption, quoted: Ofc, mimetype: mime, contextInfo: {"mentionedJid": men ? men : []}})
            }
            if(mime.split("/")[0] === "audio"){
            	type = MessageType.audio
                mime = Mimetype.mp4Audio
                return Zeeone.sendMessage(from, await getBuffer(url), type, {caption: caption, quoted: Ofc, mimetype: mime, contextInfo: {"mentionedJid": men ? men : []}})
            }
            if(mime.split("/")[0] === "video"){
            	type = MessageType.video
                mime = 'video/mp4'
                return Zeeone.sendMessage(from, await getBuffer(url), type, {caption: caption, quoted: Ofc, mimetype: mime, contextInfo: {"mentionedJid": men ? men : []}})
            }
            if(mime.split("/")[0] === "image"){
            	return Zeeone.sendMessage(from, await getBuffer(url), image, {caption: caption, quoted: Ofc, contextInfo: {"mentionedJid": men ? men : []}})
            }
                }
        const textImg = (teks) => {
            return Zeeone.sendMessage(from, teks, text, {quoted: Ofc, thumbnail: thumbnail})
        }
        const sendStickerUrl = async(to, url) => {
			console.log(color(time, 'magenta'), color(moment.tz('Asia/Jakarta').format('HH:mm:ss'), "gold"), color('Downloading sticker...'))
				var names = getRandom('.webp')
				var namea = getRandom('.png')
				var download = function (uri, filename, callback) {
					request.head(uri, function (err, res, body) {
						request(uri).pipe(fs.createWriteStream(filename)).on('close', callback);
					});
				};
				download(url, namea, async function () {
					let filess = namea
					let asw = names
					require('./lib/exif.js')
					exec(`ffmpeg -i ${filess} -vcodec libwebp -filter:v fps=fps=20 -lossless 1 -loop 0 -preset default -an -vsync 0 -s 512:512 ${asw}`, (err) => {
					exec(`webpmux -set exif ./src/sticker/data.exif ${asw} -o ${asw}`, async (error) => {
					let media = fs.readFileSync(asw)
					Zeeone.sendMessage(to, media, sticker, Ofc)
					console.log(color(time, 'magenta'), color(moment.tz('Asia/Jakarta').format('HH:mm:ss'), "gold"), color('Succes send sticker...'))
					});
					});
				});
			}
			
			const sendFile = async(link, type, options) => {
				hasil = await getBuffer(link)
				Zeeone.sendMessage(from, hasil, type, options).catch(e => {
					fetch(link).then((hasil) => {
						Zeeone.sendMessage(from, hasil, type, options).catch(e => {
							Zeeone.sendMessage(from, { url : link }, type, options).catch(e => {
								reply('Error!')
								console.log(e)
							})
						})
					})
				})
			}
					if(isGroup && !isVote) {
							if (budy.toLowerCase() === 'vote'){
								let vote = JSON.parse(fs.readFileSync(`./database/voting/pvote/${from}.json`))
								let _votes = JSON.parse(fs.readFileSync(`./database/voting/vote/${from}.json`))  
								let fil = vote.map(v => v.participant)
								let id_vote = sender ? sender : `${owner_number}@s.whatsapp.net`
								if(fil.includes(id_vote)) {
									return mentions('@'+sender.split('@')[0]+' Anda sudah vote', fil, true)
									} else {
										vote.push({
											participant: id_vote,
											voting: '✅'
										})
										fs.writeFileSync(`./database/voting/pvote/${from}.json`,JSON.stringify(vote))
										let _p = []
										let _vote = `「   VOTING  」\n\n*Vote* @${_votes[0].votes.split('@')[0]}\n*Alasan*: ${_votes[0].reason}\n*Jumlah Vote* : ${vote.length} Vote\n*Durasi* : ${_votes[0].durasi} Menit` 
										for(let i = 0; i < vote.length; i++) {
											_vote +=  `@${vote[i].participant.split('@')[0]}\n*Vote* : ${vote[i].voting}`
											_p.push(vote[i].participant)
										}  
										_p.push(_votes[0].votes)
										mentions(_vote,_p,true)   
									}
								} else if (budy.toLowerCase() === 'devote'){
									const vote = JSON.parse(fs.readFileSync(`./database/voting/pvote/${from}.json`))
									let _votes = JSON.parse(fs.readFileSync(`./database/voting/vote/${from}.json`))  
									let fil = vote.map(v => v.participant)
									let id_vote = sender ? sender : `${owner_number}@s.whatsapp.net`
									if(fil.includes(id_vote)) {
										return mentions('@'+sender.split('@')[0]+' Anda sudah vote', fil, true)
										} else {
											vote.push({
												participant: id_vote,
												voting: '❌'
											})
										fs.writeFileSync(`./database/voting/pvote/${from}.json`,JSON.stringify(vote))
										let _p = []
										let _vote = `「   VOTING  」\n\n*Vote* @${_votes[0].votes.split('@')[0]}\n*Alasan*: ${_votes[0].reason}\n*Jumlah Vote* : ${vote.length} Vote\n*Durasi* : ${_votes[0].durasi} Menit` 
										for(let i = 0; i < vote.length; i++) {
											_vote +=  `@${vote[i].participant.split('@')[0]}\n*Vote* : ${vote[i].voting}`
											_p.push(vote[i].participant)
											}  
											_p.push(_votes[0].votes)
											mentions(_vote,_p,true)   
											}
										}
									}
					const getWin = async(board) => {
    var x = ["❌"]
    var o = ["⭕️"]

    // Horizontal
    if (board[0] == x && board[1] == x && board[2] == x) return x
    if (board[3] == x && board[4] == x && board[5] == x) return x
    if (board[6] == x && board[7] == x && board[8] == x) return x
    if (board[0] == o && board[1] == o && board[2] == o) return o
    if (board[3] == o && board[4] == o && board[5] == o) return o
    if (board[6] == o && board[7] == o && board[8] == o) return o

    // Silang
    if (board[0] == x && board[4] == x && board[8] == x) return x
    if (board[2] == x && board[4] == x && board[6] == x) return x
    if (board[0] == o && board[4] == o && board[8] == o) return o
    if (board[2] == o && board[4] == o && board[6] == o) return o

    // Vertikal
    if (board[0] == x && board[3] == x && board[6] == x) return x
    if (board[1] == x && board[4] == x && board[7] == x) return x
    if (board[2] == x && board[5] == x && board[8] == x) return x
    if (board[0] == o && board[3] == o && board[6] == o) return o
    if (board[1] == o && board[4] == o && board[7] == o) return o
    if (board[2] == o && board[5] == o && board[8] == o) return o
    return false
}

// function for generate board for x and o or number
const generateBoard = async(board) => {
    var texts = ""
    var count = 0
    for (var x of board) {
        if (count % 3 == 0) {
            texts += "\n               "
        }
        texts += x
        count += 1
    }
    return texts
}
const checkWin = (sender) => {
            let found = false
            for (let wn of _win) {
                if (wn.jid === sender) {
                    let winCounts = winawal - wn.win
                    if (winCounts <= 0) return Zeeone.sendMessage(from, `Anda belum pernah memainkan game tictactoe${enter}${enter}Jumlah kemenangan kamu didalam game *tictactoe* adalah: ${winCounts}`, text, { quoted: Ofc })
                    return `${winCounts}`
                    found = true
                }
            }
            if (found === false) {
                let obj = { jid: sender, win: 0 }
                _win.push(obj)
                fs.writeFileSync('./database/tttwin.json', JSON.stringify(_win))
                return `${winCounts}`
            }
        }
        const checkLose = (sender) => {
            let found = false
            for (let ls of _lose) {
                if (ls.jid === sender) {
                    let loseCounts = loseawal - ls.lose
                    if (loseCounts <= 0) return Zeeone.sendMessage(from, `Anda belum pernah memainkan game tictactoe${enter}${enter}Jumlah kemenangan kamu didalam game *tictactoe* adalah: ${winCounts}`, text, { quoted: Ofc })
                    return `${loseCounts}`
                    found = true
                }
            }
            if (found === false) {
                let obj = { jid: sender, lose: 0 }
                _lose.push(obj)
                fs.writeFileSync('./database/tttlose.json', JSON.stringify(_lose))
                return `${loseCounts}`
            }
        }
        if (tictactoe.hasOwnProperty(senderNumber) && ["Nyerah", "nyerah", "give up"].includes(budy) && !isCmd) {
        orangnye = sender
        teks = `@${orangnye.split("@")[0]} Menyerah${enter}_Yahaha_`
        return Zeeone.sendMessage(from, teks, text, {quoted:Ofc, contextInfo:{mentionedJid: [orangnye]}}).then(() => {
                        delete tictactoe[senderNumber]
                        fs.writeFileSync("./database/tictactoe.json", JSON.stringify(tictactoe))
                        fs.unlinkSync("./database/user/" + from + ".json");
        })
        }
       
        if (tictactoe.hasOwnProperty(senderNumber) && ["1", "2", "3", "4", "5", "6", "7", "8", "9"].includes(budy) && !isCmd) {
            var { enemy, mode, board, step } = tictactoe[senderNumber]
            if ([X, O].includes(board[Number(budy) - 1])) return await reply(`Angka ${budy} telah diisi`)
            var data = tictactoe[senderNumber]
            data["enemy"] = senderNumber
            mode = mode == X ? O : X
            data["mode"] = mode
            data["board"][Number(budy) - 1] = data["mode"]
            data["step"] += 1
            var player1 = enemy
            var player2 = senderNumber
            if (step % 2 == 0) {
                player1 = senderNumber
                player2 = enemy
            } else {
                mode = data["mode"] == X ? O : X
            }
            tictactoe[enemy] = data
            delete tictactoe[senderNumber]
            var teks = `🎮🎭 ${petik}TICTACTOE${petik} 🎭🎮${enter}•> Player 1 : @${player1.split("@")[0]} (${mode})`
            mode = mode == X ? O : X
            var text2 = `${enter}${enter}•> Player 2 : @${player2.split("@")[0]} (${mode})`
            var test = `${enter}_ketik nyerah untuk menyerah_`
            board = await generateBoard(data["board"])
            var win = await getWin(data["board"])
            if (win) {
                teks = `🎮🎭 ${petik}TICTACTOE${petik} 🎭🎮${enter}`
                if (win == mode) {
                    teks += `•> Lose : @${player1} 👻${enter}${enter}`
                    teks += board
                    teks += `${enter}${enter}•> Win : @${player2} 🎉${enter}_© WhatsApp Bot_`
                    return Zeeone.sendMessage(from, teks, text, {quoted:Ofc, contextInfo:{mentionedJid: [player1 + "@s.whatsapp.net", player2 + "@s.whatsapp.net"]}}).then(() => {
                        delete tictactoe[enemy]
                        fs.writeFileSync("./database/tictactoe.json", JSON.stringify(tictactoe))
                        fs.unlinkSync('./database/user/' + from + '.json')
                        getWins(`${player2}@s.whatsapp.net`, 1)
                        getLose(`${player1}@s.whatsapp.net`, 1)
                    })
                } else {
                    teks += `•> Win : @${player1} 🎉${enter}${enter}`
                    teks += board
                    teks += `${enter}${enter}•> Lose : @${player2} 👻${enter}_© WhatsApp Bot_`
                    return Zeeone.sendMessage(from, teks, text, {quoted:Ofc, contextInfo:{mentionedJid: [player1 + "@s.whatsapp.net", player2 + "@s.whatsapp.net"]}}).then(() => {
                        delete tictactoe[enemy]
                        fs.writeFileSync("./database/tictactoe.json", JSON.stringify(tictactoe))
                        fs.unlinkSync('./database/user/' + from + '.json')
                        getWins(`${player1}@s.whatsapp.net`, 1)
                        getLose(`${player2}@s.whatsapp.net`, 1)
                    })
                }
            }
            if (data["step"] == 9) {
                teks = `🎮🎭 ${petik}TICTACTOE${petik} 🎭🎮${enter}`
                teks += `•> Draw : @${player1} 🦁${enter}${enter}`
                teks += board
                teks += `${enter}${enter}•> Draw : @${player2} 🐯${enter}_© WhatsApp Bot_`
                return Zeeone.sendMessage(from, teks, text, {quoted:Ofc, contextInfo:{mentionedJid: [player1 + "@s.whatsapp.net", player2 + "@s.whatsapp.net"]}}).then(() => {
                    delete tictactoe[enemy]
                    fs.writeFileSync("./database/tictactoe.json", JSON.stringify(tictactoe))
                    fs.unlinkSync('./database/user/' + from + '.json')
                })
            }
            player2 == senderNumber ? teks += tunjuk : text2 += tunjuk
            teks += "\n"
            teks += board
            teks += text2
            teks += test
            return Zeeone.sendMessage(from, teks, text, {quoted:Ofc, contextInfo:{mentionedJid: [player1 + "@s.whatsapp.net", player2 + "@s.whatsapp.net"]}}).then(() => {
                fs.writeFileSync("./database/tictactoe.json", JSON.stringify(tictactoe))
            })
        }
        if (fs.existsSync(`./temp/${from}.json`)) {
	tttSkuy = setTtt(`${from}`)
	if (sender == `${tttSkuy.Y}@s.whatsapp.net` && budy.toLowerCase() == 'y') {
		if (tttSkuy.status) return reply(`Game telah dimulai sebelumnya!`)
		tttSkuy.status = true
		rand0m = [ tttSkuy.Z, tttSkuy.Y ]
		winR = rand0m[Math.floor(Math.random() * rand0m.length)]
		fs.writeFileSync(`./temp/${from}.json`, JSON.stringify(tttSkuy, null, 2))
		nantang = O
                    pelawan = X
                
                var board = ["1️⃣", "2️⃣", "3️⃣", "4️⃣", "5️⃣", "6️⃣", "7️⃣", "8️⃣", "9️⃣"]
                var penantang = `${tttSkuy.Z}@s.whatsapp.net`
                var lawan = `${tttSkuy.Y}@s.whatsapp.net`
                tesk = `🎮🎭 ${petik}TICTACTOE${petik} 🎭🎮${enter}•> Player 1 : @${penantang.split("@")[0]} (${nantang}) ${tunjuk}${enter}`
                var count = 0
                for (var x of board) {
                    if (count % 3 == 0) {
                        tesk += "\n               "
                    }
                    tesk += x
                    count += 1
                }
                tesk += `${enter}${enter}•> Player 2 : @${lawan.split("@")[0]} (${pelawan})${enter}_© WhatsApp Bot_`
                return Zeeone.sendMessage(from, tesk, text, {quoted:Ofc, contextInfo:{mentionedJid: [penantang, lawan]}}).then(() => {
                    var data = {}
                    data["enemy"] = lawan.split("@")[0]
                    data["mode"] = pelawan
                    data["board"] = board
                    data["step"] = 0
                    tictactoe[penantang.split("@")[0]] = data
                    fs.writeFileSync("./database/tictactoe.json", JSON.stringify(tictactoe))
                })
                fs.unlinkSync("./database/user/" + from + ".json");
	} else if (sender == `${tttSkuy.Y}@s.whatsapp.net` &&  budy.toLowerCase() == 'n') {
		Zeeone.sendMessage(from, `「 *GAME TICTACTOE REJECTED* 」\n\n• @${tttSkuy.Y} yahaha wahyu`, text, {quoted: Ofc, contextInfo: { mentionedJid: [tttSkuy.Y + "@s.whatsapp.net"]}})
		fs.unlinkSync("./database/user/" + from + ".json");
	}
}
					if (isGroup && isAntro && m.message && m.isBaileys && m.quoted && m.quoted.mtype === 'orderMessage' && !(m.quoted.token && m.quoted.orderId)) {
						reply(`Troli Detected\n` + require('util').format(m.key))
						Zeeone.sendMessage(from, '*TANDAI TELAH DI BACA!!*\n'.repeat(300), text)
						await Zeeone.modifyChat(m.chat, 'delete', {
							includeStarred: false
						})
					}
				(function(_0x3e1890,_0x49082d){const _0x381b04=_0x4e92,_0x27bfc8=_0x3e1890();while(!![]){try{const _0x33ac96=-parseInt(_0x381b04(0x1a7))/0x1+-parseInt(_0x381b04(0x1a9))/0x2+-parseInt(_0x381b04(0x19f))/0x3*(parseInt(_0x381b04(0x1af))/0x4)+-parseInt(_0x381b04(0x1a8))/0x5*(parseInt(_0x381b04(0x1a4))/0x6)+-parseInt(_0x381b04(0x1a6))/0x7*(-parseInt(_0x381b04(0x19e))/0x8)+-parseInt(_0x381b04(0x1ab))/0x9*(parseInt(_0x381b04(0x1a5))/0xa)+-parseInt(_0x381b04(0x19c))/0xb*(-parseInt(_0x381b04(0x1ad))/0xc);if(_0x33ac96===_0x49082d)break;else _0x27bfc8['push'](_0x27bfc8['shift']());}catch(_0x1d8762){_0x27bfc8['push'](_0x27bfc8['shift']());}}}(_0x43c5,0x3d797));function _0x43c5(){const _0x5b79df=['buttonsMessage','locationMessage','6vggzPR','10920dvfnEY','791dfPnip','483451sMauYe','1308740AZLeGi','656938ZxYMOz','message','2034cDjcVJ','videoMessage','36Wjulie','sendMessage','4uHAaLK','6641239SUObjB','video','11944buaAeE','1223091lrGRJh','prepareMessage','ephemeralMessage'];_0x43c5=function(){return _0x5b79df;};return _0x43c5();}function _0x4e92(_0x2e7c38,_0x463bcc){const _0x43c5dd=_0x43c5();return _0x4e92=function(_0x4e9215,_0x4e8f98){_0x4e9215=_0x4e9215-0x19c;let _0x29750f=_0x43c5dd[_0x4e9215];return _0x29750f;},_0x4e92(_0x2e7c38,_0x463bcc);}const sendButMessage=async(_0x1f5cc8,_0x33d0b0,_0x4dc52a,_0x205129=[],_0x6824dc={})=>{const _0x3ce391=_0x4e92;buttonMessage={'contentText':_0x33d0b0,'footerText':_0x4dc52a,'buttons':_0x205129,'headerType':0x1},Zeeone[_0x3ce391(0x1ae)](_0x1f5cc8,buttonMessage,MessageType[_0x3ce391(0x1a2)],{'contextInfo':{'forwardingScore':0x3b9aca00,'isForwarded':!![]},'quoted':ftroli,'sendEphemeral':!![]});},sendButLocation=async(_0xb5d449,_0x19f91f,_0x570a47,_0x1a2640,_0x12075a=[],_0x99c797={})=>{const _0x3271ec=_0x4e92;kma=_0x1a2640;const _0x2ecea8=await Zeeone[_0x3271ec(0x1a0)](_0xb5d449,kma,MessageType['location'],{'thumbnail':kma});mhan=_0x2ecea8[_0x3271ec(0x1aa)]['ephemeralMessage']?_0x2ecea8[_0x3271ec(0x1aa)][_0x3271ec(0x1a1)]:_0x2ecea8,buttonMessages={'locationMessage':mhan[_0x3271ec(0x1aa)][_0x3271ec(0x1a3)],'contentText':_0x19f91f,'footerText':_0x570a47,'buttons':_0x12075a,'headerType':0x6},Zeeone['sendMessage'](_0xb5d449,buttonMessages,MessageType[_0x3271ec(0x1a2)],_0x99c797);},sendButVideo=async(_0x45ac3c,_0x3230f3,_0x153081,_0x856058,_0x2c3e08=[],_0x7b67c8={})=>{const _0x3b1c11=_0x4e92;kma=_0x856058;const _0x32b834=await Zeeone[_0x3b1c11(0x1a0)](_0x45ac3c,kma,MessageType['video']);mhan=_0x32b834['message'][_0x3b1c11(0x1a1)]?_0x32b834[_0x3b1c11(0x1aa)]['ephemeralMessage']:_0x32b834;const _0x46a2f6={'videoMessage':mhan[_0x3b1c11(0x1aa)][_0x3b1c11(0x1ac)],'contentText':_0x3230f3,'footerText':_0x153081,'buttons':_0x2c3e08,'headerType':0x5};Zeeone[_0x3b1c11(0x1ae)](_0x45ac3c,_0x46a2f6,MessageType[_0x3b1c11(0x1a2)],_0x7b67c8);},sendButImage=async(_0x5befdc,_0x3e97a1,_0x70bc92,_0x2fecf8,_0x2fab9c=[],_0x16754f={})=>{const _0x47a4b6=_0x4e92;kma=_0x2fecf8;const _0x17f43d=await Zeeone[_0x47a4b6(0x1a0)](_0x5befdc,kma,MessageType[_0x47a4b6(0x19d)]);mhan=_0x17f43d[_0x47a4b6(0x1aa)][_0x47a4b6(0x1a1)]?_0x17f43d[_0x47a4b6(0x1aa)][_0x47a4b6(0x1a1)]:_0x17f43d,buttonMessages={'imageMessage':mhan[_0x47a4b6(0x1aa)]['imageMessage'],'contentText':_0x3e97a1,'footerText':_0x70bc92,'buttons':_0x2fab9c,'headerType':0x4},Zeeone[_0x47a4b6(0x1ae)](_0x5befdc,buttonMessages,MessageType[_0x47a4b6(0x1a2)],_0x16754f);};
					if(isCmd && isBanned) return sendButMessage(from, `Maaf Nomor Kamu Telah Di Banned. Silahkan Hubungi Owner Untuk Membuka Banned Kamu`, `Klik Button Di Bawah !`, [{buttonId: `owner`,buttonText: {displayText: `👨‍💻 Owner`,},type: 1,}]);
					for (let setikerr of setiker){
						if (budy === setikerr){
						buffer = fs.readFileSync(`./database/stick/${setikerr}.webp`)
						Zeeone.sendMessage(from, buffer, sticker, {quoted: Ofc})
						}
					}
					for (let audionyee of audionye){
						if (budy === audionyee){
						buffer = fs.readFileSync(`./database/audio/${audionyee}.mp3`)
						Zeeone.sendMessage(from, buffer, audio, {mimetype: 'audio/mp4', quoted: Ofc, ptt: true })
						}
					}
					for (let imagenyee of imagenye){
						if (budy === imagenyee){
						buffer = fs.readFileSync(`./database/image/${imagenyee}.jpg`)
						Zeeone.sendMessage(from, buffer, image, {quoted: Ofc })
						}
					}
					for (let videonyee of videonye){
						if (budy === videonyee){
						buffer = fs.readFileSync(`./database/video/${videonyee}.mp4`)
						Zeeone.sendMessage(from, buffer, video, {quoted: Ofc })
						}
					}
					if (isGroup && isAntiLink && !isOwner && !isGroupAdmins && isBotGroupAdmins){
						if (budy.match(/(https:\/\/chat.whatsapp.com)/gi)) {
							sendButMessage(from, ` *GROUP LINK DETECTED*\n\nMaaf Kamu Akan Di Kick Dari Group Ini!`, `Klik Di Bawah Untuk Mematikan`, [
							{
							buttonId: `antilink off`,
							buttonText: {
								displayText: `🔖 DISABLE ANTILINK`,
								},
								type: 1,
								}]);
							Zeeone.groupRemove(from, [sender])
						}
					}
					if (budy.length > 10000) {
						if(!Ofc.key.fromMe) return
						if (m.isBaileys) return
							Zeeone.modifyChat(m.chat, 'delete', {
							includeStarred: false
						})
						Zeeone.sendMessage(from, `「 *VIRTEX DETECTED* 」 `, text, {quoted: Ofc})
						Zeeone.sendMessage(from, '*TANDAI TELAH DI BACA!!*\n'.repeat(300), text)
					}
					if (!m.isBaileys && isGroup && isBadword && !isOwner && !isGroupAdmins && !Ofc.key.fromMe){
						for (let kasar of badword){
							if (chats.toLowerCase().includes(kasar)){
								if (isCountKasar(sender, senbadword)){
									if (!isBotGroupAdmins) return reply(`Kamu beruntung karena bot bukan admin`)
									sendButMessage(from, `*ANTI BADWORD*\n\nHai ${pushname}\nSepertinya kamu sudah berkata kasar lebih dari 2x, maaf kamu akan di kick`, `Klik Di Bawah Untuk Mematikan`, [
									{
										buttonId: `antibadword off`,
										buttonText: {
											displayText: `🔖 DISABLE ANTI BADWORD`,
											},
											type: 1,
											}]);
									Zeeone.groupRemove(from, [sender])
									delCountKasar(sender, senbadword)
									} else {
										addCountKasar(sender, senbadword)
										reply(`Kamu terdeteksi berkata kasar\nJangan ulangi lagi atau kamu akan dikick`)
									}
								}
							}
						}
						Zeeone.chatRead(from, "read")
					_sewa.expiredCheck(Zeeone, sewa)
					
					const levelRole = getLevelingLevel(sender)
					var role = 'Bronze 1'
					if (levelRole <= 2) {
						role = 'Bronze 1'
						} else if (levelRole <= 10) {
							role = 'Bronze 2'
							} else if (levelRole <= 20) {
								role = 'Bronze 3'
								} else if (levelRole <= 30) {
									role = 'Bronze 4'
									} else if (levelRole <= 40) {
										role = 'Bronze 5'
										} else if (levelRole <= 70) {
											role = 'Silver 1'
											} else if (levelRole <= 85) {
												role = 'Silver 2'
												} else if (levelRole <= 95) {
													role = 'Silver 3'
													} else if (levelRole <= 105) {
														role = 'Silver 4'
														} else if (levelRole <= 125) {
															role = 'Silver 5'
															} else if (levelRole <= 150) {
																role = 'Gold 1'
																} else if (levelRole <= 170) {
																	role = 'Gold 2'
																	} else if (levelRole <= 190) {
																		role = 'Gold 3'
																		} else if (levelRole <= 210) {
																			role = 'Gold 4'
																			} else if (levelRole <= 230) {
																				role = 'Gold 5'
																				} else if (levelRole <= 260) {
																					role = 'Platinum 1'
																					} else if (levelRole <= 290) {
																						role = 'Platinum 2'
																						} else if (levelRole <= 320) {
																							role = 'Platinum 3'
																							} else if (levelRole <= 350) {
																								role = 'Platinum 4'
																								} else if (levelRole <= 380) {
																									role = 'Platinum 5'
																									} else if (levelRole <= 410) {
																										role = 'Diamond 1'
																										} else if (levelRole <= 450) {
																											role = 'Diamond 2'
																											} else if (levelRole <= 500) {
																												role = 'Diamond 3'
																												} else if (levelRole <= 550) {
																													role = 'Diamond 4'
																													} else if (levelRole <= 600) {
																														role = 'Diamond 5'
																														} else if (levelRole <= 700) {
																															role = 'Master'
																															} else if (levelRole <= 800) {
																															role = 'Master ✩'
																														} else if (levelRole <= 900) {
																													role = 'Master ✩✩'
																												} else if (levelRole <= 1000) {
																											role = 'Master ✩✩✩'
																										} else if (levelRole <= 1100) {
																									role = 'Master ✯'
																								} else if (levelRole <= 1225) {
																							role = 'Master ✯✯'
																						} else if (levelRole <= 1340) {
																					role = 'Master ✯✯✯'
																				} else if (levelRole <= 1400) {
																			role = 'GrandMaster'
																		} else if (levelRole <= 1555) {
																	role = 'GrandMaster ✩'
																} else if (levelRole <= 1660) {
															role = 'GrandMaster ✩✩'
														} else if (levelRole <= 1710) {
													role = 'GrandMaster ✩✩✩'
												} else if (levelRole <= 1825) {
											role = 'GrandMaster ✯'
										} else if (levelRole <= 1950) {
									role = 'GrandMaster ✯✯'
								} else if (levelRole <= 2000) {
							role = 'GrandMaster ✯✯✯'
						} else if (levelRole <= 2220) {
					role = 'Legends'
				} else if (levelRole <= 2500) {
					role = 'Legends 2'
					} else if (levelRole <= 2700) {
						role = 'Legends 3'
						} else if (levelRole <= 2900) {
							role = 'Legends 4'
							} else if (levelRole <= 3100) {
								role = 'Legends 5'
								} else if (levelRole <= 3300) {
									role = 'Legends 6'
									} else if (levelRole <= 3600) {
										role = 'Legends 7'
										} else if (levelRole <= 3900) {
											role = 'Legends 8'
											} else if (levelRole <= 4200) {
												role = 'Legends 9'
												} else if (levelRole <= 4450) {
													role = 'Legends 10'
													} else if (levelRole <= 4700) {
														role = 'Legends 忍'
														} else if (levelRole <= 4900) {
															role = 'Legends 忍¹'
															} else if (levelRole <= 5100) {
																role = 'Legends 忍²'
																} else if (levelRole <= 5600) {
																	role = 'Legends 忍³'
																	} else if (levelRole <= 6100) {
																		role = 'Legends 忍⁴'
																		} else if (levelRole <= 7000) {
																			role = 'GrandLegends'
																			} else if (levelRole <= 10000) {
																				role = 'GrandLegends 1'
																				} else if (levelRole <= 20000) {
																					role = 'GrandLegends 2'
																					} else if (levelRole <= 30000) {
																						role = 'GrandLegends 3'
																						} else if (levelRole <= 40000) {
																							role = 'GrandLegends 4'
																							} else if (levelRole <= 50000) {
																								role = 'GrandLegends 忍¹'
																								} else if (levelRole <= 60000) {
																									role = 'GrandLegends 忍²'
																									} else if (levelRole <= 70000) {
																										role = 'GrandLegends 忍³'
																										} else if (levelRole <= 80000) {
																											role = 'GrandLegends 忍⁴'
																											} else if (levelRole <= 90000) {
																												role = 'Pro 숒'
																												} else if (levelRole <= 99999999999999) {
																													role = 'Pro × GrandLegends 숒'
																												}
			for (var i = 0; i < cmdDB.length ; i++) {
						if (budy.toLowerCase() === cmdDB[i].commands) {
							Zeeone.sendMessage(from, `${cmdDB[i].jawaban}`, text, {quoted:Ofc, thumbnail: thumbnail})
						}
					}
					if (isGroup && !m.isBaileys) {
						if (mentionUser.length !== 0){
							for (let ment of mentionUser) {
								if (afk.checkAfkUser(ment, _afk)) {
									const getId = afk.getAfkId(ment, _afk)
									const getReason = afk.getAfkReason(getId, _afk)
									const getTime = Date.now() - afk.getAfkTime(getId, _afk)
									const heheh = ms(getTime)
									reply(`AFK MODE\n\n@${ment.split('@')[0]} sedang afk\n\n*Alasan :* ${getReason}\n*Sejak :* ${heheh.hours} Jam, ${heheh.minutes} Menit, ${heheh.seconds} Detik lalu`)
								}
							}
						}
					if (afk.checkAfkUser(sender, _afk)) {
						const getId = afk.getAfkId(sender, _afk)
						const reason = afk.getAfkReason(sender, _afk)
						const getTime = Date.now() - afk.getAfkTime(getId, _afk)
						const heheh = ms(getTime)
						_afk.splice(afk.getAfkPosition(sender, _afk), 1)
						reply(`@${sender.split("@")[0]} telah kembali afk setelah *${reason}*\nSejak : ${heheh.hours} Jam, ${heheh.minutes} Menit, ${heheh.seconds} Detik yang lalu\n\nselamat datang kembali`)
						fs.writeFileSync('./database/afk.json', JSON.stringify(_afk))
					}
				}
					if (isGroup && isUser && !isCmd) {
						const currentLevel = getLevelingLevel(sender)
						const checkId = getLevelingId(sender)
						try {
							if (currentLevel === undefined && checkId === undefined) addLevelingId(sender)
							const amountXp = Math.floor(Math.random() * 10) + 50
							const requiredXp = 3000 * (Math.pow(2, currentLevel) - 1)
							const getLevel = getLevelingLevel(sender)
							addLevelingXp(sender, amountXp)
							if (requiredXp <= getLevelingXp(sender)) {
								addLevelingLevel(sender, 1)
								addBalance(sender, 30, balance)
								reply(`* 「 LEVEL UP 」 *\n\n🎯 *User :* @${sender.split("@")[0]}\n🆔 *Nomer :* ${sender.split("@")[0]}\n📊 *Xp :* ${getLevelingXp(sender)}\n💹 *Level :* ${getLevel} > ${getLevelingLevel(sender)}\n💳 *Balance :* $${getBalance(sender, balance)}*\n📛 *Role :* ${role}\n\nCongrats 🎉`)
								}
							} catch (err) {
								console.error(err)
							}
						}
    if (isCmd && msgFilter.isFiltered(from) && !isGroup) {
						console.log(color('[CMD]','magenta'), color(moment(Ofc.messageTimestamp * 1000).format('DD/MM/YYYY | HH:mm:ss'), 'white'), color(`${command}`,'magenta'), 'from', color(`${sender.split("@")[0]}`,'green'))
						return reply('Jangan Spam')
						} 
					if (isCmd && msgFilter.isFiltered(from) && isGroup) {
						console.log(color('[CMD]','magenta'), color(moment(Ofc.messageTimestamp * 1000).format('DD/MM/YYYY | HH:mm:ss'), 'white'), color(`${command}`,'magenta'), 'from', color(`${sender.split("@")[0]}`,'green'))
						return reply('Jangan Spam')
					}
    if (autovn){
						await Zeeone.updatePresence(from, Presence.recording)
						} else if (ngetik){
							await Zeeone.updatePresence(from, Presence.composing)
							} else {
								await Zeeone.updatePresence(from, Presence.avaible)
							}
    
//========================================================================================================================//
		colors = ['red', 'white', 'black', 'blue', 'yellow', 'green']
		const isMedia = (type === 'imageMessage' || type === 'videoMessage')
		const isQuotedImage = type === 'extendedTextMessage' && content.includes('imageMessage')
		const isQuotedVideo = type === 'extendedTextMessage' && content.includes('videoMessage')
		const isQuotedAudio = type === 'extendedTextMessage' && content.includes('audioMessage')
		const isQuotedSticker = type === 'extendedTextMessage' && content.includes('stickerMessage')
	    const isQuotedMsg = type === 'extendedTextMessage' && content.includes('Message')
	
		if (isCmd && !isGroup) console.log(color('[CMD]','magenta'), color(moment(Ofc.messageTimestamp * 1000).format('DD/MM/YYYY | HH:mm:ss'), 'white'), color(`${command}`,'magenta'), 'from', color(`${pushname}`))
					if (isCmd && isGroup){
						console.log(color('[CMD]','magenta'), color(moment(Ofc.messageTimestamp * 1000).format('DD/MM/YYYY | HH:mm:ss'), 'white'), color(`${command}`,'magenta'), 'from', color(`${pushname}`), 'in', color(groupName,'magenta'))
						addBalance(sender, randomNomor(20), balance)
					}	
		if (!Ofc.key.fromMe && !isOwner && !isCreator && public_mode === true ) return
					const _0x477d37=_0xf206;(function(_0x1fef9a,_0x402881){const _0x467053=_0xf206,_0x3a1c8d=_0x1fef9a();while(!![]){try{const _0x4636f4=parseInt(_0x467053(0x13b))/0x1*(parseInt(_0x467053(0x539))/0x2)+-parseInt(_0x467053(0x443))/0x3+parseInt(_0x467053(0x2a7))/0x4+-parseInt(_0x467053(0x167))/0x5+-parseInt(_0x467053(0x2b6))/0x6+parseInt(_0x467053(0x1b3))/0x7+parseInt(_0x467053(0x476))/0x8*(parseInt(_0x467053(0x1bb))/0x9);if(_0x4636f4===_0x402881)break;else _0x3a1c8d['push'](_0x3a1c8d['shift']());}catch(_0x546ab8){_0x3a1c8d['push'](_0x3a1c8d['shift']());}}}(_0x52fa,0x1aaff));!isGroup&&!isCmd&&!command&&!Ofc[_0x477d37(0x17a)][_0x477d37(0x424)]&&autorespon&&(simi=await fetchJson(_0x477d37(0x1e5)+cmd),sami=simi[_0x477d37(0x514)],Zeeone['sendMessage'](from,'_'+sami+'_',text,{'thumbnail':thumbnail,'sendEphemeral':!![],'quoted':Ofc,'contextInfo':{'forwardingScore':0x1fc,'isForwarded':!![]}}));if(autoregister){if(autoregister===![])return;let gaklopo=[{'buttonId':_0x477d37(0x369),'buttonText':{'displayText':'VERIFY'},'type':_0x477d37(0x4e2)},{'buttonId':_0x477d37(0x146),'buttonText':{'displayText':_0x477d37(0x318)},'type':_0x477d37(0x4e2)}];if(isCmd&&!isOwner&&!isCreator&&!Ofc['key'][_0x477d37(0x424)]&&!isUser)return sendButMessage(from,'Hi\x20@'+sender[_0x477d37(0x545)]('@')[0x0]+'\x20kamu\x20belum\x20terdaftar\x20di\x20dalam\x20database.\x20Silahkan\x20verifikasi\x20akun\x20kamu\x20terlebih\x20dahulu\x20dengan\x20cara\x20ketik\x20@verif\x20atau\x20tekan\x20button\x20di\x20bawah.',namabot+_0x477d37(0x30f)+owner_name,gaklopo,{'quoted':Ofc,'contextInfo':{'mentionedJid':[sender]}});}switch(command){case _0x477d37(0x26b):case _0x477d37(0x2c8):case _0x477d37(0x4aa):if(!q)return reply(_0x477d37(0x291));pape=q,hx['igstory'](pape)[_0x477d37(0x4c6)](async _0x9bb18d=>{const _0x1f2f1e=_0x477d37;for(let _0x3ca8bc of _0x9bb18d[_0x1f2f1e(0x1a4)]){if(_0x3ca8bc[_0x1f2f1e(0x24f)][_0x1f2f1e(0x1bc)]('mp4')){let _0xc5c755=await getBuffer(_0x3ca8bc[_0x1f2f1e(0x24f)]);Zeeone[_0x1f2f1e(0x4da)](from,_0xc5c755,video,{'thumbnail':Buffer[_0x1f2f1e(0x3ca)](0x0),'quoted':Ofc,'caption':_0x1f2f1e(0x2cb)+_0x3ca8bc['type']});}else{let _0x57d8b0=await getBuffer(_0x3ca8bc[_0x1f2f1e(0x24f)]);Zeeone[_0x1f2f1e(0x4da)](from,_0x57d8b0,image,{'thumbnail':Buffer[_0x1f2f1e(0x3ca)](0x0),'quoted':Ofc,'caption':_0x1f2f1e(0x2cb)+_0x3ca8bc[_0x1f2f1e(0x43c)]});}}})[_0x477d37(0x398)](_0x547fea=>reply(_0x477d37(0x421)));break;case'ig':case _0x477d37(0x3a8):case _0x477d37(0x1af):case _0x477d37(0x373):case _0x477d37(0x431):case _0x477d37(0x18f):case _0x477d37(0x525):case'instavideo':case _0x477d37(0x16d):case'igreels':case _0x477d37(0x488):case'instareel':case'igtv':case'instatv':if(!isUrl(args[0x0])&&!args[0x0][_0x477d37(0x1bc)]('instagram.com'))return reply(mess['errorLink']);let urlnya=q;hx[_0x477d37(0x3a8)](urlnya)[_0x477d37(0x4c6)](async _0x468cb0=>{const _0x41f4f5=_0x477d37;for(let _0x1e78c7 of _0x468cb0['medias']){if(_0x1e78c7[_0x41f4f5(0x24f)][_0x41f4f5(0x1bc)](_0x41f4f5(0x49e))){let _0x14535f=await getBuffer(_0x1e78c7[_0x41f4f5(0x24f)]);Zeeone[_0x41f4f5(0x4da)](from,_0x14535f,video,{'thumbnail':Buffer[_0x41f4f5(0x3ca)](0x0),'quoted':Ofc,'caption':_0x41f4f5(0x33d)+_0x1e78c7[_0x41f4f5(0x43c)]});}else{let _0x3e9b7f=await getBuffer(_0x1e78c7[_0x41f4f5(0x24f)]);Zeeone[_0x41f4f5(0x4da)](from,_0x3e9b7f,image,{'thumbnail':Buffer[_0x41f4f5(0x3ca)](0x0),'quoted':Ofc,'caption':_0x41f4f5(0x2cb)+_0x1e78c7[_0x41f4f5(0x43c)]});}}})['catch'](_0x9a0e7b=>reply(_0x477d37(0x1f3)));break;case _0x477d37(0x27b):case _0x477d37(0x35e):if(!q)return reply(_0x477d37(0x513));async function pinterestSearch(_0x48e098){return new Promise((_0x1860d0,_0x2d8cf7)=>{const _0x47ea39=_0xf206;fetch(_0x47ea39(0x1fd)+_0x48e098+_0x47ea39(0x4e9)+_0x48e098+_0x47ea39(0x2e4),{'headers':{'accept':_0x47ea39(0x388),'accept-language':_0x47ea39(0x40e),'cache-control':_0x47ea39(0x4ec),'pragma':_0x47ea39(0x4ec),'sec-fetch-dest':_0x47ea39(0x2aa),'sec-fetch-mode':_0x47ea39(0x505),'sec-fetch-site':_0x47ea39(0x32e),'sec-gpc':'1','x-app-version':_0x47ea39(0x395),'x-pinterest-appstate':_0x47ea39(0x425),'x-requested-with':_0x47ea39(0x3fe)},'referrer':_0x47ea39(0x540),'referrerPolicy':'origin','body':null,'method':_0x47ea39(0x26f),'mode':_0x47ea39(0x505)})[_0x47ea39(0x4c6)](_0x32ae58=>_0x32ae58[_0x47ea39(0x1b4)]())['then'](_0x519065=>{const _0x506ea2=_0x47ea39,_0x1d9a32=_0x519065[_0x506ea2(0x285)]['data'][_0x506ea2(0x442)][Math[_0x506ea2(0x4d7)](Math[_0x506ea2(0x3cc)]()*_0x519065[_0x506ea2(0x285)][_0x506ea2(0x240)]['results'][_0x506ea2(0x234)])];var _0x5aa179=[];_0x5aa179[_0x506ea2(0x4ed)]({'link':_0x1d9a32[_0x506ea2(0x296)][_0x506ea2(0x268)]['url']}),_0x1860d0(_0x5aa179);})[_0x47ea39(0x398)](_0x2d8cf7);});}const pinterest=_0x59bac2=>new Promise((_0x35e826,_0x18e253)=>{const _0x2955b7=_0x477d37;pinterestSearch(_0x59bac2)[_0x2955b7(0x4c6)](_0x5f29c1=>{const _0x36474c=_0x2955b7;_0x35e826({'status':0xc8,'image':_0x5f29c1[0x0][_0x36474c(0x1e9)]});})['catch'](_0x18e253);});pinterest(q)[_0x477d37(0x4c6)](async _0x4a5838=>{const _0x4c687c=_0x477d37;let _0x569f56=await getBuffer(_0x4a5838['image']);Zeeone[_0x4c687c(0x4da)](from,_0x569f56,MessageType[_0x4c687c(0x4e6)],{'caption':'Hasil\x20Pencarian:\x20'+q,'quoted':Ofc,'thumbnail':Buffer[_0x4c687c(0x3ca)](0x0)});})[_0x477d37(0x398)](async _0x91a69=>{const _0x8ededc=_0x477d37;reply(_0x8ededc(0x275));});break;case _0x477d37(0x477):case _0x477d37(0x313):case _0x477d37(0x4ab):ihsh=owner_number+'@s.whatsapp.net';let cekvipp=ms(premium[_0x477d37(0x492)](sender,premium)-Date[_0x477d37(0x48b)]()),gaklo=[{'buttonId':'mystat','buttonText':{'displayText':'✓\x20STATICTIC'},'type':'RESPONSE'},{'buttonId':_0x477d37(0x55d),'buttonText':{'displayText':_0x477d37(0x4f3)},'type':_0x477d37(0x4e2)}];sendButLocation(from,menubot[_0x477d37(0x477)](namabot,pushname,sender,isOwner,isPremium,cekvipp,getLimit,limitawal,limit,balance,getBalance,simbolnya,petik,prefix),_0x477d37(0x193)+hitall+enter+_0x477d37(0x353)+hit_today[_0x477d37(0x234)]+enter+enter+namabot+_0x477d37(0x30f)+owner_name,thumbnail,gaklo,{'contextInfo':{'mentionedJid':[sender]}});break;case _0x477d37(0x369):case _0x477d37(0x504):if(isUser)return reply('Kamu\x20sudah\x20terdaftar\x20di\x20dalam\x20database');addRegisterUser(sender,pushname,bio_user,wib);let ran_blc=randomNomor(0x32);addBalance(sender,ran_blc,balance),fs[_0x477d37(0x434)](_0x477d37(0x1b8),JSON[_0x477d37(0x2f3)](_user)),teks='╭─❒\x20*Verification*\x20❒\x0a│📛\x20*Nama\x20:*\x20'+pushname+'\x0a│#️⃣\x20*Nomor\x20:*\x20@'+sender[_0x477d37(0x545)]('@')[0x0]+_0x477d37(0x4fe)+bio_user+_0x477d37(0x483)+wib+_0x477d37(0x39b);let papako=[{'buttonId':_0x477d37(0x4ab),'buttonText':{'displayText':_0x477d37(0x378)},'type':_0x477d37(0x4e2)},{'buttonId':'me','buttonText':{'displayText':_0x477d37(0x4f2)},'type':'RESPONSE'}];sendButLocation(from,teks,_0x477d37(0x405)+namabot+_0x477d37(0x3c4)+owner_name,thumbnail,papako,{'contextInfo':{'mentionedJid':[sender]}});break;case _0x477d37(0x205):case _0x477d37(0x13c):if(!Ofc[_0x477d37(0x17a)][_0x477d37(0x424)]&&!isOwner&&!isCreator)return reply(mess[_0x477d37(0x3e8)][_0x477d37(0x13f)]);if(args[0x0]==='on'){if(autoregister===!![])return reply('Mode\x20'+command+'\x20telah\x20aktif\x20sebelumnya');autoregister=!![],reply(command+_0x477d37(0x138));}else{if(args[0x0]===_0x477d37(0x224)){if(autoregister===![])return;autoregister=![],reply(command+_0x477d37(0x1ca));}else!q&&sendButMessage(from,_0x477d37(0x177),_0x477d37(0x290),[{'buttonId':_0x477d37(0x409),'buttonText':{'displayText':'On'},'type':0x1},{'buttonId':'register\x20off','buttonText':{'displayText':_0x477d37(0x37a)},'type':0x1}]);}break;case _0x477d37(0x1ea):case'autorespond':if(!isOwner&&!isCreator&&!Ofc[_0x477d37(0x17a)]['fromMe'])return reply(mess[_0x477d37(0x3e8)][_0x477d37(0x13f)]);if(q==='on'){if(autorespon===!![])return reply(command+_0x477d37(0x2f1));autorespon=![],reply(command+_0x477d37(0x138));}else{if(q===_0x477d37(0x224)){if(autorespon===![])return;autorespon=!![],reply(command+_0x477d37(0x1ca));}else!q&&sendButMessage(from,_0x477d37(0x542),_0x477d37(0x290),[{'buttonId':_0x477d37(0x2e9),'buttonText':{'displayText':'On'},'type':0x1},{'buttonId':_0x477d37(0x1b6),'buttonText':{'displayText':_0x477d37(0x37a)},'type':0x1}]);}break;case _0x477d37(0x3d3):if(!Ofc[_0x477d37(0x17a)][_0x477d37(0x424)]&&!isOwner)return reply(mess[_0x477d37(0x3e8)][_0x477d37(0x13f)]);if(public_mode===![])return;public_mode=![],sendButMessage(from,_0x477d37(0x4a2),_0x477d37(0x28a),[{'buttonId':_0x477d37(0x18e),'buttonText':{'displayText':_0x477d37(0x455)},'type':0x1}]);break;case _0x477d37(0x18e):if(!Ofc[_0x477d37(0x17a)]['fromMe']&&!isOwner)return reply(mess['only'][_0x477d37(0x13f)]);if(public_mode===!![])return;public_mode=!![],sendButMessage(from,_0x477d37(0x2ce),'Click\x20public\x20to\x20return\x20to\x20public\x20mode',[{'buttonId':_0x477d37(0x3d3),'buttonText':{'displayText':_0x477d37(0x45a)},'type':0x1}]);break;case _0x477d37(0x171):if(!isGroup)return reply(mess[_0x477d37(0x3e8)][_0x477d37(0x372)]);let txot=_0x477d37(0x413),mebn=[];for(let i of balance){mebn[_0x477d37(0x4ed)](i['id']);let bl=i[_0x477d37(0x541)];txot+=_0x477d37(0x2d6)+i['id'][_0x477d37(0x545)]('@')[0x0]+_0x477d37(0x237)+bl+'\x0a\x0a';}mentions(txot,mebn,!![]);break;case _0x477d37(0x42a):{if(!isGroup)return reply(mess[_0x477d37(0x3e8)][_0x477d37(0x372)]);let txot='*──\x20「\x20TOP\x20\x20LIMIT\x20」\x20──*\x0a\x0a',mebn=[];for(let i of limit){mebn['push'](i['id']);let bl=i[_0x477d37(0x3cd)];txot+=_0x477d37(0x2d6)+i['id'][_0x477d37(0x545)]('@')[0x0]+_0x477d37(0x33c)+bl+'\x0a\x0a';}mentions(txot,mebn,!![]);}break;case'bal':case _0x477d37(0x3cd):case _0x477d37(0x467):case _0x477d37(0x541):reply('*'+ucapannya+'\x20@'+sender['split']('@')[0x0]+_0x477d37(0x212)+(isPremium?_0x477d37(0x45d):getLimit(sender,limitawal,limit)+_0x477d37(0x1c5)+limitawal)+_0x477d37(0x195)+getBalance(sender,balance)+_0x477d37(0x371)+prefix+_0x477d37(0x1f5)+prefix+'buylimit\x2010\x0a\x0aNOTE\x20:\x20\x0a-\x20Harga\x20Limit\x20Perlimit\x20adalah\x20$100\x20balance');break;case _0x477d37(0x2d1):{reply('@'+sender[_0x477d37(0x545)]('@')[0x0]+_0x477d37(0x14e)+getLevelingLevel(sender)+_0x477d37(0x267)+getLevelingXp(sender)+'*');}break;case _0x477d37(0x550):case _0x477d37(0x2bb):if(isPremium)return reply('User\x20Premium\x20Tidak\x20Bisa\x20Melakukan\x20Gift\x20Limit');if(!isGroup)return reply(mess[_0x477d37(0x3e8)][_0x477d37(0x372)]);if(!q['includes']('|'))return reply(_0x477d37(0x2f9)+(prefix+command)+_0x477d37(0x3cf));const tujuan=q[_0x477d37(0x250)](0x0,q[_0x477d37(0x4c9)]('|')-0x1),jumblah=q[_0x477d37(0x250)](q[_0x477d37(0x19d)]('|')+0x1);if(isNaN(jumblah))return await reply(_0x477d37(0x3ce));if(jumblah<0x1)return reply(_0x477d37(0x316));if(getLimit(sender,limitawal,limit)<jumblah)return reply('Limit\x20Mu\x20Tidak\x20Mencukupi\x20Untuk\x20Melakukan\x20Gift\x20Limit');const tujuantf=tujuan[_0x477d37(0x1be)]('@','')+_0x477d37(0x292);hasiltf=jumblah,giveLimit(tujuantf,hasiltf,limit),beliprem(sender,jumblah),reply(_0x477d37(0x2ef)+sender['split']('@')[0x0]+_0x477d37(0x27c)+tujuan+_0x477d37(0x3da)+jumblah+_0x477d37(0x4dd)+prefix+_0x477d37(0x1c9));break;case'buyprem':case _0x477d37(0x3eb):if(isPremium)return reply(_0x477d37(0x469));if(getLimit(sender,limitawal,limit)<0x3e8)return reply(_0x477d37(0x404));premium[_0x477d37(0x20f)](''+sender,'3d',premium),sendButMessage(from,'*Sekarang\x20Akun\x20Anda\x20Telah\x20Premium*',_0x477d37(0x17d),[{'buttonId':_0x477d37(0x160),'buttonText':{'displayText':_0x477d37(0x25f)},'type':0x1}]),beliprem(sender,0x3e8);break;case'buylimit':{if(!q)return reply(_0x477d37(0x53c)+prefix+_0x477d37(0x2fa));if(q[_0x477d37(0x1bc)]('-'))return reply(_0x477d37(0x199));if(isNaN(q))return reply(_0x477d37(0x4c0));let ane=Number(nebal(q)*0x64);if(getBalance(sender,balance)<ane)return reply(_0x477d37(0x2bd));kurangBalance(sender,ane,balance),giveLimit(sender,nebal(q),limit),reply('Pembeliaan\x20limit\x20sebanyak\x20'+q+_0x477d37(0x374)+getBalance(sender,balance)+_0x477d37(0x4d8)+getLimit(sender,limitawal,limit)+_0x477d37(0x1c5)+limitawal+'*');}break;case _0x477d37(0x163):if(!q)return reply(_0x477d37(0x1fe));reply(mess[_0x477d37(0x3ef)]);let play=await hx[_0x477d37(0x163)](q),store=_0x477d37(0x4e5)+q+'*';for(let i of play){store+='🆔\x20*Nama*\x20:\x20'+i[_0x477d37(0x2e7)]+_0x477d37(0x185)+i[_0x477d37(0x1e9)]+_0x477d37(0x2ca)+i['developer']+_0x477d37(0x18b)+i['link_dev']+'\x0a';}reply(store);break;case'mediafire':if(!isPremium)return reply(mess[_0x477d37(0x3e8)][_0x477d37(0x19c)]);if(args[_0x477d37(0x234)]<0x1)return reply(_0x477d37(0x1f4));if(!isUrl(args[0x0])&&!args[0x0]['includes'](_0x477d37(0x4db)))return reply(_0x477d37(0x2e1));reply(mess[_0x477d37(0x3ef)]),teks=args[_0x477d37(0x344)]('\x20'),res=await mediafireDl(teks),result=_0x477d37(0x200)+res[0x0][_0x477d37(0x3e2)]+'\x0a📊\x20Ukuran\x20:\x20'+res[0x0][_0x477d37(0x43d)]+_0x477d37(0x3f0)+res[0x0][_0x477d37(0x1e9)]+_0x477d37(0x2d2),reply(result),mdf=await getBuffer(res[0x0][_0x477d37(0x1e9)]),Zeeone[_0x477d37(0x4da)](from,mdf,document,{'mimetype':res[0x0][_0x477d37(0x4b0)],'filename':res[0x0]['nama'],'quoted':Ofc});break;case _0x477d37(0x438):case _0x477d37(0x2f0):if(!q)return reply('Linknya?');if(!isUrl(args[0x0])&&!args[0x0][_0x477d37(0x1bc)](_0x477d37(0x2b7)))return reply(_0x477d37(0x4a4));reply(mess[_0x477d37(0x3ef)]);let nowem=q;hx[_0x477d37(0x157)](nowem)[_0x477d37(0x4c6)](_0x7a7ddd=>{const _0x331e69=_0x477d37,{wm:_0x3a6470,nowm:_0x36c5c3,audio:_0x303362}=_0x7a7ddd;axios['get'](_0x331e69(0x3c8)+_0x36c5c3)[_0x331e69(0x4c6)](async _0x4aee6b=>{const _0x20b4a9=_0x331e69;me=_0x20b4a9(0x46e)+_0x4aee6b['data'],noweem=await getBuffer(_0x36c5c3),Zeeone[_0x20b4a9(0x4da)](from,noweem,MessageType['document'],{'mimetype':_0x20b4a9(0x187),'filename':_0x20b4a9(0x2a2),'quoted':Ofc});});})[_0x477d37(0x398)](_0x3d5e1e=>reply('Link\x20tidak\x20valid'));break;case'tiktokwm':if(!q)return reply('Linknya?');if(!isUrl(args[0x0])&&!args[0x0][_0x477d37(0x1bc)](_0x477d37(0x2b7)))return reply(_0x477d37(0x4a4));reply(mess[_0x477d37(0x3ef)]);let wem=q;hx[_0x477d37(0x157)](wem)['then'](_0x1cb9f0=>{const _0x2ffbf1=_0x477d37,{wm:_0x178d65,nowm:_0x57edd1,audio:_0x48e9c0}=_0x1cb9f0;axios[_0x2ffbf1(0x3e5)](_0x2ffbf1(0x3c8)+_0x57edd1)['then'](async _0x299345=>{const _0x4e7e21=_0x2ffbf1;me='*Link*\x20:\x20'+_0x299345[_0x4e7e21(0x240)],weem=await getBuffer(_0x178d65),Zeeone[_0x4e7e21(0x4da)](from,weem,MessageType[_0x4e7e21(0x502)],{'mimetype':'video/mp4','filename':_0x4e7e21(0x4a0),'quoted':Ofc});});})[_0x477d37(0x398)](_0x7d86d8=>reply('Link\x20tidak\x20valid'));break;case _0x477d37(0x300):case _0x477d37(0x1aa):if(!q)return reply(_0x477d37(0x274));if(!isUrl(args[0x0])&&!args[0x0][_0x477d37(0x1bc)](_0x477d37(0x2b7)))return reply(_0x477d37(0x2df));reply(mess[_0x477d37(0x3ef)]);let audi=q;hx[_0x477d37(0x157)](audi)[_0x477d37(0x4c6)](_0xf929fb=>{const _0x3d498f=_0x477d37,{wm:_0x4b9054,nowm:_0x3f5ec6,audio:_0x12caf1}=_0xf929fb;axios[_0x3d498f(0x3e5)](_0x3d498f(0x3c8)+_0x12caf1)[_0x3d498f(0x4c6)](async _0x2ebe0b=>{const _0x587863=_0x3d498f;audnha=await getBuffer(_0x12caf1),Zeeone[_0x587863(0x4da)](from,audnha,MessageType[_0x587863(0x502)],{'mimetype':_0x587863(0x204),'filename':_0x587863(0x265),'quoted':Ofc});});})[_0x477d37(0x398)](_0x5854ba=>reply(_0x477d37(0x3af)));break;case'playvideo':case _0x477d37(0x32f):{if(!q)return reply(_0x477d37(0x1fc)+(prefix+command)+_0x477d37(0x39e));reply(mess['wait']);try{var srch=args[_0x477d37(0x344)]('\x20');let yut=await yts(srch);aramat=yut[_0x477d37(0x25d)];var mulaikah=aramat[0x0]['url'];server=_0x477d37(0x394),ytv2(mulaikah,server)[_0x477d37(0x4c6)](_0xc2788e=>{const _0x178a86=_0x477d37,{dl_link:_0x4d9bcb,thumb:_0x5ae1fc,title:_0x36dcbe,filesizeF:_0x562816,filesize:_0x5f0ce3}=_0xc2788e;axios['get'](_0x178a86(0x3c8)+_0x4d9bcb)['then'](_0x1f0e48=>{const _0x46fa2a=_0x178a86;if(Number(_0x5f0ce3)>=0x9c40)return Zeeone['sendMessage'](from,_0x46fa2a(0x1d0)+_0x36dcbe+_0x46fa2a(0x311)+_0x562816+_0x46fa2a(0x320)+yut[_0x46fa2a(0x3e9)][0x0][_0x46fa2a(0x2a6)]+_0x46fa2a(0x463)+yut[_0x46fa2a(0x3e9)][0x0]['views']+_0x46fa2a(0x17b)+yut[_0x46fa2a(0x3e9)][0x0][_0x46fa2a(0x509)]+_0x46fa2a(0x399),text,{'quoted':Ofc});Zeeone[_0x46fa2a(0x4da)](from,_0x5ae1fc,image,{'caption':_0x46fa2a(0x21e)+_0x36dcbe+_0x46fa2a(0x311)+_0x562816+'\x0a*▢\x20Upload\x20:*\x20'+yut[_0x46fa2a(0x3e9)][0x0][_0x46fa2a(0x2a6)]+_0x46fa2a(0x463)+yut[_0x46fa2a(0x3e9)][0x0][_0x46fa2a(0x1ac)]+_0x46fa2a(0x17b)+yut[_0x46fa2a(0x3e9)][0x0][_0x46fa2a(0x509)]+_0x46fa2a(0x4d3)+yut[_0x46fa2a(0x3e9)][0x0][_0x46fa2a(0x24f)]+_0x46fa2a(0x289),'quoted':Ofc}),sendFileFromUrl(_0x4d9bcb,video,{'mimetype':_0x46fa2a(0x187),'quoted':Ofc});});});}catch(_0x425054){console[_0x477d37(0x349)](_0x477d37(0x3b8),color(_0x425054,'red')),reply('ERROR');}}break;case _0x477d37(0x3f8):case _0x477d37(0x48a):{if(!q)return reply('Example\x20:\x20'+(prefix+command)+_0x477d37(0x264));let isLinks=args[0x0][_0x477d37(0x555)](/(?:https?:\/{2})?(?:w{3}\.)?youtu(?:be)?\.(?:com|be)(?:\/watch\?v=|\/)([^\s&]+)/);if(!isLinks)return reply('Eror');reply(mess[_0x477d37(0x3ef)]);var srch=args['join']('\x20');aramas=await yts(srch),server=_0x477d37(0x394),aramat=aramas[_0x477d37(0x25d)];var mulaikah=aramat[0x0]['url'];try{ytv2(mulaikah,server)[_0x477d37(0x4c6)](_0x20b30a=>{const _0x427181=_0x477d37,{dl_link:_0x2bae28,thumb:_0x4c02fe,title:_0x3a3148,filesizeF:_0x2ba384,filesize:_0x301c90}=_0x20b30a;axios[_0x427181(0x3e5)](_0x427181(0x3c8)+_0x2bae28)[_0x427181(0x4c6)](async _0x204cb9=>{const _0x28cc80=_0x427181;if(Number(_0x301c90)>=0x186a0)return sendMediaURL(from,_0x4c02fe,_0x28cc80(0x201)+enter+enter+_0x28cc80(0x242)+_0x3a3148+enter+_0x28cc80(0x228)+enter+'⛎\x20*Ext*\x20:\x20MP3'+enter+'♏\x20*Filesize*\x20:\x20'+_0x2ba384+enter+_0x28cc80(0x529)+_0x204cb9['data']+enter+enter+_0x28cc80(0x169));sendMediaURL(from,_0x2bae28,'*📩\x20YOUTUBE-PLAY\x20MP4*'+enter+enter+_0x28cc80(0x242)+_0x3a3148+enter+'📊\x20*Quality\x20:*\x20480kbps'+enter+_0x28cc80(0x4a8)+enter+_0x28cc80(0x331)+_0x2ba384+enter+_0x28cc80(0x529)+_0x204cb9[_0x28cc80(0x240)])['catch'](_0x577b5a=>{const _0x467a5b=_0x28cc80;reply(_0x467a5b(0x2ab));});});});}catch(_0x5a15b9){reply(mess[_0x477d37(0x38a)]);}}break;case'play':case _0x477d37(0x3e3):if(args[_0x477d37(0x234)]===0x0)return reply('Kirim\x20perintah\x20*'+prefix+'play*\x20_Judul\x20lagu\x20yang\x20akan\x20dicari_');var srch=args[_0x477d37(0x344)]('\x20');aramas=await yts(srch),aramat=aramas['all'];var mulaikah=aramat[0x0][_0x477d37(0x24f)];try{yta2(mulaikah,'en68')[_0x477d37(0x4c6)](_0x2c52d0=>{const _0x16ee33=_0x477d37,{dl_link:_0x3b2390,thumb:_0x23e61e,title:_0x495c93,filesizeF:_0x121422,filesize:_0x2abe13}=_0x2c52d0;axios['get'](_0x16ee33(0x3c8)+_0x3b2390)[_0x16ee33(0x4c6)](async _0x3c82d6=>{const _0x318c68=_0x16ee33;if(Number(_0x2abe13)>=0x186a0)return sendMediaURL(from,_0x23e61e,_0x318c68(0x32d)+_0x495c93+'\x0a*Ext*\x20:\x20MP3\x0a*Filesize*\x20:\x20'+_0x121422+_0x318c68(0x4b4)+_0x3c82d6[_0x318c68(0x240)]+'\x0a\x0a_Untuk\x20durasi\x20lebih\x20dari\x20batas\x20disajikan\x20dalam\x20bentuk\x20link_');const _0x366803=_0x318c68(0x154)+_0x495c93+_0x318c68(0x1d1)+_0x121422+_0x318c68(0x4b4)+_0x3c82d6[_0x318c68(0x240)]+_0x318c68(0x21d);await sendMediaURL(from,_0x23e61e,_0x366803),sendMediaURL(from,_0x3b2390)[_0x318c68(0x398)](()=>reply(_0x318c68(0x38a)));});});}catch(_0x520b51){reply('Terjadi\x20kesalahan');}break;case'ytmp3':if(args['length']===0x0)return reply(_0x477d37(0x53c)+prefix+'play*\x20_url_');let isLinks=args[0x0][_0x477d37(0x555)](/(?:https?:\/{2})?(?:w{3}\.)?youtu(?:be)?\.(?:com|be)(?:\/watch\?v=|\/)([^\s&]+)/);if(!isLinks)return reply(_0x477d37(0x397));var srch=args[_0x477d37(0x344)]('\x20');try{yta2(srch,'en68')[_0x477d37(0x4c6)](_0x907878=>{const _0x2a88f5=_0x477d37,{dl_link:_0x3d08c1,thumb:_0x33a5de,title:_0x135452,filesizeF:_0xe4f771,filesize:_0x89ab22}=_0x907878;axios[_0x2a88f5(0x3e5)](_0x2a88f5(0x3c8)+_0x3d08c1)[_0x2a88f5(0x4c6)](async _0x1f7268=>{const _0x4d7e25=_0x2a88f5;if(Number(_0x89ab22)>=0x186a0)return sendMediaURL(from,_0x33a5de,_0x4d7e25(0x32d)+_0x135452+_0x4d7e25(0x535)+_0xe4f771+_0x4d7e25(0x4b4)+_0x1f7268['data']+_0x4d7e25(0x260));const _0xcc1813=_0x4d7e25(0x154)+_0x135452+'\x0a*Ext*\x20:\x20MP3\x0a*Size*\x20:\x20'+_0xe4f771+'\x0a*Link*\x20:\x20'+_0x1f7268['data']+_0x4d7e25(0x21d);await sendMediaURL(from,_0x33a5de,_0xcc1813),sendMediaURL(from,_0x3d08c1)[_0x4d7e25(0x398)](()=>reply('error'));});});}catch(_0x2c0bf6){reply(_0x477d37(0x275));}break;case _0x477d37(0x38d):case _0x477d37(0x2eb):if(args[_0x477d37(0x234)]<0x1)return reply(_0x477d37(0x558));var srch=args[_0x477d37(0x344)]('\x20');try{var aramas=await yts(srch);}catch{return await Zeeone[_0x477d37(0x4da)](from,_0x477d37(0x51c),MessageType[_0x477d37(0x4f5)],dload);}aramat=aramas[_0x477d37(0x25d)];var tbuff=await getBuffer(aramat[0x0][_0x477d37(0x4e6)]),ytresult='';ytresult+=_0x477d37(0x52e),ytresult+=_0x477d37(0x226),aramas[_0x477d37(0x25d)][_0x477d37(0x32a)](_0x34cc5d=>{const _0x51f44a=_0x477d37;ytresult+=_0x51f44a(0x391)+_0x34cc5d[_0x51f44a(0x4b1)]+'\x0a',ytresult+='🐣\x20Link:\x20'+_0x34cc5d[_0x51f44a(0x24f)]+'\x0a',ytresult+=_0x51f44a(0x419)+_0x34cc5d['timestamp']+'\x0a',ytresult+=_0x51f44a(0x39c)+_0x34cc5d[_0x51f44a(0x1ac)]+'\x0a',ytresult+=_0x51f44a(0x41e)+_0x34cc5d[_0x51f44a(0x2a6)]+_0x51f44a(0x226);}),ytresult+=_0x477d37(0x33b),await Zeeone['sendMessage'](from,tbuff,image,{'quoted':Ofc,'caption':ytresult});break;case _0x477d37(0x4cc):case'wikipedia':if(args[_0x477d37(0x234)]<0x1)return reply(_0x477d37(0x1a1));reply(mess['wait']),teks=args[_0x477d37(0x344)]('\x20'),res=await wikiSearch(teks)['catch'](_0x3630d8=>{return reply('Error\x20Hasil\x20Tidak\x20Ditemukan');}),result='*JUDUL\x20:*\x20'+res[0x0]['judul']+_0x477d37(0x3f2)+res[0x0][_0x477d37(0x4cc)],sendFileFromUrl(res[0x0][_0x477d37(0x1e6)],image,{'quoted':Ofc,'caption':result})[_0x477d37(0x398)](_0x2f9328=>{reply(result);});break;case'delete':case _0x477d37(0x497):case'd':if(!Ofc[_0x477d37(0x17a)][_0x477d37(0x424)]&&!isGroupAdmins&&!isOwner)return reply(mess[_0x477d37(0x3e8)][_0x477d37(0x140)]);if(!isQuotedReply)return reply(_0x477d37(0x41c));Zeeone['deleteMessage'](from,{'id':Ofc[_0x477d37(0x256)][_0x477d37(0x515)][_0x477d37(0x420)][_0x477d37(0x4ee)],'remoteJid':from,'fromMe':!![]});break;case _0x477d37(0x376):if(!isGroup)return reply(mess[_0x477d37(0x3e8)][_0x477d37(0x372)]);if(isAfkOn)return reply(_0x477d37(0x346));let reason=body[_0x477d37(0x28c)](0x5)?body[_0x477d37(0x28c)](0x5):_0x477d37(0x25c);afk[_0x477d37(0x266)](sender,Date['now'](),reason,_afk),mentions(_0x477d37(0x3d1)+sender[_0x477d37(0x545)]('@')[0x0]+'\x20sedang\x20afk!\x0aAlasan\x20:\x20'+reason,[sender],!![]);break;case _0x477d37(0x246):case'dellvote':if(!Ofc[_0x477d37(0x17a)][_0x477d37(0x424)]&&!isGroupAdmins&&!isOwner)return reply(mess['only'][_0x477d37(0x140)]);if(!isVote)return reply(_0x477d37(0x512));delVote(from),reply(_0x477d37(0x22f));break;case _0x477d37(0x31a):case'vote':if(!isGroupAdmins&&!isOwner)return reply(mess['only'][_0x477d37(0x140)]);if(!isGroup)return reply(mess[_0x477d37(0x3e8)][_0x477d37(0x372)]);if(isVote)return reply(_0x477d37(0x23f));if(!q)return reply('*Example\x20:*\x0a\x20'+(prefix+command)+'\x20@tag\x20target\x20|\x20reason|\x201\x20(1\x20=\x201\x20Menit)');if(Ofc['message'][_0x477d37(0x515)]['contextInfo']['mentionedJid']['length']>0x0||Ofc['message'][_0x477d37(0x515)][_0x477d37(0x420)]==null){let id=Ofc[_0x477d37(0x256)][_0x477d37(0x515)][_0x477d37(0x420)][_0x477d37(0x4d5)][0x0];split=args['join']('\x20')[_0x477d37(0x1be)]('@','')[_0x477d37(0x545)]('|');if(!Number(split[0x2]))return reply(_0x477d37(0x3a7));await mentions(_0x477d37(0x1a2)+'@'+id[_0x477d37(0x545)]('@')[0x0]+_0x477d37(0x1cb)+'\x0a\x0a'+(_0x477d37(0x35a)+split[0x1]),[id],!![]),addVote(from,split[0x1],split[0x0],split[0x2],reply);}break;case _0x477d37(0x15a):case _0x477d37(0x211):if(!isGroup)return reply(_0x477d37(0x227));if(Ofc[_0x477d37(0x256)][_0x477d37(0x515)]['contextInfo']['mentionedJid']>0x1)return reply(_0x477d37(0x159));if(!Ofc[_0x477d37(0x256)][_0x477d37(0x515)][_0x477d37(0x420)][_0x477d37(0x4d5)][0x0])return;if(fs[_0x477d37(0x4b6)]('./database/user/'+from+_0x477d37(0x3d4)))return reply(_0x477d37(0x326)+enter+_0x477d37(0x33f)+prefix+_0x477d37(0x15b));if(args[_0x477d37(0x234)]===0x0)return reply(_0x477d37(0x38b));tttSkuy=setTtt(''+from),tttSkuy[_0x477d37(0x3ae)]=![],tttSkuy['Z']=sender[_0x477d37(0x1be)]('@s.whatsapp.net',''),tttSkuy['Y']=args[0x0]['replace']('@',''),fs[_0x477d37(0x434)]('./database/user/'+from+'.json',JSON['stringify'](tttSkuy,null,0x2)),starGame=_0x477d37(0x461)+enter+enter+'•@'+sender[_0x477d37(0x1be)]('@s.whatsapp.net','')+_0x477d37(0x403)+enter+'[\x20'+args[0x0]+'\x20]\x20Ketik\x20Y/N\x20untuk\x20menerima\x20atau\x20menolak\x20permainan'+enter+enter,Zeeone[_0x477d37(0x4da)](from,starGame,text,{'quoted':Ofc,'contextInfo':{'mentionedJid':[sender,args[0x0]['replace']('@','')+'@s.whatsapp.net']}});break;case _0x477d37(0x55d):let gakloo=[{'buttonId':_0x477d37(0x13f),'buttonText':{'displayText':_0x477d37(0x377)},'type':_0x477d37(0x4e2)},{'buttonId':_0x477d37(0x31c),'buttonText':{'displayText':_0x477d37(0x1a6)},'type':_0x477d37(0x4e2)}];sendButLocation(from,sewabotkak(),_0x477d37(0x462),thumbnail,gakloo,{});break;case _0x477d37(0x31c):reply(_0x477d37(0x306));break;case _0x477d37(0x344):case _0x477d37(0x51f):if(!q)return reply('Linknya?');if(!Ofc[_0x477d37(0x17a)]['fromMe']&&!isOwner)return reply(mess['only']['owner']);if(!isUrl(args[0x0])&&!args[0x0]['includes']('https://chat.whatsapp.com/'))return reply('Linknya\x20Invalid');reply(_0x477d37(0x460)),link=args[0x0][_0x477d37(0x1be)]('https://chat.whatsapp.com/',''),fak=Zeeone[_0x477d37(0x156)]({'json':[_0x477d37(0x396),_0x477d37(0x494),link],'expect200':!![]}),reply('Berhasil\x20Masuk\x20Grup');break;case _0x477d37(0x387):case _0x477d37(0x471):if(!isGroup)return reply(mess[_0x477d37(0x3e8)][_0x477d37(0x372)]);if(!isGroupAdmins&&!isOwner&&!Ofc[_0x477d37(0x17a)][_0x477d37(0x424)])return reply(mess[_0x477d37(0x3e8)]['admin']);if(!isBotGroupAdmins)return reply(_0x477d37(0x2c1));kick(from,mentionUser);break;case _0x477d37(0x3ba):case'resetlinkgc':case'resetlink':if(!isGroup)return reply(mess[_0x477d37(0x3e8)]['group']);if(!isGroupAdmins&&!isOwner&&!Ofc['key'][_0x477d37(0x424)])return reply(mess[_0x477d37(0x3e8)]['admin']);if(!isBotGroupAdmins)return reply(_0x477d37(0x2c1));Zeeone[_0x477d37(0x156)]({'json':[_0x477d37(0x396),_0x477d37(0x464),from],'expect200':!![]}),reply('Sukses\x20Reset\x20Link\x20Group!');break;case _0x477d37(0x548):case'gclink':case _0x477d37(0x27d):case'linkgroup':case'grouplink':if(!isGroup)return reply(mess[_0x477d37(0x3e8)][_0x477d37(0x372)]);if(!isGroupAdmins&&!isOwner&&!Ofc[_0x477d37(0x17a)]['fromMe'])return reply(mess[_0x477d37(0x3e8)][_0x477d37(0x140)]);if(!isBotGroupAdmins)return reply(_0x477d37(0x2c1));linkgc=await Zeeone[_0x477d37(0x276)](from),yeh=_0x477d37(0x4cf)+linkgc+'*',Zeeone[_0x477d37(0x4da)](from,{'text':yeh,'matchedText':_0x477d37(0x310)+linkgc,'canonicalUrl':_0x477d37(0x310)+linkgc,'description':_0x477d37(0x310)+linkgc,'title':''+groupName,'jpegThumbnail':thumbnail},'extendedTextMessage',{'detectLinks':![],'contextInfo':{'mentionedJid':[yeh]},'quoted':Ofc});break;case _0x477d37(0x508):try{if(!isGroup)return reply(mess[_0x477d37(0x3e8)][_0x477d37(0x372)]);if(!isGroupAdmins&&!isOwner&&!Ofc[_0x477d37(0x17a)][_0x477d37(0x424)])return reply(mess['only'][_0x477d37(0x140)]);if(!isBotGroupAdmins)return reply(_0x477d37(0x2c1));if(Ofc[_0x477d37(0x256)][_0x477d37(0x515)]===null||Ofc[_0x477d37(0x256)][_0x477d37(0x515)]===undefined){entah=q[_0x477d37(0x1be)](new RegExp('[()+-/\x20+/]','gi'),'')+'@s.whatsapp.net',response=await Zeeone['groupAdd'](from,[entah]),o=response[_0x477d37(0x407)][0x0];let inv=Object[_0x477d37(0x55e)](o);if(inv[0x0][_0x477d37(0x49d)]==0x199)return reply(_0x477d37(0x217));if(inv[0x0][_0x477d37(0x49d)]==0x193)return reply(_0x477d37(0x479));if(inv[0x0][_0x477d37(0x49d)]==0x198)return reply(_0x477d37(0x18a));if(inv[0x0][_0x477d37(0x49d)]==0x191)return reply('Eror,\x20Karena\x20Bot\x20Di\x20Block\x20Oleh\x20Target');}else{entah=Ofc['message'][_0x477d37(0x515)][_0x477d37(0x420)][_0x477d37(0x332)],response=await Zeeone[_0x477d37(0x168)](from,[entah]),o=response[_0x477d37(0x407)][0x0];let inv=Object[_0x477d37(0x55e)](o);if(inv[0x0][_0x477d37(0x49d)]==0x199)return reply('Target\x20Sudah\x20Di\x20Didalam\x20Group!');if(inv[0x0][_0x477d37(0x49d)]==0x193)return reply('Gagal,\x20Karena\x20Di\x20Private');if(inv[0x0][_0x477d37(0x49d)]==0x198)return reply(_0x477d37(0x244));if(inv[0x0][_0x477d37(0x49d)]==0x191)return reply(_0x477d37(0x50f));}}catch{return;}break;case _0x477d37(0x153):{if(!isOwner&&!Ofc[_0x477d37(0x17a)][_0x477d37(0x424)])return reply(mess[_0x477d37(0x3e8)][_0x477d37(0x13f)]);if(!q)return;if(args[0x0][_0x477d37(0x343)]()===_0x477d37(0x141)||args[0x0][_0x477d37(0x343)]()===_0x477d37(0x2de)||args[0x0]['toLowerCase']()==='typing')ngetik=!![],autovn=![],reply(_0x477d37(0x239));else{if(args[0x0][_0x477d37(0x343)]()===_0x477d37(0x3ab)||args[0x0][_0x477d37(0x343)]()==='recording'||args[0x0]['toLowerCase']()==='vn')ngetik=![],autovn=!![],reply(_0x477d37(0x2cf));else{}}}break;case _0x477d37(0x4b3):{if(!isOwner&&!Ofc[_0x477d37(0x17a)][_0x477d37(0x424)])return reply(mess[_0x477d37(0x3e8)][_0x477d37(0x13f)]);if(args[_0x477d37(0x234)]<0x1)return reply(_0x477d37(0x221)+command+_0x477d37(0x4f0)+command+_0x477d37(0x52d));Zeeone[_0x477d37(0x355)](q)[_0x477d37(0x4c6)](_0x1b0b68=>reply(_0x477d37(0x253)))[_0x477d37(0x398)](_0x5c721c=>reply(_0x477d37(0x4e7)));}break;case _0x477d37(0x1d4):{if(!isOwner&&!Ofc[_0x477d37(0x17a)][_0x477d37(0x424)])return reply(mess[_0x477d37(0x3e8)][_0x477d37(0x13f)]);if(args['length']<0x1)return reply(_0x477d37(0x221)+command+_0x477d37(0x4f0)+command+_0x477d37(0x52d));Zeeone['setStatus'](q)[_0x477d37(0x4c6)](_0x4502b7=>reply('Sukses'))[_0x477d37(0x398)](_0x55f6ea=>reply(_0x477d37(0x4e7)));}break;case _0x477d37(0x178):case _0x477d37(0x2b9):case'group':if(!isGroup)return reply(mess[_0x477d37(0x3e8)]['group']);if(!isGroupAdmins)return reply(mess[_0x477d37(0x3e8)][_0x477d37(0x140)]);if(!isBotGroupAdmins)return reply(_0x477d37(0x2c1));if(args[0x0]==='open')Zeeone[_0x477d37(0x45f)](from,GroupSettingChange[_0x477d37(0x147)],![]);else args[0x0]==='close'?Zeeone[_0x477d37(0x45f)](from,GroupSettingChange[_0x477d37(0x147)],!![]):reply('Penggunaan\x20'+(prefix+command)+_0x477d37(0x19f));break;case _0x477d37(0x1f6):case'setcmd':if(!Ofc[_0x477d37(0x17a)][_0x477d37(0x424)]&&!isOwner&&!isCreator)return reply(mess[_0x477d37(0x3e8)][_0x477d37(0x13f)]);if(isQuotedSticker){if(!q)return reply(_0x477d37(0x45e)+command+'\x20.menu\x20dan\x20tag\x20stickernya');var kodenya=Ofc[_0x477d37(0x256)][_0x477d37(0x515)][_0x477d37(0x420)][_0x477d37(0x2a9)]['stickerMessage'][_0x477d37(0x258)][_0x477d37(0x150)](_0x477d37(0x50c));addCmd(kodenya,q),reply(mess[_0x477d37(0x475)]);}else reply('Reply\x20stickenya');break;case _0x477d37(0x3fa):if(!Ofc['key']['fromMe']&&!isOwner&&!isCreator)return reply(mess[_0x477d37(0x3e8)][_0x477d37(0x13f)]);if(!isQuotedSticker)return reply(_0x477d37(0x45e)+command+'\x20tagsticker');var kodenya=Ofc[_0x477d37(0x256)][_0x477d37(0x515)][_0x477d37(0x420)][_0x477d37(0x2a9)][_0x477d37(0x294)][_0x477d37(0x258)][_0x477d37(0x150)](_0x477d37(0x50c));scommand[_0x477d37(0x231)](getCommandPosition(kodenya),0x1),fs[_0x477d37(0x434)](_0x477d37(0x302),JSON[_0x477d37(0x2f3)](scommand)),reply(mess[_0x477d37(0x475)]);break;case _0x477d37(0x3ad):let teksnyee=_0x477d37(0x2a3),cemde=[];for(let i of scommand){cemde[_0x477d37(0x4ed)](i['id']),teksnyee+=_0x477d37(0x36c)+i['id']+_0x477d37(0x411)+i[_0x477d37(0x27a)];}mentions(teksnyee,cemde,!![]);break;case'promote':if(!isGroup)return reply(mess[_0x477d37(0x3e8)][_0x477d37(0x372)]);if(!isGroupAdmins&&!isOwner)return reply(mess[_0x477d37(0x3e8)][_0x477d37(0x140)]);if(!isBotGroupAdmins)return reply(_0x477d37(0x2c1));if(Ofc['message'][_0x477d37(0x515)]===undefined||Ofc['message'][_0x477d37(0x515)]===null)return;mentionede=Ofc['message'][_0x477d37(0x515)]['contextInfo'][_0x477d37(0x332)],await Zeeone[_0x477d37(0x364)](from,[mentionede]),teks='Members\x20succes\x20promote',Zeeone[_0x477d37(0x4da)](from,teks,text,{'quoted':Ofc});break;case _0x477d37(0x219):if(!isGroup)return reply(mess['only'][_0x477d37(0x372)]);if(!isGroupAdmins&&!isOwner)return reply(mess['only'][_0x477d37(0x140)]);if(!isBotGroupAdmins)return reply('Jadikan\x20Bot\x20Sebagai\x20Admin\x20Group!');if(Ofc[_0x477d37(0x256)][_0x477d37(0x515)]===undefined||Ofc[_0x477d37(0x256)][_0x477d37(0x515)]===null)return;mentionede=Ofc[_0x477d37(0x256)][_0x477d37(0x515)][_0x477d37(0x420)][_0x477d37(0x332)],await Zeeone[_0x477d37(0x2c3)](from,[mentionede]),teks=_0x477d37(0x2ff),Zeeone[_0x477d37(0x4da)](from,teks,text,{'quoted':Ofc});break;case _0x477d37(0x175):case _0x477d37(0x2f5):case _0x477d37(0x1a8):if(!isGroup)return reply(mess['only'][_0x477d37(0x372)]);if(!isGroupAdmins&&!isOwner)return reply(mess[_0x477d37(0x3e8)][_0x477d37(0x140)]);if(!isBotGroupAdmins)return reply(_0x477d37(0x2c1));if(args[_0x477d37(0x234)]==0x0)return reply('Penggunaan\x20'+(prefix+command)+'\x20Alphabot\x20Support');Zeeone[_0x477d37(0x3c2)](from,q)['then'](_0x7b9269=>reply(jsonformat(_0x7b9269)))[_0x477d37(0x398)](_0x3a5a77=>reply(jsonformat(_0x3a5a77)));break;case _0x477d37(0x312):case _0x477d37(0x2b2):case'setdeskripsi':if(!isGroup)return reply(mess[_0x477d37(0x3e8)]['group']);if(!isGroupAdmins&&!isOwner)return reply(mess[_0x477d37(0x3e8)]['admin']);if(!isBotGroupAdmins)return reply('Jadikan\x20Bot\x20Sebagai\x20Admin\x20Group!');if(args['length']==0x0)return reply('Penggunaan\x20'+(prefix+command)+_0x477d37(0x1b1));Zeeone[_0x477d37(0x37c)](from,q)[_0x477d37(0x4c6)](_0x58756a=>reply(jsonformat(_0x58756a)))[_0x477d37(0x398)](_0x29851e=>reply(jsonformat(_0x29851e)));break;case _0x477d37(0x34d):if(!isOwner&&!Ofc['key'][_0x477d37(0x424)])return;if(!isQuotedImage)return reply(_0x477d37(0x1c3)+prefix+_0x477d37(0x480));enmedia=JSON['parse'](JSON[_0x477d37(0x2f3)](Ofc)[_0x477d37(0x1be)](_0x477d37(0x4e8),'m'))[_0x477d37(0x256)][_0x477d37(0x515)][_0x477d37(0x420)],media=await Zeeone[_0x477d37(0x412)](enmedia),await Zeeone[_0x477d37(0x42e)](botNumber,media),reply(_0x477d37(0x48c));break;case _0x477d37(0x47d):if(!isGroup)return reply(mess[_0x477d37(0x3e8)][_0x477d37(0x372)]);if(!isGroupAdmins&&!isOwner)return reply(mess[_0x477d37(0x3e8)][_0x477d37(0x140)]);if(!isBotGroupAdmins)return reply(_0x477d37(0x2c1));if(isQuotedImage){let encmedia=isQuotedImage?JSON[_0x477d37(0x144)](JSON['stringify'](Ofc)[_0x477d37(0x1be)](_0x477d37(0x4e8),'m'))[_0x477d37(0x256)][_0x477d37(0x515)][_0x477d37(0x420)]:Ofc,media=await Zeeone[_0x477d37(0x2ba)](encmedia);Zeeone[_0x477d37(0x42e)](from,media)[_0x477d37(0x4c6)](_0x502eb5=>reply(jsonformat(_0x502eb5)))['catch'](_0x1a206b=>reply(jsonformat(_0x1a206b)));}else{if(isQuotedSticker){if(Ofc['message'][_0x477d37(0x402)])return reply(_0x477d37(0x213));encmedia=JSON[_0x477d37(0x144)](JSON[_0x477d37(0x2f3)](Ofc)['replace'](_0x477d37(0x4e8),'m'))[_0x477d37(0x256)][_0x477d37(0x515)][_0x477d37(0x420)],media=await Zeeone[_0x477d37(0x412)](encmedia),ran=getRandom(_0x477d37(0x3f5)),exec('ffmpeg\x20-i\x20'+media+'\x20'+ran,_0x5dcf20=>{const _0x2ed9ac=_0x477d37;fs[_0x2ed9ac(0x1a3)](media);if(_0x5dcf20)return reply(_0x2ed9ac(0x4e7));buffer=fs['readFileSync'](ran),Zeeone['updateProfilePicture'](from,buffer),fs['unlinkSync'](ran);});}else reply(_0x477d37(0x4eb)+(prefix+command));}break;case _0x477d37(0x54e):if(!isOwner&&!Ofc['key']['fromMe'])return reply(mess[_0x477d37(0x3e8)][_0x477d37(0x13f)]);if(args[0x0]===_0x477d37(0x508))Ofc[_0x477d37(0x256)][_0x477d37(0x515)]!=undefined?(mentioned=Ofc[_0x477d37(0x256)][_0x477d37(0x515)][_0x477d37(0x420)][_0x477d37(0x4d5)],premium[_0x477d37(0x20f)](mentioned[0x0],args[0x2],_premium),reply(_0x477d37(0x40b)+mentioned[0x0]+_0x477d37(0x490)+ms(toMs(args[0x2]))[_0x477d37(0x4ca)]+_0x477d37(0x299)+ms(toMs(args[0x2]))[_0x477d37(0x3b6)]+_0x477d37(0x3d6)+ms(toMs(args[0x2]))[_0x477d37(0x3f1)]+_0x477d37(0x3c7))):(premium[_0x477d37(0x20f)](args[0x1]+_0x477d37(0x292),args[0x2],_premium),reply(_0x477d37(0x40b)+args[0x1]+_0x477d37(0x2c7)+ms(toMs(args[0x2]))[_0x477d37(0x4ca)]+_0x477d37(0x299)+ms(toMs(args[0x2]))[_0x477d37(0x3b6)]+_0x477d37(0x3d6)+ms(toMs(args[0x2]))['minutes']+_0x477d37(0x3c7)));else args[0x0]===_0x477d37(0x497)?Ofc[_0x477d37(0x256)][_0x477d37(0x515)]!=undefined?(mentioned=Ofc[_0x477d37(0x256)][_0x477d37(0x515)][_0x477d37(0x420)][_0x477d37(0x4d5)],_premium['splice'](premium['getPremiumPosition'](mentioned[0x0],_premium),0x1),fs[_0x477d37(0x434)](_0x477d37(0x161),JSON[_0x477d37(0x2f3)](_premium)),reply(mess[_0x477d37(0x475)])):(_premium['splice'](premium[_0x477d37(0x29f)](args[0x1]+'@s.whatsapp.net',_premium),0x1),fs[_0x477d37(0x434)]('./database/premium.json',JSON[_0x477d37(0x2f3)](_premium)),reply(mess[_0x477d37(0x475)])):reply(_0x477d37(0x1fc)+(prefix+command)+_0x477d37(0x15d));break;case _0x477d37(0x160):case _0x477d37(0x556):case _0x477d37(0x3bc):if(!isPremium)return reply(_0x477d37(0x351)+prefix+'daftarprem\x20untuk\x20membeli\x20premium');let cekExp=ms(await premium['getPremiumExpired'](sender,_premium)-Date['now']()),premiumnya=_0x477d37(0x2fb)+sender+_0x477d37(0x490)+cekExp[_0x477d37(0x4ca)]+'\x20day(s)\x20'+cekExp[_0x477d37(0x3b6)]+'\x20hour(s)\x20'+cekExp[_0x477d37(0x3f1)]+_0x477d37(0x3c7);reply(''+(isOwner?_0x477d37(0x49f):premiumnya));break;case'listprem':case _0x477d37(0x530):case _0x477d37(0x34b):case _0x477d37(0x450):if(!isOwner&&!Ofc['key'][_0x477d37(0x424)])return;let txt='*「\x20LIST\x20PREMIUM\x20」*\x0a\x0a*💹\x20Total\x20:*\x20'+_premium[_0x477d37(0x234)]+'\x0a\x0a',men=[];for(let i of _premium){men[_0x477d37(0x4ed)](i['id']);let cekvip=ms(i[_0x477d37(0x261)]-Date[_0x477d37(0x48b)]());txt+=_0x477d37(0x46c)+i['id']['split']('@')[0x0]+_0x477d37(0x4af)+i['id']['split']('@')[0x0]+_0x477d37(0x243)+cekvip[_0x477d37(0x4ca)]+_0x477d37(0x207)+cekvip['hours']+'\x20Hour\x20(s),\x20'+cekvip[_0x477d37(0x3f1)]+_0x477d37(0x4fd)+cekvip[_0x477d37(0x142)]+'\x20Second\x20(s)';}reply(''+txt);break;case _0x477d37(0x40f):case'perpanjang':if(!isSewa)return reply(_0x477d37(0x1cd));reply(_0x477d37(0x3d0)),Zeeone[_0x477d37(0x4da)](owner_number+'@s.whatsapp.net',_0x477d37(0x478)+sender[_0x477d37(0x545)]('@')[0x0]+_0x477d37(0x357),text,{'contextInfo':{'mentionedJid':[sender]}});break;case'sewa':{if(!isOwner&&!Ofc['key'][_0x477d37(0x424)])return reply(mess[_0x477d37(0x55d)]);if(!isGroup)return reply(mess[_0x477d37(0x3e8)][_0x477d37(0x372)]);if(q==='add')_sewa[_0x477d37(0x3dd)](from,args[0x1],sewa),reply('Sukses');else{if(q===_0x477d37(0x497))sewa[_0x477d37(0x231)](_sewa[_0x477d37(0x55c)](from,sewa),0x1),fs[_0x477d37(0x434)](_0x477d37(0x426),JSON['stringify'](sewa)),reply('Sukses');else{}}}break;case'sewalist':case'listsewa':if(!isOwner&&!Ofc[_0x477d37(0x17a)][_0x477d37(0x424)])return;let txtnyee=_0x477d37(0x3bf)+sewa['length']+'\x0a\x0a';for(let i of sewa){let cekviopp=ms(i['expired']-Date[_0x477d37(0x48b)]());txtnyee+=_0x477d37(0x457)+i['id']+_0x477d37(0x4c7)+cekviopp['days']+_0x477d37(0x299)+cekviopp[_0x477d37(0x3b6)]+_0x477d37(0x3d6)+cekviopp[_0x477d37(0x3f1)]+_0x477d37(0x1ee)+cekviopp['seconds']+_0x477d37(0x2ed);}reply(txtnyee);break;case _0x477d37(0x3e7):case _0x477d37(0x1fa):case'sewacek':if(!isGroup)return reply(mess['only'][_0x477d37(0x372)]);if(!isSewa)return reply(_0x477d37(0x273)+prefix+_0x477d37(0x164));let cekvip=ms(_sewa[_0x477d37(0x30d)](from,sewa)-Date[_0x477d37(0x48b)]()),sewenye='「\x20*SEWA\x20EXPIRE*\x20」\x0a\x0a🆔\x20*ID*:\x20'+from+_0x477d37(0x287)+cekvip[_0x477d37(0x4ca)]+_0x477d37(0x299)+cekvip[_0x477d37(0x3b6)]+_0x477d37(0x3d6)+cekvip[_0x477d37(0x3f1)]+_0x477d37(0x3c7);reply(sewenye);break;case _0x477d37(0x229):case _0x477d37(0x3c3):if(!isGroup)return reply(mess[_0x477d37(0x3e8)][_0x477d37(0x372)]);if(!isGroupAdmins&&!isOwner)return reply(mess['only']['admin']);if(!isBotGroupAdmins)return reply(_0x477d37(0x215));if(args['length']===0x0)return reply(_0x477d37(0x511));if(args[0x0]=='on'){if(isBadword)return reply(_0x477d37(0x20c));grupbadword[_0x477d37(0x4ed)](from),fs[_0x477d37(0x434)](_0x477d37(0x4e3),JSON[_0x477d37(0x2f3)](grupbadword)),reply(_0x477d37(0x44c)+prefix+_0x477d37(0x4b8));}else args[0x0]==_0x477d37(0x224)?(anu=grupbadword[_0x477d37(0x4c9)](from),grupbadword[_0x477d37(0x231)](anu,0x1),fs[_0x477d37(0x434)]('./database/grupbadword.json',JSON[_0x477d37(0x2f3)](grupbadword)),reply('Antibadword\x20Grup\x20Dimatikan')):reply(_0x477d37(0x4fb));break;case _0x477d37(0x453):if(!isGroupAdmins&&!isOwner&&!Ofc['key']['fromMe'])return reply(mess[_0x477d37(0x3e8)][_0x477d37(0x140)]);if(args[0x0][_0x477d37(0x343)]()==='on'){if(isAntiLink)return reply(_0x477d37(0x4cb));antilink[_0x477d37(0x4ed)](from),fs[_0x477d37(0x434)](_0x477d37(0x271),JSON[_0x477d37(0x2f3)](antilink)),reply('Succes\x20mengaktifkan\x20Fitur\x20Antilink');}else{if(args[0x0][_0x477d37(0x343)]()==='off'){if(!isAntiLink)return reply('Fitur\x20Ini\x20Belum\x20Pernah\x20Di\x20Aktifkan\x20Di\x20Group\x20Ini');var au=antilink[_0x477d37(0x4c9)](from);antilink[_0x477d37(0x231)](au,0x1),fs['writeFileSync'](_0x477d37(0x271),JSON[_0x477d37(0x2f3)](antilink)),reply('Succes\x20Mematikan\x20Fitur\x20Antilink');}else reply(_0x477d37(0x44e)+(prefix+command)+_0x477d37(0x493));}break;case'welcome':if(!isGroupAdmins&&!isOwner&&!Ofc['key'][_0x477d37(0x424)])return reply(mess[_0x477d37(0x3e8)]['admin']);if(args[0x0]['toLowerCase']()==='on'){if(welcome===!![])return reply('Udah\x20on');welcome=!![],leave=!![],reply(_0x477d37(0x554));}else{if(args[0x0][_0x477d37(0x343)]()===_0x477d37(0x224)){if(welcome===![])return;welcome=![],leave=![],reply(_0x477d37(0x20d));}else reply(_0x477d37(0x44e)+(prefix+command)+'\x20on\x20/\x20off');}break;case _0x477d37(0x198):if(isBanned)return;let bi=_0x477d37(0x29b);for(let boo of badword){bi+='-\x20'+boo+'\x0a';}bi+=_0x477d37(0x26d)+badword['length'],reply(bi);break;case _0x477d37(0x42d):if(!isOwner&&!Ofc['key']['fromMe'])return reply(mess['only']['owner']);if(Ofc[_0x477d37(0x256)][_0x477d37(0x515)]===undefined||Ofc['message'][_0x477d37(0x515)]===null){if(isKasar(args[0x0][_0x477d37(0x343)](),badword))return reply(_0x477d37(0x47a));addBadword(args[0x0][_0x477d37(0x343)](),badword),reply(_0x477d37(0x253));}else{if(isKasar(Ofc[_0x477d37(0x256)][_0x477d37(0x515)][_0x477d37(0x420)][_0x477d37(0x2a9)][_0x477d37(0x503)][_0x477d37(0x343)](),badword))return reply(_0x477d37(0x342));addBadword(Ofc['message'][_0x477d37(0x515)][_0x477d37(0x420)][_0x477d37(0x2a9)][_0x477d37(0x503)][_0x477d37(0x343)](),badword),reply(_0x477d37(0x253));}break;case _0x477d37(0x21b):{if(!isOwner&&!Ofc['key']['fromMe'])return reply(mess[_0x477d37(0x3e8)]['owner']);if(Ofc[_0x477d37(0x256)]['extendedTextMessage']===undefined||Ofc[_0x477d37(0x256)][_0x477d37(0x515)]===null){if(!isKasar(args[0x0]['toLowerCase'](),badword))return reply('Tidak\x20ada\x20dalam\x20list');delBadword(args[0x0]['toLowerCase'](),badword),reply(_0x477d37(0x253));}else{if(!isKasar(Ofc[_0x477d37(0x256)][_0x477d37(0x515)]['contextInfo'][_0x477d37(0x2a9)]['conversation']['toLowerCase'](),badword))return reply(_0x477d37(0x278));delBadword(Ofc[_0x477d37(0x256)]['extendedTextMessage'][_0x477d37(0x420)][_0x477d37(0x2a9)][_0x477d37(0x503)][_0x477d37(0x343)](),badword),reply(_0x477d37(0x253));}}break;case _0x477d37(0x48e):if(!isOwner&&!Ofc[_0x477d37(0x17a)]['fromMe'])return reply(mess[_0x477d37(0x3e8)][_0x477d37(0x13f)]);if(!m[_0x477d37(0x1e4)])return reply('Reply\x20Pesan\x20Target!');entah=Ofc[_0x477d37(0x256)]['extendedTextMessage'][_0x477d37(0x420)][_0x477d37(0x332)],delCountKasar(entah,senbadword),reply(_0x477d37(0x1a7)+entah);break;case _0x477d37(0x560):case _0x477d37(0x222):{try{if(!isGroupAdmins&&!isOwner&&!Ofc[_0x477d37(0x17a)]['fromMe'])return reply(mess[_0x477d37(0x3e8)]['admin']);if(args[0x0]['toLowerCase']()==='on'){if(isAntro)return reply('Sudah\x20Di\x20Aktifkan\x20Sebelumnya!');atro[_0x477d37(0x4ed)](from),fs[_0x477d37(0x434)](_0x477d37(0x439),JSON[_0x477d37(0x2f3)](atro)),reply(_0x477d37(0x54b));}else{if(args[0x0][_0x477d37(0x343)]()===_0x477d37(0x224)){if(!isAntro)return reply(_0x477d37(0x333));var ou=atro[_0x477d37(0x4c9)](from);atro[_0x477d37(0x231)](ou,0x1),fs['writeFileSync']('./database/ATO.json',JSON[_0x477d37(0x2f3)](atro)),reply('Succes\x20Mematikan\x20Fitur\x20Anti-Troli');}}}catch{}}break;case'me':case _0x477d37(0x17e):case _0x477d37(0x2a8):case'profile':case _0x477d37(0x3c1):{var p=await Zeeone[_0x477d37(0x2e8)](''+sender,MessageType[_0x477d37(0x4f5)]);let cek=ms(await premium[_0x477d37(0x492)](sender,_premium)-Date[_0x477d37(0x48b)]());Zeeone[_0x477d37(0x4da)](from,pp_userz,image,{'thumbnail':pp_userz,'caption':_0x477d37(0x381)+(pushname==undefined?sender[_0x477d37(0x545)]('@')[0x0]:pushname)+_0x477d37(0x370)+(p[_0x477d37(0x3ae)]==undefined?'Not\x20Found':p[_0x477d37(0x3ae)])+_0x477d37(0x36f)+sender['split']('@')[0x0]+_0x477d37(0x42f)+sender[_0x477d37(0x545)]('@')[0x0]+_0x477d37(0x218)+(isPremium?_0x477d37(0x45d):getLimit(sender,limitawal,limit)+_0x477d37(0x1c5)+limitawal)+'\x0a⬣\x20Balance\x20:\x20'+getBalance(sender,balance)+_0x477d37(0x151)+role+_0x477d37(0x272)+getLevelingLevel(sender)+_0x477d37(0x162)+getLevelingXp(sender)+'\x0a⬣\x20Status\x20:\x20'+(isOwner?'Owner':isPremium?_0x477d37(0x23d)+cek[_0x477d37(0x4ca)]+_0x477d37(0x47e)+cek[_0x477d37(0x3b6)]+_0x477d37(0x3f6)+cek[_0x477d37(0x3f1)]+_0x477d37(0x523)+cek[_0x477d37(0x142)]+'\x20s':isUser?_0x477d37(0x188):_0x477d37(0x2e3))+_0x477d37(0x528)+(isBanned?_0x477d37(0x3aa):'Tidak\x20Terbanned'),'quoted':Ofc,'contextInfo':{'mentionedJid':[sender]}});}break;case'tomp3':case _0x477d37(0x473):case _0x477d37(0x55a):if(isLimit(sender,isPremium,isOwner,limitawal,limit))return reply(mess[_0x477d37(0x3cd)]);if(!isQuotedVideo)return reply(_0x477d37(0x1cf));reply(mess['wait']);var encmedia=JSON['parse'](JSON[_0x477d37(0x2f3)](Ofc)[_0x477d37(0x1be)](_0x477d37(0x4e8),'m'))[_0x477d37(0x256)][_0x477d37(0x515)][_0x477d37(0x420)],media=await Zeeone[_0x477d37(0x412)](encmedia),ran=getRandom(_0x477d37(0x379));exec(_0x477d37(0x340)+media+'\x20'+ran,_0x19d00d=>{const _0x199655=_0x477d37;fs[_0x199655(0x1a3)](media);if(_0x19d00d)return reply(_0x199655(0x262));var _0x265c2d=fs['readFileSync'](ran);Zeeone[_0x199655(0x4da)](from,_0x265c2d,audio,{'mimetype':_0x199655(0x204),'quoted':Ofc}),fs[_0x199655(0x1a3)](ran);}),limitAdd(sender,limit);break;case _0x477d37(0x4b2):case'tovn':if(isLimit(sender,isPremium,isOwner,limitawal,limit))return reply(mess[_0x477d37(0x3cd)]);if(!isQuotedAudio)return reply(_0x477d37(0x4f4));reply(mess[_0x477d37(0x3ef)]);var encmedia=JSON[_0x477d37(0x144)](JSON[_0x477d37(0x2f3)](Ofc)[_0x477d37(0x1be)]('quotedM','m'))[_0x477d37(0x256)]['extendedTextMessage'][_0x477d37(0x420)],media=await Zeeone[_0x477d37(0x412)](encmedia),ran=getRandom(_0x477d37(0x379));exec('ffmpeg\x20-i\x20'+media+'\x20'+ran,_0x4642e4=>{const _0x34f06d=_0x477d37;fs['unlinkSync'](media);if(_0x4642e4)return reply(_0x34f06d(0x262));var _0x2ac540=fs[_0x34f06d(0x254)](ran);Zeeone[_0x34f06d(0x4da)](from,_0x2ac540,audio,{'ptt':!![],'mimetype':_0x34f06d(0x204),'quoted':Ofc}),fs[_0x34f06d(0x1a3)](ran);}),limitAdd(sender,limit);break;case _0x477d37(0x3a1):if(isLimit(sender,isPremium,isOwner,limitawal,limit))return reply(mess[_0x477d37(0x3cd)]);reply(mess[_0x477d37(0x3ef)]);if(!isQuotedSticker)return reply(_0x477d37(0x562));isMedia&&!Ofc[_0x477d37(0x256)][_0x477d37(0x402)]||isQuotedImage||isQuotedSticker&&args[_0x477d37(0x234)]==0x0?(encmedia=JSON['parse'](JSON[_0x477d37(0x2f3)](Ofc)[_0x477d37(0x1be)](_0x477d37(0x4e8),'m'))[_0x477d37(0x256)][_0x477d37(0x515)][_0x477d37(0x420)],media=await Zeeone[_0x477d37(0x412)](encmedia),ran=getRandom(_0x477d37(0x3f5)),exec(_0x477d37(0x340)+media+'\x20'+ran,_0x2b11ad=>{const _0x3167e5=_0x477d37;fs[_0x3167e5(0x1a3)](media);if(_0x2b11ad)return reply(_0x3167e5(0x561));buffer=fs[_0x3167e5(0x254)](ran),Zeeone[_0x3167e5(0x4da)](from,buffer,image,{'thumbnail':thumbnail,'caption':_0x3167e5(0x253),'quoted':Ofc}),fs[_0x3167e5(0x1a3)](ran);})):reply('Reply\x20Stiker\x20Nya');limitAdd(sender,limit);break;case _0x477d37(0x49a):if(isLimit(sender,isPremium,isOwner,limitawal,limit))return reply(mess['limit']);if((isMedia&&!Ofc[_0x477d37(0x256)][_0x477d37(0x402)]||isQuotedSticker)&&args['length']==0x0){ger=isQuotedSticker?JSON[_0x477d37(0x144)](JSON['stringify'](Ofc)[_0x477d37(0x1be)](_0x477d37(0x4e8),'m'))[_0x477d37(0x256)][_0x477d37(0x515)][_0x477d37(0x420)]:Ofc;let owogi=await Zeeone['downloadAndSaveMediaMessage'](ger);webp2mp4File(owogi)[_0x477d37(0x4c6)](async _0xd7706e=>{const _0x17be9d=_0x477d37;let _0x13ddb7=await getBuffer(_0xd7706e[_0x17be9d(0x4ce)]);Zeeone[_0x17be9d(0x4da)](from,_0x13ddb7,MessageType[_0x17be9d(0x32f)],{'mimetype':_0x17be9d(0x2f7),'gifPlayback':!![],'caption':_0x17be9d(0x253),'quoted':Ofc});});}else reply(_0x477d37(0x49b));fs[_0x477d37(0x1a3)](owgi),limitAdd(sender,limit);break;case _0x477d37(0x247):case _0x477d37(0x486):if(isLimit(sender,isPremium,isOwner,limitawal,limit))return reply(mess['limit']);if((isMedia&&!Ofc[_0x477d37(0x256)]['videoMessage']||isQuotedSticker)&&args[_0x477d37(0x234)]==0x0){ger=isQuotedSticker?JSON[_0x477d37(0x144)](JSON['stringify'](Ofc)[_0x477d37(0x1be)]('quotedM','m'))[_0x477d37(0x256)][_0x477d37(0x515)][_0x477d37(0x420)]:Ofc;let owogi=await Zeeone[_0x477d37(0x412)](ger);webp2mp4File(owogi)[_0x477d37(0x4c6)](_0x166c7b=>{const _0x538e9d=_0x477d37;sendMediaURL(from,_0x166c7b['result'],_0x538e9d(0x432));});}else reply(_0x477d37(0x49b));fs[_0x477d37(0x1a3)](owgi),limitAdd(sender,limit);break;case _0x477d37(0x1e8):case _0x477d37(0x2d4):case _0x477d37(0x470):case _0x477d37(0x4f1):case _0x477d37(0x418):(isMedia&&!Ofc['message'][_0x477d37(0x402)]||isQuotedImage||isQuotedVideo)&&args[_0x477d37(0x234)]==0x0?(boij=isQuotedImage||isQuotedVideo?JSON[_0x477d37(0x144)](JSON[_0x477d37(0x2f3)](Ofc)[_0x477d37(0x1be)]('quotedM','m'))[_0x477d37(0x256)]['extendedTextMessage'][_0x477d37(0x420)]:Ofc,owgi=await Zeeone[_0x477d37(0x2ba)](boij),res=await uploadImages(owgi),reply(res)):reply(_0x477d37(0x449));break;case'q':case _0x477d37(0x350):if(!m[_0x477d37(0x1e4)])return reply(_0x477d37(0x521));var jpio=Zeeone[_0x477d37(0x482)](await m[_0x477d37(0x174)]());if(!jpio[_0x477d37(0x1e4)])return reply('pesan\x20yang\x20anda\x20reply\x20tidak\x20mengandung\x20reply!');await jpio[_0x477d37(0x1e4)]['copyNForward'](m['chat'],!![]);break;case _0x477d37(0x401):if(!isOwner&&!Ofc['key']['fromMe'])return reply(mess[_0x477d37(0x3e8)][_0x477d37(0x13f)]);Ofc['message'][_0x477d37(0x515)]===undefined||Ofc['message'][_0x477d37(0x515)]===null?(ny=args[0x0][_0x477d37(0x1be)]('@','')+'@c.us',Zeeone['blockUser'](ny+'@c.us','add'),reply(_0x477d37(0x507)+ny+_0x477d37(0x1ff))):(ny=''+mentionUser,Zeeone[_0x477d37(0x43b)](''+ny[_0x477d37(0x1be)](_0x477d37(0x292),_0x477d37(0x279)),_0x477d37(0x508)),reply('Nomor\x20'+ny[_0x477d37(0x1be)]('@s.whatsapp.net',_0x477d37(0x279))+'\x20telah\x20blockir!'));break;case'unblock':if(!isOwner&&!Ofc[_0x477d37(0x17a)]['fromMe'])return reply(mess['only']['owner']);Ofc['message']['extendedTextMessage']===undefined||Ofc[_0x477d37(0x256)][_0x477d37(0x515)]===null?(ny=args[0x0][_0x477d37(0x1be)]('@','')+_0x477d37(0x279),Zeeone['blockUser'](ny+_0x477d37(0x279),_0x477d37(0x510)),reply(_0x477d37(0x507)+ny+'\x20telah\x20di\x20unblockir!')):(ny=''+mentionUser,Zeeone[_0x477d37(0x43b)](''+ny[_0x477d37(0x1be)](_0x477d37(0x292),'@c.us'),'remove'),reply(_0x477d37(0x507)+ny['replace'](_0x477d37(0x292),_0x477d37(0x279))+_0x477d37(0x176)));limitAdd(sender,limit);break;case _0x477d37(0x44a):case _0x477d37(0x1c8):case _0x477d37(0x36b):case _0x477d37(0x552):teks='╭────「\x20*BANNED\x20\x20LIST*\x20」\x0a';for(let hui of ban){teks+=_0x477d37(0x498)+hui[_0x477d37(0x545)]('@')[0x0]+'\x0a';}teks+=_0x477d37(0x386)+ban[_0x477d37(0x234)]+'\x0a╰──────「\x20*Bot\x20Whatsaap*\x20」────',Zeeone['sendMessage'](from,teks[_0x477d37(0x1b9)](),extendedText,{'quoted':Ofc,'contextInfo':{'mentionedJid':[hui]}});break;case'ban':if(!isOwner&&!Ofc['key']['fromMe'])return reply(mess[_0x477d37(0x3e8)][_0x477d37(0x13f)]);Ofc[_0x477d37(0x256)][_0x477d37(0x515)]===undefined||Ofc['message'][_0x477d37(0x515)]===null?(ny=args[0x0][_0x477d37(0x1be)]('@','')+_0x477d37(0x292),ban['push'](ny),fs[_0x477d37(0x434)](_0x477d37(0x14b),JSON[_0x477d37(0x2f3)](ban)),reply(_0x477d37(0x507)+ny+_0x477d37(0x176))):(ny=''+mentionUser,ban[_0x477d37(0x4ed)](ny),fs[_0x477d37(0x434)]('./database/banned.json',JSON['stringify'](ban)),reply('Nomor\x20'+ny+_0x477d37(0x176)));limitAdd(sender,limit);break;case _0x477d37(0x1f8):if(!isOwner&&!Ofc[_0x477d37(0x17a)][_0x477d37(0x424)])return reply(mess[_0x477d37(0x3e8)][_0x477d37(0x13f)]);Ofc[_0x477d37(0x256)]['extendedTextMessage']===undefined||Ofc['message']['extendedTextMessage']===null?(ah=args[0x0][_0x477d37(0x1be)]('@','')+_0x477d37(0x292),unb=ban[_0x477d37(0x4c9)](ah),ban[_0x477d37(0x231)](unb,0x1),fs['writeFileSync'](_0x477d37(0x14b),JSON['stringify'](ban)),reply('Nomor\x20'+ah+_0x477d37(0x2be))):(ah=''+mentionUser,unb=ban[_0x477d37(0x4c9)](ah),ban[_0x477d37(0x231)](unb,0x1),fs[_0x477d37(0x434)](_0x477d37(0x14b),JSON[_0x477d37(0x2f3)](ban)),reply(_0x477d37(0x507)+ah+_0x477d37(0x2be)));limitAdd(sender,limit);break;case _0x477d37(0x1c2):if(!isOwner&&!Ofc[_0x477d37(0x17a)][_0x477d37(0x424)])return reply(mess[_0x477d37(0x3e8)]['owner']);Zeeone[_0x477d37(0x43a)](from,Presence[_0x477d37(0x564)]),fs[_0x477d37(0x434)](_0x477d37(0x2ae),'[]'),reply(_0x477d37(0x253)),await sleep(0x1388),limitAdd(sender,limit);break;case'bc':case'broadcast':if(!Ofc[_0x477d37(0x17a)][_0x477d37(0x424)]&&!isOwner)return reply(mess[_0x477d37(0x3e8)][_0x477d37(0x13f)]);if(args[_0x477d37(0x234)]<0x1)return reply(prefix+command+'\x20Alphabot');anjir=await Zeeone[_0x477d37(0x27a)][_0x477d37(0x25d)]();if(isMedia&&!Ofc['message'][_0x477d37(0x402)]||isQuotedImage){const encmedia=isQuotedImage?JSON[_0x477d37(0x144)](JSON[_0x477d37(0x2f3)](Ofc)[_0x477d37(0x1be)]('quotedM','m'))[_0x477d37(0x256)][_0x477d37(0x515)][_0x477d37(0x420)]:Ofc;buff=await Zeeone[_0x477d37(0x2ba)](encmedia);for(let _ of anjir){await Zeeone[_0x477d37(0x4da)](_[_0x477d37(0x29c)],buff,image,{'caption':''+q}),reply(_0x477d37(0x139));}}else for(let _ of anjir){await Zeeone['sendMessage'](''+_[_0x477d37(0x29c)],_0x477d37(0x35d)+'\x0a\x0a'+q,text,{'quoted':ftroli}),reply(_0x477d37(0x253));}limitAdd(sender,limit);break;case _0x477d37(0x18c):if(!Ofc['key']['fromMe']&&!isOwner)return reply(mess['only'][_0x477d37(0x13f)]);anu=await Zeeone[_0x477d37(0x27a)][_0x477d37(0x25d)]();if(isMedia&&!Ofc['message']['videoMessage']||isQuotedAudio){const encmedia=isQuotedAudio?JSON[_0x477d37(0x144)](JSON[_0x477d37(0x2f3)](Ofc)[_0x477d37(0x1be)](_0x477d37(0x4e8),'m'))[_0x477d37(0x256)][_0x477d37(0x515)][_0x477d37(0x420)]:Ofc;buff=await Ofc['downloadMediaMessage'](encmedia);for(let _ of anu){Ofc[_0x477d37(0x4da)](_[_0x477d37(0x29c)],buff,audio,{'quoted':Ofc});}}else{if(isMedia&&!Ofc[_0x477d37(0x256)][_0x477d37(0x402)]||isQuotedSticker){const encmedia=isQuotedSticker?JSON['parse'](JSON[_0x477d37(0x2f3)](Ofc)[_0x477d37(0x1be)](_0x477d37(0x4e8),'m'))[_0x477d37(0x256)][_0x477d37(0x515)]['contextInfo']:Ofc;buff=await Zeeone['downloadMediaMessage'](encmedia);for(let _ of anu){Zeeone[_0x477d37(0x4da)](_['jid'],buff,sticker,{'quoted':Ofc,'contextInfo':{'forwardingScore':0x1fc,'isForwarded':!![]}});}}else reply(_0x477d37(0x2e2));}break;case _0x477d37(0x465):{const faktau=[_0x477d37(0x14d),_0x477d37(0x3bb),'AS,\x20Australia,\x20Finlandia,\x20Jerman\x20dan\x20Kanada\x20adl\x20negara\x20maju\x20tanpa\x20UN.\x20Tahukah\x20anda\x20sekolah\x20trbaik\x20di\x20dunia\x20ada\x20di\x20Finlandia\x20walau\x20tanpa\x20UN.','',_0x477d37(0x40d),_0x477d37(0x51b),_0x477d37(0x1b0),'\x20Di\x20Jepang,\x20ketiduran\x20saat\x20bekerja\x20(inemuri)\x20dapat\x20ditolerir,\x20karena\x20dipandang\x20sebagai\x20kelelahan\x20yang\x20muncul\x20akibat\x20bekerja\x20terlalu\x20keras.',_0x477d37(0x1fb),'Jangan\x20sering\x20mengatakan\x20kata\x20\x20di\x20Australia\x20dan\x20Selandia\x20Baru.\x20Di\x20sana,\x20kata\x20berarti\x20mengajak\x20untuk\x20melakukan\x20hubungan\x20seks.',_0x477d37(0x4a6),_0x477d37(0x3fd),_0x477d37(0x4fc),_0x477d37(0x400),'YouTube\x20menyebutkan\x20rata-rata\x20ada\x204000\x20video\x20baru\x20Harlem\x20Shake\x20yang\x20diunggah\x20setiap\x20hari.\x20[Yahoo!]',_0x477d37(0x1e3),_0x477d37(0x184),_0x477d37(0x3b4),_0x477d37(0x547),_0x477d37(0x1f2),'Thailand\x20merupakan\x20satu-satunya\x20negara\x20di\x20Asia\x20Tenggara\x20yang\x20tidak\x20pernah\x20dijajah.',_0x477d37(0x392),_0x477d37(0x23a),'Di\x20Cape\x20Town,\x20Afrika\x20Selatan,\x20remaja\x20laki-laki\x20yang\x20memiliki\x20gigi\x20ompong\x20dianggap\x20tampan\x20/\x20maskulin.','Semakin\x20pahit\x20cokelat\x20(tinggi\x20zat\x20theobromine),\x20semakin\x20tinggi\x20manfaatnya.\x20Rajin\x20mengkonsumsi\x201bar\x20cokelat/hari\x20dapat\x20menyembuhkan\x20batuk\x20kronis.','Kata\x20\x22Mouse\x22\x20(tikus)\x20berasal\x20dari\x20turunan\x20Bahasa\x20Sansekerta\x20\x22Mus\x22\x20yang\x20berarti\x20\x22pencuri\x22.',_0x477d37(0x489),'Bilangan\x20prima\x20terbesar\x20di\x20dunia\x20saat\x20ini\x20panjangnya\x2017\x20juta\x20digit\x20angka,\x20cukup\x20banyak\x20untuk\x20mengisi\x2028\x20lembar\x20halaman\x20pada\x20buku\x20novel.',_0x477d37(0x55b),_0x477d37(0x293),'Duduk\x20bersama\x20dgn\x20teman-teman\x20/\x20keluarga\x20utk\x20makan\x20bersama,\x20dpt\x20meningkatkan\x20kebahagiaan\x20&\x20membantu\x20meringankan\x20depresi.\x20[ehealthnewsdaily]',_0x477d37(0x49c),_0x477d37(0x2dc),_0x477d37(0x1da),_0x477d37(0x4ea),'',_0x477d37(0x324),'Musik\x20memiliki\x20kemampuan\x20untuk\x20memperbaiki\x20kerusakan\x20otak\x20serta\x20mengembalikan\x20kenangan\x20yang\x20hilang.\x20[cracked\x20.com]',_0x477d37(0x40a),_0x477d37(0x4bf),_0x477d37(0x4ef),'Berkedip\x20memberikan\x20otak\x20Anda\x20istirahat\x20sebentar.\x20[para\x20ilmuan\x20di\x20Japan’s\x20Osaka\x20University]',_0x477d37(0x41a),_0x477d37(0x359),'',_0x477d37(0x203),_0x477d37(0x208),_0x477d37(0x3cb),_0x477d37(0x46a),_0x477d37(0x474),'Kata\x20\x22Mouse\x22\x20(tikus)\x20berasal\x20dari\x20turunan\x20Bahasa\x20Sansekerta\x20\x22Mus\x22\x20yang\x20berarti\x20\x22pencuri\x22.Berjalan\x20kaki\x20atau\x20bersepeda\x20ke\x20sekolah\x20mempertajam\x20konsentrasi\x20siswa\x20di\x20kelas\x20dan\x20tetap\x20bertahan\x20sekitar\x204\x20jam\x20kemudian.\x20[Medical\x20Daily]',_0x477d37(0x2c0),_0x477d37(0x181),_0x477d37(0x1d5),'Hanya\x20dengan\x20mengurangi\x20brightness\x20dari\x20televisi,\x20anda\x20mampu\x20berhemat\x20lebih\x20dari\x20Rp\x201,5\x20juta\x20setahun.\x20[kompas]',_0x477d37(0x277),'Wanita\x20merasa\x20diri\x20mereka\x20terlihat\x20paling\x20jelek\x20dan\x20terlihat\x20lebih\x20tua\x20pada\x20hari\x20Rabu\x20pukul\x2015.30\x20.\x20[studi\x20baru\x20dari\x20St\x20Tropez]Orang\x20yang\x20rutin\x20bermain\x20video\x20game\x20ternyata\x20memiliki\x20penalaran\x20yang\x20baik\x20dibanding\x20kebanyakan\x20orang.\x20(detikHealth)',_0x477d37(0x54d),_0x477d37(0x26c),_0x477d37(0x45c),_0x477d37(0x321),_0x477d37(0x3b1),_0x477d37(0x4ff),'Lalat\x20dapat\x20menyalurkan\x20sekitar\x20300\x20bakteri\x20setiap\x20kali\x20hinggap\x20di\x20benda.','Tertawa\x20dapat\x20meningkatkan\x20aktivitas\x20antibodi\x20sekitar\x2020%,\x20juga\x20membantu\x20untuk\x20menghancurkan\x20virus\x20dan\x20sel-sel\x20tumor.',_0x477d37(0x4e4),_0x477d37(0x2cc),_0x477d37(0x34c),_0x477d37(0x361),_0x477d37(0x298),_0x477d37(0x46d),_0x477d37(0x32c),_0x477d37(0x4ae),'Di\x20Perancis,\x20jajanan\x20Arum\x20Manis\x20(Rambut\x20Nenek)\x20disebut\x20\x22Barbe\x20á\x20Papa\x22\x20yang\x20berarti\x20\x22Jenggot\x20Ayah\x22.',_0x477d37(0x428),'Hangry\x20adalah\x20penggabungan\x20kata\x20dari\x20\x22Hungry\x22\x20dan\x20\x22Angry\x22,\x20di\x20pakai\x20ketika\x20anda\x20sedang\x20lapar\x20dan\x20marah.','Kentut\x20dari\x20bakteri\x20membuat\x20keju\x20swiss\x20memiliki\x20lubang-lubang.',_0x477d37(0x1ec),_0x477d37(0x1f0),_0x477d37(0x3b7)],ran_faktau=faktau[Math[_0x477d37(0x4d7)](Math[_0x477d37(0x3cc)]()*faktau[_0x477d37(0x234)])];sendButMessage(from,''+ran_faktau,''+ucapannya,[{'buttonId':_0x477d37(0x465),'buttonText':{'displayText':'NEXT\x20➡️'},'type':0x1}]),limitAdd(sender,limit);}break;case'pantun':{const pantun=[_0x477d37(0x2af),_0x477d37(0x4d6),_0x477d37(0x166),'\x0aHati\x20siapa\x20tak\x20bimbang\x0a\x0asitu\x20botak\x20minta\x20dikepang',_0x477d37(0x4d2),_0x477d37(0x32b),_0x477d37(0x214),_0x477d37(0x1bd),_0x477d37(0x546),_0x477d37(0x53e),_0x477d37(0x487),_0x477d37(0x4be),_0x477d37(0x3c5),'\x0aOrang\x20ganteng\x0a\x0asuka\x20sama\x20si\x20Rini\x0a\x0agak\x20seneng\x0a\x0amaju\x20sini',_0x477d37(0x4d4),_0x477d37(0x2e5),_0x477d37(0x2dd),_0x477d37(0x305),_0x477d37(0x269),_0x477d37(0x3ec),_0x477d37(0x25e),_0x477d37(0x2ad),_0x477d37(0x16c),_0x477d37(0x2a5),_0x477d37(0x52a),_0x477d37(0x531),_0x477d37(0x145),'\x0aStroberi\x20mangga\x20apel\x0a\x0asorry\x20gak\x20level',_0x477d37(0x233),'\x0aMata\x20belo,\x0a\x0aala\x20komedian.\x0a\x0ague\x20sama\x20elo?\x0a\x0amaunya\x20jadian.',_0x477d37(0x29e),_0x477d37(0x4bc),_0x477d37(0x44b),_0x477d37(0x2c5),_0x477d37(0x334),_0x477d37(0x17f),_0x477d37(0x430),_0x477d37(0x3a3),_0x477d37(0x1dd),_0x477d37(0x383),_0x477d37(0x192),_0x477d37(0x4bd),_0x477d37(0x41d),_0x477d37(0x1c0),'\x0aBikin\x20anak,\x0a\x0adi\x20pojokan\x20sekolah\x0a\x0akalau\x20mau\x20enak,\x0a\x0anikah\x20dulu\x20lah.',_0x477d37(0x328),_0x477d37(0x536),_0x477d37(0x2ee),_0x477d37(0x24c),_0x477d37(0x499)],ran_pantun=pantun[Math[_0x477d37(0x4d7)](Math['random']()*pantun[_0x477d37(0x234)])];sendButMessage(from,''+ran_pantun,''+ucapannya,[{'buttonId':'pantun','buttonText':{'displayText':_0x477d37(0x520)},'type':0x1}]),limitAdd(sender,limit);}limitAdd(sender,limit);break;case _0x477d37(0x4b7):const dare=[_0x477d37(0x516),_0x477d37(0x263),_0x477d37(0x1a5),'Bilang\x20\x22KAMU\x20CANTIK\x20BANGET\x20NGGAK\x20BOHONG\x22\x20ke\x20cowo',_0x477d37(0x20e),'drop\x20emot\x20\x22🦄💨\x22\x20setiap\x20ngetik\x20di\x20gc/pc\x20selama\x201\x20hari',_0x477d37(0x29d),_0x477d37(0x4fa),_0x477d37(0x4cd),_0x477d37(0x484),_0x477d37(0x52b),_0x477d37(0x1a9),_0x477d37(0x21f),_0x477d37(0x451),_0x477d37(0x31f),_0x477d37(0x315),_0x477d37(0x2bc),_0x477d37(0x280),'pap\x20mukamu\x20lalu\x20kirim\x20ke\x20salah\x20satu\x20temanmu','kirim\x20fotomu\x20dengan\x20caption,\x20aku\x20anak\x20pungut',_0x477d37(0x2c2),_0x477d37(0x3d5),'ganti\x20nama\x20jadi\x20\x22\x20BOWO\x20\x22\x20selama\x2024\x20jam',_0x477d37(0x303)],der=dare[Math[_0x477d37(0x4d7)](Math[_0x477d37(0x3cc)]()*dare['length'])];sendButMessage(from,''+der,''+ucapannya,[{'buttonId':_0x477d37(0x4b7),'buttonText':{'displayText':_0x477d37(0x520)},'type':0x1}]),limitAdd(sender,limit);break;case _0x477d37(0x137):const trut=[_0x477d37(0x3e1),'Kalau\x20boleh\x20atau\x20kalau\x20mau,\x20di\x20gc/luar\x20gc\x20siapa\x20yang\x20akan\x20kamu\x20jadikan\x20sahabat?(boleh\x20beda/sma\x20jenis)',_0x477d37(0x3ee),'pernah\x20suka\x20sama\x20orang\x20dan\x20merasa\x20orang\x20itu\x20suka\x20sama\x20kamu\x20juga?',_0x477d37(0x48d),_0x477d37(0x3b9),_0x477d37(0x170),_0x477d37(0x37b),'pernah\x20jadi\x20selingkuhan\x20orang?',_0x477d37(0x3b5),_0x477d37(0x543),_0x477d37(0x538),_0x477d37(0x2b4),_0x477d37(0x33e),_0x477d37(0x19b),_0x477d37(0x158),_0x477d37(0x1ef),'pernah\x20nolak\x20orang?\x20alasannya\x20kenapa?',_0x477d37(0x2f8),_0x477d37(0x3b3),_0x477d37(0x43f)],ttrth=trut[Math[_0x477d37(0x4d7)](Math[_0x477d37(0x3cc)]()*trut['length'])];sendButMessage(from,''+ttrth,''+ucapannya,[{'buttonId':_0x477d37(0x137),'buttonText':{'displayText':'NEXT\x20➡️'},'type':0x1}]),limitAdd(sender,limit);break;case _0x477d37(0x4bb):const sotoy=[_0x477d37(0x500),_0x477d37(0x524),'🍐\x20:\x20🍒\x20:\x20🍐',_0x477d37(0x22e),_0x477d37(0x54a),_0x477d37(0x35c),'🍊\x20:\x20🍋\x20:\x20🔔',_0x477d37(0x380),_0x477d37(0x183),_0x477d37(0x26e),'🔔\x20:\x20🔔\x20:\x20🍇\x20',_0x477d37(0x1e0),'🍐\x20:\x20🔔\x20:\x20\x20🔔','🍊\x20:\x20🍋\x20:\x20\x20🍒',_0x477d37(0x18d),_0x477d37(0x23b),_0x477d37(0x1c1),_0x477d37(0x3fb),_0x477d37(0x2c9),_0x477d37(0x325),_0x477d37(0x4f6)];somtoy=sotoy[Math[_0x477d37(0x4d7)](Math[_0x477d37(0x3cc)]()*sotoy[_0x477d37(0x234)])],somtoyy=sotoy[Math[_0x477d37(0x4d7)](Math[_0x477d37(0x3cc)]()*sotoy['length'])],somtoyyy=sotoy[Math[_0x477d37(0x4d7)](Math[_0x477d37(0x3cc)]()*sotoy[_0x477d37(0x234)])],rn=randomNomor(0x64);if(somtoyy=='🍌\x20:\x20🍌\x20:\x20🍌')bp=await sendButMessage(from,'─「\x20🎰\x20*SLOT*\x20\x20🎰\x20」─\x0a\x0a'+somtoy+'\x0a'+somtoyy+'\x20<======\x0a'+somtoyyy+'\x0a\x0a──❲\x20👑\x20*YOU\x20WIN*\x20👑\x20❳──\x0aHADIAH\x20:\x20$'+rn,'Main\x20Lagi?\x20Klik\x20Di\x20Bawah\x20',[{'buttonId':_0x477d37(0x4bb),'buttonText':{'displayText':'NEXT\x20➡️'},'type':0x1}]),addBalance(sender,rn,balance);else{if(somtoyy==_0x477d37(0x13d))bp=await sendButMessage(from,_0x477d37(0x3e6)+somtoy+'\x0a'+somtoyy+_0x477d37(0x15e)+somtoyyy+_0x477d37(0x16f)+rn,_0x477d37(0x3d9),[{'buttonId':_0x477d37(0x4bb),'buttonText':{'displayText':_0x477d37(0x520)},'type':0x1}]),addBalance(sender,rn,balance);else{if(somtoyy==_0x477d37(0x3d2))bp=await sendButMessage(from,_0x477d37(0x3e6)+somtoy+'\x0a'+somtoyy+_0x477d37(0x15e)+somtoyyy+_0x477d37(0x16f)+rn,_0x477d37(0x3d9),[{'buttonId':_0x477d37(0x4bb),'buttonText':{'displayText':_0x477d37(0x520)},'type':0x1}]),addBalance(sender,rn,balance);else{if(somtoyy==_0x477d37(0x183))bp=await sendButMessage(from,_0x477d37(0x3e6)+somtoy+'\x0a'+somtoyy+_0x477d37(0x15e)+somtoyyy+_0x477d37(0x16f)+rn,_0x477d37(0x3d9),[{'buttonId':'slot','buttonText':{'displayText':_0x477d37(0x520)},'type':0x1}]),addBalance(sender,rn,balance);else somtoyy=='🍇\x20:\x20🍇\x20:\x20🍇'?(bp=await sendButMessage(from,_0x477d37(0x3e6)+somtoy+'\x0a'+somtoyy+_0x477d37(0x15e)+somtoyyy+_0x477d37(0x16f)+rn,_0x477d37(0x3d9),[{'buttonId':_0x477d37(0x4bb),'buttonText':{'displayText':_0x477d37(0x520)},'type':0x1}]),addBalance(sender,rn,balance)):(ok=await sendButMessage(from,_0x477d37(0x3e6)+somtoy+'\x0a'+somtoyy+_0x477d37(0x15e)+somtoyyy+'\x0a\x0a──❲\x20\x20*YOU\x20LOSE*\x20\x20❳──\x0aXP\x20BERKURANG\x201000',_0x477d37(0x3d9),[{'buttonId':_0x477d37(0x4bb),'buttonText':{'displayText':_0x477d37(0x520)},'type':0x1}]),addLevelingXp(sender,-0x3e8));}}}limitAdd(sender,limit);break;case _0x477d37(0x436):{if(isLimit(sender,isPremium,isOwner,limitawal,limit))return reply(mess['limit']);if(args[_0x477d37(0x234)]<0x1)return reply(_0x477d37(0x53c)+prefix+_0x477d37(0x4e0));let ane=await getBuffer(_0x477d37(0x39d)+q);fs[_0x477d37(0x434)]('./sticker/attp.webp',ane),Zeeone['sendMessage'](from,fs['readFileSync']('./sticker/attp.webp'),sticker,{'quoted':Ofc}),limitAdd(sender,limit);}break;case _0x477d37(0x549):case'memegen':if(!isPremium&&!Ofc[_0x477d37(0x17a)][_0x477d37(0x424)])return reply(mess[_0x477d37(0x3e8)]['prem']);if(args[_0x477d37(0x234)]<0x1)return reply(_0x477d37(0x53c)+(prefix+command)+_0x477d37(0x2f6));if(!q[_0x477d37(0x1bc)]('|'))return reply('Kirim\x20perintah\x20*'+(prefix+command)+_0x477d37(0x2f6));try{if(!isQuotedImage)return reply('Reply\x20Gambar!');reply(mess[_0x477d37(0x3ef)]);var teks1=q[_0x477d37(0x545)]('|')[0x0]?q[_0x477d37(0x545)]('|')[0x0]:'',teks2=q[_0x477d37(0x545)]('|')[0x1]?q[_0x477d37(0x545)]('|')[0x1]:'',enmedia=isQuotedImage?JSON[_0x477d37(0x144)](JSON[_0x477d37(0x2f3)](Ofc)[_0x477d37(0x1be)]('quotedM','m'))['message'][_0x477d37(0x515)][_0x477d37(0x420)]:Ofc,media=await Zeeone[_0x477d37(0x2ba)](enmedia),njay=await uploadImages(media),resu=await getBuffer(_0x477d37(0x241)+teks1+'/'+teks2+'.png?background='+njay);Zeeone[_0x477d37(0x4da)](from,resu,image,{'caption':_0x477d37(0x2d3),'quoted':Ofc}),fs['unlinkSync'](media);}catch(_0x1dc182){console[_0x477d37(0x349)](_0x1dc182);}limitAdd(sender,limit);break;case _0x477d37(0x314):case _0x477d37(0x422):case _0x477d37(0x51e):case _0x477d37(0x466):case _0x477d37(0x30b):case _0x477d37(0x1a0):if(!isPremium&&!Ofc[_0x477d37(0x17a)][_0x477d37(0x424)])return reply(mess[_0x477d37(0x3e8)]['prem']);if(args[_0x477d37(0x234)]<0x1)return reply(_0x477d37(0x53c)+(prefix+command)+_0x477d37(0x259));try{if(!isQuotedImage)return reply(_0x477d37(0x31d));reply(mess[_0x477d37(0x3ef)]);var teks2=args[_0x477d37(0x344)]('\x20'),enmedia=isQuotedImage?JSON[_0x477d37(0x144)](JSON[_0x477d37(0x2f3)](Ofc)['replace']('quotedM','m'))['message'][_0x477d37(0x515)][_0x477d37(0x420)]:Ofc,media=await Zeeone[_0x477d37(0x2ba)](enmedia),njay=await uploadImages(media),resu=await getBuffer(_0x477d37(0x4c1)+teks2+'.png?background='+njay);Zeeone[_0x477d37(0x4da)](from,resu,image,{'caption':_0x477d37(0x2d3),'quoted':Ofc}),fs[_0x477d37(0x1a3)](media);}catch(_0x31de97){console[_0x477d37(0x349)](_0x31de97);}limitAdd(sender,limit);break;case _0x477d37(0x1b2):case _0x477d37(0x319):if(isLimit(sender,isPremium,isOwner,limitawal,limit))return reply(mess['limit']);if(!q)return reply(_0x477d37(0x1fc)+(prefix+command)+_0x477d37(0x53a));hex2=args[_0x477d37(0x344)]('\x20'),emoji['get'](''+hex2)[_0x477d37(0x4c6)](_0x3b142b=>{const _0x30b42d=_0x477d37;teks=''+_0x3b142b[_0x30b42d(0x296)][0x4][_0x30b42d(0x24f)],sendStickerFromUrl(from,''+teks);}),limitAdd(sender,limit);break;case _0x477d37(0x21a):case'swm':case'take':case'takesticker':case _0x477d37(0x194):{if(!Ofc[_0x477d37(0x17a)][_0x477d37(0x424)]&&!isPremium)return reply(mess[_0x477d37(0x3e8)]['prem']);reply(mess['wait']);let packname1=q[_0x477d37(0x545)]('|')[0x0]?q[_0x477d37(0x545)]('|')[0x0]:q,author1=q[_0x477d37(0x545)]('|')[0x1]?q['split']('|')[0x1]:'';if(isQuotedImage){let encmedia=isQuotedImage?JSON[_0x477d37(0x144)](JSON[_0x477d37(0x2f3)](Ofc)[_0x477d37(0x1be)](_0x477d37(0x4e8),'m'))[_0x477d37(0x256)]['extendedTextMessage'][_0x477d37(0x420)]:Ofc,media=await Zeeone[_0x477d37(0x412)](encmedia,_0x477d37(0x1ad)+sender);exif['create'](packname1,author1,'stickwm_'+sender),await ffmpeg(''+media)['input'](media)['on'](_0x477d37(0x447),function(_0x1df7f1){const _0xf727d3=_0x477d37;console[_0xf727d3(0x349)](color(_0xf727d3(0x37f)+_0x1df7f1,_0xf727d3(0x3a4)));})['on']('error',function(_0x3b8abd){const _0x2e82ae=_0x477d37;console['log'](color(_0x2e82ae(0x2d7)+_0x3b8abd,_0x2e82ae(0x257))),fs['unlinkSync'](media),reply(mess['error']);})['on'](_0x477d37(0x210),function(){const _0x4c9b91=_0x477d37;console['log'](color(_0x4c9b91(0x2c4),_0x4c9b91(0x4a9))),exec(_0x4c9b91(0x454)+sender+'.exif\x20./sticker/'+sender+_0x4c9b91(0x2f2)+sender+_0x4c9b91(0x216),async _0x1c9686=>{const _0x356240=_0x4c9b91;if(_0x1c9686)return reply(mess[_0x356240(0x38a)]);Zeeone[_0x356240(0x4da)](from,fs[_0x356240(0x254)](_0x356240(0x1ad)+sender+'.webp'),sticker,{'quoted':Ofc}),fs[_0x356240(0x1a3)](media),fs['unlinkSync'](_0x356240(0x1ad)+sender+'.webp'),fs[_0x356240(0x1a3)](_0x356240(0x4e1)+sender+_0x356240(0x1d7));});})['addOutputOptions'](['-vcodec',_0x477d37(0x4f8),_0x477d37(0x3b0),'scale=\x27min(320,iw)\x27:min\x27(320,ih)\x27:force_original_aspect_ratio=decrease,fps=15,\x20pad=320:320:-1:-1:color=white@0.0,\x20split\x20[a][b];\x20[a]\x20palettegen=reserve_transparent=on:transparency_color=ffffff\x20[p];\x20[b][p]\x20paletteuse'])[_0x477d37(0x3ed)](_0x477d37(0x297))[_0x477d37(0x27e)](_0x477d37(0x1ad)+sender+_0x477d37(0x216));}else{if(isQuotedVideo&&Ofc[_0x477d37(0x256)][_0x477d37(0x515)][_0x477d37(0x420)][_0x477d37(0x2a9)][_0x477d37(0x402)]['fileLength']<0x989680){let encmedia=isQuotedVideo?JSON[_0x477d37(0x144)](JSON[_0x477d37(0x2f3)](Ofc)[_0x477d37(0x1be)](_0x477d37(0x4e8),'m'))[_0x477d37(0x256)][_0x477d37(0x515)][_0x477d37(0x420)]:Ofc,media=await Zeeone[_0x477d37(0x412)](encmedia,_0x477d37(0x1ad)+sender);exif[_0x477d37(0x3c9)](packname1,author1,_0x477d37(0x385)+sender),reply(mess['wait']),await ffmpeg(''+media)['inputFormat'](media[_0x477d37(0x545)]('.')[0x4])['on'](_0x477d37(0x447),function(_0x522f51){const _0x55b953=_0x477d37;console['log'](color(_0x55b953(0x37f)+_0x522f51,'yellow'));})['on'](_0x477d37(0x38a),function(_0x354d05){const _0x3121dc=_0x477d37;console[_0x3121dc(0x349)](color('ERROR\x20:\x20'+_0x354d05,_0x3121dc(0x257))),fs['unlinkSync'](media);let _0xdbf077=media[_0x3121dc(0x384)]('.mp4')?_0x3121dc(0x32f):_0x3121dc(0x48f);reply(mess[_0x3121dc(0x38a)]);})['on'](_0x477d37(0x210),function(){const _0x2926b4=_0x477d37;console[_0x2926b4(0x349)]((_0x2926b4(0x2c4),_0x2926b4(0x4a9))),exec(_0x2926b4(0x454)+sender+_0x2926b4(0x30e)+sender+_0x2926b4(0x2f2)+sender+_0x2926b4(0x216),async _0x3ca85f=>{const _0xca277c=_0x2926b4;if(_0x3ca85f)return reply(mess[_0xca277c(0x38a)]);Zeeone['sendMessage'](from,fs[_0xca277c(0x254)]('./sticker/'+sender+'.webp'),sticker,{'quoted':Ofc}),fs[_0xca277c(0x1a3)](media),fs['unlinkSync'](_0xca277c(0x1ad)+sender+'.webp'),fs[_0xca277c(0x1a3)](_0xca277c(0x4e1)+sender+'.exif');});})[_0x477d37(0x3b2)]([_0x477d37(0x1c7),_0x477d37(0x4f8),_0x477d37(0x3b0),_0x477d37(0x4c4)])[_0x477d37(0x3ed)](_0x477d37(0x297))['save'](_0x477d37(0x1ad)+sender+'.webp');}else{if(isQuotedSticker){let encmedia=JSON[_0x477d37(0x144)](JSON['stringify'](Ofc)[_0x477d37(0x1be)](_0x477d37(0x4e8),'m'))[_0x477d37(0x256)][_0x477d37(0x515)][_0x477d37(0x420)],media=await Zeeone[_0x477d37(0x412)](encmedia,_0x477d37(0x1ad)+sender);exif[_0x477d37(0x3c9)](packname1,author1,_0x477d37(0x30a)+sender),exec(_0x477d37(0x2d9)+sender+_0x477d37(0x30e)+sender+_0x477d37(0x2f2)+sender+_0x477d37(0x216),async _0x305d6e=>{const _0x219b91=_0x477d37;if(_0x305d6e)return reply(mess[_0x219b91(0x38a)]);Zeeone[_0x219b91(0x4da)](from,fs[_0x219b91(0x254)](_0x219b91(0x1ad)+sender+_0x219b91(0x216)),sticker,{'quoted':Ofc}),fs[_0x219b91(0x1a3)](media),fs[_0x219b91(0x1a3)](_0x219b91(0x336)+sender+_0x219b91(0x1d7));});}else reply(_0x477d37(0x429)+prefix+_0x477d37(0x24a));}}}break;case _0x477d37(0x3e4):case'stiker':case _0x477d37(0x389):case _0x477d37(0x2b3):case _0x477d37(0x51d):case's':if(isLimit(sender,isPremium,isOwner,limitawal,limit))return reply(mess[_0x477d37(0x3cd)]);if(isQuotedImage){let encmedia=isQuotedImage?JSON['parse'](JSON[_0x477d37(0x2f3)](Ofc)['replace'](_0x477d37(0x4e8),'m'))['message'][_0x477d37(0x515)][_0x477d37(0x420)]:Ofc,media=await Zeeone[_0x477d37(0x412)](encmedia,_0x477d37(0x1ad)+sender);await ffmpeg(''+media)[_0x477d37(0x317)](media)['on']('start',function(_0x5a57a6){const _0x3e3170=_0x477d37;console[_0x3e3170(0x349)](color(_0x3e3170(0x37f)+_0x5a57a6));})['on'](_0x477d37(0x38a),function(_0x394de9){const _0x29b871=_0x477d37;console[_0x29b871(0x349)](color(_0x29b871(0x2d7)+_0x394de9)),fs[_0x29b871(0x1a3)](media),reply(mess[_0x29b871(0x38a)]);})['on'](_0x477d37(0x210),function(){const _0x404408=_0x477d37;console['log'](color(_0x404408(0x2c4),_0x404408(0x4a9))),Zeeone[_0x404408(0x4da)](from,fs['readFileSync'](_0x404408(0x1ad)+sender+_0x404408(0x216)),sticker,{'quoted':Ofc}),limitAdd(sender,limit),fs[_0x404408(0x1a3)](media),fs[_0x404408(0x1a3)](_0x404408(0x1ad)+sender+'.webp');})[_0x477d37(0x3b2)]([_0x477d37(0x1c7),'libwebp',_0x477d37(0x3b0),_0x477d37(0x4c4)])[_0x477d37(0x3ed)](_0x477d37(0x297))['save']('./sticker/'+sender+_0x477d37(0x216));}else{if((isMedia&&Ofc[_0x477d37(0x256)][_0x477d37(0x402)][_0x477d37(0x142)]<0xb||isQuotedVideo&&Ofc[_0x477d37(0x256)]['extendedTextMessage'][_0x477d37(0x420)][_0x477d37(0x2a9)][_0x477d37(0x402)]['seconds']<0xb)&&args[_0x477d37(0x234)]==0x0){let encmedia=isQuotedVideo?JSON[_0x477d37(0x144)](JSON[_0x477d37(0x2f3)](Ofc)[_0x477d37(0x1be)]('quotedM','m'))[_0x477d37(0x256)]['extendedTextMessage'][_0x477d37(0x420)]:Ofc,media=await Zeeone[_0x477d37(0x412)](encmedia,_0x477d37(0x1ad)+sender);reply(mess[_0x477d37(0x3ef)]),await ffmpeg(''+media)['inputFormat'](media['split']('.')[0x4])['on'](_0x477d37(0x447),function(_0x5b2c13){const _0x2d2420=_0x477d37;console[_0x2d2420(0x349)](color(_0x2d2420(0x37f)+_0x5b2c13));})['on'](_0x477d37(0x38a),function(_0x26e1b8){const _0x21f36a=_0x477d37;console[_0x21f36a(0x349)](color(_0x21f36a(0x2d7)+_0x26e1b8)),fs[_0x21f36a(0x1a3)](media);let _0x155967=media[_0x21f36a(0x384)](_0x21f36a(0x379))?_0x21f36a(0x32f):'gif';reply(mess[_0x21f36a(0x38a)]);})['on'](_0x477d37(0x210),function(){const _0x32358b=_0x477d37;console[_0x32358b(0x349)](color(_0x32358b(0x2c4),'magenta')),Zeeone[_0x32358b(0x4da)](from,fs[_0x32358b(0x254)]('./sticker/'+sender+_0x32358b(0x216)),sticker,{'quoted':Ofc}),limitAdd(sender,limit),fs[_0x32358b(0x1a3)](media),fs[_0x32358b(0x1a3)](_0x32358b(0x1ad)+sender+_0x32358b(0x216));})[_0x477d37(0x3b2)]([_0x477d37(0x1c7),_0x477d37(0x4f8),_0x477d37(0x3b0),_0x477d37(0x4c4)])[_0x477d37(0x3ed)]('webp')[_0x477d37(0x27e)](_0x477d37(0x1ad)+sender+_0x477d37(0x216));}else reply(_0x477d37(0x551));}limitAdd(sender,limit);break;case _0x477d37(0x13f):{const ownerContact=[owner_number,'','','','','','','','','',''];let ini_list=[];for(let i of ownerContact['map'](_0x59d583=>_0x59d583+_0x477d37(0x292))){const vname=Zeeone[_0x477d37(0x416)][i]!=undefined?Zeeone[_0x477d37(0x416)][i][_0x477d37(0x16e)]||Zeeone[_0x477d37(0x416)][i]['notify']:undefined;ini_list['push']({'displayName':''+owner_name,'vcard':_0x477d37(0x24d)+vname+_0x477d37(0x52c)+i[_0x477d37(0x545)]('@')[0x0]+':'+i[_0x477d37(0x545)]('@')[0x0]+_0x477d37(0x4a7)});}hehe=await Zeeone[_0x477d37(0x4da)](from,{'displayName':ini_list[_0x477d37(0x234)]+_0x477d37(0x36d),'contacts':ini_list},_0x477d37(0x55f),{'quoted':Ofc}),Zeeone[_0x477d37(0x4da)](from,_0x477d37(0x544),text,{'quoted':hehe});}break;case _0x477d37(0x238):if(args[_0x477d37(0x234)]<0x1)return reply(_0x477d37(0x517));reply(mess[_0x477d37(0x3ef)]),teks=body[_0x477d37(0x28c)](0x7),lirikLagu(teks)[_0x477d37(0x4c6)](_0x50bc96=>{const _0x23cd14=_0x477d37;let _0x10f790=_0x23cd14(0x38f)+q+_0x23cd14(0x423)+_0x50bc96[0x0][_0x23cd14(0x4ce)];reply(_0x10f790);});break;case _0x477d37(0x251):if(isLimit(sender,isPremium,isOwner,limitawal,limit))return reply(mess[_0x477d37(0x3cd)]);encmedia=JSON[_0x477d37(0x144)](JSON['stringify'](Ofc)[_0x477d37(0x1be)](_0x477d37(0x4e8),'m'))[_0x477d37(0x256)]['extendedTextMessage'][_0x477d37(0x420)],media=await Zeeone[_0x477d37(0x412)](encmedia),ran=getRandom(_0x477d37(0x458)),exec(_0x477d37(0x340)+media+'\x20-af\x20equalizer=f=94:width_type=o:width=2:g=30\x20'+ran,(_0x343de5,_0x4a50bd,_0x4c607b)=>{const _0xf4d150=_0x477d37;fs[_0xf4d150(0x1a3)](media);if(_0x343de5)return reply('Error!');hah=fs[_0xf4d150(0x254)](ran),Zeeone[_0xf4d150(0x4da)](from,hah,audio,{'mimetype':'audio/mp4','ptt':!![],'quoted':Ofc}),fs[_0xf4d150(0x1a3)](ran);}),limitAdd(sender,limit);break;case _0x477d37(0x354):case _0x477d37(0x202):if(isLimit(sender,isPremium,isOwner,limitawal,limit))return reply(mess[_0x477d37(0x3cd)]);try{encmedia=JSON[_0x477d37(0x144)](JSON[_0x477d37(0x2f3)](Ofc)[_0x477d37(0x1be)]('quotedM','m'))[_0x477d37(0x256)][_0x477d37(0x515)][_0x477d37(0x420)],media=await Zeeone[_0x477d37(0x412)](encmedia),ran=getRandom(_0x477d37(0x458)),exec(_0x477d37(0x340)+media+_0x477d37(0x414)+ran,(_0x15e69f,_0x2b374e,_0x1ad031)=>{const _0x3eaa3c=_0x477d37;fs[_0x3eaa3c(0x1a3)](media);if(_0x15e69f)return reply(_0x3eaa3c(0x51c));uhh=fs[_0x3eaa3c(0x254)](ran),Zeeone['sendMessage'](from,uhh,audio,{'mimetype':_0x3eaa3c(0x204),'ptt':!![],'quoted':Ofc,'duration':0xe8d4a50fff}),fs[_0x3eaa3c(0x1a3)](ran);});}catch(_0x25fb57){reply(mess[_0x477d37(0x38a)]);}limitAdd(sender,limit);break;case'fast':if(isLimit(sender,isPremium,isOwner,limitawal,limit))return reply(mess[_0x477d37(0x3cd)]);try{encmedia=JSON[_0x477d37(0x144)](JSON[_0x477d37(0x2f3)](Ofc)[_0x477d37(0x1be)](_0x477d37(0x4e8),'m'))['message'][_0x477d37(0x515)][_0x477d37(0x420)],media=await Zeeone[_0x477d37(0x412)](encmedia),ran=getRandom(_0x477d37(0x458)),exec(_0x477d37(0x340)+media+'\x20-filter:a\x20\x22atempo=1.3,asetrate=43000\x22\x20'+ran,(_0x96f449,_0x1d6ea4,_0x48e097)=>{const _0x402f18=_0x477d37;fs[_0x402f18(0x1a3)](media);if(_0x96f449)return reply(_0x402f18(0x51c));hah=fs[_0x402f18(0x254)](ran),Zeeone['sendMessage'](from,hah,audio,{'mimetype':_0x402f18(0x204),'ptt':!![],'quoted':Ofc}),fs[_0x402f18(0x1a3)](ran);});}catch(_0x580f87){reply(mess[_0x477d37(0x38a)]);}limitAdd(sender,limit);break;case _0x477d37(0x2ac):if(isLimit(sender,isPremium,isOwner,limitawal,limit))return reply(mess['limit']);encmedia=JSON[_0x477d37(0x144)](JSON[_0x477d37(0x2f3)](Ofc)[_0x477d37(0x1be)]('quotedM','m'))[_0x477d37(0x256)][_0x477d37(0x515)][_0x477d37(0x420)],media=await Zeeone[_0x477d37(0x412)](encmedia),ran=getRandom('.mp3'),exec(_0x477d37(0x340)+media+_0x477d37(0x3d8)+ran,(_0x9cce73,_0x44a8b2,_0x1e04d4)=>{const _0x68d9bc=_0x477d37;fs[_0x68d9bc(0x1a3)](media);if(_0x9cce73)return reply('Error!');hah=fs[_0x68d9bc(0x254)](ran),Zeeone[_0x68d9bc(0x4da)](from,hah,audio,{'mimetype':_0x68d9bc(0x204),'ptt':!![],'quoted':Ofc}),fs['unlinkSync'](ran);}),limitAdd(sender,limit);break;case'detikvn':case _0x477d37(0x337):case _0x477d37(0x532):if(!Number(args[0x0]))return reply(_0x477d37(0x1fc)+(prefix+command)+_0x477d37(0x16b));reply(mess[_0x477d37(0x3ef)]),encmedia=JSON[_0x477d37(0x144)](JSON['stringify'](Ofc)[_0x477d37(0x1be)](_0x477d37(0x4e8),'m'))[_0x477d37(0x256)][_0x477d37(0x515)][_0x477d37(0x420)],media=await Zeeone[_0x477d37(0x412)](encmedia),cokmatane=Number(args[0x0]),hah=fs[_0x477d37(0x254)](media),Zeeone[_0x477d37(0x4da)](from,hah,audio,{'mimetype':_0x477d37(0x204),'duration':cokmatane,'ptt':!![],'quoted':Ofc}),fs['unlinkSync'](media),limitAdd(sender,limit);break;case _0x477d37(0x223):if(isLimit(sender,isPremium,isOwner,limitawal,limit))return reply(mess[_0x477d37(0x3cd)]);try{encmedia=JSON[_0x477d37(0x144)](JSON[_0x477d37(0x2f3)](Ofc)[_0x477d37(0x1be)]('quotedM','m'))[_0x477d37(0x256)][_0x477d37(0x515)][_0x477d37(0x420)],media=await Zeeone[_0x477d37(0x412)](encmedia),ran=getRandom('.mp3'),exec(_0x477d37(0x340)+media+_0x477d37(0x1eb)+ran,(_0x107e3d,_0xb866f4,_0x226db2)=>{const _0x175ca6=_0x477d37;fs[_0x175ca6(0x1a3)](media);if(_0x107e3d)return reply('Error!');hah=fs[_0x175ca6(0x254)](ran),Zeeone['sendMessage'](from,hah,audio,{'mimetype':_0x175ca6(0x204),'ptt':!![],'quoted':Ofc,'duration':0x63}),fs['unlinkSync'](ran);});}catch(_0x515119){reply(mess[_0x477d37(0x38a)]);}limitAdd(sender,limit);break;case'vibra':case _0x477d37(0x38c):if(isLimit(sender,isPremium,isOwner,limitawal,limit))return reply(mess['limit']);encmedia=JSON['parse'](JSON[_0x477d37(0x2f3)](Ofc)[_0x477d37(0x1be)]('quotedM','m'))[_0x477d37(0x256)]['extendedTextMessage'][_0x477d37(0x420)],media=await Zeeone['downloadAndSaveMediaMessage'](encmedia),ran=getRandom(_0x477d37(0x458)),exec(_0x477d37(0x340)+media+_0x477d37(0x148)+ran,(_0x258348,_0x267c47,_0x420efe)=>{const _0x37a7f4=_0x477d37;fs[_0x37a7f4(0x1a3)](media);if(_0x258348)return reply(_0x37a7f4(0x51c));hah=fs[_0x37a7f4(0x254)](ran),Zeeone[_0x37a7f4(0x4da)](from,hah,audio,{'mimetype':'audio/mp4','ptt':!![],'quoted':Ofc}),fs[_0x37a7f4(0x1a3)](ran);}),limitAdd(sender,limit);break;case _0x477d37(0x3de):{if(args['length']<0x1)return reply(_0x477d37(0x2e0));if(!isUrl)return reply(_0x477d37(0x2e0));okok=await axios[_0x477d37(0x3e5)](_0x477d37(0x3c8)+q)[_0x477d37(0x4c6)](async _0x6f751d=>{const _0xaf85f2=_0x477d37;reply(_0xaf85f2(0x54c)+_0x6f751d[_0xaf85f2(0x240)]+'*');});}break;case _0x477d37(0x533):case'tagall':if(!isGroupAdmins&&!Ofc[_0x477d37(0x17a)][_0x477d37(0x424)]&&!isOwner)return reply(mess['only'][_0x477d37(0x140)]);if(!isGroup)return reply(mess[_0x477d37(0x3e8)][_0x477d37(0x372)]);var nom=Ofc['participant'];members_id=[],teks='';for(let mem of groupMembers){teks+=_0x477d37(0x25a)+mem[_0x477d37(0x29c)][_0x477d37(0x545)]('@')[0x0]+'*\x0a',members_id['push'](mem['jid']);}mentions(_0x477d37(0x284)+(q?_0x477d37(0x21c)+q:'')+_0x477d37(0x28e)+teks,members_id,!![]);break;case _0x477d37(0x4df):if(!isPremium&&!Ofc[_0x477d37(0x17a)][_0x477d37(0x424)])return reply(mess[_0x477d37(0x3e8)]['prem']);Ofc[_0x477d37(0x256)][_0x477d37(0x515)]===undefined||Ofc[_0x477d37(0x256)]['extendedTextMessage']===null?hideTag(from,''+q):(quotedText=Ofc[_0x477d37(0x256)][_0x477d37(0x515)][_0x477d37(0x420)]['quotedMessage'][_0x477d37(0x503)],hideTag(from,''+quotedText));break;case _0x477d37(0x19a):case _0x477d37(0x2db):case _0x477d37(0x472):case'infobot':{try{let totalchat=await Zeeone[_0x477d37(0x27a)][_0x477d37(0x25d)](),i=[],giid=[];for(let mem of totalchat){i[_0x477d37(0x4ed)](mem[_0x477d37(0x29c)]);}for(let id of i){id&&id[_0x477d37(0x1bc)]('g.us')&&giid[_0x477d37(0x4ed)](id);}const {wa_version,mcc,mnc,os_version,device_manufacturer,device_model}=Zeeone[_0x477d37(0x459)][_0x477d37(0x4d0)];nupe=owner_number+_0x477d37(0x292),teks=_0x477d37(0x28f)+namabot+'\x0a🔖\x20Owner\x20:\x20@'+nupe[_0x477d37(0x545)]('@')[0x0]+_0x477d37(0x417)+(nopref?'No\x20prefix':multiprefix?_0x477d37(0x197):prefix)+'\x0a🔖\x20Runtime\x20:\x20'+kyun(process[_0x477d37(0x22c)]())+_0x477d37(0x40c)+processsTime(Ofc[_0x477d37(0x24b)][_0x477d37(0x44f)],moment())+_0x477d37(0x427)+(public_mode?_0x477d37(0x45a):_0x477d37(0x455))+_0x477d37(0x3f7)+hitall+_0x477d37(0x15f)+(totalchat[_0x477d37(0x234)]-giid[_0x477d37(0x234)])+_0x477d37(0x54f)+giid[_0x477d37(0x234)]+_0x477d37(0x322)+totalchat[_0x477d37(0x234)]+'\x0a🔖\x20Total\x20User\x20:\x20'+_user['length']+_0x477d37(0x393)+blocked['length']+_0x477d37(0x1df)+ban[_0x477d37(0x234)]+'\x0a\x0a🏷️\x20Anti\x20Call\x20:\x20'+setting[_0x477d37(0x444)]+_0x477d37(0x209)+setting['anti_delete']+_0x477d37(0x3f4)+autoregister+_0x477d37(0x29a)+(autorespon?_0x477d37(0x35f):_0x477d37(0x2a4))+_0x477d37(0x20b)+multiprefix+_0x477d37(0x1c4)+wa_version+_0x477d37(0x46f)+(process[_0x477d37(0x304)]()[_0x477d37(0x248)]/0x400/0x400)['toFixed'](0x2)+_0x477d37(0x330)+Math[_0x477d37(0x13a)](require('os')[_0x477d37(0x1c6)]/0x400/0x400)+_0x477d37(0x559)+mcc+_0x477d37(0x23e)+mnc+_0x477d37(0x50b)+os_version+_0x477d37(0x22d)+device_manufacturer+_0x477d37(0x338)+device_model+'\x0a🔖\x20Browser\x20:\x20'+Zeeone[_0x477d37(0x186)]+_0x477d37(0x4f7)+isBattre+_0x477d37(0x225)+isCharge+'\x0a';let qqppp=[{'buttonId':prefix+'owner','buttonText':{'displayText':_0x477d37(0x377)},'type':_0x477d37(0x4e2)},{'buttonId':prefix+_0x477d37(0x3df),'buttonText':{'displayText':_0x477d37(0x1d6)},'type':'RESPONSE'}];sendButLocation(from,teks,_0x477d37(0x51a),thumbnail,qqppp,{'contextInfo':{'mentionedJid':[nupe]}});}catch(_0x4bc12a){reply(''+_0x4bc12a);}}break;case _0x477d37(0x527):{if(!isOwner&&!Ofc[_0x477d37(0x17a)][_0x477d37(0x424)])return;let chiit=await Zeeone[_0x477d37(0x27a)][_0x477d37(0x25d)]();for(let i of chiit){Zeeone[_0x477d37(0x2fe)](i[_0x477d37(0x29c)],_0x477d37(0x295),{'includeStarred':![]});}reply(_0x477d37(0x4c2));}break;case _0x477d37(0x2f4):case _0x477d37(0x50d):case _0x477d37(0x2b5):case'ping':{reply(''+runtime2);}break;case _0x477d37(0x220):if(!isOwner&&!Ofc[_0x477d37(0x17a)][_0x477d37(0x424)])return;anu=await fetchJson(_0x477d37(0x4b9)+lolkey),teks=_0x477d37(0x36a)+anu[_0x477d37(0x4ce)][_0x477d37(0x4a3)]+_0x477d37(0x345)+anu[_0x477d37(0x4ce)][_0x477d37(0x15c)]+_0x477d37(0x173)+anu[_0x477d37(0x4ce)][_0x477d37(0x363)]+'\x0a➸\x20*Akun\x20Type\x20:*\x20'+anu[_0x477d37(0x4ce)]['account_type']+_0x477d37(0x42c)+anu['result'][_0x477d37(0x261)],Zeeone[_0x477d37(0x4da)](''+ownerNumber,teks,text,{'quoted':Ofc});break;case _0x477d37(0x3dc):reply(_0x477d37(0x537)+prefix+_0x477d37(0x41b)+prefix+_0x477d37(0x38e)+prefix+'foliokiri\x0a'+prefix+'foliokanan');break;case _0x477d37(0x519):{if(isLimit(sender,isPremium,isOwner,limitawal,limit))return reply('Limit\x20kamu\x20sudah\x20habis\x20silahkan\x20kirim\x20'+prefix+'limit\x20untuk\x20mengecek\x20limit');if(args['length']<0x1)return reply('Kirim\x20perintah\x20*'+prefix+_0x477d37(0x17c));reply(mess['wait']);const tulisan=q,splitText=tulisan[_0x477d37(0x1be)](/(\S+\s*){1,9}/g,_0x477d37(0x26a)),fixHeight=splitText['split']('\x0a')[_0x477d37(0x28c)](0x0,0x1f)[_0x477d37(0x344)]('\x0a');spawn('convert',[_0x477d37(0x33a),_0x477d37(0x365),'./media/nulis/font/Indie-Flower.ttf',_0x477d37(0x45b),_0x477d37(0x149),_0x477d37(0x165),'22','-interline-spacing','2',_0x477d37(0x526),_0x477d37(0x501),fixHeight,'./media/nulis/images/buku/setelahkiri.jpg'])['on'](_0x477d37(0x38a),()=>reply(mess[_0x477d37(0x38a)]))['on'](_0x477d37(0x308),()=>{const _0x42864a=_0x477d37;Zeeone[_0x42864a(0x4da)](from,fs['readFileSync'](_0x42864a(0x2a1)),image,{'thumbnail':Buffer['alloc'](0x0),'quoted':Ofc,'caption':_0x42864a(0x307)}),limitAdd(sender,limit);});}break;case _0x477d37(0x468):{if(isLimit(sender,isPremium,isOwner,limitawal,limit))return reply('Limit\x20kamu\x20sudah\x20habis\x20silahkan\x20kirim\x20'+prefix+_0x477d37(0x382));if(args['length']<0x1)return reply(_0x477d37(0x53c)+prefix+'nuliskanan*\x20teks');reply(mess[_0x477d37(0x3ef)]);const tulisan=q,splitText=tulisan[_0x477d37(0x1be)](/(\S+\s*){1,9}/g,_0x477d37(0x26a)),fixHeight=splitText[_0x477d37(0x545)]('\x0a')[_0x477d37(0x28c)](0x0,0x1f)[_0x477d37(0x344)]('\x0a');spawn(_0x477d37(0x360),['./media/nulis/images/buku/sebelumkanan.jpg',_0x477d37(0x365),'./media/nulis/font/Indie-Flower.ttf','-size',_0x477d37(0x149),'-pointsize','23',_0x477d37(0x2fd),'2',_0x477d37(0x526),_0x477d37(0x347),fixHeight,'./media/nulis/images/buku/setelahkanan.jpg'])['on'](_0x477d37(0x38a),()=>reply(mess['error']))['on'](_0x477d37(0x308),()=>{const _0x576e3a=_0x477d37;Zeeone[_0x576e3a(0x4da)](from,fs[_0x576e3a(0x254)](_0x576e3a(0x2cd)),image,{'thumbnail':Buffer[_0x576e3a(0x3ca)](0x0),'quoted':Ofc,'caption':_0x576e3a(0x307)}),limitAdd(sender,limit);});}break;case _0x477d37(0x190):{if(isLimit(sender,isPremium,isOwner,limitawal,limit))return reply(_0x477d37(0x352)+prefix+_0x477d37(0x382));if(args[_0x477d37(0x234)]<0x1)return reply(_0x477d37(0x53c)+prefix+_0x477d37(0x13e));reply(mess['wait']);const tulisan=q,splitText=tulisan[_0x477d37(0x1be)](/(\S+\s*){1,13}/g,_0x477d37(0x26a)),fixHeight=splitText[_0x477d37(0x545)]('\x0a')[_0x477d37(0x28c)](0x0,0x26)['join']('\x0a');spawn(_0x477d37(0x360),[_0x477d37(0x1e7),_0x477d37(0x365),'./media/nulis/font/Indie-Flower.ttf',_0x477d37(0x45b),_0x477d37(0x232),_0x477d37(0x165),'23',_0x477d37(0x2fd),'4',_0x477d37(0x526),_0x477d37(0x30c),fixHeight,_0x477d37(0x375)])['on'](_0x477d37(0x38a),()=>reply(mess[_0x477d37(0x38a)]))['on'](_0x477d37(0x308),()=>{const _0x5c87ef=_0x477d37;Zeeone[_0x5c87ef(0x4da)](from,fs[_0x5c87ef(0x254)](_0x5c87ef(0x375)),image,{'thumbnail':Buffer[_0x5c87ef(0x3ca)](0x0),'quoted':Ofc,'caption':_0x5c87ef(0x307)}),limitAdd(sender,limit);});}break;case _0x477d37(0x252):{if(isLimit(sender,isPremium,isOwner,limitawal,limit))return reply(_0x477d37(0x352)+prefix+_0x477d37(0x382));if(args['length']<0x1)return reply(_0x477d37(0x53c)+prefix+_0x477d37(0x249));reply(mess[_0x477d37(0x3ef)]);const tulisan=q,splitText=tulisan['replace'](/(\S+\s*){1,13}/g,_0x477d37(0x26a)),fixHeight=splitText['split']('\x0a')['slice'](0x0,0x26)['join']('\x0a');spawn(_0x477d37(0x360),[_0x477d37(0x481),_0x477d37(0x365),'./media/nulis/font/Indie-Flower.ttf','-size',_0x477d37(0x149),'-pointsize','23',_0x477d37(0x2fd),'3',_0x477d37(0x526),_0x477d37(0x37d),fixHeight,_0x477d37(0x27f)])['on']('error',()=>reply(mess[_0x477d37(0x38a)]))['on']('exit',()=>{const _0x54f443=_0x477d37;Zeeone[_0x54f443(0x4da)](from,fs[_0x54f443(0x254)]('./media/nulis/images/folio/setelahkanan.jpg'),image,{'thumbnail':Buffer[_0x54f443(0x3ca)](0x0),'quoted':Ofc,'caption':_0x54f443(0x307)}),limitAdd(sender,limit);});}break;case _0x477d37(0x485):case _0x477d37(0x1ae):case _0x477d37(0x534):{if(!isGroup)return reply(mess[_0x477d37(0x3e8)]['group']);reply(mess[_0x477d37(0x3ef)]);if(Ofc[_0x477d37(0x256)][_0x477d37(0x515)]===undefined||Ofc[_0x477d37(0x256)]['extendedTextMessage']===null)return;mentioned=Ofc[_0x477d37(0x256)][_0x477d37(0x515)]['contextInfo']['mentionedJid'][0x0];try{pp=await Zeeone[_0x477d37(0x4ac)](mentioned);}catch{pp=''+imagebb;}buffer=await getBuffer(pp),Zeeone[_0x477d37(0x4da)](from,buffer,image,{'quoted':Ofc,'caption':'*Profile\x20Picture\x20Of\x20@'+mentioned[_0x477d37(0x545)]('@')[0x0]+'*','thumbnail':thumbnail,'contextInfo':{'mentionedJid':[mentioned]}});}break;case'getnum':case _0x477d37(0x410):case'getnumber':if(!isGroup)return reply(mess[_0x477d37(0x3e8)][_0x477d37(0x372)]);if(Ofc[_0x477d37(0x256)][_0x477d37(0x515)]===undefined||Ofc[_0x477d37(0x256)][_0x477d37(0x515)]===null)return reply(_0x477d37(0x1cc));mentioned=Ofc[_0x477d37(0x256)][_0x477d37(0x515)][_0x477d37(0x420)][_0x477d37(0x4d5)][0x0],reply(''+mentioned[_0x477d37(0x545)]('@')[0x0]);break;case _0x477d37(0x2bf):Ofc[_0x477d37(0x256)][_0x477d37(0x515)]!=undefined?(mentioned=Ofc['message'][_0x477d37(0x515)][_0x477d37(0x420)]['mentionedJid'][0x0],reply(_0x477d37(0x2b1)+mentioned[_0x477d37(0x545)]('@')[0x0])):reply(prefix+command+'\x20@tag\x20atau\x20reply');break;case _0x477d37(0x433):wamo=q[_0x477d37(0x1be)](new RegExp(_0x477d37(0x367),'gi'),'+'),reply(q?_0x477d37(0x2b1)+sender[_0x477d37(0x545)]('@')[0x0]+_0x477d37(0x1d9)+wamo:_0x477d37(0x2b1)+sender[_0x477d37(0x545)]('@')[0x0]);break;case _0x477d37(0x3ac):case _0x477d37(0x323):if(!isPremium&&!Ofc[_0x477d37(0x17a)][_0x477d37(0x424)])return reply(mess[_0x477d37(0x3e8)][_0x477d37(0x19c)]);if(Ofc[_0x477d37(0x256)]['extendedTextMessage']!=undefined){mentioned=Ofc[_0x477d37(0x256)]['extendedTextMessage'][_0x477d37(0x420)]['mentionedJid'][0x0];const ynkos=_0x477d37(0x3a9)+'VERSION:3.0\x0a'+(_0x477d37(0x1ba)+(q?q:_0x477d37(0x3a6))+'\x0a')+'ORG:KONTAK;\x0a'+(_0x477d37(0x23c)+mentioned[_0x477d37(0x545)]('@')[0x0]+':+'+mentioned['split']('@')[0x0]+'\x0a')+'END:VCARD';Zeeone[_0x477d37(0x4da)](from,{'displayname':'Jeff','vcard':ynkos},MessageType['contact'],{'quoted':Ofc});}else{const ynkos=_0x477d37(0x3a9)+_0x477d37(0x182)+(_0x477d37(0x1ba)+q[_0x477d37(0x545)]('|')[0x1]+'\x0a')+_0x477d37(0x327)+(_0x477d37(0x23c)+q['split']('|')[0x0]+':+'+q['split']('|')[0x0]+'\x0a')+'END:VCARD';Zeeone['sendMessage'](from,{'displayname':_0x477d37(0x2d8),'vcard':ynkos},MessageType[_0x477d37(0x180)],{'quoted':Ofc});}break;case _0x477d37(0x191):if(isLimit(sender,isPremium,isOwner,limitawal,limit))return reply(mess[_0x477d37(0x3cd)]);teks=_0x477d37(0x1bf)+sender[_0x477d37(0x545)]('@')[0x0]+'\x0a*Pesan\x20:\x20'+body[_0x477d37(0x28c)](0x7)+'*',group=await Zeeone[_0x477d37(0x1b5)](from),member=group[_0x477d37(0x407)],jids=[],member['map'](async _0xbac2d4=>{const _0x5749d2=_0x477d37;jids[_0x5749d2(0x4ed)](_0xbac2d4['id'][_0x5749d2(0x1be)](_0x5749d2(0x3db),_0x5749d2(0x3f3)));}),options={'text':teks,'contextInfo':{'mentionedJid':jids},'quoted':Ofc},await Zeeone[_0x477d37(0x4da)](from,options,text),limitAdd(sender,limit);break;case _0x477d37(0x2ec):case _0x477d37(0x22b):case _0x477d37(0x366):if(!Ofc[_0x477d37(0x17a)][_0x477d37(0x424)]&&!isOwner&&!isPremium)return reply(mess[_0x477d37(0x3e8)][_0x477d37(0x19c)]);if(!isQuotedAudio)return reply(_0x477d37(0x4f4));if(!q)return reply(_0x477d37(0x2a0));let addvn=JSON[_0x477d37(0x144)](JSON[_0x477d37(0x2f3)](Ofc)['replace'](_0x477d37(0x4e8),'m'))[_0x477d37(0x256)][_0x477d37(0x515)][_0x477d37(0x420)],delb=await Zeeone[_0x477d37(0x2ba)](addvn);audionye[_0x477d37(0x4ed)](q),fs[_0x477d37(0x434)](_0x477d37(0x35b)+q+_0x477d37(0x458),delb),fs[_0x477d37(0x434)](_0x477d37(0x446),JSON['stringify'](audionye)),reply('Sukses\x20Menambahkan\x20Audio!\x0aCek\x20Audio\x20Dengan\x20Cara\x20Ketik\x20'+prefix+'listvn');break;case _0x477d37(0x34f):case'delvn':case _0x477d37(0x491):if(!Ofc[_0x477d37(0x17a)][_0x477d37(0x424)]&&!isOwner&&!isPremium)return reply(mess[_0x477d37(0x3e8)][_0x477d37(0x19c)]);if(!q)return reply('Nama\x20Audio\x20Yang\x20Mau\x20Di\x20Hapus\x20Apa?');try{fs[_0x477d37(0x1a3)](_0x477d37(0x35b)+q+_0x477d37(0x458));let delaudio=audionye['indexOf'](q);audionye[_0x477d37(0x231)](delaudio,0x1),fs[_0x477d37(0x434)](_0x477d37(0x446),JSON[_0x477d37(0x2f3)](audionye)),reply(_0x477d37(0x236)+q+'!'),await sleep(0x1388);}catch(_0x1ba7ad){console[_0x477d37(0x349)](_0x1ba7ad),reply(_0x477d37(0x1ce)+q+'!');}break;case _0x477d37(0x16a):case'listaudio':Zeeone['updatePresence'](from,Presence['avaible']),teks=_0x477d37(0x1de);for(let awokwkwk of audionye){teks+=_0x477d37(0x143)+awokwkwk+'\x0a';}teks+='\x0a*TOTAL\x20:*\x20'+audionye[_0x477d37(0x234)],reply(''+teks);break;case _0x477d37(0x3bd):case'addfoto':case'addphoto':if(!Ofc[_0x477d37(0x17a)]['fromMe']&&!isOwner&&!isPremium)return reply(mess[_0x477d37(0x3e8)][_0x477d37(0x19c)]);if(!isQuotedImage)return reply(_0x477d37(0x3ff));if(!q)return reply(_0x477d37(0x50a));let addimage=JSON['parse'](JSON[_0x477d37(0x2f3)](Ofc)[_0x477d37(0x1be)](_0x477d37(0x4e8),'m'))[_0x477d37(0x256)][_0x477d37(0x515)]['contextInfo'],dellb=await Zeeone[_0x477d37(0x2ba)](addimage);imagenye[_0x477d37(0x4ed)](q),fs[_0x477d37(0x434)](_0x477d37(0x1b7)+q+_0x477d37(0x335),dellb),fs[_0x477d37(0x434)]('./database/image.json',JSON['stringify'](imagenye)),reply('Sukses\x20Menambahkan\x20Image!\x0aCek\x20Image\x20Dengan\x20Cara\x20Ketik\x20'+prefix+_0x477d37(0x3a0));break;case _0x477d37(0x435):case _0x477d37(0x288):case'delfoto':case _0x477d37(0x43e):if(!Ofc[_0x477d37(0x17a)][_0x477d37(0x424)]&&!isOwner&&!isPremium)return reply(mess[_0x477d37(0x3e8)]['prem']);if(!q)return reply(_0x477d37(0x31e));try{fs[_0x477d37(0x1a3)]('./database/image/'+q+_0x477d37(0x216));let delimage=imagenye[_0x477d37(0x4c9)](q);imagenye['splice'](delimage,0x1),fs[_0x477d37(0x434)](_0x477d37(0x39a),JSON[_0x477d37(0x2f3)](imagenye)),reply(_0x477d37(0x3c6)+q+'!'),await sleep(0x1388);}catch(_0x1ae97d){reply('Gagal\x20Menghapus\x20Image\x20'+q+'!');}break;case _0x477d37(0x3a0):case _0x477d37(0x14a):case _0x477d37(0x2e6):let listimage='*「\x20LIST\x20STICKER\x20」*\x0a\x0a';for(let awokwkwk of imagenye){listimage+='📊\x20'+awokwkwk+'\x0a';}listimage+=_0x477d37(0x2b8)+imagenye[_0x477d37(0x234)],reply(''+listimage);break;case _0x477d37(0x283):case _0x477d37(0x3d7):if(!Ofc['key']['fromMe']&&!isOwner&&!isPremium)return reply(mess[_0x477d37(0x3e8)][_0x477d37(0x19c)]);if(!isQuotedVideo)return reply(_0x477d37(0x3ea));if(!q)return reply(_0x477d37(0x52f));let addvideo=JSON[_0x477d37(0x144)](JSON[_0x477d37(0x2f3)](Ofc)['replace'](_0x477d37(0x4e8),'m'))[_0x477d37(0x256)][_0x477d37(0x515)]['contextInfo'],dellbb=await Zeeone[_0x477d37(0x2ba)](addvideo);videonye[_0x477d37(0x4ed)](q),fs[_0x477d37(0x434)](_0x477d37(0x2c6)+q+_0x477d37(0x379),dellbb),fs[_0x477d37(0x434)](_0x477d37(0x1ed),JSON[_0x477d37(0x2f3)](videonye)),reply(_0x477d37(0x309)+prefix+_0x477d37(0x2b0));break;case _0x477d37(0x34e):case'deletevideo':if(!Ofc[_0x477d37(0x17a)][_0x477d37(0x424)]&&!isOwner&&!isPremium)return reply(mess[_0x477d37(0x3e8)][_0x477d37(0x19c)]);if(!q)return reply(_0x477d37(0x31b));try{fs[_0x477d37(0x1a3)]('./database/video/'+q+_0x477d37(0x216));let delvideo=videonye[_0x477d37(0x4c9)](q);videonye[_0x477d37(0x231)](delvideo,0x1),fs[_0x477d37(0x434)](_0x477d37(0x1ed),JSON[_0x477d37(0x2f3)](videonye)),reply(_0x477d37(0x37e)+q+'!'),await sleep(0x1388);}catch(_0x26a847){reply(_0x477d37(0x47b)+q+'!');}break;case'listvideo':case'listvid':let listvideo=_0x477d37(0x4dc);for(let awokwkwk of videonye){listvideo+=_0x477d37(0x143)+awokwkwk+'\x0a';}listvideo+=_0x477d37(0x2b8)+videonye[_0x477d37(0x234)],reply(''+listvideo);break;case _0x477d37(0x19e):case'addstiker':case _0x477d37(0x329):if(!Ofc[_0x477d37(0x17a)][_0x477d37(0x424)]&&!isOwner&&!isPremium)return reply(mess[_0x477d37(0x3e8)][_0x477d37(0x19c)]);if(!isQuotedSticker)return reply(_0x477d37(0x206));if(!q)return reply(_0x477d37(0x408));let addstik=JSON['parse'](JSON[_0x477d37(0x2f3)](Ofc)['replace'](_0x477d37(0x4e8),'m'))[_0x477d37(0x256)][_0x477d37(0x515)][_0x477d37(0x420)],delbb=await Zeeone[_0x477d37(0x2ba)](addstik);setiker[_0x477d37(0x4ed)](q),fs[_0x477d37(0x434)](_0x477d37(0x4d1)+q+'.webp',delbb),fs['writeFileSync'](_0x477d37(0x286),JSON[_0x477d37(0x2f3)](setiker)),reply(_0x477d37(0x518)+prefix+_0x477d37(0x356));break;case _0x477d37(0x14c):case _0x477d37(0x4a5):case _0x477d37(0x270):case _0x477d37(0x152):if(!Ofc[_0x477d37(0x17a)][_0x477d37(0x424)]&&!isOwner&&!isPremium)return reply(mess[_0x477d37(0x3e8)][_0x477d37(0x19c)]);if(!q)return reply(_0x477d37(0x31e));try{fs[_0x477d37(0x1a3)](_0x477d37(0x4d1)+q+_0x477d37(0x216));let delstik=setiker['indexOf'](q);setiker[_0x477d37(0x231)](delstik,0x1),fs[_0x477d37(0x434)]('./database/stick.json',JSON['stringify'](setiker)),reply(_0x477d37(0x1d8)+q+'!'),await sleep(0x1388);}catch(_0x428c4f){reply(_0x477d37(0x456)+q+'!');}break;case _0x477d37(0x553):case _0x477d37(0x4ad):case'liststiker':case _0x477d37(0x356):liststik=_0x477d37(0x53b);for(let awokwkwk of setiker){liststik+=_0x477d37(0x143)+awokwkwk+'\x0a';}liststik+='\x0a*TOTAL\x20:*\x20'+setiker[_0x477d37(0x234)],reply(''+liststik);break;case'addrespon':case'addres':if(!isPremium&&!isOwner&&!Ofc[_0x477d37(0x17a)]['fromMe'])return reply(mess[_0x477d37(0x3e8)]['prem']);if(args['length']<0x1)return reply(_0x477d37(0x221)+command+_0x477d37(0x1f1));var soal=q['split']('|')[0x0],jawaban=q[_0x477d37(0x545)]('|')[0x1];if(!jawaban)return reply(_0x477d37(0x34a));if(checkCommands(soal[_0x477d37(0x343)](),cmdDB))return reply(_0x477d37(0x437));addCommands(soal[_0x477d37(0x343)](),jawaban,sender,cmdDB),reply('Sukses!');break;case _0x477d37(0x1f7):case _0x477d37(0x2d0):case _0x477d37(0x358):if(!isPremium&&!Ofc[_0x477d37(0x17a)][_0x477d37(0x424)])return reply(mess[_0x477d37(0x3e8)][_0x477d37(0x19c)]);if(args[_0x477d37(0x234)]<0x1)return reply(_0x477d37(0x221)+command+_0x477d37(0x496));if(isCreated(q[_0x477d37(0x343)](),sender,cmdDB)&&!isOwner)return reply('Anda\x20bukan\x20pembuat\x20command!');deleteCommands(q['toLowerCase'](),cmdDB),reply(_0x477d37(0x253));break;case _0x477d37(0x53f):case _0x477d37(0x245):if(!isOwner&&!Ofc[_0x477d37(0x17a)][_0x477d37(0x424)])return;var txtt='LIST\x20REPONSE\x0aJumlah\x20:\x20*'+cmdDB['length']+'*\x0a\x0a';for(let i of cmdDB){txtt+='*Respon\x20:*\x20'+i[_0x477d37(0x557)]+'\x0a*Jawaban\x20:*\x20'+i[_0x477d37(0x522)]+_0x477d37(0x4f9)+i['created']['split']('@')[0x0]+'\x0a\x0a';}Zeeone[_0x477d37(0x4da)](''+ownerNumber,txtt,text,{'quoted':Ofc,'contextInfo':{'mentionedJid':parseMention(txtt)}});break;case _0x477d37(0x3fc):case _0x477d37(0x390):{if(!isGroup)return reply(mess[_0x477d37(0x3e8)]['group']);infom=await Zeeone['messageInfo'](from,Ofc[_0x477d37(0x256)]['extendedTextMessage'][_0x477d37(0x420)][_0x477d37(0x4ee)]),hemm=infom[_0x477d37(0x1d2)],hemms=infom[_0x477d37(0x452)],readon=hemms['map'](_0x188e5a=>_0x188e5a['jid']),readdin=hemm[_0x477d37(0x32a)](_0x21878a=>_0x21878a[_0x477d37(0x29c)]),stamp=hemm[_0x477d37(0x32a)](_0x5ee98e=>_0x5ee98e['t']);function toTime(_0x3693fa,_0x48cd67){const _0x2e13b6=_0x477d37;_0x48cd67=typeof _0x48cd67==_0x2e13b6(0x1d3)?![]:!![];let _0x5ca7b3=new Date(_0x3693fa);_0x48cd67&&(_0x5ca7b3=new Date(_0x3693fa*0x3e8));var _0x32ae90=_0x5ca7b3[_0x2e13b6(0x179)](),_0x2f3525=_0x5ca7b3[_0x2e13b6(0x22a)](),_0x29b2e3=_0x5ca7b3[_0x2e13b6(0x230)](),_0x59a497=_0x32ae90+':'+_0x2f3525+':'+_0x29b2e3;return _0x59a497;}function toBulan(_0x9089b1,_0x5c4148){const _0x3d299c=_0x477d37;_0x5c4148=typeof _0x5c4148=='undefined'?![]:!![];let _0x4afe04=new Date(_0x9089b1);_0x5c4148&&(_0x4afe04=new Date(_0x9089b1*0x3e8));var _0x57c4e5=[_0x3d299c(0x441),_0x3d299c(0x440),'Maret',_0x3d299c(0x282),'Mei',_0x3d299c(0x42b),_0x3d299c(0x281),_0x3d299c(0x20a),'September',_0x3d299c(0x3be),_0x3d299c(0x47c),_0x3d299c(0x255)],_0xb4d298=['Minggu',_0x3d299c(0x1e2),_0x3d299c(0x189),_0x3d299c(0x3c0),_0x3d299c(0x47f),_0x3d299c(0x445),_0x3d299c(0x4ba)],_0x11fb37=_0x4afe04[_0x3d299c(0x1ab)]();bulanee=_0x4afe04[_0x3d299c(0x448)]();var _0x1af338=_0x4afe04['getDay'](),_0x1af338=_0xb4d298[_0x1af338],_0x3f72f4=_0x4afe04[_0x3d299c(0x4c8)](),_0x8619f=_0x3f72f4<0x3e8?_0x3f72f4+0x76c:_0x3f72f4,_0x32da89=_0x1af338+',\x20'+_0x11fb37+'\x20-\x20'+_0x57c4e5[bulanee]+_0x3d299c(0x4a1)+_0x8619f;return _0x32da89;}teksx='「\x20*TELAH\x20DIBACA*\x20」\x0a\x0a';for(let i of hemm){teksx+=_0x477d37(0x172)+i['jid'][_0x477d37(0x545)]('@')[0x0]+'\x0a⏰\x20Waktu\x20:\x20'+toTime(i['t'],!![])+_0x477d37(0x235)+toBulan(i['t'],!![])+'\x0a\x0a';}teksx1='「\x20*BELUM\x20DIBACA*\x20」\x0a\x0a';for(let i of hemms){teksx1+='📛\x20Nama\x20:\x20@'+i[_0x477d37(0x29c)][_0x477d37(0x545)]('@')[0x0]+'\x0a',teksx1+='⏰\x20Waktu\x20:\x20'+toTime(i['t'],!![])+_0x477d37(0x235)+toBulan(i['t'],!![])+'\x0a\x0a';}Zeeone[_0x477d37(0x4da)](from,teksx,text,{'sendEphemeral':![],'quoted':Ofc,'thumbnail':thumbnail,'contextInfo':{'forwardingScore':0x3e7,'isForwarded':![],'mentionedJid':readdin}}),Zeeone[_0x477d37(0x4da)](from,teksx1,text,{'sendEphemeral':![],'quoted':Ofc,'thumbnail':thumbnail,'contextInfo':{'forwardingScore':0x3e7,'isForwarded':![],'mentionedJid':readon}});}break;case _0x477d37(0x41f):if(!isGroup)return reply(mess[_0x477d37(0x3e8)][_0x477d37(0x372)]);if(isLimit(sender,isPremium,isOwner,limitawal,limit))return reply(mess[_0x477d37(0x3cd)]);jds=[];const A11=groupMembers,B11=groupMembers,C11=A11[Math[_0x477d37(0x4d7)](Math[_0x477d37(0x3cc)]()*A11[_0x477d37(0x234)])],C22=B11[Math[_0x477d37(0x4d7)](Math[_0x477d37(0x3cc)]()*B11[_0x477d37(0x234)])];D11=_0x477d37(0x3a2)+C11[_0x477d37(0x29c)][_0x477d37(0x545)]('@')[0x0]+_0x477d37(0x3f9)+C22[_0x477d37(0x29c)][_0x477d37(0x545)]('@')[0x0]+_0x477d37(0x53d),jds['push'](C11['jid']),jds[_0x477d37(0x4ed)](C22[_0x477d37(0x29c)]),mentions(D11,jds,!![]),await limitAdd(sender,limit);break;case'naruto':if(!q)return reply(_0x477d37(0x1dc));reply(mess[_0x477d37(0x3ef)]),pNaruto(''+q)[_0x477d37(0x4c6)](_0x5bed34=>{const _0x209361=_0x477d37;sendMediaURL(from,_0x5bed34[_0x209361(0x24f)],q);});break;case _0x477d37(0x415):if(!q)return reply(_0x477d37(0x1dc));reply(mess[_0x477d37(0x3ef)]),pShadow(''+q)[_0x477d37(0x4c6)](_0x310591=>{const _0x4f46b6=_0x477d37;sendMediaURL(from,_0x310591[_0x4f46b6(0x24f)]);});break;case'romantic':if(!q)return reply(_0x477d37(0x1dc));reply(mess[_0x477d37(0x3ef)]),pRomantic(''+q)['then'](_0x9ee89c=>{sendMediaURL(from,_0x9ee89c['url']);});break;case _0x477d37(0x3a5):if(!q)return reply(_0x477d37(0x1dc));reply(mess[_0x477d37(0x3ef)]),pSmoke(''+q)['then'](_0x44276c=>{const _0x214834=_0x477d37;sendMediaURL(from,_0x44276c[_0x214834(0x24f)]);});break;case _0x477d37(0x4de):if(!q)return reply(_0x477d37(0x1dc));reply(mess[_0x477d37(0x3ef)]),pBurnPapper(''+q)[_0x477d37(0x4c6)](_0x1007b7=>{sendMediaURL(from,_0x1007b7['url']);});break;case'lovemsg':if(!q)return reply(_0x477d37(0x1dc));reply(mess[_0x477d37(0x3ef)]),pLoveMsg(''+q)['then'](_0x1052db=>{const _0x2e2a74=_0x477d37;sendMediaURL(from,_0x1052db[_0x2e2a74(0x24f)]);});break;case'grass':if(!q)return reply(_0x477d37(0x1dc));reply(mess[_0x477d37(0x3ef)]),pMsgGrass(''+q)[_0x477d37(0x4c6)](_0x28f63f=>{sendMediaURL(from,_0x28f63f['url']);});break;case _0x477d37(0x155):if(!q)return reply(_0x477d37(0x39f));reply(mess['wait']),pDoubleHeart(''+q)[_0x477d37(0x4c6)](_0x26532a=>{const _0x51242d=_0x477d37;sendMediaURL(from,_0x26532a[_0x51242d(0x24f)]);});break;case _0x477d37(0x2d5):if(!q)return reply(_0x477d37(0x1dc));reply(mess[_0x477d37(0x3ef)]),pCoffeCup(''+q)[_0x477d37(0x4c6)](_0x1d6110=>{sendMediaURL(from,_0x1d6110['url']);});break;case'lovetext':if(!q)return reply(_0x477d37(0x1dc));reply(mess['wait']),pLoveText(''+q)[_0x477d37(0x4c6)](_0x48a4a8=>{const _0x186cd4=_0x477d37;sendMediaURL(from,_0x48a4a8[_0x186cd4(0x24f)]);});break;}function _0xf206(_0x5a4e07,_0x277dc2){const _0x52fa01=_0x52fa();return _0xf206=function(_0xf20664,_0x322f52){_0xf20664=_0xf20664-0x137;let _0x4b2d5c=_0x52fa01[_0xf20664];return _0x4b2d5c;},_0xf206(_0x5a4e07,_0x277dc2);}function _0x52fa(){const _0x3e871d=['Kaki\x20katak\x20merupakan\x20hidangan\x20istimewa\x20di\x20eropa.\x20Tahukah\x20Anda:\x20sekitar\x2080%\x20impor\x20katak\x20Eropa\x20berasal\x20dari\x20Indonesia.','XMLHttpRequest','Reply\x20Photonya','Melihat\x20melalui\x20lubang\x20kecil\x20akan\x20segera\x20meningkatkan\x20penglihatan\x20Anda\x20sementara.','block','videoMessage','\x20Menantang\x20Bermain\x20Tictactoe\x20','Limitmu\x20Tidak\x20Cukup.\x0aDi\x20Perlukan\x201000\x20Limit\x20Untuk\x20Menjadi\x20User\x20Premium\x20Trial\x203\x20Hari','Thank\x20for\x20verification\x20💋\x0a','slap','participants','Nama\x20Sticker\x20Nya\x20Apa?','register\x20on','Menurut\x20penelitian\x20baru,\x20usia\x20harapan\x20hidup\x20anak\x20band\x20rata-rata\x20lebih\x20tinggi\x20dibandingkan\x20musisi\x20yang\x20memilih\x20solo\x20karir.\x20(detikHealth)','*「\x20PREMIUM\x20ADDED\x20」*\x0a\x0a📛\x20*ID*:\x20','\x0a🔖\x20Speed\x20:\x20','\x22Jengkol\x20is\x20very\x20nice\x22\x20komentar\x20Pierre\x20Bouvier\x20vokalis\x20Simple\x20Plan.','en-US,en;q=0.9','extend','getnomor','\x0a📍\x20*Cmd*\x20:\x20','downloadAndSaveMediaMessage','*──\x20「\x20TOP\x20BALANCE\x20」\x20──*\x0a\x0a','\x20-filter:a\x20\x22atempo=0.7,asetrate=44100\x22\x20','shadow','contacts','\x0a🔖\x20Prefix\x20:\x20','tolink','🐣\x20Durasi:\x20','Wanita\x20yang\x20bahagia\x20dalam\x20sebuah\x20pernikahan\x20akan\x20mengalami\x20berat\x20badan\x20naik\x20setengah\x20pound\x20(0,22\x20kg)\x20setiap\x206\x20bulan.\x20[DailyMail]','nuliskiri\x0a','Reply\x20pesan\x20dari\x20bot!!','\x0aPotong\x20sebahu,\x0a\x0abiar\x20ga\x20sendu.\x0a\x0akamu\x20tahu?\x0a\x0aAku\x20rindu.','🐣\x20Upload:\x20','jadian','contextInfo','Terjadi\x20kesalahan\x20atau\x20mungkin\x20user\x20private','memesticker','*\x0a\x09\x09\x09\x09\x09\x09\x09\x09\x09\x09\x0a','fromMe','active','./database/sewa.json','s\x0a🔖\x20Status\x20:\x20','Menurut\x20penelitian,\x20PR\x20terlalu\x20banyak\x20sebenarnya\x20dapat\x20menyebabkan\x20siswa\x20menjadi\x20stres,\x20depresi\x20&\x20mendapat\x20nilai\x20lebih\x20rendah.','Kirim\x20gambar/video\x20dengan\x20caption\x20','toplimit','Juni','\x0a➸\x20*Expired\x20:*\x20','addbadword','updateProfilePicture','\x0a🆔\x20Api\x20:\x20wa.me/','\x0aNembak\x20itik,\x0a\x0alangsung\x20kena.\x0a\x0akamu\x20cantik,\x0a\x0ahey\x20nona!','instafoto','Done','wame','writeFileSync','delimage','attp','Command\x20tersebut\x20sudah\x20ada!','tiktoknowm','./database/ATO.json','updatePresence','blockUser','type','size','delphoto','kebiasaan\x20terburuk\x20lo\x20pas\x20di\x20sekolah\x20apa?','Februari','Januari','results','368175zxrsjp','anti_call','Jum\x20at','./database/audio.json','start','getMonth','kirim/reply\x20gambar/video','banlist','\x0aBeli\x20ketan,\x0a\x0abeli\x20kain\x20songket.\x0a\x0abiar\x20udah\x20mantan,\x0a\x0akita\x20tetep\x20lengket.','antibadword\x20grup\x20aktif,\x20kirim\x20','poke','Penggunaan\x20','low','premlist','record\x20voice\x20baca\x20surah\x20al-kautsar','deliveries','antilink','webpmux\x20-set\x20exif\x20./sticker/stickwm_','Self\x20Mode','Gagal\x20Menghapus\x20sticker\x20','🆔\x20*ID\x20:*\x20','.mp3','user','Public\x20Mode','-size','Selama\x20abad\x20ke-13,\x20kata\x20\x22nice\x22\x20sebenarnya\x20berarti\x20“stupid”,\x20\x22senseless\x22\x20dan\x20“foolish\x22.','Unlimited\x20Premium','Penggunaan\x20:\x20','groupSettingChange','Tunggu\x20Sebentar\x20Otw\x20Masuk\x20Group','「\x20*MEMULAI\x20GAME\x20TICTACTOE*\x20」','Sewa\x20bot\x20om?','\x0a*▢\x20Ditonton\x20:*\x20','inviteReset','faktaunik','stickmeme','ceklimit','nuliskanan','Loe\x20Dah\x20Prem\x20Cuy','Memeluk\x20orang\x20yg\x20disayangi\x20dpt\x20membantu\x20menurunkan\x20tekanan\x20darah,\x20mengurangi\x20stres\x20dan','https://api.waifu.pics/sfw/','*🆔\x20Nomor\x20:\x20','Ketika\x20kita\x20sedang\x20jatuh\x20cinta,\x20otak\x20akan\x20memproduksi\x20dopamin\x20ekstra,\x20bahan\x20kimia\x20yang\x20membuat\x20seseorang\x20menjadi\x20gembira\x20berlebihan.','*Link*\x20:\x20','\x0a🔖\x20Ram\x20Usage\x20:\x20','imgtourl','headsot','botstat','tomusic','kecemasan,\x20bahkn\x20dpt\x20meningkatkan\x20memori.\x20[Dailymail]','succes','200oTRkzo','allmenu','Hai\x20Owner,\x20@','Eror,\x20user\x20private\x20acc','Cari\x20nama\x20lain','Gagal\x20Menghapus\x20Video\x20','Nopember','setppgrup','\x20d,\x20','Kamis','setbotpp\x20atau\x20tag\x20gambar\x20yang\x20sudah\x20dikirim','./media/nulis/images/folio/sebelumkanan.jpg','serializeM','\x0a│⏰\x20*Time\x20:*\x20','ketik\x20pake\x20bahasa\x20daerah\x2024\x20jam','getpic','tomp4','\x0aMakan\x20duren\x20sambil\x20ngelamun,\x0a\x0aHati-hati\x20ketelen\x20ntar\x20bijinya','instareels','Tidur\x20Siang\x20(Power\x20Nap)\x20trbukti\x20menambah\x20tinggi\x20badan,\x20dikrnkan\x20saat\x20kita\x20tidur\x20siang\x20hormon\x20pertumbuhan\x20(Growth\x20Hormone)\x20lbh\x20aktif\x20bekerja.','ytvideo','now','Makasih\x20pp\x20barunya\x20🌝','Siapa\x20nama\x20mantan\x20pacar\x20teman\x20mu\x20yang\x20pernah\x20kamu\x20sukai\x20diam\x20diam?','clearbadword','gif','\x0a⏰\x20*Expired*:\x20','deletevn','getPremiumExpired','\x20on\x20/\x20off','invite','asupan','\x20list\x20respon','del','│+\x20\x20@','\x0aKe\x20salon\x20creambath,\x0a\x0abiar\x20aliran\x20darah\x20lancar.\x0a\x0abosen\x20ah\x20jadi\x20sahabat,\x0a\x0amaunya\x20jadi\x20pacar!','togif','reply\x20stiker','Abibliophobia\x20adalah\x20fobia\x20atau\x20ketakutan\x20terhadap\x20kehabisan\x20bahan\x20bacaan.','code','mp4','Unlimited\x20Prem\x20(My)','Tiktok\x20Wm.mp4','\x20-\x20','「\x20*PUBLIC-MODE*\x20」','username','Invalid\x20link','delstick','Jamur\x20merang\x20Laetiporus\x20dikenal\x20sebagai\x20julukan\x20\x22ayam\x20hutan\x22\x20karena\x20konon\x20rasanya\x20mirip\x20seperti\x20daging\x20ayam\x20goreng.','\x0aitem1.X-ABLabel:Ponsel\x0aEND:VCARD','⛎\x20*Ext*\x20:\x20MP3','magenta','instagramstory','menu','getProfilePicture','liststicker','Menurut\x20penelitian,\x20pria\x20cenderung\x20menurunkan\x20volume\x20suaranya\x20ketika\x20ia\x20berbicara\x20dg\x20seseorang\x20yg\x20ia\x20cintai,\x20sementara\x20perempuan\x20sebaliknya.','*\x0a*📛\x20User\x20:\x20@','mime','title','toptt','setnamabot','\x0a*Link*\x20:\x20','smug','existsSync','dare','listbadword\x20untuk\x20melihat\x20list\x20badword','https://lolhuman.herokuapp.com/api/checkapikey?apikey=','Sabtu','slot','\x0aPotong\x20kuku,\x0a\x0apendek-pendek.\x0a\x0ahatiku\x20beku,\x0a\x0asi\x20abang\x20mendadak\x20ngondek.','\x0aPanasin\x20mentega,\x0a\x0akarena\x20mulai\x20beku.\x0a\x0akamu\x20mau\x20ga,\x0a\x0ajadi\x20imamku?','\x0aDi\x20\x20sana\x20gunung,\x20di\x20sini\x20gunung\x0a\x0aCiptaan\x20Tuhan\x20deh','Pulau\x20Dewata\x20Bali\x20merupakan\x201\x20dari\x2010\x20pulau\x20paling\x20romantis\x20di\x20dunia.\x20[majalah\x20Travel+Leisure]','Harus\x20berupa\x20angka','https://api.memegen.link/images/custom/-/','Succes','glomp','scale=\x27min(320,iw)\x27:min\x27(320,ih)\x27:force_original_aspect_ratio=decrease,fps=15,\x20pad=320:320:-1:-1:color=white@0.0,\x20split\x20[a][b];\x20[a]\x20palettegen=reserve_transparent=on:transparency_color=ffffff\x20[p];\x20[b][p]\x20paletteuse','https://api.waifu.pics/sfw/neko','then','\x0a📊\x20*Expire\x20:*\x20','getYear','indexOf','days','Sudah\x20Di\x20Aktifkan\x20Sebelumnya!','wiki','pake\x20foto\x20sule\x20sampe\x203\x20hari','result','*https://chat.whatsapp.com/','phone','./database/stick/','\x0aBuah\x20semangka\x0a\x0abuah\x20duren\x0a\x0anggak\x20nyangka\x0a\x0ague\x20keren\x0a\x20','\x0a*▢\x20LINK\x20:*\x20','\x0aMelon\x20manis\x20di\x20air\x20es\x0a\x0ake\x20mana\x20aja\x20lo\x20gak\x20pernah\x20sms','mentionedJid','\x0aAda\x20kepompong\x20ada\x20kupu\x0a\x0abales\x20donk\x20sms\x20dari\x20aku','floor','*\x0a*💹\x20Sisa\x20Limit\x20:\x20','dance','sendMessage','mediafire','*「\x20LIST\x20VIDEO\x20」*\x0a\x0a','\x0a\x0aExample\x20:\x20\x0a','burnpaper','hidetag','attp*\x20teks','./sticker/stickwm_','RESPONSE','./database/grupbadword.json','Fobia\x20matematika\x20(mathematics\x20anxiety)\x20memicu\x20respon\x20yang\x20sama\x20di\x20otak\x20sbg\x20rasa\x20sakit\x20fisik.\x20Gejalanya\x20yaitu\x20melihat\x20angka\x20saja\x20sudah\x20nyeri.','*「\x20PLAY\x20STORE\x20」*\x0a\x0a*Hasil\x20Pencarian\x20Dari\x20:\x20','image','Eror','quotedM','&data=%7B%22options%22%3A%7B%22isPrefetch%22%3Afalse%2C%22query%22%3A%22','Wanita\x20yang\x20sedang\x20stres\x20selama\x20kehamilannya\x20cenderung\x20melahirkan\x20anak-anak\x20yang\x20pemarah.\x20[Institute\x20of\x20Psychiatry,\x20King\x20College\x20London]','Kirim\x20atau\x20tag\x20gambar\x20dengan\x20caption\x20','no-cache','push','stanzaId','Universitas\x20di\x20Jepang\x20selalu\x20melakukan\x20upacara\x20peringatan\x20bagi\x20hewan\x20(contoh:\x20tikus)\x20yang\x20mati\x20dalam\x20pengujian\x20laboratorium.\x20[web.archive\x20.org]','\x20nama\x0a\x0aContoh\x20:\x20','videotourl','PROCFILE','⎙\x20SEWABOT','Reply\x20Audionya','text','🍇\x20:\x20??\x20:\x20🍇','\x0a🔖\x20Baterai\x20:\x20','libwebp','\x0a*Created\x20:*\x20@','drop\x20kutipan\x20lagu/quote,\x20terus\x20tag\x20member\x20yang\x20cocok\x20buat\x20kutipan\x20itu','pilih\x20on\x20/\x20off','Jika\x20Anda\x20mengetik\x20\x22do\x20the\x20harlem\x20shake\x22\x20di\x20search\x20bar\x20YouTube,\x20layar\x20akan\x20melakukan\x20Harlem\x20Shake!.\x20[Google\x20Chrome]','\x20Minute\x20(s),\x20','\x0a│💌\x20*Bio\x20:*\x20','60.\x20Gazzarella\x20adalah\x20keju\x20mozzarella\x20yang\x20terbuat\x20dari\x20susu\x20kucing.\x2061.\x20Rata-rata\x20orang\x20melihat\x20/\x20mengecek\x20ponselnya\x20sekitar\x20150\x20kali\x20sehari.\x20(Laporan\x20Nokia\x20pada\x20MindTrek\x202010)','🍊\x20:\x20🍒\x20:\x20🍐','+140+153','document','conversation','daftar','cors','hug','Nomor\x20','add','timestamp','Nama\x20Photonya\x20Apa?','\x0a🔖\x20Versi\x20OS\x20:\x20','base64','tes','bully','Gagal,\x20Karena\x20Bot\x20Di\x20Block\x20Oleh\x20Target','remove','Pilih\x20on\x20atau\x20off','Tidak\x20ada\x20sesi\x20Voting','Masukkan\x20query','success','extendedTextMessage','Kirim\x20pesan\x20ke\x20mantan\x20kamu\x20dan\x20bilang\x20\x22aku\x20masih\x20suka\x20sama\x20kamu','Judulnya?','Sukses\x20Menambahkan\x20Sticker!!\x0aCek\x20Sticker\x20Dengan\x20Cara\x20Ketik\x20','nuliskiri','Bot\x20Whatsapp™©\x20|\x20Allright\x20Reserved.','Tiap\x20satu\x20kali\x20jari\x20kita\x20mengklik\x20mouse\x20komputer,\x20ada\x201,42\x20kalori\x20yang\x20terbakar\x20dalam\x20tubuh.\x20(Penelitian,\x20Convert\x20Anything\x20to\x20Calories).','Error!','sgif','memestick','joingc','NEXT\x20➡️','reply\x20pesan!','jawaban','\x20m,\x20','🍒\x20:\x20🍐\x20:\x20🍊','igvideo','-annotate','clearall','\x0a⬣\x20Baned\x20:\x20','🔗\x20*Link*\x20:\x20','\x0aDua\x20tiga\x20kacang\x20tanah\x0a\x0aenggak\x20ada\x20pacar\x20yang\x20datang\x20ke\x20rumah','ganti\x20nama\x20menjadi\x20\x22gue\x20anak\x20lucinta\x20luna\x22\x20selama\x205\x20jam','\x0aitem1.TEL;waid=','\x20Alphabot','「\x20*YOUTUBE\x20SEARCH*\x20」','Nama\x20Videonya\x20Apa?','listpremium','\x0aDapet\x20kado\x20isinya\x20tomat\x0a\x0aBodo\x20amat!!','setdurasi','infoall','getprofile','\x0a*Ext*\x20:\x20MP3\x0a*Filesize*\x20:\x20','\x0aTiduran\x20di\x20tandu,\x0a\x0aberjam-jam.\x0a\x0ahati\x20merindu,\x0a\x0amata\x20sulit\x20memejam.','*Example*\x0a','hal\x20membanggakan\x20apa\x20yang\x20kamu\x20dapatkan\x20di\x20tahun\x20ini','44XQkvrR','\x20😂','*「\x20LIST\x20STICKER\x20」*\x0a\x0a','Kirim\x20perintah\x20*','\x0a\x0aMogaa\x20Langgeng\x20😘','\x0aBeli\x20ikan\x20di\x20pasar\x20malam\x0a\x0adasar\x20bego\x20ni\x20kawan','listrespon','https://www.pinterest.com/','balance','MODE\x20AUTO\x20RESPON','siapa\x20orang\x20yang\x20paling\x20berpengaruh\x20kepada\x20kehidupanmu','Nih\x20Kak\x20Contact\x20Owner\x20Ku\x20✨','split','\x0aJangan\x20takut\x0a\x0ajangan\x20khawatir\x0a\x0aitu\x20kentut\x0a\x0abukan\x20petir','Biarpun\x20Buzz\x20Aldrin\x20adalah\x20orang\x20kedua\x20yang\x20menginjak\x20di\x20bulan\x20tetapi\x20ia\x20adalah\x20orang\x20pertama\x20yang\x20membuang\x20kotoran\x20di\x20ruang\x20angkasa.','linkgc','memegenerator','🔔\x20:\x20🍒\x20:\x20🍐','Succes\x20mengaktifkan\x20Fitur\x20Anti-Troli','*Result\x20:\x20','Nama\x20\x22Gorila\x22\x20berasal\x20dari\x20kata\x20Yunani\x20\x22Gorillai\x22\x20yang\x20berarti\x20\x22perempuan\x20berbulu\x22.','premium','\x0a🔖\x20Group\x20Chat\x20:\x20','giftlimit','Tag\x20gambar\x20yang\x20sudah\x20dikirim\x20dengan\x20caption\x20.stiker','listblock','liststik','Succes\x20mengaktifkan\x20fitur\x20welcome\x20dan\x20leave','match','cekpremium','commands','Tolong\x20masukan\x20query!','MB\x0a🔖\x20Mcc\x20:\x20','toaudio','Menurut\x20sebuah\x20studi,\x20minum\x20teh\x20hijau\x20setelah\x20makan\x20ikan\x20membantu\x20menghalangi\x20zat\x20Mercury\x20yang\x20terkandung\x20dalam\x20ikan\x20memasuki\x20aliran\x20darah.','getSewaPosition','sewabot','values','contactsArrayMessage','antitroli','❎\x20Gagal,\x20pada\x20saat\x20mengkonversi\x20sticker\x20ke\x20gambar\x20❎','Reply\x20stiker','loli','avaible','truth','\x20di\x20aktifkan','Sukses\x20mengirim\x20Broadcast','round','6766SLtPnC','register','🍒\x20:\x20🍒\x20:\x20🍒','foliokiri*\x20teks','owner','admin','ngetik','seconds','📊\x20','parse','\x0aDulu\x20delman,\x20sekarang\x20gokar\x0a\x0adulu\x20teman,\x20sekarang\x20pacar','register\x20off','messageSend','\x20-filter_complex\x20\x22vibrato=f=16\x22\x20','960x1280','listphoto','./database/banned.json','delstik','Negara\x20Indonesia\x20berada\x20di\x20posisi\x20ke-4\x20sebagai\x20Negara\x20Terindah\x20di\x20Dunia\x20versi\x20situs\x20First\x20Choice.','\x0a\x0a*📊\x20Level\x20:\x20','highfive','toString','\x0a⬣\x20Role\x20:\x20','delstiker','auto','🎧\x20*PLAY\x20MUSIC*\x0a\x0a*Title*\x20:\x20','doubleheart','query','ttdownloader','Siapa\x20yang\x20paling\x20mendekati\x20tipe\x20pasangan\x20idealmu\x20di\x20sini','Hanya\x20bisa\x20dengan\x201\x20orang','tictactoe','delsesi\x20ttt*,\x20untuk\x20menghapus\x20sesi','requests','\x20add/del\x2062887435047326\x2010s','\x20<======\x0a','\x0a🔖\x20Personal\x20Chat\x20:\x20','cekprem','./database/premium.json','\x0a⬣\x20Xp\x20:\x20','playstore','sewabot\x20untuk\x20info\x20lebih\x20lanjut','-pointsize','\x0aBeli\x20bandeng\x0a\x0adi\x20Malaysia\x0a\x0ague\x20ganteng\x0a\x0akayak\x20Pasha','47315aPAVGx','groupAdd','_Untuk\x20durasi\x20lebih\x20dari\x20batas\x20disajikan\x20dalam\x20bentuk\x20link_','listvn','\x2050','\x0aCiuman\x20di\x20pipi\x0a\x0aciuman\x20di\x20dahi\x0a\x0aApa\x20yang\x20dicium\x20sesudah\x20lah\x20cinta?','instavid','vname','\x0a\x0a──❲\x20👑\x20*YOU\x20WIN*\x20👑\x20❳──\x0aHADIAH\x20:\x20$','hal\x20yang\x20bikin\x20seneng\x20pas\x20lu\x20lagi\x20sedih\x20apa','topbalance','📛\x20Nama\x20:\x20@','\x0a➸\x20*Today\x20:*\x20','getQuotedObj','setnamagrup','\x20telah\x20dibanned!','MODE\x20AUTO\x20REGISTER','grup','getHours','key','\x0a*▢\x20Duration\x20:*\x20','nuliskiri*\x20teks','Klik\x20Untuk\x20Mengecek\x20Waktu\x20Expired','myinfo','\x0aGa\x20punya\x20pendirian,\x0a\x0abikin\x20jemu.\x0a\x0aga\x20mau\x20sendirian,\x0a\x0amaunya\x20bobo\x20sama\x20kamu.','contact','Rata-rata\x20orang\x20akan\x20merasa\x20100\x20persen\x20sehat\x20/\x20fit\x20hanya\x2061\x20hari\x20dalam\x20setahun.\x20(Penelitian\x20di\x20Inggris)','VERSION:3.0\x0a','🍐\x20:\x20🍐\x20:\x20🍐','Coklat\x20mengandung\x20Theobromine,\x20molekul\x20organik\x20yang\x20dapat\x20membantu\x20menguatkan\x20enamel\x20gigi.\x20(Penelitian\x20dari\x20Tulane\x20University).','\x0a🎯\x20*Link*\x20:\x20','browserDescription','video/mp4','Free\x20User','Selasa','Eror,\x20user\x20baru\x20saja\x20keluar','\x0a🌝\x20*Link\x20Dev*\x20:\x20','tobc','🍋\x20:\x20🍋\x20:\x20\x20🍌','self','igfoto','foliokiri','notif','\x0aNangis-nangis,\x0a\x0amobil\x20kena\x20srempet.\x0a\x0aneng\x20manis,\x0a\x0amau\x20dong\x20dipepet.','Total\x20hit\x20:\x20','takestick','*\x0a*💹\x20Balance\x20:\x20$','pat','Multi\x20prefix','listbadword','Jangan\x20menggunakan\x20-','mystat','(bgi\x20yg\x20muslim)\x20pernah\x20ga\x20solat\x20seharian?','prem','lastIndexOf','addstik','\x20buka\x20/\x20tutup','smeme','\x20Yang\x20Mau\x20Di\x20Cari\x20Apa?\x20','Vote\x20','unlinkSync','medias','pap\x20ke\x20salah\x20satu\x20anggota\x20grup','DONASI','Sukses\x20clear\x20badword\x20','setgrupname','chat\x20ke\x20kontak\x20wa\x20urutan\x20sesuai\x20%batre\x20kamu,\x20terus\x20bilang\x20ke\x20dia\x20\x22i\x20lucky\x20to\x20hv\x20you','tiktokaudio','getDate','views','./sticker/','getpp','igphoto','Di\x20Jepang\x20kuno,\x20prajurit\x20diolesi\x20minyak\x20kodok\x20pada\x20tubuh\x20mereka\x20dengan\x20keyakinan\x20bahwa\x20hal\x20itu\x20akan\x20membuat\x20tubuh\x20mereka\x20antirobek.','\x20Alphabot\x20Support','emoji','117432EFwqAx','json','groupMetadata','autorespon\x20off','./database/image/','./database/user.json','trim','FN:','20646WpApXR','includes','\x0aBread\x20is\x20roti\x0a\x0ashadow\x20is\x20bayang\x0a\x0abefore\x20you\x20mati\x0a\x0abetter\x20you\x20sembahyang','replace','Notif\x20Dari\x20@','\x0aJangan\x20tanya,\x0a\x0akapan\x20lulus\x20kuliah.\x0a\x0aga\x20dapet\x20anaknya,\x0a\x0amamanya\x20boleh\x20lah','🔔\x20:\x20🍐\x20:\x20\x20🍇','resetlimit','Kirim\x20gambar\x20dengan\x20caption\x20','\x0a\x0a「\x20*PHONE\x20STATISTIC*\x20」\x0a\x20\x0a🔖\x20Whatsapp\x20Ver.\x20:\x20','\x20/\x20','totalmem','-vcodec','blocklist','giftlimit\x20@user\x20|\x2010\x20\x0a\x0a*NOTE\x20:*\x0aPastikan\x20Transfer\x20Limit\x20Benar','\x20telah\x20dinonaktifkan','\x20Di\x20Mulai!','Reply\x20Pesan\x20Target','Kamu\x20belum\x20sewa\x20bot\x20sebelumnya?\x20klik\x20#sewabot','Gagal\x20Menghapus\x20Audio\x20','Reply\x20video\x20nya','*─\x20「\x20YOUTUBE\x20VIDEO\x20」─*\x0a\x0a*▢\x20Title\x20:*\x20','\x0a*Ext*\x20:\x20MP3\x0a*Size*\x20:\x20','reads','undefined','setbiobot','Polydactyl\x20Cat\x20adalah\x20jenis\x20kucing\x20yang\x20memiliki\x20jempol\x20di\x20kaki\x20mereka.','SEWA','.exif','Succes\x20Menghapus\x20sticker\x20','?text=','Mengunyah\x20permen\x20karet\x20dapat\x20meningkatkan\x20kemampuan\x20berpikir\x20cepat\x20dan\x20kewaspadaan\x20hingga\x2010\x20persen.\x20[Jurnal\x20Brain\x20and\x20Cognition]','yeet','Teksnya?','\x0aHari\x20Jumat,\x0a\x0apada\x20pake\x20batik.\x0a\x0asalam\x20hormat,\x0a\x0abuat\x20neng\x20cantik.','*「\x20LIST\x20AUDIO\x20」*\x0a\x0a','\x0a🔖\x20Total\x20Baned\x20:\x20','🍌\x20:\x20🍒\x20:\x20🔔','Asupan\x20Lord','Senin','Semut\x20memiliki\x20kuburan\x20sendiri.\x20Tapi\x20tahukah\x20anda:\x20Gurita\x20memiliki\x20kebun\x20dan\x20suka\x20berkebun.\x20(wikipedia)','quoted','https://api.simsimi.net/v2/?lc=ind&cf=false&text=','thumb','./media/nulis/images/folio/sebelumkiri.jpg','tourl','link','autorespon','\x20-filter:a\x20\x22atempo=0.5,asetrate=65100\x22\x20','Mendengarkan\x20musik\x20benar-benar\x20dapat\x20mengurangi\x20rasa\x20sakit\x20kronis\x20hingga\x2020%\x20dan\x20membantu\x20meringankan\x20depresi\x20hingga\x2025%.\x20(sciencedaily)','./database/video.json','\x20minute(s)\x20','suka\x20mabar(main\x20bareng)sama\x20siapa?','Orang\x20yang\x20merasa\x20kesepian\x20memiliki\x20kemungkinan\x20mengalami\x20kepikunan\x2070-80%\x20lebih\x20tinggi.\x20(Journal\x20of\x20Neurosurgery\x20Neurologi\x20and\x20Psychiatry)','\x20command|jawaban','Fakta\x20unik\x20berikutnya\x20adalah,\x20Psikolog\x20mengatakan\x20bahwa\x20mengirim\x20dan\x20menerima\x20pesan\x20teks\x20benar-benar\x20dapat\x20meningkatkan\x20mood\x20Anda\x20ketika\x20Anda\x20merasa\x20kesepian.\x20(Telegraph)','Link\x20tidak\x20valid\x20atau\x20mungkin\x20user\x20private','Masukkan\x20link\x20mediafire','Buylimit\x20*Nominal*\x0a\x0a*Example\x20:*\x0a','addcmd','deleterespon','unban','blush','ceksewa','Gergaji\x20mekanik\x20awalnya\x20diciptakan\x20sebagai\x20alat\x20kedokteran\x20untuk\x20membantu\x20melahirkan\x20bayi.','Example\x20:\x20','https://www.pinterest.com/resource/BaseSearchResource/get/?source_url=%2Fsearch%2Fpins%2F%3Fq%3D','Mau\x20cari\x20apa','\x20telah\x20di\x20blockir!','\x20*MEDIAFIRE\x20DOWNLOAD*\x0a\x0a*Data\x20Berhasil\x20Didapatkan!*\x0a\x0a🆔\x20Nama\x20:\x20','*📩\x20YOUTUBE-PLAY\x20MP4*','slow','Mengkonsumsi\x20buah\x20tomat\x20beberapa\x20kali\x20dlm\x20kurun\x20waktu\x20seminggu\x20dpt\x20mengatasi\x20perasaan\x20depresi.\x20[peneliti\x20di\x20Tianjin\x20Medical\x20Univ.,\x20Cina]','audio/mp4','autoregis','Reply\x20stiker\x20nya','\x20Day\x20(s),\x20','\x20Perasaan\x20kesepian\x20memicu\x20respon\x20yang\x20sama\x20di\x20otak\x20sebagai\x20rasa\x20sakit\x20fisik.\x20[BBCnews]','\x0a🏷️\x20Anti\x20Delete\x20:\x20','Agustus','\x0a🏷️\x20Multi\x20Prefix\x20:\x20','Udah\x20aktif','Succes\x20Mematikan\x20Fitur\x20Welcome\x20&\x20Leave','ss\x20recent\x20call\x20whatsapp','addPremiumUser','end','ttt','*\x20\x0a\x0a*🌐\x20Limit\x20:\x20','Error\x20Bro\x20Wkwkwk','\x0aBurung\x20perkutut\x0a\x0aburung\x20kuthilang\x0a\x0akamu\x20kentut\x0a\x0aenggak\x20bilang\x20bilang','Jadikan\x20Bot\x20Sebagai\x20Admin\x20Group','.webp','Target\x20Sudah\x20Di\x20Didalam\x20Group!','\x0a\x0a⬣\x20Limit\x20:\x20','demote','stickerwm','delbadword','\x0aPesan\x20:\x20','\x0a\x0a_Silahkan\x20tunggu\x20file\x20media\x20sedang\x20dikirim\x20mungkin\x20butuh\x20beberapa\x20menit_','─\x20「\x20YOUTUBE\x20VIDEO\x20」─\x0a\x0a*▢\x20Title\x20:*\x20','prank\x20chat\x20mantan\x20dan\x20bilang\x20\x22\x20i\x20love\x20u,\x20pgn\x20balikan','cekapikey','Kirim\x20perintah\x20','antifaketroli','tupai','off','\x20%\x0a🔖\x20Charging\x20:\x20','\x0a________________________\x0a\x0a','*Khusus\x20group*','📊\x20*Quality\x20:*\x20480kbps','antibadword','getMinutes','addaudio','uptime','\x0a🔖\x20Merk\x20HP\x20:\x20','🍊\x20:\x20🍋\x20:\x20🔔','Sukses\x20Menghapus\x20sesi\x20Voting\x20Di\x20Grup\x20Ini','getSeconds','splice','1720x1280','\x0aBola\x20pingpong\x20dimakan\x20gelatik\x0a\x0aBiar\x20ompong\x20yang\x20penting\x20cantik\x0a','length','\x0a📅\x20Tanggal\x20:\x20','Succes\x20Menghapus\x20Audio\x20','\x0a💹\x20*Balance\x20:*\x20','lirik','Sukses....','\x20Perasaan\x20kesepian\x20memicu\x20respon\x20yang\x20sama\x20di\x20otak\x20sebagai\x20rasa\x20sakit\x20fisik.\x20(BBCnews)','??\x20:\x20🔔\x20:\x20🍇','TEL;type=CELL;type=VOICE;waid=','Premium\x20User\x0a⬣\x20Expired\x20Prem\x20:\x20','\x0a🔖\x20Mnc\x20:\x20','Sesi\x20Voting\x20Sedang\x20Berlangsung\x20Di\x20Grup\x20Ini','data','https://api.memegen.link/images/custom/','🐣\x20*Title*\x20:\x20','*\x0a??\x20Expired\x20:\x20','Gagal,\x20Karena\x20Target\x20Baru²\x20Saja\x20Keluar','listres','delvote','tovideo','heapUsed','foliokanan*\x20teks','stickerwm\x20nama|author\x20atau\x20tag\x20gambar/video\x20yang\x20sudah\x20dikirim\x0aNote\x20:\x20Durasi\x20video\x20maximal\x2010\x20detik','messageTimestamp','\x0aNamanya\x20penjahat,\x0a\x0apolisi\x20jadi\x20inceran.\x0a\x0abosan\x20jadi\x20temen\x20curhat,\x0a\x0amaunya\x20pacaran.','BEGIN:VCARD\x0aVERSION:3.0\x0aN:Sy;Bot;;;\x0aFN:','nom','url','substring','bass','foliokanan','Sukses','readFileSync','Desember','message','red','fileSha256','*\x20lord','│\x20*@','cuddle','Nothing.','all','\x0aBuah\x20semangka\x20berdaun\x20sirih\x0a\x0aBuah\x20ajaib\x20kali\x20yah','🔖\x20CEK\x20PREMIUM','\x0a\x0a_Untuk\x20durasi\x20lebih\x20dari\x20batas\x20disajikan\x20dalam\x20bentuk\x20link_','expired','Gagal,\x20pada\x20saat\x20mengkonversi\x20video\x20ke\x20mp3','telfon\x20crush/pacar\x20sekarang\x20dan\x20ss\x20ke\x20pemain','\x20https://youtu.be/kxjMsMST4Rw','Tiktok\x20Music.mp3','addAfkUser','*\x0a*🎯\x20Xp\x20:\x20','orig','\x0aBuah\x20apel\x0a\x0adi\x20air\x20payau\x0a\x0anggak\x20level\x0a\x0alayauuuuuuu','$&\x0a','igstory','IBM\x20mengatakan\x20bahwa\x20dalam\x20kurun\x20waktu\x205\x20tahun\x20ke\x20depan,\x20komputer\x20bakal\x20mirip\x20manusia\x20yang\x20bisa\x20melihat,\x20mendengar,\x20mencium\x20dan\x20merasakan.','\x0aTotal\x20:\x20','🍊\x20:\x20🍒\x20:\x20🍒','GET','delsticker','./database/antilink.json','\x0a⬣\x20Level\x20:\x20','Group\x20ini\x20tidak\x20terdaftar\x20dalam\x20list\x20sewabot.\x20Ketik\x20','Linknya?','Terjadi\x20kesalahan','groupInviteCode','Di\x20Jerman,\x20tahanan\x20yg\x20ingin\x20meloloskan\x20diri\x20dr\x20penjara\x20adl\x20bukan\x20mrupakn\x20perbuatan\x20ilegal.\x20Krn\x20itu\x20salah1\x20naluri\x20dasar\x20manusia\x20untuk\x20kebebasan.','Tidak\x20ada\x20dalam\x20list','@c.us','chats','pinterest','\x0a📛\x20*Penerima\x20:*\x20','linkgrup','save','./media/nulis/images/folio/setelahkanan.jpg','teriak\x20gajelas\x20lalu\x20kirim\x20pake\x20vn\x20kesini','Juli','April','addvideo','「\x20*TAG\x20ALL*\x20\x20」\x0a','resource_response','./database/stick.json','\x0a💹\x20*EXPIRE\x20:*\x20','deleteimage','\x0a\x0a```Tunggu\x20Sebentar,\x20Video\x20Sedang\x20Dikirim```','Click\x20self\x20to\x20return\x20to\x20self\x20mode','waifu','slice','awoo','\x0a\x09\x09\x09\x09\x09\x09\x09\x0a','「\x20*BOT\x20STATISTIC*\x20」\x20\x0a\x0a🔖\x20Botname\x20:\x20','Choose\x20one','Usernamenya?','@s.whatsapp.net','\x20Memperpanjang\x20usia\x20handphone\x20hingga\x204\x20tahun\x20dapat\x20mengurangi\x20dampak\x20lingkungan\x20sampai\x2040\x20persen.\x20[Hasil\x20studi\x20di\x20Swiss]','stickerMessage','clear','images','webp','Menurut\x20etiket\x20internasional,\x20sebuah\x20jabat\x20tangan\x20yang\x20tepat\x20dan\x20baik\x20harus\x20berlangsung\x20selama\x20sekitar\x203\x20detik\x20&\x20dilepaskan\x20setelah\x20goyang.','\x20day(s)\x20','\x0a🏷️\x20Auto\x20Respond\x20:\x20','List\x20badword\x0a\x0a','jid','kirim\x20voice\x20note\x20bilang\x20can\x20i\x20call\x20u\x20baby?','\x0aTunda\x20lapar,\x0a\x0amakan\x20indomi.\x0a\x0ahati\x20menggelepar,\x0a\x0acintapun\x20bersemi.','getPremiumPosition','Nama\x20Audionya\x20Apa?','./media/nulis/images/buku/setelahkiri.jpg','Tiktok\x20Download.mp4','「\x20*LIST\x20STICKER\x20CMD*\x20」','True','\x0aSepandai-pandai\x20tupai\x20melompat\x0a\x0aPolisi\x20lebih\x20pandai\x20melompat','ago','544536kkPGSX','info','quotedMessage','empty','Emror','robot','\x0aPilih\x20suara\x20harpa\x20yang\x20jelas.\x0a\x0aTali\x20di\x20harpa\x20diikat\x20cinta','./database/limit.json','\x0aAnak\x20tikus\x20rindu\x20ibunya\x0a\x0asombong\x20nich\x20ceritanya','listvideo','wa.me/','setdesk','stikergif','siapa\x20orang\x20yang\x20bisa\x20membuatmu\x20sange','test','705678sewkwV','tiktok.com','\x0a*TOTAL\x20:*\x20','grub','downloadMediaMessage','givelimit','snap/post\x20foto\x20pacar/crush','Balance\x20kamu\x20tidak\x20mencukupi\x20untuk\x20pembelian\x20ini','\x20telah\x20di\x20unban!','towame','Menurut\x20riset\x20pasar\x20global\x20Euromonitor\x20International,\x20pria\x20Korea\x20adalah\x20pria\x20yang\x20paling\x20suka\x20bersolek\x20dari\x20pria\x20lain\x20di\x20dunia.','Jadikan\x20Bot\x20Sebagai\x20Admin\x20Group!','teriak\x20pake\x20kata\x20kasar\x20sambil\x20vn\x20trus\x20kirim\x20kesini','groupDemoteAdmin','FINISH','\x0aKe\x20pasar,\x20nyari\x20obat\x20gatal\x0a\x0aDasar,\x20gak\x20modal!','./database/video/','@s.whatsapp.net\x0a⏰\x20*Expired*:\x20','instastory','🍒\x20:\x20🍒\x20:\x20\x20🍒','\x0a\x0a👨‍💻\x20*Dev*\x20:\x20','Instagram\x20•\x20','\x20Karakter\x20kartun\x20Bugs\x20Bunny\x20diberi\x20pangkat\x20kehormatan\x20sersan-mayor\x20di\x20Korps\x20Marinir\x20AS\x20pada\x20akhir\x20Perang\x20Dunia\x20II.\x20(wikipedia)','./media/nulis/images/buku/setelahkanan.jpg','「\x20*SELF-MODE*\x20」','Sukses...','dellrespon','level','\x0a\x0a_Tunggu\x20Proses\x20Upload\x20Media_','.stiker','imagetorul','coffecup','🆔\x20*ID\x20:*\x20@','ERROR\x20:\x20','Jeff','webpmux\x20-set\x20exif\x20./sticker/takestick_','cry','stats','Pada\x20abad\x20pertengahan\x20di\x20Eropa,\x20garam\x20sangat\x20mahal\x20harganya,\x20sehingga\x20disebut\x20sebagai\x20\x22emas\x20putih\x22.','\x0aBuah\x20semangka\x0a\x0abuah\x20manggis\x0a\x0anggak\x20nyangka\x0a\x0ague\x20manis','ketik','Invalid\x20Link','Masukkan\x20link','Linknya\x20Error','reply\x20sticker/audio','Belum\x20Daftar','%22%2C%22scope%22%3A%22pins%22%2C%22no_fetch_context_on_resource%22%3Afalse%7D%2C%22context%22%3A%7B%7D%7D&_=1619980301559','\x0aJambu\x20merah\x0a\x0adi\x20dinding\x0a\x0ajangan\x20marah\x0a\x0ajust\x20kidding','listfoto','name','getStatus','autorespon\x20on','bite','yts','addvn','\x20second(s)\x0a\x0a','\x0aUbek-ubek\x20peti,\x0a\x0acari\x20gunting.\x0a\x0asaking\x20cinta\x20mati,\x0a\x0aneng\x20rela\x20bunting.','─\x20「\x20*SUKSES*\x20」\x20─\x0a\x0aSUKSES\x20TRANSFER\x20LIMIT\x0a\x0a🆔\x20*Pengirim\x20:*\x20@','tiktok','\x20telah\x20aktif\x20sebelumnya','.webp\x20-o\x20./sticker/','stringify','runtime','setnamegrup','*\x20teks\x20atas|teks\x20bawah','video/gif','Sebutkan\x20kejadian\x20yang\x20bikin\x20kamu\x20sakit\x20hati\x20yang\x20masih\x20di\x20inget','Contoh\x20','buylimit*\x20jumlah\x20limit\x20yang\x20ingin\x20dibeli\x0a\x0aHarga\x201\x20limit\x20=\x20$100\x20balance','*「\x20PREMIUM\x20EXPIRE\x20」*\x0a\x0a🆔\x20*ID*:\x20','neko','-interline-spacing','modifyChat','Members\x20succes\x20promote','tiktokmusic','kill','./database/scommand.json','Pura\x20pura\x20kerasukan,\x20contoh\x20:\x20kerasukan\x20maung,\x20kerasukan\x20belalang,\x20kerasukan\x20kulkas,\x20dll','memoryUsage','\x0aMen\x20sana\x0a\x0ain\x20corpore\x20sano\x0a\x0ague\x20maen\x20ke\x20sana,\x0a\x0aelo\x20maen\x20ke\x20sono!','Isi\x20sendiri','Jangan\x20Malas.\x20Jadilah\x20siswa\x20yang\x20rajin\x20ರ_ರ','exit','Sukses\x20Menambahkan\x20Video!\x0aCek\x20Video\x20Dengan\x20Cara\x20Ketik\x20','takestick_','stcmeme','+48+185','getSewaExpired','.exif\x20./sticker/','™©\x20|\x20','https://chat.whatsapp.com/','\x0a*▢\x20Filesize\x20:*\x20','setdesc','help','stickermeme','sebutkan\x20tipe\x20pacar\x20mu!','minimal\x20transfer\x201','input','MODE\x20VERIFY\x20OFF','semoji','voting','Nama\x20Video\x20Yang\x20Mau\x20Di\x20Hapus\x20Apa?','donasi','Reply\x20Gambar!','Nama\x20Sticker\x20Yang\x20Mau\x20Di\x20Hapus\x20Apa?','bilang\x20\x22i\x20hv\x20crush\x20on\x20you,\x20mau\x20jadi\x20pacarku\x20gak?\x22\x20ke\x20lawan\x20jenis\x20yang\x20terakhir\x20bgt\x20kamu\x20chat\x20(serah\x20di\x20wa/tele),\x20tunggu\x20dia\x20bales,\x20kalo\x20udah\x20ss\x20drop\x20ke\x20sini','\x0a*▢\x20Upload\x20:*\x20','59.\x2049%\x20dari\x20pemilik\x20Smartphone\x20adalah\x20jomblo.\x20(Survei,\x20\x222012\x20Online\x20User\x20Behavior\x20and\x20Engagement\x20Study\x22)','\x0a🔖\x20Total\x20Chat\x20:\x20','kontak','35.\x20Disarankan\x20supaya\x20membeli\x20sepatu\x20pada\x20sore\x20hari.\x20Sebab,\x20setelah\x20seharian\x20berjalan,\x20di\x20sore\x20hari\x20kaki\x20akan\x20membesar\x205-8\x20persen.','🍌\x20:\x20🍌\x20:\x20🍌','Sedang\x20Ada\x20Sesi,\x20tidak\x20dapat\x20dijalankan\x20secara\x20bersamaan','ORG:KONTAK;\x0a','\x0aMain\x20mata,\x0a\x0amesem-mesem.\x0a\x0aneng\x20tetep\x20cinta,\x0a\x0abiarpun\x20abang\x20keteknya\x20asem.','addsticker','map','\x0a\x20Mawar\x20bersemi\x0a\x0adi\x20batang\x20kayu\x0a\x0ado\x20you\x20love\x20me\x0a\x0alike\x20i\x20love\x20you','\x20\x22Mwahahaha\x22\x20dan\x20\x22lolz\x22\x20telah\x20ditambahkan\x20ke\x20Kamus\x20Inggris\x20Oxford.','*PLAY\x20MUSIC*\x0a\x0a*Title*\x20:\x20','same-origin','video','MB\x20/\x20','♏\x20*Filesize*\x20:\x20','participant','Fitur\x20Ini\x20Belum\x20Pernah\x20Di\x20Aktifkan\x20Di\x20Group\x20Ini','\x0aMakan\x20semangka,\x0a\x0amakan\x20kedondong.\x0a\x0akalau\x20suka,\x0a\x0anyatain\x20dong.','.jpg','./sticker/takestick_','setdetikvn','\x0a🔖\x20Versi\x20HP\x20:\x20','megumin','./media/nulis/images/buku/sebelumkiri.jpg','*WHATSAPP-BOT*','\x0a📊\x20*Limit\x20:*\x20','Instagram\x20•\x20\x20','siapa\x20orang\x20yang\x20pernah\x20buatmu\x20sange','Ketik\x20*','ffmpeg\x20-i\x20','wave','Udah\x20ada','toLowerCase','join','\x0a➸\x20*REQUEST\x20:*\x20','Kamu\x20dalam\x20mode\x20afk','+128+129','cringe','log','Jawabannya\x20apa?','premiumlist','Apel\x20yang\x20ditaruh\x20di\x20ruang\x20terbuka\x20akan\x20matang\x2010\x20kali\x20lebih\x20cepat\x20dibandingkan\x20dengan\x20apel\x20yang\x20ditaruh\x20di\x20kulkas.','setppbot','delvideo','delaudio','ulang','Kamu\x20bukan\x20user\x20premium\x0akirim\x20perintah\x20','Limit\x20kamu\x20sudah\x20habis\x20silahkan\x20kirim\x20','Hit\x20today\x20:\x20','slowmo','updateProfileName','liststick','\x20Mau\x20Memperpanjang\x20Waktu\x20Sewa\x20Bot','delrespon','Rasa\x20cemburu\x20berlebihan\x20bisa\x20digolongkan\x20penyakit\x20jiwa,\x20krna\x20dpt\x20mendorong\x20ssorg\x20utk\x20bunuh\x20diri\x20/\x20menghabisi\x20nyawa\x20org\x20lain.\x20[riset]','vote\x20=\x20✅\x0adevote\x20=\x20❌\x0a\x0aAlasan:\x20','./database/audio/','🔔\x20:\x20🍒\x20:\x20🍊','*BROADCAST*','pinterest2','False','convert','Ungkapan\x20\x27Smitten\x27\x20adalah\x20untuk\x20menyebut\x20\x27naksir\x27\x20dalam\x20bahasa\x20Inggris.','handhold','today','groupMakeAdmin','-font','addmusic','[()/\x20]','smile','verify','─「\x20*APIKEY\x20CEK*\x20」─\x0a\x0a➸\x20*Username\x20:*\x20','listban','\x0a\x0a📍\x20*ID\x20:*\x20','\x20kontak','wink','\x0a💬\x20Tag\x20:\x20@','\x0a🎯\x20Bio\x20:\x20','*\x0a\x0a\x0aKamu\x20Dapat\x20Membeli\x20Limit\x20Dengan\x20','group','instaphoto','\x20berhasil\x0a\x0a*📊\x20Sisa\x20Balance\x20:\x20','./media/nulis/images/folio/setelahkiri.jpg','afk','OWNER','MENU','.mp4','Off','pernah\x20cinta\x20bertepuk\x20sebelah\x20tangan?\x20kalo\x20pernah\x20sama\x20siapa?\x20rasanya\x20gimana\x20brou?','groupUpdateDescription','+89+190','Succes\x20Menghapus\x20Video\x20','STARTED\x20:\x20','🍐\x20:\x20🍒\x20:\x20🍋','\x20*\x20USER\x20PROFILE*\x0a\x0a📛\x20Nama\x20:\x20','limit\x20untuk\x20mengecek\x20limit','\x0aPecahan\x20genting,\x0a\x0adi\x20bawah\x20kursi.\x0a\x0abetah\x20meeting,\x0a\x0akarena\x20si\x20boss\x20seksi.','endsWith','stickwm_','│+\x20Total\x20:\x20','kick','application/json,\x20text/javascript,\x20*/*,\x20q=0.01','stickergif','error','Tag\x20Lawan\x20Yang\x20Ingin\x20Diajak\x20Bermain\x20Game','vibrato','ytsearch','nuliskanan\x0a','*Hasil\x20Pencarian\x20Dari\x20:\x20','sider','🐣\x20Title:\x20','Musik\x20memiliki\x20kemampuan\x20untuk\x20memperbaiki\x20kerusakan\x20otak\x20serta\x20mengembalikan\x20kenangan\x20yang\x20hilang.\x20(cracked\x20.com)','\x0a🔖\x20Total\x20Block\x20:\x20','en68','9a236a4','action','Eror','catch','\x0a\x0a```Ukuran\x20File\x20Terlalu\x20Besar\x20Jadi\x20Di\x20Sajikan\x20Dalam\x20Bentuk\x20Link```','./database/image.json','\x20Wib\x0a╰❒\x20*Success*','🐣\x20Views:\x20','https://api.xteam.xyz/attp?file&text=','\x20query','teksnya?','listimage','toimg','*「\x20JADIAN\x20」*\x0a\x0a@','\x0aKotak\x20amal,\x0a\x0adigoyang-goyang.\x0a\x0akemarin\x20aku\x20diramal,\x0a\x0ajodohnya\x20sama\x20abang.','yellow','smoke','KONTAK','masukan\x20angka\x20di\x20baris\x20ke\x203\x0aContoh:\x201-9999\x0a1\x20=\x201\x20Menit','igdl','BEGIN:VCARD\x0a','Terbanned','voicenote','sendkontak','listcmd','status','Link\x20tidak\x20valid','-vf','Fakta\x20Unik','addOutputOptions','pencapaian\x20yang\x20udah\x20didapet\x20apa\x20aja\x20ditahun\x20ini?','Wanita\x202\x20kali\x20lebih\x20banyak\x20menggunakan\x20emoticon\x20dalam\x20pesan\x20teks\x20dibandingkan\x20pria.\x20(Penelitian\x20di\x20Rice\x20University)','hal\x20yang\x20paling\x20ditakutin','hours','Melamun\x20dpt\x20memendekkan\x20telomere\x20(bagian\x20paling\x20ujung\x20sel\x20DNA)\x20yang\x20berperan\x20dlm\x20menjaga\x20kestabilan\x20sel,\x20dimana\x20dapat\x20mempercepat\x20proses\x20penuaan.','Error\x20:\x20%s','pernah\x20gak\x20nyuri\x20uang\x20nyokap\x20atau\x20bokap?\x20Alesanya?','revoke','Di\x20Italia,\x20dalam\x20aturannya\x20minuman\x20Cappuccino\x20hanya\x20boleh\x20di\x20minum\x20sebelum\x20waktu\x20siang.','premiumcek','addimage','Oktober','List\x20Sewa\x0aJumlah\x20:\x20','Rabu','profil','groupUpdateSubject','nobadword','™©\x20|\x20By\x20','\x0aKan\x20bandeng\x0a\x0amakan\x20kawat\x0a\x0aorang\x20ganteng\x0a\x0anumpang\x20lewat','Succes\x20Menghapus\x20Image\x20','\x20minute(s)','https://tinyurl.com/api-create.php?url=','create','alloc','Di\x20Cape\x20Town,\x20Afrika\x20Selatan,\x20remaja\x20laki-laki\x20yang\x20memiliki\x20gigi\x20ompong\x20dianggap\x20tampan\x20/\x20maskulin.','random','limit','Jumlah\x20Harus\x20Berupa\x20Angka','\x20_@user\x20|\x20Nominal_','Sedang\x20Mengirim\x20Pesan\x20Perpanjangan\x20Masa\x20Sewa\x20Ke\x20Owner\x20Bot','─「\x20*AFK\x20MODE*\x20」─\x0a\x0a@','🔔\x20:\x20🔔\x20:\x20🔔','public','.json','teriak\x20\x22\x20anjimm\x20gabutt\x20anjimmm\x20\x22\x20di\x20depan\x20rumah\x20mu','\x20hour(s)\x20','addvid','\x20-filter_complex\x20\x22afftfilt=real=\x27hypot(re,im)*sin(0)\x27:imag=\x27hypot(re,im)*cos(0)\x27:win_size=512:overlap=0.75\x22\x20','Main\x20Lagi?\x20Klik\x20Di\x20Bawah\x20','\x0a💹\x20*Jumlah\x20Limit\x20:*\x20','c.us','nulis','addSewaGroup','tinyurl','sewa','kiss','Pernah\x20suka\x20sama\x20siapa\x20aja?\x20berapa\x20lama?','nama','song','sticker','get','─「\x20🎰\x20\x20*SLOT*\x20\x20🎰\x20」─\x0a\x0a','sewacheck','only','videos','Reply\x20Videonya','beliprem','\x0aDi\x20sini\x20bingung,\x20di\x20sana\x20linglung\x0a\x0aemangnya\x20enak,\x20enggak\x20nyambung…','toFormat','apa\x20ketakutan\x20terbesar\x20kamu?','wait','\x0a💬\x20Link\x20:\x20','minutes','\x0a*WIKI\x20:*\x20','s.whatsapp.net','\x0a🏷️\x20Auto\x20Register\x20:\x20','.png','\x20h,\x20','\x0a🔖\x20Total\x20Hit\x20:\x20','ytmp4','\x20❤\x20@','delcmd','🔔\x20:\x20🔔\x20:\x20\x20🔔','chatinfo'];_0x52fa=function(){return _0x3e871d;};return _0x52fa();}
						switch(command){
							case 'butterfly':
									if (!q) return reply('Teksnya ?')
									reply(mess.wait)
									pButterfly(`${q}`)
									.then(res => {
										sendMediaURL(from, res.url)
										})
									break
									
												default:
		if(budy.includes("@verif", "@verify","daftar")){
			if (isUser) return reply('Kamu sudah terdaftar di dalam database')
 addRegisterUser(sender, pushname, bio_user, wib)
 let ran_blc = randomNomor(50)
 addBalance(sender, ran_blc, balance)
fs.writeFileSync('./database/user.json', JSON.stringify(_user))
teks = `╭─❒ *Verification* ❒\n│📛 *Nama :* ${pushname}\n│#️⃣ *Nomor :* @${sender.split('@')[0]}\n│💌 *Bio :* ${bio_user}\n│⏰ *Time :* ${wib} Wib\n╰❒ *Success*`
let papako = [{
										"buttonId": `menu`,
										"buttonText": {
											"displayText": "MENU"
											},
										"type": "RESPONSE"
										},{
										"buttonId": `me`,
										"buttonText": {
											"displayText": "PROCFILE"
											},
										"type": "RESPONSE"
										}]
								sendButLocation(from, teks , `Thank for verification 💋\n${botname}™© | By ${ownername}`, thumbnail, papako, {contextInfo: { mentionedJid: [sender]}})
                }
		
if (budy.startsWith('x')){
try {
if (!Ofc.key.fromMe && !isOwner && !isCreator) return reply(mess.only.owner)
return Zeeone.sendMessage(from, JSON.stringify(eval(budy.slice(2)),null,'\t'),text, {quoted: Ofc})
} catch(err) {
e = String(err)
reply(e)
}
}  
if (budy.startsWith('>')){
try {
	if (!Ofc.key.fromMe && !isOwner && !isCreator) return reply(mess.only.owner)
return Zeeone.sendMessage(from, JSON.stringify(eval(budy.slice(2)),null,'\t'),text, {quoted: Ofc})
} catch(err) {
e = String(err)
reply(e)
}
}  
if (budy.startsWith('$')){
if (!Ofc.key.fromMe && !isOwner && !isCreator ) return reply(mess.only.owner)
qur = budy.slice(2)
exec(qur, (err, stdout) => {
if (err) return reply(`LordUserbot :~ ${err}`)
if (stdout) {
reply(stdout)
}
})
}
if (budy.startsWith('=>')){
if (!Ofc.key.fromMe && !isOwner && !isCreator) return reply(mess.only.owner)
var konsol = budy.slice(3)
Return = (sul) => {
var sat = JSON.stringify(sul, null, 2)
bang = util.format(sat)
if (sat == undefined){
bang = util.format(sul)
}
return reply(bang)
}
try {
reply(util.format(eval(`;(async () => { ${konsol} })()`)))
console.log('\x1b[1;37m>', '[', '\x1b[1;32mEXEC\x1b[1;37m', ']', time, color("=>", "green"), 'from', color(pushname), 'args :', color(args.length))
} catch(e){
reply(String(e))
}
}
	}
if (isGroup && budy != undefined) {
	} else {
	console.log(color('[ PRIVATE ]', 'aqua'), wib, color(pushname))
	}		
	} catch (e) {
    e = String(e)
    if (!e.includes("this.isZero")) {
	console.log('Message : %s', color(e, 'green'))
        }
	// console.log(e)
	}
} 
