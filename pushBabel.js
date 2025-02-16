export default async function(interaction, query) {
    //return interaction.reply('unavaliable | incompatible with BabelServer 2.0')
    await interaction.deferReply()
    try {
        const response = await fetch('http://localhost:1025/api/rpg', {
            method: 'POST',
            headers: {
                'Content-Type':'application/json',
            },
            body: JSON.stringify({ query })
        })
        if(!response.ok) {throw new Error(`HTTP error! status: ${response.status}`)}
        
        const data = await response.json()
        if(!data) {throw new Error(`Error: undefined data`)}
        await interaction.editReply(data.result.result || data.result)
    } catch(err) {interaction.editReply(`discord extension error: ${err}`)}
}

