ServerEvents.recipes(event => {
    event.custom({
        "type": "minecraft:blasting",
        "cookingtime": 100,
        "experience": 0.5,
        "ingredient": {
            "item": "createdeco:dean_bricks_slab"
        },
        "result": "createdeco:cracked_dean_bricks_slab"
    })
})