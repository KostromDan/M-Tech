ServerEvents.recipes(event => {
    event.custom({
        "type": "minecraft:blasting",
        "cookingtime": 100,
        "experience": 0.5,
        "ingredient": {
            "item": "minecraft:brick_wall"
        },
        "result": "createdeco:cracked_red_bricks_wall"
    })
})