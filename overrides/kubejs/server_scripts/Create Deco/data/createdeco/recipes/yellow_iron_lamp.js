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
                "item": "minecraft:torch"
            }
        },
        "pattern": [
            "n",
            "t",
            "p"
        ],
        "result": {
            "item": "createdeco:yellow_iron_lamp"
        }
    })
})