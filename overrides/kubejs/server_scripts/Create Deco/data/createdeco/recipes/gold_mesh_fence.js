ServerEvents.recipes(event => {
    event.custom({
        "type": "minecraft:crafting_shaped",
        "key": {
            "p": {
                "item": 'create:golden_sheet'
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
            "item": "createdeco:gold_mesh_fence"
        }
    })
})