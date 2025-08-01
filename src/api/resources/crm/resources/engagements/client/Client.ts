/**
 * This file was auto-generated by Fern from our API Definition.
 */

import * as environments from "../../../../../../environments";
import * as core from "../../../../../../core";
import * as Merge from "../../../../../index";
import * as serializers from "../../../../../../serialization/index";
import { mergeHeaders, mergeOnlyDefinedHeaders } from "../../../../../../core/headers";
import * as errors from "../../../../../../errors/index";

export declare namespace Engagements {
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

export class Engagements {
    protected readonly _options: Engagements.Options;

    constructor(_options: Engagements.Options) {
        this._options = _options;
    }

    /**
     * Returns a list of `Engagement` objects.
     *
     * @param {Merge.crm.EngagementsListRequest} request
     * @param {Engagements.RequestOptions} requestOptions - Request-specific configuration.
     *
     * @example
     *     await client.crm.engagements.list()
     */
    public list(
        request: Merge.crm.EngagementsListRequest = {},
        requestOptions?: Engagements.RequestOptions,
    ): core.HttpResponsePromise<Merge.crm.PaginatedEngagementList> {
        return core.HttpResponsePromise.fromPromise(this.__list(request, requestOptions));
    }

    private async __list(
        request: Merge.crm.EngagementsListRequest = {},
        requestOptions?: Engagements.RequestOptions,
    ): Promise<core.WithRawResponse<Merge.crm.PaginatedEngagementList>> {
        const {
            createdAfter,
            createdBefore,
            cursor,
            expand,
            includeDeletedData,
            includeRemoteData,
            includeRemoteFields,
            includeShellData,
            modifiedAfter,
            modifiedBefore,
            pageSize,
            remoteId,
            startedAfter,
            startedBefore,
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

        if (expand != null) {
            _queryParams["expand"] = serializers.crm.EngagementsListRequestExpand.jsonOrThrow(expand, {
                unrecognizedObjectKeys: "strip",
            });
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

        if (startedAfter != null) {
            _queryParams["started_after"] = startedAfter.toISOString();
        }

        if (startedBefore != null) {
            _queryParams["started_before"] = startedBefore.toISOString();
        }

        const _response = await (this._options.fetcher ?? core.fetcher)({
            url: core.url.join(
                (await core.Supplier.get(this._options.baseUrl)) ??
                    (await core.Supplier.get(this._options.environment)) ??
                    environments.MergeEnvironment.Production,
                "crm/v1/engagements",
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
                data: serializers.crm.PaginatedEngagementList.parseOrThrow(_response.body, {
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
                throw new errors.MergeTimeoutError("Timeout exceeded when calling GET /crm/v1/engagements.");
            case "unknown":
                throw new errors.MergeError({
                    message: _response.error.errorMessage,
                    rawResponse: _response.rawResponse,
                });
        }
    }

    /**
     * Creates an `Engagement` object with the given values.
     *
     * @param {Merge.crm.EngagementEndpointRequest} request
     * @param {Engagements.RequestOptions} requestOptions - Request-specific configuration.
     *
     * @example
     *     await client.crm.engagements.create({
     *         model: {}
     *     })
     */
    public create(
        request: Merge.crm.EngagementEndpointRequest,
        requestOptions?: Engagements.RequestOptions,
    ): core.HttpResponsePromise<Merge.crm.EngagementResponse> {
        return core.HttpResponsePromise.fromPromise(this.__create(request, requestOptions));
    }

    private async __create(
        request: Merge.crm.EngagementEndpointRequest,
        requestOptions?: Engagements.RequestOptions,
    ): Promise<core.WithRawResponse<Merge.crm.EngagementResponse>> {
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
                "crm/v1/engagements",
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
            body: serializers.crm.EngagementEndpointRequest.jsonOrThrow(_body, { unrecognizedObjectKeys: "strip" }),
            timeoutMs: requestOptions?.timeoutInSeconds != null ? requestOptions.timeoutInSeconds * 1000 : 60000,
            maxRetries: requestOptions?.maxRetries,
            abortSignal: requestOptions?.abortSignal,
        });
        if (_response.ok) {
            return {
                data: serializers.crm.EngagementResponse.parseOrThrow(_response.body, {
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
                throw new errors.MergeTimeoutError("Timeout exceeded when calling POST /crm/v1/engagements.");
            case "unknown":
                throw new errors.MergeError({
                    message: _response.error.errorMessage,
                    rawResponse: _response.rawResponse,
                });
        }
    }

    /**
     * Returns an `Engagement` object with the given `id`.
     *
     * @param {string} id
     * @param {Merge.crm.EngagementsRetrieveRequest} request
     * @param {Engagements.RequestOptions} requestOptions - Request-specific configuration.
     *
     * @example
     *     await client.crm.engagements.retrieve("id")
     */
    public retrieve(
        id: string,
        request: Merge.crm.EngagementsRetrieveRequest = {},
        requestOptions?: Engagements.RequestOptions,
    ): core.HttpResponsePromise<Merge.crm.Engagement> {
        return core.HttpResponsePromise.fromPromise(this.__retrieve(id, request, requestOptions));
    }

    private async __retrieve(
        id: string,
        request: Merge.crm.EngagementsRetrieveRequest = {},
        requestOptions?: Engagements.RequestOptions,
    ): Promise<core.WithRawResponse<Merge.crm.Engagement>> {
        const { expand, includeRemoteData, includeRemoteFields, includeShellData } = request;
        const _queryParams: Record<string, string | string[] | object | object[] | null> = {};
        if (expand != null) {
            _queryParams["expand"] = serializers.crm.EngagementsRetrieveRequestExpand.jsonOrThrow(expand, {
                unrecognizedObjectKeys: "strip",
            });
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

        const _response = await (this._options.fetcher ?? core.fetcher)({
            url: core.url.join(
                (await core.Supplier.get(this._options.baseUrl)) ??
                    (await core.Supplier.get(this._options.environment)) ??
                    environments.MergeEnvironment.Production,
                `crm/v1/engagements/${encodeURIComponent(id)}`,
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
                data: serializers.crm.Engagement.parseOrThrow(_response.body, {
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
                throw new errors.MergeTimeoutError("Timeout exceeded when calling GET /crm/v1/engagements/{id}.");
            case "unknown":
                throw new errors.MergeError({
                    message: _response.error.errorMessage,
                    rawResponse: _response.rawResponse,
                });
        }
    }

    /**
     * Updates an `Engagement` object with the given `id`.
     *
     * @param {string} id
     * @param {Merge.crm.PatchedEngagementEndpointRequest} request
     * @param {Engagements.RequestOptions} requestOptions - Request-specific configuration.
     *
     * @example
     *     await client.crm.engagements.partialUpdate("id", {
     *         model: {}
     *     })
     */
    public partialUpdate(
        id: string,
        request: Merge.crm.PatchedEngagementEndpointRequest,
        requestOptions?: Engagements.RequestOptions,
    ): core.HttpResponsePromise<Merge.crm.EngagementResponse> {
        return core.HttpResponsePromise.fromPromise(this.__partialUpdate(id, request, requestOptions));
    }

    private async __partialUpdate(
        id: string,
        request: Merge.crm.PatchedEngagementEndpointRequest,
        requestOptions?: Engagements.RequestOptions,
    ): Promise<core.WithRawResponse<Merge.crm.EngagementResponse>> {
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
                `crm/v1/engagements/${encodeURIComponent(id)}`,
            ),
            method: "PATCH",
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
            body: serializers.crm.PatchedEngagementEndpointRequest.jsonOrThrow(_body, {
                unrecognizedObjectKeys: "strip",
            }),
            timeoutMs: requestOptions?.timeoutInSeconds != null ? requestOptions.timeoutInSeconds * 1000 : 60000,
            maxRetries: requestOptions?.maxRetries,
            abortSignal: requestOptions?.abortSignal,
        });
        if (_response.ok) {
            return {
                data: serializers.crm.EngagementResponse.parseOrThrow(_response.body, {
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
                throw new errors.MergeTimeoutError("Timeout exceeded when calling PATCH /crm/v1/engagements/{id}.");
            case "unknown":
                throw new errors.MergeError({
                    message: _response.error.errorMessage,
                    rawResponse: _response.rawResponse,
                });
        }
    }

    /**
     * Returns metadata for `Engagement` PATCHs.
     *
     * @param {string} id
     * @param {Engagements.RequestOptions} requestOptions - Request-specific configuration.
     *
     * @example
     *     await client.crm.engagements.metaPatchRetrieve("id")
     */
    public metaPatchRetrieve(
        id: string,
        requestOptions?: Engagements.RequestOptions,
    ): core.HttpResponsePromise<Merge.crm.MetaResponse> {
        return core.HttpResponsePromise.fromPromise(this.__metaPatchRetrieve(id, requestOptions));
    }

    private async __metaPatchRetrieve(
        id: string,
        requestOptions?: Engagements.RequestOptions,
    ): Promise<core.WithRawResponse<Merge.crm.MetaResponse>> {
        const _response = await (this._options.fetcher ?? core.fetcher)({
            url: core.url.join(
                (await core.Supplier.get(this._options.baseUrl)) ??
                    (await core.Supplier.get(this._options.environment)) ??
                    environments.MergeEnvironment.Production,
                `crm/v1/engagements/meta/patch/${encodeURIComponent(id)}`,
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
                    "Timeout exceeded when calling GET /crm/v1/engagements/meta/patch/{id}.",
                );
            case "unknown":
                throw new errors.MergeError({
                    message: _response.error.errorMessage,
                    rawResponse: _response.rawResponse,
                });
        }
    }

    /**
     * Returns metadata for `Engagement` POSTs.
     *
     * @param {Engagements.RequestOptions} requestOptions - Request-specific configuration.
     *
     * @example
     *     await client.crm.engagements.metaPostRetrieve()
     */
    public metaPostRetrieve(
        requestOptions?: Engagements.RequestOptions,
    ): core.HttpResponsePromise<Merge.crm.MetaResponse> {
        return core.HttpResponsePromise.fromPromise(this.__metaPostRetrieve(requestOptions));
    }

    private async __metaPostRetrieve(
        requestOptions?: Engagements.RequestOptions,
    ): Promise<core.WithRawResponse<Merge.crm.MetaResponse>> {
        const _response = await (this._options.fetcher ?? core.fetcher)({
            url: core.url.join(
                (await core.Supplier.get(this._options.baseUrl)) ??
                    (await core.Supplier.get(this._options.environment)) ??
                    environments.MergeEnvironment.Production,
                "crm/v1/engagements/meta/post",
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
                throw new errors.MergeTimeoutError("Timeout exceeded when calling GET /crm/v1/engagements/meta/post.");
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
     * @param {Merge.crm.EngagementsRemoteFieldClassesListRequest} request
     * @param {Engagements.RequestOptions} requestOptions - Request-specific configuration.
     *
     * @example
     *     await client.crm.engagements.remoteFieldClassesList()
     */
    public remoteFieldClassesList(
        request: Merge.crm.EngagementsRemoteFieldClassesListRequest = {},
        requestOptions?: Engagements.RequestOptions,
    ): core.HttpResponsePromise<Merge.crm.PaginatedRemoteFieldClassList> {
        return core.HttpResponsePromise.fromPromise(this.__remoteFieldClassesList(request, requestOptions));
    }

    private async __remoteFieldClassesList(
        request: Merge.crm.EngagementsRemoteFieldClassesListRequest = {},
        requestOptions?: Engagements.RequestOptions,
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
                "crm/v1/engagements/remote-field-classes",
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
                    "Timeout exceeded when calling GET /crm/v1/engagements/remote-field-classes.",
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
