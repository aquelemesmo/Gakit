const Discord = require("discord.js")
 
module.exports.run = async (bot, message, args) => {
 
    message.delete();
    
    let TicketEmbed = new Discord.RichEmbed()
    .setColor("#767B87")
    .setAuthor("Suporte ao servidor")
    .setDescription("Para criar um ticket, pressione a reação")
    .setFooter("Suporte ao servidor")
 
    message.channel.send(TicketEmbed).then(async msg => {
        msg.react("🎟️");
    });
}
 
module.exports.help = {
    name: "ticket"
}