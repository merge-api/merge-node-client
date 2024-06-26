/**
 * This file was auto-generated by Fern from our API Definition.
 */

import * as serializers from "../../..";
import * as Merge from "../../../../api";
import * as core from "../../../../core";

export const PatchedPaymentRequestType: core.serialization.Schema<
    serializers.accounting.PatchedPaymentRequestType.Raw,
    Merge.accounting.PatchedPaymentRequestType
> = core.serialization.undiscriminatedUnion([
    core.serialization.lazy(async () => (await import("../../..")).accounting.PaymentTypeEnum),
    core.serialization.string(),
]);

export declare namespace PatchedPaymentRequestType {
    type Raw = serializers.accounting.PaymentTypeEnum.Raw | string;
}
