ServerEvents.recipes(event => {
    event.custom({
        "type": "create:splashing",
        "ingredients": [
            {
                "item": "createdeco:blue_bricks_wall"
            }
        ],
        "results": [
            {
                "item": "createdeco:mossy_blue_bricks_wall"
            }
        ]
    })
})