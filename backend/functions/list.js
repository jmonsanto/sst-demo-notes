import handler from "../util/handler";
import dynamoDb from "../util/dynamodb";

export const main = handler(async (event) => {
    const params = {
        TableName: process.env.TABLE_NAME,
        // 'KeyConditionExpression' defines the condition for the query
        // - 'userId = :userId': only return items with matching 'userId'
        //   partition key
        KeyConditionExpression: "userId = :userId",
        ExpressionAttributeValues: {
            ":userId": "123",
        }
    };

    const result = await dynamoDb.query(params);

    return result.Items;
});