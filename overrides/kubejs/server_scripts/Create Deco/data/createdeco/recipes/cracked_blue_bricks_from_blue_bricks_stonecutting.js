ServerEvents.recipes(event => {
    event.custom({
        "type": "minecraft:stonecutting",
        "count": 1,
        "ingredient": {
            "item": "createdeco:blue_bricks"
        },
        "result": "createdeco:cracked_blue_bricks"
    })
})