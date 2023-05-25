ServerEvents.recipes(event => {
    event.remove({
        mod: 'createaddition',
    })



    event.remove({
        output: 'createaddition:electric_motor'
    })
    event.custom({
        "type": "create:mechanical_crafting",
        "acceptMirrored": true,
        "key": {
            "A": {
                "item": 'immersiveengineering:coil_mv'
            },
            "B": {
                "item": 'immersiveengineering:coil_hv'
            },
            "C": {
                "item": 'minecraft:netherite_ingot'
            },
            "D": {
                "item": 'create:rotation_speed_controller'
            }

        },
        "pattern": [
            "AAAAA",
            "ABACA",
            "AADAA",
            "ACABA",
            "AAAAA"
        ],
        "result": {
            "item": 'createaddition:electric_motor'
        }
    })
    event.remove({
        output: 'createaddition:alternator'
    })
    event.custom({
        "type": "create:mechanical_crafting",
        "acceptMirrored": true,
        "key": {
            "A": {
                "item": 'immersiveengineering:coil_hv'
            },
            "B": {
                "item": 'immersiveengineering:coil_lv'
            },
            "C": {
                "item": 'minecraft:netherite_block'
            },
            "D": {
                "item": 'create:rotation_speed_controller'
            },
            "E":{
                "item": 'create:railway_casing'
            }


        },
        "pattern": [
            "ABEBA",
            "BCBAB",
            "EBDBE",
            "BABCB",
            "ABEBA"
        ],
        "result": {
            "item": 'createaddition:alternator'
        }
    })

})