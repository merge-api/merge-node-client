/**
 * This file was auto-generated by Fern from our API Definition.
 */

import { mockServerPool } from "../../mock-server/MockServerPool";
import { MergeClient } from "../../../src/Client";

describe("Attachments", () => {
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
                    file_name: "Candidate Resume",
                    file_url: "http://alturl.com/p749b",
                    candidate: "2872ba14-4084-492b-be96-e5eee6fc33ef",
                    attachment_type: "RESUME",
                    remote_was_deleted: true,
                    field_mappings: {
                        organization_defined_targets: { custom_key: "custom_value" },
                        linked_account_defined_targets: { custom_key: "custom_value" },
                    },
                    remote_data: [{ path: "/attachments", data: ["Varies by platform"] }],
                },
            ],
        };
        server
            .mockEndpoint()
            .get("/ats/v1/attachments")
            .respondWith()
            .statusCode(200)
            .jsonBody(rawResponseBody)
            .build();

        const response = await client.ats.attachments.list();
        expect(response).toEqual({
            next: "cD0yMDIxLTAxLTA2KzAzJTNBMjQlM0E1My40MzQzMjYlMkIwMCUzQTAw",
            previous: "cj1sZXdwd2VycWVtY29zZnNkc2NzUWxNMEUxTXk0ME16UXpNallsTWtJ",
            results: [
                {
                    id: "c640b80b-fac9-409f-aa19-1f9221aec445",
                    remoteId: "11167",
                    createdAt: new Date("2021-09-15T00:00:00.000Z"),
                    modifiedAt: new Date("2021-10-16T00:00:00.000Z"),
                    fileName: "Candidate Resume",
                    fileUrl: "http://alturl.com/p749b",
                    candidate: "2872ba14-4084-492b-be96-e5eee6fc33ef",
                    attachmentType: "RESUME",
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
                            path: "/attachments",
                            data: ["Varies by platform"],
                        },
                    ],
                },
            ],
        });
    });

    test("create", async () => {
        const server = mockServerPool.createServer();
        const client = new MergeClient({ apiKey: "test", accountToken: "test", environment: server.baseUrl });
        const rawRequestBody = { model: {}, remote_user_id: "remote_user_id" };
        const rawResponseBody = {
            model: {
                id: "c640b80b-fac9-409f-aa19-1f9221aec445",
                remote_id: "11167",
                created_at: "2021-09-15T00:00:00Z",
                modified_at: "2021-10-16T00:00:00Z",
                file_name: "Candidate Resume",
                file_url: "http://alturl.com/p749b",
                candidate: "2872ba14-4084-492b-be96-e5eee6fc33ef",
                attachment_type: "RESUME",
                remote_was_deleted: true,
                field_mappings: {
                    organization_defined_targets: { custom_key: "custom_value" },
                    linked_account_defined_targets: { custom_key: "custom_value" },
                },
                remote_data: [{ path: "/attachments", data: ["Varies by platform"] }],
            },
            warnings: [
                {
                    source: { pointer: "pointer" },
                    title: "Unrecognized Field",
                    detail: "An unrecognized field, age, was passed in with request data.",
                    problem_type: "UNRECOGNIZED_FIELD",
                },
            ],
            errors: [
                {
                    source: { pointer: "pointer" },
                    title: "Missing Required Field",
                    detail: "custom_fields is a required field on model.",
                    problem_type: "MISSING_REQUIRED_FIELD",
                },
            ],
            logs: [
                {
                    log_id: "99433219-8017-4acd-bb3c-ceb23d663832",
                    dashboard_view: "https://app.merge.dev/logs/99433219-8017-4acd-bb3c-ceb23d663832",
                    log_summary: {
                        url: "www.exampleintegration.com/api/v1/exampleapi",
                        method: "POST",
                        status_code: 200,
                    },
                },
            ],
        };
        server
            .mockEndpoint()
            .post("/ats/v1/attachments")
            .jsonBody(rawRequestBody)
            .respondWith()
            .statusCode(200)
            .jsonBody(rawResponseBody)
            .build();

        const response = await client.ats.attachments.create({
            model: {},
            remoteUserId: "remote_user_id",
        });
        expect(response).toEqual({
            model: {
                id: "c640b80b-fac9-409f-aa19-1f9221aec445",
                remoteId: "11167",
                createdAt: new Date("2021-09-15T00:00:00.000Z"),
                modifiedAt: new Date("2021-10-16T00:00:00.000Z"),
                fileName: "Candidate Resume",
                fileUrl: "http://alturl.com/p749b",
                candidate: "2872ba14-4084-492b-be96-e5eee6fc33ef",
                attachmentType: "RESUME",
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
                        path: "/attachments",
                        data: ["Varies by platform"],
                    },
                ],
            },
            warnings: [
                {
                    source: {
                        pointer: "pointer",
                    },
                    title: "Unrecognized Field",
                    detail: "An unrecognized field, age, was passed in with request data.",
                    problemType: "UNRECOGNIZED_FIELD",
                },
            ],
            errors: [
                {
                    source: {
                        pointer: "pointer",
                    },
                    title: "Missing Required Field",
                    detail: "custom_fields is a required field on model.",
                    problemType: "MISSING_REQUIRED_FIELD",
                },
            ],
            logs: [
                {
                    logId: "99433219-8017-4acd-bb3c-ceb23d663832",
                    dashboardView: "https://app.merge.dev/logs/99433219-8017-4acd-bb3c-ceb23d663832",
                    logSummary: {
                        url: "www.exampleintegration.com/api/v1/exampleapi",
                        method: "POST",
                        statusCode: 200,
                    },
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
            file_name: "Candidate Resume",
            file_url: "http://alturl.com/p749b",
            candidate: "2872ba14-4084-492b-be96-e5eee6fc33ef",
            attachment_type: "RESUME",
            remote_was_deleted: true,
            field_mappings: {
                organization_defined_targets: { custom_key: "custom_value" },
                linked_account_defined_targets: { custom_key: "custom_value" },
            },
            remote_data: [{ path: "/attachments", data: ["Varies by platform"] }],
        };
        server
            .mockEndpoint()
            .get("/ats/v1/attachments/id")
            .respondWith()
            .statusCode(200)
            .jsonBody(rawResponseBody)
            .build();

        const response = await client.ats.attachments.retrieve("id");
        expect(response).toEqual({
            id: "c640b80b-fac9-409f-aa19-1f9221aec445",
            remoteId: "11167",
            createdAt: new Date("2021-09-15T00:00:00.000Z"),
            modifiedAt: new Date("2021-10-16T00:00:00.000Z"),
            fileName: "Candidate Resume",
            fileUrl: "http://alturl.com/p749b",
            candidate: "2872ba14-4084-492b-be96-e5eee6fc33ef",
            attachmentType: "RESUME",
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
                    path: "/attachments",
                    data: ["Varies by platform"],
                },
            ],
        });
    });

    test("metaPostRetrieve", async () => {
        const server = mockServerPool.createServer();
        const client = new MergeClient({ apiKey: "test", accountToken: "test", environment: server.baseUrl });

        const rawResponseBody = {
            request_schema: {
                type: "object",
                properties: {
                    model: {
                        type: "object",
                        required: [
                            "last_name",
                            "first_name",
                            "merge_categories",
                            "new_york_city_neighborhood",
                            "favorite_tv_shows",
                            "favorite_watch",
                        ],
                        properties: {
                            email_addresses: {
                                type: "array",
                                items: {
                                    type: "object",
                                    properties: {
                                        value: { type: "string", title: "value" },
                                        email_address_type: { type: "string", title: "email_address_type" },
                                        integration_params: {
                                            type: "object",
                                            title: "integration_params",
                                            properties: {},
                                        },
                                        linked_account_params: {
                                            type: "object",
                                            title: "linked_account_params",
                                            properties: {},
                                        },
                                    },
                                },
                                title: "email_addresses",
                                description: "Array of email_addresses objects",
                            },
                            urls: {
                                type: "array",
                                items: {
                                    type: "object",
                                    properties: {
                                        value: { type: "string", title: "value" },
                                        url_type: { type: "string", title: "url_type" },
                                        integration_params: {
                                            type: "object",
                                            title: "integration_params",
                                            properties: {},
                                        },
                                        linked_account_params: {
                                            type: "object",
                                            title: "linked_account_params",
                                            properties: {},
                                        },
                                    },
                                },
                                title: "urls",
                                description: "Array of urls objects",
                            },
                            first_name: { type: "string", title: "first_name", description: "The first name." },
                            last_name: { type: "string", title: "last_name", description: "The last name." },
                            phone_numbers: {
                                type: "array",
                                items: {
                                    type: "object",
                                    properties: {
                                        value: { type: "string", title: "value" },
                                        phone_number_type: { type: "string", title: "phone_number_type" },
                                        integration_params: {
                                            type: "object",
                                            title: "integration_params",
                                            properties: {},
                                        },
                                        linked_account_params: {
                                            type: "object",
                                            title: "linked_account_params",
                                            properties: {},
                                        },
                                    },
                                },
                                title: "phone_numbers",
                                description: "Array of phone_numbers objects",
                            },
                            tags: {
                                type: "array",
                                items: { type: "string", format: "uuid" },
                                title: "tags",
                                description: "Array of tags names",
                            },
                            attachments: {
                                type: "array",
                                items: {
                                    type: "object",
                                    properties: {
                                        id: { type: "string", title: "id" },
                                        file_url: { type: "string", title: "file_url" },
                                        file_name: { type: "string", title: "file_name" },
                                        attachment_type: { type: "string", title: "attachment_type" },
                                        integration_params: {
                                            type: "object",
                                            title: "integration_params",
                                            properties: {},
                                        },
                                        linked_account_params: {
                                            type: "object",
                                            title: "linked_account_params",
                                            properties: {},
                                        },
                                    },
                                },
                                title: "attachments",
                                description: "Array of attachments objects ",
                            },
                            merge_categories: {
                                type: "array",
                                categories: {
                                    type: "string",
                                    enum: [
                                        "HRIS",
                                        "ATS",
                                        "Accounting",
                                        "Ticketing",
                                        "File Storage",
                                        "CRM",
                                        "Marketing Automation",
                                    ],
                                    enum_information: [
                                        { value: "HRIS", description: "Merge HRIS Category" },
                                        { value: "ATS", description: "Merge ATS Category" },
                                        { value: "Accounting", description: "Merge Accounting Category" },
                                        { value: "Ticketing", description: "Merge Ticketing Category" },
                                        { value: "File Storage", description: "Merge File Storage Category" },
                                        { value: "CRM", description: "Merge CRM Category" },
                                        {
                                            value: "Marketing Automation",
                                            description: "Merge Marketing Automation Category",
                                        },
                                    ],
                                },
                                title: "Merge Categories",
                                description: "Array of Merge's Unified API Categories",
                            },
                            new_york_city_neighborhood: {
                                type: "string",
                                title: "Borough",
                                description: "One of the 5 Boroughs of New York City",
                            },
                            favorite_tv_shows: {
                                type: "array",
                                items: { type: "string", format: "uuid" },
                                title: "Favorite TV Shows",
                                description: "Array of TV Show objects on merge.tv_shows",
                            },
                            favorite_watch: {
                                type: "string",
                                title: "Favorite Watch",
                                description: "Favorite watch of all time",
                            },
                        },
                    },
                },
            },
            remote_field_classes: { key: "value" },
            status: { linked_account_status: "linked_account_status", can_make_request: true },
            has_conditional_params: true,
            has_required_linked_account_params: true,
        };
        server
            .mockEndpoint()
            .get("/ats/v1/attachments/meta/post")
            .respondWith()
            .statusCode(200)
            .jsonBody(rawResponseBody)
            .build();

        const response = await client.ats.attachments.metaPostRetrieve();
        expect(response).toEqual({
            requestSchema: {
                type: "object",
                properties: {
                    model: {
                        type: "object",
                        required: [
                            "last_name",
                            "first_name",
                            "merge_categories",
                            "new_york_city_neighborhood",
                            "favorite_tv_shows",
                            "favorite_watch",
                        ],
                        properties: {
                            email_addresses: {
                                type: "array",
                                items: {
                                    type: "object",
                                    properties: {
                                        value: {
                                            type: "string",
                                            title: "value",
                                        },
                                        email_address_type: {
                                            type: "string",
                                            title: "email_address_type",
                                        },
                                        integration_params: {
                                            type: "object",
                                            title: "integration_params",
                                            properties: {},
                                        },
                                        linked_account_params: {
                                            type: "object",
                                            title: "linked_account_params",
                                            properties: {},
                                        },
                                    },
                                },
                                title: "email_addresses",
                                description: "Array of email_addresses objects",
                            },
                            urls: {
                                type: "array",
                                items: {
                                    type: "object",
                                    properties: {
                                        value: {
                                            type: "string",
                                            title: "value",
                                        },
                                        url_type: {
                                            type: "string",
                                            title: "url_type",
                                        },
                                        integration_params: {
                                            type: "object",
                                            title: "integration_params",
                                            properties: {},
                                        },
                                        linked_account_params: {
                                            type: "object",
                                            title: "linked_account_params",
                                            properties: {},
                                        },
                                    },
                                },
                                title: "urls",
                                description: "Array of urls objects",
                            },
                            first_name: {
                                type: "string",
                                title: "first_name",
                                description: "The first name.",
                            },
                            last_name: {
                                type: "string",
                                title: "last_name",
                                description: "The last name.",
                            },
                            phone_numbers: {
                                type: "array",
                                items: {
                                    type: "object",
                                    properties: {
                                        value: {
                                            type: "string",
                                            title: "value",
                                        },
                                        phone_number_type: {
                                            type: "string",
                                            title: "phone_number_type",
                                        },
                                        integration_params: {
                                            type: "object",
                                            title: "integration_params",
                                            properties: {},
                                        },
                                        linked_account_params: {
                                            type: "object",
                                            title: "linked_account_params",
                                            properties: {},
                                        },
                                    },
                                },
                                title: "phone_numbers",
                                description: "Array of phone_numbers objects",
                            },
                            tags: {
                                type: "array",
                                items: {
                                    type: "string",
                                    format: "uuid",
                                },
                                title: "tags",
                                description: "Array of tags names",
                            },
                            attachments: {
                                type: "array",
                                items: {
                                    type: "object",
                                    properties: {
                                        id: {
                                            type: "string",
                                            title: "id",
                                        },
                                        file_url: {
                                            type: "string",
                                            title: "file_url",
                                        },
                                        file_name: {
                                            type: "string",
                                            title: "file_name",
                                        },
                                        attachment_type: {
                                            type: "string",
                                            title: "attachment_type",
                                        },
                                        integration_params: {
                                            type: "object",
                                            title: "integration_params",
                                            properties: {},
                                        },
                                        linked_account_params: {
                                            type: "object",
                                            title: "linked_account_params",
                                            properties: {},
                                        },
                                    },
                                },
                                title: "attachments",
                                description: "Array of attachments objects ",
                            },
                            merge_categories: {
                                type: "array",
                                categories: {
                                    type: "string",
                                    enum: [
                                        "HRIS",
                                        "ATS",
                                        "Accounting",
                                        "Ticketing",
                                        "File Storage",
                                        "CRM",
                                        "Marketing Automation",
                                    ],
                                    enum_information: [
                                        {
                                            value: "HRIS",
                                            description: "Merge HRIS Category",
                                        },
                                        {
                                            value: "ATS",
                                            description: "Merge ATS Category",
                                        },
                                        {
                                            value: "Accounting",
                                            description: "Merge Accounting Category",
                                        },
                                        {
                                            value: "Ticketing",
                                            description: "Merge Ticketing Category",
                                        },
                                        {
                                            value: "File Storage",
                                            description: "Merge File Storage Category",
                                        },
                                        {
                                            value: "CRM",
                                            description: "Merge CRM Category",
                                        },
                                        {
                                            value: "Marketing Automation",
                                            description: "Merge Marketing Automation Category",
                                        },
                                    ],
                                },
                                title: "Merge Categories",
                                description: "Array of Merge's Unified API Categories",
                            },
                            new_york_city_neighborhood: {
                                type: "string",
                                title: "Borough",
                                description: "One of the 5 Boroughs of New York City",
                            },
                            favorite_tv_shows: {
                                type: "array",
                                items: {
                                    type: "string",
                                    format: "uuid",
                                },
                                title: "Favorite TV Shows",
                                description: "Array of TV Show objects on merge.tv_shows",
                            },
                            favorite_watch: {
                                type: "string",
                                title: "Favorite Watch",
                                description: "Favorite watch of all time",
                            },
                        },
                    },
                },
            },
            remoteFieldClasses: {
                key: "value",
            },
            status: {
                linkedAccountStatus: "linked_account_status",
                canMakeRequest: true,
            },
            hasConditionalParams: true,
            hasRequiredLinkedAccountParams: true,
        });
    });
});
