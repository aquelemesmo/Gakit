const Discord = require ('discord.js')
const ms = require ("ms");

module.exports.run = async (bot,message,args) => {

    let silenciar = message.mentions.members.first() || message.guild.members.get(args[0]);
    if(!silenciar) return message.reply("Eu nao consegui acha esse usuario");
    if(silenciar.hasPermission("MANAGE_MESSAGES")) return message.reply("**Voce nao tem permissao para fazer isso!**");
    let silenciarrole = message.guild.roles.find(`name`, "SILENCIADO");
    if (!silenciarrole){
        try{
            silenciarrole = await message.guild.createRole({
                name: "SILENCIADO",
                color: "#000000",
                permissions: []
            })
            message.guild.channels.forEach(async (channel, id) => {
                await channel.overwritePermission(silenciarrole, {
                    SEND_MESSAGES: false,
                    ADD_REACTIONS: false
                });
            });
        }catch(e){
            console.log(e.stack);
        }
    }
    let silenciartime = args[1];
    if(!silenciartime) return message.reply("Voce tem que adcionar um tempo especifico!");

    await (silenciar.addRole(silenciarrole.id));
    message.reply(`<@${silenciar.id}> foi mutado pelo ${ms(silenciartime)}`);

    setTimeout(function(){
        silenciar.removeRole(silenciarrole.id)
        message.channel.send(`<@${silenciar.id}> foi desmutado por causa que o tempo do mute dele acabou`)
    }, ms(silenciartime));
}

exports.help = {
    name: "tempmute"
}