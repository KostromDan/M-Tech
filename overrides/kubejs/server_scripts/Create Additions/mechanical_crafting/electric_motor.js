ServerEvents.recipes(event => {
    event.custom({
        "type": "create:mechanical_crafting",
        "pattern": [
            "  A  ",
            "DBSBD",
            "BSRSB",
            "DBCBD"
        ],
        "key": {
            "A": {
                "item": "create:andesite_alloy"
            },
            "C": {
                "item": "createaddition:capacitor"
            },
            "B": {
                "item": 'create:brass_sheet'
            },
            "R": {
                "item": 'createaddition:iron_rod'
            },
            "S": {
                "item": "createaddition:copper_spool"
            },
            "D": {
                "item": 'immersiveengineering:coil_mv'
            }
        },
        "result": {
            "item": "createaddition:electric_motor"
        }
    })
})