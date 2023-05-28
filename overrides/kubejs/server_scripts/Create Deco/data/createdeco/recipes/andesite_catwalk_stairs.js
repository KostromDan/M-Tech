ServerEvents.recipes(event => {
    event.custom({
        "type": "minecraft:crafting_shaped",
        "key": {
            "b": {
                "item": "createdeco:andesite_bars"
            },
            "c": {
                "item": "createdeco:andesite_catwalk"
            }
        },
        "pattern": [
            " c",
            "cb"
        ],
        "result": {
            "count": 2,
            "item": "createdeco:andesite_catwalk_stairs"
        }
    })
})