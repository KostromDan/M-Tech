ServerEvents.recipes(event => {
    event.custom({
        "type": "minecraft:blasting",
        "cookingtime": 100,
        "experience": 0.5,
        "ingredient": {
            "item": "createdeco:worn_long_bricks_slab_vert"
        },
        "result": "createdeco:cracked_worn_long_bricks_slab_vert"
    })
})