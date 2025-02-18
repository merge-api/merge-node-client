/**
 * This file was auto-generated by Fern from our API Definition.
 */

import * as environments from "../../../../../../environments";
import * as core from "../../../../../../core";
import * as Merge from "../../../../../index";
import urlJoin from "url-join";
import * as serializers from "../../../../../../serialization/index";
import * as errors from "../../../../../../errors/index";

export declare namespace EmployeePayrollRuns {
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

export class EmployeePayrollRuns {
    constructor(protected readonly _options: EmployeePayrollRuns.Options) {}

    /**
     * Returns a list of `EmployeePayrollRun` objects.
     *
     * @param {Merge.hris.EmployeePayrollRunsListRequest} request
     * @param {EmployeePayrollRuns.RequestOptions} requestOptions - Request-specific configuration.
     *
     * @example
     *     await client.hris.employeePayrollRuns.list()
     */
    public async list(
        request: Merge.hris.EmployeePayrollRunsListRequest = {},
        requestOptions?: EmployeePayrollRuns.RequestOptions
    ): Promise<Merge.hris.PaginatedEmployeePayrollRunList> {
        const {
            createdAfter,
            createdBefore,
            cursor,
            employeeId,
            endedAfter,
            endedBefore,
            expand,
            includeDeletedData,
            includeRemoteData,
            includeShellData,
            modifiedAfter,
            modifiedBefore,
            pageSize,
            payrollRunId,
            remoteId,
            startedAfter,
            startedBefore,
        } = request;
        const _queryParams: Record<string, string | string[] | object | object[]> = {};
        if (createdAfter != null) {
            _queryParams["created_after"] = createdAfter.toISOString();
        }

        if (createdBefore != null) {
            _queryParams["created_before"] = createdBefore.toISOString();
        }

        if (cursor != null) {
            _queryParams["cursor"] = cursor;
        }

        if (employeeId != null) {
            _queryParams["employee_id"] = employeeId;
        }

        if (endedAfter != null) {
            _queryParams["ended_after"] = endedAfter.toISOString();
        }

        if (endedBefore != null) {
            _queryParams["ended_before"] = endedBefore.toISOString();
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

        if (pageSize != null) {
            _queryParams["page_size"] = pageSize.toString();
        }

        if (payrollRunId != null) {
            _queryParams["payroll_run_id"] = payrollRunId;
        }

        if (remoteId != null) {
            _queryParams["remote_id"] = remoteId;
        }

        if (startedAfter != null) {
            _queryParams["started_after"] = startedAfter.toISOString();
        }

        if (startedBefore != null) {
            _queryParams["started_before"] = startedBefore.toISOString();
        }

        const _response = await (this._options.fetcher ?? core.fetcher)({
            url: urlJoin(
                (await core.Supplier.get(this._options.environment)) ?? environments.MergeEnvironment.Production,
                "hris/v1/employee-payroll-runs"
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
                "X-Fern-SDK-Version": "1.1.5",
                "User-Agent": "@mergeapi/merge-node-client/1.1.5",
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
            return serializers.hris.PaginatedEmployeePayrollRunList.parseOrThrow(_response.body, {
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
                throw new errors.MergeTimeoutError("Timeout exceeded when calling GET /hris/v1/employee-payroll-runs.");
            case "unknown":
                throw new errors.MergeError({
                    message: _response.error.errorMessage,
                });
        }
    }

    /**
     * Returns an `EmployeePayrollRun` object with the given `id`.
     *
     * @param {string} id
     * @param {Merge.hris.EmployeePayrollRunsRetrieveRequest} request
     * @param {EmployeePayrollRuns.RequestOptions} requestOptions - Request-specific configuration.
     *
     * @example
     *     await client.hris.employeePayrollRuns.retrieve("id")
     */
    public async retrieve(
        id: string,
        request: Merge.hris.EmployeePayrollRunsRetrieveRequest = {},
        requestOptions?: EmployeePayrollRuns.RequestOptions
    ): Promise<Merge.hris.EmployeePayrollRun> {
        const { expand, includeRemoteData } = request;
        const _queryParams: Record<string, string | string[] | object | object[]> = {};
        if (expand != null) {
            _queryParams["expand"] = expand;
        }

        if (includeRemoteData != null) {
            _queryParams["include_remote_data"] = includeRemoteData.toString();
        }

        const _response = await (this._options.fetcher ?? core.fetcher)({
            url: urlJoin(
                (await core.Supplier.get(this._options.environment)) ?? environments.MergeEnvironment.Production,
                `hris/v1/employee-payroll-runs/${encodeURIComponent(id)}`
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
                "X-Fern-SDK-Version": "1.1.5",
                "User-Agent": "@mergeapi/merge-node-client/1.1.5",
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
            return serializers.hris.EmployeePayrollRun.parseOrThrow(_response.body, {
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
                    "Timeout exceeded when calling GET /hris/v1/employee-payroll-runs/{id}."
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
