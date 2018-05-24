const Discord = require('discord.js');
const client = new Discord.Client();

client.on('ready', () => {
  console.log(`Logged in as ${client.user.tag}!`);
  client.user.setPresence({game: { name: "not being creative today", type: 0}, afk: false, status: "dnd"})
        .then(foo => {
            console.log("success: " + foo);
        })
        .catch(error => {
            console.log("error: " + error);
        });
});

client.login("insert_token_pls");
