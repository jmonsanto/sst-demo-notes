import { Bucket, Table } from "@serverless-stack/resources";

export function StorageStack({ stack, app }) {
    // Create S3 bucket for file uploads
    const bucket = new Bucket(stack, "Uploads");

    // Create the DynamoDB Table
    const table = new Table(stack, "Notes", {
        fields: {
            userId: "string",
            noteId: "string"
        },
        primaryIndex: { partitionKey: "userId", sortKey: "noteId" }
    });

    return {
        table,
        bucket
    };
}