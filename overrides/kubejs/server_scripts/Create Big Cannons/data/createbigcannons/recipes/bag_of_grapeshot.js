ServerEvents.recipes(event => {
    event.custom({
        "type": "minecraft:crafting_shaped",
        "key": {
            "D": {
                "item": "minecraft:string"
            },
            "L": {
                "item": "createbigcannons:shot_balls"
            },
            "S": {
                "tag": "minecraft:wooden_slabs"
            },
            "W": {
                "tag": "minecraft:wool"
            }
        },
        "pattern": [
            "DDD",
            "WLW",
            " S "
        ],
        "result": {
            "item": "createbigcannons:bag_of_grapeshot"
        }
    })
})