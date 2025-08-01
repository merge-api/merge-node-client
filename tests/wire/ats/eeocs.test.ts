/**
 * This file was auto-generated by Fern from our API Definition.
 */

import { mockServerPool } from "../../mock-server/MockServerPool";
import { MergeClient } from "../../../src/Client";

describe("Eeocs", () => {
    test("list", async () => {
        const server = mockServerPool.createServer();
        const client = new MergeClient({ apiKey: "test", accountToken: "test", environment: server.baseUrl });

        const rawResponseBody = {
            next: "cD0yMDIxLTAxLTA2KzAzJTNBMjQlM0E1My40MzQzMjYlMkIwMCUzQTAw",
            previous: "cj1sZXdwd2VycWVtY29zZnNkc2NzUWxNMEUxTXk0ME16UXpNallsTWtJ",
            results: [
                {
                    id: "f7dd7b4f-237e-4772-8bd4-3246384c6c58",
                    remote_id: "76",
                    created_at: "2021-09-15T00:00:00Z",
                    modified_at: "2021-10-16T00:00:00Z",
                    candidate: "candidate",
                    submitted_at: "2021-10-15T00:00:00Z",
                    race: "AMERICAN_INDIAN_OR_ALASKAN_NATIVE",
                    gender: "MALE",
                    veteran_status: "I_AM_NOT_A_PROTECTED_VETERAN",
                    disability_status: "YES_I_HAVE_A_DISABILITY_OR_PREVIOUSLY_HAD_A_DISABILITY",
                    remote_was_deleted: true,
                    field_mappings: {
                        organization_defined_targets: { custom_key: "custom_value" },
                        linked_account_defined_targets: { custom_key: "custom_value" },
                    },
                    remote_data: [{ path: "/eeoc", data: ["Varies by platform"] }],
                },
            ],
        };
        server.mockEndpoint().get("/ats/v1/eeocs").respondWith().statusCode(200).jsonBody(rawResponseBody).build();

        const response = await client.ats.eeocs.list();
        expect(response).toEqual({
            next: "cD0yMDIxLTAxLTA2KzAzJTNBMjQlM0E1My40MzQzMjYlMkIwMCUzQTAw",
            previous: "cj1sZXdwd2VycWVtY29zZnNkc2NzUWxNMEUxTXk0ME16UXpNallsTWtJ",
            results: [
                {
                    id: "f7dd7b4f-237e-4772-8bd4-3246384c6c58",
                    remoteId: "76",
                    createdAt: new Date("2021-09-15T00:00:00.000Z"),
                    modifiedAt: new Date("2021-10-16T00:00:00.000Z"),
                    candidate: "candidate",
                    submittedAt: new Date("2021-10-15T00:00:00.000Z"),
                    race: "AMERICAN_INDIAN_OR_ALASKAN_NATIVE",
                    gender: "MALE",
                    veteranStatus: "I_AM_NOT_A_PROTECTED_VETERAN",
                    disabilityStatus: "YES_I_HAVE_A_DISABILITY_OR_PREVIOUSLY_HAD_A_DISABILITY",
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
                            path: "/eeoc",
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
            id: "f7dd7b4f-237e-4772-8bd4-3246384c6c58",
            remote_id: "76",
            created_at: "2021-09-15T00:00:00Z",
            modified_at: "2021-10-16T00:00:00Z",
            candidate: "candidate",
            submitted_at: "2021-10-15T00:00:00Z",
            race: "AMERICAN_INDIAN_OR_ALASKAN_NATIVE",
            gender: "MALE",
            veteran_status: "I_AM_NOT_A_PROTECTED_VETERAN",
            disability_status: "YES_I_HAVE_A_DISABILITY_OR_PREVIOUSLY_HAD_A_DISABILITY",
            remote_was_deleted: true,
            field_mappings: {
                organization_defined_targets: { custom_key: "custom_value" },
                linked_account_defined_targets: { custom_key: "custom_value" },
            },
            remote_data: [{ path: "/eeoc", data: ["Varies by platform"] }],
        };
        server.mockEndpoint().get("/ats/v1/eeocs/id").respondWith().statusCode(200).jsonBody(rawResponseBody).build();

        const response = await client.ats.eeocs.retrieve("id");
        expect(response).toEqual({
            id: "f7dd7b4f-237e-4772-8bd4-3246384c6c58",
            remoteId: "76",
            createdAt: new Date("2021-09-15T00:00:00.000Z"),
            modifiedAt: new Date("2021-10-16T00:00:00.000Z"),
            candidate: "candidate",
            submittedAt: new Date("2021-10-15T00:00:00.000Z"),
            race: "AMERICAN_INDIAN_OR_ALASKAN_NATIVE",
            gender: "MALE",
            veteranStatus: "I_AM_NOT_A_PROTECTED_VETERAN",
            disabilityStatus: "YES_I_HAVE_A_DISABILITY_OR_PREVIOUSLY_HAD_A_DISABILITY",
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
                    path: "/eeoc",
                    data: ["Varies by platform"],
                },
            ],
        });
    });
});
