// Listen to item registry event
StartupEvents.registry('item', event => {
    event.create('basic_control_circuit_small')
})
ForgeEvents.onEvent('net.minecraftforge.event.entity.player.PlayerEvent$PlayerChangedDimensionEvent', event => {
    global.ChangedDim(event)
})

global.ChangedDim = (event) => {
    let dimTo = event.getTo()
    let dimFrom = event.getFrom()
    let player = event.getEntity()
    let server = player.server
    let level = player.level
    console.log(`M-Tech-logging: Player ${player.username} changed dimension from ${dimFrom.location()} to ${dimTo.location()}. Cords: ${Math.floor(player.x)} ${Math.floor(player.y)} ${Math.floor(player.z)}!`)
    if (dimTo == "minecraft:the_end") {
        if (!player.data.ftbquests.isCompleted("6A72CB008C10DA05")) {
            player.tell("You haven't got access to the end! Collect eyes by yourself!")
            console.log(`M-Tech-logging: Player ${player.username} tried to cheat the end dimension!`)
            server.runCommand(`execute in minecraft:overworld run tp ${player.username} 0 400 0`)
            server.runCommand(`effect give ${player.username} minecraft:slow_falling 100`)
        } else if (!player.data.ftbquests.isCompleted("181B66292B3EA3E5") && !player.stages.has('dragon_summoned')) {
            server.scheduleInTicks(100, callback => {
                if (level.getDragons().size() == 0) {
                    let positions = [
                        {x: 3.5, z: 0.5},
                        {x: -2.5, z: 0.5},
                        {x: 0.5, z: 3.5},
                        {x: 0.5, z: -2.5}]
                    for (let y = 80; y > 40; y--) {
                        positions.forEach(pos => {
                            Utils.server.runCommand(`execute in minecraft:the_end if block ${Math.floor(pos.x - 0.5)} ${y - 1} ${Math.floor(pos.z - 0.5)} minecraft:bedrock run summon minecraft:end_crystal ${pos.x} ${y} ${pos.z} {Motion: [0.0d, 0.0d, 0.0d], FallDistance: 0.0f, CanUpdate: 1b, Fire: -1s, Invulnerable: 1b, Air: 300s, OnGround: 0b, PortalCooldown: 0, Rotation: [0.0f, 0.0f], ShowBottom: 0b}`)
                        })
                    }
                    level.dragonFight().tryRespawn()
                    console.log(`M-Tech-logging: Player ${player.username} Haven't reached the end yet, summoning dragon!`)
                    player.tell('You are in the end first time, but another player already killed dragon, summoning dragon for you!')
                    event.player.stages.add('dragon_summoned')
                }
            })
        }
    }
}