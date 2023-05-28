ServerEvents.recipes(event => {
    event.custom({
        "type": "minecraft:crafting_shaped",
        "key": {
            "G": {
                "tag": "forge:gunpowder"
            },
            "K": {
                "tag": "minecraft:wooden_buttons"
            },
            "L": {
                "tag": "minecraft:logs"
            }
        },
        "pattern": [
            " K ",
            "LLL",
            " G "
        ],
        "result": {
            "item": "createbigcannons:log_cannon_end"
        }
    })
})