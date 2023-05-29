PlayerEvents.loggedIn(event => {
    let player = event.player
    let worldGenSettings = event.server.worldData.worldGenSettings()
    let chunkGenerator = worldGenSettings.overworld()
    let noiseGenSettings = chunkGenerator.generatorSettings()
    if (event.server.persistentData.is_1_3_13_and_upper_world == false && !event.server.persistentData.contains('notified_need_to_patch_level_dat')) {
        event.server.scheduleInTicks(100, e => {
            player.tell("Attention! Your world was created before update 1.3.13. This means that you have a corrupted level.dat file. With each entry into this world, the world generation performance will decrease exponentially. If you have been playing for a long time, surely you have already noticed this. In the end, this will lead to the fact that each new 1 chunk will be generated for more than a minute. In 1.13.3, the creator of the mod responsible for this fixed it. But only for new worlds. The automatic fix of the old worlds is too complicated and will lead to new problems. Unfortunately, you will have to fix this error manually. It will take about 10 minutes. Look for instructions in our discord. This message will no longer appear, so we strongly advise you to fix the corrupted level.dat now.")
        })
        event.server.scheduleInTicks(2000, e => {
            event.server.persistentData.putBoolean('notified_need_to_patch_level_dat', true)
        })
    }


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
