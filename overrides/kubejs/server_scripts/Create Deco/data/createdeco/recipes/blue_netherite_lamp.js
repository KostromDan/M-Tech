ServerEvents.recipes(event => {
    event.custom({
        "type": "minecraft:crafting_shaped",
        "key": {
            "n": {
                "item": 'createdeco:netherite_nugget'
            },
            "p": {
                "item": 'createdeco:netherite_sheet'
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
            "item": "createdeco:blue_netherite_lamp"
        }
    })
})