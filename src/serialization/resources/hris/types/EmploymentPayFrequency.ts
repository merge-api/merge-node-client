/**
 * This file was auto-generated by Fern from our API Definition.
 */

import * as serializers from "../../..";
import * as Merge from "../../../../api";
import * as core from "../../../../core";

export const EmploymentPayFrequency: core.serialization.Schema<
    serializers.hris.EmploymentPayFrequency.Raw,
    Merge.hris.EmploymentPayFrequency
> = core.serialization.undiscriminatedUnion([
    core.serialization.lazy(async () => (await import("../../..")).hris.PayFrequencyEnum),
    core.serialization.string(),
]);

export declare namespace EmploymentPayFrequency {
    type Raw = serializers.hris.PayFrequencyEnum.Raw | string;
}
