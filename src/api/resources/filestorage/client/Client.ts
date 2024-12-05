/**
 * This file was auto-generated by Fern from our API Definition.
 */

import * as environments from "../../../../environments";
import * as core from "../../../../core";
import { AccountDetails } from "../resources/accountDetails/client/Client";
import { AccountToken } from "../resources/accountToken/client/Client";
import { AsyncPassthrough } from "../resources/asyncPassthrough/client/Client";
import { AuditTrail } from "../resources/auditTrail/client/Client";
import { AvailableActions } from "../resources/availableActions/client/Client";
import { Scopes } from "../resources/scopes/client/Client";
import { DeleteAccount } from "../resources/deleteAccount/client/Client";
import { Drives } from "../resources/drives/client/Client";
import { FieldMapping } from "../resources/fieldMapping/client/Client";
import { Files } from "../resources/files/client/Client";
import { Folders } from "../resources/folders/client/Client";
import { GenerateKey } from "../resources/generateKey/client/Client";
import { Groups } from "../resources/groups/client/Client";
import { Issues } from "../resources/issues/client/Client";
import { LinkToken } from "../resources/linkToken/client/Client";
import { LinkedAccounts } from "../resources/linkedAccounts/client/Client";
import { Passthrough } from "../resources/passthrough/client/Client";
import { RegenerateKey } from "../resources/regenerateKey/client/Client";
import { SyncStatus } from "../resources/syncStatus/client/Client";
import { ForceResync } from "../resources/forceResync/client/Client";
import { Users } from "../resources/users/client/Client";
import { WebhookReceivers } from "../resources/webhookReceivers/client/Client";

export declare namespace Filestorage {
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

export class Filestorage {
    constructor(protected readonly _options: Filestorage.Options) {}

    protected _accountDetails: AccountDetails | undefined;

    public get accountDetails(): AccountDetails {
        return (this._accountDetails ??= new AccountDetails(this._options));
    }

    protected _accountToken: AccountToken | undefined;

    public get accountToken(): AccountToken {
        return (this._accountToken ??= new AccountToken(this._options));
    }

    protected _asyncPassthrough: AsyncPassthrough | undefined;

    public get asyncPassthrough(): AsyncPassthrough {
        return (this._asyncPassthrough ??= new AsyncPassthrough(this._options));
    }

    protected _auditTrail: AuditTrail | undefined;

    public get auditTrail(): AuditTrail {
        return (this._auditTrail ??= new AuditTrail(this._options));
    }

    protected _availableActions: AvailableActions | undefined;

    public get availableActions(): AvailableActions {
        return (this._availableActions ??= new AvailableActions(this._options));
    }

    protected _scopes: Scopes | undefined;

    public get scopes(): Scopes {
        return (this._scopes ??= new Scopes(this._options));
    }

    protected _deleteAccount: DeleteAccount | undefined;

    public get deleteAccount(): DeleteAccount {
        return (this._deleteAccount ??= new DeleteAccount(this._options));
    }

    protected _drives: Drives | undefined;

    public get drives(): Drives {
        return (this._drives ??= new Drives(this._options));
    }

    protected _fieldMapping: FieldMapping | undefined;

    public get fieldMapping(): FieldMapping {
        return (this._fieldMapping ??= new FieldMapping(this._options));
    }

    protected _files: Files | undefined;

    public get files(): Files {
        return (this._files ??= new Files(this._options));
    }

    protected _folders: Folders | undefined;

    public get folders(): Folders {
        return (this._folders ??= new Folders(this._options));
    }

    protected _generateKey: GenerateKey | undefined;

    public get generateKey(): GenerateKey {
        return (this._generateKey ??= new GenerateKey(this._options));
    }

    protected _groups: Groups | undefined;

    public get groups(): Groups {
        return (this._groups ??= new Groups(this._options));
    }

    protected _issues: Issues | undefined;

    public get issues(): Issues {
        return (this._issues ??= new Issues(this._options));
    }

    protected _linkToken: LinkToken | undefined;

    public get linkToken(): LinkToken {
        return (this._linkToken ??= new LinkToken(this._options));
    }

    protected _linkedAccounts: LinkedAccounts | undefined;

    public get linkedAccounts(): LinkedAccounts {
        return (this._linkedAccounts ??= new LinkedAccounts(this._options));
    }

    protected _passthrough: Passthrough | undefined;

    public get passthrough(): Passthrough {
        return (this._passthrough ??= new Passthrough(this._options));
    }

    protected _regenerateKey: RegenerateKey | undefined;

    public get regenerateKey(): RegenerateKey {
        return (this._regenerateKey ??= new RegenerateKey(this._options));
    }

    protected _syncStatus: SyncStatus | undefined;

    public get syncStatus(): SyncStatus {
        return (this._syncStatus ??= new SyncStatus(this._options));
    }

    protected _forceResync: ForceResync | undefined;

    public get forceResync(): ForceResync {
        return (this._forceResync ??= new ForceResync(this._options));
    }

    protected _users: Users | undefined;

    public get users(): Users {
        return (this._users ??= new Users(this._options));
    }

    protected _webhookReceivers: WebhookReceivers | undefined;

    public get webhookReceivers(): WebhookReceivers {
        return (this._webhookReceivers ??= new WebhookReceivers(this._options));
    }
}
