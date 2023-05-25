function execute_n(uuid, command, n, delay_in_tick) {
    for (let i = 0; i < n; i++) {
        Utils.server.scheduleInTicks(delay_in_tick * i, e => {
            Utils.server.runCommandSilent(`execute as ${uuid} at ${uuid} run ${command}`)
        })
    }
}

ServerEvents.commandRegistry(event => {
    const {commands: Commands, arguments: Arguments} = event;
    event.register(
        Commands.literal("execute_n")
            .requires(src => src.hasPermission(2))
            .then(Commands.argument('n', Arguments.INTEGER.create(event))
                .then(Commands.argument('command', Arguments.STRING.create(event))
                    .executes(ctx => {
                        execute_n(
                            ctx.source.player.uuid,
                            Arguments.STRING.getResult(ctx, "command"),
                            Arguments.INTEGER.getResult(ctx, "n"),
                            0)
                        return 1
                    }).then(Commands.argument('delay_in_tick', Arguments.INTEGER.create(event))
                        .executes(ctx => {
                            execute_n(
                                ctx.source.player.uuid,
                                Arguments.STRING.getResult(ctx, "command"),
                                Arguments.INTEGER.getResult(ctx, "n"),
                                Arguments.INTEGER.getResult(ctx, "delay_in_tick"))
                            return 1
                        })
                    )
                )
            ))
})