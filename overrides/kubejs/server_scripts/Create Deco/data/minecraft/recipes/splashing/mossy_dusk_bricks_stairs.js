ServerEvents.recipes(event => {
    event.custom({
        "type": "create:splashing",
        "ingredients": [
            {
                "item": "createdeco:dusk_bricks_stairs"
            }
        ],
        "results": [
            {
                "item": "createdeco:mossy_dusk_bricks_stairs"
            }
        ]
    })
})