const Discord = require('discord.js')

module.exports.run = async (bot, message, args) => {
    console.log('Rodando Comando: apagar.js');
    //?apagar 100

    if(!message.member.hasPermission("MANAGE_MESSAGES")) return message.reply("não.");
    if(!args[0]) return message.reply("não, não, e **NÃO.**")
    message.channel.bulkDelete(args[0]).then(() => {
        message.channel.send(`__Apagado com Sucesso as ${args[0]} Mensagens!__`).then(msg => msg.delete(5000));
    })

    
}

module.exports.help = {
  name: "apagar"
}
