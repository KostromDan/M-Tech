ServerEvents.recipes(event => {
    event.custom({
        "type": "minecraft:crafting_shapeless",
        "ingredients": [
            {
                "item": "create:iron_sheet"
            },
            {
                "item": "minecraft:gray_dye"
            }
        ],
        "result": {
            "item": "createdeco:gray_decal"
        }
    })
})