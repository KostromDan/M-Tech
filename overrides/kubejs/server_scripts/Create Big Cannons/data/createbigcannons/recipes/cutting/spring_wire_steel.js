ServerEvents.recipes(event => {
    event.custom({
        "type": "create:cutting",
        "ingredients": [
            {
                "tag": "forge:plates/steel"
            }
        ],
        "results": [
            {
                "count": 3,
                "item": "createbigcannons:spring_wire"
            }
        ]
    })
})