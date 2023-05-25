let ac_tome = Item.of('akashictome:tome', '{"akashictome:data":{advancedperipherals:{Count:1b,id:"patchouli:guide_book",tag:{"patchouli:book":"advancedperipherals:manual"}},ae2:{Count:1b,id:"ae2:guide"},alexsmobs:{Count:1b,id:"alexsmobs:animal_dictionary"},apotheosis:{Count:1b,id:"patchouli:guide_book",tag:{"akashictome:displayName":{text:\'{"translate":"book.apotheosis.name"}\'},"akashictome:is_morphing":1b,display:{Name:\'{"translate":"akashictome.sudo_name","with":[{"color":"green","translate":"book.apotheosis.name"}]}\'},"patchouli:book":"apotheosis:apoth_chronicle"}},explorerscompass:{Count:1b,id:"explorerscompass:explorerscompass"},ftbquests:{Count:1b,id:"ftbquests:book"},immersiveengineering:{Count:1b,id:"immersiveengineering:manual",tag:{"akashictome:displayName":{text:\'{"translate":"item.immersiveengineering.manual"}\'},"akashictome:is_morphing":1b,display:{Name:\'{"translate":"akashictome.sudo_name","with":[{"color":"green","translate":"item.immersiveengineering.manual"}]}\'}}},kubejs:{Count:1b,id:"kubejs:create_manual",tag:{"akashictome:displayName":{text:\'{"translate":"item.kubejs.create_manual"}\'},"akashictome:is_morphing":1b,display:{Name:\'{"translate":"akashictome.sudo_name","with":[{"color":"green","translate":"item.kubejs.create_manual"}]}\'}}},kubejs_0:{Count:1b,id:"kubejs:mekanism_guide",tag:{"akashictome:definedMod":"kubejs_0","akashictome:displayName":{text:\'{"translate":"item.kubejs.mekanism_guide"}\'},"akashictome:is_morphing":1b,display:{Name:\'{"translate":"akashictome.sudo_name","with":[{"color":"green","translate":"item.kubejs.mekanism_guide"}]}\'}}},naturescompass:{Count:1b,id:"naturescompass:naturescompass"},simpleplanes:{Count:1b,id:"patchouli:guide_book",tag:{"akashictome:displayName":{text:\'{"translate":"The Guide to Planes & Helicopters"}\'},"akashictome:is_morphing":1b,display:{Name:\'{"translate":"akashictome.sudo_name","with":[{"color":"green","translate":"The Guide to Planes & Helicopters"}]}\'},"patchouli:book":"simpleplanes:planes_book"}}},"akashictome:is_morphing":1b}')

function give_book_after_connect(event, r) {
    if (r > 3) {
        if (!is_player_online(event.player, event.server)) {
            console.log("Can't give book to " + event.player.username + " due to he logged out before book given!")
            return 0
        }
    }
    if (r > 30) {
        console.log("Can't give book to " + event.player.username + " after 30 attempts! Stop trying.")
        return 0
    }
    if (event.player.inventory.count(ac_tome) === 0) {
        console.log("Trying to give book to " + event.player.username)
        event.player.give(ac_tome)
        event.server.scheduleInTicks(20 * (r + 1), e => {
            give_book_after_connect(event, r + 1)
        })
    } else {
        console.log("Given book to " + event.player.username)
        event.player.stages.add('starting_items')
    }
}

PlayerEvents.loggedIn(event => {
    let player = event.player
    if (!player.stages.has('starting_items')) {
        give_book_after_connect(event, 0)
    }
})
ServerEvents.recipes(event => {
    event.replaceOutput({}, 'akashictome:tome', ac_tome)
    event.shapeless(ac_tome, ['akashictome:tome'])
})