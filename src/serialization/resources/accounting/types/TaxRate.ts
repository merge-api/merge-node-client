/**
 * This file was auto-generated by Fern from our API Definition.
 */

import * as serializers from "../../..";
import * as Merge from "../../../../api";
import * as core from "../../../../core";

export const TaxRate: core.serialization.ObjectSchema<serializers.accounting.TaxRate.Raw, Merge.accounting.TaxRate> =
    core.serialization.object({
        id: core.serialization.string().optional(),
        remoteId: core.serialization.property("remote_id", core.serialization.string().optional()),
        createdAt: core.serialization.property("created_at", core.serialization.date().optional()),
        modifiedAt: core.serialization.property("modified_at", core.serialization.date().optional()),
        company: core.serialization.lazy(async () => (await import("../../..")).accounting.TaxRateCompany).optional(),
        code: core.serialization.string().optional(),
        name: core.serialization.string().optional(),
        description: core.serialization.string().optional(),
        status: core.serialization.lazy(async () => (await import("../../..")).accounting.TaxRateStatus).optional(),
        country: core.serialization.string().optional(),
        totalTaxRate: core.serialization.property("total_tax_rate", core.serialization.number().optional()),
        effectiveTaxRate: core.serialization.property("effective_tax_rate", core.serialization.number().optional()),
        taxComponents: core.serialization.property(
            "tax_components",
            core.serialization
                .list(
                    core.serialization.lazy(async () => (await import("../../..")).accounting.TaxRateTaxComponentsItem)
                )
                .optional()
        ),
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

export declare namespace TaxRate {
    interface Raw {
        id?: string | null;
        remote_id?: string | null;
        created_at?: string | null;
        modified_at?: string | null;
        company?: serializers.accounting.TaxRateCompany.Raw | null;
        code?: string | null;
        name?: string | null;
        description?: string | null;
        status?: serializers.accounting.TaxRateStatus.Raw | null;
        country?: string | null;
        total_tax_rate?: number | null;
        effective_tax_rate?: number | null;
        tax_components?: serializers.accounting.TaxRateTaxComponentsItem.Raw[] | null;
        remote_was_deleted?: boolean | null;
        field_mappings?: Record<string, unknown> | null;
        remote_data?: serializers.accounting.RemoteData.Raw[] | null;
    }
}
