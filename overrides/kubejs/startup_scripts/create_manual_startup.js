ForgeEvents.onEvent('net.minecraftforge.client.event.InputEvent$MouseScrollingEvent', event => {   //Only forge feature.
    if (Client.player.mainHandItem == 'create:create_manual' && Client.player.isCrouching()) {
        Client.player.sendData('create_manual_change_screen', {})
        event.setCanceled(true)
    }
})

StartupEvents.registry('item', event => {
    event.create('create:create_manual')
})