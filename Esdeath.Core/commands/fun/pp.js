const delay = require("delay");

module.exports = {
    name: 'pp',
    aliases: ['penis', 'howbig', 'pickle'],
    category: 'fun',
    description: 'Shows how long someones pp is',
    usage: '[command | alias] <user mention>',
    run: async (bot, message, args) => {
        if (message.mentions.members.first()) {
            let arg = args;
            let msg = await message.channel.send('looking');
            await delay(1250);
            await msg.edit(`${arg}'s pp:\n8${lenght()}D`);
        } else {
            let msg = await message.channel.send('looking');
            await delay(1250);
            await msg.edit(`${message.author}'s pp:\n8${lenght()}D`);
        }
    }
}

function lenght() {
    let length = '';
    for (let i = 0; i < getRandomInt(1000) % 20; i++) {
        length += '=';
    }
    return length;
}

function getRandomInt(max) {
    return Math.floor(Math.random() * Math.floor(max));
}