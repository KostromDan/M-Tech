ServerEvents.recipes(event => {
    event.custom({
        "type": "create:mixing",
        "ingredients": [
            {
                "tag": "forge:dusts/iron"
            },
            {
                "tag": "forge:glass"
            },
            {
                "tag": "forge:glass"
            }
        ],
        "results": [
            {
                "item": "immersiveengineering:insulating_glass",
                "count": 2
            }
        ],
        "heatRequirement": "superheated"
    })
})