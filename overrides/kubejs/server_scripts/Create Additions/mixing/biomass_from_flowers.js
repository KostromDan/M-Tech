ServerEvents.recipes(event => {event.custom({
  "type": "create:mixing",
  "ingredients": [
	{
      "tag": "minecraft:flowers"
    },
    {
      "tag": "minecraft:flowers"
    },
    {
      "fluid": "createaddition:seed_oil",
      "amount": 100
    }
  ],
  "results": [
    {
      "item": "createaddition:biomass",
      "count": 2
    }
  ],
  "heatRequirement": "heated"
})})