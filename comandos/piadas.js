const Discord = require('discord.js')

module.exports.run = (bot,message,args) => {

    let embed = new Discord.RichEmbed()
	.setTitle("**COMANDO EM MANUTENÇÃO!**")
	
	message.channel.send(embed);
}

exports.help = {
    name: "piadas"
}