/**
 * This file was auto-generated by Fern from our API Definition.
 */

import * as environments from "../../../../../../environments";
import * as core from "../../../../../../core";
import * as Merge from "../../../../../index";
import * as serializers from "../../../../../../serialization/index";
import { mergeHeaders, mergeOnlyDefinedHeaders } from "../../../../../../core/headers";
import * as errors from "../../../../../../errors/index";

export declare namespace GeneralLedgerTransactions {
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

export class GeneralLedgerTransactions {
    protected readonly _options: GeneralLedgerTransactions.Options;

    constructor(_options: GeneralLedgerTransactions.Options) {
        this._options = _options;
    }

    /**
     * Returns a list of `GeneralLedgerTransaction` objects.
     *
     * @param {Merge.accounting.GeneralLedgerTransactionsListRequest} request
     * @param {GeneralLedgerTransactions.RequestOptions} requestOptions - Request-specific configuration.
     *
     * @example
     *     await client.accounting.generalLedgerTransactions.list()
     */
    public list(
        request: Merge.accounting.GeneralLedgerTransactionsListRequest = {},
        requestOptions?: GeneralLedgerTransactions.RequestOptions,
    ): core.HttpResponsePromise<Merge.accounting.PaginatedGeneralLedgerTransactionList> {
        return core.HttpResponsePromise.fromPromise(this.__list(request, requestOptions));
    }

    private async __list(
        request: Merge.accounting.GeneralLedgerTransactionsListRequest = {},
        requestOptions?: GeneralLedgerTransactions.RequestOptions,
    ): Promise<core.WithRawResponse<Merge.accounting.PaginatedGeneralLedgerTransactionList>> {
        const {
            companyId,
            createdAfter,
            createdBefore,
            cursor,
            expand,
            includeDeletedData,
            includeRemoteData,
            includeShellData,
            modifiedAfter,
            modifiedBefore,
            pageSize,
            postedDateAfter,
            postedDateBefore,
            remoteId,
        } = request;
        const _queryParams: Record<string, string | string[] | object | object[] | null> = {};
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
            _queryParams["expand"] = serializers.accounting.GeneralLedgerTransactionsListRequestExpand.jsonOrThrow(
                expand,
                { unrecognizedObjectKeys: "strip" },
            );
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

        if (pageSize != null) {
            _queryParams["page_size"] = pageSize.toString();
        }

        if (postedDateAfter != null) {
            _queryParams["posted_date_after"] = postedDateAfter.toISOString();
        }

        if (postedDateBefore != null) {
            _queryParams["posted_date_before"] = postedDateBefore.toISOString();
        }

        if (remoteId != null) {
            _queryParams["remote_id"] = remoteId;
        }

        const _response = await (this._options.fetcher ?? core.fetcher)({
            url: core.url.join(
                (await core.Supplier.get(this._options.baseUrl)) ??
                    (await core.Supplier.get(this._options.environment)) ??
                    environments.MergeEnvironment.Production,
                "accounting/v1/general-ledger-transactions",
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
                data: serializers.accounting.PaginatedGeneralLedgerTransactionList.parseOrThrow(_response.body, {
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
                    "Timeout exceeded when calling GET /accounting/v1/general-ledger-transactions.",
                );
            case "unknown":
                throw new errors.MergeError({
                    message: _response.error.errorMessage,
                    rawResponse: _response.rawResponse,
                });
        }
    }

    /**
     * Returns a `GeneralLedgerTransaction` object with the given `id`.
     *
     * @param {string} id
     * @param {Merge.accounting.GeneralLedgerTransactionsRetrieveRequest} request
     * @param {GeneralLedgerTransactions.RequestOptions} requestOptions - Request-specific configuration.
     *
     * @example
     *     await client.accounting.generalLedgerTransactions.retrieve("id")
     */
    public retrieve(
        id: string,
        request: Merge.accounting.GeneralLedgerTransactionsRetrieveRequest = {},
        requestOptions?: GeneralLedgerTransactions.RequestOptions,
    ): core.HttpResponsePromise<Merge.accounting.GeneralLedgerTransaction> {
        return core.HttpResponsePromise.fromPromise(this.__retrieve(id, request, requestOptions));
    }

    private async __retrieve(
        id: string,
        request: Merge.accounting.GeneralLedgerTransactionsRetrieveRequest = {},
        requestOptions?: GeneralLedgerTransactions.RequestOptions,
    ): Promise<core.WithRawResponse<Merge.accounting.GeneralLedgerTransaction>> {
        const { expand, includeRemoteData, includeShellData } = request;
        const _queryParams: Record<string, string | string[] | object | object[] | null> = {};
        if (expand != null) {
            _queryParams["expand"] = serializers.accounting.GeneralLedgerTransactionsRetrieveRequestExpand.jsonOrThrow(
                expand,
                { unrecognizedObjectKeys: "strip" },
            );
        }

        if (includeRemoteData != null) {
            _queryParams["include_remote_data"] = includeRemoteData.toString();
        }

        if (includeShellData != null) {
            _queryParams["include_shell_data"] = includeShellData.toString();
        }

        const _response = await (this._options.fetcher ?? core.fetcher)({
            url: core.url.join(
                (await core.Supplier.get(this._options.baseUrl)) ??
                    (await core.Supplier.get(this._options.environment)) ??
                    environments.MergeEnvironment.Production,
                `accounting/v1/general-ledger-transactions/${encodeURIComponent(id)}`,
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
                data: serializers.accounting.GeneralLedgerTransaction.parseOrThrow(_response.body, {
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
                    "Timeout exceeded when calling GET /accounting/v1/general-ledger-transactions/{id}.",
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
