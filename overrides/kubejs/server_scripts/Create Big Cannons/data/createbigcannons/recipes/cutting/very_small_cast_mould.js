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
                "item": "createbigcannons:very_small_cast_mould"
            }
        ]
    })
})