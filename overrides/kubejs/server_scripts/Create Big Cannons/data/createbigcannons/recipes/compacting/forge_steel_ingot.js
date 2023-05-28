ServerEvents.recipes(event => {
    event.custom({
        "type": "create:compacting",
        "conditions": [
            {
                "type": "forge:mod_loaded",
                "modid": "alloyed"
            }
        ],
        "ingredients": [
            {
                "amount": 90,
                "fluidTag": "forge:molten_steel"
            }
        ],
        "results": [
            {
                "item": "alloyed:steel_ingot"
            }
        ]
    })
})