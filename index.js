const Discord = require("discord.js");
const client = new Discord.Client();
const PREFIX = "!"

var fortunes = ["Yes", "No", "Mabye", "Hell No"];
client.on("ready", () => {
  console.log("Ready");
  client.user.setActivity("Say !help for Help!", {type: 'PLAYING'});
});

client.on("message", message => {
  const args = message.content.split(' ');
  let command = message.content.toLowerCase().split(" ")[0];
  command = command.slice(PREFIX.length)
  
  if (message.author.bot) return;
  if (!message.content.startsWith(PREFIX)) return;

  switch (command) {
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
      .addField("unity","Display's info on a special project")
      message.channel.sendEmbed(embed);
    break;
      
    case "unity":
      var embed = new Discord.RichEmbed()
      .addField("https://gamejolt.com/games/mmdunitytest/325088")
      message.channel.sendEmbed(embed);
    break;
      
    default:
      message.channel.sendMessage("Invalid Command");
    }
});

client.login(process.env.BOT_TOKEN);

