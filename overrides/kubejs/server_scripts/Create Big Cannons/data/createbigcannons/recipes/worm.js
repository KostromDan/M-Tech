ServerEvents.recipes(event => {
    event.custom({
        "type": "minecraft:crafting_shaped",
        "key": {
            "H": {
                "item": "createbigcannons:worm_head"
            },
            "S": {
                "item": "minecraft:stick"
            }
        },
        "pattern": [
            "H",
            "S",
            "S"
        ],
        "result": {
            "item": "createbigcannons:worm"
        }
    })
})