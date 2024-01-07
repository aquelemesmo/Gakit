const Discord = require('discord.js');
const ytdl = require('ytdl-core');

exports.run = async(bot,message,args,ops) => {
    if (!message.member.voiceChannel) return message.channel.send("Por favor se conecte a algum canal de voz");
    if (message.guild.me.voiceChannel) return message.channel.send("Desculpe, eu ja estou conectado em outro canal");
    if (!args[0]) return message.channel.send("Desculpe, coloque o link ou nome da musica para eu colocar o som!");
    let validate = await ytdl.validateURL(args[0]);
    if (!validate) return message.channel.send("Desculpe, insira um URL **válido** seguindo o comando.")
    let info = await ytdl.getInfo(args[0]);
    let connection = await message.member.voiceChannel.join();
    let dispatcher = await connection.play(ytdl(args[0], { filter: 'audioonly'}));
    message.channel.send(`A musica: ${info.title} ta tocando AGORA!`);
}

exports.help = {
    name: "tocar"
}