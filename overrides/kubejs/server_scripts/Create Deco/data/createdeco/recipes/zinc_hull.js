ServerEvents.recipes(event => {
    event.custom({
        "type": "minecraft:crafting_shaped",
        "key": {
            "m": {
                "item": "create:zinc_ingot"
            }
        },
        "pattern": [
            " m ",
            "m m",
            " m "
        ],
        "result": {
            "count": 2,
            "item": "createdeco:zinc_hull"
        }
    })
})