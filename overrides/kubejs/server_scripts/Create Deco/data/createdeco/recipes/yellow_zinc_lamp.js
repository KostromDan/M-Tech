ServerEvents.recipes(event => {event.custom({
  "type": "minecraft:crafting_shaped",
  "key": {
    "n": {
      "tag": "forge:nuggets/zinc"
    },
    "p": {
      "item": 'createdeco:zinc_sheet'
    },
    "t": {
      "item": "minecraft:torch"
    }
  },
  "pattern": [
    "n",
    "t",
    "p"
  ],
  "result": {
    "item": "createdeco:yellow_zinc_lamp"
  }
})})