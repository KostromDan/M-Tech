ServerEvents.recipes(event => {
    event.custom({
        "type": "minecraft:crafting_shapeless",
        "ingredients": [
            {
                "item": "createdeco:gold_coinstack"
            }
        ],
        "result": {
            "count": 4,
            "item": "createdeco:gold_coin"
        }
    })
})