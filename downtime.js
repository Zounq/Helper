const Discord = require('discord.js'); 
const get = require('superagent'); 
const client = require('../index.js')

exports.run = async (client, message, args) => { 

    if(!client.config.staff.includes(message.author.id)) return;

   client.channels.get('574661640193048597').send(args.join(' ')); 
   client.channels.get('583007022379696149').send(args.join(' ')); 
   client.channels.get('588443193800917141').send(args.join(' ')); 
   client.channels.get('574661845877784617').send(args.join(' ')); 
   client.channels.get('574661895957774356').send(args.join(' ')); 
   client.channels.get('574661233526046740').send(args.join(' '));

}
