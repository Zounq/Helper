const discord = require('discord.js'); 
const config = require('../config.json') 
const client = require('../index.js'); 

exports.run = async (client, message) => { 

message.channel.send('Want to upvote ChannelBot? Well click here <https://discordbots.org/bot/443545183997657120/vote>.\nUpvoting is a frew way to support ChannelBot and Codingpro! If you decide the upvote, you will get the <@&594559964115238913> role, as well as some more <@356950275044671499> money!\n**You can upvote every 12 hours**')
}
