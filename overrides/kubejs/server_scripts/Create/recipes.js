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

    fix_ore('steel', true, true)
    fix_ore('uranium', true, true)
    fix_ore('lead', true, true)
    fix_ore('gold', false, true)
    fix_ore('iron', false, true)
    fix_ore('copper', false, true)
    event.replaceOutput({}, '#forge:nuggets/copper', 'immersiveengineering:nugget_copper')
    event.replaceOutput({}, 'create:copper_nugget', 'immersiveengineering:nugget_copper')

    event.remove({
        type: "create:mixing",
        output: "create:brass_ingot"
    })
    event.remove({
        type: "immersiveengineering:alloy",
        output: "create:brass_ingot"
    })
    event.custom({
        "type": "create:mixing",
        "heatRequirement": "superheated",
        "ingredients": [
            {
                "item": "minecraft:copper_ingot"
            },
            {
                "tag": "forge:ingots/zinc"
            }
        ],
        "results": [
            {
                "count": 2,
                "item": "create:brass_ingot"
            }
        ]
    })

    event.remove({output: 'create:blaze_cake_base'})
    event.custom({
        "type": "create:compacting",
        "ingredients": [
            {
                "item": 'minecraft:red_concrete_powder'
            }, {
                "item": 'create:dough'
            }, {
                "item": 'create:dough'
            }
        ],
        "results": [
            {
                "item": "create:blaze_cake_base"
            }
        ]
    })

    event.custom({
        "type": "create:compacting",
        "heatRequirement": "superheated",
        "ingredients": [
            {
                "item": 'ae2:fluix_dust'
            }, {
                "item": 'minecraft:smooth_basalt'
            }
        ],
        "results": [
            {
                "item": 'ae2:sky_stone_block'
            }
        ]
    })

    event.remove({
        output: "create:mechanical_drill"
    })
    event.custom({
        "type": "create:mechanical_crafting",
        "acceptMirrored": true,
        "key": {
            "A": {
                "item": "minecraft:diamond"
            },
            "D": {
                "item": 'create:mechanical_bearing'
            },
            "E": {
                "item": "create:railway_casing"
            },
            "B": {
                "item": "create:rotation_speed_controller"
            }

        },
        "pattern": [
            " A ",
            "EDE",
            "EBE"
        ],
        "result": {
            "item": "create:mechanical_drill"
        }
    })
    event.remove({
        output: 'create:precision_mechanism'
    })
    event.custom({
        "type": "create:sequenced_assembly",
        "ingredient": {
            "item": "create:golden_sheet"
        },
        "loops": 5,
        "results": [
            {
                "chance": 120.0,
                "item": "create:precision_mechanism"
            },
            {
                "chance": 8.0,
                "item": "create:golden_sheet"
            },
            {
                "chance": 8.0,
                "item": "create:andesite_alloy"
            },
            {
                "chance": 5.0,
                "item": "create:cogwheel"
            },
            {
                "chance": 3.0,
                "item": "minecraft:gold_nugget"
            },
            {
                "chance": 2.0,
                "item": "create:shaft"
            },
            {
                "chance": 2.0,
                "item": "create:crushed_gold_ore"
            },
            {
                "item": "minecraft:iron_ingot"
            },
            {
                "item": "minecraft:clock"
            }
        ],
        "sequence": [
            {
                "type": "create:deploying",
                "ingredients": [
                    {
                        "item": "create:incomplete_precision_mechanism"
                    },
                    {
                        "item": "create:cogwheel"
                    }
                ],
                "results": [
                    {
                        "item": "create:incomplete_precision_mechanism"
                    }
                ]
            },
            {
                "type": "create:deploying",
                "ingredients": [
                    {
                        "item": "create:incomplete_precision_mechanism"
                    },
                    {
                        "item": "create:large_cogwheel"
                    }
                ],
                "results": [
                    {
                        "item": "create:incomplete_precision_mechanism"
                    }
                ]
            },
            {
                "type": "create:deploying",
                "ingredients": [
                    {
                        "item": "create:incomplete_precision_mechanism"
                    },
                    {
                        "tag": "forge:nuggets/iron"
                    }
                ],
                "results": [
                    {
                        "item": "create:incomplete_precision_mechanism"
                    }
                ]
            }
        ],
        "transitionalItem": {
            "item": "create:incomplete_precision_mechanism"
        }
    })
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

})