ServerEvents.tags('item', event => {
    event.remove('forge:plates/iron', 'create:iron_sheet')
    event.remove('forge:plates', 'create:iron_sheet')
    event.remove('forge:plates/copper', 'create:copper_sheet')
    event.remove('forge:plates', 'create:copper_sheet')
    event.remove('forge:plates/brass', 'create:brass_sheet')
    event.remove('forge:plates', 'create:brass_sheet')
    event.remove('forge:plates/gold', 'create:golden_sheet')
    event.remove('forge:plates', 'create:golden_sheet')

    event.remove('forge:wires/copper', 'createaddition:copper_wire')
    event.remove('forge:wires/gold', 'createaddition:gold_wire')
    event.remove('forge:wires/iron', 'createaddition:iron_wire')

    event.remove('forge:rods/iron', 'createaddition:iron_rod')
    event.remove('forge:rods/gold', 'createaddition:gold_rod')
    event.remove('forge:rods/brass', 'createaddition:brass_rod')
    event.remove('forge:rods/copper', 'createaddition:copper_rod')



})
ServerEvents.recipes(event => {
    event.replaceInput({mod: 'create'}, '#forge:plates/iron', 'create:iron_sheet')
    event.replaceInput({mod: 'create'}, '#forge:plates/copper', 'create:copper_sheet')
    event.replaceInput({mod: 'create'}, '#forge:plates/brass', 'create:brass_sheet')
    event.replaceInput({mod: 'create'}, '#forge:plates/gold', 'create:golden_sheet')

})
ServerEvents.loaded(event => {
    Utils.server.runCommand("reload")
})