ServerEvents.recipes(event => {
    event.custom({
        "type": "minecraft:crafting_shaped",
        "key": {
            "X": {
                "item": "createdeco:pearl_long_bricks"
            }
        },
        "pattern": [
            "XXX",
            "XXX"
        ],
        "result": {
            "count": 6,
            "item": "createdeco:pearl_long_bricks_wall"
        }
    })
})