ServerEvents.recipes(event => {
    event.custom({
        "type": "minecraft:crafting_shaped",
        "key": {
            "C": {
                "item": "create:cogwheel"
            },
            "I": {
                "tag": "forge:ingots/steel"
            }
        },
        "pattern": [
            " I ",
            "CIC",
            " I "
        ],
        "result": {
            "item": "createbigcannons:steel_sliding_breechblock"
        }
    })
})