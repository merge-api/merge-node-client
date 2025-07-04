/**
 * This file was auto-generated by Fern from our API Definition.
 */

import * as serializers from "../../../index";
import * as Merge from "../../../../api/index";
import * as core from "../../../../core";
import { FieldMappingApiInstance } from "./FieldMappingApiInstance";

export const FieldMappingApiInstanceResponse: core.serialization.ObjectSchema<
    serializers.accounting.FieldMappingApiInstanceResponse.Raw,
    Merge.accounting.FieldMappingApiInstanceResponse
> = core.serialization.object({
    account: core.serialization.property("Account", core.serialization.list(FieldMappingApiInstance).optional()),
    accountingAttachment: core.serialization.property(
        "AccountingAttachment",
        core.serialization.list(FieldMappingApiInstance).optional(),
    ),
    balanceSheet: core.serialization.property(
        "BalanceSheet",
        core.serialization.list(FieldMappingApiInstance).optional(),
    ),
    cashFlowStatement: core.serialization.property(
        "CashFlowStatement",
        core.serialization.list(FieldMappingApiInstance).optional(),
    ),
    companyInfo: core.serialization.property(
        "CompanyInfo",
        core.serialization.list(FieldMappingApiInstance).optional(),
    ),
    contact: core.serialization.property("Contact", core.serialization.list(FieldMappingApiInstance).optional()),
    incomeStatement: core.serialization.property(
        "IncomeStatement",
        core.serialization.list(FieldMappingApiInstance).optional(),
    ),
    creditNote: core.serialization.property("CreditNote", core.serialization.list(FieldMappingApiInstance).optional()),
    item: core.serialization.property("Item", core.serialization.list(FieldMappingApiInstance).optional()),
    purchaseOrder: core.serialization.property(
        "PurchaseOrder",
        core.serialization.list(FieldMappingApiInstance).optional(),
    ),
    expenseReport: core.serialization.property(
        "ExpenseReport",
        core.serialization.list(FieldMappingApiInstance).optional(),
    ),
    trackingCategory: core.serialization.property(
        "TrackingCategory",
        core.serialization.list(FieldMappingApiInstance).optional(),
    ),
    journalEntry: core.serialization.property(
        "JournalEntry",
        core.serialization.list(FieldMappingApiInstance).optional(),
    ),
    taxRate: core.serialization.property("TaxRate", core.serialization.list(FieldMappingApiInstance).optional()),
    invoice: core.serialization.property("Invoice", core.serialization.list(FieldMappingApiInstance).optional()),
    payment: core.serialization.property("Payment", core.serialization.list(FieldMappingApiInstance).optional()),
    expense: core.serialization.property("Expense", core.serialization.list(FieldMappingApiInstance).optional()),
    vendorCredit: core.serialization.property(
        "VendorCredit",
        core.serialization.list(FieldMappingApiInstance).optional(),
    ),
    transaction: core.serialization.property(
        "Transaction",
        core.serialization.list(FieldMappingApiInstance).optional(),
    ),
    accountingPeriod: core.serialization.property(
        "AccountingPeriod",
        core.serialization.list(FieldMappingApiInstance).optional(),
    ),
    generalLedgerTransaction: core.serialization.property(
        "GeneralLedgerTransaction",
        core.serialization.list(FieldMappingApiInstance).optional(),
    ),
    bankFeedAccount: core.serialization.property(
        "BankFeedAccount",
        core.serialization.list(FieldMappingApiInstance).optional(),
    ),
    employee: core.serialization.property("Employee", core.serialization.list(FieldMappingApiInstance).optional()),
    paymentMethod: core.serialization.property(
        "PaymentMethod",
        core.serialization.list(FieldMappingApiInstance).optional(),
    ),
    project: core.serialization.property("Project", core.serialization.list(FieldMappingApiInstance).optional()),
    paymentTerm: core.serialization.property(
        "PaymentTerm",
        core.serialization.list(FieldMappingApiInstance).optional(),
    ),
});

export declare namespace FieldMappingApiInstanceResponse {
    export interface Raw {
        Account?: FieldMappingApiInstance.Raw[] | null;
        AccountingAttachment?: FieldMappingApiInstance.Raw[] | null;
        BalanceSheet?: FieldMappingApiInstance.Raw[] | null;
        CashFlowStatement?: FieldMappingApiInstance.Raw[] | null;
        CompanyInfo?: FieldMappingApiInstance.Raw[] | null;
        Contact?: FieldMappingApiInstance.Raw[] | null;
        IncomeStatement?: FieldMappingApiInstance.Raw[] | null;
        CreditNote?: FieldMappingApiInstance.Raw[] | null;
        Item?: FieldMappingApiInstance.Raw[] | null;
        PurchaseOrder?: FieldMappingApiInstance.Raw[] | null;
        ExpenseReport?: FieldMappingApiInstance.Raw[] | null;
        TrackingCategory?: FieldMappingApiInstance.Raw[] | null;
        JournalEntry?: FieldMappingApiInstance.Raw[] | null;
        TaxRate?: FieldMappingApiInstance.Raw[] | null;
        Invoice?: FieldMappingApiInstance.Raw[] | null;
        Payment?: FieldMappingApiInstance.Raw[] | null;
        Expense?: FieldMappingApiInstance.Raw[] | null;
        VendorCredit?: FieldMappingApiInstance.Raw[] | null;
        Transaction?: FieldMappingApiInstance.Raw[] | null;
        AccountingPeriod?: FieldMappingApiInstance.Raw[] | null;
        GeneralLedgerTransaction?: FieldMappingApiInstance.Raw[] | null;
        BankFeedAccount?: FieldMappingApiInstance.Raw[] | null;
        Employee?: FieldMappingApiInstance.Raw[] | null;
        PaymentMethod?: FieldMappingApiInstance.Raw[] | null;
        Project?: FieldMappingApiInstance.Raw[] | null;
        PaymentTerm?: FieldMappingApiInstance.Raw[] | null;
    }
}
