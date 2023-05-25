ServerEvents.recipes(event => {
    event.custom({
        "type": "minecraft:crafting_shapeless",
        "ingredients": [
            {
                "tag": "forge:ingots/iron"
            }, {
                "tag": "forge:ingots/iron"
            },
            {
                "item": "immersiveengineering:hammer"
            }
        ],
        "result": {
            "item": "immersiveengineering:plate_iron"
        }
    })
})