const Discord = require('discord.js')

module.exports.run = async (bot, message, args) => {
    console.log('Rodando Comando: say.js');
    //?say olá


    let bmessage = args.join(" ");
    message.delete().catch();
    message.channel.send(bmessage);
}

module.exports.help = {
  name: "say"
}
