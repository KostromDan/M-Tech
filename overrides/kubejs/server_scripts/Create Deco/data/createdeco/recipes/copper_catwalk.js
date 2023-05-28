ServerEvents.recipes(event => {
    event.custom({
        "type": "minecraft:crafting_shaped",
        "key": {
            "B": {
                "item": "createdeco:copper_bars"
            },
            "p": {
                "item": 'create:copper_sheet'
            }
        },
        "pattern": [
            " p ",
            "pBp",
            " p "
        ],
        "result": {
            "count": 3,
            "item": "createdeco:copper_catwalk"
        }
    })
})