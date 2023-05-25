ServerEvents.recipes(event => {event.custom({
	"type": "minecraft:crafting_shaped",
	
	"pattern":
	["P",
	 "N",
	 "P"],
	"key":
	{
		"P":
		{
			"item": 'create:iron_sheet'
		},
		"N":
		{
			"tag": "forge:nuggets/iron"
		}
	},
	"result":{
		"item": "createaddition:spool",
		"count": 16
	}
})})