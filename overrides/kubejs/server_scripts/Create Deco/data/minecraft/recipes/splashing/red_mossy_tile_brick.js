ServerEvents.recipes(event => {
    event.custom({
        "type": "create:splashing",
        "ingredients": [
            {
                "item": "createdeco:red_brick_tiles"
            }
        ],
        "results": [
            {
                "item": "createdeco:mossy_red_brick_tiles"
            }
        ]
    })
})