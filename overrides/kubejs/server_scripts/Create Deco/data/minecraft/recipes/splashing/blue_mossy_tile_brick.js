ServerEvents.recipes(event => {
    event.custom({
        "type": "create:splashing",
        "ingredients": [
            {
                "item": "createdeco:blue_brick_tiles"
            }
        ],
        "results": [
            {
                "item": "createdeco:mossy_blue_brick_tiles"
            }
        ]
    })
})