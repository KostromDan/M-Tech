ServerEvents.recipes(event => {
    event.custom({
        "type": "minecraft:stonecutting",
        "count": 1,
        "ingredient": {
            "item": "createdeco:red_brick_tiles"
        },
        "result": "createdeco:red_brick_tiles_stairs"
    })
})