ServerEvents.recipes(event => {
    event.replaceInput({mod: 'computercraft'}, 'minecraft:redstone', 'ae2:terminal')
    event.replaceInput({mod: 'computercraft'}, 'minecraft:golden_apple', 'ae2:wireless_terminal')
    event.replaceInput({mod: 'advancedperipherals'}, 'minecraft:redstone', 'ae2:terminal')
    event.replaceInput({mod: 'advancedperipherals'}, 'minecraft:golden_apple', 'ae2:wireless_terminal')

})