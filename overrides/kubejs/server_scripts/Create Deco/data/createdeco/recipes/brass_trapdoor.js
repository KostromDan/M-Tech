ServerEvents.recipes(event => {
    event.custom({
        "type": "minecraft:crafting_shaped",
        "key": {
            "m": {
                "item": "create:brass_ingot"
            }
        },
        "pattern": [
            "mm",
            "mm"
        ],
        "result": {
            "item": "createdeco:brass_trapdoor"
        }
    })
})