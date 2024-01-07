const Discord = require('discord.js')

exports.run = (bot,message,args) => {

    let globalembed = new Discord.RichEmbed()
    .setTitle("**>--<🧑|CATEGORIA GLOBAL|🧑>--<**")
    .setDescription("\n**|COMANDOS|**\n\n `discordserver` -- **Informações do servidor do discord**\n\n `infobot` -- **Minhas informações!**\n\n `info` -- **Mais comandos :D**\n\n `ping` -- **Tá com lag ou algo do tipo?** `serverinfo` -- **Informações do servidor**")
    .setColor('#767B87')

    message.channel.send(globalembed)

}

exports.help = {
    name: "global",
}