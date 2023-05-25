ServerEvents.recipes(event => {event.custom({
  "type": "minecraft:crafting_shaped",
  "key": {
    "n": {
      "tag": "forge:nuggets/copper"
    },
    "p": {
      "item": 'create:copper_sheet'
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
    "item": "createdeco:yellow_copper_lamp"
  }
})})