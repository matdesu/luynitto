const Discord = require('discord.js');
const errors = require('../utilies/errors.js');

module.exports.run = async (bot, message, args) => {
  console.log('Rodando Comando: kick.js')
let kUser = message.guild.member(message.mentions.users.first() || message.guild.members.get(args[0]));
    if(!kUser) return message.channel.send("**ERRO:** Usuário Não Especificado.");
    let kReason = args.join(" ").slice(22);
    if(kUser.hasPermission("KICK_MEMBERS")) return errors.noPerms(message, "MANAGE_MEMBERS");

    let kEmbed = new Discord.RichEmbed()
    .setDescription('Log Kick')
    .setColor("#ffb366")
    .addField('👤 | Usuário Kickado:', `${kUser} \n Sua ID: ${kUser.id}`)
    .addField('👮 | Kickado Por:', `<@${message.author.id}> \n Sua ID ${message.author.id}`)
    .addField('📄 | Canal do Kick:', message.channel)
    .addField('⏰ | Tempo do Kick:', message.createdAt)
    .addField('🤔 | Razão do Kick:', kReason)


    message.delete().catch(O_o=>{});
    message.guild.member(kUser).kick(kReason);
    message.channel.send(kEmbed);
    return;
}

module.exports.help = {
  name: "kick"
}
