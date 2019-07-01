const discord = require('discord.js'); 
const config = require('../config.json') 
const client = require('../index.js'); 

exports.run = async (client, message, args) => { 

    const helpembed = new discord.RichEmbed()

    .setTitle( "Helper Commands", "https://cdn.discordapp.com/avatars/594568982342664194/275908a4c33320f641404a8afa74288d.png?size=2048")
    .setTimestamp()
    .addField("<:channelbot:575142890578378752> Support Commands", "`h!upvote` - Gives information on upvoting.\n`h!prefix` - Tells about ChannelBot's unchangeable prefix.\n`h!channelbot` - Gives links for ChannelBot.\n`h!copypasta` - Tells why Copypasta PSA's are fake.")
    .addField("<a:cbparty:595104333515849728> Fun Commands", "`h!8ball` - Ask the 8ball a question.\n`h!cat` - Displays a random picture of a cat.\n`h!dog` - Displays a random picture of a dog.\n`h!mason` - Shows some chicken things:tm:\n`h!ping` - Pings the bot.")
    .addField("<:cbstaff:595104966927056909> ChannelBot Staff Commands", "`h!downtime` - Sends a message to all channels and #outage about a ChannelBot Outage\n`h!eval` - Evaluates some code\n`h!say` - Makes the bot say a message.")
    .setFooter("Helper | ChannelBot Manager Bot")

    message.channel.send(helpembed)
}
