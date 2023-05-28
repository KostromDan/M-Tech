ServerEvents.recipes(event => {
    event.custom({
        "type": "minecraft:crafting_shaped",
        "key": {
            "C": {
                "item": "create:cogwheel"
            },
            "I": {
                "item": 'createdeco:cast_iron_ingot'
            }
        },
        "pattern": [
            " I ",
            "CIC",
            " I "
        ],
        "result": {
            "item": "createbigcannons:cast_iron_sliding_breechblock"
        }
    })
})