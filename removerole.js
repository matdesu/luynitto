const Discord = require('discord.js')

module.exports.run = async (bot, message, args) => {
    console.log('Rodando Comando: removerole.js')
    //+addrole @coolguy a cool role
    if(!message.member.hasPermission("MANAGE_MEMBERS")) return message.reply("Este usuário pode pegar a role que quiser! \n `MANAGE_ROLES ALERT`");
      let rMember = message.guild.member(message.mentions.users.first()) || message.guild.members.get(args[0]);
      if(!rMember) return message.reply("Você não especificou o usuário. tente mencioná-lo.");
      let role = args.join(" ").slice(22);
      if(!role) return message.reply("Especifique a Role!");
      let gRole = message.guild.roles.find(`name`, role);
      if(!gRole) return message.reply("Você não especificou a role.");

      if(!rMember.roles.has(gRole.id)) return message.reply("Este usuário não tem a role Mencionada.");
        await(rMember.removeRole(gRole.id));

        try{
          await rMember.send(`Você foi incompetente ou não compriu as regras da role, R.I.P ${gRole.name} role.`)
        }catch(e){
        message.channel.send(`<@${rMember.id}>, Ele Perdeu a Role: ${gRole.name}, por Não comprir as regras da role, ou porque foi incompetente, Eu Tentei lhe enviar no DM, mas o DM está Bloqueado.`)
        }
}

module.exports.help = {
  name: "removerole"
}
