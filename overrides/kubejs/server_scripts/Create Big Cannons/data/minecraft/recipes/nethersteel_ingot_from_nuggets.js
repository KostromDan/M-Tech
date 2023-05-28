ServerEvents.recipes(event => {
    event.custom({
        "type": "minecraft:crafting_shaped",
        "group": "nethersteel_ingot",
        "key": {
            "#": {
                "item": "createbigcannons:nethersteel_nugget"
            }
        },
        "pattern": [
            "###",
            "###",
            "###"
        ],
        "result": {
            "item": "createbigcannons:nethersteel_ingot"
        }
    })
})