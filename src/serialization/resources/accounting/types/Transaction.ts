/**
 * This file was auto-generated by Fern from our API Definition.
 */

import * as serializers from "../../../index";
import * as Merge from "../../../../api/index";
import * as core from "../../../../core";
import { TransactionAccount } from "./TransactionAccount";
import { TransactionContact } from "./TransactionContact";
import { TransactionCurrency } from "./TransactionCurrency";
import { TransactionTrackingCategoriesItem } from "./TransactionTrackingCategoriesItem";
import { TransactionLineItem } from "./TransactionLineItem";
import { TransactionAccountingPeriod } from "./TransactionAccountingPeriod";
import { RemoteData } from "./RemoteData";

export const Transaction: core.serialization.ObjectSchema<
    serializers.accounting.Transaction.Raw,
    Merge.accounting.Transaction
> = core.serialization.object({
    id: core.serialization.string().optional(),
    remoteId: core.serialization.property("remote_id", core.serialization.string().optional()),
    createdAt: core.serialization.property("created_at", core.serialization.date().optional()),
    modifiedAt: core.serialization.property("modified_at", core.serialization.date().optional()),
    transactionType: core.serialization.property("transaction_type", core.serialization.string().optional()),
    number: core.serialization.string().optional(),
    transactionDate: core.serialization.property("transaction_date", core.serialization.date().optional()),
    account: TransactionAccount.optional(),
    contact: TransactionContact.optional(),
    inclusiveOfTax: core.serialization.property("inclusive_of_tax", core.serialization.boolean().optional()),
    totalAmount: core.serialization.property("total_amount", core.serialization.string().optional()),
    currency: TransactionCurrency.optional(),
    exchangeRate: core.serialization.property("exchange_rate", core.serialization.string().optional()),
    company: core.serialization.string().optional(),
    trackingCategories: core.serialization.property(
        "tracking_categories",
        core.serialization.list(TransactionTrackingCategoriesItem.optional()).optional(),
    ),
    lineItems: core.serialization.property("line_items", core.serialization.list(TransactionLineItem).optional()),
    remoteWasDeleted: core.serialization.property("remote_was_deleted", core.serialization.boolean().optional()),
    accountingPeriod: core.serialization.property("accounting_period", TransactionAccountingPeriod.optional()),
    fieldMappings: core.serialization.property(
        "field_mappings",
        core.serialization.record(core.serialization.string(), core.serialization.unknown()).optional(),
    ),
    remoteData: core.serialization.property("remote_data", core.serialization.list(RemoteData).optional()),
});

export declare namespace Transaction {
    export interface Raw {
        id?: string | null;
        remote_id?: string | null;
        created_at?: string | null;
        modified_at?: string | null;
        transaction_type?: string | null;
        number?: string | null;
        transaction_date?: string | null;
        account?: TransactionAccount.Raw | null;
        contact?: TransactionContact.Raw | null;
        inclusive_of_tax?: boolean | null;
        total_amount?: string | null;
        currency?: TransactionCurrency.Raw | null;
        exchange_rate?: string | null;
        company?: string | null;
        tracking_categories?: (TransactionTrackingCategoriesItem.Raw | null | undefined)[] | null;
        line_items?: TransactionLineItem.Raw[] | null;
        remote_was_deleted?: boolean | null;
        accounting_period?: TransactionAccountingPeriod.Raw | null;
        field_mappings?: Record<string, unknown> | null;
        remote_data?: RemoteData.Raw[] | null;
    }
}
