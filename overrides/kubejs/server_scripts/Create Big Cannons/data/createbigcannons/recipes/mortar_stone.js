ServerEvents.recipes(event => {
    event.custom({
        "type": "minecraft:crafting_shaped",
        "key": {
            "S": {
                "tag": "forge:stone"
            },
            "s": {
                "tag": "minecraft:wooden_slabs"
            }
        },
        "pattern": [
            " S ",
            "SSS",
            " s "
        ],
        "result": {
            "item": "createbigcannons:mortar_stone"
        }
    })
})