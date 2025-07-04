/**
 * This file was auto-generated by Fern from our API Definition.
 */

import * as environments from "../../../../environments";
import * as core from "../../../../core";
import { AccountDetails } from "../resources/accountDetails/client/Client";
import { AccountToken } from "../resources/accountToken/client/Client";
import { Activities } from "../resources/activities/client/Client";
import { Applications } from "../resources/applications/client/Client";
import { AsyncPassthrough } from "../resources/asyncPassthrough/client/Client";
import { Attachments } from "../resources/attachments/client/Client";
import { AuditTrail } from "../resources/auditTrail/client/Client";
import { AvailableActions } from "../resources/availableActions/client/Client";
import { Candidates } from "../resources/candidates/client/Client";
import { Scopes } from "../resources/scopes/client/Client";
import { DeleteAccount } from "../resources/deleteAccount/client/Client";
import { Departments } from "../resources/departments/client/Client";
import { Eeocs } from "../resources/eeocs/client/Client";
import { FieldMapping } from "../resources/fieldMapping/client/Client";
import { GenerateKey } from "../resources/generateKey/client/Client";
import { Interviews } from "../resources/interviews/client/Client";
import { Issues } from "../resources/issues/client/Client";
import { JobInterviewStages } from "../resources/jobInterviewStages/client/Client";
import { JobPostings } from "../resources/jobPostings/client/Client";
import { Jobs } from "../resources/jobs/client/Client";
import { LinkToken } from "../resources/linkToken/client/Client";
import { LinkedAccounts } from "../resources/linkedAccounts/client/Client";
import { Offers } from "../resources/offers/client/Client";
import { Offices } from "../resources/offices/client/Client";
import { Passthrough } from "../resources/passthrough/client/Client";
import { RegenerateKey } from "../resources/regenerateKey/client/Client";
import { RejectReasons } from "../resources/rejectReasons/client/Client";
import { Scorecards } from "../resources/scorecards/client/Client";
import { SyncStatus } from "../resources/syncStatus/client/Client";
import { ForceResync } from "../resources/forceResync/client/Client";
import { Tags } from "../resources/tags/client/Client";
import { Users } from "../resources/users/client/Client";
import { WebhookReceivers } from "../resources/webhookReceivers/client/Client";

export declare namespace Ats {
    export interface Options {
        environment?: core.Supplier<environments.MergeEnvironment | string>;
        /** Specify a custom URL to connect the client to. */
        baseUrl?: core.Supplier<string>;
        apiKey: core.Supplier<core.BearerToken>;
        /** Override the X-Account-Token header */
        accountToken?: core.Supplier<string | undefined>;
        /** Additional headers to include in requests. */
        headers?: Record<string, string | core.Supplier<string | undefined> | undefined>;
        fetcher?: core.FetchFunction;
    }
}

export class Ats {
    protected readonly _options: Ats.Options;
    protected _accountDetails: AccountDetails | undefined;
    protected _accountToken: AccountToken | undefined;
    protected _activities: Activities | undefined;
    protected _applications: Applications | undefined;
    protected _asyncPassthrough: AsyncPassthrough | undefined;
    protected _attachments: Attachments | undefined;
    protected _auditTrail: AuditTrail | undefined;
    protected _availableActions: AvailableActions | undefined;
    protected _candidates: Candidates | undefined;
    protected _scopes: Scopes | undefined;
    protected _deleteAccount: DeleteAccount | undefined;
    protected _departments: Departments | undefined;
    protected _eeocs: Eeocs | undefined;
    protected _fieldMapping: FieldMapping | undefined;
    protected _generateKey: GenerateKey | undefined;
    protected _interviews: Interviews | undefined;
    protected _issues: Issues | undefined;
    protected _jobInterviewStages: JobInterviewStages | undefined;
    protected _jobPostings: JobPostings | undefined;
    protected _jobs: Jobs | undefined;
    protected _linkToken: LinkToken | undefined;
    protected _linkedAccounts: LinkedAccounts | undefined;
    protected _offers: Offers | undefined;
    protected _offices: Offices | undefined;
    protected _passthrough: Passthrough | undefined;
    protected _regenerateKey: RegenerateKey | undefined;
    protected _rejectReasons: RejectReasons | undefined;
    protected _scorecards: Scorecards | undefined;
    protected _syncStatus: SyncStatus | undefined;
    protected _forceResync: ForceResync | undefined;
    protected _tags: Tags | undefined;
    protected _users: Users | undefined;
    protected _webhookReceivers: WebhookReceivers | undefined;

    constructor(_options: Ats.Options) {
        this._options = _options;
    }

    public get accountDetails(): AccountDetails {
        return (this._accountDetails ??= new AccountDetails(this._options));
    }

    public get accountToken(): AccountToken {
        return (this._accountToken ??= new AccountToken(this._options));
    }

    public get activities(): Activities {
        return (this._activities ??= new Activities(this._options));
    }

    public get applications(): Applications {
        return (this._applications ??= new Applications(this._options));
    }

    public get asyncPassthrough(): AsyncPassthrough {
        return (this._asyncPassthrough ??= new AsyncPassthrough(this._options));
    }

    public get attachments(): Attachments {
        return (this._attachments ??= new Attachments(this._options));
    }

    public get auditTrail(): AuditTrail {
        return (this._auditTrail ??= new AuditTrail(this._options));
    }

    public get availableActions(): AvailableActions {
        return (this._availableActions ??= new AvailableActions(this._options));
    }

    public get candidates(): Candidates {
        return (this._candidates ??= new Candidates(this._options));
    }

    public get scopes(): Scopes {
        return (this._scopes ??= new Scopes(this._options));
    }

    public get deleteAccount(): DeleteAccount {
        return (this._deleteAccount ??= new DeleteAccount(this._options));
    }

    public get departments(): Departments {
        return (this._departments ??= new Departments(this._options));
    }

    public get eeocs(): Eeocs {
        return (this._eeocs ??= new Eeocs(this._options));
    }

    public get fieldMapping(): FieldMapping {
        return (this._fieldMapping ??= new FieldMapping(this._options));
    }

    public get generateKey(): GenerateKey {
        return (this._generateKey ??= new GenerateKey(this._options));
    }

    public get interviews(): Interviews {
        return (this._interviews ??= new Interviews(this._options));
    }

    public get issues(): Issues {
        return (this._issues ??= new Issues(this._options));
    }

    public get jobInterviewStages(): JobInterviewStages {
        return (this._jobInterviewStages ??= new JobInterviewStages(this._options));
    }

    public get jobPostings(): JobPostings {
        return (this._jobPostings ??= new JobPostings(this._options));
    }

    public get jobs(): Jobs {
        return (this._jobs ??= new Jobs(this._options));
    }

    public get linkToken(): LinkToken {
        return (this._linkToken ??= new LinkToken(this._options));
    }

    public get linkedAccounts(): LinkedAccounts {
        return (this._linkedAccounts ??= new LinkedAccounts(this._options));
    }

    public get offers(): Offers {
        return (this._offers ??= new Offers(this._options));
    }

    public get offices(): Offices {
        return (this._offices ??= new Offices(this._options));
    }

    public get passthrough(): Passthrough {
        return (this._passthrough ??= new Passthrough(this._options));
    }

    public get regenerateKey(): RegenerateKey {
        return (this._regenerateKey ??= new RegenerateKey(this._options));
    }

    public get rejectReasons(): RejectReasons {
        return (this._rejectReasons ??= new RejectReasons(this._options));
    }

    public get scorecards(): Scorecards {
        return (this._scorecards ??= new Scorecards(this._options));
    }

    public get syncStatus(): SyncStatus {
        return (this._syncStatus ??= new SyncStatus(this._options));
    }

    public get forceResync(): ForceResync {
        return (this._forceResync ??= new ForceResync(this._options));
    }

    public get tags(): Tags {
        return (this._tags ??= new Tags(this._options));
    }

    public get users(): Users {
        return (this._users ??= new Users(this._options));
    }

    public get webhookReceivers(): WebhookReceivers {
        return (this._webhookReceivers ??= new WebhookReceivers(this._options));
    }
}
