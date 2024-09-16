/**
 * This file was auto-generated by Fern from our API Definition.
 */

import * as serializers from "../../..";
import * as Merge from "../../../../api";
import * as core from "../../../../core";

export const JournalLineRequest: core.serialization.ObjectSchema<
    serializers.accounting.JournalLineRequest.Raw,
    Merge.accounting.JournalLineRequest
> = core.serialization.object({
    remoteId: core.serialization.property("remote_id", core.serialization.string().optional()),
    account: core.serialization
        .lazy(async () => (await import("../../..")).accounting.JournalLineRequestAccount)
        .optional(),
    netAmount: core.serialization.property("net_amount", core.serialization.number().optional()),
    trackingCategory: core.serialization.property(
        "tracking_category",
        core.serialization
            .lazy(async () => (await import("../../..")).accounting.JournalLineRequestTrackingCategory)
            .optional()
    ),
    trackingCategories: core.serialization.property(
        "tracking_categories",
        core.serialization
            .list(
                core.serialization
                    .lazy(async () => (await import("../../..")).accounting.JournalLineRequestTrackingCategoriesItem)
                    .optional()
            )
            .optional()
    ),
    currency: core.serialization
        .lazy(async () => (await import("../../..")).accounting.JournalLineRequestCurrency)
        .optional(),
    company: core.serialization.string().optional(),
    contact: core.serialization.string().optional(),
    taxRate: core.serialization.property("tax_rate", core.serialization.string().optional()),
    description: core.serialization.string().optional(),
    exchangeRate: core.serialization.property("exchange_rate", core.serialization.string().optional()),
    integrationParams: core.serialization.property(
        "integration_params",
        core.serialization.record(core.serialization.string(), core.serialization.unknown()).optional()
    ),
    linkedAccountParams: core.serialization.property(
        "linked_account_params",
        core.serialization.record(core.serialization.string(), core.serialization.unknown()).optional()
    ),
    remoteFields: core.serialization.property(
        "remote_fields",
        core.serialization
            .list(core.serialization.lazyObject(async () => (await import("../../..")).accounting.RemoteFieldRequest))
            .optional()
    ),
});

export declare namespace JournalLineRequest {
    interface Raw {
        remote_id?: string | null;
        account?: serializers.accounting.JournalLineRequestAccount.Raw | null;
        net_amount?: number | null;
        tracking_category?: serializers.accounting.JournalLineRequestTrackingCategory.Raw | null;
        tracking_categories?:
            | (serializers.accounting.JournalLineRequestTrackingCategoriesItem.Raw | null | undefined)[]
            | null;
        currency?: serializers.accounting.JournalLineRequestCurrency.Raw | null;
        company?: string | null;
        contact?: string | null;
        tax_rate?: string | null;
        description?: string | null;
        exchange_rate?: string | null;
        integration_params?: Record<string, unknown> | null;
        linked_account_params?: Record<string, unknown> | null;
        remote_fields?: serializers.accounting.RemoteFieldRequest.Raw[] | null;
    }
}
