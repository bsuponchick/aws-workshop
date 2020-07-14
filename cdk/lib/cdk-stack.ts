import * as cdk from '@aws-cdk/core';
import * as s3 from '@aws-cdk/aws-s3';
import * as lambda from '@aws-cdk/aws-lambda';
import * as dynamodb from '@aws-cdk/aws-dynamodb';
import * as apigateway from '@aws-cdk/aws-apigateway';
import * as path from 'path';

export class CdkStack extends cdk.Stack {
  constructor(scope: cdk.Construct, id: string, props?: cdk.StackProps) {
    super(scope, id, props);

    new s3.Bucket(this, 'Bucket', {
      bucketName: 'avigram.suponchick.com',
      websiteErrorDocument: 'index.html',
      websiteIndexDocument: 'index.html',
      publicReadAccess: true,
      removalPolicy: cdk.RemovalPolicy.DESTROY
    });

    const usersTable = new dynamodb.Table(this, 'UsersTable', {
      tableName: 'Users',
      partitionKey: {
        name: 'username',
        type: dynamodb.AttributeType.STRING
      },
      removalPolicy: cdk.RemovalPolicy.DESTROY
    });

    const postsTable = new dynamodb.Table(this, 'PostsTable', {
      tableName: 'Posts',
      partitionKey: {
        name: 'username',
        type: dynamodb.AttributeType.STRING
      },
      sortKey: {
        name: 'timestamp',
        type: dynamodb.AttributeType.STRING
      },
      removalPolicy: cdk.RemovalPolicy.DESTROY
    });

    const getUserFunction = new lambda.Function(this, 'GetUser', {
      runtime: lambda.Runtime.NODEJS_12_X,
      handler: 'GetUser.handler',
      code: lambda.Code.fromAsset(path.join(__dirname, '../../api/getUser'))
    });

    const getPostsFunction = new lambda.Function(this, 'GetPosts', {
      runtime: lambda.Runtime.NODEJS_12_X,
      handler: 'GetPosts.handler',
      code: lambda.Code.fromAsset(path.join(__dirname, '../../api/getPosts'))
    });

    const followFunction = new lambda.Function(this, 'Follow', {
      runtime: lambda.Runtime.NODEJS_12_X,
      handler: 'Follow.handler',
      code: lambda.Code.fromAsset(path.join(__dirname, '../../api/follow'))
    });

    usersTable.grantReadData(getUserFunction);
    usersTable.grantReadData(getPostsFunction);
    usersTable.grantReadWriteData(followFunction);

    postsTable.grantReadData(getPostsFunction);

    const api = new apigateway.RestApi(this, 'RestApi');
    api.root.addMethod('ANY');

    const usersResource = api.root.addResource('users');
    usersResource.addMethod('GET', new apigateway.LambdaIntegration(getUserFunction), {
      requestParameters: {
        'method.request.querystring.username': true
      }
    });

    const postsResource = api.root.addResource('posts');
    postsResource.addMethod('GET', new apigateway.LambdaIntegration(getPostsFunction), {
      requestParameters: {
        'method.request.querystring.username': true
      }
    });

    const followResource = api.root.addResource('follow');
    followResource.addMethod('GET', new apigateway.LambdaIntegration(followFunction), {
      requestParameters: {
        'method.request.querystring.username': true,
        'method.request.querystring.follow': true
      }
    });
  }
}
