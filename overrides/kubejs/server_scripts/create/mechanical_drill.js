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
                "item": "createaddition:electric_motor"
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
            "ABA",
            "CDC",
            "EFE",
            "EEE"
        ],
        "result": {
            "item": "create:mechanical_drill"
        }
    })


})