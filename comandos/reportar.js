const Discord = require('discord.js');

exports.run = async (client, message, args) => {
    
    message.delete().catch(O_o=>{});

    var canalReportes = false
    if(message.guild.channels.find(ch => ch.name === "『🚨』denuncias")) canalReportes = true
    if(message.guild.channels.find(ch => ch.name === "report")) canalReportes = true
    if(message.guild.channels.find(ch => ch.name === "⚠reportes")) canalReportes = true
    if(message.guild.channels.find(ch => ch.name === "reportes")) canalReportes = true
    if(message.guild.channels.find(ch => ch.name === "🚫┋denuncias")) canalReportes = true

    if(canalReportes == false) return message.reply(`o comando de report está desativado nesse servidor! Para o comando funcionar no servidor tem que ter um canal com um desses nomes: \`⚠report\`, \`report\`, \`⚠reportes\`, \`reportes\``)

    const comousar = new Discord.RichEmbed()
        .setTitle(`.report`)
        .setDescription(`Ira reportar o usuário mencionado.`)
        .setColor("#767B87")
        .addField("Como usar:", `\`?report @usuário <motivo>\`\n\`?report @jack2315#4143 Spam\``)


    if(args == "") return message.reply("você tem que mencionar um usuário. :face_palm:")
    var reportado = message.guild.member(message.mentions.users.first() || message.guild.members.get(args[0]));
    if(!reportado) return message.reply("usuário não foi encontrado. :worried:")

    let motivo = args.slice(1).join(' ');
    if(!motivo) return message.reply("Você tem que digitar o motivo!")

    const reporteviado = new Discord.RichEmbed()
        .setTitle("⚠ Novo report")
        .setColor("#aa0303")
        .setThumbnail(reportado.user.displayAvatarURL)
        .addField("📥 Reporte eviado por:", message.author)
        .addField(":bust_in_silhouette: Reportado:", reportado)
        .addField("📋 Motivo:", motivo)
        .addField(":hash: Canal:", message.channel)
        .setTimestamp()


    if(message.guild.channels.find(ch => ch.name === "『🚨』denuncias")){
        let canal = message.guild.channels.find(ch => ch.name === "『🚨』denuncias");   
        canal.send(reporteviado).catch(O_o=>{});
        message.channel.send(`:white_check_mark: | ${message.author} usuário reportado com sucesso!`)
    }else if(message.guild.channels.find(ch => ch.name === "report")){
        let canal = message.guild.channels.find(ch => ch.name === "report");
        canal.send(reporteviado).catch(O_o=>{});
        message.channel.send(`:white_check_mark: | ${message.author} usuário reportado com sucesso!`)
    } else if(message.guild.channels.find(ch => ch.name === "⚠reportes")){
        let canal = message.guild.channels.find(ch => ch.name === "⚠reportes");
        canal.send(reporteviado).catch(O_o=>{});
        message.channel.send(`:white_check_mark: | ${message.author} usuário reportado com sucesso!`)
    }else if(message.guild.channels.find(ch => ch.name === "⚠reportes")){
        let canal = message.guild.channels.find(ch => ch.name === "⚠reportes");
        canal.send(reporteviado).catch(O_o=>{});
        message.channel.send(`:white_check_mark: | ${message.author} usuário reportado com sucesso!`)
    }else if(message.guild.channels.find(ch => ch.name === "🚫┋denuncias")){
        let canal = message.guild.channels.find(ch => ch.name === "🚫┋denuncias");
        message.channel.send(`:white_check_mark: | ${message.author} usuário reportado com sucesso!`)
    }
}


exports.help = {
    name: "report",
    aliases: [
        'reportar'
    ]
}
