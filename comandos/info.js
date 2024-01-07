const Discord = require('discord.js')

exports.run = (bot,message,args) => {

    message.delete();
    let embed = new Discord.RichEmbed()
    .setTitle("**COMANDO INFO**")
    .setDescription("Comandos meus de info")
    .setColor('#767B87')
    .addField("**TUTORIAL**", "Veja alguns tutoriais que eu tenho aqui")
    .addField("**FALAR**", "Eu posso falar algo do tipo")
    .addField("**INFO BOT**", "Veja algumas info minhas c:")
    message.channel.send(embed);
}

exports.help = {
    name: "info",
    aliases: [
        "informações"
    ]
}