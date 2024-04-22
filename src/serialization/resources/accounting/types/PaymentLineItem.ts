/**
 * This file was auto-generated by Fern from our API Definition.
 */

import * as serializers from "../../..";
import * as Merge from "../../../../api";
import * as core from "../../../../core";

export const PaymentLineItem: core.serialization.ObjectSchema<
    serializers.accounting.PaymentLineItem.Raw,
    Merge.accounting.PaymentLineItem
> = core.serialization.object({
    id: core.serialization.string().optional(),
    remoteId: core.serialization.property("remote_id", core.serialization.string().optional()),
    createdAt: core.serialization.property("created_at", core.serialization.date().optional()),
    modifiedAt: core.serialization.property("modified_at", core.serialization.date().optional()),
    appliedAmount: core.serialization.property("applied_amount", core.serialization.string().optional()),
    appliedDate: core.serialization.property("applied_date", core.serialization.date().optional()),
    relatedObjectId: core.serialization.property("related_object_id", core.serialization.string().optional()),
    relatedObjectType: core.serialization.property("related_object_type", core.serialization.string().optional()),
});

export declare namespace PaymentLineItem {
    interface Raw {
        id?: string | null;
        remote_id?: string | null;
        created_at?: string | null;
        modified_at?: string | null;
        applied_amount?: string | null;
        applied_date?: string | null;
        related_object_id?: string | null;
        related_object_type?: string | null;
    }
}
