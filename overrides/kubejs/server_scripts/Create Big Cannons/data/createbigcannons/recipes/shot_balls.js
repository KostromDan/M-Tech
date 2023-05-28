ServerEvents.recipes(event => {
    event.custom({
        "type": "minecraft:crafting_shaped",
        "key": {
            "I": {
                "tag": "forge:ingots/iron"
            },
            "i": {
                "tag": "forge:nuggets/iron"
            }
        },
        "pattern": [
            "iii",
            "iIi",
            "iii"
        ],
        "result": {
            "count": 2,
            "item": "createbigcannons:shot_balls"
        }
    })
})