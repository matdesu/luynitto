const Discord = require('discord.js')

module.exports.run = async (bot, message, args) => {
    console.log('Rodando Comando: report.js')
  //+report @NotCoolUser not cool
     let rUser = message.guild.member(message.mentions.users.first() || message.guild.members.get(args[0]));
      if (!rUser) return message.channel.send("**ERRO:** Usuário Não Especificado.");
      let reason = args.join(" ").slice(22);

      let embed = new Discord.RichEmbed()
      .setDescription("Log do Report")
      .setColor("#4E5D94")
      .addField('👤 | Usuário Reportado:', `${rUser} \n Sua ID: ${rUser.id}`)
      .addField('👮 | Reportado Por:', `${message.author} \n Sua ID: ${message.author.id}`)
      .addField('📄 | Canal do Report:', message.channel)
      .addField('⏰ | Tempo do Report:', message.createdAt)
      .addField('🤔 | Razão do Report:', reason)

      let rChannel = message.guild.channels.find('name', "report");
      if(!rChannel) return message.channel.send('**ERRO:** Não consegui Encontrar o Canal report.')


      message.delete().catch(O_o=>{});
      rChannel.send(embed);
}

module.exports.help = {
  name: "report"
}
