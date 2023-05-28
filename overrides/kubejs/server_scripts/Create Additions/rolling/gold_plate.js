ServerEvents.recipes(event => {
    event.custom({
        "type": "createaddition:rolling",
        "input": {
            "item": 'create:golden_sheet'
        },
        "result": {
            "item": "createaddition:gold_wire",
            "count": 2
        }
    })
})