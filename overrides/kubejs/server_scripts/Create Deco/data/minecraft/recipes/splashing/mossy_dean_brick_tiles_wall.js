ServerEvents.recipes(event => {
    event.custom({
        "type": "create:splashing",
        "ingredients": [
            {
                "item": "createdeco:dean_brick_tiles_wall"
            }
        ],
        "results": [
            {
                "item": "createdeco:mossy_dean_brick_tiles_wall"
            }
        ]
    })
})