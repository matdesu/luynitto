const Discord = require('discord.js');
let coins = require("../coins.json");

module.exports.run = async (bot, message, args) => {
    console.log('Rodando Comando: coins.js');

    if(!coins[message.author.id]){
      coins[message.author.id] = {
        coins: 0
      };
    }

    let uCoins = coins[message.author.id].coins;

    let embed = new Discord.RichEmbed()
    .setAuthor(message.author.username)
    .setColor("#ff1a53")
    .addField("Aqui Está, Você Tem:", `${uCoins} Cookies! 🍪`)
    .setFooter(`Comando Enviado Por: ${message.author.username}#${message.author.discriminator}`)

    message.channel.send(embed).then(msg => {msg.delete(20000)});
}

module.exports.help = {
  name: "coins"
}