/**
 * This file was auto-generated by Fern from our API Definition.
 */

import * as serializers from "../../..";
import * as Merge from "../../../../api";
import * as core from "../../../../core";

export const CreditNotePaymentsItem: core.serialization.Schema<
    serializers.accounting.CreditNotePaymentsItem.Raw,
    Merge.accounting.CreditNotePaymentsItem
> = core.serialization.undiscriminatedUnion([
    core.serialization.string(),
    core.serialization.lazyObject(async () => (await import("../../..")).accounting.Payment),
]);

export declare namespace CreditNotePaymentsItem {
    type Raw = string | serializers.accounting.Payment.Raw;
}
