ServerEvents.recipes(event => {
    event.custom({
        "type": "minecraft:stonecutting",
        "count": 4,
        "ingredient": {
            "item": "create:brass_block"
        },
        "result": "createdeco:brass_sheet_metal"
    })
})