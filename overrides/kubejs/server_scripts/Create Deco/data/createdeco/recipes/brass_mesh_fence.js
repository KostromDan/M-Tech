ServerEvents.recipes(event => {
    event.custom({
        "type": "minecraft:crafting_shaped",
        "key": {
            "p": {
                "item": 'create:brass_sheet'
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
            "item": "createdeco:brass_mesh_fence"
        }
    })
})