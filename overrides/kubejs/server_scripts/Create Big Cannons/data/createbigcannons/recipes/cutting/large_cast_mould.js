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
                "item": "createbigcannons:large_cast_mould"
            }
        ]
    })
})