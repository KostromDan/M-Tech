ServerEvents.recipes(event => {
    event.custom({
        "type": "create:pressing",
        "ingredients": [
            {
                "tag": "forge:nuggets/iron"
            }
        ],
        "results": [
            {
                "item": "createdeco:iron_coin"
            }
        ]
    })
})