const discord = require('discord.js');
const client = new discord.Client({ intents: discord.Intents.ALL })
const disbut = require('./src/index');
disbut(client)
const Util = require('./src/v12/Util');

//console.log(disbut)

client.on('ready', () => {
    console.log(client.user.tag)
    //client.guilds.cache.get('728503987866828870').commands.create({ name: 'hi', 'description': 'HI' });
});
//client.on('debug', console.log);

client.on('message', async (message) => {
    //if (message.author.bot) return;
    if (message.content.startsWith('o')) {

        //let e = message.guild.emojis.cache.get('729208650131963946');

        const embed = new discord.MessageEmbed()
            .setDescription(`${discord.version}`)

        let option = new disbut.MessageMenuOption()
            .setLabel('op')
            .setValue('hi')
            .setDescription('ss')
            .setEmoji('❌')

        let reload = new disbut.MessageMenuOption()
            .setLabel('reload')
            .setEmoji('780988312172101682')
            .setValue('reload')

        let select = new disbut.MessageMenu()
            .setID('hey')
            .addOption(option)
            .addOption(reload)
            // .setMaxValues(2)
            .setPlaceholder('opla')

        let btn = new disbut.MessageButton()
            .setLabel(' ')
            .setID('id')
            .setStyle('blurple')
            .setEmoji('❌')

        let group1 = new disbut.MessageActionRow()
            .addComponent(btn)

        let group2 = new disbut.MessageActionRow()
            .addComponent(select);

        let m = await message.channel.send('hi', { components: [group2, group1] });

        // console.log(m.components[0].components[0].options)

        /*let collector = m.createButtonCollector(b => b, { time: 10000 });

        collector.on('collect', b => console.log(b.discordID));

        collector.on('end', b => console.log('end'))*/

        //await wait(1000);

        //m.edit('s', btn2)

        /*m.edit('sbuwbdsjndsjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjdnkalsnsnsjne dncmsdbh f nrjhknbhnkjrsfnhsdn  rjrjrjrrrrrrrrrrrrrrrrrrrriojaiudhfurjsbvisnfadhiuhsiuzdravei az se kazvam angelo priqtno mi e hahadajidsjidjaisssssssssssssssssssssjuhuifsbebdhsfhdsbfhwbahfdbfbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbwuiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiibbbbbbbbbbbbbbbbbbbbqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqiiiiiiiiiiiiiiiiiiiiiiiiiibbbdkkkkkkkkkkkkkkkkkkkiwhqksjdhbcuaaaaaaaaaaaaaaaaaaaaaaaaaaudhdncbdjsjooooooooooooooooooooooooooooqqqqqqqqqqqqwwwwwwwwwwwwwwwweeeeeeeeeeeeeeeeerrrrrrrrrrrrrrrrttttttttttttttttyyyyyyyyyyyyyyyyuuuuuuuuuuuuuiooooooooooooooooppppppppppppppppppppaaaaaaaaaaasssssssssbbbbbbbbdksndjjjjjjjjjjjjjjjjjjsssssssssssssssssssssssssssssssssadwdabhsbsdgysdhagdagyydihbsbgggggdyeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeedbjskjjddddddddddddddddddddddddddddddddddddddddddddddddduwebsddusiudijbuibiabdiugdebiuwbwaibewuafgwifuggggggggggggggggggggggggggggggggggggggggggssssssssssssssssssooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooohsaifhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhweuiooooooooooooooooooooooooooooooooopap\naaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaufhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhheuwfuuuuuuuuuuuuuuuuuuuuuuuuuuuuusbuwbdsjndsjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjdnkalsnsnsjne dncmsdbh f nrjhknbhnkjrsfnhsdn  rjrjrjrrrrrrrrrrrrrrrrrrrriojaiudhfurjsbvisnfadhiuhsiuzdravei az se kazvam angelo priqtno mi e hahadajidsjidjaisssssssssssssssssssssjuhuifsbebdhsfhdsbfhwbahfdbfbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbwuiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiibbbbbbbbbbbbbbbbbbbbqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqiiiiiiiiiiiiiiiiiiiiiiiiiibbbdkkkkkkkkkkkkkkkkkkkiwhqksjdhbcuaaaaaaaaaaaaaaaaaaaaaaaaaaudhdncbdjsjooooooooooooooooooooooooooooqqqqqqqqqqqqwwwwwwwwwwwwwwwweeeeeeeeeeeeeeeeerrrrrrrrrrrrrrrrttttttttttttttttyyyyyyyyyyyyyyyyuuuuuuuuuuuuuiooooooooooooooooppppppppppppppppppppaaaaaaaaaaasssssssssbbbbbbbbdksndjjjjjjjjjjjjjjjjjjsssssssssssssssssssssssssssssssssadwdabhsbsdgysdhagdagyydihbsbgggggdyeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeedbjskjjddddddddddddddddddddddddddddddddddddddddddddddddduwebsddusiudijbuibiabdiugdebiuwbwaibewuafgwifuggggggggggggggggggggggggggggggggggggggggggssssssssssssssssssooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooohsaifhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhweuiooooooooooooooooooooooooooooooooopapaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaufhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhheuwfuuuuuuuuuuuuuuuuuuuuuuuuuuuuu', {
            tts: true,
            split: true
        })*/
    } else if (message.content.startsWith('s')) {
        message.channel.send('sbuwbdsjndsjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjdnkalsnsnsjne dncmsdbh f nrjhknbhnkjrsfnhsdn  rjrjrjrrrrrrrrrrrrrrrrrrrriojaiudhfurjsbvisnfadhiuhsiuzdravei az se kazvam angelo priqtno mi e hahadajidsjidjaisssssssssssssssssssssjuhuifsbebdhsfhdsbfhwbahfdbfbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbwuiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiibbbbbbbbbbbbbbbbbbbbqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqiiiiiiiiiiiiiiiiiiiiiiiiiibbbdkkkkkkkkkkkkkkkkkkkiwhqksjdhbcuaaaaaaaaaaaaaaaaaaaaaaaaaaudhdncbdjsjooooooooooooooooooooooooooooqqqqqqqqqqqqwwwwwwwwwwwwwwwweeeeeeeeeeeeeeeeerrrrrrrrrrrrrrrrttttttttttttttttyyyyyyyyyyyyyyyyuuuuuuuuuuuuuiooooooooooooooooppppppppppppppppppppaaaaaaaaaaasssssssssbbbbbbbbdksndjjjjjjjjjjjjjjjjjjsssssssssssssssssssssssssssssssssadwdabhsbsdgysdhagdagyydihbsbgggggdyeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeedbjskjjddddddddddddddddddddddddddddddddddddddddddddddddduwebsddusiudijbuibiabdiugdebiuwbwaibewuafgwifuggggggggggggggggggggggggggggggggggggggggggssssssssssssssssssooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooohsaifhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhweuiooooooooooooooooooooooooooooooooopap\naaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaufhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhheuwfuuuuuuuuuuuuuuuuuuuuuuuuuuuuusbuwbdsjndsjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjdnkalsnsnsjne dncmsdbh f nrjhknbhnkjrsfnhsdn  rjrjrjrrrrrrrrrrrrrrrrrrrriojaiudhfurjsbvisnfadhiuhsiuzdravei az se kazvam angelo priqtno mi e hahadajidsjidjaisssssssssssssssssssssjuhuifsbebdhsfhdsbfhwbahfdbfbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbwuiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiibbbbbbbbbbbbbbbbbbbbqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqiiiiiiiiiiiiiiiiiiiiiiiiiibbbdkkkkkkkkkkkkkkkkkkkiwhqksjdhbcuaaaaaaaaaaaaaaaaaaaaaaaaaaudhdncbdjsjooooooooooooooooooooooooooooqqqqqqqqqqqqwwwwwwwwwwwwwwwweeeeeeeeeeeeeeeeerrrrrrrrrrrrrrrrttttttttttttttttyyyyyyyyyyyyyyyyuuuuuuuuuuuuuiooooooooooooooooppppppppppppppppppppaaaaaaaaaaasssssssssbbbbbbbbdksndjjjjjjjjjjjjjjjjjjsssssssssssssssssssssssssssssssssadwdabhsbsdgysdhagdagyydihbsbgggggdyeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeedbjskjjddddddddddddddddddddddddddddddddddddddddddddddddduwebsddusiudijbuibiabdiugdebiuwbwaibewuafgwifuggggggggggggggggggggggggggggggggggggggggggssssssssssssssssssooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooohsaifhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhweuiooooooooooooooooooooooooooooooooopapaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaufhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhheuwfuuuuuuuuuuuuuuuuuuuuuuuuuuuuu', {
            tts: true,
            split: true
        })
    }
})

client.on('clickButton', async (button) => {

    console.log(button.clicker.user.tag);

    if (button.clicker.user.id === '519759839673581568') {
        button.channel.send(`SPAMMER SMOTAN BUG ${button.clicker.member}`)
    }

    //await button.defer();
    const embed = new discord.MessageEmbed()
        .setDescription(`Clicked by ${button.clicker.user.tag}`);

    let btn = new disbut.MessageButton()
        .setEmoji('785062885952192512')
        .setID('d')
        .setStyle('blurple');

    let row = new disbut.MessageActionRow()
        .addComponent(btn);

    button.reply.think().then(async (r) => {
        await wait(1000);
        r.edit('awaited')
    })
});

client.on('clickMenu', async (menu) => {
    // let reply = await menu.reply.think();

    if (menu.values[0] === 'reload') {
        menu.message.update('hey', menu.message.components)
    }
})

/*client.on('interaction', async (interaction) => {
    let btn = new disbut.MessageButton()
        .setEmoji('785062885952192512')
        .setID('d')
        .setStyle('blurple');   

    interaction.user.send('GG', btn);

    interaction.reply('hi');
    await wait(1000);
    interaction.editReply('hi', btn);
})*/

client.login('Nzg0MDk5MTI1OTkzNjY4Njkw.X8kXNw.1La2nGJ-K4Deo23N0et0wOflC8U');

function wait(ms) {
    return new Promise(resolve => setTimeout(resolve, ms));
}