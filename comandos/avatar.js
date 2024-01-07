const Discord = require('discord.js')

exports.run = (bot,message,args) => {

    message.delete();
    let embed = new Discord.RichEmbed()

    .setTitle("**SEU AVATAR**")
    .setDescription(`Seu avatar ${message.author.username}`)
    .setColor("#767B87")
    .setImage(`${message.author.avatarURL}`);

    message.channel.send(embed)
}

exports.help = {
    name: "avatar"
}