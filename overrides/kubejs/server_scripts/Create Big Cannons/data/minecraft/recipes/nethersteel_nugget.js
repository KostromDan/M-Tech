ServerEvents.recipes(event => {
    event.custom({
        "type": "minecraft:crafting_shapeless",
        "ingredients": [
            {
                "item": "createbigcannons:nethersteel_ingot"
            }
        ],
        "result": {
            "count": 9,
            "item": "createbigcannons:nethersteel_nugget"
        }
    })
})