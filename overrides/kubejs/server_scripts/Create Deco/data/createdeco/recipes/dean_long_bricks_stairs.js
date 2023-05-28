ServerEvents.recipes(event => {
    event.custom({
        "type": "minecraft:crafting_shaped",
        "key": {
            "X": {
                "item": "createdeco:dean_long_bricks"
            }
        },
        "pattern": [
            "X  ",
            "XX ",
            "XXX"
        ],
        "result": {
            "count": 4,
            "item": "createdeco:dean_long_bricks_stairs"
        }
    })
})