ServerEvents.recipes(event => {
    event.custom({
        "type": "minecraft:crafting_shapeless",
        "group": "nethersteel_ingot",
        "ingredients": [
            {
                "item": "createbigcannons:nethersteel_block"
            }
        ],
        "result": {
            "count": 9,
            "item": "createbigcannons:nethersteel_ingot"
        }
    })
})