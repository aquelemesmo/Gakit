const Discord = require('discord.js');

exports.run = (bot,message,args) => {

    let embedprincipal = new Discord.RichEmbed()

    .setTitle("**>--<MEUS COMANDOS>--<**")
    .setDescription("\n**👮|MODERAÇÃO|👮**\n`kick` , `ban` , `mute` , `votekick` , `warn` ...\n\n**🧑|GLOBAL|🧑**\n`ping` , `serverinfo` , `calcular` , `infobot` , `info` ...\n\n**🔧|CUSTOMIZAÇÃO|🔧**\n`tutorial` , `avatar` , `criandoappbot` , `info` ...\n\n**🎉|DIVERSÃO|🎉**\n`moeda` , `piadas`")
    .setColor('#767B87')
    .setFooter("Criador : jack2315#4143")

    message.channel.send(embedprincipal);
}

exports.help = {
    name: "ajuda"
}
