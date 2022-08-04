const utils = require('../utils/utils');
const AWS = require('aws-sdk');
const ddb = new AWS.DynamoDB.DocumentClient({region:'us-east-1'});

exports.scan = async (params, callback) => {
    console.log('function scacn with data:', params);
    if(!(!!params.LotePr)){
        console.log('lot not found');
        return {}            
    }
    const parameter ={
        TableName : `${params['TableName']}`,
        FilterExpression: '#Lote = :Lote',
        ExpressionAttributeNames: {
            '#Lote':'Lote'
            
        },
        ExpressionAttributeValues:{
           ':Lote':params.LotePr
        }
    }
    console.log('parametros', parameter);
    await ddb.scan( params ).promise()
        .then (data =>{
            let body;
            if(data.Items.length === 0){
                console.log('Data not found');
                body = data.Items;
                callback(null, utils.getResponse(404, body));
            }
            else {
                console.log('Data consulted successfull');
                body = data.Items;
                callback(null, utils.getResponse(200, body));
            }
        })
        .catch((err) =>{
            console.error ( err );
            callback(null, utils.getResponse(500, 'ERROR'));
        })
}