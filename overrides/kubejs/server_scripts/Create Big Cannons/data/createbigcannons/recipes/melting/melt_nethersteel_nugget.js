ServerEvents.recipes(event => {
    event.custom({
        "type": "createbigcannons:melting",
        "heatRequirement": "heated",
        "ingredients": [
            {
                "item": "createbigcannons:nethersteel_nugget"
            }
        ],
        "processingTime": 20,
        "results": [
            {
                "amount": 10,
                "fluid": "createbigcannons:molten_nethersteel"
            }
        ]
    })
})