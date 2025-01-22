/**
 * This file was auto-generated by Fern from our API Definition.
 */

import * as environments from "../../../../../../environments";
import * as core from "../../../../../../core";
import * as Merge from "../../../../../index";
import urlJoin from "url-join";
import * as serializers from "../../../../../../serialization/index";
import * as errors from "../../../../../../errors/index";

export declare namespace Issues {
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

export class Issues {
    constructor(protected readonly _options: Issues.Options) {}

    /**
     * Gets all issues for Organization.
     *
     * @param {Merge.accounting.IssuesListRequest} request
     * @param {Issues.RequestOptions} requestOptions - Request-specific configuration.
     *
     * @example
     *     await client.accounting.issues.list()
     */
    public async list(
        request: Merge.accounting.IssuesListRequest = {},
        requestOptions?: Issues.RequestOptions
    ): Promise<Merge.accounting.PaginatedIssueList> {
        const {
            accountToken,
            cursor,
            endDate,
            endUserOrganizationName,
            firstIncidentTimeAfter,
            firstIncidentTimeBefore,
            includeMuted,
            integrationName,
            lastIncidentTimeAfter,
            lastIncidentTimeBefore,
            linkedAccountId,
            pageSize,
            startDate,
            status,
        } = request;
        const _queryParams: Record<string, string | string[] | object | object[]> = {};
        if (accountToken != null) {
            _queryParams["account_token"] = accountToken;
        }

        if (cursor != null) {
            _queryParams["cursor"] = cursor;
        }

        if (endDate != null) {
            _queryParams["end_date"] = endDate;
        }

        if (endUserOrganizationName != null) {
            _queryParams["end_user_organization_name"] = endUserOrganizationName;
        }

        if (firstIncidentTimeAfter != null) {
            _queryParams["first_incident_time_after"] = firstIncidentTimeAfter.toISOString();
        }

        if (firstIncidentTimeBefore != null) {
            _queryParams["first_incident_time_before"] = firstIncidentTimeBefore.toISOString();
        }

        if (includeMuted != null) {
            _queryParams["include_muted"] = includeMuted;
        }

        if (integrationName != null) {
            _queryParams["integration_name"] = integrationName;
        }

        if (lastIncidentTimeAfter != null) {
            _queryParams["last_incident_time_after"] = lastIncidentTimeAfter.toISOString();
        }

        if (lastIncidentTimeBefore != null) {
            _queryParams["last_incident_time_before"] = lastIncidentTimeBefore.toISOString();
        }

        if (linkedAccountId != null) {
            _queryParams["linked_account_id"] = linkedAccountId;
        }

        if (pageSize != null) {
            _queryParams["page_size"] = pageSize.toString();
        }

        if (startDate != null) {
            _queryParams["start_date"] = startDate;
        }

        if (status != null) {
            _queryParams["status"] = status;
        }

        const _response = await (this._options.fetcher ?? core.fetcher)({
            url: urlJoin(
                (await core.Supplier.get(this._options.environment)) ?? environments.MergeEnvironment.Production,
                "accounting/v1/issues"
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
                "X-Fern-SDK-Version": "1.1.2",
                "User-Agent": "@mergeapi/merge-node-client/1.1.2",
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
            return serializers.accounting.PaginatedIssueList.parseOrThrow(_response.body, {
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
                throw new errors.MergeTimeoutError("Timeout exceeded when calling GET /accounting/v1/issues.");
            case "unknown":
                throw new errors.MergeError({
                    message: _response.error.errorMessage,
                });
        }
    }

    /**
     * Get a specific issue.
     *
     * @param {string} id
     * @param {Issues.RequestOptions} requestOptions - Request-specific configuration.
     *
     * @example
     *     await client.accounting.issues.retrieve("id")
     */
    public async retrieve(id: string, requestOptions?: Issues.RequestOptions): Promise<Merge.accounting.Issue> {
        const _response = await (this._options.fetcher ?? core.fetcher)({
            url: urlJoin(
                (await core.Supplier.get(this._options.environment)) ?? environments.MergeEnvironment.Production,
                `accounting/v1/issues/${encodeURIComponent(id)}`
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
                "X-Fern-SDK-Version": "1.1.2",
                "User-Agent": "@mergeapi/merge-node-client/1.1.2",
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
            return serializers.accounting.Issue.parseOrThrow(_response.body, {
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
                throw new errors.MergeTimeoutError("Timeout exceeded when calling GET /accounting/v1/issues/{id}.");
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
