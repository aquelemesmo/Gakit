const Discord = require('discord.js')

exports.run = (bot,message,args) => {

	message.delete();
	let embed = new Discord.RichEmbed()

	.setTitle('**>--<|PREFIX|>--<**')
	.setDescription('Meu prefixo de comando\n\n**?**')
	.setColor('#767B87')
	message.channel.send(embed)
}

exports.help = {
	name: "prefix"
}