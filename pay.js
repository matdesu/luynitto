const Discord = require('discord.js');
let coins = require("../coins.json");
const fs = require("fs")

module.exports.run = async (bot, message, args) => {
    console.log('Rodando Comando: coins.js');

    if(!coins[message.author.id]){
        return message.reply("Você não tem Cookies! <:cowboypensive:575021750228615178>");
    }

    let pUser = message.guild.member(message.mentions.users.first()) || message.guild.members.get(args[0]);
    if (!coins[pUser.id]){
        coins[pUser.id] = {
            coins: 0
        };
    }

    let pCoins = coins[pUser.id].coins;
    let sCoins = coins[message.author.id].coins;

    if (sCoins < args[0]) return message.reply("Você Não tem Coins o Suficiente!");

    coins[message.author.id] = {
        coins: sCoins - parseInt(args[1])
    };

    coins[pUser.id] = {
        coins: pUser - parseInt(args[1])
    };

    message.channel.send(`${message.author} Deu para ${pUser} ${args[1]} Cookies!`);

    fs.writeFile("./coins.json", JSON.stringify(coins), (err) => {
        if (err) console.log(err)
    });

}

module.exports.help = {
  name: "coins"
}