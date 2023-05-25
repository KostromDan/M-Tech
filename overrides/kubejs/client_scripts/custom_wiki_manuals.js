const $Util = Java.loadClass('net.minecraft.Util')
const $ConfirmLinkScreen = Java.loadClass('net.minecraft.client.gui.screens.ConfirmLinkScreen')

ItemEvents.clientRightClicked(event => {
    let manuals = JsonIO.read('kubejs/custom_wiki_manuals.json')
    for (const manual of manuals.keySet()) {
        if (event.item.id == manual) {
            let screen = Client.currentScreen
            let link = manuals[manual]["link"]
            let name = manuals[manual]["name"]
            Client.setScreen(new $ConfirmLinkScreen((confirm) => {
                if (confirm) {
                    $Util.getPlatform().openUri(link)
                    event.player.tell(`Opened ${name}! Check your browser!`)
                } else {
                    event.player.tell(`You cancelled open request of ${name}! Try again!`)
                }
                Client.setScreen(screen)
            }, link, false))
            return;
        }
    }
})