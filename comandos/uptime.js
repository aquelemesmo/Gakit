const Discord = require('discord.js');

module.exports.run = async (bot,message,args) => {

    
    function duration(ms) {
        const sec = Math.floor((ms / 1000) % 60).toString()
        const min = Math.floor((ms / (1000 * 60)) % 60).toString()
        const hrs = Math.floor((ms / (1000 * 60 * 60)) % 60).toString()
        const day = Math.floor((ms / (1000 * 60 * 60 * 24)) % 60).toString()
        return `${day.padStart(1, '0')} dias, ${hrs.padStart(2, '0')} horas, ${min.padStart(2, '0')} minutos, ${sec.padStart(2, '0')} segundos.`
    }

    let embed = new Discord.RichEmbed()
    .setTitle("**UPTIME DE ONLINE!**")
    .setDescription(`Estou onlina á: ${duration(bot.uptime)}`)
    .setColor("#767B87");

    message.channel.send(embed)
}

exports.help = {
    name: "uptime"
}