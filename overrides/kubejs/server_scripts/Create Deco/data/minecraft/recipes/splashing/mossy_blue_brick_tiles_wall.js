ServerEvents.recipes(event => {
    event.custom({
        "type": "create:splashing",
        "ingredients": [
            {
                "item": "createdeco:blue_brick_tiles_wall"
            }
        ],
        "results": [
            {
                "item": "createdeco:mossy_blue_brick_tiles_wall"
            }
        ]
    })
})