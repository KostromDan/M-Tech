ServerEvents.recipes(event => {
    event.custom({
        "type": "minecraft:crafting_shapeless",
        "ingredients": [
            {
                "item": "createdeco:cast_iron_coinstack"
            }
        ],
        "result": {
            "count": 4,
            "item": "createdeco:cast_iron_coin"
        }
    })
})