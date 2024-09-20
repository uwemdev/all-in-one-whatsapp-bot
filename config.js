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


global.SESSION_ID = process.env.SESSION_ID  || "SUHAIL_07_45_09_20_ewogICJjcmVkcy5qc29uIjogIntcbiAgXCJub2lzZUtleVwiOiB7XG4gICAgXCJwcml2YXRlXCI6IHtcbiAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgMTYwLFxuICAgICAgICAxMTYsXG4gICAgICAgIDE2MCxcbiAgICAgICAgMjU1LFxuICAgICAgICAyNTAsXG4gICAgICAgIDIwMixcbiAgICAgICAgMTgxLFxuICAgICAgICAyMTksXG4gICAgICAgIDIyOCxcbiAgICAgICAgOTAsXG4gICAgICAgIDEyMSxcbiAgICAgICAgNjIsXG4gICAgICAgIDE4NixcbiAgICAgICAgNjUsXG4gICAgICAgIDIwOSxcbiAgICAgICAgMjcsXG4gICAgICAgIDcsXG4gICAgICAgIDMyLFxuICAgICAgICAxNDQsXG4gICAgICAgIDIxOSxcbiAgICAgICAgMjM3LFxuICAgICAgICAxNDcsXG4gICAgICAgIDEwNCxcbiAgICAgICAgMjUyLFxuICAgICAgICAxNDIsXG4gICAgICAgIDIyNyxcbiAgICAgICAgMTMsXG4gICAgICAgIDIzNyxcbiAgICAgICAgMzcsXG4gICAgICAgIDg3LFxuICAgICAgICA0NyxcbiAgICAgICAgNjlcbiAgICAgIF1cbiAgICB9LFxuICAgIFwicHVibGljXCI6IHtcbiAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgMTEwLFxuICAgICAgICAxNjMsXG4gICAgICAgIDEyNCxcbiAgICAgICAgMTQzLFxuICAgICAgICA0OCxcbiAgICAgICAgMjA3LFxuICAgICAgICA2NixcbiAgICAgICAgMjAxLFxuICAgICAgICAxNTAsXG4gICAgICAgIDE3MCxcbiAgICAgICAgMTQ0LFxuICAgICAgICAyMDAsXG4gICAgICAgIDIzMixcbiAgICAgICAgMTI1LFxuICAgICAgICAxNjcsXG4gICAgICAgIDIwNCxcbiAgICAgICAgNzUsXG4gICAgICAgIDQzLFxuICAgICAgICAyMTMsXG4gICAgICAgIDEzNCxcbiAgICAgICAgMjI3LFxuICAgICAgICAxLFxuICAgICAgICA5OSxcbiAgICAgICAgMTYzLFxuICAgICAgICAxLFxuICAgICAgICAxNTYsXG4gICAgICAgIDI5LFxuICAgICAgICA5NSxcbiAgICAgICAgMjMxLFxuICAgICAgICAyMjcsXG4gICAgICAgIDM1LFxuICAgICAgICA2OFxuICAgICAgXVxuICAgIH1cbiAgfSxcbiAgXCJwYWlyaW5nRXBoZW1lcmFsS2V5UGFpclwiOiB7XG4gICAgXCJwcml2YXRlXCI6IHtcbiAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgMjI0LFxuICAgICAgICAxNzUsXG4gICAgICAgIDIyMSxcbiAgICAgICAgMTI3LFxuICAgICAgICA1NSxcbiAgICAgICAgMjEwLFxuICAgICAgICAxMTIsXG4gICAgICAgIDIzOCxcbiAgICAgICAgMTc1LFxuICAgICAgICAyMjUsXG4gICAgICAgIDIwMyxcbiAgICAgICAgMTg4LFxuICAgICAgICA3NixcbiAgICAgICAgMjA4LFxuICAgICAgICA4NyxcbiAgICAgICAgMTk2LFxuICAgICAgICAyMzcsXG4gICAgICAgIDI0MixcbiAgICAgICAgNTcsXG4gICAgICAgIDExNCxcbiAgICAgICAgODUsXG4gICAgICAgIDIyNixcbiAgICAgICAgMTM1LFxuICAgICAgICAyNTIsXG4gICAgICAgIDExMCxcbiAgICAgICAgNTAsXG4gICAgICAgIDE1MCxcbiAgICAgICAgNDEsXG4gICAgICAgIDAsXG4gICAgICAgIDE4NyxcbiAgICAgICAgOTIsXG4gICAgICAgIDc0XG4gICAgICBdXG4gICAgfSxcbiAgICBcInB1YmxpY1wiOiB7XG4gICAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICAgIFwiZGF0YVwiOiBbXG4gICAgICAgIDIwOSxcbiAgICAgICAgNTksXG4gICAgICAgIDIyMSxcbiAgICAgICAgOTcsXG4gICAgICAgIDQxLFxuICAgICAgICAxNjQsXG4gICAgICAgIDIyOSxcbiAgICAgICAgNTksXG4gICAgICAgIDEyNyxcbiAgICAgICAgMTUxLFxuICAgICAgICAyMzAsXG4gICAgICAgIDE1LFxuICAgICAgICA1NyxcbiAgICAgICAgMjUzLFxuICAgICAgICA1NCxcbiAgICAgICAgMTY5LFxuICAgICAgICAyMTEsXG4gICAgICAgIDQ5LFxuICAgICAgICA0MSxcbiAgICAgICAgMTcwLFxuICAgICAgICA3NCxcbiAgICAgICAgMTc2LFxuICAgICAgICAxNTgsXG4gICAgICAgIDExNyxcbiAgICAgICAgMTM5LFxuICAgICAgICAxMzUsXG4gICAgICAgIDIzMSxcbiAgICAgICAgMTEyLFxuICAgICAgICA1NyxcbiAgICAgICAgMzgsXG4gICAgICAgIDc5LFxuICAgICAgICA1N1xuICAgICAgXVxuICAgIH1cbiAgfSxcbiAgXCJzaWduZWRJZGVudGl0eUtleVwiOiB7XG4gICAgXCJwcml2YXRlXCI6IHtcbiAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgMTA0LFxuICAgICAgICA0NCxcbiAgICAgICAgMTc3LFxuICAgICAgICAxNzIsXG4gICAgICAgIDc2LFxuICAgICAgICAxNzQsXG4gICAgICAgIDIwNixcbiAgICAgICAgMTk2LFxuICAgICAgICAyNDAsXG4gICAgICAgIDE0MyxcbiAgICAgICAgNjcsXG4gICAgICAgIDIzOSxcbiAgICAgICAgMTYxLFxuICAgICAgICAxNDMsXG4gICAgICAgIDIzOSxcbiAgICAgICAgMTcwLFxuICAgICAgICA3LFxuICAgICAgICA5NyxcbiAgICAgICAgMjAyLFxuICAgICAgICAxNzUsXG4gICAgICAgIDY3LFxuICAgICAgICA1LFxuICAgICAgICA1OSxcbiAgICAgICAgOTMsXG4gICAgICAgIDExNCxcbiAgICAgICAgNTQsXG4gICAgICAgIDI1NSxcbiAgICAgICAgMjEzLFxuICAgICAgICAxNTIsXG4gICAgICAgIDIwLFxuICAgICAgICAxNjQsXG4gICAgICAgIDExN1xuICAgICAgXVxuICAgIH0sXG4gICAgXCJwdWJsaWNcIjoge1xuICAgICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgICBcImRhdGFcIjogW1xuICAgICAgICAxMTMsXG4gICAgICAgIDIzNixcbiAgICAgICAgMjMxLFxuICAgICAgICAyMTYsXG4gICAgICAgIDIxNCxcbiAgICAgICAgMjEyLFxuICAgICAgICA1MyxcbiAgICAgICAgMTY2LFxuICAgICAgICAxMDIsXG4gICAgICAgIDEyNixcbiAgICAgICAgMjMzLFxuICAgICAgICAyMjEsXG4gICAgICAgIDEzLFxuICAgICAgICAyMDUsXG4gICAgICAgIDAsXG4gICAgICAgIDIyMyxcbiAgICAgICAgMTc3LFxuICAgICAgICAxODcsXG4gICAgICAgIDE5NyxcbiAgICAgICAgMjAyLFxuICAgICAgICAyMzMsXG4gICAgICAgIDI1MSxcbiAgICAgICAgMCxcbiAgICAgICAgMjUxLFxuICAgICAgICAyMzAsXG4gICAgICAgIDY1LFxuICAgICAgICAyMTUsXG4gICAgICAgIDIxMyxcbiAgICAgICAgMTY5LFxuICAgICAgICA3OCxcbiAgICAgICAgMTkxLFxuICAgICAgICA3MVxuICAgICAgXVxuICAgIH1cbiAgfSxcbiAgXCJzaWduZWRQcmVLZXlcIjoge1xuICAgIFwia2V5UGFpclwiOiB7XG4gICAgICBcInByaXZhdGVcIjoge1xuICAgICAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgICAxNixcbiAgICAgICAgICAxMTEsXG4gICAgICAgICAgMzQsXG4gICAgICAgICAgMTg3LFxuICAgICAgICAgIDgzLFxuICAgICAgICAgIDEzMixcbiAgICAgICAgICA2MCxcbiAgICAgICAgICAxNDYsXG4gICAgICAgICAgMjQ2LFxuICAgICAgICAgIDYzLFxuICAgICAgICAgIDI1NSxcbiAgICAgICAgICAyNDMsXG4gICAgICAgICAgNCxcbiAgICAgICAgICA1OSxcbiAgICAgICAgICAxMzIsXG4gICAgICAgICAgMTMyLFxuICAgICAgICAgIDE3NyxcbiAgICAgICAgICAyMDksXG4gICAgICAgICAgNjcsXG4gICAgICAgICAgNTMsXG4gICAgICAgICAgMjUsXG4gICAgICAgICAgMTA3LFxuICAgICAgICAgIDEyMyxcbiAgICAgICAgICAxNzYsXG4gICAgICAgICAgNjksXG4gICAgICAgICAgMjQ3LFxuICAgICAgICAgIDU0LFxuICAgICAgICAgIDcwLFxuICAgICAgICAgIDUyLFxuICAgICAgICAgIDk5LFxuICAgICAgICAgIDQyLFxuICAgICAgICAgIDEwN1xuICAgICAgICBdXG4gICAgICB9LFxuICAgICAgXCJwdWJsaWNcIjoge1xuICAgICAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgICAyMDEsXG4gICAgICAgICAgMTM5LFxuICAgICAgICAgIDIxMyxcbiAgICAgICAgICAxNzIsXG4gICAgICAgICAgMzEsXG4gICAgICAgICAgMzEsXG4gICAgICAgICAgMjExLFxuICAgICAgICAgIDcxLFxuICAgICAgICAgIDE1NCxcbiAgICAgICAgICAzLFxuICAgICAgICAgIDIyLFxuICAgICAgICAgIDY3LFxuICAgICAgICAgIDE2NyxcbiAgICAgICAgICAzNixcbiAgICAgICAgICAxMzYsXG4gICAgICAgICAgMTQ5LFxuICAgICAgICAgIDE1NixcbiAgICAgICAgICAxNTYsXG4gICAgICAgICAgMjQ0LFxuICAgICAgICAgIDIyNCxcbiAgICAgICAgICAxOTEsXG4gICAgICAgICAgMjExLFxuICAgICAgICAgIDIzOSxcbiAgICAgICAgICA1MyxcbiAgICAgICAgICAxNjMsXG4gICAgICAgICAgMjI4LFxuICAgICAgICAgIDMsXG4gICAgICAgICAgMTc2LFxuICAgICAgICAgIDE3NyxcbiAgICAgICAgICAyNDQsXG4gICAgICAgICAgMzEsXG4gICAgICAgICAgNDdcbiAgICAgICAgXVxuICAgICAgfVxuICAgIH0sXG4gICAgXCJzaWduYXR1cmVcIjoge1xuICAgICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgICBcImRhdGFcIjogW1xuICAgICAgICA4LFxuICAgICAgICA5NyxcbiAgICAgICAgNzYsXG4gICAgICAgIDE5MSxcbiAgICAgICAgMTY5LFxuICAgICAgICAxMjAsXG4gICAgICAgIDU3LFxuICAgICAgICAyMDksXG4gICAgICAgIDE3NSxcbiAgICAgICAgMTYzLFxuICAgICAgICAxNzIsXG4gICAgICAgIDM4LFxuICAgICAgICAxMzcsXG4gICAgICAgIDIyOCxcbiAgICAgICAgMTE4LFxuICAgICAgICAxNyxcbiAgICAgICAgMTk4LFxuICAgICAgICAxMDcsXG4gICAgICAgIDE4NyxcbiAgICAgICAgMjExLFxuICAgICAgICAxNzMsXG4gICAgICAgIDEzMSxcbiAgICAgICAgMzksXG4gICAgICAgIDgwLFxuICAgICAgICAyMTAsXG4gICAgICAgIDEyMyxcbiAgICAgICAgMjA1LFxuICAgICAgICA2MyxcbiAgICAgICAgMTQ1LFxuICAgICAgICAxMzEsXG4gICAgICAgIDMsXG4gICAgICAgIDEwMSxcbiAgICAgICAgMTMyLFxuICAgICAgICAxNDMsXG4gICAgICAgIDE1MSxcbiAgICAgICAgMTEzLFxuICAgICAgICAxMzQsXG4gICAgICAgIDE3NSxcbiAgICAgICAgNjQsXG4gICAgICAgIDkyLFxuICAgICAgICAxLFxuICAgICAgICA3MSxcbiAgICAgICAgMTE5LFxuICAgICAgICAzNixcbiAgICAgICAgMjU0LFxuICAgICAgICA3MSxcbiAgICAgICAgNTMsXG4gICAgICAgIDE2MSxcbiAgICAgICAgMjEzLFxuICAgICAgICAyMDYsXG4gICAgICAgIDU1LFxuICAgICAgICAxNTksXG4gICAgICAgIDEwNCxcbiAgICAgICAgMjUyLFxuICAgICAgICAyMjgsXG4gICAgICAgIDg0LFxuICAgICAgICAyMDQsXG4gICAgICAgIDE0OSxcbiAgICAgICAgMjE1LFxuICAgICAgICAxNjksXG4gICAgICAgIDQ4LFxuICAgICAgICAyMjYsXG4gICAgICAgIDIwOSxcbiAgICAgICAgNVxuICAgICAgXVxuICAgIH0sXG4gICAgXCJrZXlJZFwiOiAxXG4gIH0sXG4gIFwicmVnaXN0cmF0aW9uSWRcIjogMTY3LFxuICBcImFkdlNlY3JldEtleVwiOiBcInFOV0tydTB6cTkrZk5wYVNXcVJYWEdicjNZcUJhczhHL240OHhtWEFGRTg9XCIsXG4gIFwicHJvY2Vzc2VkSGlzdG9yeU1lc3NhZ2VzXCI6IFtdLFxuICBcIm5leHRQcmVLZXlJZFwiOiAzMSxcbiAgXCJmaXJzdFVudXBsb2FkZWRQcmVLZXlJZFwiOiAzMSxcbiAgXCJhY2NvdW50U3luY0NvdW50ZXJcIjogMCxcbiAgXCJhY2NvdW50U2V0dGluZ3NcIjoge1xuICAgIFwidW5hcmNoaXZlQ2hhdHNcIjogZmFsc2VcbiAgfSxcbiAgXCJkZXZpY2VJZFwiOiBcInlLUXcyZHdtVEU2U0RKdGtXWnlYTGdcIixcbiAgXCJwaG9uZUlkXCI6IFwiZjU3ZjdmNTgtNDliZS00ZDdmLWI0MjAtMzQ2ZmViMjY2YmFkXCIsXG4gIFwiaWRlbnRpdHlJZFwiOiB7XG4gICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgXCJkYXRhXCI6IFtcbiAgICAgIDE4MyxcbiAgICAgIDQzLFxuICAgICAgMjIxLFxuICAgICAgMjExLFxuICAgICAgMjQ3LFxuICAgICAgMTU0LFxuICAgICAgODUsXG4gICAgICAxOTQsXG4gICAgICAyMjUsXG4gICAgICA4OCxcbiAgICAgIDM5LFxuICAgICAgMTMxLFxuICAgICAgMjksXG4gICAgICAxMCxcbiAgICAgIDE2OSxcbiAgICAgIDk5LFxuICAgICAgODUsXG4gICAgICAzNSxcbiAgICAgIDI0LFxuICAgICAgM1xuICAgIF1cbiAgfSxcbiAgXCJyZWdpc3RlcmVkXCI6IHRydWUsXG4gIFwiYmFja3VwVG9rZW5cIjoge1xuICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgIFwiZGF0YVwiOiBbXG4gICAgICA0MixcbiAgICAgIDIxMCxcbiAgICAgIDY2LFxuICAgICAgMTA1LFxuICAgICAgNDQsXG4gICAgICA1NSxcbiAgICAgIDQ1LFxuICAgICAgMTk2LFxuICAgICAgMjAyLFxuICAgICAgOTIsXG4gICAgICA0NyxcbiAgICAgIDE3NyxcbiAgICAgIDUzLFxuICAgICAgNSxcbiAgICAgIDEwMSxcbiAgICAgIDIyMCxcbiAgICAgIDU4LFxuICAgICAgMTUyLFxuICAgICAgMTUzLFxuICAgICAgMTcwXG4gICAgXVxuICB9LFxuICBcInJlZ2lzdHJhdGlvblwiOiB7fSxcbiAgXCJwYWlyaW5nQ29kZVwiOiBcIlEyTkExOTRXXCIsXG4gIFwibWVcIjoge1xuICAgIFwiaWRcIjogXCIyMjQ2NjkwOTQ4NjU6MThAcy53aGF0c2FwcC5uZXRcIixcbiAgICBcImxpZFwiOiBcIjIyNDIyMzU2NTk4Mzg4MzoxOEBsaWRcIlxuICB9LFxuICBcImFjY291bnRcIjoge1xuICAgIFwiZGV0YWlsc1wiOiBcIkNJVGdvREFRZ05DMHR3WVlDaUFBS0FBPVwiLFxuICAgIFwiYWNjb3VudFNpZ25hdHVyZUtleVwiOiBcIkltOENHblIwY29qY1N5bzFjMzV0MzRwbjdUbTV2NWk3bG1yOCs5clpyUjQ9XCIsXG4gICAgXCJhY2NvdW50U2lnbmF0dXJlXCI6IFwiZXNIVTI1RTUyQ3JXWlgrT1FUYjhGYXhhcGQ4a0lJMFpkbGphdEFYSmRTeHFYaVJCS09GMmlUbWpNZUxNcHBCTERZc1NOTzdaNHE5VG4xU2NZYkJKQnc9PVwiLFxuICAgIFwiZGV2aWNlU2lnbmF0dXJlXCI6IFwiTlVoR3dIZlB0Zm0xSnNmMHdLVkpZQjJsQ3FFZlJiQUhyQXZxSDAvWk80VXdtNGcrV0E2TTFxT21ZL3RYSGNUeGhHSHp5RXZnMVBuZkpIY0ZvQkNZQ3c9PVwiXG4gIH0sXG4gIFwic2lnbmFsSWRlbnRpdGllc1wiOiBbXG4gICAge1xuICAgICAgXCJpZGVudGlmaWVyXCI6IHtcbiAgICAgICAgXCJuYW1lXCI6IFwiMjI0NjY5MDk0ODY1OjE4QHMud2hhdHNhcHAubmV0XCIsXG4gICAgICAgIFwiZGV2aWNlSWRcIjogMFxuICAgICAgfSxcbiAgICAgIFwiaWRlbnRpZmllcktleVwiOiB7XG4gICAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgICBcImRhdGFcIjogW1xuICAgICAgICAgIDUsXG4gICAgICAgICAgMzQsXG4gICAgICAgICAgMTExLFxuICAgICAgICAgIDIsXG4gICAgICAgICAgMjYsXG4gICAgICAgICAgMTE2LFxuICAgICAgICAgIDExNixcbiAgICAgICAgICAxMTQsXG4gICAgICAgICAgMTM2LFxuICAgICAgICAgIDIyMCxcbiAgICAgICAgICA3NSxcbiAgICAgICAgICA0MixcbiAgICAgICAgICA1MyxcbiAgICAgICAgICAxMTUsXG4gICAgICAgICAgMTI2LFxuICAgICAgICAgIDEwOSxcbiAgICAgICAgICAyMjMsXG4gICAgICAgICAgMTM4LFxuICAgICAgICAgIDEwMyxcbiAgICAgICAgICAyMzcsXG4gICAgICAgICAgNTcsXG4gICAgICAgICAgMTg1LFxuICAgICAgICAgIDE5MSxcbiAgICAgICAgICAxNTIsXG4gICAgICAgICAgMTg3LFxuICAgICAgICAgIDE1MCxcbiAgICAgICAgICAxMDYsXG4gICAgICAgICAgMjUyLFxuICAgICAgICAgIDI1MSxcbiAgICAgICAgICAyMTgsXG4gICAgICAgICAgMjE3LFxuICAgICAgICAgIDE3MyxcbiAgICAgICAgICAzMFxuICAgICAgICBdXG4gICAgICB9XG4gICAgfVxuICBdLFxuICBcInBsYXRmb3JtXCI6IFwiYW5kcm9pZFwiLFxuICBcImxhc3RBY2NvdW50U3luY1RpbWVzdGFtcFwiOiAxNzI2ODE4MzA5LFxuICBcIm15QXBwU3RhdGVLZXlJZFwiOiBcIkFBQUFBS0JzXCJcbn0iLAogICJhcHAtc3RhdGUtc3luYy1rZXktQUFBQUFLQnMuanNvbiI6ICJ7XCJrZXlEYXRhXCI6XCJXVDFGZlBOZkFmVzZvdXFhanlhSnk5bGdCSmVQT0NHQTlBWTBLMzdiMTVnPVwiLFwiZmluZ2VycHJpbnRcIjp7XCJyYXdJZFwiOjEwMTE5OTg3NixcImN1cnJlbnRJbmRleFwiOjEsXCJkZXZpY2VJbmRleGVzXCI6WzAsMV19LFwidGltZXN0YW1wXCI6XCIxNzI2NTUzNjc1NjQyXCJ9Igp9"  // PUT your SESSION_ID 


module.exports = {

  menu: process.env.MENU || "", /**  Available @MENU @Schemes 1: Aztec_Md, 2: A17_Md, 3: Suhail-Md Default ---------- If Not Choose then it Randomely Pic One Of Them Each time **/

  HANDLERS: process.env.PREFIX  || "+",
  BRANCH  : process.env.BRANCH  || "main",
  VERSION : process.env.VERSION || "1.0.1-developement-x",
  caption : global.caption || "" , // ```『 ᴘᴏᴡᴇʀᴇᴅ ʙʏ sᴜʜᴀɪʟ²²¹-ᴍᴅ 』```", //*『sᴜʙsᴄʀɪʙᴇ • sᴜʜᴀɪʟ ᴛᴇᴄʜ』*\n youtube.com/@suhailtechinfo0"),
 
  author : process.env.PACK_AUTHER|| "➳ᴹᴿメ 𝐀𝐍𝐎𝐍𝐘𝐌𝐎𝐔𝐒亗",
  packname: process.env.PACK_NAME || "Sticker by 亗K͜͡ɪɴɢウ 🅰🅽🅾🅽🆈🅼🅾🆄🆂",
  botname : process.env.BOT_NAME  || "➳ᴹᴿメ 𝐀𝐍𝐎𝐍𝐘𝐌𝐎𝐔𝐒亗",
  ownername:process.env.OWNER_NAME|| 亗K͜͡ɪɴɢウ 🅰🅽🅾🅽🆈🅼🅾🆄🆂"",


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
