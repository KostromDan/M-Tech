ServerEvents.recipes(event => {
    event.custom({
        "type": "minecraft:stonecutting",
        "count": 2,
        "ingredient": {
            "item": "createdeco:zinc_sheet_metal"
        },
        "result": "createdeco:zinc_sheet_slab"
    })
})