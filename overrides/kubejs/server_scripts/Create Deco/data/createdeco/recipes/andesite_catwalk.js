ServerEvents.recipes(event => {
    event.custom({
        "type": "minecraft:crafting_shaped",
        "key": {
            "B": {
                "item": "createdeco:andesite_bars"
            },
            "p": {
                "item": "create:andesite_alloy"
            }
        },
        "pattern": [
            " p ",
            "pBp",
            " p "
        ],
        "result": {
            "count": 3,
            "item": "createdeco:andesite_catwalk"
        }
    })
})