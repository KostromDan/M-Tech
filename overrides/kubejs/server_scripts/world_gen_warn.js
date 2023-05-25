PlayerEvents.loggedIn(event => {
    let player = event.player
    let worldGenSettings = event.server.worldData.worldGenSettings()
    let chunkGenerator = worldGenSettings.overworld()
    let noiseGenSettings = chunkGenerator.generatorSettings()
    if (!noiseGenSettings.toString().includes("large_biomes")) {
        let msg = 'You have changed the type of world from large biomes to a different one. It is strongly not recommended to do this! Modpack and all its philosophy, recipes, mods were calculated specifically for large biomes. The process of the game in this world will be cheating and dishonest passing of the modpack. Recreate the world using standard generation settings! If you decide to ignore this message, then at least do not use the compass to locate biomes / structures, but this will not make the passage completely honest. If you created the world before this message appeared, then ignore it, you couldn\'t have known that. This message will no longer appear.'
        event.server.scheduleInTicks(100, e => {
            console.warn(msg)
        })
        if (!event.server.persistentData.contains('notified_not_correct_world_type')) {
            event.server.persistentData.putBoolean('notified_not_correct_world_type', true)
            event.server.scheduleInTicks(100, e => {
                player.tell(msg)
            })
        }
    }
})