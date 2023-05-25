ServerEvents.recipes(event => {
    event.custom({
        "type": "minecraft:crafting_shapeless",
        "ingredients": [
            {
                "tag": "forge:ingots/steel"
            }, {
                "tag": "forge:ingots/steel"
            },
            {
                "item": "immersiveengineering:hammer"
            }
        ],
        "result": {
            "item": "immersiveengineering:plate_steel"
        }
    })
})