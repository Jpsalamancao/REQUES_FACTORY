const factory = require ('./src/factory/factory.js');
let res

exports.handler = async (event, context, callback) => {
    console.log('Received event:',event);
    let handlerData= event.path.includes('/request-front');
    if(!handlerData){
        res = {
            statusCode: 404,
            body: JSON.stringify('not found !'),
        };
        return res;
    }
   // res = await factory.getMethod(event,callback);
   console.log('se ejecuto la lambda')
};