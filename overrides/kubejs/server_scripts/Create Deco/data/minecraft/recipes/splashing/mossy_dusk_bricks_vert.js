ServerEvents.recipes(event => {
    event.custom({
        "type": "create:splashing",
        "ingredients": [
            {
                "item": "createdeco:dusk_bricks_slab_vert"
            }
        ],
        "results": [
            {
                "item": "createdeco:mossy_dusk_bricks_slab_vert"
            }
        ]
    })
})