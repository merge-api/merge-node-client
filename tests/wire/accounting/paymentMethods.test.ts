/**
 * This file was auto-generated by Fern from our API Definition.
 */

import { mockServerPool } from "../../mock-server/MockServerPool";
import { MergeClient } from "../../../src/Client";

describe("PaymentMethods", () => {
    test("list", async () => {
        const server = mockServerPool.createServer();
        const client = new MergeClient({ apiKey: "test", accountToken: "test", environment: server.baseUrl });

        const rawResponseBody = {
            next: "cD0yMDIxLTAxLTA2KzAzJTNBMjQlM0E1My40MzQzMjYlMkIwMCUzQTAw",
            previous: "cj1sZXdwd2VycWVtY29zZnNkc2NzUWxNMEUxTXk0ME16UXpNallsTWtJ",
            results: [
                {
                    id: "ecbe05ac-62a3-46c5-ab31-4b478b37d1b4",
                    remote_id: "088899",
                    created_at: "2021-09-15T00:00:00Z",
                    modified_at: "2021-10-16T00:00:00Z",
                    method_type: "CREDIT_CARD",
                    name: "John Smith's Credit Card",
                    is_active: true,
                    remote_updated_at: "2021-09-15T00:00:00Z",
                    field_mappings: {
                        organization_defined_targets: { custom_key: "custom_value" },
                        linked_account_defined_targets: { custom_key: "custom_value" },
                    },
                    remote_data: [{ path: "/actions", data: ["Varies by platform"] }],
                },
            ],
        };
        server
            .mockEndpoint()
            .get("/accounting/v1/payment-methods")
            .respondWith()
            .statusCode(200)
            .jsonBody(rawResponseBody)
            .build();

        const response = await client.accounting.paymentMethods.list();
        expect(response).toEqual({
            next: "cD0yMDIxLTAxLTA2KzAzJTNBMjQlM0E1My40MzQzMjYlMkIwMCUzQTAw",
            previous: "cj1sZXdwd2VycWVtY29zZnNkc2NzUWxNMEUxTXk0ME16UXpNallsTWtJ",
            results: [
                {
                    id: "ecbe05ac-62a3-46c5-ab31-4b478b37d1b4",
                    remoteId: "088899",
                    createdAt: new Date("2021-09-15T00:00:00.000Z"),
                    modifiedAt: new Date("2021-10-16T00:00:00.000Z"),
                    methodType: "CREDIT_CARD",
                    name: "John Smith's Credit Card",
                    isActive: true,
                    remoteUpdatedAt: new Date("2021-09-15T00:00:00.000Z"),
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
                            path: "/actions",
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
            id: "ecbe05ac-62a3-46c5-ab31-4b478b37d1b4",
            remote_id: "088899",
            created_at: "2021-09-15T00:00:00Z",
            modified_at: "2021-10-16T00:00:00Z",
            method_type: "CREDIT_CARD",
            name: "John Smith's Credit Card",
            is_active: true,
            remote_updated_at: "2021-09-15T00:00:00Z",
            field_mappings: {
                organization_defined_targets: { custom_key: "custom_value" },
                linked_account_defined_targets: { custom_key: "custom_value" },
            },
            remote_data: [{ path: "/actions", data: ["Varies by platform"] }],
        };
        server
            .mockEndpoint()
            .get("/accounting/v1/payment-methods/id")
            .respondWith()
            .statusCode(200)
            .jsonBody(rawResponseBody)
            .build();

        const response = await client.accounting.paymentMethods.retrieve("id");
        expect(response).toEqual({
            id: "ecbe05ac-62a3-46c5-ab31-4b478b37d1b4",
            remoteId: "088899",
            createdAt: new Date("2021-09-15T00:00:00.000Z"),
            modifiedAt: new Date("2021-10-16T00:00:00.000Z"),
            methodType: "CREDIT_CARD",
            name: "John Smith's Credit Card",
            isActive: true,
            remoteUpdatedAt: new Date("2021-09-15T00:00:00.000Z"),
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
                    path: "/actions",
                    data: ["Varies by platform"],
                },
            ],
        });
    });
});
