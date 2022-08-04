
exports.getResponse = (statusCode, body)=>{
    console.log('ingreso a utils');
     return{
        statusCode : statusCode,
        body :JSON.stringify(body),
    }
};