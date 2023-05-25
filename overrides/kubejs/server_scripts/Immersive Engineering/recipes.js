ServerEvents.recipes(event => {
    event.replaceOutput({}, 'immersiveengineering:dust_coke', 'mekanism:dust_coal')
    event.replaceOutput({}, 'immersiveengineering:dust_sulfur', 'mekanism:dust_sulfur')
    event.replaceInput({}, 'immersiveengineering:dust_coke', 'mekanism:dust_coal')
    event.replaceInput({}, 'immersiveengineering:dust_sulfur', 'mekanism:dust_sulfur')

    event.remove({output: 'immersiveengineering:dynamo'})
    event.remove({output: 'immersiveengineering:windmill'})
    event.remove({output: 'immersiveengineering:watermill'})
    event.remove({output: 'immersiveengineering:waterwheel_segment'})
    event.remove({id: 'immersiveengineering:alloybrick'})

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
        type: 'minecraft:smelting',
        output: '#forge:nuggets/steel'
    })
    event.remove({
        type: 'minecraft:blasting',
        output: '#forge:nuggets/steel'
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
    event.custom({
        "type": "immersiveengineering:crusher",
        "energy": 3000,
        "input": {"item": 'minecraft:obsidian'},
        "result": {"count": 5, "item": 'create:powdered_obsidian'},
        "secondaries": []
    })
    event.custom({
        "type": "immersiveengineering:fermenter",
        "energy": 6400,
        "fluid": {"amount": 80, "fluid": "immersiveengineering:ethanol"},
        "input": {"item": 'alexsmobs:banana'}
    })
    event.custom({
        "type": "immersiveengineering:fermenter",
        "energy": 6400,
        "fluid": {"amount": 120, "fluid": "immersiveengineering:ethanol"},
        "input": {"item": 'quark:ancient_fruit'}
    })
})

