ServerEvents.recipes(event => {
    event.custom({
        "type": "create:splashing",
        "ingredients": [
            {
                "item": "createdeco:dusk_brick_tiles"
            }
        ],
        "results": [
            {
                "item": "createdeco:mossy_dusk_brick_tiles"
            }
        ]
    })
})