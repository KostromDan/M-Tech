let tick_to_find_players = 0
let dragon_is_summoning = false
let tick_summon_freeze = -1
let players_already_summoning_func_running = []
let summoning_for_player = "none"
let noRecursing = false

EntityEvents.hurt(event => {
    if (noRecursing) return
    noRecursing = true
    let set_recursion_in_the_end_to_false = true
    if (event.source.type == "outOfWorld" && event.entity.level.dimension == "minecraft:the_end" && event.entity.isPlayer()) {
        event.cancel();
        if (summoning_for_player == event.player.username) {
            event.server.runCommand(`execute as ${event.entity.uuid} at @s in minecraft:the_end run tp @s 0 -10 0`)
            event.server.runCommand(`effect give ${event.entity.uuid} minecraft:slow_falling 40`)
            set_recursion_in_the_end_to_false = false
            event.server.scheduleInTicks(50, callback => {
                if (kill_crystals(event.level) && dragon_is_summoning) {
                    event.server.runCommand(`say Player ${event.player.username} ran from summoning dragon!`)
                    dragon_is_summoning = false
                    tick_summon_freeze = -1
                    summoning_for_player = "none"
                    event.player.stages.remove('dragon_summoned')
                }
                noRecursing = false

            })
        }
        let tick = 1
        if (!set_recursion_in_the_end_to_false) {
            tick = 51
        }
        event.server.scheduleInTicks(tick, callback => {
            event.server.runCommand(`execute as ${event.entity.uuid} at @s in minecraft:overworld run tp @s ~ 400 ~`)
            event.server.runCommand(`effect give ${event.entity.uuid} minecraft:slow_falling 40`)
        })
    }
    if (set_recursion_in_the_end_to_false) {
        noRecursing = false
    }
});

EntityEvents.spawned(event => {
    if (event.entity.type == "minecraft:ender_dragon" && dragon_is_summoning) {
        console.log(`M-Tech-logging: Player ${summoning_for_player} Haven't reached the end yet, summoned dragon!`)
        event.server.runCommand(`say Summoned dragon for player ${summoning_for_player}!`)
        dragon_is_summoning = false
        tick_summon_freeze = -1
        summoning_for_player = "none"
    }
});

function is_player_online(player, server) {
    let players = server.players
    let is_online = false
    players.forEach(p => {
        if (p.username == player.username) {
            is_online = true
        }
    })
    if (is_online) {
        return true;
    } else {
        return false;
    }
}

function get_actual_player(player, server) {
    let players = server.players
    let actual_player = player
    players.forEach(p => {
        if (p.username == player.username) {
            actual_player = player
        }
    })
    return actual_player;
}

function is_all_crystal_summoned(level) {
    let positions = [
        {x: 3.5, z: 0.5},
        {x: -2.5, z: 0.5},
        {x: 0.5, z: 3.5},
        {x: 0.5, z: -2.5}]
    let ready_positions = []
    let entities = level.getEntities().getAll()
    entities.forEach(entity => {
        if (entity.type == 'minecraft:end_crystal') {
            let cur_positions = positions.filter(pos => (pos.x == entity.x) && (pos.z == entity.z))
            if (cur_positions.length == 1 && entity.isInvulnerable()) {
                ready_positions.push(cur_positions[0])
            }
        }
    })
    positions = positions.filter((el) => !ready_positions.includes(el));
    return positions.length == 0;
}

function kill_crystals(level) {
    let positions = [
        {x: 3.5, z: 0.5},
        {x: -2.5, z: 0.5},
        {x: 0.5, z: 3.5},
        {x: 0.5, z: -2.5}]
    let ready_positions = []
    let entities = level.getEntities().getAll()
    entities.forEach(entity => {
        if (entity.type == 'minecraft:end_crystal') {
            let cur_positions = positions.filter(pos => (pos.x == entity.x) && (pos.z == entity.z))
            if (cur_positions.length == 1 && entity.isInvulnerable()) {
                entity.kill()
                ready_positions.push(cur_positions[0])
            }
        }
    })
    positions = positions.filter((el) => !ready_positions.includes(el));
    return positions.length == 0;


}

ServerEvents.tick(event => {
    tick_to_find_players++
    if (tick_to_find_players > 100) {
        tick_to_find_players = 0
        let players = event.server.players
        let server = event.server
        players.forEach(player => {
            if (player.level.dimension === 'minecraft:the_end') {
                let level = player.level
                if (tick_summon_freeze >= 0) {
                    dragon_is_summoning = true
                    tick_summon_freeze -= 100
                } else {
                    dragon_is_summoning = false
                    summoning_for_player = "none"
                }
                if (!player.data.ftbquests.isCompleted("6A72CB008C10DA05")) {
                    player.tell("You haven't got access to the end! Collect eyes by yourself!")
                    console.log(`M-Tech-logging: Player ${player.username} tried to cheat the end dimension!`)
                    server.runCommand(`execute in minecraft:overworld run tp ${player.username} 0 400 0`)
                    server.runCommand(`effect give ${player.username} minecraft:slow_falling 40`)
                } else if ((!player.data.ftbquests.isCompleted("181B66292B3EA3E5")) && (player.x >= 200 || player.z >= 200 || player.x <= -200 || player.z <= -200)) {
                    player.tell("To leave the dragon island you need to kill the dragon. You are teleported to the center of the island! If you are not ready to fight the dragon, then just jump into the void, you will not die, you will be teleported to overworld!")
                    console.log(`M-Tech-logging: Player ${player.username} tried to leave dragon island without killing dragon!`)
                    server.runCommand(`effect give ${player.username} minecraft:slow_falling 40`)
                    server.runCommand(`execute as ${player.username} at @s in minecraft:the_end run tp @s 0 400 0`)
                } else if (player.data.ftbquests.isCompleted("6A72CB008C10DA05") && !player.data.ftbquests.isCompleted("181B66292B3EA3E5") && !player.stages.has('dragon_summoned' && !dragon_is_summoning)) {
                    if (!players_already_summoning_func_running.includes(player.username)) {
                        players_already_summoning_func_running.push(player.username)
                        server.scheduleInTicks(301, callback => {
                            players_already_summoning_func_running = players_already_summoning_func_running.filter((el) => el !== player.username);
                        })
                        server.scheduleInTicks(202, callback => {
                            if (is_player_online(player, server)) {
                                player = get_actual_player(player, server)
                                level = player.level
                                if (level.getDragons().size() == 0 && player.level.dimension == "minecraft:the_end" && !dragon_is_summoning && !player.data.ftbquests.isCompleted("181B66292B3EA3E5") && !player.stages.has('dragon_summoned')) {
                                    dragon_is_summoning = true
                                    tick_summon_freeze = 1500
                                    let positions = [
                                        {x: 3.5, z: 0.5},
                                        {x: -2.5, z: 0.5},
                                        {x: 0.5, z: 3.5},
                                        {x: 0.5, z: -2.5}]
                                    let ready_positions = []
                                    let entities = level.getEntities().getAll()
                                    entities.forEach(entity => {
                                        if (entity.type == 'minecraft:end_crystal') {
                                            let cur_positions = positions.filter(pos => (pos.x == entity.x) && (pos.z == entity.z))
                                            if (cur_positions.length == 1) {
                                                let position = cur_positions[0]
                                                if (entity.isInvulnerable()) {
                                                    ready_positions.push(position)
                                                } else {
                                                    entity.kill()
                                                }
                                            }
                                        }
                                    })
                                    positions = positions.filter((el) => !ready_positions.includes(el));
                                    if (positions.length != 0) {
                                        for (let y = 80; y > 40; y--) {
                                            positions.forEach(pos => {
                                                Utils.server.runCommand(`execute in minecraft:the_end if block ${Math.floor(pos.x - 0.5)} ${y - 1} ${Math.floor(pos.z - 0.5)} minecraft:bedrock run summon minecraft:end_crystal ${pos.x} ${y} ${pos.z} {Motion: [0.0d, 0.0d, 0.0d], FallDistance: 0.0f, CanUpdate: 1b, Fire: -1s, Invulnerable: 1b, Air: 300s, OnGround: 0b, PortalCooldown: 0, Rotation: [0.0f, 0.0f], ShowBottom: 0b}`)
                                            })
                                        }
                                        level.dragonFight().tryRespawn()
                                        server.scheduleInTicks(20, callback => {
                                            if (is_all_crystal_summoned(level)) {
                                                console.log(`M-Tech-logging: Player ${player.username} Haven't reached the end yet, summoning dragon!`)
                                                server.runCommand(`say Summoning dragon for player ${player.username}!`)
                                                player.tell('You are in the end first time, but another player already killed dragon, summoning dragon for you! If you are not ready to fight the dragon, then just jump into the void, you will not die, you will be teleported to overworld! If you manage to do it before the dragon spawns, then the dragon is not called and it can be done for you later. You have ~ 20 seconds to do it!')
                                                player.stages.add('dragon_summoned')
                                                summoning_for_player = player.username
                                            } else {
                                                dragon_is_summoning = false
                                                tick_summon_freeze = -1
                                                summoning_for_player = "none"
                                                console.log(`M-Tech-logging: Failed to summon crystals for ${player.username}, maybe he left the end dimension in the moment of crystal spawning!`)
                                            }
                                        })
                                    }
                                }
                            }
                        })
                    }
                }
            }
        })
    }
})