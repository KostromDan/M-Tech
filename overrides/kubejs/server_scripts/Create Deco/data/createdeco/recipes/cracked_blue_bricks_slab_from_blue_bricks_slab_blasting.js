ServerEvents.recipes(event => {
    event.custom({
        "type": "minecraft:blasting",
        "cookingtime": 100,
        "experience": 0.5,
        "ingredient": {
            "item": "createdeco:blue_bricks_slab"
        },
        "result": "createdeco:cracked_blue_bricks_slab"
    })
})