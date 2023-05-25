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

    event.add('forge:chests', 'everycomp:q/biomesoplenty/willow_chest')
    event.add('forge:chests/wooden', 'everycomp:q/biomesoplenty/willow_chest')
    event.add('ae2:p2p_attunements/item_p2p_tunnel', 'everycomp:q/biomesoplenty/willow_chest')
    event.add('balm:wooden_chests', 'everycomp:q/biomesoplenty/willow_chest')
    event.add('forge:chests', 'everycomp:q/biomesoplenty/willow_trapped_chest')
    event.add('forge:chests/wooden', 'everycomp:q/biomesoplenty/willow_trapped_chest')
    event.add('forge:chests/trapped', 'everycomp:q/biomesoplenty/willow_trapped_chest')
    event.add('ae2:p2p_attunements/item_p2p_tunnel', 'everycomp:q/biomesoplenty/willow_trapped_chest')
    event.add('balm:wooden_chests', 'everycomp:q/biomesoplenty/willow_trapped_chest')
    event.add('forge:chests', 'everycomp:q/biomesoplenty/magic_chest')
    event.add('forge:chests/wooden', 'everycomp:q/biomesoplenty/magic_chest')
    event.add('ae2:p2p_attunements/item_p2p_tunnel', 'everycomp:q/biomesoplenty/magic_chest')
    event.add('balm:wooden_chests', 'everycomp:q/biomesoplenty/magic_chest')
    event.add('forge:chests', 'everycomp:q/biomesoplenty/magic_trapped_chest')
    event.add('forge:chests/wooden', 'everycomp:q/biomesoplenty/magic_trapped_chest')
    event.add('forge:chests/trapped', 'everycomp:q/biomesoplenty/magic_trapped_chest')
    event.add('ae2:p2p_attunements/item_p2p_tunnel', 'everycomp:q/biomesoplenty/magic_trapped_chest')
    event.add('balm:wooden_chests', 'everycomp:q/biomesoplenty/magic_trapped_chest')
    event.add('forge:chests', 'everycomp:q/biomesoplenty/hellbark_chest')
    event.add('forge:chests/wooden', 'everycomp:q/biomesoplenty/hellbark_chest')
    event.add('ae2:p2p_attunements/item_p2p_tunnel', 'everycomp:q/biomesoplenty/hellbark_chest')
    event.add('balm:wooden_chests', 'everycomp:q/biomesoplenty/hellbark_chest')
    event.add('forge:chests', 'everycomp:q/biomesoplenty/hellbark_trapped_chest')
    event.add('forge:chests/wooden', 'everycomp:q/biomesoplenty/hellbark_trapped_chest')
    event.add('forge:chests/trapped', 'everycomp:q/biomesoplenty/hellbark_trapped_chest')
    event.add('ae2:p2p_attunements/item_p2p_tunnel', 'everycomp:q/biomesoplenty/hellbark_trapped_chest')
    event.add('balm:wooden_chests', 'everycomp:q/biomesoplenty/hellbark_trapped_chest')
    event.add('forge:chests', 'everycomp:q/biomesoplenty/palm_chest')
    event.add('forge:chests/wooden', 'everycomp:q/biomesoplenty/palm_chest')
    event.add('ae2:p2p_attunements/item_p2p_tunnel', 'everycomp:q/biomesoplenty/palm_chest')
    event.add('balm:wooden_chests', 'everycomp:q/biomesoplenty/palm_chest')
    event.add('forge:chests', 'everycomp:q/biomesoplenty/palm_trapped_chest')
    event.add('forge:chests/wooden', 'everycomp:q/biomesoplenty/palm_trapped_chest')
    event.add('forge:chests/trapped', 'everycomp:q/biomesoplenty/palm_trapped_chest')
    event.add('ae2:p2p_attunements/item_p2p_tunnel', 'everycomp:q/biomesoplenty/palm_trapped_chest')
    event.add('balm:wooden_chests', 'everycomp:q/biomesoplenty/palm_trapped_chest')
    event.add('forge:chests', 'everycomp:q/biomesoplenty/redwood_chest')
    event.add('forge:chests/wooden', 'everycomp:q/biomesoplenty/redwood_chest')
    event.add('ae2:p2p_attunements/item_p2p_tunnel', 'everycomp:q/biomesoplenty/redwood_chest')
    event.add('balm:wooden_chests', 'everycomp:q/biomesoplenty/redwood_chest')
    event.add('forge:chests', 'everycomp:q/biomesoplenty/redwood_trapped_chest')
    event.add('forge:chests/wooden', 'everycomp:q/biomesoplenty/redwood_trapped_chest')
    event.add('forge:chests/trapped', 'everycomp:q/biomesoplenty/redwood_trapped_chest')
    event.add('ae2:p2p_attunements/item_p2p_tunnel', 'everycomp:q/biomesoplenty/redwood_trapped_chest')
    event.add('balm:wooden_chests', 'everycomp:q/biomesoplenty/redwood_trapped_chest')
    event.add('forge:chests', 'everycomp:q/biomesoplenty/cherry_chest')
    event.add('forge:chests/wooden', 'everycomp:q/biomesoplenty/cherry_chest')
    event.add('ae2:p2p_attunements/item_p2p_tunnel', 'everycomp:q/biomesoplenty/cherry_chest')
    event.add('balm:wooden_chests', 'everycomp:q/biomesoplenty/cherry_chest')
    event.add('forge:chests', 'everycomp:q/biomesoplenty/cherry_trapped_chest')
    event.add('forge:chests/wooden', 'everycomp:q/biomesoplenty/cherry_trapped_chest')
    event.add('forge:chests/trapped', 'everycomp:q/biomesoplenty/cherry_trapped_chest')
    event.add('ae2:p2p_attunements/item_p2p_tunnel', 'everycomp:q/biomesoplenty/cherry_trapped_chest')
    event.add('balm:wooden_chests', 'everycomp:q/biomesoplenty/cherry_trapped_chest')
    event.add('forge:chests', 'everycomp:q/biomesoplenty/umbran_chest')
    event.add('forge:chests/wooden', 'everycomp:q/biomesoplenty/umbran_chest')
    event.add('ae2:p2p_attunements/item_p2p_tunnel', 'everycomp:q/biomesoplenty/umbran_chest')
    event.add('balm:wooden_chests', 'everycomp:q/biomesoplenty/umbran_chest')
    event.add('forge:chests', 'everycomp:q/biomesoplenty/umbran_trapped_chest')
    event.add('forge:chests/wooden', 'everycomp:q/biomesoplenty/umbran_trapped_chest')
    event.add('forge:chests/trapped', 'everycomp:q/biomesoplenty/umbran_trapped_chest')
    event.add('ae2:p2p_attunements/item_p2p_tunnel', 'everycomp:q/biomesoplenty/umbran_trapped_chest')
    event.add('balm:wooden_chests', 'everycomp:q/biomesoplenty/umbran_trapped_chest')
    event.add('forge:chests', 'everycomp:q/biomesoplenty/jacaranda_chest')
    event.add('forge:chests/wooden', 'everycomp:q/biomesoplenty/jacaranda_chest')
    event.add('ae2:p2p_attunements/item_p2p_tunnel', 'everycomp:q/biomesoplenty/jacaranda_chest')
    event.add('balm:wooden_chests', 'everycomp:q/biomesoplenty/jacaranda_chest')
    event.add('forge:chests', 'everycomp:q/biomesoplenty/jacaranda_trapped_chest')
    event.add('forge:chests/wooden', 'everycomp:q/biomesoplenty/jacaranda_trapped_chest')
    event.add('forge:chests/trapped', 'everycomp:q/biomesoplenty/jacaranda_trapped_chest')
    event.add('ae2:p2p_attunements/item_p2p_tunnel', 'everycomp:q/biomesoplenty/jacaranda_trapped_chest')
    event.add('balm:wooden_chests', 'everycomp:q/biomesoplenty/jacaranda_trapped_chest')
    event.add('forge:chests', 'everycomp:q/biomesoplenty/fir_chest')
    event.add('forge:chests/wooden', 'everycomp:q/biomesoplenty/fir_chest')
    event.add('ae2:p2p_attunements/item_p2p_tunnel', 'everycomp:q/biomesoplenty/fir_chest')
    event.add('balm:wooden_chests', 'everycomp:q/biomesoplenty/fir_chest')
    event.add('forge:chests', 'everycomp:q/biomesoplenty/fir_trapped_chest')
    event.add('forge:chests/wooden', 'everycomp:q/biomesoplenty/fir_trapped_chest')
    event.add('forge:chests/trapped', 'everycomp:q/biomesoplenty/fir_trapped_chest')
    event.add('ae2:p2p_attunements/item_p2p_tunnel', 'everycomp:q/biomesoplenty/fir_trapped_chest')
    event.add('balm:wooden_chests', 'everycomp:q/biomesoplenty/fir_trapped_chest')
    event.add('forge:chests', 'everycomp:q/biomesoplenty/mahogany_chest')
    event.add('forge:chests/wooden', 'everycomp:q/biomesoplenty/mahogany_chest')
    event.add('ae2:p2p_attunements/item_p2p_tunnel', 'everycomp:q/biomesoplenty/mahogany_chest')
    event.add('balm:wooden_chests', 'everycomp:q/biomesoplenty/mahogany_chest')
    event.add('forge:chests', 'everycomp:q/biomesoplenty/mahogany_trapped_chest')
    event.add('forge:chests/wooden', 'everycomp:q/biomesoplenty/mahogany_trapped_chest')
    event.add('forge:chests/trapped', 'everycomp:q/biomesoplenty/mahogany_trapped_chest')
    event.add('ae2:p2p_attunements/item_p2p_tunnel', 'everycomp:q/biomesoplenty/mahogany_trapped_chest')
    event.add('balm:wooden_chests', 'everycomp:q/biomesoplenty/mahogany_trapped_chest')
    event.add('forge:chests', 'everycomp:q/biomesoplenty/dead_chest')
    event.add('forge:chests/wooden', 'everycomp:q/biomesoplenty/dead_chest')
    event.add('ae2:p2p_attunements/item_p2p_tunnel', 'everycomp:q/biomesoplenty/dead_chest')
    event.add('balm:wooden_chests', 'everycomp:q/biomesoplenty/dead_chest')
    event.add('forge:chests', 'everycomp:q/biomesoplenty/dead_trapped_chest')
    event.add('forge:chests/wooden', 'everycomp:q/biomesoplenty/dead_trapped_chest')
    event.add('forge:chests/trapped', 'everycomp:q/biomesoplenty/dead_trapped_chest')
    event.add('ae2:p2p_attunements/item_p2p_tunnel', 'everycomp:q/biomesoplenty/dead_trapped_chest')
    event.add('balm:wooden_chests', 'everycomp:q/biomesoplenty/dead_trapped_chest')


})
let ac_tome = Item.of('akashictome:tome',
    '{"akashictome:data":{' +
    'advancedperipherals:{Count:1b,id:"patchouli:guide_book",tag:{"patchouli:book":"advancedperipherals:manual"}},' +
    'alexsmobs:{Count:1b,id:"alexsmobs:animal_dictionary"},' +
    'naturescompass:{Count:1b,id:"naturescompass:naturescompass"},' +
    'explorerscompass:{Count:1b,id:"explorerscompass:explorerscompass"},' +
    'ftbquests:{Count:1b,id:"ftbquests:book"},' +
    'apotheosis:{Count:1b,id:"patchouli:guide_book",tag:{"akashictome:displayName":{text:\'{"translate":"book.apotheosis.name"}\'},"akashictome:is_morphing":1b,display:{Name:\'{"translate":"akashictome.sudo_name","with":[{"color":"green","translate":"book.apotheosis.name"}]}\'},"patchouli:book":"apotheosis:apoth_chronicle"}},' +
    'immersiveengineering:{Count:1b,id:"immersiveengineering:manual",tag:{"akashictome:displayName":{text:\'{"translate":"item.immersiveengineering.manual"}\'},"akashictome:is_morphing":1b,display:{Name:\'{"translate":"akashictome.sudo_name","with":[{"color":"green","translate":"item.immersiveengineering.manual"}]}\'}}},' +
    'simpleplanes:{Count:1b,id:"patchouli:guide_book",tag:{"akashictome:displayName":{text:\'{"translate":"The Guide to Planes & Helicopters"}\'},"akashictome:is_morphing":1b,display:{Name:\'{"translate":"akashictome.sudo_name","with":[{"color":"green","translate":"The Guide to Planes & Helicopters"}]}\'},"patchouli:book":"simpleplanes:planes_book"}}},"akashictome:is_morphing":1b}')
ServerEvents.recipes(event => {
    function fix_ore(name, ingot, dust) {
        if (ingot) {
            event.replaceInput({}, 'immersiveengineering:ingot_' + name, 'mekanism:ingot_' + name)
            event.replaceInput({}, '#forge:ingots/' + name, 'mekanism:ingot_' + name)
            event.replaceOutput({}, 'immersiveengineering:ingot_' + name, 'mekanism:ingot_' + name)
            event.replaceOutput({}, 'immersiveengineering:nugget_' + name, 'mekanism:nugget_' + name)
            event.replaceInput({}, 'immersiveengineering:nugget_' + name, 'mekanism:nugget_' + name)
            event.replaceInput({}, '#forge:nuggets/' + name, 'mekanism:nugget_' + name)
            event.replaceInput({}, '#forge:storage_blocks/' + name, 'mekanism:block_' + name)
            event.replaceOutput({}, '#forge:storage_blocks/' + name, 'mekanism:block_' + name)
            if (name !== "steel") {
                event.replaceInput({}, '#forge:raw_materials/' + name, 'mekanism:raw_' + name)
                event.replaceOutput({}, '#forge:raw_materials/' + name, 'mekanism:raw_' + name)
            }
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
    event.replaceOutput({}, '#forge:nuggets/copper', 'immersiveengineering:nugget_copper')
    event.replaceOutput({}, 'create:copper_nugget', 'immersiveengineering:nugget_copper')

    event.remove({id: 'waystones:warp_plate'})
    event.remove({id: 'waystones:bound_scroll'})
    event.remove({id: 'waystones:warp_stone'})
    event.remove({id: 'waystones:warp_scroll'})
    event.remove({id: 'waystones:warp_dust'})
    event.remove({id: 'waystones:return_scroll'})
    event.remove({id: 'immersiveengineering:alloybrick'})
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
    event.remove({
        type: "minecraft:crafting_shapeless",
        output: 'createdeco:zinc_sheet'
    })
    event.remove({
        output: 'createaddition:zinc_sheet'
    })
    event.replaceInput({}, 'createaddition:zinc_sheet', 'createdeco:zinc_sheet')
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
    event.replaceOutput({}, 'akashictome:tome', ac_tome)
    event.shapeless(ac_tome, ['akashictome:tome'])
    event.shapeless('biomesoplenty:hellbark_sapling', ['minecraft:black_dye', 'minecraft:dark_oak_sapling'])

    function make_hollow_wood(wood) {
        event.shaped(
            Item.of('projectvibrantjourneys:' + wood + '_hollow_log', 4),
            [
                ' A ',
                'A A',
                ' A '
            ],
            {
                A: 'minecraft:' + wood + '_log'
            }
        )
    }

    make_hollow_wood('oak')
    make_hollow_wood('birch')
    make_hollow_wood('spruce')
    make_hollow_wood('jungle')
    make_hollow_wood('acacia')
    make_hollow_wood('dark_oak')
})
MoreJSEvents.playerStartTrading((event) => {
    event.forEachOffers((o, i) => {
        let modId = o.getOutput().getItem().id.split(':')[0]
        if (modId === 'advancedperipherals' || modId === 'computercraft') {
            o.disabled = true
        }
    })
})
ServerEvents.loaded(event => {
    Utils.server.runCommand("reload")
    if (!event.server.persistentData.contains('firstload')) {
        event.server.persistentData.putBoolean('firstload', true)
        Utils.server.runCommand("gamerule playersSleepingPercentage 66")
        console.warn('First server load! Lag may be present for a few minutes.')
    }
})
PlayerEvents.loggedOut(event => {
    console.log(`M-Tech-logging: Player ${event.player.username} logged out(${event.player.level.dimension}). X: ${event.player.x} Y: ${event.player.y} Z: ${event.player.z}`)
})

function give_book_after_connect(event, r) {
    if (r > 10) {
        console.log("Can't give book to " + event.player.username + " after 10 attempts! Stop trying.")
        return 0
    }
    if (event.player.inventory.count(ac_tome) === 0) {
        console.log("Trying to give book to " + event.player.username)
        event.player.give(ac_tome)
        event.server.scheduleInTicks(20, e => {
            give_book_after_connect(event, r + 1)
        })
    } else {
        console.log("Given book to " + event.player.username)
        event.player.stages.add('starting_items')
    }
}

PlayerEvents.loggedIn(event => {
    console.log(`M-Tech-logging: Player ${event.player.username} logged in(${event.player.level.dimension}). X: ${event.player.x} Y: ${event.player.y} Z: ${event.player.z}`)
    if (!event.player.stages.has('starting_items')) {
        give_book_after_connect(event, 0)
    }
})

function say(msg) {
    Utils.server.runCommand("say " + msg)
}

let is_server_stoping = false
let is_server_backupping = false

ServerEvents.commandRegistry(event => {
    event.register(event.getCommands().literal('restart').requires(src => src.hasPermission(2))
        .executes(command => {
            let server = command.source.getServer()
            if (is_server_stoping) {
                return 1
            }
            is_server_stoping = true
            say("Restart after 15 minutes!")
            server.scheduleInTicks(18000, e => {
                say("Restart!")
                Utils.server.runCommand("stop")
            })
            server.scheduleInTicks(17980, e => {
                say("Restart after 1 second!")
            })
            server.scheduleInTicks(17960, e => {
                say("Restart after 2 seconds!")
            })
            server.scheduleInTicks(17940, e => {
                say("Restart after 3 seconds!")
            })
            server.scheduleInTicks(17920, e => {
                say("Restart after 4 seconds!")
            })
            server.scheduleInTicks(17900, e => {
                say("Restart after 5 seconds!")
            })
            server.scheduleInTicks(17880, e => {
                say("Restart after 6 seconds!")
            })
            server.scheduleInTicks(17860, e => {
                say("Restart after 7 seconds!")
            })
            server.scheduleInTicks(17840, e => {
                say("Restart after 8 seconds!")
            })
            server.scheduleInTicks(17820, e => {
                say("Restart after 9 seconds!")
            })
            server.scheduleInTicks(17800, e => {
                say("Restart after 10 seconds!")
            })
            server.scheduleInTicks(17700, e => {
                say("Restart after 15 seconds!")
            })
            server.scheduleInTicks(17400, e => {
                say("Restart after 30 seconds!")
            })
            server.scheduleInTicks(16800, e => {
                say("Restart after 1 minute!")
            })
            server.scheduleInTicks(15600, e => {
                say("Restart after 2 minutes!")
            })
            server.scheduleInTicks(14400, e => {
                say("Restart after 3 minutes!")
            })
            server.scheduleInTicks(12000, e => {
                say("Restart after 5 minutes!")
            })
            server.scheduleInTicks(6000, e => {
                say("Restart after 10 minutes!")
            })
            return 1
        })
    )
    event.register(event.getCommands().literal('mtechbackup').requires(src => src.hasPermission(2))
        .executes(command => {
            let server = command.source.getServer()
            if (is_server_backupping) {
                return 1
            }
            is_server_backupping = true
            say("Backup after 1 minute! Can cause a little serverside lag!")
            server.scheduleInTicks(20 * 60, e => {
                server.runCommand("backup start")
                tick_count_to_backup = 0
                is_server_backupping = false
            })
            server.scheduleInTicks(20 * 59, e => {
                say("Backup after 1 second!")
            })
            server.scheduleInTicks(20 * 58, e => {
                say("Backup after 2 seconds!")
            })
            server.scheduleInTicks(20 * 57, e => {
                say("Backup after 3 seconds!")
            })
            server.scheduleInTicks(20 * 56, e => {
                say("Backup after 4 seconds!")
            })
            server.scheduleInTicks(20 * 55, e => {
                say("Backup after 5 seconds!")
            })
            server.scheduleInTicks(20 * 50, e => {
                say("Backup after 10 seconds!")
            })
            server.scheduleInTicks(20 * 30, e => {
                say("Backup after 30 seconds!")
            })
            return 1
        })
    )
})
let tick_count_to_stop = 0
let tick_count_to_backup = 0
ServerEvents.tick(event => {
    tick_count_to_stop++
    tick_count_to_backup++

    if (Utils.server.isDedicated() && tick_count_to_stop >= 558000) {
        Utils.server.runCommand("restart")
        tick_count_to_stop = 0
    }
    if (tick_count_to_backup >= 180000) {
        Utils.server.runCommand("mtechbackup")
        tick_count_to_backup = 0
    }
})
