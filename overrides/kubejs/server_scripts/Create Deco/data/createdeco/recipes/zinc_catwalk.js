ServerEvents.recipes(event => {event.custom({
  "type": "minecraft:crafting_shaped",
  "key": {
    "B": {
      "item": "createdeco:zinc_bars"
    },
    "p": {
      "item": 'createdeco:zinc_sheet'
    }
  },
  "pattern": [
    " p ",
    "pBp",
    " p "
  ],
  "result": {
    "count": 3,
    "item": "createdeco:zinc_catwalk"
  }
})})