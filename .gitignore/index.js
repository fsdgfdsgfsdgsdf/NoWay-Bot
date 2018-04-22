const Discord = require("discord.js");

var bot = new Discord.Client();

bot.on("ready", fonction(){
    bot.user.setGame("NoWay, !help");
    console.log("Le bot a bien ete connecte");
});

bot.login("NDM3NTYzMzk4OTEwMTE1ODQw.Db4Cfw.bwGqpz-xGhEsB5eID0aAKGkPb5M");
