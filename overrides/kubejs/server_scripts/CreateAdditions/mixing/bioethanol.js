ServerEvents.recipes(event => {event.custom({
  "type": "create:mixing",
  "ingredients": [
    {
      "item": "minecraft:sugar"
    },
	{
      "item": "createaddition:biomass"
    }
  ],
  "results": [
    {
      "fluid": "createaddition:bioethanol",
      "amount": 100
    }
  ]
})})