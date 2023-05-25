ServerEvents.recipes(event => {
    event.custom({
        "type": "create:mixing",
        "ingredients": [
            {
                "tag": "forge:ingots/nickel"
            },
            {
                "tag": "forge:ingots/copper"
            }
        ],
        "results": [
            {
                "item": "immersiveengineering:ingot_constantan",
                "count": 2
            }
        ],
        "heatRequirement": "heated"
    })
})