ServerEvents.recipes(event => {event.custom({
	"type":"createaddition:rolling",
	"input": {
      	"tag": "forge:ingots/gold"
	},
	"result": {
		"item": "createaddition:gold_rod",
		"count": 2
	}
})})