const Discord = require('discord.js');
const ms = require('ms');

exports.run = async(bot,message,args) => {

    if(!args[0]) 
    return message.channel.send("Voce tem que setar o tempo do sorteio!");
    if(!args[0].endsWith(val="d")&&!args[0].endsWith(val="h")&&!args[0].endsWith(val="m")&&!args[0].endsWith(val="w"))
    return message.channel.send("Voce nao colocou o formato do tempo!");
    if(isNaN(args[0][0]))
    return message.channel.send("Isso nao e um numero...");
    let channel = message.mentions.channels.first();
    if(!channel)
    return message.channel.send("Eu nao encontrei nenhum canal para fazer o sorteio");
    let prize = args.slice(2).join(" ");
    if(!prize)
    return message.channel.send("Nenhum premio foi definido!");
    message.channel.send(`**Sorteio criado no canal ${channel}**`);

    let Embed = new Discord.RichEmbed()
    .setTitle("**>--<|SORTEIO|>--<**")
    .setDescription(`O usuario ${message.author} esta fazendo um sorteio premiando um **${prize}**`)
    .setTimestamp(Date.now()+ms()(args[0]))
    .setColor("#767B87")
    message.channel.send(Embed);

    m.react("🎉");
    setTimeout(() => {
        if(m.reactions.cache.size==1) 
        return 
        message.channel.send("Ninguem reagiu a esse emoji para participar, entao ninguem ganhou o premio");
        if(m.reactions.cache.size==0) 
        return 
        channel.send("Ninguem reagiu por isso o sorteio acabou");
        let winner = m.reactions.cache.get("🎉").users.cache.filter(u=>u.bot).random();
        channel.send(`O que ganhou e o para receber o premio: **${prize}**, e o... ${winner}!!`);
    }, 
    ms(args[0]));
}

exports.help = {
    name: "sorteio"
}