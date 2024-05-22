/**
 * This file was auto-generated by Fern from our API Definition.
 */

import * as serializers from "../../..";
import * as Merge from "../../../../api";
import * as core from "../../../../core";

export const Payment: core.serialization.ObjectSchema<serializers.accounting.Payment.Raw, Merge.accounting.Payment> =
    core.serialization.object({
        id: core.serialization.string().optional(),
        remoteId: core.serialization.property("remote_id", core.serialization.string().optional()),
        createdAt: core.serialization.property("created_at", core.serialization.date().optional()),
        modifiedAt: core.serialization.property("modified_at", core.serialization.date().optional()),
        transactionDate: core.serialization.property("transaction_date", core.serialization.date().optional()),
        contact: core.serialization.lazy(async () => (await import("../../..")).accounting.PaymentContact).optional(),
        account: core.serialization.lazy(async () => (await import("../../..")).accounting.PaymentAccount).optional(),
        currency: core.serialization.lazy(async () => (await import("../../..")).accounting.PaymentCurrency).optional(),
        exchangeRate: core.serialization.property("exchange_rate", core.serialization.string().optional()),
        company: core.serialization.lazy(async () => (await import("../../..")).accounting.PaymentCompany).optional(),
        totalAmount: core.serialization.property("total_amount", core.serialization.number().optional()),
        type: core.serialization.lazy(async () => (await import("../../..")).accounting.PaymentType).optional(),
        trackingCategories: core.serialization.property(
            "tracking_categories",
            core.serialization
                .list(
                    core.serialization
                        .lazy(async () => (await import("../../..")).accounting.PaymentTrackingCategoriesItem)
                        .optional()
                )
                .optional()
        ),
        remoteUpdatedAt: core.serialization.property("remote_updated_at", core.serialization.date().optional()),
        remoteWasDeleted: core.serialization.property("remote_was_deleted", core.serialization.boolean().optional()),
        accountingPeriod: core.serialization.property(
            "accounting_period",
            core.serialization
                .lazy(async () => (await import("../../..")).accounting.PaymentAccountingPeriod)
                .optional()
        ),
        appliedToLines: core.serialization.property(
            "applied_to_lines",
            core.serialization
                .list(
                    core.serialization.lazy(async () => (await import("../../..")).accounting.PaymentAppliedToLinesItem)
                )
                .optional()
        ),
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

export declare namespace Payment {
    interface Raw {
        id?: string | null;
        remote_id?: string | null;
        created_at?: string | null;
        modified_at?: string | null;
        transaction_date?: string | null;
        contact?: serializers.accounting.PaymentContact.Raw | null;
        account?: serializers.accounting.PaymentAccount.Raw | null;
        currency?: serializers.accounting.PaymentCurrency.Raw | null;
        exchange_rate?: string | null;
        company?: serializers.accounting.PaymentCompany.Raw | null;
        total_amount?: number | null;
        type?: serializers.accounting.PaymentType.Raw | null;
        tracking_categories?: (serializers.accounting.PaymentTrackingCategoriesItem.Raw | null | undefined)[] | null;
        remote_updated_at?: string | null;
        remote_was_deleted?: boolean | null;
        accounting_period?: serializers.accounting.PaymentAccountingPeriod.Raw | null;
        applied_to_lines?: serializers.accounting.PaymentAppliedToLinesItem.Raw[] | null;
        field_mappings?: Record<string, unknown> | null;
        remote_data?: serializers.accounting.RemoteData.Raw[] | null;
    }
}
