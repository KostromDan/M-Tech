ServerEvents.recipes(event => {
    event.custom({
        "type": "minecraft:blasting",
        "cookingtime": 100,
        "experience": 0.5,
        "ingredient": {
            "item": "createdeco:blue_short_bricks_wall"
        },
        "result": "createdeco:cracked_blue_short_bricks_wall"
    })
})