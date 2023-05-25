ServerEvents.recipes(event => {event.custom({
  "type": "create:mechanical_crafting",
  "pattern": [
  	"  A  ",
  	"DISID",
    "ISRSI",
    "DICID"
  ],
  "key": {
    "C": {
      "item": "createaddition:capacitor"
    },
    "I": {
      "item": 'create:iron_sheet'
    },
    "R": {
      "item": 'createaddition:iron_rod'
    },
    "S": {
      "item": "createaddition:copper_spool"
    },
    "A": {
      "item": "create:andesite_alloy"
    },
    "D": {
      "item": 'minecraft:netherite_ingot'
    }
  },
  "result": {
    "item": "createaddition:alternator"
  }
})})