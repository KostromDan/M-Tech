BlockEvents.modification(event => {
    event.modify("pointed_dripstone", /** * @param {Internal.Block} block */block => {
        block.setIsRandomlyTicking(false)
    })
})