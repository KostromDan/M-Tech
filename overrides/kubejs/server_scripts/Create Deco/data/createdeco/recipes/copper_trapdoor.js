ServerEvents.recipes(event => {
    event.custom({
        "type": "minecraft:crafting_shaped",
        "key": {
            "m": {
                "item": "minecraft:copper_ingot"
            }
        },
        "pattern": [
            "mm",
            "mm"
        ],
        "result": {
            "item": "createdeco:copper_trapdoor"
        }
    })
})