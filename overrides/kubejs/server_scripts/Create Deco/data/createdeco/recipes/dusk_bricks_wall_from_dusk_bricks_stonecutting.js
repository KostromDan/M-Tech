ServerEvents.recipes(event => {
    event.custom({
        "type": "minecraft:stonecutting",
        "count": 1,
        "ingredient": {
            "item": "createdeco:dusk_bricks"
        },
        "result": "createdeco:dusk_bricks_wall"
    })
})