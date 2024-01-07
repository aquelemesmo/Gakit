const Discord = require ('discord.js');

module.exports.run = (bot,message,args) => {

    if(!message.member.hasPermission("ADMINSTRATOR")) return message.reply("**Voce nao tem permissao para fazer isso!**");
    message.delete().catch();

    let splitarg = args.join(" ").split(" / ");
    let anuncio = splitarg[0]

    if(!anuncio){
        message.reply("Use o formato de : ``?anunciar <mensagem do anuncio>``");
        return
    }

    const anuncioembed = new Discord.RichEmbed()
    .setTitle("**🔔ANÚNCIO🔔**")
    .setDescription(`${anuncio}`)
    .setColor("#767B87")
    .setFooter(`Anuncio feito pelo ${message.author.tag}`)
    .setTimestamp();

    message.channel.send(anuncioembed);
}

exports.help = {
    name: "anunciar"
}