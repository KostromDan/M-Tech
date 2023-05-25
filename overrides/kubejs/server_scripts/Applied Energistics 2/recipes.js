ServerEvents.recipes(event => {
    event.remove({output: 'ae2:printed_silicon'})
    event.remove({output: 'ae2:printed_logic_processor'})
    event.remove({output: 'ae2:printed_engineering_processor'})
    event.remove({output: 'ae2:printed_calculation_processor'})
    event.remove({output: 'ae2:engineering_processor'})
    event.remove({output: 'ae2:calculation_processor'})
    event.remove({output: 'ae2:logic_processor'})
    event.remove({output: 'ae2:silicon_press'})
    event.remove({output: 'ae2:logic_processor_press'})
    event.remove({output: 'ae2:engineering_processor_press'})
    event.remove({output: 'ae2:calculation_processor_press'})
    event.remove({output: 'ae2:inscriber'})
    event.remove({output: 'ae2:charger'})
    event.custom({
        "type": "immersiveengineering:metal_press",
        "energy": 2400,
        "input": {"item": "ae2:silicon"},
        "mold": "ae2:silicon_press",
        "result": {"item": "ae2:printed_silicon"}
    })
    event.custom({
        "type": "immersiveengineering:metal_press",
        "energy": 2400,
        "input": {"item": "immersiveengineering:ingot_electrum"},
        "mold": "ae2:logic_processor_press",
        "result": {"item": "ae2:printed_logic_processor"}
    })
    event.custom({
        "type": "immersiveengineering:metal_press",
        "energy": 2400,
        "input": {"item": "minecraft:diamond"},
        "mold": "ae2:engineering_processor_press",
        "result": {"item": "ae2:printed_engineering_processor"}
    })
    event.custom({
        "type": "immersiveengineering:metal_press",
        "energy": 2400,
        "input": {"item": "minecraft:iron_ingot"},
        "mold": "ae2:calculation_processor_press",
        "result": {"item": "ae2:printed_calculation_processor"}
    })
    event.custom({
        "type": "immersiveengineering:metal_press",
        "energy": 2400,
        "input": {"item": 'minecraft:iron_block'},
        "mold": "ae2:silicon_press",
        "result": {"item": "ae2:silicon_press"}
    })
    event.custom({
        "type": "immersiveengineering:metal_press",
        "energy": 2400,
        "input": {"item": 'minecraft:iron_block'},
        "mold": "ae2:logic_processor_press",
        "result": {"item": "ae2:logic_processor_press"}
    })
    event.custom({
        "type": "immersiveengineering:metal_press",
        "energy": 2400,
        "input": {"item": 'minecraft:iron_block'},
        "mold": "ae2:engineering_processor_press",
        "result": {"item": "ae2:engineering_processor_press"}
    })
    event.custom({
        "type": "immersiveengineering:metal_press",
        "energy": 2400,
        "input": {"item": 'minecraft:iron_block'},
        "mold": "ae2:calculation_processor_press",
        "result": {"item": "ae2:calculation_processor_press"}
    })

    event.custom({
        "type": "immersiveengineering:arc_furnace",
        "additives": [
            {
                "item": 'minecraft:redstone'
            },
            {
                "item": 'ae2:printed_silicon'
            },
        ],
        "energy": 204800,
        "input": {
            "item": 'ae2:printed_engineering_processor'
        },
        "results": [
            {
                "item": 'ae2:engineering_processor'
            }
        ],
        "time": 400
    })
    event.custom({
        "type": "immersiveengineering:arc_furnace",
        "additives": [
            {
                "item": 'minecraft:redstone'
            },
            {
                "item": 'ae2:printed_silicon'
            },
        ],
        "energy": 204800,
        "input": {
            "item": 'ae2:printed_logic_processor'
        },
        "results": [
            {
                "item": 'ae2:logic_processor'
            }
        ],
        "time": 400
    })
    event.custom({
        "type": "immersiveengineering:arc_furnace",
        "additives": [
            {
                "item": 'minecraft:redstone'
            },
            {
                "item": 'ae2:printed_silicon'
            },
        ],
        "energy": 204800,
        "input": {
            "item": 'ae2:printed_calculation_processor'
        },
        "results": [
            {
                "item": 'ae2:calculation_processor'
            }
        ],
        "time": 400
    })
    event.custom({
        "type": "immersiveengineering:arc_furnace",
        "additives": [],
        "energy": 51200,
        "input": {
            "item": 'ae2:certus_quartz_dust'
        },
        "results": [
            {
                "item": 'ae2:silicon'
            }
        ],
        "time": 100
    })
    event.custom({
        "type": "minecraft:crafting_shaped",
        "key": {
            "a": {
                "tag": "forge:ingots/iron"
            },
            "b": {
                "tag": "forge:ingots/copper"
            },
            "c": {
                "item": 'ae2:calculation_processor'
            }
        },
        "pattern": [
            "aba",
            "ac ",
            "aba"
        ],
        "result": {
            "item": "ae2:charger"
        }
    })


})