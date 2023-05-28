ServerEvents.recipes(event => {
    event.custom({
        "type": "minecraft:crafting_shaped",
        "key": {
            "X": {
                "item": "createdeco:worn_brick_tiles"
            }
        },
        "pattern": [
            "X  ",
            "XX ",
            "XXX"
        ],
        "result": {
            "count": 4,
            "item": "createdeco:worn_brick_tiles_stairs"
        }
    })
})