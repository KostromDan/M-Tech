ServerEvents.recipes(event => {
    event.custom({
        "type": "minecraft:crafting_shaped",
        "key": {
            "n": {
                "tag": "forge:nuggets/brass"
            },
            "p": {
                "item": 'create:brass_sheet'
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
            "item": "createdeco:green_brass_lamp"
        }
    })
})