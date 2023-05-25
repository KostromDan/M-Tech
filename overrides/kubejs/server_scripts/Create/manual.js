function manual_right_click(event) {
    if (event.player.mainHandItem == 'create:create_manual') {
        event.cancel()
        let ray = event.player.rayTrace(64)
        if (ray.block !== null &&
            JsonIO.read('kubejs/ponder.json').get("ponder").includes(ray.block.id) &&
            !event.player.isCrouching()) {
            event.server.runCommandSilent(`/execute as ${event.entity.uuid} run create ponder ${ray.block.id}`)
        } else {
            event.player.sendData('openPonderTagIndexScreen', {})
        }
    }
}

ItemEvents.rightClicked(event => {
    manual_right_click(event)
})
BlockEvents.rightClicked(event => {
    manual_right_click(event)
})