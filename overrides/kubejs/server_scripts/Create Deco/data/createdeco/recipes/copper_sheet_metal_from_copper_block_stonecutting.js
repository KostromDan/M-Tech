ServerEvents.recipes(event => {
    event.custom({
        "type": "minecraft:stonecutting",
        "count": 4,
        "ingredient": {
            "item": "minecraft:copper_block"
        },
        "result": "createdeco:copper_sheet_metal"
    })
})