ServerEvents.recipes(event => {
    event.custom({
        "type": "minecraft:crafting_shaped",
        "key": {
            "b": {
                "item": "createdeco:gold_bars"
            }
        },
        "pattern": [
            " b ",
            "b b",
            " b "
        ],
        "result": {
            "count": 4,
            "item": "createdeco:gold_support"
        }
    })
})