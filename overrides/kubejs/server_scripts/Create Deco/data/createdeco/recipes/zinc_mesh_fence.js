ServerEvents.recipes(event => {
    event.custom({
        "type": "minecraft:crafting_shaped",
        "key": {
            "p": {
                "item": 'createdeco:zinc_sheet'
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
            "item": "createdeco:zinc_mesh_fence"
        }
    })
})