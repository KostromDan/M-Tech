ServerEvents.recipes(event => {
    event.custom({
        "type": "minecraft:crafting_shaped",
        "key": {
            "X": {
                "item": "createdeco:mossy_dean_bricks"
            }
        },
        "pattern": [
            "XXX",
            "XXX"
        ],
        "result": {
            "count": 6,
            "item": "createdeco:mossy_dean_bricks_wall"
        }
    })
})