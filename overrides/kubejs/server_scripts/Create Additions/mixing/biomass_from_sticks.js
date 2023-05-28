ServerEvents.recipes(event => {
    event.custom({
        "type": "create:mixing",
        "ingredients": [
            {
                "item": "minecraft:stick"
            },
            {
                "item": "minecraft:stick"
            },
            {
                "item": "minecraft:stick"
            },
            {
                "item": "minecraft:stick"
            },
            {
                "item": "minecraft:stick"
            },
            {
                "item": "minecraft:stick"
            },
            {
                "fluid": "createaddition:seed_oil",
                "amount": 200
            }
        ],
        "results": [
            {
                "item": "createaddition:biomass",
                "count": 1
            }
        ],
        "heatRequirement": "heated"
    })
})