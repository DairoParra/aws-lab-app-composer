const AWS = require("aws-sdk");

const dynamo = new AWS.DynamoDB.DocumentClient();

exports.handler = async () => {
    const headers = {
        "Content-Type": "application/json",
    };

    let body;
    let statusCode = 200;

    try {
        const data = await dynamo
            .scan({ TableName: process.env.DATABASE_TABLE_NAME })
            .promise();
        body = data.Items;
    } catch (err) {
        statusCode = 400;
        body = err.message;
    } finally {
        body = JSON.stringify(body);
    }

    return {
        statusCode,
        body,
        headers,
    };
};
