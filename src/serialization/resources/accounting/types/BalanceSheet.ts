/**
 * This file was auto-generated by Fern from our API Definition.
 */

import * as serializers from "../../..";
import * as Merge from "../../../../api";
import * as core from "../../../../core";

export const BalanceSheet: core.serialization.ObjectSchema<
    serializers.accounting.BalanceSheet.Raw,
    Merge.accounting.BalanceSheet
> = core.serialization.object({
    id: core.serialization.string().optional(),
    remoteId: core.serialization.property("remote_id", core.serialization.string().optional()),
    createdAt: core.serialization.property("created_at", core.serialization.date().optional()),
    modifiedAt: core.serialization.property("modified_at", core.serialization.date().optional()),
    name: core.serialization.string().optional(),
    currency: core.serialization
        .lazy(async () => (await import("../../..")).accounting.BalanceSheetCurrency)
        .optional(),
    company: core.serialization.lazy(async () => (await import("../../..")).accounting.BalanceSheetCompany).optional(),
    date: core.serialization.date().optional(),
    netAssets: core.serialization.property("net_assets", core.serialization.number().optional()),
    assets: core.serialization
        .list(core.serialization.lazyObject(async () => (await import("../../..")).accounting.ReportItem))
        .optional(),
    liabilities: core.serialization
        .list(core.serialization.lazyObject(async () => (await import("../../..")).accounting.ReportItem))
        .optional(),
    equity: core.serialization
        .list(core.serialization.lazyObject(async () => (await import("../../..")).accounting.ReportItem))
        .optional(),
    remoteGeneratedAt: core.serialization.property("remote_generated_at", core.serialization.date().optional()),
    remoteWasDeleted: core.serialization.property("remote_was_deleted", core.serialization.boolean().optional()),
    fieldMappings: core.serialization.property(
        "field_mappings",
        core.serialization.record(core.serialization.string(), core.serialization.unknown()).optional()
    ),
    remoteData: core.serialization.property(
        "remote_data",
        core.serialization
            .list(core.serialization.lazyObject(async () => (await import("../../..")).accounting.RemoteData))
            .optional()
    ),
});

export declare namespace BalanceSheet {
    interface Raw {
        id?: string | null;
        remote_id?: string | null;
        created_at?: string | null;
        modified_at?: string | null;
        name?: string | null;
        currency?: serializers.accounting.BalanceSheetCurrency.Raw | null;
        company?: serializers.accounting.BalanceSheetCompany.Raw | null;
        date?: string | null;
        net_assets?: number | null;
        assets?: serializers.accounting.ReportItem.Raw[] | null;
        liabilities?: serializers.accounting.ReportItem.Raw[] | null;
        equity?: serializers.accounting.ReportItem.Raw[] | null;
        remote_generated_at?: string | null;
        remote_was_deleted?: boolean | null;
        field_mappings?: Record<string, unknown> | null;
        remote_data?: serializers.accounting.RemoteData.Raw[] | null;
    }
}
