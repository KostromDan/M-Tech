ServerEvents.recipes(event => {
    event.custom({
        "type": "minecraft:crafting_shapeless",
        "ingredients": [
            {
                "item": "minecraft:netherite_ingot"
            }
        ],
        "result": {
            "count": 9,
            "item": "createdeco:netherite_nugget"
        }
    })
})