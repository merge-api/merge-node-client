/**
 * This file was auto-generated by Fern from our API Definition.
 */

import * as serializers from "../../..";
import * as Merge from "../../../../api";
import * as core from "../../../../core";

export const InvoiceLineItem: core.serialization.ObjectSchema<
    serializers.accounting.InvoiceLineItem.Raw,
    Merge.accounting.InvoiceLineItem
> = core.serialization.object({
    id: core.serialization.string().optional(),
    remoteId: core.serialization.property("remote_id", core.serialization.string().optional()),
    createdAt: core.serialization.property("created_at", core.serialization.date().optional()),
    modifiedAt: core.serialization.property("modified_at", core.serialization.date().optional()),
    description: core.serialization.string().optional(),
    unitPrice: core.serialization.property("unit_price", core.serialization.number().optional()),
    quantity: core.serialization.number().optional(),
    totalAmount: core.serialization.property("total_amount", core.serialization.number().optional()),
    currency: core.serialization
        .lazy(async () => (await import("../../..")).accounting.InvoiceLineItemCurrency)
        .optional(),
    exchangeRate: core.serialization.property("exchange_rate", core.serialization.string().optional()),
    item: core.serialization.lazy(async () => (await import("../../..")).accounting.InvoiceLineItemItem).optional(),
    account: core.serialization
        .lazy(async () => (await import("../../..")).accounting.InvoiceLineItemAccount)
        .optional(),
    trackingCategory: core.serialization.property(
        "tracking_category",
        core.serialization
            .lazy(async () => (await import("../../..")).accounting.InvoiceLineItemTrackingCategory)
            .optional()
    ),
    trackingCategories: core.serialization.property(
        "tracking_categories",
        core.serialization
            .list(
                core.serialization
                    .lazy(async () => (await import("../../..")).accounting.InvoiceLineItemTrackingCategoriesItem)
                    .optional()
            )
            .optional()
    ),
    company: core.serialization.string().optional(),
    remoteWasDeleted: core.serialization.property("remote_was_deleted", core.serialization.boolean().optional()),
    fieldMappings: core.serialization.property(
        "field_mappings",
        core.serialization.record(core.serialization.string(), core.serialization.unknown()).optional()
    ),
});

export declare namespace InvoiceLineItem {
    interface Raw {
        id?: string | null;
        remote_id?: string | null;
        created_at?: string | null;
        modified_at?: string | null;
        description?: string | null;
        unit_price?: number | null;
        quantity?: number | null;
        total_amount?: number | null;
        currency?: serializers.accounting.InvoiceLineItemCurrency.Raw | null;
        exchange_rate?: string | null;
        item?: serializers.accounting.InvoiceLineItemItem.Raw | null;
        account?: serializers.accounting.InvoiceLineItemAccount.Raw | null;
        tracking_category?: serializers.accounting.InvoiceLineItemTrackingCategory.Raw | null;
        tracking_categories?:
            | (serializers.accounting.InvoiceLineItemTrackingCategoriesItem.Raw | null | undefined)[]
            | null;
        company?: string | null;
        remote_was_deleted?: boolean | null;
        field_mappings?: Record<string, unknown> | null;
    }
}
