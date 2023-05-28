ServerEvents.recipes(event => {
    event.custom({
        "type": "minecraft:crafting_shaped",
        "key": {
            "m": {
                "item": "create:andesite_alloy"
            }
        },
        "pattern": [
            " m ",
            "m m",
            " m "
        ],
        "result": {
            "count": 2,
            "item": "createdeco:andesite_hull"
        }
    })
})