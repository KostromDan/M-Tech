ServerEvents.recipes(event => {
    event.custom({
        "type": "minecraft:crafting_shapeless",
        "ingredients": [
            {
                "item": "createdeco:brass_bars_overlay"
            }
        ],
        "result": {
            "item": "createdeco:brass_bars"
        }
    })
})