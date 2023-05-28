ServerEvents.recipes(event => {
    event.custom({
        "type": "minecraft:crafting_shaped",
        "key": {
            "H": {
                "tag": "minecraft:planks"
            },
            "P": {
                "item": "create:piston_extension_pole"
            }
        },
        "pattern": [
            "H",
            "P"
        ],
        "result": {
            "item": "createbigcannons:ram_head"
        }
    })
})