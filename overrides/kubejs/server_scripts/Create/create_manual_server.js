function get_page_type(ponder, player) {
    if (!player.persistentData.contains('create_manual_page_type')) {
        if (!("page_type" in ponder) || ponder.get("page_type") == 'PonderTagIndexScreen') {
            return 'PonderTagIndexScreen';
        }
        if (ponder.get("page_type") == 'PonderUI') {
            return 'PonderUI';
        }
        return 'PonderTagIndexScreen';
    }
    let page_type = player.persistentData.create_manual_page_type
    if (page_type == 'PonderTagIndexScreen') {
        return 'PonderTagIndexScreen';
    }
    if (page_type == 'PonderUI') {
        return 'PonderUI';
    }
    return 'PonderTagIndexScreen';
}

function set_page_type(page_type) {
    let current = JsonIO.read('kubejs/ponder.json')
    current["page_type"] = page_type
    JsonIO.write('kubejs/ponder.json', current)
}

function create_manual_right_click(event) {
    if (event.player.mainHandItem == 'create:create_manual') {
        event.cancel()
        let ray = event.player.rayTrace(64)
        let ponder = JsonIO.read('kubejs/ponder.json')
        if (ponder == null) {
            event.player.tell('The file "kubejs/ponder.json" does not exist, move it from the client to the server files for create_manual to work properly.')
            event.player.sendData('openPonderTagIndexScreen', {})
            return;
        }
        if (!event.player.stages.has('notified_about_create_manual_options')) {
            event.player.stages.add('notified_about_create_manual_options')
            if (Platform.isForge) {
                event.player.tell("Shift + scroll if you want to change screen mode!")
            }

        }
        if (ray.block !== null &&
            ponder.get("ponder").contains(ray.block.id) &&
            !event.player.isCrouching()) {
            event.server.runCommandSilent(`/execute as ${event.entity.uuid} run create ponder ${ray.block.id}`)
        } else {
            let page_type = get_page_type(ponder, event.player)
            if (page_type == 'PonderTagIndexScreen') {
                event.player.sendData('openPonderTagIndexScreen', {})
                return;
            }
            if (page_type == 'PonderUI') {
                event.server.runCommandSilent(`/execute as ${event.entity.uuid} run create ponder`)
                return;
            }

        }
    }
}

ItemEvents.rightClicked(event => {
    create_manual_right_click(event)
})

BlockEvents.rightClicked(event => {
    create_manual_right_click(event)
})

NetworkEvents.fromClient('create_manual_change_screen', event => {
    let screen = null
    if (!event.player.persistentData.contains('create_manual_page_type') || event.player.persistentData.create_manual_page_type == 'PonderTagIndexScreen') {
        screen = "PonderUI"
    } else if (event.player.persistentData.create_manual_page_type == 'PonderUI') {
        screen = "PonderTagIndexScreen"
    }
    event.player.persistentData.create_manual_page_type = screen
    event.server.runCommandSilent(`title KostromDan actionbar "Now manual will open ${screen}!"`)


})

ServerEvents.commandRegistry(event => {
    const {commands: Commands, arguments: Arguments} = event;
    event.register(
        Commands.literal("create_manual_config")
            .then(Commands.literal("page_type")
                .then(Commands.literal("PonderTagIndexScreen")
                    .executes(ctx => {
                        let player = ctx.source.player;
                        player.persistentData.create_manual_page_type = "PonderTagIndexScreen"
                        player.tell("Now create manual will open PonderTagIndexScreen!")
                        return 1;

                    })
                )
                .then(Commands.literal("PonderUI")
                    .executes(ctx => {
                        let player = ctx.source.player;
                        player.persistentData.create_manual_page_type = "PonderUI"
                        player.tell("Now create manual will open PonderUI!")
                        return 1;

                    })
                )
                .then(Commands.literal("reset")
                    .executes(ctx => {
                        let player = ctx.source.player;
                        player.persistentData.remove('create_manual_page_type')
                        player.tell("Now create manual will open default server value!")
                        return 1;

                    })
                )
            )
            .then(Commands.literal("default_page_type")
                .requires(src => src.hasPermission(2))
                .then(Commands.literal("PonderTagIndexScreen")
                    .executes(ctx => {
                        let player = ctx.source.player;
                        set_page_type("PonderTagIndexScreen")
                        player.tell("Now create manual will open PonderTagIndexScreen by default!")
                        return 1;

                    })
                )
                .then(Commands.literal("PonderUI")
                    .executes(ctx => {
                        let player = ctx.source.player;
                        set_page_type("PonderUI")
                        player.tell("Now create manual will open PonderUI by default!")
                        return 1;

                    })
                )
            )
            .then(Commands.literal("help")
                .executes(ctx => {
                    let player = ctx.source.player;
                    player.tell('/create_manual_config default_page_type <type> - will set default screen type for all players.\n' +
                        '/create_manual_config page_type <type> will set screen type only for you.')
                    return 1;
                })
            )
    )
})