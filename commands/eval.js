const Discord = require('discord.js');
const client = require('../index.js');
exports.run = async (client, message, args) => {

if(client.config.owners.includes(message.author.id)) return;

    let evaled;
    try {
        evaled = await eval(args.join(' '));
    } catch (err) {
        const embed = new Discord.RichEmbed();
        embed.setTitle('JavaScript Eval');
        embed.setColor('RED');
        embed.setDescription(`[Error]\n \`\`\`js\n${err}\`\`\``);
        embed.setFooter(client.user.username, client.user.avatarURL);
        embed.setTimestamp();
        return message.channel.send(embed);
    }

    if (typeof evaled === 'string') {
        evaled = evaled.replace(client.token, '[TOKEN]');
    }


    if (typeof evaled === 'object') {
        evaled = require('util').inspect(evaled, {
            depth: 0
        });
    }
    if (evaled == undefined) {
        evaled = 'undefined';
    }

    const embed = new Discord.RichEmbed();
    embed.setTitle('JavaScript Eval');
    embed.setColor('GREEN');
    embed.setDescription(`\`\`\`js\n${evaled}\`\`\``);
    embed.setFooter(client.user.username, client.user.avatarURL);
    embed.setTimestamp();
    message.channel.send(embed);
};
