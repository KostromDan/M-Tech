ItemEvents.rightClicked(event => {
    if (event.item.id.toString().includes('endrem:') && !event.player.data.ftbquests.isCompleted("6A72CB008C10DA05")) {
        event.cancel()
        event.player.tell("You haven't got access to the end! Collect all 12 eyes by yourself before locating stronghold!")
    }
})