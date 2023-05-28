ServerEvents.recipes(event => {
    event.custom({
        "type": "create:mechanical_crafting",
        "acceptMirrored": true,
        "key": {
            "I": {
                "tag": "forge:ingots/iron"
            },
            "P": {
                "item": "create:fluid_pipe"
            },
            "S": {
                "tag": "minecraft:wooden_slabs"
            }
        },
        "pattern": [
            " I ",
            "IPI",
            "IPI",
            " S "
        ],
        "result": {
            "item": "createbigcannons:fluid_shell"
        }
    })
})