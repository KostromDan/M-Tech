ServerEvents.recipes(event => {
    event.custom({
        "type": "minecraft:blasting",
        "cookingtime": 100,
        "experience": 0.5,
        "ingredient": {
            "item": "createdeco:dean_short_bricks_wall"
        },
        "result": "createdeco:cracked_dean_short_bricks_wall"
    })
})