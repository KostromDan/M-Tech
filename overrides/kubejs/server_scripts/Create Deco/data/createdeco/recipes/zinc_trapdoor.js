ServerEvents.recipes(event => {
    event.custom({
        "type": "minecraft:crafting_shaped",
        "key": {
            "m": {
                "item": "create:zinc_ingot"
            }
        },
        "pattern": [
            "mm",
            "mm"
        ],
        "result": {
            "item": "createdeco:zinc_trapdoor"
        }
    })
})