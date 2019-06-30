/*
* ChannelBot Helper
* Copyright 2019 @Codingpro#0001 & @Boss#0006 :)
*/

/* Discord.js */
const Discord = require('discord.js')
let client = new Discord.Client()
const cmd = require("node-cmd");
const Enmap = require("enmap");
const fs = require("fs");

/* Setup Express */
var express = require('express');
const http = require('http');
var app = express();
var server = require('http').createServer(app);
const config = require("./config.json");
client.config = config;

var port = 3000
var server = require('http').createServer(app);
const listener = server.listen(process.env.PORT, function() {
  console.log('Your app is listening on port ' + listener.address().port);
});
setInterval(() => {
  http.get(`http://${process.env.PROJECT_DOMAIN}.glitch.me/`);
}, 280000);
app.post('/git', (req, res) => {
  if (req.headers['x-github-event'] == "push") {
  cmd.run('chmod 777 git.sh');
  cmd.get('./git.sh', (err, data) => {
    if (data) console.log(data);
    if (err) console.log(err);
  });
  cmd.run('refresh');  // Refresh project

  console.log("> [GIT] Updated with origin/master");
}

  return res.sendStatus(200); // Send back OK status
});

/* Connect discord.js to bot user */
client.login(process.env.TOKEN).catch(console.error);

/* When bot user is ready: */
client.on('ready', function (evt, callback) {
 client.user.setUsername("Helper"); // Set Bot Username
 console.log(client.user.tag + " online in " + client.guilds.size + " guilds!"); // Log Bot Startup

 /* Set Bot Status */
 client.user.setPresence({
   game: {
     type: 3, // Set to 'watching'
     name: `ChannelBot Support! | h!help` // Set what the bot is 'playing'
   },
   status: "online" // Set bot to online status
 });
});

/* Functions */
var functions = {
  sti: (string) => {
    return string.replace(/[^0-9]/g, "");
  }
}

client.commands = new Enmap();

fs.readdir("./commands/", (err, files) => {
  if (err) return console.error(err);
  files.forEach(file => {
    if (!file.endsWith(".js")) return;
    let props = require(`./commands/${file}`);
    let commandName = file.split(".")[0];
    console.log(`Attempting to load command ${commandName}`);
    client.commands.set(commandName, props);
  });
});

const DBL = require('dblapi.js');
const dbl = new DBL(process.env.DBL, { webhookServer: listener, webhookAuth: process.env.dblpass});
  dbl.webhook.on('ready', hook => {
    console.log(`Webhook running at http://${hook.hostname}:${hook.port}${hook.path}`);
  });
  dbl.webhook.on('vote', vote => {
    let g = client.guilds.get("568957622808739841")
    let embed = new Discord.RichEmbed()
    embed.setAuthor("Someone Upvoted!", client.user.avatarURL)
    if (g.members.get(vote.user)) {
      let user = g.members.get(vote.user)
      user.addRole("594559964115238913")
      embed.setDescription(`User: ${user.tag} \`${vote.user}\` just upvoted!\nThey recived the Upvoted role!\n\nUpvote and get announced! Click [here](https://discordbots.org/bot/443545183997657120/vote)!`)
    } else {
      embed.setDescription(`User: <@${vote.user}> \`${vote.user}\` just upvoted!\n\nUpvote and get announced! Click [here](https://discordbots.org/bot/443545183997657120/vote)!`)
    }
    embed.setColor(0x62c5ec)
    embed.setTimestamp()
    embed.setFooter("Thanks for supporting ChannelBot!")
    g.channels.get("594563989988573192").send(embed)
  })

const cooldown = new Set();
client.on("message", async (message) => {
   if (message.author.bot) return;
   if (message.content.indexOf(client.config.prefix) !== 0) return;
   const args = message.content.slice(client.config.prefix.length).trim().split(/ +/g);
   const command = args.shift().toLowerCase();
   const cmd = client.commands.get(command);
   if (!cmd) return;
   cmd.run(client, message, args);
})
