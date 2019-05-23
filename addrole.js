const Discord = require('discord.js')

module.exports.run = async (bot, message, args) => {
    console.log('Rodando Comando: addrole.js')
    //+addrole @coolguy a cool role
    if(!message.member.hasPermission("MANAGE_ROLES")) return message.reply("Este usuário pode pegar a role que quiser! \n `MANAGE_ROLES ALERT`");
      let rMember = message.guild.member(message.mentions.users.first()) || message.guild.members.get(args[0]);
      if(!rMember) return message.reply("Você não especificou o usuário. tente mencioná-lo.");
      let role = args.join(" ").slice(22);
      if(!role) return message.reply("Especifique a Role!");
      let gRole = message.guild.roles.find(`name`, role);
      if(!gRole) return message.reply("Você não especificou a role.");

      if(rMember.roles.has(gRole.id)) return message.reply("Este Usuário Já tem a role mencionada.");
        await(rMember.addRole(gRole.id));

        try{
          await rMember.send(`Parabéns, Você Ganhou a Role: ${gRole.name}`)
        }catch(e){
        message.channel.send(`Parabéns para <@${rMember.id}>, Ele ganhou a Role: ${gRole.name}, Eu Tentei lhe enviar no DM, mas o DM está Bloqueado.`)
        }
}

module.exports.help = {
  name: "addrole"
}
