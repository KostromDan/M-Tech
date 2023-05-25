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
        output: '#forge:rods/all_metal',
        input: '#forge:ingots',
        type: "minecraft:crafting_shaped"
    })
    event.remove({
        type: "immersiveengineering:alloy"
    })
})