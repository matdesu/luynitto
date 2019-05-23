const Discord = require('discord.js');

module.exports.run = async (bot, message, args) => {
    console.log('Rodando Comando: ban.js')
      let bUser = message.guild.member(message.mentions.users.first() || message.guild.members.get(args[0]));
      if(!bUser) return message.channel.send("**ERRO:** Usuário Não Especificado.");
      let bReason = args.join(" ").slice(22);
      if(!message.member.hasPermission("BAN_MEMBERS")) return message.channel.send("**ERRO:** Usuário têm permissão de me banir também, \nnão posso correr este risco!");
      if(bUser.hasPermission("BAN_MEMBERS")) return message.reply('Ele tem A Permissão Que eu Preciso! eu não posso bani-lo!');

      let bEmbed = new Discord.RichEmbed()
      .setDescription('Log')
      .setColor("#ffb366")
      .addField('👤 | Usuário Banido:', `${nUser} \n Sua ID: ${nUser.id}`)
      .addField('👮 | Banido Por:', `<@${message.author.id}> \n Sua ID ${message.author.id}`)
      .addField('📄 | Canal do Banimento:', message.channel)
      .addField('⏰ | Tempo do Banimento:', message.createdAt)
      .addField('🤔 | Razão do Banimento:', bReason)


      message.delete().catch(O_o=>{});
      message.guild.member(bUser).kick(bReason);
      message.channel.send(bEmbed);
      return;
}

module.exports.help = {
  name: "ban"
}
