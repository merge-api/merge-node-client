/**
 * This file was auto-generated by Fern from our API Definition.
 */

import * as serializers from "../../..";
import * as Merge from "../../../../api";
import * as core from "../../../../core";

export const PatchedPaymentRequestTrackingCategoriesItem: core.serialization.Schema<
    serializers.accounting.PatchedPaymentRequestTrackingCategoriesItem.Raw,
    Merge.accounting.PatchedPaymentRequestTrackingCategoriesItem
> = core.serialization.undiscriminatedUnion([
    core.serialization.string(),
    core.serialization.lazyObject(async () => (await import("../../..")).accounting.TrackingCategory),
]);

export declare namespace PatchedPaymentRequestTrackingCategoriesItem {
    type Raw = string | serializers.accounting.TrackingCategory.Raw;
}
