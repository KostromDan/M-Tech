ServerEvents.recipes(event => {event.custom({
  "type": "minecraft:crafting_shaped",
  "key": {
    "C": {
      "item": "create:andesite_casing"
    },
    "H": {
      "item": 'create:iron_sheet'
    },
    "P": {
      "item": "create:piston_extension_pole"
    },
    "h": {
      "tag": "forge:nuggets/iron"
    }
  },
  "pattern": [
    "hHh",
    " C ",
    " P "
  ],
  "result": {
    "item": "createbigcannons:cannon_builder"
  }
})})