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
<a:textoporo:823650640541909012>︙**Texts**
\`textkurd\` (tk) , \`textenglish\` (te)
\`textarab\` (ta) , \`textturk\` (tt) 
\`textpersian\` (tp)
[Server](https://discord.gg/VWuQfQfjc9) **-** [Invite Renon](https://discord.com/api/oauth2/authorize?client_id=779009713027022898&permissions=8&scope=bot)
`)
    .setFooter(`${message.author.username}`)
  //  .setImage(``)
  //  .setTimestamp();
    message.react(`✅`)
 
      return message.channel.send(embed);
    
  }
};
