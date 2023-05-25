ServerEvents.recipes(event => {
    event.remove({output: "sophisticatedbackpacks:backpack"})
    event.custom({
        "type": "sophisticatedbackpacks:basic_backpack",
        "conditions": [
            {
                "itemRegistryName": "sophisticatedbackpacks:backpack",
                "type": "sophisticatedcore:item_enabled"
            }
        ],
        "pattern": [
            "SLS",
            "SCS",
            "LLL"
        ],
        "key": {
            "L": {
                "tag": "forge:leather"
            },
            "C": {
                "item": 'minecraft:shulker_box'
            },
            "S": {
                "tag": "forge:string"
            }
        },
        "result": {
            "item": "sophisticatedbackpacks:backpack"
        }
    })
})