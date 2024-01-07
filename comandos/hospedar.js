const Discord = require('discord.js')

exports.run = (bot,message,args) => {

    let hospedarembed = new Discord.RichEmbed()
    .setTitle("**>--<|HOSPEDAR E FACIL?|>--<**")
    .setDescription("\n\nOlha pra minha sugestao **SIM** por que, primeiro voce tem que ter um bot muito bem preparado para ser hospedado, se caso ja escolheu alguma host para ser hospedado e bom, so que tem que checar os GB que vai dar, por que se passar de 1 GB vai ter que comprar, mais eu recomendo **2 Hospedagem** ``FantasyHosting, Discloud`` essas sao as hospedagem que tambem hospedam bots em localizacoes diferentes.")

    message.channel.send(hospedarembed)
}

exports.help = {
    name: "hospedar"
}