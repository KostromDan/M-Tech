ServerEvents.recipes(event => {
    event.custom({
        "type": "minecraft:crafting_shaped",

        "pattern":
            [" W ",
                "W W",
                " W "],
        "key":
            {
                "W":
                    {
                        "item": 'createaddition:iron_wire'
                    }
            },
        "result": {
            "item": "createaddition:barbed_wire",
            "count": 2
        }
    })
})