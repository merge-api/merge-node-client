/**
 * This file was auto-generated by Fern from our API Definition.
 */

import * as environments from "../../../../../../environments";
import * as core from "../../../../../../core";
import * as Merge from "../../../../..";
import urlJoin from "url-join";
import * as serializers from "../../../../../../serialization";
import * as errors from "../../../../../../errors";

export declare namespace Scopes {
    interface Options {
        environment?: core.Supplier<environments.MergeEnvironment | string>;
        apiKey: core.Supplier<core.BearerToken>;
        accountToken?: core.Supplier<string | undefined>;
    }

    interface RequestOptions {
        timeoutInSeconds?: number;
        maxRetries?: number;
    }
}

export class Scopes {
    constructor(protected readonly _options: Scopes.Options) {}

    /**
     * Get the default permissions for Merge Common Models and fields across all Linked Accounts of a given category. [Learn More](https://help.merge.dev/en/articles/8828211-common-model-and-field-scopes).
     *
     * @example
     *     await merge.ticketing.scopes.defaultScopesRetrieve()
     */
    public async defaultScopesRetrieve(
        requestOptions?: Scopes.RequestOptions
    ): Promise<Merge.ticketing.CommonModelScopeApi> {
        const _response = await core.fetcher({
            url: urlJoin(
                (await core.Supplier.get(this._options.environment)) ?? environments.MergeEnvironment.Production,
                "api/ticketing/v1/default-scopes"
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
                "X-Fern-SDK-Version": "1.0.6",
            },
            contentType: "application/json",
            timeoutMs: requestOptions?.timeoutInSeconds != null ? requestOptions.timeoutInSeconds * 1000 : 60000,
            maxRetries: requestOptions?.maxRetries,
        });
        if (_response.ok) {
            return await serializers.ticketing.CommonModelScopeApi.parseOrThrow(_response.body, {
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
     * Get all available permissions for Merge Common Models and fields for a single Linked Account. [Learn More](https://help.merge.dev/en/articles/8828211-common-model-and-field-scopes).
     *
     * @example
     *     await merge.ticketing.scopes.linkedAccountScopesRetrieve()
     */
    public async linkedAccountScopesRetrieve(
        requestOptions?: Scopes.RequestOptions
    ): Promise<Merge.ticketing.CommonModelScopeApi> {
        const _response = await core.fetcher({
            url: urlJoin(
                (await core.Supplier.get(this._options.environment)) ?? environments.MergeEnvironment.Production,
                "api/ticketing/v1/linked-account-scopes"
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
                "X-Fern-SDK-Version": "1.0.6",
            },
            contentType: "application/json",
            timeoutMs: requestOptions?.timeoutInSeconds != null ? requestOptions.timeoutInSeconds * 1000 : 60000,
            maxRetries: requestOptions?.maxRetries,
        });
        if (_response.ok) {
            return await serializers.ticketing.CommonModelScopeApi.parseOrThrow(_response.body, {
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
     * Update permissions for any Common Model or field for a single Linked Account. Any Scopes not set in this POST request will inherit the default Scopes. [Learn More](https://help.merge.dev/en/articles/8828211-common-model-and-field-scopes)
     *
     * @example
     *     await merge.ticketing.scopes.linkedAccountScopesCreate({
     *         commonModels: []
     *     })
     */
    public async linkedAccountScopesCreate(
        request: Merge.ticketing.LinkedAccountCommonModelScopeDeserializerRequest,
        requestOptions?: Scopes.RequestOptions
    ): Promise<Merge.ticketing.CommonModelScopeApi> {
        const _response = await core.fetcher({
            url: urlJoin(
                (await core.Supplier.get(this._options.environment)) ?? environments.MergeEnvironment.Production,
                "api/ticketing/v1/linked-account-scopes"
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
                "X-Fern-SDK-Version": "1.0.6",
            },
            contentType: "application/json",
            body: await serializers.ticketing.LinkedAccountCommonModelScopeDeserializerRequest.jsonOrThrow(request, {
                unrecognizedObjectKeys: "strip",
            }),
            timeoutMs: requestOptions?.timeoutInSeconds != null ? requestOptions.timeoutInSeconds * 1000 : 60000,
            maxRetries: requestOptions?.maxRetries,
        });
        if (_response.ok) {
            return await serializers.ticketing.CommonModelScopeApi.parseOrThrow(_response.body, {
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
