/**
 * This file was auto-generated by Fern from our API Definition.
 */

import * as serializers from "../../..";
import * as Merge from "../../../../api";
import * as core from "../../../../core";

export const InvoiceType: core.serialization.Schema<
    serializers.accounting.InvoiceType.Raw,
    Merge.accounting.InvoiceType
> = core.serialization.undiscriminatedUnion([
    core.serialization.lazy(async () => (await import("../../..")).accounting.InvoiceTypeEnum),
    core.serialization.string(),
]);

export declare namespace InvoiceType {
    type Raw = serializers.accounting.InvoiceTypeEnum.Raw | string;
}
