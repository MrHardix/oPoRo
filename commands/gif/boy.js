const Discord = require("discord.js");
const { MessageEmbed } = require("discord.js");
const { Prefix } = require("../../config.js");

module.exports = {
  name: "boy",
  aliases: ["Boy"],
  description: "Show Gif",
  usage: "Gif",
  run: async (client, message, args) => {
   
    let replies = ["https://cdn.discordapp.com/attachments/1018808352798687262/1019667762756464671/boy-avatar.gif","https://media.discordapp.net/attachments/746824654840135761/987325334703726682/Man_PP_Gif_80.gif"];

    let result = Math.floor((Math.random() * replies.length));
    
    let gifembed = new Discord.MessageEmbed()

    .setTitle("Boy Gif")
    
      .setColor("RANDOM")
    .setFooter(`${message.author.tag} `, message.author.avatarURL)
    .setImage(replies[result]);

    message.channel.send(gifembed);

   
  }
};
