ServerEvents.recipes(event => {
    event.custom({
        "type": "create:splashing",
        "ingredients": [
            {
                "item": "minecraft:bricks"
            }
        ],
        "results": [
            {
                "item": "createdeco:mossy_red_bricks"
            }
        ]
    })
})