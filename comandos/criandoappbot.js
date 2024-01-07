const Discord = require('discord.js');

exports.run = (bot,message,args) => {
    let embed = new Discord.RichEmbed()

    .setTitle("**CRIANDO APP**")
    .setDescription("Para criar seu bot primeiro tem que acessar esse link\nhttps://discordapp.com/developers/applications\n\nE depois se clica em **New Application**\n\nQuando clicou em **New Application** voce coloque o nome do seu bot\n\nE depois voce vai na aba **Bot** e voce aceita uma opção e se quiser deixar seu bot publico ou não desativa a opção PUBLIC BOT\n\nAVISO!!! Antes de voce fazer o bot voce tem que programar bem com uso de Python ou Node.js")
    .setColor('#767B87')
    
    message.channel.send(embed);
}

exports.help = {
    name: "criandoappbot"
}
