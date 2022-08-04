const constants = require('../../../constants');
const dynamoSer = require('../../services/dynamoServices');
const utils = require('../../utils/utils');
const AWS = require('aws-sdk');
const ddb = new AWS.DynamoDB.DocumentClient({region:'us-east-1'});

exports.getPerformance = async (event,callback) =>{
    const  Lote= event.path.split('/')[3];
    console.log('getPerformance',  Lote);

    const params = {
         TableName : 'Performance-Product',
         LotePr: Lote
    }
    console.log('params', params);
    await dynamoSer.scan(params,callback);

}
exports.getRecordsProcess = async (event, callback) =>{
    const  Lote= event.path.split('/')[3];
    console.log('getRecordsProcess',  Lote);

    const params = {
         TableName : 'DateTemperature',
         LotePr: Lote
    }
    console.log('params', params);
    await dynamoSer.scan(params,callback);
}

exports.getChargeRawMaterial = async (event, callback) =>{
    const  Lote= event.path.split('/')[3];
    console.log('getChargeRawMaterial',  Lote);

    const params = {
         TableName : 'Raw-material-load',
         LotePr: Lote
    }
    console.log('params', params);
    await dynamoSer.scan(params,callback);
}
    
exports.getQualityProduct = async () =>{
    const  Lote= event.path.split('/')[3];
    console.log('getQualityProduct',  Lote);

    const params = {
         TableName : 'Quality-Process',
         LotePr: Lote
    }
    console.log('params', params);
    await dynamoSer.scan(params,callback);    
}
