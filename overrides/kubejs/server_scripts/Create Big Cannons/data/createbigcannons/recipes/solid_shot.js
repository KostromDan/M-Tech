ServerEvents.recipes(event => {
    event.custom({
        "type": "minecraft:crafting_shaped",
        "key": {
            "I": {
                "tag": "forge:ingots/iron"
            },
            "S": {
                "tag": "minecraft:wooden_slabs"
            },
            "i": {
                "tag": "forge:nuggets/iron"
            }
        },
        "pattern": [
            "iIi",
            "III",
            " S "
        ],
        "result": {
            "item": "createbigcannons:solid_shot"
        }
    })
})