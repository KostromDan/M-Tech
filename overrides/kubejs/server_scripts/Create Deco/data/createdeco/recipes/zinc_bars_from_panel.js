ServerEvents.recipes(event => {
    event.custom({
        "type": "minecraft:crafting_shapeless",
        "ingredients": [
            {
                "item": "createdeco:zinc_bars_overlay"
            }
        ],
        "result": {
            "item": "createdeco:zinc_bars"
        }
    })
})