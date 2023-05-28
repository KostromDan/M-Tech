ServerEvents.recipes(event => {
    event.custom({
        "type": "minecraft:crafting_shapeless",
        "group": "dye_placard",
        "ingredients": [
            {
                "tag": "createdeco:placards"
            },
            {
                "item": "minecraft:gray_dye"
            }
        ],
        "result": {
            "item": "createdeco:gray_placard"
        }
    })
})