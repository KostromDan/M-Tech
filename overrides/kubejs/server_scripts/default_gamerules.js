ServerEvents.loaded(event => {
    if (!event.server.persistentData.contains('firstload')) {
        event.server.persistentData.putBoolean('firstload', true)
        Utils.server.runCommand("gamerule playersSleepingPercentage 66")
        console.warn('First server load! Lag may be present for a few minutes.')
    }
})