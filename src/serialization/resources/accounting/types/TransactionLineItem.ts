/**
 * This file was auto-generated by Fern from our API Definition.
 */

import * as serializers from "../../../index";
import * as Merge from "../../../../api/index";
import * as core from "../../../../core";
import { TransactionLineItemItem } from "./TransactionLineItemItem";
import { TransactionLineItemCurrency } from "./TransactionLineItemCurrency";

export const TransactionLineItem: core.serialization.ObjectSchema<
    serializers.accounting.TransactionLineItem.Raw,
    Merge.accounting.TransactionLineItem
> = core.serialization.object({
    id: core.serialization.string().optional(),
    remoteId: core.serialization.property("remote_id", core.serialization.string().optional()),
    createdAt: core.serialization.property("created_at", core.serialization.date().optional()),
    modifiedAt: core.serialization.property("modified_at", core.serialization.date().optional()),
    memo: core.serialization.string().optional(),
    unitPrice: core.serialization.property("unit_price", core.serialization.string().optional()),
    quantity: core.serialization.string().optional(),
    item: TransactionLineItemItem.optional(),
    account: core.serialization.string().optional(),
    trackingCategory: core.serialization.property("tracking_category", core.serialization.string().optional()),
    trackingCategories: core.serialization.property(
        "tracking_categories",
        core.serialization.list(core.serialization.string().optional()).optional(),
    ),
    totalLineAmount: core.serialization.property("total_line_amount", core.serialization.string().optional()),
    taxRate: core.serialization.property("tax_rate", core.serialization.string().optional()),
    currency: TransactionLineItemCurrency.optional(),
    exchangeRate: core.serialization.property("exchange_rate", core.serialization.string().optional()),
    company: core.serialization.string().optional(),
    remoteWasDeleted: core.serialization.property("remote_was_deleted", core.serialization.boolean().optional()),
});

export declare namespace TransactionLineItem {
    export interface Raw {
        id?: string | null;
        remote_id?: string | null;
        created_at?: string | null;
        modified_at?: string | null;
        memo?: string | null;
        unit_price?: string | null;
        quantity?: string | null;
        item?: TransactionLineItemItem.Raw | null;
        account?: string | null;
        tracking_category?: string | null;
        tracking_categories?: (string | null | undefined)[] | null;
        total_line_amount?: string | null;
        tax_rate?: string | null;
        currency?: TransactionLineItemCurrency.Raw | null;
        exchange_rate?: string | null;
        company?: string | null;
        remote_was_deleted?: boolean | null;
    }
}
