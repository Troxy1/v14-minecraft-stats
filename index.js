const { Client, GatewayIntentBits, Partials } = require("discord.js");
const config = require("./config.js");
//</Troxy
//</Troxy
//</Troxy
//</Troxy
//</Troxy
//</Troxy
//</Troxy
//</Troxy
const client = new Client({
  partials: [
    Partials.Message,
    Partials.Channel,
    Partials.GuildMember,
    Partials.Reaction,
    Partials.GuildScheduledEvent,
    Partials.User,
    Partials.ThreadMember,
  ],
  intents: [
    GatewayIntentBits.Guilds,
    GatewayIntentBits.GuildMembers,
    GatewayIntentBits.GuildBans,
    GatewayIntentBits.GuildEmojisAndStickers,
    GatewayIntentBits.GuildIntegrations,
    GatewayIntentBits.GuildWebhooks,
    GatewayIntentBits.GuildInvites,
    GatewayIntentBits.GuildVoiceStates,
    GatewayIntentBits.GuildPresences,
    GatewayIntentBits.GuildMessages,
    GatewayIntentBits.GuildMessageReactions,
    GatewayIntentBits.GuildMessageTyping,
    GatewayIntentBits.DirectMessages,
    GatewayIntentBits.DirectMessageReactions,
    GatewayIntentBits.DirectMessageTyping,
    GatewayIntentBits.MessageContent,
  ],
});

module.exports = client;

require("./events/message.js")
require("./events/ready.js")//</Troxy

client.login(config.token)//</Troxy
const request = require('request');
  function api() {
    request(`https://api.mcsrvstat.us/2/IP`, function (error, response, body) {
        const json_body = JSON.parse(body);
        const TroxyAktifOyuncu = json_body.players.online;
//</Troxy
        client.user.setActivity(`${TroxyAktifOyuncu} Kişi SSunucuİsim`)
          //</Troxy
        });
    };

setInterval(api, 1000);
//</Troxy
//</Troxy
//</Troxy
//</Troxy
//</Troxy
//</Troxy
//</Troxy
//</Troxy