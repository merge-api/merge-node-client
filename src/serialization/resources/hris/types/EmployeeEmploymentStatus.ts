/**
 * This file was auto-generated by Fern from our API Definition.
 */

import * as serializers from "../../..";
import * as Merge from "../../../../api";
import * as core from "../../../../core";

export const EmployeeEmploymentStatus: core.serialization.Schema<
    serializers.hris.EmployeeEmploymentStatus.Raw,
    Merge.hris.EmployeeEmploymentStatus
> = core.serialization.undiscriminatedUnion([
    core.serialization.lazy(async () => (await import("../../..")).hris.EmploymentStatusEnum),
    core.serialization.string(),
]);

export declare namespace EmployeeEmploymentStatus {
    type Raw = serializers.hris.EmploymentStatusEnum.Raw | string;
}
