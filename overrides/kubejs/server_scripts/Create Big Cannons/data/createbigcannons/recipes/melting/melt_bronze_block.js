ServerEvents.recipes(event => {
    event.custom({
        "type": "createbigcannons:melting",
        "heatRequirement": "heated",
        "ingredients": [
            {
                "tag": "forge:storage_blocks/bronze"
            }
        ],
        "processingTime": 1620,
        "results": [
            {
                "amount": 810,
                "fluid": "createbigcannons:molten_bronze"
            }
        ]
    })
})