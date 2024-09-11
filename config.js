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
global.caption = process.env.CAPTION || global.caption || "Anonymous" 


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


global.SESSION_ID = process.env.SESSION_ID  || "SUHAIL_07_12_09_11_ewogICJjcmVkcy5qc29uIjogIntcbiAgXCJub2lzZUtleVwiOiB7XG4gICAgXCJwcml2YXRlXCI6IHtcbiAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgMjQsXG4gICAgICAgIDE5MSxcbiAgICAgICAgNDksXG4gICAgICAgIDIyMSxcbiAgICAgICAgMTY0LFxuICAgICAgICAxMSxcbiAgICAgICAgMjE2LFxuICAgICAgICAyMTcsXG4gICAgICAgIDIzNixcbiAgICAgICAgODYsXG4gICAgICAgIDcsXG4gICAgICAgIDM5LFxuICAgICAgICAyMDUsXG4gICAgICAgIDEyOCxcbiAgICAgICAgMTMwLFxuICAgICAgICAxNjUsXG4gICAgICAgIDExMyxcbiAgICAgICAgMjI0LFxuICAgICAgICA2MixcbiAgICAgICAgMTYxLFxuICAgICAgICAxNjksXG4gICAgICAgIDIzNixcbiAgICAgICAgMTQ2LFxuICAgICAgICA5NSxcbiAgICAgICAgOTAsXG4gICAgICAgIDY3LFxuICAgICAgICAyMDYsXG4gICAgICAgIDExMSxcbiAgICAgICAgMjMzLFxuICAgICAgICAxLFxuICAgICAgICAxMDYsXG4gICAgICAgIDk3XG4gICAgICBdXG4gICAgfSxcbiAgICBcInB1YmxpY1wiOiB7XG4gICAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICAgIFwiZGF0YVwiOiBbXG4gICAgICAgIDYsXG4gICAgICAgIDE1NSxcbiAgICAgICAgMjMwLFxuICAgICAgICAyNDUsXG4gICAgICAgIDc5LFxuICAgICAgICA0MixcbiAgICAgICAgMTc1LFxuICAgICAgICAyMzUsXG4gICAgICAgIDIyMCxcbiAgICAgICAgMzIsXG4gICAgICAgIDYsXG4gICAgICAgIDE3OCxcbiAgICAgICAgMjIzLFxuICAgICAgICAyMyxcbiAgICAgICAgMjE0LFxuICAgICAgICAyMjYsXG4gICAgICAgIDQ1LFxuICAgICAgICAyNTUsXG4gICAgICAgIDQsXG4gICAgICAgIDgsXG4gICAgICAgIDg4LFxuICAgICAgICAyNDIsXG4gICAgICAgIDcsXG4gICAgICAgIDIwLFxuICAgICAgICA0MCxcbiAgICAgICAgMjEsXG4gICAgICAgIDI0MixcbiAgICAgICAgNzQsXG4gICAgICAgIDIxMCxcbiAgICAgICAgODAsXG4gICAgICAgIDE5MixcbiAgICAgICAgMjdcbiAgICAgIF1cbiAgICB9XG4gIH0sXG4gIFwicGFpcmluZ0VwaGVtZXJhbEtleVBhaXJcIjoge1xuICAgIFwicHJpdmF0ZVwiOiB7XG4gICAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICAgIFwiZGF0YVwiOiBbXG4gICAgICAgIDg4LFxuICAgICAgICAxNjcsXG4gICAgICAgIDkxLFxuICAgICAgICAxOTMsXG4gICAgICAgIDc1LFxuICAgICAgICAyMCxcbiAgICAgICAgMjMwLFxuICAgICAgICAxOTksXG4gICAgICAgIDQyLFxuICAgICAgICAxMTEsXG4gICAgICAgIDYyLFxuICAgICAgICAxOTMsXG4gICAgICAgIDE0MyxcbiAgICAgICAgNDQsXG4gICAgICAgIDEzNCxcbiAgICAgICAgMTc0LFxuICAgICAgICAxNzYsXG4gICAgICAgIDEwNCxcbiAgICAgICAgMjQzLFxuICAgICAgICAyMzAsXG4gICAgICAgIDE0MCxcbiAgICAgICAgNjQsXG4gICAgICAgIDIzMixcbiAgICAgICAgMTQsXG4gICAgICAgIDE3LFxuICAgICAgICA3MyxcbiAgICAgICAgMjE4LFxuICAgICAgICAxMzIsXG4gICAgICAgIDIxNCxcbiAgICAgICAgMTQ3LFxuICAgICAgICAxMTcsXG4gICAgICAgIDg2XG4gICAgICBdXG4gICAgfSxcbiAgICBcInB1YmxpY1wiOiB7XG4gICAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICAgIFwiZGF0YVwiOiBbXG4gICAgICAgIDI0MSxcbiAgICAgICAgMjUwLFxuICAgICAgICAyNDMsXG4gICAgICAgIDQ2LFxuICAgICAgICAyMTUsXG4gICAgICAgIDYyLFxuICAgICAgICA4OCxcbiAgICAgICAgMTEzLFxuICAgICAgICA5OCxcbiAgICAgICAgMTcwLFxuICAgICAgICAxNjQsXG4gICAgICAgIDc3LFxuICAgICAgICA0OCxcbiAgICAgICAgMjE1LFxuICAgICAgICAyMDIsXG4gICAgICAgIDE5NSxcbiAgICAgICAgOTgsXG4gICAgICAgIDUxLFxuICAgICAgICAyNTMsXG4gICAgICAgIDY5LFxuICAgICAgICAxOTIsXG4gICAgICAgIDE5LFxuICAgICAgICAxNzcsXG4gICAgICAgIDE2NCxcbiAgICAgICAgMjM3LFxuICAgICAgICAxMTEsXG4gICAgICAgIDEwMyxcbiAgICAgICAgMTQzLFxuICAgICAgICAzMSxcbiAgICAgICAgMjAwLFxuICAgICAgICA0LFxuICAgICAgICA2M1xuICAgICAgXVxuICAgIH1cbiAgfSxcbiAgXCJzaWduZWRJZGVudGl0eUtleVwiOiB7XG4gICAgXCJwcml2YXRlXCI6IHtcbiAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgNDgsXG4gICAgICAgIDkwLFxuICAgICAgICA5MixcbiAgICAgICAgMTAwLFxuICAgICAgICA0OSxcbiAgICAgICAgMzEsXG4gICAgICAgIDg2LFxuICAgICAgICAyNTIsXG4gICAgICAgIDIxMSxcbiAgICAgICAgMTUzLFxuICAgICAgICAxNCxcbiAgICAgICAgOTcsXG4gICAgICAgIDEzNSxcbiAgICAgICAgMTA0LFxuICAgICAgICAyNDEsXG4gICAgICAgIDEzNixcbiAgICAgICAgMTgsXG4gICAgICAgIDE1NixcbiAgICAgICAgMTk2LFxuICAgICAgICAzMSxcbiAgICAgICAgMTI3LFxuICAgICAgICAxMzMsXG4gICAgICAgIDE4OCxcbiAgICAgICAgNzUsXG4gICAgICAgIDI0MyxcbiAgICAgICAgMTI5LFxuICAgICAgICA4MCxcbiAgICAgICAgMjksXG4gICAgICAgIDIxOCxcbiAgICAgICAgMjA4LFxuICAgICAgICAxODMsXG4gICAgICAgIDExNlxuICAgICAgXVxuICAgIH0sXG4gICAgXCJwdWJsaWNcIjoge1xuICAgICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgICBcImRhdGFcIjogW1xuICAgICAgICAxOTIsXG4gICAgICAgIDE1OSxcbiAgICAgICAgNzcsXG4gICAgICAgIDEyOSxcbiAgICAgICAgNzAsXG4gICAgICAgIDIyNixcbiAgICAgICAgNDksXG4gICAgICAgIDE0NCxcbiAgICAgICAgMTAzLFxuICAgICAgICAxOTksXG4gICAgICAgIDE3MixcbiAgICAgICAgOTAsXG4gICAgICAgIDE0OCxcbiAgICAgICAgMzAsXG4gICAgICAgIDI0NSxcbiAgICAgICAgMjAxLFxuICAgICAgICAyMTIsXG4gICAgICAgIDE2NSxcbiAgICAgICAgMTE2LFxuICAgICAgICAxNDgsXG4gICAgICAgIDIyLFxuICAgICAgICAyMDMsXG4gICAgICAgIDIyLFxuICAgICAgICA4MyxcbiAgICAgICAgMTg1LFxuICAgICAgICA1MyxcbiAgICAgICAgMTM3LFxuICAgICAgICA0MCxcbiAgICAgICAgODEsXG4gICAgICAgIDExLFxuICAgICAgICAxODYsXG4gICAgICAgIDE2XG4gICAgICBdXG4gICAgfVxuICB9LFxuICBcInNpZ25lZFByZUtleVwiOiB7XG4gICAgXCJrZXlQYWlyXCI6IHtcbiAgICAgIFwicHJpdmF0ZVwiOiB7XG4gICAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgICBcImRhdGFcIjogW1xuICAgICAgICAgIDEwNCxcbiAgICAgICAgICAyMjgsXG4gICAgICAgICAgMTI2LFxuICAgICAgICAgIDEyLFxuICAgICAgICAgIDI0MyxcbiAgICAgICAgICA2NSxcbiAgICAgICAgICAxMjIsXG4gICAgICAgICAgMCxcbiAgICAgICAgICA1NCxcbiAgICAgICAgICAyMzcsXG4gICAgICAgICAgMjIsXG4gICAgICAgICAgMjIyLFxuICAgICAgICAgIDIyOSxcbiAgICAgICAgICAxOTQsXG4gICAgICAgICAgMTkzLFxuICAgICAgICAgIDIwNSxcbiAgICAgICAgICAxNTgsXG4gICAgICAgICAgOTQsXG4gICAgICAgICAgMjM4LFxuICAgICAgICAgIDIwLFxuICAgICAgICAgIDE0NCxcbiAgICAgICAgICAyMTcsXG4gICAgICAgICAgMTE4LFxuICAgICAgICAgIDIzOSxcbiAgICAgICAgICAxMzgsXG4gICAgICAgICAgMjUsXG4gICAgICAgICAgMjEyLFxuICAgICAgICAgIDIxNixcbiAgICAgICAgICAyNDcsXG4gICAgICAgICAgMTY0LFxuICAgICAgICAgIDE0MyxcbiAgICAgICAgICAxMTJcbiAgICAgICAgXVxuICAgICAgfSxcbiAgICAgIFwicHVibGljXCI6IHtcbiAgICAgICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgICAgIFwiZGF0YVwiOiBbXG4gICAgICAgICAgMTgwLFxuICAgICAgICAgIDIxMixcbiAgICAgICAgICAxNjAsXG4gICAgICAgICAgMjUzLFxuICAgICAgICAgIDIzNixcbiAgICAgICAgICAyMjEsXG4gICAgICAgICAgMTQzLFxuICAgICAgICAgIDgwLFxuICAgICAgICAgIDMyLFxuICAgICAgICAgIDU5LFxuICAgICAgICAgIDExNSxcbiAgICAgICAgICAyMDUsXG4gICAgICAgICAgMTI2LFxuICAgICAgICAgIDIxNCxcbiAgICAgICAgICAyNDQsXG4gICAgICAgICAgMTk0LFxuICAgICAgICAgIDE1MixcbiAgICAgICAgICA5MixcbiAgICAgICAgICA5MyxcbiAgICAgICAgICAzMixcbiAgICAgICAgICAxMzIsXG4gICAgICAgICAgMTksXG4gICAgICAgICAgMjI0LFxuICAgICAgICAgIDIxNyxcbiAgICAgICAgICAyMjAsXG4gICAgICAgICAgMzEsXG4gICAgICAgICAgMTc0LFxuICAgICAgICAgIDIsXG4gICAgICAgICAgMTQ2LFxuICAgICAgICAgIDE5NSxcbiAgICAgICAgICA1MixcbiAgICAgICAgICAxMjNcbiAgICAgICAgXVxuICAgICAgfVxuICAgIH0sXG4gICAgXCJzaWduYXR1cmVcIjoge1xuICAgICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgICBcImRhdGFcIjogW1xuICAgICAgICA5MSxcbiAgICAgICAgMTg3LFxuICAgICAgICAyNDEsXG4gICAgICAgIDY2LFxuICAgICAgICAxOSxcbiAgICAgICAgMjA0LFxuICAgICAgICAyMjQsXG4gICAgICAgIDE5MixcbiAgICAgICAgMTA4LFxuICAgICAgICA4NSxcbiAgICAgICAgNTAsXG4gICAgICAgIDIxOSxcbiAgICAgICAgMTkxLFxuICAgICAgICA0NyxcbiAgICAgICAgMjI4LFxuICAgICAgICAyOCxcbiAgICAgICAgMTE0LFxuICAgICAgICAyMTgsXG4gICAgICAgIDE4NyxcbiAgICAgICAgNjEsXG4gICAgICAgIDQsXG4gICAgICAgIDYyLFxuICAgICAgICAxMSxcbiAgICAgICAgNDQsXG4gICAgICAgIDI0NSxcbiAgICAgICAgNCxcbiAgICAgICAgMTE4LFxuICAgICAgICAxNDUsXG4gICAgICAgIDEzLFxuICAgICAgICA3NyxcbiAgICAgICAgMjAwLFxuICAgICAgICA4NCxcbiAgICAgICAgMTY5LFxuICAgICAgICAxNjQsXG4gICAgICAgIDE5MyxcbiAgICAgICAgMTc1LFxuICAgICAgICAxMzksXG4gICAgICAgIDIxNCxcbiAgICAgICAgMTY2LFxuICAgICAgICAyNCxcbiAgICAgICAgMTY5LFxuICAgICAgICAxMTksXG4gICAgICAgIDc3LFxuICAgICAgICAxMixcbiAgICAgICAgMjUyLFxuICAgICAgICA5NSxcbiAgICAgICAgMjMyLFxuICAgICAgICA0MCxcbiAgICAgICAgMTY2LFxuICAgICAgICA3OSxcbiAgICAgICAgMjAwLFxuICAgICAgICAxOTIsXG4gICAgICAgIDE0OSxcbiAgICAgICAgNTUsXG4gICAgICAgIDE4NCxcbiAgICAgICAgMjMwLFxuICAgICAgICAxNjMsXG4gICAgICAgIDQ4LFxuICAgICAgICA4MixcbiAgICAgICAgMjUwLFxuICAgICAgICAyNDIsXG4gICAgICAgIDQwLFxuICAgICAgICAxNjIsXG4gICAgICAgIDEyOVxuICAgICAgXVxuICAgIH0sXG4gICAgXCJrZXlJZFwiOiAxXG4gIH0sXG4gIFwicmVnaXN0cmF0aW9uSWRcIjogOTIsXG4gIFwiYWR2U2VjcmV0S2V5XCI6IFwiV0ZmVTN5VnRKMHdKcVE5R1R6Z3Rpa0pvYWc4d1hMcENmRlhScXRDVGFmdz1cIixcbiAgXCJwcm9jZXNzZWRIaXN0b3J5TWVzc2FnZXNcIjogW10sXG4gIFwibmV4dFByZUtleUlkXCI6IDMxLFxuICBcImZpcnN0VW51cGxvYWRlZFByZUtleUlkXCI6IDMxLFxuICBcImFjY291bnRTeW5jQ291bnRlclwiOiAwLFxuICBcImFjY291bnRTZXR0aW5nc1wiOiB7XG4gICAgXCJ1bmFyY2hpdmVDaGF0c1wiOiBmYWxzZVxuICB9LFxuICBcImRldmljZUlkXCI6IFwiMTJHX2Y2QkdTQm05dHhza1hFZUY1UVwiLFxuICBcInBob25lSWRcIjogXCIzZDA4ODg3Ny1hMzQwLTQ4YzItOWQ5NS0yZmMxODhmYmMwZTJcIixcbiAgXCJpZGVudGl0eUlkXCI6IHtcbiAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICBcImRhdGFcIjogW1xuICAgICAgMjA1LFxuICAgICAgODQsXG4gICAgICAxMzEsXG4gICAgICAxMDUsXG4gICAgICAzNyxcbiAgICAgIDE3NCxcbiAgICAgIDE3LFxuICAgICAgNixcbiAgICAgIDIwLFxuICAgICAgMzQsXG4gICAgICAyNyxcbiAgICAgIDIzNyxcbiAgICAgIDE4MixcbiAgICAgIDEzNixcbiAgICAgIDEzOCxcbiAgICAgIDE0MyxcbiAgICAgIDIwNSxcbiAgICAgIDU0LFxuICAgICAgMjM4LFxuICAgICAgNDFcbiAgICBdXG4gIH0sXG4gIFwicmVnaXN0ZXJlZFwiOiB0cnVlLFxuICBcImJhY2t1cFRva2VuXCI6IHtcbiAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICBcImRhdGFcIjogW1xuICAgICAgMTc1LFxuICAgICAgMjI3LFxuICAgICAgODMsXG4gICAgICAxOTMsXG4gICAgICAxOCxcbiAgICAgIDEwNixcbiAgICAgIDIyNyxcbiAgICAgIDk4LFxuICAgICAgMTYwLFxuICAgICAgMjMxLFxuICAgICAgMTQ2LFxuICAgICAgMTIwLFxuICAgICAgMCxcbiAgICAgIDg2LFxuICAgICAgMjQsXG4gICAgICAxNTAsXG4gICAgICA2OSxcbiAgICAgIDc3LFxuICAgICAgMjAsXG4gICAgICA5NVxuICAgIF1cbiAgfSxcbiAgXCJyZWdpc3RyYXRpb25cIjoge30sXG4gIFwicGFpcmluZ0NvZGVcIjogXCJEM1kyMjJCN1wiLFxuICBcIm1lXCI6IHtcbiAgICBcImlkXCI6IFwiMjI0NjY5MDk0ODY1OjhAcy53aGF0c2FwcC5uZXRcIixcbiAgICBcImxpZFwiOiBcIjIyNDIyMzU2NTk4Mzg4Mzo4QGxpZFwiXG4gIH0sXG4gIFwiYWNjb3VudFwiOiB7XG4gICAgXCJkZXRhaWxzXCI6IFwiQ0lMZ29EQVEzWVdGdHdZWUFpQUFLQUE9XCIsXG4gICAgXCJhY2NvdW50U2lnbmF0dXJlS2V5XCI6IFwiSW04Q0duUjBjb2pjU3lvMWMzNXQzNHBuN1RtNXY1aTdsbXI4KzlyWnJSND1cIixcbiAgICBcImFjY291bnRTaWduYXR1cmVcIjogXCJkVUM2NmJwQUVIaDdiZTJDYU9qellHR0kzdU9UNE41VVdTVXdMUUpqVG9VdGhwUHZEZjNMWGN0REJuc1Y1UjFwZ0s5di9GMmlUQkFMNVJNWjBrK29CQT09XCIsXG4gICAgXCJkZXZpY2VTaWduYXR1cmVcIjogXCI0ci9aYW5RSTkycnVUVzRIQ3Uzelc5OWhzbk9wNGVVQTJuYlpCRzQ0THZHdjR0RkhlSEpLYlhEeU5oQkZDbzJGb0xnTHZGRzh3RFhoMzk5aTVqRjJpdz09XCJcbiAgfSxcbiAgXCJzaWduYWxJZGVudGl0aWVzXCI6IFtcbiAgICB7XG4gICAgICBcImlkZW50aWZpZXJcIjoge1xuICAgICAgICBcIm5hbWVcIjogXCIyMjQ2NjkwOTQ4NjU6OEBzLndoYXRzYXBwLm5ldFwiLFxuICAgICAgICBcImRldmljZUlkXCI6IDBcbiAgICAgIH0sXG4gICAgICBcImlkZW50aWZpZXJLZXlcIjoge1xuICAgICAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgICA1LFxuICAgICAgICAgIDM0LFxuICAgICAgICAgIDExMSxcbiAgICAgICAgICAyLFxuICAgICAgICAgIDI2LFxuICAgICAgICAgIDExNixcbiAgICAgICAgICAxMTYsXG4gICAgICAgICAgMTE0LFxuICAgICAgICAgIDEzNixcbiAgICAgICAgICAyMjAsXG4gICAgICAgICAgNzUsXG4gICAgICAgICAgNDIsXG4gICAgICAgICAgNTMsXG4gICAgICAgICAgMTE1LFxuICAgICAgICAgIDEyNixcbiAgICAgICAgICAxMDksXG4gICAgICAgICAgMjIzLFxuICAgICAgICAgIDEzOCxcbiAgICAgICAgICAxMDMsXG4gICAgICAgICAgMjM3LFxuICAgICAgICAgIDU3LFxuICAgICAgICAgIDE4NSxcbiAgICAgICAgICAxOTEsXG4gICAgICAgICAgMTUyLFxuICAgICAgICAgIDE4NyxcbiAgICAgICAgICAxNTAsXG4gICAgICAgICAgMTA2LFxuICAgICAgICAgIDI1MixcbiAgICAgICAgICAyNTEsXG4gICAgICAgICAgMjE4LFxuICAgICAgICAgIDIxNyxcbiAgICAgICAgICAxNzMsXG4gICAgICAgICAgMzBcbiAgICAgICAgXVxuICAgICAgfVxuICAgIH1cbiAgXSxcbiAgXCJwbGF0Zm9ybVwiOiBcImFuZHJvaWRcIixcbiAgXCJsYXN0QWNjb3VudFN5bmNUaW1lc3RhbXBcIjogMTcyNjAzODc1NCxcbiAgXCJteUFwcFN0YXRlS2V5SWRcIjogXCJBQUFBQUtUUFwiXG59IiwKICAiYXBwLXN0YXRlLXN5bmMta2V5LUFBQUFBS1RQLmpzb24iOiAie1wia2V5RGF0YVwiOlwiOWdveC9kL3Q5Qjh4bk90Q2NNM2pUcW05TVFSMHR0bUdJYlhremJudUswST1cIixcImZpbmdlcnByaW50XCI6e1wicmF3SWRcIjoxMDExOTk4NzQsXCJjdXJyZW50SW5kZXhcIjoxLFwiZGV2aWNlSW5kZXhlc1wiOlswLDFdfSxcInRpbWVzdGFtcFwiOlwiMTcyNTk3MzY1Mzg5MlwifSIKfQ=="  // PUT your SESSION_ID 


module.exports = {

  menu: process.env.MENU || "", /**  Available @MENU @Schemes 1: Aztec_Md, 2: A17_Md, 3: Suhail-Md Default ---------- If Not Choose then it Randomely Pic One Of Them Each time **/

  HANDLERS: process.env.PREFIX  || ".",
  BRANCH  : process.env.BRANCH  || "main",
  VERSION : process.env.VERSION || "1.0.1-developement-x",
  caption : global.caption || "" , // ```『 ᴘᴏᴡᴇʀᴇᴅ ʙʏ sᴜʜᴀɪʟ²²¹-ᴍᴅ 』```", //*『sᴜʙsᴄʀɪʙᴇ • sᴜʜᴀɪʟ ᴛᴇᴄʜ』*\n youtube.com/@suhailtechinfo0"),
 
  author : process.env.PACK_AUTHER|| "🅰🅽🅾🅽🆈🅼🅾🆄🆂",
  packname: process.env.PACK_NAME || "Sticker by 🅰🅽🅾🅽🆈🅼🅾🆄🆂",
  botname : process.env.BOT_NAME  || "🅰🅽🅾🅽🆈🅼🅾🆄🆂 the bot",
  ownername:process.env.OWNER_NAME|| 🅰🅽🅾🅽🆈🅼🅾🆄🆂"",


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
