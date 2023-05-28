ServerEvents.recipes(event => {
    event.custom({
        "type": "createbigcannons:melting",
        "heatRequirement": "heated",
        "ingredients": [
            {
                "item": "createbigcannons:nethersteel_ingot"
            }
        ],
        "processingTime": 180,
        "results": [
            {
                "amount": 90,
                "fluid": "createbigcannons:molten_nethersteel"
            }
        ]
    })
})