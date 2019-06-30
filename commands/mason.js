const discord = require('discord.js'); 
const config = require('../config.json'); 
const client = require('../index.js'); 

exports.run = async (client, message, args) => { 
  
  let mason = new discord.RichEmbed 
  
  .setTimestamp()
  .setImage('https://images-ext-1.discordapp.net/external/fUTJ5LhI4xfwwzqurbrYnuGnJ11iyQsQQMGhqaFk2qA/%3Fsize%3D128/https/cdn.discordapp.com/avatars/358776042829119498/a_28596ca6e0d05d4872ca54eae0ed49b6.gif') 
  .setTitle('Mason is some yummy fried chicken!! 😋😋')
  
    return message.channel.send(mason)
  
  
}
