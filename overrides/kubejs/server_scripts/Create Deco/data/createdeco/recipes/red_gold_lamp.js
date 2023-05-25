ServerEvents.recipes(event => {event.custom({
  "type": "minecraft:crafting_shaped",
  "key": {
    "n": {
      "tag": "forge:nuggets/gold"
    },
    "p": {
      "item": 'create:golden_sheet'
    },
    "t": {
      "item": "minecraft:redstone_torch"
    }
  },
  "pattern": [
    "n",
    "t",
    "p"
  ],
  "result": {
    "item": "createdeco:red_gold_lamp"
  }
})})