ForgeEvents.onEvent('net.minecraftforge.event.entity.player.PlayerEvent$PlayerChangedDimensionEvent', event => {
    global.ChangedDim(event)
})

global.ChangedDim = (event) => {
    if (event.getTo() == "minecraft:the_end") {
        do_bbb_tick = true
    }
}