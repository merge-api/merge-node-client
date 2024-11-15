/**
 * This file was auto-generated by Fern from our API Definition.
 */

import * as environments from "../../../../../../environments";
import * as core from "../../../../../../core";
import * as Merge from "../../../../..";
import urlJoin from "url-join";
import * as serializers from "../../../../../../serialization";
import * as errors from "../../../../../../errors";

export declare namespace LinkedAccounts {
    interface Options {
        environment?: core.Supplier<environments.MergeEnvironment | string>;
        apiKey: core.Supplier<core.BearerToken>;
        accountToken?: core.Supplier<string | undefined>;
        fetcher?: core.FetchFunction;
    }

    interface RequestOptions {
        timeoutInSeconds?: number;
        maxRetries?: number;
    }
}

export class LinkedAccounts {
    constructor(protected readonly _options: LinkedAccounts.Options) {}

    /**
     * List linked accounts for your organization.
     *
     * @example
     *     await merge.filestorage.linkedAccounts.list({})
     */
    public async list(
        request: Merge.filestorage.LinkedAccountsListRequest = {},
        requestOptions?: LinkedAccounts.RequestOptions
    ): Promise<Merge.filestorage.PaginatedAccountDetailsAndActionsList> {
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
        const _queryParams: Record<string, string | string[]> = {};
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
                "filestorage/v1/linked-accounts"
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
                "X-Fern-SDK-Version": "1.0.12",
            },
            contentType: "application/json",
            queryParameters: _queryParams,
            timeoutMs: requestOptions?.timeoutInSeconds != null ? requestOptions.timeoutInSeconds * 1000 : 60000,
            maxRetries: requestOptions?.maxRetries,
        });
        if (_response.ok) {
            return await serializers.filestorage.PaginatedAccountDetailsAndActionsList.parseOrThrow(_response.body, {
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
                throw new errors.MergeTimeoutError();
            case "unknown":
                throw new errors.MergeError({
                    message: _response.error.errorMessage,
                });
        }
    }

    protected async _getAuthorizationHeader() {
        return `Bearer ${await core.Supplier.get(this._options.apiKey)}`;
    }
}
