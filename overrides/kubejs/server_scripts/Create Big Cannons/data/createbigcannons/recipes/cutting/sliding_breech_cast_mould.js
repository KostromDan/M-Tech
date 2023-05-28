ServerEvents.recipes(event => {
    event.custom({
        "type": "create:cutting",
        "ingredients": [
            {
                "tag": "minecraft:logs"
            }
        ],
        "results": [
            {
                "item": "createbigcannons:sliding_breech_cast_mould"
            }
        ]
    })
})