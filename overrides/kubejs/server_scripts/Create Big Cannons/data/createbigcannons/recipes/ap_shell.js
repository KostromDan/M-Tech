ServerEvents.recipes(event => {
    event.custom({
        "type": "create:mechanical_crafting",
        "acceptMirrored": true,
        "key": {
            "C": {
                "item": 'createdeco:cast_iron_ingot'
            },
            "I": {
                "tag": "forge:ingots/iron"
            },
            "S": {
                "tag": "minecraft:wooden_slabs"
            },
            "T": {
                "item": "minecraft:tnt"
            }
        },
        "pattern": [
            " C ",
            "ICI",
            "ITI",
            " S "
        ],
        "result": {
            "item": "createbigcannons:ap_shell"
        }
    })
})