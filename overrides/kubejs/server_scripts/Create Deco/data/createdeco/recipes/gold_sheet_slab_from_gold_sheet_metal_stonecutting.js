ServerEvents.recipes(event => {
    event.custom({
        "type": "minecraft:stonecutting",
        "count": 2,
        "ingredient": {
            "item": "createdeco:gold_sheet_metal"
        },
        "result": "createdeco:gold_sheet_slab"
    })
})