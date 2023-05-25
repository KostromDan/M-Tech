EntityEvents.death(event => {
    if (event.entity.getType() === 'minecraft:wither') {
        let itemEntity = event.level.createEntity("item")
        itemEntity.y = event.entity.y
        itemEntity.x = event.entity.x
        itemEntity.z = event.entity.z
        itemEntity.item = 'endrem:wither_eye'
        itemEntity.item.count = 1
        itemEntity.setInvulnerable(true)
        itemEntity.setGlowing(true)
        itemEntity.setPickUpDelay(100)
        itemEntity.spawn()
    }
})