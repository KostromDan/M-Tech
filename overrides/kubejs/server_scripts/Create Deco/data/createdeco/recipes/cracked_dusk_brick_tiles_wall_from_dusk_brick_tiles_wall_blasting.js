ServerEvents.recipes(event => {
    event.custom({
        "type": "minecraft:blasting",
        "cookingtime": 100,
        "experience": 0.5,
        "ingredient": {
            "item": "createdeco:dusk_brick_tiles_wall"
        },
        "result": "createdeco:cracked_dusk_brick_tiles_wall"
    })
})