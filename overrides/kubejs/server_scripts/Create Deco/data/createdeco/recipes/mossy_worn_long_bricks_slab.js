ServerEvents.recipes(event => {
    event.custom({
        "type": "minecraft:crafting_shaped",
        "key": {
            "X": {
                "item": "createdeco:mossy_worn_long_bricks"
            }
        },
        "pattern": [
            "XXX"
        ],
        "result": {
            "count": 6,
            "item": "createdeco:mossy_worn_long_bricks_slab"
        }
    })
})