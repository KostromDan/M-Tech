ServerEvents.recipes(event => {
    event.custom({
        "type": "minecraft:crafting_shaped",
        "key": {
            "P": {
                "tag": "minecraft:planks"
            },
            "S": {
                "item": "create:shaft"
            },
            "W": {
                "item": "createbigcannons:pair_of_cannon_wheels"
            }
        },
        "pattern": [
            " SP",
            "PPP",
            "W W"
        ],
        "result": {
            "item": "createbigcannons:cannon_carriage"
        }
    })
})