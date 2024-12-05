/**
 * This file was auto-generated by Fern from our API Definition.
 */

import * as Merge from "../../../index";

export interface ApplicationResponse {
    model: Merge.ats.Application;
    warnings: Merge.ats.WarningValidationProblem[];
    errors: Merge.ats.ErrorValidationProblem[];
    logs?: Merge.ats.DebugModeLog[];
}
