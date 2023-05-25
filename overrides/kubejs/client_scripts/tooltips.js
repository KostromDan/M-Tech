ItemEvents.tooltip(tooltip => {
    let myMessage = Text.yellow('You actually dont need this, use create alternator instead!')
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
