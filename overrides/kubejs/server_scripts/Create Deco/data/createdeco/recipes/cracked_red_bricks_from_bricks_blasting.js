ServerEvents.recipes(event => {
    event.custom({
        "type": "minecraft:blasting",
        "cookingtime": 100,
        "experience": 0.5,
        "ingredient": {
            "item": "minecraft:bricks"
        },
        "result": "createdeco:cracked_red_bricks"
    })
})