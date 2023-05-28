ServerEvents.recipes(event => {
    event.custom({
        "type": "create:pressing",
        "ingredients": [
            {
                "item": "createdeco:cast_iron_ingot"
            }
        ],
        "results": [
            {
                "item": "createdeco:cast_iron_sheet"
            }
        ]
    })
})