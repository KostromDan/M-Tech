ServerEvents.recipes(event => {
    event.custom({
        "type": "minecraft:crafting_shaped",
        "key": {
            "s": {
                "item": "createdeco:scarlet_bricks_slab"
            }
        },
        "pattern": [
            "s",
            "s",
            "s"
        ],
        "result": {
            "count": 3,
            "item": "createdeco:scarlet_bricks_slab_vert"
        }
    })
})