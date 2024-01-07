const Discord = require('discord.js');
const moment = require('moment');
moment.locale('pt-BR');

exports.run = (bot,message,args) => {
    
    let gAvatar = message.guild.iconURL;
    let embed = new Discord.RichEmbed()

    .setTitle(`${message.guild.name}`)
    .setThumbnail(gAvatar)
    .setColor('#767B87')
    .setDescription(`Info do ${message.guild.name}`)
    .addField(`🔢ID Do Servidor`, message.guild.id, true)
    .addField(`🌍Criador original do servidor`, message.guild.owner, true)
    .addField(`🚩Região do servidor`, message.guild.region, true)
    .addField(`📑Totais de canais no servidor`, message.guild.channels.size, true)
    .addField(`🔨O servidor foi criado em`, moment(message.guild.createdAt).format('LLLLL'))
    .addField(`Você entrou aqui em`, moment(message.member.joinedAt).format('LLLLL'))
    .addField(`Eu entrei aqui em`, moment(bot.user.joinedAt).format('LLLLLLL'))
    .addField(`Aqui no servidor no total tem`, message.guild.memberCount);

    message.channel.send(embed);
}

exports.help = {
    name: "serverinfo"
}