ServerEvents.recipes(event => {
    event.custom({
        "type": "minecraft:stonecutting",
        "count": 2,
        "ingredient": {
            "item": 'create:golden_sheet'
        },
        "result": "createdeco:gold_ladder"
    })
})