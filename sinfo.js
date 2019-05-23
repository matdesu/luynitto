const Discord = require('discord.js')

module.exports.run = async (bot, message, args) => {
    console.log('Rodando Comando: sinfo.js')
      let sicon = message.guild.iconURL;
      let infoembed = new Discord.RichEmbed()
      .setDescription('Informações do Servidor')
      .setColor("#ffb366")
      .setThumbnail(sicon)
      .addField('📝 | Nome do Servidor:', message.guild.name, true)
      .addField('📆 | Criado Em:', message.guild.createdAt, true)
      .addField('<a:entrada_usurio:571473015267786752> | Você entrou em:', message.member.joinedAt, true)
      .addField('📊 | Contador De Membros:', message.guild.memberCount, true)

      return message.channel.send(infoembed);
}

module.exports.help = {
  name: "sinfo"
}
