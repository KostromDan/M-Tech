ServerEvents.recipes(event => {
    event.custom({
        "type": "minecraft:crafting_shaped",
        "key": {
            "b": {
                "item": "createdeco:zinc_bars"
            },
            "c": {
                "item": "createdeco:zinc_catwalk"
            }
        },
        "pattern": [
            " c",
            "cb"
        ],
        "result": {
            "count": 2,
            "item": "createdeco:zinc_catwalk_stairs"
        }
    })
})