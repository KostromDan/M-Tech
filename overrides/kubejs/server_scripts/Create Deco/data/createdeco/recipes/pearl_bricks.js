ServerEvents.recipes(event => {
    event.custom({
        "type": "minecraft:crafting_shaped",
        "key": {
            "b": {
                "item": "createdeco:pearl_brick"
            }
        },
        "pattern": [
            "bb",
            "bb"
        ],
        "result": {
            "item": "createdeco:pearl_bricks"
        }
    })
})