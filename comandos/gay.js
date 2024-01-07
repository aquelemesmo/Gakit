const Discord = require("discord.js");

exports.run = (bot,message,args) => {

    var user = message.mentions.users.first();

    if(message.mentions.users.size < 1) return message.reply("Lembre-se você tem que mencionar o usuário para ver se ele e gay ou não!");

    let embed = new Discord.RichEmbed()
    .setTitle("GAY!")
    .setDescription("Você tem " + Math.floor(Math.random() * 100 + 1) + "% de ser gay :3")
    .setColor('#767B87')

    message.channel.send(embed);
}

exports.help = {
    name: "gay",
    aliases: [
        "guei"
    ]
}