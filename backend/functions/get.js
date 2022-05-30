import handler from "../util/handler";
import dynamoDb from "../util/dynamodb";

export const main = handler(async (event) => {
    const params = {
        TableName: process.env.TABLE_NAME,
        // Key defines the partition key and sort key of the item to be retrieved.
        Key: {
            userId: "123", // Author ID
            noteId: event.pathParameters.id, // Note ID taken from the path
        }
    }

    const result = await dynamoDb.get(params);
    if (!result.Item) {
        throw new Error("Item not found.");
    }

    return result.Item;
});