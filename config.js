const fs = require('fs-extra')
if (fs.existsSync('.env')) require('dotenv').config({ path: __dirname+'/.env' })


//═══════[Required Variables]════════\\
global.audio= "" ;  
global.video= "" ;
global.port =process.env.PORT 
global.appUrl=process.env.APP_URL || ""     // put your deploy app/bot url here, for 24/7 for (render , koyeb, glitch)
global.email ="saimsamsun789@gmail.com"
global.location="Nigeria,Osun,Oshogbo."


global.mongodb= process.env.MONGODB_URI || ""
global.allowJids= process.env.ALLOW_JID || "null" 
global.blockJids= process.env.BLOCK_JID || "null"
global.DATABASE_URL = process.env.DATABASE_URL || ""

global.timezone= process.env.TZ || process.env.TIME_ZONE || "Nigeria/Osun,Oshogbo";
global.github=process.env.GITHUB|| "https://github.com/SuhailTechInfo/Suhail-Md";
global.gurl  =process.env.GURL  || "https://whatsapp.com/channel/0029Vah3XPC6rsQtIcfTX342";
global.website=process.env.GURL || "https://whatsapp.com/channel/0029Vah3XPC6rsQtIcfTX342" ; 
global.THUMB_IMAGE = process.env.THUMB_IMAGE || process.env.IMAGE || "https://telegra.ph/file/75fab4da4ca60e4a651d0.jpg" || "https://github.com/SuhailTechInfo/Suhail-Md/blob/main/lib/assets/suhail.jpg?raw=true" ; // SET LOGO FOR IMAGE 
global.caption = process.env.CAPTION || global.caption || "Empire_Md" 


global.devs = "2348078582627" // Developer Contact
global.sudo = process.env.SUDO ? process.env.SUDO.replace(/[\s+]/g, '') : "null";
global.owner= process.env.OWNER_NUMBER ? process.env.OWNER_NUMBER.replace(/[\s+]/g, '') : "2348078582627";




//========================= [ BOT SETTINGS ] ======8===================\\
global.style = process.env.STYLE   || Math.floor(Math.random()*6) || '0'  // put '1' to "5" here to check bot styles
global.flush = process.env.FLUSH   || "false"; // Make it "true" if bot not responed
global.gdbye = process.env.GOODBYE || process.env.CAN_GOODBYE || "false"; 
global.wlcm  = process.env.WELCOME || process.env.CAN_WELCOME || Math.floor(Math.random()*3)  === 1 ?  "false" : "false" ;  // Make it "false" for disable WELCOME 

global.warncount = process.env.WARN_COUNT || 3
global.disablepm = process.env.DISABLE_PM || "false"
global.disablegroup = process.env.DISABLE_GROUPS || "false", // disable bot in groups when public mode

global.MsgsInLog = process.env.MSGS_IN_LOG|| "false" // "true"  to see messages , "log" to show logs , "false" to hide logs messages
global.userImages= process.env.USER_IMAGES || "https://telegra.ph/file/75fab4da4ca60e4a651d0.jpg" // "text" // set Image/video urls here
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


global.SESSION_ID = process.env.SESSION_ID  || "SUHAIL_04_04_09_06_ewogICJjcmVkcy5qc29uIjogIntcbiAgXCJub2lzZUtleVwiOiB7XG4gICAgXCJwcml2YXRlXCI6IHtcbiAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgMTkyLFxuICAgICAgICAxNDksXG4gICAgICAgIDIzOSxcbiAgICAgICAgMTIsXG4gICAgICAgIDE1NSxcbiAgICAgICAgMjMwLFxuICAgICAgICAxNSxcbiAgICAgICAgMTI3LFxuICAgICAgICAxMTksXG4gICAgICAgIDE4OCxcbiAgICAgICAgMzMsXG4gICAgICAgIDEwLFxuICAgICAgICAxNDAsXG4gICAgICAgIDgsXG4gICAgICAgIDcxLFxuICAgICAgICA1MyxcbiAgICAgICAgMTgxLFxuICAgICAgICAyMTEsXG4gICAgICAgIDE3OCxcbiAgICAgICAgMTk3LFxuICAgICAgICAxNTksXG4gICAgICAgIDE4NCxcbiAgICAgICAgMTU3LFxuICAgICAgICAxMjcsXG4gICAgICAgIDI0OCxcbiAgICAgICAgMTYsXG4gICAgICAgIDI0NyxcbiAgICAgICAgMTg5LFxuICAgICAgICAxOTgsXG4gICAgICAgIDc5LFxuICAgICAgICAyMSxcbiAgICAgICAgOTVcbiAgICAgIF1cbiAgICB9LFxuICAgIFwicHVibGljXCI6IHtcbiAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgODAsXG4gICAgICAgIDY5LFxuICAgICAgICA4NCxcbiAgICAgICAgOTIsXG4gICAgICAgIDIyMCxcbiAgICAgICAgMTg1LFxuICAgICAgICA2NyxcbiAgICAgICAgMTgyLFxuICAgICAgICAyMjQsXG4gICAgICAgIDcyLFxuICAgICAgICA4MyxcbiAgICAgICAgMTMxLFxuICAgICAgICAyMjcsXG4gICAgICAgIDg5LFxuICAgICAgICAzMixcbiAgICAgICAgMjIwLFxuICAgICAgICA4MSxcbiAgICAgICAgMTQ4LFxuICAgICAgICA4OSxcbiAgICAgICAgMTQxLFxuICAgICAgICAyNTAsXG4gICAgICAgIDE3NSxcbiAgICAgICAgNjQsXG4gICAgICAgIDE5MixcbiAgICAgICAgMTkwLFxuICAgICAgICAyMjUsXG4gICAgICAgIDI0MCxcbiAgICAgICAgMTA3LFxuICAgICAgICAxNTYsXG4gICAgICAgIDI0OCxcbiAgICAgICAgMTIzLFxuICAgICAgICA5OVxuICAgICAgXVxuICAgIH1cbiAgfSxcbiAgXCJwYWlyaW5nRXBoZW1lcmFsS2V5UGFpclwiOiB7XG4gICAgXCJwcml2YXRlXCI6IHtcbiAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgMjA4LFxuICAgICAgICA5NyxcbiAgICAgICAgOTYsXG4gICAgICAgIDYyLFxuICAgICAgICAxNzUsXG4gICAgICAgIDEzMCxcbiAgICAgICAgMTksXG4gICAgICAgIDE4MixcbiAgICAgICAgMjA1LFxuICAgICAgICAzMyxcbiAgICAgICAgMTYwLFxuICAgICAgICAyNDYsXG4gICAgICAgIDIzOSxcbiAgICAgICAgMTYsXG4gICAgICAgIDQ4LFxuICAgICAgICAxMTgsXG4gICAgICAgIDYwLFxuICAgICAgICAxNzgsXG4gICAgICAgIDIzNSxcbiAgICAgICAgMTA0LFxuICAgICAgICAxODcsXG4gICAgICAgIDAsXG4gICAgICAgIDc0LFxuICAgICAgICAyNTQsXG4gICAgICAgIDE0MCxcbiAgICAgICAgMTY1LFxuICAgICAgICAyMjIsXG4gICAgICAgIDEwOSxcbiAgICAgICAgMTI3LFxuICAgICAgICAxODksXG4gICAgICAgIDM5LFxuICAgICAgICAxMDBcbiAgICAgIF1cbiAgICB9LFxuICAgIFwicHVibGljXCI6IHtcbiAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgMjE4LFxuICAgICAgICAxOCxcbiAgICAgICAgMjA3LFxuICAgICAgICAyNDIsXG4gICAgICAgIDE3MSxcbiAgICAgICAgMTg5LFxuICAgICAgICAxNDIsXG4gICAgICAgIDIxNCxcbiAgICAgICAgNzgsXG4gICAgICAgIDE1NCxcbiAgICAgICAgMjQyLFxuICAgICAgICA1NixcbiAgICAgICAgODQsXG4gICAgICAgIDIxNSxcbiAgICAgICAgMTcyLFxuICAgICAgICAxNzYsXG4gICAgICAgIDIzNixcbiAgICAgICAgMTU5LFxuICAgICAgICAxNjksXG4gICAgICAgIDIzNixcbiAgICAgICAgMTMzLFxuICAgICAgICAxNDIsXG4gICAgICAgIDEzNyxcbiAgICAgICAgOSxcbiAgICAgICAgMTIsXG4gICAgICAgIDIzMixcbiAgICAgICAgMjQzLFxuICAgICAgICA5NSxcbiAgICAgICAgMjM1LFxuICAgICAgICA0NixcbiAgICAgICAgODUsXG4gICAgICAgIDEyN1xuICAgICAgXVxuICAgIH1cbiAgfSxcbiAgXCJzaWduZWRJZGVudGl0eUtleVwiOiB7XG4gICAgXCJwcml2YXRlXCI6IHtcbiAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgMjI0LFxuICAgICAgICAyOCxcbiAgICAgICAgMTgsXG4gICAgICAgIDE2MixcbiAgICAgICAgMzcsXG4gICAgICAgIDEzMSxcbiAgICAgICAgMyxcbiAgICAgICAgNyxcbiAgICAgICAgMTY1LFxuICAgICAgICAyMDIsXG4gICAgICAgIDIwOSxcbiAgICAgICAgMTMsXG4gICAgICAgIDE5OSxcbiAgICAgICAgNyxcbiAgICAgICAgODksXG4gICAgICAgIDQzLFxuICAgICAgICAzNyxcbiAgICAgICAgMTY1LFxuICAgICAgICAxNjgsXG4gICAgICAgIDk2LFxuICAgICAgICA5MSxcbiAgICAgICAgMTQ1LFxuICAgICAgICAxNzEsXG4gICAgICAgIDg1LFxuICAgICAgICAxNzQsXG4gICAgICAgIDExMCxcbiAgICAgICAgMjE3LFxuICAgICAgICAxNDUsXG4gICAgICAgIDIzNixcbiAgICAgICAgODIsXG4gICAgICAgIDEyLFxuICAgICAgICAxMDFcbiAgICAgIF1cbiAgICB9LFxuICAgIFwicHVibGljXCI6IHtcbiAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgMjI4LFxuICAgICAgICAxMzksXG4gICAgICAgIDE0NSxcbiAgICAgICAgMjI3LFxuICAgICAgICAyMDAsXG4gICAgICAgIDE2LFxuICAgICAgICAyMTksXG4gICAgICAgIDExLFxuICAgICAgICAyMzIsXG4gICAgICAgIDEyNyxcbiAgICAgICAgMTQ0LFxuICAgICAgICAzNyxcbiAgICAgICAgMTYwLFxuICAgICAgICAxNDgsXG4gICAgICAgIDc5LFxuICAgICAgICAxMTMsXG4gICAgICAgIDY3LFxuICAgICAgICAyMDcsXG4gICAgICAgIDUyLFxuICAgICAgICAyMDYsXG4gICAgICAgIDI0LFxuICAgICAgICAyMTEsXG4gICAgICAgIDYsXG4gICAgICAgIDE2NyxcbiAgICAgICAgMTEzLFxuICAgICAgICA1LFxuICAgICAgICAxMjgsXG4gICAgICAgIDE4NCxcbiAgICAgICAgMjAxLFxuICAgICAgICAxOSxcbiAgICAgICAgOTUsXG4gICAgICAgIDEyN1xuICAgICAgXVxuICAgIH1cbiAgfSxcbiAgXCJzaWduZWRQcmVLZXlcIjoge1xuICAgIFwia2V5UGFpclwiOiB7XG4gICAgICBcInByaXZhdGVcIjoge1xuICAgICAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgICAxODQsXG4gICAgICAgICAgMTgyLFxuICAgICAgICAgIDE1MyxcbiAgICAgICAgICAyNDUsXG4gICAgICAgICAgMTg5LFxuICAgICAgICAgIDg3LFxuICAgICAgICAgIDE2NCxcbiAgICAgICAgICAyNDUsXG4gICAgICAgICAgMTg3LFxuICAgICAgICAgIDE1MCxcbiAgICAgICAgICAxNjYsXG4gICAgICAgICAgMjM3LFxuICAgICAgICAgIDE2MSxcbiAgICAgICAgICA2NyxcbiAgICAgICAgICA0NixcbiAgICAgICAgICAyOCxcbiAgICAgICAgICA5NCxcbiAgICAgICAgICA4MSxcbiAgICAgICAgICAxODIsXG4gICAgICAgICAgMjQxLFxuICAgICAgICAgIDIyOSxcbiAgICAgICAgICAxMTAsXG4gICAgICAgICAgMTgxLFxuICAgICAgICAgIDExNCxcbiAgICAgICAgICAyNDQsXG4gICAgICAgICAgMjQ2LFxuICAgICAgICAgIDE0NSxcbiAgICAgICAgICA5MyxcbiAgICAgICAgICAzNCxcbiAgICAgICAgICAyMDEsXG4gICAgICAgICAgOTIsXG4gICAgICAgICAgMTE3XG4gICAgICAgIF1cbiAgICAgIH0sXG4gICAgICBcInB1YmxpY1wiOiB7XG4gICAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgICBcImRhdGFcIjogW1xuICAgICAgICAgIDY4LFxuICAgICAgICAgIDIyNixcbiAgICAgICAgICAxNjksXG4gICAgICAgICAgMjI1LFxuICAgICAgICAgIDE4MSxcbiAgICAgICAgICA3OCxcbiAgICAgICAgICAyNixcbiAgICAgICAgICA4LFxuICAgICAgICAgIDAsXG4gICAgICAgICAgMTQzLFxuICAgICAgICAgIDIwNCxcbiAgICAgICAgICAyMzgsXG4gICAgICAgICAgMixcbiAgICAgICAgICAyMDEsXG4gICAgICAgICAgOTksXG4gICAgICAgICAgMTk4LFxuICAgICAgICAgIDg2LFxuICAgICAgICAgIDE0LFxuICAgICAgICAgIDIyMCxcbiAgICAgICAgICAyNSxcbiAgICAgICAgICA0MSxcbiAgICAgICAgICAyMDksXG4gICAgICAgICAgODMsXG4gICAgICAgICAgMjMwLFxuICAgICAgICAgIDI2LFxuICAgICAgICAgIDEzNixcbiAgICAgICAgICAyNSxcbiAgICAgICAgICAxODIsXG4gICAgICAgICAgMTI3LFxuICAgICAgICAgIDY4LFxuICAgICAgICAgIDIyNyxcbiAgICAgICAgICA0NFxuICAgICAgICBdXG4gICAgICB9XG4gICAgfSxcbiAgICBcInNpZ25hdHVyZVwiOiB7XG4gICAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICAgIFwiZGF0YVwiOiBbXG4gICAgICAgIDEyLFxuICAgICAgICA2NCxcbiAgICAgICAgMjA1LFxuICAgICAgICA5MSxcbiAgICAgICAgMTE5LFxuICAgICAgICA5MyxcbiAgICAgICAgMjI0LFxuICAgICAgICAyNTUsXG4gICAgICAgIDEwMCxcbiAgICAgICAgMjEwLFxuICAgICAgICAxNDksXG4gICAgICAgIDI3LFxuICAgICAgICAxODksXG4gICAgICAgIDE3MSxcbiAgICAgICAgMTczLFxuICAgICAgICAxNjMsXG4gICAgICAgIDE1LFxuICAgICAgICAxOTgsXG4gICAgICAgIDMwLFxuICAgICAgICAxNjgsXG4gICAgICAgIDI0NSxcbiAgICAgICAgMzAsXG4gICAgICAgIDIyNCxcbiAgICAgICAgMTIsXG4gICAgICAgIDIwOSxcbiAgICAgICAgMTQ2LFxuICAgICAgICAyMDYsXG4gICAgICAgIDczLFxuICAgICAgICAxNDcsXG4gICAgICAgIDQwLFxuICAgICAgICA2MixcbiAgICAgICAgMjM2LFxuICAgICAgICAyMDgsXG4gICAgICAgIDI1MixcbiAgICAgICAgMTM4LFxuICAgICAgICAyMjAsXG4gICAgICAgIDcyLFxuICAgICAgICAxOTksXG4gICAgICAgIDM3LFxuICAgICAgICAzLFxuICAgICAgICAxMzAsXG4gICAgICAgIDIxMyxcbiAgICAgICAgNzYsXG4gICAgICAgIDE5OCxcbiAgICAgICAgMTE3LFxuICAgICAgICAxNDUsXG4gICAgICAgIDEzMCxcbiAgICAgICAgODMsXG4gICAgICAgIDI1LFxuICAgICAgICAyMzksXG4gICAgICAgIDY1LFxuICAgICAgICAyMDksXG4gICAgICAgIDE5LFxuICAgICAgICAxNTcsXG4gICAgICAgIDIxMixcbiAgICAgICAgNDIsXG4gICAgICAgIDE5NCxcbiAgICAgICAgOTEsXG4gICAgICAgIDE0MyxcbiAgICAgICAgNTQsXG4gICAgICAgIDI0LFxuICAgICAgICA3NCxcbiAgICAgICAgMjMyLFxuICAgICAgICAxMzBcbiAgICAgIF1cbiAgICB9LFxuICAgIFwia2V5SWRcIjogMVxuICB9LFxuICBcInJlZ2lzdHJhdGlvbklkXCI6IDI0NSxcbiAgXCJhZHZTZWNyZXRLZXlcIjogXCJ5Nm8zYTcyS1paS3o1eVhVbXZJZ3R1VlBvN2FzYW1YcEdOSCtjRzJMN2tnPVwiLFxuICBcInByb2Nlc3NlZEhpc3RvcnlNZXNzYWdlc1wiOiBbXSxcbiAgXCJuZXh0UHJlS2V5SWRcIjogMzEsXG4gIFwiZmlyc3RVbnVwbG9hZGVkUHJlS2V5SWRcIjogMzEsXG4gIFwiYWNjb3VudFN5bmNDb3VudGVyXCI6IDAsXG4gIFwiYWNjb3VudFNldHRpbmdzXCI6IHtcbiAgICBcInVuYXJjaGl2ZUNoYXRzXCI6IGZhbHNlXG4gIH0sXG4gIFwiZGV2aWNlSWRcIjogXCI0SU9Sb3RRdFJxMkZoZ0oyaG9iRzJBXCIsXG4gIFwicGhvbmVJZFwiOiBcIjI1YmY4OWJlLTk3NDQtNGM4NC1iZTA2LTIyNTBhMWQzMDlkZVwiLFxuICBcImlkZW50aXR5SWRcIjoge1xuICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgIFwiZGF0YVwiOiBbXG4gICAgICAxMTIsXG4gICAgICAxMjQsXG4gICAgICAyMDgsXG4gICAgICAzMyxcbiAgICAgIDEyOCxcbiAgICAgIDIwLFxuICAgICAgMTgwLFxuICAgICAgMjQ0LFxuICAgICAgMTgwLFxuICAgICAgMjQyLFxuICAgICAgMTc2LFxuICAgICAgMjM0LFxuICAgICAgNTgsXG4gICAgICAxNTcsXG4gICAgICAxOTQsXG4gICAgICAyMDQsXG4gICAgICAxOTgsXG4gICAgICAxMDEsXG4gICAgICAxNTEsXG4gICAgICAxMVxuICAgIF1cbiAgfSxcbiAgXCJyZWdpc3RlcmVkXCI6IHRydWUsXG4gIFwiYmFja3VwVG9rZW5cIjoge1xuICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgIFwiZGF0YVwiOiBbXG4gICAgICAxMjEsXG4gICAgICAxMDUsXG4gICAgICA2NCxcbiAgICAgIDEyNSxcbiAgICAgIDE1MCxcbiAgICAgIDExOSxcbiAgICAgIDE1NixcbiAgICAgIDkyLFxuICAgICAgMTM1LFxuICAgICAgMzksXG4gICAgICA4MCxcbiAgICAgIDE3NyxcbiAgICAgIDIwNCxcbiAgICAgIDk0LFxuICAgICAgMTg1LFxuICAgICAgMTQxLFxuICAgICAgMTgwLFxuICAgICAgMTcsXG4gICAgICAxMjYsXG4gICAgICAyMjlcbiAgICBdXG4gIH0sXG4gIFwicmVnaXN0cmF0aW9uXCI6IHt9LFxuICBcInBhaXJpbmdDb2RlXCI6IFwiTkdKMlJTNTFcIixcbiAgXCJtZVwiOiB7XG4gICAgXCJpZFwiOiBcIjIzNDgwNzg1ODI2Mjc6NzhAcy53aGF0c2FwcC5uZXRcIixcbiAgICBcImxpZFwiOiBcIjEyOTA5ODU2MzIzMTg0Njo3OEBsaWRcIlxuICB9LFxuICBcImFjY291bnRcIjoge1xuICAgIFwiZGV0YWlsc1wiOiBcIkNPK2YyZmtCRU52KzZiWUdHQUlnQUNnQVwiLFxuICAgIFwiYWNjb3VudFNpZ25hdHVyZUtleVwiOiBcIlJLenBwdnNKY2ZMbVpueGE3L21wc2dsTWxOd2I4Q1JWaFhCdGIwakVSQjA9XCIsXG4gICAgXCJhY2NvdW50U2lnbmF0dXJlXCI6IFwiSDlidEwzZ2FxUTVMeGFqYm9oaEJRR2xwT1MwazRQSWx2U21WQWRnQXZMd3l4bEczWStkZjQ0ODFNUHJLYjZrUksyZzYvZitsRDhZQlp6SlFIeEFKQVE9PVwiLFxuICAgIFwiZGV2aWNlU2lnbmF0dXJlXCI6IFwiTnFST29VU0E3MDY3NW55aCs2SlVtdDIzNVlrMStBL0VHUVFyakJFY0pkbUZIMGxTZStsVjhOU3NPZDcreHNpMkwycDI2dUFZcURyQ1NyMGd6czlRaXc9PVwiXG4gIH0sXG4gIFwic2lnbmFsSWRlbnRpdGllc1wiOiBbXG4gICAge1xuICAgICAgXCJpZGVudGlmaWVyXCI6IHtcbiAgICAgICAgXCJuYW1lXCI6IFwiMjM0ODA3ODU4MjYyNzo3OEBzLndoYXRzYXBwLm5ldFwiLFxuICAgICAgICBcImRldmljZUlkXCI6IDBcbiAgICAgIH0sXG4gICAgICBcImlkZW50aWZpZXJLZXlcIjoge1xuICAgICAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgICA1LFxuICAgICAgICAgIDY4LFxuICAgICAgICAgIDE3MixcbiAgICAgICAgICAyMzMsXG4gICAgICAgICAgMTY2LFxuICAgICAgICAgIDI1MSxcbiAgICAgICAgICA5LFxuICAgICAgICAgIDExMyxcbiAgICAgICAgICAyNDIsXG4gICAgICAgICAgMjMwLFxuICAgICAgICAgIDEwMixcbiAgICAgICAgICAxMjQsXG4gICAgICAgICAgOTAsXG4gICAgICAgICAgMjM5LFxuICAgICAgICAgIDI0OSxcbiAgICAgICAgICAxNjksXG4gICAgICAgICAgMTc4LFxuICAgICAgICAgIDksXG4gICAgICAgICAgNzYsXG4gICAgICAgICAgMTQ4LFxuICAgICAgICAgIDIyMCxcbiAgICAgICAgICAyNyxcbiAgICAgICAgICAyNDAsXG4gICAgICAgICAgMzYsXG4gICAgICAgICAgODUsXG4gICAgICAgICAgMTMzLFxuICAgICAgICAgIDExMixcbiAgICAgICAgICAxMDksXG4gICAgICAgICAgMTExLFxuICAgICAgICAgIDcyLFxuICAgICAgICAgIDE5NixcbiAgICAgICAgICA2OCxcbiAgICAgICAgICAyOVxuICAgICAgICBdXG4gICAgICB9XG4gICAgfVxuICBdLFxuICBcInBsYXRmb3JtXCI6IFwiYW5kcm9pZFwiLFxuICBcImxhc3RBY2NvdW50U3luY1RpbWVzdGFtcFwiOiAxNzI1NTk1NDg3LFxuICBcIm15QXBwU3RhdGVLZXlJZFwiOiBcIkFBQUFBS1FNXCJcbn0iLAogICJhcHAtc3RhdGUtc3luYy1rZXktQUFBQUFLUU0uanNvbiI6ICJ7XCJrZXlEYXRhXCI6XCJSc2pYdENEdVd1SzVCaEpLdGZqVHZHTS9hR1U0ZzNZZFdOWjQvRndobS9nPVwiLFwiZmluZ2VycHJpbnRcIjp7XCJyYXdJZFwiOjUyMzY1MzEwMSxcImN1cnJlbnRJbmRleFwiOjEsXCJkZXZpY2VJbmRleGVzXCI6WzAsMV19LFwidGltZXN0YW1wXCI6XCIwXCJ9Igp9"  // PUT your SESSION_ID 


module.exports = {

  menu: process.env.MENU || "", /**  Available @MENU @Schemes 1: Aztec_Md, 2: A17_Md, 3: Suhail-Md Default ---------- If Not Choose then it Randomely Pic One Of Them Each time **/

  HANDLERS: process.env.PREFIX  || ".",
  BRANCH  : process.env.BRANCH  || "main",
  VERSION : process.env.VERSION || "1.0.1-developement-x",
  caption : global.caption || "" , // ```『 ᴘᴏᴡᴇʀᴇᴅ ʙʏ sᴜʜᴀɪʟ²²¹-ᴍᴅ 』```", //*『sᴜʙsᴄʀɪʙᴇ • sᴜʜᴀɪʟ ᴛᴇᴄʜ』*\n youtube.com/@suhailtechinfo0"),
 
  author : process.env.PACK_AUTHER|| "★彡[ᴏɴʟʏ_ᴏɴᴇ_🥇ᴇᴍᴘɪʀᴇ]彡★",
  packname: process.env.PACK_NAME || "Sticker by",
  botname : process.env.BOT_NAME  || "Empire_Md",
  ownername:process.env.OWNER_NAME|| "★彡[ᴏɴʟʏ_ᴏɴᴇ_🥇ᴇᴍᴘɪʀᴇ]彡★",


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
