ServerEvents.recipes(event => {
    event.custom({
        "type": "create:splashing",
        "ingredients": [
            {
                "item": "createdeco:worn_brick_tiles"
            }
        ],
        "results": [
            {
                "item": "createdeco:mossy_worn_brick_tiles"
            }
        ]
    })
})