const Discord = require('discord.js');
const config = require('./config.json');
const bot = new Discord.Client();
const low = require('lowdb');
const FileSync = require('lowdb/adapters/FileSync');
bot.commands = new Discord.Collection();
const fs = require("fs");
const ping = require('minecraft-server-util');

const adapters = new FileSync('gapontos.json');
const db = low(adapters);

db.defaults({histoires : [], xp: []}).write();

const ownerID = "401024028388884483";

function changing_status() {
    const status = ['Digite ?ajuda para ver meus comandos']
    const random = status[Math.floor(Math.random() * status.length)]
    bot.user.setActivity(random)
}

bot.on("ready", () => {
    console.log(`Bot foi iniciado! com ${bot.user.tag}`);
    setInterval(changing_status, 10000);
});

fs.readdir("./comandos/", (err, files) => {
    if(err) console.error(err);

    let arquivojs = files.filter(f => f.split(".").pop() == "js");
    arquivojs.forEach((f, i) => {
        let props = require(`./comandos/${f}`);
        console.log(`O Comando ${f} foi carregado com sucesso!`);
        bot.commands.set(props.help.name, props);
    });
});

bot.on('ready', () => {
    console.log(`O bot ${bot.user.username} ficou online 100% funcionando`)
    bot.user.setActivity(`Eu estou em ${bot.guilds.size} servidores`, {type: "WATCHING"})
    let messages = [`Assistindo ${bot.users.size} pessoas`]
});

bot.on('message', message => {
    var msgauthor = message.author.id;
    
    if(message.author.bot) return;
    if(message.channel.type === "dm") return;
    if(message.content.indexOf("?") == 0);

    let prefix = config.prefix;
    let messageArray = message.content.split(" ");
    let command = messageArray[0];
    let args = messageArray.slice(1);
    if (message.author.bot);
    if (message.content.indexOf(config.prefix) !== 0) return;

    let arquivocmd = bot.commands.get(command.slice(prefix.length));
    if(arquivocmd) arquivocmd.run(bot,message,args);

    //npm ops
    let ops = {
        ownerID: ownerID
    }

    if(message.content.startsWith(config.prefix + "flood")){
        message.mentions.user.first()
    }

    if(!db.get("xp").find({user : msgauthor}).value()){
        db.get("xp").push({user : msgauthor, xp: 1}).write();
    }else{
        var userxpdb = db.get("xp").filter({user : msgauthor}).find("xp").value();
        console.log(userxpdb)
        var userxp = Object.values(userxpdb)
        console.log(userxp)
        console.log(`Número de GaPoints: ${userxp[1]}`)
 
        db.get("xp").find({user: msgauthor}).assign({user: msgauthor, xp: userxp[1] += 1}).write();
 
        if(message.content === prefix + "gapoints"){
            var xp = db.get("xp").filter({user: msgauthor}).find('xp').value()
            var xpfinal = Object.values(xp);
            var xp_embed = new Discord.RichEmbed()
                .setTitle(`GaPoints status de ${message.author.username}`)
                .setColor('#767B87')
                .addField("GaPoints", `${xpfinal[1]} GaPoints`)
            message.channel.send({embed : xp_embed})
        }
    }

    switch(args[0]) {
         case 'nameserver':
             if (args[1]) return message.channel.send("Você precisa adcionar um IP específico");
             if (args[2]) return message.channel.send("Você precisa adcionar a porta específico");
            
            ping(args[1], parseInt(args[2]), (error, responde) => {
                if(error) throw error
                const NSEmbed = new Discord.RichEmbed()
                .setColor("#767B87")
                .setTitle("**Status do servidor**")
                .addField("IP do servidor", response.host)
                .addField("Versão do servidor", response.version)
                .addField("Jogadores on-line", response.onlinePlayers)
                .addField("Máximo de jogadores", response.maxPlayers)
                message.channel.send(NSEmbed);
            })
    }
    
    const msgs = message.content.slice(config.prefix.length).trim().split(/ +/g);

    if(message.content.startsWith(config.prefix + 'mudarNick')){
        if(message.member.roles.some(r=>["👑«—DONO—»👑", "👑«—SUBDONO—»👑", "📝«—ADMIN—»📝", "👑 | DONO"].includes(r.name)))
        return message.reply("**Esse comando so pode ser usado pelos superiores**")

        message.member.setNickname(msgs[1])
        message.channel.send(message.author + " **Agora seu nick e** " + msgs[1]);
    }
    if(message.content.startsWith(config.prefix + 'addRole')){
        var rMember = message.mentions.members.first();
        if(!rMember) return message.reply("**Essa pessoa nao foi encontrada**");

        var role = msgs[2];
        if(!role) return message.reply("**Digite o nick da pessoa corretamente**");

        let recebeRole = message.guild.roles.find("name", role);

        if(!recebeRole) return message.reply("**Esse cargo nao foi encontrado**");
        if(rMember.roles.has(recebeRole.id)) return message.reply("**Essa pessoa ja tem esse cargo**");

        rMember.addRole(recebeRole.id);
        message.channel.send(rMember + " Recebeu o cargo: " + recebeRole);
    }

    if (message.content.startsWith("?moeda")){
        randomNumber = Math.floor(Math.random() * (6 - 1) + 1);
        if(randomNumber == 2){   
            message.reply("**COROA!!**");
        } 
        else {
            message.reply("**CARA!!!**");
        }
    }
    bot.on("messageReactionAdd", (reaction, user) => {
        if(user.bot) return;
        const cdseconds = 5;
        const message = reaction.message;
        const member = message.guild.members.get(user.id)
        const STAFF = message.guild.roles.find(`name`, 'STAFF')
        const everyone = message.guild.roles.find(`name`, '@everyone')
     
        if(
            ["🎟️", "🔒"].includes(reaction.emoji.name)
        ) {
            switch(reaction.emoji.name) {
     
                case "🎟️":
                var ListaTicket = [
                    `${message.user} ticket-0001`,
                    `${message.user} ticket-0002`,
                    `${message.user} ticket-0003`
                ]
                let result = Math.floor((Math.random() * ListaTicket.length))  
                let categoryID = "688099337535881320";    
                var bool = false;
                if(bool == true) return;
     
                message.guild.createChannel(ListaTicket[result], "text").then((createChan) => {
                   
                    createChan.setParent(categoryID).then((settedParent) => {
                        settedParent.overwritePermissions(everyone, {
                            "READ_MESSAGES": false
                        });
                        settedParent.overwritePermissions(member, {
                            "SEND_MESSAGES": true,
                            "ADD_REACTIONS": true,
                            "ATTACH_FILES": true,
                            "READ_MESSAGES": true,
                            "READ_MESSAGE_HISTORY": true
                        })
                        settedParent.overwritePermissions(STAFF, {
                            "READ_MESSAGES": true,
                            "MANAGE_MESSAGES": true
                        })
                        settedParent.overwritePermissions(member, {
                            "SEND_MESSAGES": true,
                            "ADD_REACTIONS": true,
                            "ATTACH_FILES": true,
                            "READ_MESSAGES": true,
                            "READ_MESSAGE_HISTORY": true
                        })
                        let embedTicketOpen = new Discord.RichEmbed()
                        .setTitle("Olá")
                        .setColor("#767B87")
                        .setDescription("Diga sua pergunta / mensagem aqui")
     
                        settedParent.send(embedTicketOpen).then( async msg => {
                            await msg.react("🔒")
                        })
                    })
                })
     
                break;
                case "🔒":
     
                message.channel.send("**A sala fecha em 10 segundos ...**")
                setTimeout(() => {
                    message.channel.delete()
                }, cdseconds * 1500)
     
                let embedTicketClose = new Discord.RichEmbed()
                .setTitle(`O ticket ${message.channel.name} esta fechado`)
                .setColor("#767B87")
                .setFooter("Aviso de fechamento de ticket")
     
                let logChannel = message.guild.channels.find("name", "👑┋log-ticket")
                logChannel.send(embedTicketClose)
                break;
            }
        }
    });
});

bot.login(config.token);