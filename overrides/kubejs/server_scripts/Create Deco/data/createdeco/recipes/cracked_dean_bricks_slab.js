ServerEvents.recipes(event => {
    event.custom({
        "type": "minecraft:crafting_shaped",
        "key": {
            "X": {
                "item": "createdeco:cracked_dean_bricks"
            }
        },
        "pattern": [
            "XXX"
        ],
        "result": {
            "count": 6,
            "item": "createdeco:cracked_dean_bricks_slab"
        }
    })
})