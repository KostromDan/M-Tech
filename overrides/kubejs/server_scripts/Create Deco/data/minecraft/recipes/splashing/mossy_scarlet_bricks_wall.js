ServerEvents.recipes(event => {
    event.custom({
        "type": "create:splashing",
        "ingredients": [
            {
                "item": "createdeco:scarlet_bricks_wall"
            }
        ],
        "results": [
            {
                "item": "createdeco:mossy_scarlet_bricks_wall"
            }
        ]
    })
})