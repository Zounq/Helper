const discord = require('discord.js');
exports.run = (client, message, args) => { 
    let em = new discord.RichEmbed()
    let results = ["Ask me again", "My sources say yes", "My sources say no", "Try again later", "It's hazy..."] 
    let res = results[Math.floor(Math.random()*results.length)]

    em 
    .setTitle('🎱8-ball🎱')
    .addField('Question', message.content.split(" ").slice(1).join(" "))
    .addField('Answer', res)
    .setFooter("Helper's 8-ball")
    .setTimestamp()
    .setColor("RANDOM")

    message.channel.send({embed: em})
}
