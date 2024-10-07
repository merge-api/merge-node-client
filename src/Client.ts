/**
 * This file was auto-generated by Fern from our API Definition.
 */

import * as environments from "./environments";
import * as core from "./core";
import { Filestorage } from "./api/resources/filestorage/client/Client";
import { Ticketing } from "./api/resources/ticketing/client/Client";
import { Ats } from "./api/resources/ats/client/Client";
import { Crm } from "./api/resources/crm/client/Client";
import { Hris } from "./api/resources/hris/client/Client";
import { Accounting } from "./api/resources/accounting/client/Client";

export declare namespace MergeClient {
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

export class MergeClient {
    constructor(protected readonly _options: MergeClient.Options) {}

    protected _filestorage: Filestorage | undefined;

    public get filestorage(): Filestorage {
        return (this._filestorage ??= new Filestorage(this._options));
    }

    protected _ticketing: Ticketing | undefined;

    public get ticketing(): Ticketing {
        return (this._ticketing ??= new Ticketing(this._options));
    }

    protected _ats: Ats | undefined;

    public get ats(): Ats {
        return (this._ats ??= new Ats(this._options));
    }

    protected _crm: Crm | undefined;

    public get crm(): Crm {
        return (this._crm ??= new Crm(this._options));
    }

    protected _hris: Hris | undefined;

    public get hris(): Hris {
        return (this._hris ??= new Hris(this._options));
    }

    protected _accounting: Accounting | undefined;

    public get accounting(): Accounting {
        return (this._accounting ??= new Accounting(this._options));
    }
}
