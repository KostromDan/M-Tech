ServerEvents.recipes(event => {
    event.custom({
        "type": "create:mechanical_crafting",
        "acceptMirrored": true,
        "key": {
            "I": {
                "tag": "forge:ingots/iron"
            },
            "L": {
                "item": "createbigcannons:shot_balls"
            },
            "P": {
                "tag": "forge:gunpowder"
            },
            "S": {
                "tag": "minecraft:wooden_slabs"
            }
        },
        "pattern": [
            " I ",
            "ILI",
            "IPI",
            " S "
        ],
        "result": {
            "item": "createbigcannons:shrapnel_shell"
        }
    })
})