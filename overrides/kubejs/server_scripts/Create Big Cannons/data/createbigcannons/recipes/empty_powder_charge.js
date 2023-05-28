ServerEvents.recipes(event => {
    event.custom({
        "type": "minecraft:crafting_shaped",
        "key": {
            "S": {
                "item": "minecraft:string"
            },
            "W": {
                "tag": "minecraft:wool"
            }
        },
        "pattern": [
            "S",
            "W",
            "S"
        ],
        "result": {
            "item": "createbigcannons:empty_powder_charge"
        }
    })
})