/**
 * This file was auto-generated by Fern from our API Definition.
 */

/**
 * * `INVOICE` - INVOICE
 * * `EXPENSE` - EXPENSE
 * * `TRANSACTION` - TRANSACTION
 * * `JOURNAL_ENTRY` - JOURNAL_ENTRY
 * * `PAYMENT` - PAYMENT
 * * `VENDOR_CREDIT` - VENDOR_CREDIT
 * * `CREDIT_NOTE` - CREDIT_NOTE
 */
export type UnderlyingTransactionTypeEnum =
    | "INVOICE"
    | "EXPENSE"
    | "TRANSACTION"
    | "JOURNAL_ENTRY"
    | "PAYMENT"
    | "VENDOR_CREDIT"
    | "CREDIT_NOTE";
export const UnderlyingTransactionTypeEnum = {
    Invoice: "INVOICE",
    Expense: "EXPENSE",
    Transaction: "TRANSACTION",
    JournalEntry: "JOURNAL_ENTRY",
    Payment: "PAYMENT",
    VendorCredit: "VENDOR_CREDIT",
    CreditNote: "CREDIT_NOTE",
} as const;
