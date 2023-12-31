/**
 * This file was auto-generated by Fern from our API Definition.
 */

import * as serializers from "../../..";
import * as Merge from "../../../../api";
import * as core from "../../../../core";

export const EmployeeRequestEthnicity: core.serialization.Schema<
    serializers.hris.EmployeeRequestEthnicity.Raw,
    Merge.hris.EmployeeRequestEthnicity
> = core.serialization.undiscriminatedUnion([
    core.serialization.lazy(async () => (await import("../../..")).hris.EthnicityEnum),
    core.serialization.string(),
]);

export declare namespace EmployeeRequestEthnicity {
    type Raw = serializers.hris.EthnicityEnum.Raw | string;
}
