const { RichEmbed } = require("discord.js");

exports.run = (bot,message,args) => {

        message.delete();
        if (!message.member.hasPermission("MANAGE_MESSAGES"))
            return message.reply("**Voce nao tem permissao para fazer isso!**").then(m => m.delete(5000));

        if (args.length < 0)
            return message.reply("Falou nada?").then(m => m.delete(5000));

        const roleColor = message.guild.me.highestRole.hexColor;

        if (args[0].toLowerCase() === "embed") {
            const embed = new RichEmbed()
                .setDescription(args.slice(1).join(" "))
                .setColor(roleColor === "#000000" ? "#ffffff" : roleColor);

            message.channel.send(embed);
        } else {
            message.channel.send(args.join(" "));
    }

}

exports.help = {
    name: "falar"
}