import { Handler } from 'aws-lambda';
import { DynamoDBClient, PutItemCommand } from '@aws-sdk/client-dynamodb';

const dynamoDbClient = new DynamoDBClient({
    region: 'ap-southeast-2',
});

export const create: Handler = async (event: any) => {
    console.log("Received event: " + JSON.stringify(event));
    const data = JSON.parse(event.Records[0].body);

    console.log("Received data: " + JSON.stringify(data));

    const params = {
        TableName: 'messageBoards',
        Item: {
            'id': { S: data.id },
            'name': { S: data.name },
        },
    };

    const command = new PutItemCommand(params);

    await dynamoDbClient.send(command);
};