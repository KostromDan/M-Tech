ServerEvents.recipes(event => {
    event.custom({
        "type": "minecraft:stonecutting",
        "count": 2,
        "ingredient": {
            "item": "minecraft:bricks"
        },
        "result": "createdeco:cracked_red_brick_tiles_slab_vert"
    })
})