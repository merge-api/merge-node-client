/**
 * This file was auto-generated by Fern from our API Definition.
 */

import { mockServerPool } from "../../mock-server/MockServerPool";
import { MergeClient } from "../../../src/Client";

describe("AsyncTasks", () => {
    test("retrieve", async () => {
        const server = mockServerPool.createServer();
        const client = new MergeClient({ apiKey: "test", accountToken: "test", environment: server.baseUrl });

        const rawResponseBody = {
            status: "QUEUED",
            result: {
                status_code: 201,
                response: {
                    model: {
                        id: "9871b4a9-f5d2-4f3b-a66b-dfedbed42c46",
                        remote_id: "990110",
                        created_at: "2021-09-15T00:00:00Z",
                        modified_at: "2021-10-16T00:00:00Z",
                        integration_params: { unique_integration_field: "unique_integration_field_value" },
                        linked_account_params: { unique_linked_account_field: "unique_linked_account_field_value" },
                        field_mappings: {
                            organization_defined_targets: { custom_key: "custom_value" },
                            linked_account_defined_targets: { custom_key: "custom_value" },
                        },
                        type: "ACCOUNTS_RECEIVABLE",
                        contact: "022a2bef-57e5-4def-8ed2-7c41bd9a5ed8",
                        number: "AIQ12546",
                        issue_date: "2020-03-31T00:00:00Z",
                        due_date: "2020-04-15T00:00:00Z",
                        memo: "Weekly Payment",
                        company: "595c8f97-2ac4-45b7-b000-41bdf43240b5",
                        employee: "7442f0d5-722d-45bd-b807-6e38489d37fe",
                        paid_on_date: "2020-04-01T00:00:00Z",
                        currency: "USD",
                        exchange_rate: "2.9",
                        status: "DRAFT",
                        total_discount: 0,
                        sub_total: 100,
                        total_tax_amount: 5,
                        total_amount: 105,
                        balance: 105,
                        inclusive_of_tax: false,
                        remote_updated_at: "2020-04-01T00:00:00Z",
                        tracking_categories: [
                            "7dc5ca17-d311-44cd-9ce0-333080367a18",
                            "6aa0700c-48e1-4c4a-8162-02e6a582df05",
                            "8c933d61-8f5b-4360-ac0c-c9dc87bee763",
                        ],
                        purchase_orders: [
                            "e7378d8f-3992-4c2a-8417-ebdc4f2bfeb7",
                            "dd70ca2f-b120-46fa-889a-9604037f45fd",
                            "889b281d-739c-4759-95b8-0aedb3947131",
                        ],
                        accounting_period: "7dc5ca17-d311-44cd-9ce0-333080367a18",
                        payments: ["b26fd49a-cbae-470a-a8f8-bcbc119e0390"],
                        applied_payments: ["9017594e-dc33-4113-a5d2-b0f928e34fdd"],
                        remote_data: [{ path: "/actions", data: ["Varies by platform"] }],
                    },
                },
            },
        };
        server
            .mockEndpoint()
            .get("/accounting/v1/async-tasks/id")
            .respondWith()
            .statusCode(200)
            .jsonBody(rawResponseBody)
            .build();

        const response = await client.accounting.asyncTasks.retrieve("id");
        expect(response).toEqual({
            status: "QUEUED",
            result: {
                statusCode: 201,
                response: {
                    model: {
                        id: "9871b4a9-f5d2-4f3b-a66b-dfedbed42c46",
                        remote_id: "990110",
                        created_at: "2021-09-15T00:00:00Z",
                        modified_at: "2021-10-16T00:00:00Z",
                        integration_params: {
                            unique_integration_field: "unique_integration_field_value",
                        },
                        linked_account_params: {
                            unique_linked_account_field: "unique_linked_account_field_value",
                        },
                        field_mappings: {
                            organization_defined_targets: {
                                custom_key: "custom_value",
                            },
                            linked_account_defined_targets: {
                                custom_key: "custom_value",
                            },
                        },
                        type: "ACCOUNTS_RECEIVABLE",
                        contact: "022a2bef-57e5-4def-8ed2-7c41bd9a5ed8",
                        number: "AIQ12546",
                        issue_date: "2020-03-31T00:00:00Z",
                        due_date: "2020-04-15T00:00:00Z",
                        memo: "Weekly Payment",
                        company: "595c8f97-2ac4-45b7-b000-41bdf43240b5",
                        employee: "7442f0d5-722d-45bd-b807-6e38489d37fe",
                        paid_on_date: "2020-04-01T00:00:00Z",
                        currency: "USD",
                        exchange_rate: "2.9",
                        status: "DRAFT",
                        total_discount: 0,
                        sub_total: 100,
                        total_tax_amount: 5,
                        total_amount: 105,
                        balance: 105,
                        inclusive_of_tax: false,
                        remote_updated_at: "2020-04-01T00:00:00Z",
                        tracking_categories: [
                            "7dc5ca17-d311-44cd-9ce0-333080367a18",
                            "6aa0700c-48e1-4c4a-8162-02e6a582df05",
                            "8c933d61-8f5b-4360-ac0c-c9dc87bee763",
                        ],
                        purchase_orders: [
                            "e7378d8f-3992-4c2a-8417-ebdc4f2bfeb7",
                            "dd70ca2f-b120-46fa-889a-9604037f45fd",
                            "889b281d-739c-4759-95b8-0aedb3947131",
                        ],
                        accounting_period: "7dc5ca17-d311-44cd-9ce0-333080367a18",
                        payments: ["b26fd49a-cbae-470a-a8f8-bcbc119e0390"],
                        applied_payments: ["9017594e-dc33-4113-a5d2-b0f928e34fdd"],
                        remote_data: [
                            {
                                path: "/actions",
                                data: ["Varies by platform"],
                            },
                        ],
                    },
                },
            },
        });
    });
});
