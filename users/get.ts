import { Handler } from 'aws-lambda';
import { DynamoDBClient, ScanCommand } from '@aws-sdk/client-dynamodb';

const dynamoDbClient = new DynamoDBClient({
  region: 'ap-southeast-2',
});

export const get: Handler = async (event: any) => {
  let email;
  if (event.queryStringParameters && event.queryStringParameters.email) {
    console.log("Received email: " + event.queryStringParameters.email);
    email = event.queryStringParameters.email;
  }
  const scanCommand = new ScanCommand({
    TableName: 'users',
    ExpressionAttributeValues: {
      ':email': {
        S: email,
      },
    },
    FilterExpression: 'email = :email',
  });
  const results = await dynamoDbClient.send(scanCommand);
  return {
    statusCode: 200,
    body: JSON.stringify(results.Items),
  }
}