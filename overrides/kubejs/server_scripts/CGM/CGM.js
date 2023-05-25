ServerEvents.recipes(event => {
    event.remove({output: 'cgm:workbench'})
    event.shaped(Item.of('cgm:workbench', 1), [
        'ABA',
        'CDC',
        'DED'
    ], {
        A: 'create:mechanical_arm',
        B: 'minecraft:netherite_block',
        C: 'minecraft:end_rod',
        D: 'minecraft:purpur_block',
        E: 'minecraft:dragon_head'
    })


})