function define (name, value){
    Object.defineProperty (exports, name,{
        value: value,
        enumerable : true
    });
}

// importa las constantes segun factory

define('METHOD_FACTORY',{
    "GET":{
        "recordsprocess":"getRecordsProcess",
    },
    "POST":{
        "recordsprocess":"postRecordsProcess",
        "addproducto":"postAddProducto",
        "chargerawmaterial":"postChargeRawMaterial",
        "performance":"postPerformance",
        "qualityproduct":"postQualityProduct"        
    },
    "PUT":{
        
    },
    "DELETE":{
        
    }
})

define('TOPIC',['record','addProduct','charger','perform','quality'])
define('AWS_REGION','us-east-1')