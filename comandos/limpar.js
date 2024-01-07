const Discord = require ('discord.js');

exports.run = (bot,message,args) => {

    if (message.deletable) {
        message.delete();
    }

    if (!message.member.hasPermission("MANAGE_MESSAGES")) {
        return message.reply("Voce deletou as mensagens").then(m => m.delete(5000))
    }

    if (isNaN(args[0]) || parseInt(args[0]) <= 0 ) {
        return message.reply("Sim... isso não é um número? eu também não posso excluir 0 mensagem pelo caminho").then(m => m.delete(5000))
    }

    if(!message.guild.me.hasPermission("MANAGE_MESSAGES")) {
        return message.reply("Desculpe... Eu nao consegui limpar as mensagens");
    }

    let deleteAnnout;

    if (parseInt(args[0]) > 100) {
        deleteAnnout = 100;
    } else {
        deleteAnnout = parseInt(args[0]);
    }

    message.channel.bulkDelete(deleteAnnout, true)
        .then(deleted => message.channel.send(`Eu deletei \`${deleted.size}\` mensagens.`))
        .catch(err => message.reply(`Acho que eu estou com esse erro... ${err}`))

}

exports.help = {
    name: "limpar"
}