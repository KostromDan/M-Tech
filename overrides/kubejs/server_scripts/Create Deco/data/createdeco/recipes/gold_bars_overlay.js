ServerEvents.recipes(event => {
    event.custom({
        "type": "minecraft:crafting_shapeless",
        "ingredients": [
            {
                "item": "createdeco:gold_bars"
            }
        ],
        "result": {
            "item": "createdeco:gold_bars_overlay"
        }
    })
})