/**
 * This file was auto-generated by Fern from our API Definition.
 */

import { mockServerPool } from "../../mock-server/MockServerPool";
import { MergeClient } from "../../../src/Client";

describe("JobPostings", () => {
    test("list", async () => {
        const server = mockServerPool.createServer();
        const client = new MergeClient({ apiKey: "test", accountToken: "test", environment: server.baseUrl });

        const rawResponseBody = {
            next: "cD0yMDIxLTAxLTA2KzAzJTNBMjQlM0E1My40MzQzMjYlMkIwMCUzQTAw",
            previous: "cj1sZXdwd2VycWVtY29zZnNkc2NzUWxNMEUxTXk0ME16UXpNallsTWtJ",
            results: [
                {
                    id: "156a2bef-57e5-4def-8ed2-7c41bd9a554t",
                    remote_id: "1341324",
                    created_at: "2021-09-15T00:00:00Z",
                    modified_at: "2021-10-16T00:00:00Z",
                    title: "Platform - NYC",
                    job_posting_urls: [
                        {
                            created_at: "2021-09-15T00:00:00Z",
                            modified_at: "2021-10-16T00:00:00Z",
                            value: "https://merge.dev/careers",
                            url_type: "JOB_POSTING",
                        },
                    ],
                    job: "job",
                    status: "PUBLISHED",
                    content: "Apply at https://merge.dev/careers",
                    remote_created_at: "2021-10-15T00:00:00Z",
                    remote_updated_at: "2021-10-16T00:00:00Z",
                    is_internal: true,
                    remote_was_deleted: true,
                    field_mappings: {
                        organization_defined_targets: { custom_key: "custom_value" },
                        linked_account_defined_targets: { custom_key: "custom_value" },
                    },
                    remote_data: [{ path: "/positions", data: ["Varies by platform"] }],
                },
            ],
        };
        server
            .mockEndpoint()
            .get("/ats/v1/job-postings")
            .respondWith()
            .statusCode(200)
            .jsonBody(rawResponseBody)
            .build();

        const response = await client.ats.jobPostings.list();
        expect(response).toEqual({
            next: "cD0yMDIxLTAxLTA2KzAzJTNBMjQlM0E1My40MzQzMjYlMkIwMCUzQTAw",
            previous: "cj1sZXdwd2VycWVtY29zZnNkc2NzUWxNMEUxTXk0ME16UXpNallsTWtJ",
            results: [
                {
                    id: "156a2bef-57e5-4def-8ed2-7c41bd9a554t",
                    remoteId: "1341324",
                    createdAt: new Date("2021-09-15T00:00:00.000Z"),
                    modifiedAt: new Date("2021-10-16T00:00:00.000Z"),
                    title: "Platform - NYC",
                    jobPostingUrls: [
                        {
                            createdAt: new Date("2021-09-15T00:00:00.000Z"),
                            modifiedAt: new Date("2021-10-16T00:00:00.000Z"),
                            value: "https://merge.dev/careers",
                            urlType: "JOB_POSTING",
                        },
                    ],
                    job: "job",
                    status: "PUBLISHED",
                    content: "Apply at https://merge.dev/careers",
                    remoteCreatedAt: new Date("2021-10-15T00:00:00.000Z"),
                    remoteUpdatedAt: new Date("2021-10-16T00:00:00.000Z"),
                    isInternal: true,
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
                            path: "/positions",
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
            id: "156a2bef-57e5-4def-8ed2-7c41bd9a554t",
            remote_id: "1341324",
            created_at: "2021-09-15T00:00:00Z",
            modified_at: "2021-10-16T00:00:00Z",
            title: "Platform - NYC",
            job_posting_urls: [
                {
                    created_at: "2021-09-15T00:00:00Z",
                    modified_at: "2021-10-16T00:00:00Z",
                    value: "https://merge.dev/careers",
                    url_type: "JOB_POSTING",
                    remote_was_deleted: true,
                },
            ],
            job: "job",
            status: "PUBLISHED",
            content: "Apply at https://merge.dev/careers",
            remote_created_at: "2021-10-15T00:00:00Z",
            remote_updated_at: "2021-10-16T00:00:00Z",
            is_internal: true,
            remote_was_deleted: true,
            field_mappings: {
                organization_defined_targets: { custom_key: "custom_value" },
                linked_account_defined_targets: { custom_key: "custom_value" },
            },
            remote_data: [{ path: "/positions", data: ["Varies by platform"] }],
        };
        server
            .mockEndpoint()
            .get("/ats/v1/job-postings/id")
            .respondWith()
            .statusCode(200)
            .jsonBody(rawResponseBody)
            .build();

        const response = await client.ats.jobPostings.retrieve("id");
        expect(response).toEqual({
            id: "156a2bef-57e5-4def-8ed2-7c41bd9a554t",
            remoteId: "1341324",
            createdAt: new Date("2021-09-15T00:00:00.000Z"),
            modifiedAt: new Date("2021-10-16T00:00:00.000Z"),
            title: "Platform - NYC",
            jobPostingUrls: [
                {
                    createdAt: new Date("2021-09-15T00:00:00.000Z"),
                    modifiedAt: new Date("2021-10-16T00:00:00.000Z"),
                    value: "https://merge.dev/careers",
                    urlType: "JOB_POSTING",
                    remoteWasDeleted: true,
                },
            ],
            job: "job",
            status: "PUBLISHED",
            content: "Apply at https://merge.dev/careers",
            remoteCreatedAt: new Date("2021-10-15T00:00:00.000Z"),
            remoteUpdatedAt: new Date("2021-10-16T00:00:00.000Z"),
            isInternal: true,
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
                    path: "/positions",
                    data: ["Varies by platform"],
                },
            ],
        });
    });
});
