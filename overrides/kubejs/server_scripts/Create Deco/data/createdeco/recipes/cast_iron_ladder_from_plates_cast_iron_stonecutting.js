ServerEvents.recipes(event => {
    event.custom({
        "type": "minecraft:stonecutting",
        "count": 2,
        "ingredient": {
            "item": 'createdeco:cast_iron_sheet'
        },
        "result": "createdeco:cast_iron_ladder"
    })
})