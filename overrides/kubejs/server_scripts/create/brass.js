ServerEvents.recipes(event => {

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
            }
        ],
        "results": [
            {
                "item": "create:blaze_cake_base"
            }
        ]
    })


    event.remove({
        output: 'simpleplanes:plane_workbench'
    })
    event.custom({
        "type": "create:mechanical_crafting",
        "acceptMirrored": true,
        "key": {
            "A": {
                "item": 'create:flywheel'
            },
            "B": {
                "item": 'minecraft:diamond_axe'
            },
            "C": {
                "item": 'create:railway_casing'
            },
            "D": {
                "item": 'minecraft:diamond_pickaxe'
            },
            "E": {
                "item": 'create:mechanical_arm'
            },
            "F": {
                "item": 'create:rotation_speed_controller'
            },
            "G": {
                "item": 'minecraft:obsidian'
            },
            "H": {
                "item": 'create:blaze_burner'
            },
            "I": {
                "item": 'minecraft:gold_block'
            },
            "M": {
                "item": 'create:blaze_cake'
            }

        },
        "pattern": [
            " A ",
            "BCD",
            "EFE",
            "GHG",
            "IMI"
        ],
        "result": {
            "item": 'simpleplanes:plane_workbench'
        }
    })


})