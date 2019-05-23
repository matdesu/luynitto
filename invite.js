const Discord = require('discord.js')

module.exports.run = async (bot, message, args) => {
    console.log('Rodando Comando: invite.js')

    let embed = new Discord.RichEmbed()
    .setAuthor(message.author.username + '#' + message.author.discriminator)
    .setColor('#4E5D94')
    .setTitle('Aqui Está! <a:WumpusSunglasses:575736748462571531>')
    .setDescription('https://discordapp.com/api/oauth2/authorize?client_id=572751193013616650&permissions=8&scope=bot')

    message.channel.send(embed);

}

module.exports.help = {
  name: "invite"
}
