const Discord = require('discord.js');
const superagent = require('superagent');

module.exports.run = async (bot, message, args) => {
    console.log('Rodando Comando: cat.js')

    let {body} = await superagent
    .get(`http://aws.random.cat//meow`);

    let embed = new Discord.RichEmbed()
    .setColor("#ffb366")
    .setTitle("Aqui Está um Gato Para Você! 🐱")
    .setImage(body.file);

    message.channel.send(embed)

}

module.exports.help = {
  name: "cat"
}
