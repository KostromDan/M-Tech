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
                "item": "minecraft:redstone_torch"
            }
        },
        "pattern": [
            "n",
            "t",
            "p"
        ],
        "result": {
            "item": "createdeco:red_netherite_lamp"
        }
    })
})