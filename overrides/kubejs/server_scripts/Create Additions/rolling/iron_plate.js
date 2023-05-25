ServerEvents.recipes(event => {event.custom({
	"type":"createaddition:rolling",
	"input": {
      	"item": 'create:iron_sheet'
	},
	"result": {
		"item": "createaddition:iron_wire",
		"count": 2
	}
})})