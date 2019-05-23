const botconfig = require ("./botconfig.json");
const Discord = require ("discord.js");
const fs = require ("fs");
const Enmap = require("enmap");
const bot = new Discord.Client();
bot.commands = new Enmap();

// 🌟  H A N D L E R  🌟

fs.readdir  ("./commands/", (err, files) => {
    if (err) return console.error(err);
    files.forEach(file => {
      if (!file.endsWith(".js")) return;
      let props = require(`./commands/${file}`);
      let cmd = file.split(".")[0];
      console.log(`Estou Carregando o Comando: ${cmd}`);
      bot.commands.set(cmd, props);
    });
  });

// 🌟  H A N D L E R  🌟

bot.on ("ready", async () => {
    console.log (`----------------------------\nZaul Foi Logado com Sucesso! \nEstou Com: ${bot.guilds.size} Servidores, com ${bot.users.size} Usuários, em ${bot.channels.size} Canais! \nMeu Prefixo Default é *\n----------------------------`)
});

bot.on  ("message", async message => {
    if (message.author.bot) return;
    if (message.channel.type === "dm") return;

    let prefix = botconfig.prefix
    let messageArray = message.content.split(" ");
    let cmd = messageArray[0]
    let args = messageArray.slice(1);

    let commandfile = bot.commands.get(cmd.slice(prefix.length));
    if (commandfile) commandfile.run(bot,message,args);
});

bot.login(botconfig.token);
