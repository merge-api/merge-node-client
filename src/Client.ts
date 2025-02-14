/**
 * This file was auto-generated by Fern from our API Definition.
 */

import * as environments from "./environments";
import * as core from "./core";
import { Crm } from "./api/resources/crm/client/Client";
import { Ats } from "./api/resources/ats/client/Client";
import { Filestorage } from "./api/resources/filestorage/client/Client";
import { Hris } from "./api/resources/hris/client/Client";
import { Ticketing } from "./api/resources/ticketing/client/Client";
import { Accounting } from "./api/resources/accounting/client/Client";

export declare namespace MergeClient {
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

export class MergeClient {
    constructor(protected readonly _options: MergeClient.Options) {}

    protected _crm: Crm | undefined;

    public get crm(): Crm {
        return (this._crm ??= new Crm(this._options));
    }

    protected _ats: Ats | undefined;

    public get ats(): Ats {
        return (this._ats ??= new Ats(this._options));
    }

    protected _filestorage: Filestorage | undefined;

    public get filestorage(): Filestorage {
        return (this._filestorage ??= new Filestorage(this._options));
    }

    protected _hris: Hris | undefined;

    public get hris(): Hris {
        return (this._hris ??= new Hris(this._options));
    }

    protected _ticketing: Ticketing | undefined;

    public get ticketing(): Ticketing {
        return (this._ticketing ??= new Ticketing(this._options));
    }

    protected _accounting: Accounting | undefined;

    public get accounting(): Accounting {
        return (this._accounting ??= new Accounting(this._options));
    }
}
