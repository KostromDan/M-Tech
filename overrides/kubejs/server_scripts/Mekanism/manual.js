const $Util = Java.loadClass('net.minecraft.Util')
ItemEvents.rightClicked(event => {
    if (event.item.id.toString().includes('kubejs:mekanism_guide')) {
        $Util.getPlatform().openUri('https://wiki.aidancbrady.com/w/index.php?title=Special:AllPages')
    }
})