ServerEvents.recipes(event => {
    event.custom({
        "type": "minecraft:crafting_shaped",
        "key": {
            "n": {
                "item": 'createdeco:cast_iron_nugget'
            },
            "p": {
                "item": 'createdeco:cast_iron_sheet'
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
            "item": "createdeco:blue_cast_iron_lamp"
        }
    })
})