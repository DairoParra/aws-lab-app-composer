const AWS = require("aws-sdk");

const dynamo = new AWS.DynamoDB.DocumentClient();

exports.handler = async (event) => {
    const headers = {
        "Content-Type": "application/json",
    };

    try {
        let requestJSON = JSON.parse(event.body);

        await dynamo
            .put({
                TableName: process.env.DATABASE_TABLE_NAME,
                Item: requestJSON,
            })
            .promise();

        return {
            statusCode: 200,
            body: JSON.stringify(`Created item with id ${requestJSON.id}`),
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
