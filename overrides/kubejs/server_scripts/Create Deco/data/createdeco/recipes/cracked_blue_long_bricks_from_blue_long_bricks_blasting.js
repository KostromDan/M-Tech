ServerEvents.recipes(event => {
    event.custom({
        "type": "minecraft:blasting",
        "cookingtime": 100,
        "experience": 0.5,
        "ingredient": {
            "item": "createdeco:blue_long_bricks"
        },
        "result": "createdeco:cracked_blue_long_bricks"
    })
})