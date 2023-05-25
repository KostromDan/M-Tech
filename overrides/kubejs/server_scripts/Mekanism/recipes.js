ServerEvents.recipes(event => {

    event.remove({output: 'mekanism:rotary_condensentrator'})
    event.shaped(Item.of('mekanism:rotary_condensentrator', 1), [
        'ABA',
        'CDC',
        'ABA'
    ], {
        A: '#forge:glass',
        B: 'mekanism:basic_control_circuit',
        C: 'mekanism:basic_fluid_tank',
        D: 'mekanism:steel_casing'
    })


    event.remove({output: 'mekanism:steel_casing'})
    event.shaped(Item.of('mekanism:steel_casing', 1), [
        'BAB',
        'DCF',
        'BEB'
    ], {
        A: '#forge:glass',
        B: 'mekanism:ingot_steel',
        C: 'mekanism:ingot_osmium',
        D: 'ae2:calculation_processor',
        E: 'minecraft:copper_ingot',
        F: 'ae2:logic_processor'
    })

    event.remove({output: 'mekanism:metallurgic_infuser'})
    event.shaped(Item.of('mekanism:metallurgic_infuser', 1), [
        'ABA',
        'CDC',
        'ABA'
    ], {
        A: '#forge:glass',
        B: 'minecraft:blast_furnace',
        C: 'mekanism:basic_fluid_tank',
        D: 'mekanism:steel_casing'
    })

    event.remove({output: 'mekanism:energy_tablet'})
    event.shaped(Item.of('mekanism:energy_tablet', 1), [
        'ACA',
        'BBB',
        'ADA'
    ], {
        A: 'mekanism:enriched_redstone',
        B: 'mekanism:dust_lithium',
        C: 'mekanism:basic_control_circuit',
        D: 'mekanism:alloy_infused'
    })


    event.remove({output: 'mekanism:basic_energy_cube'})
    event.shaped(Item.of('mekanism:basic_energy_cube', 1), [
        'ABA',
        'CDC',
        'ABA'
    ], {
        A: 'minecraft:redstone_block',
        C: 'mekanism:steel_casing',
        D: 'immersiveengineering:capacitor_hv',
        B: 'mekanism:energy_tablet'
    })

    event.remove({output: 'mekanism:configurator'})
    event.shaped(Item.of('mekanism:configurator', 1), [
        ' BA',
        'BCB',
        'DE '
    ], {
        A: 'immersiveengineering:hammer',
        B: 'mekanism:ingot_steel',
        C: 'immersiveengineering:voltmeter',
        D: 'mekanism:basic_control_circuit',
        E: 'immersiveengineering:capacitor_hv'
    })

    event.remove({output: 'mekanismgenerators:heat_generator'})
    event.shaped(Item.of('mekanismgenerators:heat_generator', 1), [
        'AAA',
        'BCB',
        'DED'
    ], {
        A: 'minecraft:iron_ingot',
        B: 'mekanism:alloy_infused',
        C: 'mekanism:ingot_osmium',
        D: 'minecraft:copper_ingot',
        E: 'minecraft:furnace'
    })

    event.remove({output: 'mekanism:basic_control_circuit'})
    event.custom({
        "type": "immersiveengineering:arc_furnace",
        "additives": [
            {
                "item": 'ae2:calculation_processor'
            },
            {
                "item": 'minecraft:copper_ingot'
            },
            {
                "item": 'ae2:logic_processor'
            },
            {
                "item": 'ae2:sky_dust'
            },
        ],
        "energy": 204800,
        "input": {
            "item": 'ae2:printed_silicon'
        },
        "results": [
            {
                "item": 'mekanism:basic_control_circuit'
            }
        ],
        "time": 400
    })
    event.remove({output: "mekanism:basic_fluid_tank"})
    event.custom({
        "type": "minecraft:crafting_shaped",
        "key": {
            "A": {
                "tag": "mekanism:alloys/basic"
            },
            "I": {
                "tag": "forge:ingots/iron"
            },
            "J": {
                "item": 'mekanism:basic_control_circuit_small'
            }
        },
        "pattern": [
            "AIA",
            "IJI",
            "AIA"
        ],
        "result": {
            "item": "mekanism:basic_fluid_tank"
        }
    })
    event.remove({output: "mekanism:basic_universal_cable"})
    event.custom({
        "type": "minecraft:crafting_shaped",
        "key": {
            "#": {
                "tag": "forge:dusts/redstone"
            },
            "S": {
                "tag": "forge:ingots/steel"
            },
            "J": {
                "item": 'mekanism:basic_control_circuit_small'
            }
        },
        "pattern": [
            " J ",
            "S#S"
        ],
        "result": {
            "count": 8,
            "item": "mekanism:basic_universal_cable"
        }
    })
    event.remove({output: "mekanism:basic_mechanical_pipe"})
    event.custom({
        "type": "minecraft:crafting_shaped",
        "key": {
            "#": {
                "item": "minecraft:bucket"
            },
            "S": {
                "tag": "forge:ingots/steel"
            },
            "J": {
                "item": 'mekanism:basic_control_circuit_small'
            }
        },
        "pattern": [
            " J ",
            "S#S"
        ],
        "result": {
            "count": 8,
            "item": "mekanism:basic_mechanical_pipe"
        }
    })
    event.remove({output: "mekanism:basic_pressurized_tube"})
    event.custom({
        "type": "minecraft:crafting_shaped",
        "key": {
            "#": {
                "tag": "forge:glass"
            },
            "S": {
                "tag": "forge:ingots/steel"
            },
            "J": {
                "item": 'mekanism:basic_control_circuit_small'
            }
        },
        "pattern": [
            " J ",
            "S#S"
        ],
        "result": {
            "count": 8,
            "item": "mekanism:basic_pressurized_tube"
        }
    })
    event.remove({output: "mekanism:basic_thermodynamic_conductor"})
    event.custom({
        "type": "minecraft:crafting_shaped",
        "key": {
            "#": {
                "tag": "forge:ingots/copper"
            },
            "S": {
                "tag": "forge:ingots/steel"
            },
            "J": {
                "item": 'mekanism:basic_control_circuit_small'
            }
        },
        "pattern": [
            " J ",
            "S#S"
        ],
        "result": {
            "count": 8,
            "item": "mekanism:basic_thermodynamic_conductor"
        }
    })
    event.remove({output: "mekanism:basic_chemical_tank"})
    event.custom({
        "type": "minecraft:crafting_shaped",
        "key": {
            "A": {
                "tag": "mekanism:alloys/basic"
            },
            "O": {
                "tag": "forge:ingots/osmium"
            },
            "J": {
                "item": 'mekanism:basic_control_circuit_small'
            }
        },
        "pattern": [
            "AOA",
            "OJO",
            "AOA"
        ],
        "result": {
            "item": "mekanism:basic_chemical_tank"
        }
    })
    event.shapeless('9x mekanism:basic_control_circuit_small', ['mekanism:basic_control_circuit'])
    event.custom({
        "type": "mekanism:crushing",
        "input": {
            "ingredient": [{"item": 'minecraft:blaze_rod'}]
        },
        "output": {"count": 5, "item": 'minecraft:blaze_powder'}
    })


    event.custom({
        "type": "mekanism:crushing",
        "input": {
            "ingredient": [{"item": 'minecraft:ender_pearl'}]
        },
        "output": {"count": 1, "item": 'ae2:ender_dust'}
    })
    event.custom({
        "type": "mekanism:crushing",
        "input": {
            "ingredient": [{"item": 'minecraft:obsidian'}]
        },
        "output": {"count": 9, "item": 'create:powdered_obsidian'}
    })
})