ServerEvents.recipes(event => {
    event.custom({
        "type": "minecraft:blasting",
        "cookingtime": 100,
        "experience": 0.5,
        "ingredient": {
            "item": "createdeco:red_short_bricks_wall"
        },
        "result": "createdeco:cracked_red_short_bricks_wall"
    })
})