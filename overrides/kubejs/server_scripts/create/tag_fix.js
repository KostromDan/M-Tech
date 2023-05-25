ServerEvents.tags('item', event => {
    event.remove('forge:plates/iron', 'create:iron_sheet')
    event.remove('forge:plates', 'create:iron_sheet')
    event.remove('forge:plates/copper', 'create:copper_sheet')
    event.remove('forge:plates', 'create:copper_sheet')
    event.remove('forge:plates/brass', 'create:brass_sheet')
    event.remove('forge:plates', 'create:brass_sheet')
    event.remove('forge:plates/gold', 'create:golden_sheet')
    event.remove('forge:plates', 'create:golden_sheet')


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
    function fix_ore(name, ingot, dust) {
        if (ingot) {
            event.replaceInput({}, 'immersiveengineering:ingot_' + name, 'mekanism:ingot_' + name)
            event.replaceInput({}, '#forge:ingots/' + name, 'mekanism:ingot_' + name)
            event.replaceOutput({}, 'immersiveengineering:ingot_' + name, 'mekanism:ingot_' + name)
            event.replaceOutput({}, 'immersiveengineering:nugget_' + name, 'mekanism:nugget_' + name)
            event.replaceInput({}, 'immersiveengineering:nugget_' + name, 'mekanism:nugget_' + name)
            event.replaceInput({}, '#forge:nuggets/' + name, 'mekanism:nugget_' + name)
        }
        if (dust) {
            event.replaceInput({}, '#forge:dusts/' + name, 'mekanism:dust_' + name)
            event.replaceInput({}, 'immersiveengineering:dust_' + name, 'mekanism:dust_' + name)
            event.replaceOutput({}, 'immersiveengineering:dust_' + name, 'mekanism:dust_' + name)
        }
    }

    event.replaceInput({mod: 'create'}, '#forge:plates/iron', 'create:iron_sheet')
    event.replaceInput({mod: 'create'}, '#forge:plates/copper', 'create:copper_sheet')
    event.replaceInput({mod: 'create'}, '#forge:plates/brass', 'create:brass_sheet')
    event.replaceInput({mod: 'create'}, '#forge:plates/gold', 'create:golden_sheet')

    event.replaceInput({mod: 'create_enchantment_industry'}, '#forge:plates/iron', 'create:iron_sheet')
    event.replaceInput({mod: 'create_enchantment_industry'}, '#forge:plates/copper', 'create:copper_sheet')
    event.replaceInput({mod: 'create_enchantment_industry'}, '#forge:plates/brass', 'create:brass_sheet')
    event.replaceInput({mod: 'create_enchantment_industry'}, '#forge:plates/gold', 'create:golden_sheet')

    event.replaceOutput({}, 'immersiveengineering:dust_coke', 'mekanism:dust_coal')
    event.replaceOutput({}, 'immersiveengineering:dust_sulfur', 'mekanism:dust_sulfur')
    event.replaceInput({}, 'immersiveengineering:dust_coke', 'mekanism:dust_coal')
    event.replaceInput({}, 'immersiveengineering:dust_sulfur', 'mekanism:dust_sulfur')
    fix_ore('steel', true, true)
    fix_ore('uranium', true, true)
    fix_ore('lead', true, true)
    fix_ore('gold', false, true)
    fix_ore('iron', false, true)
    fix_ore('copper', false, true)
    event.replaceInput({}, '#forge:nuggets/copper', 'immersiveengineering:nugget_copper')
    event.replaceOutput({}, '#forge:nuggets/copper', 'immersiveengineering:nugget_copper')

    event.remove({id: 'waystones:warp_plate'})
    event.remove({id: 'waystones:bound_scroll'})
    event.remove({id: 'waystones:warp_stone'})
    event.remove({id: 'waystones:warp_scroll'})
    event.remove({id: 'waystones:warp_dust'})
    event.remove({id: 'waystones:return_scroll'})
    event.custom({
            "result": {
                "item": "waystones:warp_stone"
            },
            "type": "minecraft:crafting_shaped",
            "pattern": [
                "DED",
                "EGE",
                "DED"
            ],
            "key": {
                "G": {
                    "item": 'mekanism:module_teleportation_unit'
                },
                "E": {
                    "item": 'waystones:warp_dust'
                },
                "D": {
                    "item": 'waystones:warp_dust'
                }
            }
        }
    )
    event.custom({
            "result": {
                "item": "waystones:warp_plate"
            },
            "type": "minecraft:crafting_shaped",
            "pattern": [
                "SWS",
                "WFW",
                "SWS"
            ],
            "key": {
                "W": {
                    "item": 'minecraft:flint'
                },
                "F": {
                    "item": "waystones:warp_stone"
                },
                "S": {
                    "item": "minecraft:stone_bricks"
                }
            }
        }
    )
    event.custom({
        "result": {
            "item": "waystones:return_scroll",
            "count": 1
        },
        "type": "minecraft:crafting_shaped",
        "pattern": [
            "GEG",
            "PPP"
        ],
        "key": {
            "G": {
                "tag": "balm:gold_nuggets"
            },
            "E": {
                "item": "waystones:warp_dust"
            },
            "P": {
                "item": "minecraft:paper"
            }
        }
    })
    event.custom({
            "result": {
                "item": "waystones:warp_dust"
            },
            "type": "minecraft:crafting_shaped",
            "pattern": [
                "SWS",
                "WFW",
                "SWS"
            ],
            "key": {
                "W": {
                    "item": 'minecraft:blaze_powder'
                },
                "F": {
                    "item": 'ae2:ender_dust'
                },
                "S": {
                    "item": "minecraft:amethyst_shard"
                }
            }
        }
    )
    event.remove({
        type: "minecraft:crafting_shaped",
        output: 'minecraft:blaze_powder'
    })
    event.remove({
        type: "minecraft:crafting_shapeless",
        output: 'minecraft:blaze_powder'
    })
    event.custom({
        "type": "create:milling",
        "ingredients": [
            {
                "item": 'minecraft:blaze_rod'
            }
        ],
        "processingTime": 50,
        "results": [
            {
                "count": 2,
                "item": 'minecraft:blaze_powder'
            },
            {
                "chance": 0.75,
                "item": 'minecraft:blaze_powder'
            }
        ]
    })
    event.custom({
        "type": "mekanism:crushing",
        "input": {
            "ingredient": [{"item": 'minecraft:blaze_rod'}]
        },
        "output": {"count": 5, "item": 'minecraft:blaze_powder'}
    })


    event.custom({
        "type": "mekanism:crushing",
        "input": {
            "ingredient": [{"item": 'minecraft:ender_pearl'}]
        },
        "output": {"count": 1, "item": 'ae2:ender_dust'}
    })
    event.custom({
        "type": "immersiveengineering:crusher",
        "energy": 3000,
        "input": {"item": 'minecraft:ender_pearl'},
        "result": {"item": 'ae2:ender_dust'},
        "secondaries": []
    })
    event.custom({
        "type": "immersiveengineering:crusher",
        "energy": 3000,
        "input": {"item": 'ae2:sky_stone_block'},
        "result": {"item": 'ae2:sky_dust'},
        "secondaries": []
    })

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
            'alexsmobs:{Count:1b,id:"alexsmobs:animal_dictionary"},' +
            'naturescompass:{Count:1b,id:"naturescompass:naturescompass"},' +
            'ftbquests:{Count:1b,id:"ftbquests:book"},' +
            'apotheosis:{Count:1b,id:"patchouli:guide_book",tag:{"akashictome:displayName":{text:\'{"translate":"book.apotheosis.name"}\'},"akashictome:is_morphing":1b,display:{Name:\'{"translate":"akashictome.sudo_name","with":[{"color":"green","translate":"book.apotheosis.name"}]}\'},"patchouli:book":"apotheosis:apoth_chronicle"}},' +
            'immersiveengineering:{Count:1b,id:"immersiveengineering:manual",tag:{"akashictome:displayName":{text:\'{"translate":"item.immersiveengineering.manual"}\'},"akashictome:is_morphing":1b,display:{Name:\'{"translate":"akashictome.sudo_name","with":[{"color":"green","translate":"item.immersiveengineering.manual"}]}\'}}},' +
            'simpleplanes:{Count:1b,id:"patchouli:guide_book",tag:{"akashictome:displayName":{text:\'{"translate":"The Guide to Planes & Helicopters"}\'},"akashictome:is_morphing":1b,display:{Name:\'{"translate":"akashictome.sudo_name","with":[{"color":"green","translate":"The Guide to Planes & Helicopters"}]}\'},"patchouli:book":"simpleplanes:planes_book"}}},"akashictome:is_morphing":1b}')
        )
    }
})