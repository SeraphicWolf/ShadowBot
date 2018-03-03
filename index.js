const Discord = require("discord.js");
const client = new Discord.Client();

const PREFIX = "!"

var fortunes = [
    "Yes",
    "No",
    "Mabye",
    "Hell No",
];

client.user.setActivity("GAME HERE");

var bot = new Discord.Client();

client.on("ready", function() {
    console.log("Ready");
});

client.on("message", function(message) {
    if (message.author.equals(bot.user)) return;

    if (!message.content.startsWith(PREFIX)) return;

    var args = message.content.substring(PREFIX.length).split(" ");

    switch (args[0]) {
        case "ping":
           message.channel.sendMessage("Pong!");
           break;
        case "botinfo":
          var embed = new Discord.RichEmbed()
           .addField("This Bot Was Created on 2/28/2018 at 9:59 PM")
           message.channel.sendEmbed(embed);
           break;
        case "8ball":
          if (args[1]) message.channel.sendMessage(fortunes[Math.floor(Math.random() * fortunes.length)]);
          else message.channel.sendMessage("I can't read that");
          break;
        case "help":
           var embed = new Discord.RichEmbed()
            .addField("ping","Pong!")
            .addField("botinfo","Display's Info about the bot")
            .addField("8ball","Tell's The Future!")
            message.channel.sendEmbed(embed);
            break;
        default:
           message.channel.sendMessage("Invalid Command");
    }
});

client.login(process.env.BOT_TOKEN);
