/**
 * This file was auto-generated by Fern from our API Definition.
 */

import * as environments from "../../../../../../environments";
import * as core from "../../../../../../core";
import * as Merge from "../../../../../index";
import { mergeHeaders, mergeOnlyDefinedHeaders } from "../../../../../../core/headers";
import * as serializers from "../../../../../../serialization/index";
import * as errors from "../../../../../../errors/index";

export declare namespace Groups {
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

export class Groups {
    protected readonly _options: Groups.Options;

    constructor(_options: Groups.Options) {
        this._options = _options;
    }

    /**
     * Returns a list of `Group` objects.
     *
     * @param {Merge.hris.GroupsListRequest} request
     * @param {Groups.RequestOptions} requestOptions - Request-specific configuration.
     *
     * @example
     *     await client.hris.groups.list()
     */
    public list(
        request: Merge.hris.GroupsListRequest = {},
        requestOptions?: Groups.RequestOptions,
    ): core.HttpResponsePromise<Merge.hris.PaginatedGroupList> {
        return core.HttpResponsePromise.fromPromise(this.__list(request, requestOptions));
    }

    private async __list(
        request: Merge.hris.GroupsListRequest = {},
        requestOptions?: Groups.RequestOptions,
    ): Promise<core.WithRawResponse<Merge.hris.PaginatedGroupList>> {
        const {
            createdAfter,
            createdBefore,
            cursor,
            includeDeletedData,
            includeRemoteData,
            includeShellData,
            isCommonlyUsedAsTeam,
            modifiedAfter,
            modifiedBefore,
            names,
            pageSize,
            remoteFields,
            remoteId,
            showEnumOrigins,
            types,
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

        if (includeShellData != null) {
            _queryParams["include_shell_data"] = includeShellData.toString();
        }

        if (isCommonlyUsedAsTeam != null) {
            _queryParams["is_commonly_used_as_team"] = isCommonlyUsedAsTeam;
        }

        if (modifiedAfter != null) {
            _queryParams["modified_after"] = modifiedAfter.toISOString();
        }

        if (modifiedBefore != null) {
            _queryParams["modified_before"] = modifiedBefore.toISOString();
        }

        if (names != null) {
            _queryParams["names"] = names;
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

        if (types != null) {
            _queryParams["types"] = types;
        }

        const _response = await (this._options.fetcher ?? core.fetcher)({
            url: core.url.join(
                (await core.Supplier.get(this._options.baseUrl)) ??
                    (await core.Supplier.get(this._options.environment)) ??
                    environments.MergeEnvironment.Production,
                "hris/v1/groups",
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
                data: serializers.hris.PaginatedGroupList.parseOrThrow(_response.body, {
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
                throw new errors.MergeTimeoutError("Timeout exceeded when calling GET /hris/v1/groups.");
            case "unknown":
                throw new errors.MergeError({
                    message: _response.error.errorMessage,
                    rawResponse: _response.rawResponse,
                });
        }
    }

    /**
     * Returns a `Group` object with the given `id`.
     *
     * @param {string} id
     * @param {Merge.hris.GroupsRetrieveRequest} request
     * @param {Groups.RequestOptions} requestOptions - Request-specific configuration.
     *
     * @example
     *     await client.hris.groups.retrieve("id")
     */
    public retrieve(
        id: string,
        request: Merge.hris.GroupsRetrieveRequest = {},
        requestOptions?: Groups.RequestOptions,
    ): core.HttpResponsePromise<Merge.hris.Group> {
        return core.HttpResponsePromise.fromPromise(this.__retrieve(id, request, requestOptions));
    }

    private async __retrieve(
        id: string,
        request: Merge.hris.GroupsRetrieveRequest = {},
        requestOptions?: Groups.RequestOptions,
    ): Promise<core.WithRawResponse<Merge.hris.Group>> {
        const { includeRemoteData, includeShellData, remoteFields, showEnumOrigins } = request;
        const _queryParams: Record<string, string | string[] | object | object[] | null> = {};
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
                `hris/v1/groups/${encodeURIComponent(id)}`,
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
                data: serializers.hris.Group.parseOrThrow(_response.body, {
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
                throw new errors.MergeTimeoutError("Timeout exceeded when calling GET /hris/v1/groups/{id}.");
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
