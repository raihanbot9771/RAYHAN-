module.exports.config = {
 name: "rrrk2",
 version: "1.0.0",
 hasPermssion: 2,
 credits: "Shahadat SAHU",
 description: "মেনশন করলে শুভেচ্ছা জানাবে",
 commandCategory: "group",
 usages: "[@মেনশন]",
 cooldowns: 5,
 dependencies: {
 "fs-extra": "",
 "axios": ""
 }
};

module.exports.run = async function ({ api, event, args }) {
 try {
 if (Object.keys(event.mentions).length === 0) {
 return api.sendMessage("আপনি কাকে শুভেচ্ছা জানাতে চান এমন একজন কে মেনশন করুন!😘", event.threadID);
 }

 const mention = Object.keys(event.mentions)[0];
 const name = event.mentions[mention].replace("@", "");
 const arraytag = [{ id: mention, tag: name }];

 const sendMessage = (msg) => {
 api.sendMessage({ body: msg, mentions: arraytag }, event.threadID);
 };

 
 sendMessage(`বস রায়হানের পক্ষ থেকে তোমাকে ভালোবাসার শুভেচ্ছা, @${name}!\n❣️❣️`);
 const messages = [
 { delay: 3000, msg: `💖 ⎯͢⎯⃝🩷😽 তুমি আমার চোখেতে সরলতার উপমা ⎯͢🩷🐰🍒 \n@${name}` },
 { delay: 3000, msg: `🌷ღـــــــকারণে অকারণে প্রতিদিন নিয়ম করে, তোমার মায়াতে জড়িয়ে পড়ছি আমি বারেবার।🌷\n@${name}` },
 { delay: 3000, msg: `- 𝗬𝗼𝘂 𝗮𝗿𝗲 𝗮𝗹𝘄𝗮𝘆𝘀 𝗼𝗻 𝗺𝘆 𝗺𝗶𝗻𝗱 𝗙𝗼𝗿𝗲𝘃𝗲𝗿 𝗶𝗻 𝗺𝘆 𝗵𝗲𝗮𝗿𝘁⎯"♡😌🖤\n@${name}` },
 { delay: 3000, msg: ` তুমি সর্বদা আমার এ হৃদয়ের গহীনে আছো!🤍🖤♡ -/\n@${name}` },
 { delay: 3000, msg: `۵যদি হাজার বার জিজ্ঞেস করো! আমি কি চাই? আমি নির্দ্বিধায় জবাব দিবো, আমি শুধু তোমাকে চাই.!😊🩷\n@${name}` },
 { delay: 3000, msg: `𝗭𝗶𝗻𝗗𝗲𝗚𝗶"𝗠𝗲𝗬"𝗲𝗞 🪄˚𝗧𝘂𝗠"𝗛𝗶"𝗛𝗢𝗼💗😽🪄\n@${name}` },
 { delay: 3000, msg: `°-༊༅✿ভালোবাসা সঠিক হলে অনলাইন এর ভালোবাসা ও পুর্ন তা পায় -!!🌻🖇️✨\n@${name}` },
 { delay: 3000, msg: `যদি আমি শূন্য হয়ে যাই পূর্ণ করে রেখো আমায় তোমার ভালোবাসা দিয়ে :)😊🤍🌷\n@${name}` },
 { delay: 3000, msg: `༊༅-In your eyes, আমি আমার পৃথিবী খুঁজে পাই।😊🤍🌷\n@${name}` },
 { delay: 3000, msg: `💚┏━🌻ღতুমি আমার স্বপ্ন, তুমি আমার জীবনের প্রতিটি সুন্দর মুহূর্ত।🌻ღ━┓💚\n@${name}` },
 { delay: 3000, msg: `💚┏━🌻ღআমার মনের গহীনে বাস করা রাজকন্যা তোমাকে অনেক ভালোবাসি।🌻ღ━┓💚\n@${name}` },
 { delay: 3000, msg: `\n💚---ღ😘😘😘𝗜 𝗟𝗢𝗩𝗘 𝗬𝗢𝗨 𝗝𝗔𝗡 𝗣𝗔𝗞𝗛𝗜😘😘😊🤍🌷\n@${name}` }
 ];

 messages.forEach(({delay, msg}) => {
 setTimeout(() => sendMessage(msg), delay);
 });

 } catch (error) {
 console.error(error);
 api.sendMessage("বার্তা পাঠাতে সমস্যা হয়েছে!\nদয়া করে আবার চেষ্টা করুন!", event.threadID);
 }
};
