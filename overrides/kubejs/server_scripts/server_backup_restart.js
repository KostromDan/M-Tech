function say(msg) {
    Utils.server.runCommandSilent("say " + msg)
}

function get_player_count(server) {
    let players = server.players
    return players.length
}

let is_server_backupping = false
let tick_count_to_backup = 0
let do_backup_tick = false
let is_server_stoping = false
let tick_count_to_stop = 0

ServerEvents.tick(event => {
    let server = event.server
    if (server.isDedicated() && server.persistentData.do_restart) {
        tick_count_to_stop++
        if (tick_count_to_stop >= server.persistentData.time_between_restart) {
            server.runCommandSilent("mtech restart")
            tick_count_to_stop = 0
        }
    }
    if (do_backup_tick && server.persistentData.do_backup) {
        tick_count_to_backup++
        if (tick_count_to_backup >= server.persistentData.time_between_backup) {
            server.runCommandSilent("mtech backup")
            tick_count_to_backup = 0
        }
    }

})

PlayerEvents.loggedIn(event => {
    let server = event.server
    server.scheduleInTicks(200, callback => {
        if (get_player_count(server) != 0) {
            do_backup_tick = true
        }
    })
})


ServerEvents.commandRegistry(event => {
    const {commands: Commands, arguments: Arguments} = event;
    event.register(
        Commands.literal("mtech")
            .requires(src => src.hasPermission(2))
            .then(Commands.literal("backup").executes(ctx => {// no argument
                    let server = ctx.source.getServer()
                    if (is_server_backupping) {
                        let player = ctx.source.player
                        player.tell("Command already in progress!")
                        return 1
                    }
                    is_server_backupping = true
                    say("Backup after 1 minute! Can cause a little serverside lag!")
                    server.scheduleInTicks(20 * 60, e => {
                        server.runCommandSilent("backup start")
                        tick_count_to_backup = 0
                        is_server_backupping = false
                        if (get_player_count(server) == 0) {
                            do_backup_tick = false
                        }
                    })
                    server.scheduleInTicks(20 * 59, e => {
                        say("Backup after 1 second!")
                    })
                    server.scheduleInTicks(20 * 58, e => {
                        say("Backup after 2 seconds!")
                    })
                    server.scheduleInTicks(20 * 57, e => {
                        say("Backup after 3 seconds!")
                    })
                    server.scheduleInTicks(20 * 56, e => {
                        say("Backup after 4 seconds!")
                    })
                    server.scheduleInTicks(20 * 55, e => {
                        say("Backup after 5 seconds!")
                    })
                    server.scheduleInTicks(20 * 50, e => {
                        say("Backup after 10 seconds!")
                    })
                    server.scheduleInTicks(20 * 30, e => {
                        say("Backup after 30 seconds!")
                    })
                    return 1
                })
            )
            .then(Commands.literal("restart").executes(ctx => {// no argument
                    let server = ctx.source.getServer()
                    if (is_server_stoping) {
                        let player = ctx.source.player
                        player.tell("Command already in progress!")
                        return 1
                    }
                    is_server_stoping = true
                    say("Restart after 15 minutes!")
                    server.scheduleInTicks(18000, e => {
                        say("Restart!")
                        Utils.server.runCommandSilent("stop")
                    })
                    server.scheduleInTicks(17980, e => {
                        say("Restart after 1 second!")
                    })
                    server.scheduleInTicks(17960, e => {
                        say("Restart after 2 seconds!")
                    })
                    server.scheduleInTicks(17940, e => {
                        say("Restart after 3 seconds!")
                    })
                    server.scheduleInTicks(17920, e => {
                        say("Restart after 4 seconds!")
                    })
                    server.scheduleInTicks(17900, e => {
                        say("Restart after 5 seconds!")
                    })
                    server.scheduleInTicks(17880, e => {
                        say("Restart after 6 seconds!")
                    })
                    server.scheduleInTicks(17860, e => {
                        say("Restart after 7 seconds!")
                    })
                    server.scheduleInTicks(17840, e => {
                        say("Restart after 8 seconds!")
                    })
                    server.scheduleInTicks(17820, e => {
                        say("Restart after 9 seconds!")
                    })
                    server.scheduleInTicks(17800, e => {
                        say("Restart after 10 seconds!")
                    })
                    server.scheduleInTicks(17700, e => {
                        say("Restart after 15 seconds!")
                    })
                    server.scheduleInTicks(17400, e => {
                        say("Restart after 30 seconds!")
                    })
                    server.scheduleInTicks(16800, e => {
                        say("Restart after 1 minute!")
                    })
                    server.scheduleInTicks(15600, e => {
                        say("Restart after 2 minutes!")
                    })
                    server.scheduleInTicks(14400, e => {
                        say("Restart after 3 minutes!")
                    })
                    server.scheduleInTicks(12000, e => {
                        say("Restart after 5 minutes!")
                    })
                    server.scheduleInTicks(6000, e => {
                        say("Restart after 10 minutes!")
                    })
                    return 1
                })
            )
            .then(Commands.literal("help")
                .executes(ctx => {// no argument
                    let player = ctx.source.player
                    player.tell(
                        "Command usage:\n" +
                        "/mtech help - get info about this command.\n" +
                        "/mtech backup - create backup after 1 minute.\n" +
                        "/mtech restart - restart server after 15 minutes.\n" +
                        "/mtech config do_backup <bool> - do automatic backups or not.\n" +
                        "/mtech config do_restart <bool> - do automatic restarts or not.\n" +
                        "/mtech config time_between_backup <int> - time in tick between automatic backups.\n" +
                        "/mtech config time_between_restart <int> - time in tick between automatic restarts.\n" +
                        "4 upper commands without argument will return existing values.")
                    return 1
                })
            )
            .then(Commands.literal("config")
                .then(Commands.literal("pointed_dripstone_enabled")
                    .then(Commands.argument('arg1', Arguments.BOOLEAN.create(event))
                        .executes(ctx => {
                            const arg1 = Arguments.BOOLEAN.getResult(ctx, "arg1");
                            let m_tech_options = JsonIO.read('kubejs/m_tech_options.json')
                            if (m_tech_options == null) {
                                m_tech_options = {}
                            }
                            m_tech_options["pointed_dripstone_enabled"] = arg1
                            JsonIO.write('kubejs/m_tech_options.json', m_tech_options)

                            let player = ctx.source.player
                            player.tell(`Value changed to: ${m_tech_options["pointed_dripstone_enabled"]}. Restart game!`)
                            return 1
                        })
                    ).executes(ctx => {// no argument
                        let m_tech_options = JsonIO.read('kubejs/m_tech_options.json')
                        if (m_tech_options == null) {
                            m_tech_options = {}
                            m_tech_options["pointed_dripstone_enabled"] = false
                        }
                        let player = ctx.source.player
                        player.tell(`Current value is: ${m_tech_options["pointed_dripstone_enabled"]}`)
                        return 1
                    })
                )
                .then(Commands.literal("do_backup")
                    .then(Commands.argument('arg1', Arguments.BOOLEAN.create(event))
                        .executes(ctx => {
                            const arg1 = Arguments.BOOLEAN.getResult(ctx, "arg1");
                            let server = ctx.source.getServer()
                            let player = ctx.source.player
                            server.persistentData.do_backup = arg1
                            player.tell(`Value changed to: ${server.persistentData.do_backup.toString()}`)

                            return 1
                        })
                    ).executes(ctx => {// no argument
                        let server = ctx.source.getServer()
                        let player = ctx.source.player
                        player.tell(`Current value is: ${server.persistentData.do_backup}`)

                        return 1
                    })
                )
                .then(Commands.literal("do_restart")
                    .then(Commands.argument('arg1', Arguments.BOOLEAN.create(event))
                        .executes(ctx => {
                            const arg1 = Arguments.BOOLEAN.getResult(ctx, "arg1");
                            let server = ctx.source.getServer()
                            let player = ctx.source.player
                            server.persistentData.do_restart = arg1
                            player.tell(`Value changed to: ${server.persistentData.do_restart}`)

                            return 1
                        })
                    ).executes(ctx => {// no argument
                        let server = ctx.source.getServer()
                        let player = ctx.source.player
                        player.tell(`Current value is: ${server.persistentData.do_restart}`)

                        return 1
                    })
                )
                .then(Commands.literal("time_between_backup")
                    .then(Commands.argument('arg1', Arguments.INTEGER.create(event))
                        .executes(ctx => {
                            const arg1 = Arguments.INTEGER.getResult(ctx, "arg1");
                            let server = ctx.source.getServer()
                            let player = ctx.source.player
                            server.persistentData.time_between_backup = arg1
                            player.tell(`Value changed to: ${server.persistentData.time_between_backup}`)

                            return 1
                        })
                    ).executes(ctx => {// no argument
                        let server = ctx.source.getServer()
                        let player = ctx.source.player
                        player.tell(`Current value is: ${server.persistentData.time_between_backup}`)

                        return 1
                    })
                )
                .then(Commands.literal("time_between_restart")
                    .then(Commands.argument('arg1', Arguments.INTEGER.create(event))
                        .executes(ctx => {
                            const arg1 = Arguments.INTEGER.getResult(ctx, "arg1");
                            let server = ctx.source.getServer()
                            let player = ctx.source.player
                            server.persistentData.time_between_restart = arg1
                            player.tell(`Value changed to: ${server.persistentData.time_between_restart}`)

                            return 1
                        })
                    ).executes(ctx => {// no argument
                        let server = ctx.source.getServer()
                        let player = ctx.source.player
                        player.tell(`Current value is: ${server.persistentData.time_between_restart}`)
                        return 1
                    })
                )
            )
            .executes(ctx => {// no argument
                let server = ctx.source.getServer()
                let player = ctx.source.player
                server.runCommandSilent(`execute as ${player.username} run mtech help`)
                return 1
            })
    )
})