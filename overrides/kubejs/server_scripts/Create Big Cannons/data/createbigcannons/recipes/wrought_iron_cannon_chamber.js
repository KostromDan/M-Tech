ServerEvents.recipes(event => {
    event.custom({
        "type": "minecraft:crafting_shaped",
        "key": {
            "G": {
                "tag": "forge:gunpowder"
            },
            "I": {
                "item": 'create:iron_sheet'
            }
        },
        "pattern": [
            " I ",
            "IGI",
            " I "
        ],
        "result": {
            "item": "createbigcannons:wrought_iron_cannon_chamber"
        }
    })
})