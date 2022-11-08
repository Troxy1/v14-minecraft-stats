const { EmbedBuilder } = require("discord.js")
const config = require("../config.js")
const request = require('request');
exports.run = async (client, message, args) => {

 
request(`https://api.mcsrvstat.us/2/IP`, function (error, response, body) {
  const json_body = JSON.parse(body);
  const TroxyAktifOyuncu = json_body.players.online;
       const Troxy = new EmbedBuilder()
       .setTitle("Sunucu İsim - Stats")
       .setDescription(`IP: **Sunucu Ip**\nPort: **Sunucu Port**\n\nDurum: **${TroxyAktifOyuncu} Kişi Aktif**`)
       .setColor("Random")
  message.channel.send({embeds: [Troxy]})

})
}



exports.conf = {
  aliases: []
}

exports.help = {
  name: "ip"
}