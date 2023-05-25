ServerEvents.recipes(event => {event.custom({
	"type":"createaddition:rolling",
	"input": {
      	"tag": "forge:ingots/iron"
	},
	"result": {
		"item": "createaddition:iron_rod",
		"count": 2
	}
})})