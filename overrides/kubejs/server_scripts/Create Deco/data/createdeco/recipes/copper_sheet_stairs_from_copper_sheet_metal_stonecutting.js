ServerEvents.recipes(event => {
    event.custom({
        "type": "minecraft:stonecutting",
        "count": 1,
        "ingredient": {
            "item": "createdeco:copper_sheet_metal"
        },
        "result": "createdeco:copper_sheet_stairs"
    })
})