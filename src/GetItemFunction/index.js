const AWS = require("aws-sdk");

const dynamo = new AWS.DynamoDB.DocumentClient();

exports.handler = async (event) => {
    const headers = {
        "Content-Type": "application/json",
    };

    try {
        const data = await dynamo
            .get({
                TableName: process.env.DATABASE_TABLE_NAME,
                Key: {
                    id: event.pathParameters.id,
                },
            })
            .promise();

        return {
            statusCode: 200,
            body: JSON.stringify(data.Item),
            headers,
        };
    } catch (err) {
        return {
            statusCode: 400,
            body: JSON.stringify(err.message),
            headers,
        };
    }
};
