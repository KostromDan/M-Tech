// Listen to item registry event
StartupEvents.registry('item', event => {
  event.create('basic_control_circuit_small')
})