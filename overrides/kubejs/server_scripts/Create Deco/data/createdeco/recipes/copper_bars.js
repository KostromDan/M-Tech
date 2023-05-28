ServerEvents.recipes(event => {
    event.custom({
        "type": "minecraft:crafting_shaped",
        "key": {
            "m": {
                "item": "minecraft:copper_ingot"
            }
        },
        "pattern": [
            "mmm",
            "mmm"
        ],
        "result": {
            "count": 16,
            "item": "createdeco:copper_bars"
        }
    })
})