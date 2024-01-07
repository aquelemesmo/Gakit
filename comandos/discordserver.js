const Discord = require('discord.js')

exports.run = (bot,message,args) => {

    let discorserverembed = new Discord.RichEmbed()
    .setTitle("**GAKIT COMMUNITY**")
    .setDescription("Entre na minha comunidade para caso precisa de suporte! \nhttps://discord.gg/Q8zNaWh")

    message.channel.send(discordserverembed)

}

exports.help = {
    name: "discordserver"
}