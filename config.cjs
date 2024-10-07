// config.js
const fs = require("fs");
require("dotenv").config();

const config = {
  SESSION_ID: process.env.SESSION_ID || "eyJub2lzZUtleSI6eyJwcml2YXRlIjp7InR5cGUiOiJCdWZmZXIiLCJkYXRhIjoibU1xRXdrcTljUXN1MGhFSEtRYVBzakJ0T2pmVjR6eW5SODdHck5xRGNFdz0ifSwicHVibGljIjp7InR5cGUiOiJCdWZmZXIiLCJkYXRhIjoiYjgxM2ZVMU5vMUZTTElhNU1CSWkzSk9ya1VTenpTRktJWXB6Vk9HTGpRVT0ifX0sInBhaXJpbmdFcGhlbWVyYWxLZXlQYWlyIjp7InByaXZhdGUiOnsidHlwZSI6IkJ1ZmZlciIsImRhdGEiOiJLTk4zbjkyOGdkT0ZRUGt6R0hVRGdKWThSY3Fta2FXZ1RzYmVoV21ZVDJ3PSJ9LCJwdWJsaWMiOnsidHlwZSI6IkJ1ZmZlciIsImRhdGEiOiJ2WlJ1NCtnekdIVFpYRnNuQko5Vyt1WHpuL3pmRisyMksxOVp4QWJXMUZVPSJ9fSwic2lnbmVkSWRlbnRpdHlLZXkiOnsicHJpdmF0ZSI6eyJ0eXBlIjoiQnVmZmVyIiwiZGF0YSI6IlFEU1F6SFVaZjRsRkg1UVk3VUE4b0Joa0RXSy96dmErdTF6aFN6VnlrM0k9In0sInB1YmxpYyI6eyJ0eXBlIjoiQnVmZmVyIiwiZGF0YSI6IlhUN1RvRmlPSWJYNG1iVmxMbWFQV25vS2VJaGZsQ3ZRSjZybFpLMnBzalk9In19LCJzaWduZWRQcmVLZXkiOnsia2V5UGFpciI6eyJwcml2YXRlIjp7InR5cGUiOiJCdWZmZXIiLCJkYXRhIjoiK1BSYXpYWjJHME9oRHlRNDI1b1QxRjlrU2dWOTFFWWpTNGdBcktTSG9tRT0ifSwicHVibGljIjp7InR5cGUiOiJCdWZmZXIiLCJkYXRhIjoiMDBHZm16QVB0YjRhZkZtZjExakRnOWN4U3A0dzVMSjQ5WlhReUJUcnRUYz0ifX0sInNpZ25hdHVyZSI6eyJ0eXBlIjoiQnVmZmVyIiwiZGF0YSI6IlhmQTA3ZEFIZEhOTWlzS0RISzBLWTlTOGpoTmNaa2Z1M1BTclpHa0k5RmgvcG1RQ0x3L0dDZGxkNmxzNktKOFkrRTNzQVMyM2JxQnBkSDVJMmpydGhRPT0ifSwia2V5SWQiOjF9LCJyZWdpc3RyYXRpb25JZCI6MTgyLCJhZHZTZWNyZXRLZXkiOiJ4clJxUHAzdFBpZElUeTlJSWwra0xLcy9aVFNQb3crTWRySStoWHZSN3dzPSIsInByb2Nlc3NlZEhpc3RvcnlNZXNzYWdlcyI6W10sIm5leHRQcmVLZXlJZCI6MzEsImZpcnN0VW51cGxvYWRlZFByZUtleUlkIjozMSwiYWNjb3VudFN5bmNDb3VudGVyIjowLCJhY2NvdW50U2V0dGluZ3MiOnsidW5hcmNoaXZlQ2hhdHMiOmZhbHNlfSwiZGV2aWNlSWQiOiJCSndqUFhZb1RCQ0Q0TTlJOURTS3F3IiwicGhvbmVJZCI6IjU4ZWNkNmI4LTVlZDEtNGQ0Mi1iNDdiLTc3MmFjOGNkOWUxYiIsImlkZW50aXR5SWQiOnsidHlwZSI6IkJ1ZmZlciIsImRhdGEiOiIzdGJFaTBmTTRIOGQzVU50N0JIVDVPTTZta0E9In0sInJlZ2lzdGVyZWQiOnRydWUsImJhY2t1cFRva2VuIjp7InR5cGUiOiJCdWZmZXIiLCJkYXRhIjoiUDZaME1tbFg0MGtzazZyWU54b05Lc2pBS3RrPSJ9LCJyZWdpc3RyYXRpb24iOnt9LCJwYWlyaW5nQ29kZSI6IlNZQkg2VjhEIiwibWUiOnsiaWQiOiIxODA5NDI0ODIzNDoxOUBzLndoYXRzYXBwLm5ldCJ9LCJhY2NvdW50Ijp7ImRldGFpbHMiOiJDUEtYN29NREVOYlZqN2dHR0FJZ0FDZ0EiLCJhY2NvdW50U2lnbmF0dXJlS2V5IjoiT3N6L1hSajIvNFpjKzFLWEZZQ2xsOXZCMzBTNWM3T0JkQnBaK2gxa2p6Zz0iLCJhY2NvdW50U2lnbmF0dXJlIjoidHllYjVNdlJTUDkxcmVwR0FXZjNOL1Z0bGU0cUMwamRrTTBzaTQ0N2RDWGxjMjhLVEJ2bUYwZmtBZXV3UGFQZU1LYVh4NmVDME5DWDdRUC82US95REE9PSIsImRldmljZVNpZ25hdHVyZSI6IlZPRy9FYXdZK0UyRE9xZlVsdnZQMzQ3K1FaNjk3c2tuUUVhTEdhQ3pkMjBDbjZJVFlEcWhRZU9WRWYxUG5qYTk5OVVyMm1iRTRuM1VNVDN1eXRtTGpnPT0ifSwic2lnbmFsSWRlbnRpdGllcyI6W3siaWRlbnRpZmllciI6eyJuYW1lIjoiMTgwOTQyNDgyMzQ6MTlAcy53aGF0c2FwcC5uZXQiLCJkZXZpY2VJZCI6MH0sImlkZW50aWZpZXJLZXkiOnsidHlwZSI6IkJ1ZmZlciIsImRhdGEiOiJCVHJNLzEwWTl2K0dYUHRTbHhXQXBaZmJ3ZDlFdVhPemdYUWFXZm9kWkk4NCJ9fV0sInBsYXRmb3JtIjoiYW5kcm9pZCIsImxhc3RBY2NvdW50U3luY1RpbWVzdGFtcCI6MTcyODMwOTk4NiwibXlBcHBTdGF0ZUtleUlkIjoiQUFBQUFHL3QifQ==",
  PREFIX: process.env.PREFIX || '.',
  AUTO_STATUS_SEEN: process.env.AUTO_STATUS_SEEN !== undefined ? process.env.AUTO_STATUS_SEEN === 'true' : true, 
  AUTO_DL: process.env.AUTO_DL !== undefined ? process.env.AUTO_DL === 'true' : false,
  AUTO_READ: process.env.AUTO_READ !== undefined ? process.env.AUTO_READ === 'true' : false,
  AUTO_TYPING: process.env.AUTO_TYPING !== undefined ? process.env.AUTO_TYPING === 'true' : false,
  AUTO_RECORDING: process.env.AUTO_RECORDING !== undefined ? process.env.AUTO_RECORDING === 'true' : false,
  ALWAYS_ONLINE: process.env.ALWAYS_ONLINE !== undefined ? process.env.ALWAYS_ONLINE === 'true' : false,
  AUTO_REACT: process.env.AUTO_REACT !== undefined ? process.env.AUTO_REACT === 'true' : false,
   /*auto block only for 212 */
  AUTO_BLOCK: process.env.AUTO_BLOCK !== undefined ? process.env.AUTO_BLOCK === 'true' : true,
  
  
  REJECT_CALL: process.env.REJECT_CALL !== undefined ? process.env.REJECT_CALL === 'true' : false, 
  NOT_ALLOW: process.env.NOT_ALLOW !== undefined ? process.env.NOT_ALLOW === 'true' : true,
  MODE: process.env.MODE || "privé",
  OWNER_NAME: process.env.OWNER_NAME || "𓄂⍣⃝𝐆𝚯𝐃𝄟✮͢≛ 𝐒𝚫𝐒𝐔𝐊𝚵⃝𝄟✮⃝👑",
  OWNER_NUMBER: process.env.OWNER_NUMBER || "18094248234",
  GEMINI_KEY: process.env.GEMINI_KEY || "AIzaSyCUPaxfIdZawsKZKqCqJcC-GWiQPCXKTDc",
  WELCOME: process.env.WELCOME !== undefined ? process.env.WELCOME === 'true' : false, 
};


module.exports = config;
