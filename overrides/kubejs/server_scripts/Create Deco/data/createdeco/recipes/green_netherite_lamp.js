ServerEvents.recipes(event => {event.custom({
  "type": "minecraft:crafting_shaped",
  "key": {
    "n": {
      "item": 'createdeco:netherite_nugget'
    },
    "p": {
      "item": 'createdeco:netherite_sheet'
    },
    "t": {
      "item": "minecraft:glow_berries"
    }
  },
  "pattern": [
    "n",
    "t",
    "p"
  ],
  "result": {
    "item": "createdeco:green_netherite_lamp"
  }
})})