ServerEvents.recipes(event => {
    event.remove({output: "sophisticatedbackpacks:iron_backpack"})
    event.custom({
        "type": "sophisticatedbackpacks:backpack_upgrade",
        "conditions": [
            {
                "itemRegistryName": "sophisticatedbackpacks:iron_backpack",
                "type": "sophisticatedcore:item_enabled"
            }
        ],
        "pattern": [
            "ICI",
            "IBI",
            "ICI"
        ],
        "key": {
            "I": {
                "tag": "forge:ingots/iron"
            },
            "B": {
                "item": "sophisticatedbackpacks:backpack"
            },
            "C": {
                "item": 'minecraft:shulker_shell'
            }
        },
        "result": {
            "item": "sophisticatedbackpacks:iron_backpack"
        }
    })
})