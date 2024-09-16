/**
 * This file was auto-generated by Fern from our API Definition.
 */

import * as serializers from "../../..";
import * as Merge from "../../../../api";
import * as core from "../../../../core";

export const ItemPurchaseTaxRate: core.serialization.Schema<
    serializers.accounting.ItemPurchaseTaxRate.Raw,
    Merge.accounting.ItemPurchaseTaxRate
> = core.serialization.undiscriminatedUnion([
    core.serialization.string(),
    core.serialization.lazyObject(async () => (await import("../../..")).accounting.TaxRate),
]);

export declare namespace ItemPurchaseTaxRate {
    type Raw = string | serializers.accounting.TaxRate.Raw;
}
