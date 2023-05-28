ServerEvents.recipes(event => {
    event.custom({
        "type": "create:crushing",
        "ingredients": [
            {
                "tag": "forge:gems/diamond"
            }
        ],
        "results": [
            {
                "item": 'mekanism:dust_diamond'
            }
        ],
        "processingTime": 300,
        "conditions": [
            {
                "value": {
                    "tag": "forge:gems/diamond",
                    "type": "forge:tag_empty"
                },
                "type": "forge:not"
            }
        ]
    })
})