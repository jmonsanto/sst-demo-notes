import * as uuid from "uuid";
import handler from "../util/handler";
import dynamoDb from "../util/dynamodb";

export const main = handler(async (event) => {
    // Request that body is passed in as a JSON encoded string in 'event.body'
    const data = JSON.parse(event.body);

    const params = {
        TableName: process.env.TABLE_NAME,
        Item: {
            // Record attributes to be saved
            userId: "123", // ID of the author
            noteId: uuid.v1(), // Auto-generate unique uuid
            content: data.content, // Parsed from request body
            attachment: data.attachment, // Parsed from request body
            createdAt: Date.now(), // Current UNIX timestamp
        },
    };

    await dynamoDb.put(params);

    return params.Item;
});