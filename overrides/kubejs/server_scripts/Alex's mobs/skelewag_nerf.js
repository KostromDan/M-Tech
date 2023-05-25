EntityEvents.hurt(event => {
    if (event.entity.isPlayer() && event.source.type == "mob" && event.source.getImmediate().type == "alexsmobs:skelewag") {
        event.player.heal(event.damage * 0.7)
    }
});