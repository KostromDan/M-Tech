ServerEvents.recipes(event => {event.custom({
  "type": "minecraft:crafting_shaped",
  "key": {
    "G": {
      "tag": "forge:gunpowder"
    },
    "I": {
      "item": 'create:iron_sheet'
    },
    "K": {
      "tag": "forge:ingots/iron"
    }
  },
  "pattern": [
    " K ",
    "III",
    " G "
  ],
  "result": {
    "item": "createbigcannons:wrought_iron_cannon_end"
  }
})})