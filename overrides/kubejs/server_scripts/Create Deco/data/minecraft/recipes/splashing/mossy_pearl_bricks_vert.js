ServerEvents.recipes(event => {
    event.custom({
        "type": "create:splashing",
        "ingredients": [
            {
                "item": "createdeco:pearl_bricks_slab_vert"
            }
        ],
        "results": [
            {
                "item": "createdeco:mossy_pearl_bricks_slab_vert"
            }
        ]
    })
})