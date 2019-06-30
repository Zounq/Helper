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
var app = express();
const config = require("./config.json");
client.config = config;

var port = 3000
app.get("/", (request, response) => {
  response.sendStatus(200);
});
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
app.listen(port, () => console.log("Server Online!"))


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
const dbl = new DBL(process.env.DBL, { webhookPort: 7654, webhookAuth: process.env.dblpass});
dbl.webhook.on('ready', hook => {
  console.log(`Webhook running at http://${hook.hostname}:${hook.port}${hook.path}`);
});
dbl.webhook.on('vote', vote => {
  console.log(`User with ID ${vote.user} just voted!`);
});

const cooldown = new Set();
client.on("message", async (message) => {
   if (message.author.bot) return;
   if (message.content.indexOf(client.config.prefix) !== 0) return;
   const args = message.content.slice(client.config.prefix.length).trim().split(/ +/g);
   const command = args.shift().toLowerCase();
   const cmd = client.commands.get(command);
   if (!cmd) return;
   cmd.run(client, message);
})
