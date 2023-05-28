ServerEvents.recipes(event => {
    event.custom({
        "type": "minecraft:crafting_shaped",

        "pattern":
            ["C",
                "Z",
                "T"],
        "key":
            {
                "Z":
                    {
                        "item": 'createdeco:zinc_sheet'
                    },
                "C":
                    {
                        "item": 'create:copper_sheet'
                    },
                "T":
                    {
                        "item": "minecraft:redstone_torch"
                    }
            },
        "result": {
            "item": "createaddition:capacitor",
            "count": 1
        }
    })
})