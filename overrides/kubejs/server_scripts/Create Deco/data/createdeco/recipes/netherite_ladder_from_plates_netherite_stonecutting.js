ServerEvents.recipes(event => {
    event.custom({
        "type": "minecraft:stonecutting",
        "count": 2,
        "ingredient": {
            "item": 'createdeco:netherite_sheet'
        },
        "result": "createdeco:netherite_ladder"
    })
})