import { Client, GatewayIntentBits, ActivityType} from 'discord.js'
import pushBabel from './pushBabel.js'

import dotenv from 'dotenv'
dotenv.config()

const client = new Client({
	presence: {
		status: 'online',
		afk: false,
		activities: [{
			name: `RPG`,
			type: ActivityType.Playing
		}]
	},
	intents: [
		GatewayIntentBits.Guilds,
		GatewayIntentBits.GuildMessages,
		GatewayIntentBits.MessageContent
	]
})

client.on("ready", () => {
	console.log("Cardial started")
	console.log("by Babel systems")
	console.log("---------------------")
})

client.on("interactionCreate", async (interaction) => {
	const client_data = client
	if(
		interaction.isCommand() && 
		interaction.user.bot == false &&
		interaction.commandName == "rpg"
	) {
		pushBabel(interaction, interaction.options.getString('query'))
	}
})

client.login(process.env.token)
