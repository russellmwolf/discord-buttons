const { Structures, Client } = require("discord.js");
const MessageComponent = require('./v12/Classes/MessageComponent');
const TextChannel = require('./v12/Classes/TextChannel');
const DMChannel = require('./v12/Classes/DMChannel');
const NewsChannel = require('./v12/Classes/NewsChannel');
const Message = require('./v12/Classes/Message');

var version = require('discord.js').version.split('');
if (version.includes('(')) {
    version = version.join('').split('(').pop().split('');
}
version = parseInt(version[0] + version[1]);

module.exports = (client) => {

    if (version != 12) {
        throw new Error('The discord.js version must be v12 or high');
    }

    if (!client || !client instanceof Client)
        throw new Error("INVALID_CLIENT_PROVIDED: The Discord.js Client isn't provided or it's invalid.");

    Structures.extend('TextChannel', () => TextChannel);
    Structures.extend('DMChannel', () => DMChannel);
    Structures.extend('NewsChannel', () => NewsChannel);
    Structures.extend('Message', () => Message);

    client.ws.on('INTERACTION_CREATE', (data) => {

        if (!data.message) return;

        if (data.data.component_type) {
            const button = new MessageComponent(client, data);

            client.emit('clickButton', button);
        }
    });
}

module.exports.MessageButton = require(`./v12/Classes/MessageButton`);
module.exports.MessageActionRow = require('./v12/Classes/MessageActionRow');
module.exports.ButtonInteraction = require('./v12/Classes/MessageComponent');
module.exports.Message = require(`./v12/Classes/Message`);
module.exports.ButtonCollector = require(`./v12/Classes/ButtonCollector`);
module.exports.APIMessage = require('./v12/Classes/APIMessage').APIMessage;
module.exports.sendAPICallback = require('./v12/Classes/APIMessage').sendAPICallback;
module.exports.DMChannel = require('./v12/Classes/DMChannel');
module.exports.NewsChannel = require('./v12/Classes/NewsChannel');
module.exports.TextChannel = require('./v12/Classes/TextChannel');
module.exports.WebhookClient = require('./v12/Classes/WebhookClient');
module.exports.Util = require('./v12/Util');
module.exports.Constants = require('./v12/Constants');
