ServerEvents.recipes(event => {
    event.custom({
        "type": "create:sequenced_assembly",
        "ingredient": {
            "tag": "forge:ingots/bronze"
        },
        "loops": 3,
        "results": [
            {
                "item": "createbigcannons:bronze_autocannon_breech_extractor"
            }
        ],
        "sequence": [
            {
                "type": "create:cutting",
                "ingredients": [
                    {
                        "item": "createbigcannons:partial_bronze_autocannon_breech_extractor"
                    }
                ],
                "results": [
                    {
                        "item": "createbigcannons:partial_bronze_autocannon_breech_extractor"
                    }
                ]
            }
        ],
        "transitionalItem": {
            "item": "createbigcannons:partial_bronze_autocannon_breech_extractor"
        }
    })
})