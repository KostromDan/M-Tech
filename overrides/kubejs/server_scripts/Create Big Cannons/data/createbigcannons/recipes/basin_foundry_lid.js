ServerEvents.recipes(event => {
    event.custom({
        "type": "minecraft:crafting_shaped",
        "key": {
            "A": {
                "item": "create:andesite_alloy"
            }
        },
        "pattern": [
            " A ",
            "AAA"
        ],
        "result": {
            "item": "createbigcannons:basin_foundry_lid"
        }
    })
})