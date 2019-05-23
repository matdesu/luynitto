const Discord = require('discord.js');
const superagent = require('superagent');

module.exports.run = async (bot, message, args) => {
    console.log('Rodando Comando: doggo.js')

    let {body} = await superagent
    .get(`https://random.dog/woof.json`);

    let embed = new Discord.RichEmbed()
    .setColor("#ffb366")
    .setTitle("Aqui Está um Cachorrinho Para Você! 🐶")
    .setImage(body.url);

    message.channel.send(embed)

}

module.exports.help = {
  name: "doggo"
}
