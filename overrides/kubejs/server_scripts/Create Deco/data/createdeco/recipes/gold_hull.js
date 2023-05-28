ServerEvents.recipes(event => {
    event.custom({
        "type": "minecraft:crafting_shaped",
        "key": {
            "m": {
                "item": "minecraft:gold_ingot"
            }
        },
        "pattern": [
            " m ",
            "m m",
            " m "
        ],
        "result": {
            "count": 2,
            "item": "createdeco:gold_hull"
        }
    })
})