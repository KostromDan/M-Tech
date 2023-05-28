ServerEvents.recipes(event => {
    event.custom({
        "type": "minecraft:crafting_shaped",

        "pattern":
            [" W ",
                "WSW",
                " W "],
        "key":
            {
                "W":
                    {
                        "item": 'createaddition:gold_wire'
                    },
                "S":
                    {
                        "item": "createaddition:spool"
                    }
            },
        "result": {
            "item": "createaddition:gold_spool",
            "count": 1
        }
    })
})