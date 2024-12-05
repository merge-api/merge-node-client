/**
 * This file was auto-generated by Fern from our API Definition.
 */

import * as serializers from "../../../index";
import * as Merge from "../../../../api/index";
import * as core from "../../../../core";
import { ExpenseLineItem } from "./ExpenseLineItem";
import { ExpenseLineTrackingCategory } from "./ExpenseLineTrackingCategory";
import { ExpenseLineTrackingCategoriesItem } from "./ExpenseLineTrackingCategoriesItem";
import { ExpenseLineCurrency } from "./ExpenseLineCurrency";
import { ExpenseLineAccount } from "./ExpenseLineAccount";
import { ExpenseLineContact } from "./ExpenseLineContact";

export const ExpenseLine: core.serialization.ObjectSchema<
    serializers.accounting.ExpenseLine.Raw,
    Merge.accounting.ExpenseLine
> = core.serialization.object({
    id: core.serialization.string().optional(),
    remoteId: core.serialization.property("remote_id", core.serialization.string().optional()),
    createdAt: core.serialization.property("created_at", core.serialization.date().optional()),
    modifiedAt: core.serialization.property("modified_at", core.serialization.date().optional()),
    item: ExpenseLineItem.optional(),
    netAmount: core.serialization.property("net_amount", core.serialization.number().optional()),
    trackingCategory: core.serialization.property("tracking_category", ExpenseLineTrackingCategory.optional()),
    trackingCategories: core.serialization.property(
        "tracking_categories",
        core.serialization.list(ExpenseLineTrackingCategoriesItem.optional()).optional()
    ),
    company: core.serialization.string().optional(),
    currency: ExpenseLineCurrency.optional(),
    account: ExpenseLineAccount.optional(),
    contact: ExpenseLineContact.optional(),
    description: core.serialization.string().optional(),
    exchangeRate: core.serialization.property("exchange_rate", core.serialization.string().optional()),
    taxRate: core.serialization.property("tax_rate", core.serialization.string().optional()),
    remoteWasDeleted: core.serialization.property("remote_was_deleted", core.serialization.boolean().optional()),
});

export declare namespace ExpenseLine {
    interface Raw {
        id?: string | null;
        remote_id?: string | null;
        created_at?: string | null;
        modified_at?: string | null;
        item?: ExpenseLineItem.Raw | null;
        net_amount?: number | null;
        tracking_category?: ExpenseLineTrackingCategory.Raw | null;
        tracking_categories?: (ExpenseLineTrackingCategoriesItem.Raw | null | undefined)[] | null;
        company?: string | null;
        currency?: ExpenseLineCurrency.Raw | null;
        account?: ExpenseLineAccount.Raw | null;
        contact?: ExpenseLineContact.Raw | null;
        description?: string | null;
        exchange_rate?: string | null;
        tax_rate?: string | null;
        remote_was_deleted?: boolean | null;
    }
}
