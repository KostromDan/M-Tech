ServerEvents.recipes(event => {
    event.custom({
        "type": "minecraft:crafting_shapeless",
        "ingredients": [
            {
                "item": "create:iron_sheet"
            },
            {
                "item": "minecraft:pink_dye"
            }
        ],
        "result": {
            "item": "createdeco:pink_decal"
        }
    })
})