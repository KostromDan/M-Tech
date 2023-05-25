ServerEvents.recipes(event => {
    event.custom({
        "type": "minecraft:crafting_shapeless",
        "ingredients": [
            {
                "tag": "computercraft:wired_modem"
            },
            {
                "item": 'create:brass_sheet'
            },
            {
                "item": "minecraft:redstone_torch"
            },
            {
                "item": 'advancedperipherals:peripheral_casing'
            }
        ],
        "result": {
            "item": "createaddition:digital_adapter",
            "count": 1
        },
        "conditions": [
            {
                "type": "forge:mod_loaded",
                "modid": "computercraft"
            }
        ]
    })
})