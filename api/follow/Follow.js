const AWS = require('aws-sdk');

const dynamo = new AWS.DynamoDB.DocumentClient();

exports.handler = (event, context, callback) => {
    const username = event.queryStringParameters.username;
    const follow = event.queryStringParameters.follow;

    console.log(`username ${username} wants to follow ${follow}`);
    dynamo.get({
        TableName: 'Users',
        Key: {
            'username': username
        }
    }).promise().then((data) => {
        console.log(`user is ${JSON.stringify(data.Item)}`);
        
        if (data.Item.following.indexOf(follow) === -1) {
            data.Item.following.push(follow);
        }

        dynamo.put({
            TableName: 'Users',
            Item: data.Item
        }).promise().then((updatedData) => {
            console.log(`follow successful, user is now ${JSON.stringify(data.Item)}`);

            callback(null, {
                statusCode: 200,
                body: JSON.stringify(updatedData.Item),
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
