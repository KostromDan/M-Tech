ServerEvents.recipes(event => {
    event.custom({
        "type": "minecraft:stonecutting",
        "count": 1,
        "ingredient": {
            "item": "createdeco:netherite_sheet_metal"
        },
        "result": "createdeco:netherite_sheet_stairs"
    })
})