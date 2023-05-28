ServerEvents.recipes(event => {
    event.custom({
        "type": "minecraft:crafting_shaped",

        "pattern":
            [" R ",
                "CEC",
                "SSS"],
        "key":
            {
                "R":
                    {
                        "tag": "forge:dusts/redstone"
                    },
                "S":
                    {
                        "tag": "forge:stone"
                    },
                "C":
                    {
                        "item": "createaddition:connector"
                    },
                "E":
                    {
                        "item": "create:electron_tube"
                    }
            },
        "result": {
            "item": "createaddition:redstone_relay",
            "count": 1
        }
    })
})