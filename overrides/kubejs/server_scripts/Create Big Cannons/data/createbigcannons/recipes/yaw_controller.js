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
            "S": {
                "item": "create:shaft"
            }
        },
        "pattern": [
            " S ",
            "GCG",
            " S "
        ],
        "result": {
            "item": "createbigcannons:yaw_controller"
        }
    })
})