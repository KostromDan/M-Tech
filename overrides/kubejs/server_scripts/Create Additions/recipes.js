ServerEvents.recipes(event => {
    event.remove({mod: 'createaddition'})
    event.remove({output: 'alexsmobs:transmutation_table'})
    event.remove({
        output: '#forge:wires',
        input: '#immersiveengineering:toolbox/tools'
    })
    event.remove({
        output: '#forge:plates',
        input: '#immersiveengineering:toolbox/tools'
    })
    event.remove({
        output: '#forge:dusts',
        input: '#immersiveengineering:toolbox/tools'
    })
    event.remove({
        output: 'create:dough',
        input: 'minecraft:water_bucket'
    })
    event.remove({
        output: '#forge:rods/all_metal',
        input: '#forge:ingots',
        type: "minecraft:crafting_shaped"
    })
    event.remove({
        type: "immersiveengineering:alloy"
    })
    event.remove({
        type: "minecraft:crafting_shapeless",
        output: 'createdeco:zinc_sheet'
    })
    event.remove({
        output: 'createaddition:zinc_sheet'
    })
    event.replaceInput({}, 'createaddition:zinc_sheet', 'createdeco:zinc_sheet')
})