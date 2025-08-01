/**
 * This file was auto-generated by Fern from our API Definition.
 */

import * as environments from "../../../../../../environments";
import * as core from "../../../../../../core";
import * as Merge from "../../../../../index";
import * as serializers from "../../../../../../serialization/index";
import { mergeHeaders, mergeOnlyDefinedHeaders } from "../../../../../../core/headers";
import * as errors from "../../../../../../errors/index";

export declare namespace Invoices {
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

export class Invoices {
    protected readonly _options: Invoices.Options;

    constructor(_options: Invoices.Options) {
        this._options = _options;
    }

    /**
     * Returns a list of `Invoice` objects.
     *
     * @param {Merge.accounting.InvoicesListRequest} request
     * @param {Invoices.RequestOptions} requestOptions - Request-specific configuration.
     *
     * @example
     *     await client.accounting.invoices.list()
     */
    public list(
        request: Merge.accounting.InvoicesListRequest = {},
        requestOptions?: Invoices.RequestOptions,
    ): core.HttpResponsePromise<Merge.accounting.PaginatedInvoiceList> {
        return core.HttpResponsePromise.fromPromise(this.__list(request, requestOptions));
    }

    private async __list(
        request: Merge.accounting.InvoicesListRequest = {},
        requestOptions?: Invoices.RequestOptions,
    ): Promise<core.WithRawResponse<Merge.accounting.PaginatedInvoiceList>> {
        const {
            companyId,
            contactId,
            createdAfter,
            createdBefore,
            cursor,
            expand,
            includeDeletedData,
            includeRemoteData,
            includeRemoteFields,
            includeShellData,
            issueDateAfter,
            issueDateBefore,
            modifiedAfter,
            modifiedBefore,
            number: number_,
            pageSize,
            remoteFields,
            remoteId,
            showEnumOrigins,
            status,
            type: type_,
        } = request;
        const _queryParams: Record<string, string | string[] | object | object[] | null> = {};
        if (companyId != null) {
            _queryParams["company_id"] = companyId;
        }

        if (contactId != null) {
            _queryParams["contact_id"] = contactId;
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
            _queryParams["expand"] = serializers.accounting.InvoicesListRequestExpand.jsonOrThrow(expand, {
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

        if (issueDateAfter != null) {
            _queryParams["issue_date_after"] = issueDateAfter.toISOString();
        }

        if (issueDateBefore != null) {
            _queryParams["issue_date_before"] = issueDateBefore.toISOString();
        }

        if (modifiedAfter != null) {
            _queryParams["modified_after"] = modifiedAfter.toISOString();
        }

        if (modifiedBefore != null) {
            _queryParams["modified_before"] = modifiedBefore.toISOString();
        }

        if (number_ != null) {
            _queryParams["number"] = number_;
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
            _queryParams["status"] = serializers.accounting.InvoicesListRequestStatus.jsonOrThrow(status, {
                unrecognizedObjectKeys: "strip",
            });
        }

        if (type_ != null) {
            _queryParams["type"] = serializers.accounting.InvoicesListRequestType.jsonOrThrow(type_, {
                unrecognizedObjectKeys: "strip",
            });
        }

        const _response = await (this._options.fetcher ?? core.fetcher)({
            url: core.url.join(
                (await core.Supplier.get(this._options.baseUrl)) ??
                    (await core.Supplier.get(this._options.environment)) ??
                    environments.MergeEnvironment.Production,
                "accounting/v1/invoices",
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
                data: serializers.accounting.PaginatedInvoiceList.parseOrThrow(_response.body, {
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
                throw new errors.MergeTimeoutError("Timeout exceeded when calling GET /accounting/v1/invoices.");
            case "unknown":
                throw new errors.MergeError({
                    message: _response.error.errorMessage,
                    rawResponse: _response.rawResponse,
                });
        }
    }

    /**
     * Creates an `Invoice` object with the given values.
     *             Including a `PurchaseOrder` id in the `purchase_orders` property will generate an Accounts Payable Invoice from the specified Purchase Order(s).
     *
     *
     * @param {Merge.accounting.InvoiceEndpointRequest} request
     * @param {Invoices.RequestOptions} requestOptions - Request-specific configuration.
     *
     * @example
     *     await client.accounting.invoices.create({
     *         model: {}
     *     })
     */
    public create(
        request: Merge.accounting.InvoiceEndpointRequest,
        requestOptions?: Invoices.RequestOptions,
    ): core.HttpResponsePromise<Merge.accounting.InvoiceResponse> {
        return core.HttpResponsePromise.fromPromise(this.__create(request, requestOptions));
    }

    private async __create(
        request: Merge.accounting.InvoiceEndpointRequest,
        requestOptions?: Invoices.RequestOptions,
    ): Promise<core.WithRawResponse<Merge.accounting.InvoiceResponse>> {
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
                "accounting/v1/invoices",
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
            body: serializers.accounting.InvoiceEndpointRequest.jsonOrThrow(_body, { unrecognizedObjectKeys: "strip" }),
            timeoutMs: requestOptions?.timeoutInSeconds != null ? requestOptions.timeoutInSeconds * 1000 : 60000,
            maxRetries: requestOptions?.maxRetries,
            abortSignal: requestOptions?.abortSignal,
        });
        if (_response.ok) {
            return {
                data: serializers.accounting.InvoiceResponse.parseOrThrow(_response.body, {
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
                throw new errors.MergeTimeoutError("Timeout exceeded when calling POST /accounting/v1/invoices.");
            case "unknown":
                throw new errors.MergeError({
                    message: _response.error.errorMessage,
                    rawResponse: _response.rawResponse,
                });
        }
    }

    /**
     * Returns an `Invoice` object with the given `id`.
     *
     * @param {string} id
     * @param {Merge.accounting.InvoicesRetrieveRequest} request
     * @param {Invoices.RequestOptions} requestOptions - Request-specific configuration.
     *
     * @example
     *     await client.accounting.invoices.retrieve("id")
     */
    public retrieve(
        id: string,
        request: Merge.accounting.InvoicesRetrieveRequest = {},
        requestOptions?: Invoices.RequestOptions,
    ): core.HttpResponsePromise<Merge.accounting.Invoice> {
        return core.HttpResponsePromise.fromPromise(this.__retrieve(id, request, requestOptions));
    }

    private async __retrieve(
        id: string,
        request: Merge.accounting.InvoicesRetrieveRequest = {},
        requestOptions?: Invoices.RequestOptions,
    ): Promise<core.WithRawResponse<Merge.accounting.Invoice>> {
        const { expand, includeRemoteData, includeRemoteFields, includeShellData, remoteFields, showEnumOrigins } =
            request;
        const _queryParams: Record<string, string | string[] | object | object[] | null> = {};
        if (expand != null) {
            _queryParams["expand"] = serializers.accounting.InvoicesRetrieveRequestExpand.jsonOrThrow(expand, {
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
                `accounting/v1/invoices/${encodeURIComponent(id)}`,
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
                data: serializers.accounting.Invoice.parseOrThrow(_response.body, {
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
                throw new errors.MergeTimeoutError("Timeout exceeded when calling GET /accounting/v1/invoices/{id}.");
            case "unknown":
                throw new errors.MergeError({
                    message: _response.error.errorMessage,
                    rawResponse: _response.rawResponse,
                });
        }
    }

    /**
     * Updates an `Invoice` object with the given `id`.
     *
     * @param {string} id
     * @param {Merge.accounting.PatchedInvoiceEndpointRequest} request
     * @param {Invoices.RequestOptions} requestOptions - Request-specific configuration.
     *
     * @example
     *     await client.accounting.invoices.partialUpdate("id", {
     *         model: {}
     *     })
     */
    public partialUpdate(
        id: string,
        request: Merge.accounting.PatchedInvoiceEndpointRequest,
        requestOptions?: Invoices.RequestOptions,
    ): core.HttpResponsePromise<Merge.accounting.InvoiceResponse> {
        return core.HttpResponsePromise.fromPromise(this.__partialUpdate(id, request, requestOptions));
    }

    private async __partialUpdate(
        id: string,
        request: Merge.accounting.PatchedInvoiceEndpointRequest,
        requestOptions?: Invoices.RequestOptions,
    ): Promise<core.WithRawResponse<Merge.accounting.InvoiceResponse>> {
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
                `accounting/v1/invoices/${encodeURIComponent(id)}`,
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
            body: serializers.accounting.PatchedInvoiceEndpointRequest.jsonOrThrow(_body, {
                unrecognizedObjectKeys: "strip",
            }),
            timeoutMs: requestOptions?.timeoutInSeconds != null ? requestOptions.timeoutInSeconds * 1000 : 60000,
            maxRetries: requestOptions?.maxRetries,
            abortSignal: requestOptions?.abortSignal,
        });
        if (_response.ok) {
            return {
                data: serializers.accounting.InvoiceResponse.parseOrThrow(_response.body, {
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
                throw new errors.MergeTimeoutError("Timeout exceeded when calling PATCH /accounting/v1/invoices/{id}.");
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
     * @param {Merge.accounting.InvoicesLineItemsRemoteFieldClassesListRequest} request
     * @param {Invoices.RequestOptions} requestOptions - Request-specific configuration.
     *
     * @example
     *     await client.accounting.invoices.lineItemsRemoteFieldClassesList()
     */
    public lineItemsRemoteFieldClassesList(
        request: Merge.accounting.InvoicesLineItemsRemoteFieldClassesListRequest = {},
        requestOptions?: Invoices.RequestOptions,
    ): core.HttpResponsePromise<Merge.accounting.PaginatedRemoteFieldClassList> {
        return core.HttpResponsePromise.fromPromise(this.__lineItemsRemoteFieldClassesList(request, requestOptions));
    }

    private async __lineItemsRemoteFieldClassesList(
        request: Merge.accounting.InvoicesLineItemsRemoteFieldClassesListRequest = {},
        requestOptions?: Invoices.RequestOptions,
    ): Promise<core.WithRawResponse<Merge.accounting.PaginatedRemoteFieldClassList>> {
        const {
            cursor,
            includeDeletedData,
            includeRemoteData,
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
                "accounting/v1/invoices/line-items/remote-field-classes",
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
                data: serializers.accounting.PaginatedRemoteFieldClassList.parseOrThrow(_response.body, {
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
                    "Timeout exceeded when calling GET /accounting/v1/invoices/line-items/remote-field-classes.",
                );
            case "unknown":
                throw new errors.MergeError({
                    message: _response.error.errorMessage,
                    rawResponse: _response.rawResponse,
                });
        }
    }

    /**
     * Returns metadata for `Invoice` PATCHs.
     *
     * @param {string} id
     * @param {Invoices.RequestOptions} requestOptions - Request-specific configuration.
     *
     * @example
     *     await client.accounting.invoices.metaPatchRetrieve("id")
     */
    public metaPatchRetrieve(
        id: string,
        requestOptions?: Invoices.RequestOptions,
    ): core.HttpResponsePromise<Merge.accounting.MetaResponse> {
        return core.HttpResponsePromise.fromPromise(this.__metaPatchRetrieve(id, requestOptions));
    }

    private async __metaPatchRetrieve(
        id: string,
        requestOptions?: Invoices.RequestOptions,
    ): Promise<core.WithRawResponse<Merge.accounting.MetaResponse>> {
        const _response = await (this._options.fetcher ?? core.fetcher)({
            url: core.url.join(
                (await core.Supplier.get(this._options.baseUrl)) ??
                    (await core.Supplier.get(this._options.environment)) ??
                    environments.MergeEnvironment.Production,
                `accounting/v1/invoices/meta/patch/${encodeURIComponent(id)}`,
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
                data: serializers.accounting.MetaResponse.parseOrThrow(_response.body, {
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
                    "Timeout exceeded when calling GET /accounting/v1/invoices/meta/patch/{id}.",
                );
            case "unknown":
                throw new errors.MergeError({
                    message: _response.error.errorMessage,
                    rawResponse: _response.rawResponse,
                });
        }
    }

    /**
     * Returns metadata for `Invoice` POSTs.
     *
     * @param {Invoices.RequestOptions} requestOptions - Request-specific configuration.
     *
     * @example
     *     await client.accounting.invoices.metaPostRetrieve()
     */
    public metaPostRetrieve(
        requestOptions?: Invoices.RequestOptions,
    ): core.HttpResponsePromise<Merge.accounting.MetaResponse> {
        return core.HttpResponsePromise.fromPromise(this.__metaPostRetrieve(requestOptions));
    }

    private async __metaPostRetrieve(
        requestOptions?: Invoices.RequestOptions,
    ): Promise<core.WithRawResponse<Merge.accounting.MetaResponse>> {
        const _response = await (this._options.fetcher ?? core.fetcher)({
            url: core.url.join(
                (await core.Supplier.get(this._options.baseUrl)) ??
                    (await core.Supplier.get(this._options.environment)) ??
                    environments.MergeEnvironment.Production,
                "accounting/v1/invoices/meta/post",
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
                data: serializers.accounting.MetaResponse.parseOrThrow(_response.body, {
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
                    "Timeout exceeded when calling GET /accounting/v1/invoices/meta/post.",
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
     * @param {Merge.accounting.InvoicesRemoteFieldClassesListRequest} request
     * @param {Invoices.RequestOptions} requestOptions - Request-specific configuration.
     *
     * @example
     *     await client.accounting.invoices.remoteFieldClassesList()
     */
    public remoteFieldClassesList(
        request: Merge.accounting.InvoicesRemoteFieldClassesListRequest = {},
        requestOptions?: Invoices.RequestOptions,
    ): core.HttpResponsePromise<Merge.accounting.PaginatedRemoteFieldClassList> {
        return core.HttpResponsePromise.fromPromise(this.__remoteFieldClassesList(request, requestOptions));
    }

    private async __remoteFieldClassesList(
        request: Merge.accounting.InvoicesRemoteFieldClassesListRequest = {},
        requestOptions?: Invoices.RequestOptions,
    ): Promise<core.WithRawResponse<Merge.accounting.PaginatedRemoteFieldClassList>> {
        const {
            cursor,
            includeDeletedData,
            includeRemoteData,
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
                "accounting/v1/invoices/remote-field-classes",
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
                data: serializers.accounting.PaginatedRemoteFieldClassList.parseOrThrow(_response.body, {
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
                    "Timeout exceeded when calling GET /accounting/v1/invoices/remote-field-classes.",
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
