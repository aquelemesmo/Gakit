const Discord = require ('discord.js')

exports.run = (bot,message,args) => {
    
    let moderacao = new Discord.RichEmbed()

    .setTitle("**>--<👮|CATEGORIA MODERAÇÃO|👮>--<**")
    .setDescription("\n**|COMANDOS|**\n\n`anunciar` -- **Fazer um anuncio**\n\n `ban` -- **Banir alguém por causa que quebrou as regras**\n\n `kick` -- **Chutar alguém pra fora! mais pode voltar :3**\n\n `addrole` -- **Adcionar algum cargo**\n\n `mudarnick` -- **Mudar apelido de alguém**\n\n `limpar` -- **Limpar chat de máximo 1 a 100**\n\n `mutar` -- **Silenciar alguém**\n\n `sorteio` -- **Criar algum sorteio**\n\n `tempmute` -- **Silenciar alguém temporariamente**\n\n `ticket` -- **Criar ticket**\n\n `warn` -- **Dar aviso**")
    .setColor('#767B87')

    message.channel.send(moderacao);

}

exports.help = {
    name: "moderacao",
    aliases: [
        "moderação",
        "moderation"
    ]
}