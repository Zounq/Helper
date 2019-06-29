/*
* ChannelBot Helper
* Copyright 2019 @Codingpro#0001 & @Boss#0006
*/

/* Discord.js */
const Discord = require('discord.js')
let client = new Discord.Client()
const cmd = require("node-cmd");

/* Setup Express */
var express = require('express');
var app = express();

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
 if(message.author.bot) return;
 if(message.content.toLowerCase().startsWith("h!")) {
   for(let i in commands) {
     if(message.content.toLowerCase().split(" ")[0].slice(2) === i || commands[i].aliases.includes(message.content.toLowerCase().split(" ")[0].slice(2))) {
       commands[i].run(message)
       console.log(`${message.author.tag} used the ${commands[i].usage} command in ${message.guild.name}`)
     }
   }
 }
})
