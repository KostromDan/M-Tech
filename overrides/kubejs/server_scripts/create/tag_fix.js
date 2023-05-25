ServerEvents.tags('item', event => {
    event.remove('forge:plates/iron', 'create:iron_sheet')
    event.remove('forge:plates', 'create:iron_sheet')
    event.remove('forge:plates/copper', 'create:copper_sheet')
    event.remove('forge:plates', 'create:copper_sheet')
    event.remove('forge:plates/brass', 'create:brass_sheet')
    event.remove('forge:plates', 'create:brass_sheet')
    event.remove('forge:plates/gold', 'create:golden_sheet')
    event.remove('forge:plates', 'create:golden_sheet')
    event.remove('forge:plates/zinc', "createaddition:zinc_sheet")


    event.remove('forge:wires/copper', 'createaddition:copper_wire')
    event.remove('forge:wires/gold', 'createaddition:gold_wire')
    event.remove('forge:wires/iron', 'createaddition:iron_wire')

    event.remove('forge:rods/iron', 'createaddition:iron_rod')
    event.remove('forge:rods/gold', 'createaddition:gold_rod')
    event.remove('forge:rods/brass', 'createaddition:brass_rod')
    event.remove('forge:rods/copper', 'createaddition:copper_rod')
    event.remove('forge:rods/all_metal', 'createaddition:iron_rod')
    event.remove('forge:rods/all_metal', 'createaddition:gold_rod')
    event.remove('forge:rods/all_metal', 'createaddition:brass_rod')
    event.remove('forge:rods/all_metal', 'createaddition:copper_rod')


})
ServerEvents.recipes(event => {
    event.replaceInput({mod: 'create'}, '#forge:plates/iron', 'create:iron_sheet')
    event.replaceInput({mod: 'create'}, '#forge:plates/copper', 'create:copper_sheet')
    event.replaceInput({mod: 'create'}, '#forge:plates/brass', 'create:brass_sheet')
    event.replaceInput({mod: 'create'}, '#forge:plates/gold', 'create:golden_sheet')

    event.replaceInput({mod: 'create_enchantment_industry'}, '#forge:plates/iron', 'create:iron_sheet')
    event.replaceInput({mod: 'create_enchantment_industry'}, '#forge:plates/copper', 'create:copper_sheet')
    event.replaceInput({mod: 'create_enchantment_industry'}, '#forge:plates/brass', 'create:brass_sheet')
    event.replaceInput({mod: 'create_enchantment_industry'}, '#forge:plates/gold', 'create:golden_sheet')
})
ServerEvents.loaded(event => {
    Utils.server.runCommand("reload")
})
PlayerEvents.loggedIn(event => {
    // Check if player doesn't have "starting_items" stage yet
    if (!event.player.stages.has('starting_items')) {
        // Add the stage
        event.player.stages.add('starting_items')
        // Give some items to player
        event.player.give(Item.of('akashictome:tome',
            '{"akashictome:data":{' +
            'advancedperipherals:{Count:1b,id:"patchouli:guide_book",tag:{"patchouli:book":"advancedperipherals:manual"}},' +
            'naturescompass:{Count:1b,id:"naturescompass:naturescompass"},' +
            'ftbquests:{Count:1b,id:"ftbquests:book"},' +
            'apotheosis:{Count:1b,id:"patchouli:guide_book",tag:{"akashictome:displayName":{text:\'{"translate":"book.apotheosis.name"}\'},"akashictome:is_morphing":1b,display:{Name:\'{"translate":"akashictome.sudo_name","with":[{"color":"green","translate":"book.apotheosis.name"}]}\'},"patchouli:book":"apotheosis:apoth_chronicle"}},' +
            'immersiveengineering:{Count:1b,id:"immersiveengineering:manual",tag:{"akashictome:displayName":{text:\'{"translate":"item.immersiveengineering.manual"}\'},"akashictome:is_morphing":1b,display:{Name:\'{"translate":"akashictome.sudo_name","with":[{"color":"green","translate":"item.immersiveengineering.manual"}]}\'}}},' +
            'simpleplanes:{Count:1b,id:"patchouli:guide_book",tag:{"akashictome:displayName":{text:\'{"translate":"The Guide to Planes & Helicopters"}\'},"akashictome:is_morphing":1b,display:{Name:\'{"translate":"akashictome.sudo_name","with":[{"color":"green","translate":"The Guide to Planes & Helicopters"}]}\'},"patchouli:book":"simpleplanes:planes_book"}}},"akashictome:is_morphing":1b}')
        )
    }
})