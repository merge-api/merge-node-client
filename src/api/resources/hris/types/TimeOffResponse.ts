/**
 * This file was auto-generated by Fern from our API Definition.
 */

import * as Merge from "../../../index";

export interface TimeOffResponse {
    model: Merge.hris.TimeOff;
    warnings: Merge.hris.WarningValidationProblem[];
    errors: Merge.hris.ErrorValidationProblem[];
    logs?: Merge.hris.DebugModeLog[];
}
