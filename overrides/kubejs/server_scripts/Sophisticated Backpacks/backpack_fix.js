const CuriosApi = Java.loadClass('top.theillusivec4.curios.api.CuriosApi')

function throw_item(event, item, msg) {
    event.player.tell(msg)
    event.server.scheduleInTicks(20, e => {
        let itemEntity = event.level.createEntity("item")
        itemEntity.y = event.player.y + 0.5
        itemEntity.x = event.player.x
        itemEntity.z = event.player.z
        itemEntity.item = item
        itemEntity.item.count = 1
        itemEntity.noGravity = true
        itemEntity.setInvulnerable(true)
        itemEntity.setGlowing(true)
        itemEntity.setPickUpDelay(100)
        itemEntity.spawn()
    })
}

function remove_from_inv_include_curious(event, ingredient, max_count, msg) {
    let player = event.player
    let curious_counter = 0
    const target = Ingredient.of(ingredient)
    const api = new CuriosApi();
    const curios = api.getCuriosHelper().getEquippedCurios(event.player).resolve().get();
    for (let slot = 0; slot < curios.getSlots(); slot++) {
        var itemstack = Item.of(curios.getStackInSlot(slot))
        if (target.test(itemstack)) {
            curious_counter++
            if (curious_counter > max_count) {
                curios.setStackInSlot(slot, "minecraft:air")
                throw_item(event, itemstack, msg)
                curious_counter--
            }
        }
    }
    let counter = player.inventory.count(ingredient)
    while (curious_counter + counter > max_count) {
        let item = event.player.inventory.extractItem(event.player.inventory.find(ingredient), 1, false)
        throw_item(event, item, msg)
        counter = player.inventory.count(ingredient)
    }
    return curious_counter + counter
}

function del_item_more_than(event, ingredient, max_count, msg) {
    while (remove_from_inv_include_curious(event, ingredient, max_count, msg) > max_count) {
    }
}

PlayerEvents.inventoryChanged(event => {
    del_item_more_than(event, 'sophisticatedbackpacks:backpack', 1, "You can have only one standard backpack in your inventory! Create a backpack of iron level or higher to be able to carry an unlimited number of backpacks. One of the backpacks was thrown to the ground!")
    del_item_more_than(event, 'supplementaries:sack', 3, "Too much sacks in inventory! One of the sacks was thrown to the ground!")
})