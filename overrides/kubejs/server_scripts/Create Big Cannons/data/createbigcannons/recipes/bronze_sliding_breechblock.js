ServerEvents.recipes(event => {
    event.custom({
        "type": "minecraft:crafting_shaped",
        "key": {
            "C": {
                "item": "create:cogwheel"
            },
            "I": {
                "tag": "forge:ingots/bronze"
            }
        },
        "pattern": [
            " I ",
            "CIC",
            " I "
        ],
        "result": {
            "item": "createbigcannons:bronze_sliding_breechblock"
        }
    })
})