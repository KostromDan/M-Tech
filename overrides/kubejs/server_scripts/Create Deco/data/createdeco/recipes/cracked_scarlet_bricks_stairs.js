ServerEvents.recipes(event => {
    event.custom({
        "type": "minecraft:crafting_shaped",
        "key": {
            "X": {
                "item": "createdeco:cracked_scarlet_bricks"
            }
        },
        "pattern": [
            "X  ",
            "XX ",
            "XXX"
        ],
        "result": {
            "count": 4,
            "item": "createdeco:cracked_scarlet_bricks_stairs"
        }
    })
})