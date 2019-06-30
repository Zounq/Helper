const discord = require('discord.js'); 
const config = require('../config.json'); 
const client = require('../index.js'); 

exports.run = async (client, message) => { 

    let time = Date.now();
    let msg = await message.channel.send('<a:loadingg:594656471934042167> Ping!');
    let now = Date.now();
    await msg.edit(`<a:acheck:587844986868072458> Pong! ${now - time}ms`);


}
