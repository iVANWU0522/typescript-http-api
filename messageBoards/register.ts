import { Handler } from 'aws-lambda';
import { SQSClient, SendMessageCommand } from '@aws-sdk/client-sqs';
import * as uuid from 'uuid';

const client = new SQSClient({
    region: 'ap-southeast-2',
});

export const register: Handler = async (event: any) => {
    console.log("Received event: " + JSON.stringify(event));
    const data = JSON.parse(event.body);

    const params = {
        MessageBody: JSON.stringify({
            id: uuid.v1(),
            name: data.name,
        }),
        QueueUrl: process.env.MESSAGE_BOARD_SQS_URL
    };

    await client.send(new SendMessageCommand(params));
};