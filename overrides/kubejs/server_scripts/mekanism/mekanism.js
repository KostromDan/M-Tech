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


})