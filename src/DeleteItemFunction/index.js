const AWS = require("aws-sdk");

const dynamo = new AWS.DynamoDB.DocumentClient();

exports.handler = async (event) => {
    const headers = {
        "Content-Type": "application/json",
    };

    try {
        const itemId = event.pathParameters.id;

        await dynamo
            .delete({
                TableName: process.env.DATABASE_TABLE_NAME,
                Key: {
                    id: itemId,
                },
            })
            .promise();

        return {
            statusCode: 200,
            body: JSON.stringify(`Deleted item ${itemId}`),
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
