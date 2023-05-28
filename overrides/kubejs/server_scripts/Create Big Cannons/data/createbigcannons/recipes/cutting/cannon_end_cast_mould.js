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
                "item": "createbigcannons:cannon_end_cast_mould"
            }
        ]
    })
})