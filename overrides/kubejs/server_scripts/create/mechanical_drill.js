ServerEvents.recipes(event => {

    event.remove({
        output: "create:mechanical_drill"
    })
    event.custom({
        "type": "create:mechanical_crafting",
        "acceptMirrored": true,
        "key": {
            "A": {
                "item": "minecraft:diamond"
            },
            "D": {
                "item": 'create:mechanical_bearing'
            },
            "E": {
                "item": "create:railway_casing"
            },
            "B": {
                "item": "create:rotation_speed_controller"
            }

        },
        "pattern": [
            " A ",
            "EDE",
            "EBE"
        ],
        "result": {
            "item": "create:mechanical_drill"
        }
    })
    event.remove({
        output: 'naturescompass:naturescompass'
    })
    event.custom({
        "type": "create:mechanical_crafting",
        "acceptMirrored": true,
        "key": {
            "A": {
                "item": "minecraft:red_mushroom"
            },
            "B": {
                "item": "farmersdelight:rice"
            },
            "C": {
                "item": 'minecraft:bamboo'
            },
            "D": {
                "item": "minecraft:compass"
            },
            "E": {
                "item": "minecraft:dark_oak_sapling"
            },
            "F": {
                "item": "minecraft:birch_sapling"
            },
            "G": {
                "item": "minecraft:acacia_sapling"
            },
            "H": {
                "item": "farmersdelight:tomato"
            },
            "I": {
                "item": "minecraft:sugar_cane"
            },
            "J": {
                "item": "farmersdelight:onion"
            },
            "K": {
                "item": "minecraft:brown_mushroom"
            },
            "L": {
                "item": "minecraft:dandelion"
            },
            "M": {
                "item": "minecraft:poppy"
            },
            "N": {
                "item": "minecraft:azalea"
            },
            "O": {
                "item": "farmersdelight:cabbage"
            },
            "P": {
                "item": "minecraft:spruce_sapling"
            },
            "Q": {
                "item": "minecraft:jungle_sapling"
            },
            "R": {
                "item": "minecraft:warped_fungus"
            },
            "S": {
                "item": "minecraft:apple"
            },
            "T": {
                "item": "minecraft:wheat_seeds"
            },
            "U": {
                "item": "minecraft:mangrove_propagule"
            },
            "V": {
                "item": "minecraft:oak_sapling"
            },
            "W": {
                "item": "minecraft:nether_wart"
            },
            "X": {
                "item": "minecraft:crimson_fungus"
            },
            "Y": {
                "item": "minecraft:kelp"
            }

        },
        "pattern": [
            "ABCME",
            "FGHIJ",
            "KLDNO",
            "PQRST",
            "UVWXY",
        ],
        "result": {
            "item": 'naturescompass:naturescompass'
        }
    })


})