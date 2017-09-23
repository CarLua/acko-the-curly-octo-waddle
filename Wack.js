const Discord = require("discord.js");
const client = new Discord.Client();

client.on("ready", () => {
  console.log("I am ready!");
});

client.on("message", (message) => {
  if (message.content === ("a!ping")) {
    message.channel.send('**Pong!**')
  }
  if (message.content === ("a!help")) {
    message.channel.send('');
  }
});
// Heroku support
client.login(process.env.BOT_TOKEN);
