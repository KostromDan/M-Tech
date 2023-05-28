ServerEvents.recipes(event => {
    event.custom({
        "type": "create:mixing",
        "ingredients": [
            {
                "tag": "minecraft:leaves"
            },
            {
                "tag": "minecraft:leaves"
            },
            {
                "tag": "minecraft:leaves"
            },
            {
                "fluid": "createaddition:seed_oil",
                "amount": 150
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