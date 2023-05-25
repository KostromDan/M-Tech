ServerEvents.recipes(event => {
    event.remove({mod: 'createaddition'})
    event.remove({output: 'alexsmobs:transmutation_table'})
    event.remove({
        output: '#forge:wires',
        input: '#immersiveengineering:toolbox/tools'
    })
    event.remove({
        output: '#forge:plates',
        input: '#immersiveengineering:toolbox/tools'
    })
    event.remove({
        output: '#forge:dusts',
        input: '#immersiveengineering:toolbox/tools'
    })
    event.remove({
        output: 'create:dough',
        input: 'minecraft:water_bucket'
    })
    event.remove({
        output: '#forge:rods/all_metal',
        input: '#forge:ingots',
        type: "minecraft:crafting_shaped"
    })
    event.remove({
        type: "immersiveengineering:alloy"
    })
    event.replaceOutput({}, 'akashictome:tome', Item.of('akashictome:tome',
        '{"akashictome:data":{' +
        'advancedperipherals:{Count:1b,id:"patchouli:guide_book",tag:{"patchouli:book":"advancedperipherals:manual"}},' +
        'alexsmobs:{Count:1b,id:"alexsmobs:animal_dictionary"},' +
        'naturescompass:{Count:1b,id:"naturescompass:naturescompass"},' +
        'apotheosis:{Count:1b,id:"patchouli:guide_book",tag:{"akashictome:displayName":{text:\'{"translate":"book.apotheosis.name"}\'},"akashictome:is_morphing":1b,display:{Name:\'{"translate":"akashictome.sudo_name","with":[{"color":"green","translate":"book.apotheosis.name"}]}\'},"patchouli:book":"apotheosis:apoth_chronicle"}},' +
        'immersiveengineering:{Count:1b,id:"immersiveengineering:manual",tag:{"akashictome:displayName":{text:\'{"translate":"item.immersiveengineering.manual"}\'},"akashictome:is_morphing":1b,display:{Name:\'{"translate":"akashictome.sudo_name","with":[{"color":"green","translate":"item.immersiveengineering.manual"}]}\'}}},' +
        'simpleplanes:{Count:1b,id:"patchouli:guide_book",tag:{"akashictome:displayName":{text:\'{"translate":"The Guide to Planes & Helicopters"}\'},"akashictome:is_morphing":1b,display:{Name:\'{"translate":"akashictome.sudo_name","with":[{"color":"green","translate":"The Guide to Planes & Helicopters"}]}\'},"patchouli:book":"simpleplanes:planes_book"}}},"akashictome:is_morphing":1b}')
    )
})