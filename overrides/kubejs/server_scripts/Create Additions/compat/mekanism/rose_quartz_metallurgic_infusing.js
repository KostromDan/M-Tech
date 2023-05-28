ServerEvents.recipes(event => {
    event.custom({
        "type": "mekanism:metallurgic_infusing",
        "itemInput": {
            "ingredient": {
                "tag": "forge:gems/quartz"
            }
        },
        "chemicalInput": {
            "amount": 80,
            "tag": "mekanism:redstone"
        },
        "output": {
            "item": "create:rose_quartz"
        },
        "conditions": [
            {
                "type": "forge:mod_loaded",
                "modid": "mekanism"
            }
        ]
    })
})