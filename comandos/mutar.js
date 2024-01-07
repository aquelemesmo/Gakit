const Discord = require("discord.js");

module.exports.run = async (bot, message, args, prefix) =>{

    message.delete().catch(O_o=>{});
    if(!message.member.hasPermission('MANAGE_MESSAGES')) return message.reply("**Voce nao tem permissao para fazer isso!**").then(msg => msg.delete(6000));
    const comousar = new Discord.RichEmbed()
      .setTitle(`?mute`)
      .setDescription(`Irá mutar o usuário mencionado.`)
      .setColor("#767B87")
      .addField("Como usar:", `\`.mute @usuário <motivo>\`\n\`?mute @jack2315#4143 Flood\``)
      .addField("Permissão:", "O staff que for mutar tem que esta em um cargo com a permissão `Gerenciar Mensagens`")
    let member = message.mentions.members.first();
    if(!member)
        return message.channel.send(message.author, comousar).then(msg => msg.delete(10000));

    let motivo = args.slice(1).join(' ');
    if(!motivo) motivo = "Não informado";
  
    let muterole = message.guild.roles.find(ro => ro.name === "Mutado");
    if(!muterole){
        try {
            muterole = await message.guild.createRole({
                name: "Mutado",
                color: "#000000",
                permissions: []
            });
            message.guild.channels.forEach(async (channel, id) =>{
                await channel.overwritePermissions(muterole, {
                    SEND_MESSAGES: false,
                    ADD_REACTION: false,
                    CONNECT: false
                });
            });
        } catch (a) {
            console.error(a.stack);
        }
    }
    
    member.addRole(muterole)

    const mutemsg = new Discord.RichEmbed()
        .setTitle(`${member.user.tag} | Mutado`)
        .setDescription(`Você foi mutado no servidor **${message.guild.name}**! :worried:`)
        .setColor("#aa0303")
        .setThumbnail(member.user.displayAvatarURL)
        .addField("📋 Motivo:", motivo)
        .setTimestamp()
     
      
    const mutado = new Discord.RichEmbed()
        .setTitle(`${member.user.tag} | Mutado`)
        .setDescription(`**${member.user.tag}** foi mutado no servidor! :worried:`)
        .setColor("#767B87")
        .setThumbnail(message.author.displayAvatarURL)
        .addField("👮 Por:", message.author)
        .addField("📋 Motivo:", motivo)
        .setTimestamp()
        
    if(message.guild.channels.find(ch => ch.name === "『📛』punições")){
        let guild = message.guild.channels.find(ch => ch.name === "『📛』punições");   
        guild.send(mutado).catch(O_o=>{});
        member.send(mutemsg).catch(O_o=>{});
        message.channel.send(`:white_check_mark: | ${message.author} usuário punido com sucesso!`)
    }else if(message.guild.channels.find(ch => ch.name === "🚫punidos")){
        let guild = message.guild.channels.find(ch => ch.name === "🚫punidos");
        guild.send(mutado).catch(O_o=>{});
        member.send(mutemsg).catch(O_o=>{});
        message.channel.send(`:white_check_mark: | ${message.author} usuário punido com sucesso!`)
    } else if(message.guild.channels.find(ch => ch.name === "punições")){
        let guild = message.guild.channels.find(ch => ch.name === "punições");
        guild.send(mutado).catch(O_o=>{});
        member.send(mutemsg).catch(O_o=>{});
        message.channel.send(`:white_check_mark: | ${message.author} usuário punido com sucesso!`)
    }else if(message.guild.channels.find(ch => ch.name === "😈┋banidos")){
        let guild = message.guild.channels.find(ch => ch.name === "😈┋banidos");
        guild.send(mutado).catch(O_o=>{});
        member.send(mutemsg).catch(O_o=>{});
        message.channel.send(`:white_check_mark: | ${message.author} usuário punido com sucesso!`)
    } else {
        message.channel.send(mutado).catch(O_o=>{});
        member.send(mutemsg).catch(O_o=>{});
    }
}

exports.help = {
    name: "mute",
    aliases: [
        'mutar',
        'silenciar'
    ]
}

