const Discord = require('discord.js')

exports.run = (bot,message,args) => {

    let EmbedNick = new Discord.RichEmbed()
    .setTitle("**SEU NICK**")
    .setDescription(`Seu nick: ${message.username}`)
    .setColor("#767B87")

    message.channel.send(EmbedNick)
}

exports.help = {
    name: "nick"
}