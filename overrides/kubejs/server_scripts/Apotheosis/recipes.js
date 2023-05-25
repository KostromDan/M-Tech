ServerEvents.recipes(event => {
    event.remove({output: "apotheosis:reforging_table"})
    event.custom({
        "type": "minecraft:crafting_shaped",
        "conditions": [{
            "type": "apotheosis:module",
            "module": "adventure"
        }],
        "group": "something",
        "pattern": [
            "ANA",
            "GEG",
            "BBB"
        ],
        "key": {
            "N": {
                "item": 'minecraft:netherite_block'
            },
            "G": {
                "item": "apotheosis:gem_dust"
            },
            "A": {
                "item": 'minecraft:nether_star'
            },
            "E": {
                "item": "minecraft:enchanting_table"
            },
            "B": {
                "item": "minecraft:nether_bricks"
            }
        },
        "result": {
            "item": "apotheosis:reforging_table",
            "count": 1
        }
    })


})