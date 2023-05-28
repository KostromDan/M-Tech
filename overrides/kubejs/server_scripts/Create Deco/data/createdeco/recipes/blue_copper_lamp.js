ServerEvents.recipes(event => {
    event.custom({
        "type": "minecraft:crafting_shaped",
        "key": {
            "n": {
                "tag": "forge:nuggets/copper"
            },
            "p": {
                "item": 'create:copper_sheet'
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
            "item": "createdeco:blue_copper_lamp"
        }
    })
})