
const constants = require('../../constants');
const getFactory = require('./implement/getFactoryImpl');
const postFactory = require('./implement/postFactoryImpl');
let resp;

class Factory {
    async getMethod(event, callback){
        console.log('factory implementation', event.httpMethod);
        const splitPath=event.path.split('/');
        const actionPath=event.path.split('/')[2];
        let  httpMethod= constants.METHOD_FACTORY.hasOwnProperty(event.httpMethod) ? constants.METHOD_FACTORY[event.httpMethod] : {};
        let  functionName =httpMethod[actionPath]
        if(httpMethod==={} || functionName===''){
            return {}            
        }
        if (event.httpMethod === 'GET') {
           resp = await getFactory[functionName](event, callback); 
           console.log('Method', functionName, httpMethod);
           return resp;                           
        }
        if (event.httpMethod === 'POST'){
            resp =await postFactory[functionName](event, callback);
            return resp;    
        } 
  
    }
}

module.exports= new Factory();