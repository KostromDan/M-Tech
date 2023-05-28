ServerEvents.recipes(event => {
    event.custom({
        "type": "create:compacting",
        "heatRequirement": "heated",
        "ingredients": [
            {
                "item": "minecraft:iron_block"
            }
        ],
        "results": [
            {
                "item": "createbigcannons:cast_iron_block"
            }
        ]
    })
})