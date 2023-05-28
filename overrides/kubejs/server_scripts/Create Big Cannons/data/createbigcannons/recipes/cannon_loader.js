ServerEvents.recipes(event => {
    event.custom({
        "type": "minecraft:crafting_shaped",
        "key": {
            "C": {
                "item": "create:andesite_casing"
            },
            "G": {
                "tag": "forge:gunpowder"
            },
            "P": {
                "item": "create:piston_extension_pole"
            }
        },
        "pattern": [
            "G",
            "C",
            "P"
        ],
        "result": {
            "item": "createbigcannons:cannon_loader"
        }
    })
})