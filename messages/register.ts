import { Handler } from 'aws-lambda';
import { SNSClient, PublishCommand } from "@aws-sdk/client-sns";
import * as uuid from 'uuid';

const client = new SNSClient({
    region: 'ap-southeast-2',
});

export const register: Handler = async (event: any) => {
    console.log("Received event: " + JSON.stringify(event));
    const data = JSON.parse(event.body);

    const params = {
        Message: JSON.stringify({
            id: uuid.v1(),
            messageBoardId: data.messageBoardId,
            message: data.message,
        }),
        TopicArn: process.env.MESSAGE_SNS_ARN,
    };

    await client.send(new PublishCommand(params));
};