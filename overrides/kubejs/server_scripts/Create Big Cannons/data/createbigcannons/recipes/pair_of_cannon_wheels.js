ServerEvents.recipes(event => {event.custom({
  "type": "minecraft:crafting_shaped",
  "key": {
    "L": {
      "tag": "minecraft:logs"
    },
    "S": {
      "item": 'create:iron_sheet'
    }
  },
  "pattern": [
    " S ",
    "SLS",
    " S "
  ],
  "result": {
    "count": 2,
    "item": "createbigcannons:pair_of_cannon_wheels"
  }
})})