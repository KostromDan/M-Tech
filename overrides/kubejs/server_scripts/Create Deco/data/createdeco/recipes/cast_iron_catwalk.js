ServerEvents.recipes(event => {event.custom({
  "type": "minecraft:crafting_shaped",
  "key": {
    "B": {
      "item": "createdeco:cast_iron_bars"
    },
    "p": {
      "item": 'createdeco:cast_iron_sheet'
    }
  },
  "pattern": [
    " p ",
    "pBp",
    " p "
  ],
  "result": {
    "count": 3,
    "item": "createdeco:cast_iron_catwalk"
  }
})})