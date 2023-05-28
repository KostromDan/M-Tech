ServerEvents.recipes(event => {
    event.custom({
        "type": "create:pressing",
        "ingredients": [
            {
                "tag": "forge:nuggets/copper"
            }
        ],
        "results": [
            {
                "item": "createdeco:copper_coin"
            }
        ]
    })
})