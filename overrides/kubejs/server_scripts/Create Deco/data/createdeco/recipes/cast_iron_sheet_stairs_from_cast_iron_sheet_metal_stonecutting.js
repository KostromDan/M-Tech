ServerEvents.recipes(event => {
    event.custom({
        "type": "minecraft:stonecutting",
        "count": 1,
        "ingredient": {
            "item": "createdeco:cast_iron_sheet_metal"
        },
        "result": "createdeco:cast_iron_sheet_stairs"
    })
})