ServerEvents.recipes(event => {
    event.custom({
        "type": "create:splashing",
        "ingredients": [
            {
                "item": "createdeco:dusk_bricks_slab"
            }
        ],
        "results": [
            {
                "item": "createdeco:mossy_dusk_bricks_slab"
            }
        ]
    })
})