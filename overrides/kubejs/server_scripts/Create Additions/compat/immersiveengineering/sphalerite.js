ServerEvents.recipes(event => {
    event.custom({
        "type": "immersiveengineering:mineral_mix",
        "ores": [
            {
                "chance": 0.6,
                "output": {
                    "tag": "forge:ores/zinc"
                }
            },
            {
                "chance": 0.2,
                "output": {
                    "tag": "forge:ores/iron"
                }
            },
            {
                "chance": 0.15,
                "output": {
                    "item": "create:asurine"
                }
            },
            {
                "chance": 0.05,
                "output": {
                    "item": "create:crimsite"
                }
            }
        ],
        "spoils": [
            {
                "chance": 0.2,
                "output": {
                    "item": "minecraft:gravel"
                }
            },
            {
                "chance": 0.5,
                "output": {
                    "item": "minecraft:cobblestone"
                }
            },
            {
                "chance": 0.3,
                "output": {
                    "item": "minecraft:cobbled_deepslate"
                }
            }
        ],
        "dimensions": [
            "minecraft:overworld"
        ],
        "weight": 15,
        "fail_chance": 0.05,
        "conditions": [
            {
                "type": "forge:mod_loaded",
                "modid": "immersiveengineering"
            }
        ]
    }).id("createaddition:sphalerite")
})