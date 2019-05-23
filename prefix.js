const Discord = require("discord.js");
const fs = require("fs");

exports.run = async (bot, message, args) => {

  if(!message.member.hasPermission("MANAGE_SERVER")) return message.reply("Você não tem essa permissão");
  if(!args[0] || args[0 == "help"]) return message.reply("Para trocar de Prefixo Digite: `*prefix <novo prefixo>`");

  let prefixes = JSON.parse(fs.readFileSync("./prefixes.json", "utf8"));

  prefixes[message.guild.id] = {
    prefixes: args[0]
  };

  fs.writeFile("./prefixes.json", JSON.stringify(prefixes), (err) => {
    if (err) console.log(err)
  });

  let sEmbed = new Discord.RichEmbed()
  .setColor("#4E5D94")
  .setTitle("Novo Prefix!")
  .setDescription(`Agora meus comandos se responderam com: ${args[0]}help!`);

  message.channel.send(sEmbed);

}

exports.help = {
  name: "prefix"
}