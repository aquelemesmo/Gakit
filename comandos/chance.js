const Discord = require("discord.js")

exports.run = async (bot,message,args) => {

    let embed = new Discord.RichEmbed()
    .setTitle("CHANCES!")
    .setDescription("Você tem " + Math.floor(Math.random() * 100 + 1) + "% de ter chance por algo que quer conquistar :3")
    .setColor('#767B87')

    message.channel.send(embed)
}

exports.help = {
    name: "chance"
}