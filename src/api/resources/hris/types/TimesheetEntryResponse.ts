/**
 * This file was auto-generated by Fern from our API Definition.
 */

import * as Merge from "../../../index";

export interface TimesheetEntryResponse {
    model: Merge.hris.TimesheetEntry;
    warnings: Merge.hris.WarningValidationProblem[];
    errors: Merge.hris.ErrorValidationProblem[];
    logs?: Merge.hris.DebugModeLog[];
}
