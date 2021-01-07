const Discord = require('discord.js');
const CONFIG = require('./config.json');

const PREFIX = CONFIG.prefix;
const TOKEN = CONFIG.token;

const client = new Discord.Client();

client.once('ready', ()=>{
	console.log("Ready!");
});

client.login(TOKEN)