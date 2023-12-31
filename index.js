require('dotenv').config()

const { Client , IntentsBitField} = require('discord.js')

const client = new Client({
    intents: [
        IntentsBitField.Flags.Guilds,
        IntentsBitField.Flags.GuildMembers,
        IntentsBitField.Flags.GuildMessages,
        IntentsBitField.Flags.MessageContent,
    ]
})



client.on('ready', (c) =>{
    console.log(`${c.user.tag} is ready`)
})

client.on('messageCreate', (message) => {
    console.log(message.content)
})

client.login(process.env.DISCORD_TOKEN)