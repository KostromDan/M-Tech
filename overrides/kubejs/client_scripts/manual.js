const $Util = Java.loadClass('net.minecraft.Util')
const PonderRegistry = Java.loadClass('com.simibubi.create.foundation.ponder.PonderRegistry')

ItemEvents.clientRightClicked(event => {
    if (event.item.id == 'kubejs:mekanism_guide') {
        $Util.getPlatform().openUri('https://wiki.aidancbrady.com/w/index.php?title=Special:AllPages')
    }
})
ClientEvents.loggedIn(event => {
    JsonIO.write('kubejs/ponder.json', {ponder: String(PonderRegistry.ALL.keySet())})
})
