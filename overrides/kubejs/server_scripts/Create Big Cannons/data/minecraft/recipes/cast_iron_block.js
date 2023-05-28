ServerEvents.recipes(event => {
    event.custom({
        "type": "minecraft:crafting_shaped",
        "key": {
            "#": {
                "item": 'createdeco:cast_iron_ingot'
            }
        },
        "pattern": [
            "###",
            "###",
            "###"
        ],
        "result": {
            "item": "createbigcannons:cast_iron_block"
        }
    })
})