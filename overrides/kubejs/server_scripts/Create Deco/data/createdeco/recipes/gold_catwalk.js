ServerEvents.recipes(event => {event.custom({
  "type": "minecraft:crafting_shaped",
  "key": {
    "B": {
      "item": "createdeco:gold_bars"
    },
    "p": {
      "item": 'create:golden_sheet'
    }
  },
  "pattern": [
    " p ",
    "pBp",
    " p "
  ],
  "result": {
    "count": 3,
    "item": "createdeco:gold_catwalk"
  }
})})