ServerEvents.recipes(event => {
    event.custom({
        "type": "minecraft:crafting_shapeless",
        "ingredients": [
            {
                "item": "minecraft:paper"
            },
            {
                "item": 'mekanism:dust_diamond'
            }
        ],
        "result": {
            "item": "createaddition:diamond_grit_sandpaper",
            "count": 1
        }
    })
})