ServerEvents.recipes(event => {
    event.custom({
        "type": "minecraft:crafting_shaped",
        "key": {
            "C": {
                "item": 'create:iron_sheet'
            },
            "G": {
                "tag": "forge:gunpowder"
            },
            "S": {
                "item": "createbigcannons:shot_balls"
            }
        },
        "pattern": [
            "S",
            "G",
            "C"
        ],
        "result": {
            "count": 2,
            "item": "createbigcannons:flak_autocannon_round"
        }
    })
})