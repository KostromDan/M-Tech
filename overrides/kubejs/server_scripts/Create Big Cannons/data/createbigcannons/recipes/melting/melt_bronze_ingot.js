ServerEvents.recipes(event => {
    event.custom({
        "type": "createbigcannons:melting",
        "heatRequirement": "heated",
        "ingredients": [
            {
                "tag": "forge:ingots/bronze"
            }
        ],
        "processingTime": 180,
        "results": [
            {
                "amount": 90,
                "fluid": "createbigcannons:molten_bronze"
            }
        ]
    })
})