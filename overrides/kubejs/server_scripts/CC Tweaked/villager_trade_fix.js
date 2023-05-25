MoreJSEvents.playerStartTrading((event) => {
    let player = event.player
    if (!player.data.ftbquests.isCompleted("14D523D344D1A587")) {
        event.forEachOffers((o, i) => {
            let modId = o.getOutput().getItem().id.split(':')[0]
            if (modId === 'advancedperipherals' || modId === 'computercraft') {
                o.disabled = true
            }
        })
    }
})