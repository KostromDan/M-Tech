ServerEvents.recipes(event => {
    event.custom({
        "type": "createbigcannons:melting",
        "heatRequirement": "heated",
        "ingredients": [
            {
                "tag": "forge:nuggets/bronze"
            }
        ],
        "processingTime": 20,
        "results": [
            {
                "amount": 10,
                "fluid": "createbigcannons:molten_bronze"
            }
        ]
    })
})