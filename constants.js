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
        "chargerawmaterial":"getChargeRawMaterial",
        "performance":"getPerformance",
        "qualityproduct":"getQualityProduct"    
    },
    "POST":{
    
    },
    "PUT":{
        
    },
    "DELETE":{
        
    }
})

define('TOPIC',['record','addProduct','charger','perform','quality'])
define('AWS_REGION','us-east-1')