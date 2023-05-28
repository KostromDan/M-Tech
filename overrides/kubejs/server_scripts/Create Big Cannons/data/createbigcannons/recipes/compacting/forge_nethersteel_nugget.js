ServerEvents.recipes(event => {
    event.custom({
        "type": "create:compacting",
        "ingredients": [
            {
                "amount": 10,
                "fluid": "createbigcannons:molten_nethersteel",
                "nbt": {}
            }
        ],
        "results": [
            {
                "item": "createbigcannons:nethersteel_nugget"
            }
        ]
    })
})