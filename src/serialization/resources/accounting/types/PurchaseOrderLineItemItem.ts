/**
 * This file was auto-generated by Fern from our API Definition.
 */

import * as serializers from "../../..";
import * as Merge from "../../../../api";
import * as core from "../../../../core";

export const PurchaseOrderLineItemItem: core.serialization.Schema<
    serializers.accounting.PurchaseOrderLineItemItem.Raw,
    Merge.accounting.PurchaseOrderLineItemItem
> = core.serialization.undiscriminatedUnion([
    core.serialization.string(),
    core.serialization.lazyObject(async () => (await import("../../..")).accounting.Item),
]);

export declare namespace PurchaseOrderLineItemItem {
    type Raw = string | serializers.accounting.Item.Raw;
}
