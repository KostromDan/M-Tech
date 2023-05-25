ServerEvents.recipes(event => {event.custom({
  "type": "minecraft:crafting_shaped",
  "key": {
    "n": {
      "tag": "forge:nuggets/brass"
    },
    "p": {
      "item": 'create:brass_sheet'
    },
    "t": {
      "item": "minecraft:soul_torch"
    }
  },
  "pattern": [
    "n",
    "t",
    "p"
  ],
  "result": {
    "item": "createdeco:blue_brass_lamp"
  }
})})