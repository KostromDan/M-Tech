ServerEvents.recipes(event => {
    event.custom({
        "type": "minecraft:crafting_shapeless",
        "ingredients": [
            {
                "item": "immersiveengineering:plate_steel"
            },
            {
                "item": "immersiveengineering:hammer"
            }
        ],
        "result": {
            "item": 'immersiveengineering:stick_steel'
        }
    })
})