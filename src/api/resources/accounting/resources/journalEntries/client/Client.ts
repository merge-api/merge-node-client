/**
 * This file was auto-generated by Fern from our API Definition.
 */

import * as environments from "../../../../../../environments";
import * as core from "../../../../../../core";
import * as Merge from "../../../../../index";
import urlJoin from "url-join";
import * as serializers from "../../../../../../serialization/index";
import * as errors from "../../../../../../errors/index";

export declare namespace JournalEntries {
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

export class JournalEntries {
    constructor(protected readonly _options: JournalEntries.Options) {}

    /**
     * Returns a list of `JournalEntry` objects.
     *
     * @param {Merge.accounting.JournalEntriesListRequest} request
     * @param {JournalEntries.RequestOptions} requestOptions - Request-specific configuration.
     *
     * @example
     *     await client.accounting.journalEntries.list()
     */
    public async list(
        request: Merge.accounting.JournalEntriesListRequest = {},
        requestOptions?: JournalEntries.RequestOptions
    ): Promise<Merge.accounting.PaginatedJournalEntryList> {
        const {
            companyId,
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
            transactionDateAfter,
            transactionDateBefore,
        } = request;
        const _queryParams: Record<string, string | string[] | object | object[]> = {};
        if (companyId != null) {
            _queryParams["company_id"] = companyId;
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

        if (transactionDateAfter != null) {
            _queryParams["transaction_date_after"] = transactionDateAfter.toISOString();
        }

        if (transactionDateBefore != null) {
            _queryParams["transaction_date_before"] = transactionDateBefore.toISOString();
        }

        const _response = await (this._options.fetcher ?? core.fetcher)({
            url: urlJoin(
                (await core.Supplier.get(this._options.environment)) ?? environments.MergeEnvironment.Production,
                "accounting/v1/journal-entries"
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
            return serializers.accounting.PaginatedJournalEntryList.parseOrThrow(_response.body, {
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
                throw new errors.MergeTimeoutError("Timeout exceeded when calling GET /accounting/v1/journal-entries.");
            case "unknown":
                throw new errors.MergeError({
                    message: _response.error.errorMessage,
                });
        }
    }

    /**
     * Creates a `JournalEntry` object with the given values.
     *
     * @param {Merge.accounting.JournalEntryEndpointRequest} request
     * @param {JournalEntries.RequestOptions} requestOptions - Request-specific configuration.
     *
     * @example
     *     await client.accounting.journalEntries.create({
     *         model: {}
     *     })
     */
    public async create(
        request: Merge.accounting.JournalEntryEndpointRequest,
        requestOptions?: JournalEntries.RequestOptions
    ): Promise<Merge.accounting.JournalEntryResponse> {
        const { isDebugMode, runAsync, ..._body } = request;
        const _queryParams: Record<string, string | string[] | object | object[]> = {};
        if (isDebugMode != null) {
            _queryParams["is_debug_mode"] = isDebugMode.toString();
        }

        if (runAsync != null) {
            _queryParams["run_async"] = runAsync.toString();
        }

        const _response = await (this._options.fetcher ?? core.fetcher)({
            url: urlJoin(
                (await core.Supplier.get(this._options.environment)) ?? environments.MergeEnvironment.Production,
                "accounting/v1/journal-entries"
            ),
            method: "POST",
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
            body: serializers.accounting.JournalEntryEndpointRequest.jsonOrThrow(_body, {
                unrecognizedObjectKeys: "strip",
            }),
            timeoutMs: requestOptions?.timeoutInSeconds != null ? requestOptions.timeoutInSeconds * 1000 : 60000,
            maxRetries: requestOptions?.maxRetries,
            abortSignal: requestOptions?.abortSignal,
        });
        if (_response.ok) {
            return serializers.accounting.JournalEntryResponse.parseOrThrow(_response.body, {
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
                    "Timeout exceeded when calling POST /accounting/v1/journal-entries."
                );
            case "unknown":
                throw new errors.MergeError({
                    message: _response.error.errorMessage,
                });
        }
    }

    /**
     * Returns a `JournalEntry` object with the given `id`.
     *
     * @param {string} id
     * @param {Merge.accounting.JournalEntriesRetrieveRequest} request
     * @param {JournalEntries.RequestOptions} requestOptions - Request-specific configuration.
     *
     * @example
     *     await client.accounting.journalEntries.retrieve("id")
     */
    public async retrieve(
        id: string,
        request: Merge.accounting.JournalEntriesRetrieveRequest = {},
        requestOptions?: JournalEntries.RequestOptions
    ): Promise<Merge.accounting.JournalEntry> {
        const { expand, includeRemoteData, includeRemoteFields } = request;
        const _queryParams: Record<string, string | string[] | object | object[]> = {};
        if (expand != null) {
            _queryParams["expand"] = expand;
        }

        if (includeRemoteData != null) {
            _queryParams["include_remote_data"] = includeRemoteData.toString();
        }

        if (includeRemoteFields != null) {
            _queryParams["include_remote_fields"] = includeRemoteFields.toString();
        }

        const _response = await (this._options.fetcher ?? core.fetcher)({
            url: urlJoin(
                (await core.Supplier.get(this._options.environment)) ?? environments.MergeEnvironment.Production,
                `accounting/v1/journal-entries/${encodeURIComponent(id)}`
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
            return serializers.accounting.JournalEntry.parseOrThrow(_response.body, {
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
                    "Timeout exceeded when calling GET /accounting/v1/journal-entries/{id}."
                );
            case "unknown":
                throw new errors.MergeError({
                    message: _response.error.errorMessage,
                });
        }
    }

    /**
     * Returns a list of `RemoteFieldClass` objects.
     *
     * @param {Merge.accounting.JournalEntriesLinesRemoteFieldClassesListRequest} request
     * @param {JournalEntries.RequestOptions} requestOptions - Request-specific configuration.
     *
     * @example
     *     await client.accounting.journalEntries.linesRemoteFieldClassesList()
     */
    public async linesRemoteFieldClassesList(
        request: Merge.accounting.JournalEntriesLinesRemoteFieldClassesListRequest = {},
        requestOptions?: JournalEntries.RequestOptions
    ): Promise<Merge.accounting.PaginatedRemoteFieldClassList> {
        const { cursor, includeDeletedData, includeRemoteData, includeShellData, isCommonModelField, pageSize } =
            request;
        const _queryParams: Record<string, string | string[] | object | object[]> = {};
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

        if (isCommonModelField != null) {
            _queryParams["is_common_model_field"] = isCommonModelField.toString();
        }

        if (pageSize != null) {
            _queryParams["page_size"] = pageSize.toString();
        }

        const _response = await (this._options.fetcher ?? core.fetcher)({
            url: urlJoin(
                (await core.Supplier.get(this._options.environment)) ?? environments.MergeEnvironment.Production,
                "accounting/v1/journal-entries/lines/remote-field-classes"
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
            return serializers.accounting.PaginatedRemoteFieldClassList.parseOrThrow(_response.body, {
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
                    "Timeout exceeded when calling GET /accounting/v1/journal-entries/lines/remote-field-classes."
                );
            case "unknown":
                throw new errors.MergeError({
                    message: _response.error.errorMessage,
                });
        }
    }

    /**
     * Returns metadata for `JournalEntry` POSTs.
     *
     * @param {JournalEntries.RequestOptions} requestOptions - Request-specific configuration.
     *
     * @example
     *     await client.accounting.journalEntries.metaPostRetrieve()
     */
    public async metaPostRetrieve(
        requestOptions?: JournalEntries.RequestOptions
    ): Promise<Merge.accounting.MetaResponse> {
        const _response = await (this._options.fetcher ?? core.fetcher)({
            url: urlJoin(
                (await core.Supplier.get(this._options.environment)) ?? environments.MergeEnvironment.Production,
                "accounting/v1/journal-entries/meta/post"
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
            requestType: "json",
            timeoutMs: requestOptions?.timeoutInSeconds != null ? requestOptions.timeoutInSeconds * 1000 : 60000,
            maxRetries: requestOptions?.maxRetries,
            abortSignal: requestOptions?.abortSignal,
        });
        if (_response.ok) {
            return serializers.accounting.MetaResponse.parseOrThrow(_response.body, {
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
                    "Timeout exceeded when calling GET /accounting/v1/journal-entries/meta/post."
                );
            case "unknown":
                throw new errors.MergeError({
                    message: _response.error.errorMessage,
                });
        }
    }

    /**
     * Returns a list of `RemoteFieldClass` objects.
     *
     * @param {Merge.accounting.JournalEntriesRemoteFieldClassesListRequest} request
     * @param {JournalEntries.RequestOptions} requestOptions - Request-specific configuration.
     *
     * @example
     *     await client.accounting.journalEntries.remoteFieldClassesList()
     */
    public async remoteFieldClassesList(
        request: Merge.accounting.JournalEntriesRemoteFieldClassesListRequest = {},
        requestOptions?: JournalEntries.RequestOptions
    ): Promise<Merge.accounting.PaginatedRemoteFieldClassList> {
        const { cursor, includeDeletedData, includeRemoteData, includeShellData, isCommonModelField, pageSize } =
            request;
        const _queryParams: Record<string, string | string[] | object | object[]> = {};
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

        if (isCommonModelField != null) {
            _queryParams["is_common_model_field"] = isCommonModelField.toString();
        }

        if (pageSize != null) {
            _queryParams["page_size"] = pageSize.toString();
        }

        const _response = await (this._options.fetcher ?? core.fetcher)({
            url: urlJoin(
                (await core.Supplier.get(this._options.environment)) ?? environments.MergeEnvironment.Production,
                "accounting/v1/journal-entries/remote-field-classes"
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
            return serializers.accounting.PaginatedRemoteFieldClassList.parseOrThrow(_response.body, {
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
                    "Timeout exceeded when calling GET /accounting/v1/journal-entries/remote-field-classes."
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
