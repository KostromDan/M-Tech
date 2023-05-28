ServerEvents.recipes(event => {
    event.custom({
        "type": "minecraft:crafting_shapeless",
        "ingredients": [
            {
                "item": "minecraft:sand"
            },
            {
                "item": "minecraft:sand"
            },
            {
                "item": "minecraft:dirt"
            },
            {
                "item": "minecraft:clay_ball"
            }
        ],
        "result": {
            "item": "createbigcannons:casting_sand"
        }
    })
})