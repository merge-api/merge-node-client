/**
 * This file was auto-generated by Fern from our API Definition.
 */

import * as Merge from "../../../index";

export interface CrmCustomObjectResponse {
    model: Merge.crm.CustomObject;
    warnings: Merge.crm.WarningValidationProblem[];
    errors: Merge.crm.ErrorValidationProblem[];
    logs?: Merge.crm.DebugModeLog[];
}
