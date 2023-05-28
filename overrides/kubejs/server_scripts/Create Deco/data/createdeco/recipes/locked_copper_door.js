ServerEvents.recipes(event => {
    event.custom({
        "type": "minecraft:crafting_shapeless",
        "ingredients": [
            {
                "item": "minecraft:redstone_torch"
            },
            {
                "item": "createdeco:copper_door"
            }
        ],
        "result": {
            "item": "createdeco:locked_copper_door"
        }
    })
})