ServerEvents.recipes(event => {
    event.custom({
        "type": "minecraft:crafting_shaped",
        "key": {
            "B": {
                "item": "createdeco:polished_iron_bars"
            },
            "p": {
                "item": 'create:iron_sheet'
            }
        },
        "pattern": [
            " p ",
            "pBp",
            " p "
        ],
        "result": {
            "count": 3,
            "item": "createdeco:iron_catwalk"
        }
    })
})