ServerEvents.recipes(event => {event.custom({
  "type": "minecraft:crafting_shaped",
  "key": {
    "C": {
      "item": "create:andesite_casing"
    },
    "G": {
      "tag": "forge:gunpowder"
    },
    "I": {
      "item": 'create:iron_sheet'
    },
    "S": {
      "item": "create:shaft"
    }
  },
  "pattern": [
    "ISI",
    "SCS",
    "GSG"
  ],
  "result": {
    "item": "createbigcannons:cannon_mount"
  }
})})