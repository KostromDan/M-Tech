function say(msg) {
    Utils.server.runCommand("say " + msg)
}

let is_server_backupping = false

ServerEvents.commandRegistry(event => {
    event.register(event.getCommands().literal('mtechbackup').requires(src => src.hasPermission(2))
        .executes(command => {
            let server = command.source.getServer()
            if (is_server_backupping) {
                return 1
            }
            is_server_backupping = true
            say("Backup after 1 minute! Can cause a little serverside lag!")
            server.scheduleInTicks(20 * 60, e => {
                server.runCommand("backup start")
                tick_count_to_backup = 0
                is_server_backupping = false
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
})
let tick_count_to_backup = 0
ServerEvents.tick(event => {
    tick_count_to_backup++
    if (tick_count_to_backup >= 180000) {
        Utils.server.runCommand("mtechbackup")
        tick_count_to_backup = 0
    }
})