/**
 * This file was auto-generated by Fern from our API Definition.
 */

import { mockServerPool } from "../../mock-server/MockServerPool";
import { MergeClient } from "../../../src/Client";

describe("AccountingPeriods", () => {
    test("list", async () => {
        const server = mockServerPool.createServer();
        const client = new MergeClient({ apiKey: "test", accountToken: "test", environment: server.baseUrl });

        const rawResponseBody = {
            next: "cD0yMDIxLTAxLTA2KzAzJTNBMjQlM0E1My40MzQzMjYlMkIwMCUzQTAw",
            previous: "cj1sZXdwd2VycWVtY29zZnNkc2NzUWxNMEUxTXk0ME16UXpNallsTWtJ",
            results: [
                {
                    id: "3015f7b1-4d01-460d-bfab-02a52d16cbd0",
                    remote_id: "2804580",
                    created_at: "2021-09-15T00:00:00Z",
                    modified_at: "2021-10-16T00:00:00Z",
                    name: "April 2020 Financials",
                    status: "ACTIVE",
                    start_date: "2020-03-31T00:00:00Z",
                    end_date: "2020-05-01T00:00:00Z",
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
            .get("/accounting/v1/accounting-periods")
            .respondWith()
            .statusCode(200)
            .jsonBody(rawResponseBody)
            .build();

        const response = await client.accounting.accountingPeriods.list();
        expect(response).toEqual({
            next: "cD0yMDIxLTAxLTA2KzAzJTNBMjQlM0E1My40MzQzMjYlMkIwMCUzQTAw",
            previous: "cj1sZXdwd2VycWVtY29zZnNkc2NzUWxNMEUxTXk0ME16UXpNallsTWtJ",
            results: [
                {
                    id: "3015f7b1-4d01-460d-bfab-02a52d16cbd0",
                    remoteId: "2804580",
                    createdAt: new Date("2021-09-15T00:00:00.000Z"),
                    modifiedAt: new Date("2021-10-16T00:00:00.000Z"),
                    name: "April 2020 Financials",
                    status: "ACTIVE",
                    startDate: new Date("2020-03-31T00:00:00.000Z"),
                    endDate: new Date("2020-05-01T00:00:00.000Z"),
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
            id: "3015f7b1-4d01-460d-bfab-02a52d16cbd0",
            remote_id: "2804580",
            created_at: "2021-09-15T00:00:00Z",
            modified_at: "2021-10-16T00:00:00Z",
            name: "April 2020 Financials",
            status: "ACTIVE",
            start_date: "2020-03-31T00:00:00Z",
            end_date: "2020-05-01T00:00:00Z",
            field_mappings: {
                organization_defined_targets: { custom_key: "custom_value" },
                linked_account_defined_targets: { custom_key: "custom_value" },
            },
            remote_data: [{ path: "/actions", data: ["Varies by platform"] }],
        };
        server
            .mockEndpoint()
            .get("/accounting/v1/accounting-periods/id")
            .respondWith()
            .statusCode(200)
            .jsonBody(rawResponseBody)
            .build();

        const response = await client.accounting.accountingPeriods.retrieve("id");
        expect(response).toEqual({
            id: "3015f7b1-4d01-460d-bfab-02a52d16cbd0",
            remoteId: "2804580",
            createdAt: new Date("2021-09-15T00:00:00.000Z"),
            modifiedAt: new Date("2021-10-16T00:00:00.000Z"),
            name: "April 2020 Financials",
            status: "ACTIVE",
            startDate: new Date("2020-03-31T00:00:00.000Z"),
            endDate: new Date("2020-05-01T00:00:00.000Z"),
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
