ServerEvents.recipes(event => {
    event.custom({
        "type": "minecraft:crafting_shaped",
        "key": {
            "b": {
                "item": "createdeco:copper_bars"
            },
            "c": {
                "item": "createdeco:copper_catwalk"
            }
        },
        "pattern": [
            " c",
            "cb"
        ],
        "result": {
            "count": 2,
            "item": "createdeco:copper_catwalk_stairs"
        }
    })
})