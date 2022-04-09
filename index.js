const RPC = require('discord-rpc')
const rpc = new RPC.Client({
    transport: 'ipc'
});

rpc.on('ready', () => {
    rpc.setActivity({
        details: '🖤 · .𝙜𝙜/𝙖𝙣𝙩𝙞𝙘𝙝𝙚𝙖𝙩𝙚𝙧',
        state: '💾 · ᴇᴛʜɪᴄᴀʟ ʜᴀᴄᴋɪɴɢ!',
        startTimestamp: new Date(),
        largeImageKey: 'bot_logo',
        largeImageText: 'My Discord Server',
        buttons: [{
            label: 'JOIN ANTICHEATER',
            url: 'https://discord.gg/sBvJEtDU3S'
        }, {
            label: 'YT CHANNEL',
            url: 'https://www.youtube.com/channel/UC18xKxdxhVQ-V7wZhnCLqjQ'
        }]
    });
    console.log('RPC is running');
})

rpc.login(
    {
        clientId: '962158751350128670'
    })
