ServerEvents.recipes(event => {
    event.custom({
        "type": "minecraft:crafting_shaped",
        "key": {
            "C": {
                "item": 'createdeco:cast_iron_ingot'
            },
            "I": {
                "tag": "forge:ingots/iron"
            },
            "S": {
                "tag": "minecraft:wooden_slabs"
            }
        },
        "pattern": [
            " C ",
            "III",
            " S "
        ],
        "result": {
            "item": "createbigcannons:ap_shot"
        }
    })
})