ServerEvents.recipes(event => {
    event.custom({
        "type": "minecraft:blasting",
        "cookingtime": 100,
        "experience": 0.3,
        "ingredient": {
            "item": "minecraft:brick"
        },
        "result": "createdeco:worn_brick"
    })
})