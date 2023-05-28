ServerEvents.recipes(event => {
    event.custom({
        "type": "minecraft:crafting_shaped",
        "key": {
            "p": {
                "item": "create:andesite_alloy"
            },
            "s": {
                "item": "minecraft:string"
            }
        },
        "pattern": [
            "psp",
            "psp"
        ],
        "result": {
            "count": 3,
            "item": "createdeco:andesite_mesh_fence"
        }
    })
})