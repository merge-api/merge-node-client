/**
 * This file was auto-generated by Fern from our API Definition.
 */

import * as serializers from "../../../index";
import * as Merge from "../../../../api/index";
import * as core from "../../../../core";

export const TimeOffBalanceEmployee: core.serialization.Schema<
    serializers.hris.TimeOffBalanceEmployee.Raw,
    Merge.hris.TimeOffBalanceEmployee
> = core.serialization.undiscriminatedUnion([
    core.serialization.string(),
    core.serialization.lazyObject(() => serializers.hris.Employee),
]);

export declare namespace TimeOffBalanceEmployee {
    type Raw = string | serializers.hris.Employee.Raw;
}
