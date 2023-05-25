ServerEvents.recipes(event => {
    event.replaceInput({mod: 'constructionwand'}, 'minecraft:diamond_block', 'mekanism:module_blasting_unit')
    event.replaceInput({mod: 'constructionwand'}, 'minecraft:nether_star', 'create:mechanical_arm')
})