ServerEvents.recipes(event => {
    event.custom({
        "type": "minecraft:crafting_shaped",
        "key": {
            "m": {
                "item": "create:andesite_alloy"
            }
        },
        "pattern": [
            "mm",
            "mm",
            "mm"
        ],
        "result": {
            "count": 3,
            "item": "createdeco:andesite_door"
        }
    })
})