ServerEvents.recipes(event => {event.custom({
  "type": "minecraft:crafting_shaped",
  "key": {
    "p": {
      "item": 'create:iron_sheet'
    },
    "s": {
      "item": "minecraft:string"
    }
  },
  "pattern": [
    "psp",
    "psp"
  ],
  "result": {
    "count": 3,
    "item": "createdeco:iron_mesh_fence"
  }
})})