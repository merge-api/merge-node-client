/**
 * This file was auto-generated by Fern from our API Definition.
 */

import { mockServerPool } from "../../mock-server/MockServerPool";
import { MergeClient } from "../../../src/Client";

describe("Employees", () => {
    test("list", async () => {
        const server = mockServerPool.createServer();
        const client = new MergeClient({ apiKey: "test", accountToken: "test", environment: server.baseUrl });

        const rawResponseBody = {
            next: "cD0yMDIxLTAxLTA2KzAzJTNBMjQlM0E1My40MzQzMjYlMkIwMCUzQTAw",
            previous: "cj1sZXdwd2VycWVtY29zZnNkc2NzUWxNMEUxTXk0ME16UXpNallsTWtJ",
            results: [
                {
                    id: "c640b80b-fac9-409f-aa19-1f9221aec445",
                    remote_id: "11167",
                    created_at: "2021-09-15T00:00:00Z",
                    modified_at: "2021-10-16T00:00:00Z",
                    first_name: "John",
                    last_name: "Smith",
                    is_contractor: true,
                    employee_number: "325462",
                    email_address: "johnsmith@merge.dev",
                    company: "company",
                    status: "ACTIVE",
                    remote_was_deleted: true,
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
            .get("/accounting/v1/employees")
            .respondWith()
            .statusCode(200)
            .jsonBody(rawResponseBody)
            .build();

        const response = await client.accounting.employees.list();
        expect(response).toEqual({
            next: "cD0yMDIxLTAxLTA2KzAzJTNBMjQlM0E1My40MzQzMjYlMkIwMCUzQTAw",
            previous: "cj1sZXdwd2VycWVtY29zZnNkc2NzUWxNMEUxTXk0ME16UXpNallsTWtJ",
            results: [
                {
                    id: "c640b80b-fac9-409f-aa19-1f9221aec445",
                    remoteId: "11167",
                    createdAt: new Date("2021-09-15T00:00:00.000Z"),
                    modifiedAt: new Date("2021-10-16T00:00:00.000Z"),
                    firstName: "John",
                    lastName: "Smith",
                    isContractor: true,
                    employeeNumber: "325462",
                    emailAddress: "johnsmith@merge.dev",
                    company: "company",
                    status: "ACTIVE",
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
            id: "c640b80b-fac9-409f-aa19-1f9221aec445",
            remote_id: "11167",
            created_at: "2021-09-15T00:00:00Z",
            modified_at: "2021-10-16T00:00:00Z",
            first_name: "John",
            last_name: "Smith",
            is_contractor: true,
            employee_number: "325462",
            email_address: "johnsmith@merge.dev",
            company: "company",
            status: "ACTIVE",
            remote_was_deleted: true,
            field_mappings: {
                organization_defined_targets: { custom_key: "custom_value" },
                linked_account_defined_targets: { custom_key: "custom_value" },
            },
            remote_data: [{ path: "/actions", data: ["Varies by platform"] }],
        };
        server
            .mockEndpoint()
            .get("/accounting/v1/employees/id")
            .respondWith()
            .statusCode(200)
            .jsonBody(rawResponseBody)
            .build();

        const response = await client.accounting.employees.retrieve("id");
        expect(response).toEqual({
            id: "c640b80b-fac9-409f-aa19-1f9221aec445",
            remoteId: "11167",
            createdAt: new Date("2021-09-15T00:00:00.000Z"),
            modifiedAt: new Date("2021-10-16T00:00:00.000Z"),
            firstName: "John",
            lastName: "Smith",
            isContractor: true,
            employeeNumber: "325462",
            emailAddress: "johnsmith@merge.dev",
            company: "company",
            status: "ACTIVE",
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
                    path: "/actions",
                    data: ["Varies by platform"],
                },
            ],
        });
    });
});
