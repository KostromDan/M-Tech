ItemEvents.tooltip(tooltip => {
    let myMessage = Text.yellow('You actually dont need this, use create alternator instead! If this item has a craft, then it can be used as a decoration only. Energy generation by this item is disabled!')
    tooltip.add('immersiveengineering:waterwheel_segment', [myMessage])
    tooltip.add('immersiveengineering:windmill_blade', [myMessage])
    tooltip.add('immersiveengineering:windmill', [myMessage])
    tooltip.add('immersiveengineering:watermill', [myMessage])
    tooltip.add('immersiveengineering:dynamo', [myMessage])
})
ItemEvents.tooltip(tooltip => {
    let myMessage = Text.yellow('You can have only one backpack of this type in the inventory!')
    tooltip.add('sophisticatedbackpacks:backpack', [myMessage])
})
ItemEvents.tooltip(tooltip => {
    let myMessage = Text.yellow('Reset with a left click on the air!')
    tooltip.add('akashictome:tome', [myMessage])
})
ItemEvents.tooltip(tooltip => {
    let myMessage = Text.yellow("In this modpack you can't use pointed dripstone for infinite lava/water source. Use trains or something else! You can force enable this feature with '/mtech config pointed_dripstone_enabled true', but it totally unrecommended to do this! ")
    tooltip.add('minecraft:pointed_dripstone', [myMessage])
    tooltip.add('minecraft:dripstone_block', [myMessage])
})
