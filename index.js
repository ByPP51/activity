const RPC = require('discord-rpc')
const rpc = new RPC.Client({
    transport: 'ipc'
});

rpc.on('ready', () => {
    rpc.setActivity({
        details: '๐ค ยท .๐๐/๐๐ฃ๐ฉ๐๐๐๐๐๐ฉ๐๐ง',
        state: '๐พ ยท แดแดสษชแดแดส สแดแดแดษชษดษข!',
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
