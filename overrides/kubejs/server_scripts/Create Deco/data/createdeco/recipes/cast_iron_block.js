ServerEvents.recipes(event => {
    event.custom({
        "type": "minecraft:crafting_shaped",
        "key": {
            "X": {
                "item": "createdeco:cast_iron_ingot"
            }
        },
        "pattern": [
            "XXX",
            "XXX",
            "XXX"
        ],
        "result": {
            "item": "createdeco:cast_iron_block"
        }
    })
})