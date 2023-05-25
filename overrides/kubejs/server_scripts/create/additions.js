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
                "item": 'create:shaft'
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
                "item": 'minecraft:netherite_ingot'
            },
            "D": {
                "item": 'create:shaft'
            }

        },
        "pattern": [
            "ABBBA",
            "BCBCB",
            "BBDBB",
            "BCBCB",
            "ABBBA"
        ],
        "result": {
            "item": 'createaddition:alternator'
        }
    })

})