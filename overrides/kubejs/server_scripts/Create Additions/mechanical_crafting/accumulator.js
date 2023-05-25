ServerEvents.recipes(event => {
    event.custom({
        "type": "create:mechanical_crafting",
        "pattern": [
            " N N ",
            "PCGCP",
            "PCBCP",
            "PCGCP"
        ],
        "key": {
            "N": {
                "item": "createaddition:connector"
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
            "G": {
                "item": "createaddition:gold_spool"
            }
        },
        "result": {
            "item": "createaddition:accumulator"
        }
    })
    event.custom({
        "type": "create:mechanical_crafting",
        "pattern": [
            "PCGCP",
            "PCBCP",
            "PCGCP"
        ],
        "key": {
            "C": {
                "item": "createaddition:capacitor"
            },
            "P": {
                "item": 'create:brass_sheet'
            },
            "B": {
                "item": "create:brass_casing"
            },
            "G": {
                "item": "createaddition:gold_spool"
            }
        },
        "result": {
            "item": "createaddition:modular_accumulator"
        }
    })
})