ServerEvents.recipes(event => {
    event.custom({
        "type": "create:mixing",
        "ingredients": [
            {
                "tag": "createaddition:plants"
            },
            {
                "tag": "createaddition:plants"
            },
            {
                "tag": "createaddition:plants"
            },
            {
                "fluid": "createaddition:seed_oil",
                "amount": 100
            }
        ],
        "results": [
            {
                "item": "createaddition:biomass",
                "count": 2
            }
        ],
        "heatRequirement": "heated"
    })
})