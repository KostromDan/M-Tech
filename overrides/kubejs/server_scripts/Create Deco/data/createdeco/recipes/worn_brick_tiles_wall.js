ServerEvents.recipes(event => {
    event.custom({
        "type": "minecraft:crafting_shaped",
        "key": {
            "X": {
                "item": "createdeco:worn_brick_tiles"
            }
        },
        "pattern": [
            "XXX",
            "XXX"
        ],
        "result": {
            "count": 6,
            "item": "createdeco:worn_brick_tiles_wall"
        }
    })
})