const Discord = require('discord.js')

exports.run = (bot,message,args) => {
    var razao = args.slice(1).join(' ');

    var user = message.mentions.users.first();
    if(!message.guild.member(message.author.id).hasPermission("BAN_MEMBERS")) return message.reply("**Voce nao tem permissao para fazer isso!**");
    if(message.mentions.users.size < 1) return message.reply("**Voce nao mencionou ninguem para eu banir!**");
    if(message.guild.member(user).bannable) return message.reply("**Eu nao posso banir esse usuario**");
    if(razao.length < 1) return message.reply("**Voce nao citou a razao!**");

    message.guild.member(user).ban();

    let embed = new Discord.RichEmbed()
    .setTitle("**USUARIO BANIDO!**")
    .addField("Usuario:", usuario.username)
    .addField("Motivo:", razao)

    message.channel.send(embed)
}

exports.help = {
    name: "ban",
    aliases: [
        "banir"
    ]
}