ServerEvents.recipes(event => {
    event.custom({
        "type": "minecraft:blasting",
        "cookingtime": 100,
        "experience": 0.5,
        "ingredient": {
            "item": "createdeco:red_long_bricks_slab"
        },
        "result": "createdeco:cracked_red_long_bricks_slab_vert"
    })
})