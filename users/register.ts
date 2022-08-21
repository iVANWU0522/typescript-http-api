import { Handler } from 'aws-lambda';
import { SNSClient, PublishCommand } from "@aws-sdk/client-sns";
import * as uuid from 'uuid';

const client = new SNSClient({
    region: 'ap-southeast-2',
});

export const register: Handler = async (event: any) => {
    console.log("Received event: " + JSON.stringify(event));
    const data = JSON.parse(event.body);
    if (typeof data.email !== 'string' || typeof data.name !== 'string') {
        console.error('Validation Failed');
        return {
            statusCode: 400,
            body: JSON.stringify({
                message: 'Couldn\'t create the user item.',
            }),
        };
    }

    const params = {
        Message: JSON.stringify({
            id: uuid.v1(),
            email: data.email,
            name: data.name,
        }),
        TopicArn: process.env.USER_SNS_ARN,
    }

    await client.send(new PublishCommand(params));
};