ServerEvents.recipes(event => {
    event.custom({
        "type": "minecraft:crafting_shaped",
        "key": {
            "m": {
                "item": "minecraft:copper_ingot"
            }
        },
        "pattern": [
            "mm",
            "mm",
            "mm"
        ],
        "result": {
            "count": 3,
            "item": "createdeco:copper_door"
        }
    })
})