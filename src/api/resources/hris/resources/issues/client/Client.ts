/**
 * This file was auto-generated by Fern from our API Definition.
 */

import * as environments from "../../../../../../environments";
import * as core from "../../../../../../core";
import * as Merge from "../../../../..";
import { default as URLSearchParams } from "@ungap/url-search-params";
import urlJoin from "url-join";
import * as serializers from "../../../../../../serialization";
import * as errors from "../../../../../../errors";

export declare namespace Issues {
    interface Options {
        environment?: core.Supplier<environments.MergeEnvironment | string>;
        apiKey: core.Supplier<core.BearerToken>;
        accountToken?: core.Supplier<string | undefined>;
    }

    interface RequestOptions {
        timeoutInSeconds?: number;
    }
}

export class Issues {
    constructor(protected readonly _options: Issues.Options) {}

    /**
     * Gets issues.
     */
    public async list(
        request: Merge.hris.IssuesListRequest = {},
        requestOptions?: Issues.RequestOptions
    ): Promise<Merge.hris.PaginatedIssueList> {
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
            pageSize,
            startDate,
            status,
        } = request;
        const _queryParams = new URLSearchParams();
        if (accountToken != null) {
            _queryParams.append("account_token", accountToken);
        }

        if (cursor != null) {
            _queryParams.append("cursor", cursor);
        }

        if (endDate != null) {
            _queryParams.append("end_date", endDate);
        }

        if (endUserOrganizationName != null) {
            _queryParams.append("end_user_organization_name", endUserOrganizationName);
        }

        if (firstIncidentTimeAfter != null) {
            _queryParams.append("first_incident_time_after", firstIncidentTimeAfter.toISOString());
        }

        if (firstIncidentTimeBefore != null) {
            _queryParams.append("first_incident_time_before", firstIncidentTimeBefore.toISOString());
        }

        if (includeMuted != null) {
            _queryParams.append("include_muted", includeMuted);
        }

        if (integrationName != null) {
            _queryParams.append("integration_name", integrationName);
        }

        if (lastIncidentTimeAfter != null) {
            _queryParams.append("last_incident_time_after", lastIncidentTimeAfter.toISOString());
        }

        if (lastIncidentTimeBefore != null) {
            _queryParams.append("last_incident_time_before", lastIncidentTimeBefore.toISOString());
        }

        if (pageSize != null) {
            _queryParams.append("page_size", pageSize.toString());
        }

        if (startDate != null) {
            _queryParams.append("start_date", startDate);
        }

        if (status != null) {
            _queryParams.append("status", status);
        }

        const _response = await core.fetcher({
            url: urlJoin(
                (await core.Supplier.get(this._options.environment)) ?? environments.MergeEnvironment.Production,
                "api/hris/v1/issues"
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
                "X-Fern-SDK-Version": "0.1.7",
            },
            contentType: "application/json",
            queryParameters: _queryParams,
            timeoutMs: requestOptions?.timeoutInSeconds != null ? requestOptions.timeoutInSeconds * 1000 : 60000,
        });
        if (_response.ok) {
            return await serializers.hris.PaginatedIssueList.parseOrThrow(_response.body, {
                unrecognizedObjectKeys: "passthrough",
                allowUnrecognizedUnionMembers: true,
                allowUnrecognizedEnumValues: true,
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

    /**
     * Get a specific issue.
     */
    public async retrieve(id: string, requestOptions?: Issues.RequestOptions): Promise<Merge.hris.Issue> {
        const _response = await core.fetcher({
            url: urlJoin(
                (await core.Supplier.get(this._options.environment)) ?? environments.MergeEnvironment.Production,
                `api/hris/v1/issues/${id}`
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
                "X-Fern-SDK-Version": "0.1.7",
            },
            contentType: "application/json",
            timeoutMs: requestOptions?.timeoutInSeconds != null ? requestOptions.timeoutInSeconds * 1000 : 60000,
        });
        if (_response.ok) {
            return await serializers.hris.Issue.parseOrThrow(_response.body, {
                unrecognizedObjectKeys: "passthrough",
                allowUnrecognizedUnionMembers: true,
                allowUnrecognizedEnumValues: true,
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
