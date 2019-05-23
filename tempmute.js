const Discord = require('discord.js')
const ms = require('ms')

module.exports.run = async (bot, message, args) => {
    console.log('Rodando Comando: tempmute.js')
    //+tempmute @notcoolguy 1d
    let tomute = message.guild.member(message.mentions.users.first() || message.guild.members.get(args[0]));
    if(!tomute) return message.reply('**ERRO** Você não especificou o Usuário');
    if(tomute.hasPermission("MUTE_MEMBERS")) return message.reply('**ERRO** Ele tem a Permissão que eu não tenho e eu não posso correr este risco! \n `MUTE_MEMBERS ALERT`');
    let muterole = message.guild.roles.find(`name`, 'Mutado');

    //criação role ;-;
    if(!muterole){
      try{
        muterole = await message.guild.createRole({
          name: "Mutado",
          color: "#3d3d3d",
          permissions:[]
        });
        message.guild.channels.forEach(async (channel, id) => {
          await channel.overwritePermission(muterole, {
            SEND_MESSAGES: false,
            ADD_REACTIONS: false
          });
        });
      }catch(e){
        console.log(e.stack);
      }
    }
    //criação role ;-;
    let mutetime = args[1];
    if(!mutetime) return message.reply("Você Não especificou um tempo!");

    await(tomute.addRole(muterole.id));
    message.reply(`<@${tomute.id}> foi mutado por ${mutetime}`);

    setTimeout(function(){
      tomute.removeRole(muterole.id);
      message.channel.send(`<@${tomute.id}> foi desmutado pelo limite de tempo executado.`);
    }, ms(mutetime));

//end module
}

module.exports.help = {
  name: "tempmute"
};
