ServerEvents.recipes(event => {
    event.custom({
        "type": "minecraft:blasting",
        "cookingtime": 100,
        "experience": 0.5,
        "ingredient": {
            "item": "createdeco:worn_brick_tiles_stairs"
        },
        "result": "createdeco:cracked_worn_brick_tiles_stairs"
    })
})