ServerEvents.recipes(event => {event.custom({
  "type": "minecraft:crafting_shaped",
  "key": {
    "B": {
      "item": "createdeco:brass_bars"
    },
    "p": {
      "item": 'create:brass_sheet'
    }
  },
  "pattern": [
    " p ",
    "pBp",
    " p "
  ],
  "result": {
    "count": 3,
    "item": "createdeco:brass_catwalk"
  }
})})