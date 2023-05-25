ServerEvents.recipes(event => {

    event.remove({output: 'immersiveengineering:dynamo'})
    event.remove({output: 'immersiveengineering:windmill'})
    event.remove({output: 'immersiveengineering:watermill'})
    event.remove({output: 'immersiveengineering:waterwheel_segment'})

    event.remove({
        output: 'immersiveengineering:thermoelectric_generator'
    })
    event.custom({
        "type": "create:mechanical_crafting",
        "acceptMirrored": true,
        "key": {
            "A": {
                "item": 'immersiveengineering:sheetmetal_steel'
            },
            "B": {
                "item": 'immersiveengineering:coil_lv'
            },
            "C": {
                "item": 'immersiveengineering:coil_mv'
            },
            "D": {
                "item": 'minecraft:netherite_ingot'
            }

        },
        "pattern": [
            "ABBCA",
            "BACBC",
            "BCDBC",
            "BCBAC",
            "ABCCA"
        ],
        "result": {
            "item": 'immersiveengineering:thermoelectric_generator'
        }
    })
    event.remove({
        type:'minecraft:smelting',
        output: '#forge:nuggets/steel'
    })
    event.remove({
        type:'minecraft:blasting',
        output: '#forge:nuggets/steel'
    })
})

