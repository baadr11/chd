const Discord = require('discord.js');
const client = new Discord.Client();

let timer;
console.log("BOT ONLINE");

client.on("guildMemberAdd", member => {
    timer = Math.floor(Math.random() * (10000 - 5000 + 1)) + 5000
  let words = [`*** سلام عليكم يا عيني ممكن تنورنا ناقصنا عسل بخطفك *** :heart:
                               [ https://discord.gg/d836634 ]  `]
  setTimeout(() =>{
  member.createDM().then(function (channel) {
  return channel.send(`${words[Math.floor(Math.random() * words.length)]}`).then(() => {
})}).catch(console.error)
}, timer)
})

client.login(process.env.BOT_TOKEN);
