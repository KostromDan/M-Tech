ServerEvents.recipes(event => {

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
        output:'create:precision_mechanism'
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


})