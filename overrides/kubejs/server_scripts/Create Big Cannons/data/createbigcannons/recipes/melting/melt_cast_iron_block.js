ServerEvents.recipes(event => {
    event.custom({
        "type": "createbigcannons:melting",
        "heatRequirement": "heated",
        "ingredients": [
            {
                "tag": "forge:storage_blocks/cast_iron"
            }
        ],
        "processingTime": 1620,
        "results": [
            {
                "amount": 810,
                "fluid": "createbigcannons:molten_cast_iron"
            }
        ]
    })
})