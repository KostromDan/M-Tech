ServerEvents.recipes(event => {
    event.custom({
        "type": "create:mechanical_crafting",
        "acceptMirrored": true,
        "key": {
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
            " I ",
            "ITI",
            "ITI",
            " S "
        ],
        "result": {
            "item": "createbigcannons:he_shell"
        }
    })
})