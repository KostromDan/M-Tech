ServerEvents.recipes(event => {
    event.remove({output: "chunkloaders:basic_chunk_loader"})
    event.custom({
        "type": "minecraft:crafting_shaped",
        "pattern": [
            "ACA",
            "BDB",
            "KFK"
        ],
        "key": {
            "A": {
                "tag": "forge:ingots/iron"
            },
            "B": {
                "tag": "forge:obsidian"
            },
            "D": {
                "item": 'create:mechanical_arm'
            },
            "F": {
                "item": 'create:flywheel'
            },
            "K": {
                "item": 'create:blaze_burner'
            },
            "C": {
                "tag": "forge:ender_pearls"
            }
        },
        "result": {
            "item": "chunkloaders:basic_chunk_loader"
        }
    })
    event.custom({
        "type": "minecraft:crafting_shaped",
        "pattern": [
            "AAA",
            "AAA",
            "AAA"
        ],
        "key": {
            "A": {
                "item": "chunkloaders:single_chunk_loader"
            }
        },
        "result": {
            "item": "chunkloaders:basic_chunk_loader"
        }
    })
})