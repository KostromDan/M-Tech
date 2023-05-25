ItemEvents.rightClicked(event => {
    if (event.item.id.toString().includes('kubejs:create_manual')) {
        event.server.runCommand(`/execute as ${event.entity.uuid} run create ponder`)
    }
})