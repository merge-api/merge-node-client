/**
 * This file was auto-generated by Fern from our API Definition.
 */

import * as Merge from "../../../index";

/**
 * # The GeneralLedgerTransaction Object
 * ### Description
 * A General Ledger Entry is a record of a financial transaction that is posted to the general ledger, the central repository of a company’s financial data.
 *
 * The `GeneralLedgerTransaction` object is a singular endpoint to pull all transactions posted to a company’s general ledger. The transaction that generated the `GeneralLedgerTransaction` can be found by referencing the `underlying_transaction_type` and `underlying_transaction_remote_id` fields.
 *
 * The lines of a `GeneralLedgerTransaction` object will always have equal amounts of debits and credits.
 *
 * ### Usage Example
 * Fetch from the `GET GeneralLedgerTransaction` endpoint and view a general ledger transaction.
 */
export interface GeneralLedgerTransaction {
    id?: string;
    /** The third-party API ID of the matching object. */
    remoteId?: string;
    /** The datetime that this object was created by Merge. */
    createdAt?: Date;
    /** The datetime that this object was modified by Merge. */
    modifiedAt?: Date;
    /** The third party remote ID of the underlying transaction. */
    underlyingTransactionRemoteId?: string;
    /**
     * The type of the underlying transaction.
     *
     * * `INVOICE` - INVOICE
     * * `EXPENSE` - EXPENSE
     * * `TRANSACTION` - TRANSACTION
     * * `JOURNAL_ENTRY` - JOURNAL_ENTRY
     * * `PAYMENT` - PAYMENT
     * * `VENDOR_CREDIT` - VENDOR_CREDIT
     * * `CREDIT_NOTE` - CREDIT_NOTE
     */
    underlyingTransactionType?: Merge.accounting.GeneralLedgerTransactionUnderlyingTransactionType;
    /** The accounting period that the GeneralLedgerTransaction was generated in. */
    accountingPeriod?: Merge.accounting.GeneralLedgerTransactionAccountingPeriod;
    /** The company the GeneralLedgerTransaction belongs to. */
    company?: Merge.accounting.GeneralLedgerTransactionCompany;
    /** When the third party's GeneralLedgerTransaction entry was updated. */
    remoteUpdatedAt?: Date;
    /** When the third party's GeneralLedgerTransaction entry was created. */
    remoteCreatedAt?: Date;
    trackingCategories?: (Merge.accounting.GeneralLedgerTransactionTrackingCategoriesItem | undefined)[];
    /** The date that the transaction was posted to the general ledger. */
    postingDate?: Date;
    /** A list of “General Ledger Transaction Applied to Lines” objects. */
    generalLedgerTransactionLines?: Merge.accounting.GeneralLedgerTransactionGeneralLedgerTransactionLinesItem[];
    /** Indicates whether or not this object has been deleted in the third party platform. Full coverage deletion detection is a premium add-on. Native deletion detection is offered for free with limited coverage. [Learn more](https://docs.merge.dev/integrations/hris/supported-features/). */
    remoteWasDeleted?: boolean;
    fieldMappings?: Record<string, unknown>;
    remoteData?: Merge.accounting.RemoteData[];
}
