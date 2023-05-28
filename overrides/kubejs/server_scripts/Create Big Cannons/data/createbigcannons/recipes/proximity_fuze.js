ServerEvents.recipes(event => {
    event.custom({
        "type": "minecraft:crafting_shaped",
        "key": {
            "A": {
                "item": "minecraft:iron_bars"
            },
            "C": {
                "tag": "forge:gems/quartz"
            },
            "I": {
                "tag": "forge:ingots/iron"
            },
            "R": {
                "tag": "forge:dusts/redstone"
            }
        },
        "pattern": [
            " A ",
            "RCR",
            " I "
        ],
        "result": {
            "count": 4,
            "item": "createbigcannons:proximity_fuze"
        }
    })
})