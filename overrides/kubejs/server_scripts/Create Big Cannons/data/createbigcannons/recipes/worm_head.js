ServerEvents.recipes(event => {
    event.custom({
        "type": "minecraft:crafting_shaped",
        "key": {
            "H": {
                "item": "minecraft:iron_bars"
            },
            "P": {
                "item": "create:piston_extension_pole"
            }
        },
        "pattern": [
            "HHH",
            " P "
        ],
        "result": {
            "item": "createbigcannons:worm_head"
        }
    })
})