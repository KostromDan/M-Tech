ServerEvents.recipes(event => {
    event.custom({
        "type": "minecraft:crafting_shaped",
        "key": {
            "n": {
                "tag": "forge:nuggets/zinc"
            },
            "p": {
                "item": 'createdeco:zinc_sheet'
            },
            "t": {
                "item": "minecraft:glow_berries"
            }
        },
        "pattern": [
            "n",
            "t",
            "p"
        ],
        "result": {
            "item": "createdeco:green_zinc_lamp"
        }
    })
})