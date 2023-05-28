ServerEvents.recipes(event => {
    event.custom({
        "type": "minecraft:crafting_shapeless",
        "group": "dye_placard",
        "ingredients": [
            {
                "tag": "createdeco:placards"
            },
            {
                "item": "minecraft:yellow_dye"
            }
        ],
        "result": {
            "item": "createdeco:yellow_placard"
        }
    })
})