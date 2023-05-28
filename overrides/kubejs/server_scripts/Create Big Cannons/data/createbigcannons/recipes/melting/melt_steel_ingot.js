ServerEvents.recipes(event => {
    event.custom({
        "type": "createbigcannons:melting",
        "heatRequirement": "heated",
        "ingredients": [
            {
                "tag": "forge:ingots/steel"
            }
        ],
        "processingTime": 180,
        "results": [
            {
                "amount": 90,
                "fluid": "createbigcannons:molten_steel"
            }
        ]
    })
})