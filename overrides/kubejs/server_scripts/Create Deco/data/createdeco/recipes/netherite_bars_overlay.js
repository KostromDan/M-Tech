ServerEvents.recipes(event => {
    event.custom({
        "type": "minecraft:crafting_shapeless",
        "ingredients": [
            {
                "item": "createdeco:netherite_bars"
            }
        ],
        "result": {
            "item": "createdeco:netherite_bars_overlay"
        }
    })
})