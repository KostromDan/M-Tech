const $PonderRegistry = Java.loadClass('com.simibubi.create.foundation.ponder.PonderRegistry')
const $PonderTagIndexScreen = Java.loadClass('com.simibubi.create.foundation.ponder.ui.PonderTagIndexScreen')

ClientEvents.loggedIn(event => {
    let current = JsonIO.read('kubejs/ponder.json')
    let updated_ponder = String($PonderRegistry.ALL.keySet()).replace('[', '').replace(']', '').split(', ')
    if (current == null) {
        current = {}
    }
    if (!("page_type" in current)) {
        current["page_type"] = "PonderTagIndexScreen"
    }
    current["ponder"] = updated_ponder
    JsonIO.write('kubejs/ponder.json', current)
})

NetworkEvents.fromServer('openPonderTagIndexScreen', event => {
    let screen = new $PonderTagIndexScreen()
    Client.setCurrentScreen(screen)
})

ItemEvents.tooltip(tooltip => {
    let text = null
    if (Platform.isForge) {
        text = "Shift + scroll to change screen mode!"
    } else {
        text = 'Use "/create_manual_config page_type <...>" to change screen mode!'
    }
    let myMessage = Text.yellow(`Right click to item from create, you want to get help, or non create to open page with all items. Works up to 64 blocks! ${text}`)
    tooltip.add('create:create_manual', [myMessage])
})