const Discord = require('discord.js')

exports.run = async (bot,message,args,ops) => {
    if (!message.member.voiceChannel) return message.channel.send("Por favor se conecte a algum canal de voz");
    if (!message.guild.me.voiceChannel) return message.channel.send("Desculpe, eu ja estou conectado em outro canal");
    if (message.guild.me.voiceChannelID !== message.member.voiceChannelID) return message.channel.send("Desculpe, você não está conectado ao mesmo canal");
    message.guild.me.voiceChannel.leave();
    message.channel.send("Saindo...");
}

exports.help = {
    name: "sair"
}