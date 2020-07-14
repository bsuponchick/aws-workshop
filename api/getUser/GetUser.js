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
        console.log(`user is ${JSON.stringify(data.Item)}`);

        callback(null, {
            statusCode: 200,
            body: JSON.stringify(data.Item),
            headers: {
                'Access-Control-Allow-Origin': '*'
            }
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
