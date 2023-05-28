ServerEvents.recipes(event => {
    event.custom({
        "type": "minecraft:crafting_shaped",
        "key": {
            "G": {
                "tag": "forge:gunpowder"
            },
            "L": {
                "tag": "minecraft:logs"
            }
        },
        "pattern": [
            " L ",
            "LGL",
            " L "
        ],
        "result": {
            "item": "createbigcannons:log_cannon_chamber"
        }
    })
})