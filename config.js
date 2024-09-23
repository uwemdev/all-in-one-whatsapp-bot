const fs = require('fs-extra')
if (fs.existsSync('.env')) require('dotenv').config({ path: __dirname+'/.env' })


//═══════[Required Variables]════════\\
global.audio= "" ;  
global.video= "" ;
global.port =process.env.PORT 
global.appUrl=process.env.APP_URL || ""     // put your deploy app/bot url here, for 24/7 for (render , koyeb, glitch)
global.email ="uwemdev@hotmail.com"
global.location="Guinea, Conakry."


global.mongodb= process.env.MONGODB_URI || ""
global.allowJids= process.env.ALLOW_JID || "null" 
global.blockJids= process.env.BLOCK_JID || "null"
global.DATABASE_URL = process.env.DATABASE_URL || ""

global.timezone= process.env.TZ || process.env.TIME_ZONE || "Guinea/Conakry";
global.github=process.env.GITHUB|| "https://github.com/uwemdev/all-in-one-whatsapp-bot";
global.gurl  =process.env.GURL  || "https://api.whatsapp.com/send?phone=224669094865&text=Hi%20Uwem%2C";
global.website=process.env.GURL || "https://uwemdev.com" ; 
global.THUMB_IMAGE = process.env.THUMB_IMAGE || process.env.IMAGE || "https://uwemdev.com/storage/home/about-file-1724092734.jpg" ; // SET LOGO FOR IMAGE 
global.caption = process.env.CAPTION || global.caption || "➳ᴹᴿメ 𝐀𝐍𝐎𝐍𝐘𝐌𝐎𝐔𝐒亗" 


global.devs = "224669094865" // Developer Contact
global.sudo = process.env.SUDO ? process.env.SUDO.replace(/[\s+]/g, '') : "null";
global.owner= process.env.OWNER_NUMBER ? process.env.OWNER_NUMBER.replace(/[\s+]/g, '') : "224669094865";




//========================= [ BOT SETTINGS ] ======8===================\\
global.style = process.env.STYLE   || Math.floor(Math.random()*6) || '0'  // put '1' to "5" here to check bot styles
global.flush = process.env.FLUSH   || "false"; // Make it "true" if bot not responed
global.gdbye = process.env.GOODBYE || process.env.CAN_GOODBYE || "false"; 
global.wlcm  = process.env.WELCOME || process.env.CAN_WELCOME || Math.floor(Math.random()*3)  === 1 ?  "false" : "false" ;  // Make it "false" for disable WELCOME 

global.warncount = process.env.WARN_COUNT || 3
global.disablepm = process.env.DISABLE_PM || "false"
global.disablegroup = process.env.DISABLE_GROUPS || "false", // disable bot in groups when public mode

global.MsgsInLog = process.env.MSGS_IN_LOG|| "false" // "true"  to see messages , "log" to show logs , "false" to hide logs messages
global.userImages= process.env.USER_IMAGES || "https://i.ibb.co/w6ss4st/photo-2024-04-19-10-02-19.jpg" // "text" // set Image/video urls here
global.waPresence= process.env.WAPRESENCE ||  "null" ; // 'unavailable' | 'available' | 'composing' | 'recording' | 'paused'


//========================= [ AUTO READ MSGS & CMDS ] =========================\\
global.readcmds = process.env.READ_COMMAND || "false"
global.readmessage = process.env.READ_MESSAGE || "false"
global.readmessagefrom = process.env.READ_MESSAGE_FROM || "null,234xxxxxxxx";


//========================= [ AUTO SAVE & READ STATUS ] =========================\\
global.read_status = process.env.AUTO_READ_STATUS || "false"
global.save_status = process.env.AUTO_SAVE_STATUS || "false"
global.save_status_from =  process.env.SAVE_STATUS_FROM  || "null,234xxxxxxxx";
global.read_status_from =  process.env.READ_STATUS_FROM  ||  "null";

global.api_smd = "https://api-smd.onrender.com" //  || "https://api-smd-1.vercel.app" // expires
global.scan = "https://suhail-md-vtsf.onrender.com";


global.SESSION_ID = process.env.SESSION_ID  || "SUHAIL_07_04_09_23_ewogICJjcmVkcy5qc29uIjogIntcbiAgXCJub2lzZUtleVwiOiB7XG4gICAgXCJwcml2YXRlXCI6IHtcbiAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgMjAwLFxuICAgICAgICAxNzQsXG4gICAgICAgIDIyOCxcbiAgICAgICAgMjI1LFxuICAgICAgICAxMyxcbiAgICAgICAgOCxcbiAgICAgICAgMTg1LFxuICAgICAgICAyNTAsXG4gICAgICAgIDEyNCxcbiAgICAgICAgMTM3LFxuICAgICAgICA0MyxcbiAgICAgICAgMTE5LFxuICAgICAgICAxNTEsXG4gICAgICAgIDEzNCxcbiAgICAgICAgMTM1LFxuICAgICAgICAyMDksXG4gICAgICAgIDIwMCxcbiAgICAgICAgMjI4LFxuICAgICAgICA5OCxcbiAgICAgICAgODksXG4gICAgICAgIDI0OSxcbiAgICAgICAgMzcsXG4gICAgICAgIDIxMCxcbiAgICAgICAgMjIwLFxuICAgICAgICAxNzQsXG4gICAgICAgIDE4LFxuICAgICAgICAyNDUsXG4gICAgICAgIDQwLFxuICAgICAgICAxNjMsXG4gICAgICAgIDIxMCxcbiAgICAgICAgMjA0LFxuICAgICAgICA3OFxuICAgICAgXVxuICAgIH0sXG4gICAgXCJwdWJsaWNcIjoge1xuICAgICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgICBcImRhdGFcIjogW1xuICAgICAgICAxMDUsXG4gICAgICAgIDExMixcbiAgICAgICAgMjU0LFxuICAgICAgICAzNixcbiAgICAgICAgMTk5LFxuICAgICAgICAyMjksXG4gICAgICAgIDYzLFxuICAgICAgICAxNjMsXG4gICAgICAgIDIyMSxcbiAgICAgICAgNDEsXG4gICAgICAgIDE3NCxcbiAgICAgICAgMSxcbiAgICAgICAgMTI4LFxuICAgICAgICAxMzgsXG4gICAgICAgIDQ1LFxuICAgICAgICAyNDIsXG4gICAgICAgIDM4LFxuICAgICAgICAxODgsXG4gICAgICAgIDk5LFxuICAgICAgICAxMTMsXG4gICAgICAgIDIyMyxcbiAgICAgICAgMTM0LFxuICAgICAgICAyMjksXG4gICAgICAgIDU2LFxuICAgICAgICAxODksXG4gICAgICAgIDE2NSxcbiAgICAgICAgMjQwLFxuICAgICAgICAxNDAsXG4gICAgICAgIDE2NyxcbiAgICAgICAgMTkwLFxuICAgICAgICA0MSxcbiAgICAgICAgMTE3XG4gICAgICBdXG4gICAgfVxuICB9LFxuICBcInBhaXJpbmdFcGhlbWVyYWxLZXlQYWlyXCI6IHtcbiAgICBcInByaXZhdGVcIjoge1xuICAgICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgICBcImRhdGFcIjogW1xuICAgICAgICAyMDgsXG4gICAgICAgIDkwLFxuICAgICAgICAxMzksXG4gICAgICAgIDE1NSxcbiAgICAgICAgMjAwLFxuICAgICAgICA4MSxcbiAgICAgICAgMTg5LFxuICAgICAgICAyMzgsXG4gICAgICAgIDEzMyxcbiAgICAgICAgMTM2LFxuICAgICAgICAxNjQsXG4gICAgICAgIDEzOCxcbiAgICAgICAgOTcsXG4gICAgICAgIDIyNixcbiAgICAgICAgMjksXG4gICAgICAgIDE4NCxcbiAgICAgICAgMTIxLFxuICAgICAgICAxNDUsXG4gICAgICAgIDIwMyxcbiAgICAgICAgNTQsXG4gICAgICAgIDYzLFxuICAgICAgICA5OSxcbiAgICAgICAgNzIsXG4gICAgICAgIDM1LFxuICAgICAgICA5MixcbiAgICAgICAgMzUsXG4gICAgICAgIDg1LFxuICAgICAgICAxNDAsXG4gICAgICAgIDE3LFxuICAgICAgICA2NSxcbiAgICAgICAgMTM2LFxuICAgICAgICAxMDVcbiAgICAgIF1cbiAgICB9LFxuICAgIFwicHVibGljXCI6IHtcbiAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgNDcsXG4gICAgICAgIDE4OCxcbiAgICAgICAgNTAsXG4gICAgICAgIDMzLFxuICAgICAgICA1MixcbiAgICAgICAgMTc0LFxuICAgICAgICAxNTAsXG4gICAgICAgIDEyOCxcbiAgICAgICAgNTMsXG4gICAgICAgIDYyLFxuICAgICAgICAzMSxcbiAgICAgICAgNDQsXG4gICAgICAgIDEzOSxcbiAgICAgICAgNDcsXG4gICAgICAgIDIyNyxcbiAgICAgICAgMTIsXG4gICAgICAgIDU1LFxuICAgICAgICAyMDcsXG4gICAgICAgIDE2MCxcbiAgICAgICAgNTIsXG4gICAgICAgIDEzLFxuICAgICAgICAxNTAsXG4gICAgICAgIDc3LFxuICAgICAgICA5NSxcbiAgICAgICAgMTg5LFxuICAgICAgICA4NyxcbiAgICAgICAgMTI3LFxuICAgICAgICAyMTAsXG4gICAgICAgIDIxMyxcbiAgICAgICAgMTc4LFxuICAgICAgICAyNCxcbiAgICAgICAgMlxuICAgICAgXVxuICAgIH1cbiAgfSxcbiAgXCJzaWduZWRJZGVudGl0eUtleVwiOiB7XG4gICAgXCJwcml2YXRlXCI6IHtcbiAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgMTEyLFxuICAgICAgICAxMTQsXG4gICAgICAgIDUxLFxuICAgICAgICAxNDgsXG4gICAgICAgIDE2NSxcbiAgICAgICAgMjQzLFxuICAgICAgICA2MixcbiAgICAgICAgNjAsXG4gICAgICAgIDI0MSxcbiAgICAgICAgMTg2LFxuICAgICAgICAxNixcbiAgICAgICAgMzksXG4gICAgICAgIDIxNyxcbiAgICAgICAgOTYsXG4gICAgICAgIDE4NixcbiAgICAgICAgMTQ2LFxuICAgICAgICA4NyxcbiAgICAgICAgMjMsXG4gICAgICAgIDMsXG4gICAgICAgIDE3MyxcbiAgICAgICAgMTA4LFxuICAgICAgICAyMTIsXG4gICAgICAgIDc5LFxuICAgICAgICAxMzIsXG4gICAgICAgIDI5LFxuICAgICAgICAyMzgsXG4gICAgICAgIDIzMCxcbiAgICAgICAgMTg0LFxuICAgICAgICA0MyxcbiAgICAgICAgMTY1LFxuICAgICAgICAyNTQsXG4gICAgICAgIDEwNVxuICAgICAgXVxuICAgIH0sXG4gICAgXCJwdWJsaWNcIjoge1xuICAgICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgICBcImRhdGFcIjogW1xuICAgICAgICAyNixcbiAgICAgICAgNTQsXG4gICAgICAgIDM3LFxuICAgICAgICAxOSxcbiAgICAgICAgMTgyLFxuICAgICAgICA2NCxcbiAgICAgICAgNixcbiAgICAgICAgNTAsXG4gICAgICAgIDExOCxcbiAgICAgICAgMjE0LFxuICAgICAgICAxMTYsXG4gICAgICAgIDIwMCxcbiAgICAgICAgMjExLFxuICAgICAgICAxMDIsXG4gICAgICAgIDI0MyxcbiAgICAgICAgMTU4LFxuICAgICAgICAxNDUsXG4gICAgICAgIDIzMixcbiAgICAgICAgMTgsXG4gICAgICAgIDI0MixcbiAgICAgICAgMTY3LFxuICAgICAgICAxNzQsXG4gICAgICAgIDI1NSxcbiAgICAgICAgMTg2LFxuICAgICAgICAxNjUsXG4gICAgICAgIDIxNCxcbiAgICAgICAgMjE0LFxuICAgICAgICA3NCxcbiAgICAgICAgNDMsXG4gICAgICAgIDE1NyxcbiAgICAgICAgNTQsXG4gICAgICAgIDQzXG4gICAgICBdXG4gICAgfVxuICB9LFxuICBcInNpZ25lZFByZUtleVwiOiB7XG4gICAgXCJrZXlQYWlyXCI6IHtcbiAgICAgIFwicHJpdmF0ZVwiOiB7XG4gICAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgICBcImRhdGFcIjogW1xuICAgICAgICAgIDEwNCxcbiAgICAgICAgICAxMTAsXG4gICAgICAgICAgMjQzLFxuICAgICAgICAgIDM0LFxuICAgICAgICAgIDI1NSxcbiAgICAgICAgICA0NCxcbiAgICAgICAgICAxNzgsXG4gICAgICAgICAgODcsXG4gICAgICAgICAgMTY2LFxuICAgICAgICAgIDIwNCxcbiAgICAgICAgICA0MCxcbiAgICAgICAgICAyMDYsXG4gICAgICAgICAgMjEsXG4gICAgICAgICAgMjAsXG4gICAgICAgICAgMjUwLFxuICAgICAgICAgIDUsXG4gICAgICAgICAgNzEsXG4gICAgICAgICAgMTk3LFxuICAgICAgICAgIDEwMSxcbiAgICAgICAgICA2OCxcbiAgICAgICAgICAxNDgsXG4gICAgICAgICAgMTk2LFxuICAgICAgICAgIDQ2LFxuICAgICAgICAgIDQ4LFxuICAgICAgICAgIDI0NixcbiAgICAgICAgICAxNDYsXG4gICAgICAgICAgMjAyLFxuICAgICAgICAgIDQwLFxuICAgICAgICAgIDU0LFxuICAgICAgICAgIDE5NyxcbiAgICAgICAgICAxODMsXG4gICAgICAgICAgNzdcbiAgICAgICAgXVxuICAgICAgfSxcbiAgICAgIFwicHVibGljXCI6IHtcbiAgICAgICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgICAgIFwiZGF0YVwiOiBbXG4gICAgICAgICAgODMsXG4gICAgICAgICAgMTAxLFxuICAgICAgICAgIDU0LFxuICAgICAgICAgIDExNyxcbiAgICAgICAgICAxNDMsXG4gICAgICAgICAgMTYyLFxuICAgICAgICAgIDIzOCxcbiAgICAgICAgICAyNTEsXG4gICAgICAgICAgMjM4LFxuICAgICAgICAgIDIwNCxcbiAgICAgICAgICAxODAsXG4gICAgICAgICAgNDcsXG4gICAgICAgICAgMjQ3LFxuICAgICAgICAgIDg4LFxuICAgICAgICAgIDIwMCxcbiAgICAgICAgICA5MyxcbiAgICAgICAgICAxODksXG4gICAgICAgICAgNjMsXG4gICAgICAgICAgNDIsXG4gICAgICAgICAgMzYsXG4gICAgICAgICAgMjksXG4gICAgICAgICAgMTU2LFxuICAgICAgICAgIDE2NSxcbiAgICAgICAgICAxNzMsXG4gICAgICAgICAgMTExLFxuICAgICAgICAgIDEzNCxcbiAgICAgICAgICAxMzQsXG4gICAgICAgICAgMjU0LFxuICAgICAgICAgIDE4MSxcbiAgICAgICAgICAyNyxcbiAgICAgICAgICAxNzcsXG4gICAgICAgICAgMTIyXG4gICAgICAgIF1cbiAgICAgIH1cbiAgICB9LFxuICAgIFwic2lnbmF0dXJlXCI6IHtcbiAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgMTUsXG4gICAgICAgIDE2NixcbiAgICAgICAgMTAsXG4gICAgICAgIDg3LFxuICAgICAgICAxNzYsXG4gICAgICAgIDg3LFxuICAgICAgICA3MSxcbiAgICAgICAgMjksXG4gICAgICAgIDE2OCxcbiAgICAgICAgNDcsXG4gICAgICAgIDIyMyxcbiAgICAgICAgMjMzLFxuICAgICAgICAxMTksXG4gICAgICAgIDIxNixcbiAgICAgICAgMTcyLFxuICAgICAgICA1OCxcbiAgICAgICAgNTEsXG4gICAgICAgIDEzNSxcbiAgICAgICAgMTA2LFxuICAgICAgICA0OCxcbiAgICAgICAgMTkyLFxuICAgICAgICA3MSxcbiAgICAgICAgMjM5LFxuICAgICAgICA3MixcbiAgICAgICAgMTg1LFxuICAgICAgICA2MyxcbiAgICAgICAgMjM0LFxuICAgICAgICAxMCxcbiAgICAgICAgMjIsXG4gICAgICAgIDk5LFxuICAgICAgICA4LFxuICAgICAgICA2NixcbiAgICAgICAgMjMwLFxuICAgICAgICAxNCxcbiAgICAgICAgMTg1LFxuICAgICAgICAxMTEsXG4gICAgICAgIDE4OCxcbiAgICAgICAgNDIsXG4gICAgICAgIDE4MyxcbiAgICAgICAgMTE1LFxuICAgICAgICAxNTYsXG4gICAgICAgIDE4NSxcbiAgICAgICAgMTEyLFxuICAgICAgICA5MixcbiAgICAgICAgMTcwLFxuICAgICAgICAyMTYsXG4gICAgICAgIDQyLFxuICAgICAgICAxNjIsXG4gICAgICAgIDIwNyxcbiAgICAgICAgMzQsXG4gICAgICAgIDEyMCxcbiAgICAgICAgMjA0LFxuICAgICAgICA4MixcbiAgICAgICAgMTQsXG4gICAgICAgIDk2LFxuICAgICAgICA0NyxcbiAgICAgICAgMTcyLFxuICAgICAgICAyMjgsXG4gICAgICAgIDE0MCxcbiAgICAgICAgMjQ4LFxuICAgICAgICAzNyxcbiAgICAgICAgMTI1LFxuICAgICAgICA4MyxcbiAgICAgICAgMTRcbiAgICAgIF1cbiAgICB9LFxuICAgIFwia2V5SWRcIjogMVxuICB9LFxuICBcInJlZ2lzdHJhdGlvbklkXCI6IDE4MixcbiAgXCJhZHZTZWNyZXRLZXlcIjogXCJXSm5uNlpDNXpKUzVDYXh6emo5dTlWNmFWaEN4Mis2cFU0ZHEwN0pLVU1NPVwiLFxuICBcInByb2Nlc3NlZEhpc3RvcnlNZXNzYWdlc1wiOiBbXG4gICAge1xuICAgICAgXCJrZXlcIjoge1xuICAgICAgICBcInJlbW90ZUppZFwiOiBcIjIyNDY2OTA5NDg2NUBzLndoYXRzYXBwLm5ldFwiLFxuICAgICAgICBcImZyb21NZVwiOiB0cnVlLFxuICAgICAgICBcImlkXCI6IFwiMDJENjQwQzc0RjlDMzQ0Rjc4NTgwMTlFQzU3NEUwREJcIlxuICAgICAgfSxcbiAgICAgIFwibWVzc2FnZVRpbWVzdGFtcFwiOiAxNzI3MDc1MDY1XG4gICAgfVxuICBdLFxuICBcIm5leHRQcmVLZXlJZFwiOiAzMSxcbiAgXCJmaXJzdFVudXBsb2FkZWRQcmVLZXlJZFwiOiAzMSxcbiAgXCJhY2NvdW50U3luY0NvdW50ZXJcIjogMSxcbiAgXCJhY2NvdW50U2V0dGluZ3NcIjoge1xuICAgIFwidW5hcmNoaXZlQ2hhdHNcIjogZmFsc2VcbiAgfSxcbiAgXCJkZXZpY2VJZFwiOiBcIndtbDlBSjN3UkNpd1JpR3V6WVdiMndcIixcbiAgXCJwaG9uZUlkXCI6IFwiZGI1Mjg2YzktN2Q2ZS00MDcxLWJhNGMtNjdhNjdhYmExNGU5XCIsXG4gIFwiaWRlbnRpdHlJZFwiOiB7XG4gICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgXCJkYXRhXCI6IFtcbiAgICAgIDEwMCxcbiAgICAgIDEwMixcbiAgICAgIDE3MCxcbiAgICAgIDEyNyxcbiAgICAgIDIzMixcbiAgICAgIDEyMCxcbiAgICAgIDE3MyxcbiAgICAgIDEzLFxuICAgICAgMTQ3LFxuICAgICAgNjksXG4gICAgICAyMjksXG4gICAgICAyMTAsXG4gICAgICAyMixcbiAgICAgIDEzNyxcbiAgICAgIDE2NixcbiAgICAgIDQ3LFxuICAgICAgODksXG4gICAgICAxMTIsXG4gICAgICA2MyxcbiAgICAgIDExNlxuICAgIF1cbiAgfSxcbiAgXCJyZWdpc3RlcmVkXCI6IHRydWUsXG4gIFwiYmFja3VwVG9rZW5cIjoge1xuICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgIFwiZGF0YVwiOiBbXG4gICAgICAyMzAsXG4gICAgICAxMTcsXG4gICAgICAyLFxuICAgICAgMTc2LFxuICAgICAgNTUsXG4gICAgICAyNTUsXG4gICAgICAyMDYsXG4gICAgICA2NCxcbiAgICAgIDE4OCxcbiAgICAgIDIyMyxcbiAgICAgIDE3NixcbiAgICAgIDIxNCxcbiAgICAgIDEwNixcbiAgICAgIDE1NyxcbiAgICAgIDcyLFxuICAgICAgMTA2LFxuICAgICAgMTM5LFxuICAgICAgMjcsXG4gICAgICAyNyxcbiAgICAgIDEwOFxuICAgIF1cbiAgfSxcbiAgXCJyZWdpc3RyYXRpb25cIjoge30sXG4gIFwicGFpcmluZ0NvZGVcIjogXCJRR1pRVlIxOVwiLFxuICBcIm1lXCI6IHtcbiAgICBcImlkXCI6IFwiMjI0NjY5MDk0ODY1OjE5QHMud2hhdHNhcHAubmV0XCIsXG4gICAgXCJsaWRcIjogXCIyMjQyMjM1NjU5ODM4ODM6MTlAbGlkXCIsXG4gICAgXCJuYW1lXCI6IFwi5LqXS82czaHJqsm0yaLjgqYg8J+FsPCfhb3wn4W+8J+FvfCfhojwn4W88J+FvvCfhoTwn4aCXCJcbiAgfSxcbiAgXCJhY2NvdW50XCI6IHtcbiAgICBcImRldGFpbHNcIjogXCJDT3Fabi9zRkVPK2x4TGNHR0FFZ0FDZ0FcIixcbiAgICBcImFjY291bnRTaWduYXR1cmVLZXlcIjogXCJSZEFCNXU2Y0FKSGlRTm9HaUxTaFE2dnRSSXZVd3JZTllRZ1NUN3BGclhVPVwiLFxuICAgIFwiYWNjb3VudFNpZ25hdHVyZVwiOiBcIlM1QnRJR2JRbWkxQVlRK3VpeCtVR0pYSEhwUEFpeVpjUGlOZklhWGZVUXlWQ0sxRnBLdDdudzlNL09BRWxmOEk3TG9QaDROVmNvU1kyU0VscWQzSEN3PT1cIixcbiAgICBcImRldmljZVNpZ25hdHVyZVwiOiBcIlZaVVMwc3dqeVJFclVzK0xXWDVsbyszZWlGTDlNY291R3RsR3lMVDlRb1FidVZ3bTFLZzdLR1ZRWVg4d0Q4Wk0vR3FSY05yZEUzWFhKejJMZnFuUUNRPT1cIlxuICB9LFxuICBcInNpZ25hbElkZW50aXRpZXNcIjogW1xuICAgIHtcbiAgICAgIFwiaWRlbnRpZmllclwiOiB7XG4gICAgICAgIFwibmFtZVwiOiBcIjIyNDY2OTA5NDg2NToxOUBzLndoYXRzYXBwLm5ldFwiLFxuICAgICAgICBcImRldmljZUlkXCI6IDBcbiAgICAgIH0sXG4gICAgICBcImlkZW50aWZpZXJLZXlcIjoge1xuICAgICAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgICA1LFxuICAgICAgICAgIDY5LFxuICAgICAgICAgIDIwOCxcbiAgICAgICAgICAxLFxuICAgICAgICAgIDIzMCxcbiAgICAgICAgICAyMzgsXG4gICAgICAgICAgMTU2LFxuICAgICAgICAgIDAsXG4gICAgICAgICAgMTQ1LFxuICAgICAgICAgIDIyNixcbiAgICAgICAgICA2NCxcbiAgICAgICAgICAyMTgsXG4gICAgICAgICAgNixcbiAgICAgICAgICAxMzYsXG4gICAgICAgICAgMTgwLFxuICAgICAgICAgIDE2MSxcbiAgICAgICAgICA2NyxcbiAgICAgICAgICAxNzEsXG4gICAgICAgICAgMjM3LFxuICAgICAgICAgIDY4LFxuICAgICAgICAgIDEzOSxcbiAgICAgICAgICAyMTIsXG4gICAgICAgICAgMTk0LFxuICAgICAgICAgIDE4MixcbiAgICAgICAgICAxMyxcbiAgICAgICAgICA5NyxcbiAgICAgICAgICA4LFxuICAgICAgICAgIDE4LFxuICAgICAgICAgIDc5LFxuICAgICAgICAgIDE4NixcbiAgICAgICAgICA2OSxcbiAgICAgICAgICAxNzMsXG4gICAgICAgICAgMTE3XG4gICAgICAgIF1cbiAgICAgIH1cbiAgICB9XG4gIF0sXG4gIFwicGxhdGZvcm1cIjogXCJhbmRyb2lkXCIsXG4gIFwibGFzdEFjY291bnRTeW5jVGltZXN0YW1wXCI6IDE3MjcwNzUwNTksXG4gIFwibXlBcHBTdGF0ZUtleUlkXCI6IFwiQUFBQUFQK3JcIlxufSIsCiAgImFwcC1zdGF0ZS1zeW5jLWtleS1BQUFBQVArci5qc29uIjogIntcImtleURhdGFcIjpcIkNGYVk2dUNINUpMRHF5R1VGOFZZK3M1VkgzbUNHL2RFeEM5azdLTnJNMmc9XCIsXCJmaW5nZXJwcmludFwiOntcInJhd0lkXCI6MTYwMDYzODE4NixcImN1cnJlbnRJbmRleFwiOjEsXCJkZXZpY2VJbmRleGVzXCI6WzAsMV19LFwidGltZXN0YW1wXCI6XCIxNzI3MDc1MDYwMzA1XCJ9Igp9"  // PUT your SESSION_ID 


module.exports = {

  menu: process.env.MENU || "", /**  Available @MENU @Schemes 1: Aztec_Md, 2: A17_Md, 3: Suhail-Md Default ---------- If Not Choose then it Randomely Pic One Of Them Each time **/

  HANDLERS: process.env.PREFIX  || "+",
  BRANCH  : process.env.BRANCH  || "main",
  VERSION : process.env.VERSION || "1.0.1-developement-x",
  caption : global.caption || "" , // ```『 ᴘᴏᴡᴇʀᴇᴅ ʙʏ sᴜʜᴀɪʟ²²¹-ᴍᴅ 』```", //*『sᴜʙsᴄʀɪʙᴇ • sᴜʜᴀɪʟ ᴛᴇᴄʜ』*\n youtube.com/@suhailtechinfo0"),
 
  author : process.env.PACK_AUTHER|| "➳ᴹᴿメ 𝐀𝐍𝐎𝐍𝐘𝐌𝐎𝐔𝐒亗",
  packname: process.env.PACK_NAME || "Sticker by 亗K͜͡ɪɴɢウ 🅰🅽🅾🅽🆈🅼🅾🆄🆂",
  botname : process.env.BOT_NAME  || "➳ᴹᴿメ 𝐀𝐍𝐎𝐍𝐘𝐌𝐎𝐔𝐒亗",
  ownername:process.env.OWNER_NAME||  "亗K͜͡ɪɴɢウ 🅰🅽🅾🅽🆈🅼🅾🆄🆂",


  errorChat : process.env.ERROR_CHAT || "",
  KOYEB_API : process.env.KOYEB_API  || "false",

  REMOVE_BG_KEY : process.env.REMOVE_BG_KEY  || "",
  OPENAI_API_KEY: process.env.OPENAI_API_KEY || "",
  HEROKU_API_KEY: process.env.HEROKU_API_KEY || "",
  HEROKU_APP_NAME:process.env.HEROKU_APP_NAME|| "",
  antilink_values:process.env.ANTILINK_VALUES|| "all",
  HEROKU: process.env.HEROKU_APP_NAME && process.env.HEROKU_API_KEY,


  WORKTYPE: process.env.WORKTYPE || process.env.MODE|| "private",
  LANG: ( process.env.THEME ||  "SUHAIL"  ).toUpperCase(),



};



global.ELEVENLAB_API_KEY = process.env.ELEVENLAB_API_KEY || "";
global.aitts_Voice_Id = process.env.AITTS_ID|| "37";





















global.rank = "updated"
global.isMongodb = false; 
let file = require.resolve(__filename)
fs.watchFile(file, () => { fs.unwatchFile(file);console.log(`Update'${__filename}'`);delete require.cache[file];	require(file); })
 

// ========================= [ Disables in V.1.2.8 ] ===============================\\  
  //style : process.env.STYLE || "2",  // put '1' & "2" here to check bot styles
  //readmessage:process.env.READ_MESSAGE|| "false",
  //warncount: process.env.WARN_COUNT || 3,
  //userImages:process.env.USER_IMAGES|| "text",  // SET IMAGE AND VIDEO URL FOR BOT MENUS 
  //disablepm: process.env.DISABLE_PM || "false",
  //MsgsInLog: process.env.MSGS_IN_LOG|| "false", // "true"  to see messages , "log" to open logs , "false" to hide logs messages
  //readcmds:process.env.READ_COMMANDS|| "false", 
  //alwaysonline:process.env.WAPRESENCE|| "unavailable", // 'unavailable' | 'online' | 'composing' | 'recording' | 'paused'
  //read_status: process.env.AUTO_READ_STATUS || "false",
  //save_status: process.env.AUTO_SAVE_STATUS || "false",
  //aitts_Voice_Id : process.env.AITTS_ID || "37",
  //ELEVENLAB_API_KEY: process.env.ELEVENLAB_API_KEY  || "",
