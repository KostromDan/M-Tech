ServerEvents.recipes(event => {
    event.custom({
        "type": "create:pressing",
        "ingredients": [
            {
                "tag": "forge:nuggets/brass"
            }
        ],
        "results": [
            {
                "item": "createdeco:brass_coin"
            }
        ]
    })
})