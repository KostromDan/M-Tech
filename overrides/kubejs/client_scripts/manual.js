const $Util = Java.loadClass('net.minecraft.Util')
ItemEvents.clientRightClicked(event => {
    if (event.item.id == 'kubejs:mekanism_guide') {
        $Util.getPlatform().openUri('https://wiki.aidancbrady.com/w/index.php?title=Special:AllPages')
    }
})