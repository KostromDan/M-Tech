ServerEvents.recipes(event => {
    event.custom({
        "type": "minecraft:crafting_shaped",
        "key": {
            "#": {
                "item": "createbigcannons:nethersteel_ingot"
            }
        },
        "pattern": [
            "###",
            "###",
            "###"
        ],
        "result": {
            "item": "createbigcannons:nethersteel_block"
        }
    })
})