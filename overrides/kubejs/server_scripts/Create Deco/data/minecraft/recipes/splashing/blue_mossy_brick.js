ServerEvents.recipes(event => {
    event.custom({
        "type": "create:splashing",
        "ingredients": [
            {
                "item": "createdeco:blue_bricks"
            }
        ],
        "results": [
            {
                "item": "createdeco:mossy_blue_bricks"
            }
        ]
    })
})