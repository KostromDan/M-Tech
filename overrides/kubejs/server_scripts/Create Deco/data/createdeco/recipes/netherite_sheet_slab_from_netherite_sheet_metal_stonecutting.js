ServerEvents.recipes(event => {
    event.custom({
        "type": "minecraft:stonecutting",
        "count": 2,
        "ingredient": {
            "item": "createdeco:netherite_sheet_metal"
        },
        "result": "createdeco:netherite_sheet_slab"
    })
})