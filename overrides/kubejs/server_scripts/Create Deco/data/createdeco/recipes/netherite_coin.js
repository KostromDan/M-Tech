ServerEvents.recipes(event => {
    event.custom({
        "type": "minecraft:crafting_shapeless",
        "ingredients": [
            {
                "item": "createdeco:netherite_coinstack"
            }
        ],
        "result": {
            "count": 4,
            "item": "createdeco:netherite_coin"
        }
    })
})