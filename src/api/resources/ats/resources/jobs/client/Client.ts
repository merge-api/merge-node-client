/**
 * This file was auto-generated by Fern from our API Definition.
 */

import * as environments from "../../../../../../environments";
import * as core from "../../../../../../core";
import * as Merge from "../../../../../index";
import urlJoin from "url-join";
import * as serializers from "../../../../../../serialization/index";
import * as errors from "../../../../../../errors/index";

export declare namespace Jobs {
    interface Options {
        environment?: core.Supplier<environments.MergeEnvironment | string>;
        apiKey: core.Supplier<core.BearerToken>;
        /** Override the X-Account-Token header */
        accountToken?: core.Supplier<string | undefined>;
        fetcher?: core.FetchFunction;
    }

    interface RequestOptions {
        /** The maximum time to wait for a response in seconds. */
        timeoutInSeconds?: number;
        /** The number of times to retry the request. Defaults to 2. */
        maxRetries?: number;
        /** A hook to abort the request. */
        abortSignal?: AbortSignal;
        /** Override the X-Account-Token header */
        accountToken?: string | undefined;
        /** Additional headers to include in the request. */
        headers?: Record<string, string>;
    }
}

export class Jobs {
    constructor(protected readonly _options: Jobs.Options) {}

    /**
     * Returns a list of `Job` objects.
     *
     * @param {Merge.ats.JobsListRequest} request
     * @param {Jobs.RequestOptions} requestOptions - Request-specific configuration.
     *
     * @example
     *     await client.ats.jobs.list()
     */
    public async list(
        request: Merge.ats.JobsListRequest = {},
        requestOptions?: Jobs.RequestOptions
    ): Promise<Merge.ats.PaginatedJobList> {
        const {
            code,
            createdAfter,
            createdBefore,
            cursor,
            expand,
            includeDeletedData,
            includeRemoteData,
            includeShellData,
            modifiedAfter,
            modifiedBefore,
            offices,
            pageSize,
            remoteFields,
            remoteId,
            showEnumOrigins,
            status,
        } = request;
        const _queryParams: Record<string, string | string[] | object | object[]> = {};
        if (code != null) {
            _queryParams["code"] = code;
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
            _queryParams["expand"] = expand;
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

        if (modifiedAfter != null) {
            _queryParams["modified_after"] = modifiedAfter.toISOString();
        }

        if (modifiedBefore != null) {
            _queryParams["modified_before"] = modifiedBefore.toISOString();
        }

        if (offices != null) {
            _queryParams["offices"] = offices;
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

        if (status != null) {
            _queryParams["status"] = status;
        }

        const _response = await (this._options.fetcher ?? core.fetcher)({
            url: urlJoin(
                (await core.Supplier.get(this._options.environment)) ?? environments.MergeEnvironment.Production,
                "ats/v1/jobs"
            ),
            method: "GET",
            headers: {
                Authorization: await this._getAuthorizationHeader(),
                "X-Account-Token":
                    (await core.Supplier.get(this._options.accountToken)) != null
                        ? await core.Supplier.get(this._options.accountToken)
                        : undefined,
                "X-Fern-Language": "JavaScript",
                "X-Fern-SDK-Name": "@mergeapi/merge-node-client",
                "X-Fern-SDK-Version": "1.1.3",
                "User-Agent": "@mergeapi/merge-node-client/1.1.3",
                "X-Fern-Runtime": core.RUNTIME.type,
                "X-Fern-Runtime-Version": core.RUNTIME.version,
                ...requestOptions?.headers,
            },
            contentType: "application/json",
            queryParameters: _queryParams,
            requestType: "json",
            timeoutMs: requestOptions?.timeoutInSeconds != null ? requestOptions.timeoutInSeconds * 1000 : 60000,
            maxRetries: requestOptions?.maxRetries,
            abortSignal: requestOptions?.abortSignal,
        });
        if (_response.ok) {
            return serializers.ats.PaginatedJobList.parseOrThrow(_response.body, {
                unrecognizedObjectKeys: "passthrough",
                allowUnrecognizedUnionMembers: true,
                allowUnrecognizedEnumValues: true,
                skipValidation: true,
                breadcrumbsPrefix: ["response"],
            });
        }

        if (_response.error.reason === "status-code") {
            throw new errors.MergeError({
                statusCode: _response.error.statusCode,
                body: _response.error.body,
            });
        }

        switch (_response.error.reason) {
            case "non-json":
                throw new errors.MergeError({
                    statusCode: _response.error.statusCode,
                    body: _response.error.rawBody,
                });
            case "timeout":
                throw new errors.MergeTimeoutError("Timeout exceeded when calling GET /ats/v1/jobs.");
            case "unknown":
                throw new errors.MergeError({
                    message: _response.error.errorMessage,
                });
        }
    }

    /**
     * Returns a `Job` object with the given `id`.
     *
     * @param {string} id
     * @param {Merge.ats.JobsRetrieveRequest} request
     * @param {Jobs.RequestOptions} requestOptions - Request-specific configuration.
     *
     * @example
     *     await client.ats.jobs.retrieve("id")
     */
    public async retrieve(
        id: string,
        request: Merge.ats.JobsRetrieveRequest = {},
        requestOptions?: Jobs.RequestOptions
    ): Promise<Merge.ats.Job> {
        const { expand, includeRemoteData, remoteFields, showEnumOrigins } = request;
        const _queryParams: Record<string, string | string[] | object | object[]> = {};
        if (expand != null) {
            _queryParams["expand"] = expand;
        }

        if (includeRemoteData != null) {
            _queryParams["include_remote_data"] = includeRemoteData.toString();
        }

        if (remoteFields != null) {
            _queryParams["remote_fields"] = remoteFields;
        }

        if (showEnumOrigins != null) {
            _queryParams["show_enum_origins"] = showEnumOrigins;
        }

        const _response = await (this._options.fetcher ?? core.fetcher)({
            url: urlJoin(
                (await core.Supplier.get(this._options.environment)) ?? environments.MergeEnvironment.Production,
                `ats/v1/jobs/${encodeURIComponent(id)}`
            ),
            method: "GET",
            headers: {
                Authorization: await this._getAuthorizationHeader(),
                "X-Account-Token":
                    (await core.Supplier.get(this._options.accountToken)) != null
                        ? await core.Supplier.get(this._options.accountToken)
                        : undefined,
                "X-Fern-Language": "JavaScript",
                "X-Fern-SDK-Name": "@mergeapi/merge-node-client",
                "X-Fern-SDK-Version": "1.1.3",
                "User-Agent": "@mergeapi/merge-node-client/1.1.3",
                "X-Fern-Runtime": core.RUNTIME.type,
                "X-Fern-Runtime-Version": core.RUNTIME.version,
                ...requestOptions?.headers,
            },
            contentType: "application/json",
            queryParameters: _queryParams,
            requestType: "json",
            timeoutMs: requestOptions?.timeoutInSeconds != null ? requestOptions.timeoutInSeconds * 1000 : 60000,
            maxRetries: requestOptions?.maxRetries,
            abortSignal: requestOptions?.abortSignal,
        });
        if (_response.ok) {
            return serializers.ats.Job.parseOrThrow(_response.body, {
                unrecognizedObjectKeys: "passthrough",
                allowUnrecognizedUnionMembers: true,
                allowUnrecognizedEnumValues: true,
                skipValidation: true,
                breadcrumbsPrefix: ["response"],
            });
        }

        if (_response.error.reason === "status-code") {
            throw new errors.MergeError({
                statusCode: _response.error.statusCode,
                body: _response.error.body,
            });
        }

        switch (_response.error.reason) {
            case "non-json":
                throw new errors.MergeError({
                    statusCode: _response.error.statusCode,
                    body: _response.error.rawBody,
                });
            case "timeout":
                throw new errors.MergeTimeoutError("Timeout exceeded when calling GET /ats/v1/jobs/{id}.");
            case "unknown":
                throw new errors.MergeError({
                    message: _response.error.errorMessage,
                });
        }
    }

    /**
     * Returns a list of `ScreeningQuestion` objects.
     *
     * @param {string} jobId
     * @param {Merge.ats.JobsScreeningQuestionsListRequest} request
     * @param {Jobs.RequestOptions} requestOptions - Request-specific configuration.
     *
     * @example
     *     await client.ats.jobs.screeningQuestionsList("job_id")
     */
    public async screeningQuestionsList(
        jobId: string,
        request: Merge.ats.JobsScreeningQuestionsListRequest = {},
        requestOptions?: Jobs.RequestOptions
    ): Promise<Merge.ats.PaginatedScreeningQuestionList> {
        const { cursor, expand, includeDeletedData, includeRemoteData, includeShellData, pageSize } = request;
        const _queryParams: Record<string, string | string[] | object | object[]> = {};
        if (cursor != null) {
            _queryParams["cursor"] = cursor;
        }

        if (expand != null) {
            _queryParams["expand"] = expand;
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

        if (pageSize != null) {
            _queryParams["page_size"] = pageSize.toString();
        }

        const _response = await (this._options.fetcher ?? core.fetcher)({
            url: urlJoin(
                (await core.Supplier.get(this._options.environment)) ?? environments.MergeEnvironment.Production,
                `ats/v1/jobs/${encodeURIComponent(jobId)}/screening-questions`
            ),
            method: "GET",
            headers: {
                Authorization: await this._getAuthorizationHeader(),
                "X-Account-Token":
                    (await core.Supplier.get(this._options.accountToken)) != null
                        ? await core.Supplier.get(this._options.accountToken)
                        : undefined,
                "X-Fern-Language": "JavaScript",
                "X-Fern-SDK-Name": "@mergeapi/merge-node-client",
                "X-Fern-SDK-Version": "1.1.3",
                "User-Agent": "@mergeapi/merge-node-client/1.1.3",
                "X-Fern-Runtime": core.RUNTIME.type,
                "X-Fern-Runtime-Version": core.RUNTIME.version,
                ...requestOptions?.headers,
            },
            contentType: "application/json",
            queryParameters: _queryParams,
            requestType: "json",
            timeoutMs: requestOptions?.timeoutInSeconds != null ? requestOptions.timeoutInSeconds * 1000 : 60000,
            maxRetries: requestOptions?.maxRetries,
            abortSignal: requestOptions?.abortSignal,
        });
        if (_response.ok) {
            return serializers.ats.PaginatedScreeningQuestionList.parseOrThrow(_response.body, {
                unrecognizedObjectKeys: "passthrough",
                allowUnrecognizedUnionMembers: true,
                allowUnrecognizedEnumValues: true,
                skipValidation: true,
                breadcrumbsPrefix: ["response"],
            });
        }

        if (_response.error.reason === "status-code") {
            throw new errors.MergeError({
                statusCode: _response.error.statusCode,
                body: _response.error.body,
            });
        }

        switch (_response.error.reason) {
            case "non-json":
                throw new errors.MergeError({
                    statusCode: _response.error.statusCode,
                    body: _response.error.rawBody,
                });
            case "timeout":
                throw new errors.MergeTimeoutError(
                    "Timeout exceeded when calling GET /ats/v1/jobs/{job_id}/screening-questions."
                );
            case "unknown":
                throw new errors.MergeError({
                    message: _response.error.errorMessage,
                });
        }
    }

    protected async _getAuthorizationHeader(): Promise<string> {
        return `Bearer ${await core.Supplier.get(this._options.apiKey)}`;
    }
}
