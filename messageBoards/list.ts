import { Handler } from 'aws-lambda';
import { DynamoDBClient, ScanCommand } from '@aws-sdk/client-dynamodb';

const dynamoDbClient = new DynamoDBClient({
    region: 'ap-southeast-2',
});

export const list: Handler = async (event: any) => {
    console.log("Received event: " + JSON.stringify(event));
    const command = new ScanCommand({
        TableName: 'messageBoards',
    });
    const results = await dynamoDbClient.send(command);
    return {
        statusCode: 200,
        body: JSON.stringify(results.Items),
    };
};