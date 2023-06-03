let moder_can_use = [
    'tp ',
    'gamemode spectator',
    'gamemode survival',
    'ban ',
    'kick ',
    'mtech restart',
    'mtech backup',
    'stop',
    'ftb'
]
ServerEvents.commandRegistry(event => {
    const {commands: Commands, arguments: Arguments} = event;
    event.register(
        Commands.literal("moderation")
            .then(Commands.literal("execute")
                .then(Commands.argument('command', Arguments.STRING.create(event))
                    .executes(ctx => {
                        let player = ctx.source.player;
                        const command = Arguments.STRING.getResult(ctx, "command")
                        if (!player.stages.has('moder')) {
                            player.tell("You are not moder!")
                            return 0;
                        }
                        for (const cmd of moder_can_use) {
                            if (command.startsWith(cmd)) {
                                execute_n(
                                    ctx.source.player.uuid,
                                    command,
                                    1,
                                    0)
                                return 1;
                            }
                        }
                        player.tell("You haven't got access to this command, or command is broken!")
                        return 1;

                    })
                ))
            .then(Commands.literal("help")
                .executes(ctx => {
                    let player = ctx.source.player
                    moder_can_use.forEach(cmd => {
                        player.tell(`/moderation execute "${cmd}"`)
                    })
                    return 1;
                })
            )
            .then(Commands.literal("appoint")
                .requires(src => src.hasPermission(2))
                .then(Commands.argument("entity", Arguments.ENTITY.create(event))
                    .executes(ctx => {
                        const moder = Arguments.ENTITY.getResult(ctx, "entity");
                        say(`${moder.username} was appointed moderator of the server!`)
                        moder.stages.add('moder')
                        return 1;
                    })
                )
            )
            .then(Commands.literal("depose")
                .requires(src => src.hasPermission(2))
                .then(Commands.argument("entity", Arguments.ENTITY.create(event))
                    .executes(ctx => {
                        let moder = Arguments.ENTITY.getResult(ctx, "entity");
                        say(`${moder.username} was removed from the post of moderator!`)
                        moder.stages.remove('moder')
                        return 1;
                    })
                )
            )
    )
})