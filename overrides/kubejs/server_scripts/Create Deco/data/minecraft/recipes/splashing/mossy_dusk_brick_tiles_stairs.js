ServerEvents.recipes(event => {
    event.custom({
        "type": "create:splashing",
        "ingredients": [
            {
                "item": "createdeco:dusk_brick_tiles_stairs"
            }
        ],
        "results": [
            {
                "item": "createdeco:mossy_dusk_brick_tiles_stairs"
            }
        ]
    })
})