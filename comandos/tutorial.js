const Discord = require('discord.js');

exports.run = (bot,message,args) => {

    message.delete();
    let embed = new Discord.RichEmbed()

    .setTitle("**TUTORIAS MEUS**")
    .setDescription("Posso te ensinar algumas coisinhas :3\n\n`node.js`, `hospedar`, `criarserver`")
    .setColor('#767B87')
    message.channel.send(embed);
}

exports.help = {
    name: "tutorial"
}
