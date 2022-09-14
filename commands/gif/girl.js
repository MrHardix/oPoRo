const Discord = require("discord.js");
const { MessageEmbed } = require("discord.js");
const { Prefix } = require("../../config.js");

module.exports = {
  name: "girl",
  aliases: ["Girl"],
  description: "Show Gif",
  usage: "Gif",
  run: async (client, message, args) => {
   
    let replies = ["https://cdn.discordapp.com/attachments/891066798366130236/1019668088750354524/SPOILER_ljRK048Sh.gif","https://cdn.discordapp.com/attachments/891066798366130236/1019668088972644534/SPOILER_049C98D3-C179-45D8-815C-25628275208E-1.gif"];

    let result = Math.floor((Math.random() * replies.length));
    
    let gifembed = new Discord.MessageEmbed()

    .setTitle("Girl Gif")
    
      .setColor("RANDOM")
    .setFooter(`${message.author.tag} `, message.author.avatarURL)
    .setImage(replies[result]);

    message.channel.send(gifembed);

   
  }
};
