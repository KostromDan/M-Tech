ServerEvents.recipes(event => {
    event.custom({
        "type": "create:compacting",
        "heatRequirement": "heated",
        "ingredients": [
            {
                "item": "minecraft:iron_ingot"
            }
        ],
        "results": [
            {
                "item": "createdeco:cast_iron_ingot"
            }
        ]
    })
})