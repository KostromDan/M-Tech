// Listen to item registry event
StartupEvents.registry('item', event => {
    event.create('basic_control_circuit_small')
})
ForgeEvents.onEvent('net.minecraftforge.event.entity.player.PlayerEvent$PlayerChangedDimensionEvent', event => {
    let dim = event.getTo()
    let player = event.getEntity()
    console.log(`M-Tech-logging: Player ${player.username} changed dimension to ${dim}. Cords: ${Math.floor(player.x)} ${Math.floor(player.y)} ${Math.floor(player.z)}!`)
    if (dim === "minecraft:the_end" && !player.data.ftbquests.isCompleted("6A72CB008C10DA05")) {
        player.tell("You haven't got access to the end! Collect eyes by yourself!")
        Utils.server.runCommand(`execute in minecraft:overworld run tp ${player.username} 0 330 0`)
        Utils.server.runCommand(`execute in minecraft:overworld run setblock 0 319 0 minecraft:bedrock`)
        console.log(`M-Tech-logging: Player ${player.username} tried to cheat the end dimension!`)
    }
})