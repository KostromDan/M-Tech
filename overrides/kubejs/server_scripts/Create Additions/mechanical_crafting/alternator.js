ServerEvents.recipes(event => {
    event.custom({
        "type": "create:mechanical_crafting",
        "pattern": [
            "MMAMM",
            "XISIX",
            "ISRSI",
            "XICIX",
            "MMMMM"
        ],
        "key": {
            "C": {
                "item": "createaddition:capacitor"
            },
            "I": {
                "item": 'create:iron_sheet'
            },
            "R": {
                "item": 'createaddition:iron_rod'
            },
            "S": {
                "item": "createaddition:copper_spool"
            },
            "A": {
                "item": "create:andesite_alloy"
            },
            "M": {
                "item": 'createbigcannons:nethersteel_block'
            },
            "X": {
                "item": 'minecraft:netherite_block'
            }
        },
        "result": {
            "item": "createaddition:alternator"
        }
    })
})