ServerEvents.recipes(event => {
    event.custom({
        "type": "minecraft:crafting_shaped",
        "key": {
            "b": {
                "item": "createdeco:dusk_brick"
            }
        },
        "pattern": [
            "bb",
            "bb"
        ],
        "result": {
            "item": "createdeco:dusk_bricks"
        }
    })
})