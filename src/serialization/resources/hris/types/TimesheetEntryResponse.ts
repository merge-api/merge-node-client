/**
 * This file was auto-generated by Fern from our API Definition.
 */

import * as serializers from "../../../index";
import * as Merge from "../../../../api/index";
import * as core from "../../../../core";
import { TimesheetEntry } from "./TimesheetEntry";
import { WarningValidationProblem } from "./WarningValidationProblem";
import { ErrorValidationProblem } from "./ErrorValidationProblem";
import { DebugModeLog } from "./DebugModeLog";

export const TimesheetEntryResponse: core.serialization.ObjectSchema<
    serializers.hris.TimesheetEntryResponse.Raw,
    Merge.hris.TimesheetEntryResponse
> = core.serialization.object({
    model: TimesheetEntry,
    warnings: core.serialization.list(WarningValidationProblem),
    errors: core.serialization.list(ErrorValidationProblem),
    logs: core.serialization.list(DebugModeLog).optional(),
});

export declare namespace TimesheetEntryResponse {
    export interface Raw {
        model: TimesheetEntry.Raw;
        warnings: WarningValidationProblem.Raw[];
        errors: ErrorValidationProblem.Raw[];
        logs?: DebugModeLog.Raw[] | null;
    }
}
