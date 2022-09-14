const Discord = require("discord.js");
const { MessageEmbed } = require("discord.js");
const { Prefix } = require("../../config.js");

module.exports = {
  name: "help",
  aliases: ["h", "Help"],
  description: "Show Help Command",
  usage: "Help",
  run: async(client, message, args) => {
 
    
    
    let embed = new MessageEmbed()
    .setColor("RANDOM")
    .setTitle(`Help Renon!`)

    .setDescription(`
 
︙**Info** 
\`help\`, \`ping\`, \`Server\`,
\`userinfo\`, \`invite\`, \`uptime\`
\`say\`, \`uinvite\`, \`roles\`
\`stats\`, \`listemoji\`, \`se <emoji>\`,
︙**Moderation** 
\`ban\`, \`unban\`, \`kick\`,
\`mute\`, \`unmute\`, \`clear\`
\`lock\`, \`unlock\`, \`slowmode\`
\`nick\`, \`hide\`, \`unhide\` 
︙**Funny**
\`ascii\`, \`avatar\`, \`dicksize\`,
\`howgay\`, \`rate\`, 
︙**Gifs**
\`boy\`, \`girl\`, \`anime\`,
\`animal\`, \`baby\`, \`couple\`,
\`emoji\`, 
︙**Photos** 
\`Pboy\`, \`Pgirl\`, \`Panime\`,
\`Panimal\`, \`Pbaby\`, \`Pcouple\`,
\`Pemoji\`
︙**Texts**
\`textkurd\` (tk) , \`textenglish\` (te)
\`textarab\` (ta) , \`textturk\` (tt) 
\`textpersian\` (tp)
[Server](https://discord.gg/bfM6xNMyT7) **-** [Invite Renon](https://discord.com/api/oauth2/authorize?client_id=779009713027022898&permissions=8&scope=bot)
`)

const disbut = require("discord-buttons")
 let button = new disbut.MessageButton()
        .setStyle('url')
        .setLabel('Invite')
        .setURL('https://discord.com/api/oauth2/authorize?client_id=776824647080738828&permissions=8&scope=bot');////سيرفرك

 let button1 = new disbut.MessageButton()
        .setStyle('url')
        .setLabel('Support')
        .setURL(`https://discord.gg/2YE6JQRDYc`);

    helpEmbed.setTimestamp();

    return message.channel.send({ embed : helpEmbed , buttons : [button,button1] }).catch(console.error);
  }
};
