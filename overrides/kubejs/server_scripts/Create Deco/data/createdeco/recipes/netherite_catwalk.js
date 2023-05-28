ServerEvents.recipes(event => {
    event.custom({
        "type": "minecraft:crafting_shaped",
        "key": {
            "B": {
                "item": "createdeco:netherite_bars"
            },
            "p": {
                "item": 'createdeco:netherite_sheet'
            }
        },
        "pattern": [
            " p ",
            "pBp",
            " p "
        ],
        "result": {
            "count": 3,
            "item": "createdeco:netherite_catwalk"
        }
    })
})