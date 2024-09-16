/**
 * This file was auto-generated by Fern from our API Definition.
 */

import * as serializers from "../../..";
import * as Merge from "../../../../api";
import * as core from "../../../../core";

export const CreditNote: core.serialization.ObjectSchema<
    serializers.accounting.CreditNote.Raw,
    Merge.accounting.CreditNote
> = core.serialization.object({
    id: core.serialization.string().optional(),
    remoteId: core.serialization.property("remote_id", core.serialization.string().optional()),
    createdAt: core.serialization.property("created_at", core.serialization.date().optional()),
    modifiedAt: core.serialization.property("modified_at", core.serialization.date().optional()),
    transactionDate: core.serialization.property("transaction_date", core.serialization.date().optional()),
    status: core.serialization.lazy(async () => (await import("../../..")).accounting.CreditNoteStatus).optional(),
    number: core.serialization.string().optional(),
    contact: core.serialization.lazy(async () => (await import("../../..")).accounting.CreditNoteContact).optional(),
    company: core.serialization.lazy(async () => (await import("../../..")).accounting.CreditNoteCompany).optional(),
    exchangeRate: core.serialization.property("exchange_rate", core.serialization.string().optional()),
    totalAmount: core.serialization.property("total_amount", core.serialization.number().optional()),
    remainingCredit: core.serialization.property("remaining_credit", core.serialization.number().optional()),
    inclusiveOfTax: core.serialization.property("inclusive_of_tax", core.serialization.boolean().optional()),
    lineItems: core.serialization.property(
        "line_items",
        core.serialization
            .list(core.serialization.lazyObject(async () => (await import("../../..")).accounting.CreditNoteLineItem))
            .optional()
    ),
    trackingCategories: core.serialization.property(
        "tracking_categories",
        core.serialization
            .list(
                core.serialization
                    .lazy(async () => (await import("../../..")).accounting.CreditNoteTrackingCategoriesItem)
                    .optional()
            )
            .optional()
    ),
    currency: core.serialization.lazy(async () => (await import("../../..")).accounting.CreditNoteCurrency).optional(),
    remoteCreatedAt: core.serialization.property("remote_created_at", core.serialization.date().optional()),
    remoteUpdatedAt: core.serialization.property("remote_updated_at", core.serialization.date().optional()),
    payments: core.serialization
        .list(
            core.serialization.lazy(async () => (await import("../../..")).accounting.CreditNotePaymentsItem).optional()
        )
        .optional(),
    appliedPayments: core.serialization.property(
        "applied_payments",
        core.serialization
            .list(
                core.serialization
                    .lazy(async () => (await import("../../..")).accounting.CreditNoteAppliedPaymentsItem)
                    .optional()
            )
            .optional()
    ),
    remoteWasDeleted: core.serialization.property("remote_was_deleted", core.serialization.boolean().optional()),
    accountingPeriod: core.serialization.property(
        "accounting_period",
        core.serialization.lazy(async () => (await import("../../..")).accounting.CreditNoteAccountingPeriod).optional()
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

export declare namespace CreditNote {
    interface Raw {
        id?: string | null;
        remote_id?: string | null;
        created_at?: string | null;
        modified_at?: string | null;
        transaction_date?: string | null;
        status?: serializers.accounting.CreditNoteStatus.Raw | null;
        number?: string | null;
        contact?: serializers.accounting.CreditNoteContact.Raw | null;
        company?: serializers.accounting.CreditNoteCompany.Raw | null;
        exchange_rate?: string | null;
        total_amount?: number | null;
        remaining_credit?: number | null;
        inclusive_of_tax?: boolean | null;
        line_items?: serializers.accounting.CreditNoteLineItem.Raw[] | null;
        tracking_categories?: (serializers.accounting.CreditNoteTrackingCategoriesItem.Raw | null | undefined)[] | null;
        currency?: serializers.accounting.CreditNoteCurrency.Raw | null;
        remote_created_at?: string | null;
        remote_updated_at?: string | null;
        payments?: (serializers.accounting.CreditNotePaymentsItem.Raw | null | undefined)[] | null;
        applied_payments?: (serializers.accounting.CreditNoteAppliedPaymentsItem.Raw | null | undefined)[] | null;
        remote_was_deleted?: boolean | null;
        accounting_period?: serializers.accounting.CreditNoteAccountingPeriod.Raw | null;
        field_mappings?: Record<string, unknown> | null;
        remote_data?: serializers.accounting.RemoteData.Raw[] | null;
    }
}
