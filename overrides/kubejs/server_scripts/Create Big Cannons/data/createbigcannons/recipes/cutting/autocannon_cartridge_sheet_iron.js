ServerEvents.recipes(event => {
    event.custom({
        "type": "create:cutting",
        "ingredients": [
            {
                "item": 'create:iron_sheet'
            }
        ],
        "results": [
            {
                "item": "createbigcannons:autocannon_cartridge_sheet"
            }
        ]
    })
})