const discord = require('discord.js'); 
const config = require('../config.json'); 
const client = require('../index.js'); 

exports.run = async (client, message) => { 

   message.channel.send("Hello there, my prefix is currently `ch!` and that cannot be changed. Don't worry though, it will be in the future sometime! :smile:\nOr you can upvote this suggestion in hope that it speeds up the process!\nhttps://canary.discordapp.com/channels/568957622808739841/574661866467622932/584464849833164823")

}
