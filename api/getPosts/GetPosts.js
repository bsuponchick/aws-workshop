const AWS = require('aws-sdk');

const dynamo = new AWS.DynamoDB.DocumentClient();

exports.handler = (event, context, callback) => {
    const username = event.queryStringParameters.username;
    console.log(`username is ${username}`);
    dynamo.get({
        TableName: 'Users',
        Key: {
            'username': username
        }
    }).promise().then((data) => {
        console.log(`user is following ${JSON.stringify(data.Item.following)}`);

        dynamo.scan({
            TableName: 'Posts',
            ScanFilter: {
                username:{
                    ComparisonOperator: 'IN',
                    AttributeValueList:  data.Item.following
                }
            }
        }).promise().then((data) => {
            callback(null, {
                statusCode: 200,
                body: JSON.stringify(data.Items),
                headers: {
                    'Access-Control-Allow-Origin': '*'
                }
            });
        }).catch((err) => {
            throw err;
        });        
    }).catch((err) => {
        console.error(err);
        callback(null, {
            statusCode: 500,
            body: JSON.stringify({
                Error: err.message,
                Reference: context.awsRequestId
            }),
            headers: {
                'Access-Control-Allow-Origin': '*'
            }
        })
    });
}
