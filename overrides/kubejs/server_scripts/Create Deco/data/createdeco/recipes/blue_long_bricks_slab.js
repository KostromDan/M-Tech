ServerEvents.recipes(event => {
    event.custom({
        "type": "minecraft:crafting_shaped",
        "key": {
            "X": {
                "item": "createdeco:blue_long_bricks"
            }
        },
        "pattern": [
            "XXX"
        ],
        "result": {
            "count": 6,
            "item": "createdeco:blue_long_bricks_slab"
        }
    })
})