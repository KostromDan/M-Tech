let ac_tome_data = '{"akashictome:data":{' +
    'advancedperipherals:{Count:1b,id:"patchouli:guide_book",tag:{"patchouli:book":"advancedperipherals:manual"}},' +
    'ae2:{Count:1b,id:"ae2:guide"},' +
    'alexsmobs:{Count:1b,id:"alexsmobs:animal_dictionary"},' +
    'apotheosis:{Count:1b,id:"patchouli:guide_book",tag:{"patchouli:book":"apotheosis:apoth_chronicle"}},' +
    'create:{Count:1b,id:"create:create_manual"},' +
    'explorerscompass:{Count:1b,id:"explorerscompass:explorerscompass",tag:{}},' +
    'ftbquests:{Count:1b,id:"ftbquests:book"},' +
    'immersiveengineering:{Count:1b,id:"immersiveengineering:manual"},' +
    'mekanism:{Count:1b,id:"mekanism:mekanism_guide"},' +
    'naturescompass:{Count:1b,id:"naturescompass:naturescompass",tag:{}},' +
    'simpleplanes:{Count:1b,id:"patchouli:guide_book",tag:{"patchouli:book":"simpleplanes:planes_book"}}}}'
let ac_tome = Item.of('akashictome:tome', ac_tome_data)
let ac_tome_must_include = ['advancedperipherals:manual', "ae2:guide", "alexsmobs:animal_dictionary", "apotheosis:apoth_chronicle", "create:create_manual", "explorerscompass:explorerscompass", "ftbquests:book",
    "immersiveengineering:manual", "mekanism:mekanism_guide", "naturescompass:naturescompass", "simpleplanes:planes_book"]

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
ItemEvents.rightClicked(event => {
    if (event.item == 'akashictome:tome') {
        let fl = false
        let nbt = String(event.item.nbt)
        ac_tome_must_include.forEach(item => {
            if (!nbt.includes(item)) {
                fl = true
            }
        })
        if (fl) {
            event.item.setNbt(ac_tome_data)
            event.player.tell("Replaced your Akashic Tome to Tome with actual data from the lastest update! Reopen tome!")
        }
    }
})