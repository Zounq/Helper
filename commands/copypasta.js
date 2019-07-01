const Discord = require('discord.js'); 
const get = require('superagent'); 

exports.run = async (client, message) => { 

    message.channel.send("COPYPASTAS!!!\n\nThere are 5 reasons why what you posted is fake.\n\n**Reason #1:** Discord doesn't reveal your IP address.\n**Reason 2:** If they did reveal your IP address it would not be via a friend request because that is just plain stupid.\n**Reason 3:** Discord can delete 453 accounts in 60 seconds. So they can delete one account in no time.\n**Reason 4:** If there was an issue with anything they would post it on Twitter or Reddit, not via some dome copypasta you found on the internet.\n**Reason 5:** If it has `@`everyone in the message, it's almost always fake since large servers do not allow you to do mention `@`everyone, therefore resulting in it sending the wrong message.\n\nhttps://i.imgur.com/3hUemnw.png\nhttps://i.imgur.com/QezWq3n.png\nhttps://i.imgur.com/EHimmbf.png")
}
