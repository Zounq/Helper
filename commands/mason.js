const discord = require('discord.js'); 
const config = require('../config.json') 
const client = require('../index.js'); 

exports.run = async (client, message) => { 

const mason = new discord.RichEmbed()

.setTitle('Chickens!')
.setFooter("Chickens are god tier!")
.setColor("RANDOM")
.setTimestamp()
.addField("Chicken Fact #1", "Did you know that chickens are the best animal in the entire world? Well now you do!!🐔🐔", true)
.addField("Chicken Fact #2", "Did you know that our very own staff member <@358776042829119498> is a chicken? Well it's true! Just don't tell him he tastes good or that you want to eat him or he will ban you!!🐔🐔", true)
.addField("Chicken Fact #3", "Did you know that there are more chickens on earth than humans?? There are over 25 billion chickens on earth. Chickens are the superior being!!🐔🐔", true)
.addField("Chicken Fact #4", "Did you know that as chickens grow older they lay larger and more eggs? Go mason!", true)
.setThumbnail("https://images-ext-1.discordapp.net/external/fUTJ5LhI4xfwwzqurbrYnuGnJ11iyQsQQMGhqaFk2qA/%3Fsize%3D128/https/cdn.discordapp.com/avatars/358776042829119498/a_28596ca6e0d05d4872ca54eae0ed49b6.gif")
.setImage('https://cdn.discordapp.com/attachments/584469670610862082/595070399071387688/chicken-011.png')

message.channel.send(mason)
}
