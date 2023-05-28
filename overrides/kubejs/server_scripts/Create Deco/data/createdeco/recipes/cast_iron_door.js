ServerEvents.recipes(event => {
    event.custom({
        "type": "minecraft:crafting_shaped",
        "key": {
            "m": {
                "item": "createdeco:cast_iron_ingot"
            }
        },
        "pattern": [
            "mm",
            "mm",
            "mm"
        ],
        "result": {
            "count": 3,
            "item": "createdeco:cast_iron_door"
        }
    })
})