/**
 * This file was auto-generated by Fern from our API Definition.
 */

import { mockServerPool } from "../../mock-server/MockServerPool";
import { MergeClient } from "../../../src/Client";

describe("FieldMapping", () => {
    test("field_mappings_retrieve", async () => {
        const server = mockServerPool.createServer();
        const client = new MergeClient({ apiKey: "test", accountToken: "test", environment: server.baseUrl });

        const rawResponseBody = {
            File: [
                {
                    id: "3fa85f64-5717-4562-b3fc-2c963f66afa6",
                    is_integration_wide: true,
                    target_field: {
                        name: "example_target_field_name",
                        description: "this is a example description of a target field",
                        is_organization_wide: true,
                    },
                    remote_field: {
                        remote_key_name: "example_remote_field_key",
                        schema: { type: "string" },
                        remote_endpoint_info: {
                            method: "GET",
                            url_path: "/example-url-path",
                            field_traversal_path: ["example_remote_field_key"],
                        },
                    },
                },
            ],
            Folder: [
                {
                    id: "3fa85f64-5717-4562-b3fc-2c963f66afa6",
                    is_integration_wide: true,
                    target_field: {
                        name: "example_target_field_name",
                        description: "this is a example description of a target field",
                        is_organization_wide: true,
                    },
                    remote_field: {
                        remote_key_name: "example_remote_field_key",
                        schema: { type: "string" },
                        remote_endpoint_info: {
                            method: "GET",
                            url_path: "/example-url-path",
                            field_traversal_path: ["example_remote_field_key"],
                        },
                    },
                },
            ],
            Drive: [
                {
                    id: "3fa85f64-5717-4562-b3fc-2c963f66afa6",
                    is_integration_wide: true,
                    target_field: {
                        name: "example_target_field_name",
                        description: "this is a example description of a target field",
                        is_organization_wide: true,
                    },
                    remote_field: {
                        remote_key_name: "example_remote_field_key",
                        schema: { type: "string" },
                        remote_endpoint_info: {
                            method: "GET",
                            url_path: "/example-url-path",
                            field_traversal_path: ["example_remote_field_key"],
                        },
                    },
                },
            ],
            Group: [
                {
                    id: "3fa85f64-5717-4562-b3fc-2c963f66afa6",
                    is_integration_wide: true,
                    target_field: {
                        name: "example_target_field_name",
                        description: "this is a example description of a target field",
                        is_organization_wide: true,
                    },
                    remote_field: {
                        remote_key_name: "example_remote_field_key",
                        schema: { type: "string" },
                        remote_endpoint_info: {
                            method: "GET",
                            url_path: "/example-url-path",
                            field_traversal_path: ["example_remote_field_key"],
                        },
                    },
                },
            ],
            User: [
                {
                    id: "3fa85f64-5717-4562-b3fc-2c963f66afa6",
                    is_integration_wide: true,
                    target_field: {
                        name: "example_target_field_name",
                        description: "this is a example description of a target field",
                        is_organization_wide: true,
                    },
                    remote_field: {
                        remote_key_name: "example_remote_field_key",
                        schema: { type: "string" },
                        remote_endpoint_info: {
                            method: "GET",
                            url_path: "/example-url-path",
                            field_traversal_path: ["example_remote_field_key"],
                        },
                    },
                },
            ],
        };
        server
            .mockEndpoint()
            .get("/filestorage/v1/field-mappings")
            .respondWith()
            .statusCode(200)
            .jsonBody(rawResponseBody)
            .build();

        const response = await client.filestorage.fieldMapping.fieldMappingsRetrieve();
        expect(response).toEqual({
            file: [
                {
                    id: "3fa85f64-5717-4562-b3fc-2c963f66afa6",
                    isIntegrationWide: true,
                    targetField: {
                        name: "example_target_field_name",
                        description: "this is a example description of a target field",
                        isOrganizationWide: true,
                    },
                    remoteField: {
                        remoteKeyName: "example_remote_field_key",
                        schema: {
                            type: "string",
                        },
                        remoteEndpointInfo: {
                            method: "GET",
                            urlPath: "/example-url-path",
                            fieldTraversalPath: ["example_remote_field_key"],
                        },
                    },
                },
            ],
            folder: [
                {
                    id: "3fa85f64-5717-4562-b3fc-2c963f66afa6",
                    isIntegrationWide: true,
                    targetField: {
                        name: "example_target_field_name",
                        description: "this is a example description of a target field",
                        isOrganizationWide: true,
                    },
                    remoteField: {
                        remoteKeyName: "example_remote_field_key",
                        schema: {
                            type: "string",
                        },
                        remoteEndpointInfo: {
                            method: "GET",
                            urlPath: "/example-url-path",
                            fieldTraversalPath: ["example_remote_field_key"],
                        },
                    },
                },
            ],
            drive: [
                {
                    id: "3fa85f64-5717-4562-b3fc-2c963f66afa6",
                    isIntegrationWide: true,
                    targetField: {
                        name: "example_target_field_name",
                        description: "this is a example description of a target field",
                        isOrganizationWide: true,
                    },
                    remoteField: {
                        remoteKeyName: "example_remote_field_key",
                        schema: {
                            type: "string",
                        },
                        remoteEndpointInfo: {
                            method: "GET",
                            urlPath: "/example-url-path",
                            fieldTraversalPath: ["example_remote_field_key"],
                        },
                    },
                },
            ],
            group: [
                {
                    id: "3fa85f64-5717-4562-b3fc-2c963f66afa6",
                    isIntegrationWide: true,
                    targetField: {
                        name: "example_target_field_name",
                        description: "this is a example description of a target field",
                        isOrganizationWide: true,
                    },
                    remoteField: {
                        remoteKeyName: "example_remote_field_key",
                        schema: {
                            type: "string",
                        },
                        remoteEndpointInfo: {
                            method: "GET",
                            urlPath: "/example-url-path",
                            fieldTraversalPath: ["example_remote_field_key"],
                        },
                    },
                },
            ],
            user: [
                {
                    id: "3fa85f64-5717-4562-b3fc-2c963f66afa6",
                    isIntegrationWide: true,
                    targetField: {
                        name: "example_target_field_name",
                        description: "this is a example description of a target field",
                        isOrganizationWide: true,
                    },
                    remoteField: {
                        remoteKeyName: "example_remote_field_key",
                        schema: {
                            type: "string",
                        },
                        remoteEndpointInfo: {
                            method: "GET",
                            urlPath: "/example-url-path",
                            fieldTraversalPath: ["example_remote_field_key"],
                        },
                    },
                },
            ],
        });
    });

    test("field_mappings_create", async () => {
        const server = mockServerPool.createServer();
        const client = new MergeClient({ apiKey: "test", accountToken: "test", environment: server.baseUrl });
        const rawRequestBody = {
            target_field_name: "example_target_field_name",
            target_field_description: "this is a example description of the target field",
            remote_field_traversal_path: ["example_remote_field"],
            remote_method: "GET",
            remote_url_path: "/example-url-path",
            common_model_name: "ExampleCommonModel",
        };
        const rawResponseBody = {
            model: {
                id: "3fa85f64-5717-4562-b3fc-2c963f66afa6",
                is_integration_wide: true,
                target_field: {
                    name: "example_target_field_name",
                    description: "this is a example description of a target field",
                    is_organization_wide: true,
                },
                remote_field: {
                    remote_key_name: "example_remote_field_key",
                    schema: { type: "string" },
                    remote_endpoint_info: {
                        method: "GET",
                        url_path: "/example-url-path",
                        field_traversal_path: ["example_remote_field_key"],
                    },
                },
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
            .post("/filestorage/v1/field-mappings")
            .jsonBody(rawRequestBody)
            .respondWith()
            .statusCode(200)
            .jsonBody(rawResponseBody)
            .build();

        const response = await client.filestorage.fieldMapping.fieldMappingsCreate({
            targetFieldName: "example_target_field_name",
            targetFieldDescription: "this is a example description of the target field",
            remoteFieldTraversalPath: ["example_remote_field"],
            remoteMethod: "GET",
            remoteUrlPath: "/example-url-path",
            commonModelName: "ExampleCommonModel",
        });
        expect(response).toEqual({
            model: {
                id: "3fa85f64-5717-4562-b3fc-2c963f66afa6",
                isIntegrationWide: true,
                targetField: {
                    name: "example_target_field_name",
                    description: "this is a example description of a target field",
                    isOrganizationWide: true,
                },
                remoteField: {
                    remoteKeyName: "example_remote_field_key",
                    schema: {
                        type: "string",
                    },
                    remoteEndpointInfo: {
                        method: "GET",
                        urlPath: "/example-url-path",
                        fieldTraversalPath: ["example_remote_field_key"],
                    },
                },
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

    test("field_mappings_destroy", async () => {
        const server = mockServerPool.createServer();
        const client = new MergeClient({ apiKey: "test", accountToken: "test", environment: server.baseUrl });

        const rawResponseBody = {
            model: {
                id: "3fa85f64-5717-4562-b3fc-2c963f66afa6",
                is_integration_wide: true,
                target_field: {
                    name: "example_target_field_name",
                    description: "this is a example description of a target field",
                    is_organization_wide: true,
                },
                remote_field: {
                    remote_key_name: "example_remote_field_key",
                    schema: { type: "string" },
                    remote_endpoint_info: {
                        method: "GET",
                        url_path: "/example-url-path",
                        field_traversal_path: ["example_remote_field_key"],
                    },
                },
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
            .delete("/filestorage/v1/field-mappings/field_mapping_id")
            .respondWith()
            .statusCode(200)
            .jsonBody(rawResponseBody)
            .build();

        const response = await client.filestorage.fieldMapping.fieldMappingsDestroy("field_mapping_id");
        expect(response).toEqual({
            model: {
                id: "3fa85f64-5717-4562-b3fc-2c963f66afa6",
                isIntegrationWide: true,
                targetField: {
                    name: "example_target_field_name",
                    description: "this is a example description of a target field",
                    isOrganizationWide: true,
                },
                remoteField: {
                    remoteKeyName: "example_remote_field_key",
                    schema: {
                        type: "string",
                    },
                    remoteEndpointInfo: {
                        method: "GET",
                        urlPath: "/example-url-path",
                        fieldTraversalPath: ["example_remote_field_key"],
                    },
                },
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

    test("field_mappings_partial_update", async () => {
        const server = mockServerPool.createServer();
        const client = new MergeClient({ apiKey: "test", accountToken: "test", environment: server.baseUrl });
        const rawRequestBody = {};
        const rawResponseBody = {
            model: {
                id: "3fa85f64-5717-4562-b3fc-2c963f66afa6",
                is_integration_wide: true,
                target_field: {
                    name: "example_target_field_name",
                    description: "this is a example description of a target field",
                    is_organization_wide: true,
                },
                remote_field: {
                    remote_key_name: "example_remote_field_key",
                    schema: { type: "string" },
                    remote_endpoint_info: {
                        method: "GET",
                        url_path: "/example-url-path",
                        field_traversal_path: ["example_remote_field_key"],
                    },
                },
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
            .patch("/filestorage/v1/field-mappings/field_mapping_id")
            .jsonBody(rawRequestBody)
            .respondWith()
            .statusCode(200)
            .jsonBody(rawResponseBody)
            .build();

        const response = await client.filestorage.fieldMapping.fieldMappingsPartialUpdate("field_mapping_id");
        expect(response).toEqual({
            model: {
                id: "3fa85f64-5717-4562-b3fc-2c963f66afa6",
                isIntegrationWide: true,
                targetField: {
                    name: "example_target_field_name",
                    description: "this is a example description of a target field",
                    isOrganizationWide: true,
                },
                remoteField: {
                    remoteKeyName: "example_remote_field_key",
                    schema: {
                        type: "string",
                    },
                    remoteEndpointInfo: {
                        method: "GET",
                        urlPath: "/example-url-path",
                        fieldTraversalPath: ["example_remote_field_key"],
                    },
                },
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

    test("remote_fields_retrieve", async () => {
        const server = mockServerPool.createServer();
        const client = new MergeClient({ apiKey: "test", accountToken: "test", environment: server.baseUrl });

        const rawResponseBody = {
            File: [
                {
                    schema: { type: "string" },
                    remote_key_name: "example_remote_key_name",
                    remote_endpoint_info: {
                        method: "GET",
                        url_path: "/example-url-path",
                        field_traversal_path: ["example_key_name"],
                    },
                    example_values: ["example"],
                    advanced_metadata: { id: "id" },
                    coverage: 1,
                },
            ],
            Folder: [
                {
                    schema: { type: "string" },
                    remote_key_name: "example_remote_key_name",
                    remote_endpoint_info: {
                        method: "GET",
                        url_path: "/example-url-path",
                        field_traversal_path: ["example_key_name"],
                    },
                    example_values: ["example"],
                    advanced_metadata: { id: "id" },
                    coverage: 1,
                },
            ],
            Drive: [
                {
                    schema: { type: "string" },
                    remote_key_name: "example_remote_key_name",
                    remote_endpoint_info: {
                        method: "GET",
                        url_path: "/example-url-path",
                        field_traversal_path: ["example_key_name"],
                    },
                    example_values: ["example"],
                    advanced_metadata: { id: "id" },
                    coverage: 1,
                },
            ],
            Group: [
                {
                    schema: { type: "string" },
                    remote_key_name: "example_remote_key_name",
                    remote_endpoint_info: {
                        method: "GET",
                        url_path: "/example-url-path",
                        field_traversal_path: ["example_key_name"],
                    },
                    example_values: ["example"],
                    advanced_metadata: { id: "id" },
                    coverage: 1,
                },
            ],
            User: [
                {
                    schema: { type: "string" },
                    remote_key_name: "example_remote_key_name",
                    remote_endpoint_info: {
                        method: "GET",
                        url_path: "/example-url-path",
                        field_traversal_path: ["example_key_name"],
                    },
                    example_values: ["example"],
                    advanced_metadata: { id: "id" },
                    coverage: 1,
                },
            ],
        };
        server
            .mockEndpoint()
            .get("/filestorage/v1/remote-fields")
            .respondWith()
            .statusCode(200)
            .jsonBody(rawResponseBody)
            .build();

        const response = await client.filestorage.fieldMapping.remoteFieldsRetrieve();
        expect(response).toEqual({
            file: [
                {
                    schema: {
                        type: "string",
                    },
                    remoteKeyName: "example_remote_key_name",
                    remoteEndpointInfo: {
                        method: "GET",
                        urlPath: "/example-url-path",
                        fieldTraversalPath: ["example_key_name"],
                    },
                    exampleValues: ["example"],
                    advancedMetadata: {
                        id: "id",
                    },
                    coverage: 1,
                },
            ],
            folder: [
                {
                    schema: {
                        type: "string",
                    },
                    remoteKeyName: "example_remote_key_name",
                    remoteEndpointInfo: {
                        method: "GET",
                        urlPath: "/example-url-path",
                        fieldTraversalPath: ["example_key_name"],
                    },
                    exampleValues: ["example"],
                    advancedMetadata: {
                        id: "id",
                    },
                    coverage: 1,
                },
            ],
            drive: [
                {
                    schema: {
                        type: "string",
                    },
                    remoteKeyName: "example_remote_key_name",
                    remoteEndpointInfo: {
                        method: "GET",
                        urlPath: "/example-url-path",
                        fieldTraversalPath: ["example_key_name"],
                    },
                    exampleValues: ["example"],
                    advancedMetadata: {
                        id: "id",
                    },
                    coverage: 1,
                },
            ],
            group: [
                {
                    schema: {
                        type: "string",
                    },
                    remoteKeyName: "example_remote_key_name",
                    remoteEndpointInfo: {
                        method: "GET",
                        urlPath: "/example-url-path",
                        fieldTraversalPath: ["example_key_name"],
                    },
                    exampleValues: ["example"],
                    advancedMetadata: {
                        id: "id",
                    },
                    coverage: 1,
                },
            ],
            user: [
                {
                    schema: {
                        type: "string",
                    },
                    remoteKeyName: "example_remote_key_name",
                    remoteEndpointInfo: {
                        method: "GET",
                        urlPath: "/example-url-path",
                        fieldTraversalPath: ["example_key_name"],
                    },
                    exampleValues: ["example"],
                    advancedMetadata: {
                        id: "id",
                    },
                    coverage: 1,
                },
            ],
        });
    });

    test("target_fields_retrieve", async () => {
        const server = mockServerPool.createServer();
        const client = new MergeClient({ apiKey: "test", accountToken: "test", environment: server.baseUrl });

        const rawResponseBody = {
            File: [
                {
                    name: "example_target_field_name",
                    description: "this is a example description of a target field",
                    is_mapped: "is_mapped",
                },
            ],
            Folder: [
                {
                    name: "example_target_field_name",
                    description: "this is a example description of a target field",
                    is_mapped: "is_mapped",
                },
            ],
            Drive: [
                {
                    name: "example_target_field_name",
                    description: "this is a example description of a target field",
                    is_mapped: "is_mapped",
                },
            ],
            Group: [
                {
                    name: "example_target_field_name",
                    description: "this is a example description of a target field",
                    is_mapped: "is_mapped",
                },
            ],
            User: [
                {
                    name: "example_target_field_name",
                    description: "this is a example description of a target field",
                    is_mapped: "is_mapped",
                },
            ],
        };
        server
            .mockEndpoint()
            .get("/filestorage/v1/target-fields")
            .respondWith()
            .statusCode(200)
            .jsonBody(rawResponseBody)
            .build();

        const response = await client.filestorage.fieldMapping.targetFieldsRetrieve();
        expect(response).toEqual({
            file: [
                {
                    name: "example_target_field_name",
                    description: "this is a example description of a target field",
                    isMapped: "is_mapped",
                },
            ],
            folder: [
                {
                    name: "example_target_field_name",
                    description: "this is a example description of a target field",
                    isMapped: "is_mapped",
                },
            ],
            drive: [
                {
                    name: "example_target_field_name",
                    description: "this is a example description of a target field",
                    isMapped: "is_mapped",
                },
            ],
            group: [
                {
                    name: "example_target_field_name",
                    description: "this is a example description of a target field",
                    isMapped: "is_mapped",
                },
            ],
            user: [
                {
                    name: "example_target_field_name",
                    description: "this is a example description of a target field",
                    isMapped: "is_mapped",
                },
            ],
        });
    });
});
