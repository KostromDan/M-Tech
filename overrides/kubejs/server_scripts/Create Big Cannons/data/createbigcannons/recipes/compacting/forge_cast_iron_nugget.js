ServerEvents.recipes(event => {event.custom({
  "type": "create:compacting",
  "ingredients": [
    {
      "amount": 10,
      "fluidTag": "forge:molten_cast_iron"
    }
  ],
  "results": [
    {
      "item": 'createdeco:cast_iron_nugget'
    }
  ]
})})