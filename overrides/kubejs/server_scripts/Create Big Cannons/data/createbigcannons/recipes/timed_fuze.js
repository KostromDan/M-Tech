ServerEvents.recipes(event => {
    event.custom({
        "type": "minecraft:crafting_shaped",
        "key": {
            "C": {
                "item": "minecraft:clock"
            },
            "I": {
                "tag": "forge:ingots/iron"
            },
            "R": {
                "tag": "forge:dusts/redstone"
            }
        },
        "pattern": [
            "I",
            "C",
            "R"
        ],
        "result": {
            "count": 4,
            "item": "createbigcannons:timed_fuze"
        }
    })
})