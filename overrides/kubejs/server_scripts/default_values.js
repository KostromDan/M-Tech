ServerEvents.loaded(event => {
    if (event.server.persistentData.contains('firstload') && !event.server.persistentData.contains('is_1_3_13_and_upper_world')) {
        event.server.persistentData.putBoolean('is_1_3_13_and_upper_world', false)
    } else {
        event.server.persistentData.putBoolean('is_1_3_13_and_upper_world', true)
    }
    if (!event.server.persistentData.contains('firstload')) {
        event.server.persistentData.putBoolean('firstload', true)
        Utils.server.runCommandSilent("gamerule playersSleepingPercentage 66")
    }
    if (!event.server.persistentData.contains('do_backup')) {
        event.server.persistentData.putBoolean('do_backup', true)
    }
    if (!event.server.persistentData.contains('do_restart')) {
        event.server.persistentData.putBoolean('do_restart', true)
    }
    if (!event.server.persistentData.contains('time_between_backup')) {
        event.server.persistentData.time_between_backup = 180000
    }
    if (!event.server.persistentData.contains('time_between_restart')) {
        event.server.persistentData.time_between_restart = 558000
    }
})