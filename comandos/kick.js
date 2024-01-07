const Discord = require('discord.js')

exports.run = (bot,message,args) => {
    var razao = args.slice(1).join(' ');

    var user = message.mentions.users.first();
    if(!message.guild.member(message.author.id).hasPermission("KICK_MEMBERS")) return message.reply("**Voce nao tem permissao para fazer isso!**");
    if(message.mentions.users.size < 1) return message.reply("**Voce nao mencionou ninguem para eu kickar!!**");
    if(message.guild.member(user).kickable) return message.reply("**Eu nao posso kickar esse usuario**");
    if(razao.length < 1) return message.reply("**Voce nao citou a razao!**");

    message.guild.member(user).kick();

    let embed = new Discord.RichEmbed()
    .setTitle("**USUARIO KICKADO!**")
    .addField("Usuario:", usuario.username)
    .addField("Motivo:", razao);

    message.channel.send(embed)
}

exports.help = {
    name: "kick",
    aliases: [
        "kickar",
        "chutar"
    ]
}