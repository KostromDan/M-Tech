ServerEvents.recipes(event => {
    event.custom({
        "type": "minecraft:crafting_shaped",
        "key": {
            "m": {
                "item": "createdeco:cast_iron_ingot"
            }
        },
        "pattern": [
            "mm",
            "mm"
        ],
        "result": {
            "item": "createdeco:cast_iron_trapdoor"
        }
    })
})