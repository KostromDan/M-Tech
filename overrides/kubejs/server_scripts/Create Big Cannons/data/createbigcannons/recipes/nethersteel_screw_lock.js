ServerEvents.recipes(event => {
    event.custom({
        "type": "minecraft:crafting_shaped",
        "key": {
            "I": {
                "item": "createbigcannons:nethersteel_ingot"
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
            "item": "createbigcannons:nethersteel_screw_lock"
        }
    })
})