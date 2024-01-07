const Discord = require("discord.js");

exports.run = async (bot,message,args) => {

    var usuário = message.mentions.users.first() || client.users.cache(args[0]);

    if (!usuário) {
        return message.reply("Lembre-se tem que mencionar o usuário válido para rolar o novo **CASAL!**");
    }

    const embed = new Discord.MessageEmbed()
    .setTitle("NOVO CASAL!")
    .setColor("#767B87")
    .setDescription(`${message.author} CASOU O ${usuário}`)
    .setTimestamp()
    .setFooter("New marry 7u7")
    message.channel.send(embed)
}

exports.help = {
    name: "casal"
}