ServerEvents.recipes(event => {
    event.custom({
        "type": "minecraft:crafting_shaped",
        "key": {
            "b": {
                "item": "createdeco:netherite_bars"
            },
            "c": {
                "item": "createdeco:netherite_catwalk"
            }
        },
        "pattern": [
            " c",
            "cb"
        ],
        "result": {
            "count": 2,
            "item": "createdeco:netherite_catwalk_stairs"
        }
    })
})