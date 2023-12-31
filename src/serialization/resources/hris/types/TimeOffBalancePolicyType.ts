/**
 * This file was auto-generated by Fern from our API Definition.
 */

import * as serializers from "../../..";
import * as Merge from "../../../../api";
import * as core from "../../../../core";

export const TimeOffBalancePolicyType: core.serialization.Schema<
    serializers.hris.TimeOffBalancePolicyType.Raw,
    Merge.hris.TimeOffBalancePolicyType
> = core.serialization.undiscriminatedUnion([
    core.serialization.lazy(async () => (await import("../../..")).hris.PolicyTypeEnum),
    core.serialization.string(),
]);

export declare namespace TimeOffBalancePolicyType {
    type Raw = serializers.hris.PolicyTypeEnum.Raw | string;
}
