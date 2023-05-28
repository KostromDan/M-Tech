ServerEvents.recipes(event => {
    event.custom({
        "type": "minecraft:crafting_shaped",
        "key": {
            "I": {
                "tag": "forge:ingots/steel"
            },
            "S": {
                "item": "create:shaft"
            }
        },
        "pattern": [
            " S ",
            "III"
        ],
        "result": {
            "item": "createbigcannons:steel_screw_lock"
        }
    })
})