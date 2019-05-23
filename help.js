const Discord = require('discord.js')
module.exports.run = async (bot, message, args) => {
    let command = message.content.split(" ")[0];

  console.log('Rodando Comando: help.js')
    let bicon = bot.user.displayAvatarURL;
    let botembed = new Discord.RichEmbed()
    .setDescription("z!help Ativado!")
    .setColor("#4E5D94")
    .setThumbnail(bicon)
    .addField(`Servidores:`, `${bot.guilds.size}  Servidores`, true)
    .addField(`Contador de Membros`, `${message.guild.memberCount} no servidor ${message.guild.name}.`, true)
    .addField(`Prefix:`, `* [Alterável]`, true)
    .addField('Meus Comandos:', '<a:zEmote_BlobLamp:574560094876860416> `Diversão e Misc` \n say, doggo, cat, 8ball \n \n <a:zEmote_BlobDiscord:574558593844510740> `Utilitários e Administração` \n addrole, ban, clear, help, invite, kick, prefix (não funcionando corretamente), removerole, report, sinfo, tempmute', false)
    .setFooter(`Você enviou o Comando no Server: ${message.guild.name}`);

  message.member.user.send(botembed);
  message.channel.send(`**Cheque seu DM, Enviei tudo o que precisa lá!** <a:ZaulEmoji_WumpusLove:575736910559838208>`)
}

module.exports.help = {
  name: "help",
  alias: "ajuda"
}