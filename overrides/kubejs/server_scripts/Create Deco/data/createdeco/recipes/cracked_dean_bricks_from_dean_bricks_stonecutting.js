ServerEvents.recipes(event => {
    event.custom({
        "type": "minecraft:stonecutting",
        "count": 1,
        "ingredient": {
            "item": "createdeco:dean_bricks"
        },
        "result": "createdeco:cracked_dean_bricks"
    })
})