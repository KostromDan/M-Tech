ServerEvents.recipes(event => {
    event.custom({
        "type": "minecraft:stonecutting",
        "count": 2,
        "ingredient": {
            "item": "createdeco:worn_bricks"
        },
        "result": "createdeco:cracked_worn_short_bricks_slab"
    })
})