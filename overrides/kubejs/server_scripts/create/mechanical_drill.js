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


})