const Discord = require("discord.js");
const client = new Discord.Client();

client.on("ready", () => {
  console.log("I am ready!");
});

client.on("message", (message) => {
  if (message.content.startsWith("a!ping")) {
    message.channel.send({embed: {
      color: 3447003,
      description: "**Pong!** Wack. *Acko? Acko!*"
    }});
  }
  if (message.content.startsWith("a!help")) {
    message.channel.send({embed: {
      color: #ff9933,
      description: "Acko not know help! Acko see under construction!"
    }});
  }
});
// Heroku support
client.login(process.env.BOT_TOKEN);
