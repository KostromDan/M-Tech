let is_server_stoping = false

ServerEvents.commandRegistry(event => {
    event.register(event.getCommands().literal('restart').requires(src => src.hasPermission(2))
        .executes(command => {
            let server = command.source.getServer()
            if (is_server_stoping) {
                return 1
            }
            is_server_stoping = true
            say("Restart after 15 minutes!")
            server.scheduleInTicks(18000, e => {
                say("Restart!")
                Utils.server.runCommand("stop")
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
})
let tick_count_to_stop = 0
ServerEvents.tick(event => {
    tick_count_to_stop++

    if (Utils.server.isDedicated() && tick_count_to_stop >= 558000) {
        Utils.server.runCommand("restart")
        tick_count_to_stop = 0
    }
})