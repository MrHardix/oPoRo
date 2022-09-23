const Discord = require("discord.js");
const { MessageEmbed } = require("discord.js");
const { Prefix } = require("../../config.js");

module.exports = {
  name: "boy",
  aliases: ["Boy"],
  description: "Show Gif",
  usage: "Gif",
  run: async (client, message, args) => {
   
    let replies = ["https://media.discordapp.net/attachments/746824654840135761/987127927273558056/a_8f99812e69ff22f78829bac6f85eef38.gif","https://media.discordapp.net/attachments/746824654840135761/987127927508443166/a_9b5f3e0e86c961d9e84350cf5a802d78.gif"];

    let result = Math.floor((Math.random() * replies.length));
    
    let gifembed = new Discord.MessageEmbed()

    .setTitle("Boy Gif")
    
      .setColor("RANDOM")
    .setFooter(`${message.author.tag} `, message.author.avatarURL)
    .setImage(replies[result]);

    message.channel.send(gifembed);

   
  }
};
