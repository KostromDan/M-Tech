ServerEvents.recipes(event => {event.custom({
	"type":"createaddition:liquid_burning",
	"input": {
      	"fluidTag": "forge:plantoil",
      	"amount": 1000
	},
	"burnTime": 1200
}
)})