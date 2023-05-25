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
            "B": {
                "item": "create:flywheel"
            },
            "C": {
                "item": "create:rotation_speed_controller"
            },
            "D": {
                "item": 'create:mechanical_bearing'
            },
            "E": {
                "item": "create:railway_casing"
            },
            "F": {
                "item": "create:nixie_tube"
            }

        },
        "pattern": [
            " A ",
            "ADA",
            "CBC",
            "EFE",
            "EEE"
        ],
        "result": {
            "item": "create:mechanical_drill"
        }
    })


})