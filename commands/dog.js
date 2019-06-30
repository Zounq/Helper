const Discord = require('discord.js'); 
const get = require('superagent'); 

exports.run = async (client, message) => { 
  await get('https://nekos.life/api/v2/img/woof').then(res => { 
  const DogEm = new Discord.RichEmbed()
  .setImage(res.body.url) 
  .setColor('RANDOM') 
  .setAuthor('Woof Woof, Doggo incoming!) 
  
    return message.channel.send(DogEm) 
  });
};
