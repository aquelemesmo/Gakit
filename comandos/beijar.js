const Discord = require('discord.js');

exports.run = async (bot,message,args) => {

    var list = [
        'https://imgur.com/iclUiUN.gif',
        'https://imgur.com/lYQt9rx.gif'
    ];

    var imagens = list[Math.floor(Math.random() * list.length)];
    let usuário = message.mentions.users.first() || bot.users.cache.get(args[0]);
    if (!usuário) {
        return message.reply("Lembre-se tem que mencionar o usuário válido para rolar o **SHIP!**");
    }

    /*
    message.channel.send(`${message.author} BEIJOU O ${usuário}!`, {files: [rand]});
    */

    let avatar = message.author.displayAvatarURL({format: "png"});
        const embed = new Discord.RichEmbed()
        .setTitle("NOVO SHIP!")
        .setColor("#767B87")
        .setDescription(`${message.author} BEIJOU O ${usuário}`)
        .setImage(imagens)
        .setTimestamp()
        .setFooter("New ship 7u7")
    await message.channel.send(embed);
}

exports.help = {
    name: "beijar"
}