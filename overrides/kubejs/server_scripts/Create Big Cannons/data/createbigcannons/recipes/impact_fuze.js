ServerEvents.recipes(event => {
    event.custom({
        "type": "minecraft:crafting_shaped",
        "key": {
            "R": {
                "tag": "forge:dusts/redstone"
            },
            "T": {
                "tag": "createbigcannons:impact_fuze_head"
            }
        },
        "pattern": [
            "T",
            "R"
        ],
        "result": {
            "count": 4,
            "item": "createbigcannons:impact_fuze"
        }
    })
})