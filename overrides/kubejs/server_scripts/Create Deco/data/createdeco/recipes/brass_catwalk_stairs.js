ServerEvents.recipes(event => {
    event.custom({
        "type": "minecraft:crafting_shaped",
        "key": {
            "b": {
                "item": "createdeco:brass_bars"
            },
            "c": {
                "item": "createdeco:brass_catwalk"
            }
        },
        "pattern": [
            " c",
            "cb"
        ],
        "result": {
            "count": 2,
            "item": "createdeco:brass_catwalk_stairs"
        }
    })
})