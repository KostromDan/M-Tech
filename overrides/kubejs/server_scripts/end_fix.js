let tick_to_find_players = 80
let dragon_is_summoning = false
let tick_summon_freeze = -1
let players_already_summoning_func_running = []
let summoning_for_player = "none"
let noRecursing = false
let do_bbb_tick = false
const players_can_be_in_wall = new Map();

function is_obj_in_map(o) {
    for (let eventKey of players_can_be_in_wall.keys()) {
        if (eventKey == o) {
            return true
        }
    }
    return false
}

function value_obj_in_map(o) {
    for (let eventKey of players_can_be_in_wall.keys()) {
        if (eventKey == o) {
            return players_can_be_in_wall.get(eventKey)
        }
    }
    return false
}

function key_obj_in_map(o) {
    for (let eventKey of players_can_be_in_wall.keys()) {
        if (eventKey == o) {
            return eventKey
        }
    }
    return false
}


EntityEvents.hurt(event => {
    if (noRecursing) return
    noRecursing = true
    let set_recursion_in_the_end_to_false = true
    if (event.entity.isPlayer()) {
        if (event.source.type == "outOfWorld") {
            event.cancel();
            if (event.entity.level.dimension == "minecraft:the_end") {
                if (summoning_for_player == event.player.username) {
                    event.server.runCommandSilent(`execute as ${event.entity.uuid} at @s in minecraft:the_end run tp @s 0 -10 0`)
                    event.server.runCommandSilent(`effect give ${event.entity.uuid} minecraft:slow_falling 40`)
                    set_recursion_in_the_end_to_false = false
                    event.server.scheduleInTicks(50, callback => {
                        if (kill_crystals(event.level) && dragon_is_summoning) {
                            event.server.runCommandSilent(`say Player ${event.player.username} ran from summoning dragon!`)
                            dragon_is_summoning = false
                            tick_summon_freeze = -1
                            summoning_for_player = "none"
                            event.player.stages.remove('dragon_summoned')
                        }
                        noRecursing = false

                    })
                }
            }
            let dim = "minecraft:overworld"
            let height = 400
            if (event.entity.level.dimension == "minecraft:the_nether") {
                dim = "minecraft:the_nether"
                height = 250
                if (!is_obj_in_map(event.player.username)) {
                    players_can_be_in_wall.set(event.player.username.toString(), 250)
                } else {
                    players_can_be_in_wall.set(key_obj_in_map(event.player.username.toString()), 250)
                }

            }
            let tick = 1
            if (!set_recursion_in_the_end_to_false) {
                tick = 51
            }
            event.server.scheduleInTicks(tick, callback => {
                event.server.runCommandSilent(`execute as ${event.entity.uuid} at @s in ${dim} run tp @s ~ ${height} ~`)
                event.server.runCommandSilent(`effect give ${event.entity.uuid} minecraft:slow_falling 40`)
            })
        } else if (event.source.type == "inWall" && is_obj_in_map(event.player.username)) {
            event.cancel()
            let value = value_obj_in_map(event.player.username.toString())
            if (value >= 0) {
                event.player.teleportTo("minecraft:the_nether", event.player.x, value_obj_in_map(event.player.username.toString()) - 1, event.player.z, event.player.yaw, event.player.pitch)
            }
            players_can_be_in_wall.set(key_obj_in_map(event.player.username.toString()), value_obj_in_map(event.player.username.toString()) - 1)
            event.server.runCommandSilent(`effect give ${event.entity.uuid} minecraft:slow_falling 25`)
            value = value_obj_in_map(event.player.username.toString())
            if (value <= -1) {
                players_can_be_in_wall.delete(key_obj_in_map(event.player.username.toString()))
                event.player.teleportTo("minecraft:the_nether", event.player.x, 250, event.player.z, event.player.yaw, event.player.pitch)
                event.server.runCommandSilent(`execute as ${event.entity.uuid} at @s in minecraft:the_nether unless block ~ 250 ~ air run fill ~1 252 ~1 ~-1 249 ~-1 air`)
                for (let i = 1; i < 100; i += 5) {
                    event.server.scheduleInTicks(i, callback => {
                        event.server.runCommandSilent(`execute as ${event.entity.uuid} at @s in minecraft:the_nether unless block ~ 250 ~ air run fill ~1 252 ~1 ~-1 249 ~-1 air`)
                    })
                }
            } else {
                event.server.scheduleInTicks(20, callback => {
                    if (value == value_obj_in_map(event.player.username.toString())) {
                        players_can_be_in_wall.delete(key_obj_in_map(event.player.username.toString()))
                    }
                })
            }
        }

    }
    if (set_recursion_in_the_end_to_false) {
        noRecursing = false
    }
})
;

EntityEvents.spawned(event => {
    if (event.entity.type == "minecraft:ender_dragon" && dragon_is_summoning) {
        console.log(`M-Tech-logging: Player ${summoning_for_player} Haven't reached the end yet, summoned dragon!`)
        event.server.runCommandSilent(`say Summoned dragon for player ${summoning_for_player}!`)
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

EntityEvents.spawned(event => {
    let entity = event.entity
    if (entity.type == 'minecraft:end_crystal') {
        if (Math.abs(entity.x % 1) <= 0.1) {
            event.server.runCommandSilent(`execute in minecraft:the_end if block ${Math.floor(entity.x)} ${Math.floor(entity.y - 1)} ${Math.floor(entity.z)} minecraft:bedrock run summon minecraft:end_crystal ${entity.x + 0.5} ${entity.y} ${entity.z + 0.5} {Motion: [0.0d, 0.0d, 0.0d], Invulnerable: 0b, Air: 300s, OnGround: 0b, PortalCooldown: 0, Rotation: [218.30145f, 0.0f], FallDistance: 0.0f, CanUpdate: 1b, Fire: -1s, ForgeCaps: {"minecraft:treechopchop_settings_capability": {isSynced: 0b, sneakBehavior: "INVERT_CHOPPING", treesMustHaveLeaves: 1b, chopInCreativeMode: 0b, choppingEnabled: 1b, fellingEnabled: 1b}}, ShowBottom: 1b}`)
            event.server.runCommandSilent(`execute in minecraft:the_end if block ${Math.floor(entity.x)} ${Math.floor(entity.y - 2)} ${Math.floor(entity.z)} minecraft:bedrock run summon minecraft:end_crystal ${entity.x + 0.5} ${entity.y - 1} ${entity.z + 0.5} {Motion: [0.0d, 0.0d, 0.0d], Invulnerable: 0b, Air: 300s, OnGround: 0b, PortalCooldown: 0, Rotation: [218.30145f, 0.0f], FallDistance: 0.0f, CanUpdate: 1b, Fire: -1s, ForgeCaps: {"minecraft:treechopchop_settings_capability": {isSynced: 0b, sneakBehavior: "INVERT_CHOPPING", treesMustHaveLeaves: 1b, chopInCreativeMode: 0b, choppingEnabled: 1b, fellingEnabled: 1b}}, ShowBottom: 1b}`)
            event.cancel()
        }
    }
})

ServerEvents.tick(event => {
    tick_to_find_players++
    if (do_bbb_tick) {
        event.server.runCommandSilent('function amc_dp_bbbattle_gen:ender_dragon/ender_dragon_main')
        if (tick_to_find_players % 10 === 5) {
            event.server.runCommandSilent('function amc_dp_bbbattle_gen:ender_dragon/ender_dragon_main_5_tick')
        }
    }
    if (tick_to_find_players > 100) {
        tick_to_find_players = 0
        let players = event.server.players
        let server = event.server
        do_bbb_tick = false
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
                    server.runCommandSilent(`execute in minecraft:overworld run tp ${player.username} 0 400 0`)
                    server.runCommandSilent(`effect give ${player.username} minecraft:slow_falling 40`)
                } else if (player.x >= 200 || player.z >= 200 || player.x <= -200 || player.z <= -200) {
                    if (!player.data.ftbquests.isCompleted("181B66292B3EA3E5")) {
                        player.tell("To leave the dragon island you need to kill the dragon. You are teleported to the center of the island! If you are not ready to fight the dragon, then just jump into the void, you will not die, you will be teleported to overworld!")
                        console.log(`M-Tech-logging: Player ${player.username} tried to leave dragon island without killing dragon!`)
                        server.runCommandSilent(`effect give ${player.username} minecraft:slow_falling 40`)
                        server.runCommandSilent(`execute as ${player.username} at @s in minecraft:the_end run tp @s 0 400 0`)
                    }
                } else {
                    do_bbb_tick = true
                }
                if (player.data.ftbquests.isCompleted("6A72CB008C10DA05") && !player.data.ftbquests.isCompleted("181B66292B3EA3E5") && !player.stages.has('dragon_summoned' && !dragon_is_summoning)) {
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
                                                Utils.server.runCommandSilent(`execute in minecraft:the_end if block ${Math.floor(pos.x - 0.5)} ${y - 1} ${Math.floor(pos.z - 0.5)} minecraft:bedrock run summon minecraft:end_crystal ${pos.x} ${y} ${pos.z} {Motion: [0.0d, 0.0d, 0.0d], FallDistance: 0.0f, CanUpdate: 1b, Fire: -1s, Invulnerable: 1b, Air: 300s, OnGround: 0b, PortalCooldown: 0, Rotation: [0.0f, 0.0f], ShowBottom: 0b}`)
                                            })
                                        }
                                        level.dragonFight().tryRespawn()
                                        server.scheduleInTicks(20, callback => {
                                            if (is_all_crystal_summoned(level)) {
                                                console.log(`M-Tech-logging: Player ${player.username} Haven't reached the end yet, summoning dragon!`)
                                                server.runCommandSilent(`say Summoning dragon for player ${player.username}!`)
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