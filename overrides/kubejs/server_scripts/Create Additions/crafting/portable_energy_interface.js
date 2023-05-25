ServerEvents.recipes(event => {
    event.custom({
        "type": "minecraft:crafting_shapeless",
        "ingredients": [
            {
                "item": "create:brass_casing"
            },
            {
                "item": "create:chute"
            },
            {
                "item": "createaddition:copper_spool"
            }
        ],
        "result": {
            "item": "createaddition:portable_energy_interface"
        }
    })
})