ServerEvents.recipes(event => {
    event.custom({
        "type": "create:splashing",
        "ingredients": [
            {
                "item": "createdeco:dusk_bricks"
            }
        ],
        "results": [
            {
                "item": "createdeco:mossy_dusk_bricks"
            }
        ]
    })
})