ServerEvents.recipes(event => {
    event.custom({
        "type": "create:mixing",
        "ingredients": [
            {
                "tag": "minecraft:saplings"
            },
            {
                "tag": "minecraft:saplings"
            },
            {
                "tag": "minecraft:saplings"
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