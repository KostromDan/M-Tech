ServerEvents.recipes(event => {
    event.custom({
        "type": "createaddition:rolling",
        "input": {
            "item": 'create:copper_sheet'
        },
        "result": {
            "item": "createaddition:copper_wire",
            "count": 2
        }
    })
})