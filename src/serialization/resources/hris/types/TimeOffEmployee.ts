/**
 * This file was auto-generated by Fern from our API Definition.
 */

import * as serializers from "../../..";
import * as Merge from "../../../../api";
import * as core from "../../../../core";

export const TimeOffEmployee: core.serialization.Schema<
    serializers.hris.TimeOffEmployee.Raw,
    Merge.hris.TimeOffEmployee
> = core.serialization.undiscriminatedUnion([
    core.serialization.string(),
    core.serialization.lazyObject(async () => (await import("../../..")).hris.Employee),
]);

export declare namespace TimeOffEmployee {
    type Raw = string | serializers.hris.Employee.Raw;
}
