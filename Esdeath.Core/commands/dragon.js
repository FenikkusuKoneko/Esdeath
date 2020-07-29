const config = {
    owner: process.env.OWNER
};

exports.run = (client, message, args) => {
    if(message.member.id === config.owner.toString()) {
        message.channel.send(`Hello master.\nYou are the best <@${config.owner.toString()}>!!! <:heart_diamond:738026632891334677>`);
        return;
    }

    message.channel.send('My owner is the coolest! <:heart_diamond:738026632891334677>');
}

exports.help = {
    name: 'dragon'
}