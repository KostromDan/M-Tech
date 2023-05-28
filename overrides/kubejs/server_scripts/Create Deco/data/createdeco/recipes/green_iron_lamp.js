ServerEvents.recipes(event => {
    event.custom({
        "type": "minecraft:crafting_shaped",
        "key": {
            "n": {
                "tag": "forge:nuggets/iron"
            },
            "p": {
                "item": 'create:iron_sheet'
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
            "item": "createdeco:green_iron_lamp"
        }
    })
})