ServerEvents.recipes(event => {
    event.custom({
        "type": "minecraft:blasting",
        "cookingtime": 100,
        "experience": 0.5,
        "ingredient": {
            "item": "createdeco:worn_short_bricks"
        },
        "result": "createdeco:cracked_worn_short_bricks"
    })
})