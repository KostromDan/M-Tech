ServerEvents.recipes(event => {
    function make_hollow_wood(wood) {
        event.shaped(
            Item.of('projectvibrantjourneys:' + wood + '_hollow_log', 4),
            [
                ' A ',
                'A A',
                ' A '
            ],
            {
                A: 'minecraft:' + wood + '_log'
            }
        )
    }

    make_hollow_wood('oak')
    make_hollow_wood('birch')
    make_hollow_wood('spruce')
    make_hollow_wood('jungle')
    make_hollow_wood('acacia')
    make_hollow_wood('dark_oak')
})