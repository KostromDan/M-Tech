ServerEvents.recipes(event => {
    event.custom({
        "type": "create:splashing",
        "ingredients": [
            {
                "item": "createdeco:worn_short_bricks"
            }
        ],
        "results": [
            {
                "item": "createdeco:mossy_worn_short_bricks"
            }
        ]
    })
})