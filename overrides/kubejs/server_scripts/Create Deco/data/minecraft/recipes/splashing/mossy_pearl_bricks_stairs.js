ServerEvents.recipes(event => {
    event.custom({
        "type": "create:splashing",
        "ingredients": [
            {
                "item": "createdeco:pearl_bricks_stairs"
            }
        ],
        "results": [
            {
                "item": "createdeco:mossy_pearl_bricks_stairs"
            }
        ]
    })
})