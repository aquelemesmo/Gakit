const Discord = require('discord.js')

exports.run = (bot,message,args) => {

    message.delete();
    let embed = new Discord.RichEmbed()
    .setTitle("**MEU INFO**")
    .setDescription("Veja algumas info minhas\n\nLinguagem: Node.js\n\n Fase: Em beta (teste)\n\n Versao: 2.0.5\n\n Site: https://gakit.glitch.me \n\n Hospedado: Em nenhuma host :(")
    .setColor('#767B87')

    message.channel.send(embed);
}

exports.help = {
    name: "infobot"
}