const Discord = require('discord.js')

exports.run = (bot,message,args) => {

    message.delete();
    let embed = new Discord.RichEmbed()
    .setTitle("**COMANDOS CUSTOMIZADOS**")
    .setDescription("Veja meus comandos customizados pelo meu criador\n\n `calculadora` -- **Calculando... calculando...**")
    .setColor("#767B87")

    message.channel.send(embed)
}

exports.help = {
    name: "customização"
}