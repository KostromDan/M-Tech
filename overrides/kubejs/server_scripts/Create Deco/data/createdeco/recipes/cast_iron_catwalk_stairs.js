ServerEvents.recipes(event => {
    event.custom({
        "type": "minecraft:crafting_shaped",
        "key": {
            "b": {
                "item": "createdeco:cast_iron_bars"
            },
            "c": {
                "item": "createdeco:cast_iron_catwalk"
            }
        },
        "pattern": [
            " c",
            "cb"
        ],
        "result": {
            "count": 2,
            "item": "createdeco:cast_iron_catwalk_stairs"
        }
    })
})