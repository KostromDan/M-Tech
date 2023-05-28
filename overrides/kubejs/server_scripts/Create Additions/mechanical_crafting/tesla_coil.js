ServerEvents.recipes(event => {
    event.custom({
        "type": "create:mechanical_crafting",
        "pattern": [
            "SSS",
            " A ",
            "CBC",
            "PEP"
        ],
        "key": {
            "A": {
                "item": "create:andesite_alloy"
            },
            "C": {
                "item": "createaddition:capacitor"
            },
            "P": {
                "item": 'create:brass_sheet'
            },
            "B": {
                "item": "create:brass_casing"
            },
            "S": {
                "item": "createaddition:copper_spool"
            },
            "E": {
                "item": "create:electron_tube"
            }
        },
        "result": {
            "item": "createaddition:tesla_coil"
        }
    })
})