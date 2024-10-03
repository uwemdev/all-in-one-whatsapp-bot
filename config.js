const fs = require('fs-extra')
if (fs.existsSync('.env')) require('dotenv').config({ path: __dirname+'/.env' })


//═══════[Required Variables]════════\\
global.audio= "" ;  
global.video= "" ;
global.port =process.env.PORT 
global.appUrl=process.env.APP_URL || ""     // put your deploy app/bot url here, for 24/7 for (render , koyeb, glitch)
global.email ="uwemdev@hotmail.com"
global.location="Nigeria,Akwaibom,Uyo."


global.mongodb= process.env.MONGODB_URI || ""
global.allowJids= process.env.ALLOW_JID || "null" 
global.blockJids= process.env.BLOCK_JID || "null"
global.DATABASE_URL = process.env.DATABASE_URL || ""

global.timezone= process.env.TZ || process.env.TIME_ZONE || "Nigeria/Akwaibom/uyo";
global.github=process.env.GITHUB|| "https://github.com/uwemdev/all-in-one-whatsapp-bot";
global.gurl  =process.env.GURL  || "https://api.whatsapp.com/send?phone=2348110572387&text=Hi%20Uwem%2C";
global.website=process.env.GURL || "https://uwemdev.com" ; 
global.THUMB_IMAGE = process.env.THUMB_IMAGE || process.env.IMAGE || "https://uwemdev.com/storage/home/about-file-1724092734.jpg" ; // SET LOGO FOR IMAGE 
global.caption = process.env.CAPTION || global.caption || "Uwemdev" 


global.devs = "2348110572387" // Developer Contact
global.sudo = process.env.SUDO ? process.env.SUDO.replace(/[\s+]/g, '') : "null";
global.owner= process.env.OWNER_NUMBER ? process.env.OWNER_NUMBER.replace(/[\s+]/g, '') : "2348110572387";




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


global.SESSION_ID = process.env.SESSION_ID  || "SUHAIL_17_46_10_03_ewogICJjcmVkcy5qc29uIjogIntcbiAgXCJub2lzZUtleVwiOiB7XG4gICAgXCJwcml2YXRlXCI6IHtcbiAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgOTYsXG4gICAgICAgIDI0MCxcbiAgICAgICAgNTksXG4gICAgICAgIDIzNixcbiAgICAgICAgMTYxLFxuICAgICAgICA0NixcbiAgICAgICAgMTQ4LFxuICAgICAgICAzNSxcbiAgICAgICAgMTc2LFxuICAgICAgICAxMCxcbiAgICAgICAgNTksXG4gICAgICAgIDI4LFxuICAgICAgICA2OCxcbiAgICAgICAgNTksXG4gICAgICAgIDAsXG4gICAgICAgIDE2MSxcbiAgICAgICAgMTI2LFxuICAgICAgICAyNyxcbiAgICAgICAgNjgsXG4gICAgICAgIDMsXG4gICAgICAgIDE5NCxcbiAgICAgICAgMTM4LFxuICAgICAgICAxNjcsXG4gICAgICAgIDI1MyxcbiAgICAgICAgMTE0LFxuICAgICAgICAxNzIsXG4gICAgICAgIDgzLFxuICAgICAgICAyMjAsXG4gICAgICAgIDI1MixcbiAgICAgICAgNDgsXG4gICAgICAgIDcsXG4gICAgICAgIDc5XG4gICAgICBdXG4gICAgfSxcbiAgICBcInB1YmxpY1wiOiB7XG4gICAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICAgIFwiZGF0YVwiOiBbXG4gICAgICAgIDE2OSxcbiAgICAgICAgNTMsXG4gICAgICAgIDIzOSxcbiAgICAgICAgMTcyLFxuICAgICAgICAxNTUsXG4gICAgICAgIDE4MixcbiAgICAgICAgNTcsXG4gICAgICAgIDE1NixcbiAgICAgICAgMTA4LFxuICAgICAgICAyMDgsXG4gICAgICAgIDE3NSxcbiAgICAgICAgMjA5LFxuICAgICAgICAyNTQsXG4gICAgICAgIDcyLFxuICAgICAgICAxMTIsXG4gICAgICAgIDgwLFxuICAgICAgICAyNSxcbiAgICAgICAgMTAsXG4gICAgICAgIDIzNSxcbiAgICAgICAgNDUsXG4gICAgICAgIDIwMSxcbiAgICAgICAgMjQsXG4gICAgICAgIDE4OCxcbiAgICAgICAgMjA1LFxuICAgICAgICAxMjYsXG4gICAgICAgIDI0MCxcbiAgICAgICAgMjA0LFxuICAgICAgICAxNTUsXG4gICAgICAgIDE1NixcbiAgICAgICAgMjQ2LFxuICAgICAgICAxODMsXG4gICAgICAgIDcyXG4gICAgICBdXG4gICAgfVxuICB9LFxuICBcInBhaXJpbmdFcGhlbWVyYWxLZXlQYWlyXCI6IHtcbiAgICBcInByaXZhdGVcIjoge1xuICAgICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgICBcImRhdGFcIjogW1xuICAgICAgICAxNzYsXG4gICAgICAgIDIyNixcbiAgICAgICAgMTI2LFxuICAgICAgICAyMjIsXG4gICAgICAgIDEyOCxcbiAgICAgICAgOTcsXG4gICAgICAgIDUxLFxuICAgICAgICA3OCxcbiAgICAgICAgMjEyLFxuICAgICAgICAyMyxcbiAgICAgICAgMjA4LFxuICAgICAgICAxMDQsXG4gICAgICAgIDI2LFxuICAgICAgICAxMTAsXG4gICAgICAgIDIxMyxcbiAgICAgICAgMjE4LFxuICAgICAgICAxMDQsXG4gICAgICAgIDE2MixcbiAgICAgICAgMTkzLFxuICAgICAgICAyMTEsXG4gICAgICAgIDE5MCxcbiAgICAgICAgNzYsXG4gICAgICAgIDkwLFxuICAgICAgICA2MSxcbiAgICAgICAgNzIsXG4gICAgICAgIDc1LFxuICAgICAgICAxODAsXG4gICAgICAgIDExOSxcbiAgICAgICAgMjI4LFxuICAgICAgICAyMTAsXG4gICAgICAgIDE0NSxcbiAgICAgICAgODVcbiAgICAgIF1cbiAgICB9LFxuICAgIFwicHVibGljXCI6IHtcbiAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgMzcsXG4gICAgICAgIDE4MSxcbiAgICAgICAgMjI0LFxuICAgICAgICAxNTgsXG4gICAgICAgIDYyLFxuICAgICAgICAzMyxcbiAgICAgICAgMTI2LFxuICAgICAgICA4MixcbiAgICAgICAgNDYsXG4gICAgICAgIDE3MyxcbiAgICAgICAgMTExLFxuICAgICAgICAyMDksXG4gICAgICAgIDEzMSxcbiAgICAgICAgMjQsXG4gICAgICAgIDE4NyxcbiAgICAgICAgMTExLFxuICAgICAgICA3MCxcbiAgICAgICAgMjQ1LFxuICAgICAgICAyMjcsXG4gICAgICAgIDEyNyxcbiAgICAgICAgNixcbiAgICAgICAgMTg3LFxuICAgICAgICA5NixcbiAgICAgICAgNyxcbiAgICAgICAgNTEsXG4gICAgICAgIDE4MSxcbiAgICAgICAgNTgsXG4gICAgICAgIDg4LFxuICAgICAgICAyOSxcbiAgICAgICAgMjUsXG4gICAgICAgIDExMixcbiAgICAgICAgOTdcbiAgICAgIF1cbiAgICB9XG4gIH0sXG4gIFwic2lnbmVkSWRlbnRpdHlLZXlcIjoge1xuICAgIFwicHJpdmF0ZVwiOiB7XG4gICAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICAgIFwiZGF0YVwiOiBbXG4gICAgICAgIDI0MCxcbiAgICAgICAgMjQ4LFxuICAgICAgICAxODAsXG4gICAgICAgIDU4LFxuICAgICAgICAzNyxcbiAgICAgICAgMTA3LFxuICAgICAgICAxMixcbiAgICAgICAgMTg4LFxuICAgICAgICAyMTQsXG4gICAgICAgIDIzNCxcbiAgICAgICAgMTA4LFxuICAgICAgICAxNzUsXG4gICAgICAgIDE0NCxcbiAgICAgICAgMjE5LFxuICAgICAgICAxMjUsXG4gICAgICAgIDgzLFxuICAgICAgICAxMjMsXG4gICAgICAgIDE4MixcbiAgICAgICAgMTQxLFxuICAgICAgICAxMzgsXG4gICAgICAgIDI3LFxuICAgICAgICA0MixcbiAgICAgICAgMjQsXG4gICAgICAgIDEwMCxcbiAgICAgICAgMjI1LFxuICAgICAgICAxNjAsXG4gICAgICAgIDE0MSxcbiAgICAgICAgOTMsXG4gICAgICAgIDU4LFxuICAgICAgICA4MyxcbiAgICAgICAgODQsXG4gICAgICAgIDkyXG4gICAgICBdXG4gICAgfSxcbiAgICBcInB1YmxpY1wiOiB7XG4gICAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICAgIFwiZGF0YVwiOiBbXG4gICAgICAgIDE1NixcbiAgICAgICAgMTAsXG4gICAgICAgIDM1LFxuICAgICAgICA2MCxcbiAgICAgICAgMjEwLFxuICAgICAgICA1MCxcbiAgICAgICAgMTY0LFxuICAgICAgICA0NCxcbiAgICAgICAgODQsXG4gICAgICAgIDg0LFxuICAgICAgICAyMTAsXG4gICAgICAgIDEwMyxcbiAgICAgICAgMjQ2LFxuICAgICAgICA3NSxcbiAgICAgICAgNjksXG4gICAgICAgIDE5NixcbiAgICAgICAgMTg0LFxuICAgICAgICAxODcsXG4gICAgICAgIDYsXG4gICAgICAgIDIsXG4gICAgICAgIDMsXG4gICAgICAgIDEyOCxcbiAgICAgICAgMjMyLFxuICAgICAgICA4MCxcbiAgICAgICAgMTIwLFxuICAgICAgICAxODIsXG4gICAgICAgIDMxLFxuICAgICAgICAyMzcsXG4gICAgICAgIDAsXG4gICAgICAgIDgzLFxuICAgICAgICAyNTEsXG4gICAgICAgIDk2XG4gICAgICBdXG4gICAgfVxuICB9LFxuICBcInNpZ25lZFByZUtleVwiOiB7XG4gICAgXCJrZXlQYWlyXCI6IHtcbiAgICAgIFwicHJpdmF0ZVwiOiB7XG4gICAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgICBcImRhdGFcIjogW1xuICAgICAgICAgIDE3NixcbiAgICAgICAgICAxOTMsXG4gICAgICAgICAgMTE3LFxuICAgICAgICAgIDI5LFxuICAgICAgICAgIDEzOCxcbiAgICAgICAgICAxMTcsXG4gICAgICAgICAgNjUsXG4gICAgICAgICAgMjIsXG4gICAgICAgICAgMTEsXG4gICAgICAgICAgNjQsXG4gICAgICAgICAgODcsXG4gICAgICAgICAgNjksXG4gICAgICAgICAgMTgzLFxuICAgICAgICAgIDExOSxcbiAgICAgICAgICAxODAsXG4gICAgICAgICAgMjQ2LFxuICAgICAgICAgIDEzNixcbiAgICAgICAgICAxNjQsXG4gICAgICAgICAgNDcsXG4gICAgICAgICAgMjI2LFxuICAgICAgICAgIDk2LFxuICAgICAgICAgIDgsXG4gICAgICAgICAgMTEwLFxuICAgICAgICAgIDE4NSxcbiAgICAgICAgICA5NyxcbiAgICAgICAgICAyNTEsXG4gICAgICAgICAgMTI0LFxuICAgICAgICAgIDg0LFxuICAgICAgICAgIDU1LFxuICAgICAgICAgIDcxLFxuICAgICAgICAgIDIzMyxcbiAgICAgICAgICA3MVxuICAgICAgICBdXG4gICAgICB9LFxuICAgICAgXCJwdWJsaWNcIjoge1xuICAgICAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgICAyNTAsXG4gICAgICAgICAgMTM2LFxuICAgICAgICAgIDEzMyxcbiAgICAgICAgICAyOCxcbiAgICAgICAgICAyNDIsXG4gICAgICAgICAgMTA2LFxuICAgICAgICAgIDEzLFxuICAgICAgICAgIDIzLFxuICAgICAgICAgIDEzNyxcbiAgICAgICAgICA4MCxcbiAgICAgICAgICAyNixcbiAgICAgICAgICAxNTUsXG4gICAgICAgICAgNTIsXG4gICAgICAgICAgMTc1LFxuICAgICAgICAgIDI0NixcbiAgICAgICAgICAxMDAsXG4gICAgICAgICAgMjUzLFxuICAgICAgICAgIDIzNCxcbiAgICAgICAgICAyMTEsXG4gICAgICAgICAgMTc5LFxuICAgICAgICAgIDI0OSxcbiAgICAgICAgICAyMDMsXG4gICAgICAgICAgNzUsXG4gICAgICAgICAgMTg2LFxuICAgICAgICAgIDIsXG4gICAgICAgICAgODcsXG4gICAgICAgICAgMjMzLFxuICAgICAgICAgIDE2MCxcbiAgICAgICAgICAyMTYsXG4gICAgICAgICAgOTksXG4gICAgICAgICAgMzUsXG4gICAgICAgICAgMjJcbiAgICAgICAgXVxuICAgICAgfVxuICAgIH0sXG4gICAgXCJzaWduYXR1cmVcIjoge1xuICAgICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgICBcImRhdGFcIjogW1xuICAgICAgICAxODIsXG4gICAgICAgIDE2NixcbiAgICAgICAgMjAyLFxuICAgICAgICAyNDYsXG4gICAgICAgIDE3OCxcbiAgICAgICAgOTYsXG4gICAgICAgIDI4LFxuICAgICAgICAxNCxcbiAgICAgICAgMTYsXG4gICAgICAgIDI0NyxcbiAgICAgICAgODUsXG4gICAgICAgIDE4NyxcbiAgICAgICAgODIsXG4gICAgICAgIDIyNixcbiAgICAgICAgMTc3LFxuICAgICAgICA2MCxcbiAgICAgICAgMTUsXG4gICAgICAgIDEsXG4gICAgICAgIDQyLFxuICAgICAgICAyMzYsXG4gICAgICAgIDM3LFxuICAgICAgICAyNTAsXG4gICAgICAgIDIzNSxcbiAgICAgICAgMjMzLFxuICAgICAgICAxNzksXG4gICAgICAgIDIzNCxcbiAgICAgICAgMTg0LFxuICAgICAgICA2NSxcbiAgICAgICAgMjQxLFxuICAgICAgICAyMSxcbiAgICAgICAgMTAzLFxuICAgICAgICAxMTgsXG4gICAgICAgIDI3LFxuICAgICAgICAyMTUsXG4gICAgICAgIDEyOSxcbiAgICAgICAgMTAsXG4gICAgICAgIDUwLFxuICAgICAgICAxMDgsXG4gICAgICAgIDc5LFxuICAgICAgICAxMTEsXG4gICAgICAgIDIxLFxuICAgICAgICAxNzUsXG4gICAgICAgIDY1LFxuICAgICAgICA2NSxcbiAgICAgICAgMTE0LFxuICAgICAgICAxODAsXG4gICAgICAgIDI1NCxcbiAgICAgICAgMTc0LFxuICAgICAgICAxNjIsXG4gICAgICAgIDEyMSxcbiAgICAgICAgMTA1LFxuICAgICAgICAxMDAsXG4gICAgICAgIDI1MixcbiAgICAgICAgMTIzLFxuICAgICAgICAyMjksXG4gICAgICAgIDEyNyxcbiAgICAgICAgMTIxLFxuICAgICAgICAxMixcbiAgICAgICAgMTQxLFxuICAgICAgICAyMzksXG4gICAgICAgIDEyNyxcbiAgICAgICAgMTU2LFxuICAgICAgICAxNDYsXG4gICAgICAgIDEyXG4gICAgICBdXG4gICAgfSxcbiAgICBcImtleUlkXCI6IDFcbiAgfSxcbiAgXCJyZWdpc3RyYXRpb25JZFwiOiAyNDQsXG4gIFwiYWR2U2VjcmV0S2V5XCI6IFwiV0QwMnozWW5FaWpxS1g1cndFY2FZOXpOOVNjQTVCc01xNnpQNXhkdmwvST1cIixcbiAgXCJwcm9jZXNzZWRIaXN0b3J5TWVzc2FnZXNcIjogW10sXG4gIFwibmV4dFByZUtleUlkXCI6IDMxLFxuICBcImZpcnN0VW51cGxvYWRlZFByZUtleUlkXCI6IDMxLFxuICBcImFjY291bnRTeW5jQ291bnRlclwiOiAwLFxuICBcImFjY291bnRTZXR0aW5nc1wiOiB7XG4gICAgXCJ1bmFyY2hpdmVDaGF0c1wiOiBmYWxzZVxuICB9LFxuICBcImRldmljZUlkXCI6IFwiMi1xNmg3Tk1ScFNReDJqS01xc21Nd1wiLFxuICBcInBob25lSWRcIjogXCJhYzdiODMxNy04MGZmLTRjNTMtOTFkNy1hMDM0MWRlZWE3NzVcIixcbiAgXCJpZGVudGl0eUlkXCI6IHtcbiAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICBcImRhdGFcIjogW1xuICAgICAgMTQ4LFxuICAgICAgMTgxLFxuICAgICAgNTksXG4gICAgICA0OSxcbiAgICAgIDY4LFxuICAgICAgMTk1LFxuICAgICAgNjEsXG4gICAgICAyMTUsXG4gICAgICAxMjIsXG4gICAgICAzOSxcbiAgICAgIDEzMCxcbiAgICAgIDIzMixcbiAgICAgIDEyMCxcbiAgICAgIDIwMixcbiAgICAgIDI4LFxuICAgICAgMTE5LFxuICAgICAgNjksXG4gICAgICAyNTAsXG4gICAgICAyMDYsXG4gICAgICAyMDVcbiAgICBdXG4gIH0sXG4gIFwicmVnaXN0ZXJlZFwiOiBmYWxzZSxcbiAgXCJiYWNrdXBUb2tlblwiOiB7XG4gICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgXCJkYXRhXCI6IFtcbiAgICAgIDE2NSxcbiAgICAgIDExMyxcbiAgICAgIDI0MCxcbiAgICAgIDcyLFxuICAgICAgMjM3LFxuICAgICAgMTQ2LFxuICAgICAgODEsXG4gICAgICAyMTksXG4gICAgICAxMzQsXG4gICAgICAxMzIsXG4gICAgICAxNjYsXG4gICAgICAxMTAsXG4gICAgICAxNjcsXG4gICAgICA2MixcbiAgICAgIDM5LFxuICAgICAgMTY3LFxuICAgICAgMjA3LFxuICAgICAgMzgsXG4gICAgICAzNCxcbiAgICAgIDE4OFxuICAgIF1cbiAgfSxcbiAgXCJyZWdpc3RyYXRpb25cIjoge30sXG4gIFwiYWNjb3VudFwiOiB7XG4gICAgXCJkZXRhaWxzXCI6IFwiQ05MTWoxZ1FoTEg3dHdZWUFTQUFLQUE9XCIsXG4gICAgXCJhY2NvdW50U2lnbmF0dXJlS2V5XCI6IFwicGZmMWVNa1d2M3RVMTdKc3AvaWp6blE3aWZ2VFVWZW1SeWFEM1B5UU9Gcz1cIixcbiAgICBcImFjY291bnRTaWduYXR1cmVcIjogXCJka1hraHRDd09LSzZjSThFeEpGL3dWK2g4bWhnM3BqWWtPenBkWEZTUFZ4ZkZaUGEvd09neE1lUU9pOGlKa1FtVWRZdWtiQ2dQc0FxMG1yejlSK1pBZz09XCIsXG4gICAgXCJkZXZpY2VTaWduYXR1cmVcIjogXCJYTFprQThGUDB2QlNySEN5NWtsYjVncFJTdmsrVUlKbFRiZEh3dnV1aVkraE4zVlpiT1RYSStYUGhzZDJ6czJSQ0E2Q0RGbHI1SmFpcHo3aUducE5EUT09XCJcbiAgfSxcbiAgXCJtZVwiOiB7XG4gICAgXCJpZFwiOiBcIjI2NjYyNTQyMDgwOjFAcy53aGF0c2FwcC5uZXRcIixcbiAgICBcImxpZFwiOiBcIjEyNTExMjgxNjgwMzk5OToxQGxpZFwiXG4gIH0sXG4gIFwic2lnbmFsSWRlbnRpdGllc1wiOiBbXG4gICAge1xuICAgICAgXCJpZGVudGlmaWVyXCI6IHtcbiAgICAgICAgXCJuYW1lXCI6IFwiMjY2NjI1NDIwODA6MUBzLndoYXRzYXBwLm5ldFwiLFxuICAgICAgICBcImRldmljZUlkXCI6IDBcbiAgICAgIH0sXG4gICAgICBcImlkZW50aWZpZXJLZXlcIjoge1xuICAgICAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgICA1LFxuICAgICAgICAgIDE2NSxcbiAgICAgICAgICAyNDcsXG4gICAgICAgICAgMjQ1LFxuICAgICAgICAgIDEyMCxcbiAgICAgICAgICAyMDEsXG4gICAgICAgICAgMjIsXG4gICAgICAgICAgMTkxLFxuICAgICAgICAgIDEyMyxcbiAgICAgICAgICA4NCxcbiAgICAgICAgICAyMTUsXG4gICAgICAgICAgMTc4LFxuICAgICAgICAgIDEwOCxcbiAgICAgICAgICAxNjcsXG4gICAgICAgICAgMjQ4LFxuICAgICAgICAgIDE2MyxcbiAgICAgICAgICAyMDYsXG4gICAgICAgICAgMTE2LFxuICAgICAgICAgIDU5LFxuICAgICAgICAgIDEzNyxcbiAgICAgICAgICAyNTEsXG4gICAgICAgICAgMjExLFxuICAgICAgICAgIDgxLFxuICAgICAgICAgIDg3LFxuICAgICAgICAgIDE2NixcbiAgICAgICAgICA3MSxcbiAgICAgICAgICAzOCxcbiAgICAgICAgICAxMzEsXG4gICAgICAgICAgMjIwLFxuICAgICAgICAgIDI1MixcbiAgICAgICAgICAxNDQsXG4gICAgICAgICAgNTYsXG4gICAgICAgICAgOTFcbiAgICAgICAgXVxuICAgICAgfVxuICAgIH1cbiAgXSxcbiAgXCJwbGF0Zm9ybVwiOiBcImFuZHJvaWRcIixcbiAgXCJsYXN0QWNjb3VudFN5bmNUaW1lc3RhbXBcIjogMTcyNzk3NzYwOCxcbiAgXCJteUFwcFN0YXRlS2V5SWRcIjogXCJBQUFBQU82V1wiXG59IiwKICAiYXBwLXN0YXRlLXN5bmMta2V5LUFBQUFBTzZXLmpzb24iOiAie1wia2V5RGF0YVwiOlwiMWkwTVFXL2RGNmFVZUFsZE1YeDBKUnprYlpXc2o5ME5NM1ZRdkI4QWNpdz1cIixcImZpbmdlcnByaW50XCI6e1wicmF3SWRcIjoxODQ4MDQ5NDYsXCJjdXJyZW50SW5kZXhcIjoxLFwiZGV2aWNlSW5kZXhlc1wiOlswLDFdfSxcInRpbWVzdGFtcFwiOlwiMTcyNzk3NzYxNDc2NlwifSIKfQ=="  // PUT your SESSION_ID 


module.exports = {

  menu: process.env.MENU || "", /**  Available @MENU @Schemes 1: Aztec_Md, 2: A17_Md, 3: Suhail-Md Default ---------- If Not Choose then it Randomely Pic One Of Them Each time **/

  HANDLERS: process.env.PREFIX  || ".",
  BRANCH  : process.env.BRANCH  || "main",
  VERSION : process.env.VERSION || "1.0.1-developement-x",
  caption : global.caption || "" , // ```『 ᴘᴏᴡᴇʀᴇᴅ ʙʏ sᴜʜᴀɪʟ²²¹-ᴍᴅ 』```", //*『sᴜʙsᴄʀɪʙᴇ • sᴜʜᴀɪʟ ᴛᴇᴄʜ』*\n youtube.com/@suhailtechinfo0"),
 
  author : process.env.PACK_AUTHER|| "★彡UwemDev彡★",
  packname: process.env.PACK_NAME || "Sticker by",
  botname : process.env.BOT_NAME  || "UwemDev",
  ownername:process.env.OWNER_NAME|| "★彡UwemDev彡★",


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
