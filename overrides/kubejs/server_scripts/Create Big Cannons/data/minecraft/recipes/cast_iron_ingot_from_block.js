ServerEvents.recipes(event => {
    event.custom({
        "type": "minecraft:crafting_shapeless",
        "group": "cast_iron_ingot",
        "ingredients": [
            {
                "item": "createbigcannons:cast_iron_block"
            }
        ],
        "result": {
            "count": 9,
            "item": 'createdeco:cast_iron_ingot'
        }
    })
})