ServerEvents.recipes(event => {
    event.custom({
        "type": "create:mixing",
        "ingredients": [
            {
                "tag": "createaddition:plant_foods"
            },
            {
                "tag": "createaddition:plant_foods"
            },
            {
                "fluid": "createaddition:seed_oil",
                "amount": 100
            }
        ],
        "results": [
            {
                "item": "createaddition:biomass",
                "count": 3
            }
        ],
        "heatRequirement": "heated"
    })
})