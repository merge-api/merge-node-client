/**
 * This file was auto-generated by Fern from our API Definition.
 */

/**
 * - `BANK` - BANK
 * - `CREDIT_CARD` - CREDIT_CARD
 * - `ACCOUNTS_PAYABLE` - ACCOUNTS_PAYABLE
 * - `ACCOUNTS_RECEIVABLE` - ACCOUNTS_RECEIVABLE
 * - `FIXED_ASSET` - FIXED_ASSET
 * - `OTHER_ASSET` - OTHER_ASSET
 * - `OTHER_CURRENT_ASSET` - OTHER_CURRENT_ASSET
 * - `OTHER_EXPENSE` - OTHER_EXPENSE
 * - `OTHER_INCOME` - OTHER_INCOME
 * - `COST_OF_GOODS_SOLD` - COST_OF_GOODS_SOLD
 * - `OTHER_CURRENT_LIABILITY` - OTHER_CURRENT_LIABILITY
 * - `LONG_TERM_LIABILITY` - LONG_TERM_LIABILITY
 * - `NON_POSTING` - NON_POSTING
 */
export type AccountAccountTypeEnum =
    | "BANK"
    | "CREDIT_CARD"
    | "ACCOUNTS_PAYABLE"
    | "ACCOUNTS_RECEIVABLE"
    | "FIXED_ASSET"
    | "OTHER_ASSET"
    | "OTHER_CURRENT_ASSET"
    | "OTHER_EXPENSE"
    | "OTHER_INCOME"
    | "COST_OF_GOODS_SOLD"
    | "OTHER_CURRENT_LIABILITY"
    | "LONG_TERM_LIABILITY"
    | "NON_POSTING";

export const AccountAccountTypeEnum = {
    Bank: "BANK",
    CreditCard: "CREDIT_CARD",
    AccountsPayable: "ACCOUNTS_PAYABLE",
    AccountsReceivable: "ACCOUNTS_RECEIVABLE",
    FixedAsset: "FIXED_ASSET",
    OtherAsset: "OTHER_ASSET",
    OtherCurrentAsset: "OTHER_CURRENT_ASSET",
    OtherExpense: "OTHER_EXPENSE",
    OtherIncome: "OTHER_INCOME",
    CostOfGoodsSold: "COST_OF_GOODS_SOLD",
    OtherCurrentLiability: "OTHER_CURRENT_LIABILITY",
    LongTermLiability: "LONG_TERM_LIABILITY",
    NonPosting: "NON_POSTING",
} as const;
