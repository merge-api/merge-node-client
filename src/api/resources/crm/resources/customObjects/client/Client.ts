/**
 * This file was auto-generated by Fern from our API Definition.
 */

import * as environments from "../../../../../../environments";
import * as core from "../../../../../../core";
import * as Merge from "../../../../../index";
import { mergeHeaders, mergeOnlyDefinedHeaders } from "../../../../../../core/headers";
import * as serializers from "../../../../../../serialization/index";
import * as errors from "../../../../../../errors/index";

export declare namespace CustomObjects {
    export interface Options {
        environment?: core.Supplier<environments.MergeEnvironment | string>;
        /** Specify a custom URL to connect the client to. */
        baseUrl?: core.Supplier<string>;
        apiKey: core.Supplier<core.BearerToken>;
        /** Override the X-Account-Token header */
        accountToken?: core.Supplier<string | undefined>;
        /** Additional headers to include in requests. */
        headers?: Record<string, string | core.Supplier<string | undefined> | undefined>;
        fetcher?: core.FetchFunction;
    }

    export interface RequestOptions {
        /** The maximum time to wait for a response in seconds. */
        timeoutInSeconds?: number;
        /** The number of times to retry the request. Defaults to 2. */
        maxRetries?: number;
        /** A hook to abort the request. */
        abortSignal?: AbortSignal;
        /** Override the X-Account-Token header */
        accountToken?: string | undefined;
        /** Additional query string parameters to include in the request. */
        queryParams?: Record<string, unknown>;
        /** Additional headers to include in the request. */
        headers?: Record<string, string | core.Supplier<string | undefined> | undefined>;
    }
}

export class CustomObjects {
    protected readonly _options: CustomObjects.Options;

    constructor(_options: CustomObjects.Options) {
        this._options = _options;
    }

    /**
     * Returns a list of `CustomObject` objects.
     *
     * @param {string} customObjectClassId
     * @param {Merge.crm.CustomObjectClassesCustomObjectsListRequest} request
     * @param {CustomObjects.RequestOptions} requestOptions - Request-specific configuration.
     *
     * @example
     *     await client.crm.customObjects.customObjectClassesCustomObjectsList("custom_object_class_id")
     */
    public customObjectClassesCustomObjectsList(
        customObjectClassId: string,
        request: Merge.crm.CustomObjectClassesCustomObjectsListRequest = {},
        requestOptions?: CustomObjects.RequestOptions,
    ): core.HttpResponsePromise<Merge.crm.PaginatedCustomObjectList> {
        return core.HttpResponsePromise.fromPromise(
            this.__customObjectClassesCustomObjectsList(customObjectClassId, request, requestOptions),
        );
    }

    private async __customObjectClassesCustomObjectsList(
        customObjectClassId: string,
        request: Merge.crm.CustomObjectClassesCustomObjectsListRequest = {},
        requestOptions?: CustomObjects.RequestOptions,
    ): Promise<core.WithRawResponse<Merge.crm.PaginatedCustomObjectList>> {
        const {
            createdAfter,
            createdBefore,
            cursor,
            includeDeletedData,
            includeRemoteData,
            includeRemoteFields,
            includeShellData,
            modifiedAfter,
            modifiedBefore,
            pageSize,
            remoteId,
        } = request;
        const _queryParams: Record<string, string | string[] | object | object[] | null> = {};
        if (createdAfter != null) {
            _queryParams["created_after"] = createdAfter.toISOString();
        }

        if (createdBefore != null) {
            _queryParams["created_before"] = createdBefore.toISOString();
        }

        if (cursor != null) {
            _queryParams["cursor"] = cursor;
        }

        if (includeDeletedData != null) {
            _queryParams["include_deleted_data"] = includeDeletedData.toString();
        }

        if (includeRemoteData != null) {
            _queryParams["include_remote_data"] = includeRemoteData.toString();
        }

        if (includeRemoteFields != null) {
            _queryParams["include_remote_fields"] = includeRemoteFields.toString();
        }

        if (includeShellData != null) {
            _queryParams["include_shell_data"] = includeShellData.toString();
        }

        if (modifiedAfter != null) {
            _queryParams["modified_after"] = modifiedAfter.toISOString();
        }

        if (modifiedBefore != null) {
            _queryParams["modified_before"] = modifiedBefore.toISOString();
        }

        if (pageSize != null) {
            _queryParams["page_size"] = pageSize.toString();
        }

        if (remoteId != null) {
            _queryParams["remote_id"] = remoteId;
        }

        const _response = await (this._options.fetcher ?? core.fetcher)({
            url: core.url.join(
                (await core.Supplier.get(this._options.baseUrl)) ??
                    (await core.Supplier.get(this._options.environment)) ??
                    environments.MergeEnvironment.Production,
                `crm/v1/custom-object-classes/${encodeURIComponent(customObjectClassId)}/custom-objects`,
            ),
            method: "GET",
            headers: mergeHeaders(
                this._options?.headers,
                mergeOnlyDefinedHeaders({
                    Authorization: await this._getAuthorizationHeader(),
                    "X-Account-Token": requestOptions?.accountToken,
                }),
                requestOptions?.headers,
            ),
            queryParameters: { ..._queryParams, ...requestOptions?.queryParams },
            timeoutMs: requestOptions?.timeoutInSeconds != null ? requestOptions.timeoutInSeconds * 1000 : 60000,
            maxRetries: requestOptions?.maxRetries,
            abortSignal: requestOptions?.abortSignal,
        });
        if (_response.ok) {
            return {
                data: serializers.crm.PaginatedCustomObjectList.parseOrThrow(_response.body, {
                    unrecognizedObjectKeys: "passthrough",
                    allowUnrecognizedUnionMembers: true,
                    allowUnrecognizedEnumValues: true,
                    skipValidation: true,
                    breadcrumbsPrefix: ["response"],
                }),
                rawResponse: _response.rawResponse,
            };
        }

        if (_response.error.reason === "status-code") {
            throw new errors.MergeError({
                statusCode: _response.error.statusCode,
                body: _response.error.body,
                rawResponse: _response.rawResponse,
            });
        }

        switch (_response.error.reason) {
            case "non-json":
                throw new errors.MergeError({
                    statusCode: _response.error.statusCode,
                    body: _response.error.rawBody,
                    rawResponse: _response.rawResponse,
                });
            case "timeout":
                throw new errors.MergeTimeoutError(
                    "Timeout exceeded when calling GET /crm/v1/custom-object-classes/{custom_object_class_id}/custom-objects.",
                );
            case "unknown":
                throw new errors.MergeError({
                    message: _response.error.errorMessage,
                    rawResponse: _response.rawResponse,
                });
        }
    }

    /**
     * Creates a `CustomObject` object with the given values.
     *
     * @param {string} customObjectClassId
     * @param {Merge.crm.CrmCustomObjectEndpointRequest} request
     * @param {CustomObjects.RequestOptions} requestOptions - Request-specific configuration.
     *
     * @example
     *     await client.crm.customObjects.customObjectClassesCustomObjectsCreate("custom_object_class_id", {
     *         model: {
     *             fields: {
     *                 "test_field": "hello"
     *             }
     *         }
     *     })
     */
    public customObjectClassesCustomObjectsCreate(
        customObjectClassId: string,
        request: Merge.crm.CrmCustomObjectEndpointRequest,
        requestOptions?: CustomObjects.RequestOptions,
    ): core.HttpResponsePromise<Merge.crm.CrmCustomObjectResponse> {
        return core.HttpResponsePromise.fromPromise(
            this.__customObjectClassesCustomObjectsCreate(customObjectClassId, request, requestOptions),
        );
    }

    private async __customObjectClassesCustomObjectsCreate(
        customObjectClassId: string,
        request: Merge.crm.CrmCustomObjectEndpointRequest,
        requestOptions?: CustomObjects.RequestOptions,
    ): Promise<core.WithRawResponse<Merge.crm.CrmCustomObjectResponse>> {
        const { isDebugMode, runAsync, ..._body } = request;
        const _queryParams: Record<string, string | string[] | object | object[] | null> = {};
        if (isDebugMode != null) {
            _queryParams["is_debug_mode"] = isDebugMode.toString();
        }

        if (runAsync != null) {
            _queryParams["run_async"] = runAsync.toString();
        }

        const _response = await (this._options.fetcher ?? core.fetcher)({
            url: core.url.join(
                (await core.Supplier.get(this._options.baseUrl)) ??
                    (await core.Supplier.get(this._options.environment)) ??
                    environments.MergeEnvironment.Production,
                `crm/v1/custom-object-classes/${encodeURIComponent(customObjectClassId)}/custom-objects`,
            ),
            method: "POST",
            headers: mergeHeaders(
                this._options?.headers,
                mergeOnlyDefinedHeaders({
                    Authorization: await this._getAuthorizationHeader(),
                    "X-Account-Token": requestOptions?.accountToken,
                }),
                requestOptions?.headers,
            ),
            contentType: "application/json",
            queryParameters: { ..._queryParams, ...requestOptions?.queryParams },
            requestType: "json",
            body: serializers.crm.CrmCustomObjectEndpointRequest.jsonOrThrow(_body, {
                unrecognizedObjectKeys: "strip",
            }),
            timeoutMs: requestOptions?.timeoutInSeconds != null ? requestOptions.timeoutInSeconds * 1000 : 60000,
            maxRetries: requestOptions?.maxRetries,
            abortSignal: requestOptions?.abortSignal,
        });
        if (_response.ok) {
            return {
                data: serializers.crm.CrmCustomObjectResponse.parseOrThrow(_response.body, {
                    unrecognizedObjectKeys: "passthrough",
                    allowUnrecognizedUnionMembers: true,
                    allowUnrecognizedEnumValues: true,
                    skipValidation: true,
                    breadcrumbsPrefix: ["response"],
                }),
                rawResponse: _response.rawResponse,
            };
        }

        if (_response.error.reason === "status-code") {
            throw new errors.MergeError({
                statusCode: _response.error.statusCode,
                body: _response.error.body,
                rawResponse: _response.rawResponse,
            });
        }

        switch (_response.error.reason) {
            case "non-json":
                throw new errors.MergeError({
                    statusCode: _response.error.statusCode,
                    body: _response.error.rawBody,
                    rawResponse: _response.rawResponse,
                });
            case "timeout":
                throw new errors.MergeTimeoutError(
                    "Timeout exceeded when calling POST /crm/v1/custom-object-classes/{custom_object_class_id}/custom-objects.",
                );
            case "unknown":
                throw new errors.MergeError({
                    message: _response.error.errorMessage,
                    rawResponse: _response.rawResponse,
                });
        }
    }

    /**
     * Returns a `CustomObject` object with the given `id`.
     *
     * @param {string} customObjectClassId
     * @param {string} id
     * @param {Merge.crm.CustomObjectClassesCustomObjectsRetrieveRequest} request
     * @param {CustomObjects.RequestOptions} requestOptions - Request-specific configuration.
     *
     * @example
     *     await client.crm.customObjects.customObjectClassesCustomObjectsRetrieve("custom_object_class_id", "id")
     */
    public customObjectClassesCustomObjectsRetrieve(
        customObjectClassId: string,
        id: string,
        request: Merge.crm.CustomObjectClassesCustomObjectsRetrieveRequest = {},
        requestOptions?: CustomObjects.RequestOptions,
    ): core.HttpResponsePromise<Merge.crm.CustomObject> {
        return core.HttpResponsePromise.fromPromise(
            this.__customObjectClassesCustomObjectsRetrieve(customObjectClassId, id, request, requestOptions),
        );
    }

    private async __customObjectClassesCustomObjectsRetrieve(
        customObjectClassId: string,
        id: string,
        request: Merge.crm.CustomObjectClassesCustomObjectsRetrieveRequest = {},
        requestOptions?: CustomObjects.RequestOptions,
    ): Promise<core.WithRawResponse<Merge.crm.CustomObject>> {
        const { includeRemoteData, includeRemoteFields, includeShellData } = request;
        const _queryParams: Record<string, string | string[] | object | object[] | null> = {};
        if (includeRemoteData != null) {
            _queryParams["include_remote_data"] = includeRemoteData.toString();
        }

        if (includeRemoteFields != null) {
            _queryParams["include_remote_fields"] = includeRemoteFields.toString();
        }

        if (includeShellData != null) {
            _queryParams["include_shell_data"] = includeShellData.toString();
        }

        const _response = await (this._options.fetcher ?? core.fetcher)({
            url: core.url.join(
                (await core.Supplier.get(this._options.baseUrl)) ??
                    (await core.Supplier.get(this._options.environment)) ??
                    environments.MergeEnvironment.Production,
                `crm/v1/custom-object-classes/${encodeURIComponent(customObjectClassId)}/custom-objects/${encodeURIComponent(id)}`,
            ),
            method: "GET",
            headers: mergeHeaders(
                this._options?.headers,
                mergeOnlyDefinedHeaders({
                    Authorization: await this._getAuthorizationHeader(),
                    "X-Account-Token": requestOptions?.accountToken,
                }),
                requestOptions?.headers,
            ),
            queryParameters: { ..._queryParams, ...requestOptions?.queryParams },
            timeoutMs: requestOptions?.timeoutInSeconds != null ? requestOptions.timeoutInSeconds * 1000 : 60000,
            maxRetries: requestOptions?.maxRetries,
            abortSignal: requestOptions?.abortSignal,
        });
        if (_response.ok) {
            return {
                data: serializers.crm.CustomObject.parseOrThrow(_response.body, {
                    unrecognizedObjectKeys: "passthrough",
                    allowUnrecognizedUnionMembers: true,
                    allowUnrecognizedEnumValues: true,
                    skipValidation: true,
                    breadcrumbsPrefix: ["response"],
                }),
                rawResponse: _response.rawResponse,
            };
        }

        if (_response.error.reason === "status-code") {
            throw new errors.MergeError({
                statusCode: _response.error.statusCode,
                body: _response.error.body,
                rawResponse: _response.rawResponse,
            });
        }

        switch (_response.error.reason) {
            case "non-json":
                throw new errors.MergeError({
                    statusCode: _response.error.statusCode,
                    body: _response.error.rawBody,
                    rawResponse: _response.rawResponse,
                });
            case "timeout":
                throw new errors.MergeTimeoutError(
                    "Timeout exceeded when calling GET /crm/v1/custom-object-classes/{custom_object_class_id}/custom-objects/{id}.",
                );
            case "unknown":
                throw new errors.MergeError({
                    message: _response.error.errorMessage,
                    rawResponse: _response.rawResponse,
                });
        }
    }

    /**
     * Returns metadata for `CRMCustomObject` POSTs.
     *
     * @param {string} customObjectClassId
     * @param {CustomObjects.RequestOptions} requestOptions - Request-specific configuration.
     *
     * @example
     *     await client.crm.customObjects.customObjectClassesCustomObjectsMetaPostRetrieve("custom_object_class_id")
     */
    public customObjectClassesCustomObjectsMetaPostRetrieve(
        customObjectClassId: string,
        requestOptions?: CustomObjects.RequestOptions,
    ): core.HttpResponsePromise<Merge.crm.MetaResponse> {
        return core.HttpResponsePromise.fromPromise(
            this.__customObjectClassesCustomObjectsMetaPostRetrieve(customObjectClassId, requestOptions),
        );
    }

    private async __customObjectClassesCustomObjectsMetaPostRetrieve(
        customObjectClassId: string,
        requestOptions?: CustomObjects.RequestOptions,
    ): Promise<core.WithRawResponse<Merge.crm.MetaResponse>> {
        const _response = await (this._options.fetcher ?? core.fetcher)({
            url: core.url.join(
                (await core.Supplier.get(this._options.baseUrl)) ??
                    (await core.Supplier.get(this._options.environment)) ??
                    environments.MergeEnvironment.Production,
                `crm/v1/custom-object-classes/${encodeURIComponent(customObjectClassId)}/custom-objects/meta/post`,
            ),
            method: "GET",
            headers: mergeHeaders(
                this._options?.headers,
                mergeOnlyDefinedHeaders({
                    Authorization: await this._getAuthorizationHeader(),
                    "X-Account-Token": requestOptions?.accountToken,
                }),
                requestOptions?.headers,
            ),
            queryParameters: requestOptions?.queryParams,
            timeoutMs: requestOptions?.timeoutInSeconds != null ? requestOptions.timeoutInSeconds * 1000 : 60000,
            maxRetries: requestOptions?.maxRetries,
            abortSignal: requestOptions?.abortSignal,
        });
        if (_response.ok) {
            return {
                data: serializers.crm.MetaResponse.parseOrThrow(_response.body, {
                    unrecognizedObjectKeys: "passthrough",
                    allowUnrecognizedUnionMembers: true,
                    allowUnrecognizedEnumValues: true,
                    skipValidation: true,
                    breadcrumbsPrefix: ["response"],
                }),
                rawResponse: _response.rawResponse,
            };
        }

        if (_response.error.reason === "status-code") {
            throw new errors.MergeError({
                statusCode: _response.error.statusCode,
                body: _response.error.body,
                rawResponse: _response.rawResponse,
            });
        }

        switch (_response.error.reason) {
            case "non-json":
                throw new errors.MergeError({
                    statusCode: _response.error.statusCode,
                    body: _response.error.rawBody,
                    rawResponse: _response.rawResponse,
                });
            case "timeout":
                throw new errors.MergeTimeoutError(
                    "Timeout exceeded when calling GET /crm/v1/custom-object-classes/{custom_object_class_id}/custom-objects/meta/post.",
                );
            case "unknown":
                throw new errors.MergeError({
                    message: _response.error.errorMessage,
                    rawResponse: _response.rawResponse,
                });
        }
    }

    /**
     * Returns a list of `RemoteFieldClass` objects.
     *
     * @param {Merge.crm.CustomObjectClassesCustomObjectsRemoteFieldClassesListRequest} request
     * @param {CustomObjects.RequestOptions} requestOptions - Request-specific configuration.
     *
     * @example
     *     await client.crm.customObjects.customObjectClassesCustomObjectsRemoteFieldClassesList()
     */
    public customObjectClassesCustomObjectsRemoteFieldClassesList(
        request: Merge.crm.CustomObjectClassesCustomObjectsRemoteFieldClassesListRequest = {},
        requestOptions?: CustomObjects.RequestOptions,
    ): core.HttpResponsePromise<Merge.crm.PaginatedRemoteFieldClassList> {
        return core.HttpResponsePromise.fromPromise(
            this.__customObjectClassesCustomObjectsRemoteFieldClassesList(request, requestOptions),
        );
    }

    private async __customObjectClassesCustomObjectsRemoteFieldClassesList(
        request: Merge.crm.CustomObjectClassesCustomObjectsRemoteFieldClassesListRequest = {},
        requestOptions?: CustomObjects.RequestOptions,
    ): Promise<core.WithRawResponse<Merge.crm.PaginatedRemoteFieldClassList>> {
        const {
            cursor,
            includeDeletedData,
            includeRemoteData,
            includeRemoteFields,
            includeShellData,
            isCommonModelField,
            isCustom,
            pageSize,
        } = request;
        const _queryParams: Record<string, string | string[] | object | object[] | null> = {};
        if (cursor != null) {
            _queryParams["cursor"] = cursor;
        }

        if (includeDeletedData != null) {
            _queryParams["include_deleted_data"] = includeDeletedData.toString();
        }

        if (includeRemoteData != null) {
            _queryParams["include_remote_data"] = includeRemoteData.toString();
        }

        if (includeRemoteFields != null) {
            _queryParams["include_remote_fields"] = includeRemoteFields.toString();
        }

        if (includeShellData != null) {
            _queryParams["include_shell_data"] = includeShellData.toString();
        }

        if (isCommonModelField != null) {
            _queryParams["is_common_model_field"] = isCommonModelField.toString();
        }

        if (isCustom != null) {
            _queryParams["is_custom"] = isCustom.toString();
        }

        if (pageSize != null) {
            _queryParams["page_size"] = pageSize.toString();
        }

        const _response = await (this._options.fetcher ?? core.fetcher)({
            url: core.url.join(
                (await core.Supplier.get(this._options.baseUrl)) ??
                    (await core.Supplier.get(this._options.environment)) ??
                    environments.MergeEnvironment.Production,
                "crm/v1/custom-object-classes/custom-objects/remote-field-classes",
            ),
            method: "GET",
            headers: mergeHeaders(
                this._options?.headers,
                mergeOnlyDefinedHeaders({
                    Authorization: await this._getAuthorizationHeader(),
                    "X-Account-Token": requestOptions?.accountToken,
                }),
                requestOptions?.headers,
            ),
            queryParameters: { ..._queryParams, ...requestOptions?.queryParams },
            timeoutMs: requestOptions?.timeoutInSeconds != null ? requestOptions.timeoutInSeconds * 1000 : 60000,
            maxRetries: requestOptions?.maxRetries,
            abortSignal: requestOptions?.abortSignal,
        });
        if (_response.ok) {
            return {
                data: serializers.crm.PaginatedRemoteFieldClassList.parseOrThrow(_response.body, {
                    unrecognizedObjectKeys: "passthrough",
                    allowUnrecognizedUnionMembers: true,
                    allowUnrecognizedEnumValues: true,
                    skipValidation: true,
                    breadcrumbsPrefix: ["response"],
                }),
                rawResponse: _response.rawResponse,
            };
        }

        if (_response.error.reason === "status-code") {
            throw new errors.MergeError({
                statusCode: _response.error.statusCode,
                body: _response.error.body,
                rawResponse: _response.rawResponse,
            });
        }

        switch (_response.error.reason) {
            case "non-json":
                throw new errors.MergeError({
                    statusCode: _response.error.statusCode,
                    body: _response.error.rawBody,
                    rawResponse: _response.rawResponse,
                });
            case "timeout":
                throw new errors.MergeTimeoutError(
                    "Timeout exceeded when calling GET /crm/v1/custom-object-classes/custom-objects/remote-field-classes.",
                );
            case "unknown":
                throw new errors.MergeError({
                    message: _response.error.errorMessage,
                    rawResponse: _response.rawResponse,
                });
        }
    }

    protected async _getAuthorizationHeader(): Promise<string> {
        return `Bearer ${await core.Supplier.get(this._options.apiKey)}`;
    }
}
