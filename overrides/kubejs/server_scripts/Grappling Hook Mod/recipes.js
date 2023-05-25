ServerEvents.recipes(event => {
    event.remove({
        output: 'grapplemod:swingupgradeitem'
    })
    event.remove({
        output: 'grapplemod:block_grapple_modifier'
    })
    event.custom({
        "type": "create:mechanical_crafting",
        "acceptMirrored": true,
        "key": {
            "A": {
                "item": 'create:flywheel'
            },
            "B": {
                "item": 'grapplemod:baseupgradeitem'
            },
            "C": {
                "item": 'minecraft:anvil'
            },
            "F": {
                "item": 'create:rotation_speed_controller'
            },
            "G": {
                "item": 'minecraft:obsidian'
            },
            "H": {
                "item": 'create:blaze_burner'
            },
            "I": {
                "item": 'minecraft:gold_block'
            },
            "M": {
                "item": 'create:blaze_cake'
            }

        },
        "pattern": [
            " A ",
            "BCB",
            "BFB",
            "GHG",
            "IMI"
        ],
        "result": {
            "item": 'grapplemod:block_grapple_modifier'
        }
    })


})