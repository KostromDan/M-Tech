ServerEvents.recipes(event => {
    event.custom({
        "type": "create:splashing",
        "ingredients": [
            {
                "item": "createdeco:pearl_brick_tiles"
            }
        ],
        "results": [
            {
                "item": "createdeco:mossy_pearl_brick_tiles"
            }
        ]
    })
})