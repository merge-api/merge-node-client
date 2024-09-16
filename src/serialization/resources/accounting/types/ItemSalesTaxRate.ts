/**
 * This file was auto-generated by Fern from our API Definition.
 */

import * as serializers from "../../..";
import * as Merge from "../../../../api";
import * as core from "../../../../core";

export const ItemSalesTaxRate: core.serialization.Schema<
    serializers.accounting.ItemSalesTaxRate.Raw,
    Merge.accounting.ItemSalesTaxRate
> = core.serialization.undiscriminatedUnion([
    core.serialization.string(),
    core.serialization.lazyObject(async () => (await import("../../..")).accounting.TaxRate),
]);

export declare namespace ItemSalesTaxRate {
    type Raw = string | serializers.accounting.TaxRate.Raw;
}
