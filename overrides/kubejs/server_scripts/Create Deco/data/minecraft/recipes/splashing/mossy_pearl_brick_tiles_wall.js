ServerEvents.recipes(event => {
    event.custom({
        "type": "create:splashing",
        "ingredients": [
            {
                "item": "createdeco:pearl_brick_tiles_wall"
            }
        ],
        "results": [
            {
                "item": "createdeco:mossy_pearl_brick_tiles_wall"
            }
        ]
    })
})