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
                "item": "minecraft:soul_torch"
            }
        },
        "pattern": [
            "n",
            "t",
            "p"
        ],
        "result": {
            "item": "createdeco:blue_iron_lamp"
        }
    })
})