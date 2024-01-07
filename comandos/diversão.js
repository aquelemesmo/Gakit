const Discord = require('discord.js');

exports.run = (bot,message,args) => {

    message.delete();
    let embed = new Discord.RichEmbed()

    .setTitle("**>--<🎉|CATEGORIA DIVERSÃO|🎉>--<**")
    .setDescription("\n**|COMANDOS|**\n\n `?beijar` -- **Caso queira beijar alguém**\n\n `?casal` -- **Rolar algum casal**\n\n `?chance` -- **Tenha alguma chance sobre a sua sorte!**\n\n `?gapoints` -- **GaPoints, alguns pontos legal :3**\n\n `?gay` -- **Hmm tu é gay mano?**\n\n `?moeda` -- **Cara ou coroa?**\n\n `?tapa` -- **Da um tapa em alguém ae :v**")
    .setColor('#767B87')

    message.channel.send(embed);
}

exports.help = {
    name: "diversão",
    aliases: [
        "diversao",
        "divertir",
        "party"
    ]
}
