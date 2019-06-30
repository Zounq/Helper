const discord = require('discord.js'); 
const config = require('../config.json'); 
const client = require('../index.js'); 

exports.run = async (client, message, args) => { 
  if(!client.config.owners.includes(message.author.id)) return;

message.channel.send(args.join(' ')); 
message.delete()
}
