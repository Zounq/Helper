const Discord = require('discord.js'); 
const get = require('superagent'); 

exports.run = async (client, message) => { 
  await get('http://aws.random.cat/meow').then(res => { 
  const DogEm = new Discord.RichEmbed()
    const CatEm = new Discord.RichEmbed()
            .setImage(res.body.file)
            .setColor("#E6E6FF")
            .setAuthor('Meow! Kitty incoming!') 
  
    return message.channel.send(CatEm) 
  });
};
