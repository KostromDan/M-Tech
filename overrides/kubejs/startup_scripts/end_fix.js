ForgeEvents.onEvent('net.minecraftforge.event.entity.player.PlayerEvent$PlayerChangedDimensionEvent', event => {
    global.ChangedDim(event)
})

global.ChangedDim = (event) => {
    let dimTo = event.getTo()
    if (dimTo == "minecraft:the_end") {
        do_bbb_tick = true
    }
}