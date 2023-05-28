ServerEvents.recipes(event => {
    event.replaceInput({mod: 'simpleplanes'}, 'minecraft:daylight_detector', 'mekanismgenerators:advanced_solar_generator')
    event.replaceInput({
        mod: 'simpleplanes',
        id: 'simpleplanes:charging_station'
    }, 'minecraft:light_weighted_pressure_plate', 'mekanism:chargepad')

    event.remove({
        output: 'simpleplanes:plane_workbench'
    })
    event.custom({
        "type": "create:mechanical_crafting",
        "acceptMirrored": true,
        "key": {
            "A": {
                "item": 'create:flywheel'
            },
            "B": {
                "item": 'mekanismtools:osmium_axe'
            },
            "C": {
                "item": 'create:railway_casing'
            },
            "D": {
                "item": 'mekanismtools:osmium_pickaxe'
            },
            "E": {
                "item": 'create:mechanical_arm'
            },
            "F": {
                "item": 'create:rotation_speed_controller'
            },
            "G": {
                "item": 'minecraft:obsidian'
            },
            "H": {
                "item": 'create:blaze_burner'
            },
            "I": {
                "item": 'minecraft:gold_block'
            },
            "M": {
                "item": 'create:blaze_cake'
            }

        },
        "pattern": [
            " A ",
            "BCD",
            "EFE",
            "GHG",
            "IMI"
        ],
        "result": {
            "item": 'simpleplanes:plane_workbench'
        }
    })

})