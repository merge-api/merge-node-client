/**
 * This file was auto-generated by Fern from our API Definition.
 */

import { mockServerPool } from "../../mock-server/MockServerPool";
import { MergeClient } from "../../../src/Client";

describe("Users", () => {
    test("list", async () => {
        const server = mockServerPool.createServer();
        const client = new MergeClient({ apiKey: "test", accountToken: "test", environment: server.baseUrl });

        const rawResponseBody = {
            next: "cD0yMDIxLTAxLTA2KzAzJTNBMjQlM0E1My40MzQzMjYlMkIwMCUzQTAw",
            previous: "cj1sZXdwd2VycWVtY29zZnNkc2NzUWxNMEUxTXk0ME16UXpNallsTWtJ",
            results: [
                {
                    id: "83902e75-4362-4803-b76c-a7d6be292cbd",
                    remote_id: "2039349",
                    created_at: "2021-09-15T00:00:00Z",
                    modified_at: "2021-10-16T00:00:00Z",
                    name: "Gil Feig",
                    email_address: "hello@merge.dev",
                    is_me: true,
                    remote_was_deleted: true,
                    field_mappings: {
                        organization_defined_targets: { custom_key: "custom_value" },
                        linked_account_defined_targets: { custom_key: "custom_value" },
                    },
                    remote_data: [{ path: "/users", data: ["Varies by platform"] }],
                },
            ],
        };
        server
            .mockEndpoint()
            .get("/filestorage/v1/users")
            .respondWith()
            .statusCode(200)
            .jsonBody(rawResponseBody)
            .build();

        const response = await client.filestorage.users.list();
        expect(response).toEqual({
            next: "cD0yMDIxLTAxLTA2KzAzJTNBMjQlM0E1My40MzQzMjYlMkIwMCUzQTAw",
            previous: "cj1sZXdwd2VycWVtY29zZnNkc2NzUWxNMEUxTXk0ME16UXpNallsTWtJ",
            results: [
                {
                    id: "83902e75-4362-4803-b76c-a7d6be292cbd",
                    remoteId: "2039349",
                    createdAt: new Date("2021-09-15T00:00:00.000Z"),
                    modifiedAt: new Date("2021-10-16T00:00:00.000Z"),
                    name: "Gil Feig",
                    emailAddress: "hello@merge.dev",
                    isMe: true,
                    remoteWasDeleted: true,
                    fieldMappings: {
                        organization_defined_targets: {
                            custom_key: "custom_value",
                        },
                        linked_account_defined_targets: {
                            custom_key: "custom_value",
                        },
                    },
                    remoteData: [
                        {
                            path: "/users",
                            data: ["Varies by platform"],
                        },
                    ],
                },
            ],
        });
    });

    test("retrieve", async () => {
        const server = mockServerPool.createServer();
        const client = new MergeClient({ apiKey: "test", accountToken: "test", environment: server.baseUrl });

        const rawResponseBody = {
            id: "83902e75-4362-4803-b76c-a7d6be292cbd",
            remote_id: "2039349",
            created_at: "2021-09-15T00:00:00Z",
            modified_at: "2021-10-16T00:00:00Z",
            name: "Gil Feig",
            email_address: "hello@merge.dev",
            is_me: true,
            remote_was_deleted: true,
            field_mappings: {
                organization_defined_targets: { custom_key: "custom_value" },
                linked_account_defined_targets: { custom_key: "custom_value" },
            },
            remote_data: [{ path: "/users", data: ["Varies by platform"] }],
        };
        server
            .mockEndpoint()
            .get("/filestorage/v1/users/id")
            .respondWith()
            .statusCode(200)
            .jsonBody(rawResponseBody)
            .build();

        const response = await client.filestorage.users.retrieve("id");
        expect(response).toEqual({
            id: "83902e75-4362-4803-b76c-a7d6be292cbd",
            remoteId: "2039349",
            createdAt: new Date("2021-09-15T00:00:00.000Z"),
            modifiedAt: new Date("2021-10-16T00:00:00.000Z"),
            name: "Gil Feig",
            emailAddress: "hello@merge.dev",
            isMe: true,
            remoteWasDeleted: true,
            fieldMappings: {
                organization_defined_targets: {
                    custom_key: "custom_value",
                },
                linked_account_defined_targets: {
                    custom_key: "custom_value",
                },
            },
            remoteData: [
                {
                    path: "/users",
                    data: ["Varies by platform"],
                },
            ],
        });
    });
});
