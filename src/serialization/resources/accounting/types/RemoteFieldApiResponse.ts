/**
 * This file was auto-generated by Fern from our API Definition.
 */

import * as serializers from "../../../index";
import * as Merge from "../../../../api/index";
import * as core from "../../../../core";
import { RemoteFieldApi } from "./RemoteFieldApi";

export const RemoteFieldApiResponse: core.serialization.ObjectSchema<
    serializers.accounting.RemoteFieldApiResponse.Raw,
    Merge.accounting.RemoteFieldApiResponse
> = core.serialization.object({
    account: core.serialization.property("Account", core.serialization.list(RemoteFieldApi).optional()),
    accountingAttachment: core.serialization.property(
        "AccountingAttachment",
        core.serialization.list(RemoteFieldApi).optional()
    ),
    balanceSheet: core.serialization.property("BalanceSheet", core.serialization.list(RemoteFieldApi).optional()),
    cashFlowStatement: core.serialization.property(
        "CashFlowStatement",
        core.serialization.list(RemoteFieldApi).optional()
    ),
    companyInfo: core.serialization.property("CompanyInfo", core.serialization.list(RemoteFieldApi).optional()),
    contact: core.serialization.property("Contact", core.serialization.list(RemoteFieldApi).optional()),
    incomeStatement: core.serialization.property("IncomeStatement", core.serialization.list(RemoteFieldApi).optional()),
    creditNote: core.serialization.property("CreditNote", core.serialization.list(RemoteFieldApi).optional()),
    item: core.serialization.property("Item", core.serialization.list(RemoteFieldApi).optional()),
    purchaseOrder: core.serialization.property("PurchaseOrder", core.serialization.list(RemoteFieldApi).optional()),
    trackingCategory: core.serialization.property(
        "TrackingCategory",
        core.serialization.list(RemoteFieldApi).optional()
    ),
    journalEntry: core.serialization.property("JournalEntry", core.serialization.list(RemoteFieldApi).optional()),
    taxRate: core.serialization.property("TaxRate", core.serialization.list(RemoteFieldApi).optional()),
    invoice: core.serialization.property("Invoice", core.serialization.list(RemoteFieldApi).optional()),
    payment: core.serialization.property("Payment", core.serialization.list(RemoteFieldApi).optional()),
    expense: core.serialization.property("Expense", core.serialization.list(RemoteFieldApi).optional()),
    vendorCredit: core.serialization.property("VendorCredit", core.serialization.list(RemoteFieldApi).optional()),
    transaction: core.serialization.property("Transaction", core.serialization.list(RemoteFieldApi).optional()),
    accountingPeriod: core.serialization.property(
        "AccountingPeriod",
        core.serialization.list(RemoteFieldApi).optional()
    ),
    generalLedgerTransaction: core.serialization.property(
        "GeneralLedgerTransaction",
        core.serialization.list(RemoteFieldApi).optional()
    ),
    bankFeedAccount: core.serialization.property("BankFeedAccount", core.serialization.list(RemoteFieldApi).optional()),
});

export declare namespace RemoteFieldApiResponse {
    interface Raw {
        Account?: RemoteFieldApi.Raw[] | null;
        AccountingAttachment?: RemoteFieldApi.Raw[] | null;
        BalanceSheet?: RemoteFieldApi.Raw[] | null;
        CashFlowStatement?: RemoteFieldApi.Raw[] | null;
        CompanyInfo?: RemoteFieldApi.Raw[] | null;
        Contact?: RemoteFieldApi.Raw[] | null;
        IncomeStatement?: RemoteFieldApi.Raw[] | null;
        CreditNote?: RemoteFieldApi.Raw[] | null;
        Item?: RemoteFieldApi.Raw[] | null;
        PurchaseOrder?: RemoteFieldApi.Raw[] | null;
        TrackingCategory?: RemoteFieldApi.Raw[] | null;
        JournalEntry?: RemoteFieldApi.Raw[] | null;
        TaxRate?: RemoteFieldApi.Raw[] | null;
        Invoice?: RemoteFieldApi.Raw[] | null;
        Payment?: RemoteFieldApi.Raw[] | null;
        Expense?: RemoteFieldApi.Raw[] | null;
        VendorCredit?: RemoteFieldApi.Raw[] | null;
        Transaction?: RemoteFieldApi.Raw[] | null;
        AccountingPeriod?: RemoteFieldApi.Raw[] | null;
        GeneralLedgerTransaction?: RemoteFieldApi.Raw[] | null;
        BankFeedAccount?: RemoteFieldApi.Raw[] | null;
    }
}
