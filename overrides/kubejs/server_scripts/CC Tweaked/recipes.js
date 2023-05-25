ServerEvents.recipes(event => {
    event.replaceInput({mod: 'computercraft'}, 'minecraft:redstone', 'ae2:terminal')
    event.replaceInput({mod: 'computercraft'}, 'minecraft:golden_apple', 'ae2:wireless_terminal')
    event.replaceInput({mod: 'advancedperipherals'}, 'minecraft:redstone', 'ae2:terminal')
    event.replaceInput({mod: 'advancedperipherals'}, 'minecraft:golden_apple', 'ae2:wireless_terminal')
    event.replaceInput({mod: 'advancedperipherals'}, 'minecraft:redstone_block', 'ae2:controller')
    event.replaceInput({mod: 'computercraft'}, '#forge:glass_panes','#ae2:illuminated_panel')
    event.replaceInput({mod: 'computercraft'}, 'minecraft:ender_eye','ae2:wireless_receiver')
    event.replaceInput({mod: 'computercraft'}, 'minecraft:ender_pearl','ae2:wireless_receiver')

})