/**
 * This file was auto-generated by Fern from our API Definition.
 */

import * as serializers from "../../../index";
import * as Merge from "../../../../api/index";
import * as core from "../../../../core";
import { WarningValidationProblem } from "./WarningValidationProblem";
import { ErrorValidationProblem } from "./ErrorValidationProblem";
import { DebugModeLog } from "./DebugModeLog";

export const EmployeeResponse: core.serialization.ObjectSchema<
    serializers.hris.EmployeeResponse.Raw,
    Merge.hris.EmployeeResponse
> = core.serialization.object({
    model: core.serialization.lazyObject(() => serializers.hris.Employee),
    warnings: core.serialization.list(WarningValidationProblem),
    errors: core.serialization.list(ErrorValidationProblem),
    logs: core.serialization.list(DebugModeLog).optional(),
});

export declare namespace EmployeeResponse {
    interface Raw {
        model: serializers.hris.Employee.Raw;
        warnings: WarningValidationProblem.Raw[];
        errors: ErrorValidationProblem.Raw[];
        logs?: DebugModeLog.Raw[] | null;
    }
}
