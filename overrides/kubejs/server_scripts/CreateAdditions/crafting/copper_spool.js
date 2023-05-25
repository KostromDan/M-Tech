ServerEvents.recipes(event => {event.custom({
	"type": "minecraft:crafting_shaped",
	
	"pattern":
	[" W ",
	 "WSW",
	 " W "],
	"key":
	{
		"W":
		{
			"item": 'createaddition:copper_wire'
		},
		"S":
		{
			"item": "createaddition:spool"
		}
	},
	"result":{
		"item": "createaddition:copper_spool",
		"count": 1
	}
})})