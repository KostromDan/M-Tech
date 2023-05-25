ServerEvents.recipes(event => {
    event.remove({output: "sophisticatedbackpacks:iron_backpack"})
    event.custom({
        "type": "sophisticatedbackpacks:backpack_upgrade",
        "conditions": [
            {
                "itemRegistryName": "sophisticatedbackpacks:iron_backpack",
                "type": "sophisticatedcore:item_enabled"
            }
        ],
        "pattern": [
            "ICI",
            "IBI",
            "ICI"
        ],
        "key": {
            "I": {
                "tag": "forge:ingots/iron"
            },
            "B": {
                "item": "sophisticatedbackpacks:backpack"
            },
            "C": {
                "item": 'minecraft:shulker_shell'
            }
        },
        "result": {
            "item": "sophisticatedbackpacks:iron_backpack"
        }
    })
})

const CuriosApi = Java.loadClass('top.theillusivec4.curios.api.CuriosApi')

function throw_item(event, item) {
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
}

EntityEvents.death(event => {
    if (event.entity.getType()==='minecraft:wither') {
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


function deep_inventory_search(event, ingredient, del_more_than) {
    let player = event.player
    let counter = 0
    let curios_counter = 0
    const target = Ingredient.of(ingredient)
    counter += player.inventory.count(ingredient)
    const api = new CuriosApi();
    const curios = api.getCuriosHelper().getEquippedCurios(event.player).resolve().get();
    for (let slot = 0; slot < curios.getSlots(); slot++) {
        var itemstack = Item.of(curios.getStackInSlot(slot))
        if (target.test(itemstack)) {
            if (curios_counter >= del_more_than) {
                curios.setStackInSlot(slot, "minecraft:air")
                throw_item(event, itemstack)
                counter--
            }
            counter++
            curios_counter++
        }
    }
    return counter
}

function del_item_more_than(event, ingredient, max_count) {
    while (deep_inventory_search(event, ingredient, max_count) > max_count) {
        event.player.tell("You can have only one standard backpack in your inventory! Create a backpack of iron level or higher to be able to carry an unlimited number of backpacks. One of the backpacks was thrown to the ground!")
        let item = event.player.inventory.extractItem(event.player.inventory.find(ingredient), max_count, false)
        throw_item(event, item)
    }
}

PlayerEvents.inventoryChanged(event => {
    del_item_more_than(event, 'sophisticatedbackpacks:backpack', 1)
})
ItemEvents.pickedUp(event => {
    del_item_more_than(event, 'sophisticatedbackpacks:backpack', 1)
})
PlayerEvents.inventoryClosed(event => {
    del_item_more_than(event, 'sophisticatedbackpacks:backpack', 1)
})