ServerEvents.recipes(event => {
    event.custom({
        "type": "minecraft:crafting_shaped",
        "key": {
            "s": {
                "item": "createdeco:cast_iron_sheet_slab"
            }
        },
        "pattern": [
            "s",
            "s",
            "s"
        ],
        "result": {
            "count": 3,
            "item": "createdeco:cast_iron_sheet_slab_vert"
        }
    })
})