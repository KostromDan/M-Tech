ServerEvents.recipes(event => {
    event.custom({
        "type": "minecraft:stonecutting",
        "count": 1,
        "ingredient": {
            "item": "createdeco:brass_sheet_metal"
        },
        "result": "createdeco:brass_sheet_stairs"
    })
})