ServerEvents.recipes(event => {
    event.custom({
        "type": "minecraft:stonecutting",
        "count": 1,
        "ingredient": {
            "item": "createdeco:cracked_pearl_bricks"
        },
        "result": "createdeco:cracked_pearl_bricks_stairs"
    })
})