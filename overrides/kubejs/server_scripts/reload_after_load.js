ServerEvents.loaded(event => {
    //This is a crutch that fixes the kubejs bug when working with tags.
    Utils.server.runCommandSilent("reload")
})