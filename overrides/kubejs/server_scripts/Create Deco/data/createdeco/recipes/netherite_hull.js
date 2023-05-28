ServerEvents.recipes(event => {
    event.custom({
        "type": "minecraft:crafting_shaped",
        "key": {
            "m": {
                "item": "minecraft:netherite_ingot"
            }
        },
        "pattern": [
            " m ",
            "m m",
            " m "
        ],
        "result": {
            "count": 2,
            "item": "createdeco:netherite_hull"
        }
    })
})