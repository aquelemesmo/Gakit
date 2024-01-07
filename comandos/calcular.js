const math = require('mathjs');
const Discord = require('discord.js');

exports.run = (bot,message,args,tools) => {

    message.delete();
    if(!args[0]) return message.reply("Coloque alguns calculos para eu resolver")

    let resp;
    try {
        resp = math.evaluate(args.join(' '));
    } catch (e) {
        return message.reply("Desculpe, coloque um calculo **valido**")
    }

    let embed = new Discord.RichEmbed()
    .setColor("#767B87")
    .setTitle('**CALCULADORA**')
    .addField("Calculo :", `\`\`\`js\n${args.join(' ')}\`\`\``)
    .addField("Resposta :", `\`\`\`js\n${resp}\`\`\``)

    message.channel.send(embed);
}

exports.help = {
    name: "calcular"
}