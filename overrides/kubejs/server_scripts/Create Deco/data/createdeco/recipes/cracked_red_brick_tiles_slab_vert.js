ServerEvents.recipes(event => {
    event.custom({
        "type": "minecraft:crafting_shaped",
        "key": {
            "s": {
                "item": "createdeco:cracked_red_brick_tiles_slab"
            }
        },
        "pattern": [
            "s",
            "s",
            "s"
        ],
        "result": {
            "count": 3,
            "item": "createdeco:cracked_red_brick_tiles_slab_vert"
        }
    })
})