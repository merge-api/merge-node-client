/**
 * This file was auto-generated by Fern from our API Definition.
 */

import * as environments from "../../../../environments";
import * as core from "../../../../core";
import { AccountDetails } from "../resources/accountDetails/client/Client";
import { AccountToken } from "../resources/accountToken/client/Client";
import { Accounts } from "../resources/accounts/client/Client";
import { AsyncPassthrough } from "../resources/asyncPassthrough/client/Client";
import { Attachments } from "../resources/attachments/client/Client";
import { AuditTrail } from "../resources/auditTrail/client/Client";
import { AvailableActions } from "../resources/availableActions/client/Client";
import { Collections } from "../resources/collections/client/Client";
import { Comments } from "../resources/comments/client/Client";
import { Contacts } from "../resources/contacts/client/Client";
import { Scopes } from "../resources/scopes/client/Client";
import { DeleteAccount } from "../resources/deleteAccount/client/Client";
import { FieldMapping } from "../resources/fieldMapping/client/Client";
import { GenerateKey } from "../resources/generateKey/client/Client";
import { Issues } from "../resources/issues/client/Client";
import { LinkToken } from "../resources/linkToken/client/Client";
import { LinkedAccounts } from "../resources/linkedAccounts/client/Client";
import { Passthrough } from "../resources/passthrough/client/Client";
import { Projects } from "../resources/projects/client/Client";
import { RegenerateKey } from "../resources/regenerateKey/client/Client";
import { Roles } from "../resources/roles/client/Client";
import { SelectiveSync } from "../resources/selectiveSync/client/Client";
import { SyncStatus } from "../resources/syncStatus/client/Client";
import { ForceResync } from "../resources/forceResync/client/Client";
import { Tags } from "../resources/tags/client/Client";
import { Teams } from "../resources/teams/client/Client";
import { Tickets } from "../resources/tickets/client/Client";
import { Users } from "../resources/users/client/Client";
import { WebhookReceivers } from "../resources/webhookReceivers/client/Client";

export declare namespace Ticketing {
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

export class Ticketing {
    constructor(protected readonly _options: Ticketing.Options) {}

    protected _accountDetails: AccountDetails | undefined;

    public get accountDetails(): AccountDetails {
        return (this._accountDetails ??= new AccountDetails(this._options));
    }

    protected _accountToken: AccountToken | undefined;

    public get accountToken(): AccountToken {
        return (this._accountToken ??= new AccountToken(this._options));
    }

    protected _accounts: Accounts | undefined;

    public get accounts(): Accounts {
        return (this._accounts ??= new Accounts(this._options));
    }

    protected _asyncPassthrough: AsyncPassthrough | undefined;

    public get asyncPassthrough(): AsyncPassthrough {
        return (this._asyncPassthrough ??= new AsyncPassthrough(this._options));
    }

    protected _attachments: Attachments | undefined;

    public get attachments(): Attachments {
        return (this._attachments ??= new Attachments(this._options));
    }

    protected _auditTrail: AuditTrail | undefined;

    public get auditTrail(): AuditTrail {
        return (this._auditTrail ??= new AuditTrail(this._options));
    }

    protected _availableActions: AvailableActions | undefined;

    public get availableActions(): AvailableActions {
        return (this._availableActions ??= new AvailableActions(this._options));
    }

    protected _collections: Collections | undefined;

    public get collections(): Collections {
        return (this._collections ??= new Collections(this._options));
    }

    protected _comments: Comments | undefined;

    public get comments(): Comments {
        return (this._comments ??= new Comments(this._options));
    }

    protected _contacts: Contacts | undefined;

    public get contacts(): Contacts {
        return (this._contacts ??= new Contacts(this._options));
    }

    protected _scopes: Scopes | undefined;

    public get scopes(): Scopes {
        return (this._scopes ??= new Scopes(this._options));
    }

    protected _deleteAccount: DeleteAccount | undefined;

    public get deleteAccount(): DeleteAccount {
        return (this._deleteAccount ??= new DeleteAccount(this._options));
    }

    protected _fieldMapping: FieldMapping | undefined;

    public get fieldMapping(): FieldMapping {
        return (this._fieldMapping ??= new FieldMapping(this._options));
    }

    protected _generateKey: GenerateKey | undefined;

    public get generateKey(): GenerateKey {
        return (this._generateKey ??= new GenerateKey(this._options));
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

    protected _projects: Projects | undefined;

    public get projects(): Projects {
        return (this._projects ??= new Projects(this._options));
    }

    protected _regenerateKey: RegenerateKey | undefined;

    public get regenerateKey(): RegenerateKey {
        return (this._regenerateKey ??= new RegenerateKey(this._options));
    }

    protected _roles: Roles | undefined;

    public get roles(): Roles {
        return (this._roles ??= new Roles(this._options));
    }

    protected _selectiveSync: SelectiveSync | undefined;

    public get selectiveSync(): SelectiveSync {
        return (this._selectiveSync ??= new SelectiveSync(this._options));
    }

    protected _syncStatus: SyncStatus | undefined;

    public get syncStatus(): SyncStatus {
        return (this._syncStatus ??= new SyncStatus(this._options));
    }

    protected _forceResync: ForceResync | undefined;

    public get forceResync(): ForceResync {
        return (this._forceResync ??= new ForceResync(this._options));
    }

    protected _tags: Tags | undefined;

    public get tags(): Tags {
        return (this._tags ??= new Tags(this._options));
    }

    protected _teams: Teams | undefined;

    public get teams(): Teams {
        return (this._teams ??= new Teams(this._options));
    }

    protected _tickets: Tickets | undefined;

    public get tickets(): Tickets {
        return (this._tickets ??= new Tickets(this._options));
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
