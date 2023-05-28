ServerEvents.recipes(event => {
    event.custom({
        "type": "create:pressing",
        "ingredients": [
            {
                "tag": "forge:nuggets/zinc"
            }
        ],
        "results": [
            {
                "item": "createdeco:zinc_coin"
            }
        ]
    })
})