ServerEvents.recipes(event => {
    event.custom({
            "type": "createaddition:liquid_burning",
            "input": {
                "fluidTag": "forge:biofuel",
                "amount": 1000
            },
            "burnTime": 4800
        }
    )
})