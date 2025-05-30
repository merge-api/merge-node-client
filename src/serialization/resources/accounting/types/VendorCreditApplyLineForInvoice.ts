/**
 * This file was auto-generated by Fern from our API Definition.
 */

import * as serializers from "../../../index";
import * as Merge from "../../../../api/index";
import * as core from "../../../../core";

export const VendorCreditApplyLineForInvoice: core.serialization.ObjectSchema<
    serializers.accounting.VendorCreditApplyLineForInvoice.Raw,
    Merge.accounting.VendorCreditApplyLineForInvoice
> = core.serialization.object({
    remoteId: core.serialization.property("remote_id", core.serialization.string().optional()),
    createdAt: core.serialization.property("created_at", core.serialization.date().optional()),
    modifiedAt: core.serialization.property("modified_at", core.serialization.date().optional()),
    vendorCredit: core.serialization.property(
        "vendor_credit",
        core.serialization.lazy(() => serializers.accounting.VendorCreditApplyLineForInvoiceVendorCredit).optional(),
    ),
    appliedDate: core.serialization.property("applied_date", core.serialization.date().optional()),
    appliedAmount: core.serialization.property("applied_amount", core.serialization.string().optional()),
    remoteWasDeleted: core.serialization.property("remote_was_deleted", core.serialization.boolean().optional()),
});

export declare namespace VendorCreditApplyLineForInvoice {
    export interface Raw {
        remote_id?: string | null;
        created_at?: string | null;
        modified_at?: string | null;
        vendor_credit?: serializers.accounting.VendorCreditApplyLineForInvoiceVendorCredit.Raw | null;
        applied_date?: string | null;
        applied_amount?: string | null;
        remote_was_deleted?: boolean | null;
    }
}
