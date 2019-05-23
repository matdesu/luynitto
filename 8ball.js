const Discord = require('discord.js')

module.exports.run = async (bot, message, args) => {
    console.log('Rodando Comando: 8ball.js')
  //?8ball <pergunta jose>
  if(!args[1]) return message.reply("**ERRO:** Faça uma pergunta!");
  let replies = ["Sim, Com toda Certeza!", "Não, absolutamente **NÃO.**", "Não Sei.", "Me Pergunte outra."];

  let result = Math.floor((Math.random() * replies.length));
  let question = args.slice(1).join(" ");

  let embed = new Discord.RichEmbed()
  .setTitle("🎱 Bola 8 Respondeu...")
  .setColor("#ff4d79")
  .addField("Pergunta:", question)
  .addField("Resposta:", replies[result]);

  message.channel.send(embed)

}

module.exports.help = {
  name: "8ball"
}
