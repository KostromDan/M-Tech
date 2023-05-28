ServerEvents.recipes(event => {
    event.custom({
        "type": "minecraft:crafting_shaped",
        "key": {
            "C": {
                "item": "create:andesite_casing"
            },
            "D": {
                "tag": "forge:ingots/iron"
            },
            "P": {
                "item": "create:piston_extension_pole"
            },
            "p": {
                "item": "create:fluid_pipe"
            }
        },
        "pattern": [
            " D ",
            "pCp",
            " P "
        ],
        "result": {
            "item": "createbigcannons:cannon_drill"
        }
    })
})