ServerEvents.recipes(event => {
    event.custom({
        "type": "minecraft:stonecutting",
        "count": 2,
        "ingredient": {
            "item": 'create:iron_sheet'
        },
        "result": "createdeco:iron_ladder"
    })
})