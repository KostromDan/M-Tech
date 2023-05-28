ServerEvents.recipes(event => {
    event.custom({
        "type": "minecraft:crafting_shaped",
        "key": {
            "m": {
                "item": "create:zinc_ingot"
            }
        },
        "pattern": [
            "mm",
            "mm",
            "mm"
        ],
        "result": {
            "count": 3,
            "item": "createdeco:zinc_door"
        }
    })
})