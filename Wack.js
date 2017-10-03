


/*

  A ping pong bot, whenever you send "ping", it replies "pong".

*/



// Import the discord.js module

const Discord = require('discord.js');



// Create an instance of a Discord client

const client = new Discord.Client();



// Embed test

const embedtest = {
  "title": "Embed Test ~~(did you know you can have markdown here too?)~~",
  "description": "Blame discord. [lol](https://discordapp.com)```\nem!bed-test is for embed testing.```",
  "url": "https://discordapp.com",
  "color": 1887287,
  "fields": [
    {
      "name": "Line 1",
      "value": "some of these properties have certain limits..."
    },
    {
      "name": "Line 2",
      "value": "try exceeding some of them!"
    },
    {
      "name": "Line 3",
      "value": "an informative error should show up, and this view will remain as-is until all issues are fixed"
    },
    {
      "name": "Line 4",
      "value": "these last two",
      "inline": true
    },
    {
      "name": "Line 5",
      "value": "are inline fields",
      "inline": true
    }
  ]
};

const helpEmbed = {
  "title": "Help system",
  "description": "The prefix is a!. This is Babu before 11.02.",
  "color": 901366,
  "footer": {
    "icon_url": "https://i.imgur.com/3c9zbVq.png",
    "text": "Acko Help System"
  },
  "thumbnail": {
    "url": "https://i.imgur.com/3c9zbVq.png"
  },
  "author": {
    "name": "Acko",
    "url": "https://discordapp.com",
    "icon_url": "https://i.imgur.com/3c9zbVq.png"
  },
  "fields": [
    {
      "name": "Information",
      "value": "hq - Links to UQ & CL. \nhelp - See this message.\n",
      "inline": true
    },
    {
      "name": "Fun",
      "value": "ping - The first of the first. \noof - Oof!\nreact - :thinking:\nilluminavi - Secret civilization.",
      "inline": true
    }
  ]
};

const deathOOF = {
  "title": "Roblox death sound",
  "description": "Oof!",
  "color": 15864217,
  "footer": {
    "icon_url": "https://cdn.discordapp.com/embed/avatars/0.png",
    "text": "The result of OOF is your doom."
  },
  "image": {
    "url": "https://i.imgur.com/EXSdJ9l.png"
  },
  "author": {
    "name": "TheDoomOfDeathzzxfeifvh",
    "url": "https://discordapp.com",
    "icon_url": "https://cdn.discordapp.com/embed/avatars/0.png"
  }
};

// The ready event is vital, it means that your bot will only start reacting to information

// from Discord _after_ ready is emitted

client.on('ready', () => {

  console.log('I am ready!');
  client.user.setPresence({ game: { name: 'a!help | v.1', type: 0 } });

});



// Create an event listener for messages

client.on('message', message => {

  // If the message is "ping"

  if (message.content === 'a!ping') {

    // Send "pong" to the same channel

    message.reply('pong!');

  }
   if (message.content === 'a!help') {
     message.react("👌")
     message.reply('I am sending help your way! Please check your DMs. 👍')
     message.author.sendMessage({ embed: helpEmbed })
     message.author.sendMessage("Can't see the help message? You can say b-ne!help")
   }
   if (message.content === 'a-ne!help') {
     message.react("👌")
     message.reply('I am sending help your way! Please check your DMs. 👍')
     message.author.sendMessage("The prefix is b-ne!\n Prefix for embeds is b!\n**Babu commands: **\n")
    message.author.sendMessage("help - Commands and help.")
    message.author.sendMessage("hq - Sends a DM with an invite to the CarLua and UQ discords. (can use b! without embed)")
     message.author.sendMessage("ping - Classics. (can use bc! without embed)")
     message.author.sendMessage("illuminavi - ILLUMINAVI!! (can use bc! without embed)")
     message.author.sendMessage("hello - Why can't I introduce myself? (can use b! without embed)")
     message.author.sendMessage("react - 🤔 (can use bc! without embed)")
     message.author.sendMessage("**Babu FUN Commands: **\n oof- Oof! Requested by muhammed#3243.")
 
   }
  if (message.content === "a!illuminavi") {
    message.react("😧")
    message.channel.send("ILLUMINAVI CONFIRMED! https://i.imgur.com/92wjqvK.png")
}
  if (message.content === "a!hello") {
    message.channel.send("Hi, I am Jen, alias Babu. I am here to preform commands for you! I was set to preform by Carson Houdek and lua_html.")
      }
  if (message.content === "a!hq") {
    message.react("🔥")
    message.author.sendMessage("**CarLua HQ:** https://discord.gg/aKKwVEG")
    message.author.sendMessage("**UnnamedQuality:** https://discord.gg/c4yGwuQ")
      }
  if (message.content === "a!abuintro") {
    message.channel.send("Oh, it is my turn to preform? Well, thank you!\n Hello! I am Babu, real name Jen. This is my showroom, where I am supposed to preform!\n Say b!community to view community commands, for this server only. Thank you! 🔥")
  }
  if (message.content === "a!react") {
    message.react("😂")
  }
  if (message.content === "a!pong") {
    message.react("🔔")
    message.react("😂")
    message.react("🔥")
    message.react("😧")
    message.react("👌")
    message.react("🤔")
    message.react("👍")
    message.react("⚠️")
    message.reply("u has discovered hidden secrets!\n here are mai emojissss!!!")
  }
  if (message.content === "a!oof") {
    message.react("💀")
    message.reply({ embed: deathOOF })
  }
  if (message.content === "a-ne!oof") {
    message.react("💀")
    message.reply("oof! https://i.imgur.com/EXSdJ9l.png")
  }
  if (message.content === "a!embed-test") {
    message.channel.send({ embed: embedtest })
    message.channel.send('Text-only fallback')
  }
});

// Heroku support.

client.login(process.env.BOT_TOKEN);
