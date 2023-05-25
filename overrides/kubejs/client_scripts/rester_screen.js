NetworkEvents.fromServer('resetScreen', event => {
    Client.setCurrentScreen(null)
})