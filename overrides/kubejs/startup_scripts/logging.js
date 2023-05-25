ForgeEvents.onEvent('net.minecraftforge.event.entity.player.PlayerEvent$PlayerChangedDimensionEvent', event => {
    global.ChangedDim(event)
})

global.ChangedDim = (event) => {
    let dimTo = event.getTo()
    let dimFrom = event.getFrom()
    let player = event.getEntity()
    console.log(`M-Tech-logging: Player ${player.username} changed dimension from ${dimFrom.location()} to ${dimTo.location()}. Cords: ${Math.floor(player.x)} ${Math.floor(player.y)} ${Math.floor(player.z)}!`)
}