ServerEvents.recipes(event => {
    event.custom({
        "type": "minecraft:crafting_shaped",
        "key": {
            "X": {
                "item": "createdeco:cracked_scarlet_short_bricks"
            }
        },
        "pattern": [
            "XXX",
            "XXX"
        ],
        "result": {
            "count": 6,
            "item": "createdeco:cracked_scarlet_short_bricks_wall"
        }
    })
})