ServerEvents.recipes(event => {event.custom({
  "type": "minecraft:crafting_shaped",
  "key": {
    "C": {
      "item": 'createdeco:cast_iron_ingot'
    },
    "I": {
      "tag": "forge:ingots/iron"
    }
  },
  "pattern": [
    "C",
    "I"
  ],
  "result": {
    "count": 4,
    "item": "createbigcannons:ap_autocannon_round"
  }
})})