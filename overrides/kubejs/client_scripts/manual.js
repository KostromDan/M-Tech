const $Util = Java.loadClass('net.minecraft.Util')
const $PonderRegistry = Java.loadClass('com.simibubi.create.foundation.ponder.PonderRegistry')
const $PonderTagIndexScreen = Java.loadClass('com.simibubi.create.foundation.ponder.ui.PonderTagIndexScreen')

ItemEvents.clientRightClicked(event => {
    if (event.item.id == 'mekanism:mekanism_guide') {
        $Util.getPlatform().openUri('https://wiki.aidancbrady.com/w/index.php?title=Special:AllPages')
        event.player.tell('Opened Mekanism wiki! Check your browser!')
    }

})

ClientEvents.loggedIn(event => {
    JsonIO.write('kubejs/ponder.json', {ponder: String($PonderRegistry.ALL.keySet())})
})

NetworkEvents.fromServer('openPonderTagIndexScreen', event => {
    event.player.tell(event.data)
    let screen = new $PonderTagIndexScreen()
    Client.setCurrentScreen(screen)
})