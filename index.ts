import DiscordJS, { Client ,Intents } from 'discord.js'
import dotenv from 'dotenv'
dotenv.config()

const client = new DiscordJS.Client({
    intents: [
        Intents.FLAGS.GUILDS,
        Intents.FLAGS.GUILD_MESSAGES
    ]
})
client.on('messageCreate', (message) =>{
    if (message.content == 'Kitute') {
        message.reply({
            content: 'da o cu',
        })
    }

})

client.on('ready', () => {
    console.log('O bot iatneh está no ar!')
})
client.login(process.env.TOKEN)