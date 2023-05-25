ServerEvents.recipes(event => {event.custom({
  "type": "create:cutting",
  "ingredients": [
    {
      "item": 'create:golden_sheet'
    }
  ],
  "results": [
    {
      "item": "createbigcannons:autocannon_cartridge_sheet"
    },
    {
      "chance": 0.125,
      "item": "createbigcannons:autocannon_cartridge_sheet"
    },
    {
      "chance": 0.125,
      "item": "createbigcannons:autocannon_cartridge_sheet"
    }
  ]
})})