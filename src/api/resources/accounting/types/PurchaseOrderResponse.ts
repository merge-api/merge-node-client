/**
 * This file was auto-generated by Fern from our API Definition.
 */

import * as Merge from "../../../index";

export interface PurchaseOrderResponse {
    model: Merge.accounting.PurchaseOrder;
    warnings: Merge.accounting.WarningValidationProblem[];
    errors: Merge.accounting.ErrorValidationProblem[];
    logs?: Merge.accounting.DebugModeLog[];
}
