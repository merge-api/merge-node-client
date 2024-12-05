/**
 * This file was auto-generated by Fern from our API Definition.
 */

import * as environments from "../../../../environments";
import * as core from "../../../../core";
import { AccountDetails } from "../resources/accountDetails/client/Client";
import { AccountToken } from "../resources/accountToken/client/Client";
import { AccountingPeriods } from "../resources/accountingPeriods/client/Client";
import { Accounts } from "../resources/accounts/client/Client";
import { Addresses } from "../resources/addresses/client/Client";
import { AsyncPassthrough } from "../resources/asyncPassthrough/client/Client";
import { Attachments } from "../resources/attachments/client/Client";
import { AuditTrail } from "../resources/auditTrail/client/Client";
import { AvailableActions } from "../resources/availableActions/client/Client";
import { BalanceSheets } from "../resources/balanceSheets/client/Client";
import { CashFlowStatements } from "../resources/cashFlowStatements/client/Client";
import { CompanyInfo } from "../resources/companyInfo/client/Client";
import { Contacts } from "../resources/contacts/client/Client";
import { CreditNotes } from "../resources/creditNotes/client/Client";
import { Scopes } from "../resources/scopes/client/Client";
import { DeleteAccount } from "../resources/deleteAccount/client/Client";
import { Expenses } from "../resources/expenses/client/Client";
import { FieldMapping } from "../resources/fieldMapping/client/Client";
import { GenerateKey } from "../resources/generateKey/client/Client";
import { IncomeStatements } from "../resources/incomeStatements/client/Client";
import { Invoices } from "../resources/invoices/client/Client";
import { Issues } from "../resources/issues/client/Client";
import { Items } from "../resources/items/client/Client";
import { JournalEntries } from "../resources/journalEntries/client/Client";
import { LinkToken } from "../resources/linkToken/client/Client";
import { LinkedAccounts } from "../resources/linkedAccounts/client/Client";
import { Passthrough } from "../resources/passthrough/client/Client";
import { Payments } from "../resources/payments/client/Client";
import { PhoneNumbers } from "../resources/phoneNumbers/client/Client";
import { PurchaseOrders } from "../resources/purchaseOrders/client/Client";
import { RegenerateKey } from "../resources/regenerateKey/client/Client";
import { SyncStatus } from "../resources/syncStatus/client/Client";
import { ForceResync } from "../resources/forceResync/client/Client";
import { TaxRates } from "../resources/taxRates/client/Client";
import { TrackingCategories } from "../resources/trackingCategories/client/Client";
import { Transactions } from "../resources/transactions/client/Client";
import { VendorCredits } from "../resources/vendorCredits/client/Client";
import { WebhookReceivers } from "../resources/webhookReceivers/client/Client";

export declare namespace Accounting {
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

export class Accounting {
    constructor(protected readonly _options: Accounting.Options) {}

    protected _accountDetails: AccountDetails | undefined;

    public get accountDetails(): AccountDetails {
        return (this._accountDetails ??= new AccountDetails(this._options));
    }

    protected _accountToken: AccountToken | undefined;

    public get accountToken(): AccountToken {
        return (this._accountToken ??= new AccountToken(this._options));
    }

    protected _accountingPeriods: AccountingPeriods | undefined;

    public get accountingPeriods(): AccountingPeriods {
        return (this._accountingPeriods ??= new AccountingPeriods(this._options));
    }

    protected _accounts: Accounts | undefined;

    public get accounts(): Accounts {
        return (this._accounts ??= new Accounts(this._options));
    }

    protected _addresses: Addresses | undefined;

    public get addresses(): Addresses {
        return (this._addresses ??= new Addresses(this._options));
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

    protected _balanceSheets: BalanceSheets | undefined;

    public get balanceSheets(): BalanceSheets {
        return (this._balanceSheets ??= new BalanceSheets(this._options));
    }

    protected _cashFlowStatements: CashFlowStatements | undefined;

    public get cashFlowStatements(): CashFlowStatements {
        return (this._cashFlowStatements ??= new CashFlowStatements(this._options));
    }

    protected _companyInfo: CompanyInfo | undefined;

    public get companyInfo(): CompanyInfo {
        return (this._companyInfo ??= new CompanyInfo(this._options));
    }

    protected _contacts: Contacts | undefined;

    public get contacts(): Contacts {
        return (this._contacts ??= new Contacts(this._options));
    }

    protected _creditNotes: CreditNotes | undefined;

    public get creditNotes(): CreditNotes {
        return (this._creditNotes ??= new CreditNotes(this._options));
    }

    protected _scopes: Scopes | undefined;

    public get scopes(): Scopes {
        return (this._scopes ??= new Scopes(this._options));
    }

    protected _deleteAccount: DeleteAccount | undefined;

    public get deleteAccount(): DeleteAccount {
        return (this._deleteAccount ??= new DeleteAccount(this._options));
    }

    protected _expenses: Expenses | undefined;

    public get expenses(): Expenses {
        return (this._expenses ??= new Expenses(this._options));
    }

    protected _fieldMapping: FieldMapping | undefined;

    public get fieldMapping(): FieldMapping {
        return (this._fieldMapping ??= new FieldMapping(this._options));
    }

    protected _generateKey: GenerateKey | undefined;

    public get generateKey(): GenerateKey {
        return (this._generateKey ??= new GenerateKey(this._options));
    }

    protected _incomeStatements: IncomeStatements | undefined;

    public get incomeStatements(): IncomeStatements {
        return (this._incomeStatements ??= new IncomeStatements(this._options));
    }

    protected _invoices: Invoices | undefined;

    public get invoices(): Invoices {
        return (this._invoices ??= new Invoices(this._options));
    }

    protected _issues: Issues | undefined;

    public get issues(): Issues {
        return (this._issues ??= new Issues(this._options));
    }

    protected _items: Items | undefined;

    public get items(): Items {
        return (this._items ??= new Items(this._options));
    }

    protected _journalEntries: JournalEntries | undefined;

    public get journalEntries(): JournalEntries {
        return (this._journalEntries ??= new JournalEntries(this._options));
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

    protected _payments: Payments | undefined;

    public get payments(): Payments {
        return (this._payments ??= new Payments(this._options));
    }

    protected _phoneNumbers: PhoneNumbers | undefined;

    public get phoneNumbers(): PhoneNumbers {
        return (this._phoneNumbers ??= new PhoneNumbers(this._options));
    }

    protected _purchaseOrders: PurchaseOrders | undefined;

    public get purchaseOrders(): PurchaseOrders {
        return (this._purchaseOrders ??= new PurchaseOrders(this._options));
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

    protected _taxRates: TaxRates | undefined;

    public get taxRates(): TaxRates {
        return (this._taxRates ??= new TaxRates(this._options));
    }

    protected _trackingCategories: TrackingCategories | undefined;

    public get trackingCategories(): TrackingCategories {
        return (this._trackingCategories ??= new TrackingCategories(this._options));
    }

    protected _transactions: Transactions | undefined;

    public get transactions(): Transactions {
        return (this._transactions ??= new Transactions(this._options));
    }

    protected _vendorCredits: VendorCredits | undefined;

    public get vendorCredits(): VendorCredits {
        return (this._vendorCredits ??= new VendorCredits(this._options));
    }

    protected _webhookReceivers: WebhookReceivers | undefined;

    public get webhookReceivers(): WebhookReceivers {
        return (this._webhookReceivers ??= new WebhookReceivers(this._options));
    }
}
