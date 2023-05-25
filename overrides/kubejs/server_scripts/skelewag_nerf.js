EntityEvents.hurt(event => {
    if (event.entity.isPlayer()&&event.source.toString().includes("Skelewag")) {
        event.player.heal(event.damage*0.6)
    }
});