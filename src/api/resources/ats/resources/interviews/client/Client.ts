/**
 * This file was auto-generated by Fern from our API Definition.
 */

import * as environments from "../../../../../../environments";
import * as core from "../../../../../../core";
import * as Merge from "../../../../../index";
import * as serializers from "../../../../../../serialization/index";
import { mergeHeaders, mergeOnlyDefinedHeaders } from "../../../../../../core/headers";
import * as errors from "../../../../../../errors/index";

export declare namespace Interviews {
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

export class Interviews {
    protected readonly _options: Interviews.Options;

    constructor(_options: Interviews.Options) {
        this._options = _options;
    }

    /**
     * Returns a list of `ScheduledInterview` objects.
     *
     * @param {Merge.ats.InterviewsListRequest} request
     * @param {Interviews.RequestOptions} requestOptions - Request-specific configuration.
     *
     * @example
     *     await client.ats.interviews.list()
     */
    public list(
        request: Merge.ats.InterviewsListRequest = {},
        requestOptions?: Interviews.RequestOptions,
    ): core.HttpResponsePromise<Merge.ats.PaginatedScheduledInterviewList> {
        return core.HttpResponsePromise.fromPromise(this.__list(request, requestOptions));
    }

    private async __list(
        request: Merge.ats.InterviewsListRequest = {},
        requestOptions?: Interviews.RequestOptions,
    ): Promise<core.WithRawResponse<Merge.ats.PaginatedScheduledInterviewList>> {
        const {
            applicationId,
            createdAfter,
            createdBefore,
            cursor,
            expand,
            includeDeletedData,
            includeRemoteData,
            includeShellData,
            jobId,
            jobInterviewStageId,
            modifiedAfter,
            modifiedBefore,
            organizerId,
            pageSize,
            remoteFields,
            remoteId,
            showEnumOrigins,
        } = request;
        const _queryParams: Record<string, string | string[] | object | object[] | null> = {};
        if (applicationId != null) {
            _queryParams["application_id"] = applicationId;
        }

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
            _queryParams["expand"] = serializers.ats.InterviewsListRequestExpand.jsonOrThrow(expand, {
                unrecognizedObjectKeys: "strip",
            });
        }

        if (includeDeletedData != null) {
            _queryParams["include_deleted_data"] = includeDeletedData.toString();
        }

        if (includeRemoteData != null) {
            _queryParams["include_remote_data"] = includeRemoteData.toString();
        }

        if (includeShellData != null) {
            _queryParams["include_shell_data"] = includeShellData.toString();
        }

        if (jobId != null) {
            _queryParams["job_id"] = jobId;
        }

        if (jobInterviewStageId != null) {
            _queryParams["job_interview_stage_id"] = jobInterviewStageId;
        }

        if (modifiedAfter != null) {
            _queryParams["modified_after"] = modifiedAfter.toISOString();
        }

        if (modifiedBefore != null) {
            _queryParams["modified_before"] = modifiedBefore.toISOString();
        }

        if (organizerId != null) {
            _queryParams["organizer_id"] = organizerId;
        }

        if (pageSize != null) {
            _queryParams["page_size"] = pageSize.toString();
        }

        if (remoteFields != null) {
            _queryParams["remote_fields"] = remoteFields;
        }

        if (remoteId != null) {
            _queryParams["remote_id"] = remoteId;
        }

        if (showEnumOrigins != null) {
            _queryParams["show_enum_origins"] = showEnumOrigins;
        }

        const _response = await (this._options.fetcher ?? core.fetcher)({
            url: core.url.join(
                (await core.Supplier.get(this._options.baseUrl)) ??
                    (await core.Supplier.get(this._options.environment)) ??
                    environments.MergeEnvironment.Production,
                "ats/v1/interviews",
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
                data: serializers.ats.PaginatedScheduledInterviewList.parseOrThrow(_response.body, {
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
                throw new errors.MergeTimeoutError("Timeout exceeded when calling GET /ats/v1/interviews.");
            case "unknown":
                throw new errors.MergeError({
                    message: _response.error.errorMessage,
                    rawResponse: _response.rawResponse,
                });
        }
    }

    /**
     * Creates a `ScheduledInterview` object with the given values.
     *
     * @param {Merge.ats.ScheduledInterviewEndpointRequest} request
     * @param {Interviews.RequestOptions} requestOptions - Request-specific configuration.
     *
     * @example
     *     await client.ats.interviews.create({
     *         model: {},
     *         remoteUserId: "remote_user_id"
     *     })
     */
    public create(
        request: Merge.ats.ScheduledInterviewEndpointRequest,
        requestOptions?: Interviews.RequestOptions,
    ): core.HttpResponsePromise<Merge.ats.ScheduledInterviewResponse> {
        return core.HttpResponsePromise.fromPromise(this.__create(request, requestOptions));
    }

    private async __create(
        request: Merge.ats.ScheduledInterviewEndpointRequest,
        requestOptions?: Interviews.RequestOptions,
    ): Promise<core.WithRawResponse<Merge.ats.ScheduledInterviewResponse>> {
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
                "ats/v1/interviews",
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
            body: serializers.ats.ScheduledInterviewEndpointRequest.jsonOrThrow(_body, {
                unrecognizedObjectKeys: "strip",
            }),
            timeoutMs: requestOptions?.timeoutInSeconds != null ? requestOptions.timeoutInSeconds * 1000 : 60000,
            maxRetries: requestOptions?.maxRetries,
            abortSignal: requestOptions?.abortSignal,
        });
        if (_response.ok) {
            return {
                data: serializers.ats.ScheduledInterviewResponse.parseOrThrow(_response.body, {
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
                throw new errors.MergeTimeoutError("Timeout exceeded when calling POST /ats/v1/interviews.");
            case "unknown":
                throw new errors.MergeError({
                    message: _response.error.errorMessage,
                    rawResponse: _response.rawResponse,
                });
        }
    }

    /**
     * Returns a `ScheduledInterview` object with the given `id`.
     *
     * @param {string} id
     * @param {Merge.ats.InterviewsRetrieveRequest} request
     * @param {Interviews.RequestOptions} requestOptions - Request-specific configuration.
     *
     * @example
     *     await client.ats.interviews.retrieve("id")
     */
    public retrieve(
        id: string,
        request: Merge.ats.InterviewsRetrieveRequest = {},
        requestOptions?: Interviews.RequestOptions,
    ): core.HttpResponsePromise<Merge.ats.ScheduledInterview> {
        return core.HttpResponsePromise.fromPromise(this.__retrieve(id, request, requestOptions));
    }

    private async __retrieve(
        id: string,
        request: Merge.ats.InterviewsRetrieveRequest = {},
        requestOptions?: Interviews.RequestOptions,
    ): Promise<core.WithRawResponse<Merge.ats.ScheduledInterview>> {
        const { expand, includeRemoteData, includeShellData, remoteFields, showEnumOrigins } = request;
        const _queryParams: Record<string, string | string[] | object | object[] | null> = {};
        if (expand != null) {
            _queryParams["expand"] = serializers.ats.InterviewsRetrieveRequestExpand.jsonOrThrow(expand, {
                unrecognizedObjectKeys: "strip",
            });
        }

        if (includeRemoteData != null) {
            _queryParams["include_remote_data"] = includeRemoteData.toString();
        }

        if (includeShellData != null) {
            _queryParams["include_shell_data"] = includeShellData.toString();
        }

        if (remoteFields != null) {
            _queryParams["remote_fields"] = remoteFields;
        }

        if (showEnumOrigins != null) {
            _queryParams["show_enum_origins"] = showEnumOrigins;
        }

        const _response = await (this._options.fetcher ?? core.fetcher)({
            url: core.url.join(
                (await core.Supplier.get(this._options.baseUrl)) ??
                    (await core.Supplier.get(this._options.environment)) ??
                    environments.MergeEnvironment.Production,
                `ats/v1/interviews/${encodeURIComponent(id)}`,
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
                data: serializers.ats.ScheduledInterview.parseOrThrow(_response.body, {
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
                throw new errors.MergeTimeoutError("Timeout exceeded when calling GET /ats/v1/interviews/{id}.");
            case "unknown":
                throw new errors.MergeError({
                    message: _response.error.errorMessage,
                    rawResponse: _response.rawResponse,
                });
        }
    }

    /**
     * Returns metadata for `ScheduledInterview` POSTs.
     *
     * @param {Interviews.RequestOptions} requestOptions - Request-specific configuration.
     *
     * @example
     *     await client.ats.interviews.metaPostRetrieve()
     */
    public metaPostRetrieve(
        requestOptions?: Interviews.RequestOptions,
    ): core.HttpResponsePromise<Merge.ats.MetaResponse> {
        return core.HttpResponsePromise.fromPromise(this.__metaPostRetrieve(requestOptions));
    }

    private async __metaPostRetrieve(
        requestOptions?: Interviews.RequestOptions,
    ): Promise<core.WithRawResponse<Merge.ats.MetaResponse>> {
        const _response = await (this._options.fetcher ?? core.fetcher)({
            url: core.url.join(
                (await core.Supplier.get(this._options.baseUrl)) ??
                    (await core.Supplier.get(this._options.environment)) ??
                    environments.MergeEnvironment.Production,
                "ats/v1/interviews/meta/post",
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
                data: serializers.ats.MetaResponse.parseOrThrow(_response.body, {
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
                throw new errors.MergeTimeoutError("Timeout exceeded when calling GET /ats/v1/interviews/meta/post.");
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
