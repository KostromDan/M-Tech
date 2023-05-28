ServerEvents.recipes(event => {
    event.custom({
        "type": "minecraft:crafting_shaped",
        "key": {
            "C": {
                "item": "minecraft:yellow_dye"
            },
            "b": {
                "item": "minecraft:brick"
            }
        },
        "pattern": [
            "bbb",
            "bCb",
            "bbb"
        ],
        "result": {
            "count": 8,
            "item": "createdeco:dean_brick"
        }
    })
})