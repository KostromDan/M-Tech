ServerEvents.recipes(event => {
    event.custom({
        "type": "create:mixing",
        "ingredients": [
            {
                "tag": "forge:ingots/tin"
            },
            {
                "tag": "forge:ingots/copper"
            },
            {
                "tag": "forge:ingots/copper"
            },
            {
                "tag": "forge:ingots/copper"
            }
        ],
        "results": [
            {
                "item": 'mekanism:ingot_bronze',
                "count": 4
            }
        ],
        "heatRequirement": "heated"
    })
})