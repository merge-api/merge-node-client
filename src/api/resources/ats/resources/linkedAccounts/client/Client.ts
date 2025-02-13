/**
 * This file was auto-generated by Fern from our API Definition.
 */

import * as environments from "../../../../../../environments";
import * as core from "../../../../../../core";
import * as Merge from "../../../../../index";
import urlJoin from "url-join";
import * as serializers from "../../../../../../serialization/index";
import * as errors from "../../../../../../errors/index";

export declare namespace LinkedAccounts {
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

export class LinkedAccounts {
    constructor(protected readonly _options: LinkedAccounts.Options) {}

    /**
     * List linked accounts for your organization.
     *
     * @param {Merge.ats.LinkedAccountsListRequest} request
     * @param {LinkedAccounts.RequestOptions} requestOptions - Request-specific configuration.
     *
     * @example
     *     await client.ats.linkedAccounts.list()
     */
    public async list(
        request: Merge.ats.LinkedAccountsListRequest = {},
        requestOptions?: LinkedAccounts.RequestOptions
    ): Promise<Merge.ats.PaginatedAccountDetailsAndActionsList> {
        const {
            category,
            cursor,
            endUserEmailAddress,
            endUserOrganizationName,
            endUserOriginId,
            endUserOriginIds,
            id,
            ids,
            includeDuplicates,
            integrationName,
            isTestAccount,
            pageSize,
            status,
        } = request;
        const _queryParams: Record<string, string | string[] | object | object[]> = {};
        if (category != null) {
            _queryParams["category"] = category;
        }

        if (cursor != null) {
            _queryParams["cursor"] = cursor;
        }

        if (endUserEmailAddress != null) {
            _queryParams["end_user_email_address"] = endUserEmailAddress;
        }

        if (endUserOrganizationName != null) {
            _queryParams["end_user_organization_name"] = endUserOrganizationName;
        }

        if (endUserOriginId != null) {
            _queryParams["end_user_origin_id"] = endUserOriginId;
        }

        if (endUserOriginIds != null) {
            _queryParams["end_user_origin_ids"] = endUserOriginIds;
        }

        if (id != null) {
            _queryParams["id"] = id;
        }

        if (ids != null) {
            _queryParams["ids"] = ids;
        }

        if (includeDuplicates != null) {
            _queryParams["include_duplicates"] = includeDuplicates.toString();
        }

        if (integrationName != null) {
            _queryParams["integration_name"] = integrationName;
        }

        if (isTestAccount != null) {
            _queryParams["is_test_account"] = isTestAccount;
        }

        if (pageSize != null) {
            _queryParams["page_size"] = pageSize.toString();
        }

        if (status != null) {
            _queryParams["status"] = status;
        }

        const _response = await (this._options.fetcher ?? core.fetcher)({
            url: urlJoin(
                (await core.Supplier.get(this._options.environment)) ?? environments.MergeEnvironment.Production,
                "ats/v1/linked-accounts"
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
            return serializers.ats.PaginatedAccountDetailsAndActionsList.parseOrThrow(_response.body, {
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
                throw new errors.MergeTimeoutError("Timeout exceeded when calling GET /ats/v1/linked-accounts.");
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
