ServerEvents.recipes(event => {
    event.custom({
        "type": "minecraft:crafting_shapeless",
        "ingredients": [
            {
                "item": "createdeco:polished_iron_bars_overlay"
            }
        ],
        "result": {
            "item": "createdeco:polished_iron_bars"
        }
    })
})