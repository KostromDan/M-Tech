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
      "item": "minecraft:torch"
    }
  },
  "pattern": [
    "n",
    "t",
    "p"
  ],
  "result": {
    "item": "createdeco:yellow_brass_lamp"
  }
})})